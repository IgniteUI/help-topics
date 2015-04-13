<!--
|metadata|
{
    "fileName": "igolapxmladatasource-adding-to-an-aspnetmvc-application",
    "controlName": "igOlapXmlaDataSource",
    "tags": ["Getting Started","How Do I","MVC"]
}
|metadata|
-->

# Adding igOlapXmlaDataSource to an ASP.NET MVC Application

## Topic Overview
### Purpose

This topic explains, in both conceptual and step-by-step form, how to add the `igOlapXmlaDataSource`™ component to an ASP.NET MVC application using the ASP.NET MVC helper.

### Required background

The following topics are prerequisites to understanding this topic:

- [**igOlapXmlaDataSource Overview**](igOlapXmlaDataSource-Overview.html): This topic provides conceptual information about the `igOlapXmlaDataSource` component including its main features, minimum requirements, and user functionality.

- [**Adding igOlapXmlaDataSource to an HTML Page**](igOlapXmlaDataSource-Adding-to-an-HTML-Page.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapXmlaDataSource` component to an HTML page.


### In this topic

This topic contains the following sections:

-   [Adding igOlapXmlaDataSource to an ASP.NET MVC Application – Conceptual Overview](#conceptual-overview)
    -   [Adding igOlapXmlaDataSource to an ASP.NET MVC application summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igOlapXmlaDataSource to an ASP.NET MVC Application – Example](#example)
    -   [Introduction](#example-introduction)
    -   [Prerequisites](#example-prerequisites)
    -   [Steps](#example-steps)
    -   [Full Code](#example-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)


## <a id="conceptual-overview"></a>Adding igOlapXmlaDataSource to an ASP.NET MVC Application – Conceptual Overview
### <a id="summary"></a>Adding igOlapXmlaDataSource to an ASP.NET MVC application summary

The `igOlapXmlaDataSource` is a client-side component accompanied by an ASP.NET MVC helper that allows the component to be used in the CS/VB code of an MVC View. The ASP.NET MVC helper is the same for `igOlapXmlaDataSource` and `igOlapFlatDataSource` component and, depending on the options you set, an instance of the respective data source is created on the client. When using the helper, you provide it with an identifier that enables it to be used in one or more components capable of visualizing its data (`igPivotDataSelector`™, `igPivotGrid`™, `igPivotView`™).

Defining the `igOlapXmlaDataSource` in the View is achieved by setting the required properties using methods that always return the same object that called them. This allows chaining syntax to be used for setting all required properties. For complex objects such as DataSourceOptions, lambda expression builders are used in order to achieve this kind of syntax.

### <a id="requirements"></a>Requirements

Following are the general requirements for adding `igOlapXmlaDataSource` to an ASP.NET MVC application:

-   A reference to the Infragistics® namespace
-   The required JavaScript files added to your application (For the complete listing, refer to [**Adding igOlapXmlaDataSource to an HTML Page**](igOlapXmlaDataSource-Adding-to-an-HTML-Page.html).)

### <a id="steps"></a>Steps

Following are the general conceptual steps for adding `igOlapXmlaDataSource` to an ASP.NET MVC application.

1. Adding the Infragistics namespace

2. Loading the required JavaScript resources

3. Adding the `igOlapXmlaDataSource`


## <a id="example"></a>Adding igOlapXmlaDataSource to an ASP.NET MVC Application – Example
### <a id="example-introduction"></a>Introduction

The procedure below demonstrates how to add the `igOlapXmlaDataSource` component to an ASP.NET MVC application. The required resources in this example are referred to automatically with the *Infragistics Loader*.

### <a id="example-prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   An ASP.NET MVC application
-   Reference to the `Infragistics.Web.Mvc.dll` assembly added to the application project
-   The Adventure Works sample database deployed on an SQL server (http://sampledata.infragistics.com is used in this example)

### <a id="example-steps"></a>Steps

The following steps demonstrate how to add an `igOlapXmlaDataSource` to an ASP.NET MVC application.

1. Add the Infragistics namespace.

	Add the Infragistics.Web.Mvc namespace to your View code.
	
	**In ASPX:**
	
	```csharp
	<%=Import Namespace=”Infragistics.Web.Mvc” %>
	```

2. Add a reference to the Infragistics namespace.

	1. Add script reference to the *Infragistics Loader* component.
	
		Add the following script reference to the head section of the View.
		
		**In ASPX:**
		
		```csharp
		<script src="[path to js folder]/infragistics.loader.js"></script>
		```
	
	2. Add the definition of the *Infragistics Loader*.
	
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

3. Add the `igOlapXmlaDataSource` component.

	1. Add the `igOlapXmlaDataSource` declaration setting the ID.
	
		Add the declaration to the code of the View:
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("xmlaDataSource")
		// remaining code goes here
		%>
		```
	
	2. (Optional) Configure the common OLAP data source properties.
	
		Use the [DataSourceOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.OlapDataSourceWrapper~DataSourceOptions.html) method to set the properties that are common for both multidimensional (OLAP) data sources, e.g. columns, rows, measures.
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("xmlaDataSource")
		  .DataSourceOptions(dataSourceOptions => dataSourceOptions
		      .Columns("[Product].[Product Categories]")
		      .Rows("[Sales Territory].[Sales Territory]")
		      .Measures("[Measures].[Internet Order Count]"))
		%>
		```
	
	3. Configure the igOlapXmlaDataSource-specific properties.
	
		Of all igOlapXmlaDataSource -specific properties, the ServerUrl property of the [XmlaOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DataSourceOptionsWrapper~XmlaOptions.html) object is required.
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("xmlaDataSource")
		  .DataSourceOptions(dataSourceOptions => dataSourceOptions
		      // common properties
		      .XmlaOptions(xmlaOptions => xmlaOptions
		          .ServerUrl("http://sampledata.infragistics.com/olap/msmdpump.dll")
		          .Catalog("Adventure Works DW Standard Edition")
		          .Cube("Adventure Works")
		          .MeasureGroup("Internet Sales")
		          ))
		%>
		```
	
	4. Render the JavaScript code.
	
		To render the JavaScript code according to the setup that you provided, call the [Render](Infragistics.Web.Mvc~Infragistics.Web.Mvc.OlapDataSourceWrapper~Render.html) method.
		
		**In ASPX:**
		
		```csharp
		<%= Html.Infragistics().OlapDataSource().ID("xmlaDataSource")
		  // all options
		          .Render()
		%>
		```
		
		At this point, you can use the ID which you set to the OlapDataSource definition, in order to use the data source component instance in pivot-grid-related controls like igPivotDataSelector, igPivotGrid, and igPivotView.


### <a id="example-code"></a>Full Code

Following is the complete code of this procedure.

**In ASPX:**

```csharp
<%= Html.Infragistics().OlapDataSource().ID("xmlaDataSource")
  .DataSourceOptions(dataSourceOptions => dataSourceOptions
      .Columns("[Product].[Product Categories]")
      .Rows("[Sales Territory].[Sales Territory]")
      .Measures("[Measures].[Internet Order Count]")
      .XmlaOptions(xmlaOptions => xmlaOptions
          .ServerUrl("http://sampledata.infragistics.com/olap/msmdpump.dll")
          .Catalog("Adventure Works DW Standard Edition")
          .Cube("Adventure Works")
          .MeasureGroup("Internet Sales")
          )).Render()
%>
```

## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igPivotDataSelector to an ASP.NET MVC Application](igPivotDataSelector-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotDataSelector` control to an ASP.NET MVC application using the ASP.NET MVC helper.

- [Adding igPivotGrid to an ASP.NET MVC Application](igPivotGrid-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotGrid` control to an ASP.NET MVC application using the ASP.NET MVC helper.

- [Adding igPivotView to an ASP.NET MVC Application](igPivotView-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotView` control to an ASP.NET MVC View using the ASP.NET MVC helper.

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Using the ASP.NET MVC Helper with Xmla Data Source](%%SamplesUrl%%/pivot-data-selector/using-the-asp-net-mvc-helper-with-xmla-data-source): This sample demonstrates how to use the ASP.NET MVC Helper for the `igOlapXmlaDataSource` and how to use this data source in `igPivotDataSelector` and `igPivotGrid`.