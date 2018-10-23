<!--
|metadata|
{
    "fileName": "javaScript-excel-library-adding-a-sparkline-to-an-excel-worksheet",
    "controlName": ["igExcel"],
    "tags": ["Sparklines"],
}
|metadata|
-->

# Adding a Sparkline to an Excel Worksheet

Before you can take advantage of the features in the JavaScript Excel Library, you will need to create a [Workbook](%%jQueryApiUrl%%/ig.excel.Workbook "Link to the Web API Reference Guide to the Workbook member.") object. You can do this by either reading an existing Microsoft® Excel® file, as explained in the Read an Excel File into a Workbook topic: [Read an Excel File into a Workbook](JavaScript-Excel-Library-Read-an-Excel-2007-XLSX-File-Into-a-Workbook.html "Explains how to read and excel file into a workbook.") or you can create a blank workbook. When you create a blank workbook, before writing it to a file, you must add at least one worksheet.

This topic demonstrates how to add sparklines to an Excel Worksheet (".xlsx), programmatically, using the Javascript Excel Library, to show visual representations of data trends. Sparklines serve as quick and easy solution to visualize variations in your data. Sparklines are placed in cells that can be positioned anywhere within a worksheet and compliments the data it’s adjacent to.

# Supported Sparklines

The following is a list of the supported predefined sparkline types.

| SparklineType | Looks like...                                         |
|---------------|-------------------------------------------------------|
|Line           | ![Line](./images/ExcelChart_Sparkline_Line.png)       |
|Column         | ![Column](./images/ExcelChart_Sparkline_Column.png)   |
|Stacked        | ![Stacked](./images/ExcelChart_Sparkline_Stacked.png) |


# Introduction

Before adding a sparkline to a worksheet, you must add a new SparklineGroup to the Worksheet.SparklineGroups collection, via its Add method. The SparklineGroups' Add method takes in three required parameters that corresponds to the sparkline’s type, location, and data’s location.

# Preview

Following is a preview of the final result of Sheet1: "Sparklines" displayed in Microsoft Excel 2016. The data is kept in Sheet2: "Data", with A1 through A10 made up of (4, 5, 2, 7, -1, 3, -2, 5, 2, and 6).

![Sparklines](./images/ExcelChart_Sparklines.png)

Following is the code that implements the example above.

**In JavaScript:**

```js
var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
var sheet1 = workbook.worksheets().add('Sparklines');
var sheet2 = workbook.worksheets().add('Data');
sheet1.sparklineGroups().add($.ig.excel.SparklineType.line, "Sparklines!A1:A1", "Data!A2:A11"); 
sheet1.sparklineGroups().add($.ig.excel.SparklineType.column, "Sparklines!B1:B1", "Data!A2:A11"); 
saveWorkbook(workbook, "Sparklines.xlsx");
```