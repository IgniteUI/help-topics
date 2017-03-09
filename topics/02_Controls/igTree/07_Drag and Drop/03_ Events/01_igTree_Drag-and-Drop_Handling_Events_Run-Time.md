<!--
|metadata|
{
    "fileName": "igtree-drag-and-drop-handling-events-run-time",
    "controlName": "igTree",
    "tags": ["Events","How Do I"]
}
|metadata|
-->

# Handling Drag-and-Drop Events Run-Time (igTree)

## Topic Overview
### Purpose

This topic explains, with a code example, how to subscribe to events in the `igTree`™ control and attach event handlers at run-time.

### Required background

The following topics are prerequisites to understanding this topic:

- [Drag-and-Drop Overview (igTree)](igTree-Drag-and-Drop-Overview.html): This topic provides an overview the Drag-and-Drop feature of the `igTree` control.



## Attaching Event Handlers in an igTree at Run-Time
#### Attaching event handlers at run-time summary

When using the MVC helper, it is necessary to assign event handlers at run-time because you cannot define event handlers within the MVC helper.

jQuery supports the following methods for assigning event handlers:

-  ` bind()`
-   `delegate()`
-   `live()`
-   `on()`

From these, the delegate() method is the recommended one because it offers the best performance and allows the event handler to be automatically re-attached if the control instance is destroyed and then re-created.

### Code Example

The code in this example assigns an event handler at run-time.

**In JavaScript:**

```js
$(document).delegate(".selector", "igtreedragstart", function(evt, ui) { 
    // Handle event
});
```



## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Handling Drag-and-Drop Events Upon Initialization in jQuery (igTree)](igTree-Drag-and-Drop-Handling-Events-Initialization.html): This topic explains, with code examples, how to attach events to the `igTree` control upon initialization in jQuery.

- [API Links (igTree)](igTree-jQuery-And-ASP-NET-MVC-Helper-API-Links.html): This topic provides links to `igTree` jQuery and ASP.NET MVC Helper API.


### Samples

The following samples provide additional information related to this topic.

- [Drag and Drop - Single Tree](%%SamplesUrl%%/tree/drag-and-drop-single-tree): This sample demonstrates how to initialize the `igTree` control with the Drag-and-Drop feature enabled.

- [Drag and Drop - Multiple Trees](%%SamplesUrl%%/tree/drag-and-drop-multiple-trees): This sample demonstrates how to drag-and-drop nodes between two `igTrees`.

- [API and Events](igtree-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to use `igTree` API.




 

 

 


