<!--
|metadata|
{
    "fileName": "breaking-changes-2017-volume-2",
    "controlName": "",
    "tags": ["Breaking Changes"]
}
|metadata|
-->

# Breaking Changes 2017 Volume 2

The following topic summarizes the breaking changes of the 2017 Volume 2 release.

## igDataChart

- Changed the default value of the `windowResponse` option from deferred to immediate.  This means that panning and zooming actions will happen immediately as the user moves the pointer position during these actions.  The previous deferred behavior would wait until the user finished the movement before refreshing the view.

## Data Visualization dependencies

Some optional functionality was modularized and their files were reorganized as below:

- `infragistics.barcode_core.js` is a new dependency for the igQRCodeBarcode.  

- `infragistics.ui.barcode.js` has been renamed to "_infragistics.ui.qrcodebarcode.js_", please update your references.

- `infragistics.chart_sparkline.js` has been renamed to "_infragistics.sparkline.js_", please update your references.

- `infragistics.dv.simple.core.js` has been removed, it should no longer be referenced.  

- `infragistics.olap.js` is a new requirement for the igOlapFlatDataSource and igOlapXmlaDataSource.  

- `infragistics.radialmenu_core.js` has been removed, it should no longer be referenced.  

- `infragistics.dv_interactivity.js` provides support for user interaction such as panning, zooming, dragging, etc. This has been added as a **required** dependency for the following controls:
 - igPieChart
 - igFunnelChart
 - igSparkline
 - igRadialGauge
 - igLinearGauge
 - igBulletGraph
 - igRadialMenu
 - igSpreadsheet
 - igScheduler

- `infragistics.datachart_interactivity.js` provides support for user interaction such as tooltips, panning, zooming, dragging, etc. This has been added as an **optional** dependency for the following controls, and should be referenced in conjunction with infragistics.dv_interactivity.js:  
 - igDataChart
 - igCategoryChart
 - igShapeChart
 - igMap

- `infragistics.dv_visualdata.js` enables visual data exporting for automated testing. This has been added as an **optional** dependency for the following controls:
 - igDataChart
 - igCategoryChart
 - igShapeChart
 - igMap
 
- `infragistics.datachart_visualdata.js` enables visual data exporting for automated testing for the charts. This has been added as an **optional** dependency for the following controls, and should be referenced in conjunction with infragistics.dv_visualdata.js:
 - igDataChart
 - igCategoryChart
 - igShapeChart
 - igMap

## Data Visualization Dependency Comparisons

### igQRCodeBarcode
| 17.1 Dependencies  | 17.2 Dependencies |
| ------------------ |:------------------|
|infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.dv.simple.core.js<br/> infragistics.ext_core.js<br/> infragistics.ext_collections.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.barcode_qrcodebarcode.js<br/> infragistics.ui.barcode.js<br/> infragistics.encoding.js | infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.ui.widget.js<br/> infragistics.ext_core.js<br/> infragistics.ext_text.js<br/> infragistics.ext_collections.js<br/> encoding/infragistics.encoding.core.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.ext_collectionsextended.js<br/> infragistics.barcode_core.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.barcode_qrcodebarcode.js<br/> infragistics.ui.qrcodebarcode.js |

### igSparkline

| 17.1 Dependencies  | 17.2 Dependencies |
| ------------------ |:------------------|
|infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.ext_core.js<br/> infragistics.ext_collections.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.dv_geometry.js<br/> infragistics.dv.simple.core.js<br/> infragistics.templating.js<br/> infragistics.datasource.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.ui.basechart.js<br/> infragistics.chart_sparkline.js<br/> infragistics.ui.sparkline.js | infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.templating.js<br/> infragistics.datasource.js<br/> infragistics.ext_core.js<br/> infragistics.ext_collections.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.ui.basechart.js<br/> infragistics.dv_geometry.js<br/> infragistics.dv_interactivity.js<br/> infragistics.ui.widget.js<br/> infragistics.sparkline.js<br/> infragistics.ui.sparkline.js |

