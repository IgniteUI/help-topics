<!--
|metadata|
{
    "fileName": "iggrid-cellmerging-advanced",
    "controlName": "igGrid",
    "tags": ["Grids","CellMerging", "Advanced", "Customization"]
}
|metadata|
-->

# Cell Merging Advanced Customization (igGrid)

## Topic Overview

### Purpose

This topic explains the `igGrid`™ control’s Cells Merging feature and how to customize it even further. It contains code examples on how this can be achieved in the `igGrid`.

### Required background

The following lists the topic required as a prerequisite to understanding this topic.

- [igGrid Cell Merging Overview](igGrid-CellMerging_Overview.html): This topic shows you how to enable the Cell Merging feature to be used inside `igGrid`.

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Pre-defined Merge Strategies**](#merge-predefined)
    -   [Duplicate strategy](#merge-duplicate)
    -   [Null strategy](#merge-null)
-   [**Custom Merge Strategies**](#merge-custom)
    -   [Example](#merge-custom-example)
    -   [Live Sample](#merge-custom-sample)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)


## <a id="introduction"></a> Introduction

The Cell Merging feature by default provides two merging criteria that can be used. The first one is checking for duplicate cell values, the second one merges two cells if the second one has a *null* value. Aside from those pre-defined methods, the [*mergeStrategy*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeStrategy) option can be used to define a custom one as well.

In the next sections we will go in detail showing both pre-defined methods of merging as well as give an example of how to define a custom one to be used in a more complex scenario. We will focus mainly on *"physical"* cell merging. *"visual"* cell merging is similar to it in terms of configuration, but it can have slight difference in the visible result.

## <a id="merge-predefined"></a> Pre-defined Merge Strategies

In order to specify which pre-defined method to be used for merging cells, the [*mergeStrategy*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeStrategy) will need to be set either to "duplicate" or "null". By default the *mergeStrategy* option is set to "duplicate"

### <a id="merge-duplicate"></a> Duplicate strategy

When the `mergeStrategy` option is set to *"duplicate"*, the way it determines if two cells need to be merged is by comparing their cell values. If they have one type and are the same, the two cells will be eligible for merging. After that depending on the [*mergeType*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeType) option cells  will be merged accordingly. 

Since we are merging cells on duplicate values, each row in the data for the grid would need to have these values as well. Let's take for example the following data structure:

```json
var productData1 = [
    { ActionID: "1", ProjectName: "IOT Switch Project", ActionName: "Data Import", /*...*/ },
    { ActionID: "2", ProjectName: "IOT Switch Project", ActionName: "Reports", /*...*/ },
    { ActionID: "4", ProjectName: "IOT Switch Project", ActionName: "Multiple Settings", /*...*/},
    { ActionID: "3", ProjectName: "IOT Switch Project", ActionName: "Data Archiving", /*...*/ },
    { ActionID: "5", ProjectName: "IOT Switch Project", ActionName: "Main Menu: Return Button", /*...*/ },
    { ActionID: "6", ProjectName: "IOT Switch Project", ActionName: "Auto Turn Off", /*...*/ },
    { ActionID: "7", ProjectName: "VR Device", ActionName: "Higher DRI", /*...*/ },
    { ActionID: "8", ProjectName: "VR Device", ActionName: "Accessible Power Button", /*...*/ },
    { ActionID: "9", ProjectName: "VR Device", ActionName: "Additional options", /*...*/ },
    { ActionID: "10", ProjectName: "VR Device", ActionName: "Data Log", Type: "Request", /*...*/ },
    { ActionID: "12", ProjectName: "VR Device", ActionName: "Motion Blur", Type: "Bug", /*...*/ },
    { ActionID: "11", ProjectName: "VR Device", ActionName: "Left Sensors Delay", /*...*/ },
]
```

In order to initialize physical Cell Merging with *"duplicate"* strategy we can use the default value of `mergeStrategy` to our advantage and do not set it:

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: productData1,
    primaryKey: "ActionID",
    autoGenerateColumns: false,
    columns: [
        { headerText: "Product ID", key: "ActionID", dataType: "number", hidden: true },
        { headerText: "Project Name", key: "ProjectName", dataType: "string", width: 200 },
        //...
    ],
    features: [
        {
            name: "CellMerging",
            mergeOn: "always",
            mergeType: "physical"
        }
    ]
});
```

**In Razor:**

```csharp
@(Html.Infragistics().Grid(Model)
    .ID("grid1")
    .AutoGenerateColumns(false)
    .PrimaryKey("ActionID")
    .Columns(col =>
    {
        col.For(c => c.ActionID).HeaderText("ActionID");
        col.For(c => c.ProjectName).HeaderText("ProjectName");
        //...
    })
    .Features(f =>
    {
        f.CellMerging().MergeOn(CellMergingMergeOn.Always).MergeType(CellMergingMergeType.Physical)
    })
    .DataBind()
    .Render()
)
```

If `mergeType` is *"physical"* only one cell is rendered when representing a merge group. The result of the configuration above would be the screenshot bellow:

![](images/igGrid_CellMerging_Advaced_duplicate_physical.jpg)

This is useful when using physical Cell Merging together with Cell Updating. Then only the first cell in the merge group will be updated. The rest of the cells will remain merged.

### <a id="merge-null"></a> Null strategy

Cell Merging provides also the ability to merge based on null cell values. This scenario differs from the "duplicate" method of merging, because in order the merge two cell, the second cell needs to have *null* value. The first cell can have any value, even *null* as well.

Let's have the following data:

```json
var productData2 = [
    { ActionID: "1", ProjectName: "IOT Switch Project", ActionName: "Data Import", /*...*/ },
    { ActionID: "2", ProjectName: null, ActionName: "Reports", /*...*/ },
    { ActionID: "4", ProjectName: null, ActionName: "Multiple Settings", /*...*/},
    { ActionID: "3", ProjectName: null, ActionName: "Data Archiving", /*...*/ },
    { ActionID: "5", ProjectName: null, ActionName: "Main Menu: Return Button", /*...*/ },
    { ActionID: "6", ProjectName: null, ActionName: "Auto Turn Off", /*...*/ },
    { ActionID: "7", ProjectName: "VR Device", ActionName: "Higher DRI", /*...*/ },
    { ActionID: "8", ProjectName: null, ActionName: "Accessible Power Button", /*...*/ },
    { ActionID: "9", ProjectName: null, ActionName: "Additional options", /*...*/ },
    { ActionID: "10", ProjectName: null, ActionName: "Data Log", Type: "Request", /*...*/ },
    { ActionID: "12", ProjectName: null, ActionName: "Motion Blur", Type: "Bug", /*...*/ },
    { ActionID: "11", ProjectName: null, ActionName: "Left Sensors Delay", /*...*/ },
]
```

Only one cell for the column needs to carry the "Project Name" information, the rest cells in order to be merged need to be null. When configuring additionally in order to be able to use these *null* values, the columns using this method would need to have `dataType` set to *"object"*:

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: productData2,
    primaryKey: "ActionID",
    autoGenerateColumns: false,
    columns: [
        //...
        { headerText: "Project Name", key: "ProjectName", dataType: "object", width: 200 },
        //...
    ],
    features: [
        {
            name: "CellMerging",
            mergeOn: "always",
            mergeType: "physical",
            mergeStrategy: "null"
        }
    ]
});
```

**In Razor:**

```csharp
@(Html.Infragistics().Grid(Model)
    .ID("grid1")
    .PrimaryKey("ActionID")
    .AutoGenerateColumns(false)
    .Columns(col =>
    {
        col.For(c => c.ActionID).HeaderText("ActionID");
        col.For(c => c.ProjectName).HeaderText("ProjectName");
        //...
    })
    .Features(f =>
    {
        f.CellMerging()
            .MergeOn(CellMergingMergeOn.Always)
            .MergeType(CellMergingMergeType.Physical)
            .MergeStrategy(CellMergingMergeStrategy.Null)
    })
    .DataBind()
    .Render()
)
```

When `mergeType` is *"physical"* the results are almost the same as when using *"duplicate"* merging strategy. The difference is the structure of the data that is being used: 

![](images/igGrid_CellMerging_Advaced_null_physical.jpg)

This is useful when combining Cell Merging with Cell Updating. In this case updating the merged cell would update the whole merge group visually. Regarding the data, it will still update only the first cell value inside the group, the other cells remain *null*.

**Note:** Only the first "Product Name" column receives cell merging, because only that column 

## <a id="merge-custom"></a> Custom Merge Strategies

Cell Merging provides extensible way of using custom merge strategies to better suit different scenarios.

### <a id="merge-custom-example"></a> Example

You may have noticed in our first example that despite Cell Merging performing as expected, we have something that in a real world application could be not desired. As you can see on the next screenshot, the Cell Merging merge cells with the same values between two projects. 

![](images/igGrid_CellMerging_Advaced_custom_problem.jpg)

In this case Cell Merging cannot know initially what the data would be and how we would need to be displayed. This where custom `mergeStrategy` comes. The way it can be achieved is by a custom function that receive the previous record, the current record and column key that indicates on which column currently cell merging is being applied. This can be implemented the following way:

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: productData1,
    primaryKey: "ActionID",
    autoGenerateColumns: false,
    columns: [
        { headerText: "Product ID", key: "ActionID", dataType: "number", hidden: true },
        { headerText: "Project Name", key: "ProjectName", dataType: "string", width: 200 },
        //...
    ],
    features: [
        {
            name: "CellMerging",
            mergeOn: "always",
            mergeType: "physical",
            mergeStrategy: function (prevRec, curRec, columnKey) {
                if ($.type(prevRec[ columnKey ]) === "string" &&
                    $.type(curRec[ columnKey ]) === "string" &&
                        prevRec["ProjectName"] === curRec["ProjectName"]) {
                    //We have cells with string values and matching Project Name
                    return prevRec[ columnKey ].toLowerCase() === curRec[ columnKey ].toLowerCase();
                } else if ( prevRec["ProjectName"] === curRec["ProjectName"]) {
                    //We have other types of cell values and matching Project Name
                    return prevRec[ columnKey ] === curRec[ columnKey ];
                }
                
                //We do not have matching Project Name
                return false;
            }
        }
    ]
});
```

**In Razor:**

```csharp
<script>
    window.mergeCellsProject = function (prevRec, curRec, columnKey) {
        //.
    }
</script>

@(Html.Infragistics().Grid(Model)
    .ID("grid1")
    .PrimaryKey("ActionID")
    .AutoGenerateColumns(false)
    .Columns(col =>
    {
        col.For(c => c.ActionID).HeaderText("ActionID");
        col.For(c => c.ProjectName).HeaderText("ProjectName");
        //...
    })
    .Features(f =>
    {
        f.CellMerging()
            .MergeOn(CellMergingMergeOn.Always)
            .MergeType(CellMergingMergeType.Physical)
            .MergeStrategy("mergeCellsProject")
    })
    .DataBind()
    .Render()
)
```

The result of this custom implementation of `mergeStrategy` would the screenshot bellow:

![](images/igGrid_CellMerging_Advaced_custom_solution.jpg)

With the custom strategy now there are not merged groups going from one project to another and this way it would be easier to distinguish project boundaries. This method can be used to implement other types of logic that will result in better user experience

### <a id="merge-custom-sample"></a> Live Sample

The following sample implements the custom strategy that was demonstrated in the previous chapter.

**In JavaScript:**

<div class="embed-sample">
   [Cell Merging](%%SamplesEmbedUrl%%/grid/cell-merging-custom)
</div>

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igGrid Cell Merging - Overview](igGrid_CellMerging_Overview.html)
- [igGrid Overview](igGrid-Overview.html)
- [igGrid Sorting](igGrid_Sorting_Overview.html)