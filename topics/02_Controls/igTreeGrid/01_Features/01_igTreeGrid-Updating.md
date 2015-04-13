<!--
|metadata|
{
    "fileName": "igtreegrid-updating",
    "controlName": ["igTreeGrid"],
    "tags": ["Grids", "Editing"]
}
|metadata|
-->

# Updating (igTreeGrid)

With the `igTreeGrid` Updating feature, you can edit bound data directly from the grid. The updating features of the grid provide a wide array of adding and editing values of the underling set of data bound to the grid.

> **Note:** While the `igTreeGrid` currently does not support full "add new row" functionality from the UI, you can achieve this behavior by using the add row method.


### Required Background

The following lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

- [Updating Overview (igGrid)](igGrid-Updating.html): This topic explains how to use the Updating feature of the `igGrid`™ control.


## Introduction

As with other features, Updating also extends the equivalent flat data control to add support for hierarchy within a single grid. This is made possible via the underlying instance of the `igTreeHierarchicalDataSource`. While most additions are under-the-hood support for available functionality such as inline editing experience or row edit template, one change is that the "Add new row" user interface is disabled by default. This is because Updating UI and [`addRow`](%%jQueryApiUrl%%/ui.igtreegridupdating#methods:addRow) API method currently only support directly adding new records **only to the root level**. The  [`enableAddRow`](%%jQueryApiUrl%%/ui.igtreegridupdating#options:enableAddRow) option can still be set to `true` to enable this functionality.

Note also that using the UI or the matching add row methods on both the `igTreeGridUpdating` or the data source will also default to adding the new data directly to the root level even in the cases where the control is bound to a flat data source and the foreign key is provided for the new record.

## Adding a New Row to a Specific Level

To add a new row programmatically to the Tree Grid you can use the Tree Hierarchical DataSource's [`insertRow`](%%jQueryApiUrl%%/ui.igtreegridupdating#methods:insertRow) API method. The parameters for this method allow you to specify both parent as well as the specific index at which the new records should be inserted. To apply changes you must call `dataBind` to render the latest changes in the grid.

For example with the following grid definition:
```js
$("#treegrid").igTreeGrid({
	width: '700px',
	autoCommit: true,
	dataSource: employeeDS,
	autoGenerateColumns: false,
	primaryKey: "employeeID",
	columns: [
		{ headerText: "ID", key: "employeeID", width: "200px", dataType: "number" },
		{ headerText: "First", key: "firstName", width: "220px", dataType: "string" },
		{ headerText: "Last", key: "lastName", width: "220px", dataType: "string" }
	],
	features: [
		{ name: "Updating" }
	]
});
```

Adding a child to the first record looks like so:

```js
var ds = $('#treegrid').data("igTreeGrid").dataSource;
var newRow = { "employeeID": 22, "firstName": "John", "lastName": "Doe"};
ds.insertRow(22, newRow, 1, true, 0);

$('#treegrid').data("igTreeGrid").dataBind();
```
The very last parameter of the `insertRow` method is the desired parent ID (primary key value).

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
-   [Load on Demand (igTreeGrid)](igTreeGrid-Load-On-Demand.html): This topic explains the benefits of the `igTreeGrid` Load on Demand functionality and how it can be implemented.

### <a id="samples"></a> Samples
- [igTreeGrid Updating](%%SamplesUrl%%/tree-grid/overview)
