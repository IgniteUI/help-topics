<!--
|metadata|
{
    "fileName": "iggridexcelexporter-configuring",
    "controlName": ["igExcel", "igGrid", "igGridExcelExporter"],
    "tags": [excel, exporting]
}
|metadata|
-->

# Configuring igGridExcelExporter

## Topic Overview

### Purpose

This topic explains the options `igGridExcelExporter`™ provides to configure how `igGrid` data and features will be exported to the Excel Worksheet.

### In this topic

This topic contains the following sections:

-   [Configure the `gridFeatureOptions` settings](#gridfeatureoptions_configure)
-   [Configure exporting igHierarchicalGrid](#hierarchical_data)
-   [Configure columns that will not be exported](#configure_columns)
-   [Configure styling](#configure_styling)
-   [Attach to callbacks (events)](#callbacks)
-   [Display an overlay while exporting](#exporting_overlay)

### Required background
- [igGridExcelExporter Overview](iggridexcelexporter-overview.html "igGridExcelExporter Overview") - General information on the `igGridExcelExporter` control.


## <a id="gridfeatureoptions_configure"></a>Configure the `gridFeatureOptions` settings

Тhe [`gridFeatureOptions`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions) object defines how the data and layout manipulations caused by the `Filtering`, `Hiding`, `Paging`, `Sorting`, `Summaries` and `Column Fixing` features of the `igGrid` will be reflected in the exported Excel Worksheet. 

#### Filtering
All `igGrid` built-in filtering conditions are matched to the corresponding filtering conditions that are native to Excel, thus verifying the user works with a valid set of data. Custom filtering conditions defined in `igGrid` are not supported, so if such exists, they are ignored by the `igGridExcelExporter`.

#### Sorting
`Sorting` in `igGrid` displays a sort indicator and colors the column cells. When exported in Excel, the column headers will display indicators showing the sorting direction (ascending or descending), but the column itself will not be colored. This is native behavior to Excel, but can be customized in some `igGridExcelExporter` event, see the [`events`](#callbacks) below for example.

#### Summaries
`Summaries` in `igGrid` are highly flexible, allowing developers to customize the way summaries are calculated and modify the specific UI that is rendered. When applying summaries in the Worksheet, the `igGridExcelExporter` uses the native data aggregations available to Excel - `sum`, `min`, `max`, `average` and `count`. Custom summaries defined in `igGrid` are not supported and are ignored by the `igGridExcelExporter`.

#### Paging
`Paging` in `igGrid` can be customized in many ways, but in the context of `igGridExcelExporter` it is only about exporting the current page data or all pages data.

#### Hiding
Columns in `igGrid` can be defined as hidden initially or can be hidden/shown by the user if the `Hiding` feature is enabled. The `igGridExcelExporter` allows the developer to control whether these columns will be exported using the `hiding` property.

#### Column Fixing
Columns in `igGrid` can be fixed to either left or right direction, while in Excel columns get fixed to the left side only.

Refer to the below table that lists the properties of the `gridFeatureOptions` object along with all the possible values and how they affect the exported Excel Worksheet.

|Setting | Property | Description
| -------------------| ------------------- |----------- 
Configure Sorting | [sorting](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.sorting) | Accepted values `"none"` \| `"applied"`<br />.When `"none"` Sorting is not applied in the Excel. When `"applied"` Sorting is applied in the Excel Worksheet.
Configure Filtering | [filtering](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.filtering) | Accepted values: `"none"` \| `"applied"` \| `"filteredRowsOnly"`.<br />When `"none"` Filtering is not applied in the Excel. When `"applied"` filtering expressions are read from the `igGrid` and applied to respective columns in Excel. Value of `"filteredRowsOnly"` will export only the records that have been filtered in the `igGrid` and will not apply filtering in the Excel worksheet.
Configure Paging | [paging](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.paging) | Accepted values: `"currentPage"` \| `"allRows"`<br />`"currentPage"` will export only the current `igGrid` page, while `"allRows"` will export all data pages.
Configure Hiding | [hiding](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.hiding) | Accepted values: `"none"` \| `"applied"` \| `"visibleColumnsOnly"`<br />Value of `"none"` will ignore if any columns are hidden initially or through the `igGrid` UI and will still export them to the worksheet. `"applied"` will export the hidden columns, but they will not be visible in Excel until the user changes the column width in Excel to a value greater than 0. When value is `"visibleColumnsOnly"` the `igGridExcelExporter` will export only the `igGrid` columns that are not hidden.
Configure Column Fixing | [columnfixing](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.columnfixing) | Accepted values: `"none"` \| `"applied"`<br />Set `"none"` to ignore `Column Fixing`. Value of `"applied"` will fix the respective columns in the Excel Worksheet.
Configure Summaries | [summaries](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridFeatureOptions.summaries) | Accepted values: `"none"` \| `"applied"`<br />Set `"none"` to ignore the `igGrid` summaries. Value of `"applied"` will make the Excel calculate summaries for each column that has summaries in `igGrid`.


> **Note:** While `Filtering` and `Sorting` always manipulate the whole data set in the `igGrid`, the data exported to Excel might be just a subset of the whole data (when `paging` is set to `"currentPage"`). Applying the same filtering and/or sorting expression to the Excel data will bring different results than in `igGrid`. Same is valid when calculating summaries for a given column in the Excel.

<br />Code sample:

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), {
    gridFeatureOptions: {
        // Fixed `igGrid` columns will be fixed in the excel worksheet
        columnfixing: "applied",
        // summaries will not be calculated in the worksheet
        summaries: "none",
        // Sorted `igGrid` columns will be sorted in the excel worksheet
        sorting: "applied",
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

When exporting `igHierarchicalGrid` you may opt to export all data down the hierarchy or just the data under expanded rows. The behavior is controlled by the [`dataExportMode`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.dataExportMode) property, which takes values `"allRows"` or `"expandedRows"`.

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), { 
    // The keys of the columns that will not be exported
    dataExportMode: "expandedRows",
})
```

### <a id="configure_columns"></a>Configure columns that will not be exported

[`columnsToSkip`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.columnsToSkip) option is used to define columns that will not be exported. The option takes an array containing the column keys:

```javascript
$.ig.GridExcelExporter.exportGrid($(".selector"), { 
 // The keys of the columns that will not be exported
  columnsToSkip: ["ProductID", "Supplier"]
})
```

### <a id="configure_styling"></a>Configure styling

By default the `igGridExcelExporter` will copy styles from the header row and the first two data rows from `igGrid` to apply the same to the Worksheet table. If [`gridStyling`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.gridStyling) is set to `"none"`, then a predefined Excel table style will be applied to the worksheet. Table styles follow the [ECMA specification for Office Open XML](http://www.ecma-international.org/news/TC45_current_work/TC45_available_docs.htm) (see section on Table Style Definitions). The predefined style may be set using the [`tableStyle`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:settings.tableStyle) and the available choices are divided into three categories:
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

A number of callbacks (events) are exposed that are called during the exporting process and provide entry points to customize or end the exporting process. Exporting/ed callbacks that are available for cells and rows are suitable to apply formulas and conditional formatting, read/write values from the Worksheet object, etc. There are also the [`exportStarting`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.exportStarting), [`exportEnding`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.exportEnding) and [`error`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.error) and [`success`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.success) callbacks, which are suitable to verify anything before exporting or before saving the file locally, or to display a modal overlay over the `igGrid` while exporting, as shown in the [Display an overlay while exporting](#exporting_overlay) section.


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

During exporting the `igGrid` UI is not available for interactions so you may want to place a modal overlay above. It will show in the beginning of exporting and hide in the end. To implement this the [`exportStarting`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.exportStarting) and [`success`](%%jQueryApiUrl%%/ig.gridexcelexporter#options:callbacks.success) callbacks are used:

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
