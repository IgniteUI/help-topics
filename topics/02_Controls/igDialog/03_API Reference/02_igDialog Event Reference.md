<!--
|metadata|
{
    "fileName": "igdialog-event-reference",
    "controlName": "igDialog",
    "tags": ["API","Events"]
}
|metadata|
-->

# Event Reference (igDialog)

## Topic Overview

### Purpose

The topic that introduces the user to the `igDialog`™ control’s events.

#### In this topic

This topic contains the following sections:

-   [**Event Reference**](#events)
-   [**Attaching Event Handlers in jQuery and MVC**](#attaching-handlers)
	-   [Attaching Event Handlers in jQuery](#attaching-handlers-jquery)
    -   [Attaching Event Handlers in MVC](#attaching-handlers-mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="events"></a> Event Reference

The following table summarizes the purpose and functionality of the `igDialog` control’s featured events:

Event | Description | Cancelable
------|-------------|-----------
[stateChanging](%%jQueryApiUrl%%/ui.igDialog#events:stateChanging) | Event is raised before the state of dialog was changed. | True
[stateChanged](%%jQueryApiUrl%%/ui.igDialog#events:stateChanged) | Event is raised after the state of dialog was changed. | False
[animationEnded](%%jQueryApiUrl%%/ui.igDialog#events:animationEnded) | Event is raised after the end animation, when the dialog was closed or opened. | False
[focus](%%jQueryApiUrl%%/ui.igDialog#events:focus) | Event is raised when the dialog or its content gets focus. | False
[blur](%%jQueryApiUrl%%/ui.igDialog#events:blur) | Event is raised when the dialog or its content loses focus. | False



## <a id="attaching-handlers"></a> Attaching Event Handlers in jQuery and MVC

### <a id="attaching-handlers-jquery"></a> Attaching Event Handlers in jQuery

To attach to an event, just define a handler for it in the same way you define a property. Now if the event is triggered, the handler will be called.

**In JavaScript:**

```js
$("#igDialog1").igDialog({
      stateChanging: function (e, args) {
           // Handle event  
      }
});
```

The following example shows how this is done and it also demonstrates the use of the jQuery's [`on`](http://api.jquery.com/on/) method to attach an event handler to a selected element:

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/dialog-window/api-and-events](%%SamplesEmbedUrl%%/dialog-window/api-and-events)
</div>

### <a id="attaching-handlers-mvc"></a> Attaching Event Handlers in MVC

When you attach a handler in MVC, use the jQuery User Interface (UI) pattern for attaching handlers to widget events. This means you should use jQuery’s [`on`](http://api.jquery.com/on/), [`bind`](http://api.jquery.com/bind/) or [`live`](http://api.jquery.com/live/) functions and pass the event’s name to them. The event name should be a lowercase string that is a concatenation of the name of the control and the event. You can do the same with the jQuery widget as well, but this would not be necessary because you can attach the event handlers directly when initializing the control. For more information, see the [jQuery widget factory](http://wiki.jqueryui.com/w/page/12138135/Widget%20factory). The code bellow demonstrates how to attach handlers to igDialog events when implementing a MVC solution.

**In JavaScript:**

```js
$("#igDialog1").live({ igdialogstatechanging: function (e, args) {
     // Handle event  
}});
```

> **Note:** The jQuery [`live`](http://api.jquery.com/live/) function is used in case some DOM elements are added after attaching the event to the handler.

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Property Reference (*igDialog*)](igDialog-Property-Reference.html): The topic that introduces the user to the `igDialog` control’s properties.
- [Method Reference (*igDialog*)](igDialog-Method-Reference.html): The topic that introduces the user to the `igDialog` control’s methods.
- [CSS Classes Reference (*igDialog*)](igDialog-Css-Classes-Reference.html): The topic that introduces the user to the `igDialog` control’s CSS classes.

