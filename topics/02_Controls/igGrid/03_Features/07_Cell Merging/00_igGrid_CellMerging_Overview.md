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
-   [**Enabling Cell Merging**](#enabling)
-   [**Enabling Cell Merging – Code Examples**](#enabling-examples)
-   [**Enabling Cell Merging in JavaScript (Code Example)**](#enabling-js)
    -   [Code](#enabling-js-code)
-   [**Enabling Cell Merging in ASP.NET MVC (Code Example)**](#enabling-mvc)
    -   [Code](#enabling-mvc-code)
-   [**Configuring the Initial Cell Merging State of the igGrid**](#initial)
    -   [Property settings](#initial-property-settings)
    -   [Example](#initial-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)


## <a id="introduction"></a> Introduction

The feature allows users to merge the cells in the column visually when they have the same value (display text). Simply enabling the feature will apply the cell merging on each sorted column. Alternatively, by setting the initialState property to merged the user can enable the feature to try and merge cells when the grid is initialized. This is useful when working with a presorted data source.

The merged cells render with a special styling as illustrated in the following screen shot.

![](images/igGrid_CellMerging_Overview.png)

Enabling multiple sorting merges all of the sorted columns. If you use single sorting when you sort a different column, the previous column loses the styling that subsequently applies to the merged cells in the new column.

You may use the predefined CSS classes in order to customize the look of the merged cells. For more information regarding the styling, please refer to the [CSS Classes Reference](igGrid-CellMerging-CSS-Classes-Reference.html) topic.



## <a id="enabling"></a> Enabling Cell Merging

The `igGrid`, by default, does not enable cell merging so you will need to enable it explicitly. This is done differently in JavaScript and ASP.NET MVC.

To enable Cell Merging in… | Do this…
---------------------------|---------
JavaScript | Define the Cell Merging configuration in the grid’s `features` array.
ASP.NET MVC | Instantiate the Cell Merging feature in the delegate passed to the grid’s `Features` method.



## <a id="enabling-examples"></a> Enabling Cell Merging – Code Examples
The following table lists the code examples included in this topic.

- [Enabling Cell Merging in JavaScript](#enabling-js-code): This example demonstrates enabling the `igGrid`’s Cell Merging feature with default configuration (`initialState` is `regular`) in JavaScript.

- [Enabling Cell Merging in ASP.NET MVC](#enabling-mvc): This example demonstrates enabling the `igGrid`’s Cell Merging feature with default configuration (`initialState` is `regular`) in ASP.NET MVC.


### <a id="enabling-js"></a> Enabling Cell Merging in JavaScript (Code Example)

The following code creates an `igGrid` instance bound to the Products table data from the AdventureWorks database. The columns are auto-generated. Cell Merging is enabled with its default configuration (`initialState` is `regular`).

#### <a id="enabling-js-code"></a> Code

**In JavaScript:**

```js
Code
$("#grid1").igGrid({
    dataSource: adventureWorks,
    autoGenerateColumns: true,
    features: [
        {
            name: "CellMerging"
        }
    ]
});
```


### <a id="enabling-mvc"></a> Enabling Cell Merging in ASP.NET MVC (Code Example)

The following code creates `igGrid` instance bound to a custom `Product` object collection defined as a View model. The columns are auto-generated. Enable Cell Merging with its default configuration (`initialState` is `regular`).

#### <a id="enabling-mvc-code"></a> Code

**In C#:**

```csharp
Code
@model IQueryable<Sample.Models.Product>
@(Html.Infragistics()
    .Grid(Model)
    .AutoGenerateColumns(true)
    .Features(feature =>
    {
        feature.CellMerging();
    })
    .DataBind()
    .Render())
```



## <a id="initial"></a> Configuring the Initial Cell Merging State of the *igGrid*

This section explains how you can enable cell merging in `merged` initial state.

### <a id="initial-property-settings"></a> Property settings

The following table maps the desired configuration to property settings.

In order to: | Use this property: | And set it to:
-------------|--------------------|--------------
Enable merged initial state | initialState | "merged"


### <a id="initial-example"></a> Example

Property | Value
---------|------
initialState | "merged"

The following sample demonstrates how to set the cell merging’s initial state in code:

**In JavaScript:**

<div class="embed-sample">
   [Cell Merging](%%SamplesEmbedUrl%%/grid/cell-merging)
</div>

**In ASPX:**

```csharp
@(Html.Infragistics().Grid(Model)
.AutoGenerateColumns(true)
.ID("grid1")
.Features(f => f.CellMerging().InitialState(CellMergingInitialState.Merged))
.DataBind()
.Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Property Reference (Cell Merging, igGrid)](igGrid-CellMerging-Property-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s properties.

- [Event Reference (Cell Merging, igGrid)](igGrid-CellMerging-Event-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s events.

- [CSS Classes Reference (Cell Merging, igGrid)](igGrid-CellMerging-CSS-Classes-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s CSS classes.
