<!--
|metadata|
{
    "fileName": "igspreadsheet-selection",
    "controlName": "igSpreadsheet",
    "tags": []
}
|metadata|
-->

# igSpreadsheet Selection Interactions

## Topic Overview
### Purpose
This topic explains what actions can be performed by the user when selecting worksheet cells.

### Requred background
To understand this topic you need to be familiar with the concept and topics related to the [Infragistics JavaScript Excel Library](javascript-excel-library.html).

## Selection

The igSpreadsheet control supports three selection modes: Normal, ExtendenSelection and AddToSelection. In this topic we will cover those modes explaining what is the difference between them.

### Normal

The default value for the `selectionMode` option is normal. When the selection mode is set to normal the selection is done by dragging the mouse to select a cell or range of cells. In this mode every new selection replaces the old one.Similarly when you use the keyboard navigation to select a cell to range of cells, a new selection is created. If you want instead of replacing the selection to add a new selection to the existing one, you need to hold the <kbd>Ctrl</kbd> button and select the new range with your mouse. If you need to alter the selected range containing the active cell, you need to hold the <kbd>Shift</kbd> button and click with the mouse or navigate via keyboard with arrow keys.

![](images/igSpreadsheet_Normal.png)

```js
$("#spreadsheet").igSpreadsheet({
    height: "600",
    width: "75%",
    selectionMode: "normal"
});
```

### ExtendedSelection

In the case where the selection mode is set to extendedSelection then the selection range is only one and it is enclosed between the active cell and the cell selected by the mouse or navigating the keyboard. If you need to move the active cell this can be done, by holding the <kbd>Ctrl</kbd> key and using the mouse.

```js
$("#spreadsheet").igSpreadsheet({
    height: "600",
    width: "75%",
    selectionMode: "extendedSelection"
});
```

### AddToSelection

The last avaliable value for the `selectionMode` option is addToSelection. This mode allows new cells ranges to be added without the need of holding the <kbd>Ctrl</kbd> button. The user may click on cell(s) to add it (them) to the current selection.

![](images/igSpreadsheet_addToSelection.png)

```js
$("#spreadsheet").igSpreadsheet({
    height: "600",
    width: "75%",
    selectionMode: "addToSelection"
});
```



## User Interaction and Usability

The following table summarizes the user inteaction capabilities of the igSpreasheet control.

The user can...| Using...|Details
---|---|---
Select a single cell| Click on it or Press <kbd>Shift</kbd> + <kbd>Arrow</kbd>| A single cell will be selected (this will be the activ cell).
Select a range of cells| Click the start cell and drag or Hold the <kbd>Shift</kbd> key and select cells with Arrow keys.| A range of cells will be selected. The cell from which the user starts the selection range will be the active cell.
Select several cells/cell ranges|Hold <kbd>Ctrl</kbd> key pressed while selecting cells/cell ranges. | Use the steps described in the previous two table rows to add single cell or multiple cell ranges to the current selection.
Enter/Exit **ExtendedSelection** mode | Press <kbd>F8</kbd> | This key combination will toggle between **Normal** and **ExtendedSelection** modes.
Enter/Exit **AddToSelection** mode | Press <kbd>Shift</kbd> + <kbd>F8</kbd> | This key combination will toggle between Normal and AddToSelection modes.

>**Note**: If the user has more than one worksheet selected and perform selection in the active worksheet all other selected worksheets will get the same selection and subsequent operations will be executed over all selected worksheets.

## Related Links
-   [igSpreadsheet Overview](igSpreadsheet-Overview.html)
-   [igSpreadsheet Overview](igSpreadsheet-Activation-and-Navigation-Interaction.html)


