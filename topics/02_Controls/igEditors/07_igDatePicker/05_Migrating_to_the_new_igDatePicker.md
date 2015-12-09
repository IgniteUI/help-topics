<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igdatepicker",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igDatePicker

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igDatePicker`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old date picker to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

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

<a name='options_changes'></a>
### API Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|Used to set animation duration when dropdown list is displayed/hidden.<br>`$(".selector").igDatePicker({`<br>`animationShowDuration: 500,`<br>`animationHideDuration: 500`<br>`});`|These options are replaced by new option `dropDownAnimationDuration` that controls the dropdown list animation duration. <br>`$(".selector").igDatePicker({`<br>`dropDownAnimationDuration: 500`<br>`});`
button|This option was used to set visibility of spin and dropdown button. <br>`$(".selector").igDatePicker({`<br>`button : "dropdown"`<br>`});`|This option is renamed to `buttonType` to better communicate what it does. For date picker the supported types are 'dropdown' and 'clear'.<br>`$(".selector").igDatePicker({`<br>`buttonType : "dropdown"`<br>`});`
display|Sets gets style.display for outer html element.|This option is removed.
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.<br>`$(".selector").igDatePicker({`<br>    `dropDownOnReadOnly : true`<br>`});`|This option is removed. If `readOnly` is set to `true` the dropdown list cannot be displayed.<br>`$(".selector").igDatePicker({`<br>`readOnly : true`<br>`});`
dropDownTriggers|Sets gets list of actions which trigger display of drop-down list or calendar.|This option is removed. Now `Alt` + `down-arrow` shows dropdown.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
focusOnDropDownOpen|Sets gets ability to automatically focus the input, when a calendar is opened.|This option is no longer avaliable for the igDatePicker.
height, width|Previously supported type: `number`.<br>`$(".selector").igDatePicker({`<br>`width : 200`<br>`});`|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).<br>`$(".selector").igDatePicker({`<br>`width : "200px"`<br>`});`
hideEnterKey|Sets gets ability to hide the Enter key from browser.<br>`$(".selector").igDatePicker({`<br>    `hideEnterKey : false`<br>`});`|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.<br>`$(".selector").igDatePicker({`<br>`preventSubmitOnEnter : true`<br>`});`
listAutoComplete|Sets gets autocomplete.|This option is removed.
listColumns|Sets gets number of columns in drop-down list.|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.<br>`$(".selector").igDatePicker({`<br>`listDropDownAsChild : true`<br>`});`|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element.<br>`$(".selector").igDatePicker({`<br> `dropDownAttachedToBody : true`<br>`});`
listMatchContains|Sets gets list match contains.|This option is removed.
listMatchIgnoreCase|Sets gets case validation.|This option is removed. 
listMaxHeight|Used to set maximum height of dropdown list in pixels.<br>`$(".selector").igDatePicker({`<br>    `listMaxHeight : 400`<br>`});`|This option is removed. You can use the new option [visibleItemsCount](#visibleItemsCount) to set the number of visible list items.<br>`$(".selector").igDatePicker({`<br>    `visibleItemsCount : 5`<br>`});`
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.<br>`$(".selector").igDatePicker({`<br>`nullText : "Enter Value"`<br>`});`|This option is renamed to `placeHolder` to better communicate what it does.<br>`$(".selector").igDatePicker({`<br>`placeHolder : "Enter Value"`<br>`});
renderInContainer|Sets gets option to wrap input field into SPAN.|This option is removed.
required|Set gets validation for empty value in editor.<br>`$(".selector").igDatePicker({`<br>`required : true`<br>`});`|This options is removed. You can use the validator options to set the field as required.<br>`$(".selector").igDatePicker({`<br>` validatorOptions : {`<br>`required: true`<br>`}`<br>`});`
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.<br>`$(".selector").igDatePicker({`<br>`selectionOnFocus: 0`<br>`});`|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.<br>`$(".selector").igDatePicker({`<br>`selectionOnFocus: "atStart"`<br>`});` 
spin1Field|Sets gets ability to modify only 1 date field on spin events.<br>`$(".selector").igDatePicker({ ` <br>`spin1Field : true`<br>`});`|This option is renamed to limitSpinToCurrentField.<br>`$(".selector").igDatePicker({ ` <br>`limitSpinToCurrentField : true`<br>`});`
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events.<br>` $(".selector").igDatePicker({`<br> `spinOnReadOnly : true`<br>`});` |This option is removed. Setting `readOnly` to `true` disables the spin buttons.<br>`$(".selector").igDatePicker({`<br>`readOnly : true`<br>`});`
textAlign|Default was `null`|Now default is `left`.
theme|Sets gets selector for css classes used by editor.|This option is removed.
type|Sets type of editor.|This option is removed. You can use the corresponding controls.

