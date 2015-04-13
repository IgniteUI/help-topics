<!--
|metadata|
{
    "fileName": "excelengine-write-a-workbook-to-an-excel-file",
    "controlName": "Infragistics Excel Library",
    "tags": ["Exporting","How Do I"]
}
|metadata|
-->

# Write a Workbook to an Excel File

After setting all options and cell values, the last thing you need to do with your workbook is write it to a file so it can be opened in Microsoft® Excel®. This is easily performed with the [`Save`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~Save.html "Link to the Web API Reference Guide to the Save member .") method of [`Workbook`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook.html "Link to the Web API Reference Guide to the Workbook member .") object. You can write the workbook to a stream or have it automatically create an xls file for itself.

> **Note:** Before saving a workbook, it must contain at least one visible worksheet; otherwise, an exception will be thrown when the Save method is called.

The following code shows how to write your workbook to a file once you are done creating it.

**In Visual Basic:**

```vb
workbook.Save("C:Orders.xls")
```

**In C#:**

```csharp
workbook.Save( "C:Orders.xls" );
```