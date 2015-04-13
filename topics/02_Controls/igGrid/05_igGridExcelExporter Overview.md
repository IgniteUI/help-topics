<!--
|metadata|
{
    "fileName": "iggridexcelexporter-overview",
    "controlName": ["igExcel", "igGrid"],
    "tags": ["Exporting"]
}
|metadata|
-->

# Grid Excel Exporter Overview
The `igGridExcelExporter` component allows you to export data from the igGrid into a Microsoft Excel document. The export can support themes and workbook customization while reflecting data manipulated in the grid through features sorting, filtering, paging, etc. The following screenshot demonstrates what an exported igGrid looks like in Excel.

![igGridExcelExporter](images/igGridExcelExporter.jpg "igGridExcelExporter") 

The `igGridExcelExporter` includes the following characteristics:  

 - Overall theme support
 - Supports defining file name and worksheet name
 - Supports defining table style in Excel
 - Supports exporting of the `igGrid`’s `Filtering`, `Hiding`, `Paging`, `Sorting`, `Summaries`, `Column Fixing` and `Virtualization` features
 - Supports `igGrid`’s Header and Alternate Row Styles
 - Supports defining `igGrid` columns to be skipped
 - Provides callbacks (events) throughout the export process.

## Required Background
- [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html "Ignite UI Overview") - General information on the Ignite UI™ library.  
- [igGrid Overview](igGrid-Overview.html "igGrid Overview") - General information on the `igGrid` control.

## Dependencies
The igGridExcelExporter is dependent upon the following open source libraries:

- [FileSaver.js](https://github.com/eligrey/FileSaver.js/): A polyfill of the W3C `saveAs` specification
- [Blob.js](https://github.com/eligrey/Blob.js/): A polyfill of the W3C [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) interface
  
## Using igGridExcelExporter with an igGrid
You can export the entire contents of a grid by passing the instance of the grid to the exporter's `export` static method. 

```javascript
$.ig.GridExcelExporter.export($('#grid'), { 	
	fileName: 'igGrid',
	worksheetName: 'Sheet1',
	tableStyle: 'tableStyleLight13';
});
```
As you run the export you can specify the file name (in this case the final name is `igGrid.xlsx`), the work sheet name and table style. Table styles follow the [ECMA specification for Office Open XML](http://www.ecma-international.org/news/TC45_current_work/TC45_available_docs.htm) (see section on Table Style Definitions).

> **Note**: The only  required argument for the exporter is the instance of the grid. All other properties will fall back to defaults if you do not explicitly provide values.

For more information on all the available properties of the exporter you can explore the [API documentation](%%jQueryApiUrl%%/ig.gridexcelexporter#overview).

### Full Page Sample
```html
<!doctype html>
<html>
    <head>
        <link type="text/css" href="/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
        <link type="text/css" href="/css/structure/infragistics.css" rel="stylesheet" />
    </head>
    <body>
        
        <button id="export-button">Export</button>
        <table id="grid"></table>
        
        <script type="text/javascript" src="/scripts/lib/jquery.min.js"></script>
        <script type="text/javascript" src="/scripts/lib/jquery-ui.min.js"></script>
        <script type="text/javascript" src="/scripts/lib/infragistics.core.js"></script>
        <script type="text/javascript" src="/scripts/lib/infragistics.lob.js"></script>
        <script type="text/javascript" src="/scripts/lib/FileSaver.js"></script>
        <script type="text/javascript" src="/scripts/lib/Blob.js"></script>
        <script>
            $(function(){
            
                var products = [  
                    { "ProductID": 1, "Name": "Adjustable Race", "ProductNumber": "AR-5381" },  
                    { "ProductID": 2, "Name": "Bearing Ball", "ProductNumber": "BA-8327" },  
                    { "ProductID": 3, "Name": "BB Ball Bearing", "ProductNumber": "BE-2349" },  
                    { "ProductID": 4, "Name": "Headset Ball Bearings", "ProductNumber": "BE-2908" },
                    { "ProductID": 316, "Name": "Blade", "ProductNumber": "BL-2036" },
                    { "ProductID": 317, "Name": "LL Crankarm", "ProductNumber": "CA-5965" },
                    { "ProductID": 318, "Name": "ML Crankarm", "ProductNumber": "CA-6738" },
                    { "ProductID": 319, "Name": "HL Crankarm", "ProductNumber": "CA-7457" },
                    { "ProductID": 320, "Name": "Chainring Bolts", "ProductNumber": "CB-2903" },
                    { "ProductID": 321, "Name": "Chainring Nut", "ProductNumber": "CN-6137" }
                ];
                
                $("#grid").igGrid({
                    autoGenerateColumns: false,
                    primaryKey:"ProductID",
                    width: "1500px",
                    height: "400px",
                    columns: [
                        { key: "ProductID", headerText: "Product ID", width: "150px", dataType:"number"},
                        { key: "ProductNumber", headerText: "Product Number", width: "150px"},
                        { key: "Name", headerText: "Name", width: "200px"},
                    ],
                    dataSource: products
                });
                
                $("#export-button").click(function(){
                    $.ig.GridExcelExporter.export($("#grid"), { 	
                        fileName: "igGrid",
                        worksheetName: "Sheet1",
                        tableStyle: "tableStyleLight13"
                    });
                });
            });
        </script>
    </body>
</html>
```

## Related Content

### Topics
- [Using the JavaScript Excel Library](Using-the-JavaScript-Excel-Library.html)
- [JavaScript Excel Library Overview](JavaScript-Excel-Library-Overview.html)

### <a id="samples"></a> Samples

-   [Export Basic Grid to Excel](%%SamplesUrl%%/grid/export-basic-grid)
-   [Exporting Grid to Excel with Features](%%SamplesUrl%%/grid/export-feature-rich-grid)
-   [Customizing Grid Excel Export](%%SamplesUrl%%/grid/export-client-events)
-   [Exporting Grid to Excel with Progress Indicator](%%SamplesUrl%%/grid/export-grid-loading-indicator)