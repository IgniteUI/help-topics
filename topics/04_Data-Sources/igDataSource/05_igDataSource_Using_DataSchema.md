<!--
|metadata|
{
    "fileName": "igdatasource-using-dataschema",
    "controlName": "igDataSource",
    "tags": ["Data Binding","Sample Data Source"]
}
|metadata|
-->

# Performing Data Transformations Using DataSchema (igDataSource)

The data schemas handle transformations of data for the `igDataSource` component. Schema definition consists of the following parts:

-   List of field name definitions
-   Schema type

A field definition consists of:

-   field name
-   type
-   searchField value (specifying exactly where the field value is located in the input data)
-   formatter function

##Array Schema
 When working with JavaScript arrays, the best option is to use an array schema. These arrays used in this way may contain JavaScript objects or other arrays.

**In Javascript:**

```js

	var arrayOfObjects =  [
	    {song:"Light My Fire",artist:"The Doors",year:1967},
	    {song:"Another Brick in the Wall",artist:"Pink Floyd",year:1979},
	    {song:"The Show Must Go On",artist:"Queen",year:1991}
	];
	var arrayOfArrays = [
	    ["Light My Fire", "The Doors", 1967],
	    ["Another Brick in the Wall", "Pink Floyd", 1979],
	    ["The Show Must Go On", "Queen", 1991]
	];
    var mySchema = new $.ig.DataSchema("array", {
        fields: [{
            name: "song"
        }, {
            name: "artist"
        }, {
            name: "year"
        }]
    });
    var ds = new $.ig.DataSource({
        dataSource: arrayOfObjects,
        schema: mySchema
    }).dataBind();
```



##JSON Schema 
When working with JSON data, the best option is to use a JSON schema.

**In Javascript:**

```js

	var json = {
	    "profile":{
	        "current":160,
	        "target":150
	    },
	    "program": [
	        {
	            "category":"exercise",
	            "weekly schedule":[
	                {"day":"sunday", "activity":"swimming"},
	                {"day":"monday", "activity":"running"},
	                {"day":"tuesday", "activity":"biking"},
	                {"day":"wednesday", "activity":"running"},
	                {"day":"thursday", "activity":"swimming"},
	                {"day":"friday", "activity":"running"},
	                {"day":"saturday", "activity":"golf"}
	            ]
	        }
	    ]
	};
	var jsonSchema = new $.ig.DataSchema("json", {
	    fields: [{
	        name: "day"
	    }, {
	        name: "activity"
	    }],
	    searchField: "program[0]['weekly schedule']"
	});
	var ds = new $.ig.DataSource({
	    dataSource: json,
	    schema: jsonSchema
	}).dataBind();

```



##XML Schema
When working with XML data, the best option is to use a XML schema.

**In XML:**
```xml

	gustavo0@adventure-works.com
	
	May 16 2005 4:33
	
	catherine0@adventure-works.com
	
	May 16 2005 4:33
	
	kim2@adventure-works.com
	
	May 16 2005 4:33

```
For XML schemas, use XPath to select the nodes with the data you want to bind to:

**In Javascript:**

 ```js

	 var xmlSchema = new $.ig.DataSchema("xml", { fields:[ 
	    {name : "FirstName", xpath: "generalInfo/@firstName"},
	    {name : "LastName", xpath : "generalInfo/@lastName"}, 
	    {name : "Email",  xpath : "generalInfo"} ], 
	    searchField:"//person"}); 

 ```



>**Note:** After the data schema is defined, you can then apply it to data source’s schema option.

**In Javascript:**

```js

	var mySchema = new $.ig.DataSchema("array", {
	    fields: [{
	        name: "song"
	    }, {
	        name: "artist"
	    }, {
	        name: "year"
	    }]
	});
	var ds = new $.ig.DataSource({
	    dataSource: arrayOfObjects,
	    schema: mySchema
	}).dataBind();

```

## Related Topics
-   [igDataSource Overview](igDataSource-igDataSource-Overview.html)
-   [Binding to XML](igDataSource-Binding-to-XML.html)
-   [Binding to HTML Table](igDataSource-Binding-to-HTML-Table-Data.html)
-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html)

 

 


