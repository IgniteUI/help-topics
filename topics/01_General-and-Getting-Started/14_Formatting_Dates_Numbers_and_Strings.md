<!--
|metadata|
{
    "fileName": "formatting-dates-numbers-and-strings",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Formatting Dates, Numbers and Strings

## Topic Overview

### Purpose

This topic explains how to format dates, numbers and strings using the $.ig.formatter utility function.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Formatting Dates**](#formatting-dates)
-   [**Formatting Numbers**](#formatting-numbers)
-   [**Formatting Strings**](#formatting-strings)

## <a id="introduction"></a> Introduction

The `infragistics.util.js` file contains an utility function `$.ig.formatter` that is used to format dates, numbers and strings across the %%ProductName%% controls. For example the igGrid uses it in the [format](%%jQueryApiUrl%%/ui.iggrid#options:columns.format) option.
The function signature is: `$.ig.formatter = function (val, type, format, notTemplate, enableUTCDates, displayStyle, labelText, tabIndex)`. Result is of type `string`.

The topic will focus only on the first three parameters of the function:

- val - the value that is going to be formatted.
- type - data type of the value.
- format - format specifier (explained in detail in the following sections).

The function takes into an account the regional settings configured in the `$.ig.regional.defaults` variable.

Following sections will explain the usage of `$.ig.formatter` in greater detail.

## <a id="formatting-dates"></a> Formatting Dates

When `type` parameter is `"date"` the  `$.ig.formatter` function parses dates. The `val` argument should be of type `Date`.

**In JavaScript:**
```js
var result = $.ig.formatter(new Date(2016, 05, 01), "date", "yyyy-MM-dd"); // result is "2016-06-01"
```

List of supported format specifiers:

Format specifier | Description
--- | --- |
"d"|Day of the month in number from 1 to 31|
"dd"|Day of the month in number with fixed 2 digits from 01 to 31|
"ddd"|Day of the week short name |
"dddd"|Day of the week full name|
"M"| Month in number from 1 to 12|
"MM"| Month in number from 01 to 12|
"MMM"| Month short name|
"MMMM"| Month full name|
"yy"| Year short|
"yyyy"| Year long|
"h"| Hour number from 1 to 12 (12 hour format)|
"hh"| Hour number from 01 to 12 (12 hour format)|
"H"| Hour number from 0 to 23 (24 hour format)|
"HH"| Hour number from 00 to 23 (24 hour format)|
"m"| Minutes from 0 to 59|
"mm"| Minutes from 00 to 59|
"s"| Seconds from 0 to 59|
"ss"| Seconds from 00 to 59|
"t"| The first character of AM or PM designator|
"tt"| AM or PM designator|
"f"| Tenths of a second|
"ff"| Hundreds of a second|
"fff"| Miliseconds|
"date"|Format specifier is taken from `$.ig.regional.defaults.datePattern`|
"dateLong"|Format specifier is taken from `$.ig.regional.defaults.dateLongPattern`|
"dateTime"|Format specifier is taken from `$.ig.regional.defaults.dateTimePattern`|
"time"|Format specifier is taken from `$.ig.regional.defaults.timePattern`|
"timeLong"|Format specifier is taken from `$.ig.regional.defaults.timeLongPattern`|


## <a id="formatting-numbers"></a> Formatting Numbers

When `type` parameter is `"number"` the  `$.ig.formatter` function parses numbers. The `val` argument should be of type `Number`.

**In JavaScript:**
```js
var result = $.ig.formatter(0.55, "number", "0.0"); // result is "0.6"
```

List of supported format specifiers:

Format specifier | Description
--- | --- |
"0"| Zero format character with rounding. Replaces "0" with the corresponding digit if available. Otherwise outputs "0". Example: `$.ig.formatter(0.7, "number", "0.000")` outputs "0.700".
"#"| Digit format character with rounding. Replaces "#" with the corresponding digit if available. Otherwise outputs nothing. Example: `$.ig.formatter(0.7, "number", "#.###")` outputs "0.7".
"."| Dot format character. Determines the location of the decimal separator in the result string. Example: `$.ig.formatter(0.77, "number", "0.00")` outputs "0.77".
"number"| Formats the number with 2 digits after the decimal separator with rounding.|
"currency"| Formats the number as currency using the `$.ig.regional.defaults` settings.|
"percent"| Formats the number as percent using the `$.ig.regional.defaults` settings.|
"int"| Formats the number as integer value. There is no decimal separator and rounding is applied.|
"double"| Formats the number as double value. There is decimal separator and no rounding is applied.|


## <a id="formatting-strings"></a> Formatting Strings

When `type` parameter is `"string"` the  `$.ig.formatter` function parses strings. The `{0}` placeholder can be used in the `format` parameter to denote the position of the `value` parameter in the resulting string.

**In JavaScript:**

```js
var result = $.ig.formatter("Black", "string", "Color is {0}");
```