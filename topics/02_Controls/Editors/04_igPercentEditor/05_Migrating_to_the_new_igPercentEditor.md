<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igpercenteditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igPercentEditor

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igPercentEditor`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old percent editor to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

### In this topic
This topic contains the following sections:

1. [Options changes](#options_changes)
2. [New options](#new_options)
3. [API Methods changes](#methods_changes)
4. [New API methods](#new_methods)
5. [Event changes](#event_changes)
6. [New events](#new_events)
7. [Requirements](#requirements)

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|Used to set animation duration when dropdown list is displayed/hidden.|These options are replaced by new option `dropDownAnimationDuration` that controls the dropdown list animation duration.
button|This option was used to set visibility of spin and dropdown button.|This option is renamed to `buttonType` to better communicate what it does.
dataMode|Members of type 'string' and 'number' were supported.|Members of type 'number' are not supported.
display|-|This option is removed.
displayFactor|Possible values: 1, 10, 100, 1000, 10000, 100000, etc.|Possible values: 1, 100 as other options are out of scope for the percent editor. 
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.|This option is removed. If `readOnly` is set to `true` the dropdown list cannot be displayed.
dropDownTriggers|-|This option is removed. Now `Alt` + `down-arrow` shows dropdown.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.
listColumns|-|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element. 
listMaxHeight|Used to set maximum height of dropdown list in pixels.|This option is removed. You can use the new option [visibleItemsCount](#visibleItemsCount) to set the number of visible list items.
nullable|This option was used to set ability to prevent cnull value.|This option is renamed to `allowNullValue` to better communicate what it does.
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events. |This option is removed. Setting `readOnly` to `true` disables the spin buttons.
symbol|Used to set percent symbol, which is used in display (no focus) state.|This option is renamed to `percentSymbol` to better communicate what it does.
textAlign|Default was `null`|Now default is `left`.
theme|-|This option is removed.
type|-|This option is removed.
validatorOptions |-|This option is removed.
