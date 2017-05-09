<!--
|metadata|
{
    "fileName": "igtree-drag-and-drop-handling-events-initialization",
    "controlName": "igTree",
    "tags": ["Events","How Do I"]
}
|metadata|
-->

# Handling Drag-and-Drop Events Upon Initialization in jQuery (igTree)

## Topic Overview
### Purpose

This topic explains, with a code example, how to attach event handlers to the `igTree`™ control upon initialization in jQuery.

### Required background

The following topics are prerequisites to understanding this topic:

- [Drag-and-Drop Overview (igTree)](igTree-Drag-and-Drop-Overview.html): This topic provides an overview the Drag-and-Drop feature of the `igTree` control.

## Attaching Event Handlers Upon igTree Initialization in jQuery

### Attaching an Event Handler Upon Initialization summary 
                               
Attaching event handler functions to the `igTree` control is commonly done upon the initialization of the control and attached to the `dragStart` event. When the event occurs, the handling function is called.

###Code example

An example of assigning event handling function to the `dragStart` event at initialization.

**In JavaScript:**

```js
$(".selector").igTree({
	dataSource: data,
	dataSourceType: "xml",
	// Enabling the Drag-and-Drop feature
	dragAndDrop: true,
	dragStart: function(evt, ui) {
	// Handle event
	}
});
```

## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Handling Drag-and-Drop Events at Run-Time (igTree)](igTree-Drag-and-Drop-Handling-Events-Run-Time.html): This topic explains, with a code example, how to subscribe to events in the `igTree` control and attach event handlers at run-time.

- [API Links (igTree)](igTree-jQuery-And-ASP-NET-MVC-Helper-API-Links.html): This topic provides links to `igTree` jQuery and ASP.NET MVC Helper API.


### Samples

The following samples provide additional information related to this topic.

- [Drag and Drop - Single Tree](%%SamplesUrl%%/tree/drag-and-drop-single-tree): This sample demonstrates how to initialize the `igTree` control with the Drag-and-Drop feature enabled.

- [Drag and Drop - Multiple Trees](%%SamplesUrl%%/tree/drag-and-drop-multiple-trees): This sample demonstrates how to drag-and-drop nodes between two `igTrees`.

- [API and Events](igtree-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to use `igTree` API.





 

 


