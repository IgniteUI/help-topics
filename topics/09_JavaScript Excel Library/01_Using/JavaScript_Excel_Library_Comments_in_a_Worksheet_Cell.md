<!--
|metadata|
{
    "fileName": "javascript-excel-library-comments-in-a-worksheet-cell",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Comments in a Worksheet Cell

Cell Comments are used to explain or remind the content of a cell or range of cells. For example, they may be used to explain the formulas that reside in the cells they are attached to. As in Microsoft® Excel®, it is possible to add cell comments to your Excel Worksheet using the [`WorksheetCellComment`](%%jQueryApiUrl%%/ig.excel.WorksheetCellComment "Link to the Web API Reference Guide to the WorksheetCellComment member.") WorksheetCellComment member of the JavaScript Excel Library.

Cells with comments have a red triangle in the upper right corner. To see the comment, place the pointer in the cell. The comment disappears when you move the pointer off the cell.

The example code below shows you how to add a comment to a cell.

**In JavaScript:**

```js
var comment = new $.ig.excel.WorksheetCellComment();
var formatted = new $.ig.excel.FormattedString("This is a comment");
comment.Text = formatted;
worksheet4.rows(10).cells(2).comment(comment);
```

 

 