### igRadialMenu
| 17.1 Dependencies  | 17.2 Dependencies |
| ------------------ |:------------------|
|infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.ext_core.js<br/> infragistics.ext_collections.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.radialmenu_core.js<br/> infragistics.ui.radialmenu.js | infragistics.util.js<br/> infragistics.util.jquery.js<br/> infragistics.util.jquerydeferred.js<br/> infragistics.ext_core.js<br/> infragistics.ext_collections.js<br/> infragistics.ext_collectionsextended.js<br/> infragistics.ext_ui.js<br/> infragistics.dv_core.js<br/> infragistics.dv_interactivity.js<br/> infragistics.dv_jquerydom.js<br/> infragistics.ui.widget.js<br/> infragistics.radialmenu.js<br/> infragistics.ui.radialmenu.js |


## igGrid

### Cell Merging changes

The igGrid Cell Merging feature now supports physical cell merging.

Now with physical cell merging being supported, cells can actually be merged the way cells would be merged inside HTML Table using 'rowspan'. That way the cells that should be actually merged are not visible and only one merged cell is rendered. The old behavior of cell merging is still supported and is referred to visual cell merging. The difference compared to the physical cell merging is that here for displaying merged cells are used CSS styles, instead of rowspan. 

The physical cell merging is not supported in combination with the Responsive vertical rendering and single column template:

In response to that, the following options were removed/added:

| Option Name | Description | Default value | State |
|-------------|-------------|---------------|-------|
|[*initialState*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:initialState) | Controls the initial state. | "regular" | <span style="color:red">Removed</span>|
|[*mergeType*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeType) | Defines the type of merging. | "visual" | <span style="color:green">New</span>|
|[*mergeOn*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeOn) | Defines when merging should be applied. | "sorting" | <span style="color:green">New</span>|
|[*mergeStrategy*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeStrategy) | Defines the rules merging is based on. | "duplicate" | <span style="color:green">New</span>|
|[*columnSettings*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:columnSettings) | A list of column settings that specifies hiding options on a per column basis. | [ ] | <span style="color:green">New</span>|


In addition to the option changes above, the igGrid Cell Merging MVC wrapper options are also updated. The following types were removed/added:

| Type Name | Description | State |
|-------------|-------------|---------------|-------|
|CellMergingInitialState | Type used to specify the Initial State option. | <span style="color:red">Removed</span>|
|CellMergingMergeOn | Type used to specify when merging should be applied | <span style="color:green">New</span>|
|CellMergingMergeStrategy | Type used to sepcify merging strategy |<span style="color:green">New</span>|
| CellMergingMergeType | Type used to specify type of merging | <span style="color:green">New</span> | 
  infragistics.datachart_visualdata.js

## igGrid Locale Changes
The behavior of the locale specific options in igGrid and its features is changed. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.iggrid#options:locale) option.

### Options changes in igGrid Summaries

