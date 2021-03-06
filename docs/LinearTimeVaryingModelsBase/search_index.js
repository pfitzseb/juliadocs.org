var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#LinearTimeVaryingModelsBase-1",
    "page": "Readme",
    "title": "LinearTimeVaryingModelsBase",
    "category": "section",
    "text": "(Image: Build Status)(Image: Coverage Status)(Image: codecov.io)"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.AbstractCost",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.AbstractCost",
    "category": "type",
    "text": "Cost interface, implement the following functions\n\nsee also AbstractModel, ModelAndCost\n\nfunction calculate_cost(::Type{AbstractCost}, x::AbstractVector, u)::Number\n\nfunction calculate_cost(::Type{AbstractCost}, x::AbstractMatrix, u)::AbstractVector\n\nfunction calculate_final_cost(::Type{AbstractCost}, x::AbstractVector)::Number\n\nfunction dc(::Type{AbstractCost}, x, u)\n    return cx,cu,cxx,cuu,cxu\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.AbstractModel",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.AbstractModel",
    "category": "type",
    "text": "Model interface, implement the following functions\n\nsee also AbstractCost, ModelAndCost\n\nfit_model(::Type{AbstractModel}, batch::Batch)::AbstractModel\n\npredict(model::AbstractModel, x, u)\n\nfunction df(model::AbstractModel, x, u, I::UnitRange)\n    return fx,fu,fxx,fxu,fuu\nend\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.ModelAndCost",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.ModelAndCost",
    "category": "type",
    "text": "Define types that implement the interfaces AbstractModel and AbstractCost.\nCreate object modelcost = ModelAndCost(model, cost)\nRun macro @definemodelcostfunctions(modelcost). This macro defines the following functions\n\nf(x, u, i)  = f(modelcost, x, u, i)\nfT(x)       = fT(modelcost, x)\ndf(x, u, I) = df(modelcost, x, u, I)\n\nsee also AbstractModel, AbstractCost\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.df-Tuple{AbstractModel,Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.df",
    "category": "method",
    "text": "fx,fu,fxx,fxu,fuu = df(model::AbstractModel, x, u)\n\nGet the linearized dynamics at x,u\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.df-Tuple{ModelAndCost,Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.df",
    "category": "method",
    "text": "fx,fu,fxx,fxu,fuu,cx,cu,cxx,cxu,cuu = df(modelcost::ModelAndCost, x, u)\n\nGet the linearized dynamics and cost at x,u\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.predict-Tuple{AbstractModel,Any,Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.predict",
    "category": "method",
    "text": "xnew = predict(model::AbstractModel, t::Trajectory [, i])\nxnew = predict(model::AbstractModel, x, u [, i])\n\nPredict the next state given the current state and action\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.simulate-Tuple{AbstractModel,Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.simulate",
    "category": "method",
    "text": "xnew = simulate(model::AbstractModel, t::Trajectory)\nxnew = simulate(model::AbstractModel, x0, u)\n\nSimulate system forward in time given the initial state and actions\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.fit_model!-Tuple{AbstractModel,Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.fit_model!",
    "category": "method",
    "text": "fit_model!(model::AbstractModel, x,u)::AbstractModel\n\nRefits a model to new data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#LinearTimeVaryingModelsBase.fit_model-Tuple{Type{AbstractModel},Any,Any}",
    "page": "Docstrings",
    "title": "LinearTimeVaryingModelsBase.fit_model",
    "category": "method",
    "text": "model = fit_model(::Type{AbstractModel}, x,u)::AbstractModel\n\nFits a model to data\n\n\n\n\n\n"
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [LinearTimeVaryingModelsBase]\nOrder = [:type, :function]"
},

]}
