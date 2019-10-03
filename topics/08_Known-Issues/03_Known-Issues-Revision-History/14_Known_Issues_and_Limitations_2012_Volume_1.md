<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2012-volume-1",
    "controlName": "",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2012 Volume 1

## Topic Overview
### Purpose

This topic lists known issues and limitations in the %%ProductName%%™ library and provides reference to individual control’s known issues topics.

### In this topic

This topic contains the following sections:

-   [Known Issues and Limitations in 2012 Volume 1](#known-issues-limitations)
    -   [Overview](#overview)
    -   [Changing locale dynamically for igEditor is not possible with the igLoader](#changing-lacale-dynamically)
    -   [JavaScript and CSS resources renamed and restructured](#js-css-resources-restructured)
    -   [igTemplate limitations](#template-limitations)
    -   [Grids and touch support](#grid-touch-support)
    -   [Input argument ui.groupedColumns may be empty under certain circumstances](#empty-groupedcolumns-option)
    -   [Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog](#screen-taps-misinterpreted-android4)
    -   [Limitation of remote grouping in hierarchical grid](#limitation-remote-grouping)
    -   [First and last items appear half cut in financial series charts](#half-cut-first-last-item)
    -   [Chart animation disabled when axis range changes](#chart-animation-disabled-axis-range-changed)
    -   [MVC helper generated code in conjunction with MVC Loader executes after any custom JavaScript code on a page](#mvc-helper-executes-after-custom-js-code)
    -   [Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround](#document-engines-workaround)
    -   [igEditor styling](#igEditor-styling)
    -   [igEditor rendering failure](#igEditor-rendering-failure)
    -   [Cannot use igGridHiding with row templates](#grid-hiding-cannot-use-row-templates)
    -   [igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped](#autoGenerateColumns-prevents-columns-grouped)
    -   [MVC helper configuration for flat grids](#mvc-helper-config-flat-grids)
    -   [Grid column widths workaround](#grid-column-widths)
    -   [Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7](#grid-layout-problems)
    -   [Grid API calls do not work as expected with DIV elements](#grid-api-calls-not-working)
    -   [Cell selection in iOS does not work properly](#cell-selection-not-working)
    -   [Vertical scroll causes dialogs to appear behind the records](#vertical-scroll-appear-behind-records)
    -   [Under Firefox igGrid columns cannot be resized correctly, when the column widths are not set](#firefox-columns-resized-correctly)
    -   [Under Firefox igGrid columns cannot be resized correctly, when the column widths are set in percentages](#firefox-column-cannot-resize)
    -   [MVC Loader does not function properly in an MVC Razor layout view](#mvc-loader-not-working-properly)
-   [Related Content](#related-content)



## <a id="known-issues-limitations"></a>Known Issues and Limitations in 2012 Volume 1
### <a id="overview"></a>Overview

The following table summarizes the known issues and limitations of the %%ProductName%% 2012 Volume 1 release. Detailed explanations of known issues and the possible workarounds are provided for in the known issues topics for each control.

### Legend:

<table class="table">
    <tbody>
        <tr>
            <td><img src="../../images/images/positive.png" alt="" class="img-responsive"></td>
            <td>Workaround available</td>
        </tr>
        <tr>
            <td><img src="../../images/images/negative.png" alt="" class="img-responsive"></td>
            <td>No known workaround</td>
        </tr>
        <tr>
            <td><img src="../../images/images/plannedFix.png" alt="" class="img-responsive"></td>
            <td>Fix planned</td>
        </tr>
    </tbody>
</table>


Feature | Description | Status
---|---|---
[Changing locale dynamically for igEditor is not possible with the igLoader ](#changing-lacale-dynamically) | Regional settings of editors cannot be changed on the fly when using `igLoader`. | ![](../../images/images/positive.png)
[JavaScript and CSS resources renamed and restructured ](#js-css-resources-restructured) | The structure of the library and names of many files were changed. | ![](../../images/images/positive.png)
[igTemplate limitations ](#template-limitations) | Nested `{{each}}` templates are not supported. | ![](../../images/images/negative.png)
[Grids and touch support ](#grid-touch-support) | A grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements. | ![](../../images/images/positive.png)
[Input argument ui.groupedColumns may be empty under certain circumstances ](#empty-groupedcolumns-option) | The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event is empty when a column has been grouped by dragging it into the group-by area. | ![](../../images/images/positive.png)
[Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog ](#screen-taps-misinterpreted-android4) | On Android 4.*-powered touch devices tapping on the drop-down in the group-by modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog. | ![](../../images/images/positive.png)
[Limitation of remote grouping in hierarchical grid ](#limitation-remote-grouping) | Grouping columns from more than one layout (or the root grid) will not work with remote group-by. | ![](../../images/images/positive.png)
[First and last items appear half cut in financial series charts ](#half-cut-first-last-item) | In financial series the first and the last data items do not appear entirely on the chart view but are plotted as if they are cut in half. | ![](../../images/images/plannedFix.png)
[Chart animation are disabled when axis range changes ](#chart-animation-disabled-axis-range-changed) | If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data to appear immediately without any motion effect. | ![](../../images/images/positive.png)
[MVC helper generated code in conjunction with MVC Loader executes after any custom JavaScript code on a page ](#mvc-helper-executes-after-custom-js-code) | When MVC Loader and MVC helper for any control are used in an MVC view the JavaScript code they generate is usually executed after custom page set-up code from `document.ready()` or `window.ready()` events. | ![](../../images/images/positive.png)
[Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround](#document-engines-workaround) | Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies together will cause namespace conflict exceptions. | ![](../../images/images/positive.png)
[igEditor styling ](#igEditor-styling) | Layout of html elements was modified and rounded corners are rendered around whole editor, not only buttons. | ![](../../images/images/positive.png)
`igEditor` spin buttons | Spin buttons are rendered horizontally. | ![](../../images/images/negative.png)
[igEditor rendering failure ](#igEditor-rendering-failure) | Rendering may fail if the base element is TD. | ![](../../images/images/positive.png)
[Cannot use igGridHiding with row templates ](#grid-hiding-cannot-use-row-templates) | `igGridHiding`™ cannot hide columns when row templates are used. | ![](../../images/images/positive.png)
[igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped ](#autoGenerateColumns-prevents-columns-grouped) | If a grid control has some columns explicitly defined and `autoGenerateColumns` set to `true`, having columns grouped at initialization will prevent other columns from being grouped at runtime. | ![](../../images/images/positive.png)
[MVC helper configuration for flat grids ](#mvc-helper-config-flat-grids) | All grids are generated as `igHierarchicalGrid`™ by the MVC helper for grids. | ![](../../images/images/positive.png)
[Grid column widths ](#grid-column-widths) | The scenario where some columns' widths are defined in percentage, while others' are in pixels (or not specified at all) is not supported. | ![](../../images/images/positive.png)
[Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7 ](#grid-layout-problems) | When grid width is not specified, header and footer elements are rendered shorter than the grid in Microsoft Internet Explorer® 7. | ![](../../images/images/positive.png)
[Grid API calls do not work as expected with DIV elements ](#grid-api-calls-not-working) | If a grid is instantiated from a DIV element the API calls to the grid's features do not work as expected. | ![](../../images/images/positive.png)
[Cell selection in iOS does not work properly ](#cell-selection-not-working) | When you want to scroll `igGrid`, you firstly tap on a cell, and then swipe in some direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery mobile presents the events. | 
[Vertical scroll causes dialogs to appear behind the records ](#vertical-scroll-appear-behind-records) | When the `igGrid` is running under Android, version 4.0.2, and when `igGrid` has vertical scrolling, all the popups/dialogs appear behind the records. | ![](../../images/images/positive.png)
[Under Firefox igGrid columns cannot be resized correctly, when the column widths are not set. ](#firefox-columns-resized-correctly) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly, when the column widths are not set. | ![](../../images/images/negative.png)
[Under Firefox, igGrid columns cannot be resized correctly, when the column widths are set in percentages. ](#firefox-column-cannot-resize) | Due to a bug in Firefox, columns cannot be resized correctly, when the column widths are set in percentages. | ![](../../images/images/positive.png)
[MVC Loader does not function properly in an MVC Razor layout view ](#mvc-loader-not-working-properly) | MVC Loader cannot initialize before the controls in an actual view when it is included in MVC Razor layout view. | ![](../../images/images/positive.png)




## <a id="changing-lacale-dynamically"></a>Changing locale dynamically for igEditor is not possible with the igLoader solution

Regional setting of editors cannot be changed on the fly when using `igLoader`.

Postback is necessary in order to change the regional option. Another workaround is to destroy the editor control and call the loader to load with different locale and recreate the control again.

## <a id="js-css-resources-restructured"></a>JavaScript and CSS resources renamed and restructured

The structure of the JavaScript and CSS files has been changed and the names of files have been modified in order to make the product easier to use.

>**Note:** This is a breaking change.

The recommended way to adapt to the new resource structure and names is to use the new `igLoader` control instead of static resource loading by script and link tags.

##<a id="template-limitations"></a>igTemplate limitations

Nested `{{each}}` templates are not supported.

## <a id="grid-touch-support"></a>Grids and touch support solution

A grid and its features may have inconsistent behavior when the stylus is sliding over certain UI elements.

You have to explicitly reference the `js\modules\infragistics.ui.scroll.js` file so that sliding will cause scrolling on the correct UI elements.

## <a id="empty-groupedcolumns-option"></a>Input argument ui.groupedColumns may be empty under certain circumstances workaround

The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event
is empty when a column has been grouped by dragging it into the group-by
area.

The `ui.groupedColumns` array shows only grouped columns on root level (as if it is acting as a flat grid, as in any flat grid with group by). If you want to get all grouped columns use the `groupByColumns()` function from the API, which recursively will go through all child grids and add up the grouped columns for any layout.

## <a id="screen-taps-misinterpreted-android4"></a>Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog solution

On Android 4.*-powered touch devices tapping on the drop-down in the
group-by modal dialog in a hierarchical grid will often act on the grid
cell behind the modal dialog.

The solution is to set `modalDialogDropDownWidth` and `modalDialogDropDownAreaWidth` to values which ensure that the drop-down in the modal dialog is wide enough to show the whole layouts tree, or you just set those settings to null.

## <a id="limitation-remote-grouping"></a>Limitation of remote grouping in hierarchical grid solution

Grouping columns from more than one layout (or the root grid) will not
work with remote group-by.

There are two possible solutions:

1. Use local group-by for the entire hierarchical grid - this circumvents the problem entirely.

2. When using remote group-by only group columns from one layout (or the root grid).

## <a id="half-cut-first-last-item"></a>First and last items appear half cut in financial series charts

In financial series the first and the last data items do not appear entirely on the chart view but are plotted as if they are half cut.

A new feature of data charts will be implemented in the future releases that will solve this problem.

## <a id="chart-animation-disabled-axis-range-changed"></a>Chart animation disabled when axis range changes solution

If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data appears immediately without any motion effect.

The solution to this problem is to select an appropriate range for the Y-axis of your chart and set the `minimumValue` and `maximumValue` options accordingly. This prevents axis range changes.

## <a id="mvc-helper-executes-after-custom-js-code"></a>MVC helper generated code in conjunction with MVC Loader executes after any custom JavaScript code on a page solution

When MVC Loader and MVC helper for any control are used in an MVC view the JavaScript code they generate is executed after custom page set-up code put in document.ready or window.ready events. (This is because the control is rendered in the body part of a page and script code is usually put in the head part.) If the custom code refers to the control rendered by the MVC helper code, it may fail since the control does not exist yet. This is a timing issue and depends on how quickly MVC Loader will load necessary resources.

The solution is to attach to the last event in the control initialization sequence like `dataBound` and execute any JavaScript code on the control from the event handler. Alternatively, you can put a short script block after the MVC helper with contents similar to:

**In JavaScript:**

```js
$.ig.loader(function () {
    customControlLogic();
});
```

Here the `customControlLogic()` function handles any custom code. This way you ensure that your code affecting the control will execute after the control is instantiated.

## <a id="document-engines-workaround"></a>Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround

Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies
together will cause namespace conflict exceptions.

To resolve this issue, reference either the documents assemblies from Infragistics ASP.NET or the documents assemblies from %%ProductName%% in your application. The documents libraries within these assemblies are the same and can be used to replace one another.

## <a id="igEditor-styling"></a>igEditor styling workaround

Layout of html elements was modified and rounded corners are rendered around whole editor, but not only buttons.

Application may disable rounded corners by providing custom CSS or overriding default `igEditor` CSS classes.

## <a id="igEditor-rendering-failure"></a>igEditor rendering failure workaround

Rendering may fail if the base element is TD.

Application should not restrict width of parent element if the base element is TD or it should ensure that actual width of the TD element is not less than the width of the `igEditor` control. Parent element is not only the parent table but the whole chain of parents up in the DOM hierarchy.

## <a id="grid-hiding-cannot-use-row-templates"></a>Cannot use igGridHiding with row templates solution

The scenario in which a row template is used and some columns are hidden is not supported.

The solution to this problem is to omit the definitions of the cell of columns you want to hide, from the row template instead of using the `igGridHiding` control.

## <a id="autoGenerateColumns-prevents-columns-grouped"></a>igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped workaround

If a grid control has some columns explicitly defined and `autoGenerateColumns` set to true, having columns grouped at initialization will prevent other columns from being grouped at runtime.

The option `autoGenerateColumns` is true by default so if you are planning to have columns grouped at initialization you have to explicitly define them. It is better to define all of the columns that you want in the grid and set `autoGenerateColumns` to false.

## <a id="mvc-helper-config-flat-grids"></a>MVC helper configuration for flat grids solution

All grids are generated as `igHierarchicalGrid`.

You have to explicitly call the `AutoGenerateLayouts`(false) method of the grid helper with argument false and a flat grid will be generated by the MVC helper for grids.

## <a id="grid-column-widths"></a>Grid column widths workaround

The scenario where some columns' widths are defined in percentage, while
others' are in pixels (or not specified at all) is not supported.

Define all column widths in one unit of measure: percentage or in pixels, but do not mix the two.

## <a id="grid-layout-problems"></a>Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7 solution

When a grid control does not have width defined, its header and footer elements (caption, pager, group-by area etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer® 7.

The solution to this problem is to define the width for the grid explicitly.

## <a id="grid-api-calls-not-working"></a>Grid API calls do not work as expected with DIV elements solution

If a grid is instantiated from a DIV element, the API calls to the grid's features did not work as expected.

The calls to the API of the grid's features should rely on the table that they are actually attached to: [gridElementId]_table. If the grid is bound to a DIV with `id` attribute "`grid1`" the easiest way to reference that table is to use either the grid's `id()` or `widget()` API methods like shown here:

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

or

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```

## <a id="cell-selection-not-working"></a>Cell selection in iOS does not work properly

When you want to scroll igGrid, you firstly tap on a cell, and then swipe in some direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery mobile presents the events. In iOS the cell is selected and then you cannot unselect it. In the same time when the `igGrid` is swiped under Android operating system no cell is selected.

## <a id="vertical-scroll-appear-behind-records"></a>Vertical scroll causes dialogs to appear behind the records solution

When the `igGrid` is running under Android, version 4.0.2, and when `igGrid` has vertical scrolling enabled, all the popups/dialogs appear behind the records. This is due to the fact that all HTML div elements placed over another scrollable div are actually behind the scrollable div, no matter what you have set as a z-index or as a CSS rule.

To fix this problem you need to reference the latest stable versions of the Modernizr JavaScript library, as well as to include the Infragistics `igScroll`™ widget.

## <a id="firefox-columns-resized-correctly"></a>Under Firefox igGrid columns cannot be resized correctly, when the column widths are not set

Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly, when the column widths are not set. This is problem with resizing the second `col` element in a **colgroup**. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

## <a id="firefox-column-cannot-resize"></a>Under Firefox igGrid columns cannot be resized correctly, when the column widths are set in percentages workaround

Due to a bug in Firefox, columns cannot be resized correctly, when the column widths are set in percentages. This is problem with resizing the second `col` element in a **colgroup**. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

Before resizing the table, the height of the grid table container needs to be removed, and after the resizing is finished the height needs to be restored.

## <a id="mvc-loader-not-working-properly"></a>MVC Loader does not function properly in an MVC Razor layout view solution

MVC helpers for any controls do not produce the proper Loader code when the MVC Loader is included in a layout page in an MVC Razor application. They just use the regular jQuery `$(function() { }) (document.load)` syntax. This happens only for MVC Razor applications and in MVC ASPX views with master pages the same problem is not experienced.

The reason for this is that layout views are processed and executed after the particular view rendered and the loader has no chance to initialize prior to the view being rendered.

The solution is not to include the MVC Loader in a MVC Razor layout page in your applications but to include it in each particular view.



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [igGrid Known Issues](igGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igGrid`™ control.

- [igHierarchicalGrid Known Issues](igHierarchicalGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igHierarchicalGrid`™ control.

- [igCombo Known Issues](igCombo-Known-Limitations.html): This topic provides information about the known issues specific to the `igCombo`™ control.

- [igDataSource Known Issues](igDataSource-igDataSource-Known-Issues.html): This topic provides information about the known issues specific to the `igDataSource`™ control.

- [igEditor Known Issues](igEditor-Known-Issues.html): This topic provides information about the known issues specific to the `igEdtor`™ control and its descendants.

- [igRating Known Issues](igRating-Known-Issues.html): This topic provides information about the known issues specific to the `igRating`™ control.

- [igTree Known Issues](igTree-Known-Limitations.html): This topic provides information about the known issues specific to the `igTree`™ control.

- [igUpload Known Issues](igUpload-Known-Issues.html): This topic provides information about the known issues specific to the `igUpload`™ control.

- [igVideoPlayer Known Issues](igVideoPlayer-Known-Issues.html): This topic provides information about the known issues specific to the `igVideoPlayer`™ control.

- [igDataChart Known Issues](igDataChart-Known-Issues.html): This topic provides information about the known issues specific to the `igDataChart`™ control.





 

 


