<!--
|metadata|
{
    "fileName": "javascript-excel-library-creating-a-workbook-in-office-2007-xlsx-format",
    "controlName": ["igExcel"],
    "tags": ["Getting Started"]
}
|metadata|
-->

# Creating a Workbook in office 2007 XLSX format

Infragistics® Excel® object library enables you to create Excel files with the new `xlsx` format (Excel2007).

The example code below shows you how to set the new xlsx format for the Excel Workbook.

**In JavaScript:**

```js
var workbook = new $.ig.excel.Workbook();
workbook.setCurrentFormat ($.ig.excel.WorkbookFormat.excel2007);
```

