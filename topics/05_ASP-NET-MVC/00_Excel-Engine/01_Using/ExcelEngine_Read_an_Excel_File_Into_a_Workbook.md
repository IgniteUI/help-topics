<!--
|metadata|
{
    "fileName": "excelengine-read-an-excel-file-into-a-workbook",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Read an Excel File into a Workbook

In addition to writing out Microsoft® Excel® files, the Infragistics.Documents.Excel assembly can also read them. You can create a [`Workbook`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook.html "Link to the Web API Reference Guide to the Workbook member.") object from an existing Excel file, make some changes, and save a new file containing the modified workbook. When an Excel file is read with the static [`Load`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~Load.html "Link to the Web API Reference Guide to the Load member.") method, a Workbook object is created and its entire object model is populated with all supported information from the file. Cell values, formats, and images, as well as workbook and worksheet options are all accessible and modifiable from the parsed Workbook.

The following code demonstrates how to read in an existing workbook, make a change, and write the workbook to a new file:

**In Visual Basic:**

```vb
Dim workbook As Infragistics.Documents.Excel.Workbook = _
  Infragistics.Documents.Excel.Workbook.Load("C:ExistingWorkbook.xls")

workbook.Worksheets.Item(0).Rows.Item(0).Cells.Item(0).Value = 19
workbook.Save("C:ModifiedWorkbook.xls")
```

**In C#:**

```csharp
Infragistics.Documents.Excel.Workbook workbook = 
  Infragistics.Documents.Excel.Workbook.Load( "C:ExistingWorkbook.xls" );

workbook.Worksheets[0].Rows[0].Cells[0].Value = 19;
workbook.Save( "C:ModifiedWorkbook.xls" );
```



 

 


