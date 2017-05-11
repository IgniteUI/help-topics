<!--
|metadata|
{
    "fileName": "igspreadsheet-feature-overview",
    "controlName": "igSpreadsheet",
    "tags": []
}
|metadata|
-->

# igSpreadsheet Features Overview

## Introduction

This topic explains the features supported by the control from a developer’s perspective.

### Required background
To understand this topic you need to be familiar with the concept and topics related to the [Infragistics JavaScript Excel Library](javascript-excel-library.html).

### In this topic
This topic contains the following sections:

-   [Introduction](#introduction)
- 	[Main Features](#main_features)
- 	[Related Links](#main_features)

## <a id="introduction"></a>Introduction

The `igSpreadsheet` control allows visualizing and editing of spreadsheet data, represented by the data model supported by the Infragistics Excel Engine comprising of [Workbooks](%%jQueryApiUrl%%/ig.excel.Workbook), [Worksheets](%%jQueryApiUrl%%/ig.excel.Worksheet), [Cells](%%jQueryApiUrl%%/ig.excel.WorksheetCell), [Formulas](%%jQueryApiUrl%%/ig.excel.Formula) and more.

The following screenshot shows the `igSpreadsheet` control displaying some spreadsheet data:

![](images/igSpreadsheet_FeatureOverview.jpg)

## <a id="main_features"></a>Main Features

The following table summarizes the main features of the `igSpreadsheet` control.

| Feature			| Description     																	|
| ------------- 	|:-------------:																	|
| Cell Alignment    | The control supports many horizontal and vertical cell content alignments. Indentation, text wrap and cell merging are also supported. <br>**Note:** Content justify, text direction (different from left to right), rotation and vertical text are not supported. 	|
| Cell Borders		| The control supports cell borders but it does not scale them when zooming. |
| Actions			| The control provides a lot of actions for activating different features.   |
| Context Menu 		| The control provides contextual menus allowing the user to perform different operations depending on the selected visual element. <br>**Related Topic:** [igSpreadsheet Context Menu](igspreadsheet-Context-Menu.html) |
| Copy and Paste 	| The control supports clipboard copying of information between cells, sheets and also between external applications (like MS Excel). |
| Data Validation 	| The control supports a data validation feature which allows validation of the user input based on validation rules set on the cells. Your rules configuration also includes an input message and an error message dialog shown when the user input does not pass the validation. |
| Data Validation 	| The control supports a data validation feature which allows validation of the user input based on validation rules set on the cells. Your rules configuration also includes an input message and an error message dialog shown when the user input does not pass the validation. |
| Font Styles 		| The control supports the following text properties - font family, font size, bold, italic, underline, double underline, strikethrough and color.<br> **Note:** You may notice rendering difference comparing to MS Excel when having underline and large sized text on the same line. |
| Formula Bar 		| The control allows the user to read the predefined cell text and formulas. The formula bar supports multiple lines. |
| Freezing Panes	| The control allows freezing of top row(s) and/or left column(s). Frozen row(s) and/or column(s) remain visible at all time while the user is scrolling. <br>**Related Sample:** [View Configuration Sample](%%SamplesUrl%%/spreadsheet/view-configuration) |
| Gridlines			| The control can show or hide the grid lines used to separate the worksheet’s cells. |
| Headers			| The control can show or hide the columns’ and rows’ headers.						  |
| Hiding			| The control supports hiding of columns and rows. The user can start resizing a column or row and shrink it to a point where it is no longer visible. A special indicator will be rendered at the place of the hidden column or row allowing it to be made visible again. |
| Hyperlinks		| The control supports hyperlinks defined in both the underlying object model and as a worksheet cell formula.  |
| Inserting and Deleting Cells, Columns and Rows | The control supports cells, columns and rows managing programmatically.  |
| Resizing			| The control supports resizing of columns and rows. The user can resize columns and rows by dragging the mouse at the border between two columns headers or two row headers and resize the column or row. Auto-sizing is also supported by double-clicking on the right border of a column header or double-clicking on the bottom border of a row header. |
| Selection			| The control supports several selection modes which may be switched programmatically or by the user. The currently selected cells can be set and obtained programmatically. <br>**Related Topic:** [igSpreadsheet Selection](igspreadsheet-selection.html) |
| Splitting Panes	| The control supports splitting the worksheet view into panes. Each scrollable pane row and column has its own scrollbar.	|
| Tab Bar Area		| The control supports dedicated tabs area for switching between worksheets.	|
| Undo and Redo		| The control provides unlimited undo and redo operations. You can enable/disable the undo and redo and also use separate or shared undo managers for each `igSpreadsheet` control.		|
| Zooming			| The control supports content zooming. The entire workbook content is scaled.<br> **Note:** The cell borders and cell gridlines are not scaled.	|

## Related Links

-   [igSpreadsheet Overview](igSpreadsheet-Overview.html)
-   [igSpreadsheet Selection](igspreadsheet-selection.html)
-   [igSpreadsheet Context Menu](igspreadsheet-context-menu.html)
-   [igSpreadsheet API](%%jQueryApiUrl%%/ui.igSpreadsheet)