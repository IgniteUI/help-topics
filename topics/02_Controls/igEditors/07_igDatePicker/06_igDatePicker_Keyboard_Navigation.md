<!--
|metadata|
{
    "fileName": "igdatepicker-keyboard-navigation",
    "controlName": "igDatePicker",
    "tags": []
}
|metadata|
-->

#Keyboard Navigation (igDatePicker)

##Topic overview
This topic explains how to use keyboard navigation so that end-users can easily and quickly navigate through inputs and interact with them.

### In this topic

This topic contains the following sections:

-   [Keyboard interactions](#skbInteraction)
-   [Selecting the editor](#skbInteraction)
-   [igDatePicker specific navigation](#ddInteraction)


## <a id="skbInteraction"></a>Standard Keyboard interactions

You can use the standard key combinations for functionalists such as copy, cut, paste, undo and redo and these further ones.  

Press| To
---|---
<kbd>Right Arrow</kbd>|Move the caret one char to the right
<kbd>Left Arrow</kbd>|Move the caret one char to the left
<kbd>Ctrl</kbd> + <kbd>Right Arrow</kbd>|Move the caret one part of date to the right
<kbd>Ctrl</kbd> + <kbd>Left Arrow</kbd>|Move the caret one part of date to the left
<kbd>Ctrl</kbd> + <kbd>Home</kbd> or just <kbd>Home</kbd>|Move the caret to the start of the input
<kbd>Ctrl</kbd> + <kbd>End</kbd> or just <kbd>End</kbd>|Move the caret to the end of the input
<kbd>Backspace</kbd>|Delete the previous char
<kbd>Delete</kbd>|Delete the following char
<kbd>Ctrl</kbd> + <kbd>Backspace</kbd>|Delete the previous part of date
<kbd>Ctrl</kbd> + <kbd>Delete</kbd>|Delete the following chunk
<kbd>Delete</kbd> + <kbd>Backspace</kbd> | Delete the following part of date
<kbd>Up Arrow</kbd>| Increment the current part of date in the input
<kbd>Down Arrow</kbd>| Decrement the current part of date in the input

## <a id="kbInteraction"></a>Selecting the editor

In this section you can see the key combinations that can be used to focus the editor and select part of its value or the whole one.

Press| To
---|---
<kbd>Tab</kbd> or <kbd>Shift</kbd> + <kbd>Tab</kbd>|Focus the editor
<kbd>Shift</kbd> + <kbd>Tab</kbd>|Focus the previous component
<kbd>Tab</kbd>|Focus the following component
<kbd>Shift</kbd> + <kbd>Right Arrow</kbd>|Select to current part of date end or select the following one
<kbd>Shift</kbd> + <kbd>Left Arrow</kbd>|Select to current part of date start or select the previous one
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Right Arrow</kbd>|Select to current chunk end or select one chunk to the right
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Left Arrow</kbd>|Select to current chunk start or select one chunk to the left
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Home</kbd> or <kbd>Shift</kbd> + <kbd>Home</kbd>|Select value in the input till start
<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>End</kbd> or <kbd>Shift</kbd> + <kbd>End</kbd>|Select value in the input till end
<kbd>Ctrl</kbd> + <kbd>A</kbd> |Select the whole value in the input 

## <a id="ddInteraction"></a> igDatePicker specific navigation


Press| To
---|---
<kbd>Alt</kbd> + <kbd>Down Arrow</kbd> | Open the dropdown, when the focus is in the input
<kbd>Alt</kbd> + <kbd>Up Arrow</kbd> | Close the dropdown, when the focus is in the input
<kbd>Down Arrow</kbd> | | Spin down the current part of date depending on the position of the mouse indicator
<kbd>Up Arrow</kbd> | Spin up the current part of date depending on the position of the mouse indicator
<kbd>Right Arrow</kbd> | Move to the next item in the calendar for the current part of date.
<kbd>Left Arrow</kbd> | Move to the previous item in the calendar for the current part of date.
<kbd>Down Arrow</kbd> | Move from month to date, when the focus is in the month OR move to the below row of dates, if the focus is on a date.
<kbd>Up Arrow</kbd> | Move from date to month, when the focus is on the date at the top row of the calendar OR to move to the above row, when the focus is on date in a row different than the top one of the calendar.
<kbd>Enter</kbd> | Confirm focused item as selected
<kbd>Enter</kbd> or <kbd>Alt</kbd> + <kbd>Up Arrow</kbd>| Reject focused item and keep old selection
