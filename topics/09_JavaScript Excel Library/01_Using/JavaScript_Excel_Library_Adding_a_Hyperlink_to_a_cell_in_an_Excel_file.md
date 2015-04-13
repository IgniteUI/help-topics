<!--
|metadata|
{
    "fileName": "javascript-excel-library-adding-a-hyperlink-to-a-cell-in-an-excel-file",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Adding a Hyperlink to a cell in an Excel file

This topic shows you how to add a hyperlink to a cell in a Microsoft® Excel™ file using the [`WorksheetCell`](%%jQueryApiUrl%%/ig.excel.WorksheetCell "Link to the API Reference Guide to the worksheetCell member.") object’s [applyFormula](%%jQueryApiUrl%%/ig.excel.WorksheetCell#methods:applyFormula "Link to the API Reference Guide to the applyFormula member.") function. The following code creates an Excel file with a hyperlink in cell 0 of the worksheet by using the Microsoft Excel `HYPERLINK` formula.

**In JavaScript:**

```js
// Create a Workbook
var w = new $.ig.excel.Workbook();

// Add a new worksheet to the Workbook
var ws = w.worksheets().add("New");

// Create Hyperlink in a Worksheet cell
ws.rows(0).cells(0).applyFormula("=HYPERLINK(\"http://www.infragistics.com\",\"Infragistics\")");
```