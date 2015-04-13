<!--
|metadata|
{
    "fileName": "jquery-ighierarchical-grid-expanding-and-collapsing-rows-programmatically-in-ighierarchicalgrid",
    "controlName": "igHierarchicalGrid",
    "tags": []
}
|metadata|
-->

# Expanding and Collapsing Rows Programmatically (igHierarchicalGrid)

## Purpose
This topic explains how to use the API for expanding and collapsing child grids in igHierarchicalGrid™.

## Required background

The following topics are required as a prerequisite to understanding this topic.

- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html): This topic provides conceptual information about the igHierarchicalGrid including information regarding features, binding to data sources, requirements, templates, and interaction.
- [Initializing the igHierarchicalGrid](igHierarchicalGrid-Initializing.html): This topic demonstrates how to initialize the igHierarchicalGrid in both jQuery and MVC.


## In this topic

This topic contains the following sections:

-   [Control Configuration Summary](#summary)
-   [Code Examples](#code-examples)
-   [Related Content](#related-content)

## <a id="summary"></a> Control Configuration Summary
#### Control configuration overview

The following table lists the configurable aspects of the igHierarchicalGrid control related to expanding and collapsing rows.

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
Expanding rows
			</td>

            <td>
                <ul>
                    <li>
[expand](%%jQueryApiUrl%%/ui.ighierarchicalgrid#methods)
					</li>

                    <li>
[expanded](%%jQueryApiUrl%%/ui.ighierarchicalgrid#methods)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Collapsing rows
			</td>

            <td>
                <ul>
                    <li>
[collapse](%%jQueryApiUrl%%/ui.ighierarchicalgrid#methods)
					</li>

                    <li>
[collapsed](%%jQueryApiUrl%%/ui.ighierarchicalgrid#methods)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Toggle rows
			</td>

            <td>
                <ul>
                    <li>
[toggle](%%jQueryApiUrl%%/ui.ighierarchicalgrid#methods)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## <a id="code-examples"></a> Code Examples
### Overview

The following table lists the code examples included in this topic.

Example | Description
---|---
[Code Example: Expanding All Rows on a Parent Grid](#expand-rows) | Shows how to expand all rows of the root grid.
[Code Example: Collapsing All Rows on a Parent Grid](#collapse-rows) | Shows how to collapse all rows of the root grid.
[Code Example: Toggling the Current Selected Row](#toggle-row) | Shows how to toggle the current selected row of the root grid.

## <a id="expand-rows"></a> Code Example: Expanding All Rows on a Parent Grid
### Description
This example shows how to expand all rows of the root grid. In the example below the following functions are defined:

-   `expandAllRowsOfGrid`: this function expands all rows of the grid which is passed to it. The function can be used on any level of the hierarchy.
-   `expandAllRowsOfRootGrid`: this function expands all rows of the root grid. The function gets the reference to top level grid and then passes it to `expandAllRowsOfGrid`.

### Code
**In Javascript:**

```js
function expandAllRowsOfGrid(grid) {
    // expand each row in grid
    $(grid.allRows()).each(function (index, element) {
        $("#grid1").igHierarchicalGrid("expand", element); 
    });
}        

function expandAllRowsOfRootGrid() {
    // get the top level grid
    var parentGrid = $("#grid1").igHierarchicalGrid("rootWidget");
    expandAllRowsOfGrid(parentGrid);
}
```
## <a id="collapse-rows"></a> Code Example: Collapsing All Rows on a Parent Grid
### Description

This example shows how to collapse all rows of the root grid. In the example below the following functions are defined:

-   `collapseAllRowsOfGrid`: this function collapses all rows of the grid which is passed to it. This function can be used on any level of the hierarchy.
-   `collapseAllRowsOfRootGrid`: this function collapses all rows of the root grid. The function gets the reference to top level grid and then passes it to collapseAllRowsOfGrid.

### Code

**In Javascript:**

```js
function collapseAllRowsOfGrid(grid) {
    // collapse each row
    $(grid.allRows()).each(function (index, element) {
        $("#grid1").igHierarchicalGrid("collapse", element); 
    });        
}

function collapseAllRowsOfRootGrid() {
    // get the top level grid
    var parentGrid = $("#grid1").igHierarchicalGrid("rootWidget");
    collapseAllRowsOfGrid(parentGrid);
}
```

## <a id="toggle-row"></a> Code Example: Toggling the Current Selected Row
### Description
This example shows how to toggle the current selected row of the root grid. In the example below the following functions are defined:

-   `toggleCurrentRowOfGrid`: this function toggles current row of the grid which is passed to it. The function can be used on any level of the hierarchy.
-   `toggleCurrentRowOfRootGrid`: this function toggles current row of the root grid. The function gets the reference to top level grid and then passes it to `toggleCurrentRowOfGrid`.

> **Note:** For this example to work the `Selection` feature must be enabled.

### Code
**In Javascript:**
```js
function toggleCurrentRowOfGrid(grid) {
    // get reference to current selected row
    var row = $(grid).igGridSelection("selectedRow");
    if (row) {
        // toggle row
        $("#grid1").igHierarchicalGrid("toggle", row.element);
    }
}

function toggleCurrentRowOfRootGrid(grid) {
    // get the top level grid
    var parentGrid = $("#grid1").igHierarchicalGrid("root");
    toggleCurrentRowOfGrid(parentGrid);
}
```
## <a id="related-content"></a> Related Content
### Topics

The following topics provide additional information related to this topic.

- [igHierarchicalGrid Events API](igHierarchicalGrid-Events-API.html): This topic explains the events that are specific to the igHierarchicalGrid.
- [igHierarchicalGrid Columns and Layouts](igHierarchicalGrid-Columns-and-Layouts.html): This topic demonstrates how to define columns and layouts in the igHierarchicalGrid including through auto-generation.