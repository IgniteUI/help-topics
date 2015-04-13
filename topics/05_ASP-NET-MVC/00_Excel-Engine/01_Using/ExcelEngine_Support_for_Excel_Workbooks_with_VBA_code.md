<!--
|metadata|
{
    "fileName": "excelengine-support-for-excel-workbooks-with-vba-code",
    "controlName": "Infragistics Excel Library",
    "tags": ["FAQ","How Do I"]
}
|metadata|
-->

# Support for Excel Workbooks with VBA code

Using the Infragistics Excel Engine™, you may want to load and save Microsoft® Excel® Workbooks that have existing VBA macro code embedded in them. It is now possible to round-trip VBA code from both Excel97-2003 and Excel2007 loaded Workbooks, when they are saved out again. This means that you can open an Excel file that contains VBA macros using the Excel Engine, perform any operation on the object model and then save the file and your VBA macros will remain intact and undisturbed.

Excel97-2003 workbooks that have macros are saved with xls file extension, whereas Excel2007 workbooks having macros are saved as macro-enabled workbooks and therefore they must be saved with a `XLSM` file extension, rather than a `XLSX` extension.

The example code below shows you how to implement the support for VBA macro round-trips:

**In Visual Basic:**


```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook(WorkbookFormat.Excel2007MacroEnabled)
```



**In C#:**


```csharp
Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook (WorkbookFormat.Excel2007MacroEnabled);
```