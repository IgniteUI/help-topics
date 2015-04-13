<!--
|metadata|
{
    "fileName": "excelengine-creating-a-workbook-in-office-2007-xlsx-format",
    "controlName": "Infragistics Excel Library",
    "tags": ["Getting Started"]
}
|metadata|
-->

# Creating a Workbook in office 2007 XLSX format

Infragistics® Excel® object library enables you to create Excel files with the new `xlsx` format (Excel2007).

For more information on project dependencies and references when creating and saving to the `xlsx` format, please review the topic [Office® 2007 xlsx file generation references and dependencies](ExcelEngine-Office-2007-XLSX-file-generation-references-and-dependencies.html "office 2007 xlsx file generation references and dependencies").

The example code below shows you how to set the new xlsx format for the Excel Workbook.

**In Visual Basic:**


```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook()
workbook.SetCurrentFormat(WorkbookFormat.Excel2007)
```

**In C#:**


```csharp
Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook ();
workbook.SetCurrentFormat (WorkbookFormat.Excel2007);
```

