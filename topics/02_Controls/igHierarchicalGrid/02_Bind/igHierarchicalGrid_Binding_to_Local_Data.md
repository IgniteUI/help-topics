<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-binding-to-local-data",
    "controlName": "igHierarchicalGrid",
    "tags": ["Data Binding","Grids","How Do I"]
}
|metadata|
-->

# igHierarchicalGrid Binding to Local Data

## Topic Overview

## Purpose
This topic explains how to configure the the igHierarchicalGrid™ in order to bind to local data - JSON or XML.

### In this topic

This topic contains the following sections:
- [Binding to JSON data](#json)
- [Binding to XML data](#xml)
- [Related Content](#related)

## <a id="json"></a> Binding to JSON data

The igHierarchicalGrid can be bound to a JSON object with hierarchical structure in order to display the specified layout.

For example:

```js
    var northwind = {

    "results": [{
	"EmployeeID": 1,
	"LastName": "Davolio",
	"FirstName": "Nancy",
	"Title": "Sales Representative",
	"Address": "507 - 20th Ave. E.\r\nApt. 2A",
	"City": "Seattle",
	"Orders": {
		"results": [{
			"OrderID": 10258,
			"CustomerID": "ERNSH",
			"ShipName": "Ernst Handel",
			"ShipAddress": "Kirchgasse 6",
			"ShipCity": "Graz",
			"ShipCountry": "Austria"
			},
            ...
            }
    },
    ...
    ]
    }
```

In order to properly configure the hierarchical grid to use this example JSON data the following options should be set:

|Option | Description | Set to:|
|--------|-------------|--------|
|[dataSource](%%jQueryApiUrl%%/ui.igGrid#options:dataSource)| The source of the data, that the grid will use when displaying data. | A valid json object similar to the above example.|
|[responseDataKey](%%jQueryApiUrl%%/ui.igGrid#options:responseDataKey)| Applicable only if the response is wrapped. This is the property in the responses where data records are held.| "results"|
|[columnLayouts](%%jQueryApiUrl%%/ui.igHierarchicalGrid#options:dataSource) | List of columnLayout objects that specify the structure of the child grids. | List of the column layouts. The options of the column layout object are the same as in an igGrid with the exception of the "key" property.|
|[columnLayouts.key](%%jQueryApiUrl%%/ui.igHierarchicalGrid#options:columnLayouts.key) | This is the property that holds the data records for the current column layout.| columnLayouts: [{  key: "Orders", ... }]|

Instead of defining the `columnLayouts` you could set the `autoGenerateLayouts` to `true` in order to let the igHierarchicalGrid generate the layouts based on the data.

You can refer to the below sample that demonstrates the end result.

<div class="embed-sample">
   [Hierarchical Grid JSON Binding](%%SamplesEmbedUrl%%/hierarchical-grid/json-binding)
</div>

## <a id="xml"></a> Binding to XML data

The igHierarchicalGrid can be bound to a XML data with hierarchical structure in order to display the specified layout.

Example:

```js
var xmlDoc = '<OrgChart Name="All Employees">' +
    '<Employee Name="Gustavo Achong" Age="42" Email="gachong@adventureworks.com">' +
        '<Employee Name="Kim Abercrombie" Age="33" Email="kabercrombie@adventureworks.com" />' +
        '<Employee Name="Lawrence Tapley" Age="52" Email="ltapley@adventureworks.com" />' +
    '</Employee>' +
    '<Employee Name="Catherine Abel" Age="27" Email="cabel@adventureworks.com">' +
        '<Employee Name="Kristen Anderson" Age="30" Email="kanderson@adventureworks.com" />' +
        '<Employee Name="Richard Lee" Age="25" Email="rlee@adventureworks.com" />' +
        '<Employee Name="Victoria Gramley" Age="23" Email="vgramley@adventureworks.com" />' +
    '</Employee>' +
    '<Employee Name="Adrienne Mauro" Age="27" Email="amauro@adventureworks.com">' +
        '<Employee Name="Christopher Chadwick" Age="37" Email="cchadwick@adventureworks.com" />' +
    '</Employee>' +
'</OrgChart>'
```


The same options and settings apply as with the JSON data, excluding the `dataSource` option setting.
Instead of setting the `dataSource` option directly to the XML data the data should first be defined in an igDataSource instance and that instance can then be assigned to the `dataSource` option.
When using XML data the `dataSource`'s schema needs to be specified in order to define the data fields.

So the first step is to define the schema for the igDataSource. The schema requires teh following options to be set:

|Option | Description | Set to:|
|--------|-------------|--------|
|[searchField](%%jQueryApiUrl%%/ig.dataschema#options:schema.searchField)| Serves as the base node(s) for the XPaths used to define the fields. |"OrgChart"
|childDataProperty| Maps the node to the the child data fields. | "Employee"|
|[fields](%%jQueryApiUrl%%/ig.dataschema#options:schema.fields) | The fields collection. | fields: [{ name: "Name", xpath: "@Name" }, { name: "Age", xpath: "@Age" }, { name: "Employee", xpath: "Employee" }]|
|[fields.xpath](%%jQueryApiUrl%%/ig.dataschema#options:schema.fields.xpath) | The XPath expression to map the node to the field. | { name: "Name", xpath: "@Name" }|

```js
var xmlSchema = new $.ig.DataSchema("xml",
    {
        //searchField serves as the base node(s) for the XPaths
        searchField: "OrgChart",
        childDataProperty: "Employee",
        fields: [
            { name: "Name", xpath: "@Name" },
            { name: "Age", xpath: "@Age" },
            { name: "Email", xpath: "@Email" },
            { name: "Employee", xpath: "Employee" }
        ]
    }
);
```
Next define an igDataSource that uses the defined schema and the xml doc:

```js
    var ds = new $.ig.DataSource({
        type: "xml",
        dataSource: xmlDoc,
        schema: xmlSchema
    });
```

You can then assign this data source to the dataSource of the igHierarchicalGrid:

```js
 $("#hierarchicalGrid1").igHierarchicalGrid({
    dataSource: ds, //$.ig.DataSource object defined above
    ...
    }):
```

You can refer to the below sample that demonstrates the result of this configuration.

<div class="embed-sample">
   [Hierarchical Grid XML Binding](%%SamplesEmbedUrl%%/hierarchical-grid/xml-binding)
</div>

### <a id='related'></a> Related Content

-   [Initializing the igHierarchicalGrid](igHierarchicalGrid-Initializing.html)
-   [igHierarchicalGrid Columns and Layouts](igHierarchicalGrid-Columns-and-Layouts.html)
