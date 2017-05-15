<!--
|metadata|
{
    "fileName": "igspreadsheet-activation-and-navigation-interactions",
    "controlName": "igSpreadsheet",
    "tags": []
}
|metadata|
-->

# igSpreadsheet Activation and Navigation Interactions

## Introduction

This topic explains what actions can be performed by the user when navigating through the worksheet cells.

### Required background

To understand this topic you need to be familiar with the concept and topics related to the [Infragistics JavaScript Excel Library](javascript-excel-library.html).

### In this topic

This topic contains the following sections:

-   [Activation](#activation)
-   [Spreadsheet Panes](#spreadsheet_panes)
-   [Navigation](#navigation)
- 	[User Interactions and Usability](#user_interactions_and_usability)
- 	[Related Links](#related_link)

## <a id="activation"></a>Activation

The `igSpreadsheet` control's active cell is the cell on which the user may operate. This active cell is highlighted with an additional border and also its row and column are highlighted with different background color.

The following screenshot shows the `igSpreadsheet` control with the cell at address B3 activated:

![](images/igSpreadsheet_Activation.jpg)

## <a id="spreadsheet_panes"></a>Spreadsheet Panes

The `igSpreadsheet` control supports sheet panes. Each sheet pane is an intersection of a region of columns and a region of rows from the currently selected worksheet. Spreadsheet panes are formed when you:

- Freeze rows and/or columns
- Create splits

There can be only one active sheet pane at a time and this is the sheet pane that has the focus. This pane also contains the active cell.

>**Note:** Each sheet pane maintains its own selection information and also provides information about the rows and columns that are visible.

## <a id="navigation"></a>Navigation

You can navigate through the cells of the active pane of the currently selected worksheet. The active cell can be changed using the keyboard or mouse and also using the horizontal and vertical scroll bars to change the visible columns and rows of the active sheet pane.

>**Note:** The active cell is also part of the active pane’s selection.

In addition to the normal navigation behavior the `igSpreadsheet` control supports End Mode navigation, in which mode the arrow keys are used to navigate adjacent cells with data.

## <a id="user_interactions_and_usability"></a>User Interactions and Usability

The following table summarizes the main user interaction capabilities of the `igSpreadsheet` control.

| The user can… 										| Using...      																	| Details  								|
| ------------- 										|:-------------:																	| -----:   								|
| Activate a specific sheet cell    					| Click on the specific cell / Navigate to this specific cell using the arrow keys	| The specified cell will be activated  |
| Activate the first column cell						| Press <kbd>Home</kbd>																| The first cell on the current row will be activated. If end mode is selected the last cell with data will be activated.  |
| Activate the cell located on the first row and column | Press <kbd>Ctrl</kbd> + <kbd>Home</kbd>											| The first cell on the first column will be activated    			   |
| Go to the last used cell 								| Press <kbd>Ctrl</kbd> + <kbd>End</kbd>											| Move the active cell to the last cell with value in the current sheet pane |
| Navigate one cell up 									| Press <kbd>&uarr;</kbd>															| The cell above the current active cell will be activated				   |
| Navigate one cell down								| Press <kbd>&darr;</kbd>															| The cell below the current active cell will be activated 				   |
| Navigate one cell left 								| Press <kbd>&larr;</kbd> / Press <kbd>Shift</kbd>+<kbd>Tab</kbd>					| The cell left from the currently active cell will be activated		 |
| Navigate one cell right								| Press <kbd>&rarr;</kbd> / Press <kbd>Tab</kbd>									| The cell right from the currently active cell will be activated		  |
| Navigate page up										| Press <kbd>Page Up</kbd>															| Move active cell as much cells above as much rows are visible in the current sheet pane |
| Navigate page down									| Press <kbd>Page Down</kbd>														| Move active cell as much cells below as much rows are visible in the current sheet pane |
| Navigate page left									| Press <kbd>Alt</kbd>+<kbd>Page Up</kbd>											| Move active cell as much cells to the left as much columns are visible in the current sheet pane |
| Navigate page right									| Press <kbd>Alt</kbd>+<kbd>Page Down</kbd>											| Move active cell as much cells to the right as much columns are visible in the current sheet pane |
| Navigate a specific amount of rows up or down			| Scroll using the vertical scroll bar												| This changes the visible rows of the current sheet pane without changing the current active cell	   |
|Navigate a specific amount of columns left or right	| Scroll using the horizontal scroll bar											| This changes the visible columns of the current sheet pane without changing the current active cell |
| Enter/exit end mode navigation						| Press <kbd>End</kbd>																| This toggles the end mode navigation	|

Have in mind that all those interactions are not configurable.

>**Note:** If the user has more than one worksheet selected and changes the active cell, the new active cell will be synchronized across all selected worksheets.

## <a id="related_link"></a>Related Links

-   [igSpreadsheet Overview](igSpreadsheet-Overview.html)
-   [Configuring igSpreadsheet](configuring-igspreadsheet.html)
-   [igSpreadsheet API](%%jQueryApiUrl%%/ui.igspreadsheet)