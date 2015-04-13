<!--
|metadata|
{
    "fileName": "excelengine-save-and-load-files-in-excel-template-format",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I","Templating"]
}
|metadata|
-->

# Save and Load Files in Excel Template Format

The Infragistics Excel library enables you to define template files in three file formats. The three template formats are the Excel Template format (with extension XLTX), the Excel Macro-Enabled Template format (with extension XLTM), and the Excel 97-2003 Template format (with extension XLT). You can save and load files in these formats.

The [`WorkbookFormat`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorkbookFormat.html "Link to the Web API Reference Guide to the WorkbookFormat member.") enumeration has the values Excel2007Template, Excel2007MacroEnabledTemplate, and Excel97To2003Template that correspond to the XLTX, XLTM, and XLT formats. The [`CurrentFormat`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~CurrentFormat.html "Link to the Web API Reference Guide to the CurrentFormat member.") property can be used to get the current format of the file. When loading a file if the extension is unknown, the contents of the file will be parsed to dynamically determine the correct format.

The following code illustrates saving an Excel file in the Excel2007Template format using the [`Save`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~Save.html "Link to the Web API Reference Guide to the Save member.") method.

**In Visual Basic:**

```vb
' Create a workbook and set its format to Excel2007Template 
Dim newWorkBook As Infragistics.Documents.Excel.Workbook = New Workbook(WorkbookFormat.Excel2007Template)
' Add a worksheet to the workbook 
Dim worksheet1 As Infragistics.Documents.Excel.Worksheet = newWorkBook.Worksheets.Add("Sheet1")
' Format a cell in the worksheet 
worksheet1.Rows(1).Cells(1).CellFormat.FillPatternBackgroundColor = Color.Red 
' Save the workbook 
newWorkBook.Save("C:ExcelBookTemplate.xltx")
```

**In C#:**

```csharp
// Create a workbook and set its format to Excel2007Template
Infragistics.Documents.Excel.Workbook newWorkBook = new Workbook(WorkbookFormat.Excel2007Template);
// Add a worksheet to the workbook
Infragistics.Documents.Excel.Worksheet worksheet1 = newWorkBook.Worksheets.Add("Sheet1");
// Format a cell in the worksheet
worksheet1.Rows[1].Cells[1].CellFormat.FillPatternBackgroundColor = Color.Red;
// Save the workbook
newWorkBook.Save("C:ExcelBookTemplate.xltx");
```

The following code shows you how to modify the format of an Existing Excel file using the [SetCurrentFormat](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~SetCurrentFormat.html "Link to the Web API Reference Guide to the SetCurrentFormat member.") method.

**In Visual Basic:**

```vb
' Load an Existing Excel file 
Dim workbook As Infragistics.Documents.Excel.Workbook = Infragistics.Documents.Excel.Workbook.Load("C:Book1.xlsx")
' Change the format to Excel2007Template 
workbook.SetCurrentFormat(WorkbookFormat.Excel2007Template) 
' Save the file in the modified format 
workbook.Save("C:ModifiedBook1.xltx")
```

**In C#:**

```csharp
// Load an Existing Excel file
Infragistics.Documents.Excel.Workbook workbook = Infragistics.Documents.Excel.Workbook.Load("C:Book1.xlsx");
// Change the format to Excel2007Template
workbook.SetCurrentFormat(WorkbookFormat.Excel2007Template);
// Save the file in the modified format
workbook.Save("C:ModifiedBook1.xltx");
```