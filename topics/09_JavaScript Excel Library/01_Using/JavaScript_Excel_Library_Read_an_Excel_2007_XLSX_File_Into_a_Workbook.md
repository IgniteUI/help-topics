<!--
|metadata|
{
    "fileName": "javascript-excel-library-read-an-excel-2007-xlsx-file-into-a-workbook",
    "controlName": ["igExcel"],
    "tags": ["Data Binding","How Do I"]
}
|metadata|
-->

# Read an Excel 2007 XLSX File Into a Workbook

In addition to writing out Microsoft® Excel® files, the JavaScript Excel Library can also read them. When an Excel file is read with the static [`load`](%%jQueryApiUrl%%/ig.excel.Workbook#methods:load "Link to the Web API Reference Guide to the Load member.") method, a [`Workbook`](%%jQueryApiUrl%%/ig.excel.Workbook "Link to the Web API Reference Guide to the Workbook member.") object is created and its entire object model is populated with all supported information from the file.

If you are loading a workbook of a particular format and you would like to save it as another format, you can use the [setCurrentFormat](%%jQueryApiUrl%%/ig.excel.Workbook#methods:setCurrentFormatl "Link to the Web API Reference Guide to the setcurrentformat member.") method of the [Infragistics.Documents.Excel.Workbook](%%jQueryApiUrl%%/ig.excel.Workbookl "Link to the Web API Reference Guide to the workbook member.") object. Also, the [currentFormat](%%jQueryApiUrl%%/ig.excel.Workbook#methods:currentFormat "Link to the Web API Reference Guide to the currentformat member.") property can be used to get the current workbook format.

The following code demonstrates how to read in an existing XLSX workbook, make a change, and write the workbook to a new file:

**In JavaScript:**

```js
var workbook = $.ig.excel.Workbook.load(fileData);

workbook.worksheets(0).rows(0).cells(0).value(19);
workbook.save(function(data) { 
  },
  function(error) {
  });
```



 

 


