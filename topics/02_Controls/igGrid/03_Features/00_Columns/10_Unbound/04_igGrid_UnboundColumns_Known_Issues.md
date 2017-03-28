<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-known-issues",
    "controlName": "igGrid",
    "tags": ["Grids","Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (Unbound Columns, igGrid)



## Topic Overview

### Overview

The following table summarizes the known issues and limitations of the `igGrid`™ Unbound Columns feature. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

### Legend:

<table class="table">
	<tbody>
		<tr>
			<td>
![](../../../../../images/images/positive.png)
			</td>
			<td>
				Workaround available
			</td>
		</tr>

		<tr>
			<td>
![](../../../../../images/images/negative.png)
			</td>
			<td>
				No known workaround
			</td>
		</tr>

		<tr>
			<td>
![](../../../../../images/images/plannedFix.png)
			</td>
			<td>
				Fix planned
			</td>
		</tr>
	</tbody>
</table>


Issue | Description | Status
---|---|---
[Remote Filtering, Sorting and GroupBy features](#remote-filtering-sorting) | The Unbound Columns feature does not support Remote Filtering, Sorting and GroupBy features. | ![](../../../../../images/images/negative.png)
[Using GridModel.SetUnboundValues(&lt;Column key&gt;, &lt;Dictionary of values &gt;) requires setting GridModel.PrimaryKey property](#using-SetUnboundValues-primary) | The `GridModel.SetUnboundValues(<Column key>, <Dictionary of values >)` overloaded method requires a primary key to be set for the grid. The reason is that the second parameter of the method is dictionary whose key is set to the primary key of the grid. | ![](../../../../../images/images/positive.png)
[Unbound Columns and chaining with remote URL](#chaining-remote-url) | Using Unbound Columns in chaining when `MergeUnboundColumns` is set to true is not a valid scenario. | ![](../../../../../images/images/negative.png)
[Remote data source, Paging and initial unboundValues](#remote-source-initial-values) | Grid will show same values for the unbound column when `unboundValues` is set on the client with remote paging enabled. | ![](../../../../../images/images/negative.png)
[When MergeUnboundColumns=true then formula can’t be used to set values of unbound column](#MergeUnboundColumns-formula) | In MVC scenario when MergeUnboundColums=TRUE, then on the client side the unbound values are already part of the dataSource and the column is interpreted as a “bound” column. The formula is taken into account when data binding the grid. If columns have a formula function set, these unbound column values are evaluated and set in the datasource’s dataview. As the formula’s execution occurs on the client side, the “unbound” column’s values are not calculated (because they are considered as “bound”) and the grid stays empty. | ![](../../../../../images/images/positive.png)
[Updating and unbound columns](#updating) | Unbound column values are not persisted between the grid rebinds. | ![](../../../../../images/images/negative.png)
Virtualization and igGrid.setUnboundValues client API | When using virtualization and calling the igGrid.setUnboundValues method, the grid scrolls to the top before rendering values in the unbound column. | ![](../../../../../images/images/negative.png)
[MergeUnboundColumns = false and a boolean unbound column](#MergeUnboundColumns-boolean) | When values are configured on the server for unbound Boolean columns, any cells in that column that are not explicitly set on the server are automatically set to false when rendered on the client. | ![](../../../../../images/images/positive.png)
getUnboundValues client API and setting unbound values in the dataBound client event | Using the igGrid.getUnboundValues method on the client does not return the unbound values if they are set through the `dataBound()` client-side event. | ![](../../../../../images/images/negative.png)




## <a id="remote-filtering-sorting"></a> Remote Filtering, Sorting and GroupBy features

> **Note**: Unbound columns do not support Remote Sorting, Filtering and Grouping. Consequently, these features are disabled for unbound columns in the Columns collection.

`igGrid` disables the remote Filtering, Sorting and Grouping features for the unbound columns as you can see in the following screenshot.

## <a id="using-SetUnboundValues-primary"></a> Using GridModel.SetUnboundValues(&lt;Column key&gt;, &lt;Dictionary of values &gt;) requires setting PrimaryKey

This overload accepts parameters “Column key” and a Dictionary of `<PrimaryKey, Unbound Value>` pairs. The `PrimaryKey` in the dictionary points to the primary key of a row in the `igGrid` and the “Unbound Value” is set to the unbound column with its key equal to “Column key.” If no primary key is defined, use the overload `SetUnboundValues(<Column key>, < List of values >)`.

## <a id="chaining-remote-url"></a> Unbound Columns and chaining with remote URL

When there is a remote URL and MergeUnboundColumns = TRUE then using chaining is NOT a valid scenario because through chaining you set some options, but when you do remote requests these options are re-set with the default values in controller/model, thus making MergeUnboundColumns = FALSE.

## <a id="remote-source-initial-values"></a> Remote data source, Paging and initial unboundValues

When there is a remote data source, and you have set default unboundValues in the client side code, each time the grid rebinds, reapplies these new settings. Therefore, when navigating to a new page, the same values are shown. This is normal behavior as the server returns only the result for the current page.

## <a id="MergeUnboundColumns-formula"></a> When MergeUnboundColumns=true then formula can’t be used to set values of unbound column

As a workaround, you can handle the databound client side event, and add those values manually to the data/dataView of the data source on the client, before it renders. Inside the dataBound event, the unbound columns are part of the data() array in the data source. Hence, they are accessible and filled based on the current row data or other values.

**In JavaScript:**

```js
$("#grid1").live("iggriddatabound", function (event, ui) {
            var i, grid = ui.owner,
                ds = grid.dataSource,
                data = ds.data(),
                dsLength = data.length;
            for (i = 0; i < dsLength; i++) {
              data[i]["UnboundColumn1"] = 
                data[i]["UnitPrice"] * data[i]["UnitsInStock"];              
            }
 });
```

## <a id="updating"></a> Updating and unbound columns

> **Note:** If a row, containing unbound values is edited and committed, and the grid is rebound as a result of paging or sorting, those changes are not saved. This can be workaround by setting the unbound column values on `dataBound` event.

During CRUD operations, unbound column data is represented in the updating transactions, as well as updating. As unbound columns are part of the data array in the data source, it is up to an implementation decision to check if such a column exists in the underlying data source when the transactions are committed to the data source.

Unbound columns may be editable. If you want them to be read-only you should set it in the column settings of the updating feature.

**In JavaScript:**

```js
{
      name: "Updating",
      editMode: 'row',
      enableAddRow: false,
      enableDeleteRow: true,                          
      columnSettings: [
        {
            columnKey: "Total",
            editorType: 'numeric',
            readOnly: true
        },
        {
            columnKey: "IsPromotion",
            editorType: 'bool',
            readOnly: true
        }
      ]
}
```

## <a id="MergeUnboundColumns-boolean"></a> MergeUnboundColumns = false and a boolean unbound column

As a workaround set all Boolean row values explicitly on the server.


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Known Issues and Limitations (igGrid)](igGrid-Known-Issues.html): This topic explains the known issues of the `igGrid` control.

- [Known Issues Revision History](Known-Issues-Revision-History.html): This group of topics explains the known issues of Ignite UI controls between the volume releases.
 

 


