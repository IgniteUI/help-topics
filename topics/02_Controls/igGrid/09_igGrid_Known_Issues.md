<!--
|metadata|
{
    "fileName": "iggrid-known-issues",
    "controlName": "igGrid",
    "tags": ["Grids","Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igGrid)


The following table summarizes the known issues and limitations of the `igGrid`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

**Legend:**
<table class="table">
	<tbody>
		<tr>
			<td>![](../../images/images/positive.png)</td>
			<td>Workaround available</td>
		</tr>
		<tr>
			<td>![](../../images/images/negative.png)</td>
			<td>No known workaround</td>
		</tr>
		<tr>
			<td>![](../../images/images/plannedFix.png)</td>
			<td>No known workaround, fix planned</td>
		</tr>
	</tbody>
</table>

## [igGrid – General](#grid-general)

Issue | Description | Status
------|-------------|-------
`rowTemplate` option is deprecated | As of 14.1 release, the `rowTemplate` option has been deprecated. This is a breaking change from the previous versions’ functionality. <br /> The `igGrid` now uses column templates for individual column templating. | ![](../../images/images/negative.png)
[Column captions not wrapping onto multiple lines](#column-caption-wrap) | Column captions ([`headerText`](%%jQueryApiUrl%%/ui.iggrid#options:columns.headerText)) do not wrap onto multiple lines. This is a breaking change from the previous versions’ functionality. | ![](../../images/images/positive.png)
[Inconsistent behavior when the touch point is sliding over certain UI elements](#touch-scroll) | The grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements. | ![](../../images/images/positive.png)
[Mixed/partial column width settings not supported](#column-width) | The scenario in which some column widths are set in percentages while others are set in pixels (or not specified at all) is not supported. | ![](../../images/images/positive.png)
[Grid header and footer not rendering correctly in IE 7](#header-footer-ie7) | When a grid width is not specified, the header and footer elements are rendered shorter than the grid in Microsoft® Internet Explorer® 7. | ![](../../images/images/positive.png)
[Incorrect grid features API calls’ behavior with <div> elements](#div-element-api) | If a grid is instantiated on a `<div>` element, the API calls to the grid's features do not work. | ![](../../images/images/positive.png)
[Dialogs/pop-ups appear behind the records on Android 4.0.2](#dialogs-android) | When the `igGrid` is running on Android 4.0.2 and has vertical scrolling enabled, all the popups/dialogs appear behind the records. | ![](../../images/images/positive.png)
`igGrid` re-initializes when the combined height of header, footer and content exceeds the height set in the options | When the sum of the height of header, footer and content of the `igGrid` is more than the height set in the options, the igGrid widget re-initialize itself with new height enough to have visible header, footer and content. | ![](../../images/images/positive.png)
[The showHeader option not working correctly](#showHeader) | When the [`showHeader`](%%jQueryApiUrl%%/ui.iggrid#options:showHeader) option is set to false on grid initialization, setting it to true run-time using the API will not show the header. | ![](../../images/images/positive.png)
[Horizontal scrollbar visibility issues on Mac OS](#scrollbar-mac) | The grid’s horizontal scrollbar is not visible on Mac OS® when its *Show scrollbars only when scrolling option* is set to true. This is because the grid’s horizontal scrollbar has an `overflow` set to hidden. | ![](../../images/images/positive.png)
With auto-generated columns, the source must contain key/value pairs | When the grid’s columns are auto-generated (i.e. [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is enabled), the source should always contain key/value pairs, otherwise the grid might not render correctly. | ![](../../images/images/positive.png)
Defining a feature more than once not possible | **In JavaScript:** <br /> In both `igGrid` and `igHierarchicalGrid`™, defining a feature more than once throws an error.  <br /> **In MVC:**  <br /> In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../../images/images/negative.png)
[Checkbox rendering not compatible with templates (row and column)](#checkbox-template) | When using templating and the `renderCheckboxes` option is set to true, the Boolean columns do not render checkboxes because it is not possible to examine if the Boolean column has a template defined. | ![](../../images/images/positive.png)
Calling API methods does not raise the directly related events. | Calling API methods programmatically does not raise events related to their operation. Those events are only raised by their respective user interaction. | ![](../images/images/negative.png)
[KnockoutJS observable array functions’ limitations](#knockout-observable-array) | The use of `unshift`, `reverse` and `sort` observable array functions results in incorrect visual appearance of the grid. | ![](../../images/images/positive.png)
The id attribute is mandatory for the DOM control placeholder|The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection.|![](../../images/images/negative.png)
Column keys which contain spaces are not supported|Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the [HTML 5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute).|![](../../images/images/negative.png)
The contextMenu event is renamed to cellRightClick|The event is renamed to be more self-explanatory.|![](../../images/images/negative.png)
Header text and sorting/filtering/gear icons are misaligned in IE8|This is a browser limitation due to IE8 not supporting css calc(). For details refer to: http://caniuse.com/#feat=calc| ![](../../images/images/negative.png)
[igGrid does not support column keys containing special chars - [, ], \, (, ), etc.](#special-chars) | The column keys are used in internal jQuery selectors for many of the grid's features. Currently the selectors are not explicitly escaped so any special characters in the column key would break the selectors. | ![](../../images/images/positive.png)
When grid's data source is remote the custom scrollbars don't show on touch environments. | When the data source is remote the custom scrollbars do not display on touch environments. | ![](../../images/images/plannedFix.png)
The scrollable container height is not properly updated if the grid's records are deleted directly via the data source. | If the records are removed directly from the data source the scrollable container height is not properly updated and there may be blank space at the bottom of the grid. | ![](../../images/images/plannedFix.png)
On touch only environments if the height/width of the container is changed, the custom scrollbars don't get updated. | This applies to changes triggered by different features of the grid as well, for example when hiding/unhiding summaries/filtering. | ![](../../images/images/plannedFix.png)
If the grid is in a scrollable container but has no scrollbar on touch you cannot scroll the scrollable container while swiping on the grid. | If the grid has no scroll bars swiping on it should trigger scrolling for its container, however it currently does not. | ![](../../images/images/plannedFix.png)

## [igGrid – Data Binding](#data-binding)

Issue | Description | Status
------|-------------|-------
The [`LoadTransaction()`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~LoadTransactions.html) method must be overridden by the `GridModel` when binding to a `DataTable`/`DataSet` is used together with the Updating feature | When binding `igGrid` to a `DataTable` or a `DataSet` and the Updating feature is used, the `GridModel` must override the `LoadTransaction()` method using a serializer which supports de-serializing `Dictionary<string, string>` to JSON. | ![](../../images/images/positive.png)
[Remote filtering, sorting, summaries, and grouping not supported with binding to a data table/set](#datatable-remote-operations) | When binding grids to a `DataTable` or a `DataSet`, local configuration for the Sorting, Filtering, and Group By features is supposed be used, but a workaround for remote configuration is available, for Sorting and Filtering. | ![](../../images/images/positive.png)



## [igGrid – Unbound Columns](#unbound-columns)

<table class="table table-striped">
	<thead>
        <tr>
            <th>Issue</th>
            <th>Description</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>[Remote filtering, sorting and grouping not supported for unbound columns](#unbound-remote-operations)</td>
            <td>The Sorting, Filtering, and Group By features do not work with unbound columns. These features are disabled for the unbound columns in the [`Columns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~Columns.html) collection.</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
        <tr>
            <td>[The grid `SetUnboundValues(<Column key>, <Dictionary of values>)` method overload of the grid MVC helpers requires a primary key](#SetUnboundValues)</td>
            <td>Using the `SetUnboundValues(<Column key>, <Dictionary of values>)` method overload requires setting a primary key.</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
        <tr>
            <td>[Limitations to using the grid helper in the View](#unbound-mvc-helper)</td>
            <td>Using the grid helper in an ASP.NET MVC View is not a valid scenario when the data source is remote and the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) property is set to true.</td>
            <td>![](../../images/images/negative.png)</td>
        </tr>
        <tr>
            <td>[Unbound column values not updated when remote paging and *unboundValues* is used](#unboundValues-remote-paging)</td>
            <td>The grid displays same values for the unbound column when [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) is set on the client with remote paging enabled.</td>
            <td>![](../../images/images/negative.png)</td>
        </tr>
        <tr>
            <td>[Limitations to using formulas in unbound columns](#unbound-formulas)</td>
            <td>Formulas cannot be used in the igGrid’s unbound columns when the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) option is set to true.</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
        <tr>
            <td>[Unbound data values not persisted automatically in the grid’s controls](#unbound-CRUD)</td>
            <td>If a row with unbound values is edited and committed, and the grid is rebound after that, the changes are not persisted.</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
        <tr>
            <td>Erroneous scrolling of the grid to top when virtualization is used</td>
            <td>A grid is scrolled to the top before any unbound column values are rendered when virtualization of any form of (fixed or continuous) is used and the [`SetUnboundValues()`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~SetUnboundValues.html) client API method is called.</td>
            <td>![](../../images/images/negative.png)</td>
        </tr>
        <tr>
            <td>[Boolean unbound columns populated incorrectly when remote data is used](#boolean-unbound-remote)</td>
            <td>When the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) property is set to false and remote data is used, then any Boolean unbound columns are populated with false.</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
        <tr>
            <td>`igGrid`’s [`getUnboundValues()`](%%jQueryApiUrl%%/ui.iggrid#methods:getUnboundValues) method of grids does not return unbound values in certain situations</td>
            <td>Using the `getUnboundValues()` client API method does not return unbound values if they are set through the [`dataBound`](%%jQueryApiUrl%%/ui.iggrid#events:dataBound) client-side event.</td>
            <td>![](../../images/images/negative.png)</td>
        </tr>
        <tr>
            <td>[Sorting, Filtering, and Group By not persisting state](#unbound-persisting-state)</td>
            <td>Sorting, Filtering, and GroupBy do not persist their state when they are applied to unbound columns. If the feature persistence is enabled (by default) and an unbound column is grouped/sorted/filtered, after invoking `dataBind()` of `igGrid`: 
			<ul>
				<li>**For GroupBy** - the column will be ungrouped</li>
				<li>**For Filtering** - the filtering expressions of the unbound column will be cleared</li>
				<li>**For Sorting** - the sorting style applied to the unbound column will be removed</li>
			</ul>
			</td>
            <td>![](../../images/images/positive.png)</td>
        </tr>
    </tbody>
</table>


## [igGrid – Virtualization](#virtualization)

Issue | Description | Status
------|-------------|-------
Fixed headers always enabled (limitation) | When virtualization is enabled, there is a limitation in the form of the [`fixedHeaders`](%%jQueryApiUrl%%/ui.iggrid#options:fixedHeaders) option being unchangeable and always set to true. | ![](../../images/images/negative.png)
Grid height settings limitation | The height of the `igGrid` must always be exactly divisible by the average row height. (The remainder of the division must be 0.) | ![](../../images/images/negative.png)
Columns visible width settings limitation | The columns visible width must be equal to the `igGrid`’s width (for column virtualization) | ![](../../images/images/negative.png)
Keyboard navigation not supported for column virtualization (limitation) | Keyboard navigation is not supported for column virtualization. | ![](../../images/images/negative.png)
Limitation to applying cell classes | Applying a specific cell class to every cell that is in a sorted column is not supported, i.e. [`applySortedColumnCss`](%%jQueryApiUrl%%/ui.iggridsorting#options:applySortedColumnCss) is automatically set to false. | ![](../../images/images/negative.png)
When virtualization is enabled the autofitLastColumn is not effective|When virtualization is enabled the [autofitLastColumn](%%jQueryApiUrl%%/ui.iggrid#options:autofitLastColumn) has no effect, which will result in columns expanding to take up the whole grid width when the sum of the columns widths is less than the width of the grid (it will act as autofitLastColumn = true).|![](../../images/images/negative.png)
Column virtualization will not work when grid width is defined in percentage units|When grid width is defined in percentage units and column virtualization is enabled ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) horizontal scrollbar will not render.|![](../../images/images/negative.png)
[Fixed virtualization is not supported with RWD Mode](#fixed-virtualization)|Fixed virtualization depends on the row's height being constant. If the row's height changes the fixed virtualization will not work as expected. RWD Mode changes the row's height as it adopts to the screen size so fixed virtualization will not work as expected with it.|![](../../images/images/positive.png)
Column virtualization is not supported with continuous virtualization | Column virtualization is supported only with fixed virtualization. When column virtualization is enabled([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) then the virtualization mode must be set to "fixed"([virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) = "fixed"). | ![](../../images/images/negative.png)
Virtualization and auto sizing of columns is not supported | Auto sizing columns by setting their width option to "*"  is not supported with virtualization. | ![](../../images/images/negative.png)
Column setter is not working with column virtualization | Using column setter ($(".selector").igGrid("option", "columns", [/*columns definition*/]);) will result in horizontal scrollbar disappearing. | ![](../../images/images/negative.png)
When fixed virtualization is enabled tabbing from outside of the grid's content into the rows will focus the first visible row as opposed to the actual first row in the grid. | When fixed virtualization is enabled and you tab from outside of the grid's content inside the rows the first visible row will take focus.  Same applies when Shift+Tab is used when focus is on an element after the grid - the focus will be set to the last visible cell.|![](../../images/images/negative.png)
In Column Virtualization column widths are not respected | Setting different column widths have little to no effect, because the content is shifted between columns during horizontal scrolling, but the visible columns width stays intact. |![](../../images/images/negative.png)

## igGrid – Responsive Web Design Mode
Issue | Description | Status
---|---|---
RWD mode is not supported in IE8|RWD is unable to determine the mode in IE8. This feature is mainly targeted at mobile compatibility so it is not supported under IE8.|![](../../images/images/negative.png)
RWD single column template is not supported with any of the grid features, excepts Paging.| The RWD single column template feature is supported only with the Paging grid features. All other grid features are currently not supported with this mode.|![](../../images/images/negative.png) 
The custom scrollbars of the igGrid are not updated on mobile touch devices when Responsive feature is enabled and the device is rotated.| The custom scrollbars height/width are not properly updated if the Responsive feature is enabled and the device is rotated so that the height/width changes.| ![](../../images/images/plannedFix.png)
RWD mode is not supported with Fixed Row Virtualization and Column Virtualization | RWD mode only supports Continuous Virtualization |![](../../images/images/negative.png)

## [igGridColumnFixing](#column-fixing)

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Issue
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
            <td>
Column fixing not supported for some `igGrid` features
			</td>
            <td>
The Column Fixing feature of `igGrid` does not work with the following features:
                <ul>
                    <li>
**Grouping** (aka. Group By)
					</li>
                    <li>
**(Responsive Web Design (RWD) Mode** (aka. Responsive)
					</li>
                    <li>
**Knockout library** (KnockoutJS) integration
					</li>
                    <li>
**Unbound Columns**
					</li>
                </ul>
Integration of Column Fixing with these features will be implemented in a future volume release.
            </td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
[Misalignment of fixed and unfixed parts of the rows in IE9+](#misalignment-ie9)
			</td>
            <td>
In Internet Explorer 9 or higher, if you fix a column in an `igGrid` with a large amount of records and scroll down to the middle of the grid, you will see misalignment between the fixed and unfixed parts of the rows. This issue is caused by the IE9 engine.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
The column widths are mandatory and should be defined in pixel units
			</td>
            <td>
The column widths are mandatory and should be defined in pixels units (either explicitly or using the [defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth) option). The grid width should be set either in pixel or percentage units.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
The grid height cannot be set in percentage units.
			</td>
            <td>
Setting grid height in percentage units is not supported.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
	<tr>
            <td>
Grid and its columns (either explicitly or using the [defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth) option) widths are mandatory and should be defined in pixels units.
			</td>

            <td>
This is a third party issue in Chrome and Safari. In those browsers the thead element, which contains the fixed headers, stretches to the full width of the caption, which may lead to the unfix button going outside of the visible area of the header (in cases where the column width is smaller than the caption width). All other browsers retain the same column width in the fixed grid area and don't exhibit this behavior.	    </td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
		<tr>
            <td>
Grid applies the focus to the unfixed part of the row when selecting is done through the row selectors.
			</td>
            <td>
This is related to that the record is separated in two physical rows - for fixed and unfixed part. And only one element on the page can be focused.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
<tr>
            <td>
The [fixDataSkippedColumns](%%jQueryApiUrl%%/ui.iggrid#methods:fixDataSkippedColumns) and [unfixDataSkippedColumns](%%jQueryApiUrl%%/ui.iggrid#methods:unfixDataSkippedColumns) methods have been deprecated.
			</td>
            <td>
Use the [fixNonDataColumns](%%jQueryApiUrl%%/ui.iggrid#methods:fixNonDataColumns) and [unfixNonDataColumns](%%jQueryApiUrl%%/ui.iggrid#methods:unfixNonDataColumns) methods instead.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
    </tr>
    <tr>
		<td>
On mobile devices when having Column Fixing, scrolling the fixed container doesn't display the scrollbars in the unfixed area.
		</td>
		<td>
The custom scrollbars in the unfixed area are not displayed when the fixed area is scrolled.
		</td>
		<td>
![](../images/images/negative.png)
		</td>
	</tr>
	<tr>
		<td>
Scrolling both fixed and unfixed area on the same time while on touch devices is not supported.
		</td>
		<td>
Only one of the two areas can be scrolled at a time while on touch environment.
		</td>
		<td>
![](../images/images/negative.png)
		</td>
	</tr>
        <tr>
            <td>
Caption rendering differs whether there is height set for the grid or not.
			</td>
            <td>
    1. When there is grid [caption](%%jQueryApiUrl%%/ui.iggrid#options:caption) and [height](%%jQueryApiUrl%%/ui.iggrid#options:height) set two captions are rendered, one for the fixed and one for the unfixed area.<br />
    2. When there is grid caption without height set only one caption is rendered for the grid.<br />
    The difference is caused by the more complex DOM structure used when there is grid height set.<br />
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>



## [igGridColumnMoving](#column-moving)

Issue | Description | Status
------|-------------|-------
[Column Moving not working in IE 9](#column-moving-ie9) | Column Moving does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370). | ![](../../images/images/positive.png)
[Erroneous Column Moving behavior of in Google Chrome](#column-moving-chrome) | When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome™. | ![](../../images/images/positive.png)
Column Moving is not working with Column Virtualization | Column Moving is supported only with Row Virtualization | ![](../../images/images/negative.png)



## igGrid - Multi-column headers

Issue | Description | Status
------|-------------|-------
Multi-column headers feature is not supported with [`columnVirtualization`](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) | When virtualization and multi-column headers features are enabled, only [`rowVirtualization`](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) is integrated. Column virtualization is not supported in this scenario. | ![](../../images/images/negative.png)



## igGridFiltering
Issue | Description | Status
------|-------------|-------
[Simple Filtering does not work with column virtualization](#simple-filtering)| Filtering mode = "simple" does not work with column virtualization ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) | ![](../../images/images/positive.png)
Advanced Filtering not working with OR filtering expressions | The oData protocol does not support OR filtering expressions, therefore, advanced Filtering can be used with AND filtering expressions only. | ![](../images/images/negative.png)



## [igGridGroupBy](#groupby)


Issue | Description | Status
------|-------------|-------
[Inconsistent date format in the group row and the rest of the rows](#groupby-date-format) | When grouping by column that has data in date format, the format of the date at the top of the group (this format is automatically displayed when grouping), is different from the column format. | ![](../../images/images/positive.png)
[Grouping not working in IE 9](#groupby-ie9) | The Group By feature does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370). | ![](../../images/images/positive.png)
Misaligned rows in IE 9 when grouping by column and collapsing all rows | When grouping by column and collapsing all rows, the rows are misaligned in IE9 due to the specific way the browser handles collapsed elements. | ![](../../images/images/plannedFix.png)
[Erroneous grouping when defining paging before grouping in MVC](#groupby-paging-mvc) | When using an MVC Solution and defining the Paging and Group By features together, the groups will be incorrect if Paging is defined before the Group By feature. | ![](../../images/images/positive.png)
Incorrect filtering row area style in IE 8 | The filtering row area gets the wrong style when Group By and Filtering are enabled together in Internet Explorer 8. This due to issues specific to the Internet Explorer 8 browser. | ![](../../images/images/plannedFix.png)
Row count for a group stays unchanged when the grid is filtered | When Filtering is enabled together with the Group By feature, the group row count stays unchanged by design, even if the grid is filtered and the count of rows – reduced. | ![](../../images/images/negative.png)
[Incorrect row count for the second group when more than two groups are grouped together with remote paging enabled](#multiple-groupby-remote-paging) | When more than two groups are grouped with the Group By feature together with remote Paging, enabled the second group gets the wrong row count. | ![](../../images/images/negative.png)
[Incorrect record count with remote paging and summaries](#groupby-remote-paging-summaries) | When grid Paging and grid Summaries are remote and there are records with null values, the count of the records in the group is incorrect because the value is send as a null string from the server. | ![](../../images/images/negative.png)
[Exception thrown when the Group By feature defines column settings together with enabling inheritance](#groupby-column-settings-mvc) | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../../images/images/positive.png)
[Values in a column grouped but not displayed correctly](#groupby-incorrect-values) | When [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is set to true and a column is set to be grouped at initialization, the values in the column are grouped but not displayed correctly. | ![](../../images/images/positive.png)
[The *groupedColumnsChanged* event input argument *ui.groupedColumns* may be empty](#groupedColumnsChanged) | The `ui.groupedColumns` input argument of the [`groupedColumnsChanged`](%%jQueryApiUrl%%/ui.iggridgroupby#events:groupedColumnsChanged) event may be empty when a column has been grouped by dragging it into the Group By area. | ![](../../images/images/positive.png)
[Tapping the igTree inside the Group By modal dialog not working properly](#groupby-dialog-tree) | Tapping the drop-down inside the Group By modal dialog may lead to some layout problems on Android 4.0. The issue appears when the tree is shown partially, having a vertical or horizontal scroll. | ![](../../images/images/positive.png)
Grouping not working with fixed virtualization | The GroupBy feature of the `igGrid` doesn’t work with fixed virtualization. | ![](../../images/images/negative.png)
[Hiding a column shrinks the grid in Firefox](#groupby-hide-firefox) | When the GroupBy feature is enabled and `igGrid` doesn’t have column widths defined, hiding a column shrinks the grid in Firefox browser. | ![](../../images/images/positive.png)
Remote GroupBy does not work as expected with Remote Paging. | When remote Paging and remote GroupBy are enabled the page count and page size are incorrect.| ![](../../images/images/negative.png)


## [igGridPaging](#paging)

Issue | Description | Status
------|-------------|-------
[Paging events not firing at run-time](#paging-events) | The `igGrid` Paging events only fire when the UI is triggers a paging operation. They do not fire when paging options are set at run-time. | ![](../../images/images/positive.png)




## [igGridResizing](#resizing)

Issue | Description | Status
------|-------------|-------
[Resizing not working with some jQuery versions](#resizing-jquery-versions) | `igGrid` Resizing does not support jQuery versions 1.8.0 ÷1.8.5. | ![](../../images/images/positive.png)
[Resizing not working with fixed and column virtualization](#resizing-virtualization) |The column resizing feature does not work when fixed and/or column virtualization are enabled.| ![](../../images/images/positive.png)
[Columns not resizing correctly, when column widths are not set (in Firefox)](#resizing-column-width-firefox) | Due to a bug in Firefox®, the `igGrid` columns cannot be resized correctly when the column widths are not set. | ![](../../images/images/negative.png)
[Columns not resizing correctly when column widths are set relatively (in Firefox)](#resizing-column-relative-firefox) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are set relatively (in percentages). | ![](../../images/images/positive.png)
Resizing a column occurs at an accelerated speed when the grid is scrolled to the far right.|The resizing speed is accelerated when the grid is scrolled to the far right and a column is resized by dragging from its right edge to the left. This specific behavior is caused by the browser’s layout engine.|![](../../images/images/negative.png)



## [igGridRowSelectors](#row-selectors)

Issue | Description | Status
------|-------------|-------
Row Selectors not working with column virtualization | Row Selectors are not supported in the context of column virtualization. This will be implemented in future releases. | ![](../../images/images/plannedFix.png)
[The *igGridRowSelectors* widget requires the Selection feature enabled](#row-selectors-selection) | The [`requireSelection`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:requireSelection) option of the `igGridRowSelectors` widget is set to true by default and will throw an exception indicating that the Selection feature is required for using row selectors. | ![](../../images/images/positive.png)
Selecting not working correctly in IE 9 | In Internet Explorer 9, selecting using `RowSelectors` with or without checkboxes does not work correctly when the table is large enough to cause the page to have a vertical scrollbar and the user scrolls down. When the grid receives focus, Internet Explorer 9 scrolls the page back up and the selecting is either applied to the wrong row or not applied at all. | ![](../../images/images/negative.png)
[The Selection feature cannot be enabled automatically](#row-selectors-selection-auto) | Automatically Enabling of the Selection feature does not work. The Selection widget is required for the `RowSelectors` to have full functionality. | ![](../../images/images/positive.png)
["Select All"](igGrid-Configuring-Row-Selectors.html#select-all-pages) functionality does not work for remote Paging | The [`enableSelectAllForPaging`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:enableSelectAllForPaging) option is not working for remote Paging scenario. | ![](../../images/images/negative.png)



## [igGridSelection](#selection)

Issue | Description | Status
------|-------------|-------
[Cell selection in iOS does not work properly](#selection-cell-ios) | In iOS, when wanting to scroll the `igGrid`, the user should first tap on a cell and then swipe in the desired direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery Mobile handles the events. | ![](../../images/images/negative.png)
[Incorrect selection when selecting row/cell with continuous virtualization enabled](#selection-continuous-virtualization) | When selecting row/cell of the `igGrid` while continuous virtualization is enabled, the grid scrolls down and a different row/cell is selected due to a bug in jQuery version 1.6.4. This problem appears only in this version of the jQuery library. | ![](../../images/images/positive.png)
Incorrect cell selection when selecting with mouse dragging and persistence is enabled|Selecting with mouse dragging when persistence is enabled and there are rows which cells are duplicated (the rows are visually the same) will select only the cells from the first row.|![](../../images/images/positive.png)
[Text selection is not working when Selection feature is enabled](#text-selection) | The Selection feature disables text selection inside the grid by cancelling the selectstart event and as a result the cell's text cannot be selected. | ![](../../images/images/positive.png)
[Selecting a row in IE scrolls the row to most left in a grid with horizontal scrollbar](#selecting-rows-ie) | Selecting a row in IE is applying focus to the row, which scrolls the `igGrid` all the way to the left. | ![](../../images/images/positive.png)
Keyboard navigation not supported for column virtualization | Keyboard navigation is not supported for column virtualization. | ![](../../images/images/negative.png)


## [igGridSummaries](#summaries)

Issue | Description | Status
------|-------------|-------
[Limitation when using custom summary with remote data](#summaries-custom-remote) | ASP.NET MVC helper wrapper doesn’t handle the custom summaries by default. Therefore, a custom summary should be created and calculated separately. | ![](../../images/images/positive.png)
Only basic numeric formats supported | The [`summaryFormat`](%%jQueryApiUrl%%/ui.iggridgroupby#options:summarySettings.summaryFormat) property supports only the basic numeric formats. For example, formats like $ .00 will not be able to display the $ sign. | ![](../../images/images/negative.png)
[Limitation when setting custom methods](#summaries-custom-methods) | When setting custom methods, it is highly recommended to set the order and [`summaryCalculator`](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.summaryCalculator) options of the summary operands. | ![](../../images/images/positive.png)



## [igGridTooltips](#tooltips)

Issue | Description | Status
------|-------------|-------
[Tooltips display issues when moving pointer too fast over the cells](#tooltips-fast-movement) | If the user moves the mouse quickly through the control, the tooltip fade animation slows down the process of showing and hiding tooltips and can create display issues when the values are very small. | ![](../../images/images/positive.png)

## [igGridAppendRowsOnDemand](#appendRowsOnDemand)

Issue | Description | Status
------|-------------|-------
AppendRowsOnDemand does not work on mobile touch only environments. | When on touch only environmenst when reaching the end of the loaded chunks (loadTrigger: "auto") no new data is loaded. If loadTrigger options is set to "button", on touch you cannot scroll to the "Load more data" button. | ![](../../images/images/plannedFix.png)

## [igGridUpdating](#updating)

Issue | Description | Status
------|-------------|-------
[Adding a new row with Updating and Virtualization enabled requires immediate committing](#updating-add-virtualization) | Adding a new row is not supported when the Updating and Virtualization features are enabled while [autoCommit](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled. Virtualization is not aware of the newly added row when `autoCommit` is false. | ![](../../images/images/positive.png)
Excel Navigation mode supported only for Cell Edit mode. | When [`excelNavigationMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:excelNavigationMode) is enabled, navigating with the arrows is only possible with "cell" [`editMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:editMode). Other Edit modes (*row*, *dialog*, *none*, *null*) are not supported with  `excelNavigationMode`. | ![](../../images/images/negative.png)
Adding and updating a virtual grid doesn’t work if it is grouped | When using `GroupBy` and `Updating` in a virtual grid, updating or adding rows will not work when the grid is grouped. If you ungroup you will see the newly added record at the bottom of the grid records. | ![](../../images/images/negative.png)
[Updating rows/cells when the Updating and Continuous Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled is not supported.](#updating-edit-virtualization) | Editing rows/cells with Updating when the [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) grid option is set to false and Continuous Virtualization is enable will throw exception. | ![](../../images/images/positive.png)
Keyboard navigation while in edit mode does not wrap-around if virtualization is enabled. | When virtualization is enabled keyboard navigation with Tab/Shift+Tab when edit mode is "cell" and keyboard navigation with Enter/Shift+Enter when edit mode is "row" will not wrap-around. When reaching the last row/cell and navigating to the next one the first row/cell will not enter edit mode and the same will happend when reaaching the first row/cell and navigating to the previous one - the last row/cell will not enter edit mode. | ![](../../images/images/negative.png)
Keyboard navigation not supported for column virtualization | Keyboard navigation is not supported for column virtualization. | ![](../../images/images/negative.png)

## igGridHiding

Issue | Description | Status
---|---|---
Hidden column indicator is not displayed correctly when having MultiColumnHeaders. | When hiding a root header element the hiding indicator may be shown under another visible column group, creating the incorrect impression that the hidden column belongs to that group.| ![](../../images/images/negative.png)

## <a id="feature-chooser"></a>Feature Chooser

Issue | Description | Status
------|-------------|-------
If any of the features or their options are changed after initialization the changes won't be reflected in the Feature Chooser.|The feature chooser is rendered only once on initialization and won't be affected if any of the features are modified after this.|![](../../images/images/negative.png)


## <a id="grid-general"></a> igGrid – General

### <a id="column-caption-wrap"></a> Column captions not wrapping onto multiple lines

Column captions (igGrid.[`headerText`](%%jQueryApiUrl%%/ui.iggrid#options:columns.headerText)) do not wrap onto multiple lines. This breaking change from the previous versions’ functionality was introduced with styling purpose when there are more features enabled, for better look / alignment of the icons with the text.

> **Workaround**
> 
> In order to wrap the captions, add the following style to the page where the grid is initialized.

**In CSS:**

```css
.ui-iggrid th, .ui-iggrid th.ui-state-default, .ui-iggrid th.ui-state-hover, .ui-iggrid th.ui-state-active {
     text-align:left;
     white-space: pre-wrap;
 }
```

### <a id="touch-scroll"></a> Inconsistent behavior when the touch point is sliding over certain UI elements

The grid and its features may have inconsistent behavior when the touch point is sliding over certain UI elements.

> **Workaround**
> 
> Explicitly reference the *jsmodulesinfragistics.ui.scroll.js* file to ensure that sliding will cause scrolling on the correct UI elements.

### <a id="column-width"></a> Mixed/partial column width settings not supported

The scenario in which some column widths are set in percentages while others are set in pixels (or not specified at all) is not supported.

> **Workaround**
> 
> Define all column widths in one unit of measure: percentages or pixels.

### <a id="header-footer-ie7"></a> Grid header and footer not rendering correctly in IE 7

When the grid control does not have a width defined, its header and footer elements (caption, pager, Group By area, etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer 7.

> **Workaround**
> 
> Define the width for the grid explicitly.

### <a id="div-element-api"></a> Incorrect grid features API calls’ behavior with <div> elements

If a grid is instantiated from a <div> element, the API calls to the grid's features do not work as expected.

> **Workaround 1**
> 
> Use a `<table>` element (instead of `<div>`) as the base element for the grid. This is the optimal solution.


> **Workaround 2** 
> 
> Use this workaround if you need to use a `<div>` element as the base element for the grid. The calls to the grid's features API should rely on the table to which they are actually attached: the `[gridElementId]_table`. If the grid is bound to a `<div>` element with `id` attribute set to "grid1", the easiest way to reference that table is to use either the grid's [`id()`](%%jQueryApiUrl%%/ui.iggrid#methods:id) or [`widget()`](%%jQueryApiUrl%%/ui.iggrid#methods:widget) API methods as shown below.

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```

### <a id="dialogs-android"></a> Dialogs/pop-ups appear behind the records on Android 4.0.2

When the `igGrid` is running on Android, version 4.0.2 and has vertical scrolling enabled, all pop-ups/dialogs appear behind the records. This is due to the fact that all HTML `<div>` elements placed over another scrollable `<div>` are rendered behind the scrollable `<div>`, no matter what you have set as a z-index or as a CSS rule.

> **Workaround** 
> 
> Reference the latest stable versions of the Modernizr JavaScript library and use the Infragistics `igScroll`™ widget.

### <a id="showHeader"></a> The *showHeader* option not working correctly

When the [`showHeader`](%%jQueryApiUrl%%/ui.iggrid#options:showHeader) option is set to false on grid initialization, setting it to true run-time using the API will not show the header.

> **Workaround** 
> 
> Set the `showHeader` option to true and use the rendered event to hide it using the API. (This will ensure that the headers are added to the DOM structure) Then use the API to show the header at run-time.

**In JavaScript:**

```js
$("#grid1").on("iggridrendered", function (evt, ui) {
  if (ui.owner.dataSource.dataView().length === 0) {
    ui.owner._setOption("showHeader", false);
  }
});
//At runtime use the following code to show the header:
$("#grid1").igGrid("option", "showHeader", true);
```

### <a id="scrollbar-mac"></a> Horizontal scrollbar visibility issues on Mac OS

The grid’s horizontal scrollbar is not visible on Mac OS when its **Show scrollbars only when scrolling** option is set to true. This is because the grid’s horizontal scrollbar has an overflow set to hidden.

> **Workaround** 
> 
> The scrollbar's classes can be overriden in order for the scrollbar to be visible. The following is an example on how they can be overriden.

**In CSS:**

```css
::-webkit-scrollbar {
    width:16px;
}
::-webkit-scrollbar-track {
    -webkit-border-radius:5px;
    border-radius:5px;
    background:rgba(0,0,0,0.1);
}

::-webkit-scrollbar-thumb {
    -webkit-border-radius:5px;
    border-radius:5px;
    background:rgba(0,0,0,0.2);
}

::-webkit-scrollbar-thumb:hover {
    background:rgba(0,0,0,0.4);
}

::-webkit-scrollbar-thumb:window-inactive {
    background:rgba(0,0,0,0.05);
}
```

### <a id="checkbox-template"></a> Checkbox rendering not compatible with templates (row and column)

When using row/column templates and the `renderCheckboxes` option is set to *true*, the Boolean columns will not render checkboxes because it is not possible to examine if the Boolean column has a template defined for it.

> **Workaround** 
> 
> Use an `<input type='checkbox'/>` within the rendered template to render checkboxes for a Boolean column. Below is an example template to use.

**In HTML:**

```html
<input type="checkbox" {{if ${MakeFlag} === "true"}} checked="checked" {{/if}} disabled="disabled">
```

### <a id="knockout-observable-array"></a> KnockoutJS observable array functions’ limitations

The use of `unshift`, `reverse` and `sort` observable array functions results in incorrect visual appearance of the grid.

-   `unshift` – causes the new row to be added at the end of the grid.
-   `reverse` – causes the zebra styling to break.
-   `sort` – causes the zebra styling to break

> **Workaround** 
> 
> In all cases, call the [`dataBind`](%%jQueryApiUrl%%/ui.iggrid#methods:dataBind) method to render the rows in the correct order.

### <a id="special-chars"></a> igGrid does not support column keys containing special chars - [, ], \, (, ), etc.
The column keys are used in internal jQuery selectors for many of the grid's features. Currently the selectors are not explicitly escaped so any special characters in the column key would break the selectors. 

> **Workaround** 
> 
>Overwrite JQuery's find method and make sure that the selector is always escaped. 

**In JavaScript:**

```js
(function (find) {
		$.prototype.find = function () {
			var sel = arguments[0], matches, i, newMatch;
			if (typeof sel === 'string') {
				matches = sel.match(/#.*[\(|\)]+/);
				if (matches) {
					for (i = 0; i < matches.length; i++) {
						newMatch = matches[i].replace(/(\(|\))/g, "\\$1");
						sel = sel.replace(matches[i], newMatch);
					}
					arguments[0] = sel;
				}
			}
			return find.apply(this, arguments);
		};
})($.prototype.find);
```

## <a id="data-binding"></a> igGrid – Data Binding

### <a id="datatable-remote-operations"></a> Remote filtering, sorting, summaries, and grouping not supported with binding to a data table/set

When binding grids to a `DataTable` or a `DataSet`, local configuration for the Sorting, Filtering, Summaries, and Group By features is supposed be used, but a workaround for remote configuration is available, for Sorting and Filtering. 

> **Workaround** 
> 
> Remote sorting and/or filtering can be implemented by processing the request and performing the filtering and/or sorting on the server before returning the data.

For more details how to implement remote *sorting* by processing the request and sorting the data on `DataTable` level before returning it, you can take a look at the [`DataTable Binding`](iggrid-binding-to-datatable.html#dataTable_example) sample.



## <a id="unbound-columns"></a> igGrid – Unbound Columns

### <a id="unbound-remote-operations"></a> Remote filtering, sorting and grouping not supported for unbound columns

The Sorting, Filtering, and Group By features do not work with unbound columns. These features are disabled for unbound columns in the [`Columns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~Columns.html) collection.

> **Workaround** 
> 
> When unbound columns are defined, use local configuration for the Sorting, Filtering, and Group By features.

### <a id="SetUnboundValues"></a> The grid SetUnboundValues(&lt;Column key&gt;, &lt;Dictionary of values&gt;) method overload of the grid MVC helpers requires a primary key

The grid [`SetUnboundValues(<Column key>, <Dictionary of values>)`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~SetUnboundValues.html) method overload of the grid MVC helpers requires a primary key. This overload has parameters for column key and dictionary of primary key and unbound value pairs. The primary key in the dictionary points to the primary key of a row in the grid and the unbound value is the value which will be set in the unbound column with key equal to the column key.

> **Workaround** 
> 
> Use the method overload `SetUnboundValues(<Column key>, < List of values >)` if there is no primary key defined.

### <a id="unbound-mvc-helper"></a> Limitations to using the grid helper in the View

The grid helper cannot be used in the View when the data source is remote and [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) is set to true. Using the grid helper in an ASP.NET MVC View is not a valid scenario when the data source is remote and the `MergeUnboundColumns` property is set to true.

You can set some options through chaining but when remote requests are performed, these options are re-set with the default values from the request.

### <a id="unboundValues-remote-paging"></a> Unbound column values not updated when remote paging and *unboundValues* is used

The grid displays same values for the unbound column when [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) is set on the client with remote paging enabled. In this case, each time the grid rebinds, it re-applies these new settings. Therefore, when navigating to a new page, the same values are shown. This is normal behavior because the server returns only the result for the current page.

### <a id="unbound-formulas"></a> Limitations to using formulas in unbound columns

Formulas cannot be used in the `igGrid`’s unbound columns when the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) option is set to true.

> **Workaround** 
> 
> The [`dataBound`](%%jQueryApiUrl%%/ui.iggrid#events:dataBound) client-side event can be used as a workaround. The unbound columns are part of the data() array in the data source passed to the `dataBound` event handler. You can handle the `dataBound` client-side event and add those values manually to the data source on the client before the grid is rendered. This way the unbound columns can be accessed and filled based on the other current row data or another column value.

**In JavaScript:**

```js
$("#grid1").live("iggriddatabound", function (event, ui) {
            var i, grid = ui.owner,
                ds = grid.dataSource,
                data = ds.data(),
                dsLength = data.length;
            for (i = 0; i < dsLength; i++) {
              data[i]["UnboundColumn1"] = 
                data[i]["UnitPrice"] * data[i]["UnitsInStock"];              
            }
 });
```

### <a id="unbound-CRUD"></a> Unbound data values not persisted automatically in the grid’s controls

If a row with unbound values is edited and committed and the grid is rebound after that, changes are not persisted.

> **Workaround** 
> 
> During CRUD operations, unbound columns are present in the transactions and *updating*. As unbound columns are part of the data array in the data source, it is up to the implementation to check if such a column exists in the underlying data source when the transactions are committed to the data source.

### <a id="boolean-unbound-remote"></a> Boolean unbound columns populated incorrectly when remote data is used

When the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) property is set to *false* and remote data is used, then any Boolean unbound columns are populated with *false*.

> **Workaround** 
> 
> Set all Boolean row values explicitly on the server.

### <a id="unbound-persisting-state"></a> Sorting, Filtering and Group By not persisting state

Sorting, Filtering, and GroupBy do not persist their state when they are applied to unbound columns. If the feature persistence is enabled (by default) and **an** unbound column is grouped/sorted/filtered, after invoking `dataBind()` of `igGrid`:

- **For *GroupBy*** - the column will be ungrouped

- **For Filtering** - the filtering expressions of the unbound column will be cleared

- **For Sorting** - the sorting style applied to the unbound column will be removed

> **Workaround** 
> 
> 1. For all unbound columns, save the filtering expression/grouped columns/sorted columns before invoking `dataBind()`

​2. After a `dataBound` event (for example, `dataRendered` event), apply the column settings/expressions through the API methods of the features.


## <a id="virtualization"></a> igGridVirtualization

### <a id="fixed-virtualization"></a> Fixed virtualization is not supported with RWD Mode

Fixed virtualization depends on the row's height being constant. If the row's height changes the fixed virtualization will not work as expected. RWD Mode changes the row's height as it adopts to the screen size so fixed virtualization will not work as expected with it.

>**Workaround 1**: Use continuous virtualization. It works in scenarios where the height of the rows are dynamically resized.

>**Workaround 2**: Apply styles for the cells that would ensure that the height of the rows is not changed when dynamically resizing. For example apply “white-space:nowrap” to the cell in order to ensure that the text length does not affect the height of the row.

**In HTML:**
```html
<style> 
.ui-iggrid-record > tr > td
{ 
  white-space:nowrap; 
} 
</style> 
```

## <a id="column-fixing"></a> igGridColumnFixing

### <a id="misalignment-ie9"></a> Misalignment between fixed and unfixed part of the rows in IE9+

In IE9 or higher, if you fix a column in `igGrid` and scroll down to the middle of the grid, you will see misalignment between the fixed and unfixed part of the rows.

> **Workaround** 
> 
> You can set height for the TD element in the rows and set [`syncRowHeights`](%%jQueryApiUrl%%/ui.iggridcolumnfixing#options:syncRowHeights) to false (because of a performance issue)

**In HTML:**

```html
<style> 
	#grid1 tbody tr td, 
	#grid1_fixed tbody tr td {    
		height: 100px !important; 
	} 
</style> 
```


## <a id="column-moving"></a> igGridColumnMoving

### <a id="column-moving-ie9"></a> Column Moving not working in IE 9

This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370).

> **Workaround** 
> 
> Use jQuery version 1.8.6 or higher.

### <a id="column-moving-chrome"></a> Erroneous Column Moving behavior of in Google Chrome

When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome.

> **Workaround** 
> 
> Use jQuery version 1.8.6 or higher.

## igGridFiltering
### <a id="simple-filtering"></a> Simple Filtering does not work with column virtualization

>**Workaround**: Use advanced Filtering ([mode](%%jQueryApiUrl%%/ui.iggridfiltering#options:mode) = "advanced") with column virtualization


## <a id="groupby"></a> igGridGroupBy

### <a id="groupby-date-format"></a> Inconsistent date format in the group row and the rest of the rows

When grouping, the date format in the group row can be different from the format in the rows. When grouping by column that has data in date format, the format of the date at the top of the group (this format is automatically displayed when grouping), is different from the column format.

> **Workaround** 
> 
> If you implement a custom group using a function for date columns or use custom name for the grouped rows, you will be able to change the format and make it consistent with the row format.

### <a id="groupby-ie9"></a> Grouping not working in IE 9

This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2.  For more information, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370).

> **Workaround** 
> 
> Use jQuery version 1.8.6 or higher.

### <a id="groupby-paging-mvc"></a> Erroneous grouping when defining paging before grouping in MVC

When using an MVC Solution and defining the Paging and Group By features together, the groups will be incorrect if Paging is defined before the Group By feature.

> **Workaround** 
> 
> When defining features in an ASP.NET MVC Solution, set Group By before Paging.

### <a id="multiple-groupby-remote-paging"></a> Incorrect row count for the second group when more than two groups are grouped together with remote paging enabled

When more than two groups are grouped with the Group By feature together with remote Paging enabled, the second group gets incorrect row count.

This happens because the server doesn’t know the sequence of the groups it sends. It just sends distinct values count to the client without any grouping or depth levels information.

### <a id="groupby-remote-paging-summaries"></a> Incorrect record count with remote paging and summaries

When grid Paging and grid Summaries are remote and there are records
with null values, the count of the records in the group is incorrect
because the value is send as a null string from the server.

This is due to the fact that, when a null value is wrapped in JSON format, the value is encapsulated in quotation marks (`"null"`), otherwise it cannot be parsed correctly on the client. This requirement however makes it impossible to differentiate a `"null"` from the actual null values.

### <a id="groupby-column-settings-mvc"></a> Exception thrown when the Group By feature defines column settings together with enabling inheritance

Exception is thrown when the Group By feature defines column settings and enables inheritance at the same time. This issue occurs in an MVC solution with a grid using chaining approach in the MVC View page. If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown.

> **Workaround** 
> 
> Instead of defining both column settings and enabling inheritance in the Group By feature, in the Group By feature disable inheritance and then manually define the same Group By settings in every child layout.

### <a id="groupby-incorrect-values"></a> Values in a column grouped but not displayed correctly

When [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is set to true (explicitly or by default) and a column is set to be grouped at initialization, the values in the column are grouped but not displayed correctly.

> **Workaround** 
> 
> Defining columns as opposed to using auto-generate columns will enable grouping to work properly.

### <a id="groupedColumnsChanged"></a> The *groupedColumnsChanged* event input argument *ui.groupedColumns* may be empty

The `ui.groupedColumns` input argument of the [`groupedColumnsChanged`](%%jQueryApiUrl%%/ui.iggridgroupby#events:groupedColumnsChanged) event may be empty when a column has been grouped by dragging it into the Group By area.

> **Workaround** 
> 
> The `ui.groupedColumns` array shows only grouped columns on the root level (as if it is acting as a flat grid, as in any flat grid with Group By). If you want to get all grouped columns, use the [`groupByColumns()`](%%jQueryApiUrl%%/ui.iggridgroupby#methods:groupByColumns) function from the API, which recursively iterates all child grids and adds up the grouped columns for any layout.

### <a id="groupby-dialog-tree"></a> Tapping the igTree inside the Group By modal dialog not working properly on Android 4.0

Tapping the drop-down inside the Group By modal dialog may lead to some layout problems under Android 4.0. They can be one of the following:

-   Drop-down collapsing
-   When selecting a child layout from the drop-down, the columns are still the root ones
-   Group By modal dialog disappearing upon clicking and instead of interacting with the modal dialog the user interacts with the grid itself

This issue is caused by a recent change in the Android OS. The issue appears when the tree is shown partially, having a vertical or horizontal scroll.

> **Workaround** 
> 
> Set [`modalDialogDropDownWidth`](%%jQueryApiUrl%%/ui.iggridgroupby#options:modalDialogDropDownWidth) and [`modalDialogDropDownAreaWidth`](%%jQueryApiUrl%%/ui.iggridgroupby#options:modalDialogDropDownAreaWidth) to values that allow showing the whole layouts tree. Another workaround would be to set all values to null.

### <a id="groupby-hide-firefox"></a> Hiding a column shrinks the grid in Firefox

When Group By feature is enabled and `igGrid` doesn’t have column widths defined, hiding a column shrinks the grid in Firefox browser. 

This issue is replicated when column chooser is used and Group By feature is enabled.

> **Workaround** 
> 
> Hide the container and after that show it.

**In JavaScript:**

```js
var gridInstance = ("#grid1").data('igGrid');gridInstance.container().hide();setTimeout(function () {   gridInstance.container().show();}, 0);
```



## <a id="paging"></a> igGridPaging

### <a id="paging-events"></a> Paging events not firing at run-time

The `igGrid` Paging events only fire when the UI triggers a paging operation. They do not fire when paging options are set at run-time.

> **Workaround** 
> 
> Create a separate handler function to be used when a Paging event is fired. When changing any Paging options in code, call the handler function explicitly to perform the actions that the event would also perform.



## <a id="resizing"></a> igGridResizing

### <a id="resizing-jquery-versions"></a> Resizing not working with some jQuery versions

`igGrid` Resizing does not work with jQuery versions 1.8.0÷1.8.5.

> **Workaround** 
> 
> Use versions of jQuery UI different from 1.8.0 - 1.8.5.

### <a id="resizing-virtualization"></a> Resizing not working with fixed virtualization

The column resizing feature does not work when fixed virtualization is enabled.

> **Workaround** 
> 
> Resizing doesn't work with fixed virtualization, but works with continuous virtualization.

### <a id="resizing-column-width-firefox"></a> Columns not resizing correctly, when column widths are not set (in Firefox)

Due to a bug in Firefox browser, the igGrid columns cannot be resized correctly when the column widths are not set. This is an issue with resizing the second <col> element in a <colgroup>. For more information about this Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

### <a id="resizing-column-relative-firefox"></a> Columns not resizing correctly when column widths are set relatively (in Firefox)

Due to a bug in Firefox browser, the `igGrid` columns cannot be resized correctly when the column widths are set relatively (in percentages). This is an issue with resizing the second `<col>` element in a `<colgroup>`. For more information about the Firefox bug, follow this bug thread [conversation](https://bugzilla.mozilla.org/show_bug.cgi?id=741370).

Before resizing the table, the height of the grid table container needs to be removed. After the resizing is finished, the height needs to be restored.



## <a id="row-selectors"></a> igGridRowSelectors

### <a id="row-selectors-selection"></a> The igGridRowSelectors widget requires the Selection feature enabled

The
[`requireSelection`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:requireSelection)
option of the `igGridRowSelectors` widget is set to true by default and will throw an exception indicating that the Selection feature is required for using row selectors.

> **Workaround** 
> 
> The recommended configuration for using row selectors is to also enable Selection. One scenario, row numbering, does not require Selection to be enabled. To use this feature without enabling Selection, set the `requireSelection` option to *false* to avoid the exception thrown by the `igGridRowSelectors` widget.

### <a id="row-selectors-selection-auto"></a> The Selection feature cannot be enabled automatically

Automatically Enabling of the Selection feature does not work. The Selection widget is required for the RowSelectors to have full functionality. (See [The igGridRowSelectors widget requires the Selection feature enabled](#row-selectors-selection).) Without that widget, certain features (e.g. checkbox selection) of the row selectors are either unavailable or only partly available. RowSelectors does not enable Selection automatically.

> **Workaround** 
> 
> When using RowSelectors, make sure the Selection feature is enabled.



## <a id="selection"></a> igGridSelection

### <a id="selection-cell-ios"></a> Cell selection not working correctly in iOS

In iOS, when wanting to scroll the `igGrid`, the user should first tap on a cell and then swipe in the desired direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery Mobile presents the events:

-   In iOS, the cell is selected and then you cannot unselect it.
-   In Android, no cell is selected when the `igGrid` is swiped.

### <a id="selection-continuous-virtualization"></a> Incorrect row/cell selection with continuous virtualization in jQuery 1.6.4

When selecting row/cell of the `igGrid` while continuous virtualization is
enabled, the grid scrolls down and a different row/cell is selected due
to a bug in jQuery version 1.6.4. This problem appears only in this
version of the jQuery library.

> **Workaround** 
> 
> Use version of the jQuery library different from 1.6.4.

### <a id="text-selection"></a> Text selection is not working when Selection feature is enabled

The Selection feature disables text selection inside the grid by cancelling the selectstart event and as a result the cell's text cannot be selected. 
For cell selection mode the following workaround can be applied:

> **Workaround** 
> 
> Handle the selectstart event on a closer parent than the grid and stopping propagation (so that the grid never receives it to cancel it).

**In JavaScript:**

```js
$("#grid td").on("selectstart",
function (e) {
e.stopPropagation();
}
```
This workaround cannot be applied to row selection where there's additional custom logic that ensures that the whole row stays focused while it is selected. In this case the cells cannot take the focus and since text selection depends on the focused element the cell's text cannot be selected.

### Incorrect cell selection when selecting with mouse dragging and persistence is enabled

Selecting with mouse dragging when persistence is enabled and there are rows which cells are duplicated (the rows are visually the same) will select only the cells from the first row.

>**Workaround**: Set persistence to false.

### <a id="selecting-rows-ie"></a> Selecting a row in IE scrolls the row to most left in a grid with horizontal scrollbar

Selecting a row in IE is applying focus to the row, which scrolls the `igGrid` all the way to the left.

> **Workaround 1** 
> 
> Removе activation altogether (note that this will remove Selection's keyboard navigation)

> **Workaround 2** 
> 
> Change the selection mode to "cell"

## <a id="summaries"></a> igGridSummaries

### <a id="summaries-custom-remote"></a> Limitation when using custom summary with remote data

ASP.NET MVC helper wrapper doesn’t handle the custom summaries by
default. Therefore, a custom summary should be created and calculated
separately.

> **Workaround** 
> 
> Hook to appropriate event (it’s recommended to hook to [`summariesCalculating`](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesCalculating) event) and use your own logic to request the summaries from the server.

### <a id="summaries-custom-methods"></a> Limitation when setting custom methods

When setting custom methods, it is highly recommended to set the order and [`summaryCalculator`](%%jQueryApiUrl%%/ui.iggridsummaries#options:summaryCalculator) options of the summary operands. If you do not define order, the summary calculator will probably not behave as you expect it – the order of summary operands in the drop-down and in the summaries may differ. When you set the [`summaryOperand`](%%jQueryApiUrl%%/ui.iggridsummaries#options:summaryOperand) to custom type but do not set the [`customCalculator`](%%jQueryApiUrl%%/ui.iggridsummaries#options:customCalculator), the `summaryOperand` will not be shown neither in the results in the summaries nor in the drop-down.



## <a id="tooltips"></a> igGridTooltips

### <a id="tooltips-fast-movement"></a> Tooltips display issues when moving pointer too fast over the cells

If the user moves the mouse quickly through the control, the tooltip fade animation slows down the process of showing and hiding tooltips and can create display issues when the values are very small.

These issues occur when both of the following conditions are met:

-   The [`fadeTimespan`](%%jQueryApiUrl%%/ui.iggridtooltips#options:fadeTimespan) value exceeds either of the following values: [`showDelay`](%%jQueryApiUrl%%/ui.iggridtooltips#options:showDelay) or [`hideDelay`](%%jQueryApiUrl%%/ui.iggridtooltips#options:hideDelay)
-   The [`showDelay`](%%jQueryApiUrl%%/ui.iggridtooltips#options:showDelay) and [`hideDelay`](%%jQueryApiUrl%%/ui.iggridtooltips#options:hideDelay) values are too low (less than 200 ms).

> **Workaround** 
> 
> To prevent this issue, do one of the following:
> - Set `fadeTimout` to a value that smaller than the values for `showDelay` and `hideDelay`.
> - Set `showDelay` and `hideDelay` to values higher than 200 ms each.



## <a id="updating"></a> igGridUpdating

### <a id="updating-add-virtualization"></a> Adding a new row with Updating and Virtualization enabled requires immediate committing

Adding a new row is not supported when the Updating and Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled. When `autoCommit` = false, transactions are kept in the pending transaction log. They are not visible to the Virtualization feature until they are committed. The newly added row will not be visible by the user once a new chunk of data is loaded by the Virtualization feature.

> **Workaround** 
> 
> Either the `autoCommit` option should be set to true, or the newly added row should be committed immediately.

### <a id="updating-tempalte-attributes"></a> Column template including &lt;td&gt; tag attributes is ignored when updating rows

When updating rows the `igGrid` correctly changes only the content of the TD-s so that styles and/or attributes applied internally to the TD elements are not lost.

> **Workaround 1** 
> 
> To get the templates re-executed with the new values, the templated elements must be limited to the contents of the `<td>` tags.

> **Workaround 2** 
> 
> Calling the `dataBind()` method will re-execute any kind of templating applied to the columns.

### <a id="updating-edit-virtualization"></a> Updating rows/cells when the Updating and Continuous Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled is not supported.
Editing rows/cells with Updating when the [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) grid option is set to false and Continuous Virtualization is enable will throw exception.

> **Workaround** 
> 
> The `autoCommit` option should be set to true.

## Related Content

### Topics

The following topics provide additional information related to this topic.

- [igGrid](igGrid.html) - This is a group of topics containing the help content about the `igGrid` control.

