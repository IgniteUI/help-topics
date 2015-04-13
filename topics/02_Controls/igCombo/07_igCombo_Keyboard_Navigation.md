<!--
|metadata|
{
    "fileName": "igCombo-keyboard-navigation",
    "controlName": "igCombo",
    "tags": []
}
|metadata|
-->

#Keyboard Navigation (igCombo)

##Topic overview
This topic explains how to use keyboard navigation so that end-users can easily and quickly navigate through items or change the selected/highlighted items.

### In this topic

This topic contains the following sections:

-   [Keyboard interactions](#kbInteraction)
-   [Multiselection](#multiselection)
	-   [Shift interaction](#shiftInteraction)
	-   [Ctrl interaction](#ctrlInteraction)
-   [From browser](#fromBrowser)

## <a id="kbInteraction"></a> Keyboard interactions
### Overview


Press| To| When
---|---|---
<kbd>Alt</kbd> + <kbd>Down arrow</kbd>|Open drop down| Drop down is closed
<kbd>Alt</kbd> + <kbd>Up arrow</kbd>|Close drop down| Drop down is opened
<kbd>Ctrl</kbd> + <kbd>Home</kbd>|Move to very first item in drop down| Drop down is opened
<kbd>Ctrl</kbd> + <kbd>End</kbd>|Move to very last item| Drop down is opened
<kbd>Page Up</kbd>|Move to first visible item| Drop down is opened
<kbd>Page Down</kbd>|Move to last visible item| Drop down is opened
<kbd>Up arrow</kbd>|Move to prev item; Close drop down if opened | Drop down is opened or closed
<kbd>Down arrow</kbd>|Move to next item; Open drop down if closed| Drop down is opened or closed
<kbd>Esc key</kbd>|Clear content when there isn’t selected item | There is content in the input
<kbd>Esc key</kbd>|Close the drop down| The drop down is opened
<kbd>Enter key</kbd>|Select the active item| There is active item

##<a id="multiselection"></a>Multiselection
###<a id="shiftInteraction"></a>Shift interactions

When press|Then
---|---
<kbd>Shift</kbd>|The item is highlighted to active state
<kbd>Shift</kbd>|If you don’t select more than one item nothing happens, the item stays in active state.
<kbd>Shift</kbd> + <kbd>Up/Down arrows</kbd> |will change the active (highlighted) items and if you release <kbd>Shift key</kbd> the active items will be selected.
<kbd>Shift</kbd> + <kbd>Enter</kbd>|**Scenario**: If you select item (with the mouse) and move the active item with up/down arrow key on <kbd>Shift</kbd> + <kbd>Enter</kbd> the items state, between the first and last selected items, will be changed to Selected.

> **Note:** <kbd>Shift key</kbd> only select items

###<a id="ctrlInteraction"></a>Ctrl interaction (addWithKeyModifier option set to true)
By default if MultiSelection is enabled the end user can select multiple items by simply clicking with left mouse button. In order to select multiple items with <kbd>Ctrl</kbd> `addWithKeyModifier` option must be set to `true`.


##<a id="fromBrowser"></a> From browser

Press| To
---|---
<kbd>Left arrow</kbd>|Move cursor one char left
<kbd>Right arrow</kbd>|Move cursor one char right
<kbd>Ctr + Left</kbd>|Move cursor one word to the left
<kbd>Ctr + Right</kbd>|Move cursor one word to the right
<kbd>Shift</kbd>|Seletion of the text when moving cursor
<kbd>Delete</kbd>, <kbd>Backspace</kbd>|Clear only the selected text
<kbd>Delete</kbd>, <kbd>Backspace</kbd>|Clear char by char
<kbd>Enter key</kbd>|Select item
<kbd>Home key</kbd>|Move cursor to input text start
<kbd>End key</kbd>|Move cursor to input text end
<kbd>Backspace key</kbd>|Clear all the contents of the combo box (Hold the key; <kbd>Ctrl+A</kbd>)