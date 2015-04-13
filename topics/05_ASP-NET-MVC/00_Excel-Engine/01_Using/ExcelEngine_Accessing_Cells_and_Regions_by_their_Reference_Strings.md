<!--
|metadata|
{
    "fileName": "excelengine-accessing-cells-and-regions-by-their-reference-strings",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Accessing Cells and Regions by their Reference Strings

This topic will familiarize you on how to access cells and ranges within a worksheet in an Excel® Workbook. The [`GetCell`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Worksheet~GetCell.html "Link to the Web API Reference Guide to the GetCell member.") and [`GetRegion`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Worksheet~GetRegion.html "Link to the Web API Reference Guide to the GetRegion member.") method of the Worksheet class accepts cell reference strings as a parameter.

In the following example code a Worksheet cell is accessed by the GetCell method and an Excel formula is applied to it. Similarly an Excel formula is applied to a range of cells within the worksheet.

**In Visual Basic:**


```vb
'Accessing a single cell
worksheet.GetCell ("C5").ApplyFormula ("=A5*B5")
'Accessing a range of cells
 worksheet.GetRegion ("G1:G10").ApplyFormula ("=E1*F1")
```

**In C#:**


```csharp
//Accessing a single cell
worksheet.GetCell ("C5").ApplyFormula ("=A5*B5");
//Accessing a range of cells
 worksheet.GetRegion ("G1:G10").ApplyFormula ("=E1*F1");
```

 

 


