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
animationHideDuration animationShowDuration|Used to set animation duration when dropdown list is displayed/hidden.<br> `$(".selector").igPercentEditor({`<br>`animationShowDuration: 500,`<br>`animationHideDuration: 500`<br>`});`|These options are replaced by new option `dropDownAnimationDuration` that controls the dropdown list animation duration.<br>`$(".selector").igPercentEditor({`<br>`dropDownAnimationDuration: 500`<br>`});`
button|This option was used to set visibility of spin and dropdown button. <br>`$(".selector").igPercentEditor({`<br>`button : "dropdown"`<br>`});`|This option is renamed to `buttonType` to better communicate what it does. <br>`$(".selector").igPercentEditor({`<br>`buttonType : "dropdown"`<br>`});`
display|Sets gets style.display for outer html element.|This option is removed.
displayFactor|Possible values: 1, 10, 100, 1000, 10000, 100000, etc.<br>`$(".selector").igPercentEditor({`<br>    `displayFactor : 1000`<br>`});`|Possible values: 1, 100 as other options are out of scope for the percent editor. Default value is 100.<br>`$(".selector").igPercentEditor({`<br>    `displayFactor : 100`<br>`});`
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.<br>`$(".selector").igPercentEditor({`<br>    `dropDownOnReadOnly : true`<br>`});`|This option is removed. If `readOnly` is set to `true` the dropdown list cannot be displayed.<br>`$(".selector").igPercentEditor({`<br>`readOnly : true`<br>`});`
dropDownTriggers|Sets gets list of actions which trigger display of drop-down list or calendar.|This option is removed. Now `Alt` + `down-arrow` shows dropdown.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
height, width|Previously supported type: `number`.<br>`$(".selector").igPercentEditor({`<br>`width : 200`<br>`});`|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).<br>`$(".selector").igPercentEditor({`<br>`width : "200px"`<br>`});`
hideEnterKey|Sets gets ability to hide the Enter key from browser.<br>`$(".selector").igPercentEditor({`<br>    `hideEnterKey : false`<br>`});`|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.<br>`$(".selector").igPercentEditor({`<br>`preventSubmitOnEnter : false`<br>`});`
listColumns|Sets gets number of columns in drop-down list.|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.<br>`$(".selector").igPercentEditor({`<br>`listDropDownAsChild : true`<br>`});`|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element.<br>`$(".selector").igPercentEditor({`<br> `dropDownAttachedToBody : true`<br>`});`
listMaxHeight|Used to set maximum height of dropdown list in pixels.<br>`$(".selector").igPercentEditor({`<br>    `listMaxHeight : 400`<br>`});`|This option is removed. You can use the new option [visibleItemsCount](#visibleItemsCount) to set the number of visible list items.<br>`$(".selector").igPercentEditor({`<br>    `visibleItemsCount : 5`<br>`});`
negativeSign|Used to set the character, which is used for negative numeric values.<br>`$(".selector").igPercentEditor({`<br>`negativeSign : "--"`<br>`});`|Only valid cultural signs are allowed for this option.<br>`$(".selector").igPercentEditor({`<br>`negativeSign : "-"`<br>`});`
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.<br>`$(".selector").igPercentEditor({`<br>`nullText : "Enter Value"`<br>`});`|This option is renamed to `placeHolder` to better communicate what it does.<br>`$(".selector").igPercentEditor({`<br>`placeHolder : "Enter Value"`<br>`});`
renderInContainer|Sets gets option to wrap input field into SPAN.|This option is removed.
rnullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.<br>`$(".selector").igPercentEditor({`<br>`nullText : "Enter Value"`<br>`});`|This option is renamed to `placeHolder` to better communicate what it does.<br>`$(".selector").igPercentEditor({`<br>    `placeHolder : "Enter Value"`<br>`});`
renderInContainer|Sets gets option to wrap input field into SPAN.|This option is removed.
required|Set gets validation for empty value in editor.<br>`$(".selector").igPercentEditor({`<br>`required : true`<br>`});`|This options is removed. You can use the validator options to set the field as required.<br>`$(".selector").igPercentEditor({`<br>` validatorOptions : {`<br>`required: true`<br>`}`<br>`});`
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.<br>`$(".selector").igPercentEditor({`<br>`selectionOnFocus: 0`<br>`});`|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.<br>`$(".selector").igPercentEditor({`<br>`selectionOnFocus: "atStart"`<br>`});`
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events.<br>` $(".selector").igPercentEditor({`<br> `spinOnReadOnly : true`<br>`});` |This option is removed. Setting `readOnly` to `true` disables the spin buttons.<br>`$(".selector").igPercentEditor({`<br>`readOnly : true`<br>`});`
textAlign|Default was `null`|Now default is `left`.
theme|Sets gets selector for css classes used by editor.|This option is removed.
type|Sets type of editor.|This option is removed. You can use the corresponding controls.
maxLength|Sets gets maximum length of text which can be entered by user.|This option is removed.
symbol|Used to set the percent symbol, which is used in display (no focus) state.<br>`$(".selector").igPercentEditor({`<br>`symbol: "*"`<br>`});`|This option is renamed to `percentSymbol` to better communicate what it does.<br>`$(".selector").igPercentEditor({`<br>`percentSymbol: "*"`<br>`});`

<a name='new_options'></a>
### New options

Option| Description
---|---
percentSymbol|Set custom percent symbol, different from the one in the regional settings.
allowNullValue|<a name='allowNullValue'></a>If that option is false, and editor has no value, then value is set to an empty string.
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#percentEditor').igPercentEditor({ disabled: true }] })`.
buttonType|<a name='buttonType'></a>Sets gets visibility of spin, clear and drop-down button.
listItemHoverDuration|<a name='listItemHoverDuration'></a>Use to set the hover/unhover animation duration of items inside the dropdown list: `$('#percentEditor').igPercentEditor({ listItems: ["A", "B", "C", "D"], listItemHoverDuration: 400 }] })`.
dropDownAttachedToBody|<a name='dropDownAttachedToBody'></a>Gets sets location of drop-down list.
dropDownAnimationDuration|<a name='dropDownAnimationDuration'></a>Gets sets show/hide drop-down list animation duration in milliseconds.
visibleItemsCount|<a name='visibleItemsCount'></a>Use to set how many items should be shown at once: `$('#percentEditor').igPercentEditor({ listItems: ["A", "B", "C", "D"], visibleItemsCount: 2 }] })`.
isLimitedToListValues|<a name='isLimitedToListValues'></a>Use to set the ability to allow values only set into the list items. This validation is done only when the editor is blured, or enter key is pressed: `$('#percentEditor').igPercentEditor({ listItems: ["A", "B", "C", "D"], isLimitedToListValues: true }] })`.
placeHolder|<a name='placeHolder'></a>Gets sets text which appears in editor when editor has no focus and "value" in editor is null or empty string.
revertIfNotValid|<a name='revertIfNotValid'></a>Use to set the editor to revert value to previous value in case of not valid value on blur, or enter key. If set to false clear is called: `$('#percentEditor').igPercentEditor({ listItems: ["A", "B", "C", "D"], isLimitedToListValues: true, revertIfNotValid: false }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#percentEditor').igPercentEditor({ preventSubmitOnEnter: true }] })`.
dropDownOrientation|<a name='dropDownOrientation'></a>Use to set drop down opening orientation for the dorp down list when open button is clicked: `$('#percentEditor').igPercentEditor({ listItems: ["A", "B", "C", "D"], dropDownOrientation: 'top' }] })`.
suppressNotifications|<a name='suppressNotifications'></a>Disables default notifications for basic validation scenarios built in the editors such as required list selection, value wrapping around or spin limits.

>**Note:** If you want to set the option 'decimalSeparator', it must differ from the regional option for 'gropupSeparator'.

[See all options](%%jQueryApiUrl%%/ui.igpercenteditor#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|Used to add the object within item at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
addListItems|Used to add the objects within the items array at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
clearListItems|Removed all items from list.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is renamed to `dropDownContainter` to better communicate what it does.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.|Only gets visibility of dropdown list. There are new methods - [showDropDown](#showDropDown) and [hideDropDown](#hideDropDown), that replaces the previous functionality.
findListItemIndex|Found index of list item by text that matches with the search parameters|We should provide only one numeric parameter `number` and look for exact matches of it (e. g. 15.00 would equal 15).
getSelectedText|Used to get selected text in editor.|This method is removed as it doesn't make sense to have such a method in numeric editor.
getSelection|Used to get left or right edge of selection.|This method is removed as it doesn't make sense to have such a method in percent editor.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igEditorNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igPercentEditor.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported.
removeListItem|Used to remove item from list.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
removeListItemAt|Used to remove item from list at index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is replaced by two new methods: `spinUp` and `spinDown`. This method works only on the value and not with the dropdown navigation. For the latter you should use [selectListIndexUp](#selectListIndexUp) or [selectListIndexDown](#selectListIndexDown) method.
spinDelta|Previous default value was 1.|Default value is 0.01.
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does.

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
percentSymbol|<a name='percentSymbol'></a>Gets ор sets a string that is used as the percent symbol shown with the number in the input. The value provided as a parameter is propagated to the percentSymbol option and thus has the same priority as the option.
inputName|<a name='inputName'></a>Gets sets name attribute applied to the editor element
displayValue|<a name='displayValue'></a>Returns a string with all the characters shown in the input.
editorContainer|<a name='editorContainer'></a>Gets reference to jquery object which is used as top/outer element of igEditor.
dropDownContainer|<a name='dropDownContainer'></a>Gets reference to jquery object which is used as container of drop-down.
showDropDown|<a name='showDropDown'></a>Show the dropdown list.
hideDropDown|<a name='hideDropDown'></a>Hide the dropdown list.
dropDownVisible|<a name='dropDownVisible'></a>Returns the visibility state of the drop down listing the items.
dropDownButton|<a name='dropDownButton'></a>Returns a reference to the dropdown button of the editor.
selectListIndexUp|<a name='selectListIndexUp'></a>Moves the selection index to the item that appears above the current one in the list.
selectListIndexDown|<a name='selectListIndexDown'></a>Moves the selection index to the item that appears above the current one in the list.
clearButton|<a name='clearButton'></a>Returns a reference to the clear button of the editor.
insert|<a name='insert'></a>Paste text at location of caret.
spinUp|<a name='spinUp'></a>Increments value in editor according to the parameter.
spinDown|<a name='spinDown'></a>Decrements  value in editor according to the parameter.
spinUpButton|<a name='spinUpButton'></a>Returns a reference to the spin up button of the editor.
spinDownButton|<a name='spinDownButton'></a>Returns a reference to the spin down button of the editor.

[See all API methods](%%jQueryApiUrl%%/ui.igpercentditor#methods)

<a name='event_changes'></a>
### Event changes

Event|Changes
---|---
hideDropDown|Event is not supported anymore. Two new events are introduced, giving you more control over hiding the dropdown list: [dropDownListClosing](#dropDownListClosing) and [dropDownListClosed](#dropDownListClosed).
showDropDown|Event is not supported anymore. Two new events are introduced, giving you more control over showing the dropdown list: [dropDownListOpening](#dropDownListOpening) and [dropDownListOpened](#dropDownListOpened).
listSelected|Event is renamed to `dropDownItemSelected` to better communicate what it does. Use `ui.owner` to obtain reference to igEditor. Use `ui.editorInput` to obtain reference to the editable input. Use `ui.list` to obtain reference to the list contaier. Use `ui.item` to obtain reference to the list item which is selected.
listSelecting|Event is renamed to `dropDownItemSelecting` to better communicate what it does. Use `ui.owner` to obtain reference to igEditor. Use `ui.editorInput` to obtain reference to the editable input. Use `ui.list` to obtain reference to the list contaier. Use `ui.item` to obtain reference to the list item which is about to be selected.
mouseleave|Event is renamed to `mouseout` to better communicate what it does.

<a name='new_events'></a>
### New events

Event|Description
---|---
rendering|<a name='rendering'></a>Event which is raised before rendering of the editor completes.
rendered|<a name='rendered'></a>Event which is raised after rendering of the editor completes.
dropDownListOpening|<a name='dropDownListOpening'></a>Event which is raised when the drop down is opening.
dropDownListOpened|<a name='dropDownListOpened'></a>Event which is raised when the drop down is already opened.
dropDownListClosing|<a name='dropDownListClosing'></a>Event which is raised when the drop down is closing.
dropDownListClosed|<a name='dropDownListClosed'></a>Event which is raised when the drop down is already closed.
dropDownItemSelecting|<a name='dropDownItemSelecting'></a>Event which is raised when the drop down list item is selecting.
dropDownItemSelected|<a name='dropDownItemSelected'></a>Event which is raised when the drop down list item is selected.
mouseout|<a name='mouseout'></a>Event which is raised on mouseleave at any part of editor including drop-down list.

[See all events](%%jQueryApiUrl%%/ui.igpercentditor#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0
