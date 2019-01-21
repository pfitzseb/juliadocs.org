var documenterSearchIndex = {"docs": [

{
    "location": "#Hive.HiveAuth",
    "page": "Home",
    "title": "Hive.HiveAuth",
    "category": "type",
    "text": "Authentication mechanisms Only SASL-Plain supported for now\n\n\n\n\n\n"
},

{
    "location": "#Hive.HiveSession",
    "page": "Home",
    "title": "Hive.HiveSession",
    "category": "type",
    "text": "HiveSession holds a connection and session status\n\n\n\n\n\n"
},

{
    "location": "#Hive.catalogs-Tuple{HiveSession}",
    "page": "Home",
    "title": "Hive.catalogs",
    "category": "method",
    "text": "Returns the list of catalogs (databases). Results are ordered by TABLE_CATALOG.\n\n\n\n\n\n"
},

{
    "location": "#Hive.columns-Tuple{HiveSession}",
    "page": "Home",
    "title": "Hive.columns",
    "category": "method",
    "text": "Returns a list of columns in the specified tables. Optional parameter catalog must contain a full catalog name. Optional parameters schema_pattern, table_pattern and column_pattern can contain a search pattern. Result Set Columns are the same as those for the ODBC CLIColumns function.\n\n\n\n\n\n"
},

{
    "location": "#Hive.execute-Tuple{HiveSession,AbstractString}",
    "page": "Home",
    "title": "Hive.execute",
    "category": "method",
    "text": "Execute a statement. Statement to be executed can be DML, DDL, SET, etc. Optional config parameter can have additional keyword parameters that will be passed as configuration      properties that are overlayed on top of the the existing session configuration before this statement     is executed. They apply to this statement only and are not permanent. When async is true, execution is asynchronous and a PendingResult may be returned. If the returned value is a PendingResult:     - Caller must call isready on a PendingResult instance to check for completion.     - Once ready, calling result on it returns ResultSet (the same PendingResult instance is returned if it is still not ready)\n\n\n\n\n\n"
},

{
    "location": "#Hive.functions-Tuple{HiveSession,AbstractString}",
    "page": "Home",
    "title": "Hive.functions",
    "category": "method",
    "text": "Returns a list of functions supported by the data source. Catalog name must match the catalog name as it is stored in the database; \"\" retrieves those without a catalog; null means that the catalog name should not be used to narrow the search. Schema name pattern must match the schema name as it is stored in the database; \"\" retrieves those without a schema; null means that the schema name should not be used to narrow the search. Function name pattern must match the function name as it is stored in the database. The behavior of this function matches java.sql.DatabaseMetaData.getFunctions().\n\n\n\n\n\n"
},

{
    "location": "#Hive.schemas-Tuple{HiveSession}",
    "page": "Home",
    "title": "Hive.schemas",
    "category": "method",
    "text": "Retrieves the schema names available in this database. The results are ordered by TABLECATALOG and TABLESCHEM.\n\n\n\n\n\n"
},

{
    "location": "#Hive.tables-Tuple{HiveSession}",
    "page": "Home",
    "title": "Hive.tables",
    "category": "method",
    "text": "Returns a list of tables with catalog, schema, and table type information. Results are ordered by TABLETYPE, TABLECAT, TABLESCHEM, and TABLENAME\n\n\n\n\n\n"
},

{
    "location": "#Hive.tabletypes-Tuple{HiveSession}",
    "page": "Home",
    "title": "Hive.tabletypes",
    "category": "method",
    "text": "Returns the table types available in this database. The results are ordered by table type.\n\n\n\n\n\n"
},

{
    "location": "#Hive.HiveConn",
    "page": "Home",
    "title": "Hive.HiveConn",
    "category": "type",
    "text": "HiveConn holds the thrift connection and protocol objects. It also holds the hive session handle for this connection.\n\n\n\n\n\n"
},

{
    "location": "#Hive.Pattern",
    "page": "Home",
    "title": "Hive.Pattern",
    "category": "type",
    "text": "A search pattern used in the below methods can have:\n\n\'_\': Any single character.\n\'%\': Any sequence of zero or more characters.\n\'\': Escape character used to include special characters,\n\ne.g. \'_\', \'%\', \'\'. If a \'\' precedes a non-special character it has no special meaning and is interpreted literally.\n\n\n\n\n\n"
},

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "Package doesn\'t contain Documenter docs.Docs automatically generated by juliadocs.orgModules = [Hive]\nOrder = [:type, :function]"
},

]}
