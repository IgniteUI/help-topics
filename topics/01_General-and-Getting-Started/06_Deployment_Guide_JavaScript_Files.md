<!--
|metadata|
{
    "fileName": "deployment-guide-javascript-files",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# JavaScript Files in Ignite UI

##Topic Overview

### Purpose

This topic provides reference information about the JavaScript files required to work with the controls included in Ignite UI™.

### Required Background

The following list presents the prerequisite topics needed to understanding this material.

- [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html): This topic explains how to manage the required resources to work with the Ignite UI JavaScript within a Web application.

- [Styling and Theming Ignite UI](Deployment-Guide-Styling-and-Theming.html): This topic provides instructions on setting up your application for design time, options for using CSS in production and an overview on creating or customizing a theme.

- [Infragistics Content Delivery Network (CDN) for Ignite UI](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html): Instructions on using Infragistics Content Delivery Network (CDN) in Ignite UI.


### JavaScript File Types Reference


The following summarizes the JavaScript file types included in Ignite UI.

The names of the JavaScript files containing the combined scripts are:

-   `infragistics.core.js`
-   `infragistics.lob.js`
-   `infragistics.dv.js`

The files are found in the js folder (the root folder for the JavaScript files in the Ignite UI program installation path).

There is also a combined script version of the localization resources in Bulgarian, Russian, Japanese, German, Spanish and French language. File names are `infragistics-bg.js`, `infragistics-ja.js`, `infragistics-ru.js`, `infragistics-de.js`, `infragistics-es.js` and `infragistics-fr.js` and they resides in the `../js/i18n` folder.

**Minified JavaScript files**

With the exception of the debug version all JavaScript files are minified.

**Non-minified JavaScript files** (debug version)

The non-minified files are used for debugging purposes. They expose the same folder structure as the minified files and have the same file names. The non-minified files are shipped in a `.zip` archive named `infragistics.IgniteUI.debug.zip`.

**Internationalization**

There are two types of internalizations. First is for the localization resources in the controls. Second is for the regional settings in the controls.

Localization resources for the controls are in Bulgarian, Russian, Japanese, German, Spanish and French languages. These reside in js/modules/i18n (where *js* is the root folder for the JavaScript files in the Ignite UI program installation path).

The regional settings - igRegional JavaScript files - provide localized formats including dates, numbers, and currency symbols for the jQuery editors. These reside in the `../js/modules/i18n/regional` (where `js` is the root folder for the JavaScript files in the Ignite UI program installation path).

>**Note:** When using the combined scripts file you must always reference the regional settings; they are not part of combined scripts file.

>**Note:** Localization scripts must be referenced before the actual JavaScript files in the page code.

##JavaScript Files Reference by Control

### Ignite UI controls listing

To navigate to the required JavaScript files listing for the particular control, click the control name in the following list.

-   [igBulletGraph](#igBulletGraph)
-   [igCombo](#igCombo)
-   [igDataSource](#igDataSource)
-   [igDataChart](#igDataChart)
-   [igDialog](#igDialog)
-   [igDoughnutChart](#igDoughnutChart)
-   [igEditors](#igEditors)
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
-   [igSplitter](#igSplitter)
-   [igTemplating](#igTemplating)
-   [igTileManager](#igTileManager)
-   [igTree](#igTree)
-   [igTreeGrid](#igTreeGrid)
-   [igUpload](#igUpload)
-   [igVideoPlayer](#igVideoPlayer)
-   [igZoombar](#igZoombar)

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
				infragistics.util.js
				<br>infragistics.dv.simple.core.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.gauge_bulletgraph.js
			    <br>infragistics.ui.bulletgraph.js
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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.combo-en.js
	    		<br>infragistics.ui.combo.js
			</td>
		</tr>
	</tbody>
</table>
  
>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.dv.core.js
			    <br>infragistics.dvcommonwidget-en.js
			    <br>infragistics.dvcommonwidget.js
			    <br>infragistics.ui.chart.js
			
				<h5>Features:</h5>
			    infragistics.chart_categorychart.js
			    <br>infragistics.chart_financialchart.js
			    <br>infragistics.chart_polarchart.js
			    <br>infragistics.chart_radialchart.js
			    <br>infragistics.chart_rangecategorychart.js
			    <br>infragistics.chart_scatterchart.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.dialog-en.js
			    <br>infragistics.ui.dialog.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

####<a id="igDoughnutChart"></a>igDoughnutChart 
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
			    <br>infragistics.datasource.js
			    <br>infragistics.dv.core.js
			    <br>infragistics.dvcommonwidget-en.js
			    <br>infragistics.dvcommonwidget.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.chartlegend.js
			    <br>infragistics.ui.basechart.js
			    <br>infragistics.chart_piechart.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.doughnutchart-en.js
				<br>infragistics.ui.doughnutchart.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
    			infragistics.ui.regional-en.js
			    <br>infragistics.ui.editors-en.js
    			<br>infragistics.ui.editors.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.grid-en.js
			    <br>infragistics.ui.grid.framework.js
			
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


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js				
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.grid-en.js
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

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.toolbarbutton.js
			    <br>infragistics.ui.splitbutton.js
			    <br>infragistics.ui.colopicker.js
			    <br>infragistics.ui.popover.js
			    <br>infragistics.ui.colorpickersplitbutton.js
			    <br>infragistics.ui.combo-en.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.editors-en.js
			    <br>infragistics.ui.editors.js
			    <br>infragistics.ui.toolbar-en.js
			    <br>infragistics.ui.toolbar.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.htmleditor-en.js
			    <br>infragistics.ui.htmleditor.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.layoutmanager.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
				infragistics.util.js
				<br>infragistics.dv.simple.core.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.gauge_lineargauge.js
				<br>infragistics.ui.lineargauge.js</td>
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
			    infragistics.util.js
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.dv.core.js
				<br>infragistics.geographicmap_core.js
			    <br>infragistics.dvcommonwidget-en.js
			    <br>infragistics.dvcommonwidget.js
			    <br>infragistics.ui.map.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			<td>infragistics.util.js</td>
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
			<td>infragistics.util.js</td>
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
			    infragistics.util.js
			    <br>infragistics.datasource-en.js
				<br>infragistics.dataSource.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
    			infragistics.dv.core.js
    			<br>infragistics.dvcommonwidget-en.js
    			<br>infragistics.dvcommonwidget.js
				<br>infragistics.ui.chart.js
    			<br>infragistics.chart_piechart.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
				<br>infragistics.templating-en.js
				<br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.combo-en.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.tree-en.js
			    <br>infragistics.ui.tree.js
			    <br>infragistics.ui.pivot.shared-en.js
			    <br>infragistics.ui.pivot.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotdataselector.js</td>
		</tr>
	</tbody>
</table>


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.grid-en.js
			    <br>infragistics.ui.grid.framework.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.pivot.shared-en.js
			    <br>infragistics.ui.pivot.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotgrid.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.olapflatdatasource.js
			
				<br>*or*
			
			    <br>infragistics.olapxmladatasource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			    <br>infragistics.ui.scroll.js
			    <br>infragistics.ui.combo-en.js
			    <br>infragistics.ui.combo.js
			    <br>infragistics.ui.tree-en.js
			    <br>infragistics.ui.tree.js
			    <br>infragistics.ui.grid-en.js
			    <br>infragistics.ui.grid.framework.js
			    <br>infragistics.ui.grid.multicolumnheaders.js
			    <br>infragistics.ui.pivot.shared-en.js
			    <br>infragistics.ui.pivot.shared.js
			    <br>infragistics.ui.pivotdataselector-en.js
			    <br>infragistics.ui.pivotdataselector.js
			    <br>infragistics.ui.pivotgrid-en.js
			    <br>infragistics.ui.pivotgrid.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.pivotview.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.popover-en.js <br />
			    infragistics.ui.popover.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.dv.simple.core.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.barcode_qrcodebarcode.js
    			<br>infragistics.encoding.js (optional)
    			<br>infragistics.ui.barcode-en.js
    			<br>infragistics.ui.barcode.js</td>
		</tr>
	</tbody>
</table>



>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
    			infragistics.util.js
	    		<br>infragistics.dv.simple.core.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.gauge_radialgauge.js</td>
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
			<td>infragistics.util.js</td>
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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.dv.core.js
			    <br>infragistics.dvcommonwidget-en.js
			    <br>infragistics.dvcommonwidget.js
			    <br>infragistics.ui.chart.js
			    <br>infragistics.chart_categorychart.js
			    <br>infragistics.chart_financialchart.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.reportviewer-en.js
				<br>infragistics.ui.reportviewer.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			<td>infragistics.util.js</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.splitter-en.js
    			<br>infragistics.ui.splitter.js</td>
		</tr>
	</tbody>
</table>


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			<td>infragistics.util.js</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.templating-en.js
    		<br>infragistics.templating.js</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.splitter-en.js
			    <br>infragistics.ui.splitter.js
			    <br>infragistics.ui.layoutmanager.js
			    <br>infragistics.util.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.tilemanager-en.js
    			<br>infragistics.ui.tilemanager.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.tree-en.js
    			<br>infragistics.ui.tree.js</td>
		</tr>
	</tbody>
</table>


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.datasource-en.js
			    <br>infragistics.dataSource.js
			    <br>infragistics.templating-en.js
			    <br>infragistics.templating.js
			    <br>infragistics.ui.shared.js
				<br>infragistics.ui.grid.shared.js
			    <br>infragistics.ui.scroll.js
				<br>infragistics.ui.grid-en.js
				<br>infragistics.ui.grid.framework.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.treegrid-en.js
			    <br>infragistics.ui.treegrid.js
			
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


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.upload-en.js
    			<br>infragistics.ui.upload.js</td>
		</tr>
	</tbody>
</table>


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			<td>infragistics.util.js</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>infragistics.ui.validator-en.js
    			<br>infragistics.ui.validator.js</td>
		</tr>
	</tbody>
</table>


>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
			    <br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
				infragistics.ui.videoplayer-en.js
    			<br>infragistics.ui.videoplayer.js
			</td>
		</tr>
	</tbody>
</table>



>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

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
				<br>infragistics.ui.shared.js
			</td>
		</tr>
		<tr>
			<td>Scripts</td>
			<td>
			    infragistics.ui.zoombar-en.js
			    <br>infragistics.ui.zoombar.js
			</td>
		</tr>
	</tbody>
</table>

>**Note:** Localization scripts must be referenced before the actual
JavaScript files in the page code.

