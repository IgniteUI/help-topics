<!--
|metadata|
{
    "fileName": "iggridexcelexporter-configuring",
    "controlName": "igGridExcelExporter",
    "tags": [excel, exporting]
}
|metadata|
-->

# Configuring igGridExcelExporter

## Topic Overview

### Purpose

The `igGridExcelExporter`™ provides options that allow any data and layout manipulations caused by the `igGrid` features to be reflected in the excel worksheet, as well as to configure styles to be applied, columns to be skipped during exporting, setting file and worksheet names, etc.

### In this topic

This topic contains the following sections:

-   [Configure the gridFeatureOptions settings](#gridfeatureoptions_configure)
-   [Configure exporting igHierarchicalGrid](#hierarchical_data)
-   [Configure columns that will not be exported](#configure_columns)
-   [Configure styling](#configure_styling)
-   [Attach to callbacks (events)](#callbacks)
-   [Display an overlay while exporting](#exporting_overlay)

### Required background
- [igGridExcelExporter Overview](iggridexcelexporter-overview.html "igGridExcelExporter Overview") - General information on the `igGridExcelExporter` control.


### <a id="gridfeatureoptions_configure"></a>Configure the gridFeatureOptions settings

Data and layout manipulations caused by the `Filtering`, `Hiding`, `Paging`, `Sorting`, `Summaries` and `Column Fixing` features of the `igGrid` can be reflected in the exported excel worksheet. The setting for each feature is passed with the `gridFeatureOptions` object.
All of these are enumerations and the `sorting`, `summaries` and `columnfixing` have only options - "none" or "applied".  Code sample:

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), {
    gridFeatureOptions: {
        // Fixed `igGrid` columns will be fixed in the excel worksheet
        columnfixing: "applied",
        // summaries will not be calculated in the worksheet
        summaries: "none",
        // Sorted `igGrid` columns will be sorted in the excel worksheet
        sorting: "applied"
    }
});
```

Different options are available for configuring the `filtering`, `paging` and `hiding`. For example, we can opt to work with the visible `igGrid` columns only and do not export the hidden ones by setting `hiding: "visibleColumnsOnly"`. The other possible options for hiding are still `none` and `applied`. Setting `paging` and `filtering` is tricky as both features manipulate the data and different combinations will bring different results. For `paging` we can set either `currentPage` that will export only the current `igGrid` page, or `allRows` correspondingly. `filtering` can take values `none`, `applied`, or `filteredRowsOnly`. The difference between them - setting `applied` will make the `igGridExcelExporter` export all data and apply the same filter as applied in the `igGrid`, while setting `filteredRowsOnly` will export only the filtered records.

> **Note:** While filtering and sorting always manipulate the whole data set in the `igGrid`, the data exported to excel might be just a subset of the whole data (when `paging` is set to `currentPage`). Applying the same filtering and/or sorting expression to the excel data will bring different results than in `igGrid`.

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), {
    gridFeatureOptions: {
        // Hidden `igGrid` columns will be exported, but hidden in the worksheet
        hiding: "applied",
        // All pages of data will be exported
        paging: "allRows",
        // The same filter expressions will be applied to the excel worksheet
        filtering: "applied"
    }
});
```

### <a id="hierarchical_data"></a>Configure exporting hierarchical data

When exporting `igHierarchicalGrid` we may opt to export all data down the hierarchy or just the data under expanded rows. The behavior is controlled by the `dataExportMode` propert, which takes values `allRows` or `expandedRows`.

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), { 
    // The keys of the columns that will not be exported
    dataExportMode: "expandedRows",
})
```

### <a id="configure_columns"></a>Configure columns that will not be exported

`columnsToSkip` option is used to define columns that will not be exported. The option takes an array containing the column keys:

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), { 
 // The keys of the columns that will not be exported
  columnsToSkip: ["ProductID", "Supplier"]
})
```

### <a id="configure_styling"></a>Configure styling

By default the `igGridExcelExporter` will copy styles from the header row and first two data rows from `igGrid` to apply the same to the worksheet table. If `gridStyling` is set to `none`, then a predefined excel table style will be applied to the worksheet. Table styles follow the [ECMA specification for Office Open XML](http://www.ecma-international.org/news/TC45_current_work/TC45_available_docs.htm) (see section on Table Style Definitions). The predefined style may be set using the `tableStyle` and the available choices are divided into three categories:
`TableStyleMedium[1-28]`, `TableStyleLight[1-21]` and `TableStyleDark[1-11]`. 
The range in brackets is the available theme number that may be chosen:

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), {
    gridStyling: "none",
    //Setting the table style to 18th theme from TableStyleMedium category
    tableStyle: "TableStyleMedium18"
 });
 ```

### <a id="callbacks"></a>Attach to callbacks (events)

A number of callbacks (events) are exposed that are called during the exporting process and provide entry points to customize or end the exporting process. Exporting/ed callbacks that are available for cells and rows are suitable to apply formulas and conditional formatting, read/write values from the worksheet object, etc. There are also the `exportStarting`, `exportEnding` and `error` and `success` callbacks, which are suitable to verify anything before exporting or before saving the file locally, or to display a modal overlay over the `igGrid` while exporting, as shown in the [Display an overlay while exporting](#exporting_overlay) section.


```javascript
$.ig.GridExcelExporter.exportGrid($("#grid1"), {},
{
	cellExported: function (e, args) {
		if (args.columnKey == 'Company') {
			var xlRow = args.xlRow;
            // apply formula to a cell
			xlRow.cells(args.columnIndex).applyFormula('=HYPERLINK("' + args.cellValue + '")');
		},
		if (args.columnKey == "Age" && args.cellValue > 43) {
            // format the font and the cell fill color
			args.xlRow.getCellFormat(args.columnIndex).font().bold(1);
            args.xlRow.getCellFormat(args.columnIndex).fill($.ig.excel.CellFill.createLinearGradientFill(45, '#FF0000', '#00FFFF'));
		}
	},
    exportEnding: function (e, args) {
        // format a date value to be displayed as 19/Mar/2017
        args.worksheet.columns().item(3).cellFormat().formatString("dd/MMM/YYYY");
    },
});
 ```

### <a id="exporting_overlay"></a>Display an overlay while exporting

During exporting the `igGrid` UI is not available for interactions so you may want to place a modal overlay above. It will show in the beginning of exporting and hide in the end. To implement this the `exportStarting` and `success` callbacks are used:

```javascript
$.ig.GridExcelExporter.exportGrid($("#grid1"), {},
{
    exportStarting: function (e, args) {
        showOverlay(args.grid, exportingOverlay);
    },
    success: function () {
        hideOverlay(exportingOverlay);
    },
});
 ```

### <a id="Preview"></a>Preview
The following is a preview of the final result.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/grid/export-client-events](%%SamplesEmbedUrl%%/grid/export-client-events)
</div>
 

 









