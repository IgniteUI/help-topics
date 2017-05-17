|metadata|
{
    "fileName": "migrating-enableUTCDates-option-in-17-1",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating enableUTCDates option in 17.1

## Date handling in 17.1 for igDateEditor and igDatePicker

The `igDateEditor` and `igDatePicker` propose several options, which allows to properly handles dates in the different time zones. The properties below describe how the both editors show dates and how they serialize them, in order to be transferred correctly.
-	[`displayTimeOffset`](%%jQueryApiUrl%%/ui.igdateeditor#options:displayTimeOffset) - gets/sets time zone offset from UTC, in minutes. The client date values are displayed with this offset instead of the local one, which are automatically transformed by the client browser. If you want to display UTC dates, then the value needs to be set to 0.
-	[`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) - is not related anymore to the display value of the editor, it only cares of how the date will be serialized. Enables/Disables serializing client date as UTC ISO 8061 string instead of using the local time and zone values. The option is only applied in "date" dataMode. The [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) option can be used to output an UTC ISO string instead. For example 10:00 AM from a client with local offset of 5 hours ahead of GMT will be serialized as: "2016-11-11T10:00:00+05:00". This is when the option gets the default ‘false’ value. Otherwise the date will use the ISO UTC format: “2016-11-11T05:00:00Z”

## Date handling in 16.2 for igDateEditor and igDatePicker

The option [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) was only used, when trying to modify date editor/picker value, display value and serialization in 16.2.
-	If [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) was enabled, then this was meaning that the display value in the editor was going to be the UTC time, no matter what is the client browser offset. Let’s assume the browser offset is GMT+02:00 and the value sent from the server is “2016-11-11T05:00:00Z”. This means that the editor will show as an hour 5 AM, instead of 7 AM, which is the one transformed by the browser. 
-	The value that editor returns using `value()` method was also the date displayed in the editor. This is value different from the value that browser is converting, so we can say it was a shifted to UTC date, related to the browser local date. This was a little bit messy that’s why in 17.1 the value in that method returns not shifted date, but the one that browse has created. That’s why, if you want to have the value, displayed in the editor, as a date object, you will need to manually shift it, according to the current offset.

## Migrate igDateEditor igDatePicker from 16.2 and 17.1

If you want to display UTC time in the 17.1 editors, the following code can be used:

```
$('#edtr').igDateEditor({
	displayTimeOffset: 0
});
```

In 16.2 the configuration was:

```
$('#edtr').igDateEditor({
	enableUTCDates: true
});
```

In MVC 17.1:

```
@(Html.Infragistics()
	.DateEditor()
	.Value(new DateTime(2016, 1, 9, 10, 55, 55))
	.ID("StartHour")
	.DisplayTimeOffset(0)
	.Render())
```

In MVC 16.2:

```
@(Html.Infragistics()
	.DateEditor()
	.Value(new DateTime(2016, 1, 9, 10, 55, 55))
	.ID("StartHour")
	.EnableUTCDates(true)
	.Render())
```

Note that above configuration, which defines an hour on the server, will show the same hour on the client, in that case it is 10 o’clock, no matter what is the client time zone. This is the default Editors MVC wrapper behavior, when the [`displayTimeOffset`](%%jQueryApiUrl%%/ui.igdateeditor#options:displayTimeOffset) is not defined. This was the way it works also in 16.2 version, the difference is only how the MVC wrapper renders it in both versions. While in 16.2 version, it will render a new JavaScript date, taking all the values from the server. In that case it will be:

```
value: new Date(2016, 1, 9, 10, 55, 55);
```

In 17.1 the date is formatted as UTC string, and the server time zone offset is send as an option:

```
value: '2016-01-09T09:35:55.0000000Z',
displayTimeOffset: 60
```

For more information of how to show the specific client date, please follow the [Using Ignite UI controls in different time zones](Using-IgniteUI-controls-in-different-time-zones.html) topic and specifically the Ignoring server date and displaying the specific client one paragraph.

