<!--
|metadata|
{
    "fileName": "excelengine-freeze-rows-and-columns",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Freeze Rows and Columns

Certain data on a worksheet should always remain in view (e.g., column headers and the primary field in a row). For this data, you can freeze rows at the top or columns at the left of a worksheet. When you freeze rows in a worksheet and scroll the worksheet vertically, those rows remain fixed at the top of the worksheet. Similarly, frozen columns remain at the left of the worksheet, regardless of the horizontal scroll position. The unfrozen rows and columns exist in the bottom-right pane of the worksheet. You can also specify which row or column is first visible in this pane; doing so sets the vertical and horizontal scroll position of the worksheet.

The following code demonstrates how to freeze rows and columns in a worksheet:

**In Visual Basic:**

```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook()
Dim worksheet As Infragistics.Documents.Excel.Worksheet = _
  workbook.Worksheets.Add("Sheet1")

worksheet.DisplayOptions.PanesAreFrozen = True

' One row is frozen at the top of the worksheet
worksheet.DisplayOptions.FrozenPaneSettings.FrozenRows = 1

' Two columns are frozen at the left of the worksheet
worksheet.DisplayOptions.FrozenPaneSettings.FrozenColumns = 2
```

**In C#:**

```csharp
Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook();
Infragistics.Documents.Excel.Worksheet worksheet =
  workbook.Worksheets.Add( "Sheet1" );

worksheet.DisplayOptions.PanesAreFrozen = true;

// One row is frozen at the top of the worksheet
worksheet.DisplayOptions.FrozenPaneSettings.FrozenRows = 1;

// Two columns are frozen at the left of the worksheet
worksheet.DisplayOptions.FrozenPaneSettings.FrozenColumns = 2;
```

