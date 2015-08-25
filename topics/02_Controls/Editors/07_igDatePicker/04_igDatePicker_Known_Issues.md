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

**Known Issues**

-   To disable all triggers for the drop-down, the [`dropDownTriggers`](%%jQueryApiUrl%%/ui.igDatePicker#options:dropDownTriggers) option must be set to an empty string or to null.

-   If the `igEditor` control has the [`type`](%%jQueryApiUrl%%/ui.igDatePicker#options:type) option set to *"datepicker"* or igDatePicker then it is dependent on jQuery.datepicker and requires reference to `jquery.ui.datepicker.js` or to a combined library such as `jqueryui/1.8.7/jquery-ui.js.`

-   The igEditor control with [`type`](%%jQueryApiUrl%%/ui.igDatePicker#options:type) set to datepicker or igDatePicker does not support `textMode` option set to *"multiline"*, or a TEXTAREA element as a base element

For detailed list with known issues and breaking changes of all editors please visit: [igEditor Known Issues](igEditor-Known-Issues-DP.html)

## Related Links

- [igDatePicker Overview](igDatePicker-Overview.html)

 

 


