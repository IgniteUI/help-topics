<!--
|metadata|
{
    "fileName": "excelengine-getting-the-value-of-a-formula-from-an-excel-file",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Getting the Value of a Formula from an Excel File

In order to get the evaluated value of an Excel Cell that is represented by a Formula, you simply access the [`Value`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell~Value.html "Link to the API Reference Guide to the value member.") property of the [WorksheetCell](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell.html "Link to the API Reference Guide to the worksheetcell member.").

The example code below shows you how to access a particular Excel Worksheet Cell that is populated by an Excel Formula.

**In Visual Basic:**
```vb
lblValue.Text = theWorksheet.Rows[1].Cells[4].Value;
```
**In C#:**
```csharp
lblValue.Text = theWorksheet.Rows[1].Cells[4].Value;
```
## Related Topics
- [Read an Excel File into a Workbook](ExcelEngine-Read-an-Excel-File-Into-a-Workbook.html "Explains how to read and excel file into a workbook.")
- [List of Supported Built-in Functions](ExcelEngine-List-of-Supported-Built-in-Functions.html "List of supported and unsupported Excel functions.")
 

 


