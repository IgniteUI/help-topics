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

## igGrid
The behavior of the locale specific options in igGrid and its features is changed. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.iggrid#options:locale) option.

### Options changes in igGrid Summaries

Previous option | New option 
----------------|-----------
dialogButtonOKText |  [locale.dialogButtonOKText](ui.iggridsummaries#options:locale.dialogButtonOKText)
dialogButtonCancelText | [locale.featureChooserText](ui.iggridsummaries#options:locale.featureChooserText)
featureChooserText | [locale.featureChooserText](ui.iggridsummaries#options:locale.featureChooserText)
featureChooserTextHide | [locale.featureChooserTextHide](ui.iggridsummaries#options:locale.featureChooserTextHide)
emptyCellText | [locale.emptyCellText](ui.iggridsummaries#options:locale.emptyCellText)
summariesHeaderButtonTooltip | [locale.summariesHeaderButtonTooltip](ui.iggridsummaries#options:locale.summariesHeaderButtonTooltip)

### Options changes in igGrid Paging

Previous option | New option 
----------------|-----------
pageSizeDropDownLabel | [locale.pageSizeDropDownLabel](ui.iggridpaging#options:locale.pageSizeDropDownLabel)
pageSizeDropDownTrailingLabel | [locale.pageSizeDropDownTrailingLabel](ui.iggridpaging#options:locale.pageSizeDropDownTrailingLabel)
pagerRecordsLabelTemplate | [locale.pagerRecordsLabelTemplate](ui.iggridpaging#options:locale.pagerRecordsLabelTemplate)
nextPageLabelText | [locale.nextPageLabelText](ui.iggridpaging#options:locale.nextPageLabelText)
firstPageLabelText | [locale.firstPageLabelText](ui.iggridpaging#options:locale.firstPageLabelText)
lastPageLabelText | [locale.lastPageLabelText](ui.iggridpaging#options:locale.lastPageLabelText)
currentPageDropDownLeadingLabel | [locale.currentPageDropDownLeadingLabel](ui.iggridpaging#options:locale.currentPageDropDownLeadingLabel)
currentPageDropDownTrailingLabel | [locale.currentPageDropDownTrailingLabel](ui.iggridpaging#options:locale.currentPageDropDownTrailingLabel)
currentPageDropDownTooltip | [locale.currentPageDropDownTooltip](ui.iggridpaging#options:locale.currentPageDropDownTooltip)
pageSizeDropDownTooltip | [locale.pageSizeDropDownTooltip](ui.iggridpaging#options:locale.pageSizeDropDownTooltip)
pagerRecordsLabelTooltip | [locale.pagerRecordsLabelTooltip](ui.iggridpaging#options:locale.pagerRecordsLabelTooltip)
prevPageTooltip | [locale.prevPageTooltip](ui.iggridpaging#options:locale.prevPageTooltip)
nextPageTooltip | [locale.nextPageTooltip](ui.iggridpaging#options:locale.nextPageTooltip)
firstPageTooltip | [locale.firstPageTooltip](ui.iggridpaging#options:locale.firstPageTooltip)
lastPageTooltip | [locale.lastPageTooltip](ui.iggridpaging#options:locale.lastPageTooltip)
pageTooltipFormat | [locale.pageTooltipFormat](ui.iggridpaging#options:locale.pageTooltipFormat)

### Options changes in igGrid Sorting
Previous option | New option 
----------------|-----------
modalDialogSortByButtonText  | [locale.modalDialogSortByButtonText](ui.iggridsorting#options:locale.modalDialogSortByButtonText)
modalDialogResetButtonLabel | [locale.modalDialogResetButton](ui.iggridsorting#options:locale.modalDialogResetButton)
modalDialogCaptionButtonDesc | [locale.modalDialogCaptionButtonDesc](ui.iggridsorting#options:locale.modalDialogCaptionButtonDesc)
modalDialogCaptionButtonAsc | [locale.modalDialogCaptionButtonUnsort](ui.iggridsorting#options:locale.modalDialogCaptionButtonUnsort)
featureChooserText | [locale.featureChooserText](ui.iggridsorting#options:locale.featureChooserText)
unsortedColumnTooltip  | [locale.unsortedColumnTooltip](ui.iggridsorting#options:locale.unsortedColumnTooltip)
modalDialogCaptionText | [locale.modalDialogButtonApplyText](ui.iggridsorting#options:locale.modalDialogButtonApplyText)
modalDialogButtonCancelText | [locale.modalDialogButtonCancelText](ui.iggridsorting#options:locale.modalDialogButtonCancelText)
featureChooserSortAsc | [locale.featureChooserSortAsc](ui.iggridsorting#options:locale.featureChooserSortAsc)
featureChooserSortDesc | [locale.featureChooserSortDesc](ui.iggridsorting#options:locale.featureChooserSortDesc)

### Options changes in igGrid Column Moving
Previous option | New option 
----------------|-----------
movingDialogCaptionButtonDesc | [locale.movingDialogCaptionButtonAsc](ui.iggridcolumnmoving#options:locale.movingDialogCaptionButtonAsc)
movingDialogCaptionButtonAsc | [locale.movingDialogCaptionButtonAsc](ui.iggridcolumnmoving#options:locale.movingDialogCaptionButtonAsc)
movingDialogCaptionText | [locale.movingDialogCaptionText](ui.iggridcolumnmoving#options:locale.movingDialogCaptionText)
movingDialogDisplayText | [locale.movingDialogDisplayText](ui.iggridcolumnmoving#options:locale.movingDialogDisplayText)
movingDialogDropTooltipText | [locale.movingDialogDropTooltipText](ui.iggridcolumnmoving#options:locale.movingDialogDropTooltipText)
dropDownMoveLeftText | [locale.dropDownMoveLeftText](ui.iggridcolumnmoving#options:locale.dropDownMoveLeftText)
dropDownMoveRightText | [locale.dropDownMoveRightText](ui.iggridcolumnmoving#options:locale.dropDownMoveRightText)
dropDownMoveFirstText | [locale.dropDownMoveFirstText](ui.iggridcolumnmoving#options:locale.dropDownMoveFirstText)
dropDownMoveLastText | [locale.dropDownMoveLastText](ui.iggridcolumnmoving#options:locale.dropDownMoveLastText)
movingToolTipMove | [locale.movingToolTipMove](ui.iggridcolumnmoving#options:locale.movingToolTipMove)
featureChooserSubmenuText | [locale.featureChooserSubmenuText](ui.iggridcolumnmoving#options:locale.featureChooserSubmenuText)

### Options changes in igGrid Filtering
Previous option | New option 
----------------|-----------
filterSummaryTemplate | [locale.filterSummaryTemplate](ui.iggridfiltering#options:locale.filterSummaryTemplate)
tooltipTemplate | [locale.tooltipTemplate](ui.iggridfiltering#options:locale.tooltipTemplate)
featureChooserText | [locale.featureChooserText](ui.iggridfiltering#options:locale.featureChooserText)
featureChooserTextHide | [locale.featureChooserTextHide](ui.iggridfiltering#options:locale.featureChooserTextHide)
featureChooserTextAdvancedFilter | [locale.featureChooserTextAdvancedFilter](ui.iggridfiltering#options:locale.featureChooserTextAdvancedFilter)
nullTexts | Setting null texts is now achieved via [locale](ui.iggridfiltering#options:locale) option
labels | Setting labels is now achieved via [locale](ui.iggridfiltering#options:locale) option

### Options changes in igGrid GroupBy
Previous option | New option 
----------------|-----------
expandTooltip | [locale.expandTooltip](ui.iggridgroupby#options:locale.expandTooltip)
collapseTooltip | [locale.collapseTooltip](ui.iggridgroupby#options:locale.collapseTooltip)
removeButtonTooltip | [locale.removeButtonTooltip](ui.iggridgroupby#options:locale.removeButtonTooltip)
modalDialogGroupByButtonText | [locale.modalDialogGroupByButtonText](ui.iggridgroupby#options:locale.modalDialogGroupByButtonText)
modalDialogCaptionButtonDesc | [locale.modalDialogCaptionButtonDesc](ui.iggridgroupby#options:locale.modalDialogCaptionButtonDesc)
modalDialogCaptionButtonAsc | [locale.modalDialogCaptionButtonAsc](ui.iggridgroupby#options:locale.modalDialogCaptionButtonAsc)
modalDialogCaptionButtonUngroup | [locale.modalDialogCaptionButtonUngroup](ui.iggridgroupby#options:locale.modalDialogCaptionButtonUngroup)
modalDialogCaptionText | [locale.modalDialogCaptionText](ui.iggridgroupby#options:locale.modalDialogCaptionText)
modalDialogDropDownLabel | [locale.modalDialogDropDownLabel](ui.iggridgroupby#options:locale.modalDialogDropDownLabel)
modalDialogRootLevelHierarchicalGrid | [locale.modalDialogRootLevelHierarchicalGrid](ui.iggridgroupby#options:locale.modalDialogRootLevelHierarchicalGrid)
modalDialogDropDownButtonCaption | [locale.modalDialogDropDownButtonCaption](ui.iggridgroupby#options:locale.modalDialogDropDownButtonCaption)
modalDialogClearAllButtonLabel | [locale.modalDialogClearAllButtonLabel](ui.iggridgroupby#options:locale.modalDialogClearAllButtonLabel)
emptyGroupByAreaContentSelectColumnsCaption | [locale.emptyGroupByAreaContentSelectColumnsCaption](ui.iggridgroupby#options:locale.emptyGroupByAreaContentSelectColumnsCaption)
modalDialogButtonApplyText | [locale.modalDialogButtonApplyText](ui.iggridgroupby#options:locale.modalDialogButtonApplyText)
modalDialogButtonCancelText | [locale.modalDialogButtonCancelText](ui.iggridgroupby#options:locale.modalDialogButtonCancelText)

### Options changes in igGrid Hiding
Previous option | New option 
----------------|-----------
columnChooserCaptionText | [locale.columnChooserCaptionText](ui.iggridhiding#options:locale.columnChooserCaptionText)
columnChooserDisplayText | [locale.columnChooserDisplayText](ui.iggridhiding#options:locale.columnChooserDisplayText)
hiddenColumnIndicatorTooltipText | [locale.hiddenColumnIndicatorTooltipText](ui.iggridhiding#options:locale.hiddenColumnIndicatorTooltipText)
columnHideText | [locale.columnHideText](ui.iggridhiding#options:locale.columnHideText)
columnChooserShowText | [locale.columnChooserShowText](ui.iggridhiding#options:locale.columnChooserShowText)
columnChooserHideText | [locale.columnChooserHideText](ui.iggridhiding#options:locale.columnChooserHideText)
columnChooserResetButtonLabel | [locale.columnChooserResetButtonLabel](ui.iggridhiding#options:locale.columnChooserResetButtonLabel)
columnChooserButtonApplyText | [locale.columnChooserButtonApplyText](ui.iggridhiding#options:locale.columnChooserButtonApplyText)
columnChooserButtonCancelText | [locale.columnChooserButtonCancelText](ui.iggridhiding#options:locale.columnChooserButtonCancelText)

### Options changes in igGrid Updating
Previous option | New option 
----------------|-----------
doneLabel | [locale.doneLabel](ui.iggridupdating#options:locale.doneLabel)
doneTooltip | [locale.doneTooltip](ui.iggridupdating#options:locale.doneTooltip)
cancelLabel | [locale.cancelLabel](ui.iggridupdating#options:locale.cancelLabel)
cancelTooltip | [locale.cancelTooltip](ui.iggridupdating#options:locale.cancelTooltip)
addRowLabel | [locale.addRowLabel](ui.iggridupdating#options:locale.addRowLabel)
addRowTooltip | [locale.addRowTooltip](ui.iggridupdating#options:locale.addRowTooltip)
deleteRowLabel | [locale.deleteRowLabel](ui.iggridupdating#options:locale.deleteRowLabel)
deleteRowTooltip | [locale.deleteRowTooltip](ui.iggridupdating#options:locale.deleteRowTooltip)

### Options changes in igGrid Append Rows On Demand
Previous option | New option 
----------------|-----------
loadMoreDataButtonText | [locale.loadMoreDataButtonText](ui.iggridappendrowsondemand#options:locale.loadMoreDataButtonText)

### Options changes in igGrid Column Fixing
Previous option | New option 
----------------|-----------
headerFixButtonText | [locale.headerFixButtonText](ui.iggridcolumnfixing#options:locale.headerFixButtonText)
headerUnfixButtonText | [locale.headerUnfixButtonText](ui.iggridcolumnfixing#options:locale.headerUnfixButtonText)
featureChooserTextFixedColumn | [locale.featureChooserTextFixedColumn](ui.iggridcolumnfixing#options:locale.featureChooserTextFixedColumn)
featureChooserTextUnfixedColumn | [locale.featureChooserTextUnfixedColumn](ui.iggridcolumnfixing#options:locale.featureChooserTextUnfixedColumn)



## igHierarchicalGrid

Options changes in igHierarchicalGrid

Previous option | New option 
----------------|-----------
expandTooltip | [locale.columnChooserCaptionText](ui.ighierarchicalgrid#options:locale.expandTooltip)
collapseTooltip | [locale.collapseTooltip](ui.ighierarchicalgrid#options:locale.collapseTooltip)


## igTreeGrid

Options changes in igTreeGrid

Previous option | New option 
----------------|-----------
expandTooltipText | [locale.expandTooltipText](ui.igtreegrid#options:locale.expandTooltipText)
collapseTooltipText | [locale.collapseTooltipText](ui.igtreegrid#options:locale.collapseTooltipText)

### Options changes in igTreeGrid Filtering
Previous option | New option 
----------------|-----------
filterSummaryInPagerTemplate | [locale.collapseTooltipText](ui.igtreegrid#options:locale.collapseTooltipText)

### Options changes in igTreeGrid Updating
Previous option | New option 
----------------|-----------
addChildTooltip | [locale.enableAddChild](ui.igtreegrid#options:locale.enableAddChild)
addChildButtonLabel | [locale.addChildButtonLabel](ui.igtreegrid#options:locale.addChildButtonLabel)

## igDialog
The behavior of the locale specific options in igDialog is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igdialog#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
closeButtonTitle |  [locale.closeButtonTitle](ui.igdialog#options:locale.closeButtonTitle)
minimizeButtonTitle | [locale.minimizeButtonTitle](ui.igdialog#options:locale.minimizeButtonTitle)
maximizeButtonTitle | [locale.minimizeButtonTitle](ui.igdialog#options:locale.minimizeButtonTitle)
pinButtonTitle | [locale.pinButtonTitle](ui.igdialog#options:locale.pinButtonTitle)
unpinButtonTitle | [locale.unpinButtonTitle](ui.igdialog#options:locale.unpinButtonTitle)
restoreButtonTitle | [locale.restoreButtonTitle](ui.igdialog#options:locale.restoreButtonTitle)

## igCombo
The behavior of the locale specific options in igCombo is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igcombo#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
noMatchFoundText |  [locale.noMatchFoundText](ui.igcombo#options:locale.noMatchFoundText)
dropDownButtonTitle | [locale.dropDownButtonTitle](ui.igcombo#options:locale.dropDownButtonTitle)
clearButtonTitle | [locale.clearButtonTitle](ui.igcombo#options:locale.clearButtonTitle)
placeHolder | [locale.placeHolder](ui.igcombo#options:locale.placeHolder)

## igUpload
The behavior of the locale specific options in igUpload is chnaged. From version 17.2 on all locale specific options will be set via the [*locale*](%%jQueryApiUrl%%/ui.igupload#options:locale) option.

### Option changes

Previous option | New option 
----------------|-----------
labelUploadButton |  [locale.labelUploadButton](ui.igupload#options:locale.labelUploadButton)
labelAddButton | [locale.labelAddButton](ui.igupload#options:locale.labelAddButton)
labelClearAllButton | [locale.labelClearAllButton](ui.igupload#options:locale.labelClearAllButton)
labelSummaryTemplate | [locale.labelSummaryTemplate](ui.igupload#options:locale.labelSummaryTemplate)
labelSummaryProgressBarTemplate | [locale.labelSummaryProgressBarTemplate](ui.igupload#options:locale.labelSummaryProgressBarTemplate)
labelShowDetails | [locale.labelShowDetails](ui.igupload#options:locale.labelShowDetails)
labelHideDetails | [locale.labelHideDetails](ui.igupload#options:locale.labelHideDetails)
labelSummaryProgressButtonCancel | [locale.labelSummaryProgressButtonCancel](ui.igupload#options:locale.labelSummaryProgressButtonCancel)
labelSummaryProgressButtonContinue | [locale.labelSummaryProgressButtonContinue](ui.igupload#options:locale.labelSummaryProgressButtonContinue)
labelSummaryProgressButtonDone | [locale.labelSummaryProgressButtonDone](ui.igupload#options:locale.labelSummaryProgressButtonDone)
labelProgressBarFileNameContinue | [locale.labelProgressBarFileNameContinue](ui.igupload#options:locale.labelProgressBarFileNameContinue)
errorMessageMaxFileSizeExceeded | [locale.errorMessageMaxFileSizeExceeded](ui.igupload#options:locale.errorMessageMaxFileSizeExceeded)
errorMessageGetFileStatus | [locale.errorMessageGetFileStatus](ui.igupload#options:locale.errorMessageGetFileStatus)
errorMessageCancelUpload | [locale.errorMessageCancelUpload](ui.igupload#options:locale.errorMessageCancelUpload)
errorMessageNoSuchFile | [locale.errorMessageNoSuchFile](ui.igupload#options:locale.errorMessageNoSuchFile)
errorMessageOther | [locale.errorMessageOther](ui.igupload#options:locale.errorMessageOther)
errorMessageValidatingFileExtension | [locale.errorMessageValidatingFileExtension](ui.igupload#options:locale.errorMessageValidatingFileExtension)
errorMessageAJAXRequestFileSize | [locale.errorMessageAJAXRequestFileSize](ui.igupload#options:locale.errorMessageAJAXRequestFileSize)
errorMessageTryToRemoveNonExistingFile | [locale.errorMessageTryToRemoveNonExistingFile](ui.igupload#options:locale.errorMessageTryToRemoveNonExistingFile)
errorMessageTryToStartNonExistingFile | [locale.errorMessageTryToStartNonExistingFile](ui.igupload#options:locale.errorMessageTryToStartNonExistingFile)
errorMessageMaxUploadedFiles | [locale.errorMessageMaxUploadedFiles](ui.igupload#options:locale.errorMessageMaxUploadedFiles)
errorMessageMaxSimultaneousFiles | [locale.errorMessageMaxSimultaneousFiles](ui.igupload#options:locale.errorMessageMaxSimultaneousFiles)
errorMessageDropMultipleFilesWhenSingleModel | [locale.errorMessageDropMultipleFilesWhenSingleModel](ui.igupload#options:locale.errorMessageDropMultipleFilesWhenSingleModel)
