<!--
|metadata|
{
    "fileName": "iggrid-column-hiding-grid-events",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Column Hiding Grid Events (igGrid)

## Topic Overview

### Purpose

This topic explains how to attach events in jQuery and MVC and provides a reference about the events that are specific to column management.


### In this topic

This topic contains the following sections:

-   [Events Overview](#events-overview)
-   [Attaching Events in jQuery and MVC](#attaching-events)
-   [Events Reference Chart](#events-reference)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)

## <a id="events-overview"></a> Events Overview

There are a couple of events related to column management. (See the Events Reference Chart below).

Also, all events with the **-ing** suffix are cancelable and the action can be terminated when in the handler is set to return false.

**In Javascript:**

```js
$("#grid1").igGrid({
   features: [
	{
		name: 'Hiding',
		columnHiding: function (ui, args) {
			return  false;
		}
    }
  ]
});
```

Most of the argument methods and properties contain row-specific data and an identification of the grid they belong to.

## <a id="attaching-events"></a> Attaching to Events in jQuery and MVC

To attach to an event, the only thing you need to define is a handler for it, just like you define a property. Then when the event is triggered, the handler will be called.

**In Javascript:**

```js
$("#grid1").igGrid({
    features: [{
        name: 'Hiding',
        columnHiding: function (e, args) {
            // Handle event
        }
    }]
});
```

When attaching a handler in MVC, you need to use the jQuery User Interface (UI) pattern, which mandates concatenating the name of the control and event in lower-case letters.

**In Javascript:**

```js
$("#grid1").on("iggridhidingcolumnhiding ", function (e, args) {
     // Handle event
});
```

> **Note**: The jQuery’s `on` function is used in case some DOM elements are added after attaching to the handler.

## <a id="events-reference"></a> Events Reference Chart

**Note:** In the following table, the events specific to the [Hiding Column Chooser](igGrid-Hiding-Column-Chooser.html) are listed. They are available also in the [Hiding Column Chooser](igGrid-Hiding-Column-Chooser.html) topic.

Event | Description | Cancelable
------|-------------|-----------
[columnHiding](%%jQueryApiUrl%%/ui.iggridhiding#events:columnHiding) | Event fired before a hiding operation is executed | True
[columnHidden](%%jQueryApiUrl%%/ui.iggridhiding#events:columnHidden) | Event fired after the hiding has been executed and results are rendered | False
[columnShowing](%%jQueryApiUrl%%/ui.iggridhiding#events:columnShowing) | Event fired before a showing operation is executed | True
[columnShown](%%jQueryApiUrl%%/ui.iggridhiding#events:columnShown) | Event fired after the showing has been executed and results are rendered | False
[columnChooserOpening](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserOpening) | Event fired before the column chooser is opened | True
[columnChooserOpened](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserOpened) | Event fired after the column chooser is already opened | False
[columnChooserMoving](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserMoving) | Event fired every time the column chooser changes its position | False
[columnChooserClosing](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserClosing) | Event fired before the column chooser is closed | True
[columnChooserClosed](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserClosed) | Event fired after the column chooser has been closed | False
[columnChooserContentsRendering](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserContentsRendering) | Event fired before the contents of the column chooser are rendered | True
[columnChooserContentsRendered](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserContentsRendered) | Event fired after the contents of the column chooser are rendered | False
[columnChooserButtonApplyClick](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserButtonApplyClick) | Event fired when button Reset in column chooser is clicked | False
[columnChooserButtonResetClick](%%jQueryApiUrl%%/ui.iggridhiding#events:columnChooserButtonResetClick) | Event fired when button Reset in column chooser is clicked | False


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
The following topics provide additional information related to this topic.

-   [Enable Column Hiding](igGrid-Column-Hiding-Enabling-Column-Hiding.html)
-   [Configure igGrid Column Hiding](igGrid-Configure-Column-Hiding.html)

### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

-   [API and Events](%%SamplesUrl%%/grid/grid-api-events)

