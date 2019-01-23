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


|File Formats                          | Enumeration                                                               | Notes
|--------------------------------------|---------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|Excel 97-2003 Workbook (*.xls)        | Infragistics.Documents.Excel.WorkbookFormat.Excel97To2003                 | Uses BIFF8 format.                                                                                                                                                                          |
|Excel 97-2003 Template (*.xlt)        | Infragistics.Documents.Excel.WorkbookFormat.Excel97To2003Template         | Uses BIFF8 format.                                                                                                                                                                          |
|Excel Workbook (*.xlsx)               | Infragistics.Documents.Excel.WorkbookFormat.Excel2007                     |                                                                                                                                                                                             |
|Excel Macro-Enabled Workbook (*.xlsm) | Infragistics.Documents.Excel.WorkbookFormat.Excel2007MacroEnabled         | The Infragistics Excel engine does not support creating, parsing nor executing macros. If there are modules in a file that is loaded those will be included in the output when it is saved. |
|Excel Template (*.xltx)               | Infragistics.Documents.Excel.WorkbookFormat.Excel2007Template             |                                                                                                                                                                                             |
|Excel Macro-Enabled Template (*.xltm) | Infragistics.Documents.Excel.WorkbookFormat.Excel2007MacroEnabledTemplate | The Infragistics Excel engine does not support creating, parsing nor executing macros. If there are modules in a file that is loaded those will be included in the output when it is saved. |
|Strict Open XML Spreadsheet (*.xlsx)  | Infragistics.Documents.Excel.WorkbookFormat.StrictOpenXml                 | The Strict Open XML file format (ISO/IEC 29500 Strict).                                                                                                                                     |
