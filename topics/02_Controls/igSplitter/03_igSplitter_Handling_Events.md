<!--
|metadata|
{
    "fileName": "igsplitter-handling-events",
    "controlName": "igSplitter",
    "tags": ["Events","How Do I","Layouts"]
}
|metadata|
-->

# Handling Events



## Topic Overview
### Purpose

This topic explains, with a code examples, how to attach event handlers to the `igSplitter`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igSplitter Overview](igSplitter-Overview.html): This topic provides conceptual information about the `igSplitter` control including its features and user functionality.

- [Adding igSplitter](Adding-igSplitter.html): This topic demonstrates, with code examples, how to add the `igSplitter` control to an HTML page in either JavaScript and ASP.NET MVC.


### In this topic

This topic contains the following sections:

-   [Handling Events – Conceptual Overview](#overview)
    -   [Handling events summary](#summary)
    -   [Event handling cases summary chart](#summary-chart)
-   [Code Examples](#code-example)
-   [Code Example: Handling the resizeStarted Event Upon Initialization in jQuery](#init-jquery)
    -   [Description](#jquery-description)
    -   [Code](#jquery-code)
-   [Code Example: Handling the resizeStarted Event at Run-Time in ASP.NET MVC](#run-time-mvc)
    -   [Description](#mvc-description)
    -   [Code](#mvc-code)
-   [Splitter API and Events Demo](#demo)
-   [Related Content](#related-content)



## <a id="overview"></a>Handling Events – Conceptual Overview
### <a id="summary"></a>Handling events summary

Attaching event handler functions to the `igSplitter` control is commonly done upon the initialization of the control. When the event occurs, the handling function is called.

When using the MVC helper, it is necessary to assign event handlers at run-time because you cannot define event handlers within the MVC helper.

jQuery supports the following methods for assigning event handlers:

-   bind()
-   delegate()
-   live()
-   on()

From these, the delegate() method is the recommended one because it offers the best performance and allows the event handler to be automatically re-attached if the control instance is destroyed and then re-created.

The `igSplitter` supports the following events:

-   collapsed – handled when panel collapsing has finished. It indicates which panel has been collapsed.
-   expanded –handled when panel expanding has finished. It indicates which panel has been expanded.
-   resizeStarted - fired at panels resizing when the splitter bar begins to move
-   resizing –fired continually while the splitter bar is moving within container. It is used for canceling the moving of the splitter bar
-   resizeEnded – fired at resizing panels when the splitter bar stops moving
-   layoutRefreshed – fired after the panels are refreshed because of browser's resizing.
-   layoutRefreshing – fired before the panels are refreshed because of browser's resizing.

### <a id="summary-chart"></a>Event handling cases summary chart

The following table explains briefly the event handling cases related the `igSplitter`. Further details are available after the table.

<table class="table">
	<thead>
		<tr>
            <th>
Event handling case
			</th>
            <th>
Details
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
Handling events upon initialization in jQuery
			</td>
            <td>
                When binding to events on widget initialization, you subscribe to the event using an option which in the following format:
                `eventName`: <handler>
                </handler>
                The valid settings for the `eventName` option are:
                <ul>
                    <li>
collapsed
					</li>
                    <li>
expanded
					</li>
                    <li>
resizeStarted
					</li>
                    <li>
resizing
					</li>
                    <li>
resizeEnded
					</li>
                    <li>
layoutRefreshed
					</li>
                    <li>
layoutRefreshing
					</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
Handling events at run-time in jQuery and ASP.NET MVC
			</td>
            <td>
You can assing the event handler to the name of a function in order to implement the handler outside control initialization.
			</td>
        </tr>
    </tbody>
</table>



## <a id="code-example"></a>Code Examples
### Code examples summary

The following table lists the code examples included in this topic.

Example| Description
---|---
[Handling the resizeStarted Event Upon Initialization in jQuery](#init-jquery)|An example of assigning event handling function to the resizeStarted event at initialization.
[Handling the resizeStarted Event at Run-Time in ASP.NET MVC](#run-time-mvc)|The code in this example assigns an event handler at run-time.


## <a id="init-jquery"></a>Code Example: Handling the resizeStarted Event Upon Initialization in jQuery
### <a id="jquery-description"></a>Description

This example assigns an event handling function to the `resizeStarted` event at initialization.

### <a id="jquery-code"></a>Code

**In JavaScript:**

```js
$(".selector").igSplitter({
    resizeStarted: function(evt, ui) {
          // Handle event
    }
});
```



## <a id="run-time-mvc"></a>Code Example: Handling the resizeStarted Event at Run-Time in ASP.NET MVC
### <a id="mvc-description"></a>Description

This example assigns an event handler for the `resizeStarted` event at run-time.

### <a id="mvc-code"></a>Code

**In JavaScript:**

```js
$(document).delegate(".selector", "igsplitterresizestarted", function(evt, ui) {
   // Handle event
});
```

## <a id="demo"></a>Splitter API and Events Demo
#### Sample below demonstrates how to handle events in the Splitter control and API usage.

<div class="embed-sample">
	   [%%SamplesEmbedUrl%%/splitter/api-events-splitter](%%SamplesEmbedUrl%%/splitter/api-events-splitter)
</div>

## <a id="related-content"></a>Related Content
### Samples

The following samples provide additional information related to this topic.

- [Basic Vertical Splitter](%%SamplesUrl%%/splitter/basic-vertical-splitter): This sample demonstrates how to use the Splitter control to manage a page's vertical layout. The first container contains a Tree control with continents and countries. The left vertical panel has maximum and minimum ranges that a user can resize the panel. When a node is clicked, the description for the selected item is in the right panel.

- [Basic Horizontal Splitter](%%SamplesUrl%%/splitter/basic-horizontal-splitter): This sample demonstrates how to use the Splitter control to manage master/detail grid with horizontal layout. The first container contains a master grid with customers. After a row is clicked in master grid, in the second container is shown grid with orders that are made by this customer.

- [Nested Spitters](%%SamplesUrl%%/splitter/nested-splitters): This sample demonstrates how to manage layout with nested splitters. The panel contains a Tree with continents, countries and cities. When you click on a node the map in the second splitter is centered according node's coordinates. If a country is selected, then a grid is displayed under the map with cities in that country. Panels are not resizable by default.

- [ASP.NET MVC Basic Usage](%%SamplesUrl%%/splitter/aspnet-mvc-helper-splitter): This example demonstrates how you can utilize the ASP.NET MVC helper for the `igSplitter`.

- [Splitter API and Events](%%SamplesUrl%%/splitter/api-events-splitter): This sample demonstrates how to handle events in the `igSplitter` control and API usage.










