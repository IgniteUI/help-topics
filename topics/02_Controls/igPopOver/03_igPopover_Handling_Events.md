<!--
|metadata|
{
    "fileName": "igpopover-handling-events",
    "controlName": "igPopover",
    "tags": ["API","Events"]
}
|metadata|
-->

# Handling Events (igPopover)

## Topic Overview
### Purpose

This topic explains the events of the `igPopover`™ control and provides code examples of attaching event handlers.

### Required background

The following topics are prerequisites to understanding this topic:

- [Using Events in Ignite UI](Using-Events-in-NetAdvantage-for-jQuery.html): This topic demonstrates how to handle events raised by Ignite UI® controls. Also included is an explanation of the differences between binding events on initialization and after initialization.

- [igPopover Overview](igPopover-Overview.html): This topic provides conceptual information about the igPopover control including its main features and functionality.

- [Adding igPopover](Adding-igPopover.html): This topic explains, with code examples, how to add the `igPopover` control to an HTML page in either JavaScript or ASP.NET MVC.

### In this topic

This topic contains the following sections:

-   [**Handling Events – Conceptual Overview**](#overview)
    -   [Event handling summary](#event-handling-summary)
    -   [Event handling cases summary chart](#summary-chart)
-   [**Event Reference**](#event-reference)
    -   [Event reference chart](#event-reference-chart)
-   [**Code Examples Summary**](#code-example)
-   [**Code Example: Handling the showing Event Upon Initialization in jQuery**](#jquery-handling)
    -   [Description](#jquery-description)
-   [**Code Example: Handling the showing Event at Run-Time in ASP.NET MVC**](#mvc-handling)
    -   [Description](#mvc-description)
-   [**Code Example: Modifying the Content of igPopover in the Handler of the showing Event**](#modify-content)
    -   [Description](#modify-content-description)
-   [**Code Example: Re-Positioning igPopover in the Handler of the showing Event**](#re-positioning-igPopover)
    -   [Description](#re-positioning-description)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Handling Events – Conceptual Overview
### <a id="event-handling-summary"></a>Event handling summary

Attaching event handler functions to the Ignite UI controls is commonly done upon the initialization of the control. When the event occurs, the handling function is called.

jQuery supports the following methods for assigning event handlers:

-   [**bind()**](http://api.jquery.com/bind/)
-   [**delegate()**](http://api.jquery.com/delegate/)
-   [**live()**](http://api.jquery.com/live/)
-   [**on()**](http://api.jquery.com/on/)

The following table discusses the details of each function:

Function|Purpose
---|---
[bind](http://api.jquery.com/bind/)|Attaches an event handler to existing DOM elements that match a given selector.
[live](http://api.jquery.com/live/)|Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do not propagate up the DOM tree.
[delegate](http://api.jquery.com/delegate/)|Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do propagate up the DOM tree.
[on](http://api.jquery.com/on/)|Attaches an event handler to existing and any new DOM elements that match a given selector. (The delegate function is obsolete in jQuery version 1.7, making on the preferred approach for establishing event handlers.)

When using `bind()`, keep in mind that it attaches the specified handler only on the currently available elements, which means dynamically added items (after the DOM is loaded) aren't included in the event handler assignments.

From these, the `delegate()` method is the recommended one because it offers the best performance and allows the event handler to be automatically re-attached if the control instance is destroyed and then re-created.

### <a id="summary-chart"></a>Event handling cases summary chart

The following table explains briefly the event handling cases related the `igPopover`. Further details are available after the table.

Event handling case|Details
---|---
Handling events upon initialization in jQuery|When binding to events on widget initialization, you subscribe to the event using an option which in the following format:<br>`eventName: <handler>`<br>The valid settings for the `eventName` option are:<ul><li>showing</li><li>shown</li><li>hiding</li><li>hidden</li></ul>
Handling events at run-time in jQuery and ASP.NET MVC|You can assign the event handler to the name of a function in order to implement the handler outside control initialization.

## <a id="event-reference"></a>Event Reference
### <a id="event-reference-chart"></a>Event reference chart

The following table summarizes the purpose and functionality of the events supported by the `igPopover` control.

Event|Description
---|---
[showing](%%jQueryApiUrl%%/ui.igpopover#events:showing)|Fired before showing the popover.
[shown](%%jQueryApiUrl%%/ui.igpopover#events:shown)|Fired after showing the popover is shown.
[hiding](%%jQueryApiUrl%%/ui.igpopover#events:hiding)|Fired before hiding the popover.
[hidden](%%jQueryApiUrl%%/ui.igpopover#events:hidden)|Fired after hiding the popover is hidden.


## <a id="code-example"></a>Code Examples Summary
### Code examples summary chart

The following table lists the code examples included in this topic.

Example|Description
---|---
[Handling the Event Upon Initialization in jQuery](#jquery-handling)|This example assigns an event handling function to the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing)event at initialization.
[Handling the Event at Run-Time in ASP.NET MVC](#mvc-handling)|This example assigns an event hander to the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing) event at run-time.
[Modifying the Content of igPopover in the Handler of the Event](#modify-content)|This example demonstrates how to change the content of igPopover’s container using the handler for the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing) event.
[Re-Positioning igPopover in the Handler of the Event](#re-positioning-igPopover)|This example demonstrates how to change the position of the popover container using the [shown](%%jQueryApiUrl%%/ui.igpopover#events:shown) event at run-time.


## <a id="jquery-handling"></a>Code Example: Handling the showing Event Upon Initialization in jQuery
### <a id="jquery-description"></a>Description

This example assigns an event handling function to the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing) event at initialization.


**In JavaScript:**

```js
$(".selector").igPopover({
    showing: function(evt, ui) { 
          // Handle event
    }
});
```



## <a id="mvc-handling"></a>Code Example: Handling the showing Event at Run-Time in ASP.NET MVC
### <a id="mvc-description"></a>Description

This example assigns an event handler for the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing) event at run-time.


**In JavaScript:**

```js
$(document).delegate(".selector", "igpopovershowing", function(evt, ui) { 
   // Handle event
});
```
## <a id="modify-content"></a>Code Example: Modifying the Content of igPopover in the Handler of the showing Event
### <a id="modify-content-description"></a>Description

This example demonstrates how to change the content of `igPopover`’s container using the handler for the [showing](%%jQueryApiUrl%%/ui.igpopover#events:showing) event.


**In JavaScript:**

```js
$(document).delegate(".selector", "igpopovershowing", function(evt, ui) { 
   // Handle event
   ui.content = ui.content + “ Updated”;
});
```



## <a id="re-positioning-igPopover"></a>Code Example: Re-Positioning igPopover in the Handler of the showing Event
### <a id="re-positioning-description"></a>Description

This example demonstrates how to change the position of the popover
container using the
[shown](%%jQueryApiUrl%%/ui.igpopover#events:shown)
event at run-time.


**In JavaScript:**

```js
$(document).delegate(".selector", "igpopovershown", function(evt, ui) { 
   // Handle event   
    var position = { top: 300, left: 450 };
    $("#img1").igPopover("setCoordinates", position);
});
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring igPopover](Configuring-igPopover.html): This topic explains how to configure the content, activation, and positioning of the `igPopover` control.

- [Accessibility Compliance (igPopover)](igPopover-Accessibility-Compliance.html): This topic explains the accessibility features of the `igPopover` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igPopover)](igPopover-Known-Issues-And-Limitations.html): This topic provides information about the known issues and limitations of the `igPopover` control and the available workarounds for them.

- [jQuery and ASP.NET MVC Helper API Links (igPopover)](igPopover-ASP-NET-MVC-Helper-API.html): This topic provides links to the API reference documentation for the jQuery and its ASP.NET MVC helper class for the `igPopover` control.

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/popover/basic-popover): This sample demonstrates the `igPopover` control in an ASP.NET MVC scenario. The control is initialized in the View using chaining syntax.

- [ASP.NET MVC Basic Usage](%%SamplesUrl%%/popover/aspnet-mvc-helper): This sample demonstrates the basic initialization scenarios (on a single target element and on multiple target elements) of `igPopover` in JavaScript.





 

 


