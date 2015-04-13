<!--
|metadata|
{
    "fileName": "igolapxmladatasource-overview",
    "controlName": "igOlapXmlaDataSource",
    "tags": ["Data Binding","Getting Started"]
}
|metadata|
-->

# igOlapXmlaDataSource Overview
## Topic Overview
### Purpose

This topic provides an overview of the `igOlapXmlaDataSource`™ component and its main features.

### Required background

The following table lists the topics and concepts required as a prerequisite to understanding this topic.

**Topics**

- [Multidimensional (OLAP) Data Source Components Overview](Multidimensional-Data-Source-Components-Overview.html): This group of topics explain the multidimensional (OLAP) data source components of the Ignite UI™ suite.


**External Resources**

-   [Pivot Table](http://en.wikipedia.org/wiki/Pivot_table)
-   [Online analytical processing (OLAP)](http://en.wikipedia.org/wiki/Online_analytical_processing)
-   [Microsoft Analysis Services](http://en.wikipedia.org/wiki/Microsoft_Analysis_Services)

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Main Features**](#main-features)
    -   [Main features summary chart](#main-features-summary)
    -   [MS SSAS server (msmdpump.dll) support](#ms-ssas-server)
    -   [Authentication support](#authentication-support)
    -   [Support of OLAP metadata pre-sets](#support-metadata)
    -   [Data slices generation](#data-slice-generation)
    -   [Integration with Ignite UI controls](#integration-with-igniteui)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction

The `igOlapXmlaDataSource` component handles the communication between a JavaScript client application and a Microsoft® SQL Server Analysis Services (SSAS) server configured with the `msmdpump.dll` HTTP data provider. It exposes a user-friendly way for obtaining data from Microsoft SQL Server Analysis Services (MS SASS) – you do not have to possess any particular knowledge of Multidimensional Expressions (MDX) or XML for Analysis (XMLA) in order to get the data from an SSAS server. The `igOlapXmlaDataSource` generates the necessary MDX queries based on the commands it is given. The `igOlapXmlaDataSource` is usually used with one or more of the Ignite UI widgets capable of visualizing and interacting with OLAP data, e.g. `igPivotView`™ or `igPivotGrid`™.



## <a id="main-features"></a>Main Features
### <a id="main-features-summary"></a>Main features summary chart

The following table summarizes the main features of the `igOlapXmlaDataSource` component. Additional details on each feature are available after the table.

Feature | Description
---|---
[MS SSAS server support](#ms-ssas-server)| Given a URL of an Internet Information Services (IIS) server hosting the `msmdpump.dll` Internet Server Application Programming Interface (ISAPI) extension or a preconfigured ADOMD.NET endpoint, the `igOlapXmlaDataSource` establishes connection to the server.
[Authentication support](#authentication-support) | The `igOlapXmlaDataSource` supports basic (username and password) authentication.
[Support of OLAP metadata pre-sets](#support-metadata) | When initialized, the `igOlapXmlaDataSource` downloads the OLAP metadata from the server – available databases, cubes, measure groups, dimensions, etc.
[Data slices generation](#data-slice-generation) | After hierarchies are assigned as rows/columns, `igOlapXmlaDataSource` generates one or more result axes containing tuples of members from the corresponding hierarchies. If measures, too, have been chosen, `igOlapXmlaDataSource` generates a two-dimensional array of value cell objects.
[Integration with Ignite UI controls](#integration-with-igniteui)|The `igOlapXmlaDataSource` component can feed data to those data visualization controls of Ignite UI that are capable of presenting OLAP data.



### <a id="ms-ssas-server"></a>MS SSAS server support

The `igOlapXmlaDataSource` component is designed to communicate with an MS SQL Server Analysis Services (SSAS) server that has HTTP access through `msmdpump.dll` or through ADOMD.NET. In order to connect to the server, you need to specify only the URL of the server.

#### Related Topics:

-   [Adding igOlapXmlaDataSource](igOlapXmlaDataSource-Adding.html)
-   [Data Provider Configuration (igOlapXmlaDataSource)](igOlapXmlaDataSource-Data-Provider-Configuration.html)
-   [Key Performance Indicators Support (igPivotGrid, igPivotDataSelector, igOlapXmlaDataSource)](igPivotGrid-KPI-Support.html)

### <a id="authentication-support"></a>Authentication support

The `igOlapXmlaDataSource` component exposes options for configuring authentication. For basic authentication, you can either set the credentials in code or let the user enter them from a browser popup. For the configuration requirements and limitations, refer to the related topics.

#### Related Topics:

-   [Configuring IIS for Cross-Domain OLAP Data (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-IIS-for-Cross-Domain-OLAP-Data.html)
-   [Configuring Authenticated Access for the Mozilla Firefox Browser (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-Authenticated-Access-for-Firefox.html)

### <a id="support-metadata"></a>Support of OLAP metadata pre-sets

Upon initialization, the `igOlapXmlaDataSource` component loads all the available metadata from the server. You can limit the downloaded metadata to a relevant pre-configured set by specifying database, cube, and measure group.

#### Related Topics:

-   [Adding igOlapXmlaDataSource](igOlapXmlaDataSource-Adding.html)

### <a id="data-slice-generation"></a>Data slices generation

The `igOlapXmlaDataSource` component represents an abstraction of a pivot table. It has rows, columns, filters, and measures collections to which data source hierarchies and measures can be added. After adding items to these collections, `igOlapXmlaDataSource` downloads the needed data and writes it in an [$ig.OlapResult](%%jQueryApiUrl%%/ig.OlapResult) object, which can be obtained through the result property. This object has row and column axes containing the hierarchies’ members and an array of data cell objects containing the measure values according to the present measures.

#### Related Topics:

-   [Configuring the Tabular View of the Result Set by Arranging the Columns, Rows, Filters, and Measures of the Pivot Grid (igOlapFlatDataSource, igOlapXmlaDataSource, igPivotDataSelector, igPivotGrid, igPivotView)](Configuring-the-Tabular-View.html)

### <a id="integration-with-igniteui"></a>Integration with Ignite UI controls

The `igOlapXmlaDataSource` component can feed data to those data visualization controls of Ignite UI that are capable of presenting OLAP data. The controls supported at this writing are `igPivotDataSelector`, `igPivotGrid`, and `igPivotView`.

#### Related Topics:

-   [**igPivotDataSelector Overview**](igPivotDataSelector-Overview.html)
-   [**igPivotGrid Overview**](igPivotGrid-Overview.html)
-   [**igPivotView Overview**](igPivotView-Overview.html)



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igOlapXmlaDataSource to an HTML Page](igOlapXmlaDataSource-Adding-to-an-HTML-Page.html): This topic explains how to add the `igOlapXmlaDataSource` to and HTML page and how to configure it for retrieving data from a Microsoft® SQL Server Analysis Services (SSAS) Server.

- [Adding igOlapXmlaDataSource to an ASP.NET MVC Application](igOlapXmlaDataSource-Adding-to-an-ASPNETMVC-Application.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapXmlaDataSource` component to an ASP.NET MVC application using the ASP.NET MVC helper.

- [Data Provider Configuration (igOlapXmlaDataSource)](igOlapXmlaDataSource-Data-Provider-Configuration.html): This is a group of topics explaining how to configure the `igOlapXmlaDataSource` data providers.

- [Configuring the Tabular View of the Result Set by Arranging the Columns, Rows, Filters, and Measures of the Pivot Grid (igOlapFlatDataSource, igOlapXmlaDataSource, igPivotDataSelector, igPivotGrid, igPivotView)](Configuring-the-Tabular-View.html): This topic explains how to configure the tabular View of the OLAP cube result set by arranging the hierarchies of the pivot grid columns, rows, filters, and measures, either from the grid’s interface or programmatically in the code.

- [Key Performance Indicators Support (igPivotGrid, igPivotDataSelector, igOlapXmlaDataSource)](igPivotGrid-KPI-Support.html): This topic explains conceptually how the Key Performance Indicators (KPIs) data from a multi-dimensional (OLAP) data set is visualized in Ignite UI™. The Ignite UI controls that visualize KPIs are the `igPivotDataSelector` and the `igPivotGrid`.

- [Known Issues and Limitations (igOlapXmlaDataSource)](igOlapXmlaDataSource-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igOlapXmlaDataSource` component.

- [igPivotDataSelector Overview](igPivotDataSelector-Overview.html): This topic provides conceptual information about the `igPivotDataSelector` control including its main features, minimum requirements, and user functionality.

- [igPivotGrid Overview](igPivotGrid-Overview.html): This topic provides conceptual information about the `igPivotGrid` control including its main features, minimum requirements, and user functionality.

- [igPivotView Overview](igPivotView-Overview.html): This topic provides conceptual information about the `igPivotView` control including its main features, minimum requirements, and user functionality.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Binding igPivotGrid to Xmla Data Source](%%SamplesUrl%%/pivot-grid/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapXmlaDataSource` and uses an `igPivotDataSelector` for data selection.

- [Using the ASP.NET MVC Helper with Xmla Data Source](%%SamplesUrl%%/pivot-data-selector/using-the-asp-net-mvc-helper-with-xmla-data-source): This sample demonstrates how to use the ASP.NET MVC Helper for the `igOlapXmlaDataSource` and how to use this data source in `igPivotDataSelector` and `igPivotGrid`.

- [Binding igPivotView to XMLA to Show KPIs](%%SamplesUrl%%/pivot-view/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotView` to an `igOlapXmlaDataSource`.





 

 


