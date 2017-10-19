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

### Editors

Feature | Description
---|---
[Suppress Keyboard](#suppressKeyboard)| Prevents onscreen keyboard from showing when the dropdown button is clicked/tapped.

### igDateEditor/igDatePicker

Feature | Description
---|---
[Spin Delta as Object](#spinDeltaObject)| Spin delta can be configured as an object, which defines specific values for each time period.


### igScheduler
Feature | Description
---|---
[Week View](#weekView)| Visualizing the activities by rendering them in a vertical list with time slots.|
[Day View](#dayView)| Visualizing the activities by rendering them in a vertical list with time slots. The time slots' duration can be configured.|
[Recurrent Activity](#recurrentActivity)| Used when you need to have repetitions of an activity following a specific recurrence pattern (for example each day at a specific hour or each month at a specific date).


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


## igScheduler

### <a id="weekView"></a> Week View
This view is visualizing the activities by rendering them in a vertical list with time slots. It is possible to show all seven week days or only the working days by using `weekViewDiplayMode` property.
Configuration to show all 24 hours or only the working hours is also possible.


### <a id="dayView"></a> Day View
Visualizing the activities by rendering them in a vertical list with time slots. Each activity occupies only the time slots between its start and end time.
This view has the ability to show up to 7 days. You can configure the day view to display all 24 hours or only the working hours.

### <a id="recurrentActivity"></a> Recurrent Activity
The activity recurrence is used when you need to have repetitions of an activity following a specific recurrence pattern (for example each day at a specific hour or each month at a specific date).

