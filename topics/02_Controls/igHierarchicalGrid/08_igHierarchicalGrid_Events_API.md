<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-events-api",
    "controlName": "igHierarchicalGrid",
    "tags": ["API","Events","Grids","Patterns and Practices"]
}
|metadata|
-->

# Event Reference (igHierarchicalGrid)

## Topic Overview

### Purpose
This topic explains the events that are specific to the igHierarchicalGrid™.

### In this topic

This topic contains the following sections:

-   [Events Overview](#events-overview)
-   [Attaching Handlers to Events in jQuery and MVC](#attaching-handlers)
-   [Events Reference Chart](#events-reference-chart)
-   [Related Topics](#related-topics)

## <a id="events-overview"></a> Events Overview

There are a couple of events that are specific to the igHierarchicalGrid. (See the Events Reference Chart block below). They are triggered when expanding or collapsing a row. In addition to that, there are also events for populating a child grid. They are fired only when the igHierarchicalGrid has Load On Demand feature enabled.

All events with the `-ing` suffix are cancelable. Event `canceling` is enabled when in the handler is set to return false.

**In Javascript:**

```js
$("#grid1").igHierarchicalGrid({
    rowExpanding: function (e, args) {
           return  false;
    }
}
```

Most of the argument methods and properties contain- row specific data, as well as the grid they belong to. For more information about events,refer to the the Events Reference Chart below and the API help.

## <a id="attaching-handlers"></a> Attaching Handlers to Events in jQuery and MVC

To attach to an event, just define a handler for it in the same way you define property. Now if the event is triggered the handler will be called.

**In Javascript:**

```js
$("#grid1").igHierarchicalGrid({
    rowExpanding: function (e, args) {
           // Handle event  
    }
}
```

When you attach a handler in MVC, use the jQuery User Interface (UI) pattern for attaching handlers to widget events. This means you should use jQuery’s bind or live functions and pass the event’s name to them. The event name should be a lowercase string that is a concatenation of the name of the control and the event. You can do the same with the jQuery widget as well, but this would not be necessary because you can attach the event handlers directly when initializing the control. For more information, see jQuery widget factory. The code bellow demonstrates how to attach handlers to igHierarchicalGrid events when implementing a MVC solution.

**In Javascript:**

```js
$("#grid1").live({ ighierarchicalgridrowexpanding: function (e, args) {
     // Handle event  
}
});
```

> **Note:** The jQuery live function is used in case some DOM elements are added after attaching the event to the handler.

## <a id="events-reference-chart"></a> Events Reference Chart 

Event | Description | Cancelable | Arguments
----- | ----------- | ---------- | ----------
[rowExpanding](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events)| Fired when a hierarchical row is about to be expanded. | True | `e` – object holding event specific information<br><br>`args` – object containing information for the parent row. The properties are: `args.owner`, `args.parentrow`
[rowExpanded](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events)|Fired after a hierarchical row has been expanded.|False|`e` – object holding event specific information<br><br>`args` – object containing information for the parent row.<br><br>The properties are: `args.owner`,`args.parentrow`
[rowCollapsing](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events) | Fired when a hierarchical row is about to be collapsed. | True | `e` – object holding event specific information<br><br>`args` – object containing information for the parent row. The properties are: `args.owner`, `args.parentrow`
[rowCollapsed](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events) | Fired when a hierarchical row has been collapsed. | False | `e` – object holding event specific information<br><br>`args` – object containing information for the parent row. The properties are: `args.owner`, `args.parentrow`
[childrenPopulating](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events) | Fired when children are about to be populated. Called when the igHierarchicalGrid has Load On Demand enabled. | True | `e` – object holding event specific information<br><br>`args` – object containing information for the parent row. The properties are: `args.id`, `args.owner`, `args.parentrow`
[childrenPopulated](%%jQueryApiUrl%%/ui.ighierarchicalgrid#events) | Fired when children have been populated. Called when the igHierarchicalGrid has Load On Demand enabled. | False | `e` – object holding event specific information<br><br>`args` – object containing information for the parent row. The properties are: `args.id`, `args.owner`, `args.parentrow`

## <a id="related-topics"></a> Related Topics
Following are some other topics you may find useful.
- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html)
- [Initializing the igHierarchicalGrid](igHierarchicalGrid-Initializing.html)
- [igHierarchicalGrid Properties Reference](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options)
