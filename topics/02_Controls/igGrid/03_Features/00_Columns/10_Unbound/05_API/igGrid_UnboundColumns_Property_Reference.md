<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-property-reference",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Property Reference (Unbound Columns, igGrid)



## Topic Overview
### Introduction

This topic describes the various properties of Unbound Columns feature in the `igGrid`™ control.

### Unbound Columns property reference chart

The following table summarizes the purpose and functionality of the `igGrid` control’s Unbound Columns feature properties.


<table class="table table-striped">
	<thead>
		<tr>
            <th>
Property
			</th>

            <th>
Description
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
[key](%%jQueryApiUrl%%/ui.iggrid#options:columns.key)
			</td>

            <td>
The key of the column needs to be unique across all columns, not only the unbound ones.
			</td>
        </tr>

        <tr>
            <td>
[unbound](%%jQueryApiUrl%%/ui.iggrid#options:columns.unbound)
			</td>

            <td>
This property differentiates an unbound column from a bound one. When set to true it enables the other properties that act on unbound columns. These are `unboundValues` and `formula` properties.
			</td>
        </tr>

        <tr>
            <td>
[unboundValues](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues)
			</td>

            <td>
This property accepts an array of values used to initialize the unbound column. <br />

If the number of the data rows is greater than the unbound array’s length, the rest of the cells remain unfilled. <br />

If the number of the data rows is lower than the unbound array’s length, the remaining values are not taken into account. <br />
            </td>
        </tr>

        <tr>
            <td>
[formula](%%jQueryApiUrl%%/ui.iggrid#options:columns.formula)
			</td>

            <td>
The unbound column has a formula property. <br />

It is a reference or a name of a JavaScript function that returns a value, and accepts the current data row and the grid as arguments. <br />

Use it to calculate the values of the column’s cells based on the other cell values in the row. It can also use any generic formula. <br />

The formula calculation occurs after the grid has been bound to the data source. If unbound columns have a formula configured, the evaluated values are stored in the underlying `$.ig.dataSource`’s `dataView`.
			</td>
        </tr>

        <tr>
            <td>
[template](%%jQueryApiUrl%%/ui.iggrid#options:columns.template)
			</td>

            <td>
Unbound column can take advantage of the `igGrid` templating capabilities. Use templates to populate the values of unbound column by using the other columns values. <br />

There is no difference between the template for the bound column and unbound one.
			</td>
        </tr>

        <tr>
            <td>
[format](%%jQueryApiUrl%%/ui.iggrid#options:columns.format)
			</td>

            <td>
The unbound columns can accept also format. Format depends on the underlying data type of the column. For example if the `DataType` is “bool” then supported format is "checkbox" (will override the `RenderCheckboxes` property of grid) and thus can be used as unbound checkbox column.
			</td>
        </tr>

        <tr>
            <td>
mergeUnboundValues
			</td>

            <td>
The MVC Wrapper uses this option, which is only effective in remote scenarios. This option should not be configured on the client side. On the server side this option can be set in the View by `Grid<T>.MergeUnboundColumns` method or in the Controller by `GridModel.MergeUnboundColumns` property.

When set to true this option indicates that the unbound column data is merged on the server and is sent to the client as part of the grid data. In this case remote paging will work, but Sorting, Filtering and GroupBy won’t as described in the [Known Issues and Limitations](igGrid-UnboundColumns-Known-Issues.html) topic. Local operations work as expected.

When set to false this option indicates that the unbound column data is sent separately from the grid data and the `igGrid` needs to merge the data prior to data binding. In this case remote operations are not supported. Local operations work as expected.
			</td>
        </tr>
    </tbody>
</table>


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Method Reference (Unbound Columns, igGrid)](igGrid-UnboundColumns-Method-Reference.html): This topic describes the various methods of Unbound Columns feature in the `igGrid` control.

- [Known Issues and Limitations](igGrid-UnboundColumns-Known-Issues.html): This topic lists all known issues and limitations for the `igGrid` Unbound Columns feature.



 

 


