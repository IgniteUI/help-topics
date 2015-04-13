<!--
|metadata|
{
    "fileName": "excelengine-read-an-excel-2007-xlsx-file-into-a-workbook",
    "controlName": "Infragistics Excel Library",
    "tags": ["Data Binding","How Do I"]
}
|metadata|
-->

# Read an Excel 2007 XLSX File Into a Workbook

In addition to writing out Microsoft® Excel® files, the Infragistics.Documents.Excel assembly can also read them. When an Excel file is read with the static [`Load`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~Load.html "Link to the Web API Reference Guide to the Load member.") method, a [`Workbook`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook.html "Link to the Web API Reference Guide to the Workbook member.") object is created and its entire object model is populated with all supported information from the file.

If you are loading a workbook of a particular format and you would like to save it as another format, you can use the [SetCurrentFormat](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~SetCurrentFormat.html "Link to the Web API Reference Guide to the setcurrentformat member.") method of the [Infragistics.Documents.Excel.Workbook](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook.html "Link to the Web API Reference Guide to the workbook member.") class. Also, the [CurrentFormat](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~CurrentFormat.html "Link to the Web API Reference Guide to the currentformat member.") property can be used to get the current workbook format.

For more information on project dependencies and references when loading and saving to the xlsx format, please review the topic [Office® 2007 xlsx file generation references and dependencies](ExcelEngine-Office-2007-XLSX-file-generation-references-and-dependencies.html "office 2007 xlsx file generation references and dependencies").

> **Note:** When loading a workbook in new xlsx format(Excel2007), if you are sure that the workbook was saved out by a safe source, such as Microsoft® Excel®, you can assign False to the verifyExcel2007Xml overload of the [Load](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~Load.html "Link to the Web API Reference Guide to the Load member.") method. Assigning False for large files would bypass the Excel assembly from verifying the contents of the files being loaded, which in turn will increase performance and load the large files faster.

The following code demonstrates how to read in an existing XLSX workbook, make a change, and write the workbook to a new file:

**In Visual Basic:**

```vb
Dim workbook As Infragistics.Documents.Excel.Workbook = _
  Infragistics.Documents.Excel.Workbook.Load("C:ExistingWorkbook.xlsx")

workbook.Worksheets.Item(0).Rows.Item(0).Cells.Item(0).Value = 19
workbook.Save("C:ModifiedWorkbook.xlsx")
```

**In C#:**

```csharp
Infragistics.Documents.Excel.Workbook workbook = 
  Infragistics.Documents.Excel.Workbook.Load( "C:ExistingWorkbook.xlsx" );

workbook.Worksheets[0].Rows[0].Cells[0].Value = 19;
workbook.Save( "C:ModifiedWorkbook.xlsx" );
```



 

 


