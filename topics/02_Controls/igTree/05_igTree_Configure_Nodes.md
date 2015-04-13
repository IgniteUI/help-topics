<!--
|metadata|
{
    "fileName": "igtree-configure-nodes",
    "controlName": "igTree",
    "tags": ["API","How Do I"]
}
|metadata|
-->

# Configure Nodes in igTree

## Topic Overview
### Purpose
This topic discusses how to configure nodes in the `igTree`™ control.

### In this topic
This topic contains the following sections:

-   [igTree Configuration Overview](#configuration-overview)
    -   [Control configuration chart](#control-configuration-chart)
-   [Expanding and collapsing nodes programmatically](#expanding-and-collapsing-nodes-programmatically)
    -   [Expand and collapse details](#expand-and-collapse-details)
    -   [Expand and collapse configuration settings](#expand-and-collapse-configuration-settings)
    -   [Example: expand a node that is in view](#example-expand-node)
    -   [Example: collapse a node](#example-collapse-node)
    -   [Example: expand all parent nodes of a child node](#example-expand-all-nodes)
    -   [Expand and collapse setting reference](#expand-and-collapse-setting-reference)
-   [Handling expand and collapse events](#handling-expand-and-collapse-events)
    -   [Expand and collapse event details](#expand-and-collapse-event-details)
    -   [Expand and collapse event configuration settings](#expand-and-collapse-event-configuration)
    -   [Example: configure the expansion events during instantiation](#example-configure-the-expansion-events)
    -   [Example: configure the collapse events using bind and live](#example-configure-the-collapse-events)
-   [Related Topics](#related-topics)

### Required background
The table below lists the required background you need for fully understanding the information in this topic.

You need to first read the [Getting Started with igTree](igTree-Getting-Started.html) topic.

**External Resources**

You need to first read the following articles:

- [jQuery bind() API](http://api.jquery.com/bind/)

- [jQuery live() API](http://api.jquery.com/live/)

## <a id="configuration-overview"></a>igTree Configuration Overview 
### <a id="control-configuration-chart"></a>Control configuration chart 
The table below lists the configurable screen elements and behaviors of the `igTree` control.

Configurable screen elements and behavior | Configuration details | Configuration properties
---|---|---
Expand and collapse nodes programmatically | You can expand and collapse nodes programmatically to respond to external operations. | expand <br> collapse <br> expandToNode
Handle expand and collapse events | You can handle events to perform other operations in your application in response to a node being expanded or collapsed. | nodeCollapsing  <br> nodeCollapsed <br> nodeExpanding <br> nodeExpanded


## <a id="expanding-and-collapsing-nodes-programmatically"></a>Expanding and collapsing nodes programmatically 
### <a id="expand-and-collapse-details"></a>Expand and collapse details 
There are times in your application when you may need to programmatically expand or collapse nodes. For instance when using a tree for navigation, there may be times when a user goes directly to a piece of content and the tree navigation should reflect where user has navigated. The following examples demonstrate how to programmatically work with the `igTree` control.

### <a id="expand-and-collapse-configuration-settings"></a>Expand and collapse configuration settings 
The table below maps the desired behaviors to property settings. The properties are accessed through the `igTree` control’s methods.

In order to… | Use this method: | And provide…
---|---|---
Expand a node that is in view | expand| node
Collapse a node | collapse | node
Expand all parent nodes of a child node| expandToNode | node

>**Note:** Each method accepts an instance of an `igTree` node to expand or collapse.

### <a id="example-expand-node"></a>Example: expand a node that is in view 
The code below demonstrates how to expand a node that is in the currently expanded parent node .

Property| Setting
---|---
expand|node

**In JavaScript:**

```js
$("#tree").igTree("expand", node);
```

### <a id="example-collapse-node"></a>Example: collapse a node 
The code below demonstrates how to collapse a node.

Property | Setting
---|---
collapse|node

**In JavaScript:**

```js
$("#tree").igTree("collapse", node);
```

### <a id="example-expand-all-nodes"></a>Example: expand all parent nodes of a child node 
When you may know that a node needs to be visible but it is nested within child levels of the `igTree` control. The code below demonstrates how to expand all parent nodes of the target node to bring it into view using the `expandToNode` view.

Property | Setting
---|---
expandToNode | Node

**In JavaScript:**

```js
$("#tree").igTree("expandToNode", node);
```

### <a id="expand-and-collapse-setting-reference"></a>Expand and collapse settings reference 
For detailed information about these methods, refer to their listing in the property reference section:

-   [igTree Options ](%%jQueryApiUrl%%/ui.igtree#options)

## <a id="handling-expand-and-collapse-events"></a>Handling expand and collapse events 
### <a id="expand-and-collapse-event-details"></a>Expand and collapse event details 
When you want to perform custom logic after a node is expanded or collapsed, you can use the events. Events that end in –ing occur prior to a node being expanded or collapsed and events ending in –ed occur after a node is expanded or collapsed.

### <a id="expand-and-collapse-event-configuration"></a>Expand and collapse event configuration settings 
The table below maps the desired behaviors to property settings. The properties are accessed through the `igTree` control methods.

In order to… | Use this event: | And set it to…
---|---|---
Handle and event before a node is expanded|nodeExpanding|function()
Handle an event after a node is expanded|nodeExpanded|function()
Handle an event before a node is collapsed|nodeCollapsing|function()
Handle an event after a node is collapsed|nodeCollapsed|function()

## <a id="example-configure-the-expansion-events"></a>Example: configure the expansion events during instantiation 
The `igTree` control events can be configured when the control is instantiating. The events are configured by setting a handler function that accepts the parameters for the event and UI arguments. This type of configuration is only available when configuring the control on the client. The code below demonstrates handling the expansion events as a result of the following settings:

Property|Setting
---|---
nodeExpanding|function(evt, ui)
nodeExpanded|function(evt, ui)

**In HTML:**

```html
$(function () {
    $("#tree").igTree({
        nodeExpanding: function (evt, ui) {
 
        },
        nodeExpanded: function (evt, ui) {
 
        }
    });
});
```

### <a id="example-configure-the-collapse-events"></a>Example: configure the collapse events using bind and live 
There are times when an event handler needs to be attached to the `igTree` after the tree is instantiated. Post-initialization event binding is the primary way events are configured when the `igTree` control is instantiated using the ASP.NET MVC helper. When using attaching event handlers after the control is instantiated, the event type is needed. Event types are determined by combining the widget name with the event name. The code below demonstrates how to configure events using the jQuery bind and live method:

Method| Parameters
---|---
bind()|“igtreenodecollapsing” function(evt, ui) { }
live()|“igtreenodecollapsed” function(evt, ui) { }

**In JavaScript:**

```js
$("#tree").bind("igtreenodecollapsing", function (evt, ui) {
 
});
 
$("#tree").live("igtreenodecollapsed", function (evt, ui) {
 
});
```

## <a id="related-topics"></a>Related Topics 
Following are some other topics you may find useful.

-   [Configuring Node Images with igTree](igTree-Configure-Node-Images.html)

 

 


