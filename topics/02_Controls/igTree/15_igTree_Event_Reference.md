<!--
|metadata|
{
    "fileName": "igtree-event-reference",
    "controlName": "igTree",
    "tags": ["API","Events"]
}
|metadata|
-->

# Event Reference (igTree)

## Topic Overview

### Purpose

The topic that introduces the user to the `igTree`™ control’s events.

#### In this topic

This topic contains the following sections:

-   [**Event Reference**](#events)
-   [**Attaching Event Handlers in jQuery and MVC**](#attaching-handlers)
	-   [Attaching Event Handlers in jQuery](#attaching-handlers-jquery)
    -   [Attaching Event Handlers in MVC](#attaching-handlers-mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)

	
## <a id="events"></a> Event Reference

The following table summarizes the purpose and functionality of the `igTree` control’s featured events:

Event | Description | Cancelable
------|-------------|-----------
[dataBinding](%%jQueryApiUrl%%/ui.igtree#events:dataBinding) | Event is raised before databinding is performed. | False
[dataBound](%%jQueryApiUrl%%/ui.igtree#events:dataBound) | Event is raised after databinding is finished. | False
[drag](%%jQueryApiUrl%%/ui.igtree#events:drag) | Event is raised on node drag. | True
[dragStart](%%jQueryApiUrl%%/ui.igtree#events:dragStart) | Event is raised on node drag start. | True
[dragStop](%%jQueryApiUrl%%/ui.igtree#events:dragStop) | Event is raised after a drag operation has completed. | False
[nodeCheckstateChanged](%%jQueryApiUrl%%/ui.igtree#events:nodeCheckstateChanged) | Event is raised after the checkstate of a node is changed. | False
[nodeCheckstateChanging](%%jQueryApiUrl%%/ui.igtree#events:nodeCheckstateChanging) | Event is raised before the checkbox state of a node is changed. | True
[nodeClick](%%jQueryApiUrl%%/ui.igtree#events:nodeClick) | Event is raised on node click. | False
[nodeCollapsed](%%jQueryApiUrl%%/ui.igtree#events:nodeCollapsed) | Event is raised after a node is collapsed. | False
[nodeCollapsing](%%jQueryApiUrl%%/ui.igtree#events:nodeCollapsing) | Event is raised before a node is collapsed. | True
[nodeDoubleClick](%%jQueryApiUrl%%/ui.igtree#events:nodeDoubleClick) | Event is raised on node double click. | False
[nodeDropped](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped) | Event is raised after a node is dropped. | False
[nodeDropping](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping) | Event is raised before a node is dropped. | True
[nodeExpanded](%%jQueryApiUrl%%/ui.igtree#events:nodeExpanded) | Event is raised after a node is expanded. | False
[nodeExpanding](%%jQueryApiUrl%%/ui.igtree#events:nodeExpanding) | Event is raised before a node is expanded. | True
[nodePopulated](%%jQueryApiUrl%%/ui.igtree#events:nodePopulated) | Event is raised after the children of a node are populated in the case of load on demand. | False
[nodePopulating](%%jQueryApiUrl%%/ui.igtree#events:nodePopulating) | Event is raised before the children of a node are populated in the case of load on demand. | True
[rendered](%%jQueryApiUrl%%/ui.igtree#events:rendered) | Event is raised after rendering of the tree has finished. | False
[rendering](%%jQueryApiUrl%%/ui.igtree#events:rendering) | Event is raised before rendering of the tree begins. | False
[selectionChanged](%%jQueryApiUrl%%/ui.igtree#events:selectionChanged) | Event is raised after a new node is selected. | False
[selectionChanging](%%jQueryApiUrl%%/ui.igtree#events:selectionChanging) | Event is raised before a new node is selected. | True



## <a id="attaching-handlers"></a> Attaching Event Handlers in jQuery and MVC

### <a id="attaching-handlers-jquery"></a> Attaching Event Handlers in jQuery

To attach to an event, just define a handler for it in the same way you define a property. Now if the event is triggered, the handler will be called.

**In JavaScript:**

```js
$("#igTree1").igTree({
      selectionChanging: function (e, args) {
           // Handle event  
      }
});
```

The following example shows how this is done and it also demonstrates the use of the jQuery's [`on`](http://api.jquery.com/on/) method to attach an event handler to a selected element:

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/tree-control/api-and-events](%%SamplesEmbedUrl%%/tree-control/api-and-events)
</div>

### <a id="attaching-handlers-mvc"></a> Attaching Event Handlers in MVC

When you attach a handler in MVC, use the jQuery User Interface (UI) pattern for attaching handlers to widget events. This means you should use jQuery’s [`on`](http://api.jquery.com/on/), [`bind`](http://api.jquery.com/bind/) or [`live`](http://api.jquery.com/live/) functions and pass the event’s name to them. The event name should be a lowercase string that is a concatenation of the name of the control and the event. You can do the same with the jQuery widget as well, but this would not be necessary because you can attach the event handlers directly when initializing the control. For more information, see the [jQuery widget factory](http://wiki.jqueryui.com/w/page/12138135/Widget%20factory). The code bellow demonstrates how to attach handlers to igTree events when implementing a MVC solution.

**In JavaScript:**

```js
$("#igTree1").on({ igtreedragstart: function (e, args) {
     // Handle event  
}});
```

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

-	[igTree Overview](igtree-overview.html)
-   [igTree jQuery API documentation](%%jQueryApiUrl%%/ui.igtree#!overview)
-   [igTree ASP.NET MVC API documentation](Infragistics.Web.Mvc~Infragistics.Web.Mvc.TreeModel_members.html)
-	[Using Events in Ignite UI](using-events-in-netadvantage-for-jquery.html)