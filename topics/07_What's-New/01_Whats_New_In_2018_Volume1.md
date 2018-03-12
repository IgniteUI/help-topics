<!--
|metadata|
{
    "fileName": "whats-new-in-2018-volume1",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# What's New in 2018 Volume 1

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2018 Volume 1 release.


### Overview

The following table summarizes what’s new in 2018 Volume 1 and additional details follow.

### General

Feature | Description
---|---
[More Excel function support](#excelFunctions)| More supported Excel functions.

### Spreadsheet
Feature | Description
---|---
[Sorting](#SpreadSheetSorting)| Worksheet Level Sorting.
[Conditional Formatting](#ConditionalFormattingSpreadsheet)| Support for displaying Worksheet conditional formats.

### Excel Engine
Feature | Description
---|---
[Sorting](#ExcelEngineSorting)| Worksheet Level Sorting.
[Conditional Formatting](#ConditionalFormattingExcel)| Support for creating, saving, and loading conditional formats.

### igUpload

Feature | Description
---|---
[Use Single Request to Upload Multiple Files](#useSingleRequest)| Allows the control to upload multiple files using a single HTTP request.

## General

### <a id="excelFunctions"></a> More Excel function support
Support for more Excel functions have been added to our Excel libraries.  You can find links for the list of supported and unsupported functions below:

- [Supported Functions for the Infragistics Excel Engine](ExcelEngine-List-of-Supported-Built-in-Functions)

- [Supported Functions for the JavaScript Excel Library](JavaScript-Excel-Library-List-of-Supported-Built-in-Functions.html)

### <a id="SpreadSheetSorting"></a> Spreadsheet Worksheet Level Sorting

In this release, for the igSpreadsheet control, we added sorting to the Worksheet object. 

You can sort columns or rows in ascending or descending order.
* For igSpreadsheet you can find more information here [igSpreadsheet Sorting](igExcelEngineSorting.html).

### <a id="ConditionalFormattingSpreadsheet"></a> Spreadsheet Conditional Formatting

The igSpreadsheet control can now display conditional formats applied to your Worksheet that are created using the Excel Engine or loaded from Excel.
- For more on conditional formatting with the igSpreadsheet control, see [this topic](igspreadsheet-conditional-formatting.html).

### <a id="ConditionalFormattingExcel"></a> Excel Engine Conditional Formatting

You can now create new conditional formats for your worksheets and load in pre-existing ones from Excel.
- For more about information about conditional formatting in the Infragistics Excel Engine, see [this topic](javascript-excel-library-conditional-formatting.html).


### <a id="ExcelEngineSorting"></a> Excel Engine Worksheet Level Sorting

In this release, for the Excel Engine, we added sorting to the Worksheet object. 

You can sort columns or rows in ascending or descending order.
* For Infragistics Excel Engine you can find more information here [Infragistics Excel Engine Sorting](igExcelEngineSorting.html).

## igUpload

### <a id="useSingleRequest"></a> Use Single Request to Upload Multiple Files

The [`useSingleRequest`](%%jQueryApiUrl%%/ui.igupload#options:useSingleRequest) option is used to configure the multiple files upload process.

#### Related Topics
-   [Configuring igUpload](igupload-configuring-igupload.html)