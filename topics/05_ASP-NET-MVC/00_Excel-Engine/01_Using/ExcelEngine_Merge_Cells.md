<!--
|metadata|
{
    "fileName": "excelengine-merge-cells",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Merge Cells
Aside from setting the value or format of cells, you can also merge cells to make two or more cells appear as one. If you merge cells, they must be in a rectangular region. When part of a merged region, each cell in the region will have the same value and cell format; also, they will all be associated with the same [`WorksheetMergedCellsRegion`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetMergedCellsRegion.html "Link to the Web API Reference Guide to the WorksheetMergedCellsRegion member.") object, accessible from their [`AssociatedMergedCellsRegion`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell~AssociatedMergedCellsRegion.html "Link to the Web API Reference Guide to the WorksheetMergedCellsRegion member.") property. The `WorksheetMergedCellsRegion` object will also have the same value and cell format as the cells. Setting the value (or cell format) of the region or any cell in the region will change the value of all cells and the region. If you unmerge cells, because the merged region was removed from the worksheet, all of the previously merged cells will retain the shared cell format they had before they were unmerged. However, only the top-left cell of the region will retain the shared value.

The following code demonstrates how to merge some cells and set the value and format of the merged cells region.

**In Visual Basic:**

```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook()
Dim worksheet As Infragistics.Documents.Excel.Worksheet = _
  workbook.Worksheets.Add("Sheet1")

' Make some column headers
worksheet.Rows.Item(1).Cells.Item(1).Value = "Morning"
worksheet.Rows.Item(1).Cells.Item(2).Value = "Afternoon"
worksheet.Rows.Item(1).Cells.Item(3).Value = "Evening"

' Create a merged region that will be a header to the column headers
Dim mergedRegion1 As Infragistics.Documents.Excel.WorksheetMergedCellsRegion = _
  worksheet.MergedCellsRegions.Add(0, 1, 0, 3)

' Set the value of the merged region
mergedRegion1.Value = "Day 1"

' Give the merged region a solid background color
mergedRegion1.CellFormat.FillPattern = _
  Infragistics.Documents.Excel.FillPatternStyle.Solid
mergedRegion1.CellFormat.FillPatternForegroundColor = Color.SkyBlue

' Set the cell alignment of the middle cell in the merged region.
' Since a cell and its merged region shared a cell format, this will 
' ultimately set the format of the merged region
worksheet.Rows.Item(0).Cells.Item(2).CellFormat.Alignment = _
  Infragistics.Documents.Excel.HorizontalCellAlignment.Center
```

**In C#:**

```csharp
Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook();
Infragistics.Documents.Excel.Worksheet worksheet = workbook.Worksheets.Add( "Sheet1" );

// Make some column headers
worksheet.Rows[1].Cells[1].Value = "Morning";
worksheet.Rows[1].Cells[2].Value = "Afternoon";
worksheet.Rows[1].Cells[3].Value = "Evening";

// Create a merged region that will be a header to the column headers
Infragistics.Documents.Excel.WorksheetMergedCellsRegion mergedRegion1 = 
  worksheet.MergedCellsRegions.Add( 0, 1, 0, 3 );

// Set the value of the merged region
mergedRegion1.Value = "Day 1";

// Give the merged region a solid background color
mergedRegion1.CellFormat.FillPattern = 
  Infragistics.Documents.Excel.FillPatternStyle.Solid;
mergedRegion1.CellFormat.FillPatternForegroundColor = Color.SkyBlue;

// Set the cell alignment of the middle cell in the merged region.
// Since a cell and its merged region shared a cell format, this will 
// ultimately set the format of the merged region
worksheet.Rows[ 0 ].Cells[ 2 ].CellFormat.Alignment = 
  Infragistics.Documents.Excel.HorizontalCellAlignment.Center;
```
![Displays the results of using the code listed above.](images/ExcelEngine_Merge_Cells_01.png)



 

 


