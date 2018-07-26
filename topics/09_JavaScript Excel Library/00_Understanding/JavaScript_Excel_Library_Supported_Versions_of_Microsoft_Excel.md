<!--
|metadata|
{
    "fileName": "javascript-excel-library-supported-versions-of-microsoft-excel",
    "controlName": ["igExcel"],
    "tags": ["FAQ"]
}
|metadata|
-->

# Supported Versions of Microsoft Excel

The Infragistics JavaScript Excel Library™ is capable of saving and reading Microsoft® Excel® files using the below formats.


|File Formats                          | Enumeration | Notes
|--------------------------------------|---|---|
|Excel 97-2003 Workbook (*.xls)        | $.ig.excel.WorkbookFormat.excel97To2003 | Uses BIFF8 format. |
|Excel 97-2003 Template (*.xlt)        | $.ig.excel.WorkbookFormat.excel97To2003Template | Uses BIFF8 format. |
|Excel Workbook (*.xlsx)               | $.ig.excel.WorkbookFormat.excel2007 | When using the [Save](%%jQueryApiUrl%%/ig.excel.Workbook) function off the [Workbook](%%jQueryApiUrl%%/ig.excel.Workbook#methods:save) object, the .xlsx file is written in XML file format. |
|Excel Macro-Enabled Workbook (*.xlsm) | $.ig.excel.WorkbookFormat.excel2007MacroEnabled | Macros are not parsed and executed however their data can be read from and written to files. |
|Excel Template (*.xltx)               | $.ig.excel.WorkbookFormat.excel2007Template ||
|Excel Macro-Enabled Template (*.xltm) | $.ig.excel.WorkbookFormat.excel2007MacroEnabledTemplate | Macros are not parsed and executed however their data can be read from and written to files. |
|Strict Open XML Spreadsheet (*.xlsx)  | $.ig.excel.WorkbookFormat.strictOpenXml | The Strict Open XML file format (ISO/IEC 29500 Strict). |