<!--
|metadata|
{
    "fileName": "whats-new-in-2017-volume1",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# What's New in 2017 Volume 1

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2017 Volume 1 release.


## What’s New Summary

The following summarizes what’s new in 2017 Volume 1. Additional details follow.

### igSpreadsheet

Feature | Description
---|---
[New control igSpreadsheet (MVP)](#spreadsheet)| The igSpreadsheet is a jQuery widget that visualize excel documents in all modern browsers.

### igGrid

Feature | Description
---|---
[GroupBy Summaries](#groupSummaries)| The GroupBy feature now allows a summary row to be displayed below each group data island.

### igCombo

Feature | Description
---|---
[Knockout Disable Handler](#comboKnockoutDisable)| Knockout Disable binding handler has been implemented for the combo.

### Editors

Feature | Description
---|---
[Knockout Disable Handler](#editorsKnockoutDisable)| Knockout Disable binding handler has been implemented for the editors.

### igNumericEditor

Feature | Description
---|---
[Round Decimals](#roundDecimals)| The numeric editor introduces new option [`roundDecimals`](ui.ignumericeditor#options:roundDecimals), that allows to round values with decimal point.

## <a id="spreadsheet"></a>igSpreadsheet

In version 2017.1 we introduce the igSpreadsheet control. It is a jQuery widget that visualize excel documents in all modern browsers.

![](images/spreadsheet.png)

## igGrid

### <a id="groupSummaries"></a> GroupBy Summaries

The GroupBy Summaries feature allows an additional summary row to be displayed below each group data island that displays summary information for the data columns in that island. The summary row is visible only when the related group is expanded.

![](images/group-summaries.png)

#### Related Topics
-   [GroupBy Summaries Feature Overview (igGrid)](igGrid-GroupBy-Summaries.html)

#### Related Samples
-   [Grouping with summaries](%%SamplesUrl%%/grid/grouping)

## igCombo

### <a id="comboKnockoutDisable"></a> Knockout Disable Handler

If a developer wants to apply the Knockout [`disabled`](http://knockoutjs.com/documentation/disable-binding.html) binding handler to the combo control, it will not work and will not automatically enables/disables it. This is because combo has a special logic that handles enabling/disabling of the control. For that purpose additional `igComboDisable` binding handler is created, which implements the behavior, expected, when using the Knockout `disabled` handler.

#### Related Topics
-   [Configuring Knockout Support (igCombo)](igCombo-KnockoutJS-Support.html#)

## Editors

### <a id="editorsKnockoutDisable"></a> Knockout Disable Handler

If a developer wants to apply the Knockout [`disabled`](http://knockoutjs.com/documentation/disable-binding.html) binding handler to the editors, it will not work and will not automatically enables/disables them. This is because editors have a special logic that handles enabling/disabling of the control. For that purpose additional `igEditorDisable` binding handler is created, which implements the behavior, expected, when using the Knockout `disabled` handler.

#### Related Topics
-   [Configuring Knockout Support (Editors)](Configuring-Knockout-Support-%28Editors%29.html)-   [Grouping with summaries](%%SamplesUrl%%/grid/grouping)

## igNumericEditor

### <a id="roundDecimals"></a> Round Decimals

In previous versions of the product, if user sets or enters a value in a numeric editor that has more decimal places than the one defined in the `maxDecimals` option, then the value was truncated. E.g. If an editor with defined 'maxDecimals' to `3`, receives a value `123.4567`, then it will be truncated to `123.456`. With version 17.1 of the product, a new option [`roundDecimals`](ui.ignumericeditor#options:roundDecimals) is introduced, which is enabled by default and rounds the numeric values, using the JavaScript `Math.round()` function. This means that the value of `123.4567` will be rounded and displayed in the editor as `123.457`. If the [`roundDecimals`](ui.ignumericeditor#options:roundDecimals) is disabled, then it will truncate the value and will show it as `123.456`, like in the old versions.

## <a id="igScheduler"></a> igScheduler
### New Control (RTM)

The `igScheduler`™ control provides a common scheduling solution for presenting and managing time periods and the associated activities.

### Supported features in the RTM are:
-   Creating, editing and deleting of appointment.
    -   Configurable appointments display mode in the month view calendar (indicator or event subject).
    -   Assigning appointments to color themed resources.
-   Using different views (month and agenda view).
    -   Month and agenda views switching support
    -   Agenda view in month view support.
    -   Configurable agenda view days display range.
-   All day events supported.
-   Desktop, tablet and phone layout.
-   Responsive design.
    -   Desktop environment optimized UI.
-   Resources color scheme support.
-   Keyboard navigation support.
-   Localization support.

![](../02_Controls/igScheduler/images/scheduler.png)