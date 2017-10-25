<!--
|metadata|
{
    "fileName": "iggrid-cellmerging-overview",
    "controlName": "igGrid",
    "tags": ["Grids","Grouping","Styling"]
}
|metadata|
-->

# Cell Merging Overview (igGrid)

## Topic Overview

### Purpose

This topic explains the `igGrid`™ control’s Cells Merging feature and its functionality. It contains code examples demonstrating how to enable and configure cell merging in the `igGrid`.

### Required background

The following lists the topic required as a prerequisite to understanding this topic.

- [igGrid Overview](igGrid-Overview.html): The `igGrid` is a jQuery-based client-side grid that is responsible for presenting and manipulating tabular data. Its whole lifecycle is on the client-side, which makes it independent from server-side technology.

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
    -   [Visual Cell Merging](#intro-visual)
    -   [Physical Cell Merging](#intro-physical)
-   [**Enabling Cell Merging**](#enabling)
    -   [Enabling Cell Merging in JavaScript](#enabling-js)
    -   [Enabling Cell Merging in ASP.NET MVC](#enabling-mvc)
-   [**Configuring when Cell Merging is applied**](#mergeOn)
    -   [For all columns](#mergeOn-all)
    -   [For specific columns](#mergeOn-column)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)


## <a id="introduction"></a> Introduction

The feature allows users to merge the cells in a column visually or physically when they have the same value (display text). Enabling the feature by default will apply visually the cell merging when a column is being sorted. This means that if single sorting is used, when you sort a different column, the previous column loses the cell merging applied.

Since by default cell merging is applied only on sorting, by setting the [*mergeOn*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeOn) property to "always" the user can enable the feature to merge cells when the grid is initialized and throughout the interaction with it. This is useful when working with a presorted data source.

#### <a id="intro-visual"></a> Visual Cell Merging

By default when enabling Cell Merging the method by which cells in a column are merged is by a special styling as illustrated in the following screenshot.

![](images/igGrid_CellMerging_Visual.jpg)


You may use the predefined CSS classes in order to customize the look of the merged cells. For more information regarding the styling, please refer to the [CSS Classes Reference](%%jQueryApiUrl%%/ui.iggridcellmerging#theming) topic.


#### <a id="intro-physical"></a> Physical Cell Merging

If the user need to have only one cell in the place of the merged cells the physical cell merging can be used. This is useful for text that could span across multiple cells when merged. The way it works is the same way cell merging would work on an HTML Table by setting *rowspan* of a cell, that could span multiple rows. This method is illustrated in the following screenshot.

![](images/igGrid_CellMerging_Physical.jpg)

The resulting merged cells can be styled through custom css class called [*ui-iggrid-physicalmergedcell*](%%jQueryApiUrl%%/ui.iggridcellmerging#theming:ui-iggrid-physicalmergedcell). It is useful for example when the user want to position the text of the cells differently from the default vertical center position.

## <a id="enabling"></a> Enabling Cell Merging

The `igGrid`, by default, does not enable cell merging so you will need to enable it explicitly. This is done differently in JavaScript and ASP.NET MVC.

To enable Cell Merging in… | Do this…
---------------------------|---------
JavaScript | Define the Cell Merging configuration in the grid’s `features` array.
ASP.NET MVC | Instantiate the Cell Merging feature in the delegate passed to the grid’s `Features` method.

### <a id="enabling-js"></a> Enabling Cell Merging in JavaScript

The following code creates an `igGrid` instance bound to the Products table data from the AdventureWorks database. The columns are auto-generated. Cell Merging is enabled with its default configuration (`initialState` is `regular`).

**In JavaScript:**

<div class="embed-sample">
   [Cell Merging](%%SamplesEmbedUrl%%/grid/cell-merging)
</div>


### <a id="enabling-mvc"></a> Enabling Cell Merging in ASP.NET MVC

The following code creates `igGrid` instance bound to a custom `Product` object collection defined as a View model. The columns are auto-generated. Enable Cell Merging with its default configuration (`initialState` is `regular`).

**In Razor:**

```csharp
@(Html.Infragistics()
    .Grid(Model)
    .AutoGenerateColumns(true)
    .Features(feature =>
    {
        feature.CellMerging();
    })
    .DataBind()
    .Render()
)
```



## <a id="mergeOn"></a> Configuring when Cell Merging is applied

This section explains how you can configure the Cell Merging feature to be applied always for all columns or for specific columns only.

### <a id="mergeOn-all"></a> For all columns

The following sample demonstrates how to set the Cell Merging’s mergeOn rule so all columns would have their cells merged:

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: adventureWorks,
    autoGenerateColumns: true,
    features: [
        {
            name: "CellMerging",
            mergeOn: "always"
        }
    ]
});
```

**In Razor:**

```csharp
@(Html.Infragistics().Grid(Model)
    .AutoGenerateColumns(true)
    .ID("grid1")
    .Features(f => f.CellMerging().MergeOn(CellMergingMergeOn.Always))
    .DataBind()
    .Render()
)
```

### <a id="mergeOn-all"></a> For specific columns

The following sample demonstrates how to set the Cell Merging’s mergeOn rule so that the cells for column with key "City" will be merged at all times. 

If we have Sorting feature enabled and we sort a column, cell merging will be applied to it as well. This is due to the default behavior of Cell Merging and because we haven't set options for the other columns. That is why the "City" column cells will remain merged.

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: adventureWorks,
    autoGenerateColumns: true,
    features: [
        {
            name: "CellMerging",
            columnSettings: [
                {
                    columnKey: "City",
                    mergeOn: "always"
                }
            ]
        }
    ]
});
```

**In Razor:**

```csharp
@(Html.Infragistics().Grid(Model)
    .AutoGenerateColumns(true)
    .ID("grid1")
    .Features(features => 
        features.CellMerging().ColumnSettings(settings =>
            settings.ColumnSetting().ColumnKey("City").MergeOn(CellMergingMergeOn.Always)
        );
    )
    .DataBind()
    .Render()
)
```

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igGrid Overview](igGrid-Overview.html)
- [igGrid Sorting](igGrid_Sorting_Overview.html)
