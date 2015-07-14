<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igcurrencyeditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igCurrencyEditor

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igCurrencyEditor`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old currency editor to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

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
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the dropdown list and changing the value in the editor from a list.|This option is removed. If `readOnly` is set to `true` the dropdown list cannot be displayed.
dropDownTriggers|-|This option is removed. Now `Alt` + `down-arrow` shows dropdown.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed. You can use [preventSubmitOnEnter](#preventSubmitOnEnter) option to prevent submitting when pressing Enter.
listColumns|-|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element. 
listMaxHeight|Used to set maximum height of dropdown list in pixels.|This option is removed. You can use the new option [visibleItemsCount](#visibleItemsCount) to set the number of visible list items.
negativeSign|Used to set the character, which is used for negative numeric values.|Only valid cultural signs are allowed for this option.
nullable|This option was used to set ability to prevent null value.|This option is renamed to `allowNullValue` to better communicate what it does.
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events. |This option is removed. Setting `readOnly` to `true` disables the spin buttons.
symbol|Used to set currency symbol, which is used in display (no focus) state.|This option is renamed to `currencySymbol` to better communicate what it does.
textAlign|Default was `null`|Now default is `left`.
theme|-|This option is removed.
validatorOptions |-|This option is removed.

<a name='new_options'></a>
### New options

Option| Description
---|---
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#currencyEditor').igCurrencyEditor({ disabled: true }] })`.
listItemHoverDuration|<a name='listItemHoverDuration'></a>Use to set the hover/unhover animation duration of items inside the dropdown list: `$('#currencyEditor').igCurrencyEditor({ listItems: [1, 2, 3, 4], listItemHoverDuration: 400 }] })`.
visibleItemsCount|<a name='visibleItemsCount'></a>Use to set how many items should be shown at once: `$('#currencyEditor').igCurrencyEditor({ listItems: [1, 2, 3, 4], visibleItemsCount: 2 }] })`.
isLimitedToListValues|<a name='isLimitedToListValues'></a>Use to set the ability to allow values only set into the list items. This validation is done only when the editor is blured, or enter key is pressed: `$('#currencyEditor').igCurrencyEditor({ listItems: [5, 10, 20, 50], isLimitedToListValues: true }] })`.
revertIfNotValid|<a name='revertIfNotValid'></a>Use to set the editor to revert value to previous value in case of not valid value on blur, or enter key. If set to false clear is called: `$('#currencyEditor').igCurrencyEditor({ listItems: [1, 2, 3, 4, 5], isLimitedToListValues: true, revertIfNotValid: false }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed: `$('#currencyEditor').igCurrencyEditor({ preventSubmitOnEnter: true }] })`.
dropDownOrientation|<a name='dropDownOrientation'>Use to set drop down opening orientation for the dorp down list when open button is clicked: `$('#currencyEditor').igCurrencyEditor({ listItems: [1, 2, 3, 4, 5], dropDownOrientation: 'top' }] })`.

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
addListItem|Used to add the object within item at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
addListItems|Used to add the objects within the items array at the location indicated by the index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
clearListItems|Removed all items from list.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
dropDownElement|Got reference to jquery object which is used as container of dropdown.|This method is renamed to `dropDownContainter` to better communicate what it does.
dropDownVisible|Set visibility of dropdown list according to the Boolean value that is passed.|This method is replaced by [showDropDown:](#showDropDown) and [hideDropDown:](#hideDropDown).
findListItemIndex|Found index of list item by text that matches with the search parameters|We should provide only one numeric parameter `number` and look for exact matches of it (e. g. 15.00 would equal 15).
getSelectedText|Used to get selected text in editor.|This method is removed as it doesn't make sense to have such a method in currency editor.
getSelection|Used to get left or right edge of selection.|This method is removed as it doesn't make sense to have such a method in currency editor.
getValueByMode|Used to get value in editor by dataMode.|This method is not supported.
hasInvalidMessage|Used to check if invalid message is displayed.|This method is removed as its` functionality is covered by the API for the igEditorNotifier.
mainElement|Used to get reference to jquery object which is used as top/outer element of igNumericEditor.|This method is renamed to `editorContainter` to better communicate what it does.
paste|Used to paste text at location of caret.|This is renamed to `insert` and the `txt` parameter is renamed to `string` as it is a numeric string of characters.
remove|This was used to remove editor from its parent element, but keeps the rest of functionality|This method is not supported. 
removeListItem|Used to remove item from list.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
removeListItemAt|Used to remove item from list at index.|This method is removed. You should manipulate your data object and rebind the UI component to the updated data for such a scenario.
select|Used to select text in editor. Valid parameters: `sel0`, `sel1`, `val`|`sel0` is renamed to `start` and `sel1` is renamed to `end` to prevent exchanging the two parameters. 
setFocus|Used to set focus to editor with delay.  If parameter was -1, then focus was set without delay.|It now supports only positive values for the delay and 0 is default that signifies that it is immediately given the focus.
spin|Used to increment (positive delta) or decrement (negative delta) value in editor according to the parameter.|This method is replaced by two new methods: `spinUp` and `spinDown`. This method works only on the value and not with the dropdown navigation. For the latter you should use [selectListIndexUp:](#selectListIndexUp) or [selectListIndexDown:](#selectListIndexDown) method.
text|Used to get or set text in editor.|This is replaced by a getter method `displayValue` that takes no parameters and returns a string with all the characters shown in the input.
validate|Used to trigger validation of editor and show error message. It had a single parameter: `noLabel`|The parameter is renamed to `skipErrorMessage`.
value|Used to get or set value in editor.|The parameter is renamed to `newValue` to better communicate what it does.

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
currencySymbol|<a name='currencySymbol'></a>Gets/sets a string that is used as the currency symbol shown with the number in the input. The value provided as a param is propagated to the currencySymbol option and thus has the same priority as the option.
showDropDown|<a name='showDropDown'></a>Show the dropdown list.
hideDropDown|<a name='hideDropDown'></a>Hide the dropdown list.
selectListIndexUp|<a name='selectListIndexUp'></a>Moves the selection index to the item that appears above the current one in the list.
selectListIndexDown|<a name='selectListIndexDown'></a>Moves the selection index to the item that appears above the current one in the list.
clearButton|Returns a reference to the clear button of the editor.
dropDownButton|Returns a reference to the dropdown button of the editor.
spinUpButton|Returns a reference to the spin up button of the editor.
spinDownButton|Returns a reference to the spin down button of the editor.
dropDownVisible|Returns the visibility state of the drop down listing the items.

[See all API methods](%%jQueryApiUrl%%/ui.igcurrencyeditor#methods)

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
rendering|<a name='dropDownListOpening'></a>Event which is raised before rendering of the editor completes.
rendered|<a name='rendered'></a>Event which is raised after rendering of the editor completes.
dropDownListOpening|<a name='dropDownListOpening'></a>Event which is raised when the drop down is opening.
dropDownListOpened|<a name='dropDownListOpened'></a>Event which is raised when the drop down is already opened.
dropDownListClosing|<a name='dropDownListClosing'></a>Event which is raised when the drop down is closing.
dropDownListClosed|<a name='dropDownListClosed'></a>Event which is raised when the drop down is already closed.

[See all events](%%jQueryApiUrl%%/ui.igcurrencyeditor#events)

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.9.1
jQuery UI|1.7|1.9.0
