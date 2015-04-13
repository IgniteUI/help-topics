<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2013-volume-2",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2013 Volume 2

## Topic Overview

### Purpose

This summarizes the known issues and limitations of the Ignite UI™ 2013 Volume 2 release. Information about previous releases can be found [here](Known-Issues-Revision-History.html).

### In this topic

This topic contains the following sections:

-   [**Known Issues and Limitations Summary**](#summary)
    -   [Editors Common Known Issues](#editors)
    -   [igBulletGraph](#bullet-graph)
    -   [igCombo](#combo)
    -   [igDataChart](#data-chart)
    -   [igDialog](#dialog)
    -   [igGrid – General](#grid)
    -   [igGrid – Data Binding](#grid-data-binding)
    -   [igGrid – Unbound Columns](#grid-unbound-columns)
    -   [igGrid – Virtualization](#grid-virtualization)
    -   [igGridColumnFixing](#grid-column-fixing)
    -   [igGridColumnMoving](#grid-column-moving)
    -   [igGrid - Multi-Column Headers](#grid-multi-column-headers)
    -   [igGridFiltering](#grid-filtering)
    -   [igGridGroupBy](#grid-grouping)   
    -   [igGridHiding](#grid-hiding)
    -   [igGridPaging](#grid-paging)
    -   [igGridResizing](#grid-resizing)
    -   [igGridRowSelectors](#grid-row-selectors)
    -   [igGridSelection](#grid-selection)
    -   [igGridSummaries](#grid-summaries)
    -   [igGridTooltips](#grid-tooltips)
    -   [igGridUpdating](#grid-updating)
    -   [igHierarchicalGrid](#hierarchical-grid)
    -   [igHierarchicalGrid GroupBy](#hierarchical-grid-grouping)
    -   [igHierarchicalGrid RowSelectors](#hierarchical-grid-row-selectors)
    -   [igLinearGauge](#linear-gauge)
    -   [Ignite UI ASP.NET MVC Wrappers](#mvc)
    -   [Ignite UI ASP.NET MVC Wrappers (mobile)](#mvc-mobile)
    -   [igMap](#map)
    -   [igOlapXmlaDataSource](#olap-xmla-data-source)
    -   [igPivotDataSelector](#pivot-data-selector)
    -   [igPivotGrid](#pivot-grid)
    -   [igQRCodeBarcode](#qr-barcode)
    -   [igZoombar](#zoombar)
    -   [Infragistics Document Engine](#infragistics-documents)
    -   [Infragistics Templating Engine](#templating-engine)
    -   [Popup (mobile)](#popup-mobile)
    -   [SelectMenu (mobile)](#selectmenu-mobile)
    -   [Slider (mobile)](#slider-mobile)



## <a id="summary"></a> Known Issues and Limitations Summary

The following table summarizes the known issues and limitations of the Ignite UI 2013 Volume 2 release. Detailed explanations of known issues and the possible workarounds are provided in the known issues topics for each control.

Legend | 
-------|--------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | Fix planned


### <a id="editors"></a> [Editors Common Known Issues](igCurrencyEditor-igEditor-Known-Issues.html)

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
Placeholder behavior when element is `<input>` or `<textarea>`
			</td>

            <td>
If the editor’s base element is an `<input>` or `<textarea>` element and `buttons`, `theme`, or [`renderInContainer`](%%jQueryApiUrl%%/ui.igeditor#options:renderInContainer) options are enabled, then the editor’s base element is removed from its parent and wrapped in a `<span>` element.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Editor not rendering correctly in some browsers when in a `<td>` base element
			</td>

            <td>
If the base element for the editor is a `<td>` element (or some other special container different from the `<span>` or `<div>` elements), then some browsers may not render the control. For example, rendering fails in the Safari® browser when using a `<td>` as the base element for the `igCurrencyEditor`™ control.

                <blockquote>
**Workaround**
                <br />
                    Change the default value of the `display` option from inline-block to block.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Changing theme after initialization not supported under certain conditions
			</td>

            <td>
Changing the `theme` option is not supported after initialization when the base element is either `<input>` or `<textarea>`and if the `button`, [`renderInContainer`](%%jQueryApiUrl%%/ui.igeditor#options:renderInContainer), and `theme` options are disabled.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Multi-line text mode not supported in an `<input>` base element
			</td>

            <td>
If the base element is `<input>`, setting the [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode) option to *multiline* is not supported.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Forced multi-line text mode in a `<textarea>` base element
			</td>

            <td>
If the base element is `<textarea>`, the [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode) option is set to *multiline* and cannot be changed.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Base `<select>` element auto-replaced with `<input>` element
			</td>

            <td>
If the base element is a `<select>` element, it is replaced with an `<input>` element. The drop-down button and list Items are created programmatically and the content is filled with the options of the original `<select>` element.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Width and height options can be set only absolutely (in pixels) under certain conditions
			</td>

            <td>
If the editor’s base element is not an `<input>` or `<textarea>` element and `buttons`, `theme`, or [`renderInContainer`](%%jQueryApiUrl%%/ui.igeditor#options:renderInContainer) options are enabled, then the width and height options can be set only absolutely (in pixels).

                <blockquote>
**Workaround**
                <br />
If the editor is rendered as an `<input>` or `<textarea>` element without a `<span>`element wrapper, then the width and height can be set to a string with percent and other HTML units.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Some options cannot change values after initialization
			</td>

            <td>
Changing value after initialization for `button`, [`textMode`](%%jQueryApiUrl%%/ui.igeditor#options:textMode), and [`renderInContainer`](%%jQueryApiUrl%%/ui.igeditor#options:renderInContainer) options is not supported.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Limitations to filtering an entry by list
			</td>

            <td>
Options related to filtering an entry by list, such as [`listMatchIgnoreCase`](%%jQueryApiUrl%%/ui.igeditor#options:listMatchIgnoreCase), [`listMatchOnly`](%%jQueryApiUrl%%/ui.igeditor#options:listMatchOnly), [`listMatchContains`](%%jQueryApiUrl%%/ui.igeditor#options:listMatchContains)and [`listAutoComplete`](%%jQueryApiUrl%%/ui.igeditor#options:listAutoComplete), have effect only for an editor with `type` set to either text or `igTextEditor`.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Specifics about disabling all triggers for a drop-down
			</td>

            <td>
To disable all triggers for a drop-down, the [`dropDownTriggers`](%%jQueryApiUrl%%/ui.igeditor#options:dropDownTriggers) option should be set to either an empty string or null.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Erroneous behavior when user input exceeds the length of the input field
			</td>

            <td>
If the user enters text longer than the width of the edit field:

                <ul>
                    <li>
Caret in some browsers may go out of view. (The editor control’s has logic designed to minimize this occurrence, but it does not cover 100% of the cases).
					</li>

                    <li>
Some browsers may fail to instantly adjust the caret position while characters are entered. The caret may also briefly (for a split-second) jump to the end of the text and back. Although the actual entry point for the next key and the actual location of caret should be correct.
					</li>

                    <li>
In some browsers, particularly Firefox®, text may jump/shake horizontally on every keypress.
					</li>
                </ul>
            </td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Erroneous behavior when under certain conditions
			</td>

            <td>
If the base element is `<textarea>` (`textMode=”multiline”`) and multiple lines are entered, that make the field scroll:

                <ul>
                    <li>
Vertical scroll may fail and the caret may go out of view after multiple keyboard entries, when Shift+Enter (new line) is entered. This may happen if the caret has been located in the middle of text.
					</li>

                    <li>
In some browsers, particularly Firefox, text may jump vertically and horizontally on every keypress.
					</li>
                </ul>
            </td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Specific referencing requirements for the date picker
			</td>

            <td>
If an editor has a type set to either *datepicker* or `igDatePicker`™, then it is dependent on jquery-datepicker and requires reference to either jquery.ui.datepicker.js or to combined library such as jqueryui/1.8.7/jquery-ui.js.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Date picker not supporting multi-line mode
			</td>

            <td>
If an editor has a type set to either *datepicker* or `igDatePicker`, it does not support *multiline*  [`textMode`](%%jQueryApiUrl%%/ui.igeditor#options:textMode) option.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Date picker not supporting `<textarea>` base element
			</td>

            <td>
If an editor has a type set to either *datepicker* or `igDatePicker`, it does not support `<textarea>` as a base element.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Numeric editors limitations in Edit mode
			</td>

            <td>
Numeric editors do not support group, or thousand separators and symbols, in Edit mode.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Specific referencing requirements for the numeric and date editors
			</td>

            <td>
Numeric and Date editors depend on $.ig._regional, therefore, that object should be available in a reference to ig.util.js or to a combined ig-js file.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Changing locale dynamically for an editor not possible with Infragistics Loader
			</td>

            <td>
Regional settings of editors cannot be changed programmatically when using the Infragistics® Loader.

                

                <blockquote>
**Workaround**
                <br />
A post-back is necessary in order to change the `regional` option. Another workaround is to destroy the editor control, call the Loader to load with a different locale, and then re-create the control itself.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Change in styling
			</td>

            <td>
The layout of HTML elements has modified and rounded corners are rendered around the whole editor, not only around buttons.

                <blockquote>
**Workaround**
                <br />
Applications can disable rounded corners by providing custom CSS or overriding default `igEditor` CSS classes.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Spin buttons issue
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
Editors rendering failure
			</td>

            <td>
Rendering may fail if the base element is `<td>`.

                <blockquote>
**Workaround**
                <br />
Applications should not restrict the width of a parent element if the base element is `<td>` or it should ensure that the actual width of the `<td>` element is no less than the width of the editor control. The parent element is not only the parent table but the whole upchain of parents in the DOM hierarchy.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
`igDateEditor` and `igDatePicker` Knockout extensions have limitation in Immediate update mode
			</td>

            <td>
`igDateEditor`™ and `igDatePicker` Knockout extensions have a limitation when the `updateMode` property is set to immediate. The Immediate mode is not supported when date format is different than en-US.
<br />
When non en-US format is used, Immediate mode, works correct only if the date is selected from the date picker, or a valid date is pasted inside the editor. If the value is typed, character by character, the wrong date is populated. The limitation is due to limitation of the JavaScript Date object constructor.

                <blockquote>
**Workaround**
                <br />
Either use the default update mode – On Change – or force the user to select the date from the `igDatePicker` component and not to enter it manually.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="bullet-graph"></a> [igBulletGraph](igBulletGraph-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Only one performance bar and one comparative marker supported | The `igBulletGraph`™ control supports only one performance bar and one comparative marker. | ![](../../images/images/positive.png)
No label collisions detection | The `igBulletGraph`  control does not provide means for  detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur. | ![](../../images/images/positive.png)
Performance bar can be drawn only from the minimum scale position | The starting position of the performance bar can only be at the minimum value of the scale, i.e. the performance bar cannot originate from an arbitrary position. | ![](../../images/images/plannedFix.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="combo"></a> [igCombo](igCombo-Known-Limitations.html)

Issue | Description | Status
---|---|---
Multiple selection and custom values cannot be used together | `AllowCustomValue = true` is together with either with `multiSelection = “on”` or `multiSelection = “onWithCheckBoxes”` is not supported. | ![](../../images/images/positive.png)
Using the key of the parent combo for cascading combos prevents filtering the child combo | For the workaround, see the [Binding Cascading igCombo Controls to a Cascading Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html) topic. | ![](../../images/images/positive.png)
Load-on-demand not supported for cascading `igCombo` child | Configuring a cascading child `igCombo`™ to have load-on-demand enabled together with defining its parent combo key is not supported. | ![](../../images/images/negative.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="data-chart"></a> [igDataChart](igDataChart-Known-Issues.html)

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
First and last items appear half cut in financial series charts
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
Chart animations are disabled when the axis range changes
			</td>

            <td>
If you use the Motion Framework for charts and updated data causes the y-axis range to change, then all chart animation is disabled and new data appears immediately without any motion effect.
			</td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Monolith shadows do not allow for the blur effect to be applied to them
			</td>

            <td>
When the [`useSingleShadow`](%%jQueryApiUrl%%/ui.igDataChart#options:useSingleShadow) property of the series is set to “true”, the [`shadowBlur`](%%jQueryApiUrl%%/ui.igDataChart#options:shadowBlur) setting is disregarded and no blur is applied to the shadow. This is a deliberate limitation due to a [Google® Chrome™ bug](https://code.google.com/p/chromium/issues/detail?id=100703) and extended to all major browsers thus ensuring consistent behavior across all of them. This behavior is subject to change once the aforementioned Chrome issue is resolved.

                
**Workaround:**
                <blockquote>
If you need to apply blur to the shadow, use the Compound type of shadow (`useSingleShadow = “true”`).
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

#### <a id="dialog"></a> [igDialog](igDialog-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Controls sized incorrectly when inside an `igDialog` and their width/ height is relative | Controls inside an `igDialog`™ do not have correct dimensions if their width/height is relative. This is because any embedded controls are instantiated before rendering `igDialog` so their dimensions cannot be calculated correctly. | ![](../../images/images/positive.png)


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid"></a> [igGrid – General](igGrid-Known-Issues.html#grid-general)

Issue | Description | Status
---|---|---
Column captions not wrapping onto multiple lines | Column captions ([`igGrid.headerText`](%%jQueryApiUrl%%/ui.iggrid#options:headerText)) do not wrap onto multiple lines. This is a breaking change from the previous versions’ functionality. | ![](../../images/images/positive.png)
Inconsistent behavior when the touch point is sliding over certain UI elements | The grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements. | ![](../../images/images/positive.png)
Mixed/partial column width settings not supported | The scenario in which some column widths are set in percentages while others are set in pixels (or not specified at all) is not supported. | ![](../../images/images/positive.png)
Grid header and footer not rendering correctly in IE 7 | When a grid width is not specified, the header and footer elements are rendered shorter than the grid in Microsoft® Internet Explorer® 7. | ![](../../images/images/positive.png)
Incorrect grid features API calls’ behavior with `<div>` elements | If a grid is instantiated on a `<div>` element, the API calls to the grid's features do not work. | ![](../../images/images/positive.png)
Dialogs/pop-ups appear behind the records on Android 4.0.2 | When the `igGrid` is running on Android 4.0.2 and has vertical scrolling enabled, all the popups/dialogs appear behind the records. | ![](../../images/images/positive.png)
`igGrid` re-initializes when the combined height of header, footer and content exceeds the height set in the options | When the sum of the height of header, footer and content of the `igGrid` is more than the height set in the options, the `igGrid` widget re-initialize itself with new height enough to have visible header, footer and content. | ![](../../images/images/positive.png)
The showHeader option not working correctly | When the [`showHeader`](%%jQueryApiUrl%%/ui.iggrid#options:showHeader) option is set to *false* on grid initialization, setting it to *true* run-time using the API will not show the header. | ![](../../images/images/positive.png)
Horizontal scrollbar visibility issues on Mac OS | The grid’s horizontal scrollbar is not visible on Mac OS® when its *Show scrollbars only when scrolling* option is set to *true*. This is because the grid’s horizontal scrollbar has an `overflow` set to *hidden*. | ![](../../images/images/positive.png)
With auto-generated columns, the source must contain key/value pairs | When the grid’s columns are auto-generated (i.e. [autoGenerateColumns](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is enabled), the source should always contain key/value pairs, otherwise the grid might not render correctly. | ![](../../images/images/positive.png)
Defining a feature more than once not possible | **In JavaScript:** <br /> In both `igGrid` and `igHierarchicalGrid`™, defining a feature more than once throws an error. <br /> **In MVC:** <br /> In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../../images/images/negative.png)
Checkbox rendering not compatible with templates (row and column) | When using templating and the `renderCheckboxes` option is set to true, the Boolean columns do not render checkboxes because it is not possible to examine if the Boolean column has a template defined. | ![](../../images/images/positive.png)
Setting attributes to table rows with a row template not possible | In both `igGrid` and `igHierarchicalGrid`, setting attributes to table rows cannot be done possible using a row template. | ![](../../images/images/positive.png)
Events not triggered | By design, events only trigger on user interaction. Events do not trigger when the public API is used. | ![](../../images/images/negative.png)
KnockoutJS observable array functions’ limitations | The use of `unshift`, `reverse` and `sort` observable array functions results in incorrect visual appearance of the grid. | ![](../../images/images/positive.png)
The id attribute is mandatory for the DOM control placeholder|The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection.|![](../../images/images/negative.png)
Column keys which contain spaces are not supported|Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the [HTML 5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute).|![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-data-binding"></a> [igGrid – Data Binding](igGrid-Known-Issues.html#data-binding)

Issue | Description | Status
---|---|---
The [LoadTransaction](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~LoadTransactions.html) method must be overridden by the `GridModel` when binding to a `DataTable`/`DataSet` is used together with the Updating feature | When binding `igGrid` to a `DataTable` or a `DataSet` and the Updating feature is used, the `GridModel` must override the `LoadTransaction()` method using a serializer which supports de-serializing `Dictionary<string, string>` to JSON. | ![](../../images/images/positive.png)
Remote filtering, sorting, summaries, and grouping not supported with binding to a data table/set | When binding grids to a `DataTable` or a `DataSet`, local configuration for the Sorting, Filtering, and Group By features is supposed be used, but a workaround for remote configuration is available, for Sorting and Filtering. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-unbound-columns"></a> [igGrid – Unbound Columns](igGrid-Known-Issues.html#unbound-columns)

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
Remote filtering, sorting and grouping not supported for unbound columns
			</td>
            <td>
The Sorting, Filtering, and Group By features do not work with unbound columns. These features are disabled for the unbound columns in the [Columns](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~Columns.html) collection.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
The grid SetUnboundValues([Column key], [Dictionary of values]) method overload of the grid MVC helpers requires a primary key
			</td>
            <td>
Using the `SetUnboundValues([Column key], [Dictionary of values])` method overload requires setting a primary key.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
Limitations to using the grid helper in the View
			</td>
            <td>
Using the grid helper in an ASP.NET MVC View is not a valid scenario when the data source is remote and the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) property is set to *true*.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Unbound column values not updated when remote paging and `unboundValues` is used
			</td>
            <td>
The grid displays same values for the unbound column when [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) is set on the client with remote paging enabled.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Limitations to using formulas in unbound columns
			</td>
            <td>
Formulas cannot be used in the `igGrid`’s unbound columns when the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) option is set to *true*.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
Unbound data values not persisted automatically in the grid’s controls
			</td>
            <td>
If a row with unbound values is edited and committed, and the grid is rebound after that, the changes are not persisted.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
Erroneous scrolling of the grid to top when virtualization is used
			</td>
            <td>
A grid is scrolled to the top before any unbound column values are rendered when virtualization of any form of (fixed or continuous) is used and the [`setUnboundValues`](%%jQueryApiUrl%%/ui.iggrid#methods:setUnboundValues) client API method is called.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Boolean unbound columns populated incorrectly when remote data is used
			</td>
            <td>
When the [`MergeUnboundColumns`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~MergeUnboundColumns.html) property is set to *false* and remote data is used, then any Boolean unbound columns are populated with *false*.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
`igGrid`’s [`getUnboundValues`](%%jQueryApiUrl%%/ui.iggrid#methods:getUnboundValues) method of grids does not return unbound values in certain situations
			</td>
            <td>
Using the `getUnboundValues()` client API method does not return unbound values if they are set through the `dataBound` client-side event.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-virtualization"></a> [igGrid – Virtualization](igGrid-Known-Issues.html)

Issue | Description | Status
---|---|---
Fixed headers always enabled (limitation) | When virtualization is enabled, there is a limitation in the form of the [`fixedHeaders`](%%jQueryApiUrl%%/ui.iggrid#options:fixedHeaders) option being unchangeable and always set to *true*. | ![](../../images/images/negative.png)
Grid height settings limitation | The height of the `igGrid` must always be exactly divisible by the average row height. (The remainder of the division must be 0.) | ![](../../images/images/negative.png)
Rows’ height settings limitation | In an `igGrid` with only a few data rows, all `igGrid` rows receive expanded height. This is because the sum of the rows’ heights has to match the grid’s height. | ![](../../images/images/negative.png)
Columns visible width settings limitation | The columns visible width must be equal to the *igGrid’s* width (for horizontal virtualization) | ![](../../images/images/negative.png)
Keyboard navigation not supported for horizontal virtualization (limitation) | Keyboard navigation is not supported for horizontal virtualization. | ![](../../images/images/negative.png)
Limitation to applying cell classes | Applying a specific cell class to every cell that is in a sorted column is not supported, i.e. [`applySortedColumnCss`](%%jQueryApiUrl%%/ui.iggridsorting#options:applySortedColumnCss) is automatically set to *false*. | ![](../../images/images/negative.png)
When virtualization is enabled the autofitLastColumn is not effective | When virtualization is enabled the [autofitLastColumn](%%jQueryApiUrl%%/ui.iggrid#options:autofitLastColumn) has no effect, which will result in columns expanding to take up the whole grid width when the sum of the columns widths is less than the width of the grid (it will act as autofitLastColumn = true).|![](../../images/images/negative.png)
Column virtualization will not work when grid width is defined in percentage units|When grid width is defined in percentage units and column virtualization is enabled ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) horizontal scrollbar will not render.|![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-column-fixing"></a> [igGridColumnFixing](igGrid-Known-Issues.html)

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
Column Moving
					</li>
                    <li>
Grouping (aka. Group By)
					</li>
                    <li>
Hiding
					</li>
                    <li>
(Responsive Web Design (RWD) Mode (aka. Responsive)
					</li>
                    <li>
Knockout library (KnockoutJS) integration
					</li>
                    <li>
Virtualization
					</li>
                    <li>
Unbound Columns
					</li>
                </ul>
Integration of Column Fixing with these features will be implemented in a future volume release.
            </td>
            <td>
![](../../images/images/plannedFix.png)
			</td>
        </tr>
        <tr>
            <td>
Misalignment between fixed and unfixed part of the rows in IE9+ (issue caused by IE9+ engine)
			</td>
            <td>
In Internet Explorer 9 or higher, if you fix a column in an `igGrid` and scroll down to the middle of the grid, you will see misalignment between the fixed and unfixed parts of the rows.
			</td>
            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
        <tr>
            <td>
Grid and its columns widths are mandatory and should be defined in pixels units
			</td>
            <td>
Grid and its columns (either explicitly or using the [defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth) option) widths are mandatory and should be defined in pixels units.
			</td>
            <td>
![](../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-column-moving"></a> [igGridColumnMoving](igGrid-Known-Issues.html#column-moving)


Issue | Description | Status
------|-------------|-------
Column Moving not working in IE 9 | Column Moving does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370). | ![](../../images/images/positive.png)
Erroneous Column Moving behavior of in Google Chrome | When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome. | ![](../../images/images/positive.png)


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-multi-column-headers"></a> [igGrid - Multi-column headers](igGrid-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Multi-column headers feature is not supported with `columnVirtualization` | When virtualization and multi-column headers features are enabled, only `rowVirtualization` is integrated. Column virtualization is not supported in this scenario. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-filtering"></a> [igGridFiltering](igGrid-Known-Issues.html)


Issue | Description | Status
------|-------------|-------
Simple Filtering does not work with column virtualization| Filtering mode = "simple" does not work with column virtualization ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-grouping"></a> [igGridGroupBy](igGrid-Known-Issues.html#groupby)

Issue | Description | Status
---|---|---
Inconsistent date format in the group row and the rest of the rows | When grouping by column that has data in date format, the format of the date at the top of the group (this format is automatically displayed when grouping), is different from the column format. | ![](../../images/images/positive.png)
Grouping not working in IE 9 | The Group By feature does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370) . | ![](../../images/images/positive.png)
Misaligned rows in IE 9 when grouping by column and collapsing all rows | When grouping by column and collapsing all rows, the rows are misaligned in IE9 due to the specific way the browser handles collapsed elements. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
Erroneous grouping when defining paging before grouping in MVC | When using an MVC Solution and defining the Paging and Group By features together, the groups will be incorrect if Paging is defined before the Group By feature. | ![](../../images/images/positive.png)
Incorrect filtering row area style in IE 8 | The filtering row area gets the wrong style when Group By and Filtering are enabled together in Internet Explorer 8. This due to issues specific to the Internet Explorer 8 browser. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
Row count for a group stays unchanged when the grid is filtered | When Filtering is enabled together with the Group By feature, the group row count stays unchanged by design, even if the grid is filtered and the count of rows – reduced. | ![](../../images/images/negative.png)
Incorrect row count for the second group when more than two groups are grouped together with remote paging enabled | When more than two groups are grouped with the Group By feature together with remote Paging, enabled the second group gets the wrong row count. | ![](../../images/images/negative.png)
Incorrect record count with remote paging and summaries | When grid Paging and grid Summaries are remote and there are records with null values, the count of the records in the group is incorrect because the value is send as a null string from the server. | ![](../../images/images/negative.png)
Exception thrown when the Group By feature defines column settings together with enabling inheritance | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../../images/images/positive.png)
Grouping used together with auto generating columns prevent other columns from grouping | If an `igGrid` control has some columns explicitly defined and [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) set to *true*, having columns grouped at initialization will prevent other columns from being grouped at runtime. | ![](../../images/images/positive.png)
Values in a column grouped but not displayed correctly | When [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is set to *true* and a column is set to be grouped at initialization, the values in the column are grouped but not displayed correctly. | ![](../../images/images/positive.png)
The `groupedColumnsChanged` event input argument `ui.groupedColumns` may be empty | The `ui.groupedColumns` input argument of the [`groupedColumnsChanged`](%%jQueryApiUrl%%/ui.iggridgroupby#events:groupedColumnsChanged) event may be empty when a column has been grouped by dragging it into the Group By area. | ![](../../images/images/positive.png)
Tapping the `igTree` inside the Group By modal dialog not working properly | Tapping the drop-down inside the Group By modal dialog may lead to some layout problems on Android 4.0. The issue appears when the tree is shown partially, having a vertical or horizontal scroll. | ![](../../images/images/positive.png)
Limitation when using GroupBy feature and continuous virtualization | When `igGrid`’s continuous virtualization is in use and the Group By feature is enabled, scrolling vertically causes collapsed group(s) to expand. | ![](../../images/images/negative.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-hiding"></a> igGridHiding

Issue | Description | Status
---|---|---
Grid hiding not working with row templates | The `igGridHiding`™ feature cannot hide columns when row templates are used. | ![](../../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-paging"></a> [igGridPaging](igGrid-Known-Issues.html#paging)

Issue | Description | Status
---|---|---
Paging events not firing at run-time | The `igGrid` Paging events only fire when the UI is triggers a paging operation. They do not fire when paging options are set at run-time. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-resizing"></a> [igGridResizing](igGrid-Known-Issues.html#resizing)

Issue | Description | Status
---|---|---
Resizing not working with some jQuery versions | `igGrid` Resizing does not support jQuery versions 1.8.0 ? 1.8.5. | ![](../../images/images/positive.png)
Resizing not working with virtualization | The column resizing feature does not work when either virtualization or column virtualization is enabled. | ![](../../images/images/positive.png)
Columns not resizing correctly, when column widths are not set (in Firefox) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are not set. | ![](../../images/images/negative.png)
Columns not resizing correctly when column widths are set relatively (in Firefox) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are set relatively (in percentages). | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-row-selectors"></a> [igGridRowSelectors](igGrid-Known-Issues.html#row-selectors)

Issue | Description | Status
---|---|---
Row Selectors not working with column virtualization | Row Selectors are not supported in the context of column virtualization. This will be implemented in future releases. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
The `igGridRowSelectors` widget requires the Selection feature enabled | The [`requireSelection`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:requireSelection) option of the `igGridRowSelectors` widget is set to *true* by default and will throw an exception indicating that the Selection feature is required for using row selectors. | ![](../../images/images/positive.png)
Selecting not working correctly in IE 9 | In Internet Explorer 9, selecting using `RowSelectors` with or without checkboxes does not work correctly when the table is large enough to cause the page to have a vertical scrollbar and the user scrolls down. When the grid receives focus, Internet Explorer 9 scrolls the page back up and the selecting is either applied to the wrong row or not applied at all. | ![](../../images/images/negative.png)
The Selection feature cannot be enabled automatically | Automatically Enabling of the Selection feature does not work. The Selection widget is required for the `RowSelectors` to have full functionality. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-selection"></a> [igGridSelection](igGrid-Known-Issues.html#selection)

Issue | Description | Status
---|---|---
Cell selection in iOS does not work properly | In iOS, when wanting to scroll the `igGrid`, the user should first tap on a cell and then swipe in the desired direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery Mobile handles the events. | ![](../../images/images/negative.png)
Selection works only with visible rows when virtualization is enabled | This limitation is due to the fact that invisible rows/cells do not exist in the DOM tree when virtualization is enabled. | ![](../../images/images/negative.png)
Incorrect selection when selecting row/cell with continuous virtualization enabled | When selecting row/cell of the `igGrid` while continuous virtualization is enabled, the grid scrolls down and a different row/cell is selected due to a bug in jQuery version 1.6.4. This problem appears only in this version of the jQuery library. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-summaries"></a> [igGridSummaries](igGrid-Known-Issues.html#summaries)

Issue | Description | Status
---|---|---
Limitation when using custom summary with remote data | ASP.NET MVC helper wrapper doesn’t handle the custom summaries by default. Therefore, a custom summary should be created and calculated separately. | ![](../../images/images/positive.png)
Limitation when setting custom methods | When setting custom methods, it is highly recommended to set the order and [`summaryCalculator`](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.summaryCalculator) options of the summary operands. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-tooltips"></a> [igGridTooltips](igGrid-Known-Issues.html#tooltips)

Issue | Description | Status
---|---|---
Tooltips display issues when moving pointer too fast over the cells | If the user moves the mouse quickly through the control, the tooltip fade animation slows down the process of showing and hiding tooltips and can create display issues when the values are very small. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-updating"></a> [igGridUpdating](igGrid-Known-Issues.html#updating)

Issue | Description | Status
---|---|---
Adding a new row with Updating and Virtualization enabled requires immediate committing | Adding a new row is not supported when the Updating and Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled. Virtualization is not aware of the newly added row when autoCommit is *false*. | ![](../../images/images/positive.png)
ExcelNavigationMode works only with “cell” and "row" edit mode. | When [`excelNavigationMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:excelNavigationMode) is enabled, navigating with the arrows is only possible with "cell" and "row" [`editMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:editMode) . Also when editMode = "row", the navigation won't work in "Add new row". Other editModes (“rowedittemplate”, none, null ) are not supported with [`excelNavigationMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:excelNavigationMode). | ![](../../images/images/negative.png)
Adding and updating a virtual grid doesn’t work if it is grouped | When using GroupBy and Updating in a virtual grid, updating or adding rows will not work when the grid is grouped. If you ungroup you will see the newly added record at the bottom of the grid records. | ![](../../images/images/negative.png)
The name of the Updating property rowEditDialogMaxHeight has been changed to rowEditDialogContentHeight | This property is related to the Row Edit Template, i.e when the [`editMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:editMode)  of the Updating is set to “rowedittemplate”. It is used to set the height of the row edit dialog content. This is a breaking change from the previous versions’ functionality. | ![](../../images/images/negative.png)
Row Template including `<td>` tag attributes is ignored when updating rows | When updating rows the igGrid correctly changes only the content of the TD-s so that styles and/or attributes applied internally to the TD elements are not lost. Therefore to get the templates re-executed with the new values, the templated elements should be limited to the contents of the TD-s. Calling dataBind is another workaround which will of course re-execute any kind of templating applied to the columns. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="hierarchical-grid"></a> [igHierarchicalGrid](igHierarchicalGrid-Known-Issues.html#general)

Issue | Description | Status
---|---|---
Screen taps misinterpreted on Android 4.* devices | On Android 4.*-powered touch devices tapping on the drop-down in the Group By modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog. | ![](../../images/images/positive.png)
Rendering issues in the hierarchical grid when features are referenced in a particular order | The `igHierarchicalGrid`’s child layouts may have rendering issues if the Row Selectors feature is added after the Group By feature to the feature list. | ![](../../images/images/positive.png)
The `<div>` element of child layout cannot be selected with the jQuery ID selector | `igHierarchicalGrid` uses primary key value of the parent layout to create child layout `<div>` element with unique `id` attribute. When the primary key values contain invalid characters the DIV element cannot be selected with the [jQuery ID selector](http://api.jquery.com/id-selector/). | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
Self-reference not working in MVC | If you want to bind an `igHierarchicalGrid` to self-referencing data, the MVC pattern will not allow you to do this because of limitation in serializing. | ![](../../images/images/negative.png)
Load-on-Demand not working with chaining | It is not possible to enable Load-on-Demand in the View page of your MVC project. | ![](../../images/images/positive.png)
Load-on-Demand without primary keys for the layouts throws an exception | If you enable the Load-on-Demand feature and do not define primary keys for all child layouts, an exception will be thrown. | ![](../../images/images/positive.png)
Some child layout columns are hidden or cut out | When an `igHierarchicalGrid` has no width defined and the child layout has width that exceeds the width grid, some of the child’s columns will be cut or hidden. | ![](../../images/images/positive.png)
Setting attributes to table rows with a row template not possible | In both `igGrid`™ and `igHierarchicalGrid`, setting attributes to table rows cannot be done possible using a row template. | ![](../../images/images/negative.png)
Defining a feature more than once not possible | **In JavaScript:** <br /> In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once throws an error. <br /> **In MVC:** <br /> In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../../images/images/negative.png)
The id attribute is mandatory for the DOM control placeholder | The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection. |![](../../images/images/negative.png)
Column keys which contain spaces are not supported|Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the [HTML 5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute).|![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="hierarchical-grid-grouping"></a> [igHierarchicalGrid GroupBy](igHierarchicalGrid-Known-Issues.html#grouping)

Issue | Description | Status
---|---|---
Limitation of remote grouping in hierarchical grid | Grouping columns from more than one layout (or from the root grid) does not work with remote grouping. | ![](../../images/images/positive.png)
Erroneous remote grouping with Load-on-Demand | If remote Group By is enabled with Load-on-Demand for the entire grid, the groups are incorrect unless you modify the action that returns the data that is being loaded on demand. | ![](../../images/images/positive.png)
Exception thrown when the Group By feature defines column settings together with enabling inheritance | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="hierarchical-grid-row-selectors"></a> [igHierarchicalGrid RowSelectors](igHierarchicalGrid-Known-Issues.html)


Issue | Description | Status
---|---|---
Row Selectors works on only one layout at a time | The Row Selectors’ feature checkboxes selected in one layout become deselected when user checks the checkboxes in another layout. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="linear-gauge"></a> [igLinearGauge](igLinearGauge-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Only one needle supported | The `igLinearGauge`™ control supports only one needle. | ![](../../images/images/positive.png)
No label collisions detection | The `igLinearGauge` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="mvc"></a> [Ignite UI ASP.NET MVC Wrappers](ASPNET-MVC-Wrappers-Known-Issues.html)

Issue | Description | Status
---|---|---
MVC helper-generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page | When the MVC Loader and an MVC helper for any control is used in an ASP.NET MVC View, the JavaScript code they generate is executed after any custom page set-up code from the [`$(document).ready()`](http://api.jquery.com/ready/) or [`$(window).load()`](http://api.jquery.com/load-event/) events. | ![](../../images/images/positive.png)
Default value for `AutoGenerateLayouts` changed | In the ASP.NET MVC Helper for grids, the default value of the `AutoGenerateLayouts` property has changed to *false* in order to avoid an additional remote data request for flat grids. | ![](../../images/images/negative.png)
MVC Loader not functioning correctly in an MVC Razor Layout View | The ASP.NET MVC Loader cannot initialize before the controls in an actual View when it is included in an ASP.NET MVC Razor Layout View. | ![](../../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="mvc-mobile"></a> [Ignite UI ASP.NET MVC Wrappers (mobile)](ASPNET-MVC-Mobile-Wrappers-Known-Issues.html)

Issue | Description | Status
---|---|---
Mobile control helpers’ location changed | In 2013.1, the mobile control helpers were part of the *Infragistics.Web.MVC.dll* assembly. In 2013.2, they reside in *Infragistics.Web.MVC.Mobile dll*. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="map"></a> [igMap](igMap-Known-Issues-Limitations.html)

Issue | Description | Status
---|---|---
Tooltips are shown for the Geographic Contour Line series | Currently tooltips are not supported for the Geographic Contour Line series. | ![](../../images/images/plannedFix.png)
Tooltips are rendered for the Geographic Symbol series on an iPad device | No tooltips appear on an iPad device when Geographic Symbol series are rendered. | ![](../../images/images/plannedFix.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="olap-xmla-data-source"></a> [igOlapXmlaDataSource](igOlapXmlaDataSource-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
`igOlapXmlaDataSource` not supported on Android-based browsers | The `igOlapXmlaDataSource`™ component is not supported on browsers for the Android operating system. | ![](../../images/images/plannedFix.png)
Authenticated data access not working correctly with Mozilla Firefox for `igOlapXmlaDataSource` | When using the Firefox browser with authenticated access, additional configuration of the [Internet Information Services](http://encyclopedia2.thefreedictionary.com/Internet+Information+Services) (IIS) is necessary. | ![](../../images/images/positive.png)
Authenticated data access not working correctly with Internet Explorer 8.0 and 9.0 for non-trusted domains for `igOlapXmlaDataSource` | The `igOlapXmlaDataSource` component cannot retrieve OLAP data on non-trusted domains with the Internet Explorer browser, versions 8 and 9. | ![](../../images/images/positive.png)
Chrome does not display authentication popup for cross-domain requests when using `igOlapXmlaDataSource` | In the Chrome browser, versions 13 or higher, the authentication popup dialog is not displayed for cross-domain requests. | ![](../../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="pivot-data-selector"></a> [igPivotDataSelector](igPivotDataSelector-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Drop label remains after drop between `igPivotDataSelector` areas using old jQuery UI versions | This is caused by a bug in the jQuery UI draggable introduced in version 1.8.19.  For more information, see [jQuery UI Bug 8269](http://bugs.jqueryui.com/ticket/8269). | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="pivot-grid"></a> [igPivotGrid](igPivotGrid-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Captions-based sorting in `igPivotGrid` always alphabetical | No custom captions sorting behaviors are currently supported by the `igPivotGrid`™ control. Only alphabetical sorting is available. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
Expanding or collapsing a member in `igPivotGrid` re-renders the grid | When a member in the rows or columns of the `igPivotGrid` is expanded or collapsed, the whole grid is re-rendered. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)
`igPivotGrid` not always rendered correctly in browsers for the Android operating system | In browsers for the Android operating system, sometimes only the first column of the `igPivotGrid` is displayed. | ![](../../images/images/positive.png)
*Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19* | When drag-and-dropping an item between areas of the `igPivotGrid` and/or the `igPivotDataSelector`™, the drop label remains. | ![](../../images/images/positive.png)
Horizontal scrollbar not visible on Mac OS under certain conditions | Horizontal scrollbar not visible on Mac OS when its "Show scrollbars only when scrolling" option is set to *true*. The grid horizontal scrollbar has overflow set to *hidden*. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="qr-barcode"></a> [igQRCodeBarcode](igQRCodeBarcode-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Platform-specific characters not supported | The current version of the `igQRCodeBarcode`™ control does not support encoding symbols with 4 bytes. | ![](../../images/images/negative.png)
Micro QR Code format not supported | The control currently does not support the Micro QR Code standard. | ![](../../images/images/negative.png)
Structured Append mode not supported | The `igQRCodeBarcode` control currently does not provide support for Structured Append mode. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="zoombar"></a> [igZoombar](igZoombar-Known-Issues-And-Limitations.html)

Issue | Description | Status
---|---|---
`igDataChart` Radial Series not supported | `igZoombar`™ supports only horizontal zooming while Radial Series zooming makes sense only when done on both axes. Because of this, zooming Radial Series with `igZoombar` does not work properly. | ![](../../images/images/negative.png)
`igZoombar` thumbnail not rendered when used with `igDataChart` | `igZoombar` creates its thumbnail by using the options of the `igDataChart` control (which is referenced in `igZoombar`‘s [`target`](%%jQueryApiUrl%%/ui.igzoombar#options:target) option). `igZoombar` trims off some of these options in an attempt to remove the clutter from the thumbnail. This can make the new option set invalid. | ![](../../images/images/positive.png)
The clone and the target widget of `igZoombar` doesn’t synchronize automatically | Changing the widget being zoomed by the `igZoombar` control does not update the clone automatically. | ![](../../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="infragistics-documents"></a> [Infragistics Document Engine](DocumentEngine-Known-Issues.html)

Issue | Description | Status
---|---|---
Namespace conflict | Using the NetAdvantage® for ASP.NET and Ignite UI documents’ assemblies together causes namespace conflict exceptions. | ![](../../images/images/positive.png)


 Go up to [Known Issues and Limitations Summary](#summary)


### <a id="templating-engine"></a> Infragistics Templating Engine

<table class="table table-bordered">
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
Infragistics Templating limitations
			</td>

            <td>
Nested `{{each}}` templates are not supported.
			</td>

            <td>
![](../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Characters different from A-Z, a-z, 0-9, "_" are not substituted/recognized.
			</td>

            <td>
                Substitution expressions cannot contain written signs different from alphanumeric characters, numeric characters and underscore.

                Workaround

                <blockquote>
                    If you need to use characters different from the allowed ones you can customize the following $.ig.regExp options `$.ig.regExp.sub:/\$\{(([\w\$]+(\.|\s)?[\w\$]*)+)\}/`which matches any substitution
                    element in the template that is to be encoded before rendering or the `$.ig.regExp.nonEncodeSub: /\{\{html\s+([\w\$]+(\.|\s)?[\w\$]*)+\}\}/` option, that matches any substitution element in the template
                    that is to be rendered as it is.
                    
For example if you need to use a dash "-" change the expression like this: `$.ig.regExp.sub:/\$\{(([\w\$-]+(\.|\s)?[\w\$-]*)+)\}/` and accordingly `$.ig.regExp.nonEncodeSub: /\{\{html\s+([\w\$-]+(\.|\s)?[\w\$-]*)+\}\}/`.
                </blockquote>
            </td>

            <td>
![](../../images/images/positive.png)
			</td>
        </tr>
    </tbody>
</table>

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="popup-mobile"></a> [Popup (mobile)](Popup-Known-Issues.html)

Issue | Description | Status
---|---|---
The MVC `Popup` mobile control requires jQuery Mobile version 1.2 | The `Popup` widget was introduced in jQuery mobile 1.2. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="selectmenu-mobile"></a> [SelectMenu (mobile)](SelectMenu-Known-Issues.html)

Issue | Description | Status
---|---|---
The [`CloseText`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuModel~CloseText.html) property of mobile `SelectMenu` not applied when the menus are in custom dialog-based containers | If you set a text for the close button tooltip using the `CloseText` property of the `SelectMenu` control in dialog-based containers, your custom tooltip will not appear and the default one will be shown instead. <br /> This is due to jQuery Mobile not injecting the custom close text which cannot be accessed later. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="slider-mobile"></a> [Slider (mobile)](Slider-Known-Issues.html)

Issue | Description | Status
---|---|---
Mobile Slider does not slide on Windows Phone 7 | Because Windows® Phone 7 does not support standard touch events, the slider is read-only. | ![](../../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)

