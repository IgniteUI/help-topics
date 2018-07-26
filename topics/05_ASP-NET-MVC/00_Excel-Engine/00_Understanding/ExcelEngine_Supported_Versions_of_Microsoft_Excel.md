<!--
|metadata|
{
    "fileName": "excelengine-supported-versions-of-microsoft-excel",
    "controlName": "Infragistics Excel Library",
    "tags": ["FAQ"]
}
|metadata|
-->

# Supported Versions of Microsoft Excel

The Infragistics Excel Engine™ is capable of saving and reading Microsoft® Excel® files using the below formats.


|File Formats                          | Enumeration | Notes
|--------------------------------------|---|---|
|Excel 97-2003 Workbook (*.xls)        | Infragistics.Documents.Excel.WorkbookFormat.Excel97To2003 | Uses BIFF8 format. |
|Excel 97-2003 Template (*.xlt)        | Infragistics.Documents.Excel.WorkbookFormat.Excel97To2003Template | Uses BIFF8 format. |
|Excel Workbook (*.xlsx)               | Infragistics.Documents.Excel.WorkbookFormat.Excel2007 | When using the [Save](%%jQueryApiUrl%%/ig.excel.Workbook) function off the [Workbook](%%jQueryApiUrl%%/ig.excel.Workbook#methods:save) object, the .xlsx file is written in XML file format. |
|Excel Macro-Enabled Workbook (*.xlsm) | Infragistics.Documents.Excel.WorkbookFormat.Excel2007MacroEnabled | Macros are not parsed and executed however their data can be read from and written to files. |
|Excel Template (*.xltx)               | Infragistics.Documents.Excel.WorkbookFormat.Excel2007Template ||
|Excel Macro-Enabled Template (*.xltm) | Infragistics.Documents.Excel.WorkbookFormat.Excel2007MacroEnabledTemplate | Macros are not parsed and executed however their data can be read from and written to files. |
|Strict Open XML Spreadsheet (*.xlsx)  | Infragistics.Documents.Excel.WorkbookFormat.StrictOpenXml | The Strict Open XML file format (ISO/IEC 29500 Strict). |
