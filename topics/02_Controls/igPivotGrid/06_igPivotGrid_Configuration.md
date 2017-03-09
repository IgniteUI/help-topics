<!--
|metadata|
{
    "fileName": "igpivotgrid-configuration",
    "controlName": "igPivotGrid",
    "tags": ["Getting Started", "Configuring","Pivot Grid"]
}
|metadata|
-->

# Configuring igPivotGrid



## Topic Overview

### Purpose

This topic discusses how to configure the `igPivotGrid`™ control.

### In this topic
This topic contains the following sections:
-   [Basic Configuration](#basic)
-   [Advanced Configurations](#advanced)
    - [Custom Move Validation](#custom-move-validation)
    - [Drag and Drop custom elements](#custom-drag-drop)
    - [Expand Members](#expand)
-   [Related Content](#related-content)

## <a id='basic'></a>  Basic Configuration

The following table lists the basic options that need to be defined in order to display the data in a pivot table.

For the igPivotGrid:

Option| Description | 
------|-------------|
 [dataSource](%%jQueryApiUrl%%/ui.igPivotGrid#options:dataSource)| An instance of $.ig.OlapXmlaDataSource or $.ig.OlapFlatDataSource.

The **$.ig.OlapXmlaDataSource** component handles the communication with a Microsoft® SQL Server Analysis Services (SSAS) server configured with the msmdpump.dll HTTP data provider. 
The relevant basic settings for it are:

Option| Description | 
------|-------------|
[serverUrl](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.serverUrl)| The URL of the XMLA server.
[catalog](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.catalog)| The catalog name.
[cube](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.cube) | The name of the cube in the data source.
[rows](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.rows) | A list of hierarchy names separated by comma (,). These will be the hierarchies in the rows of the data source.
[columns](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.columns) | A list of hierarchy names separated by comma (,). These will be the hierarchies in the columns of the data source.
[measures](%%jQueryApiUrl%%/ig.OlapXmlaDataSource#options:options.measures) | A list of measure names separated by comma (,). These will be the measures of the data source.

You can refer to the following basic sample with an example configuration.
- [Binding to Xmla Data Source](%%SamplesUrl%%/pivot-grid/binding-to-xmla-data-source)

The **$.ig.OlapFlatDataSource** component allows multi-dimensional (OLAP-like) analysis to be performed on a flat data collection.
The relevant basic settings for it are:


For the OlapFlatDataSource:

Option| Description | 
------|-------------|
[dataSource](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.dataSource)| Specifies any valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself.
[metadata](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.metadata)| An object containing processing instructions for the $.ig.DataSource data.
[metadata.cube](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.cube)|Metadata used for the creation of the cube.
[metadata.cube.measuresDimension](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.cube)| An object providing information about the measures' root node.
[metadata.cube.dimensions](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.dimensions)|An array of dimension metadata objects.
[rows](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.rows)| A list of hierarchy names separated by comma (,). These will be the hierarchies in the rows of the data source.
[columns](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.columns)| A list of hierarchy names separated by comma (,). These will be the hierarchies in the columns of the data source.
[measures](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options:options.measures)|  list of measure names separated by comma (,). These will be the measures of the data source.

You can refer to the following basic sample with an example configuration.
- [Binding to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source)

## <a id='advanced'></a>  Advanced Configurations

The following sections show how to configure custom scenarios.

### <a id='custom-move-validation'></a> Custom Move Validation

The igPivotGrid allows specifying a [customMoveValidation](%%jQueryApiUrl%%/ui.igPivotGrid#options:customMoveValidation) function, which allows specifying whether a move operation should be allowed or not.

The below sample demonstrates how to forbid dropping items to the columns of the PivotGrid. Also any hierarchy that contains the word "Seller" in its name will not be accepted by the drop areas in the Pivot Grid and the Data Selector.

<div class="embed-sample">
   [Custom Move Validation](%%SamplesEmbedUrl%%/pivot-grid/custom-drag-drop-validation)
</div>

### <a id='custom-drag-drop'></a> Drag and Drop custom elements

The following steps will guide you through the process of implementing dragging and dropping of custom elements in the igPivotGrid.

#### Steps
1. Define elements with the data-type and data-name attributes.

 The data-type should be set to the type of element, could be: Dimension, Hierarchy, Measure or Level. The data-name should be the related value.
 For exampe:

 ```html
         <div class="ui-igpivot-metadataitem ui-state-default ui-corner-all custom-draggable"
             data-type="Hierarchy"
             data-name="[Seller].[Seller]"><span>Hierarchy: Seller</span></div>
        <div class="ui-igpivot-metadataitem ui-state-default ui-corner-all custom-draggable"
            data-type="Measure"
            data-name="[Measures].[UnitsSold]"><span>Measure: Units Sold</span></div>
 ```

2. Make the defined elements draggable using jQuery UI's [draggable](https://jqueryui.com/draggable/) Interactions.

You can refer to the below sample with a similar configuration.

<div class="embed-sample">
   [Drag Drop Custom Elements](%%SamplesEmbedUrl%%/pivot-grid/drag-drop-custom-elements)
</div>

### <a id='expand'></a> Expand Members

In order to programatically expand members in the Pivot Grid the [expandTupleMember](%%jQueryApiUrl%%/ui.igPivotGrid#methods:expandTupleMember) method can be used.
The below sample demonstrates how to use the method when the grid's data source is initialized on the [dataSourceInitialized](%%jQueryApiUrl%%/ui.igPivotGrid#events:dataSourceInitialized) event handler.

<div class="embed-sample">
   [Expand Members](%%SamplesEmbedUrl%%/pivot-grid/expand-members)
</div>


## <a id="related-content"></a> Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igPivotGrid to an HTML Page](igPivotGrid-Adding-to-an-HTML-Page.html): This topic demonstrates how to add the `igPivotGrid` to an HTML page.

- [Adding igPivotGrid to an ASP.NET MVC Application](igPivotGrid-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotGrid` control to an ASP.NET MVC application using the ASP.NET MVC helper.

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Binding to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapFlatDataSource` and uses an `igPivotDataSelector` for data selection.

- [Using the ASP.NET MVC Helper with Xmla Data Source](%%SamplesUrl%%/pivot-grid/using-the-asp-net-mvc-helper-with-xmla-data-source): This sample demonstrates how to use the ASP.NET MVC Helper for the `igPivotGrid` with `igOlapXmlaDataSource`.

- [Sorting](%%SamplesUrl%%/pivot-grid/sorting): This sample demonstrates how to enable sorting in the `igPivotGrid` and how to apply sorting for specific levels upon initialization.

- [Layout Modes](%%SamplesUrl%%/pivot-grid/layout-modes): This sample compares the layout of the `igPivotGrid` when compact column and row headers are enabled or disabled.





 

 


