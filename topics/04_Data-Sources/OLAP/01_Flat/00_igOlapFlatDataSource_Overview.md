<!--
|metadata|
{
    "fileName": "igolapflatdatasource-overview",
    "controlName": "igOlapFlatDataSource",
    "tags": ["Getting Started","Grids"]
}
|metadata|
-->

# igOlapFlatDataSource Overview

## Topic Overview
### Purpose

This topic provides an overview of the `igOlapFlatDataSource`™ component and its main features.

### Required background

The following table lists the topics and concepts required as a prerequisite to understanding this topic.

**Topics**

- [Multidimensional (OLAP) Data Source Components](Multidimensional-Data-Source-Components.html): This group of topics explain the multidimensional (OLAP) data source components of the %%ProductName%%™ suite.

External Resources

-   [Pivot Table](http://en.wikipedia.org/wiki/Pivot_table)
-   [Online analytical processing](http://en.wikipedia.org/wiki/Online_analytical_processing) (OLAP)



### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Main Features Summary**](#main-features)
    -   [Main features summary chart](#main-features-summary)
    -   [Multiple data types support](#multiple-data-types)
    -   [OLAP metadata generation](#olap-metadata-generation)
    -   [Data slices generation](#data-slice-generation)
    -   [Integration with %%ProductName%% controls](#integration-with-igniteui)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction

The `igOlapFlatDataSource` component enables multi-dimensional (OLAP-like) analysis to be performed on flat data collections. Given a data collection or an [igDataSource](igDataSource-igDataSource.html)™ instance and based on the user configuration, it extracts the necessary metadata in order to create dimensions of hierarchies and measures. The `igOlapFlatDataSource` component also performs calculations and aggregates data as requested using the component’s API directly or through one or more of the %%ProductName%% widgets capable of visualizing and interacting with OLAP data, e.g. `igPivotView`™ or `igPivotGrid`™.


## <a id="main-features"></a>Main Features Summary
### <a id="main-features-summary"></a>Main features summary chart

The following table summarizes the main features of the `igOlapFlatDataSource` component.

- [Multiple data types support](#multiple-data-types): Any data source supported by the `igDataSource` component can be used as input data.

- [OLAP metadata generation](#olap-metadata-generation): The `igOlapFlatDataSource` allows programmatically defining of custom metadata structure based on your input data.

- [Data slices generation](#data-slice-generation): After hierarchies are assigned as rows/columns, the `igOlapFlatDataSource` generates one or more result axes containing tuples of members from the corresponding hierarchies. If measures, too, have been chosen, the `igOlapFlatDataSource` generates a two-dimensional array of value cell objects.

- [Integration with %%ProductName%% controls](#integration-with-igniteui): The `igOlapFlatDataSource` component can feed data to those data visualization controls of %%ProductName%% that are capable of presenting OLAP data.



### <a id="multiple-data-types"></a>Multiple data types support

Any data source supported by the `igDataSource` component can be used as input data for `igOlapFlatDataSource`. The `igOlapFlatDataSource` component works on top of an `igDataSource` instance that is being fed with data. Alternatively, you can use any data source supported by the `igDataSource` component, by specifying a data source options object. This way, you can perform an Online Analytical Processing (OLAP) analysis on almost any data collection. For a list of the data types supported by `igDataSource`, refer to [igDataSource Overview](igDataSource-igDataSource-Overview.html).

#### Related Topics:

-   [**Adding igOlapFlatDataSource to HTML Page**](igOlapFlatDataSource-Adding-to-an-HTML-Page.html)

### <a id="olap-metadata-generation"></a>OLAP metadata generation

The `igOlapFlatDataSource` allows programmatically defining of custom metadata structure based on your input data. You can specify a data sub-set of your data objects when generating the members of a level and when calculating the values for a measure. You can define hierarchies and specify which levels to be used for a hierarchy. You can group the hierarchies to dimensions and also specify some properties for the cube to which these dimensions belong.

#### Related Topics:

-   [**Defining Hierarchies and Providing Metadata with Flat Data**](igOlapFlatDataSource-Defining-Metadata.html)

### <a id="data-slice-generation"></a>Data slices generation

The `igOlapFlatDataSource` component represents an abstraction of a pivot table. It has rows, columns, filters, and measures collections to which data source hierarchies and measures can be added. After adding items to these collections, `igOlapFlatDataSource` calculates the required data values and writes them in an [$ig.OlapResult](%%jQueryApiUrl%%/ig.OlapResult) object which can be obtained through the result property. This object has row and column axes containing the hierarchies’ members and an array of data cell objects containing the measure values based on the existing measures.

#### Related Topics:

-   [**Configuring the Tabular View of the Result Set by Arranging the Columns, Rows, Filters, and Measures of the Pivot Grid (igOlapFlatDataSource, igOlapXmlaDataSource, igPivotDataSelector, igPivotGrid, igPivotView)**](Configuring-the-Tabular-View.html)

### <a id="integration-with-igniteui"></a>Integration with %%ProductName%% controls

The `igOlapFlatDataSource` component can feed data to those data visualization controls of %%ProductName%% that are capable of presenting OLAP data. The controls supported at this writing are `igPivotDataSelector`, `igPivotGrid`, and `igPivotView`.

#### Related Topics:

-   [**igPivotDataSelector Overview**](igPivotDataSelector-Overview.html)
-   [**igPivotGrid Overview**](igPivotGrid-Overview.html)
-   [**igPivotView Overview**](igPivotView-Overview.html)



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [**Adding igOlapFlatDataSource**](igOlapFlatDataSource-Adding.html): The topics in this group cover adding `igOlapFlatDataSource` to an HTML page and an ASP.NET MVC View.

- [**Defining Metadata (igOlapFlatDataSource)**](igOlapFlatDataSource-Defining-Metadata.html): This topic explains how to define metadata for the data used with `igOlapFlatDataSource` so that flat data can be presented in multi-dimensional (OLAP) form.

- [**Configuring the Tabular View of the Result Set by Arranging the Columns, Rows, Filters, and Measures of the Pivot Grid (igOlapFlatDataSource, igOlapXmlaDataSource, igPivotDataSelector, igPivotGrid, igPivotView)**](Configuring-the-Tabular-View.html): This topic explains how to configure the tabular View of the OLAP cube result set by arranging the hierarchies of the pivot grid columns, rows, filters, and measures, either from the grid’s interface or programmatically in the code.

- [**igPivotDataSelector Overview**](igPivotDataSelector-Overview.html): This topic provides conceptual information about the `igPivotDataSelector` control including its main features, minimum requirements, and user functionality.

- [**igPivotGrid Overview**](igPivotGrid-Overview.html): This topic provides conceptual information about the `igPivotGrid` control including its main features, minimum requirements, and user functionality.

- [**igPivotView Overview**](igPivotView-Overview.html): This topic provides conceptual information about the `igPivotView` control including its main features, minimum requirements, and user functionality.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Binding igPivotGrid to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapFlatDataSource` and uses an `igPivotDataSelector` for data selection.

- [Using the ASP.NET MVC Helper with Flat Data Source](%%SamplesUrl%%/pivot-data-selector/using-the-asp-net-mvc-helper-with-flat-data-source): This sample demonstrates how to use the ASP.NET MVC Helper for the `igOlapXmlaDataSource` and how to use this data source in `igPivotDataSelector` and `igPivotGrid`.

- [Binding igPivotView to Flat Data Source](%%SamplesUrl%%/pivot-view/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotView` to an `igOlapFlatDataSource`.





 

 


