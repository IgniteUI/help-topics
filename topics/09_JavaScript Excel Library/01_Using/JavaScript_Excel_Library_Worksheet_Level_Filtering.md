<!--
|metadata|
{
    "fileName": "igExcelEngineFiltering",
    "controlName": ["igExcel"],
    "tags": ["Sort"]
}
|metadata|
-->

# Worksheet level Filtering

## Introduction

Before you can take advantage of the features in the JavaScript Excel Library, you will need to create a [Workbook](%%jQueryApiUrl%%/ig.excel.Workbook "Link to the Web API Reference Guide to the Workbook member.") object. You can do this by either reading an existing Microsoft® Excel® file, as explained in the How Do I... topic: [Read an Excel File into a Workbook](JavaScript-Excel-Library-Read-an-Excel-2007-XLSX-File-Into-a-Workbook.html "Explains how to read and excel file into a workbook.") or you can create a blank workbook. When you create a blank workbook, before writing it to a file, you must add at least one worksheet.

For the worksheet level object we added filtering. Filtering is done by setting a filter condition on a worksheet level object on a worksheet region column. 

The filter conditions in a sheet are only reapplied when filter conditions are added, removed, modified, or when the [reapplyFilters](%%jQueryApiUrl%%/ig.excel.WorksheetFilterSettings#methods: reapplyFilters "Link to the Web API Reference Guide to the reapplyFilters member.") method is called on the sheet. Filters are not constantly evaluated as data within the region changes. Filters are applied to the region only when they are added or removed or when the ReapplyFilters method is called.

If no filters are applied this method will not do anything to the data.

### Property settings

The following table maps the desired Method to the property [WorksheetFilterSettings](%%jQueryApiUrl%%/ig.excel.WorksheetFilterSettings "Link to the Web API Reference Guide to the WorksheetFilterSettings member.") that manage it.

| Method			| Description     																	|
| ------------- 	|:-------------:																	
|[SetRegion](%%jQueryApiUrl%%/ig.excel.WorksheetSortSettings#methods:setRegion "Link to the Web API Reference Guide to the SetRegion member.")|This is used to specify the region which will be filtered.
|[GetFilter](%%jQueryApiUrl%%/ ig.excel.WorksheetSortSettings%601#methods:getFilter "Link to the Web API Reference Guide to the GetFilter member.") |Gets the filter that is applied to a specific column.

### The following sort condition types are available to set on columns:

| Method			| Description     																	|
| ------------- 	|:-------------:																	|
|[ApplyAverageFilter](%%jQueryApiUrl%%/ig.excel.AverageFilter#methods:ig.excel.AverageFilter "Link to the Web API Reference Guide to the ApplyAverageFilter member.") |Represents a filter which can filter data based on whether the data is below or above the average of the entire data range.|
|[ApplyDatePeriodFilter](%%jQueryApiUrl%%/ig.excel.DatePeriodFilter#methods:ig.excel.DatePeriodFilter "Link to the Web API Reference Guide to the ApplyDatePeriodFilter member.") |Represents a filter which can filter dates in a Month, or quarter of any year.|
|[ApplyFillFilter](%%jQueryApiUrl%%/ig.excel.FillFilter#methods:ig.excel.FillFilter "Link to the Web API Reference Guide to the ApplyFillFilter member.") |Represents a filter which will filter cells based on their background fills. This filter specifies a single CellFill. Cells of with this fill will be visible in the data range. All other cells will be hidden.|
|[ApplyFixedValuesFilter](%%jQueryApiUrl%%/ig.excel.FixedValuesFilter#methods:ig.excel.FixedValuesFilter "Link to the Web API Reference Guide to the ApplyFixedValuesFilter member.") |Represents a filter which can filter cells based on specific, fixed values, which are allowed to display.|
|[ApplyFontColorFilter](%%jQueryApiUrl%%/ig.excel.FontColorFilter#methods:ig.excel.FontColorFilter "Link to the Web API Reference Guide to the ApplyFontColorFilter member.") |Represents a filter which will filter cells based on their font colors. This filter specifies a single color. Cells with this color font will be visible in the data range. All other cells will be hidden.|
|[ApplyIconFilter](%%jQueryApiUrl%%/ig.excel.IconFilter#methods:ig.excel.IconFilter "Link to the Web API Reference Guide to the ApplyIconFilter member.") |Represents a filter which can filter cells based on their conditional formatting icon.|
|[ApplyRelativeDateRangeFilter](%%jQueryApiUrl%%/ig.excel.IconFilter#methods:ig.excel.RelativeDateRangeFilter "Link to the Web API Reference Guide to the ApplyRelativeDateRangeFilter member.") |Represents a filter which can filter date cells based on dates relative to the when the filter was applied.|
|[ApplyTopOrBottomFilter](%%jQueryApiUrl%%/ig.excel.IconFilter#methods:ig.excel.TopOrBottomFilter "Link to the Web API Reference Guide to the ApplyTopOrBottomFilter member.") |Represents a filter which can filter in cells in the upper or lower portion of the sorted values.|
|[ApplyYearToDateFilter](%%jQueryApiUrl%%/ig.excel.YearToDateFilter#methods:ig.excel.YearToDateFilter "Link to the Web API Reference Guide to the ApplyYearToDateFilter member.") |Represents a filter which can filter in date cells if the dates occur between the start of the current year and the time when the filter is evaluated.|
|[ApplyCustomFilter](%%jQueryApiUrl%%/ig.excel.AverageFilter#methods:ig.excel.CustomFilter "Link to the Web API Reference Guide to the ApplyCustomFilter member.") |Represents a filter which can filter data based on one or two custom conditions. These two filter conditions can be combined with a logical "and" or a logical "or" operation.|

### Code Snippet: ApplyAverageFilter

This code shows how to filter cells above the average value of all cells in the column. Filtering below average values is done in a similar manner.

The code in this example creates a workbook, and worksheet to modify the specified region through the [WorksheetFilterSettings](%%jQueryApiUrl%%/ig.excel.WorksheetFilterSettings "Link to the Web API Reference Guide to the WorksheetFilterSettings member."). After that, a filter is applied on a column of the region. In the end, the workbook is saved so the filtered region can be seen.

Following is the code that implements this example.


**In JavaScript:**

```js
// Create a new workbook

var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
var sheet = workbook.worksheets().add('Sheet1');

// Filter the worksheet object

sheet.filterSettings().setRegion("C1:C15");	
sheet.filterSettings().applyCustomFilter(0, new $.ig.excel.CustomFilterCondition($.ig.excel.ExcelComparisonOperator.equals, "Dairy Products")); 
			
```

![Displays the results of using the code listed above.](../../09_JavaScript Excel Library/01_Using/images/ExcelEngine_Worksheet_Filtering.png)

### Related Topics



- [JavaScript Excel Library Overview](JavaScript-Excel-Library-Overview.html)



### Related Samples



- [Excel Table](%%NewSamplesUrl%%/javascript-excel-library/excel-table)

- [Excel Formatting](%%NewSamplesUrl%%/javascript-excel-library/excel-formatting)

- [Excel Formulas](%%NewSamplesUrl%%/javascript-excel-library/excel-formulas)

- [Import Data From Excel ](%%NewSamplesUrl%%/javascript-excel-library/excel-import-data)