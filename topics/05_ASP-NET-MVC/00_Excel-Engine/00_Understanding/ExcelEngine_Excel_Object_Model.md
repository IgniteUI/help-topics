<!--
|metadata|
{
    "fileName": "excelengine-excel-object-model",
    "controlName": "Infragistics Excel Library",
    "tags": ["Exporting","Getting Started"]
}
|metadata|
-->

# Excel Object Model

## Workbook
The root of the Infragistics.Documents.Excel assembly is the [Workbook](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook.html "Link to the Web API Reference Guide to the Workbook member.") object. Without a Workbook instance, no other information can be written out as a Microsoft® Excel® file. A workbook contains a collection of worksheets, and each worksheet holds a grid of data in cells. In addition, the Workbook contains global settings and collections of custom views, named references, and styles. The global settings on the Workbook are options that affect a workbook as a whole, such as the author of the document, or whether the workbook's child MDI window is minimized when the workbook is opened in Excel. These options include the primitive properties defined directly on the Workbook object and the [DocumentProperties](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~DocumentProperties.html "Link to the Web API Reference Guide to the DocumentProperties member.") and [WindowOptions](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~WindowOptions.html "Link to the Web API Reference Guide to the WindowOptions member.") properties of the Workbook. Most of the primitive properties exposed off the Workbook control various formula calculation options.

## DocumentProperties
The DocumentProperties of the workbook are the properties that can be viewed by right-clicking the workbook's XLS file and viewing the properties. These include various tags that describe the content of the workbook such as the author, title, and subject of the workbook. This information can also be edited in certain versions of Excel.

## WorkbookWindowOptions
The [WorkbookWindowOptions](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorkbookWindowOptions.html "Link to the Web API Reference Guide to the WorkbookWindowOptions member.") class controls various display options that are not specific to worksheets, as well as various aspects of the workbook's child MDI window when it is opened in Excel. The display options control many visual elements that will not change when switching to different worksheets, such as which scroll bars are visible, whether or not the worksheet tab bar is visible, and which tab is first visible in the tab bar.

The options that control the child window include the bounds of the child window with respect to the MDI parent and whether or not the window is minimized when it is opened. Certain window options, such as whether the formula bar or status bar is visible or whether the workbook's child window is maximized, cannot be controlled with the WorkbookWindowOptions class because these properties are system-wide and saved by Excel in the registry. However, these options can be controlled by the WindowOptions property of a [CustomView](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.CustomView.html "Link to the Web API Reference Guide to the CustomView member.") , which is similar to WorkbookWindowOptions. In addition to the other options, the WorkbookWindowOptions class has a property which indicates the selected worksheet in the workbook.

## Worksheet
Worksheets fill workbooks. A workbook must have at least one worksheet visible at all times. The worksheet contains the actual data in a workbook, as each worksheet holds a grid of cells and each cell can hold a form of data. Aside from the collections and complex properties on the Worksheet, the [Worksheet](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Worksheet.html "Link to the Web API Reference Guide to the Worksheet member.") object includes properties to change its default row and column sizes, its image background (tiled across the worksheet), and its name.

## WorksheetRow
One of the most important objects exposed by the Worksheet is the WorksheetRow. Each row in a worksheet is represented by a [WorksheetRow](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetRow.html "Link to the Web API Reference Guide to the WorksheetRow member.") object. Through a WorksheetRow instance, its corresponding row in the worksheet can be manipulated. In addition, each cell in a row is represented by a [WorksheetCell](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetCell.html "Link to the Web API Reference Guide to the WorksheetCell member.") instance, which is contained in a collection owned by the WorksheetRow. To access any WorksheetCell, you must go through its parent WorksheetRow. A collection of WorksheetCell instances is not owned by the [WorksheetColumn](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.WorksheetColumn.html "Link to the Web API Reference Guide to the WorksheetColumn member.") , only because it would be redundant to maintain each WorksheetCell instance in a collection off its parent row and a collection off its parent column. In addition to each cell and their default cell format, the row's height, visibility, and outline level can also be customized with the WorksheetRow instance.

## WorksheetColumn
Unlike the WorksheetRow, the WorksheetColumn does not contain a collection of cells, even though a column in a worksheet "contains" the cells under it. This is just because the cells can be accessed from the WorksheetRow instance to which the cell belongs. It is redundant to also make the cells accessible from the WorksheetColumn. Through a WorksheetColumn instance, you can customize the column's default cell format, width, visibility, and outline level.

## WorksheetCell
A worksheet is a grid of cells. Each cell is represented by a WorksheetCell instance. You can set a cell's value and format using the WorksheetCell object. The value of the cell is what displays in the cell when the workbook is opened in Excel. A cell's value can also be used by formulas to calculate other cells' values.

 

 


