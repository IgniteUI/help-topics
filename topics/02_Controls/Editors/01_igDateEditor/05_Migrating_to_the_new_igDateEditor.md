<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igdateeditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igDateEditor

With the 15.2 release of Ignite UI™ a new set of editor controls was introduced, including a reworked `igDateEditor`. With a new design, focused on simplicity and better UX, many features and their API were revised. This topic covers many of these changes and will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help migrating from the old numeric editor to the new one. 

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
animationHideDuration animationShowDuration|Used to set animation duration when dropdown list is displayed/hidden.|These options are replaced by a new option `dropDownAnimationDuration` that controls the dropdown list animation duration.
button|This option was used to set visibility of spin and dropdown button.|This option is renamed to `buttonType` to better communicate what it does.
dataMode|Members of type 'string' and 'number' were supported.|Members of type 'number' are not supported.
display|-|This option is removed.
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.|This option is removed. 
dropDownTriggers|-|This option is removed. 
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.
listColumns|-|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|This option is removed. 
listMaxHeight|Used to set maximum height of dropdown list in pixels.|This option is removed. 
nullable|This option was used to set ability to prevent null value.|This option is renamed to `allowNullValue` to better communicate what it does.
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spin1Field | -|This option is renamed to limitSpinToCurrentField.
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events. |This option is removed. Setting `readOnly` to `true` disables the spin buttons.
textAlign|Default was `null`|Now default is `left`.
theme|-|This option is removed.
validatorOptions |-|This option is removed.

<a name='new_options'></a>
### New options

Option| Description
---|---
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#dateEditor').igDateEditor({ disabled: true }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#dateEditor').igDateEditor({ preventSubmitOnEnter: true }] })`.

[See all options](%%jQueryApiUrl%%/ui.igdateeditor#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|Used to add the object within item at the location indicated by the index.|This method is removed. 
addListItems|Used to add the objects within the items array at the location indicated by the index.|This method is removed. 
clearListItems|Removed all items from list.|This method is removed. 
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is removed.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.|This method is removed.
findListItemIndex|Found index of list item by text that matches with the search parameters|This method is removed.
getSelectedText|Used to get selected text in editor.|This method is removed.
getSelection|Used to get left or right edge of selection.|This method is removed.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igEditorNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igDateEditor.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a numeric string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported. 
removeListItem|Used to remove item from list.|This method is removed. 
removeListItemAt|Used to remove item from list at index.|This method is removed.
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is replaced by two new methods: `spinUp` and `spinDown`. 
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does. Note that depending on the dataMode it will return text, date or editModeText.

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
clearButton|Returns a reference to the clear button of the editor.

>**Note:** One of the major changed in the new date editor is that it no longer supports Lists and DropDown. Note that if you try to use methods connected to dropdown and list, you will receive a notification pointing out that they are no longer available. 

[See all API methods](%%jQueryApiUrl%%/ui.ignumericeditor#methods)

<a name='event_changes'></a>
### Event changes

Event|Changes
---|---
hideDropDown|Event is not supported anymore. 
showDropDown|Event is not supported anymore. 
listSelected|Event is not supported anymore.
listSelecting|Event is not supported anymore.
mouseleave|Event is renamed to `mouseout` to better communicate what it does.

<a name='new_events'></a>
### New events

Event|Description
---|---
rendering|<a name='dropDownListOpening'></a>Event which is raised before rendering of the editor completes.
rendered|<a name='rendered'></a>Event which is raised after rendering of the editor completes.

[See all events](%%jQueryApiUrl%%/ui.ignumericeditor#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0
