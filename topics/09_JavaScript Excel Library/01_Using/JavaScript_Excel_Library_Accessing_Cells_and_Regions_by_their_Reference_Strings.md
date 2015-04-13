<!--
|metadata|
{
    "fileName": "javascript-excel-library-accessing-cells-and-regions-by-their-reference-strings",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Accessing Cells and Regions by their Reference Strings

This topic will familiarize you on how to access cells and ranges within a worksheet in an Excel® Workbook. The [`getCell`](%%jQueryApiUrl%%/ig.excel.Worksheet#methods:getCell "Link to the Web API Reference Guide to the getCell member.") and [`getRegion`](%%jQueryApiUrl%%/ig.excel.Worksheet#methods:getRegion "Link to the Web API Reference Guide to the getRegion member.") function of the Worksheet class accepts cell reference strings as a parameter.

In the following example code a Worksheet cell is accessed by the getCell method and an Excel formula is applied to it. Similarly an Excel formula is applied to a range of cells within the worksheet.

**In JavaScript:**


```js
'Accessing a single cell
worksheet.getCell("C5").applyFormula("=A5*B5");
'Accessing a range of cells
worksheet.getRegion("G1:G10").applyFormula("=E1*F1");
```