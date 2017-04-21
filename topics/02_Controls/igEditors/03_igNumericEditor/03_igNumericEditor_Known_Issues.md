<!--
|metadata|
{
    "fileName": "ignumericeditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Editing","Known Issues"]
}
|metadata|
-->

# igNumericEditor Known Issues


##Known Limitations


- Numeric editors do not support group, or thousand separators and symbols, in Edit mode.
- When you have [`spinWrapAround`](%%jQueryApiUrl%%/ui.ignumericeditor#options:spinWrapAround) set to true without setting  [`minValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:minValue) or [`maxValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxValue) options the spin may not be able to wrap around when reaching the default limit set by the data mode. This is in case the  [`dataMode`](%%jQueryApiUrl%%/ui.ignumericeditor#options:dataMode) option is set to any of the following values: float, long or double. 
The reason for this behavior is that the maximum values for those data modes are big numbers that are represented in scientific notation in JavaScript. 
To bypass this limitation, you can set the [`maxValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxValue) and [`minValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:minValue) to a number that is not represented in scientific notation by JavaScript or you can enable the [`scientificFormat`](%%jQueryApiUrl%%/ui.ignumericeditor#options:scientificFormat) option in the Numeric, Percent and Currency editors. 


## Related Links
- [igNumericEditor Overview](igNumericEditor-Overview.html)
