<!--
|metadata|
{
    "fileName": "igtilemanager-handling-events",
    "controlName": "igTileManager",
    "tags": ["Events","Layouts"]
}
|metadata|
-->

# Handling Events (igTileManager)

## Topic Overview
### Purpose

This topic explains, with code examples, how to attach event handlers to the `igTileManager`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [Using Events in Ignite UI](Using-Events-in-NetAdvantage-for-jQuery.html): This topic demonstrates how to handle events raised by Ignite UI® controls. Also included is an explanation of the differences between binding events on initialization and after initialization.

- [igTileManager Overview](igTileManager-Overview.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality.

- [Adding igTileManager](igTileManager-Adding.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality.

### In this topic

This topic contains the following sections:

-   [**Handling Events – Conceptual Overview**](#overview)
    -   [Event handling summary](#summary)
    -   [Event handling cases summary chart](#summary-chart)
-   [**Event Reference**](#event-reference)
    -   [Event reference chart](#event-reference-chart)
-   [**Code Examples Summary**](#code-example)
-   [Code Example: Handling the Rendered Event Upon Initialization in jQuery](#init-jquery)
    -   [Description](#jquery-description)
    -   [Code](#jquery-code)
-   [Code Example: Handling the Rendered Event at Run-Time in ASP.NET MVC](#render-run-time-mvc)
    -   [Description](#mvc-description)
    -   [Code](#mvc-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Handling Events – Conceptual Overview
### <a id="summary"></a>Event handling summary

Attaching event handler functions to the `igTileManager` control is commonly done upon the initialization of the control. When the event occurs, the handling function is called.

When using the MVC helper, it is necessary to assign event handlers at run-time because you cannot define event handlers within the MVC helper.

jQuery supports the following methods for assigning event handlers:

-   [`bind()`](http://api.jquery.com/bind/)
-   [`delegate()`](http://api.jquery.com/live/)
-   [`live()`](http://api.jquery.com/delegate/)
-   [`on()`](http://api.jquery.com/on/)

The following table discusses the details of each function:

Function | Purpose
---|---
[bind](http://api.jquery.com/bind/)|Attaches an event handler to existing DOM elements that match a given selector.
[live](http://api.jquery.com/live/)|Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do not propagate up the DOM tree.
[delegate](http://api.jquery.com/delegate/)|Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do propagate up the DOM tree.
[on](http://api.jquery.com/on/)|Attaches an event handler to existing and any new DOM elements that match a given selector. (The delegate function is obsolete in jQuery version 1.7, making on the preferred approach for establishing event handlers.)

When using `bind()`, keep in mind that it attaches the specified handler only on the currently available elements, which means dynamically added items (after the DOM is loaded) aren't included in the event handler assignments.

From these, the delegate() method is the recommended one because it offers the best performance and allows the event handler to be automatically re-attached if the control instance is destroyed and then re-created.

### <a id="summary-chart"></a>Event handling cases summary chart

The following table explains briefly the event handling cases related the `igTileManager`. Further details are available after the table.

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

                `eventName: <handler>`
                

                The valid settings for the `eventName` option are:

                <ul>
                    <li>
dataBinding
					</li>

                    <li>
dataBound
					</li>

                    <li>
rendered
					</li>

                    <li>
rendering
					</li>

                    <li>
tileMaximized
					</li>

                    <li>
tileMaximizing
					</li>

                    <li>
tileMinimized
					</li>

                    <li>
tileMinimizing
					</li>

                    <li>
tileRendered
					</li>

                    <li>
tileRendering
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Handling events at run-time in jQuery and ASP.NET MVC
			</td>

            <td>
You can assign the event handler to the name of a function in order to implement the handler outside control initialization.
			</td>
        </tr>
    </tbody>
</table>

## <a id="event-reference"></a>Event Reference
### <a id="event-reference-chart"></a>Event reference chart

The following table summarizes the purpose and functionality of the events supported by the `igTileManager` control.

Event| Description
---|---
[dataBinding](%%jQueryApiUrl%%/ui.igtilemanager#options:dataBinding)|Fired prior to data binding.
[dataBound](%%jQueryApiUrl%%/ui.igtilemanager#options:dataBound)|Fired after data binding is complete but rendering has not yet started.
[rendered](%%jQueryApiUrl%%/ui.igtilemanager#options:rendered)|Fired after the widget has built and attached all the DOM it is rendering.
[rendering](%%jQueryApiUrl%%/ui.igtilemanager#options:rendering)|Fired prior to starting the rendering of the widget, item descriptions should be present at this point if they are not explicitly provided but generated internally.
[tileMaximized](%%jQueryApiUrl%%/ui.igtilemanager#options:tileMaximized)|Fired after the maximizing animation has completed.
[tileMaximizing](%%jQueryApiUrl%%/ui.igtilemanager#options:tileMaximizing)|Fired prior to a tile moving from minimized to maximized state.
[tileMinimized](%%jQueryApiUrl%%/ui.igtilemanager#options:tileMinimized)|Fired after the minimizing animation has completed.
[tileMinimizing](%%jQueryApiUrl%%/ui.igtilemanager#options:tileMinimizing)|Fired prior to a tile moving from maximized to minimized state.
[tileRendered](%%jQueryApiUrl%%/ui.igtilemanager#options:tileRendered)|Fired after a tile is rendered.
[tileRendering](%%jQueryApiUrl%%/ui.igtilemanager#options:tileRendering)|Fired prior to starting the rendering of a tile.

## <a id="code-example"></a>Code Examples Summary
### Code examples summary chart

The following table lists the code examples included in this topic.

Example | Description
---|---
[Handling the Rendered Event Upon Initialization in jQuery](#init-jquery)|This example assigns an event handling function to the [rendered](%%jQueryApiUrl%%/ui.igtilemanager#options:Handling the Rendered Event Upon Initialization in jQuery) event at initialization.
[Handling the Rendered Event at Run-Time in ASP.NET MVC](#render-run-time-mvc)|This example assigns an event hander to the [rendered](%%jQueryApiUrl%%/ui.igtilemanager#options:Handling the Rendered Event at Run-Time in ASP.NET MVC) event at run-time.


## <a id="init-jquery"></a>Code Example: Handling the Rendered Event Upon Initialization in jQuery
### <a id="jquery-description"></a>Description

This example assigns an event handling function to the [rendered](%%jQueryApiUrl%%/ui.igtilemanager#options:rendered) event at initialization.

### <a id="jquery-code"></a>Code

**In JavaScript:**

```js
$(".selector").igTileManager({
    rendered: function(evt, ui) { 
          // Handle event
    }
});
```



## <a id="render-run-time-mvc"></a>Code Example: Handling the Rendered Event at Run-Time in ASP.NET MVC
### <a id="mvc-description"></a>Description

This example assigns an event handler for the [rendered](%%jQueryApiUrl%%/ui.igtilemanager#options:rendered) event at run-time.

### <a id="mvc-code"></a>Code

**In JavaScript:**

```js
$(document).delegate(".selector", "igtilemanagerrendered", function(evt, ui) { 
   // Handle event
});
```

## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Binding igTileManager to Data](igTileManager-Binding.html): This topic explains how to bind the `igTileManager` control to the supported data sources.

- [Configuring igTileManager](igTileManager-Configuring.html): This topic explains how to configure the features and behavior of the `igTileManager` control.

- [Accessibility Compliance (igTileManager)](igTileManager-Accessibility-Compliance.html): This topic explains the accessibility features of the `igTileManager` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igTileManager)](igTileManager-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igTileManager` control and the available workarounds for them.

- [jQuery and ASP.NET MVC Helper API Links (igTileManager)](igTileManager-jQuery-and-ASP.NET-MVC-Helper-API-Links.html): This topic provides links to the API reference documentation for the jQuery and its ASP.NET MVC helper class for the `igTileManager` control.

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Tile Manager Binding to JSON](%%SamplesUrl%%/tile-manager/bind-json): This sample demonstrates how to data bind the Tile Manager control to JSON data source.

- [Tile Manager Item Configurations](%%SamplesUrl%%/tile-manager/item-configurations): This sample demonstrates how to configure each item tile in terms of each position and size inside the `igTileManager`.





 

 


