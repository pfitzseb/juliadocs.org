var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#NLPModelsJuMP-1",
    "page": "Readme",
    "title": "NLPModelsJuMP",
    "category": "section",
    "text": "This package provides nonlinear programming models as implemented by NLPModels, through the use of JuMP.Disclaimer: NLPModelsJuMP is not developed or maintained by the JuMP developers.See the documentation on NLPModels for the general description of NLPModels. Here, we focus on the use of JuMP to create these."
},

{
    "location": "#NLPModels-from-a-JuMP-1",
    "page": "Readme",
    "title": "NLPModels from a JuMP",
    "category": "section",
    "text": "NLPModelsJuMP provides conversion between MathProgBase models and NLPModels."
},

{
    "location": "#LICENSE-1",
    "page": "Readme",
    "title": "LICENSE",
    "category": "section",
    "text": "This content is released under the MIT License. <a rel=\"license\" href=\"http://opensource.org/licenses/MIT\"> <img alt=\"MIT license\" height=\"40\" src=\"http://upload.wikimedia.org/wikipedia/commons/c/c3/License_icon-mit.svg\" /></a>"
},

{
    "location": "autodocs/#NLPModelsJuMP.MathProgNLPModel-Tuple{JuMP.Model}",
    "page": "Docstrings",
    "title": "NLPModelsJuMP.MathProgNLPModel",
    "category": "method",
    "text": "Construct a MathProgNLPModel from a JuMP Model.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModelsJuMP.MathProgNLPModel-Tuple{NLPModelsJuMP.MathProgModel}",
    "page": "Docstrings",
    "title": "NLPModelsJuMP.MathProgNLPModel",
    "category": "method",
    "text": "Construct a MathProgNLPModel from a MathProgModel.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModelsJuMP.MathProgNLSModel-Tuple{JuMP.Model,Array{JuMP.NonlinearExpression,1}}",
    "page": "Docstrings",
    "title": "NLPModelsJuMP.MathProgNLSModel",
    "category": "method",
    "text": "Construct a MathProgNLSModel from a JuMP Model and a vector of NLexpression.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModelsJuMP.MathProgNLSModel-Tuple{NLPModelsJuMP.MathProgModel,NLPModelsJuMP.MathProgModel}",
    "page": "Docstrings",
    "title": "NLPModelsJuMP.MathProgNLSModel",
    "category": "method",
    "text": "Construct a MathProgNLSModel from two MathProgModels.\n\n\n\n\n\n"
},

{
    "location": "autodocs/#NLPModelsJuMP.NLPtoMPB-Union{Tuple{T}, Tuple{T,AbstractMathProgSolver}} where T<:NLPModels.AbstractNLPModel",
    "page": "Docstrings",
    "title": "NLPModelsJuMP.NLPtoMPB",
    "category": "method",
    "text": "mp = NLPtoMPB(nlp, solver)\n\nReturn a MathProgBase model corresponding to an AbstractNLPModel.\n\nArguments\n\nnlp::AbstractNLPModel\nsolver::AbstractMathProgSolver a solver instance, e.g., IpoptSolver()\n\nCurrently, all models are treated as nonlinear models.\n\nReturn values\n\nThe function returns a MathProgBase model mpbmodel such that it should be possible to call\n\nMathProgBase.optimize!(mpbmodel)\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NLPModelsJuMP]\nOrder = [:type, :function]"
},

]}