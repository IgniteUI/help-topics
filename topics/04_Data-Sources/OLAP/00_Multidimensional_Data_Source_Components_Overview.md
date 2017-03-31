<!--
|metadata|
{
    "fileName": "multidimensional-data-source-components-overview",
    "controlName": "",
    "tags": ["Data Binding","Getting Started"]
}
|metadata|
-->

# Multidimensional (OLAP) Data Source Components Overview



## Topic Overview

### Purpose

This topic provides an overview of the multidimensional data source components of %%ProductName%%® and their functionality.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- External Resources
	-   [Pivot Table](http://en.wikipedia.org/wiki/Pivot_table)
	-   [Online analytical processing (OLAP)](http://en.wikipedia.org/wiki/Online_analytical_processing)
	-   [Microsoft Analysis Services](http://en.wikipedia.org/wiki/Microsoft_Analysis_Services)



## Multidimensional (OLAP) Data Source Components

### Components summary

The multidimensional data source components in %%ProductName%% – [`igOlapFlatDataSource`](igOlapFlatDataSource.html)™ and [`igOlapXmlaDataSource`](igOlapXmlaDataSource.html)™ – operate as “intermediaries” between actual data (OLAP Cube or a flat data collection) and the visual controls used to display the data (like [`igPivotView`](igPivotView.html)™, [`igPivotGrid`](igPivotGrid.html)™, and [`igPivotDataSelector`](igPivotDataSelector.html)™). Both [`igOlapFlatDataSource`](igOlapFlatDataSource.html) and [`igOlapXmlaDataSource`](igOlapXmlaDataSource.html) provide an abstraction of a pivot table with all its elements – rows, columns, filters and measures, filtering mechanisms, etc. – that can be used to retrieve the data resulting from interaction with those elements.

### Functionalities implemented through components

The following table summarizes the data retrieval functionalities covered by each of the multidimensional data source components.

Functionality | Control
--------------|--------
Using data from a Microsoft® Analysis Services Server (MASS) | [igOlapXmlaDataSource](igOlapXmlaDataSource.html)
Enabling pivot table-like analysis on flat data collections | [igOlapFlatDataSource](igOlapFlatDataSource.html)



For details about individual controls, refer to [Individual components summary](#individual-components-summary)

### <a id="individual-components-summary"></a> Individual components summary

The following summarizes the capabilities of the `igOlapXmlaDataSource` and `igOlapFlatDataSource` components.

#### igOlapXmlaDataSource

This is a JavaScript client-side component for obtaining data from an MS SSAS server. `igOlapXmlaDataSource` fetches the needed data from the server and generates the required Multidimensional Expressions (MDX) queries based on the interactions with it. This mode of operation enables you to use OLAP data without having to understand, MDX, XML for Analysis (XMLA) and other specifics regarding communicating with an MS SSAS server.

**Related Topics**

-   [igOlapXmlaDataSource Overview](igOlapXmlaDataSource-Overview.html)

#### igOlapFlatDataSource

This is a JavaScript client-side component for making data aggregations over a flat data collection thus enabling pivot-table-like analysis of the data. The `igOlapFlatDataSource` accepts either a flat data collection or an instance of the `igDataSource`. Based on the input data, `igOlapFlatDataSource` makes the necessary aggregations to enable pivot analysis on the data. You can define your own dimensions, hierarchies, levels, and measures based on the underlying data source.

**Related Topics**

-   [igOlapFlatDataSource Overview](igOlapFlatDataSource-Overview.html)





## Related Content

### Topics

The following topics provide additional information related to this topic.

- [igOlapXmlaDataSource](igOlapXmlaDataSource.html): This is a group of topics explaining the `igOlapXmlaDataSource` control and its use.

- [igOlapFlatDataSource](igOlapFlatDataSource.html): This is a group of topics explaining the `igOlapFlatDataSource` control and its use.



### Samples

The following samples provide additional information related to this topic.

- [Binding igPivotView to XMLA to Show KPIs](%%SamplesUrl%%/pivot-view/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotView` to an `igOlapXmlaDataSource`.

- [Binding igPivotView to Flat Data Source](%%SamplesUrl%%/pivot-view/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotView` to an `igOlapFlatDataSource`.





 

 


