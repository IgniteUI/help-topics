<!--
|metadata|
{
    "fileName": "excelengine-moving-a-worksheet-within-an-excel-workbook",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Moving a Worksheet within an Excel Workbook
In certain cases you might need to move a worksheet to a particular index position in the owning Excel® workbook’s worksheets collection.

Considering, you have three worksheets in an Excel Workbook, you can place worksheet3 in the first position, using the [`MoveToIndex`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Worksheet~MoveToIndex.html "Link to the Web API Reference Guide to the MoveToIndex method.") method of the  [`Worksheet`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Worksheet.html "Link to the Web API Reference Guide to the Worksheet class.") class.

The following example code demonstrates how to implement this.

**In Visual Basic:**
```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook () 
Dim worksheet1 As Infragistics.Documents.Excel.Worksheet = workbook.Worksheets.Add ("Sheet1") 
Dim worksheet2 As Infragistics.Documents.Excel.Worksheet = workbook.Worksheets.Add ("Sheet2") 
Dim worksheet3 As Infragistics.Documents.Excel.Worksheet = workbook.Worksheets.Add ("Sheet3") 
`Moving Sheet3 to the first position
worksheet3.MoveToIndex (0)
```

**In C#:**
```csharp
 Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook ();
 Infragistics.Documents.Excel.Worksheet worksheet1 = workbook.Worksheets.Add ("Sheet1");
 Infragistics.Documents.Excel.Worksheet worksheet2 = workbook.Worksheets.Add ("Sheet2");
 Infragistics.Documents.Excel.Worksheet worksheet3 = workbook.Worksheets.Add ("Sheet3");
// Moving Sheet3 to the first position
 worksheet3.MoveToIndex (0);
```