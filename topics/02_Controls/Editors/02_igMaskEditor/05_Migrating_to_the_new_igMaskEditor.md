<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igmaskeditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igMaskEditor

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igMaskEditor`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old mask editor to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

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
display|Sets gets style.display for outer html element.|This option is removed.
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.|This option is no longer available for the mask editor.
dropDownTriggers|Sets gets list of actions which trigger display of drop-down list or calendar.|This option is no longer available for the mask editor.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
height, width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|Sets gets ability to hide the Enter key from browser.|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.
listAutoComplete|Sets gets autocomplete.|This option is removed.
listColumns|Sets gets number of columns in drop-down list.|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|This option is no longer available for the mask editor.
listMatchContains|Sets gets list match contains.|This option is removed.
listMatchIgnoreCase|Sets gets case validation.|This option is removed. 
listMaxHeight|Used to set maximum height of dropdown list in pixels.|This option is no longer available for the mask editor.
listWidth|Sets gets custom width of drop-down list in pixels. If value is equal to 0 or negative, then the width of editor is used.|This option is removed. 
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|Sets gets option to wrap input field into SPAN.|This option is removed.
required|Set gets validation for empty value in editor.|This options is removed. You can use the validator options to set the field as required.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events. |This option is removed. Setting `readOnly` to `true` disables the spin buttons.
textAlign|Default was `null`|Now default is `left`.
theme|Sets gets selector for css classes used by editor.|This option is removed.
type|Sets type of editor.|This option is removed. You can use the corresponding controls.
promptChar|Sets character which is used as prompt in edit mode for available entry position.|This option is renamed to `unfilledCharsPrompt` to better communicate what it does.


<a name='new_options'></a>
### New options

Option| Description
---|---
unfilledCharsPrompt|<a name='unfilledCharsPrompt'></a>Sets gets character which is used as prompt in edit mode for available entry position.
allowNullValue|<a name='allowNullValue'></a>If that option is false, and editor has no value, then value is set to an empty string.
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#maskEditor').igMaskEditor({ disabled: true }] })`.
buttonType|<a name='buttonType'></a>Sets gets visibility of spin, clear and drop-down button.
placeHolder|<a name='placeHolder'></a>Gets sets text which appears in editor when editor has no focus and "value" in editor is null or empty string.
revertIfNotValid|<a name='revertIfNotValid'></a>Use to set the editor to revert value to previous value in case of not valid value on blur, or enter key. If set to false clear is called: `$('#maskEditor').igMaskEditor({ listItems: ["A", "B", "C", "D"], isLimitedToListValues: true, revertIfNotValid: false }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#maskEditor').igMaskEditor({ preventSubmitOnEnter: true }] })`.
suppressNotifications|<a name='suppressNotifications'></a>Disables default notifications for basic validation scenarios built in the editors such as required list selection, value wrapping around or spin limits.

[See all options](%%jQueryApiUrl%%/ui.igmaskeditor#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|Used to add the object within item at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
addListItems|Used to add the objects within the items array at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
clearListItems|Removed all items from list.|This method is no longer available for the mask editor.
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is no longer available for the mask editor.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.This method is no longer available for the mask editor.
findListItemIndex|Found index of list item by text that matches with the search parameters.|This method is no longer available for the mask editor.
getRegionalOption|Gets calculated value of regional option used by numeric and date editors.|This method in no longer available.
getSelection|Used to get left or right edge of selection.|This method is replaced by the methods `getSelectionStart` and `getSelectionEnd`.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igEditorNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igMaskEditor.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported.
removeListItem|Used to remove item from list.|This method is no longer available for the mask editor.
removeListItemAt|Used to remove item from list at index.|This method is no longer available for the mask editor.
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is no longer available for the mask editor.
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does.

>**Note:** One of the major changed in the new mask editor is that it no longer supports Lists and DropDown. Note that if you try to use methods connected to dropdown and list, you will receive a notification pointing out that they are no longer available. 

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
inputName|<a name='inputName'></a>Gets sets name attribute applied to the editor element
displayValue|<a name='displayValue'></a>Returns a string with all the characters shown in the input.
editorContainer|<a name='editorContainer'></a>Gets reference to jquery object which is used as top/outer element of igEditor.
clearButton|<a name='clearButton'></a>Returns a reference to the clear button of the editor.
getSelectionStart|<a name='getSelectionStart'></a>Gets start index of the selected text in editor.
getSelectionEnd|<a name='getSelectionEnd'></a>Gets end index of the selected text in editor.
insert|<a name='insert'></a>Paste text at location of caret.

[See all API methods](%%jQueryApiUrl%%/ui.igmaskeditor#methods)

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
rendering|<a name='rendering'></a>Event which is raised before rendering of the editor completes.
rendered|<a name='rendered'></a>Event which is raised after rendering of the editor completes.
mouseout|<a name='mouseout'></a>Event which is raised on mouseleave at any part of editor including drop-down list.

[See all events](%%jQueryApiUrl%%/ui.igmaskeditor#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0
