<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-method-reference",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Method Reference (Unbound Columns, igGrid)



## Topic Overview

### Introduction

This topic describes the various methods of Unbound Columns feature in the `igGrid`™ control.

### Unbound Columns client-side method reference chart

The following table summarizes the purpose and functionality of the **client side methods** related to the unbound column of the `igGrid` control.

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Method
			</th>

            <th>
Description
			</th>

            <th>
Parameters
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
[getUnboundColumnByKey](%%jQueryApiUrl%%/ui.iggrid#methods:getUnboundColumnByKey)
			</td>

            <td>
This method returns an unbound column with the specified key. If no column is found it returns null.
			</td>

            <td>
colKey (string) - key of the unbound column
			</td>
        </tr>

        <tr>
            <td>
[getUnboundValues](%%jQueryApiUrl%%/ui.iggrid#methods:getUnboundValues)
			</td>

            <td>
This method gets unbound values for the specified column key. The parameter is **optional**. If the key is unspecified, the method returns all unbound values. If the key is a bound column’ key then the method will return null.
			</td>

            <td>
colKey (string) - key of the unbound column.
			</td>
        </tr>

        <tr>
            <td>
[setUnboundValues](%%jQueryApiUrl%%/ui.iggrid#methods:setUnboundValues)
			</td>

            <td>
                This method accepts a column key of an unbound column and an array of values as parameters. It sets the array of values for the unbound column with the specified key.

                <blockquote>
                    **Note:** If the length of the array of values is less than the count of the data rows, the remaining cells remain unfilled. The grid re-renders its unbound column after values are set. This neither rebinds
                    nor re-renders the grid.
                </blockquote>
            </td>

            <td>
colKey (string) - key of the unbound column

                values (array) – array of unbound values
			</td>
        </tr>

        <tr>
            <td>
[setCellValue](%%jQueryApiUrl%%/ui.iggridupdating#methods:setCellValue)
			</td>

            <td>
Unbound cell values can be set using the `igGridUpdating.setCellValue` method used when editing a row and updates the unbound column.
			</td>

            <td>
                <ul>
                    <li>
rowId(object)- identifier of row
					</li>
                </ul>

                <ul>
                    <li>
colKey(string) - key of the column
					</li>
                </ul>

                <ul>
                    <li>
value(object) - the new cell value.
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>


#### Unbound Columns server-side method reference chart

The following table summarizes the purpose and functionality of the server-side methods related to the unbound column of the `igGrid` control.

<table class="table table-striped">
	<thead>
		
	</thead>
	<tbody>
        <tr>
            <td>
UnboundColumnWrapper&lt;T&gt;.UnboundValues(List&lt;object&gt; list)
			</td>

            <td>
This method is used by The MVC Wrapper chaining functionality.

It accepts a list of objects (the values for the unbound column) and applies them sequentially to the data source after performing any paging, sorting, filtering, etc. operations.

It sets as many values as the list contains. If the number of the rows is greater than the list’s length, than the remaining rows remain unfilled.
			</td>
        </tr>

        <tr>
            <td>
GridModel.SetUnboundValues (&lt;Column key&gt;, &lt; Dictionary of values &gt;)
			</td>

            <td>
This method sets values for the unbound column with the specified key.

This overload accepts two parameters: “Column key” and a Dictionary of &lt;PrimaryKey, Unbound Value&gt; pairs. The PrimaryKey in the dictionary points to a primary key of a row in the `igGrid` and the “Unbound Value” is the value that is set in the unbound column with key equal to “Column key.”
				<blockquote>
**Note:** Only use this overload with a defined PrimaryKey
                </blockquote>

When using the `SetUnboundValues` and `MergeUnboundColumns` is true, the unbound values are added to the bound data after performing any paging, sorting, filtering, etc. operations, because there is a clearly defined correlation between a row identifier and unbound value meaning that there is no need to take additional actions when remotely paging/sorting/filtering.
			</td>
        </tr>

        <tr>
            <td>
GridModel.SetUnboundValues (&lt;Column key&gt;, &lt; List of values &gt;)
			</td>

            <td>
This overload accepts a Column Key and List of values as parameters. The values from the list are set in the cells of the column with the specified “Column Key.” A custom exception will be thrown if there is not an unbound column with the specified key or the key is of a bound column.

You can use this method even with an undefined `PrimaryKey`.

If there is a `PrimaryKey` defined, you should use the overload `SetUnboundValues(<Column key>, <Dictionary of values >)`. Using the List in this case negatively affects performance because must traverse the entire data source in order to create a correlation between the row identifier and the list items. Making the relation according to the order of the items in the unbound list of values.

It sets as many values as the list contains. If the number of the rows is greater than the list’s length, then the remaining rows are left unfilled.

                <blockquote>
**Note:** If the `PrimaryKey` is not defined and `SetUnboundValues (<column key="">, <List of values>)` overload is used, there isn’t map between the primary key (or some other row identifier) and unbound values. This should be taken into account when remote Filtering, Sorting, Paging are used
                </column></blockquote>

When using `SetUnboundValues` and `MergeUnboundColumns` is true, the unbound values are added to the bound data after performing any paging, sorting, filtering, etc. operations.
            </td>
        </tr>
    </tbody>
</table>


## Related Content

### Topics

The following topic provides additional information related to this topic.

- [Property Reference (Unbound Columns, igGrid)](igGrid-UnboundColumns-Property-Reference.html): This topic describes the various properties of Unbound Columns feature in the `igGrid` control.





 

 


