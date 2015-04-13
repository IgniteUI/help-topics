<!--
|metadata|
{
    "fileName": "javascript-excel-library-resizing-rows-and-columns",
    "controlName": ["igExcel"],
    "tags": ["Editing","How Do I"]
}
|metadata|
-->

# Resizing Rows and Columns

## Before You Begin
In a worksheet, you may have a large amount of text in a cell or a large image that you want to appear in a cell. If the default cell size cannot fit the cell's contents, you can easily increase the height and width of all cells in a row, column, or the entire worksheet.

However, in some situations the row height will automatically be increased so all content is visible. For example, if you rotate or wrap text in a cell, and the height of the row containing the cell is the default value, the row height will automatically increase to show all content. The column width is never managed automatically, and always remains constant, regardless of the content of its cells.

In addition to resizing individual rows and columns, you can resize all rows and columns by setting the Worksheet's [`defaultRowHeight`](%%jQueryApiUrl%%/ig.excel.Worksheet#methods:defaultRowHeight "Link to the Web API Reference Guide to the DefaultRowHeight member et class.") and  [`defaultColumnWidth`](%%jQueryApiUrl%%/ig.excel.Worksheet#methods:defaultColumnHeight "Link to the Web API Reference Guide to the DefaultColumnWidth member .") properties.

## What You Will Accomplish
This walkthrough will show you a few ways to auto-size rows. In addition, you will learn how it manually size rows and columns so a cell can completely contain its contents.

## Follow these Steps
1.  **Create a workbook with a worksheet.**
 	1.  Create an HTML page.
    2.  Add a Button to it.
    3.  Create a function for its click event.
    4.  Create a Workbook with one Worksheet:
    5.  
        **In JavaScript:**

        ```js
		var workbook = new $.ig.excel.Workbook();
		var worksheet = workbook.worksheets().add( "Sheet1" );
		```

2.  **Auto-size the height of rows.**
    1.  Rotate the text in a cell whose row still has the default height. The row will auto-size to fit the cell's contents.

        **In JavaScript:**

        ```js
		worksheet.rows(0).cells(0).value("Rotated Text");
		worksheet.rows(0).cells(0).cellFormat().rotation(70);
        ```
	![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_01.png)
	2.  Wrap the text in a cell whose row still has the default height. The row will auto-size to fit the cell's contents.
	
	    **In JavaScript:**
	
		```js
	   	worksheet.rows(1).cells(1).value("This text will be wrapped in the cell so all text is visible");
		worksheet.rows(1).cells(1).cellFormat().wrapText(true);
		```
	![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_02.png)

3.  **Resize a column so text does not go outside its cell.**
    1.  Place enough text in a cell so the text goes outside the boundaries of its cell:

        **In JavaScript:**

        ```js
		worksheet.rows(2).cells(2).value("This text will not be wrapped");
        ```
	![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_03.png)

	2.  Although all text is visible, if a value is set in cell D3, the long text will be cut off. To increase the cell's width, increase the width of the WorksheetColumn, which is accessible from the Worksheet's columns collection.
	
	    **In JavaScript:**
	
		```js
		worksheet.columns(2).width(6100);
		```
		![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_04.png)

4.  **Place an image in a cell and resize the cell so the image is not distorted.**
    1.  Create an image and make it occupy an entire cell:

        **In JavaScript:**

        ```js
        var shape = new $.ig.excel.RectangleShape();

		shape.topLeftCornerCell(worksheet.rows(3).cells(3));
		shape.bottomRightCornerCell(worksheet.rows(3).cells(3));
		shape.bottomRightCornerPosition({ x: 100, y: 100 });
		
		worksheet.shapes().add(shape);
        ```
	![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_05.png)

	2.  Increase the height and width of the cell's row and column so the image is not distorted:
	
	    **In JavaScript:**
	
		```js
		worksheet.rows(3).height(600);
		worksheet.columns[3].width(10000);
		```
	
		![Displays the results of using the code listed above.](../../05_ASP-NET-MVC/00_Excel-Engine/01_Using/images/ExcelEngine_Resizing_Rows_and_Columns_06.png)

5.  **Save the workbook.**

    Write the workbook to a file:

    **In JavaScript:**

    ```js
	workbook.save(function(data) { 
	  },
	  function(error) {
	  });
    ```

 

 


