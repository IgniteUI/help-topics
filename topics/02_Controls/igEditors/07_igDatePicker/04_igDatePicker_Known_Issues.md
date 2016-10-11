<!--
|metadata|
{
    "fileName": "igdatepicker-known-issues",
    "controlName": "igDatePicker",
    "tags": ["Known Issues"]
}
|metadata|
-->

# igDatePicker Known Issues


##Known Limitations

- Changing value after initialization for [`dateInputFormat`](%%jQueryApiUrl%%/ui.igdatepicker#options:dateInputFormat) option is not supported.
- `igDatePicker`™ is dependent on jquery-datepicker and requires reference to either `jquery.ui.datepicker.js` or to combined library such as `jqueryui/1.9.1/jquery-ui.js`.
- Using `new Date()` for the for the [`minValue`](%%jQueryApiUrl%%/ui.igdatepicker#options:minValue), [`maxValue`](%%jQueryApiUrl%%/ui.igdatepicker#options:maxValue) (including respective datepicker options like `minDate`) and the [`value`](%%jQueryApiUrl%%/ui.igdatepicker#options:value) options can cause issues as it also has a time component that will be taken into account when evaluating limits (but not included and parsed from the default input format), so it's suggested to parse fixed dates or remove the time component:
	
	** In JavaScript**
	```js
	var date = new Date();
	// remove hours:
	date.setHours(0,0,0,0);
	// or use constructor with string/values:
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    $('#datePicker').igDatePicker({
        dataMode: 'date',
        datepickerOptions: {
            minDate: date
        }
    });
	```

## Related Links
-   [igDatePicker Overview](igDatePicker-Overview.html)

 

 


