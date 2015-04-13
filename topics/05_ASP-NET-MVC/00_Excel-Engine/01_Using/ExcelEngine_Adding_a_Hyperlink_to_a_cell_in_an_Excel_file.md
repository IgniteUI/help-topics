<!--
|metadata|
{
    "fileName": "excelengine-adding-a-hyperlink-to-a-cell-in-an-excel-file",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Adding a Hyperlink to a cell in an Excel file

This topic shows you how to add a hyperlink to a cell in a Microsoft® Excel™ file using the [`WorksheetCell`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell.html "Link to the API Reference Guide to the WorksheetCell member.") object’s [ApplyFormula](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell~ApplyFormula.html "Link to the API Reference Guide to the ApplyFormula member.") method. The following code creates an Excel file with a hyperlink in cell 0 of the worksheet by using the intrinsic Excel `HYPERLINK` formula.

Before you start writing any code, you should place using/imports directives in your code-behind so you don't need to always type out a member's fully qualified name.

**In Visual Basic:**
```vb
Imports Infragistics.Documents.Excel
```
**In C#:**
```csharp
using Infragistics.Documents.Excel;
```
**In Visual Basic:**
 ```vb
 'Create an Excel File 
 Dim s As String = "C:theFile.xls"
 'Create a Workbook 
 Dim w As New Workbook()

 'Add a new worksheet to the Workbook 
 Dim ws As Worksheet = w.Worksheets.Add("New")

 'Create Hyperlink in a Worksheet cell 
 ws.Rows(0).Cells(0).ApplyFormula("=HYPERLINK(""http://www.infragistics.com"",""Infragistics"")")
 w.Save(s)
 ```
**In C#:**
 ```csharp
 //Create an Excel File
 string s = @" C:theFile.xls";

 //Create a Workbook
 Workbook w = new Workbook();

 //Add a new worksheet to the Workbook
 Worksheet ws = w.Worksheets.Add("New");

 //Create Hyperlink in a Worksheet cell
 ws.Rows[0].Cells[0].ApplyFormula(@"=HYPERLINK(""http://www.infragistics.com"",""Infragistics"")");
 w.Save(s);
 ```