var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#OffsetArrays.jl-1",
    "page": "Readme",
    "title": "OffsetArrays.jl",
    "category": "section",
    "text": "OffsetArrays provides Julia users with arrays that have arbitrary indices, similar to those found in some other programming languages like Fortran.julia> using OffsetArrays\n\njulia> y = OffsetArray{Float64}(undef, -1:1, -7:7, -128:512, -5:5, -1:1, -3:3, -2:2, -1:1);\n\njulia> summary(y)\n\"OffsetArrays.OffsetArray{Float64,8,Array{Float64,8}} with indices -1:1×-7:7×-128:512×-5:5×-1:1×-3:3×-2:2×-1:1\"\n\njulia> y[-1,-7,-128,-5,-1,-3,-2,-1] = 14\n14\n\njulia> y[-1,-7,-128,-5,-1,-3,-2,-1] += 5\n19.0"
},

{
    "location": "#Notes-on-supporting-OffsetArrays-1",
    "page": "Readme",
    "title": "Notes on supporting OffsetArrays",
    "category": "section",
    "text": "Julia supports generic programming with arrays that doesn\'t require you to assume that indices start with 1, see the documentation."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [OffsetArrays]\nOrder = [:type, :function]"
},

]}
