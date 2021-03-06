"""
Generates a default documentation for a package without a docs folder
"""
function default_docs(package, root, pkgroot)
    doc_source = joinpath(root, "src")
    mkpath(doc_source)
    open(joinpath(doc_source, "autodocs.md"), "w") do io
        println(io, """
        Package doesn't contain Documenter docs.

        Docs automatically generated by juliadocs.org

        ```@autodocs
        Modules = [$package]
        Order = [:type, :function]
        ```
        """)
    end
    pages = ["Docstrings" => "autodocs.md"]
    readme = joinpath(pkgroot, "README.md")
    if isfile(readme)
        cp(readme, joinpath(doc_source, "index.md"))
        push!(pages, "Readme" => "index.md")
    end
    pkg_sym = Symbol(package)
    @eval Module() begin
        using Documenter
        using $pkg_sym
        makedocs(
            format = Documenter.HTML(),
            sitename = "$($package).jl",
            modules = [$pkg_sym],
            root = $root,
            pages = $(reverse(pages))
        )
    end
end

function parseall(str)
    pos = firstindex(str)
    exs = []
    while pos <= lastindex(str)
        ex, pos = Meta.parse(str, pos)
        push!(exs, ex)
    end
    if length(exs) == 0
        throw(ParseError("end of input"))
    elseif length(exs) == 1
        return exs[1]
    else
        return Expr(:block, exs...)
    end
end

"""
Rewrites the docs/make.jl for a given package to not deploy and respect
our build folders. This respects any custom scripts needed to build the docs
while disabling deploy + putting the right args into makedocs
"""
function rewrite_makefile(makefile)
    ast = parseall(read(makefile, String))
    make_expr = Expr(:block)
    buildpath = joinpath(dirname(makefile), "build")
    for elem in ast.args
        # skip deply(...) - we don't want to deploy
        Meta.isexpr(elem, :call) && elem.args[1] == :deploydocs && continue
        if Meta.isexpr(elem, :call) && elem.args[1] == :makedocs
            # rewrite makedoc call to respect our requirements
            new_args = []
            for argument in elem.args
                if Meta.isexpr(argument, :kw)
                    name, arg = argument.args
                    # assure that we generate HTML
                    if name == :format
                        argument.args[2] = :(Documenter.HTML())
                    end
                    # filter out root + build dir
                    if name == :build
                        # if there is a custom build folder, record it!
                        cd(dirname(makefile)) do
                            # uhm, joinpath(path1, path2) doesn't work...
                            # considering splitting this mayself, but this seems
                            # to be the easiest way to get the abspath respecting
                            # build path needs to be relative to root path
                            buildpath = abspath(arg)
                        end
                    end
                end
                push!(new_args, argument)
            end
            push!(new_args,
                Expr(:kw, :root, dirname(makefile)),
            )
            elem = Expr(:call, new_args...)
        end
        push!(make_expr.args, elem)
    end
    return make_expr, buildpath
end

struct PkgNoWork <: Exception
    name::String
end

function install_and_use(pspec)
    # add dependencies as well? will be trivial with a package containing Project.toml
    try
        Pkg.add(pspec)
    catch e
        throw(PkgNoWork(pspec.name))
    end
    pkg_sym = Symbol(pspec.name)
    # needs to be main, because documenter wants to have the symbol in main -.-
    pkg_module = try
        @eval(Main, (using $pkg_sym; $pkg_sym))
    catch e
        throw(PkgNoWork(pspec.name))
    end
    pkg_root = normpath(joinpath(dirname(pathof(pkg_module)), ".."))
    pkg_module, pkg_root
end
