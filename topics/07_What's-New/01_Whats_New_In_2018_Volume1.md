<!--
|metadata|
{
    "fileName": "whats-new-in-2018-volume1",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# What's New in 2018 Volume 1

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2018 Volume 1 release.


### Overview

The following table summarizes what’s new in 2018 Volume 1 and additional details follow.

### Spreadsheet
Feature | Description
---|---
[Sorting](#SpreadSheetSorting)| Worksheet Level Sorting.
[Conditional Formatting](#ConditionalFormattingSpreadsheet)| Support for displaying Worksheet conditional formats.
[Worksheet Filtering](#WorksheetFiltering)| Worksheet Level Filtering.
[Table Improvements](#TableImprovments)| Many new improvements.

### Excel Engine
Feature | Description
---|---
[Conditional Formatting](#ConditionalFormattingExcel)| Support for creating, saving, and loading conditional formats.
[Worksheet Filtering and Sorting](#ExcelWorksheetFiltering)| Worksheet Level Filtering and Sorting.
[More Excel function support](#ExcelFunctions)| More supported Excel functions.

### igFinancialChart

Feature | Description
---|---
[Financial Chart](#financialChart)| A new financial chart is added this release.

### igUpload

Feature | Description
---|---
[Use Single Request to Upload Multiple Files](#useSingleRequest)| Allows the control to upload multiple files using a single HTTP request.

## Excel

### <a id="ConditionalFormattingExcel"></a> Support for creating, saving, and loading conditional formats
Conditional formatting allows you to automatically apply formatting — such as colors, icons, and data bars — to one or more cells based on the cell value. To do this, you’ll need to create a conditional formatting rule. For example, a conditional formatting rule might be if the value is less than $2000, color the cell red. By applying this rule, you would be able to quickly see which cells contain values less than $2000.

#### Related Topic
-   [Excel Engine Conditional Formatting](javascript-excel-library-conditional-formatting.html)

### <a id="ExcelWorksheetFiltering"></a> Worksheet Level Filtering and Sorting 
We already had support in our engine for sorting and filtering within a WorksheetTable. Excel also has the ability to define a single area within the worksheet outside of a table that you can do sorting and filtering within and you can also define one other area within a worksheet that is sorted. Therefore, we added support for these worksheet level sorting and filtering operations to our Excel Engine. In addition we made the icon sorting/filtering classes public. Previously these were internal because the only way to specify an icon is via an iconset conditional format and we didn’t support conditional formatting.

#### Related Topics
-   [Excel Engine Worksheet Filtering](javascript-excel-library-worksheet-level-filtering.html)
-   [Excel Engine Worksheet Sorting](javascript-excel-library-worksheet-level-sorting.html)

### <a id="excelFunctions"></a> More Excel function support

We added over 100 new functions for Excel.

- [Supported Functions for the Infragistics Excel Engine](ExcelEngine-List-of-Supported-Built-in-Functions)

- [Supported Functions for the JavaScript Excel Library](JavaScript-Excel-Library-List-of-Supported-Built-in-Functions.html)

## Spreadsheet

### <a id="SpreadSheetSorting"></a> Spreadsheet Worksheet Level Sorting

In this release, for the igSpreadsheet control, we added sorting to the Worksheet object. 

You can sort columns or rows in ascending or descending order.

#### Related Topics
[igSpreadsheet Sorting](javascript-excel-library-worksheet-level-sorting.html).

### <a id="ConditionalFormattingSpreadsheet"></a> Spreadsheet Conditional Formatting

With the addition of the conditional formatting feature in the Excel Engine, we can now leverage this in the spreadsheet. The spreadsheet supports rendering all conditional formatting features available in Microsoft Excel. Microsoft Excel has several predefined styles — or presets — you can use to quickly apply conditional formatting to your data. They are grouped into three categories:
- Data Bars are horizontal bars added to each cell, much like a bar graph. 
- Color Scales change the color of each cell based on its value. Each color scale uses a two- or three-color gradient. For example, in the Green-Yellow-Red color scale, the highest values are green, the average values are yellow, and the lowest values are red. 
- Icon Sets add a specific icon to each cell based on its value

#### Related Topic
- [Conditional Formatting](igspreadsheet-conditional-formatting.html).

### <a id="WorksheetFiltering"></a> Worksheet Level Filtering.

By filtering information in a worksheet, you can find values quickly. You can filter on one or more columns of data. With filtering, you can control not only what you want to see, but what you want to exclude. You can filter based on choices you make from a list, or you can create specific filters to focus on exactly the data that you want to see. When you filter data, entire rows are hidden if values in one or more columns don’t meet the filtering criteria. You can filter on numeric or text values, or filter by color for cells that have color formatting applied to their background or text.
Filtering options are available on the context menu of cells in the igSpreadsheet. After applying a filter, users can select the Custom Filter…​ option in the filter dropdown to open a dialog that has even more filtering options. 

#### Related Topic
- [Conditional Formatting](igspreadsheet-conditional-formatting.html).

### <a id="AutoFilter"></a> AutoFilter

The headers of a WorksheetTable and the header cells of the worksheet level filtering region will display a dropdown button that displays the filter related menu. The buttons show the sort and filter state and the tooltip displays a friendly description of the filter for that column. The menu displays various options for sorting and filtering. The filter options displayed are dependent on the data types in the column as they are in excel. So you’ll see one of the following:
- Text Filters
- Number Filters
- Date Filters

### <a id="TableImprovments"></a> Many new improvements

#### Copy/Paste
Tables will now be copied when the source selection encompasses the entire table. So select an entire table (e.g. click in a cell, press ctrl+a two times), copy it to the clipboard and then paste elsewhere and a new copy of that table is created. Pasting within a WorksheetTable will automatically expand the table to encompass the area of the paste.

#### Editing
Typing/editing immediately adjacent to the bottom/right edge of a WorksheetTable will expand the table (in a separate undoable operation similar to what Excel does).

#### Tab Navigation
Tab Navigation within a table will navigate within the table wrapping to the next/previous row. Similar to Excel the table will also be automatically expanded when tabbing from the last visible cell of the table.

#### Total Row Formulas
In Excel when a cell in total row of a table is active, a dropdown button is displayed that lets you choose a common formula for a table. We differ from Excel in that they include an option to show another dialog for other formulas but it’s still useful without that. It can be shown by clicking the dropdown button or pressing Alt+Down when the cell is active.

#### Context Menu Improvements
Additional context menu items were added. This includes menu items for inserting and adding rows and columns to the table, selecting the table row/column, toggling the total row, converting the table to a range, etc.
The table cell context menu is similar to the cell context menu except it is displayed when the active cell is part of a WorksheetTable. That menu also has a number of new commands that relate to affecting the table. Note there is now an ActiveTable exposed as well when the ActiveCell is part of a table.

#### List Validation
In Excel you can define a special type of data validation called a list data validation that either contains an explicit list of values or points to a range of cells that contains the values. There is an option on that validation for whether to show a cell dropdown. The data validation class has been in our excel engine for a long time and the spreadsheet has honored using the validation during editing for a while now too but we never showed a list so the end users had to know the list of valid values. Now we support showing a dropdown button (when the ShowDropdown is true) that will display a drop down list of the values. It can be shown by clicking the dropdown button or pressing Alt+Down when the cell is active.

#### Cell Dropdown
There are 2 ways to show the Cell Dropdown. One is via the context menu for a cell using the Pick From Drop-down List… item and the other is by pressing Alt+Down. This displays a dropdown of the text/string values immediately above and below the active cell. So you’re not explicitly defining the contents of the list like you do with a list data validation – it’s implicitly populated based on the cells above/below in the same manner as Excel. Note igSpreadsheet differs from Excel in that this dropdown will not be shown while in edit mode. As with Excel it ignores numerical values, stops at blanks and table boundaries, etc.

## igFinancialChart
The igFinancialChart is a lightweight, high-performance chart. This chart can be easily configured to display financial data using an extremely simple and intuitive API. All you need to do is bind your data (a collection or a collection of collections) and the chart takes care of everything else. The chart offers multiple ways for the user to visualize and interpret the data, including several display modes for price and volume, and many financial indicators. The chart also makes use of label formatting to give the data context.

#### Related Topic
- [Financial Chart](financial-chart-overview.html).

## igUpload

### <a id="useSingleRequest"></a> Use Single Request to Upload Multiple Files

The [`useSingleRequest`](%%jQueryApiUrl%%/ui.igupload#options:useSingleRequest) option is used to configure the multiple files upload process.

#### Related Topics
-   [Configuring igUpload](igupload-configuring-igupload.html)