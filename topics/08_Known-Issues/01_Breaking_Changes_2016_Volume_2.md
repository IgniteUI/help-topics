# jQuery Breaking Changes

The following table summarizes the breaking changes of the 2016 Volume 2 release. Detailed explantations of the issues are provided after the summary table.

![](images/Yes.png)  – Workaround available

![](images/No.png)  – No known workaround

![](images/Fix.png) - No known workaroud, fix planned

## Modularization

Feature | Description | Status
---|---|---
Large js files are broken into smaller files |In order to reduce the file size of your application, we have modularized large files into smaller file sizes | ![](images/Yes.png)


## Redesigned Chart Defaults
Feature | Description | Status
---|---|---
The default values of the igChart control are updated |The chart features mulitple visual changes and new property settings improving the overall look and feel of the control.| ![](images/Yes.png)

## igChartLegend, igOPDPane now have to be explicitly requested if using the loader
Feature | Description | Status
---|---|---
The legend and the OPD pane must be explicitly loaded as a separate module if it is used in any of the charts on the page.|Previously, the legend and the OPD were dependencies of the chart in the module structure. Since the structure is updated in this release, they have be explicitly loaded.|![](images/No.png)


## Bar Series requires VerticalCateogry module is using the loader
Feature | Description | Status
---|---|---
The VerticalCategory must be explicitly loaded as a separate module if it is used in any of the charts or maps on the page. |Previously, the bar series and associated axes were integrated into the chart. Since the structure is updated in this release, the VerticalCategory has to be explicitly loaded. |![](images/No.png)

## New default value for selection in igPieChart
Feature | Description | Status
---|---|---
The pie chart default selection is now single select.|With updates made to the selection feature of the pie chart, the default value has been updated.|![](images/No.png)


## Modularization

The following table lists the original files, and the smaller files that they are broken into.