Previous option | New option 
----------------|-----------
dialogButtonOKText |  [locale.dialogButtonOKText](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.dialogButtonOKText)
dialogButtonCancelText | [locale.featureChooserText](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.featureChooserText)
featureChooserText | [locale.featureChooserText](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.featureChooserText)
featureChooserTextHide | [locale.featureChooserTextHide](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.featureChooserTextHide)
emptyCellText | [locale.emptyCellText](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.emptyCellText)
summariesHeaderButtonTooltip | [locale.summariesHeaderButtonTooltip](%%jQueryApiUrl%%/ui.iggridsummaries#options:locale.summariesHeaderButtonTooltip)

### Options changes in igGrid Paging

Previous option | New option 
----------------|-----------
pageSizeDropDownLabel | [locale.pageSizeDropDownLabel](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pageSizeDropDownLabel)
pageSizeDropDownTrailingLabel | [locale.pageSizeDropDownTrailingLabel](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pageSizeDropDownTrailingLabel)
pagerRecordsLabelTemplate | [locale.pagerRecordsLabelTemplate](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pagerRecordsLabelTemplate)
nextPageLabelText | [locale.nextPageLabelText](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.nextPageLabelText)
firstPageLabelText | [locale.firstPageLabelText](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.firstPageLabelText)
lastPageLabelText | [locale.lastPageLabelText](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.lastPageLabelText)
currentPageDropDownLeadingLabel | [locale.currentPageDropDownLeadingLabel](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.currentPageDropDownLeadingLabel)
currentPageDropDownTrailingLabel | [locale.currentPageDropDownTrailingLabel](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.currentPageDropDownTrailingLabel)
currentPageDropDownTooltip | [locale.currentPageDropDownTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.currentPageDropDownTooltip)
pageSizeDropDownTooltip | [locale.pageSizeDropDownTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pageSizeDropDownTooltip)
pagerRecordsLabelTooltip | [locale.pagerRecordsLabelTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pagerRecordsLabelTooltip)
prevPageTooltip | [locale.prevPageTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.prevPageTooltip)
nextPageTooltip | [locale.nextPageTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.nextPageTooltip)
firstPageTooltip | [locale.firstPageTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.firstPageTooltip)
lastPageTooltip | [locale.lastPageTooltip](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.lastPageTooltip)
pageTooltipFormat | [locale.pageTooltipFormat](%%jQueryApiUrl%%/ui.iggridpaging#options:locale.pageTooltipFormat)

### Options changes in igGrid Sorting
Previous option | New option 
----------------|-----------
modalDialogSortByButtonText  | [locale.modalDialogSortByButtonText](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogSortByButtonText)
modalDialogResetButtonLabel | [locale.modalDialogResetButton](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogResetButton)
modalDialogCaptionButtonDesc | [locale.modalDialogCaptionButtonDesc](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogCaptionButtonDesc)
modalDialogCaptionButtonAsc | [locale.modalDialogCaptionButtonUnsort](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogCaptionButtonUnsort)
featureChooserText | [locale.featureChooserText](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.featureChooserText)
unsortedColumnTooltip  | [locale.unsortedColumnTooltip](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.unsortedColumnTooltip)
modalDialogCaptionText | [locale.modalDialogButtonApplyText](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogButtonApplyText)
modalDialogButtonCancelText | [locale.modalDialogButtonCancelText](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.modalDialogButtonCancelText)
featureChooserSortAsc | [locale.featureChooserSortAsc](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.featureChooserSortAsc)
featureChooserSortDesc | [locale.featureChooserSortDesc](%%jQueryApiUrl%%/ui.iggridsorting#options:locale.featureChooserSortDesc)

### Options changes in igGrid Column Moving
Previous option | New option 
----------------|-----------
movingDialogCaptionButtonDesc | [locale.movingDialogCaptionButtonAsc](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingDialogCaptionButtonAsc)
movingDialogCaptionButtonAsc | [locale.movingDialogCaptionButtonAsc](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingDialogCaptionButtonAsc)
movingDialogCaptionText | [locale.movingDialogCaptionText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingDialogCaptionText)
movingDialogDisplayText | [locale.movingDialogDisplayText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingDialogDisplayText)
movingDialogDropTooltipText | [locale.movingDialogDropTooltipText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingDialogDropTooltipText)
dropDownMoveLeftText | [locale.dropDownMoveLeftText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.dropDownMoveLeftText)
dropDownMoveRightText | [locale.dropDownMoveRightText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.dropDownMoveRightText)
dropDownMoveFirstText | [locale.dropDownMoveFirstText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.dropDownMoveFirstText)
dropDownMoveLastText | [locale.dropDownMoveLastText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.dropDownMoveLastText)
movingToolTipMove | [locale.movingToolTipMove](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.movingToolTipMove)
featureChooserSubmenuText | [locale.featureChooserSubmenuText](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:locale.featureChooserSubmenuText)

### Options changes in igGrid Filtering
Previous option | New option 
----------------|-----------
filterSummaryTemplate | [locale.filterSummaryTemplate](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale.filterSummaryTemplate)
tooltipTemplate | [locale.tooltipTemplate](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale.tooltipTemplate)
featureChooserText | [locale.featureChooserText](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale.featureChooserText)
featureChooserTextHide | [locale.featureChooserTextHide](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale.featureChooserTextHide)
featureChooserTextAdvancedFilter | [locale.featureChooserTextAdvancedFilter](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale.featureChooserTextAdvancedFilter)
nullTexts | Setting null texts is now achieved via [locale](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale) option
labels | Setting labels is now achieved via [locale](%%jQueryApiUrl%%/ui.iggridfiltering#options:locale) option

### Options changes in igGrid GroupBy
Previous option | New option 
----------------|-----------
expandTooltip | [locale.expandTooltip](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.expandTooltip)
collapseTooltip | [locale.collapseTooltip](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.collapseTooltip)
removeButtonTooltip | [locale.removeButtonTooltip](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.removeButtonTooltip)
modalDialogGroupByButtonText | [locale.modalDialogGroupByButtonText](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogGroupByButtonText)
modalDialogCaptionButtonDesc | [locale.modalDialogCaptionButtonDesc](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogCaptionButtonDesc)
modalDialogCaptionButtonAsc | [locale.modalDialogCaptionButtonAsc](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogCaptionButtonAsc)
modalDialogCaptionButtonUngroup | [locale.modalDialogCaptionButtonUngroup](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogCaptionButtonUngroup)
modalDialogCaptionText | [locale.modalDialogCaptionText](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogCaptionText)
modalDialogDropDownLabel | [locale.modalDialogDropDownLabel](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogDropDownLabel)
modalDialogRootLevelHierarchicalGrid | [locale.modalDialogRootLevelHierarchicalGrid](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogRootLevelHierarchicalGrid)
modalDialogDropDownButtonCaption | [locale.modalDialogDropDownButtonCaption](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogDropDownButtonCaption)
modalDialogClearAllButtonLabel | [locale.modalDialogClearAllButtonLabel](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogClearAllButtonLabel)
emptyGroupByAreaContentSelectColumnsCaption | [locale.emptyGroupByAreaContentSelectColumnsCaption](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.emptyGroupByAreaContentSelectColumnsCaption)
modalDialogButtonApplyText | [locale.modalDialogButtonApplyText](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogButtonApplyText)
modalDialogButtonCancelText | [locale.modalDialogButtonCancelText](%%jQueryApiUrl%%/ui.iggridgroupby#options:locale.modalDialogButtonCancelText)

### Options changes in igGrid Hiding
Previous option | New option 
----------------|-----------
columnChooserCaptionText | [locale.columnChooserCaptionText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserCaptionText)
columnChooserDisplayText | [locale.columnChooserDisplayText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserDisplayText)
hiddenColumnIndicatorTooltipText | [locale.hiddenColumnIndicatorTooltipText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.hiddenColumnIndicatorTooltipText)
columnHideText | [locale.columnHideText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnHideText)
columnChooserShowText | [locale.columnChooserShowText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserShowText)
columnChooserHideText | [locale.columnChooserHideText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserHideText)
columnChooserResetButtonLabel | [locale.columnChooserResetButtonLabel](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserResetButtonLabel)
columnChooserButtonApplyText | [locale.columnChooserButtonApplyText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserButtonApplyText)
columnChooserButtonCancelText | [locale.columnChooserButtonCancelText](%%jQueryApiUrl%%/ui.iggridhiding#options:locale.columnChooserButtonCancelText)

### Options changes in igGrid Updating
Previous option | New option 
----------------|-----------
doneLabel | [locale.doneLabel](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.doneLabel)
doneTooltip | [locale.doneTooltip](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.doneTooltip)
cancelLabel | [locale.cancelLabel](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.cancelLabel)
cancelTooltip | [locale.cancelTooltip](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.cancelTooltip)
addRowLabel | [locale.addRowLabel](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.addRowLabel)
addRowTooltip | [locale.addRowTooltip](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.addRowTooltip)
deleteRowLabel | [locale.deleteRowLabel](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.deleteRowLabel)
deleteRowTooltip | [locale.deleteRowTooltip](%%jQueryApiUrl%%/ui.iggridupdating#options:locale.deleteRowTooltip)

### Options changes in igGrid Append Rows On Demand
Previous option | New option 
----------------|-----------
loadMoreDataButtonText | [locale.loadMoreDataButtonText](%%jQueryApiUrl%%/ui.iggridappendrowsondemand#options:locale.loadMoreDataButtonText)

### Options changes in igGrid Column Fixing
Previous option | New option 
----------------|-----------
headerFixButtonText | [locale.headerFixButtonText](%%jQueryApiUrl%%/ui.iggridcolumnfixing#options:locale.headerFixButtonText)
headerUnfixButtonText | [locale.headerUnfixButtonText](%%jQueryApiUrl%%/ui.iggridcolumnfixing#options:locale.headerUnfixButtonText)
featureChooserTextFixedColumn | [locale.featureChooserTextFixedColumn](%%jQueryApiUrl%%/ui.iggridcolumnfixing#options:locale.featureChooserTextFixedColumn)
featureChooserTextUnfixedColumn | [locale.featureChooserTextUnfixedColumn](%%jQueryApiUrl%%/ui.iggridcolumnfixing#options:locale.featureChooserTextUnfixedColumn)



## igHierarchicalGrid

Options changes in igHierarchicalGrid

Previous option | New option 
----------------|-----------
expandTooltip | [locale.columnChooserCaptionText](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options:locale.expandTooltip)
collapseTooltip | [locale.collapseTooltip](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options:locale.collapseTooltip)


## igTreeGrid

Options changes in igTreeGrid

Previous option | New option 
----------------|-----------
expandTooltipText | [locale.expandTooltipText](%%jQueryApiUrl%%/ui.igtreegrid#options:locale.expandTooltipText)
collapseTooltipText | [locale.collapseTooltipText](%%jQueryApiUrl%%/ui.igtreegrid#options:locale.collapseTooltipText)

### Options changes in igTreeGrid Filtering
Previous option | New option 
----------------|-----------
filterSummaryInPagerTemplate | [locale.collapseTooltipText](%%jQueryApiUrl%%/ui.igtreegrid#options:locale.collapseTooltipText)

### Options changes in igTreeGrid Updating
Previous option | New option 
----------------|-----------
addChildTooltip | [locale.enableAddChild](%%jQueryApiUrl%%/ui.igtreegrid#options:locale.enableAddChild)
addChildButtonLabel | [locale.addChildButtonLabel](%%jQueryApiUrl%%/ui.igtreegrid#options:locale.addChildButtonLabel)

## igDialog
The behavior of the locale specific options in igDialog is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igdialog#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
closeButtonTitle |  [locale.closeButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.closeButtonTitle)
minimizeButtonTitle | [locale.minimizeButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.minimizeButtonTitle)
maximizeButtonTitle | [locale.minimizeButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.minimizeButtonTitle)
pinButtonTitle | [locale.pinButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.pinButtonTitle)
unpinButtonTitle | [locale.unpinButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.unpinButtonTitle)
restoreButtonTitle | [locale.restoreButtonTitle](%%jQueryApiUrl%%/ui.igdialog#options:locale.restoreButtonTitle)

## igCombo
The behavior of the locale specific options in igCombo is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igcombo#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
noMatchFoundText |  [locale.noMatchFoundText](%%jQueryApiUrl%%/ui.igcombo#options:locale.noMatchFoundText)
dropDownButtonTitle | [locale.dropDownButtonTitle](%%jQueryApiUrl%%/ui.igcombo#options:locale.dropDownButtonTitle)
clearButtonTitle | [locale.clearButtonTitle](%%jQueryApiUrl%%/ui.igcombo#options:locale.clearButtonTitle)
placeHolder | [locale.placeHolder](%%jQueryApiUrl%%/ui.igcombo#options:locale.placeHolder)

## igUpload
The behavior of the locale specific options in igUpload is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igupload#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
labelUploadButton |  [locale.labelUploadButton](%%jQueryApiUrl%%/ui.igupload#options:locale.labelUploadButton)
labelAddButton | [locale.labelAddButton](%%jQueryApiUrl%%/ui.igupload#options:locale.labelAddButton)
labelClearAllButton | [locale.labelClearAllButton](%%jQueryApiUrl%%/ui.igupload#options:locale.labelClearAllButton)
labelSummaryTemplate | [locale.labelSummaryTemplate](%%jQueryApiUrl%%/ui.igupload#options:locale.labelSummaryTemplate)
labelSummaryProgressBarTemplate | [locale.labelSummaryProgressBarTemplate](%%jQueryApiUrl%%/ui.igupload#options:locale.labelSummaryProgressBarTemplate)
labelShowDetails | [locale.labelShowDetails](%%jQueryApiUrl%%/ui.igupload#options:locale.labelShowDetails)
labelHideDetails | [locale.labelHideDetails](%%jQueryApiUrl%%/ui.igupload#options:locale.labelHideDetails)
labelSummaryProgressButtonCancel | [locale.labelSummaryProgressButtonCancel](%%jQueryApiUrl%%/ui.igupload#options:locale.labelSummaryProgressButtonCancel)
labelSummaryProgressButtonContinue | [locale.labelSummaryProgressButtonContinue](%%jQueryApiUrl%%/ui.igupload#options:locale.labelSummaryProgressButtonContinue)
labelSummaryProgressButtonDone | [locale.labelSummaryProgressButtonDone](%%jQueryApiUrl%%/ui.igupload#options:locale.labelSummaryProgressButtonDone)
labelProgressBarFileNameContinue | [locale.labelProgressBarFileNameContinue](%%jQueryApiUrl%%/ui.igupload#options:locale.labelProgressBarFileNameContinue)
errorMessageMaxFileSizeExceeded | [locale.errorMessageMaxFileSizeExceeded](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageMaxFileSizeExceeded)
errorMessageGetFileStatus | [locale.errorMessageGetFileStatus](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageGetFileStatus)
errorMessageCancelUpload | [locale.errorMessageCancelUpload](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageCancelUpload)
errorMessageNoSuchFile | [locale.errorMessageNoSuchFile](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageNoSuchFile)
errorMessageOther | [locale.errorMessageOther](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageOther)
errorMessageValidatingFileExtension | [locale.errorMessageValidatingFileExtension](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageValidatingFileExtension)
errorMessageAJAXRequestFileSize | [locale.errorMessageAJAXRequestFileSize](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageAJAXRequestFileSize)
errorMessageTryToRemoveNonExistingFile | [locale.errorMessageTryToRemoveNonExistingFile](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageTryToRemoveNonExistingFile)
errorMessageTryToStartNonExistingFile | [locale.errorMessageTryToStartNonExistingFile](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageTryToStartNonExistingFile)
errorMessageMaxUploadedFiles | [locale.errorMessageMaxUploadedFiles](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageMaxUploadedFiles)
errorMessageMaxSimultaneousFiles | [locale.errorMessageMaxSimultaneousFiles](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageMaxSimultaneousFiles)
errorMessageDropMultipleFilesWhenSingleModel | [locale.errorMessageDropMultipleFilesWhenSingleModel](%%jQueryApiUrl%%/ui.igupload#options:locale.errorMessageDropMultipleFilesWhenSingleModel)