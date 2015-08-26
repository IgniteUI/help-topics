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
    -   [Enabling editing rows via a dialog](#RED)
    -   [Behavioral changes](#behavioral-changes)
- 	[**Option changes**](#option-changes)
- 	[**New options**](#options-new)
- 	[**Event changes**](#event-changes)
-   [**Related Topics**](#topics)


## <a id="general"></a> General Changes
### <a id="#RED"></a> Enabling editing rows via a dialog
The edit mode that enabled editing via a dialog is now named "dialog" instead of "rowedittemplate".
The new dialog uses a different templating structure and allows building complex custom editing dialogs. For details on the new capabilities of this mode please refer to the main topic: [Row Edit Template Overview (igGrid)](igGrid-Updating-RowEditTemplate.html)

Declaration example:

Old| New | 
---|---
|$("#grid ").igGrid({features : [{ name : "Updating", editMode: <b>"rowedittemplate"}</b>] });|$("#grid ").igGrid({features : [{ name : "Updating", editMode : <b>"dialog"</b> }] });|

The table below briefly explains the user interaction capabilities of the Updating feature.

New option [rowEditDialogOptions](%%jQueryApiUrl%%/ui.igGridUpdating#options:rowEditDialogOptions) is added, which contains all options related to the Row Edit Dialog. 


### <a id="##behavioral-changes"></a> Behavioral changes

When [showDoneCancelButtons](%%jQueryApiUrl%%/ui.igGridUpdating#options:showDoneCancelButtons) is true you cannot exit edit mode of the currently edited row by starting edit mode on another row in the grid. To exit edit mode you need to explicitly exit editing by clicking on the buttons or hitting the Escape key.


### <a id="option-changes"></a> Option changes

> **Note:** All options for the row edit dialog are located under a new option named rowEditDialogOptions in the Updating feature. In the table below they are marked with *.
> 
| Old Option| New Option| Old Syntax | New Syntax|
--|--|--|--
|editMode: "rowedittemplate" |editMode: "dialog"| $("#grid").igGrid({ features: [{   name: "Updating", <b>editMode:"rowedittemplate"</b> } ]});|$("#grid").igGrid({ features: [{ name: "Updating", <b>editMode:"dialog"</b>}] });|
|rowEditDialogWidth|width*|$("#grid").igGrid({ features: [{ name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogWidth: "370px"</b> } ]}); |$("#grid").igGrid({ features: [{ name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: {width: "370px" }</b> ]});|
|rowEditDialogHeight|height*| $("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogHeight: "350px"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { height: "350px" } </b>} ]});|
|rowEditDialogCaptionLabel|captionLabel*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogCaptionLabel: "CaptionLabel"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { captionLabel: "CaptionLabel" } </b>} ]});|
|rowEditDialogContainment|containment*| $("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogContainment: "owner"</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { containment: "owner" } </b>} ]});|
|rowEditDialogFieldWidth| editorsColumnWidth*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>rowEditDialogFieldWidth: 150</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { editorsColumnWidth: 150 } </b>} ]});|
|showReadonlyEditors|showReadonlyEditors*|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"rowedittemplate", <b>showReadonlyEditors: false</b>}] });|$("#grid").igGrid({ features: [ { name: "Updating", editMode:"dialog", <b>rowEditDialogOptions: { showReadonlyEditors: false } </b>} ]});|

### <a id="options-new"></a> New Options
|Option| Description|
--|--
|animationDuration*|Specifies the animation duration for the opening and closing operations.|
|dialogTemplate*|Specifies a template to be rendered against the currently edited record.|
|dialogTemplateSelector*|Specifies a selector to a template rendered against the currently edited record.|
|editorsTemplate*|Specifies a template to be executed for each column in the grid's column collection (or just the read-write columns if showReadonlyEditors is false). Decorate the element to be used as an editor with 'data-editor-for-${key}'.The ${key} template tag should be replaced with the chosen templating engine's syntax for rendering values. If any editors for columns are specified in the dialog markup they will be exluded from the data the template will be rendered for.This property is ignored if the dialog template does not include an element with the "data-render-tmpl" attribute. If both editorsTemplate and editorsTemplateSelector are specified, editorsTemplateSelector will be used.|
|editorsTemplateSelector*|Specifies a selector to a template to be executed for each column in the grid's column collection. Decorate the element to be used as an editor with 'data-editor-for-${key}'. The ${key} template tag should be replaced with the chosen templating engine's syntax for rendering values. If any editors for columns are specified in the dialog markup they will be exluded from the data the template will be rendered for. This property is ignored if the dialog markup does not include an element with the 'data-render-tmpl' attribute. If both editorsTemplate and editorsTemplateSelector are specified, editorsTemplateSelector will be used.|
|namesColumnWidth*|Controls the width of the column containing the column names in the default row edit dialog.|
|showEditorsForHiddenColumns*| Controls if editors should be rendered for hidden columns.|
### <a id="event-changes"></a> Event changes

#### Renamed Events

|Old name | New Name | Additional information|
--|--|--
|rowEditDialogOpening|rowEditDialogBeforeOpen|This event is not cancelable. If editing for a row needs to be canceled the [editRowStarting](%%jQueryApiUrl%%/ui.igGridUpdating#events:editRowStarting) event should be used instead.|
|rowEditDialogOpened|rowEditDialogAfterOpen||
|rowEditDialogClosing|rowEditDialogBeforeClose|This event is not cancelable.|
|rowEditDialogClosed|rowEditDialogAfterClose||

#### Deprecated Events
- rowEditDialogContentsRendering

## <a id="topics"></a> Related Topics 
Following are some other topics you may find useful.

-   [igGridUpdating API documentation](%%jQueryApiUrl%%/ui.igGridUpdating)

 

 


