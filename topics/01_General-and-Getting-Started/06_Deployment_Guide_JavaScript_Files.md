<!--
|metadata|
{
    "fileName": "deployment-guide-javascript-files",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# JavaScript Files in %%ProductName%%

##Topic Overview

### Purpose

This topic provides reference information about the JavaScript files required to work with the controls included in %%ProductName%%™.

### Required Background

The following list presents the prerequisite topics needed to understanding this material.

- [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html): This topic explains how to manage the required resources to work with the %%ProductName%% JavaScript within a Web application.

- [Styling and Theming %%ProductName%%](Deployment-Guide-Styling-and-Theming.html): This topic provides instructions on setting up your application for design time, options for using CSS in production and an overview on creating or customizing a theme.

- [Infragistics Content Delivery Network (CDN) for %%ProductName%%](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html): Instructions on using Infragistics Content Delivery Network (CDN) in %%ProductName%%.


### JavaScript File Types Reference


The following summarizes the JavaScript file types included in %%ProductName%%.

The names of the JavaScript files containing the combined scripts are:

-   `infragistics.core.js`
-   `infragistics.lob.js`
-   `infragistics.dv.js`
-	`infragistics.excel-bundled`
-	`infragistics.spreadsheet-bundled`
-	`infragistics.scheduler-bundled`

The files are found in the js folder (the root folder for the JavaScript files in the %%ProductName%% program installation path).

There is also a combined script version of the localization resources in Bulgarian, Russian, Japanese, German, Spanish and French language. File names are `infragistics-bg.js`, `infragistics-ja.js`, `infragistics-ru.js`, `infragistics-de.js`, `infragistics-es.js` and `infragistics-fr.js` and they resides in the `../js/i18n` folder.

**Minified JavaScript files**

With the exception of the debug version all JavaScript files are minified.

**Non-minified JavaScript files** (debug version)

The non-minified files are used for debugging purposes. They expose the same folder structure as the minified files and have the same file names. The non-minified files are shipped in a `.zip` archive named `infragistics.IgniteUI.debug.zip`.

**Internationalization**

There are two types of internalizations. First is for the localization resources in the controls. Second is for the regional settings in the controls.

Localization resources for the controls are in Bulgarian, Russian, Japanese, German, Spanish and French languages. These reside in js/modules/i18n (where *js* is the root folder for the JavaScript files in the %%ProductName%% program installation path).

The regional settings - igRegional JavaScript files - provide localized formats including dates, numbers, and currency symbols for the jQuery editors. These reside in the `../js/modules/i18n/regional` (where `js` is the root folder for the JavaScript files in the %%ProductName%% program installation path).

>**Note:** When using the combined scripts file you must always reference the regional settings; they are not part of combined scripts file.

>**Note:** English localization files are merged into minified JS files and are not required to be referenced explicitly.
For other languages corresponding localization need to be referenced before the actual JavaScript files on the page code.

### JavaScript Extensions Files Reference

The following summarizes the JavaScript [Knockout.js](http://knockoutjs.com) extensions files included in %%ProductName%%.

The names of the JavaScript files containing the extensions scripts are:

-   `infragistics.datasource.knockoutjs.js`
-   `infragistics.ui.combo.knockout-extensions.js`
-   `infragistics.ui.datachart.knockout-extensions.js`
-	`infragistics.ui.editors.knockout-extensions.js`
-	`infragistics.ui.grid.knockout-extensions.js`
-	`infragistics.ui.tree.knockout-extensions.js`

The files are found in the extensions folder which is under the js folder.

>**Note:** The extensions scripts are not included in the combined scripts files. You must always reference them separately when using the extensions.

##JavaScript Files Reference by Control

### %%ProductName%% controls listing

To navigate to the required JavaScript files listing for the particular control, click the control name in the following list.

-   [igBulletGraph](#igBulletGraph)
-   [igCategoryChart](#igCategoryChart)
-   [igCombo](#igCombo)
-   [igDataSource](#igDataSource)
-   [igDataChart](#igDataChart)
-   [igDialog](#igDialog)
-   [igDoughnutChart](#igDoughnutChart)
-   [igEditors](#igEditors)
-   [igFinancialChart](#igFinancialChart)
-   [igGrid](#igGrid)
-   [igHierarchicalGrid](#igHierarchicalGrid)
-   [igHtmlEditor](#igHtmlEditor)
-   [igLayoutManager](#igLayoutManager)
-   [igLinearGauge](#igLinearGauge)
-   [igMap](#igMap)
-   [igOlapFlatDataSource](#igOlapFlatDataSource)
-   [igOlapXmlaDataSource](#igOlapXmlaDataSource)
-   [igPieChart](#igPieChart)
-   [igPivotDataSelector](#igPivotDataSelector)
-   [igPivotGrid](#igPivotGrid)
-   [igPivotView](#igPivotView)
-   [igPopover](#igPopover)
-   [igQRCodeBarcode](#igQRCodeBarcode)
-   [igRadialGauge](#igRadialGauge)
-   [igRating](#igRating)
-   [igReportViewer](#igReportViewer)
-   [igScheduler](#igScheduler)
-   [igShapeChart](#igShapeChart)
-   [igSplitter](#igSplitter)
-   [igSpreadsheet](#igSpreadsheet)
-   [igTemplating](#igTemplating)
-   [igTileManager](#igTileManager)
-   [igTree](#igTree)
-   [igTreeGrid](#igTreeGrid)
-   [igUpload](#igUpload)
-   [igVideoPlayer](#igVideoPlayer)
-   [igZoombar](#igZoombar)
-   [igScroll](#igScroll)

#### <a id="igBulletGraph"></a>igBulletGraph

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
			    infragistics.dv_interactivity.js<br>
				infragistics.ui.widget.js<br>
				 
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.bulletgraph.js
			    <br>infragistics.ui.bulletgraph.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igCategoryChart"></a>igCategoryChart

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
                <br>infragistics.ui.basechart.js
                <br>infragistics.ui.chart.js 
                <br>infragistics.ui.chartlegend.js
                <br>infragistics.ui.shared.js
                <br>infragistics.ui.widget.js
                <br>infragistics.util.js
                <br>infragistics.util.jquery.js
                <br>infragistics.datasource.js
                <br>infragistics.templating.js
                <br>infragistics.ext_core.js
                <br>infragistics.ext_collections.js
                <br>infragistics.ext_ui.js
                <br>infragistics.ext_web.js
                <br>infragistics.ext_text.js
                <br>infragistics.ext_io.js
                <br>infragistics.dv_jquerydom.js
                <br>infragistics.dv_core.js
                <br>infragistics.dv_datasource.js
                <br>infragistics.dv_dataseriesadapter.js
                <br>infragistics.dv_geo.js
                <br>infragistics.dv_geometry.js
                <br>infragistics.datachart_core.js
                <br>infragistics.datachart_categorycore.js
                <br>infragistics.datachart_domainChart.js 
                <br>infragistics.dvcommonwidget.js
                <br>infragistics.datachart_category.js
                <br>infragistics.legend.js
			
                <h5>Features:</h5>
				
                infragistics.dv_interactivity.js
                <br>infragistics.datachart_interactivity.js
				<br>infragistics.datachart_annotation.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
                infragistics.categorychart.js
                <br>infragistics.ui.categorychart.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igChartLegend"></a>igChartLegend

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.ext_core.js
				<br>infragistics.ext_collections.js
				<br>infragistics.ext_ui.js
				<br>infragistics.dv_jquerydom.js
				<br>infragistics.dv_core.js
				<br>infragistics.dv_geometry.js
				<br>infragistics.datachart_core.js
				<br>infragistics.dvcommonwidget.js
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.legend.js
				<br>infragistics.ui.chartlegend.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igCombo"></a>igCombo 

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
	    		infragistics.ui.combo.js
			</td>
		</tr>
	</tbody>
</table>
  
#### <a id="igDataSource"></a>igDataSource

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.datasource.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igDataChart"></a>igDataChart

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.datasource.js
				<br>infragistics.templating.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
                infragistics.ext_core.js
                <br>infragistics.ext_collections.js
                <br>infragistics.ext_ui.js
                <br>infragistics.dv_jquerydom.js
                <br>infragistics.dv_core.js
                <br>infragistics.dv_geometry.js
                <br>infragistics.dv_interactivity.js
                <br>infragistics.datachart_core.js
                <br>infragistics.dvcommonwidget.js
                <br>infragistics.ui.basechart.js
                <br>infragistics.ui.chart.js
                <br>infragistics.ui.chartlegend.js
                <br>infragistics.ui.widget.js
			
				<h5>Features:</h5>
                infragistics.datachart_categorycore.js
                <br>infragistics.datachart_category.js
                <br>infragistics.datachart_rangecategory.js
                <br>infragistics.datachart_verticalcategory.js
                <br>infragistics.datachart_financial.js
                <br>infragistics.datachart_extendedfinancial.js
                <br>infragistics.datachart_extendedaxes.js
                <br>infragistics.datachart_polar.js
                <br>infragistics.datachart_radial.js
                <br>infragistics.datachart_scatter.js
                <br>infragistics.datachart_stacked.js
                <br>infragistics.datachart_shape.js
                <br>infragistics.datachart_annotation.js
                <br>infragistics.datachart_interactivity.js
                <br>infragistics.legend.js

				<h5>_Additional dependencies for loading shape files:_</h5>
                infragistics.ext_text.js
                <br>infragistics.ext_io.js
                <br>infragistics.ext_web.js
                <br>infragistics.dv_geo.js
                
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igDateTimeAxis"></a>igDateTimeAxis

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.datachart_core.js<br>
				infragistics.datachart_categorycore.js			
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.datachart_extendedaxes.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igDialog"></a>igDialog

<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
    			infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.dialog.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igDoughnutChart"></a>igDoughnutChart 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.datasource.js<br>
				infragistics.templating.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.datachart_core.js<br>
				infragistics.dvcommonwidget.js<br>
				infragistics.ui.chart.js<br>
				infragistics.piechart.js<br>
				infragistics.ui.basechart.js<br>
				infragistics.dv_interactivity.js<br>
				infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.doughnutchart.js<br>
				infragistics.ui.doughnutchart.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igEditors"></a>igEditors
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.ui.widget.js
				<br>infragistics.ui.popover.js
				<br>infragistics.ui.notifier.js
				<br>infragistics.ui.validator.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
    			infragistics.ui.editors.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igFinancialChart"></a>igFinancialChart
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
                    infragistics.ui.chartlegend.js<br> 
                    infragistics.ui.basechart.js<br>
                    infragistics.ui.chart.js<br>
                    infragistics.ui.zoomslider.js<br>
                    infragistics.ui.shared.js<br>
                    infragistics.ui.widget.js<br>
                    infragistics.util.js<br>
                    infragistics.util.jquery.js<br>
                    infragistics.ext_core.js<br>
                    infragistics.ext_collections.js<br>
                    infragistics.ext_web.js<br>
                    infragistics.ext_text.js<br>
                    infragistics.ext_io.js<br>
                    infragistics.ext_ui.js<br>
                    infragistics.templating.js<br>
                    infragistics.datasource.js<br>
                    infragistics.datachart_categorycore.js<br>
                    infragistics.datachart_core.js<br>
                    infragistics.datachart_extendedaxes.js<br>
                    infragistics.datachart_category.js<br>
                    infragistics.datachart_financial.js<br>
                    infragistics.datachart_extendedfinancial.js<br>
                    infragistics.datachart_domainChart.js<br>
                    infragistics.financialchart.js<br>
                    infragistics.dvcommonwidget.js<br>
                    infragistics.dv_core.js<br>
                    infragistics.dv_geo.js<br>
                    infragistics.dv_geometry.js<br>
                    infragistics.dv_jquerydom.js<br>
                    infragistics.dv_datasource.js<br>
                    infragistics.dv_dataseriesadapter.js<br>
                    infragistics.ext_ui.js<br>
                    infragistics.legend.js<br>
                    infragistics.zoomslider_core.js<br>

                    <h5>Features:</h5>

                    infragistics.dv_interactivity.js
                    <br>infragistics.datachart_interactivity.js
                    <br>infragistics.datachart_annotation.js
                   
            </td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
                    infragistics.datachart_financial.js<br>
                    infragistics.ui.financialchart.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igFunnelChart"></a>igFunnelChart
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.datasource.js<br>
				infragistics.templating.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.datachart_core.js<br>
				infragistics.dvcommonwidget.js<br>
				infragistics.ui.basechart.js<br>
				infragistics.dv_interactivity.js<br>
				infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.funnelchart.js<br>
				infragistics.ui.funnelchart.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igGrid"></a>igGrid 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			    <br>infragistics.datasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.grid.framework.js
			
				<h5>Features:</h5>
			    infragistics.ui.grid.featurechooser.js
			    <br>infragistics.ui.grid.filtering.js
			    <br>infragistics.ui.grid.groupby.js
			    <br>infragistics.ui.grid.hiding.js
			    <br>infragistics.ui.grid.cellmerging.js
			    <br>infragistics.ui.grid.paging.js
			    <br>infragistics.ui.grid.resizing.js
			    <br>infragistics.ui.grid.rowselectors.js
			    <br>infragistics.ui.grid.selection.js
			    <br>infragistics.ui.grid.sorting.js
			    <br>infragistics.ui.grid.summaries.js
			    <br>infragistics.ui.grid.tooltips.js
			    <br>infragistics.ui.grid.updating.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.grid.columnmoving.js
			    <br>infragistics.ui.grid.columnfixing.js
				<br>infragistics.ui.grid.responsive.js
			    <br>infragistics.ui.grid.appendrowsondemand.js
			</td>
		</tr>
	</tbody>
</table>


#### <a id="igHierarchicalGrid"></a>igHierarchicalGrid 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			    <br>infragistics.datasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js				
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.grid.framework.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
    			infragistics.ui.grid.hierarchical.js

				<h5>Features:</h5>
				infragistics.ui.grid.featurechooser.js
    			<br>infragistics.ui.grid.filtering.js
				<br>infragistics.ui.grid.groupby.js
			    <br>infragistics.ui.grid.hiding.js
			    <br>infragistics.ui.grid.cellmerging.js
			    <br>infragistics.ui.grid.paging.js
			    <br>infragistics.ui.grid.resizing.js
			    <br>infragistics.ui.grid.rowselectors.js
			    <br>infragistics.ui.grid.selection.js
			    <br>infragistics.ui.grid.sorting.js
			    <br>infragistics.ui.grid.summaries.js
			    <br>infragistics.ui.grid.tooltips.js
			    <br>infragistics.ui.grid.updating.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.grid.columnmoving.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igHtmlEditor"></a>igHtmlEditor 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.datasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.widget.js
			    <br>infragistics.ui.toolbarbutton.js
			    <br>infragistics.ui.splitbutton.js
			    <br>infragistics.ui.colopicker.js
			    <br>infragistics.ui.popover.js
			    <br>infragistics.ui.colorpickersplitbutton.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.editors.js
			    <br>infragistics.ui.toolbar.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.htmleditor.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igLayoutManager"></a>igLayoutManager 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.layoutmanager.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igLinearGauge"></a>igLinearGauge 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.lineargauge.js<br>
				infragistics.ui.lineargauge.js
			</td>
		</tr>
	</tbody>
</table>


#### <a id="igMap"></a>igMap 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
                infragistics.ui.chart.js<br>
                infragistics.ui.chartlegend.js<br>
                infragistics.ui.basechart.js<br>
                infragistics.util.js<br>
                infragistics.ui.shared.js<br>
                infragistics.ui.widget.js<br>
                infragistics.ui.map.template.js<br>
                infragistics.util.jquery.js<br>
                infragistics.datasource.js<br>
                infragistics.templating.js<br>
                infragistics.ext_core.js<br>
                infragistics.ext_collections.js<br>
                infragistics.ext_ui.js<br>
                infragistics.ext_text.js<br>
                infragistics.ext_io.js<br>
                infragistics.ext_threading.js<br>
                infragistics.ext_web.js<br>
                infragistics.dv_jquerydom.js<br>
                infragistics.dv_core.js<br>
                infragistics.dv_datasource.js<br>
                infragistics.dv_dataseriesadapter.js<br>
                infragistics.dv_interactivity.js<br>
                infragistics.dv_geometry.js<br>
                infragistics.dv_geo.js<br>
                infragistics.datachart_core.js<br>
                infragistics.datachart_categorycore.js<br>
                infragistics.datachart_category.js <br>
                infragistics.datachart_extendedaxes.js<br>
                infragistics.datachart_scatter.js<br>
                infragistics.datachart_shape.js<br>
                infragistics.dvcommonwidget.js<br>
                infragistics.legend.js<br>
				
				<h5>Features:</h5>
                infragistics.dv_interactivity.js<br>
                infragistics.datachart_interactivity.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.geographicmap_core.js<br>
				infragistics.ui.map.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igOverviewPlusDetailPane"></a>igOverviewPlusDetailPane 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.dv_opd.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igOlapFlatDataSource"></a>igOlapFlatDataSource 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.olapflatdatasource.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igOlapXmlaDataSource"></a>igOlapXmlaDataSource 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.olapxmladatasource.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igPieChart"></a>igPieChart 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.datasource.js<br>
				infragistics.templating.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.datachart_core.js<br>
				infragistics.dvcommonwidget.js<br>
				infragistics.dv_interactivity.js<br>
				infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.piechart.js<br>
				infragistics.ui.chart.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igPivotDataSelector"></a>igPivotDataSelector 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.datasource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
				<br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.tree.js
			    <br>infragistics.ui.pivot.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotdataselector.js</td>
		</tr>
	</tbody>
</table>


#### <a id="igPivotGrid"></a>igPivotGrid 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.ui.widget.js
			    <br>infragistics.datasource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.grid.framework.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.pivot.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotgrid.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igPivotView"></a>igPivotView 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
			    <br>infragistics.util.jquery.js
				<br>infragistics.ui.widget.js
			    <br>infragistics.datasource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.tree.js
			    <br>infragistics.ui.grid.framework.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.pivot.shared.js
			    <br>infragistics.ui.pivotdataselector.js
			    <br>infragistics.ui.pivotgrid.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotview.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igPopover"></a>igPopover
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>infragistics.util.js</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.popover.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igQRCodeBarcode"></a>igQRCodeBarcode
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
			    <br>infragistics.util.jquery.js
			    <br>infragistics.ui.widget.js
			    <br>infragistics.ext_core.js
			    <br>infragistics.ext_text.js
			    <br>infragistics.ext_collections.js
			    <br>infragistics.ext_ui.js
			    <br>infragistics.dv_core.js
			    <br>infragistics.ext_collectionsextended.js
			    <br>infragistics.barcode_core.js
			    <br>infragistics.dv_jquerydom.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			     infragistics.barcode_qrcodebarcode.js
			     <br>infragistics.encoding.core.js
			     <br>infragistics.ui.qrcodebarcode.js
			</td>
		</tr>
	</tbody>
</table>



#### <a id="igRadialGauge"></a>igRadialGauge 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.dv_interactivity.js<br>
				infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.radialgauge.js<br>
				infragistics.ui.radialgauge.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igRating"></a>igRating 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.rating.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igReportViewer"></a>igReportViewer
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.datasource.js
			    <br>infragistics.dv.core.js
			    <br>infragistics.dvcommonwidget.js
			    <br>infragistics.ui.chart.js
			    <br>infragistics.chart_categorychart.js
			    <br>infragistics.chart_financialchart.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.reportviewer.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igScroll"></a>igScroll 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
				<br>modernizr.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.scroll.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igSparkline"></a>igSparkline 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js<br>
				infragistics.util.jquery.js<br>
				infragistics.datasource.js<br>
				infragistics.templating.js<br>
				infragistics.ext_core.js<br>
				infragistics.ext_collections.js<br>
				infragistics.ext_ui.js<br>
				infragistics.dv_jquerydom.js<br>
				infragistics.dv_core.js<br>
				infragistics.dv_geometry.js<br>
				infragistics.dv.simple.core.js<br>
				infragistics.ui.basechart.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.chart_sparkline.js<br>
				infragistics.ui.sparkline.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igScheduler"></a>igScheduler
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
				<br>infragistics.templating.js
				<br>infragistics.ui.scroll.js
				<br>infragistics.ext_core.js
				<br>infragistics.ext_text.js
				<br>infragistics.ext_collections.js
				<br>infragistics.ext_io.js
				<br>infragistics.ext_ui.js
				<br>infragistics.ext_collectionsExtended.js
				<br>infragistics.ext_threading.js
				<br>infragistics.ext_web.js
				<br>infragistics.xml.js
				<br>infragistics.dv_core.js
				<br>infragistics.dv_jquerydom.js
				<br>infragistics.dv_interactivity.js
				<br>infragistics.datasource.js
				<br>infragistics.ui.popover.js
				<br>infragistics.ui.validator.js
				<br>infragistics.ui.editors.js
				<br>infragistics.ui.notifier.js
				<br>infragistics.ui.shared.js
				<br>infragistics.ui.combo.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.scheduler.core.js
				<br>infragistics.ui.scheduler.core.js
				<br>infragistics.ui.scheduler.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igShapeChart"></a>igShapeChart
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
                infragistics.util.js<br>
                infragistics.util.jquery.js<br>
                infragistics.ui.shared.js<br>
                infragistics.ui.widget.js<br>
                infragistics.ui.basechart.js<br>
                infragistics.ui.chart.js<br>
                infragistics.ui.chartlegend.js<br> 
                infragistics.ext_core.js<br>
                infragistics.ext_collections.js<br>
                infragistics.ext_ui.js<br>
                infragistics.ext_web.js<br>
                infragistics.ext_text.js<br>
                infragistics.ext_io.js<br>
                infragistics.dvcommonwidget.js<br>
                infragistics.dv_core.js<br>
                infragistics.dv_geo.js<br>
                infragistics.dv_geometry.js<br>
                infragistics.dv_jquerydom.js<br>
                infragistics.dv_datasource.js<br>
                infragistics.dv_dataseriesadapter.js<br>
                infragistics.templating.js<br>
                infragistics.datasource.js<br>
                infragistics.datachart_core.js<br>
                infragistics.datachart_extendedaxes.js<br>
                infragistics.datachart_scatter.js<br>
                infragistics.datachart_shape.js<br>
                infragistics.datachart_domainChart.js<br> 
                infragistics.legend.js<br>

                <h5>Features:</h5>

                infragistics.dv_interactivity.js
                <br>infragistics.datachart_interactivity.js
                <br>infragistics.datachart_visualdata.js
                <br>infragistics.datachart_annotation.js
               
            </td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
                infragistics.ui.shapechart.js<br>
                infragistics.shapechart.js<br>
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igSplitter"></a>igSplitter 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.splitter.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igSpreadsheet"></a>igSpreadsheet
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
			<br>infragistics.util.jquery.js
			<br>infragistics.ext_core.js
			<br>infragistics.ext_text.js
			<br>infragistics.ext_collections.js
			<br>infragistics.ext_io.js
			<br>infragistics.ext_ui.js
			<br>infragistics.dv_jquerydom.js
			<br>infragistics.ext_collectionsExtended.js
			<br>infragistics.ext_threading.js
			<br>infragistics.ext_web.js
			<br>infragistics.xml.js
			<br>infragistics.documents.core_core.js
			<br>infragistics.documents.core_openxml.js
			<br>infragistics.excel_core.js
			<br>infragistics.excel_functions.js
			<br>infragistics.excel_serialization_biff8.js
			<br>infragistics.excel_serialization_openxml.js
			<br>infragistics.undo.js
			<br>infragistics.dv_core.js
			<br>infragistics.dv_jquerydom.js
			<br>infragistics.dv_interactivity.js
			<br>infragistics.util.jquery.js
			<br>infragistics.datasource.js
			<br>infragistics.templating.js
			<br>infragistics.ui.scroll.js
			<br>infragistics.ui.validator.js
			<br>infragistics.ui.combo.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.spreadsheet.js
				<br>infragistics.ui.spreadsheet.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igTemplating"></a>igTemplating 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.templating.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igTileManager"></a>igTileManager 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.datasource.js
			    <br>infragistics.templating.js				
				<br>infragistics.ui.widget.js
			    <br>infragistics.ui.splitter.js
			    <br>infragistics.ui.layoutmanager.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.tilemanager.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igTree"></a>igTree 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			    <br>infragistics.datasource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.tree.js</td>
		</tr>
	</tbody>
</table>


#### <a id="igTreeGrid"></a>igTreeGrid 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
				<br>infragistics.ui.grid.framework.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.treegrid.js
			
				<h5>Features:</h5>
			    infragistics.ui.grid.featurechooser.js
			    <br>infragistics.ui.grid.filtering.js
				<br>infragistics.ui.treegrid.filtering.js
			    <br>infragistics.ui.grid.hiding.js
				<br>infragistics.ui.treegrid.hiding.js
			    <br>infragistics.ui.grid.paging.js
				<br>infragistics.ui.treegrid.paging.js
			    <br>infragistics.ui.grid.selection.js
				<br>infragistics.ui.treegrid.selection.js
			    <br>infragistics.ui.grid.sorting.js
				<br>infragistics.ui.treegrid.sorting.js
			    <br>infragistics.ui.grid.tooltips.js
				<br>infragistics.ui.treegrid.tooltips.js
			    <br>infragistics.ui.grid.updating.js
				<br>infragistics.ui.treegrid.updating.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
				<br>infragistics.ui.treegrid.multicolumnheaders.js
			    <br>infragistics.ui.grid.columnfixing.js
				<br>infragistics.ui.treegrid.columnfixing.js
			</td>
		</tr>
	</tbody>
</table>


#### <a id="igUpload"></a>igUpload 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.ui.shared.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.upload.js</td>
		</tr>
	</tbody>
</table>


#### <a id="igValidator"></a>igValidator 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.validator.js</td>
		</tr>
	</tbody>
</table>

#### <a id="igVideoPlayer"></a>igVideoPlayer 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
			    infragistics.util.js
				<br>infragistics.util.jquery.js
			    <br>infragistics.ui.shared.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.videoplayer.js
			</td>
		</tr>
	</tbody>
</table>

#### <a id="igZoombar"></a>igZoombar 
<table class="table">
	<thead>
		<tr>
			<th>Script Type</th>
			<th>Script File Name</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Dependency Scripts</td>
			<td>
				infragistics.util.js
				<br>infragistics.util.jquery.js
				<br>infragistics.ui.shared.js				
				<br>infragistics.ui.widget.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.zoombar.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** English localization files are merged into minified JS files and are not required to be referenced explicitly.
For other languages corresponding localization need to be referenced before the actual JavaScript files on the page code.