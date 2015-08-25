<!--
|metadata|
{
    "fileName": "igdateeditor-keyboard-navigation",
    "controlName": "igDateEditor",
    "tags": []
}
|metadata|
-->

#Keyboard Navigation (igDateEditor)

##Topic overview
This topic explains how to use keyboard navigation so that end-users can easily and quickly navigate through inputs and interact with them.

### In this topic

This topic contains the following sections:

-   [Keyboard interactions](#skbInteraction)
-   [Selecting the editor](#skbInteraction)
-   [igNumericEditor with dropdown](#ddInteraction)


## <a id="skbInteraction"></a>Standard Keyboard interactions

You can use the standard key combinations for functionalists such as copy, cut, paste, undo and redo.  

Press| To
---|---
<kbd>Right Arrow</kbd>|Move the caret one char to the right
<kbd>Left Arrow</kbd>|Move the caret one char to the left
<kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd>|Move the caret one chunk to the right
<kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd>|Move the caret one chunk to the left
<kbd>Ctrl</kbd> + <kbd>Home</kbd> or just <kbd>Home</kbd>|Move the caret to the start of the input
<kbd>Ctrl</kbd> + <kbd>End</kbd> or just <kbd>End</kbd>|Move the caret to the end of the input
<kbd>Backspace</kbd>|Delete the previous char
<kbd>Delete</kbd>|Delete the following char
<kbd>Ctrl</kbd> + <kbd>Backspace</kbd>|Delete the previous chunk
<kbd>Ctrl</kbd> + <kbd>Delete</kbd>|Delete the following chunk
<kbd>Delete</kbd> + <kbd>Backspace</kbd> | Delete selected content
<kbd>Up Arrow</kbd>| Increment the number in the input
<kbd>Down Arrow</kbd>| Decrement the number in the input

## <a id="kbInteraction"></a>Selecting the editor

In this section you can see the key combinations that can be used to focus the editor and select part of its value or the whole one.

Press| To
---|---
<kbd>Tab</kbd> or <kbd>Shift</kbd> + <kbd>Tab</kbd>|Focus the editor
<kbd>Shift</kbd> + <kbd>Tab</kbd>|Focus the previous component
<kbd>Tab</kbd>|Focus the following component
<kbd>Shift</kbd> + <kbd>Right Arrow</kbd>|Select char to the right
<kbd>Shift</kbd> + <kbd>Left Arrow</kbd>|Select char to the left
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Right Arrow</kbd>|Select to current chunk end or select one chunk to the right
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Left Arrow</kbd>|Select to current chunk start or select one chunk to the left
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> or <kbd>Shift</kbd> + <kbd>Home</kbd>|Select value in the input till start
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> or <kbd>Shift</kbd> + <kbd>End</kbd>|Select value in the input till end
<kbd>Ctrl</kbd> + <kbd>A</kbd> |Select the whole value in the input 

## <a id="ddInteraction"></a> igDatePicker special navigation


Press| To
---|---
<kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Open the dropdown, when the focus is in the input
<kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Close the dropdown, when the focus is in the input
<kbd>Down Arrow</kbd> | Spin down the date, month or year depending on the position of the mouse indicator.
<kbd>Up Arrow</kbd> | Spin up the date, month or year depending on the position of the mouse indicator.
<kbd>Right Arrow</kbd> | Move to next item when the focus is on the date, month or on the year in the calendar.
<kbd>Left Arrow</kbd> | Move to previous item when the focus is on the date, month or on the year in the calendar.
<kbd>Down Arrow</kbd> | Move from month to date, when the focus is in the month OR to move to the below row if the focus is on a date.
<kbd>Up Arrow</kbd> | Move from date to month, when the focus is on the date at the top row of the calendar OR to move to the above row, when the focus is on date in a row different from the top row of the calendar.
<kbd>Enter</kbd> | Confirm focused item as selected
<kbd>Enter</kbd> or <kbd>Alt</kbd> + <kbd>Up Arrow</kbd>| Reject focused item and keep old selection
