var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Arpack",
    "title": "Arpack",
    "category": "page",
    "text": ""
},

{
    "location": "#Arpack.eigs-Tuple{Any}",
    "page": "Arpack",
    "title": "Arpack.eigs",
    "category": "method",
    "text": "eigs(A; nev=6, ncv=max(20,2*nev+1), which=:LM, tol=0.0, maxiter=300, sigma=nothing, ritzvec=true, v0=zeros((0,))) -> (d,[v,],nconv,niter,nmult,resid)\n\nComputes eigenvalues d of A using implicitly restarted Lanczos or Arnoldi iterations for real symmetric or general nonsymmetric matrices respectively. See the manual for more information.\n\neigs returns the nev requested eigenvalues in d, the corresponding Ritz vectors v (only if ritzvec=true), the number of converged eigenvalues nconv, the number of iterations niter and the number of matrix vector multiplications nmult, as well as the final residual vector resid.\n\nExamples\n\njulia> using Arpack\n\njulia> A = Diagonal(1:4);\n\njulia> λ, ϕ = eigs(A, nev = 2);\n\njulia> λ\n2-element Array{Float64,1}:\n 4.0\n 3.0\n\n\n\n\n\n"
},

{
    "location": "#Arpack.eigs-Tuple{Any,Any}",
    "page": "Arpack",
    "title": "Arpack.eigs",
    "category": "method",
    "text": "eigs(A, B; nev=6, ncv=max(20,2*nev+1), which=:LM, tol=0.0, maxiter=300, sigma=nothing, ritzvec=true, v0=zeros((0,))) -> (d,[v,],nconv,niter,nmult,resid)\n\nComputes generalized eigenvalues d of A and B using implicitly restarted Lanczos or Arnoldi iterations for real symmetric or general nonsymmetric matrices respectively. See the manual for more information.\n\n\n\n\n\n"
},

{
    "location": "#Arpack.svds",
    "page": "Arpack",
    "title": "Arpack.svds",
    "category": "function",
    "text": "svds(A; nsv=6, ritzvec=true, tol=0.0, maxiter=1000, ncv=2*nsv, v0=zeros((0,))) -> (SVD([left_sv,] s, [right_sv,]), nconv, niter, nmult, resid)\n\nComputes the largest singular values s of A using implicitly restarted Lanczos iterations derived from eigs.\n\nInputs\n\nA: Linear operator whose singular values are desired. A may be represented as a subtype of AbstractArray, e.g., a sparse matrix, or any other type supporting the four methods size(A), eltype(A), A * vector, and A\' * vector.\nnsv: Number of singular values. Default: 6.\nritzvec: If true, return the left and right singular vectors left_sv and right_sv.  If false, omit the singular vectors. Default: true.\ntol: tolerance, see eigs.\nmaxiter: Maximum number of iterations, see eigs. Default: 1000.\nncv: Maximum size of the Krylov subspace, see eigs (there called nev). Default: 2*nsv.\nv0: Initial guess for the first Krylov vector. It may have length min(size(A)...), or 0.\n\nOutputs\n\nsvd: An SVD object containing the left singular vectors, the requested values, and the right singular vectors. If ritzvec = false, the left and right singular vectors will be empty.\nnconv: Number of converged singular values.\nniter: Number of iterations.\nnmult: Number of matrix–vector products used.\nresid: Final residual vector.\n\nExamples\n\njulia> A = Diagonal(1:4);\n\njulia> s = svds(A, nsv = 2)[1];\n\njulia> s.S\n2-element Array{Float64,1}:\n 4.0\n 2.9999999999999996\n\nnote: Implementation\nsvds(A) is formally equivalent to calling eigs to perform implicitly restarted Lanczos tridiagonalization on the Hermitian matrix A^prime A or AA^prime such that the size is smallest.\n\n\n\n\n\n"
},

