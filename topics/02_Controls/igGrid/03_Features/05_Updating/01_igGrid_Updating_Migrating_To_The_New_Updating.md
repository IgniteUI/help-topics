<!--
|metadata|
{
    "fileName": "iggrid-updating-migrating-to-the-new-updating",
    "controlName": "igGrid",
    "tags": ["Editing","Grids","Migration"]
}
|metadata|
-->

# Migrating to the new Updating (igGrid)

## Topic Overview

### Purpose
This topic aims to help with migration from old igGridUpdating to the new one. 

### In this topic
This topic contains the following sections:

-   [**General Changes**](#general)
    -   [Dependencies](#dependencies)
    -   [Enabling editing rows via a dialog](#RED)
    -   [Behavioral changes](#behavioral-changes)
- 	[**Option changes**](#option-changes)
- 	[**New options**](#options-new)
- 	[**Removed options**](#options-removed)
- 	[**Event changes**](#event-changes)
- 	[**Method changes**](#method-changes)
-   [**Related Topics**](#topics)


## <a id="general"></a> General Changes
### <a id="dependencies"></a> Dependencies
Changes and improvements in the structure and functionality in the igEditors suite that igGridUpdating uses to edit rows and cells in the grid changed the earliest jQuery and jQuery UI versions that are supported. The difference is summarized in the following table.

||%%ProductName%% 15.1|%%ProductName%% 15.2|
|---|:---:|:---:|
|**Earliest supported jQuery version**|1.4.4|1.9.1|
|**Earliest supported jQuery UI version**|-|1.9.0|
### <a id="RED"></a> Enabling editing rows via a dialog
The edit mode that enabled editing via a dialog is now named "dialog" instead of "rowedittemplate".
The new dialog uses a different templating structure and allows building complex custom editing dialogs. For details on the new capabilities of this mode please refer to the main topic: [Row Edit Dialog Overview (igGrid)](igGrid-Updating-RowEditDialog.html)

Declaration example:

Old| New | 
---|---
|$("#grid ").igGrid({features : [{ name : "Updating", editMode: <b>"rowedittemplate"}</b>] });|$("#grid ").igGrid({features : [{ name : "Updating", editMode : <b>"dialog"</b> }] });|

The table below briefly explains the user interaction capabilities of the Updating feature.

New option [rowEditDialogOptions](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions) is added, which contains all options related to the Row Edit Dialog. 


### <a id="behavioral-changes"></a> Behavioral changes

When editing a column with a multiline text editor, the end-user should now use ALT+ENTER key combination to insert a new line and ENTER to submit the changes as normal.

Changes in the editors architecture and its implication on the integration between the editors and igGridUpdating resulted in the `valueChanged` event for the editors to fire on every character input by the end-user instead of when the editor detects blur.


### <a id="option-changes"></a> Option changes

> **Note:** All options for the row edit dialog are located under a new option named rowEditDialogOptions in the Updating feature. In the table below they are marked with *.

| Old Option| New Option| Old Syntax | New Syntax|
---|---|---|---
|editMode: "rowedittemplate" |editMode: "dialog"| $("#grid").igGrid({ features: [{   name: "Updating", <b>editMode:"rowedittemplate"</b> } ]});|$("#grid").igGrid({ features: [{ name: "Updating", <b>editMode:"dialog"</b>}] });|
|rowEditDialogWidth|width*|$("#grid").igGrid({ features: [{ name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogWidth: "370px"</b> } ]}); |$("#grid").igGrid({ features: [{ name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: {width: "370px" }</b> ]});|
|rowEditDialogHeight|height*| $("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogHeight: "350px"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { height: "350px" } </b>} ]});|
|rowEditDialogCaptionLabel|captionLabel*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogCaptionLabel: "CaptionLabel"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { captionLabel: "CaptionLabel" } </b>} ]});|
|rowEditDialogContainment|containment*| $("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogContainment: "owner"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { containment: "owner" } </b>} ]});|
|rowEditDialogFieldWidth| editorsColumnWidth*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogFieldWidth: 150</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { editorsColumnWidth: 150 } </b>} ]});|
|showReadonlyEditors|showReadonlyEditors*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>showReadonlyEditors: false</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { showReadonlyEditors: false } </b>} ]});|

### <a id="options-new"></a> New Options

|Option| Description|
---|---
|animationDuration*|Specifies the animation duration for the opening and closing operations.|
|dialogTemplate*|Specifies a template to be rendered against the currently edited record.|
|dialogTemplateSelector*|Specifies a selector to a template rendered against the currently edited record.|
|editorsTemplate*|Specifies a template to be executed for each column in the grid's column collection (or just the read-write columns if showReadonlyEditors is false). Decorate the element to be used as an editor with 'data-editor-for-${key}'.The ${key} template tag should be replaced with the chosen templating engine's syntax for rendering values. If any editors for columns are specified in the dialog markup they will be exluded from the data the template will be rendered for.This property is ignored if the dialog template does not include an element with the "data-render-tmpl" attribute. If both editorsTemplate and editorsTemplateSelector are specified, editorsTemplateSelector will be used.|
|editorsTemplateSelector*|Specifies a selector to a template to be executed for each column in the grid's column collection. Decorate the element to be used as an editor with 'data-editor-for-${key}'. The ${key} template tag should be replaced with the chosen templating engine's syntax for rendering values. If any editors for columns are specified in the dialog markup they will be exluded from the data the template will be rendered for. This property is ignored if the dialog markup does not include an element with the 'data-render-tmpl' attribute. If both editorsTemplate and editorsTemplateSelector are specified, editorsTemplateSelector will be used.|
|namesColumnWidth*|Controls the width of the column containing the column names in the default row edit dialog.|
|showEditorsForHiddenColumns*| Controls if editors should be rendered for hidden columns.|
|wrapAround|Controls if editing mode should wrap around the grid when navigating using the keyboard.|
### <a id="event-changes"></a> Event changes

### <a id="options-removed"></a> Removed Options
|Option| Additional information|
---|---
|rowEditDialogOkCancelButtonWidth| This options is now removed as the width of the buttons can be set via css. For example: .ui-igbutton{ width: 300px}|
|rowEditDialogRowTemplate| Due to the refactored dialog edit mode this option is now removed. The new templating options, which have a similar functionality, are [dialogTemplate](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions.dialogTemplate) and [editorsTemplate](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions.editorsTemplate). For more details on the specific settings please refer to the [Configuring the Row Edit Dialog (igGrid)](iggrid-updating-roweditdialog-configuring.html) topic.
|rowEditDialogRowTemplateID | Due to the refactored dialog edit mode this option is now removed. The new templating options, which have a similar functionality, are [dialogTemplateSelector](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions.dialogTemplateSelector) and [editorsTemplateSelector](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions.editorsTemplateSelector). For more details on the specific settings please refer to the [Configuring the Row Edit Dialog (igGrid)](iggrid-updating-roweditdialog-configuring.html) topic.


#### Renamed Events

|Old name | New Name | Additional information|
---|---|---
|rowEditDialogOpening|rowEditDialogBeforeOpen|This event is not cancelable. If editing for a row needs to be canceled the [editRowStarting](%%jQueryApiUrl%%/ui.igGridUpdating#events:editRowStarting) event should be used instead.|
|rowEditDialogOpened|rowEditDialogAfterOpen||
|rowEditDialogClosing|rowEditDialogBeforeClose|This event is not cancelable.|
|rowEditDialogClosed|rowEditDialogAfterClose||

#### Changed Event Arguments

|Argument|Affected Events|Additional information|Old Syntax|New Syntax|
---|---|---|---|---|
|keepEditing|editCellEnding,editRowEnding|The argument is removed. To prevent editing from exiting users can cancel the events by returning false|`$("#grid").bind("iggridupdatingeditrowending", function (evt, ui) { ui.keepEditing = true; });`|`$("#grid").bind("iggridupdatingeditrowending", function (evt, ui) { return false; });`|

#### Deprecated Events
- rowEditDialogContentsRendering


### <a id="method-changes"></a> Method changes
- The [setCellValue](%%jQueryApiUrl%%/ui.igGridUpdating#methods:setCellValue) method no longer requires or provides the option to pass the cell element to update. The operation is now always controlled by the primary key - column key combination.
- The [updateRow](%%jQueryApiUrl%%/ui.igGridUpdating#methods:updateRow) method no longer requires or provides the option to pass the row element to update. The operation is now always controlled by the primary key of the record to update.
- The `findHiddenComboEditor` method was obsolete and was removed.

## <a id="topics"></a> Related Topics 
Following are some other topics you may find useful.

-   [igGridUpdating API documentation](%%jQueryApiUrl%%/ui.igGridUpdating)

 

 


