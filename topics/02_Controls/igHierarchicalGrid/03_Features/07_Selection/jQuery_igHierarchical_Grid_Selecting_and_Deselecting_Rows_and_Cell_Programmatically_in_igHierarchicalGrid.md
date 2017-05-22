<!--
|metadata|
{
    "fileName": "jquery-ighierarchical-grid-selecting-and-deselecting-rows-and-cell-programmatically-in-ighierarchicalgrid",
    "controlName": "igHierarchicalGrid",
    "tags": []
}
|metadata|
-->

# Selecting and Deselecting Rows and Cells Programmatically (igHierarchicalGrid)

## Purpose
This topic explains how to use the API for selecting and deselecting rows and cells in igHierarchicalGrid™.

## Required background

The following topics are required as a prerequisite to understanding this topic.

- [igGrid Selection](igGrid-Selection-Overview.html): This topic explains igGrid Selection feature.

#### In this topic

This topic contains the following sections:

-   [Control Configuration Summary](#summary)
-   [Code Examples](#code-examples)
-   [Code Example: Selecting a Cell in a Child Grid](#selecting-cell)
-   [Code Example: Selecting All Rows in All Expanded Children Grids](#selecting-all-rows)
-   [Code Example: Deselecting a Cell in a Child Grid](#deselecting-cell)
-   [Code Example: Clearing a Selection of All Children Grids](#clearing-selection)
-   [Related Content](#related-content)

## <a id="summary"></a> Control Configuration Summary
#### Control configuration overview

The following table lists the configurable aspects of the igHierarchicalGrid control.

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Configurable aspects
			</th>

            <th>
Methods
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
Cell selection
			</td>

            <td>
                <ul>
                    <li>
[selectCell](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>

                    <li>
[deselectCell](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Row selection
			</td>

            <td>
                <ul>
                    <li>
[selectRow](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>

                    <li>
[deselectRow](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Clear selection
			</td>

            <td>
                <ul>
                    <li>
[clearSelection](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>

                    <li>
[clearSelectionAll](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>

                    <li>
[clearSelectionAllChildren](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>

                    <li>
[clearSelectionAllOthers](%%jQueryApiUrl%%/ui.iggridselection_hg#methods)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## <a id="code-examples"></a> Code Examples

### <a id="selecting-cell"></a> Code Example: Selecting a Cell in a Child Grid
This example shows how to select a cell in a child grid by foreign key relation.

The `productId` parameter denotes the foreign key relation. It is assumed that Product Id column is the second column in the top level of the hierarchy. The `rowIndex` and `colIndex` parameters define the cell in the sub grid which will be selected. The function expands the child grid so that the selection is visible.

**In Javascript:**

```js
function selectCellByProductId(productId, rowIndex, colIndex) {
    // get the parent grid
    var parentGrid = $("#grid1").igHierarchicalGrid("rootWidget");
    // get all rows of the parent grid
    var parentGridAllRows = parentGrid.allRows();
    $(parentGridAllRows).each(function (index, row) {
        // get the value of the product id column
        // it is assumed that product id column is the second column
        productIdCellVal = $(row.cells[1]).html();
        // check to see if this is the searched product id
        if (productIdCellVal === productId.toString())
            // ... and expand it if it is
            $("#grid1").igHierarchicalGrid("expand", row);
    });
    // get all expanded child grids
    var childGrids = $("#grid1").igHierarchicalGrid("allChildren");
    // select the cell by row and column indexes
    $(childGrids).each(function(index, grid) {
        $(grid).igGridSelection("selectCell", parseInt(rowIndex), parseInt(colIndex));
    });
}
```

### <a id="selecting-all-rows"></a> Code Example: Selecting All Rows in All Expanded Children Grids

This example shows how to select all rows of all expanded children.

> **Note:** Multiple selection must be enabled.

**In Javascript:**

```js
function selectAllRowsOfExpandedChildren() {
    // get all expanded child grids recursively
    var childGrids = $("#grid1").igHierarchicalGrid("allChildren");
    $(childGrids).each(function (index, grid) {
        // get all rows of the child grid
        var allRows = $(grid).igGrid("allRows");
        $(allRows).each(function (index, row) {
            // select each row
            $(grid).igGridSelection("selectRow", index);
        });
    });
}
```

### <a id="deselecting-cell"></a> Code Example: Deselecting a Cell in a Child Grid

This example shows how to deselect cell in child grid by foreign key relation.

> **Note:** A multiple selection must be enabled.

The `productId` parameter denotes the foreign key relation. It is assumed that Product Id column is the second column in the top level of the hierarchy. The `rowIndex` and `colIndex` parameters define the cell in the sub grid which will be selected. Top level grid rows are searched for `productId`. If there is a match then the data-id attribute is extracted from the row. The child grid ID attribute is assembled and `deselectCell` method is executed on the grid with the assembled ID.

**In Javascript:**

```js
function deselectCellByProductId(productId, rowIndex, colIndex) {
    var data_id;
    // get the parent grid
    var parentGrid = $("#grid1").igHierarchicalGrid("rootWidget");
    // get all rows of the parent grid
    var parentGridAllRows = parentGrid.allRows();
    $(parentGridAllRows).each(function (index, row) {
        // get the value of the product id column
        // it is assumed that product id column is the second column
        productIdCellVal = $(row.cells[1]).html();
        // check to see if this is the searched product id
        if (productIdCellVal === productId.toString()) {
            data_id = $(row).attr("data-id");
        }
    });
    // get the child layout key
    var childLayoutKey = $("#grid1").igHierarchicalGrid("option", "columnLayouts")[0].key;
    // define the search id of the child grid
    var childGridId = "#grid1_" + data_id + "_" + childLayoutKey + "_child";
    // deselecting the cell
    $(childGridId).igGridSelection("deselectCell", parseInt(rowIndex), parseInt(colIndex));
}
```



### <a id="clearing-selection"></a> Code Example: Clearing a Selection of All Children Grids

This example shows how to clear the selection of second level children grids recursively.

The example below iterates all the rows of the top level grid and checks if the row is expanded. On the expanded rows it calls `clearSelectionAllChildren` method. Top level grid selection and first level expanded grid selection is not affected.

**In Javascript:**

```js
function clearSelectionOfSecondLevelChildrenRecursively() {
    var expanded;
    // get the parent grid
    var parentGrid = $("#grid1").igHierarchicalGrid("rootWidget");
    // get all rows of the parent grid
    var parentGridAllRows = parentGrid.allRows();
    $(parentGridAllRows).each(function (index, row) {
        expanded = $("#grid1").igHierarchicalGrid("expanded", row);
        // check to see if the row is expanded
        if (expanded)
            // ... and clear its child grids selection recursively
            $(row).igGridSelection("clearSelectionAllChildren", false, true);
    });
}
```
## <a id="related-content"></a> Related Content
### Topics

The following topics provide additional information related to this topic.

- [Expanding and Collapsing Rows Programmatically in igHierarchicalGrid](jQuery-igHierarchical-Grid-Expanding-and-Collapsing-Rows-Programmatically-in-igHierarchicalGrid.html): This topic demonstrates APIs related to igHierarchicalGrid navigation.
- [Configuring Row Selectors for igHierarchicalGrid](igHierarchicalGrid-Configuring-RowSelectors.html): This topic demonstrates how to use selection in combination with row selectors.

### Samples

The following samples provide additional information related to this topic.

- [Selection](%%SamplesUrl%%/hierarchical-grid/selection-rowselectors): This sample demonstrates configuration of selection feature in igHierarchicalGrid.





 

 


