<!--
|metadata|
{
    "fileName": "implementing-paste-from-excel",
    "controlName": "igGrid",
    "tags": ["Editing","Grids", "Paste"]
}
|metadata|
-->

# Implementing Paste from Excel in igGrid

## Purpose
This topic will guide you through the process of implementing pasting of data from an Excel spreadsheet to an igGrid.

## In this topic

- [Code Example: Implementing paste from Excel](#code-example)
    - [Overview](#overview)
    - [Steps](#steps)
    - [Result](#result)
- [Related Content](#related)


## <a id='code-example'></a> Code Example: Implementing paste from Excel

### <a id='overview'></a> Overview

This topic takes you step-by-step toward implementing pasting of data from an Excel spreadsheet to an igGrid.
The following is a conceptual overview of the process:
1. Configure an igGrid with Updating and Selection features enabled.
2. Attach event handlers for the grid's [`focusin`](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusin) and [`keydown`](https://www.w3.org/TR/DOM-Level-3-Events/#keydown) events.
3. In [`focusin`](https://www.w3.org/TR/DOM-Level-3-Events/#event-type-focusin) event handler, attach a invisible `textarea` to the page. Attach event handlers for the [`paste`](https://www.w3.org/TR/clipboard-apis/#the-paste-action) event of the newly added `textarea`.
4. In [`keydown`](https://www.w3.org/TR/DOM-Level-3-Events/#keydown) event handler move the focus to the `textarea` when pasting (Ctrl + V) is executed on the grid.
5. In the [`paste`](https://www.w3.org/TR/clipboard-apis/#the-paste-action) event handler for the `textarea` proccess the pasted data and update the grid via the Updating feature API.

### <a id='steps'></a> Steps

1. Configure an igGrid with Updating and Selection features.

    The following topics cover enabling the related features:
    - [Enabling Updating](igGrid-Updating.html#enable)
    - [Enabling Selection](igGrid-Selection-Overview.html#enabling-selection)

2. Attach event handlers for the grid's `focusin` and `keydown` events.

    These events can be attached directly to the igGrid main element, for example:

    ```js
    $("#grid").igGrid({ ... }).on('focusin', function (e) { ... }).on('keydown', function (evnt) { ... });
    ```
3. In `focusin` event handler, attach an invisible `textarea` to the page. Attach event handlers for the `paste` event of the newly added `textarea`.

    The `textarea`'s purpose is to handle the `paste` event where we can safely access the pasted data. Not all browsers allow directly accessing the clipboards outside of the related events data due to security reasons.
    The `textarea` is attached to the DOM as an invisible element in order to not interfere with the UI.

    ```js
    .on('focusin', function (e) {
		if ($("#pasteHelper").length > 0) {
		    return;
		}
		var container = $(document.body);
		var containerDiv = $("<div></div>")
			.css({
			    "position": "fixed",
				"top": -10000,
				"left": -10000
			});
		//create textarea for handling paste event. Text area will be transparent.
		var textArea = $("<textarea id='pasteHelper'></textarea>")
			.css({
				"opacity": 0,
				"overflow": "hidden"
			})
		.appendTo(containerDiv);
		containerDiv.appendTo(container);

		textArea.on("paste", pasteHandler);
	})
    ```

4. In `keydown`'s event handler move the focus to the `textarea` when pasting (Ctrl + V) is executed on the grid.

    This will ensure that the `keydown` event is passed on to the `textarea` so that its paste event is fired for it with the pasted data.

    ```js
    .on('keydown', function (evnt) {
		//handle grid's keydown event
		var ctrl = evnt.ctrlKey, key = evnt.keyCode;
		if (ctrl && key == 86 || evnt.shiftKey && key == 45) // Ctrl-V || Shift-Ins
		{
			//on paste (Ctrl+V) move focus to textarea
			$("#pasteHelper").focus();
		}
	});
    ```

5. In the `paste` event handler for the `textarea` proccess the pasted data and update the grid's records.

    Once the data is processed you can either update the records (starting from the selected cell) or add them as new records.
    The updating is done via the igGrid Updating feature's API.

    ```js
    function pasteHandler(event) {
	    var data;

		//get clipboard data - from window.cliboardData for IE or from the original event's argumets.
		if (window.clipboardData) {
		    window.event.returnValue = false;
		    data = window.clipboardData.getData("text");
		} else {
		    data = event.originalEvent.clipboardData.getData('text/plain');
		}

		//process the clipboard data
		var processedData = ProcessData(data);

		if (pasteMode === "Paste starting from active cell") {
		//update starting from selected cell
			UpdateRecords(processedData);
		} else {
		//add to the grid
		    AddRecords(processedData)
		}

		$("#undo").igButton("option", "disabled", false);
		$("#saveChanges").igButton("option", "disabled", false);
	}
    ```

### <a id='result'></a> Result

The below sample demonstrates the result of the code. It also shows a notification message when the pasting is complete and allows you to change the pasting mode.
There are two possible modes: 
Paste data as new records - when this mode is selected the pasted records will be added as new rows in the grid. 
Paste starting from active cell - when this mode is selected the pasted records will replace the data starting from the active grid cell.

In order to test it open up any Excel spreadsheet ([or this one here](http://www.igniteui.com/data-files/sample-data.xlsx)), copy some rows, and paste it into the grid using the keyboard. 

<div class="embed-sample">
   [Paste from Excel](%%SamplesEmbedUrl%%/grid/paste-from-excel)
</div>

## <a id='related'></a> Related Content

- [Updating Overview (igGrid)](igGrid-Updating.html): This topic explains how to use the Updating feature of the `igGrid`™ control.
