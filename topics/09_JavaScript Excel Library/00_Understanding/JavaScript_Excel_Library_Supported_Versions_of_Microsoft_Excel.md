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

The Infragistics JavaScript Excel Library™ is capable of saving and reading Microsoft® Excel® .xls files. These .xls files are saved in a BIFF8 format, and are therefore compatible only with specific versions of Excel. The following table lists the supported versions of Excel and any restrictions or limitations associated with that version.

Excel version | Description
---|---
Microsoft Excel 97 | Uses the BIFF8 format.
Microsoft Excel 2000 | Uses the BIFF8 format.
Microsoft Excel 2002 | A member of the Microsoft Office® XP family of products. Uses the BIFF8 format.
Microsoft Excel 2003 | Uses the BIFF8 format.
Microsoft Excel 2007 | When using the [Save](%%jQueryApiUrl%%/ig.excel.Workbook) function off the [Workbook](%%jQueryApiUrl%%/ig.excel.Workbook#methods:save) object, the .xlsx file is written in XML file format. <br/> **Note:** The Excel Engine does not support the Excel Binary Workbook (.xlsb) format at this time.

