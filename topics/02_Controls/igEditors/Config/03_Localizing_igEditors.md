<!--
|metadata|
{
    "fileName": "localizing-igeditors",
    "controlName": "igEditors",
    "tags": []
}
|metadata|
-->

# How to localize the Editors

There are two types of localization. First is for the localization resources in the controls. Second is for the regional settings in the controls.

Localization resources for the controls are in Bulgarian, Russian, Japanese, German, Spanish and French languages. These reside in js/modules/i18n (where js is the root folder for the JavaScript files in the Ignite UI program installation path). To get more into using the localization resources you can read the ["Customizing the Localization of Ignite UI Controls"](customizing-the-localization-of-netadvantage-for-jquery-controls.html) topic.

The regional settings, on the other hand, provide region specific formats for dates, numbers, as well as currency symbols, floating point symbols, decimal separators, default decimal rounding, etc. These reside in the ../js/modules/i18n/regional (where js is the root folder for the JavaScript files in the Ignite UI program installation path).

## Use cases

The `regional` option allows you to provide great experience to your users if you are targeting a specific geographic region or culture. 

The `igDatePicker` and the `igDateEditor` are the two editors which look is affected the most by the `regional` option. If you need to be sure that your users from a specific region will see the editors in the context they are expecting to see it, just set the desired regional value and the editors will show the date format appropriate for the culture. This includes localized month and day names as well as default date and time formatting patterns. 

For the `igDatePicker` the `regional` option sets the calendar month names and the day names in the language, what day is considered to be the first of the week or if the language of your users is written right-to-left. This will also update the `igDatePicker` calendar labels like the next and previous month buttons. 

If you set the `regional` option when using the `igNumericEditor`, `igCurrencyEditor` or `igPercentEditor`, the component will use the correct negative pattern, decimal separator and group separator for the given culture. It will also show the correct currency symbol and will provide the expected context to your users. 

Here is an example how to initialize a `igDatePicker` control with Bulgarian regional settings:
```js
$('#editor').igDatePicker({ regional: "bg" });
```

## Editors' options affected by the regional settings

Below is the list of `regional` settings and how they apply to the editors:

### Date Editor & Picker

Option | Description
--- | --- |
"monthNames"|The full names of the months in the calendar|
"monthNamesShort"|The abbreviated month names, as used in the month header on the datepicker and as requested via the `dateFormat` option|
"dayNames"|The long day names for use as requested via the `dateDisplayFormat` option|
"dayNamesShort"|The abbreviated day names for use as requested via the `dateDisplayFormat` option|
"datePattern"|The format for displayed dates when `dateDisplayFormat: "date"` is set|
"dateLongPattern"|The format for displayed dates when `dateDisplayFormat: "dateLong"` is set|
"dateTimePattern"|The format for displayed dates when `dateDisplayFormat: "dateTime"` is set|
"timePattern"|The format for displayed date when `dateDisplayFormat: "time"` is set|
"timeLongPattern"|The format for displayed date when `dateDisplayFormat: "timeLong"` is set|

### Date Picker
The `regional` option also applies the respecitve jQuery UI datepicker localization attributes. Each regional file defines the complete set for the locale (e.g. `$.datepicker.regional['fr']`) and the following list contains the ones applicable to the `igDatePicker` to customize calendar appearance.

Option | Description 
--- | --- |
"closeText"|The text of the `close` button of the `igDatePicker` calendar. Have in mind that you must enable the `showButtonPanel` option in `datepickerOptions` option in order to show the button.|
"prevText"|The text of the button that navigates to the previous month|
"nextText"|The text of the button that navigates to the next month|
"currentText"|The text of the button that selects the current day in the calendar. Have in mind that you must enable the `showButtonPanel` option in `datepickerOptions` option in order to show the button.|
"monthNamesShort"|The abbreviated month names, as used in the month header on the datepicker |
"dayNamesMin"|The minimised day names for use as column headers within the datepicker|
"weekHeader"|The text to display for the week of the year column heading. Have in mind that you must enable the `showWeek` option in `datepickerOptions` option to display this column.|
"firstDay"|The option is setting the first day of the week in the calendar|
"isRTL"|Whether the current language is drawn from right to left|
"showMonthAfterYear"|Whether to show the month after the year in the header|
"yearSuffix"|Additional text to display after the year in the month headers|

### Numeric Editor

Option | Description
--- | --- |
"numericNegativePattern"|The pattern that is used to show a negative value|
"numericDecimalSeparator"|The character that is used as decimal separator|
"numericGroupSeparator"|The character that is used as separator for groups (like thousands)|
"numericMaxDecimals"|The maximum number of decimal places which are used in display mode|

### Currency Editor

Option | Description
--- | --- |
"currencyPositivePattern"|The pattern that is used to show a positive value|
"currencyNegativePattern"|The pattern that is used to show a negative value|
"currencySymbol"|The character that is used as the currency symbol that is shown in display mode|
"currencyDecimalSeparator"|The character that is used as decimal separator|
"currencyGroupSeparator"|The character that is used as separator for groups (like thousands)|

### Percent Editor

Option | Description
--- | --- |
"percentPositivePattern"|The pattern that is used to show a positive value|
"percentNegativePattern"|The pattern that is used to show a negative value|
"percentDecimalSeparator"|The character that is used as decimal separator|
"percentGroupSeparator"|The character that is used as separator for groups (like thousands)|

>This is the full list of all supported regions: "af", "ar", "az", "bg", "bs", "ca", "cs", "da", "de", "el", "en", "en-GB", "es", "es-419", "es-MX", "et", "fa", "fi", "fo", "fr", "fr-CH", "he", "hr", "hu", "hy", "id", "is", "it", "ja", "ko", "lt", "lv", "ms", "nl", "no", "pl", "pt-BR", "ro", "ru", "sk", "sl", "sq", "sr", "sr-SR", "sv", "ta", "th", "tr", "uk", "vi", "zh-CN", "zh-HK", "zh-TW"

## Example

In this sample we show how a culture can be set to the editors' `regional` option to change the default formatting of dates, numbers and currencies. Three regions are configured here (United States, Japan and Tamil, India) and there are many more to choose from in the infragistics.ui.regional-i18n.js file. 

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/editors/localizing-editors](%%SamplesEmbedUrl%%/editors/localizing-editors)
</div>

## <a id="_Related_Topics"></a>Related Topics

-   [Editors Help Overview](igeditors-landingpage.html)
-   [Customizing the Localization of Ignite UI Controls](customizing-the-localization-of-netadvantage-for-jquery-controls.html)
