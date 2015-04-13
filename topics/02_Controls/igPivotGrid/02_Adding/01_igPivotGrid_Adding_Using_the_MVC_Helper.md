<!--
|metadata|
{
    "fileName": "igpivotgrid-adding-using-the-mvc-helper",
    "controlName": "igPivotGrid",
    "tags": ["Application Blocks","Getting Started","Grids","How Do I","MVC"]
}
|metadata|
-->

# Adding igPivotGrid to an ASP.NET MVC Application



##Topic Overview

### Purpose

This topic explains, in both conceptual and step-by-step form, how to add the `igPivotGrid`™ control to an ASP.NET MVC application using the ASP.NET MVC helper.

### Required background

The following topics are prerequisites to understanding this topic:

- [igPivotGrid Overview](igPivotGrid-Overview.html): This topic provides conceptual information about the `igPivotGrid` control including its main features, minimum requirements, and user functionality.

- [Adding igPivotGrid to an HTML Page](igPivotGrid-Adding-to-an-HTML-Page.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotGrid` control to an HTML page. This topic provides the complete listing of the required JavaScript resource files.


### In this topic

This topic contains the following sections:

-   [**Adding igPivotGrid to an ASP.NET MVC Application – Conceptual Overview**](#conceptual-overview)
    -   [Adding igPivotGrid to an ASP.NET MVC application summary](#overview-summary)
    -   [Requirements](#overview-requirements)
    -   [Steps](#overview-steps)
-   [**Adding igPivotGrid to an ASP.NET MVC Application – Example**](#example)
    -   [Introduction](#example-introduction)
    -   [Preview](#example-preview)
    -   [Prerequisites](#example-prerequisites)
    -   [Steps](#example-steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="conceptual-overview"></a>Adding igPivotGrid to an ASP.NET MVC Application – Conceptual Overview

### <a id="overview-summary"></a>Adding igPivotGrid to an ASP.NET MVC application summary

The `igPivotGrid` is a client-side component accompanied by an ASP.NET MVC helper that allows the component to be used in the CS/VB code of an MVC View. It allows also consuming data from the View’s Model (using `igOlapFlatDataSource`™). When using the ASP.NET MVC helper for the `igPivotGrid`, there are two ways to bind it to data:

-   By configuring a data source.

This is done by setting the required [DataSourceOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceOptions.html) (used to create a data source object). This approach is explained in this topic.

-   By referencing a pre-configured data source.

This is done by providing the ID of a pre-configured data source instance ([DataSourceID](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceID.html)) (as explained in [Adding igOlapXmlaDataSource to an ASP.NET MVC Application](igOlapXmlaDataSource-Adding-to-an-ASPNETMVC-Application.html) and [Adding igOlapFlatDataSource to an ASP.NET MVC Application](igOlapFlatDataSource-Adding-Using-MVC-Helper.html)).

Defining the `igPivotGrid` in the View is achieved by setting the required properties using methods that always return the same object that called them. This allows for chaining syntax to be used for setting all required properties. For complex objects such as `DataSourceOptions`, lambda expression builders are used in order to achieve this kind of syntax.

### <a id="overview-requirements"></a>Requirements

Following are the general requirements for adding `igPivotGrid` to an ASP.NET MVC application:

-   A reference to the Infragistics® namespace
-   The required JavaScript files added to your application (For the complete listing, refer to [Adding igPivotGrid to an HTML Page](igPivotGrid-Adding-to-an-HTML-Page.html).)

### <a id="overview-steps"></a>Steps

Following are the general conceptual steps for adding `igPivotGrid` to an ASP.NET MVC application.

1. Adding a reference to the Infragistics namespace

2. Adding a reference to the required JavaScript resources

3. Adding the `igPivotGrid` and configuring the data source



## <a id="example"></a>Adding igPivotGrid to an ASP.NET MVC Application – Example

### <a id="example-introduction"></a>Introduction

The procedure below demonstrates how to add the `igPivotGrid` control to an ASP.NET MVC application. Code examples for both approaches for adding `igPivotGrid` – by setting the [DataSourceOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceOptions.html) and by setting the [DataSourceID](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceID.html), are available. The required resources in this example are referred to automatically with the Infragistics Loader.

### <a id="example-preview"></a>Preview

The following screenshot is a preview of the final result.

![](images/igPivotGrid_Adding_1.png)

### <a id="example-prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   An ASP.NET MVC application
-   Reference to the `Infragistics.Web.Mvc.dll` assembly added to the application project
-   The Adventure Works sample database deployed on an SQL server (http://sampledata.infragistics.com is used in this example)

>**Note:** If you want to use the remote xmla data provider ([XmlaDataSourceAction](Infragistics.Web.Mvc~Infragistics.Web.Mvc.XmlaDataSourceActionAttribute.html)) MVC 3 or higher is required.

### <a id="example-steps"></a>Steps

The following steps demonstrate how to add an `igPivotGrid` to an ASP.NET MVC application.

1. Add a reference to the Infragistics namespace.

	Add the `Infragistics.Web.Mvc` namespace to your View code.

	**In ASPX:**

	```csharp
	<%=Import Namespace=”Infragistics.Web.Mvc” %>
	```

2. Add a reference to the required JavaScript resources.

	1. Add script reference to the `igLoader`.

		Add the following script reference to the head section of the View.

		**In ASPX:**
		
		```csharp
		<script src="[path to js folder]/infragistics.loader.js"></script>
		```

	2. Add the `igLoader` definition.

		The following code loads the required resources using the Infragistics Loader.
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics()
		        .Loader()
		        .ScriptPath("[js path]")
		        .CssPath("[css path]")
		        .Render()
		%>
		```

3. Add the `igPivotGrid` and configure the data source.

	The following code adds an `igPivotGrid` bound to an `igOlapXmlaDataSource`™:
	
	**In ASPX:**
	
	```csharp
	<%= Html.Infragistics().PivotGrid()
	.DataSourceOptions(
	    dataSourceOptions => dataSourceOptions
	        .Columns("[Product].[Product Categories]")
	        .Rows("[Sales Territory].[Sales Territory]")
	        .Measures("[Measures].[Internet Order Count]")
	        .XmlaOptions(
	        xmlaOptions => xmlaOptions
	            .ServerUrl("http://sampledata.infragistics.com/olap/msmdpump.dll")
	            .Catalog("Adventure Works DW Standard Edition")
	            .Cube("Adventure Works")
	            .MeasureGroup("Internet Sales"))).Render()
	%>
	```
	
	If you prefer to use an already preconfigured data source you need to set the [DataSourceID](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceID.html) property . The code example below assumes that an igOlapXmlaDataSource or igOlapFlatDataSource with ID of “olapDataSource” is present in the view. (For details, refer to [Adding igOlapXmlaDataSource to an ASP.NET MVC Application](igOlapXmlaDataSource-Adding-to-an-ASPNETMVC-Application.html) and [Adding igOlapFlatDataSource to an ASP.NET MVC Application](igOlapFlatDataSource-Adding-Using-MVC-Helper.html)).
	
	**In ASPX:**
	
	```csharp
	<%= Html.Infragistics().PivotGrid()
	.DataSourceID(“olapDataSource”)
	.Render()
	%>
	```


## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.


- [Adding igOlapFlatDataSource to an ASP.NET MVC Application](igOlapFlatDataSource-Adding-Using-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapFlatDataSource` control to an ASP.NET MVC application using ASP.NET MVC helper.

- [Adding igOlapXmlaDataSource to an ASP.NET MVC Application](igOlapXmlaDataSource-Adding-to-an-ASPNETMVC-Application.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapXmlaDataSource` control to an ASP.NET MVC application using ASP.NET MVC helper.

- [igPivotDataSelector Overview](igPivotDataSelector-Overview.html): This topic provides conceptual information about the `igPivotDataSelector`™ control including its main features, minimum requirements, and user functionality.

- [igPivotView Overview](igPivotView-Overview.html): This topic provides conceptual information about the `igPivotView`™ control including its main features, minimum requirements, and user functionality.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Using the ASP.NET MVC Helper with Xmla Data Source](%%SamplesUrl%%/pivot-grid/using-the-asp-net-mvc-helper-with-xmla-data-source): This sample demonstrates using the ASP.NET MVC Helper for the `igOlapXmlaDataSource` control and how to use it as data source in the `igPivotDataSelector` and `igPivotGrid` controls.

- [Using the ASP.NET MVC Helper with Flat Data Source](%%SamplesUrl%%/pivot-grid/using-the-asp-net-mvc-helper-with-flat-data-source): This sample demonstrates using the ASP.NET MVC Helper for the `igOlapFlatDataSource` control and how to use it as data source in the `igPivotDataSelector` and `igPivotGrid` controls.





 

 


