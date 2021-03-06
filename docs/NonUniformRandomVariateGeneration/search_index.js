var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Readme",
    "title": "Readme",
    "category": "page",
    "text": ""
},

{
    "location": "#Non-Uniform-Random-Variate-Generation-1",
    "page": "Readme",
    "title": "Non-Uniform Random Variate Generation",
    "category": "section",
    "text": "(Image: Build Status) (Image: Build status) (Image: Coverage Status) (Image: codecov.io)This package provides some non-uniform random variate generation schemes. They  can use specified random number generators, and hence can be used in multi-threaded applications with different random number generators associated to each thread.The current emphasis is on stateless algorithms with distribution parameters passed in.In the future, some of these approaches may be superseded by functionality in Distributions.jl.Currently includes generation of the following random variates:Binomial: W. Hörmann. The Generation of Binomial Random Variates, Journal of Statistical Computation and Simulation 46, 1993.\nMultinomial: using Binomial random variates.\nGamma: Marsaglia, G. and Tsang, W.W., 2000. A simple method for generating gamma variables. ACM Transactions on Mathematical Software (TOMS), 26(3).\nBeta: using Gamma random variates.\nPoisson: Ahrens, J.H. and Dieter, U., 1982. Computer generation of Poisson deviates from modified normal distributions. ACM Transactions on Mathematical Software (TOMS), 8(2), pp. 163-179.\nSorted Uniforms: Uniform spacing method, Algorithm B, p. 214 of L. Devroye. Non-uniform random variate generation. 1986.\nCategorical: using inversion with sorted uniforms. This method can be faster than the alias method, depending on the setting."
},

{
    "location": "autodocs/#",
    "page": "Docstrings",
    "title": "Docstrings",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [NonUniformRandomVariateGeneration]\nOrder = [:type, :function]"
},

]}
