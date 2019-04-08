<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2013-volume-1",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Known Issues and Limitations in 2013 Volume 1

## Overview

The following table summarizes the known issues and limitations of the %%ProductName%% 2013 Volume 1 release. Detailed explanations of known issues and the possible workarounds are provided in the known issues topics for each control.

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

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
Control
			</th>

            <th>
Feature
			</th>

            <th>
Description
			</th>

            <th>
Status
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td rowspan="2">
[igCombo](#igCombo)™
			</td>

            <td>
[Using a parentComboKey for cascading igCombos does not allow for filtering the child igCombo](#cascading-combos)
			</td>

            <td>
Using a parentComboKey for cascading
                    igCombos does not allow for filtering the child igCombo
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Enabling load-on-demand on child cascading igCombo to is not supported](#enabling-load-on-demand)
			</td>

            <td>
Configuring a cascading child `igCombo` to have load-on-demand enabled along with defining its parent combo key is not supported.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td rowspan="2">
[igDataChart](#igDataChart)™
			</td>

            <td>
[First and last items appear half cut in financial series charts](#first-last-items-half-cut)
			</td>

            <td>
In a financial series, the first and the last data items do not appear entirely on the chart view but are plotted as if they are cut in half.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
[Chart animations are disabled when the axis range changes](#chart-animations-disabled)
			</td>

            <td>
If you use the Motion Framework for charts and updated data causes the Y-axis range to change, then all chart animation is disabled and new data appears immediately without any motion effect.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[igDialog](#igDialog)™
			</td>

            <td>
[A control does not have proper dimensions when it is inside an igDialog and its width or height are relative](#control-wrong-dimensions)
			</td>

            <td>
This is because a control is instantiated before the `igDialog`™ is rendered and its dimensions cannot be calculated correctly.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="4">
[igEditors](#igEditors)™
			</td>

            <td>
[Changing locale dynamically for the igEditor is not possible with the Infragistics Loader](#changing-local-dynamically)
			</td>

            <td>
Regional settings of editors cannot be changed programmatically when using the Infragistics Loader.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[igEditor styling](#igEditor-styling)
			</td>

            <td>
Layout of HTML elements is modified and rounded corners are rendered around the whole editor, not only buttons.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
igEditor spin buttons
			</td>

            <td>
Spin buttons are rendered horizontally.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[igEditor rendering failure](#igEditor-rendering-failure)
			</td>

            <td>
Rendering may fail if the base element is a TD.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="31">
[igGrid](#igGrid)™
			</td>

            <td>
[Grids and touch support](#grids-touch-support)
			</td>

            <td>
A grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Input argument ui.groupedColumns may be empty under certain circumstances](#grouped-columns-empty-input-argument)
			</td>

            <td>
The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event is empty when a column has been grouped by dragging it into the group-by area.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Cannot use igGridHiding with row templates solution](#cannot-use-igGridHiding-row-templates)
			</td>

            <td>
`igGridHiding` cannot hide columns when row templates are used.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped workaround](#grouped-columns-workaround)
			</td>

            <td>
If a grid control has some columns explicitly defined and `autoGenerateColumns` set to `true`, having columns grouped at initialization will prevent other columns from being
                grouped at runtime.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Grid column widths](#grid-column-widths)
			</td>

            <td>
The scenario where some columns' widths are defined in percentage, while others' are in pixels (or not specified at all) is not supported.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Grid layout problems for header and footer elements in Microsoft Internet Explorer 7 solution](#grid-layout-problem)
			</td>

            <td>
When a grid width is not specified, header and footer elements are rendered shorter than the grid in Microsoft® Internet Explorer 7.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Grid API calls do not work as expected with DIV elements solution](#grid-api-calls-donot-work)
			</td>

            <td>
If a grid is instantiated from a DIV element, the API calls to the grid's features do not work as expected.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Vertical scrolling causes dialogs to appear behind the records](#vertical-scrolling-issue)
			</td>

            <td>
When the `igGrid` is running under Android, version 4.0.2, and when the `igGrid` has vertical scrolling, all the popups/dialogs appear behind the records.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Under Firefox, the igGrid columns cannot be resized correctly when the column widths are not set.](#firefox-resized-columns-issue)
			</td>

            <td>
Due to a bug in Firefox®, the `igGrid` columns cannot be resized correctly when the column widths are not set.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[Under Firefox, the igGrid columns cannot be resized correctly when the column widths are set in percentages.](#firefox-column-cannot-resize)
			</td>

            <td>
Due to a bug in Firefox, columns cannot be resized correctly when the column widths are set in percentages.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Row Selectors do not work with column virtualization](#row-selectors-column-virtualization)
			</td>

            <td>
Row Selectors are not supported in the context of column virtualization. This will be implemented in future releases.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
igGridSelection works only with visible rows when virtualization is enabled
			</td>

            <td>
This limitation is due to the fact that invisible rows/cells do not exist when virtualization is enabled.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[The renderCheckboxes option is incompatible with templating (row and column)](#renderCheckbox-option-incompatibility)
			</td>

            <td>
When you use templating and the `renderCheckboxes` option is set to true, the Boolean columns do not render checkboxes because it is not possible to check if the Boolean column has a template defined.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Cannot use row template in igGrid /igHierarchicalGrid to set attributes to table rows](#cannot-use-row-template-set-attributes)
			</td>

            <td>
It is not possible to set any type of an attribute (i.e. class) on a tr
                    element because the row template is implemented as a repeating column template. A few workarounds are available.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[igGrid Resizing does not work with older jQuery versions](#resizing-does-not-work-older-jquery-version)
			</td>

            <td>
This issue is reproducible for jQuery UI versions 1.8.0 – 1.8.5.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Column Moving not working in Internet Explorer 9](#column-moving-not-working-ie9)
			</td>

            <td>
This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2.  For more information, see the jQuery UI Bug [5370](http://bugs.jqueryui.com/ticket/5370).
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Group By not working in Internet Explorer 9](#groupby-not-working-ie9)
			</td>

            <td>
This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2.
                    For more information see the jQuery UI Bug [5370](http://bugs.jqueryui.com/ticket/5370).
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Defining an igGrid/igHierarchicalGrid feature more than once is not supported.
			</td>

            <td>
Defining an igGrid/igHierarchicalGrid feature more than once in JavaScript throws an error.

                Defining an igGrid/igHierarchicalGrid feature more than once in the MVC Wrapper, causes only the last definition to be taken into account.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[Only local configuration is supported for the filtering, grouping, and sorting features and summaries are not supported when binding a grid to a DataTable/DataSet.](#only-local-config-supported)
			</td>

            <td>
Local configuration for filtering, grouping and sorting features should be used. Remote sorting and filtering can be implemented by processing the
                    request and filtering the data on the DataSet/DataTable level before returning the data.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Inappropriate behavior of Column Moving in Google Chrome with older versions of jQuery UI](#inappropriate-behavior-column-moving-chrome)
			</td>

            <td>
When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Remote sorting, filtering and grouping are not supported for unbound columns](#remote-features-not-supported)
			</td>

            <td>
Remote sorting, filtering and grouping are not supported for unbound columns. The features are disabled for the unbound columns in the `Columns` collection.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[The grid SetUnboundValues([Column key], [Dictionary of values]) method overload of grid MVC helpers requires a primary key](#grid-method-overload)
			</td>

            <td>
Using the `SetUnboundValues(<Column key>, <Dictionary of values>)` method overload requires setting a primary key.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Cannot use the grid helper in a view when the data source is remote and MergeUnboundColumns is set to true](#cannot-use-grid-helper-in-view)
			</td>

            <td>
Using the grid helper in an ASP.NET MVC view is not a valid scenario when the data source is remote and the `MergeUnboundColumns` property is set to `true`.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Cannot use formula property for unbound grid columns when the MergeUnboundColumns option is set to true](#cannot-use-formula-property)
			</td>

            <td>
When the `MergeUnboundColumns` option is set to true then formula property cannot be used to set values of unbound columns.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Unbound data values are not persisted automatically in the grid controls](#unbound-data-values-issue)
			</td>

            <td>
If a row with unbound values is edited and committed, and the grid is rebound after that, then the changes are not persisted.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Grid is scrolled to the top when rendering unbound columns and virtualization is used](#grid-scrolled-to-top)
			</td>

            <td>
A grid is scrolled to the top before values in any unbound column are rendered when any form of virtualization (fixed or continuous) is used and the `setUnboundValues()`client API method is called.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Unbound grid columns are populated with false when MergeUnboundColumns is set to false](#unbound-grid-columns-populated)
			</td>

            <td>
When the `MergeUnboundColumns` property is set to `false` and remote data is used then any Boolean unbound columns are populated with `false`.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
The `LoadTransaction()` method of the GridModel must be overridden when binding to a DataTable/DataSet and the Updating feature is used
			</td>

            <td>
When binding a grid to a DataTable or a DataSet and the Updating feature is used, the `GridModel` must override the `LoadTransaction()` method using a serializer which supports deserializing `Dictionary` to JSON.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Unbound columns area not compatible with remote sorting, filtering and grouping features of grids
			</td>

            <td>
Remote sorting, filtering and grouping features are not supported for unbound columns grids. The features are disabled for the unbound columns in the
                    Columns collection.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[The getUnboundValues() method of grids does not return unbound values in certain situations](#grids-does-not-return-unbound-values)
			</td>

            <td>
Using the `getUnboundValues()` client API method does not return unbound values if they are set through the `dataBound` client
                    side event.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[Adding new row is not supported when Updating and Virtualization are enabled and autoCommit = false](#adding-new-row)
			</td>

            <td>
Virtualization is not aware of the newly added row when `autoCommit` is false.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="3">
[igHierarchicalGrid](#igHierarchicalGrid)™
			</td>

            <td>
[Screen taps misinterpreted on Android 4.* devices for grid group-by modal dialog](#screen-taps)
			</td>

            <td>
On Android™ 4.*-powered touch devices tapping on the drop-down in the group-by modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Limitation of remote grouping in hierarchical grid](#limitation-remote-grouping)
			</td>

            <td>
Grouping columns from more than one layout (or the root grid) will not work with remote group-by.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Rendering issues in the hierarchical grid when features are referenced in a particular order](#rendering-issue-hierarchical-grid)
			</td>

            <td>
In the `igHierarchicalGrid`, child layouts may have rendering issues if the Row Selectors feature is added after the grouping feature to the feature
                    list.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="3">
[%%ProductName%% ASP.NET MVC Wrappers](#mvc-wrappers-issue)
			</td>

            <td>
[MVC helper generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page](#mvc-helper-generated-code)
			</td>

            <td>
When the MVC Loader and an MVC helper for any control is used in an ASP.NET MVC view, the JavaScript code they generate is executed after custom page set-up code from `document.ready``()` or
                    `window.load``()` events.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[In the ASP.NET MVC Helper for grids, the default value of AutoGenerateLayouts is changed from true to false.](#default-value-changed-autogeneratelayouts)
			</td>

            <td>
The default value of the `AutoGenerateLayouts` property is changed from `true` to `false` in order to avoid an additional remote data request
                    for flat grids.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[The MVC Loader does not function properly in an MVC Razor layout view](#mvc-loader-does-not-function-properly)
			</td>

            <td>
The ASP.NET MVC Loader cannot initialize before the controls in an actual view when it is included in an ASP.NET MVC Razor layout view.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Infragistics Document Engine](#infragistics-document-engine)
			</td>

            <td>
[Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround](#using-document-engines)
			</td>

            <td>
Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies together will cause namespace conflict exceptions.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="2">
igMap™
			</td>

            <td>
Tooltips are not shown for the Geographic Contour Line series
			</td>

            <td>
Currently tooltips are not supported for the Geographic Contour Line series.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
Tooltips are not rendered for the Geographic Symbol series on an iPad device
			</td>

            <td>
No tooltips appear on an iPad device when Geographic Symbol series are rendered.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td rowspan="2">
[%%ProductName%% ASP.NET MVC Mobile Wrappers](#mvc-mobile-wrappers)
			</td>

            <td>
[The MVC Popup Mobile control requires jQuery Mobile version 1.2](#mvc-popup-mobile-control-requirements)
			</td>

            <td>
The Popup widget is introduced in the jQuery mobile 1.2.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Mobile control helpers are in the Infragistics.Web.MVC.Mobile dll](#mobile-control-helpers-dll)
			</td>

            <td>
In the 2013.1 Release the mobile control helpers were part of the `Infragistics.Web.MVC.dll` assembly.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Mobile SelectMenu](#mobie-selectmenu)
			</td>

            <td>
[The CloseText property of the mobile SelectMenu control is not applied when the menus are in custom dialog-based containers](#closetext-property-issue)
			</td>

            <td>
In `SelectMenu` with dialog-based containers, if you try to set a close text using the `CloseText` property, and if you hover over the close button, the “Close” text will appear instead of the custom value you
                    have set.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[Mobile Slider](#mobile-slider)
			</td>

            <td>
[Mobile Slider does not slide on Windows Phone 7](#mobile-slider-issue-windows-phone7)
			</td>

            <td>
Because Windows® Phone 7 does not support standard touch events, the slider is read-only.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="4">
[igOlapXmlaDataSource](#igOlapXmlaDataSource)™
			</td>

            <td>
`igOlapXmlaDataSource` not supported on Android-based browsers
			</td>

            <td>
The `igOlapXmlaDataSource` component is not supported on browsers for the Android operating system.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
[Authenticated data access not working correctly with Mozilla Firefox for igOlapXmlaDataSource](#firefox-authenticated-data-access-issue)
			</td>

            <td>
When using the Mozilla® Firefox browser with authenticated access, additional configuration of the [Internet Information Services](http://encyclopedia2.thefreedictionary.com/Internet+Information+Services) (IIS) is necessary.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Authenticated data access not working correctly with Internet Explorer 8.0 and 9.0 for non-trusted domains for igOlapXmlaDataSource](#ie8-ie9-authenticated-data-access-issue)
			</td>

            <td>
The `igOlapXmlaDataSource` component cannot retrieve OLAP data on non-trusted domains with the Internet Explorer browser, versions 8 and 9.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Chrome does not display authentication popup for cross-domain requests when using igOlapXmlaDataSource](#chrome-doesnot-display-authentication-popup)
			</td>

            <td>
In the Chrome browser, versions 13 or higher, the authentication popup dialog is not displayed for cross-domain requests.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[igPivotDataSelector](#igPivotDataSelector)™
			</td>

            <td>
[Drop label remains after drop between igPivotDataSelector areas using old jQuery UI versions](#drop-label-issue)
			</td>

            <td>
This is caused by a bug in the jQuery UI draggable introduced in version 1.8.19.  For more information, see .
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td rowspan="3">
[igPivotGrid](#igPivotGrid)™
			</td>

            <td>
Captions-based sorting in the `igPivotGrid` is always alphabetical
			</td>

            <td>
No custom captions sorting behaviors are currently supported by the `igPivotGrid`. Only alphabetical sorting is available.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
Expanding or collapsing a member in `igPivotGrid` re-renders the grid
			</td>

            <td>
When a member in the rows or columns of the `igPivotGrid` is expanded or collapsed, the whole grid is re-rendered.
			</td>

            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
[igPivotGrid is not always rendered correctly in browsers for the Android operating system.](#igPivotGrid-render-issue-android)
			</td>

            <td>
In browsers for the Android operating system, sometimes only the first column of the `igPivotGrid` is displayed.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[Infragistics Templating Engine](#infragistics-templating-engine)
			</td>

            <td>
[Infragistics Templating limitations](#infragistics-templating-limitations)
			</td>

            <td>
Nested `{{each}}` templates are not supported.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>




## <a id="igCombo"></a>igCombo
### <a id="cascading-combos"></a>Using a parentComboKey for cascading igCombos does not allow for filtering the child igCombo

If you require filtering on child `igCombos`, use the `cascadingDataSources` approach as opposed to the `parentComboKey`. For more details, see the Binding Cascading igCombo Controls to a Cascading Data Sources topic.

### <a id="enabling-load-on-demand"></a>Load-on-demand not supported for cascading igCombo child

Configuring a cascading child `igCombo` to have load-on-demand enabled along with defining its parent combo key is not supported. This is due to the fact that the data source for cascading combo can be obtained only once, at the time of the initial loading. Changing the selected item in the parent combo may only filter the existing records in the data source.



## <a id="igDataChart"></a>igDataChart
### <a id="first-last-items-half-cut"></a>First and last items appear half cut in financial series charts

In financial series the first and the last data items do not appear entirely on the chart view but are plotted as if they are half cut.

A new feature of data charts will be implemented in the future releases that will solve this issue.

### <a id="chart-animations-disabled"></a>Chart animation disabled when axis range changes solution

If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data appears immediately without any motion effect.

The solution to this problem is to select an appropriate range for the Y-axis of your chart and set the `minimumValue` and `maximumValue` options accordingly. This prevents axis range changes.



## <a id="igDialog"></a>igDialog
### <a id="control-wrong-dimensions"></a>A control does not have proper dimensions when it is inside an igDialog and its width or height are relative

It is recommended to instantiate controls after the `igDialog` is opened when you use them with relative dimensions.



## <a id="igEditors"></a>igEditors
### <a id="changing-local-dynamically"></a>Changing locale dynamically for the igEditor is not possible with the Infragistics Loader

Regional settings of editors cannot be changed dynamically when using the Infragistics Loader.

A postback is necessary in order to change the regional option. Another workaround is to destroy the editor control, call the loader to load with different locale, and recreate the control again.

### <a id="igEditor-styling"></a>igEditor styling workaround

Layout of HTML elements was modified and rounded corners are rendered around the whole editor, not only buttons.

Applications may disable rounded corners by providing custom CSS or overriding default `igEditor` CSS classes.

### <a id="igEditor-rendering-failure"></a>igEditor rendering failure workaround

Rendering may fail if the base element is a TD.

Applications should not restrict the width of a parent element if the base element is a TD or it should ensure that the actual width of the TD element is not less than the width of the `igEditor` control. The parent element is not only the parent table but the whole chain of parents up in the DOM hierarchy.



## <a id="igGrid"></a>igGrid
### <a id="grids-touch-support"></a>Grids and touch support solution

A grid and its features may have inconsistent behavior when the stylus is sliding over certain UI elements.

You have to explicitly reference the `js\modules\infragistics.ui.scroll.js` file to ensure that sliding will cause scrolling on the correct UI elements.

### <a id="grouped-columns-empty-input-argument"></a>Input argument ui.groupedColumns may be empty under certain circumstances workaround

The `ui.groupedColumns` input argument of the `groupedColumnsChanged` event
is empty when a column has been grouped by dragging it into the group-by
area.

The `ui.groupedColumns` array shows only grouped columns on the root level (as if it is acting as a flat grid, as in any flat grid with grouping). If you want to get all grouped columns use the `groupByColumns()` function from the API, which recursively iterates all child grids and adds up the grouped columns for any layout.

### <a id="cannot-use-igGridHiding-row-templates"></a>Cannot use igGridHiding with row templates solution

The scenario in which a row template is used and some columns are hidden is not supported.

You can omit the definitions of the columns you want to hide from the row template instead of using the `igGridHiding` features.

### <a id="grouped-columns-workaround"></a>igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped workaround

If a grid control has some columns explicitly defined and `autoGenerateColumns` is set to true, having columns grouped at initialization will prevent other columns from being grouped at runtime.

The option `autoGenerateColumns` is true by default so if you are planning to have columns grouped at initialization you have to explicitly define them. It is better to define all of the columns that you want in the grid and set `autoGenerateColumns` to false.

### <a id="grid-column-widths"></a>Grid column widths workaround

The scenario where some columns' widths are defined in percentages while others' are in pixels (or not specified at all) is not supported.

Define all column widths in one unit of measure: percentages or pixels.

### <a id="grid-layout-problem"></a>Grid layout problems for header and footer elements in Microsoft Internet Explorer 7 solution

When a grid control does not have a width defined, its header and footer elements (caption, pager, group-by area etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer® 7.

You can define the width for the grid explicitly.

### <a id="grid-api-calls-donot-work"></a>Grid API calls do not work as expected with DIV elements solution

If a grid is instantiated from a DIV element, the API calls to the grid's features do not work as expected. The best solution is to use a TABLE element as the base element for the `igGrid`. If a DIV must be used, continue with the following workaround.

The calls to the API of the grid's features should rely on the table that they are actually attached to: [*gridElementId*]_table. If the grid is bound to a DIV with `id` attribute set to "grid1" the easiest way to reference that table is to use either the grid's `id()` or `widget()` API methods like shown here:

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

or

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```

### <a id="vertical-scrolling-issue"></a>Vertical scroll causes dialogs to appear behind the records solution

When the `igGrid` is running under Android, version 4.0.2, and when the `igGrid` has vertical scrolling enabled, all the popups/dialogs appear behind the records. This is due to the fact that all HTML div elements placed over another scrollable div are rendered behind the scrollable div, no matter what you have set as a z-index or as a CSS rule.

To fix this problem you need to reference the latest stable versions of the Modernizr JavaScript library, as well as to include the Infragistics `igScroll`™ widget.

### <a id="firefox-resized-columns-issue"></a>Under Firefox, igGrid columns cannot be resized correctly, when the column widths are not set

Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are not set. This is an issue with resizing the second col element in a colgroup. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

### <a id="firefox-column-cannot-resize"></a>Under Firefox, igGrid columns cannot be resized correctly when the column widths are set in percentages workaround

Due to a bug in Firefox, columns cannot be resized correctly when the column widths are set in percentages. This is an issue with resizing the second col element in a colgroup. To get more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

Before resizing the table, the height of the grid table container needs to be removed. After the resizing is finished, the height needs to be restored.

### <a id="row-selectors-column-virtualization"></a>Row Selectors do not work with column virtualization

Row Selectors are not supported in the context of the column virtualization. This will be implemented in future releases.

### <a id="renderCheckbox-option-incompatibility"></a>The renderCheckboxes option is not compatible with templating (row and column)

When you use templating and the `renderCheckboxes` option is set to true, the Boolean columns will not render checkboxes because it is not possible to check if the Boolean column has a template defined for it.

Use an `<input type='checkbox'/>` within the rendered template to render checkboxes for a Boolean column. For example, use the following template:

**In HTML:**

```html
<input type="checkbox" {{if ${MakeFlag} === "true"}} checked="checked" {{/if}} disabled="disabled">
```

### <a id="only-local-config-supported"></a>Only local configuration is supported for the filtering, grouping, and sorting features and summaries are not supported when binding a grid to a DataTable/DataSet.

Local configuration for filtering, grouping and sorting features should be used when binding grids to a DataTable or a DataSet.

Remote sorting and filtering can be implemented by processing the request and filtering and sorting on the server side before returning the data.

### <a id="cannot-use-row-template-set-attributes"></a>Cannot use row template in igGrid/igHierarchicalGrid to set attributes to table rows

It is not possible to set any type of an attribute (i.e. class) on a tr element because the row template is implemented as a repeating column template. The suggested workarounds are listed below.

Workaround 1

Set a global style to the tr element of the specified grid. In the following code snippet, the global style of the tr element is set to a container (grid) with ID grid.

**In CSS:**

```css
#grid tr { /* style definition */ }
```

Workaround 2

Hook on to the grid rendered event and, inside the event handler function, set the desired attribute or style to the tr elements (either all of them or to specific trs, depending on what you need).

**In JavaScript:**

```js
rendered: function (event, ui) {
// apply a attribute/style/class to all tr-s, or to a specific tr based on a condition
}
```


### <a id="column-moving-not-working-ie9"></a>Column Moving not working in Internet Explorer 9

This is caused by a bug in the jQuery UI draggable introduced in version
1.7.2.
 For more information, see the jQuery UI Bug
[5370](http://bugs.jqueryui.com/ticket/5370).

**Workaround:** Use jQuery UI version 1.8.6 or newer.

### <a id="groupby-not-working-ie9"></a>Group By not working in Internet Explorer 9

This is caused by a bug in the jQuery UI draggable introduced in version
1.7.2.
 For more information, see the jQuery UI Bug
[5370](http://bugs.jqueryui.com/ticket/5370).

>**Workaround:** Use jQuery UI version 1.8.6 or newer.

### <a id="inappropriate-behavior-column-moving-chrome"></a>Inappropriate behavior of Column Moving in Google Chrome with older versions of jQuery UI

When the Column Moving feature is used with a jQuery UI version lower than 1.8.6 it causes the grid to be selected in Google Chrome.

To avoid this, use jQuery UI version 1.8.6 or newer.

### <a id="remote-features-not-supported"></a>Remote sorting, filtering and grouping are not supported for unbound columns

Remote sorting, filtering and grouping are not supported for unbound columns. The features are disabled for the unbound columns in the Columns collection.

Use local configuration for sorting, filtering and grouping features when unbound columns are defined.

### <a id="grid-method-overload"></a>The grid SetUnboundValues([Column key], [Dictionary of values]) method overload of grid MVC helpers requires a primary key

Using the `SetUnboundValues([Column key], [Dictionary of values])` method overload requires setting a primary key. This overload has parameters for column key and dictionary of primary key and unbound value pairs. The primary key in the dictionary points to the primary key of a row in the grid and the unbound value is the value which will be set in the unbound column with key equal to the column key.

Use the method overload `SetUnboundValues([Column key], [Dictionary of values])` if there is no primary key defined.

### <a id="cannot-use-grid-helper-in-view"></a>Cannot use the grid helper in the view when the data source is remote and MergeUnboundColumns is set to true

Using the grid helper in the view is not a valid scenario when the data source is remote and the `MergeUnboundColumns` property is set to true. You can set some options through chaining but when remote requests are performed these options are re-set with the default values from the request.

### <a id="cannot-use-formula-property"></a>Cannot use formula property for grid unbound columns when the MergeUnboundColumns option is set to true

When the `MergeUnboundColumns` option is set to true then formula property cannot be used to set values of unbound columns in the `igGrid`

Using the `dataBound` client side event may be used as a workaround. You can handle the `dataBound` client side event, and add those values manually to the data source on the client, before the grid is rendered. The unbound columns are part of the _data array in the data source passed to the `dataBound` event handler. Thus, they can be accessed and filled based on the other current row data or another value.

### <a id="unbound-data-values-issue"></a>Unbound data values are not persisted automatically in the grid controls

If a row with unbound values is edited and committed and the grid is rebound after that, then changes are not persisted.

During CRUD operations, unbound columns are present in the transactions as well as updating. As unbound columns are part of the data array in the data source, it is up to the implementation to check if such a column exists in the underlying data source when the transactions are committed to the data source.

### <a id="grid-scrolled-to-top"></a>Grid is scrolled to the top when rendering unbound columns and virtualization is used

A grid is scrolled to the top before values in any unbound column are rendered when any form of virtualization (fixed or continuous) is used and the `setUnboundValues()` client API method is called.

### <a id="unbound-grid-columns-populated"></a>Unbound columns are populated with false when MergeUnboundColumns is set to false

When the `MergeUnboundColumns` property is set to false and remote data is used then any Boolean unbound columns are populated with false.

### <a id="grids-does-not-return-unbound-values"></a>The getUnboundValues() grid method does not return unbound values in certain situations

Using the `getUnboundValues()` client API method does not return unbound values if they are set through the `dataBound` client side event.

### <a id="adding-new-row"></a>Adding new row is not supported when Updating and Virtualization are enabled and autoCommit = false

When `autoCommit = false` transactions are kept in the pending transaction log. They are not visible by the Virtualization until they are committed. The newly added row will not be visible by the user once a new chunk of data is loaded by the Virtualization.

**Workaround:** `autoCommit` should be set to true, or the newly added row should be committed immediatelly.

### <a id="resizing-does-not-work-older-jquery-version"></a>igGrid Resizing does not work with older jQuery versions

**Workaround:** You should use another versions of jQuery UI, different of 1.8.0 - 1.8.5



## <a id="igHierarchicalGrid"></a>igHierarchicalGrid
### <a id="screen-taps"></a>Screen taps misinterpreted on Android 4.* devices for grid grouping modal dialog solution

On Android 4.*-powered touch devices tapping on the drop-down in the group-by modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog.

The solution is to set `modalDialogDropDownWidth` and `modalDialogDropDownAreaWidth` to values which ensure that the drop-down in the modal dialog is wide enough to show the whole layouts tree, or you just set those settings to null.

### <a id="limitation-remote-grouping"></a>Limitation of remote grouping in hierarchical grid solution

Grouping columns from more than one layout (or the root grid) will not
work with remote group-by.

There are two possible solutions:

1. Use local group-by for the entire hierarchical grid - this circumvents the problem entirely.

2. When using remote group-by, only group columns from one layout (or the root grid).

### <a id="rendering-issue-hierarchical-grid"></a>Rendering issues in the hierarchical grid features are added in a particular order

In the `igHierarchicalGrid`, child layouts may have rendering issues (missing or misaligned columns) if the Row Selectors feature is added after the grouping feature to the feature list.

To avoid this, add the Row Selectors before grouping in the array.



## <a id="mvc-wrappers-issue"></a>%%ProductName%% ASP.NET MVC Wrappers
### <a id="mvc-helper-generated-code"></a>MVC helper generated code in conjunction with MVC Loader executes after any custom JavaScript code on a page solution

When MVC Loader and MVC helper for any control are used in an MVC view the JavaScript code they generate is executed after custom page set-up code put in `document.ready` or `window.load` events. (This is because the control is rendered in the body part of a page and script code is usually put in the head part.) If the custom code refers to the control rendered by the MVC helper code, it may fail since the control does not exist yet. This is a timing issue and depends on how quickly the loader loads necessary resources.

The solution is to attach to the last event in the control initialization sequence like `dataBound` and execute any JavaScript code on the control from the event handler. Alternatively, you can put a short script block after the MVC helper with contents similar to:

**In JavaScript:**

```js
$.ig.loader(function () {
    customControlLogic();
});
```

In this example, the `customControlLogic()` function handles any custom code. This ensures that code affecting the control will execute after the control is instantiated.

### <a id="default-value-changed-autogeneratelayouts"></a>In the MVC Helper for grids the default value of AutoGenerateLayouts is changed from true to false.

When `AutoGenerateLayouts()` is set to true in remote data binding scenarios such as remote sorting and filtering, there is an additional request to the data source. In order to avoid this additional request for the flat grid the default value was changed from true to false.

>**Note:** This is a breaking change.

### <a id="mvc-loader-does-not-function-properly"></a>The ASP.NET MVC Loader does not function properly in an MVC Razor layout view solution

ASP.NET MVC helpers do not produce the proper Loader code when the Loader is included in a layout page in an ASP.NET MVC Razor application. They use the regular jQuery `$(function() { }) (document.ready)` syntax. This happens only for ASP.NET MVC Razor applications and in MVC ASPX views with master pages the same problem is not experienced.

The reason for this is that layout views are processed and executed after the particular view is rendered and the loader has no chance to initialize prior to the view rendering.

The solution is not to include the MVC Loader in an ASP.NET MVC Razor layout page in your applications but to include it in each particular view.



## <a id="infragistics-document-engine"></a>Infragistics Document Engine
### <a id="using-document-engines"></a>Using Document Engines from Infragistics ASP.NET and %%ProductName%% together workaround

Using both the Infragistics ASP.NET and %%ProductName%% documents assemblies together causes namespace conflict exceptions.

To resolve this issue, reference either the documents assemblies from Infragistics ASP.NET or the documents assemblies from %%ProductName%% in your application. The documents libraries within these assemblies are the same and can be used to replace one another.



## <a id="mvc-mobile-wrappers"></a>%%ProductName%% ASP.NET MVC Mobile Wrappers
### <a id="mvc-popup-mobile-control-requirements"></a>The ASP.NET MVC Popup Mobile control requires jQuery Mobile version 1.2

The popup widget is introduced in jQuery Mobile version 1.2. If you want to use the Popup MVC wrapper use a jQuery Mobile version higher or equal to 1.2.

### <a id="mobile-control-helpers-dll"></a>Mobile control helpers are in the Infragistics.Web.MVC.Mobile dll

In the 2013.1 Release the mobile control helpers were part of the `Infragistics.Web.MVC.dll` assembly. Now all mobile controls are isolated in `Infragistics.Web.MVC.Mobile.dll` assembly.

>**Note:** This is a breaking change.



## <a id="mobie-selectmenu"></a>Mobile SelectMenu
### <a id="closetext-property-issue"></a>The CloseText property of the mobile SelectMenu control is not applied when the menus are in custom dialog-based containers

If you set a text for the close button tooltip using the `CloseText` property of the `SelectMenu` control in dialog-based containers, your custom tooltip will not appear and the default one will be shown instead. This is due to jQuery Mobile not injecting the custom close text which cannot be accessed later.



## <a id="mobile-slider"></a>Mobile Slider
### <a id="mobile-slider-issue-windows-phone7"></a>Mobile Slider does not slide on Windows Phone 7

Because Windows Phone 7 does not support standard touch events, the slider is read-only.

>**Workaround:** By default, devices that do not support touch events, the slider renders with a numeric input field rendered to the left of the slider. This behavior is customized using the `NumericInputDisplayMode` method on the ASP.NET helper.



## <a id="igOlapXmlaDataSource"></a>igOlapXmlaDataSource
### <a id="firefox-authenticated-data-access-issue"></a>Authenticated data access not working correctly with Mozilla Firefox for igOlapXmlaDataSource

When using `igOlapXmlaDataSource` in the Mozilla Firefox browser with authenticated access, additional configuration of the [Internet Information Services](http://encyclopedia2.thefreedictionary.com/Internet+Information+Services) (IIS) is necessary. The authentication process does not work due to a bug in the browser (the pre-flight request is registered as un-authenticated).

>**Workaround:** Register a custom managed module in IIS that will capture the Mozilla Firefox OPTIONS verb and complete the response with an authorization header. For details, refer to the [Configuring Authenticated Access for the Mozilla Firefox Browser (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-Authenticated-Access-for-Firefox.html) topic.

### <a id="ie8-ie9-authenticated-data-access-issue"></a>Authenticated data access not working correctly with Internet Explorer 8.0 and 9.0 for non-trusted domains for igOlapXmlaDataSource

The `igOlapXmlaDataSource` component cannot retrieve OLAP data on non-trusted domains with the Internet Explorer browser, versions 8 and 9. If the domain on which the `msmdpump.dll` HTTP data provider for your SQL Server Analysis Services server is hosted, is not in the trusted domains list of the browser, it will not be able to access the server data.

>**Workaround: ** The solution can be either of the following:

-	Users having these versions of the browser must have data provider domain added to the trusted sites list of their browsers.

-	Host the data provider on a domain trusted by the user’s browser.

### <a id="chrome-doesnot-display-authentication-popup"></a>Chrome does not display authentication popup for cross-domain requests when using igOlapXmlaDataSource

In the Chrome browser, versions 13 or higher, the authentication popup dialog is not displayed for cross-domain requests. This behavior is prescribed by the browser’s default security policy. (Displaying a credentials popup dialog under such conditions is considered as security risk by the browser’s developers.)

>**Workaround:**The solution can be either of the following:

- Host both your website and the HTTP OLAP data provider (msmdpump.dll) on the same domain

-  Start the Chrome browser by setting the `--allow-cross-origin-auth-prompt` flag. (If the Chrome browser is started with the `--allow-cross-origin-auth-prompt` flag, the popup is displayed for cross-domain requests, too.)



## <a id="igPivotDataSelector"></a>igPivotDataSelector
### <a id="drop-label-issue"></a>Drop label remains after drop between igPivotDataSelector areas using old jQuery UI versions

This is caused by a bug in the jQuery UI draggable introduced in version
1.8.19.
 For more information, see [jQuery UI Bug 8269](http://bugs.jqueryui.com/ticket/8269).

**Workaround:** Use another versions of jQuery UI, different from 1.8.19.



## <a id="igPivotGrid"></a>igPivotGrid
### <a id="igPivotGrid-render-issue-android"></a>igPivotGrid is not always rendered correctly in browsers for the Android operating system.

In browsers for the Android operating system, only the first column of the `igPivotGrid` is visible.

**Workaround:** Two workarounds are available:

- Set the table-layout CSS property of the `igPivotGrid`’s table container to auto

- Set the width option of the `igPivotGrid` to an explicit size



## <a id="infragistics-templating-engine"></a>Infragistics Templating Engine
### <a id="infragistics-templating-limitations"></a>Infragistics Templating limitations

Nested `{{each}}` templates are not supported.



## Related Content
### Topics

The following topics provide additional information related to this topic.

- [igGrid Known Issues](igGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igGrid` control.

- [igHierarchicalGrid Known Issues](igHierarchicalGrid-Known-Issues.html): This topic provides information about the known issues specific to the `igHierarchicalGrid`™ control.

- [igCombo Known Issues](igCombo-Known-Limitations.html): This topic provides information about the known issues specific to the `igCombo`™ control.

- [igDataSource Known Issues](igDataSource-igDataSource-Known-Issues.html): This topic provides information about the known issues specific to the `igDataSource`™ control.

- [igEditor Known Issues](igEditor-Known-Issues-TE.html): This topic provides information about the known issues specific to the `igEdtor`™ control and its descendants.

- [igRating Known Issues](igRating-Known-Issues.html): This topic provides information about the known issues specific to the `igRating`™ control.

- [igTree Known Issues](igTree-Known-Limitations.html): This topic provides information about the known issues specific to the `igTree`™ control.

- [igUpload Known Issues](igUpload-Known-Issues.html): This topic provides information about the known issues specific to the `igUpload`™ control.

- [igVideoPlayer Known Issues](igVideoPlayer-Known-Issues.html): This topic provides information about the known issues specific to the `igVideoPlayer`™ control.

- [Known Issues and Limitations (igDataChart)](igDataChart-Known-Issues.html): This topic provides information about the known issues specific to the `igDataChart`™ control.

- [Known Issues and Limitations (igMap)](igMap-Known-Issues-Limitations.html): This topic lists all known issues and limitations in the `igMap`™ control.

- [Known Issues and Limitations (igPivotGrid)](igPivotGrid-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igPivotGrid`™ control.

- [Known Issues and Limitations (igPivotView)](igPivotView-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igPivotView`™ control.

- [Known Issues and Limitations (igPivotDataSelector)](igPivotDataSelector-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igPivotDataSelector`™ control.

- [igSplitter Known Issues and Limitations](igSplitter-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igSplitter`™ control.

- [Known Issues and Limitations (igFunnelChart)](igFunnelChart-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igFunnelChart`™ control.

- [Known Issues and Limitations (igOlapXmlaDataSource)](igOlapXmlaDataSource-Known-Issues-and-Limitations.html): This topic lists all known issues and limitations in the `igFunnelChart`™ control.





 

 


