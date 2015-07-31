<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igmaskeditor",
    "controlName": "igMaskEditor",
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
5. [Event changes](#event_changes)
6. [New events](#new_events)
7. [Requirements](#requirements)

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|-|These options are no longer available for the mask editor.
button|This option was used to set visibility of spin and dropdown button.|This option is renamed to `buttonType` to better communicate what it does.The igMask editor supports only 'clear' type.
dataMode|Members of type 'string' and 'number' were supported.|Members of type 'number' are not supported.
display|-|This option is removed.
dropDownOnReadOnly|-|This option is removed. 
dropDownTriggers|-|This option is removed.
emptyChar| The default value used to be an empty string. | The default value is an asterix symbol "*".
focusOnSpin|-|This option is removed. 
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.
listColumns|-|This option is removed.
hideMaskOnFocus |-|This option is removed.
listAutoComplete |-|This option is removed.
listDropDownAsChild |-|This option is no longer available for the mask editor. 
listMatchContains |-| This option is removed.
listMatchIgnoreCase |-|This option is removed.
listMatchOnly |-|This option is removed.
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
padChar |The default value used to be an empty sting.|The default value is '^'.
renderInContainer|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|- |This option is removed. 
validatorOptions |-|This option is removed.

<a name='new_options'></a>
### New options

Option| Description
---|---
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#maskEditor').igMaskEditor({ disabled: true }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#maskEditor').igMaskEditor({ preventSubmitOnEnter: true }] })`.


[See all options](%%jQueryApiUrl%%/ui.igmaskeditor#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|-|This method is removed.
addListItems|-|This method is removed. 
clearListItems|Removed all items from list.|This method is removed.
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is no longer available for the mask editor.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.|This method is no longer available for the mask editor.
findListItemIndex|Found index of list item by text that matches with the search parameters|This method is no longer available for the mask editor.
getSelectedText|Used to get selected text in editor.|This method is removed as it doesn't make sense to have such a method in mask editor.
getSelection|Used to get left or right edge of selection.|This method is replaced by getSectionStar ans getSelectionEnd.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igEditorNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igMaskEditor.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a numeric string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported. 
removeListItem|Used to remove item from list.|This method is no longer available for the mask editor.
removeListItemAt|Used to remove item from list at index.|This method is no longer available for the mask editor.
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is no longer available for the mask editor.
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does.

>**Note:** One of the major changed in the new Mask editor is that it no longer supports Lists and DropDown. Note that if you try to use methods connected to dropdown and list, you will receive a notification pointing out that they are no longer available. 

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
rendering|Event which is raised before rendering of the editor completes.
rendered|Event which is raised after rendering of the editor completes.

[See all events](%%jQueryApiUrl%%/ui.igmaskeditor#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0