Original File Name  | Broken into..
---                 | ---
infragistics.ext.js | infragistics.ext_core.js <br><br> infragistics.ext_collections.js <br>      depends on infragistics.ext_core.js <br> <br> infragistics.ext_collectionsextended.js <br> depends on infragistics.ext_core.js <br> depends on infragistics.ext_collections.js <br><br> infragistics.ext_text.js <br> depends on infragistics.ext_core.js <br><br> infragistics.ext_io.js <br> depends on infragistics.ext_core.js <br> depends on infragistics.ext_text.js <br><br> infragistics.ext_threading.js <br> depends on infragistics.ext_core.js <br><br> infragistics.ext_ui.js <br> depends on infragistics.ext_core.js depends on infragistics.ext_collections.js <br><br> infragistics.ext_web.js <br>depends on infragistics.ext_core.js <br>depends on infragistics.ext_collections.js <br>depends on infragistics.ext_text.js <br>depends on infragistics.ext_io.js <br>depends on infragistics.ext_threading.js <br><br>_Recommended order for combined file:_ <br> _infragistics.ext_core.js_ <br>_infragistics.ext_collections.js_<br>_infragistics.ext_collectionsextended.js_<br> _infragistics.ext_text.js_<br>_infragistics.ext_io.js_<br>_infragistics.ext_threading.js_ <br>_infragiatics.ext_ui.js_ <br>_infragistics.ext_web.js_
infragistics.dv.shared.js|infragistics.dv_core.js <br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br><br>infragistics.dv_geo.js <br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_text.js<br>depends on infragistics.ext_io.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br><br>infragistics.dv_geometry.js<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.dv_core.js<br><br>infragistics.dv_opd.js<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.dv_core.js<br><br>_Recommended order for the combined file:_<br> _infragistics.dv_core.js_<br>_infragistics.dv_geometry.js_<br>_infragistics.dv_geo.js_ <br>_infragistics.dv_opd.js_
infragistics.datachart.js| infragistics.legend.js  (required to display a legend) <br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br> depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js <br><br>infragistics.datachart_core.js<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br><br>infragistics.datachart_categorycore.js<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br><br> infragistics.datachart_category.js (required to display category series. E.g. line, area, etc)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br><br>infragistics.datachart_rangecategory.js (required to display range category series. E.g. rangeArea, rangeColumn)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br><br>infragistics.datachart_verticalcategory.js (required to display bar series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br><br>infragistics.datachart_financial.js (required to display financial series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br><br>infragistics.datachart_extendedfinancial.js (required to display financial overlays or indicators)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categoryCore.js<br>depends on infragistics.datachart_financial.js<br>infragistics.datachart_extendedaxes.js<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br><br>infragistics.datachart_polar.js (required to display polar series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js <br>depends on infragistics.datachart_extendedaxes.js<br><br>infragistics.datachart_radial.js (required to display radial series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br>depends on infragistics.datachart_extendedaxes.js<br><br>infragistics.datachart_scatter.js (required to display scatter series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br><br>infragistics.datachart_stacked.js (required to display stacked series)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_categorycore.js<br>depends on infragistics.datachart_category.js<br><br>infragistics.piechart.js (required to display piechart)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br><br>infragistics.funnelchart.js (required to display funnel chart)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br><br>infragistics.doughnutchart.js (required to display doughnut chart) <br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.piechart.js<br><br>infragistics.datachart_annotation.js (required to display annotation layers e.g. itemTooltipLayer, categoryToolTipLayer)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.datachart_core.js<br><br>infragistics.geographicmap_core.js (required to display geographic map)<br>depends on infragistics.ext_core.js<br>depends on infragistics.ext_collections.js<br>depends on infragistics.ext_ui.js<br>depends on infragistics.ext_text.js<br>depends on infragistics.ext_io.js<br>depends on infragistics.ext_web.js<br>depends on infragistics.dv_core.js<br>depends on infragistics.dv_geometry.js<br>depends on infragistics.dv_geo.js<br>depends on infragistics.datachart_core.js<br>depends on infragistics.datachart_scatter.js<br><br>_Recommended order for combined file:_ <br>infragistics.legend.js<br>infragistics.datachart_core.js<br>infragistics.extendedaxes.js<br>infragistics.datachart_categorycore.js<br>infragistics.datachart_category.js<br>infragistics.datachart_verticalcategory.js<br>infragistics.datachart_rangecategory.js<br>infragistics.datachart_financial.js<br>infragistics.datachart_extendedfinancial.js<br>infragistics.datachart_scatter.js<br>infragistics.datachart_polar.js<br>infragistics.datachart_radial.js<br>infragistics.datachart_stacked.js<br>infragistics.datachart_annotation.js<br>infragistics.piechart.js<br>infragistics.dougnutchart.js<br>infragistics.funnelchart.js<br>infragistics.geographicmap.js         



## Redesigned Chart Defaults
The chart defaults were redesigned in this release.

Element | CSS Property | Previous | Now
---|---|---|---
Chart axis | background | #d6d6d6 |#d0d0d0
Chart axis|border-color|#d6d6d6|#d0d0d0
Sparkline negatives park path|background|#F44336|#C62828
 Sparkline trendline|background|#E68A24 |#7f7f7f
Sparkline first marker |background | #237FA7 |#2E9CA6
 Sparkline last marker| background|#FBC139 |#FF9800
Sparkline low marker |background | #AF39FF|#7446B9
Sparkline high marker |background | #A3B929|#9FB328
 Sparkline negative markers|background |#F44336 |#C62828
Sparkline axis x |border | #989EA3|#666
Sparkline axis y |border |#989EA3 |#666
Sparkline axis x |text-transform | Lowercase	|Uppercase	
Sparkline axis y |text-transform | Lowercase	|Uppercase	
Sparkline axis x |color|#406090 |#777
Sparkline axis y |color |#406090 |#777
Sparkline tooltip |box-shadow |0 0 2px #555555	 |0 0 2px rgba(0,0,0,0.6)	
Sparkline tooltip |box-shadow | 3px 3px 5px rgba(0, 0, 0, 0.25) !important	|box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);	
Sparkline tooltip |box-shadow |0 0 2px #555555 |0 0 2px rgba(0,0,0,0.6)	
Sparkline tooltip |box-shadow |3px 3px 5px rgba(0, 0, 0, 0.25)| box-shadow: 0 0 2px rgba(0, 0, 0, 0.6)
Sparkline tooltip|	padding	|3px	|	5px 8px	
Sparkline tooltip|	font-size|		|	12px	
Sparkline tooltip|	font-family	|		|"Segoe UI", Arial, sans-serif		
Sparkline tooltip |	background-color |	#ffffff	|	rgba(255,255,255 .95)
Sparkline sparkpath |	background |	#43ABD5	|	#439C47	
Sparkline negativesparkpath	| background |	#B9242E	|	#C62828	
RadialGauge Chart needle|	background-color|	#888888	|	#9a9a9a	
RadialGauge Chart label	| background-color|	#333	|	#666	
RadialGauge Chart range-palette-1 |	background-color |	#71b1c1	|	#439c47	
RadialGauge Chart range-palette-2 |	background-color |	#408090	|	#ff9800	
RadialGauge Chart range-palette-3 |	background-color |	#307080	|	#c62828	
RadialGauge Chart range-palette-4 |	background-color |	#206070	|	#f96232	
RadialGauge Chart range-palette-5 |	background-color |	#105060	 |	#9fb328
RadialGauge Chart range-palette-6 |	background-color |	#014151	|	#7446b9	
RadialGauge Chart |	font-size |	16px |		12px
Bulletgraph label |	background-color |	#333 |		#666		
Bulletgraph range palette 1	| background-color	| #14151	|	#439c47	
Bulletgraph range palette 2	| background-color	| #206070	|	#ff9800	
Bulletgraph range palette 3 | background-color	| #408090	|	#c62828	
Bulletgraph range palette 4	 | background-color	|#71b1c1|		#3f51b5	
Bulletgraph range palette 5	| background-color |	#a2e2f2	 |	#795548
ig charts axis labels |	font-family	 | Verdana, Arial, Helvetica, sans-serif; |"Segoe UI",Arial,sans-serif;															
ig charts tooltip |	box-shadow |	0 0 2px #555555	 |	0 0 2px rgba(0,0,0,0.6)	
ig charts tooltip |	font-family	 | Verdana, Arial, Helvetica, sans-serif; |		"Segoe UI",Arial,sans-serif;					
ig charts tooltip	| background-color	| rgba(255, 255, 255, 0.85)	|	rgba(255, 255, 255, 0.95)							
ig charts tooltip|	border		|	| 1px solid #888	
ig charts title	| color	| #696969	|	#666	
ig charts subtitle |	color |	#696969	|	#666	
ig charts horizontal-axis-title | color	| #696969|		#666
ig charts vertical-axis-title |	color |	#696969	|	#666	
ig charts horizontal-axis-labels |	color |	#9B9B9B	|	#777	
ig charts vertical-axis-labels |	color|	#9B9B9B	 |	#777	
ig charts angular-axis-labels |	color|	#9B9B9B	|	#777
ig charts radial-axis-labels|	color|	#9B9B9B	|	#777	
chartPalette1|	background-color|	#77B5C5	|	#7446B9		
chartPalette1|	border|	#3d7d8d	|	#ffffff	
chartPalette2|	background-color|	#C0C0C0	|	#9FB328
chartPalette2|	border|	#8f8f8f	|	#ffffff	
chartPalette3|	background-color|	#81AE7A	|	#F96232	
chartPalette3|	border|	#608f58	|	#ffffff	
chartPalette4|	background-color|	#FAA958	|	#2E9CA6		
chartPalette4|	border|	#f77e11	|	#ffffff		
chartPalette5|	background-color|	#A77DBF	|	#DC3F76		
chartPalette5|	border|	#7d58a2	|	#ffffff		
chartPalette6|	background-color|	#FF7968	|	#FF9800	
chartPalette6|	border|	#de604e	|	#ffffff	
chartPalette7|	background-color|	#a5c047	|	#3F51B5	
chartPalette7|	border|	#7d9432	|	#ffffff	
chartPalette8|	background-color|	#729dc9	|	#439C47	
chartPalette8|	border|	#507bab	|	#ffffff		
chartPalette9|	background-color|	#f1bd5c	|	#795548	
chartPalette9|	border|	#de9712	|	#ffffff		
chartPalette10|	background-color|	#65ab88	|	#9A9A9A	
chartPalette10|	border|	#447b60	|	#ffffff	
chartPalette11|	background-color|	#7e7bc1	|	#C62828	
chartPalette11|	border|	#545794	|	#ffffff		
ui-chart-legend	|border|	1px solid #bcbcbc	|	none	
ui-chart-piechart-container	|border	1px solid #bcbcbc|		none	
Funnel chart|	font-size|	14px	|	12px
Funnel chart|	color|	#555555	|	#666	
Funnel chart Tooltip|	box-shadow	|3px 3px 5px rgba(0, 0, 0, 0.25)|0 0 2px rgba(0, 0, 0, 0.6);																						Funnel chart Tootip|	|	#ffffff	|	rgba(255,255,255 .95)
Funnel chart Tootip|	padding	|3px		|5px 8px
Doughnut Chart|	color	|	|	#fff
ui chart outerlabels|	color	|	|	#666	
ui chart innerlabels|	color	|	|	#fff	
Doughnut Tooltip|	padding	|3px	|	5px 8px																						

## igChartLegend, igOPDPane now have to be explicitly requested if using the loader
The legend used to be a dependency of the chart in the old module structure. 
With the new structure of modules the legend has to be explicitly loaded as a module if it is used in any of the charts on the page. 

**In Javascript:**

```js
$.ig.loader({ 
   scriptPath: "/ig_ui/js/", 
   cssPath: "/ig_ui/css/", 
   resources: "igChartLegend,igPieChart" 
}); 
```


## Bar Series requires VerticalCateogry module is using the loader
The bar series and associated axes used to be integrated into the chart in the old module structure. 
With the new structure of modules the bar series and associated axes have to be explicitly loaded as a module if it is used in any of the charts or maps on the page. 

**In Javascript:**

```js
$.ig.loader({ 
   scriptPath: "/ig_ui/js/", 
   cssPath: "/ig_ui/css/", 
   resources: "igDataChart.Category.VerticalCategory" 
}); 
```

## New default value for selection in igPieChart
The new default selection value for the Pie Chart control is now SingleSelect. 

In order for developers to retain their existing pie chart selection logic without interfering with the new selection feature, they will need to change the sliceSelectionMode option to “Manual”.