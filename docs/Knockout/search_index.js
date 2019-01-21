var documenterSearchIndex = {"docs": [

{
    "location": "#Knockout.knockout",
    "page": "Home",
    "title": "Knockout.knockout",
    "category": "function",
    "text": "knockout(template, data=Dict(), extra_js = js\"\"; computed = [], methods = [])\n\nCreate a Knockout scope, with HTML structure provided by template and filled with data.\n\nArguments\n\ntemplate the Node that acts as the template. See Knockout syntax\ndata is either a dictionary or an array of propertyName => value pairs.\n\nIf a property\'s value is an observable, this function automatically sets up Julia -> JS communication. To set up JS to Julia communication set up an event handler on scope[propertyName] (by calling on(f, scope[propertyName])) before rendering the scope. You can specify that you want some knockout observable to be computed as a function of other observables, e.g knockout(...; computed = Dict(:fullName => @js function(){this.firstName() + \' \' + this.lastName()})). You can pass functions that you want available in the Knockout scope as keyword arguments to knockout E.g. knockout(...; methods=Dict(:sayhello=>@js function(){ alert(\"hello!\") }))\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Knockout]\nOrder = [:type, :function]"
},

]}