<a name='new_options'></a>
### New options

Option| Description
---|---
limitSpinToCurrentField|<a name='limitSpinToCurrentField'></a>Sets gets ability to modify only 1 date field on spin events.
allowNullValue|<a name='allowNullValue'></a>If that option is false, and editor has no value, then value is set to an empty string.
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#datePicker').igDatePicker({ disabled: true }] })`.
buttonType|<a name='buttonType'></a>Sets gets visibility of spin, clear and drop-down button.
dropDownAttachedToBody|<a name='dropDownAttachedToBody'></a>Gets sets location of drop-down list.
dropDownAnimationDuration|<a name='dropDownAnimationDuration'></a>Gets sets show/hide drop-down list animation duration in milliseconds.
placeHolder|<a name='placeHolder'></a>Gets sets text which appears in editor when editor has no focus and "value" in editor is null or empty string.
revertIfNotValid|<a name='revertIfNotValid'></a>Use to set the editor to revert value to previous value in case of not valid value on blur, or enter key. If set to false clear is called.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#datePicker').igDatePicker({ preventSubmitOnEnter: true }] })`.
dropDownOrientation|<a name='dropDownOrientation'></a>Use to set drop down opening orientation for the dorp down list when open button is clicked.
suppressNotifications|<a name='suppressNotifications'></a>Disables default notifications for basic validation scenarios built in the editors such as required list selection, value wrapping around or spin limits.

[See all options](%%jQueryApiUrl%%/ui.igdatepicker#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|Used to add the object within item at the location indicated by the index.|This method is removed. 
addListItems|Used to add the objects within the items array at the location indicated by the index.|This method is removed.
clearListItems|Removed all items from list.|This method is removed.
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is removed.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.|This method is removed.
findListItemIndex|Found index of list item by text that matches with the search parameters.|This method is removed.
getRegionalOption|Gets calculated value of regional option used by numeric and date editors.|This method in no longer available.
getSelection|Used to get left or right edge of selection.|This method is replaced by the methods `getSelectionStart` and `getSelectionEnd`.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igDatePicker.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported.
removeListItem|Used to remove item from list.|This method is removed. 
removeListItemAt|Used to remove item from list at index.|This method is removed. 
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is replaced by two new methods: `spinUp` and `spinDown`.
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does.

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
getSelectedDate|Gets selected date.
selectDate|Sets selected date.
getCalendar|<a name='getCalendar'></a>Returns a reference to the jQuery calendar used as a picker selector.
inputName|<a name='inputName'></a>Gets sets name attribute applied to the editor element
displayValue|<a name='displayValue'></a>Returns a string with all the characters shown in the input.
editorContainer|<a name='editorContainer'></a>Gets reference to jquery object which is used as top/outer element of igEditor.
showDropDown|<a name='showDropDown'></a>Show the dropdown list.
hideDropDown|<a name='hideDropDown'></a>Hide the dropdown list.
dropDownVisible|<a name='dropDownVisible'></a>Returns the visibility state of the drop down listing the items.
dropDownButton|<a name='dropDownButton'></a>Returns a reference to the dropdown button of the editor.
clearButton|<a name='clearButton'></a>Returns a reference to the clear button of the editor.
getSelectionStart|<a name='getSelectionStart'></a>Gets start index of the selected text in editor.
getSelectionEnd|<a name='getSelectionEnd'></a>Gets end index of the selected text in editor.
insert|<a name='insert'></a>Paste text at location of caret.
spinUp|<a name='spinUp'></a>Increase date-time period, depending on the cursor position.
spinDown|<a name='spinDown'></a>Decrease date-time period, depending on the cursor position.
spinUpButton|<a name='spinUpButton'></a>Returns a reference to the spin up button of the editor.
spinDownButton|<a name='spinDownButton'></a>Returns a reference to the spin down button of the editor.
spinDownButton|<a name='spinDownButton'></a>Returns a reference to the spin down button of the editor.

[See all API methods](%%jQueryApiUrl%%/ui.igdatepicker#methods)

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

[See all events](%%jQueryApiUrl%%/ui.igdatepicker#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0