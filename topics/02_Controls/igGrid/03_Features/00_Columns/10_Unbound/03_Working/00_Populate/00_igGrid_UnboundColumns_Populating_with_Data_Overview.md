<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-populating-with-data-overview",
    "controlName": "igGrid",
    "tags": ["Getting Started","Grids","How Do I"]
}
|metadata|
-->

# Populating Unbound Columns Overview (igGrid)

## Topic Overview

### Purpose

This topic provides a conceptual overview of how an unbound column can be populated with data and briefly explains the options (local/remote).

### Required background

The following topics are prerequisites to understanding this topic:

- [Unbound Columns Overview](igGrid-UnboundColumns-Overview.html): This topic provides an overview of the Unbound Columns feature of the `igGrid`.

- [Setting a Column as Unbound (igGrid)](igGrid-UnboundColumns-Setting-Column-as-Unbound.html): This topic demonstrates how to set up an Unbound Column for the `igGrid` on the client and on the server. It includes JavaScript and ASP.NET code snippets.


### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Populating Unbound Columns Summary](#summary)
    -   [Populating Unbound Columns Summary Chart](#summary-chart)
    -   [Populating Unbound Columns with Data Locally summary](#local-data)
    -   [Populating Unbound Columns with Data Remotely summary](#remote-data)
-   [Related Content](#related-content)
    -   [Topics](#topics)



## <a id="introduction"></a> Introduction

### <a id="summary"></a> Populating Unbound Columns Summary

You may populate unbound columns with data on the client or the server (if you are using an ASP. NET MVC Wrapper) using predefined data (for example from an external source) or calculates the data from the grid data source.

On the client, you can populate the values as part of the grid initialization code or at runtime (after the grid instantiates).

On the server, populate unbound column with data in two ways. First scenario is using the grid’s primary key value in order to match the unbound values dictionary to the grid data. Second is using a list of unbound values.

### <a id="summary-chart"></a> Populating Unbound Columns Summary Chart

<table class="table table-bordered">
	<tbody>
        

        <tr>
            <td>
Populating unbound column values with pre-defined data
			</td>

            <td>
An unbound column is populated with arbitrary values (pre-defined data set) with the [unboundValues](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) array property. <br />

The type of the items in the array must match the type of the unbound column. <br />

The number of items in the array may not equal the number of items in the data source. <br />

                <ul>
                    <li>
**If the array has more values than the data source**, the outstanding values are discarded.
					</li>

                    <li>
**If the array has more values than the data source**, the data source values are set to null.
					</li>
                </ul>

                <blockquote>
**Note:** If both `unboundValues` and `formula` properties are set, the `unboundValues` property takes precedence over the `formula` property and discards the `formula` property (not used).
                </blockquote>
            </td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
unboundValues
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Populating unbound calculated values
			</td>

            <td>
To populate an unbound column with calculated values, use a callback function that calculates the value for each cell. 
<br />

`formula` property accepts function which has two parameters:

                <ul>
                    <li>
row - current data row object. The row object fields depend on whether `localSchemaTransform` is true or false. When `localSchemaTransform` is true only the fields which are used by the grid columns will be available. When `localSchemaTransform` is false all the fields from the data source will be available.
					</li>

                    <li>
grid - igGrid instance
					</li>
                </ul>

                <blockquote>
**Note:** If both `unboundValues` and `formula` properties are set the `unboundValues` property takes precedence and `formula` property is not used.
                </blockquote>
            </td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
formula
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Populating unbound column values using template
			</td>

            <td>
Use a template in addition to or as an alternative to `unboundValues` or `formula` properties. The template can populate an unbound column with data from the other columns.
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
template
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



### <a id="local-data"></a> Populating Unbound Columns with Data Locally summary

In order to populate unbound column data as part of the grid initialization code use the [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) property, [`formula`](%%jQueryApiUrl%%/ui.iggrid#options:columns.formula) property or the grid’s [`dataBound`](%%jQueryApiUrl%%/ui.iggrid#events:dataBound) event. `unboundValues` accepts array of values and requires unbound data to be predefined. `dataBound` event and formula property allow data to be calculated from the grid data source. In the `dataBound` event use the [`$.ig.DataSource.data`](%%jQueryApiUrl%%/ig.datasource#methods:data) method to get grid data and set the unbound column data. formula property is a function callback which accepts row (current data row to process) and grid instance parameters.

In order to populate unbound column data at runtime use [`igGrid.setUnboundValues`](%%jQueryApiUrl%%/ui.iggrid#methods:setUnboundValues) or [`igGridUpdating.setCellValue`](%%jQueryApiUrl%%/ui.iggridupdating#methods:setCellValue). `setUnboundValues` accepts column key and array of values as a parameters and populates multiple values at once. `setCellValue` accepts row id(primary key or the row), column key and value parameters and populates only one cell at a time and requires Updating feature.

**Related Topics**

-   [Populating Unbound Columns Locally (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Locally.html)

### <a id="remote-data"></a> Populating Unbound Columns with Data Remotely summary

In MVC Wrapper unbound columns can be set in either the View (when using chaining) or in the Controller (when using `GridModel` class).

In the View you can populate unbound column data by using an object list with the  `UnboundColumnWrapper<T>.UnboundValues(List<object> list)` method. There is also a Formula method which should be set to a name of a JavaScript function which will be called on the client for each cell to calculate its value.

In the Controller you can use two overloads of `GridModel.SetUnboundValues` method.

The first method (`GridModel.SetUnboundValues(string key, Dictionary<object, object> values)`) accepts column key and a dictionary of objects where the key is the primary key value of the grid data and the value is the value of the unbound column. Unbound column values are matched by primary key.

The second method (`GridModel.SetUnboundValues(string key, List<object> values)`) accepts column key and a list of objects. Unbound column values are matched by order of the elements.

**Related Topics**

-   [Populating Unbound Columns Remotely (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Remotely.html)


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Updating Overview (igGrid)](igGrid-Updating.html): This topic explains how to use the Updating feature of the igGrid control.

- [Populating Unbound Columns Locally (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Locally.html): This topic demonstrates, with code samples how to set unbound column values on the client.

- [Populating Unbound Columns Remotely (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Remotely.html): This topic demonstrates, with code samples how to set unbound column values on the server.



 

 


