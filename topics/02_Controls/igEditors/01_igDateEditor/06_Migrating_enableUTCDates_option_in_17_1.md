<!--
|metadata|
{
    "fileName": "migrating-enableUTCDates-option-in-17-1",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating date handling in 17.1

## Date handling from 17.1 for igDateEditor and igDatePicker

The `igDateEditor` and `igDatePicker` offer several options to properly handle dates in the different time zones. The properties below describe how the both editors show dates and how they serialize them, in order to be transferred correctly.
-	[`displayTimeOffset`](%%jQueryApiUrl%%/ui.igdateeditor#options:displayTimeOffset) - gets/sets time zone offset from UTC, in minutes. The client date values are displayed with this offset instead of the local one, which are automatically transformed by the client browser. If you want to display UTC dates, then the value needs to be set to 0.
-	[`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) - is no longer related to the display value of the editor, it only controls how the date will be serialized. Enables/Disables serializing client date as UTC ISO 8061 string instead of using the local time and zone values. The option is only applied in "date" [`dataMode`](%%jQueryApiUrl%%/ui.igdateeditor#options:dataMode).

	For example 10:00 AM from a client with local offset of 5 hours ahead of GMT will be serialized as: "2016-11-11T10:00:00+05:00" with the option default 'false' value. If set to "true" the date will use the ISO UTC format: "2016-11-11T05:00:00Z".

## Date handling up to 16.2 for igDateEditor and igDatePicker

The option [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) is used to display `Date` to the user (via `getUTCDate()`, `getUTCHours()`, etc.) and handle potentially ambiguous string values as UTC values in 16.2.
-	If [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) enabled, the display value in the editor is the UTC time, no matter what is the client browser offset. Let's assume the browser offset is GMT+02:00 and the value sent from the server is has time 5 AM in GMT. This means that the editor will display 5 AM, instead of 7 AM, which is the one the browser uses locally. 
-	Depending on the type of initial one set, the value of the editor (returned from `value()` method or submitted) could also differ from what the default browser handling - in other words shifted to UTC, different in underlying time value from what the browser would create as local date. As this could lead to unexpected results, in 17.1 the editor value is no longer manipulated.

## Migrate igDateEditor igDatePicker from 16.2 and 17.1

### Displaying the UTC value

In this example the date editors are displaying a date with time equivalent to 10:55AM in GMT, explicitly assigned in the code below for clarity. Both are configured to display that UTC value instead of the local time dependant of each client's zone.

Up to 16.2 the configuration enabled the `enableUTCDates` option:

```js
$('#edtr').igDateEditor({
	value: new Date(Date.UTC(2016, 1, 9, 10, 55, 55)),
	dateInputFormat : "dateTime",
	enableUTCDates: true
});
```

From 17.1 `displayTimeOffset` overtakes that functionality, where a value of `0` would be the equivalent of showing dates in UTC (no offset), so the above example becomes:

```js
$('#edtr').igDateEditor({
	value: new Date(Date.UTC(2016, 1, 9, 10, 55, 55)),
	dateInputFormat : "dateTime",
	displayTimeOffset: 0
});
```
Both versions produce "2/9/2016 10:55 AM" (in US format), with the addition of `displayTimeOffset` as non-boolean allows to display both UTC or a completely custom offset, while keeping the underlying value untouched.

### ASP.NET MVC Helpers

While upgrading to version 17.1 may not necessarily require any action, it's important to note the differences. In previous versions, when handling `DateTime` values, the ASP.NET MVC wrappers always created a Date for the client with the server values.
Take the following example:

```csharp
@(Html.Infragistics()
	.DateEditor()
	.DateInputFormat("dateTime")
	.Value(new DateTime(2016, 1, 9, 10, 55, 55))
	.ID("StartHour")
	.Render())
```

The above configuration, which defines an hour on the server, will show the same hour on the client, in that case it is 10 o'clock. This is because the server date will render a new JavaScript `Date` for the client widget, similar to:
```
value: new Date(2016, 1, 9, 10, 55, 55);
```
While this will produce the correct display, it actually creates a local date on the client so the underlying time value would actually be different based on the client time zone. This means the server and client values display the same but actually point to different points in time and that can lead to unexpected handling of values when transferring between them, especially using the default "date" [`dataMode`](%%jQueryApiUrl%%/ui.igdateeditor#options:dataMode) which serializes the client value based on the UTC value per the ISO 8061 format.

For that reason from 17.1 the ASP.NET wrappers also use the ISO 8061 format to initialize the client widget with the correct value and allow for consistent round-trip transfer of values. For backwards compatibility, the helpers will also output the new [`displayTimeOffset`](%%jQueryApiUrl%%/ui.igdateeditor#options:displayTimeOffset) value based on the server time by default, thus for a server in GMT+1 the above example will render to the client as:

```js
value: '2016-01-09T09:55:55.0000000Z',
displayTimeOffset: 60
```

Which will again display to the client as "10:55AM", but the original value remains unchanged and maps to the exact same time value the server uses.

> **Note:** Keep in mind that the `displayTimeOffset` is a static value that can't account for Daylight Saving. It is always recommended for applications to always run on serves that are configured in GMT (not affected by DST), otherwise additional steps might be required to account for changes in offset for each specific date value.

## Related Topics

For more information of how to show the specific client date, please follow the [Using %%ProductName%% controls in different time zones](Using-IgniteUI-controls-in-different-time-zones.html) topic and specifically the Ignoring server date and displaying the specific client one section.

