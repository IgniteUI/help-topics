<!--
|metadata|
{
    "fileName": "javascript-excel-library-getting-the-value-of-a-formula-from-an-excel-file",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Getting the Value of a Formula from an Excel File

In order to get the evaluated value of an Excel Cell that is represented by a Formula, you simply access the [`value`](%%jQueryApiUrl%%/ig.excel.WorksheetCell#methods:value "Link to the API Reference Guide to the value member.") property of the [WorksheetCell](%%jQueryApiUrl%%/ig.excel.WorksheetCell "Link to the API Reference Guide to the worksheetcell member.").

The example code below shows you how to access a particular Excel Worksheet Cell that is populated by an Excel Formula.

**In JavaScript:**
```js
var calculatedValue = theWorksheet.rows(1).cells(4).value();
```
## Related Topics
- [Read an Excel File into a Workbook](JavaScript-Excel-Library-Read-an-Excel-2007-XLSX-File-Into-a-Workbook.html "Explains how to read and excel file into a workbook.")

 

 


