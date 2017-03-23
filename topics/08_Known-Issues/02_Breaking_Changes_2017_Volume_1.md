﻿<!--
|metadata|
{
    "fileName": "breaking-changes-2017-volume-1",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Breaking Changes 2017 Volume 1

The following table summarizes the breaking changes of the 2017 Volume 1 release. Detailed explantations of the issues are provided after the summary table.

Legend | 
-------|--------
![](../images/images/positive.png) | Workaround available
![](../images/images/negative.png) | No known workaround
![](../images/images/plannedFix.png) | Fix planned

## [Options changes in igGrid Summaries](#summaries)
The options [*isGridFormatter*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:isGridFormatter) and [*defaultDecimalDisplay*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:defaultDecimalDisplay) in the igGrid Summaries main level options have been removed.
The [*isGridFormatter*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands.isGridFormatter) and [*decimalDisplay*](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands.decimalDisplay) options under [columnSettings.summaryOperands](http://www.igniteui.com/help/api/2016.2/ui.iggridsummaries#options:columnSettings.summaryOperands) have been removed as well.

The new [*format*](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.format) option in the igGrid Summaries can be used now in conjuction with the column [*format*](%%jQueryApiUrl%%/ui.iggrid#options:columns.format) and [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) options to determine how the summary would be formatted.

With this option can be set how many decimals after the floating point will be displayed similar to the deleted *decimalDisplay* option. If the [*format*](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.format) option for the summaryOperand is not set the format for the summary will be taken based on the column it is displaying for, meaning if that column has set [*format*](%%jQueryApiUrl%%/ui.iggrid#options:columns.format) - that format will be taken into account.

If no format is set for the summary and the current column the regional settings for the column type will be applied to that summary. Since due to [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) being default to 'date', the regional settings will be applied only to summaries in that type of column and in other type of columns won't receive any formatting. Meaning that if regional settings need to be applied for other type of columns when the *format* option is not set for both summary and column the [*autoFormat*](%%jQueryApiUrl%%/ui.iggrid#options:autoFormat) option needs to be set. It will specify which summaries will receive the regional auto formatting depending the column they are in.