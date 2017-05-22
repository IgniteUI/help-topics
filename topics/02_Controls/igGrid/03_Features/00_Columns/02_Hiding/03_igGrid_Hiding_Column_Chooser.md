<!--
|metadata|
{
    "fileName": "iggrid-hiding-column-chooser",
    "controlName": "igGrid",
    "tags": []
}
|metadata|
-->

# Configuring the Column Chooser (igGrid)

## Topic Overview

### Purpose

This topic demonstrates how to use the `igGrid`™ control’s Hiding Column Chooser.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [**Touch Support for Ignite UI Controls**](Touch-Support-for-NetAdvantage-for-jQuery-Controls.html): This topic introduces the updates to Ignite UI™ controls for touch-support interactions.

- [**igGrid Feature Chooser**](igGrid-Feature-Chooser.html): This topic explains the `igGrid` Feature Chooser menu and its sections.

- [**igGrid Hiding Overview**](igGrid-Column-Hiding.html): Overview of the `igGrid` control’s Hiding feature.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Dialog Window**](#dialog-window-states)
    -   [Hide multiple columns at once](#hide-multiple-columns)
    -   [Hide columns on click](#hide-on-click)
-   [**Property Reference**](#property-reference)
-   [**Method Reference**](#method-reference)
-   [**Event Reference**](#event-reference)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction

#### Introduction to the igGridHiding Column Chooser

This topic demonstrates how to work with the `igGrid` Hiding dialog also known as Column Chooser. You can activate the Columns Chooser window in two different ways. The first way is to select *Column Chooser* list item from the `igGrid` Feature Chooser advanced section and second on is to press *Column Chooser* button from the hidden column context menu.

![](images/05_igGrid_Hiding_ColumnChooser_1.png) ![](images/05_igGrid_Hiding_ColumnChooser_2.png)



## <a id="dialog-window-states"></a>Dialog Window states

The following table summarizes the states of the Hiding Column Chooser Window. The window has two states as defined by the value of the option [`columnChooserHideOnClick`](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideOnClick) (default value is `false`). If set to `true`, then the columns will hide immediately on click of the column name in the Column Chooser.

Additional details are available after the summary table.

State | [`columnChooserHideOnClick`](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideOnClick) | Description
------|----------------------------------|------------
[Hide multiple columns at once](#hide-multiple-columns) | `false` | Multiple columns are selected from the column chooser window and columns are hidden when the changes are applied in the window.
[Hide column on click](#hide-on-click) | `true` | Columns are immediately hidden by selecting a column from the column chooser window.


### <a id="hide-multiple-columns"></a>Hide multiple columns at once

By default the property [`columnChooserHideOnClick`](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideOnClick) is set to `false`. This means that you must select which columns to show or hide and then apply the changes to the grid.

![](images/05_igGrid_Hiding_ColumnChooser_3.png)

Use the following buttons:

1.  Show - to show the column( the whole row is clickable)
2.  Hide – to hide the column( the whole row is clickable)
3.  Apply – to apply the columns you want to show/hide
4.  Cancel – to close the Column Chooser and don’t apply any changes
5.  Reset – to return the default state of all the columns, like they were when the modal dialog was opened\.
6.  ESC (key) – close the modal dialog

###<a id="hide-on-click"></a> Hide columns on click

When the property [`columnChooserHideOnClick`](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideOnClick) is set to `true` then when you click on a **Show** or **Hide** button the selected action will take effect immediately to a column.

To close the window use the button at the top right or press the **ESC** key.

![](images/05_igGrid_Hiding_ColumnChooser_4.png)

Use the following buttons:

1.  Show – to immediately show the column( the whole row is clickable)
2.  Hide – to immediately hide the column( the whole row is clickable)
3.  Close button – close the modal dialog
4.  ESC (key) – close the modal dialog



## <a id="property-reference"></a>Property Reference

This section explains `igGrid` control’s Hiding properties that affect Column Chooser.

The following table shows the `igGrid` control’s Hiding properties that are responsible for the configuration of the Column Chooser.

Property | Description
---------|----------
[columnChooserHideOnClick](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideOnClick) | Specifies whether the grid will show or hide a column when the column name is clicked in the column chooser.
[columnChooserWidth](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserWidth) | The default column chooser width in pixels.
[columnChooserHeight](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHeight) | The default column chooser height in pixels
[columnChooserAnimationDuration](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserAnimationDuration) | Specifies time in milliseconds for the animation duration to show or hide Column Chooser
[columnChooserCaptionText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserCaptionText) | The caption of the column chooser dialog.
[columnChooserDisplayText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserDisplayText) | The text used in the drop down tools menu (Feature Chooser) to launch the column chooser dialog.
[hiddenColumnIndicatorTooltipText](%%jQueryApiUrl%%/ui.iggridhiding#options:hiddenColumnIndicatorTooltipText) | The text displayed in the tooltip of the hidden column indicator.
[columnHideText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnHideText) | The text used in the drop down tools menu (Feature Chooser) to hide a column.
[columnChooserShowText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserShowText) | The text used in the column chooser to show a column.
[columnChooserHideText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserHideText) | The text used in the column chooser to hide a column.
[columnChooserResetButtonLabel](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserResetButtonLabel) | Text label for reset button.
[columnChooserButtonApplyText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserButtonApplyText) | Specifies text of button which applies changes in modal dialog.
[columnChooserButtonCancelText](%%jQueryApiUrl%%/ui.iggridhiding#options:columnChooserButtonCancelText) | Specifies text of button which cancels changes in modal dialog.


## <a id="method-reference"></a>Method Reference

This section explains `igGrid` control’s Hiding methods that affect Column Chooser.

The following table shows the `igGrid` control’s Hiding methods exposed by the Column Chooser API.

Method | Description
-------|------------
[showColumnChooser](%%jQueryApiUrl%%/ui.iggridhiding#methods:showColumnChooser) | Shows the Column Chooser dialog. If it is visible the method does nothing.
[hideColumnChooser](%%jQueryApiUrl%%/ui.iggridhiding#methods:hideColumnChooser) | Hides the Column Chooser dialog. If it is not visible the method does nothing.
[resetHidingColumnChooser](%%jQueryApiUrl%%/ui.iggridhiding#methods:resetHidingColumnChooser) | Reset hidden/shown column to initial state of dialog (when it is opened)
[removeColumnChooserResetButton](%%jQueryApiUrl%%/ui.iggridhiding#methods:removeColumnChooserResetButton) | Remove Reset button in column chooser modal dialog



## <a id="event-reference"></a>Event Reference

This section explains `igGrid` control’s Hiding events raised by the Modal Windows.

The following table shows the `igGrid` Hiding events that are fired during user interaction with the Column Chooser.

Event | Description
-------|---------
[columnChooserOpening](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserOpening) | Event fired before the column chooser is opened.
[columnChooserOpened](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserOpened) | Event fired after the column chooser opens.
[columnChooserMoving](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserMoving) | Event fired every time the column chooser changes its position.
[columnChooserClosing](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserClosing) | Event fired before the column chooser is closed.
[columnChooserClosed](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserClosed) | Event fired after the column chooser is closed.
[columnChooserContentsRendering](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserContentsRendering) | Event fired before the contents of the column chooser are rendered.
[columnChooserContentsRendered](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserContentsRendered) | Event fired after the contents of the column chooser are rendered.
[columnChooserButtonApplyClick](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserButtonApplyClick) | Event fired when Reset button in column chooser is clicked
[columnChooserButtonResetClick](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserButtonResetClick) | Event fired when Reset button in column chooser is clicked



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics


The following topics provide additional information related to this topic.

- [**Touch Support for Ignite UI Controls**](Touch-Support-for-NetAdvantage-for-jQuery-Controls.html): This topic introduces the updates to Ignite UI™ controls for touch-support interactions.

- [**igGrid Feature Chooser**](igGrid-Feature-Chooser.html): This topic explains the `igGrid` Feature Chooser menu and its sections.

- [**igGrid Hiding Overview**](igGrid-Column-Hiding.html): Overview of the `igGrid` control’s Hiding feature.


### <a id="samples"></a> Samples

The following sample provides additional information related to this topic.

- [Feature Chooser](%%SamplesUrl%%/grid/column-management): Sample that demonstrates the Feature Chooser.

