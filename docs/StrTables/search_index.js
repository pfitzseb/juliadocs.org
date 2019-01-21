var documenterSearchIndex = {"docs": [

{
    "location": "#StrTables.AbstractEntityTable",
    "page": "Home",
    "title": "StrTables.AbstractEntityTable",
    "category": "type",
    "text": "Abstract type for Entity tables: Supports lookupname, matchchar, matches, longestmatches, completions\n\n\n\n\n\n"
},

{
    "location": "#StrTables.PackedTable",
    "page": "Home",
    "title": "StrTables.PackedTable",
    "category": "type",
    "text": "Compact table Designed to save memory compared to a Vector{Vector{S}} Allows for fast lookup of ranges when input was sorted Can be saved/loaded to/from a file quickly\n\n\n\n\n\n"
},

{
    "location": "#StrTables.PackedTable-Union{Tuple{Array{T,1}}, Tuple{T}} where T",
    "page": "Home",
    "title": "StrTables.PackedTable",
    "category": "method",
    "text": "Make a single table of a vector of elements of type T\n\n\n\n\n\n"
},

{
    "location": "#StrTables.StrTable",
    "page": "Home",
    "title": "StrTables.StrTable",
    "category": "type",
    "text": "Compact string table Designed to save memory compared to a Vector{String} Allows for fast lookup of ranges when input was sorted Can be saved/loaded to/from a file quickly\n\n\n\n\n\n"
},

{
    "location": "#StrTables.completions",
    "page": "Home",
    "title": "StrTables.completions",
    "category": "function",
    "text": "Given a string, return all of the entity names that start with that string, if any\n\n\n\n\n\n"
},

{
    "location": "#StrTables.longestmatches",
    "page": "Home",
    "title": "StrTables.longestmatches",
    "category": "function",
    "text": "Given a string, return all of the longest matches to the beginning of the string as a vector\n\n\n\n\n\n"
},

{
    "location": "#StrTables.lookupname",
    "page": "Home",
    "title": "StrTables.lookupname",
    "category": "function",
    "text": "Given an entity name, return the string it represents, or an empty string if not found\n\n\n\n\n\n"
},

{
    "location": "#StrTables.matchchar",
    "page": "Home",
    "title": "StrTables.matchchar",
    "category": "function",
    "text": "Given a character, return all exact matches to the character as a vector\n\n\n\n\n\n"
},

{
    "location": "#StrTables.matches",
    "page": "Home",
    "title": "StrTables.matches",
    "category": "function",
    "text": "Given a string, return all exact matches to the string as a vector\n\n\n\n\n\n"
},

{
    "location": "#StrTables.load-Tuple{AbstractString}",
    "page": "Home",
    "title": "StrTables.load",
    "category": "method",
    "text": "Return a Vector{Any} with data tables loaded from file\n\n\n\n\n\n"
},

{
    "location": "#StrTables.load-Tuple{IO}",
    "page": "Home",
    "title": "StrTables.load",
    "category": "method",
    "text": "Return a Vector{Any} with data tables loaded from IO\n\n\n\n\n\n"
},

{
    "location": "#StrTables.matchfirst-Tuple{AbstractPackedTable,Any}",
    "page": "Home",
    "title": "StrTables.matchfirst",
    "category": "method",
    "text": "Return a vector of values that whose beginning matches the string\n\n\n\n\n\n"
},

{
    "location": "#StrTables.matchfirstrng-Tuple{AbstractPackedTable,AbstractString}",
    "page": "Home",
    "title": "StrTables.matchfirstrng",
    "category": "method",
    "text": "Return the range of indices of values that whose beginning matches the string\n\n\n\n\n\n"
},

{
    "location": "#StrTables.read_value-Tuple{IO}",
    "page": "Home",
    "title": "StrTables.read_value",
    "category": "method",
    "text": "Read a single StrTable, String, UInt, or Vector of UInt value from the io device\n\n\n\n\n\n"
},

{
    "location": "#StrTables.save-Tuple{AbstractString,Any}",
    "page": "Home",
    "title": "StrTables.save",
    "category": "method",
    "text": "Save a collection of values (StrTable, String, Float, UInt, Int*) into a file\n\n\n\n\n\n"
},

{
    "location": "#StrTables.save-Tuple{IO,Any}",
    "page": "Home",
    "title": "StrTables.save",
    "category": "method",
    "text": "Save a collection of values (StrTable, String, Float, UInt, Int*) into an IO object\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [StrTables]\nOrder = [:type, :function]"
},

]}
