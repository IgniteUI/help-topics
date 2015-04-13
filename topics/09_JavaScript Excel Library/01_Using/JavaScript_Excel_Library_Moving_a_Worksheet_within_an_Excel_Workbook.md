<!--
|metadata|
{
    "fileName": "javascript-excel-library-moving-a-worksheet-within-an-excel-workbook",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Moving a Worksheet within an Excel Workbook
In certain cases you might need to move a worksheet to a particular index position in the owning Excel® workbook’s worksheets collection.

Considering, you have three worksheets in an Excel Workbook, you can place worksheet3 in the first position, using the [`moveToIndex`](%%jQueryApiUrl%%/ig.excel.Worksheet#methods:moveToIndex "Link to the Web API Reference Guide to the MoveToIndex method.") method of the  [`Worksheet`](%%jQueryApiUrl%%/ig.excel.Worksheet "Link to the Web API Reference Guide to the Worksheet class.") class.

The following example code demonstrates how to implement this.

**In JavaScript:**
```js
var workbook = new $.ig.excel.Workbook();
var worksheet1 = workbook.worksheets().add("Sheet1");
var worksheet2 = workbook.worksheets().add("Sheet2");
var worksheet3 = workbook.worksheets().add("Sheet3");
// Moving Sheet3 to the first position
worksheet3.moveToIndex(0);
```