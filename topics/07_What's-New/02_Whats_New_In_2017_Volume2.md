<!--
|metadata|
{
    "fileName": "whats-new-in-2017-volume2",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# What's New in 2017 Volume 2

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2017 Volume 1 release.


## What’s New Summary

The following summarizes what’s new in 2017 Volume 2. Additional details follow.

### General
Feature | Description
---|---
[New bundled files](#bundledFiles)| New bundled files for excel, spreadsheet and scheduler.

### Spreadsheet
Feature | Description
---|---
[Editing](#spreadsheetEditing)| Editing of spreadsheet content.
[MVC Wrapper](#spreadsheetMVCWrapper)| MVC wrapper for the spreadsheet control.

### Editors

Feature | Description
---|---
[Suppress Keyboard](#suppressKeyboard)| Prevents onscreen keyboard from showing when the dropdown button is clicked/tapped.

### igDateEditor/igDatePicker

Feature | Description
---|---
[Spin Delta as Object](#spinDeltaObject)| Spin delta can be configured as an object, which defines specific values for each time period.

### General

### <a id="bundledFiles"></a> New bundled files
New bundled files for excel, spreadsheet and scheduler have been included in 17.2 release. You can use them instead of defining individual required resources, or instead of using the igLoader. In order to run excel, spreadsheet or scheduler, it is needed to define the following bundled resources:

igGrid excel exporting using igExcel
```
<script type="text/javascript" src="igniteui/js/infragistics.core.js"></script>
<script type="text/javascript" src="igniteui/js/infragistics.lob.js"></script>
<script type="text/javascript" src="igniteui/js/infragistics.excel-bundled.js"></script>
<script type="text/javascript" src="igniteui/js/modules/infragistics.gridexcelexporter.js"></script>
```

igSpreadsheet
```
<script src="igniteui/js/infragistics.core.js"></script>
<script src="igniteui/js/infragistics.lob.js"></script>
<script src="igniteui/js/infragistics.excel-bundled.js"></script>
<script src="igniteui/js/infragistics.spreadsheet-bundled.js"></script>
```

igScheduler
```
<script src="igniteui/js/infragistics.core.js"></script>
<script src="igniteui/js/infragistics.lob.js"></script>
<script src="igniteui/js/infragistics.scheduler-bundled.js"></script>
```

## Spreadsheet

### <a id="spreadsheetEditing"></a> Editing of the spreadsheet content

Version 17.2 of the product adds support for editing of the spreadsheet's cells, extending the inaugural features of the Spreadsheet control. There are several new API events, methods and options that can be used when manipulating spreadsheet content.

New events: 
-   [`editModeEntering`](ui.igspreadsheet#events:editModeEntering) - Invoked when the Spreadsheet is about to start in-place editing of the [`activeCell`](ui.igspreadsheet#options:activeCell).
-   [`editModeEntered`](ui.igspreadsheet#events:editModeEntered) - Invoked when the Spreadsheet has started in-place editing of the [`activeCell`](ui.igspreadsheet#options:activeCell).
-   [`editModeExiting`](ui.igspreadsheet#events:editModeExiting) - Invoked when the Spreadsheet is about to end the in-place editing of the [`activeCell`](ui.igspreadsheet#options:activeCell).
-   [`editModeExited`](ui.igspreadsheet#events:editModeExited) - Invoked when the Spreadsheet has ended the in-place editing of the [`activeCell`](ui.igspreadsheet#options:activeCell).
-   [`editModeValidationError`](ui.igspreadsheet#events:editModeValidationError) - Invoked when the Spreadsheet is exiting edit mode and the new value for the [`activeCell`](ui.igspreadsheet#options:activeCell) is not valid based on the criteria of that cell's [`ig.excel.DataValidationRule`](ig.excel.DataValidationRule).


New methods:
-   [`getIsInEditMode()`](ui.igspreadsheet#methods:getIsInEditMode) - Indicates if the control is currently editing the value of the [`activeCell`](ui.igspreadsheet#options:activeCell).
-   [`getCellEditMode()`](ui.igspreadsheet#methods:getCellEditMode) - Returns an enumeration used to indicate the current edit mode state.

New options:
-   [`isFixedDecimalEnabled`](ui.igspreadsheet#options:isFixedDecimalEnabled) - Indicates whether a fixed decimal place is automatically added when a whole number is entered while in edit mode.
-   [`fixedDecimalPlaceCount`](ui.igspreadsheet#options:fixedDecimalPlaceCount) - Number of decimal places by which a whole number typed in during edit mode should be adjusted.

#### Related Topics
-   [igSpreadsheet Overview](igspreadsheet-overview.html)
-   [Editing API (igSpreadsheet)](igspreadsheet-editing.html) 

#### Related Samples
-   [Overview](%%SamplesUrl%%/spreadsheet/overview)
-   [View Configuration](%%SamplesUrl%%/spreadsheet/create-view-save)
-   [Import Data From Excel File](%%SamplesUrl%%/spreadsheet/loading-data)

## Editors

### <a id="suppressKeyboard"></a> Suppress Keyboard

The [`suppressKeyboard`](ui.igtexteditor#options:suppressKeyboard) option prevents the onscreen keyboard (if available on device) to be shown when the dropdown button is clicked/tapped. This option prevents initial focus or removes it when the drop button is clicked/tapped.

## igDateEditor/igDatePicker

### <a id="spinDeltaObject"></a> Spin Delta as Object

The [`spinDelta`](%%jQueryApiUrl%%/ui.igdateeditor#options:spinDelta) option can be configured as an object, which defines specific values for each time period.
Accepted values for client-side widget's deltas are positive integer numbers, and the fractional portion of floating point numbers is ignored.
Accepted values for MVC wrapper's deltas are integer numbers.

The option can accept the following format:

```
$("#editor").igDateEditor({
    value: new Date(2017, 11, 8, 1, 1, 1),
    dateInputFormat: "dateTime",
    spinDelta: {
        year: 4,
        month: 3,
        day: 10,
        hours: 12,
        minutes: 15,
        seconds: 10,
        milliseconds: 100
    }
});
```

In MVC:
```
@(Html.Infragistics()
	.DateEditor()
	.Value(new DateTime(2017, 11, 8, 1, 1, 1))
    .DateInputFormat("dateTime")
    .SpinDelta(deltas =>
    {
        deltas.Year(4);
        deltas.Month(3);
        deltas.Day(10);
        deltas.Hours(12);
        deltas.Minutes(15);
        deltas.Seconds(10);
        deltas.Milliseconds(100);
    })
	.Render())
```