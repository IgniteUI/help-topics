<!--
|metadata|
{
    "fileName": "igtilemanager-binding",
    "controlName": "igTileManager",
    "tags": ["Data Binding","Layouts"]
}
|metadata|
-->

# Binding igTileManager to Data

## Topic Overview
### Purpose

This topic explains how to bind the `igTileManager`™ control to a JavaScript array, XML data, strongly typed MVC View, and to a JSON response from a remote service.

### Required background

The following table lists the concepts and topics required as a prerequisite to understanding this topic.

**Concepts**

-   JavaScript arrays
-   JSON
-   ASP.NET MVC

**Topics**

- [igDataChart Overview](igDataChart-Overview.html): This topic provides an overview of the `igDataSource`™ component and explains how to add it to an HTML page.

- [Templating Engine Overview](igTemplating-Overview.html): This topic is an overview of the options and features the templating engine exposes to the developer.

- [igTileManager Overview](igTileManager-Overview.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality.

- [Adding igTileManager](igTileManager-Adding.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality. The topic covers initializing `igTileManager` on the HTML markup.

### In this topic

This topic contains the following sections:

-   [**Binding igTileManager to Data Sources – Conceptual Overview**](#overview)
    -   [Data sources summary](#data-source)
    -   [Supported data sources](#suppoted-data-source)
    -   [Supported templating engines](#supported-templating-engines)
-   [Code Examples Summary](#code-example-summary)
-   [Code Example: Binding igTileManager to a JavaScript Array](#bind-js-array)
    -   [Description](#js-description)
    -   [Code](#js-code)
-   [Code Example: Binding igTileManager to XML Data](#bind-xml-data)
    -   [Description](#xml-description)
    -   [Code](#xml-code)
-   [Code Example: Binding igTileManager in a Strongly Typed MVC View](#bind-mvc-view)
    -   [Description](#mvc-description)
    -   [Code](#mvc-code)
-   [Code Example: Binding igTileManager to a JSON Response from a Remote Service](#bind-json)
    -   [Description](#json-description)
    -   [Code](#json-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Binding igTileManager to Data Sources – Conceptual Overview
### <a id="data-source"></a>Data sources summary

`igTileManager` is bound to data in the same way as any other control of the Ignite UI® library. Data is bound either by assigning a data source to the [dataSource](%%jQueryApiUrl%%/ui.igtilemanager#options:dataSource) option or by providing a URL in the [dataSourceUrl](%%jQueryApiUrl%%/ui.igtilemanager#options:dataSourceUrl) if data is provided by either a web service or Windows Communication Foundation (WCF) service. The `igTileManager` control creates and uses an [igDataSource](%%jQueryApiUrl%%/ig.datasource) object to handle data.

### <a id="suppoted-data-source"></a>Supported data sources

The following table lists the supported data sources and some basic specifics for their binding:

Data sources | Binding
---|---
JavaScript array of JSON objects |The `igTileManager` control can be bound to a local JavaScript array of data.
XML (client side or from a web or WCF service) | The `igTileManager` control can be bound to XML data supplied locally or from a web server.
IQueryTable`<T>` in ASP.NET MVC | In ASP.NET MVC, supply an IQueryTable as data source for the `igTileManager` and the collection will be serialized to JSON and returned together with the View for use in the browser.
[`igDataSource`](%%jQueryApiUrl%%/ig.datasource) |The `igDataSource` component is used internally by the `igTileManager` control to manage data operations for the control. The data source accepts many different types of local and remote data.



### <a id="supported-templating-engines"></a>Supported templating engines

The `igTileManager` control supports the (`igTemplating`™).


## <a id="code-example-summary"></a>Code Examples Summary
### Code examples summary chart

The following table lists the code examples included in this topic.

Example | Description
---|---
[Binding igTileManager to a JavaScript Array](#bind-js-array)| This example demonstrates how to bind the `igTileManager` control to a JavaScript array.
[Binding igTileManager to XML Data](#bind-xml-data)|This example demonstrates how to bind the `igTileManager` control to an XML structure.
[Binding igTileManager in a Strongly Typed MVC View](#bind-mvc-view)|This example demonstrates how to bind the `igTileManager` control to a model object in a strongly-typed ASP.NET MVC View using the MVC helper.
[Binding igTileManager to a JSON Response from a Remote Service](#bind-json)|This example demonstrates how to configure an `igTileManager` control to request remote data and bind it to a JSON response.


## <a id="bind-js-array"></a>Code Example: Binding igTileManager to a JavaScript Array
### <a id="js-description"></a>Description

One of the most common data binding scenarios is to visualize data from a JavaScript array of data objects on your web page. This example defines a sample array of objects with one data field and configures a tile manager using the array as the data source.

### <a id="js-code"></a>Code

The following code snippet defines a JavaScript array. Put the snippet into a script block in your page.

**In JavaScript:**

```js
var data = [
    {name: 'Tile 1'},
    {name: 'Tile 2'}, 
    {name: 'Tile 3'}
];
```

The following snippet instantiates an `igTileManager` control and binds the tile manager to the array defined above.

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    dataSource: data,
    minimizedState: '<h3>${name} – Minimized State</h3>',
    maximizedState:  '<h3>${name} – Maximized State</h3>'
});
```

State options specify what content to be rendered in the corresponding tile state. When initializing the tile manager on the data source, provide an `igTemplating` string for these options. If they are not provided, then no content will be rendered in the tile.


## <a id="bind-xml-data"></a>Code Example: Binding igTileManager to XML Data
### <a id="xml-description"></a>Description

The `igTileManager` control supports XML structures as a data source with the help of the `igDataSource` component. This code example shows how to pass an XML structure to an `igDataSource` object and how to bind the data source object to the tile manager control.

### <a id="xml-code"></a>Code

The following code snippet defines an XML structure with a JavaScript string. The structure contains node data attribute Name.

**In JavaScript:**

```js
var xmlDoc = 
    '<Dashboard>' +
        '<TileEntry name="Tile 1" />' +
        '<TileEntry name="Tile 2" />' +
        '<TileEntry name="Tile 3”  />' +
    '</Dashboard>';
```

The following code snippet shows how to declare the structure of the XML data into an `igDataSchema` object recognizable by the `igDataSource`.

**In JavaScript:**

```js
var xmlSchema = new $.ig.DataSchema("xml",
    {
        searchField: "//TileEntry",
        fields: [
            { name: "name", xpath: "./@name" }
        ]
    }
);
```

The following code snippet shows how to instantiate an `igDataSource` using the XML data and the schema object.

**In JavaScript:**

```js
var data = new $.ig.DataSource({
    type: "xml",
    dataSource: xmlDoc,
    schema: xmlSchema
});
```

The following code snippet shows instantiation code for the `igTileManager` control that binds to the data source created above. The data source object handles the data from the XML structure and provides it in a suitable form to the tile manager control.

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    dataSource: data,
    minimizedState: '<h3>${name} – Minimized State</h3>',
    maximizedState: '<h3>${name} – Maximized State</h3>'
});
```

State options specify what content to be rendered in the corresponding tile’s state. When initializing the `igTileManager` on the data source, provide an `igTemplating` string for these options. If they are not provided, then no content will be rendered in the tile.


## <a id="bind-mvc-view"></a>Code Example: Binding igTileManager in a Strongly Typed MVC View
### <a id="mvc-description"></a>Description

In an MVC application, you typically want to have a strongly-typed View and pass data objects to it from the business logic layer of your application. This example provides the essential code which defines a sample data class and passes a model object to the `igTileManager` MVC helper which instantiates a tile manager. The data model object is required to be an IQueryable of the data class.

### <a id="mvc-code"></a>Code

The following code snippet declares a sample class.

**In C#:**

```csharp
public class TileData
{
    public string Name { get; set; }
}
```

The following code snippet specifies a strongly-typed MVC View at the beginning. Then it shows how to use the MVC helper for `igTileManager` in order to bind to the Model object of the View.

**In ASPX:**

```csharp
@model IQueryable<MvcApp.Models.TileData>
. . .
@(  Html.
    Infragistics().
    TileManager(Model).
    ID("dashboard").
    minimizedState(“<h3>${name} – Minimized State</h3>”).
    maximizedState(“<h3>${name} – Maximized State</h3>”).
    Render()
)
```

State options specify what content to be rendered in the corresponding
tile’s state. When initializing the `igTileManager` on the data source,
provide an `igTemplating` string for these options. If they are not
provided, then no content will be rendered in the tile.



## <a id="bind-json"></a>Code Example: Binding igTileManager to a JSON Response from a Remote Service
### <a id="json-description"></a>Description

This code example shows how to bind JSON data from a request to a remote service (MVC controller action in this case) to the `igTileManager` control.

### <a id="json-code"></a>Code

The following code snippet declares a sample class.

**In C#:**

```csharp
public class TileData
{
    public string Name { get; set; }
}
```

The following code snippet defines a controller action method that services a remote request. The method uses them `getData()` method (not shown the code below) to implement the actual data retrieval logic.

**In C#:**

```csharp
[ActionName("getDashboard")]
public JsonResult GetDashboard()
{
    var data = getData();
    return new JsonResult 
    { 
        Data = data, 
        JsonRequestBehavior = JsonRequestBehavior.AllowGet 
    };
}
```

The following code snippet contains the instantiation code for the `igTileManager` control that configures a URL for a remote data service. The snippet contains only the essential data binding code omitting all other instantiation options.

**In JavaScript:**

```js
$("#dashboard").igTileManager ({
    dataSourceUrl: "/businessLogic/getDashboard",
    minimizedState: '<h3>${name} – Minimized State</h3>',
    maximizedState: '<h3>${name} – Maximized State</h3>'
});
```

State options specify what content to be rendered in the corresponding
tile’s state. When initializing the `igTileManager` on the data source,
provide an `igTemplating` string for these options. If they are not
provided, then no content will be rendered in the tile.



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring igTileManager](igTileManager-Configuring.html): This topic explains how to configure the features and behavior of the `igTileManager` control.

- [Handling Events (igTileManager)](igTileManager-Handling-Events.html): This topic explains, with code examples, how to attach event handlers to the `igTileManager` control.

- [Accessibility Compliance (igTileManager)](igTileManager-Accessibility-Compliance.html): This topic explains the accessibility features of the `igTileManager` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igTileManager)](igTileManager-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igTileManager` control and the available workarounds for them.

- [jQuery and ASP.NET MVC Helper API Links (igTileManager)](igTileManager-jQuery-and-ASP.NET-MVC-Helper-API-Links.html): This topic lists the links to the API reference documentation for jQuery and its ASP.NET MVC helper class for the `igTileManager` control.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Tile Manager Binding to JSON](%%SamplesUrl%%/tile-manager/bind-json): This sample demonstrates binding `igTileManager` control to JSON data source.





 

 


