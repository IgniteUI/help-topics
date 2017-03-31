<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2012-volume-2",
    "controlName": "",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2012 Volume 2

## Topic Overview
### Purpose

This topic lists known issues and limitations in the %%ProductName%%™ library and provides a reference to individual controls’ known issues topics.

### In this topic

This topic contains the following sections:

-   [Known Issues and Limitations in 2012 Volume 2](#known-issues)
    -   [Overview](#overview)
    -   [Changing locale dynamically for the igEditor is not possible with the Infragistics Loader](#changing-lacale-dynamically)
    -   [Infragistics Templating limitations](#templating-limitations)
    -   [Grids and touch support](#grids-touch-support)
    -   [Input argument ui.groupedColumns may be empty under certain circumstances](#grouped-columns-input-argument)
    -   [Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog](#screen-taps-misinterpreted)
    -   [Limitation of remote grouping in hierarchical grid](#limitation-remote-grouping-hierarchical-grid)
    -   [First and last items appear half cut in financial series charts](#first-last-items-half-cut)
    -   [Chart animation disabled when axis range changes](#chart-animation-disabled)
    -   [ASP.NET MVC helper generated code in conjunction with ASP.NET MVC Loader executes after any custom JavaScript code on a page](#mvc-heper-issue)
    -   [Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround](#document-engines-workaround)
    -   [igEditor styling](#igEditor-styling)
    -   [igEditor rendering failure](#igEditor-rendering-failure)
    -   [Cannot use igGridHiding with row templates](#igGridHiding-cannot-use-row-templates)
    -   [Using igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped](#autoGenerateColumns-prevents-columns-grouped)
    -   [Grid column widths workaround](#grid-column-widths)
    -   [Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7](#grid-layout-problems)
    -   [Grid API calls do not work as expected with DIV elements](#grid-api-calls-not-working)
    -   [Vertical scroll causes dialogs to appear behind the records](#vertical-scroll-dialog-appear-behind-records)
    -   [Under Firefox, igGrid columns cannot be resized correctly, when the column widths are not set](#firefox-columns-resized-correctly)
    -   [Under Firefox igGrid columns cannot be resized correctly, when the column widths are set in percentages](#firefox-column-cannot-resize)
    -   [ASP.NET MVC Loader does not function properly in an ASP.NET MVC Razor layout view](#mvc-loader-not-working-properly)
    -   [Row Selectors do not work with column virtualization](#row-selectors-not-working-column-virtualization)
    -   [Rendering issues in hierarchical grid in a particular feature order](#rendering-issue)
    -   [The renderCheckboxes option is not compatible with templating (row and column)](#rendercheckbox-option-not-compatible-templating)
    -   [In the MVC Helper for grids the default value of AutoGenerateLayouts is changed from true to false.](#default-value-changed)
    -   [Only local configuration is supported for the filtering, grouping, and sorting features and summaries are not supported when binding a grid to a DataTable/DataSet.](#only-local-config-supported)
    -   [Adding new row is not supported when Updating and Virtualization are enabled and autoCommit = false](#adding-new-row-not-supported)
    -   [A control does not have proper dimensions when it is inside an igDialog and its width or height are relative](#control-doesnot-have-proper-dimentions)
    -   [The ASP.NETMVC Popup Mobile control requires jQuery Mobile version 1.2](#popup-mobile-requirements)
    -   [Mobile control helpers are in the Infragistics.Web.MVC.Mobile dll](#mobile-control-helpers-mobile-dll)
    -   [Inappropriate behavior of Column Moving in Google Chrome with older versions of jQuery UI](#inappropriate-behavior-column-moving)
    -   [Remote sorting, filtering and grouping are not supported for unbound columns](#remote-features-not-supported-unbound-columns)
    -   [The grid SetUnboundValues(\[Column key\], \[Dictionary of values\]) method overload of grid MVC helpers requires a primary key](#method-overload-require-primary-key)
    -   [Cannot use the grid helper in the view when the data source is remote and MergeUnboundColumns is set to true](#grid-helper-cannot-work-remote-data)
    -   [Cannot use formulae for grid unbound columns when the MergeUnboundColumns option is set to true](#cannot-use-formulae-unbound-columns)
    -   [Unbound data values are not persisted automatically in the grid controls](#unbound-data-values-not-persisted)
    -   [Grid is scrolled to the top when rendering unbound columns and virtualization is used](#grid-scrolled-to-top)
    -   [Unbound columns are populated with false when MergeUnboundColumns is set to false](#unbound-columns-populated-false)
    -   [The getUnboundValues() grid method does not return unbound values in certain situations](#grid-method-doesnot-return-unbound-values)
    -   [Mobile SelectMenu CloseText property is not applied when the menus are custom dioalog-based containers](#mobile-select-menu-issue)
    -   [Using a parentComboKey for cascading igCombos does not allow for filtering the child igCombo](#cascading-combo-issue)
    -   [Cannot use row template in *igGrid* /*igHirerarchcalGrid* to set attributes to table rows](#cannot-use-row-template-set-attributes)
-   [Related Content](#related-content)



## <a id="known-issues"></a>Known Issues and Limitations in 2012 Volume 2
### <a id="overview"></a>Overview

The following table summarizes the known issues and limitations of the %%ProductName%% 2012 Volume 2 release. Detailed explanations of known issues and the possible workarounds are provided in the known issues topics for each control.

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
[Changing locale dynamically for the igEditor is not possible with the Infragistics Loader](#changing-lacale-dynamically) | Regional settings of editors cannot be changed programmatically when using the Infragistics Loader. | ![](../../images/images/positive.png)
[Infragistics Templating limitations](#templating-limitations) | Nested `{{each}}` templates are not supported. | ![](../../images/images/negative.png)
[Grids and touch support](#grids-touch-support) | A grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements. | ![](../../images/images/positive.png)
[Input argument ui.groupedColumns may be empty under certain circumstances](#grouped-columns-input-argument) | The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event is empty when a column has been grouped by dragging it into the group-by area. | ![](../../images/images/positive.png)
[Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog](#screen-taps-misinterpreted) | On Android 4.*-powered touch devices tapping on the drop-down in the group-by modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog. | ![](../../images/images/positive.png)
[Limitation of remote grouping in hierarchical grid](#limitation-remote-grouping-hierarchical-grid) | Grouping columns from more than one layout (or the root grid) will not work with remote group-by. | ![](../../images/images/positive.png)
[First and last items appear half cut in financial series charts](#first-last-items-half-cut) | In a financial series, the first and the last data items do not appear entirely on the chart view but are plotted as if they are cut in half. | ![](../../images/images/plannedFix.png)
[Chart animations are disabled when the axis range changes](#chart-animation-disabled) | If you use the Motion Framework for charts and updated data causes the Y-axis range to change, then all chart animation is disabled and new data appears immediately without any motion effect. | ![](../../images/images/positive.png)
[MVC helper generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page](#mvc-heper-issue) | When the MVC Loader and an MVC helper for any control is used in an ASP.NET MVC view, the JavaScript code they generate is executed after custom page set-up code from `document.ready()` or `window.load()` events. | ![](../../images/images/positive.png)
[Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround](#document-engines-workaround) | Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies together will cause namespace conflict exceptions. | ![](../../images/images/positive.png)
[igEditor styling](#igEditor-styling) | Layout of HTML elements is modified and rounded corners are rendered around the whole editor, not only buttons. | ![](../../images/images/positive.png)
igEditor spin buttons | Spin buttons are rendered horizontally. | ![](../../images/images/negative.png)
[igEditor rendering failure](#igEditor-rendering-failure) | Rendering may fail if the base element is a TD. | ![](../../images/images/positive.png)
Cannot use igGridHiding™ with row templates | `igGridHiding`™ cannot hide columns when row templates are used. | ![](../../images/images/positive.png)
[igGridGroupBy and autoGenerateColumns set to True prevents other columns from being grouped](#autoGenerateColumns-prevents-columns-grouped) | If a grid control has some columns explicitly defined and `autoGenerateColumns` set to `true`, having columns grouped at initialization will prevent other columns from being grouped at runtime. | ![](../../images/images/positive.png)
[Grid column widths](#grid-column-widths) | The scenario where some columns' widths are defined in percentage, while others' are in pixels (or not specified at all) is not supported. | ![](../../images/images/positive.png)
[Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7](#grid-layout-problems) | When a grid width is not specified, header and footer elements are rendered shorter than the grid in Microsoft Internet Explorer® 7. | ![](../../images/images/positive.png)
[Grid API calls do not work as expected with DIV elements](#grid-api-calls-not-working) | If a grid is instantiated from a DIV element, the API calls to the grid's features do not work as expected. | ![](../../images/images/positive.png)
[Vertical scrolling causes dialogs to appear behind the records](#vertical-scroll-dialog-appear-behind-records) | When the `igGrid` is running under Android, version 4.0.2, and when the `igGrid` has vertical scrolling, all the popups/dialogs appear behind the records. | ![](../../images/images/positive.png)
[Under Firefox, the columns cannot be resized correctly when the column widths are not set.](#firefox-columns-resized-correctly) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are not set. | ![](../../images/images/negative.png)
[Under Firefox, the columns cannot be resized correctly when the column widths are set in percentages.](#firefox-column-cannot-resize) | Due to a bug in Firefox, columns cannot be resized correctly when the column widths are set in percentages. | ![](../../images/images/positive.png)
[The MVC Loader does not function properly in an MVC Razor layout view](#mvc-loader-not-working-properly) | The ASP.NET MVC Loader cannot initialize before the controls in an actual view when it is included in an ASP.NET MVC Razor layout view. | ![](../../images/images/positive.png)
[Row Selectors do not work with column virtualization](#row-selectors-not-working-column-virtualization) | Row Selectors are not supported in the context of column virtualization. This will be implemented in future releases. | ![](../../images/images/plannedFix.png)
igGridSelection works only with visible rows when virtualization is enabled | This limitation is due to the fact that invisible rows/cells do not exist when virtualization is enabled. | ![](../../images/images/negative.png)
[Rendering issues in the hierarchical grid when features are referenced in a particular order](#rendering-issue) | In the `igHierarchicalGrid`, child layouts may have rendering issues if the Row Selectors feature is added after the grouping feature to the feature list. | ![](../../images/images/positive.png)
[The renderCheckboxes option is incompatible with templating (row and column)](#rendercheckbox-option-not-compatible-templating) | When you use templating and the `renderCheckboxes` option is set to true, the Boolean columns do not render checkboxes because it is not possible to check if the Boolean column has a template defined. | ![](../../images/images/positive.png)
Tooltips are not shown for the Geographic Contour Line series | Currently tooltips are not supported for the Geographic Contour Line series. | ![](../../images/images/plannedFix.png)
Tooltips are not rendered for the Geographic Symbol series on an iPad device | No tooltips appear on an iPad device when Geographic Symbol series are rendered. | ![](../../images/images/plannedFix.png)
[In the ASP.NET MVC Helper for grids, the default value of AutoGenerateLayouts is changed from true to false.](#default-value-changed) | The default value of the `AutoGenerateLayouts` property is changed from `true` to `false` in order to avoid an additional remote data request for flat grids. | ![](../../images/images/negative.png)
[Only local configuration is supported for the filtering, grouping, and sorting features and summaries are not supported when binding a grid to a DataTable/DataSet.](#only-local-config-supported) | Local configuration for filtering, grouping and sorting features should be used. Remote sorting and filtering can be implemented by processing the request and filtering the data on the DataSet/DataTable level before returning the data. | ![](../../images/images/positive.png)
The LoadTransaction() method of the GridModel must be overridden when binding to a DataTable/DataSet and the Updating feature is used | When binding a grid to a DataTable or a DataSet and the Updating feature is used, the `GridModel` must override the `LoadTransaction()` method using a serializer which supports deserializing `Dictionary` to JSON. | ![](../../images/images/positive.png)
[Adding new row is not supported when Updating and Virtualization are enabled and autoCommit = false](#adding-new-row-not-supported) | Virtualization is not aware of the newly added row when autoCommit is false. | ![](../../images/images/positive.png)
Unbound columns area not compatible with remote sorting, filtering and grouping features of grids | Remote sorting, filtering and grouping features are not supported for unbound columns grids. The features are disabled for the unbound columns in the Columns collection. | ![](../../images/images/negative.png)
[A control does not have proper dimensions when it is inside an igDialog and its width or height are relative](#control-doesnot-have-proper-dimentions) | This is because a control is instantiated before the `igDialog` is rendered and its dimensions cannot be calculated correctly. | ![](../../images/images/positive.png)
[The MVC Popup Mobile control requires jQuery Mobile version 1.2](#popup-mobile-requirements) | The Popup widget is introduced in the jQuery mobile 1.2. | ![](../../images/images/positive.png)
[Mobile control helpers are in the Infragistics.Web.MVC.Mobile dll](#mobile-control-helpers-mobile-dll) | In the 2012.1 Release the mobile control helpers were part of the `Infragistics.Web.MVC.dll` assembly. | ![](../../images/images/positive.png)
[Inappropriate behavior of Column Moving in Google Chrome with older versions of jQuery UI](#inappropriate-behavior-column-moving) | When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome. | ![](../../images/images/positive.png)
[Remote sorting, filtering and grouping are not supported for unbound columns](#remote-features-not-supported-unbound-columns) | Remote sorting, filtering and grouping are not supported for unbound columns. The features are disabled for the unbound columns in the `Columns` collection. | ![](../../images/images/positive.png)
[The grid SetUnboundValues(\[Column key\], \[Dictionary of values\]) method overload of grid MVC helpers requires a primary key](#method-overload-require-primary-key) | Using the `SetUnboundValues([Column key], [Dictionary of values])` method overload requires setting a primary key. | ![](../../images/images/positive.png)
[Cannot use the grid helper in a view when the data source is remote and MergeUnboundColumns is set to true](#grid-helper-cannot-work-remote-data) | Using the grid helper in an ASP.NET MVC view is not a valid scenario when the data source is remote and the `MergeUnboundColumns` property is set to `true`. | ![](../../images/images/positive.png)
[Cannot use formulae for unbound grid columns when the MergeUnboundColumns option is set to true](#cannot-use-formulae-unbound-columns) | When the `MergeUnboundColumns` option is set to true then formulae cannot be used to set values of unbound columns. | ![](../../images/images/positive.png)
[Unbound data values are not persisted automatically in the grid controls](#unbound-data-values-not-persisted) | If a row with unbound values is edited and committed, and the grid is rebound after that, then the changes are not persisted. | ![](../../images/images/positive.png)
[Grid is scrolled to the top when rendering unbound columns and virtualization is used](#grid-scrolled-to-top) | A grid is scrolled to the top before values in any unbound column are rendered when any form of virtualization (fixed or continuous) is used and the `setUnboundValues()` client API method is called. | ![](../../images/images/positive.png)
[Unbound grid columns are populated with false when MergeUnboundColumns is set to false](#unbound-columns-populated-false) | When the `MergeUnboundColumns` property is set to `false` and remote data is used then any Boolean unbound columns are populated with `false`. | ![](../../images/images/negative.png)
[The getUnboundValues() method of grids does not return unbound values in certain situations](#grid-method-doesnot-return-unbound-values) | Using the `getUnboundValues()` client API method does not return unbound values if they are set through the `dataBound` client side event. | ![](../../images/images/negative.png)
[Mobile SelectMenu CloseText property is not applied when the menus are custom dioalog-based containers](#mobile-select-menu-issue) | In SelectMenu with dialog-based containers, if you try to set a close text using the CloseText property, and if you hover over the close button, the “Close” text will appear instead of the custom value you have set. | ![](../../images/images/negative.png)
[Using a parentComboKey for cascading igCombos does not allow for filtering the child igCombo](#cascading-combo-issue) | Using a `parentComboKey` for cascading `igCombos` does not allow for filtering the child `igCombo` | ![](../../images/images/positive.png)
[Cannot use row template in igGrid /igHirerarchcalGrid to set attributes to table rows](#cannot-use-row-template-set-attributes) | It is not possible to set any type of an attribute (i.e. class) on a tr element because the row template is implemented as a repeating column template. A few workarounds are available. | ![](../../images/images/positive.png)




## <a id="changing-lacale-dynamically"></a>Changing locale dynamically for the igEditor is not possible with the Infragistics Loader

Regional settings of editors cannot be changed dynamically when using the Infragistics Loader.

A postback is necessary in order to change the regional option. Another workaround is to destroy the editor control, call the loader to load with different locale, and recreate the control again.

## <a id="templating-limitations"></a>Infragistics Templating limitations

Nested `{{each}}` templates are not supported.

## <a id="grids-touch-support"></a>Grids and touch support solution

A grid and its features may have inconsistent behavior when the stylus is sliding over certain UI elements.

You have to explicitly reference the `js\modules\infragistics.ui.scroll.js` file to ensure that sliding will cause scrolling on the correct UI elements.

## <a id="grouped-columns-input-argument"></a>Input argument ui.groupedColumns may be empty under certain circumstances workaround

The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event
is empty when a column has been grouped by dragging it into the group-by
area.

The `ui.groupedColumns` array shows only grouped columns on the root level (as if it is acting as a flat grid, as in any flat grid with grouping). If you want to get all grouped columns use the `groupByColumns()` function from the API, which recursively iterates all child grids and adds up the grouped columns for any layout.

## <a id="screen-taps-misinterpreted"></a>Screen taps misinterpreted on Android 4.* devices for grid grouping modal dialog solution

On Android 4.*-powered touch devices tapping on the drop-down in the
group-by modal dialog in a hierarchical grid will often act on the grid
cell behind the modal dialog.

The solution is to set `modalDialogDropDownWidth` and `modalDialogDropDownAreaWidth` to values which ensure that the drop-down in the modal dialog is wide enough to show the whole layouts tree, or you just set those settings to null.

## <a id="limitation-remote-grouping-hierarchical-grid"></a>Limitation of remote grouping in hierarchical grid solution

Grouping columns from more than one layout (or the root grid) will not
work with remote group-by.

There are two possible solutions:

1. Use local group-by for the entire hierarchical grid - this circumvents the problem entirely.

2. When using remote group-by, only group columns from one layout (or the root grid).

## <a id="first-last-items-half-cut"></a>First and last items appear half cut in financial series charts

In financial series the first and the last data items do not appear entirely on the chart view but are plotted as if they are half cut.

A new feature of data charts will be implemented in the future releases that will solve this issue.

## <a id="chart-animation-disabled"></a>Chart animation disabled when axis range changes solution

If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data appears immediately without any motion effect.

The solution to this problem is to select an appropriate range for the Y-axis of your chart and set the `minimumValue` and `maximumValue` options accordingly. This prevents axis range changes.

## <a id="mvc-heper-issue"></a>MVC helper generated code in conjunction with MVC Loader executes after any custom JavaScript code on a page solution

When MVC Loader and MVC helper for any control are used in an MVC view the JavaScript code they generate is executed after custom page set-up code put in document.ready or window.load events. (This is because the control is rendered in the body part of a page and script code is usually put in the head part.) If the custom code refers to the control rendered by the MVC helper code, it may fail since the control does not exist yet. This is a timing issue and depends on how quickly the loader loads necessary resources.

The solution is to attach to the last event in the control initialization sequence like `dataBound` and execute any JavaScript code on the control from the event handler. Alternatively, you can put a short script block after the MVC helper with contents similar to:

**In JavaScript:**

```js
$.ig.loader(function () {
    customControlLogic();
});
```

In this example, the `customControlLogic()` function handles any custom code. This ensures that code affecting the control will execute after the control is instantiated.

## <a id="document-engines-workaround"></a>Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround

Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies together causes namespace conflict exceptions.

To resolve this issue, reference either the documents assemblies from Infragistics ASP.NET or the documents assemblies from %%ProductName%% in your application. The documents libraries within these assemblies are the same and can be used to replace one another.

## <a id="igEditor-styling"></a>igEditor styling workaround

Layout of HTML elements was modified and rounded corners are rendered around the whole editor, not only buttons.

Applications may disable rounded corners by providing custom CSS or overriding default `igEditor` CSS classes.

## <a id="igEditor-rendering-failure"></a>igEditor rendering failure workaround

Rendering may fail if the base element is a TD.

Applications should not restrict the width of a parent element if the base element is a TD or it should ensure that the actual width of the TD element is not less than the width of the `igEditor` control. The parent element is not only the parent table but the whole chain of parents up in the DOM hierarchy.

## <a id="igGridHiding-cannot-use-row-templates"></a>Cannot use igGridHiding with row templates solution

The scenario in which a row template is used and some columns are hidden is not supported.

You can omit the definitions of the columns you want to hide from the row template instead of using the `igGridHiding` features.

## <a id="autoGenerateColumns-prevents-columns-grouped"></a>igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped workaround

If a grid control has some columns explicitly defined and `autoGenerateColumns` is set to true, having columns grouped at initialization will prevent other columns from being grouped at runtime.

The option `autoGenerateColumns` is true by default so if you are planning to have columns grouped at initialization you have to explicitly define them. It is better to define all of the columns that you want in the grid and set `autoGenerateColumns` to false.

## <a id="grid-column-widths"></a>Grid column widths workaround

The scenario where some columns' widths are defined in percentages while others' are in pixels (or not specified at all) is not supported.

Define all column widths in one unit of measure: percentages or pixels.

## <a id="grid-layout-problems"></a>Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7 solution

When a grid control does not have a width defined, its header and footer elements (caption, pager, group-by area etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer® 7.

You can define the width for the grid explicitly.

## <a id="grid-api-calls-not-working"></a>Grid API calls do not work as expected with DIV elements solution

If a grid is instantiated from a DIV element, the API calls to the grid's features do not work as expected. The best solution is to use a TABLE element as the base element for the `igGrid`. If a DIV must be used, continue with the following workaround.

The calls to the API of the grid's features should rely on the table that they are actually attached to: [*gridElementId*]_table. If the grid is bound to a DIV with `id` attribute set to "`grid1`" the easiest way to reference that table is to use either the grid's `id()` or `widget()` API methods like shown here:

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

or

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```

## <a id="vertical-scroll-dialog-appear-behind-records"></a>Vertical scroll causes dialogs to appear behind the records solution

When the `igGrid` is running under Android, version 4.0.2, and when the `igGrid` has vertical scrolling enabled, all the popups/dialogs appear behind the records. This is due to the fact that all HTML div elements placed over another scrollable div are rendered behind the scrollable div, no matter what you have set as a z-index or as a CSS rule.

To fix this problem you need to reference the latest stable versions of the Modernizr JavaScript library, as well as to include the Infragistics `igScroll`™ widget.

## <a id="firefox-columns-resized-correctly"></a>Under Firefox, igGrid columns cannot be resized correctly, when the column widths are not set

Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are not set. This is an issue with resizing the second col element in a `colgroup`. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

## <a id="firefox-column-cannot-resize"></a>Under Firefox, igGrid columns cannot be resized correctly when the column widths are set in percentages workaround

Due to a bug in Firefox, columns cannot be resized correctly when the column widths are set in percentages. This is an issue with resizing the second col element in a colgroup. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

Before resizing the table, the height of the grid table container needs to be removed. After the resizing is finished, the height needs to be restored.

## <a id="mvc-loader-not-working-properly"></a>The ASP.NET MVC Loader does not function properly in an MVC Razor layout view solution

ASP.NET MVC helpers do not produce the proper Loader code when the Loader is included in a layout page in an ASP.NET MVC Razor application. They use the regular jQuery `$(function() { }) (document.ready)` syntax. This happens only for ASP.NET MVC Razor applications and in MVC ASPX views with master pages the same problem is not experienced.

The reason for this is that layout views are processed and executed after the particular view is rendered and the loader has no chance to initialize prior to the view rendering.

The solution is not to include the MVC Loader in an ASP.NET MVC Razor layout page in your applications but to include it in each particular view.

## <a id="row-selectors-not-working-column-virtualization"></a>Row Selectors do not work with column virtualization

Row Selectors are not supported in the context of the column virtualization. This will be implemented in future releases.

## <a id="rendering-issue"></a>Rendering issues in the hierarchical grid features are added in a particular order

In the `igHierarchicalGrid`, child layouts may have rendering issues (missing or misaligned columns) if the Row Selectors feature is added after the grouping feature to the feature list.

To avoid this, add the Row Selectors before grouping in the array.

## <a id="rendercheckbox-option-not-compatible-templating"></a>The renderCheckboxes option is not compatible with templating (row and column)

The `renderCheckboxes` option is not compatible with templating (row and column) When you use templating and the `renderCheckboxes` option is set to true, the Boolean columns will not render checkboxes because it is not possible to check if the Boolean column has a template defined for it. Use an `<input type='checkbox'/>` within the rendered template to render checkboxes for a Boolean column. For example, use the following template:

**In HTML:**

```html
<input type="checkbox" {{if ${MakeFlag} === "true"}} checked="checked" {{/if}} disabled="disabled">
```

## <a id="default-value-changed"></a>In the MVC Helper for grids the default value of AutoGenerateLayouts is changed from true to false.

When `AutoGenerateLayouts()` is set to true in remote data binding scenarios such as remote sorting and filtering, there is an additional request to the data source. In order to avoid this additional request for the flat grid the default value was changed from true to false.

>**Note:** This is a breaking change.

## <a id="only-local-config-supported"></a>Only local configuration is supported for the filtering, grouping, and sorting features and summaries are not supported when binding a grid to a DataTable/DataSet.

Local configuration for filtering, grouping and sorting features should be used when binding grids to a DataTable or a DataSet.

Remote sorting and filtering can be implemented by processing the request and filtering and sorting on the server side before returning the data.

## <a id="adding-new-row-not-supported"></a>Adding new row is not supported when Updating and Virtualization are enabled and autoCommit = false

When `autoCommit = false` transactions are kept in the pending transaction log. They are not visible by the Virtualization until they are committed. The newly added row will not be visible by the user once a new chunk of data is loaded by the Virtualization.

Workaround

`autoCommit` should be set to true, or the newly added row should be committed immediatelly.

## <a id="control-doesnot-have-proper-dimentions"></a>A control does not have proper dimensions when it is inside an igDialog and its width or height are relative

It is recommended to instantiate controls after the `igDialog` is opened when you use them with relative dimensions.

## <a id="popup-mobile-requirements"></a>The ASP.NET MVC Popup Mobile control requires jQuery Mobile version 1.2

The popup widget is introduced in jQuery Mobile version 1.2.. If you want to use the Popup MVC wrapper use a jQuery Mobile version higher or equal to 1.2.

## <a id="mobile-control-helpers-mobile-dll"></a>Mobile control helpers are in the Infragistics.Web.MVC.Mobile dll

In the 2012.1 Release the mobile control helpers were part of the `Infragistics.Web.MVC.dll` assembly. Now all mobile controls are isolated in `Infragistics.Web.MVC.Mobile.dll` assembly.

>**Note:** This is a breaking change.

## <a id="inappropriate-behavior-column-moving"></a>Inappropriate behavior of Column Moving in Google Chrome with older versions of jQuery UI

When the Column Moving feature is used with a jQuery UI version lower than 1.8.6 it causes the grid to be selected in Google Chrome.

To avoid this, use jQuery version 1.8.6 or newer.

## <a id="remote-features-not-supported-unbound-columns"></a>Remote sorting, filtering and grouping are not supported for unbound columns

Remote sorting, filtering and grouping are not supported for unbound columns. The features are disabled for the unbound columns in the Columns collection.

Use local configuration for sorting, filtering and grouping features when unbound columns are defined.

## <a id="method-overload-require-primary-key"></a>The grid SetUnboundValues([Column key], [Dictionary of values]) method overload of grid MVC helpers requires a primary key

Using the [SetUnboundValues([Column key], [Dictionary of values])](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Grid`1~SetUnboundValues.html) method overload requires setting a primary key. This overload has parameters for column key and dictionary of primary key and unbound value pairs. The primary key in the dictionary points to the primary key of a row in the grid and the unbound value is the value which will be set in the unbound column with key equal to the column key.

Use the method overload [SetUnboundValues ([Column key], [List of values])](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Grid`1~SetUnboundValues.html) if there is no primary key defined.

## <a id="grid-helper-cannot-work-remote-data"></a>Cannot use the grid helper in the view when the data source is remote and MergeUnboundColumns is set to true

Using the grid helper in the view is not a valid scenario when the data source is remote and the `MergeUnboundColumns` property is set to true. You can set some options through chaining but when remote requests are performed these options are re-set with the default values from the request.

## <a id="cannot-use-formulae-unbound-columns"></a>Cannot use formulae for grid unbound columns when the MergeUnboundColumns option is set to true

When the `MergeUnboundColumns` option is set to true then formulae cannot be used to set values of unbound columns in the `igGrid`

Using the `dataBound` client side event may be used as a workaround. You can handle the `dataBound` client side event, and add those values manually to the data source on the client, before the grid is rendered. The unbound columns are part of the _data array in the data source passed to the `dataBound` event handler. Thus, they can be accessed and filled based on the other current row data or another value.

## <a id="unbound-data-values-not-persisted"></a>Unbound data values are not persisted automatically in the grid controls

If a row with unbound values is edited and committed and the grid is rebound after that, then changes are not persisted.

During CRUD operations, unbound columns are present in the transactions as well as updating. As unbound columns are part of the data array in the data source, it is up to the implementation to check if such a column exists in the underlying data source when the transactions are committed to the data source.

## <a id="grid-scrolled-to-top"></a>Grid is scrolled to the top when rendering unbound columns and virtualization is used

A grid is scrolled to the top before values in any unbound column are
rendered when any form of virtualization (fixed or continuous) is used
and the `setUnboundValues()` client API method is called.

## <a id="unbound-columns-populated-false"></a>Unbound columns are populated with false when MergeUnboundColumns is set to false

When the `MergeUnboundColumns` property is set to false and remote data is used then any Boolean unbound columns are populated with false.

## <a id="grid-method-doesnot-return-unbound-values"></a>The getUnboundValues() grid method does not return unbound values in certain situations

Using the `getUnboundValues()` client API method does not return unbound values if they are set through the dataBound client side event.

## <a id="mobile-select-menu-issue"></a>The CloseText property of the mobile SelectMenu control is not applied when the menus are in custom dialog-based containers

If you set a text for the close button tooltip using the `CloseText` property of the `SelectMenu` control in dialog-based containers, your custom tooltip will not appear and the default one will be shown instead. This is due to jQuery Mobile not injecting the custom close text which cannot be accessed later.

## <a id="cascading-combo-issue"></a>Using a parentComboKey for cascading igCombos does not allow for filtering the child igCombo

If you require filtering on child `igCombos`, use the `cascadingDataSources` approach as opposed to the `parentComboKey`. For more details, see the [Binding Cascading igCombo Controls to a Cascading Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html) topic.

## <a id="cannot-use-row-template-set-attributes"></a>Cannot use row template in igGrid /igHirerarchcalGrid to set attributes to table rows

It is not possible to set any type of an attribute (i.e. class) on a tr element because the row template is implemented as a repeating column template. The suggested workarounds are listed below.

**Workaround** **1**

Set a global style to the *tr* element of the specified grid.  In the following code snippet, the global style of the tr element is set to a container (grid) with ID grid.

**In CSS:**

```css
grid tr { /* style definition */ }
```

Workaround 2

Hook on to the grid rendered event and, inside the event handler function, set the desired attribute or style to the tr elements (either all of them or to specific trs, depending on what you need).

**In JavaScript:**

```js
rendered: function (event, ui) {
// apply a attribute/style/class to all tr-s, or to a specific tr based on a condition
}
```



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [*igGrid* Known Issues](igGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igGrid`™ control.

- [*igHierarchicalGrid* Known Issues](igHierarchicalGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igHierarchicalGrid`™ control.

- [*igCombo* Known Limitations](igCombo-Known-Limitations.html): This topic provides information about the known issues specific to the `igCombo`™ control.

- [*igDataSource* Known Issues](igDataSource-igDataSource-Known-Issues.html): This topic provides information about the known issues specific to the `igDataSource`™ control.

- [*igEditor* Known Issues](igEditor-Known-Issues-TE.html): This topic provides information about the known issues specific to the `igEditor`™ control and its descendants.

- [*igRating* Known Issues](igRating-Known-Issues.html): This topic provides information about the known issues specific to the `igRating`™ control.

- [*igTree* Known Limitations](igTree-Known-Limitations.html): This topic provides information about the known issues specific to the `igTree`™ control.

- [*igUpload* Known Issues](igUpload-Known-Issues.html): This topic provides information about the known issues specific to the `igUpload`™ control.

- [*igVideoPlayer* Known Issues](igVideoPlayer-Known-Issues.html): This topic provides information about the known issues specific to the `igVideoPlayer`™ control.

- [Known Issues and Limitations (*igDataChart*)](igDataChart-Known-Issues.html): This topic provides information about the known issues specific to the `igDataChart`™ control.

- [Known Issues and Limitations (*igMap*)](igMap-Known-Issues-Limitations.html): This topic lists all known issues and limitations in the `igMap`™ control.

- [Known Issues and Limitations (igCombo)](igCombo-Known-Limitations.html): This topic lists all known issues and limitations in the `igCombo`™ control.





 

 


