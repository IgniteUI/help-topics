<!--
|metadata|
{
    "fileName": "javascript-excel-library-conditional-formatting",
    "controlName": ["igExcel"],
    "tags": ["How Do I", "Conditional Formatting"]
}
|metadata|
-->

# Conditional Formatting

### Purpose

This topic explains how to configure and set conditional formatting on a worksheet using the Infragistics Excel Library.

### In this Topic

This topic contains the following sections:

- [Conditional Formatting Configuration Summary](#formattingsummary)
- [Conditional Formatting Configuration Summary Chart](#formattingsummarychart)
- [Code Example](#codeexample)
- [Related Content](#relatedcontent)

<a id="formattingsummary" />
## Conditional Formatting Configuration Summary

You can configure the conditional formatting of a particular worksheet by using the many "Add" methods exposed on the ConditionalFormats collection of that worksheet. The first parameter of these "Add" methods is the `string` region of the worksheet that you would like to apply the conditional format to.

Many of the conditional formats that you can add to your Worksheet have a `CellFormat` method that determines the way that the worksheet cell elements should look when the condition in that conditional format holds true. For example, you can use the methods attached to this `CellFormat` method such as Fill and Font to determine the background and font settings of your cells, respectively.

When a conditional format is created and a cell format applied, there is a subset of properties that are currently supported by the worksheet cell. The properties that are currently honored off of the CellFormat method are Fill, Border properties, FormatString, and some Font properties such as Strikethrough, Underline, Italic, Bold, and Color. Many of these can be seen from the code snippet below.

There are a few conditional formats that do not have a `CellFormat` method, as their visualization on the worksheet cell behaves differently. These conditional formats are the `DataBarConditionalFormat`, `ColorScaleConditionalFormat`, and `IconSetConditionalFormat`.

When loading a pre-existing workbook from Excel, the formats will be preserved when that workbook is loaded. The same is true for when you save the workbook out to an Excel file.

<a id="formattingsummarychart" />
## Conditional Formatting Configuration Summary Chart

The following table briefly explains the different conditional formats supported by the worksheet and maps them to the methods off of that element's `ConditionalFormats` collection used to add them:

<table class="table">
	<thead>
		<tr>
			<th>Conditional Format</th>
			<th>Method</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>[AverageConditionalFormat](%%jQueryApiUrl%%/ig.excel.AverageConditionalFormat)</td>
			<td>[addAverageCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addAverageCondition)</td>
			<td>Exposes methods which control the visual attributes of a worksheet cell based on whether a cell's value is above or below the average or standard deviation for the associated range.</td>
		</tr>
		<tr>
			<td>[BlanksConditionalFormat](%%jQueryApiUrl%%/ig.excel.BlanksConditionalFormat)</td>
			<td>[addBlanksCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addBlanksCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value is not set.</td>
		</tr>
		<tr>
			<td>[ColorScaleConditionalFormat](%%jQueryApiUrl%%/ig.excel.ColorScaleConditionalFormat)</td>
			<td>[addColorScaleCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addColorScaleCondition)</td>
			<td>Exposes properties which control the coloring of a worksheet cell based on the cell's value as relative to minimum, midpoint, and maximum threshold values.</td>
		</tr>
		<tr>
			<td>[DataBarConditionalFormat](%%jQueryApiUrl%%/ig.excel.DataBarConditionalFormat)</td>
			<td>[addDataBarCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addDataBarCondition)</td>
			<td>Exposes properties which display data bars in a worksheet cell based on the cell's value as relative to the associated range of values.</td>
		</tr>
		<tr>
			<td>[DateTimeConditionalFormat](%%jQueryApiUrl%%/ig.excel.DateTimeConditionalFormat)</td>
			<td>[addDateTimeCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addDateTimeCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether a cell's date value falls within a given range of time.</td>
		</tr>
		<tr>
			<td>[DuplicateConditionalFormat](%%jQueryApiUrl%%/ig.excel.DuplicateConditionalFormat)</td>
			<td>[addDuplicateCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addDuplicateCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether a cell's value is unique or duplicated across the associated range.</td>
		</tr>
		<tr>
			<td>[ErrorsConditionalFormat](%%jQueryApiUrl%%/ig.excel.ErrorsConditionalFormat)</td>
			<td>[addErrorsCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addErrorsCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value is valid.</td>
		</tr>
		<tr>
			<td>[FormulaConditionalFormat](%%jQueryApiUrl%%/ig.excel.FormulaConditionalFormat)</td>
			<td>[addFormulaCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addFormulaCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value meets the criteria defined by a formula.</td>
		</tr>
		<tr>
			<td>[IconSetConditionalFormat](%%jQueryApiUrl%%/ig.excel.IconSetConditionalFormat)</td>
			<td>[addIconSetCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addIconSetCondition)</td>
			<td>Exposes properties which display icons in a worksheet cell based on the cell's value as relative to threshold values.</td>
		</tr>
		<tr>
			<td>[NoBlanksConditionalFormat](%%jQueryApiUrl%%/ig.excel.NoBlanksConditionalFormat)</td>
			<td>[addNoBlanksCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addNoBlanksCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value is set.</td>
		</tr>
				<tr>
			<td>[NoErrorsConditionalFormat](%%jQueryApiUrl%%/ig.excel.NoErrorsConditionalFormat)</td>
			<td>[addNoErrorsCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addNoErrorsCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value is valid.</td>
		</tr>
		<tr>
			<td>[OperatorConditionalFormat](%%jQueryApiUrl%%/ig.excel.OperatorConditionalFormat)</td>
			<td>[addOperatorCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addOperatorCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether the cell's value meets the criteria defined by a logical operator.</td>
		</tr>
				<tr>
			<td>[RankConditionalFormat](%%jQueryApiUrl%%/ig.excel.RankConditionalFormat)</td></td>
			<td>[addRankCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addRankCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether a cell's value is within the top of bottom rank of values across the associated range.</td>
		</tr>
		<tr>
			<td>[TextOperatorConditionalFormat](%%jQueryApiUrl%%/ig.excel.TextOperatorConditionalFormat)</td>
			<td>[addTextCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addTextCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether a cell's text value meets the criteria defined by a string.</td>
		</tr>
		<tr>
			<td>[UniqueConditionalFormat](%%jQueryApiUrl%%/ig.excel.UniqueConditionalFormat)</td>
			<td>[addUniqueCondition](%%jQueryApiUrl%%/ig.excel.ConditionalFormatCollection#methods.addUniqueCondition)</td>
			<td>Exposes properties which control the visual attributes of a worksheet cell based on whether a cell's value is unique across the associated range.</td>
		</tr>
	</tbody>
</table>


<a id="codeexample" />
## Code Example

The following code example demonstrates usage of many of the conditional formats mentioned above.


**In HTML:**

```html
$(function () {

        var workbook = new $.ig.excel.Workbook($.ig.excel.WorkbookFormat.excel2007);
        var sheet = workbook.worksheets().add('Sheet1');
        
        var duplicateCondition = sheet.conditionalFormats().addDuplicateCondition("A2:A15");
        duplicateCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("red"));                               
        var blanksCondition = sheet.conditionalFormats().addBlanksCondition("B2:B15");
        blanksCondition.cellFormat().fill($.ig.excel.CellFill.createSolidFill("gray"));

        var textCondition = sheet.conditionalFormats().addTextCondition("C2:C15", "Bev");
        textCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("blue"));                                 
        var uniqueCondition = sheet.conditionalFormats().addUniqueCondition("D2:D15");      
        uniqueCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("orange"));
        
        var notBlankCondition = sheet.conditionalFormats().addNoBlanksCondition("E2:E15");
        notBlankCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("green"));
                
        sheet.conditionalFormats().addDataBarCondition("F2:F15");

        var avgCondition = sheet.conditionalFormats().addAverageCondition("G2:G15");
        avgCondition.cellFormat().font().colorInfo(new $.ig.excel.WorkbookColorInfo("red"));
    });
```

<a id="relatedcontent" />
### Related Content

-   [Merge Cells](javascript-excel-library-merge-cells.html)
-   [Worksheet API](%%jQueryApiUrl%%/ig.excel.Worksheet)