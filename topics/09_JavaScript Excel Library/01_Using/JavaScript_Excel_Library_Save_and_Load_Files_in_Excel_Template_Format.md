<!--
|metadata|
{
    "fileName": "javascript-excel-library-save-and-load-files-in-excel-template-format",
    "controlName": ["igExcel"],
    "tags": ["How Do I", "Templating"]
}
|metadata|
-->

# Save and Load Files in Excel Template Format

The Infragistics JavaScript Excel Library enables you to define template files in three file formats. The three template formats are the Excel Template format (with extension XLTX), the Excel Macro-Enabled Template format (with extension XLTM), and the Excel 97-2003 Template format (with extension XLT). You can save and load files in these formats.

The [`WorkbookFormat`](%%jQueryApiUrl%%/ig.excel.WorkbookFormat "Link to the Web API Reference Guide to the WorkbookFormat member.") enumeration has the values excel2007Template, excel2007MacroEnabledTemplate, and excel97To2003Template that correspond to the XLTX, XLTM, and XLT formats. The [`currentFormat`](%%jQueryApiUrl%%/ig.excel.Workbook#methods:currentFormat "Link to the Web API Reference Guide to the CurrentFormat member.") property can be used to get the current format of the file. When loading a file if the extension is unknown, the contents of the file will be parsed to dynamically determine the correct format.

The following code illustrates saving an Excel file in the excel2007Template format using the [`save`](%%jQueryApiUrl%%/ig.excel.Workbook#methods:save "Link to the Web API Reference Guide to the save member.") function.

**In JavaScript:**

```js
// Create a workbook and set its format to Excel2007Template
var newWorkBook = 
  new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007Template);
// Add a worksheet to the workbook
var worksheet1 = newWorkBook.worksheets().add("Sheet1");
// Format a cell in the worksheet
worksheet1.rows(1).cells(1).cellFormat().fill(
  $.ig.excel.CellFill.createSolidFill("red"));
// Save the workbook
newWorkBook.save(function(data) { 
  },
  function(error) {
  });
```