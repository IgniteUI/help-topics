<!--
|metadata|
{
    "fileName": "igolapxmladatasource-adding-to-an-html-page",
    "controlName": "igOlapXmlaDataSource",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# Adding igOlapXmlaDataSource to an HTML Page

## Topic Overview
### Purpose

This topic explains how to add the `igOlapXmlaDataSource`™ to and HTML page and how to configure it for retrieving data from a Microsoft® SQL Server Analysis Services (SSAS) Server.

### Required background

The following table lists the topics and concepts required as a prerequisite to understanding this topic.

**Concepts**

-   [](http://msdn.microsoft.com/en-us/library/ms175609%28v=sql.90%29.aspx)[SQL Server Analysis Services (SSAS)](http://msdn.microsoft.com/en-us/library/ms175609%28v=sql.90%29.aspx)
-   [XML for Analysis (XMLA)](http://msdn.microsoft.com/en-us/library/ms187178%28v=SQL.90%29.aspx)
-   [Online Analytical Processing (OLAP)](http://en.wikipedia.org/wiki/Online_analytical_processing)

**Topics**

[igOlapXmlaDataSource Overview](igOlapXmlaDataSource-Overview.html)

This topic provides an overview of the `igOlapXmlaDataSource` component which uses SSAS instances for retrieving data.

[Configuring IIS for Cross-Domain OLAP Data (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-IIS-for-Cross-Domain-OLAP-Data.html)

This topic explains how to configure Internet Information Services (IIS) hosting HTTP data provider (`msmdpump.dll`) for SQL Server Analysis Services (SSAS), for cross-domain access (both authenticated and non-authenticated access).

### In this topic

This topic contains the following sections:

-   [**Adding igOlapXmlaDataSource to an HTML Page – Conceptual Overview**](#conceptual-overview)
    -   [Adding igOlapXmlaDataSource to an HTML page summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [**Adding igOlapXmlaDataSource to an HTML Page – Procedure**](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Prerequisites](#procedure-prerequisites)
    -   [Steps](#procedure-steps)
    -   [Code](#procedure-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="conceptual-overview"></a>Adding igOlapXmlaDataSource to an HTML Page – Conceptual Overview
### <a id="summary"></a>Adding igOlapXmlaDataSource to an HTML page summary

The `igOlapXmlaDataSource` makes the OLAP data from a SSAS server available for use in a JavaScript client environment. In order for the component to work correctly, the [serverUrl](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:serverUrl) property has to be specified. Also before using the component, you must initialize it.

Normally this data source component is used together with one of the OLAP pivot UI controls available with %%ProductName%%.

### <a id="requirements"></a>Requirements

Following are the general requirements for configuring `igOlapXmlaDataSource` for working with an MS SSAS Server.

-   A MS SSAS Server (with at least one database) configured with the `msmdpump.dll` HTTP data provider
-   The required JavaScript files:
    -   The jQuery library
    -   The required %%ProductName%%™ JavaScript files

### <a id="steps"></a>Steps

Following are the general conceptual steps for adding the `igOlapXmlaDataSource` to an HTML page and configuring it for working with an MS SSAS Server.

1. Adding the required references to JavaScript files

2. Defining the `igOlapXmlaDataSource`

3. Initializing the `igOlapXmlaDataSource`



## <a id="procedure"></a>Adding igOlapXmlaDataSource to an HTML Page – Procedure
### <a id="procedure-introduction"></a>Introduction

The following procedure defines and initializes an `igOlapXmlaDataSource` object that connects to and obtains data from the Adventure Works sample database residing on an Infragistics® server.

The first step of the procedure offers both alternative ways for providing the references to the required JavaScript files – by using the Infragistics Loader and manually.

### <a id="procedure-prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   The required JavaScript files (The Infragistics JavaScript files reside by default in the JavaScript modules folder under the %%ProductName%%™ installation path):
    -   Jquery-[versionNumber].js (for example, jquery-1.9.0.js) – the jQuery library (available at the jQuery site)
    -   infragistics.util.js – the JavaScript file containing shared non-UI logic used by some of the %%ProductName%%™ components
    -   `infragistics.olapxmladatasource.js` – the JavaScript file containing the `igOlapXmlaDataSource` component
    -   (Conditional – if the Infragistics Loader is used) `infragistics.loader.js` – the Infragistics Loader component which can be used to automatically load all the Infragistics JavaScript and CSS files required by a component
	-   The Adventure Works DW Standard Edition database deployed on a SSAS server instance configured with HTTP access through the `msmdpump.dll`

### <a id="procedure-steps"></a>Steps

1. Add the required references to JavaScript files

	-   ***(Recommended)*** **If using Infragistics Loader:**
		
		Add a reference to the Loader file. (No need to place references to the individual files)
	
	    ```
	    <script src="js/jquery-1.9.0.js" type="text/javascript"></script>
	    <script src="js/infragistics.loader.js" type="text/javascript"></script>
	    ```
	
	-   **If referencing files manually:**
	
		Add an individual reference to every required file.
	
	    ```
	    <script src="js/jquery-1.9.0.js" type="text/javascript"></script>
	    <script src="js/infragistics.util.js" type="text/javascript"></script>
	    <script src="js/infragistics.olapxmladatasource.js" type="text/javascript"></script>
	    ```
	
	>**Note:** The jQuery version number may vary. The version number listed in the code is the latest as of this writing.

2. Define the `igOlapXmlaDataSource`

	Create a new `$.ig.OlapXmlaDataSource` object by calling its constructor function and then pass a JavaScript object containing the data source options as properties; at a minimum, you must specify the `serverUrl` option.

3. Initialize the `igOlapXmlaDataSource`

	Initialize the XMLA data source by calling the `OlapXmlaDataSource` object’s `initialize()` method that returns a [promise](http://api.jquery.com/deferred.promise/) object that will be resolved with the root [MetadataTreeItem](%%jQueryApiUrl%%/ig.OlapMetadataTreeItem) (The root node of the metadata tree). This is because the initialization is an asynchronous process (a call to the servers is made). The promise is an object that encapsulates an asynchronous operation exposing methods that can initiate and execute callbacks when the operation either completes or fails such as [done](http://api.jquery.com/deferred.done/), [fail](http://api.jquery.com/deferred.fail/), etc.
	
	>**Note:** The jQuery version number may vary. The version number listed in the code is the latest as of this writing.
	


### <a id="procedure-code"></a>Code

The following code demonstrates creating and initializing a new instance of the OlapXmlaDataSource.

In this code example, the `serverUrl` setting points to an Infragistics server for XMLA data source.

### Instantiating OlapXmlaDataSource using the Infragistics Loader:

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: '[path to js folder]',
    cssPath: '[path to css folder]',
    resources: 'igOlapXmlaDataSource'
});
$.ig.loader(function () {
    var dataSource = new $.ig.OlapXmlaDataSource({
        serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
        catalog: 'Adventure Works DW 2008',
        cube: 'Adventure Works',
        measureGroup: "Internet Sales",
        rows: "[Sales Territory].[Sales Territory]",
        columns: "[Product].[Product Categories]",
        measures: "[Measures].[Internet Order Count]"
    });
    var promise = dataSource.initialize();
    promise.done(function (metadataTree) {
            // do something when the data source is initialized
        }).fail(function (error) {
            throw error;
        });
});
```

### Instantiating OlapXmlaDataSource without using the Infragistics Loader:

**In JavaScript:**

```js
$(function() {
    var dataSource = new $.ig.OlapXmlaDataSource({
        serverUrl: 'http://sampledata.infragistics.com/olap/msmdpump.dll',
        catalog: 'Adventure Works DW Standard Edition',
        cube: 'Adventure Works'
    });
    var promise = dataSource.initialize();
    promise.done(function (metadataTree) {
            // do something when the data source is initialized
        }).fail(function (error) {
            throw error;
        });
});
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igOlapXmlaDataSource to an ASP.NET MVC Application](igOlapXmlaDataSource-Adding-to-an-ASPNETMVC-Application.html): This topic demonstrates how to add the `igOlapXmlaDataSource` to an ASP.NET MVC View using the ASP.NET MVC helper.

- [Configuring Authenticated Access for the Mozilla Firefox Browser (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-Authenticated-Access-for-Firefox.html): This topic provides a workaround for configuring IIS for cross-domain authenticated access for the Mozilla® Firefox® browser.

- [Adding igPivotView to an HTML Page](igPivotView-Adding-to-HTML-Page.html): This topic demonstrates how to add the `igPivotView`™ to an HTML page.

- [Adding igPivotDataSelector to an HTML Page](igPivotDataSelector-Adding-to-HTML-Page.html): This topic demonstrates how to add the `igPivotDataSelector`™ to an HTML page.

- [Adding igPivotGrid to an HTML Page](igPivotGrid-Adding-to-an-HTML-Page.html): This topic demonstrates how to add the `igPivotGrid`™ to an HTML page.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Binding to Xmla Data Source](%%SamplesUrl%%/pivot-grid/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapXmlaDataSource` and uses an `igPivotDataSelector` for data selection.

- [Remote Xmla Provider](%%SamplesUrl%%/pivot-grid/remote-xmla-provider): This sample demonstrates one of the benefits of using the remote provider feature of the `igOlapXmlaDataSource` - less network traffic. All requests are proxied through the server application to avoid cross domain problems. In addition, the data is translated to JSON reducing the size of the response.