<!--
|metadata|
{
    "fileName": "igtilemanager-configuring",
    "controlName": "igTileManager",
    "tags": ["Getting Started","Grouping","How Do I","Layouts"]
}
|metadata|
-->

# Configuring igTileManager

## Topic Overview
### Purpose

This topic explains how to configure the features and behavior of the `igTileManager`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igTileManager Overview](igTileManager-Overview.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality.

- [Adding igTileManager](igTileManager-Adding.html): This topic demonstrates, with code examples, how to add the `igTileManage` control to an HTML page in either JavaScript or ASP.NET MVC.

- [Binding igTileManager to Data](igTileManager-Binding.html): This topic explains how to bind the `igTileManager` control to the supported data sources.

### In this topic

This topic contains the following sections:

-   [**igTileManager Configuration Overview**](#overview)
    -   [igTileManager configuration summary](#summary)
    -   [igTileManager configuration summary chart](#config-summary-chart)
    -   [Configuring the number of rows and columns](#config-rows-columns)
    -   [Configuring column dimensions](#config-column-dimention)
    -   [Configuring items’ positions and spans](#config-positions-span)
    -   [Configuring the tiles’ states](#config-tiles-states)
    -   [Configuring the tiles’ margins](#config-tiles-margin)
    -   [Configuring the Minimized Tiles panel](#config-minimized-tile-panel)
    -   [Configuring animated transitions’ duration](#config-animation-duration)
-   [**Default Configuration**](#default-config)
-   [**Code Examples Summary**](#code-example-summary)
-   [**Code Example: Configuring a Specific Number of Rows and Columns**](#config-specific-number)
    -   [Description](#specific-number-description)
    -   [Code](#specific-number-code)
-   [**Code Example: Configuring column dimensions**](#column-dimentions)
    -   [Description](#column-dimentions-description)
    -   [Code](#column-dimentions-code)
-   [**Code Example: Configuring Tiles with Custom Positions and Spans**](#config-tiles-custom-position)
    -   [Description](#custom-position-description)
    -   [Code](#custom-position-code)
-   [**Code Example: Configuring Tile States**](#config-tile-states)
    -   [Description](#tile-states-description)
    -   [Code](#tile-states-code)
-   [**Code Example: Configuring the Minimized Tiles Panel**](#config-minimized-tiles-panels)
    -   [Description](#tiles-panels-description)
    -   [Code](#tiles-panels-code)
-   [**Code Example: Configuring the Duration of the Animated Transitions**](#config-animation-duration)
    -   [Description](#animation-duration-description)
    -   [Code](#animation-dration-code)
-   [**Related Content**](#related-topics)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>igTileManager Configuration Overview
### <a id="summary"></a>igTileManager configuration summary

The main configurable aspects of the `igTileManager` control are the:

-   Number of rows and columns
-   Individual columns
-   Item position and span
-   Tile states
-   Minimized Tiles panel
-   Animated transitions’ duration
-   User interaction

Each of these aspects is explained in [Configuring igTileManager](#config-summary-chart).

### <a id="config-summary-chart"></a>igTileManager configuration summary chart

The following table lists the configurable aspects of the `igTileManager` control. Further details about most of the aspects are available in the sections following this summary table.

<table class="table table-bordered">
	<thead>
		<tr>
            <th colspan="2">
Configurable aspect
			</th>

            <th>
Details
			</th>

            <th>
JavaScript properties
			</th>

            <th>
ASP.NET MVC properties
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td rowspan="2">
[Number of rows and columns](#config-rows-columns)
			</td>

            <td>
Number of rows
			</td>

            <td>
The number of rows and columns to be rendered in the tile grid is configurable.
			</td>

            <td>
                <ul>
                    <li>
[rows](%%jQueryApiUrl%%/ui.igtilemanager#options:rows)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[Row()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Number of columns
			</td>

            <td>

			</td>

            <td>
                <ul>
                    <li>
[cols](%%jQueryApiUrl%%/ui.igtilemanager#options:cols)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[Coll()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="4">
[Individual columns](#column-dimentions)
			</td>

            <td>
Column height
			</td>

            <td>
The width and height of the columns in the tile grid are configurable.
			</td>

            <td>
                <ul>
                    <li>
[columnHeight](%%jQueryApiUrl%%/ui.igtilemanager#options:columnHeight)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[ColumnHeight()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Column width
			</td>

            <td>

			</td>

            <td>
                <ul>
                    <li>
[columnWidth](%%jQueryApiUrl%%/ui.igtilemanager#options:columnWidth)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[ColumnWidth()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Tile left margin
			</td>

            <td>
The top and left margins for each tile in the tile grid are configurable.
			</td>

            <td>
                <ul>
                    <li>
[marginLeft](%%jQueryApiUrl%%/ui.igtilemanager#options:marginLeft)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MarginLeft()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Tile top margin
			</td>

            <td>

			</td>

            <td>
                <ul>
                    <li>
[marginTop](%%jQueryApiUrl%%/ui.igtilemanager#options:marginTop)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MarginTop()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Operational mode**
			</td>

            <td>
Number of panels and placement of the maximized tile
			</td>

            <td>
You can specify whether to display the maximized tile in a separate panel or in the same panel together with the minimized tiles. In the latter case, the position of the maximized tile inside the panel is configurable.
			</td>

            <td>
                <ul>
                    <li>
[maximizedTileIndex](%%jQueryApiUrl%%/ui.igtilemanager#options:maximizedTileIndex)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MaximizedTileIndex()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="2">
[Item position and span](#config-positions-span)
			</td>

            <td>
Item position
			</td>

            <td>
The position of an item in the tile grid can be configured be specifying the row and indexes of the desired position.
			</td>

            <td>
                <ul>
                    <li>
[rowIndex](%%jQueryApiUrl%%/ui.igtilemanager#options:rowIndex)
					</li>

                    <li>
[colIndex](%%jQueryApiUrl%%/ui.igtilemanager#options:colIndex)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[RowIndex()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>

                    <li>
[ColIndex()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Item size
			</td>

            <td>
Items can be configured to span over several rows and columns to accommodate larger items.
			</td>

            <td>
                <ul>
                    <li>
[rowSpan](%%jQueryApiUrl%%/ui.igtilemanager#options:rowSpan)
					</li>

                    <li>
[colSpan](%%jQueryApiUrl%%/ui.igtilemanager#options:colSpan)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[RowSpan()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>

                    <li>
[ColSpan()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="2">
[Tile states](#config-tiles-states)
			</td>

            <td>
Minimized state
			</td>

            <td>
Tile state is configured individually for each state.
			</td>

            <td>
                <ul>
                    <li>
[minimizedState](%%jQueryApiUrl%%/ui.igtilemanager#options:minimizedState)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MinimizedState()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Maximized state
			</td>

            <td>

			</td>

            <td>
                <ul>
                    <li>
[maximizedState](%%jQueryApiUrl%%/ui.igtilemanager#options:maximizedState)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MaximizedState()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="2">
[Tiles’ margins](#config-tiles-margin)
			</td>

            <td>
Top margin
			</td>

            <td>
The top and the left margin of the minimized tiles are configurable thus forming an outset between the tiles.
			</td>

            <td>
                <ul>
                    <li>
[marginTop](%%jQueryApiUrl%%/ui.igtilemanager#options:marginTop)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MarginTop()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Left margin
			</td>

            <td>

			</td>

            <td>
                <ul>
                    <li>
[marginLeft](%%jQueryApiUrl%%/ui.igtilemanager#options:marginLeft)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[MarginLeft()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="5">
[Minimized Tiles panel](#config-minimized-tile-panel)
			</td>

            <td>
Number of columns
			</td>

            <td>
The number of columns to be rendered in the Minimized Tiles panel is configurable.
			</td>

            <td>
                <ul>
                    <li>
[rightPanelCols](%%jQueryApiUrl%%/ui.igtilemanager#options:rightPanelCols)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[RightPanelCols()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Minimized tiles’ width
			</td>

            <td>
The width of the tiles in the Minimized Tiles panel is configurable.
			</td>

            <td>
                <ul>
                    <li>
[rightPanelTilesWidth](%%jQueryApiUrl%%/ui.igtilemanager#options:rightPanelTilesWidth)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[RightPanelTilesWidth()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Minimized tiles’ height
			</td>

            <td>
The height of the tiles in the Minimized Tiles panel is configurable.
			</td>

            <td>
                <ul>
                    <li>
[rightPanelTilesHeight](%%jQueryApiUrl%%/ui.igtilemanager#options:rightPanelTilesHeight)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[RightPanelTilesHeight()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Scrollbar
			</td>

            <td>
You can specify whether the Minimized Tiles panel should expose a scrollbar if the tiles are overflowing. When the scrollbar is disabled, the user might need to move the splitter to display the tiles that are out of sight.
			</td>

            <td>
                <ul>
                    <li>
[showRightPanelScroll](%%jQueryApiUrl%%/ui.igtilemanager#options:showRightPanelScroll)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[ShowRightPanelScroll()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Splitter bar visibility
			</td>

            <td>
You can specify whether the splitter to be shown or not. By default, the splitter bar is visible.
			</td>

            <td>
                <ul>
                    <li>
[showSplitter](%%jQueryApiUrl%%/ui.igtilemanager#options:showSplitter)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[ShowSplitter()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="2">
[Animated transitions’ duration](#config-animation-duration)
			</td>

            <td>
Transition duration upon container re-size
			</td>

            <td>
The duration of the animated transitions, upon both container re-sizing and changing the tile state (minimizing/maximizing) is configured with the `animationDuration` option and, consequently, always have same durations.
			</td>

            <td>
                <ul>
                    <li>
[animationDuration](%%jQueryApiUrl%%/ui.igtilemanager#options:animationDuration)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[AnimationDuration()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Transition duration upon tile minimizing/maximizing
			</td>

            <td>

			</td>

            <td>

			</td>

            <td>

			</td>
        </tr>

        <tr>
            <td>
**User interaction**
			</td>

            <td>
Maximization trigger
			</td>

            <td>
You can specify elements of a minimized tile that will not trigger maximizing. By default, clicking on  and `<a>` and `<inputs>` tags does not trigger maximizing.
			</td>

            <td>
                <ul>
                    <li>
[preventMaximizingSelector](%%jQueryApiUrl%%/ui.igtilemanager#options:preventMaximizingSelector)
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[PreventMaximizingSelector()](%%jQueryApiUrl%%/ui.igtilemanager#options)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



### <a id="config-rows-columns"></a>Configuring the number of rows and columns

The number of rows and columns to be rendered in the tile grid is configurable. If the number of rows and columns is not specified, then they will be calculated to best fit the tiles in the container.

The [cols](%%jQueryApiUrl%%/ui.igtilemanager) and [rows](%%jQueryApiUrl%%/ui.igtilemanager) options set the number of rows and columns of the entire container, irrespective of the [operational mode](%%jQueryApiUrl%%/ui.igtilemanager) (Dual Panel or Single Panel).

In Dual Panel mode, from this total number of columns, the [rightPanelCols](%%jQueryApiUrl%%/ui.igtilemanager) option reserves a certain number of columns for the Minimized Tiles panel to accommodate the minimized tiles and, consequently, pre-define the breadths of the Minimized Tiles panel and Maximized tiles panel. Keep in mind that the Maximized Tile panel must preserve a minimum width equal to the [columnWidth](%%jQueryApiUrl%%/ui.igtilemanager) setting so the `rightPanelCols` value must be no larger than cols-1 (in order to reserve at least one grid column for the Maximized Tile panel).

The `rightPanelCols` option has effect only in Dual Panel mode.

#### Related code example:

-   [**Configuring a Specific Number of Rows and Columns**](#config-specific-number)

### <a id="config-column-dimention"></a>Configuring column dimensions

The width and height of the columns in the tile grid are configurable.

By default, the tile manager is rendering tiles of equal size to fit in the container using the entire available space. When [columnWidth](%%jQueryApiUrl%%/ui.igtilemanager#options:columnWidth) or [columnHeight](%%jQueryApiUrl%%/ui.igtilemanager#options:columnHeight) is set, the `igTileManager` renders the configuration according to this setting and calculates the rest of the options to fit the tiles in the container and use the remaining space.

The top and left margins for each tile in the tile grid are configurable. The default configuration does not include any margins.

The [columnWidth](%%jQueryApiUrl%%/ui.igtilemanager) or [columnHeight](%%jQueryApiUrl%%/ui.igtilemanager#options:columnHeight) options can be set either in pixels or in percentages. The choice of dimensioning affects the rendering logic of the columns:

-   If the dimensions are set in percentages, the sizes of the items margins are included in the column’s width and height.
-   If the dimensions are set in pixels, the sizes of the items margins are excluded from the column’s width and height.

You can have both the [cols/rows](%%jQueryApiUrl%%/ui.igtilemanager#options) options, on one side, and `columnWidth`/`columnHeight` options, on the other, defined at the same time. In this case, the number of tiles on the row is set according to the cols option value and each tile has its size defined according to the `columnWidth` option value. If the total width of all tiles on the same row is larger than the container's width, a horizontal scrollbar will be rendered.

>**Note:** For your convenience, when setting the `columnWidth`/`columnHeight` in percentages, the value include the left and top margins. For example, if the container is 1000 px wide and the `columnWidth` is set to ‘50%’, the width of each tile will be 500 px. But if `marginLeft`: 50px is added, the width of the tile will be 450 px. This makes it easier to work with tile widths/heights using percentages.

Also, if the container has a scrollbar – it will **not** be counted as part of the container's width or height. Thus, having the same example container of 1000 px width with a scrollbar and `columnWidth`: ‘50%’ and no margins, will result in tiles that are less than 500 px wide.

#### Related code example:

-   [**Configuring column dimensions**](#column-dimentions)

### <a id="config-positions-span"></a>Configuring items’ positions and spans

The position of an item in the tile grid can be configured by specifying the row and indexes of the desired position. Also, items can be configured to span over several rows and columns to accommodate larger items. Each tile's position and size can be specified separately by providing the [items](%%jQueryApiUrl%%/ui.igtilemanager) option. The items option takes array with the settings each tile's position and size

The following table explains the options for configuring the items positions and sizes.

Property| Description
---|---
[rowIndex](%%jQueryApiUrl%%/ui.igtilemanager#options:rowIndex)|The starting row position of the tile.
[colIndex](%%jQueryApiUrl%%/ui.igtilemanager#options:colIndex)|The starting column position of the tile.
[rowSpan](%%jQueryApiUrl%%/ui.igtilemanager#options:rowSpan)|The number of rows for the tile to span over.
[colSpan](%%jQueryApiUrl%%/ui.igtilemanager#options:colSpan)|The number of columns for the tile to span over.

The item position and size configuration has higher priority over the column configuration and overrides it.

The look of the minimized tiles that are placed in the Minimized Tiles panel is also configurable. You can define in how many columns the minimized tiles should be placed (using the [rightPanelCols](%%jQueryApiUrl%%/ui.igtilemanager) option), as well as the height and width of the tiles in the Minimized Tiles panel (using [rightPanelTilesHeight](%%jQueryApiUrl%%/ui.igtilemanager) and [rightPanelTilesWidth](%%jQueryApiUrl%%/ui.igtilemanager) options respectively).

#### Related code example:

-   [Configuring Tiles with Custom Positions and Spans](#config-tiles-custom-position)

### <a id="config-tiles-states"></a>Configuring the tiles’ states

Tile state is configured individually for each state through the [minimizedState](%%jQueryApiUrl%%/ui.igtilemanager#options:minimizedState) and [maximizedState](%%jQueryApiUrl%%/ui.igtilemanager#options:maximizedState) options. Tile state configuring has certain specifics depending on how you instantiate the `igTileManager` control:

-   When initializing `igTileManager` on a data source, provide an `igTemplating`™ string for the `minimizedState` and `maximizedState` options, otherwise no content will be rendered in the tile.
-   When initializing `igTileManager` on the HTML markup, provide jQuery selectors for the `minimizedState` and `maximizedState` options to specify the content to be rendered in the respective state. When any of these options is not specified then the whole content of the tile will be shown in the according state.

#### Related code example:

-   [Configuring Custom Tiles](#config-tile-states)

### <a id="config-tiles-margin"></a>Configuring the tiles’ margins

The margins of the minimized tiles define the space around each tile in the grid. The top and the left margin of the minimized tiles are configurable thus forming an outset between the tiles. Tiles’ margins are configured with the [marginTop](%%jQueryApiUrl%%/ui.igtilemanager) and [marginLeft](%%jQueryApiUrl%%/ui.igtilemanager#options:marginLeft) options.

Configuring tile margins’ values affects the sizes of the tiles. When calculating the tiles' width, the total width of the margins is subtracted from the width of the container and the width of the tiles is calculated based on the remaining width. For example, if the container has a width of 800 px and there are 4 tiles on each row, the width of the tiles is set relatively to the width of the container and the left margin of the tiles is set to 10 px, then the width of each tile will be 25% of 760 px (800 – (4 x 10) = 760).

### <a id="config-minimized-tile-panel"></a>Configuring the Minimized Tiles panel

You can disable scrolling in the Minimized Tiles panel. To hide the Minimized Tiles panel scrollbar, set the [showRightPanelScroll](%%jQueryApiUrl%%/ui.igtilemanager) option to false. When the scrollbar is not present and there are tiles in the Minimized Tiles panel that are out of sight, the only way for the user to display those tiles would be to move the splitter.

You can also hide the splitter bar to prevent the user from resizing the panels. To hide the splitter bar,,set the [showSplitter](%%jQueryApiUrl%%/ui.igtilemanager) option to false.

#### Related code example:

-   [Configuring the Minimized Tiles Panel](#config-minimized-tiles-panels)

### <a id="config-animation-duration"></a>Configuring animated transitions’ duration

The durations of the animated transitions, upon container resizing and changing the tile state (minimizing/maximizing) are configured with a single option – [animationDuration](%%jQueryApiUrl%%/ui.igtilemanager) – which setting is applied to both animations The [animationDuration](%%jQueryApiUrl%%/ui.igtilemanager) is set in milliseconds and its default value is 500. Animated durations can be disabled by setting this option to 0.

#### Related code example:

-   [**Configuring the Duration of the Animated Transitions**](#config-animation-duration)



## <a id="default-config"></a>Default Configuration

**Default configuration summary**

With its default settings, the `igTileManager` control renders tiles with items from markup and without left and top margin. All tiles fit in the container in equal number of columns and rows depending on the number of the tiles. The default configuration does not include any margins.

![](images/Configuring_igTileManager_%28Code_Examples%29_1.png)

## <a id="code-example-summary"></a>Code Examples Summary
### Code examples summary chart

The following table lists the code examples included in this topic.

Example | Description
---|---
[Configuring a Specific Number of Rows and Columns](#config-rows-columns)|This example demonstrates how to configure an `igTileManager` control to render a tile grid with a specified number of columns, rows, and margins from the HTML markup.
[Configuring column dimensions](#config-column-dimention)|This example demonstrates how to configure an `igTileManager` control to render a tile grid with specified columns’ dimensions and margins from the HTML markup.
[Configuring Tiles with Custom Positions and Spans](#config-positions-span)|This example demonstrates how to configure an `igTileManager` control to render a tile grid with items that are custom-positioned individually.
[Configuring Custom Tiles](#config-tiles-states)|This example demonstrates how to configure an `igTileManager` control to render a tile grid with custom minimized and maximized tile states.
[Configuring the Minimized Tiles Panel](#config-minimized-tile-panel)|This example demonstrates how to configure the Minimized Tiles panel with a custom layout.
[Configuring the Duration of the Animated Transitions](#config-animation-duration)|This example demonstrates how to configure the `igTileManager`‘s animated transitions for both container resizing and tile minimizing/maximizing.


## <a id="config-specific-number"></a>Code Example: Configuring a Specific Number of Rows and Columns
### <a id="specific-number-description"></a>Description

This example demonstrates how to configure an `igTileManager` control to
render a tile grid with a specified number of columns, rows, and margins
from the HTML markup.

The example configures the `igTileManager` control with 800 px height and 100% of the window\`s width. The tiles are placed in a 5-column, 4-row grid. The left and top tile margins are set to 10 px. This means that every tile will have 190 px height and the tiles will be outset at 10 px from each other. The tiles\` width is calculated depending on the container's size.

The tiles are configured to be all in minimized state at control rendering. This means that only the team logos will be visible initially. If the user clicks any of the tiles, it will expand and some statistics about the team will be displayed.

![](images/Configuring_igTileManager_%28Code_Examples%29_2.png)

### <a id="specific-number-code"></a>Code

Following is the code that implements this example.

**In HTML:**

```html
<style type="text/css">
        #dashboard {
            position: relative;
            width: 100%;
            height: 800px;
        }
</style> 
<div id="dashboard">
        <div>
           <figure class="minimized">               
               <img src="miami-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="miami-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: LeBron James - 25,9 PPG</li>
                  <li>Most rebounds per game: LeBron James - 8.40 TOT</li>
                  <li>Highest three point percentage: James Jones - 0.750</li>
               </ul>
           </div>
         </div>
         <div>
            <figure class="minimized">
               <img src="San-Antonio-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="San-Antonio-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: Tony Parker - 20,3 PPG</li>
                  <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>
                  <li>Highest three point percentage: Matt Bonner - 0.442</li>
               </ul>
           </div>
         </div>       
                ...
         <div>
            <figure class="minimized">               
               <img src="wizards-logo.jpg" alt="error">
            </figure>
            <div class="maximized">
              <img src="wizards-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: John Wall - 18,5 PPG</li>
                  <li>Most rebounds per game: Emeka Okafor - 8,80 TOT</li>
                  <li>Highest three point percentage: Martell Webster - 0.422</li>
               </ul>
           </div>
         </div>
</div>
```

**In JavaScript:**

```js
$("#dashboard").igTileManager({
   cols: 5, 
   rows: 4,
   marginLeft: 10,
   marginTop: 10,
   minimizedState: ".minimized",
   maximizedState: ".maximized"
});
```



##<a id="column-dimentions"></a>Code Example: Configuring column dimensions
### <a id="column-dimentions-description"></a>Description

This example demonstrates how to configure an igTileManager control to render a tile grid with specified columns’ dimensions and margins from the HTML markup.

The example configures the `igTileManager` control with 800 px height and 100% of the window's width. The columns in the tile manager each have 250 px height and 250 px width. The number of columns and rows in the grid depends on the size of the container. The left and top margins of the tiles are set to 10 px.

The tiles are configured to be all in minimized state at control
rendering. This means that only the team logos will be visible
initially. If the user clicks any of the tiles, it will expand and some
statistics about the team will be displayed.

![](images/Configuring_igTileManager_%28Code_Examples%29_3.png)

### <a id="column-dimentions-code"></a>Code

Following is the code that implements this example.

**In HTML:**

```html
<style type="text/css">
        #dashboard {
            position: relative;
            width: 100%;
            height: 800px;
        }
</style> 
<div id="dashboard">
        <div>
           <figure class="minimized">
               <img src="miami-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="miami-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: LeBron James - 25,9 PPG</li>
                  <li>Most rebounds per game: LeBron James - 8.40 TOT</li>
                  <li>Highest three point percentage: James Jones - 0.750</li>
               </ul>
           </div>
         </div>
         <div>
            <figure class="minimized">
               <img src="San-Antonio-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="San-Antonio-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: Tony Parker - 20,3 PPG</li>
                  <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>
                  <li>Highest three point percentage: Matt Bonner - 0.442</li>
               </ul>
           </div>
         </div>       
                ...
         <div>
            <figure class="minimized">
               <img src="wizards-logo.jpg" alt="error">
            </figure>
            <div class="maximized">
              <img src="wizards-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: John Wall - 18,5 PPG</li>
                  <li>Most rebounds per game: Emeka Okafor - 8,80 TOT</li>
                  <li>Highest three point percentage: Martell Webster - 0.422</li>
               </ul>
           </div>
         </div>
</div>
```

**In JavaScript:**

```js
$("#dashboard").igTileManager({
   columnWidth: 250,
   columnHeight: 250,
   marginLeft: 10,
   marginTop: 10,
   minimizedState: ".minimized",
   maximizedState: ".maximized"
});
```



## <a id="config-tiles-custom-position"></a>Code Example: Configuring Tiles with Custom Positions and Spans
### <a id="custom-position-description"></a>Description

This example demonstrates how to configure an `igTileManager` control to
render a tile grid with items that are custom-positioned individually.

![](images/Configuring_igTileManager_%28Code_Examples%29_4.png)

### <a id="custom-position-code"></a>Code

Following is the code that implements this example.

**In HTML:**

```html
<style type="text/css">
        #dashboard {
            position: relative;
            width: 100%;
            height: 800px;
        }
</style> 
<div id="dashboard">
        <div>
           <figure class="minimized">
               <img src="miami-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="miami-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: LeBron James - 25,9 PPG</li>
                  <li>Most rebounds per game: LeBron James - 8.40 TOT</li>
                  <li>Highest three point percentage: James Jones - 0.750</li>
               </ul>
           </div>
         </div>         <div>
            <figure class="minimized">
               <img src="San-Antonio-logo.jpg" alt="error">
            </figure>
           <div class="maximized">
              <img src="San-Antonio-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: Tony Parker - 20,3 PPG</li>
                  <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>
                  <li>Highest three point percentage: Matt Bonner - 0.442</li>
               </ul>
           </div>
         </div>  
         <div>
          <figure class="minimized">
            <img src="NY-logo.jpg" alt="error">
          </figure>
        <div class="maximized">
            <img src="ny-maximized.jpg" alt="error">
              <ul>
                 <li>Top scorer: Carmelo Anthony - 28.7 PPG</li>
                 <li>Most rebounds per game: Tyson Chandler - 10.70 TOT</li>
                 <li>Highest three point percentage: Steve Novak - 0.425</li>
              </ul>
         </div>
         </div>
         <div>
            <figure class="minimized">
               <img src="boston-logo.jpg" alt="error">
            </figure>
            <div class="maximized">
              <img src="boston-maximized.jpg" alt="error">
               <ul>
                  <li>Top scorer: Jeff Green - 20.3 PPG</li>
                  <li>Most rebounds per game: Kevin Garnett - 13.70 TOT</li>
                  <li>Highest three point percentage: Jeff Green - 0.455</li>  
               </ul>
           </div>
         </div>
</div>
```

**In JavaScript:**

```js
$("#dashboard").igTileManager({
       items: [
          { rowIndex: 0, colIndex: 0, rowSpan: 1, colSpan: 2 },
         { rowIndex: 1, colIndex: 0, rowSpan: 1, colSpan: 1 },
         { rowIndex: 1, colIndex: 1, rowSpan: 2, colSpan: 1 },
         { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 }
       ],
       minimizedState: ".minimized",
       maximizedState: ".maximized"
});
```



## <a id="config-tile-states"></a>Code Example: Configuring Tile States
### <a id="tile-states-description"></a>Description

This example demonstrates how to configure the `igTileManager` control to render a tile grid with custom minimized and maximized tile states. Both alternatives for instantiating the control – on the data source and in the HTML markup are covered.

### <a id="tile-states-code"></a>Code

Following is the code that implements this example when initializing the tile grid on the data source:

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    dataSource: dataSource,
    minimizedState: '<h3>${name} - Minimized</h3>',
    maximizedState: '<h3>${name} - Maximized</h3>'
});
```

Following is the code that implements this example when initializing the tile grid in the HTML markup:

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    dataSource: ,
    minimizedState: '.minimized',
    maximizedState: '.maximized'
});
```



## <a id="config-minimized-tiles-panels"></a>Code Example: Configuring the Minimized Tiles Panel
### <a id="tiles-panels-description"></a>Description

This example demonstrates how to configure the Minimized Tiles panel
with a custom layout.

In the example, upon selecting a tile and maximizing it, the minimized tiles are re-grouped into two columns in the Minimized Tiles panel. The splitter bar is disabled.

### <a id="tiles-panels-code"></a>Code

Following is the code that implements this example.

**In HTML:**

```html
<style type="text/css">

        #dashboard {

            position: relative;

            width: 100%;

            height: 800px;

        }

</style> 

<div id="dashboard">

        <div>

           <figure class="minimized">

               <figcaption>Miami Heat</figcaption>

               <img src="miami-logo.jpg" alt="error">

            </figure>

           <div class="maximized">

              <img src="miami-maximized.jpg" alt="error">

               <ul>

                  <li>Top scorer: LeBron James - 25,9 PPG</li>

                  <li>Most rebounds per game: LeBron James - 8.40 TOT</li>

                  <li>Highest three point percentage: James Jones - 0.750</li>

               </ul>

           </div>

         </div>

         <div>

            <figure class="minimized">

               <figcaption>San Antonio Spurs</figcaption>

               <img src="San-Antonio-logo.jpg" alt="error">

            </figure>

           <div class="maximized">

              <img src="San-Antonio-maximized.jpg" alt="error">

               <ul>

                  <li>Top scorer: Tony Parker - 20,3 PPG</li>

                  <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>

                  <li>Highest three point percentage: Matt Bonner - 0.442</li>

               </ul>

           </div>

         </div>       

         <div>

            <figure class="minimized">

               <figcaption>Boston Celtics</figcaption>

               <img src="boston-logo.jpg" alt="error">

            </figure>

            <div class="maximized">

              <img src="boston-maximized.jpg" alt="error">

               <ul>

                  <li>Top scorer: Jeff Green - 20.3 PPG</li>

                  <li>Most rebounds per game: Kevin Garnett - 13.70 TOT</li>

                  <li>Highest three point percentage: Jeff Green - 0.455</li>  

               </ul>

           </div>

         </div>

</div
```

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    rightPanelCols: 2,
    rightPanelTilesWidth: 100,
    rightPanelTilesHeight: 100,
    showSplitter: false    
});
```



## <a id="config-animation-duration"></a>Code Example: Configuring the Duration of the Animated Transitions
### <a id="animation-duration-description"></a>Description

This example demonstrates how to configure the igTileManager‘s animated transitions for both container resizing and tile minimizing/maximizing.

The example configures animated transitions to take 2000 milliseconds.

### <a id="animation-dration-code"></a>Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#dashboard").igTileManager({
    animationDuration: 2000, 
    columnWidth: 250,
    columnHeight: 250
});
```



## <a id="related-topics"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Handling Events (igTileManager)](igTileManager-Handling-Events.html): This topic explains, with code examples, how to attach event handlers to the `igTileManager` control.
    
- [Accessibility Compliance (igTileManager)](igTileManager-Accessibility-Compliance.html): This topic explains the accessibility features of the `igTileManager` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igTileManager)](igTileManager-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igTileManager` control and the available workarounds for them.

- [jQuery and ASP.NET MVC Helper API Links (igTileManager)](igTileManager-jQuery-and-ASP.NET-MVC-Helper-API-Links.html): This topic provides links to the API reference documentation for the jQuery and its ASP.NET MVC helper class for the `igTileManager` control.



### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

- [Tile Manager Binding to JSON Data](%%SamplesUrl%%/tile-manager/bind-json): This sample demonstrates binding `igTileManager` control to JSON data source.

- [Tile Manager Item Configurations](%%SamplesUrl%%/tile-manager/item-configurations): This sample demonstrates configuring the tiles inside the `igTileManager` in terms of position and size.





 

 