{
    "location": "#lib-itereigen-1",
    "page": "Arpack",
    "title": "Arpack",
    "category": "section",
    "text": "DocTestSetup = :(using Arpack, LinearAlgebra, SparseArrays)This package provides bindings to ARPACK, which can be used to perform iterative solutions for eigensystems (using eigs) or singular value decompositions (using svds).eigs calculates the eigenvalues and, optionally, eigenvectors of its input(s) using implicitly restarted Lanczos or Arnoldi iterations for real symmetric or general nonsymmetric matrices respectively.For the single matrix version,eigs(A; nev=6, ncv=max(20,2*nev+1), which=:LM, tol=0.0, maxiter=300, sigma=nothing, ritzvec=true, v0=zeros((0,))) -> (d,[v,],nconv,niter,nmult,resid)the following keyword arguments are supported:nev: Number of eigenvalues\nncv: Number of Krylov vectors used in the computation; should satisfy nev+1 <= ncv <= n for real symmetric problems and nev+2 <= ncv <= n for other problems, where n is the size of the input matrix A. The default is ncv = max(20,2*nev+1). Note that these restrictions limit the input matrix A to be of dimension at least 2.\nwhich: type of eigenvalues to compute. See the note below.which type of eigenvalues\n:LM eigenvalues of largest magnitude (default)\n:SM eigenvalues of smallest magnitude\n:LR eigenvalues of largest real part\n:SR eigenvalues of smallest real part\n:LI eigenvalues of largest imaginary part (nonsymmetric or complex A only)\n:SI eigenvalues of smallest imaginary part (nonsymmetric or complex A only)\n:BE compute half of the eigenvalues from each end of the spectrum, biased in favor of the high end. (real symmetric A only)tol: parameter defining the relative tolerance for convergence of Ritz values (eigenvalue estimates).    A Ritz value θ is considered converged when its associated residual    is less than or equal to the product of tol and max(ɛ^23 θ),    where ɛ = eps(real(eltype(A)))/2 is LAPACK\'s machine epsilon.    The residual associated with θ and its corresponding Ritz vector v    is defined as the norm Av - vθ.    The specified value of tol should be positive; otherwise, it is ignored    and ɛ is used instead.    Default: ɛ.\nmaxiter: Maximum number of iterations (default = 300)\nsigma: Specifies the level shift used in inverse iteration. If nothing (default), defaults to ordinary (forward) iterations. Otherwise, find eigenvalues close to sigma using shift and invert iterations.\nritzvec: Returns the Ritz vectors v (eigenvectors) if true\nv0: starting vector from which to start the iterationsWe can see the various keywords in action in the following examples:julia> A = Diagonal(1:4);\n\njulia> λ, ϕ = eigs(A, nev = 2, which=:SM);\n\njulia> λ\n2-element Array{Float64,1}:\n 1.0000000000000002\n 2.0\n\njulia> B = Diagonal([1., 2., -3im, 4im]);\n\njulia> λ, ϕ = eigs(B, nev=1, which=:LI);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n 1.3322676295501878e-15 + 4.0im\n\njulia> λ, ϕ = eigs(B, nev=1, which=:SI);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n -2.498001805406602e-16 - 3.0000000000000018im\n\njulia> λ, ϕ = eigs(B, nev=1, which=:LR);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n 2.0000000000000004 + 4.0615212488780827e-17im\n\njulia> λ, ϕ = eigs(B, nev=1, which=:SR);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n -8.881784197001252e-16 + 3.999999999999997im\n\njulia> λ, ϕ = eigs(B, nev=1, sigma=1.5);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n 1.0000000000000004 + 4.0417078924070745e-18imnote: Note\nThe sigma and which keywords interact: the description of eigenvalues searched for by which do not necessarily refer to the eigenvalues of A, but rather the linear operator constructed by the specification of the iteration mode implied by sigma.sigma iteration mode which refers to eigenvalues of\nnothing ordinary (forward) A\nreal or complex inverse with level shift sigma (A - sigma I )^-1note: Note\nAlthough tol has a default value, the best choice depends strongly on the matrix A. We recommend that users always specify a value for tol which suits their specific needs.For details of how the errors in the computed eigenvalues are estimated, see:B. N. Parlett, \"The Symmetric Eigenvalue Problem\", SIAM: Philadelphia, 2/e (1998), Ch. 13.2, \"Accessing Accuracy in Lanczos Problems\", pp. 290-292 ff.\nR. B. Lehoucq and D. C. Sorensen, \"Deflation Techniques for an Implicitly Restarted Arnoldi Iteration\", SIAM Journal on Matrix Analysis and Applications (1996), 17(4), 789–821.  doi:10.1137/S0895479895281484For the two-input generalized eigensolution version,eigs(A, B; nev=6, ncv=max(20,2*nev+1), which=:LM, tol=0.0, maxiter=300, sigma=nothing, ritzvec=true, v0=zeros((0,))) -> (d,[v,],nconv,niter,nmult,resid)the following keyword arguments are supported:nev: Number of eigenvalues\nncv: Number of Krylov vectors used in the computation; should satisfy nev+1 <= ncv <= n for real symmetric problems and nev+2 <= ncv <= n for other problems, where n is the size of the input matrices A and B. The default is ncv = max(20,2*nev+1). Note that these restrictions limit the input matrix A to be of dimension at least 2.\nwhich: type of eigenvalues to compute. See the note below.which type of eigenvalues\n:LM eigenvalues of largest magnitude (default)\n:SM eigenvalues of smallest magnitude\n:LR eigenvalues of largest real part\n:SR eigenvalues of smallest real part\n:LI eigenvalues of largest imaginary part (nonsymmetric or complex A only)\n:SI eigenvalues of smallest imaginary part (nonsymmetric or complex A only)\n:BE compute half of the eigenvalues from each end of the spectrum, biased in favor of the high end. (real symmetric A only)tol: relative tolerance used in the convergence criterion for eigenvalues, similar to    tol in the eigs(A) method for the ordinary eigenvalue    problem, but effectively for the eigenvalues of B^-1 A instead of A.    See the documentation for the ordinary eigenvalue problem in    eigs(A) and the accompanying note about tol.\nmaxiter: Maximum number of iterations (default = 300)\nsigma: Specifies the level shift used in inverse iteration. If nothing (default), defaults to ordinary (forward) iterations. Otherwise, find eigenvalues close to sigma using shift and invert iterations.\nritzvec: Returns the Ritz vectors v (eigenvectors) if true\nv0: starting vector from which to start the iterationseigs returns the nev requested eigenvalues in d, the corresponding Ritz vectors v (only if ritzvec=true), the number of converged eigenvalues nconv, the number of iterations niter and the number of matrix vector multiplications nmult, as well as the final residual vector resid.We can see the various keywords in action in the following examples:julia> A = sparse(1.0I, 4, 4); B = Diagonal(1:4);\n\njulia> λ, ϕ = eigs(A, B, nev = 2);\n\njulia> λ\n2-element Array{Float64,1}:\n 1.0000000000000002\n 0.5\n\njulia> A = Diagonal([1, -2im, 3, 4im]); B = sparse(1.0I, 4, 4);\n\njulia> λ, ϕ = eigs(A, B, nev=1, which=:SI);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n -1.5720931501039814e-16 - 1.9999999999999984im\n\njulia> λ, ϕ = eigs(A, B, nev=1, which=:LI);\n\njulia> λ\n1-element Array{Complex{Float64},1}:\n 0.0 + 4.000000000000002imnote: Note\nThe sigma and which keywords interact: the description of eigenvalues searched for by which do not necessarily refer to the eigenvalue problem Av = Bvlambda, but rather the linear operator constructed by the specification of the iteration mode implied by sigma.sigma iteration mode which refers to the problem\nnothing ordinary (forward) Av = Bvlambda\nreal or complex inverse with level shift sigma (A - sigma B )^-1B = vnuArpack.eigs(::Any)\nArpack.eigs(::Any, ::Any)\nArpack.svdsDocTestSetup = nothing"
},

]}
