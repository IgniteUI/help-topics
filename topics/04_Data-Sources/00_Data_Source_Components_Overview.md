<!--
|metadata|
{
    "fileName": "data-source-components-overview",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Data Source Components Overview

## Topic Overview

This topic provides a conceptual overview of the data source components available in Ignite UI®.

### Required background

The following table lists the concepts and topics required as a prerequisite to understanding this topic.

**Concept**

-   data source component

**Topics**

- [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html): This topic provides an overview of the Ignite UI product.


## Introduction
### Data source components summary

The data source components available in the Ignite UI suite are client-side components intended to serve as a mediator between the actual data and the visual components that visualize the data. Multiple kinds of input data are supported. Ignite UI data source components fall into the following categories:

-   Flat data source components (`igDataSource`™) used for feeding data-bound controls that visualize standard, ”flat” and hierarchical data (i.e. data that is not multidimensional) in the form of a regular table (grid)
-   Multidimensional OLAP data source components (`igOlapFlatDataSource`™, `igOlapXmlaDataSource`™) used for visualizing data as an OLAP data slice in a pivot grid. The original supplied data set at that can be either in authentic OLAP format (and fed to the `igOlapXmlaDataSource` component) or in standard “flat” data (and fed to the `igOlapFlatDataSource` component). (In the latter case, “flat” data can be visualized in a pivot grid as OLAP data.)



## Individual Data Source Components Summary
### Individual data source components summary chart

The following table provides summaries of the purpose and capabilities of the Ignite UI data source components. Additional details about each component are available after the table, including links to dedicated topics about the component.

Component | Description
---|---
[igDataSource](igDataSource-igDataSource.html) | The standard Ignite UI component for binding to various kinds and sources of data. The `igDataSource` transforms source data format into a format that can be fed to data-bound controls like the `igGrid`™.
[igOlapXmlaDataSource](igOlapXmlaDataSource.html) | A component for feeding multi-dimensional (OLAP) data visualization controls with OLAP data from a Microsoft® SQL Server® Analysis Services (SSAS) server.
[igOlapFlatDataSource](igOlapFlatDataSource.html) | A component for feeding multi-dimensional (OLAP) data visualization controls with flat data to be presented in OLAP format. This allows for OLAP-like analysis on a flat data collection.



### igDataSource

The `igDataSource` component is the standard Ignite UI component for binding to various kinds and sources of data. It serves as an intermediate layer between the data-bound controls like `igGrid` and the actual data,which can be either local (e.g. JSON, XML, JavaScript Array, etc.) or remote (REST services, WCF services, etc.). Paging, filtering, and sorting are supported, too.

#### Related Topics

-   [](igDataSource-igDataSource.html)[igDataSource](igDataSource-igDataSource.html)

### igOlapXmlaDataSource

`igOlapXmlaDataSource` is a component for feeding multi-dimensional (OLAP) data visualization controls with OLAP data from a Microsoft SSAS server. `igOlapXmlaDataSource` handles the communication between a JavaScript client and an `msmdpump.dll` HTTP provider for SSAS data. Its interaction with the OLAP data visualization control is transparent.

#### Related Topics

-   [](igOlapXmlaDataSource.html)[igOlapXmlaDataSource](igOlapXmlaDataSource.html)

### igOlapFlatDataSource

`igOlapFlatDataSource` is a component for feeding multi-dimensional (OLAP) data visualization controls with flat data to be presented in OLAP format. This allows for OLAP-like analysis on a flat data collection. By making all necessary data aggregations and summarizations. Its interaction with the OLAP data visualization control is transparent.

#### Related Topics

-   [](igOlapFlatDataSource.html)[igOlapFlatDataSource](igOlapFlatDataSource.html)



## Related Content
### Topics

The following topics provide additional information related to this topic.

- [igDataSource](igDataSource-igDataSource.html): This is a group of topics explaining the `igDataSource` component and its use.

- [igOlapXmlaDataSource](igOlapXmlaDataSource.html): This is a group of topics explaining the `igOlapXmlaDataSource` component and its use.

- [igOlapFlatDataSource](igOlapFlatDataSource.html): This is a group of topics explaining the `igOlapFlatDataSource` component and its use.

- [igGrid](igGrid.html): This is a group of topics explaining the `igGrid` control and its use.

- [igPivotGrid](igPivotGrid.html): This is a group of topics explaining the `igPivotGrid`™ control and its use.

- [igPivotDataSelector](igPivotDataSelector.html): This is a group of topics explaining the `igPivotDataSelector`™ control and its use.


### Samples

The following samples provide additional information related to this topic.

- [XML Binding](%%SamplesUrl%%/data-source/xml-binding): This sample demonstrates how to bind our jQuery Data Source component to XML data.

- [Binding to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapFlatDataSource` and uses an `igPivotDataSelector` for data selection.

- [Binding to Xmla Data Source](%%SamplesUrl%%/pivot-grid/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapXmlaDataSource` and uses an `igPivotDataSelector` for selection.





 

 


