var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Hiccup-1",
    "page": "Readme",
    "title": "Hiccup",
    "category": "section",
    "text": "Pkg.add(\"Hiccup\")Hiccup.jl is a super-simple library designed to make making HTML easy in Julia. It\'s heavily inspired by Clojure\'s Hiccup DSL.julia> using Hiccup\n\njulia> Hiccup.div(\"#foo.bar\", \"hi\")\n<div class=\"bar\" id=\"foo\">hi</div>HTML nodes are stored as the Node{T} type which renders itself smartly.julia> Node(:img, \"#id.class1.class2\", Dict(:src=>\"http://www.com\"))\n<img src=\"http://www.com\" id=\"id\" class=\"class1 class2\" />\n\njulia> tag(ans)\n:imgA bunch of utility functions, with the names of tags, are provided which make this a bit more legible. You can import more with @tags:julia> @tags img, svg\n\njulia> svg(\"#id.class1.class2\", Dict(:src=>\"http://www.com\"))\n<svg class=\"class1 class2\" src=\"http://www.com\" id=\"id\"></svg>And that\'s basically it."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hiccup]\nOrder = [:type, :function]"
},

]}
