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


## Known Limitations


- Numeric editors do not support group, or thousand separators and symbols, in Edit mode.
- When you have [`spinWrapAround`](%%jQueryApiUrl%%/ui.ignumericeditor#options:spinWrapAround) set to true without setting  [`minValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:minValue) or [`maxValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxValue) options the spin may not be able to wrap around when reaching the default limit set by the data mode. This is in case the  [`dataMode`](%%jQueryApiUrl%%/ui.ignumericeditor#options:dataMode) option is set to any of the following values: float, long or double. 
The reason for this behavior is that the maximum values for those data modes are big numbers that are represented in scientific notation in JavaScript. 
To bypass this limitation, you can set the [`maxValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxValue) and [`minValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:minValue) to a number that is not represented in scientific notation by JavaScript or you can enable the [`scientificFormat`](%%jQueryApiUrl%%/ui.ignumericeditor#options:scientificFormat) option in the Numeric, Percent and Currency editors. 

## Limitations on numeric values
The Numeric editors process and store values as JavaScript numbers. The ECMAScript standard defines those values as based on the [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point#Basic_and_interchange_formats) double-precision [64-bit binary format](https://en.wikipedia.org/wiki/Double-precision_floating-point_format) which allows for a significand of 15-17 digits while also relying on floating point arithmetic which is not always 100% accurate.
Despite some measures in place, certain functions of the editors can only operate within the limits of the platform. 

This includes representation of very large integers or high precision floating-point format, both limited by the maximum significant digits that can be stored and are usually subject to rounding and loss of precision on operations.
For example the standard maximum `long` value of `9223372036854775807` which is well above limit of stored digits, therefore is rounded to the closest supported:
```bash
> 9223372036854775807
9223372036854776000
```
Note the rounding at the 17th digit. This can cause a value to be considered at the [`maxValue`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxValue) much sooner despite the obvious difference in the last 3 digits, because:
```bash
> 9223372036854775807 === 9223372036854775500
true
```
With floating-point numbers the limited significant digits similarly cause rounding to occur, irregardless of the place of the decimal point. For example:
```bash
> 1.2345678912345678912345
1.234567891234568
> 1234.5678912345678912345
1234.567891234568
```
With just the point changing position, the representation cuts off at relatively the same amount of digits. This is why options like [`minDecimals`](%%jQueryApiUrl%%/ui.ignumericeditor#options:minDecimals) and [`maxDecimals`](%%jQueryApiUrl%%/ui.ignumericeditor#options:maxDecimals) while limited to 15 cannot always guarantee such values as the limit applies to the whole significant part and digits before the radix point limit the precision of the decimal side.
Formatting for the minimum can still add to the set digits, but those would be an approximation rather than the actual value.

Note that since all numbers are stored in the same format, same applies to scientific E-notation numbers regardless of the value of the exponent (if any). Furthermore, with JavaScript's `toFixed()` limited to 20 digits, values with higher exponent simply cannot be formatted to fixed-point notation (however impractical that may be).
For example `1e+21` and larger can only be presented in scientific notation even if the [`scientificFormat`](%%jQueryApiUrl%%/ui.ignumericeditor#options:scientificFormat) option has not been specifically set. Values with negative exponent (smaller than 1) do expand to fixed with rounding and are likely to evaluate to `0`, which is why `scientificFormat` should be set if support for such values is required.



## Related Links
- [igNumericEditor Overview](igNumericEditor-Overview.html)
