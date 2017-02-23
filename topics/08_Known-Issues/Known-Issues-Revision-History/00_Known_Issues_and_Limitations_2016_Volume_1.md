<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2016-volume-1",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2016 Volume 1

## Topic Overview

### Purpose

This summarizes the known issues and limitations of the Ignite UI™ 2016 Volume 1 release. Information about previous releases can be found [here](Known-Issues-Revision-History.html).

### In this topic

This topic contains the following sections:

-   [**Known Issues and Limitations Summary**](#summary)
    -   [Legend](#legend)
    -   [General Known Issues](#general-known-issues)
    -   [Editors Common Known Issues](#editors)
    -   [igBulletGraph](#bullet-graph)
    -   [igCombo](#combo)
    -   [igDataChart](#data-chart)
    -   [igDialog](#dialog)
	-   [igUpload](#upload)
    -   [igGrid – General](#grid)
    -   [igGrid – Data Binding](#grid-data-binding)
    -   [igGrid – Unbound Columns](#grid-unbound-columns)
    -   [igGrid – Virtualization](#grid-virtualization)
	-   [igGrid – Responsive Web Design Mode](#grid-responsive)
    -   [igGridColumnFixing](#grid-column-fixing)
    -   [igGridColumnMoving](#grid-column-moving)
    -   [igGrid - Multi-Column Headers](#grid-multi-column-headers)
    -   [igGridFiltering](#grid-filtering)
    -   [igGridGroupBy](#grid-grouping)
    -   [igGridPaging](#grid-paging)
    -   [igGridResizing](#grid-resizing)
    -   [igGridRowSelectors](#grid-row-selectors)
    -   [igGridSelection](#grid-selection)
    -   [igGridSummaries](#grid-summaries)
    -   [igGridTooltips](#grid-tooltips)
    -   [igGridUpdating](#grid-updating)
    -   [igGridExcelExporter](#grid-exporter)
    -   [Feature Chooser](#feature-chooser)
    -   [igTreeGrid](#tree-grid)
    -   [igHierarchicalGrid](#hierarchical-grid)
    -   [igHierarchicalGrid GroupBy](#hierarchical-grid-grouping)
    -   [igHierarchicalGrid RowSelectors](#hierarchical-grid-row-selectors)
    -   [igHierarchicalGrid Tooltips](#hierarchical-grid-tooltips)
    -   [igLinearGauge](#linear-gauge)
    -   [Ignite UI ASP.NET MVC Wrappers](#mvc)
    -   [Ignite UI ASP.NET MVC Wrappers (mobile)](#mvc-mobile)
    -   [igMap](#map)
    -   [igOlapXmlaDataSource](#olap-xmla-data-source)
    -   [igPivotDataSelector](#pivot-data-selector)
    -   [igPivotGrid](#pivot-grid)
    -   [igPopover](#popover)
    -   [igQRCodeBarcode](#qr-barcode)
    -   [igValidator](#validator)
    -   [igZoombar](#zoombar)
    -   [Infragistics Document Engine](#infragistics-documents)
    -   [Infragistics Templating Engine](#templating-engine)
    -   [Popup (mobile)](#popup-mobile)
    -   [SelectMenu (mobile)](#selectmenu-mobile)
    -   [Slider (mobile)](#slider-mobile)



## <a id="summary"></a> Known Issues and Limitations Summary

The following table summarizes the known issues and limitations of the Ignite UI 2016 Volume 1 release. Detailed explanations of known issues and the possible workarounds are provided in the known issues topics for each control.
<a id="legend"></a>

Legend | 
-------|--------
![](../images/images/positive.png) | Workaround available
![](../images/images/negative.png) | No known workaround
![](../images/images/plannedFix.png) | Fix planned

###<a id="general-known-issues"></a> General Known Issue
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
On Internet Explorer 7 and 8 Array.prototype is extended with some helper functions
			</td>

            <td>
                On Internet Explorer 7 and 8 Array.prototype is extended with the following functions (by the infragistics.util.js file):

                <ul>
                    <li>
add
					</li>

                    <li>
indexOf
					</li>

                    <li>
copy
					</li>

                    <li>
contains
					</li>

                    <li>
insert
					</li>

                    <li>
removeAt
					</li>

                    <li>
removeItem
					</li>

                    <li>
getEnumerator
					</li>

                    <li>
count
					</li>

                    <li>
item
					</li>

                    <li>
getLength
					</li>

                    <li>
clear
					</li>

                    <li>
resize
					</li>

                    <li>
filter
					</li>

                    <li>
insertRange
					</li>

                    <li>
insertRange1
					</li>

                    <li>
clone
					</li>
                </ul>This affects iteration over an array with a for…in loop, as those functions also will be iterated.
            </td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>

### <a id="editors"></a> [Editors Common Known Issues](igEditors-LandingPage.html)

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
Multi-line text mode not supported in an `<input>` base element
			</td>

            <td>
If the base element is `<input>`, setting the [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode) option to *multiline* is not supported.
			</td>

            <td>
![](../images/images/negative.png)
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
![](../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Selection on focus behavior
			</td>

            <td>
When the input element is a `<textarea>` (textMode=”multiline”) element the caret position behaviour can be inconsistent. In some browsers, Gecko-based (Firefox) and WebKit-based (Chrome, Opera, Safari) when a is focused, the insertion point is placed at the beginning of the text by default, instead of at the end as observed in Internet Explorer. To provide consistent behavior the [selectionOnFocus](%%jQueryApiUrl%%/ui.igTextEditor#options:selectionOnFocus) default value is set to `selectAll` instead of `browserDefault`
			</td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Some options cannot change values after initialization
			</td>

            <td>
Changing value after initialization for [`buttonType`](%%jQueryApiUrl%%/ui.igtexteditor#options:buttonType), [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode), [`dropDownOnReadOnly`](%%jQueryApiUrl%%/ui.igtexteditor#options:dropDownOnReadOnly), [`visibleItemsCount`](%%jQueryApiUrl%%/ui.igtexteditor#options:visibleItemsCount), and [`dropDownAttachedToBody`](%%jQueryApiUrl%%/ui.igtexteditor#options:dropDownAttachedToBody) options is not supported for `igTextEditor`. Additionally [`inputMask`](%%jQueryApiUrl%%/ui.igmaskeditor#options:inputMask), [`excludeKeys`](%%jQueryApiUrl%%/ui.igmaskeditor#options:excludeKeys), [`includeKeys`](%%jQueryApiUrl%%/ui.igmaskeditor#options:includeKeys) for the `igMaskEditor` and [`dateInputFormat`](%%jQueryApiUrl%%/ui.igdateeditor#options:dateInputFormat) for the `igDateEditor` cannot be changed after initialization. Limitations apply for derived types where applicable.
			</td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Specific referencing requirements for the date picker
			</td>

            <td>
`igDatePicker`™ is dependent on jquery-datepicker and requires reference to either `jquery.ui.datepicker.js` or to combined library such as `jqueryui/1.9.1/jquery-ui.js`.
			</td>

            <td>
![](../images/images/negative.png)
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
![](../images/images/negative.png)
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
![](../images/images/positive.png)
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
![](../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Minimum and maximum values on date editors
			</td>

            <td>
Using `new Date()` for the for the `minValue`, `maxValue` and the `value` options can cause issues as it also has a time component that will be taken into account when evaluating limits (but not included and parsed from the default input format), so it's suggested to parse fixed dates or remove the time component.
            </td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>
       
               <tr>
            <td>
Android Web View (chrome mobile and android internet browser) doesn’t fire keypress event
			</td>

            <td>
           Some features of the editors rely on keypress event for character recognition – which makes those features unsupported on some Android browsers during auto complete/suggest (IME) input. The alternatives in the new DOM3 UI events specification needs to be finalized in order to commit to fully supporting those features on android devices.

Specific options affected in igTextEditor are excludeKeys, includeKeys, toLower and toUpper. 
This also affects continuous character restriction functionality during typing in the igMaskEditor and the derived igDateEditor. Validation before the editor accepts the value (on enter or blur) should still work as expected.
All the numeric type editors should work as expected on android devices.
 
			</td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>
         
        

        <tr>
            <td>
Exceeding Minimum and maximum values
			</td>

            <td>
When you use the minValue and maxValue options in the igEditors, you should be aware that if you exceed the maxValue the editor will automatically revert the value to be equal to the maxValue property value. If you enter value that is prior to the minValue, the editor will automatically revert it to the minValue property value. In both cases you will recieve a visual warning that explains why the editor changes the value. 
         <blockquote>
**Note**: This limitation is not valid for the igTextEditor, igCheckboxEditor and igMaskEditor.
        </blockquote>
            </td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="bullet-graph"></a> [igBulletGraph](igBulletGraph-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Only one performance bar and one comparative marker supported | The `igBulletGraph`™ control supports only one performance bar and one comparative marker. | ![](../images/images/positive.png)
No label collisions detection | The `igBulletGraph`  control does not provide means for  detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur. | ![](../images/images/positive.png)
Performance bar can be drawn only from the minimum scale position | The starting position of the performance bar can only be at the minimum value of the scale, i.e. the performance bar cannot originate from an arbitrary position. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="combo"></a> [igCombo](igCombo-Known-Limitations.html)

Issue | Description | Status
---|---|---
In IE9 and lower versions placeHolder text is not previewed | Input placeholders are simply ignored in IE9 and below|![](../images/images/negative.png)
When virtualization is enabled, all ItemTemplate elements should have equal heights | Misalignment issues may occur with the scrollbar | ![](../images/images/positive.png)


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
![](../images/images/negative.png)
                
![](../images/images/plannedFix.png)
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
![](../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
Monolith shadows do not allow for the blur effect to be applied to them
			</td>

            <td>
When the [`useSingleShadow`](%%jQueryApiUrl%%/ui.igDataChart#options:useSingleShadow) property of the series is set to “true”, the [`shadowBlur`](%%jQueryApiUrl%%/ui.igDataChart#options:shadowBlur) setting is disregarded and no blur is applied to the shadow. This is a deliberate limitation due to a [Google® Chrome™ bug](https://code.google.com/p/chromium/issues/detail?id=100703) and extended to all major browsers thus ensuring consistent behavior across all of them. This behavior is subject to change once the aforementioned Chrome issue is resolved.
                

>**Workaround:**
If you need to apply blur to the shadow, use the Compound type of shadow (`useSingleShadow = “false”`).
                
            </td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>
	<tr>
		<td>
		    <p>Line series sometimes appear as filled shapes in Chromium browsers</p>
		</td>
		
		<td>
		    <p>This is caused by a <a href="https://code.google.com/p/chromium/issues/detail?id=412640" target="_blank">canvas rendering issue in Chromium</a> (affecting browsers such as Google® Chrome™ and Opera).</p>
		</td>
		
		<td>
		    <p><img alt="" src="../images/images/negative.png"></p>
		</td>
	</tr>
	<tr>
		<td>
		    <p>AddClientEvent method is not avaialable in the DataChart's ASP.NET MVC helper.</p>
		</td>
		
		<td>
		    <p>AddClientEvent method is not avaialable in the DataChart's ASP.NET MVC helper.</p>
		</td>
		
		<td>
		    <p><img alt="" src="../images/images/negative.png"></p>
		</td>
	</tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

#### <a id="dialog"></a> [igDialog](igDialog-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Controls sized incorrectly when inside an `igDialog` and their width/ height is relative | Controls inside an `igDialog`™ do not have correct dimensions if their width/height is relative. This is because any embedded controls are instantiated before rendering `igDialog` so their dimensions cannot be calculated correctly. | ![](../images/images/positive.png)
Embedded iframe (including in controls like `igHtmlEditor`) may reload and lose content | Maximizing and minimizing the `igDialog` can cause frame elements in the content (including in controls like the `igHtmlEditor`) to reload. This is caused by the dialog moving in the DOM to position itself under the body of the document. Depending on configuration, pinning can produce similar behavior. | ![](../images/images/positive.png)


 Go up to [Known Issues and Limitations Summary](#summary)
 
#### <a id="upload"></a> [igUpload](igUpload-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Uploading of large files (50kb and above) fails when PipelineMode is Classic and Trace is enabled | This is a third party issue and has been logged to Microsoft, for further reference you can check the state of the issue [here](https://connect.microsoft.com/VisualStudio/feedback/details/1008381/readentitybody-returns-0-bytes-in-iis-7-5-when-pipelinemode-is-classic-and-trace-is-enabled). | ![](../images/images/positive.png)
Uploading of files fails on Internet Explorer 10/11 when Windows Authentication mode is enabled and the HTTP keep-alive timeout of IE runs out| This is a third party issue in IE and its state can be checked [here](https://connect.microsoft.com/IE/feedback/details/819941/file-upload-stop-working-on-ie-with-windows-authentication). A possible workaround is to make post requests to the server over a certain period of time (for instance if keep-alive is set to 120 seconds you can trigger a request every 90 seconds after the first upload) in order to keep the connection alive.| ![](../images/images/positive.png)

 Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid"></a> [igGrid – General](igGrid-Known-Issues.html#grid-general)

Issue | Description | Status
---|---|---
rowTemplate option is deprecated | As of 14.1 release, the [`rowTemplate`](%%jQueryApiUrl%%/ui.iggrid#options:rowTemplate) option has been deprecated. This is a breaking change from the previous versions’ functionality. The `igGrid`™ now uses column templates for individual column templating. | ![](../images/images/negative.png)
Column captions not wrapping onto multiple lines | Column captions ([`igGrid.headerText`](%%jQueryApiUrl%%/ui.iggrid#options:headerText)) do not wrap onto multiple lines. This is a breaking change from the previous versions’ functionality. | ![](../images/images/positive.png)
Inconsistent behavior when the touch point is sliding over certain UI elements | The grid and its features may have inconsistent behavior when the touch point is sliding over particular UI elements. | ![](../images/images/positive.png)
Mixed/partial column width settings not supported | The scenario in which some column widths are set in percentages while others are set in pixels (or not specified at all) is not supported. | ![](../images/images/positive.png)
Grid header and footer not rendering correctly in IE 7 | When a grid width is not specified, the header and footer elements are rendered shorter than the grid in Microsoft® Internet Explorer® 7. | ![](../images/images/positive.png)
Incorrect grid features API calls’ behavior with `<div>` elements | If a grid is instantiated on a `<div>` element, the API calls to the grid's features do not work. | ![](../images/images/positive.png)
Dialogs/pop-ups appear behind the records on Android 4.0.2 | When the `igGrid` is running on Android 4.0.2 and has vertical scrolling enabled, all the popups/dialogs appear behind the records. | ![](../images/images/positive.png)
`igGrid` re-initializes when the combined height of header, footer and content exceeds the height set in the options | When the sum of the height of header, footer and content of the `igGrid` is more than the height set in the options, the `igGrid` widget re-initialize itself with new height enough to have visible header, footer and content. | ![](../images/images/positive.png)
The showHeader option not working correctly | When the [`showHeader`](%%jQueryApiUrl%%/ui.iggrid#options:showHeader) option is set to *false* on grid initialization, setting it to *true* run-time using the API will not show the header. | ![](../images/images/positive.png)
Horizontal scrollbar visibility issues on Mac OS | The grid’s horizontal scrollbar is not visible on Mac OS® when its *Show scrollbars only when scrolling* option is set to *true*. This is because the grid’s horizontal scrollbar has an `overflow` set to *hidden*. | ![](../images/images/positive.png)
With auto-generated columns, the source must contain key/value pairs | When the grid’s columns are auto-generated (i.e. [autoGenerateColumns](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is enabled), the source should always contain key/value pairs, otherwise the grid might not render correctly. | ![](../images/images/positive.png)
Defining a feature more than once not possible | **In JavaScript:** <br /> In both `igGrid` and `igHierarchicalGrid`™, defining a feature more than once throws an error. <br /> **In MVC:** <br /> In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../images/images/negative.png)
Checkbox rendering not compatible with templates (row and column) | When using templating and the `renderCheckboxes` option is set to true, the Boolean columns do not render checkboxes because it is not possible to examine if the Boolean column has a template defined. | ![](../images/images/positive.png)
Setting attributes to table rows with a row template not possible | In both `igGrid` and `igHierarchicalGrid`, setting attributes to table rows cannot be done possible using a row template. | ![](../images/images/positive.png)
Events not triggered | By design, events only trigger on user interaction. Events do not trigger when the public API is used. | ![](../images/images/negative.png)
KnockoutJS observable array functions’ limitations | The use of `unshift`, `reverse` and `sort` observable array functions results in incorrect visual appearance of the grid. | ![](../images/images/positive.png)
The id attribute is mandatory for the DOM control placeholder| The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection.| ![](../images/images/negative.png)
Column keys which contain spaces are not supported|Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the <a href="http://www.w3.org/TR/html5/dom.html#the-id-attribute" target="_blank">HTML 5 specification</a>.| ![](../images/images/negative.png)
The contextMenu event is renamed to cellRightClick|The event is renamed to be more self-explanatory.|![](../images/images/negative.png)
Header text and  sorting/filtering/gear icons are misaligned in IE8  | This is a browser limitation due to IE8 not supporting css calc(). For details refer to: http://caniuse.com/#feat=calc| ![](../images/images/negative.png)
igGrid does not support column keys containing special chars - [, ], \, (, ), etc. | The column keys are used in internal jQuery selectors for many of the grid's features. Currently the selectors are not explicitly escaped so any special characters in the column key would break the selectors. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-data-binding"></a> [igGrid – Data Binding](igGrid-Known-Issues.html#data-binding)

Issue | Description | Status
---|---|---
The [LoadTransaction](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~LoadTransactions.html) method must be overridden by the `GridModel` when binding to a `DataTable`/`DataSet` is used together with the Updating feature | When binding `igGrid` to a `DataTable` or a `DataSet` and the Updating feature is used, the `GridModel` must override the `LoadTransaction()` method using a serializer which supports de-serializing `Dictionary<string, string>` to JSON. | ![](../images/images/positive.png)
Remote filtering, sorting, summaries, and grouping not supported with binding to a data table/set | When binding grids to a `DataTable` or a `DataSet`, local configuration for the Sorting, Filtering, and Group By features is supposed be used, but a workaround for remote configuration is available, for Sorting and Filtering. | ![](../images/images/positive.png)

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
![](../images/images/positive.png)
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
![](../images/images/positive.png)
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
![](../images/images/negative.png)
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
![](../images/images/negative.png)
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
![](../images/images/positive.png)
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
![](../images/images/positive.png)
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
![](../images/images/negative.png)
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
![](../images/images/positive.png)
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
![](../images/images/negative.png)
			</td>
        </tr>
        <tr>
            <td>
Sorting, Filtering, and Group By not persisting state
			</td>
            <td>
Sorting, Filtering, and GroupBy do not persist their state when they are applied to unbound columns.

If the feature persistence is enabled (by default) and an unbound column is grouped/sorted/filtered, after invoking `dataBind()` of `igGrid`:

                <ul>
                    <li>
**For GroupBy** - the column will be ungrouped
					</li>

                    <li>
**For Filtering** - the filtering expressions of the unbound column will be cleared
					</li>

                    <li>
**For Sorting** - the sorting style applied to the unbound column will be removed
					</li>
                </ul>
            </td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>
    </tbody>
</table>


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-virtualization"></a> [igGrid – Virtualization](igGrid-Known-Issues.html)

Issue | Description | Status
---|---|---
Fixed headers always enabled (limitation) | When virtualization is enabled, there is a limitation in the form of the [fixedHeaders](%%jQueryApiUrl%%/ui.iggrid#options:fixedHeaders) option being unchangeable and always set to true. | ![](../images/images/negative.png)
Grid height settings limitation | The height of the igGrid must always be exactly divisible by the average row height. (The remainder of the division must be 0.) | ![](../images/images/negative.png)
Columns visible width settings limitation | The columns visible width must be equal to the igGrid’s width (for column virtualization) | ![](../images/images/negative.png)
Keyboard navigation not supported for column virtualization (limitation) | Keyboard navigation is not supported for column virtualization. | ![](../images/images/negative.png)
Limitation to applying cell classes | Applying a specific cell class to every cell that is in a sorted column is not supported, i.e. [applySortedColumnCss](%%jQueryApiUrl%%/ui.iggridsorting#options:applySortedColumnCss) is automatically set to false. | ![](../images/images/negative.png)
When virtualization is enabled the autofitLastColumn is not effective | When virtualization is enabled the [autofitLastColumn](%%jQueryApiUrl%%/ui.iggrid#options:autofitLastColumn) has no effect, which will result in columns expanding to take up the whole grid width when the sum of the columns widths is less than the width of the grid (it will act as autofitLastColumn = true). | ![](../images/images/negative.png)
Column virtualization will not work when grid width is defined in percentage units | When grid width is defined in percentage units and column virtualization is enabled ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) horizontal scrollbar will not render. | ![](../images/images/negative.png)
Fixed virtualization is not supported with RWD Mode | Fixed virtualization depends on the row's height being constant. If the row's height changes the fixed virtualization will not work as expected. RWD Mode changes the row's height as it adopts to the screen size so fixed virtualization will not work as expected with it. | ![](../images/images/positive.png)
Column virtualization is not supported with continuous virtualization | Column virtualization is supported only with fixed virtualization. When column virtualization is enabled([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) then the virtualization mode must be set to "fixed"([virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) = "fixed"). | ![](../images/images/negative.png)
Virtualization and auto sizing of columns is not supported | Auto sizing columns by setting their width option to "*"  is not supported with virtualization. | ![](../images/images/negative.png)
Column setter is not working with column virtualization | Using column setter ($(".selector").igGrid("option", "columns", [/*columns definition*/]);) will result in horizontal scrollbar disappearing. | ![](../../images/images/negative.png)
When fixed virtualization is enabled tabbing from outside of the grid's content into the rows will focus the first visible row as opposed to the actual first row in the grid. | When fixed virtualization is enabled and you tab from outside of the grid's content inside the rows the first visible row will take focus. Same applies when Shift+Tab is used when focus is on an element after the grid - the focus will be set to the last visible cell.|![](../../images/images/negative.png)
In Column Virtualization column widths are not respected | Setting different column widths have little to no effect, because the content is shifted between columns during horizontal scrolling, but the visible columns width stays intact. |![](../../images/images/negative.png)

### <a id="grid-responsive"></a> [igGrid – Responsive Web Design Mode](igGrid-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
RWD mode is not supported in IE8|RWD is unable to determine the mode in IE8. This feature is mainly targeted at mobile compatibility so it is not supported under IE8.|![](../../images/images/negative.png)
RWD single column template is not supported with any of the grid features, excepts Paging.| The RWD single column template feature is supported only with the Paging grid features. All other grid features are currently not supported with this mode.|![](../../images/images/negative.png) 
The custom scrollbars of the igGrid are not updated on mobile touch devices when Responsive feature is enabled and the device is rotated.| The custom scrollbars height/width are not properly updated if the Responsive feature is enabled and the device is rotated so that the height/width changes.| ![](../../images/images/plannedFix.png)
RWD mode is not supported with Fixed Row Virtualization and Column Virtualization | RWD mode only supports Continuous Virtualization |![](../../images/images/negative.png)

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
Column fixing not supported for some igGrid features
			</td>

            <td>
                The Column Fixing feature of igGrid does not work with the following features:

                <ul>

                    <li>
Grouping (aka. Group By)
					</li>

                    <li>
(Responsive Web Design (RWD) Mode (aka. Responsive)
					</li>

                    <li>
Knockout library (KnockoutJS) integration
					</li>

                    <li>
Unbound Columns
					</li>
                </ul>

                Integration of Column Fixing with these features will be implemented in a future volume release.
            </td>

            <td>
![](../images/images/negative.png)
                

                
                    ![](../images/images/plannedFix.png)
			</td>
        </tr>

        <tr>
            <td>
Misalignment of fixed and unfixed parts of the rows in IE9+
			</td>

            <td>
In Internet Explorer 9 or higher, if you fix a column in an igGrid with a large amount of records and scroll down to the middle of the grid, you will see misalignment between the fixed and unfixed parts of the rows. This issue is caused
                    by the IE9 engine.
			</td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
The column widths are mandatory and should be defined in pixel units
			</td>

            <td>
The column widths are mandatory and should be defined in pixels units (either explicitly or using the [defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth) option). The grid width should be set either in pixel or percentage units.			</td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
The grid scrolls to the top, when a column is unfixed and continuous virtualization is enabled
			</td>

            <td>
When you have continuous virtualization enabled and you unfix a column, the grid scrolls to the top.
			</td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>
		<tr>  
<tr>
        <td>  
The [fixDataSkippedColumns](%%jQueryApiUrl%%/ui.iggrid#methods:fixDataSkippedColumns) and [unfixDataSkippedColumns](%%jQueryApiUrl%%/ui.iggrid#methods:unfixDataSkippedColumns) methods have been deprecated.
	</td>
            <td>
Use the [fixNonDataColumns](%%jQueryApiUrl%%/ui.iggrid#methods:fixNonDataColumns) and [unfixNonDataColumns](%%jQueryApiUrl%%/ui.iggrid#methods:unfixNonDataColumns) methods instead.
	</td>
        <td>
![](../images/images/negative.png)
	</td>
</tr>
            <td>
In Chrome and Safari when there is a caption with long text defined for the grid, the fixed column header's width will stretch to the length of the caption and the unfix column button may not be visible.
			</td>

            <td>
This is a third party issue in Chrome and Safari. In those browsers the thead element, which contains the fixed headers, stretches to the full width of the caption, which may lead to the unfix button going outside of the visible area of the header (in cases where the column width is smaller than the caption width). All other browsers retain the same column width in the fixed grid area and don't exhibit this behavior.	    </td>

            <td>
![](../images/images/negative.png)
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
        ![](../images/images/negative.png)  
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

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-column-moving"></a> [igGridColumnMoving](igGrid-Known-Issues.html#column-moving)

Issue | Description | Status
------|-------------|-------
Column Moving not working in IE 9 | Column Moving does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370). | ![](../images/images/positive.png)
Erroneous Column Moving behavior of in Google Chrome | When the Column Moving feature is used with a jQuery UI version lower than 1.8.6, it causes the grid to be selected in Google Chrome. | ![](../images/images/positive.png)
Column Moving is not working with Column Virtualization | Column Moving is supported only with Row Virtualization | ![](../../images/images/negative.png)

 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-multi-column-headers"></a> [igGrid - Multi-column headers](igGrid-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Multi-column headers feature is not supported with `columnVirtualization` | When virtualization and multi-column headers features are enabled, only `rowVirtualization` is integrated. Column virtualization is not supported in this scenario. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-filtering"></a> [igGridFiltering](igGrid-Known-Issues.html)

Issue | Description | Status
------|-------------|-------
Simple Filtering does not work with Column Virtualization| Filtering mode = "simple" does not work with column virtualization ([columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) = true) | ![](../../images/images/positive.png)
Advanced Filtering not working with OR filtering expressions | The oData protocol does not support OR filtering expressions, therefore, advanced Filtering can be used with AND filtering expressions only. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-grouping"></a> [igGridGroupBy](igGrid-Known-Issues.html#groupby)

Issue | Description | Status
---|---|---
Inconsistent date format in the group row and the rest of the rows | When grouping by column that has data in date format, the format of the date at the top of the group (this format is automatically displayed when grouping), is different from the column format. | ![](../images/images/positive.png)
Grouping not working in IE 9 | The Group By feature does not work in Internet Explorer 9. This is caused by a bug in the jQuery UI draggable introduced in version 1.7.2 and resolved in 1.8.6. For more information on the bug, see [jQuery UI Bug 5370](http://bugs.jqueryui.com/ticket/5370) . | ![](../images/images/positive.png)
Misaligned rows in IE 9 when grouping by column and collapsing all rows | When grouping by column and collapsing all rows, the rows are misaligned in IE9 due to the specific way the browser handles collapsed elements. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
Erroneous grouping when defining paging before grouping in MVC | When using an MVC Solution and defining the Paging and Group By features together, the groups will be incorrect if Paging is defined before the Group By feature. | ![](../images/images/positive.png)
Incorrect filtering row area style in IE 8 | The filtering row area gets the wrong style when Group By and Filtering are enabled together in Internet Explorer 8. This due to issues specific to the Internet Explorer 8 browser. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
Row count for a group stays unchanged when the grid is filtered | When Filtering is enabled together with the Group By feature, the group row count stays unchanged by design, even if the grid is filtered and the count of rows – reduced. | ![](../images/images/negative.png)
Incorrect row count for the second group when more than two groups are grouped together with remote paging enabled | When more than two groups are grouped with the Group By feature together with remote Paging, enabled the second group gets the wrong row count. | ![](../images/images/negative.png)
Incorrect record count with remote paging and summaries | When grid Paging and grid Summaries are remote and there are records with null values, the count of the records in the group is incorrect because the value is send as a null string from the server. | ![](../images/images/negative.png)
Exception thrown when the Group By feature defines column settings together with enabling inheritance | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../images/images/positive.png)
Values in a column grouped but not displayed correctly | When [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is set to *true* and a column is set to be grouped at initialization, the values in the column are grouped but not displayed correctly. | ![](../images/images/positive.png)
The `groupedColumnsChanged` event input argument `ui.groupedColumns` may be empty | The `ui.groupedColumns` input argument of the [`groupedColumnsChanged`](%%jQueryApiUrl%%/ui.iggridgroupby#events:groupedColumnsChanged) event may be empty when a column has been grouped by dragging it into the Group By area. | ![](../images/images/positive.png)
Tapping the `igTree` inside the Group By modal dialog not working properly | Tapping the drop-down inside the Group By modal dialog may lead to some layout problems on Android 4.0. The issue appears when the tree is shown partially, having a vertical or horizontal scroll. | ![](../images/images/positive.png)
Limitation when using GroupBy feature and continuous virtualization | When `igGrid`’s continuous virtualization is in use and the Group By feature is enabled, scrolling vertically causes the groups to revert to their initial state (expanded or collapsed depending on the [`initialExpand`](%%jQueryApiUrl%%/ui.iggridgroupby#options:initialExpand) option). | ![](../images/images/negative.png)
Grouping not working with fixed virtualization | The GroupBy feature of the `igGrid` doesn’t work with fixed virtualization. | ![](../images/images/negative.png)
Hiding a column shrinks the grid in Firefox | When the GroupBy feature is enabled and `igGrid` doesn’t have column widths defined, hiding a column shrinks the grid in Firefox browser. | ![](../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-paging"></a> [igGridPaging](igGrid-Known-Issues.html#paging)

Issue | Description | Status
---|---|---
Paging events not firing at run-time | The `igGrid` Paging events only fire when the UI is triggers a paging operation. They do not fire when paging options are set at run-time. | ![](../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-resizing"></a> [igGridResizing](igGrid-Known-Issues.html#resizing)

Issue | Description | Status
---|---|---
Resizing not working with some jQuery versions | `igGrid` Resizing does not support jQuery versions 1.8.0 ÷ 1.8.5. | ![](../images/images/positive.png)
Resizing not working with fixed and column virtualization |The column resizing feature does not work when fixed and/or column virtualization are enabled.| ![](../images/images/positive.png)
Columns not resizing correctly, when column widths are not set (in Firefox) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are not set. | ![](../images/images/negative.png)
Columns not resizing correctly when column widths are set relatively (in Firefox) | Due to a bug in Firefox, the `igGrid` columns cannot be resized correctly when the column widths are set relatively (in percentages). | ![](../images/images/positive.png)
Resizing a column occurs at an accelerated speed when the grid is scrolled to the far right.|The resizing speed is accelerated when the grid is scrolled to the far right and a column is resized by dragging from its right edge to the left. This specific behavior is caused by the browser’s layout engine.|![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="grid-row-selectors"></a> [igGridRowSelectors](igGrid-Known-Issues.html#row-selectors)

Issue | Description | Status
---|---|---
Row Selectors not working with column virtualization | Row Selectors are not supported in the context of column virtualization. This will be implemented in future releases. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
The `igGridRowSelectors` widget requires the Selection feature enabled | The [`requireSelection`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:requireSelection) option of the `igGridRowSelectors` widget is set to *true* by default and will throw an exception indicating that the Selection feature is required for using row selectors. | ![](../images/images/positive.png)
Selecting not working correctly in IE 9 | In Internet Explorer 9, selecting using `RowSelectors` with or without checkboxes does not work correctly when the table is large enough to cause the page to have a vertical scrollbar and the user scrolls down. When the grid receives focus, Internet Explorer 9 scrolls the page back up and the selecting is either applied to the wrong row or not applied at all. | ![](../images/images/negative.png)
The Selection feature cannot be enabled automatically | Automatically Enabling of the Selection feature does not work. The Selection widget is required for the `RowSelectors` to have full functionality. | ![](../images/images/positive.png)
["Select All"](igGrid-Configuring-Row-Selectors.html#select-all-pages) functionality does not work for remote Paging | The [`enableSelectAllForPaging`](%%jQueryApiUrl%%/ui.iggridrowselectors#options:enableSelectAllForPaging) option is not working for remote Paging scenario. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-selection"></a> [igGridSelection](igGrid-Known-Issues.html#selection)

Issue | Description | Status
---|---|---
Cell selection in iOS does not work properly | In iOS, when wanting to scroll the `igGrid`, the user should first tap on a cell and then swipe in the desired direction. There is a difference when scrolling the `igGrid` under iOS and Android due to the way jQuery Mobile handles the events. | ![](../images/images/negative.png)
Incorrect selection when selecting row/cell with continuous virtualization enabled | When selecting row/cell of the `igGrid` while continuous virtualization is enabled, the grid scrolls down and a different row/cell is selected due to a bug in jQuery version 1.6.4. This problem appears only in this version of the jQuery library. | ![](../images/images/positive.png)
Text selection is not working when Selection feature is enabled | The Selection feature disables text selection inside the grid by cancelling the selectstart event and as a result the cell's text cannot be selected. | ![](../images/images/positive.png)
Selecting a row in IE scrolls the row to most left in a grid with horizontal scrollbar | Selecting a row in IE is applying focus to the row, which scrolls the `igGrid` all the way to the left. | ![](../images/images/positive.png)
Keyboard navigation not supported for column virtualization | Keyboard navigation is not supported for column virtualization. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-summaries"></a> [igGridSummaries](igGrid-Known-Issues.html#summaries)

Issue | Description | Status
---|---|---
Limitation when using custom summary with remote data | ASP.NET MVC helper wrapper doesn’t handle the custom summaries by default. Therefore, a custom summary should be created and calculated separately. | ![](../images/images/positive.png)
Only basic numeric formats supported | The [`summaryFormat`](%%jQueryApiUrl%%/ui.iggridgroupby#options:summarySettings.summaryFormat) property supports only the basic numeric formats. For example, formats like $ .00 will not be able to display the $ sign. | ![](../images/images/negative.png)
Limitation when setting custom methods | When setting custom methods, it is highly recommended to set the order and [`summaryCalculator`](%%jQueryApiUrl%%/ui.iggridsummaries#options:columnSettings.summaryOperands.summaryCalculator) options of the summary operands. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-tooltips"></a> [igGridTooltips](igGrid-Known-Issues.html#tooltips)

Issue | Description | Status
---|---|---
Tooltips display issues when moving pointer too fast over the cells | If the user moves the mouse quickly through the control, the tooltip fade animation slows down the process of showing and hiding tooltips and can create display issues when the values are very small. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-exporter"></a> [igGridExcelExporter](igGridExcelExporter-Overview.html)

Issue | Description | Status
---|---|---
Saving exported file does not work in IE9 and earlier | GridExcelExporter uses a Blob object to keep the raw data of the exported worksheet, which is not supported in IE9 and earlier: https://developer.mozilla.org/en-US/docs/Web/API/Blob | ![](../images/images/negative.png)
Only part of the data is exported in Append Rows on Demand or remote paging scenarios | The GridExcelExporter is entirely a client-side component and thus it deals only with data currently available on the client. In scenarios implementing Remote Paging and Append Rows on Demand when further sets of data are fetched through additional requests, this data is not exported. | ![](../images/images/positive.png)
Custom filtering conditions are not applied in the exported worksheet | The custom filtering conditions available in igGrid expectedly are not available among the native Excel filtering conditions, so those are not applied in the exported worksheet. | ![](../images/images/negative.png)
Go up to [Known Issues and Limitations Summary](#summary)


### <a id="grid-updating"></a> [igGridUpdating](igGrid-Known-Issues.html#updating)

Issue | Description | Status
---|---|---
Adding a new row with Updating and Virtualization enabled requires immediate committing | Adding a new row is not supported when the Updating and Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled. Virtualization is not aware of the newly added row when `autoCommit` is *false*. | ![](../images/images/positive.png)
Excel Navigation mode supported only for Cell Edit mode. | When [`excelNavigationMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:excelNavigationMode) is enabled, navigating with the arrows is only possible with "cell" [`editMode`](%%jQueryApiUrl%%/ui.iggridupdating#options:editMode). Other Edit modes (*row*, *dialog*, *none*, *null*) are not supported with  `excelNavigationMode`. | ![](../images/images/negative.png)
Adding and updating a virtual grid doesn’t work if it is grouped | When using GroupBy and Updating in a virtual grid, updating or adding rows will not work when the grid is grouped. If you ungroup you will see the newly added record at the bottom of the grid records. | ![](../images/images/negative.png)
Updating rows/cells when the Updating and Continuous Virtualization features are enabled while [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) is disabled is not supported. | Editing rows/cells with Updating when the [`autoCommit`](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit) grid option is set to false and Continuous Virtualization is enable will throw exception. | ![](../images/images/positive.png)
Keyboard navigation while in edit mode does not wrap-around if virtualization is enabled. | When virtualization is enabled keyboard navigation with Tab/Shift+Tab when edit mode is "cell" and keyboard navigation with Enter/Shift+Enter when edit mode is "row" will not wrap-around. When reaching the last row/cell and navigating to the next one the first row/cell will not enter edit mode and the same will happend when reaaching the first row/cell and navigating to the previous one - the last row/cell will not enter edit mode. | ![](../images/images/negative.png)
Keyboard navigation not supported for column virtualization | Keyboard navigation is not supported for column virtualization. | ![](../../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="feature-chooser"></a>[Feature Chooser](igGrid-Known-Issues.html#feature-chooser)

Issue | Description | Status
------|-------------|-------
If any of the features or their options are changed after initialization the changes won't be reflected in the Feature Chooser.|The feature chooser is rendered only once on initialization and won't be affected if any of the features are modified after this.|![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="tree-grid"></a>[igTreeGrid](igTreeGrid-Known-Issues-And-Limitations.html)

Issue | Description | Status
------|-------------|-------
Expansion indicators can be cropped/hidden with remote features|Expansion indicators on lower levels in the hierarchy can be cropped/hidden when rendered in the separate indicators non-data column in remote scenarios|![](../images/images/positive.png)
Misaligned first cells' data on lower levels|Padding on lower levels can push displayed data beyond the available width of the cell and cause the text to wrap around to the initial position, breaking visual hierarchy|![](../images/images/positive.png)
Scroll position changes when expanding/collapsing rows in rowVirtualization mode with paging (allLevels).|When rowVirtualization and paging with  [`mode`](%%jQueryApiUrl%%/ui.igtreegrid#options:mode) set to `allLevels` are enabled the scroll position will change when expanding/collapsing rows.| ![](../images/images/negative.png) 
Paging Context Row is not supported with Column Fixing.|An exception is thrown when [contextRowMode](%%jQueryApiUrl%%/ui.igtreegridpaging#options:contextRowMode) is "parent" or "breadcrumb" and Column Fixing is enabled.| ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="hierarchical-grid"></a> [igHierarchicalGrid](igHierarchicalGrid-Known-Issues.html#general)

Issue | Description | Status
---|---|---
Screen taps misinterpreted on Android 4.* devices | On Android 4.*-powered touch devices tapping on the drop-down in the Group By modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog. | ![](../images/images/positive.png)
Rendering issues in the hierarchical grid when features are referenced in a particular order | The igHierarchicalGrid’s child layouts may have rendering issues if the Row Selectors feature is added after the Group By feature to the feature list. | ![](../images/images/positive.png)
Limitation for the primary key values | igHierarchicalGrid uses primary key value of the parent layout to create child layout <div> element with unique id attribute (according to the [HTML5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute) [space characters](http://www.w3.org/TR/html5/infrastructure.html#space-character)must not be used in the id attribute value). When the primary key values contain invalid characters the DIV element cannot be selected with the [jQuery ID selector](http://api.jquery.com/id-selector/).As a result features on the child grid may not work as expected. Example: Opening filter dropdown on child grid causes an exception. | ![](../images/images/negative.png)
Self-reference not working in MVC | If you want to bind an igHierarchicalGrid to self-referencing data, the MVC pattern will not allow you to do this because of limitation in serializing. | ![](../images/images/negative.png)
Load-on-Demand not working with chaining | It is not possible to enable Load-on-Demand in the View page of your MVC project. | ![](../images/images/positive.png)
Load-on-Demand without primary keys for the layouts throws an exception | If you enable the Load-on-Demand feature and do not define primary keys for all child layouts, an exception will be thrown. | ![](../images/images/positive.png)
Some child layout columns are hidden or cut out | When an igHierarchicalGrid has no width defined and the child layout has width that exceeds the width grid, some of the child’s columns will be cut or hidden. | ![](../images/images/positive.png)
Defining a feature more than once not possible | **In JavaScript:** In both igGrid and igHierarchicalGrid, defining a feature more than once throws an error.**In MVC:** In both igGrid and igHierarchicalGrid, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../images/images/negative.png)
Client-side binding to XML | Binding to XML is supported only for recursive schemas. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
When Load-on-Demand is false persistence is not working for the child layouts | When Load-on-Demand is false remote Filtering, Sorting or GroupBy are not persisted for the child layout. The persist option is automatically set to false for those features in this scenario. | ![](../images/images/negative.png)
The id attribute is mandatory for the DOM control placeholder | The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection. | ![](../images/images/negative.png)
Column keys which contain spaces are not supported | Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the [HTML 5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute). | ![](../images/images/negative.png)
Using virtualization with initialExpandDepth is not supported|Currently when virtualization is enabled all rows are fetched as collapsed. Setting initialExpandDepth will have no effect.| ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="hierarchical-grid-grouping"></a> [igHierarchicalGrid GroupBy](igHierarchicalGrid-Known-Issues.html#grouping)

Issue | Description | Status
---|---|---
Limitation of remote grouping in hierarchical grid | Grouping columns from more than one layout (or from the root grid) does not work with remote grouping. | ![](../images/images/positive.png)
Erroneous remote grouping with Load-on-Demand | If remote Group By is enabled with Load-on-Demand for the entire grid, the groups are incorrect unless you modify the action that returns the data that is being loaded on demand. | ![](../images/images/positive.png)
Exception thrown when the Group By feature defines column settings together with enabling inheritance | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../images/images/positive.png)
Limitation of remote grouping from different child layouts | When Load-on-Demand is disabled grouping columns from different child layouts with remote group by will invoke the parent's DataSourceUrl instead of the DataSourceUrl of the child. | ![](../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="hierarchical-grid-row-selectors"></a> [igHierarchicalGrid RowSelectors](igHierarchicalGrid-Known-Issues.html)

Issue | Description | Status
---|---|---
Row Selectors works on only one layout at a time | The Row Selectors’ feature checkboxes selected in one layout become deselected when user checks the checkboxes in another layout. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="hierarchical-grid-tooltips"></a> [igHierarchicalGrid Tooltips](igHierarchicalGrid-Known-Issues.html)

Issue | Description | Status
---|---|---
Tooltips are not shown for child layout when options for Tooltips are different in child and root options definition | This is no longer supported as all Tooltips instances in an hierarchical grid will use the same DOM elements (to reduce DOM complexity).  | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="linear-gauge"></a> [igLinearGauge](igLinearGauge-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Only one needle supported | The `igLinearGauge`™ control supports only one needle. | ![](../images/images/positive.png)
No label collisions detection | The `igLinearGauge` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="mvc"></a> [Ignite UI ASP.NET MVC Wrappers](ASPNET-MVC-Wrappers-Known-Issues.html)

Issue | Description | Status
---|---|---
MVC helper-generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page | When the MVC Loader and an MVC helper for any control is used in an ASP.NET MVC View, the JavaScript code they generate is executed after any custom page set-up code from the [`document.ready()`](http://api.jquery.com/ready/) or [`window.load()`](http://api.jquery.com/load-event/) events. | ![](../images/images/positive.png)
Default value for `AutoGenerateLayouts` changed | In the ASP.NET MVC Helper for grids, the default value of the `AutoGenerateLayouts` property has changed to *false* in order to avoid an additional remote data request for flat grids. | ![](../images/images/negative.png)
MVC Loader not functioning correctly in an MVC Razor Layout View | The ASP.NET MVC Loader cannot initialize before the controls in an actual View when it is included in an ASP.NET MVC Razor Layout View. | ![](../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="mvc-mobile"></a> [Ignite UI ASP.NET MVC Wrappers (mobile)](ASPNET-MVC-Mobile-Wrappers-Known-Issues.html)

Issue | Description | Status
---|---|---
Mobile control helpers’ location changed | In 2013.1, the mobile control helpers were part of the *Infragistics.Web.MVC.dll* assembly. In 2013.2, they reside in *Infragistics.Web.MVC.Mobile dll*. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="map"></a> [igMap](igMap-Known-Issues-Limitations.html)

Issue | Description | Status
---|---|---
Tooltips are not shown for the Geographic Contour Line series | Currently tooltips are not supported for the Geographic Contour Line series. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
Tooltips are not rendered for the Geographic Symbol series on an iPad device | No tooltips appear on an iPad device when Geographic Symbol series are rendered. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="olap-xmla-data-source"></a> [igOlapXmlaDataSource](igOlapXmlaDataSource-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
`igOlapXmlaDataSource` not supported on Android-based browsers | The `igOlapXmlaDataSource`™ component is not supported on browsers for the Android operating system. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
Authenticated data access not working correctly with Mozilla Firefox for `igOlapXmlaDataSource` | When using the Firefox browser with authenticated access, additional configuration of the [Internet Information Services](http://encyclopedia2.thefreedictionary.com/Internet+Information+Services) (IIS) is necessary. | ![](../images/images/positive.png)
Authenticated data access not working correctly with Internet Explorer 8.0 and 9.0 for non-trusted domains for `igOlapXmlaDataSource` | The `igOlapXmlaDataSource` component cannot retrieve OLAP data on non-trusted domains with the Internet Explorer browser, versions 8 and 9. | ![](../images/images/positive.png)
Chrome does not display authentication popup for cross-domain requests when using `igOlapXmlaDataSource` | In the Chrome browser, versions 13 or higher, the authentication popup dialog is not displayed for cross-domain requests. | ![](../images/images/positive.png)


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="pivot-data-selector"></a> [igPivotDataSelector](igPivotDataSelector-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Drop label remains after drop between `igPivotDataSelector` areas using old jQuery UI versions | This is caused by a bug in the jQuery UI draggable introduced in version 1.8.19.  For more information, see [jQuery UI Bug 8269](http://bugs.jqueryui.com/ticket/8269). | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="pivot-grid"></a> [igPivotGrid](igPivotGrid-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Captions-based sorting in `igPivotGrid` always alphabetical | No custom captions sorting behaviors are currently supported by the `igPivotGrid`™ control. Only alphabetical sorting is available. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
Expanding or collapsing a member in `igPivotGrid` re-renders the grid | When a member in the rows or columns of the `igPivotGrid` is expanded or collapsed, the whole grid is re-rendered. | ![](../images/images/negative.png) ![](../images/images/plannedFix.png)
`igPivotGrid` not always rendered correctly in browsers for the Android operating system | In browsers for the Android operating system, sometimes only the first column of the `igPivotGrid` is displayed. | ![](../images/images/positive.png)
*Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19* | When drag-and-dropping an item between areas of the `igPivotGrid` and/or the `igPivotDataSelector`™, the drop label remains. | ![](../images/images/positive.png)
Horizontal scrollbar not visible on Mac OS under certain conditions | Horizontal scrollbar not visible on Mac OS when its "Show scrollbars only when scrolling" option is set to *true*. The grid horizontal scrollbar has overflow set to *hidden*. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="popover"></a> [igPopover](igPopover-Known-Issues-And-Limitations.html)

Issue | Description | Status
---|---|---
The pointer mispositioned in Chrome on page loading | If the `igPopover` is shown when initially loading the page, the arrow is not positioned properly according to the content frame. | ![](../images/images/positive.png)
**show** method requiring target parameter with **selectors** option is used, | When the selectors option is set and multiple targets are available, the show method needs DOM element to be passed as parameter, otherwise an error is thrown. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="qr-barcode"></a> [igQRCodeBarcode](igQRCodeBarcode-Known-Issues-and-Limitations.html)

Issue | Description | Status
---|---|---
Platform-specific characters not supported | The current version of the `igQRCodeBarcode`™ control does not support encoding symbols with 4 bytes. | ![](../images/images/negative.png)
Micro QR Code format not supported | The control currently does not support the Micro QR Code standard. | ![](../images/images/negative.png)
Structured Append mode not supported | The `igQRCodeBarcode` control currently does not provide support for Structured Append mode. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="validator"></a> igValidator

Issue | Description | Status
---|---|---
Minimum and maximum values with Date object | Using `new Date()` in the `valueRange` option can cause issues as it also has a time component that will be taken into account when evaluating limits (but not included and parsed from the default input format), so it's suggested to parse fixed dates or remove the time component. Alternatively, the `custom` validation can be used to perform checks instead. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)

### <a id="zoombar"></a> [igZoombar](igZoombar-Known-Issues-And-Limitations.html)

Issue | Description | Status
---|---|---
`igDataChart` Radial Series not supported | `igZoombar`™ supports only horizontal zooming while Radial Series zooming makes sense only when done on both axes. Because of this, zooming Radial Series with `igZoombar` does not work properly. | ![](../images/images/negative.png)
`igZoombar` thumbnail not rendered when used with `igDataChart` | `igZoombar` creates its thumbnail by using the options of the `igDataChart` control (which is referenced in `igZoombar`‘s [`target`](%%jQueryApiUrl%%/ui.igzoombar#options:target) option). `igZoombar` trims off some of these options in an attempt to remove the clutter from the thumbnail. This can make the new option set invalid. | ![](../images/images/positive.png)
The clone and the target widget of `igZoombar` doesn’t synchronize automatically | Changing the widget being zoomed by the `igZoombar` control does not update the clone automatically. | ![](../images/images/positive.png)
`igZoombar` does not work  with igDataCharts with Stacked Series.| The `igZoombar` creates a clone of the original `igDataChart` that it targets. By default the `igZoombar` infers the clone‘s options from the original chart object (refer to the [`clone`](%%jQueryApiUrl%%/ui.igzoombar#options:clone) option of the `igZoombar`). In the case of the stacked series, which have a more complex structure, the original chart modifies the series that the user provides internally. Due to this the `igZoombar` cannot obtain the original series and cannot recreate the clone automatically.| ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="infragistics-documents"></a> [Infragistics Document Engine](DocumentEngine-Known-Issues.html)

Issue | Description | Status
---|---|---
Namespace conflict | Using the NetAdvantage® for ASP.NET and Ignite UI documents’ assemblies together causes namespace conflict exceptions. | ![](../images/images/positive.png)


 Go up to [Known Issues and Limitations Summary](#summary)

### <a id="templating-engine"></a> Infragistics Templating Engine

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
Infragistics Templating limitations
			</td>

            <td>
Nested `{{each}}` templates are not supported.
			</td>

            <td>
![](../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
Characters different from A-Z, a-z, 0-9, "_" are not substituted/recognized.
			</td>

            <td>
                Substitution expressions cannot contain written signs different from alphanumeric characters, numeric characters and underscore.

                

>**Workaround:** If you need to use characters different from the allowed ones you can customize the following `$.ig.regExp` options `$.ig.regExp.sub:/\$\{(([\w\$]+(\.|\s)?[\w\$]*)+)\}/`which matches any substitution element in the template that is to be encoded before rendering or the `$.ig.regExp.nonEncodeSub: /\{\{html\s+([\w\$]+(\.|\s)?[\w\$]*)+\}\}/` option, that matches any substitution element in the template                     that is to be rendered as it is. **For example** if you need to use a dash "-" change the expression like this: `$.ig.regExp.sub:/\$\{(([\w\$-]+(\.|\s)?[\w\$-]*)+)\}/` and accordingly `$.ig.regExp.nonEncodeSub: /\{\{html\s+([\w\$-]+(\.|\s)?[\w\$-]*)+\}\}/`.
            </td>

            <td>
![](../images/images/positive.png)
			</td>
        </tr>
        <tr>
		<td>List of blocks is not supported</td>
		<td>List of blocks are not supported, which means the following - “{{if *Condition1* }} Do Something {{/if}} {{if *Condition2* }} Do Something else {{/if}}” is not a correctly defined block.</td>
		<td>![](../images/images/negative.png)</td>
        </tr>
    </tbody>
</table>


Go up to [Known Issues and Limitations Summary](#summary)


### <a id="popup-mobile"></a> [Popup (mobile)](Popup-Known-Issues.html)

Issue | Description | Status
---|---|---
The MVC `Popup` mobile control requires jQuery Mobile version 1.2 | The `Popup` widget was introduced in jQuery mobile 1.2. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


### <a id="selectmenu-mobile"></a> [SelectMenu (mobile)](SelectMenu-Known-Issues.html)

Issue | Description | Status
---|---|---
The [`CloseText`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuModel~CloseText.html) property of mobile `SelectMenu` not applied when the menus are in custom dialog-based containers | If you set a text for the close button tooltip using the `CloseText` property of the `SelectMenu` control in dialog-based containers, your custom tooltip will not appear and the default one will be shown instead. <br /> This is due to jQuery Mobile not injecting the custom close text which cannot be accessed later. | ![](../images/images/negative.png)

Go up to [Known Issues and Limitations Summary](#summary)


###  <a id="slider-mobile"></a>  [Slider (mobile)](Slider-Known-Issues.html)

Issue | Description | Status
---|---|---
Mobile Slider does not slide on Windows Phone 7 | Because Windows® Phone 7 does not support standard touch events, the slider is read-only. | ![](../images/images/positive.png)

Go up to [Known Issues and Limitations Summary](#summary)
