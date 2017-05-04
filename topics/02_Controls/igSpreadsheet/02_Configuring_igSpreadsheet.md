<!--
|metadata|
{
    "fileName": "igspreadsheet-configuring",
    "controlName": "igSpreadsheet",
    "tags": [""]
}
|metadata|
-->

# Configuring igSpreadsheet

## Introduction

This topic explains how to configure %%ProductName%%® spreadsheet control.

###In this topic

This topic contains the following sections:

-   [Configuring Navigation](#configuring_navigation)
-   [Configuring Selection](#configuring_selection)
-   [Configuring Worksheets](#configuring_worksheets)

###Required background

To understand this topic you need to be familiar with the concept ant topics related to the [Infragistics JavaScript Excel Library](javascript-excel-library.html).

##<a id="configuring_navigation"></a>Configuring Navigation

The igSpreadsheet supports navigation of the active cell through the cells of the active pane of the currently selected worksheet. The user may change the active cell using the keyboard or mouse and also use the horizontal and vertical scroll bars to change the visible columns and rows of the active sheet pane.

In addition to the normal navigation behavior the XamSpreadsheet control supports one more navigation mode:

 - **End Mode** - in this mode the arrow keys are used to navigate adjacent cells with data.
 
 >**Note:** Scroll Lock mode is not supported for the 'igSpreadsheet' control.
 
 The table below lists the configurable navigation behaviors of the `igSpreadsheet` control.
 
 <table class="table">
	<thead>
		<tr>
			<th>Configurable behavior</th>
			<th>Behavior details</th>
			<th>Configuration properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>End Mode</td>
			<td>Enable or disable end mode navigation.</td>
			<td>[isInEndMode](%%jQueryApiUrl%%/ui.igSpreadsheet#options:isInEndMode)</td>
		</tr>
	</tbody>
</table>

##<a id="configuring_selection"></a>Configuring Selection

You can control whether the existing selection is replaced or altered depending on the modifier keys (Shift and/or Control) pressed by the user.

To switch between the igSpreadsheet's selection modes (normal, extendSelection and addToSelection) programmatically, use the [selectionMode](%%jQueryApiUrl%%/ui.igSpreadsheet#options:selectionMode) property.

The following table maps the desired configuration to the property settings that manage it.

<table class="table">
	<thead>
		<tr>
			<th>In order to:</th>
			<th>Use this property:</th>
			<th>And set it to:</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Set Normal mode</td>
			<td>`selectionMode`</td>
			<td>[normal](%%jQueryApiUrl%%/ui.igSpreadsheet#options:selectionMode)</td>
		</tr>
		<tr>
			<td>Set extendSelection mode</td>
			<td>`extendSelection`</td>
			<td>[normal](%%jQueryApiUrl%%/ui.igSpreadsheet#options:selectionMode)</td>
		</tr>
		<tr>
			<td>Set addToSelection mode</td>
			<td>`addToSelection`</td>
			<td>[normal](%%jQueryApiUrl%%/ui.igSpreadsheet#options:selectionMode)</td>
		</tr>
	</tbody>
</table>

##<a id="configuring_worksheets"></a>Configuring Worksheets

You can configure several worksheet aspects using properties defined directly on the igSpreadsheet control (listed in the table below). However these properties are convenient when you want to update several worksheets, because they will affect all worksheets selected by the user.

The following table explains briefly the configurable aspects of the worksheets and maps them to the properties that configure them.

<table class="table">
	<thead>
		<tr>
			<th>Configurable aspect</th>
			<th>Details</th>
			<th>Properties/Methods</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Gridlines</td>
			<td>This option shows or hides the lines that separate the columns and rows.</td>
			<td>[areGridlinesVisible](%%jQueryApiUrl%%/ui.igSpreadsheet#options:areGridlinesVisible)</td>
		</tr>
		<tr>
			<td>Headers</td>
			<td>This option shows or hides the columns' and rows' headers.</td>
			<td>[areHeadersVisible](%%jQueryApiUrl%%/ui.igSpreadsheet#options:areHeadersVisible)</td>
		</tr>
		<tr>
			<td>Zoom Level</td>
			<td>This option controls the magnification of the worksheet.</td>
			<td>[zoomLevel](%%jQueryApiUrl%%/ui.igSpreadsheet#options:zoomLevel)</td>
		</tr>
	</tbody>
</table>

## Related Links
-   [igSpreadsheet Overview](igSpreadsheet-Overview.html)

 

 


