var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hose.jl-1",
    "page": "Readme",
    "title": "Hose.jl",
    "category": "section",
    "text": "(Image: Build Status)Hose.jl is for the situations where pipe is just not flexible enough.    @hose(expression)The @hose macro processes its argument so that you pipe the left hand side (LHS) into functions of several arguments, macros, blocks, just index the LHS etc. The placeholder symbol for the LHS on the RHS is the underscore (_).Examples:    @hose a |> b(x, _) # produces b(x, a)\n    @hose a |> _[b] # produces a[b]\n    @hose a |> @testmacro _ b # equivalent of @testmacro(a, b)Also behaves like Lazy.jl @> macro:    @hose a |> b(x) # produces b(a, x)\n    @hose a |> @testmacro # produces equivalent of @testmacro(a)Standard piping works as well. For other examples see test/runtests.jl.Kudos to Pipe.jl which I basically shamelessly forked for creating this package."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hose]\nOrder = [:type, :function]"
},

]}
