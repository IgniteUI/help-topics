<!--
|metadata|
{
    "fileName": "igdateeditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Editing","Known Issues"]
}
|metadata|
-->

# igDateEditor Known Issues

##Known Limitations

- Changing value after initialization for [`dateInputFormat`](%%jQueryApiUrl%%/ui.igdateeditor#options:dateInputFormat) option is not supported.
- Using `new Date()` for the for the `minValue`, `maxValue` and the `value` options can cause issues as it also has a time component that will be taken into account when evaluating limits (but not included and parsed from the default input format), so it's suggested to parse fixed dates or remove the time component:
	
	** In JavaScript**
	```js
	var date = new Date();
	// remove hours:
	date.setHours(0,0,0,0);
	// or use constructor with string/values:
	date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
	$('#datePicker').igDateEditor({
        minValue: date
    });
	```

## Related Links
-   [igDateEditor Overview](igDateEditor-Overview.html)

 

 


