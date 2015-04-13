<!--
|metadata|
{
    "fileName": "javascript-excel-library-freeze-rows-and-columns",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Freeze Rows and Columns

Certain data on a worksheet should always remain in view (e.g., column headers and the primary field in a row). For this data, you can freeze rows at the top or columns at the left of a worksheet. When you freeze rows in a worksheet and scroll the worksheet vertically, those rows remain fixed at the top of the worksheet. Similarly, frozen columns remain at the left of the worksheet, regardless of the horizontal scroll position. The unfrozen rows and columns exist in the bottom-right pane of the worksheet. You can also specify which row or column is first visible in this pane; doing so sets the vertical and horizontal scroll position of the worksheet.

The following code demonstrates how to freeze rows and columns in a worksheet:

**In JavaScript:**

```js
var workbook = new $.ig.excel.Workbook();
var worksheet = workbook.worksheets().add("Sheet1");

worksheet.displayOptions().panesAreFrozen(true);

// One row is frozen at the top of the worksheet
worksheet.displayOptions().frozenPaneSettings().frozenRows(1);

// Two columns are frozen at the left of the worksheet
worksheet.displayOptions().frozenPaneSettings().frozenColumns(2);
```

