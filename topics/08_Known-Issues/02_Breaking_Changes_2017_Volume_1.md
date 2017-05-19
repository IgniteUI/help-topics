<!--
|metadata|
{
    "fileName": "breaking-changes-2017-volume-1",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Breaking Changes 2017 Volume 1

The following topic summarizes the breaking changes of the 2017 Volume 1 release.

## General

### Split of the Infragstics Util file

From version 17.1 the `infragistics.util.js` file has been split into a non-jQuery specific file and jQuery specific files. The new structure is the following:

-   `infragistics.util.js` - holds only utility functions that do not depend on jQuery framework.
-   `infragistics.util.jquery.js` - holds jQuery dependant utility functions.
-   `infragistics.util.jquerydeferred.js` - custom CommonJS Promises/A implementation, for users that are using versions of the jQuery, prior to version 1.5, which doesn't support $.Deferred.

For applications that are using the igLoader to load Ignite IU controls' dependencies, no change is required, because the loader is handling this internally. The other applications that load manaully the files, may take advantage and not include the unnecessary utility references.

## igGrid

### Options changes in igGrid Summaries
The options [*isGridFormatter*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:isGridFormatter) and [*defaultDecimalDisplay*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:defaultDecimalDisplay) in the igGrid Summaries main level options have been removed.
The [*isGridFormatter*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands.isGridFormatter) and [*decimalDisplay*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands.decimalDisplay) options under [columnSettings.summaryOperands](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands) have been removed as well.

The new [*format*](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.format) option in the igGrid Summaries can be used now in conjuction with the column [*format*](%%jQueryApiUrl%%/ui.iggrid#options:columns.format) and [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) options to determine how the summary would be formatted.

With this option can be set how many decimals after the floating point will be displayed similar to the deleted *decimalDisplay* option. If the [*format*](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.format) option for the summaryOperand is not set the format for the summary will be taken based on the column it is displaying for, meaning if that column has set [*format*](%%jQueryApiUrl%%/ui.iggrid#options:columns.format) - that format will be taken into account.

If no format is set for the summary and the current column the regional settings for the column type will be applied to that summary. Since due to [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) being default to 'date', the regional settings will be applied only to summaries in that type of column and in other type of columns won't receive any formatting. Meaning that if regional settings need to be applied for other type of columns when the *format* option is not set for both summary and column the [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) option needs to be set. It will specify which summaries will receive the regional auto formatting depending the column they are in.

## igDateEditor/igDatePicker

The option [`enableUTCDates`](%%jQueryApiUrl%%/ui.igdateeditor#options:enableUTCDates) has now a different function. You can use the [`displayTimeOffset`](%%jQueryApiUrl%%/ui.igdateeditor#options:displayTimeOffset) if you want to show the time in the editor with the desired offset. Please follow the [Migrating enableUTCDate option in 17.1](Migrating-enableUTCDates-option-in-17-1.html) topic to see how you can adapt to the new changes and the [Using Ignite UI controls in different time zones](Using-IgniteUI-controls-in-different-time-zones.html) topic for more detailed infomration of how the both options work.

## igNumericEditor

In previous versions of the product, if user sets or enters a value in a numeric editor that has more decimal places than the one defined in the `maxDecimals` option, then the value was truncated. E.g. If an editor with defined 'maxDecimals' to `3`, receives a value `123.4567`, then it will be truncated to `123.456`. With version 17.1 of the product, a new option [`roundDecimals`](ui.ignumericeditor#options:roundDecimals) is introduced, which is enabled by default and rounds the numeric values, using the JavaScript `Math.round()` function. This means that the value of `123.4567` will be rounded and displayed in the editor as `123.457`. If the [`roundDecimals`](ui.ignumericeditor#options:roundDecimals) is disabled, then it will truncate the value and will show it as `123.456`, like in the old versions.