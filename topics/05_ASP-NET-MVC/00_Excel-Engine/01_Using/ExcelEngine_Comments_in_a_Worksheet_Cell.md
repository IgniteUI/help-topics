<!--
|metadata|
{
    "fileName": "excelengine-comments-in-a-worksheet-cell",
    "controlName": "Infragistics Excel Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# Comments in a Worksheet Cell

Cell Comments are used to explain or remind the content of a cell or range of cells. For example, they may be used to explain the formulas that reside in the cells they are attached to. As in Microsoft® Excel®, it is possible to add cell comments to your Excel Worksheet using the [`WorksheetCellComment`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCellComment.html "Link to the Web API Reference Guide to the WorksheetCellComment member.") class of the Infragistics.Documents.Excel Assembly.

Cells with comments have a red triangle in the upper right corner. To see the comment, place the pointer in the cell. The comment disappears when you move the pointer off the cell.

The example code below shows you how to add a comment to a cell.

**In Visual Basic:**


```vb
Dim comment As Infragistics.Documents.Excel.WorksheetCellComment = New WorksheetCellComment () 
Dim formatted As New FormattedString ("This is a comment") 
comment.Text = formatted 
worksheet4.Rows (10).Cells (2).Comment = comment
```



**In C#:**


```csharp
Infragistics.Documents.Excel.WorksheetCellComment comment = new WorksheetCellComment ();
FormattedString formatted = new FormattedString ("This is a comment");
comment.Text = formatted;
worksheet4.Rows [10].Cells [2].Comment = comment;
```

 

 


