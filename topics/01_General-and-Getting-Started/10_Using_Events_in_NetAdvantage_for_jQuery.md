<!--
|metadata|
{
    "fileName": "using-events-in-netadvantage-for-jquery",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Using Events in Ignite UI

##Topic Overview


### Purpose

This topic demonstrates how to handle events raised by Ignite UI™ controls. Also included is an explanation of the differences between binding events on initialization and after initialization.

### In this topic

This topic contains the following sections:

-   [Binding to events](#_Binding_to_events)
   -   [Binding to events on initialization](#_Binding_to_events_on_initialization)
    -   [Binding to events after initialization](#_Binding_to_events_after_initialization)
-   [Related Topics](#_Related_Topics)
-   [Related Samples](#_Related_Samples)

##Requirements


### General requirements

-   jQuery-specific requirements
-   An HTML web page where Ignite UI controls are instantiated.
-   MVC-specific requirements
-   An MVC project in Microsoft Visual Studio® with an igGrid bound to a data source
-   A reference to the Infragistics.Web.Mvc.dll (contains the ASP.NET MVC wrappers)

> **Note:** Events are raised only by user interactions. API method calls do not raise events.

### Scripting requirements

-   The required scripts for both jQuery and MVC approach are the same because the MVC wrappers render similar JavaScript as the jQuery widget. You will need:
	1.  The jQuery core library script
	2.  The jQuery UI library
	3.  The required Ignite UI script files for the widgets used on your page

The following code demonstrates the scripts as added to the HTML document.

**In HTML:**

```html
<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="jquery-ui.js"></script>
<script type="text/javascript" src="infragistics.core.js"></script>
<script type="text/javascript" src="infragistics.lob.js"></script>
<script type="text/javascript" src="infragistics.dv.js"></script>
```

## <a id="_Binding_to_events"></a>Binding to events


There are two main ways to bind to grid events

### <a id="_Binding_to_events_on_initialization"></a>Binding to events on initialization

When binding to events on initialization of the widget you subscribe to the event using an option which takes the form of: *eventName:&lt;handler&gt;*. In the following example, the event handler function is implemented inline, but you can also assign the event handler to the name of a function to implement the handler outside of the control initialization.

### Examples

#### igGrid

In the following example, the `igGrid` control is instantiated with the Hiding feature enabled and an event handler specified for the `columnHiding` event.


##### Code:

**In Javascript:**

```js
<script type="text/javascript">
$("#grid1").igGrid({
    features: [
    {
        name: 'Hiding',
              columnHiding: function (e, args) {
              // Handle event  
       }]
});
</script>
```

#### igCombo


The following example shows how to handle the `selectionChanging` event of the `igCombo` control.

##### Code:

**In Javascript:**

```js
<script type="text/javascript">
     $(function () {
          $("#comboTarget").igCombo({
                           selectionChanging: function (e, args) {
                           // Handle event  
                           }
          });
      });
</script>
```

#### igTextEditor

The following example shows how to instantiate a text editor and bind to its `valueChanged` event.

##### Code:

**In Javascript:**

```js
<script type="text/javascript">
$('#editorContainer').igTextEditor({
    width: 200, 
    valueChanged: function(e, args){
        //Handle event
    }
})
</script>
```

## <a id="_Binding_to_events_after_initialization"></a>Binding to events after initialization


### Overview
There are a number of different approaches are supported by jQuery for handling events. Depending on your situation, you may choose to use the [bind()](http://api.jquery.com/bind/), [live()](http://api.jquery.com/live/), [delegate()](http://api.jquery.com/delegate/) or [on()](http://api.jquery.com/on/) functions to wire event handlers to a widget's events.

The following table discusses the details of each function:



- [bind](http://api.jquery.com/bind/): Attaches an event handler to existing DOM elements that match a given selector.

- [live](http://api.jquery.com/live/): Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do not propagate up the DOM tree.

- [delegate](http://api.jquery.com/delegate/): Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do propagate up the DOM tree.

- [on](http://api.jquery.com/on/): Attaches an event handler to existing and any new DOM elements that match a given selector. (The delegate function is obsolete in jQuery version 1.7, making on the preferred approach for establishing event handlers.)



When using `bind()`, keep in mind that it attaches the specified handler only on the currently available elements, which means dynamically added items (after the DOM is loaded) aren't included in the event handler assignments. The `delegate()` function is a newer version of `live()` and it has improved performance over `live()`.

>**Note**: As of jQuery version 1.7 `on()` and `one()` functions are available as preferred replacements for `delegate()`.

When using any of the prescribed jQuery event wiring functions make sure to adhere to the jQuery UI event naming conventions. For instance the jQuery UI widget factory adds the name of the widget as a prefix of the event name. Therefore if want to attach to the “*columnhiding*” event of the *“iggridhiding”* widget, the event name becomes, “*iggridhidingcolumnhiding*”.

>**Note:** The Ignite UI API documentation includes a full list of each control's available options, methods and events.

>**Note:** When using the *igEditor* controls with the ASP.NET MVC wrapper, the wrapper always instantiates the igEditor control with its type option set according to the widget you want to instantiate. When using live, bind or delegate you must pass – “igeditor” + “eventName”

In the following examples there are separate sections each for the bind and unbind of an event.

### Examples

#### igGrid

- ***Bind:***

 The following code instantiates an `igGrid` control, enables auto-generation of columns and binds to a data source. 
 
 ###### Code:
 Instantiate `igGrid` in MVC

 **In HTML:**

	```html
	<%= Html.Infragistics().Grid(Model). ID("grid1")
        .AutoGenerateColumns(true)
        .Features(feature =>{
            feature.Hiding());
            }).DataBind()
        .Render()
    %>
	```

 Next, the existing grid instance is updated to include an event handler for the `columnHiding` event which points to a separate function that implements the handler.
 
 **In Javascript:**

	```js
	$("#grid1").live("iggridhidingcolumnhiding", gridColumnHiding);
	```
 
 The following is a stub for the event handler function.
 
 **In Javascript:**

	```js
	<script type="text/javascript">        
	    function gridColumnHiding (evt, ui) {
	        // Handle event        
	     };   
	</script>
	```

- ***Unbind:***

 ###### Introduction

 This snippet shows how to unsubscribe from an established event subscription. For the purpose of the following code snippet, reuse the code above to attach to the `columnHiding` event and then use the die function to disassociate the event handler.

 > **Note**: If you need and event handler invoked only once, the best way to do that is to use `one()` function which unsubscribes the event handler after the first time the event is invoked.

 ###### Code:

 **In Javascript:**

	```js
	<script type="text/javascript">        
		$("#grid1").die("iggridhidingcolumnhiding");
	</script>
	```

#### igCombo

- ***Bind***

 In the code below we’ll attach to `selectionChanging` event of the `igCombo`

 ###### Code:

 **In HTML:**

	```html
	<%= Html.
        Infragistics().
        Combo().
        ID("comboProducts").
        Width("150px").
        DataSource(new List<string>() 
            { "Item1", "Item2", "Item3" }).
        SelectedIndexes(new int[] { 0 }).
        DataBind().
        Render()
    %>
	```

 **JavaScript:**

	```js
	$("#comboProducts").live('igcomboselectionchanging', function (e, args) {
		// Handle event
    });
	```


- ***Unbind:***

 This code snippet demonstrates how to unsubscribe from event already attached using the approach from the sample above.

 ###### Code:

 **JavaScript:**

	```js
	$("#comboProducts").die('igcomboselectionchanging');
	```


#### igTextEditor

- ***Bind:***

 ######Introduction

 This sample `igTextEditor` is instantiated in a MVC context and is bound to the `valueChanged` event. When using ASP.NET MVC helpers to instantiate controls which inherit from the `igEditor` control, the render method generates an `igEditor` control with the appropriate type value to configure the right editor. Therefore, when binding or unbinding to an event the “igeditor” prefix is required.

 ######Code:

 Instantiate `igTextEditor`

 **In HTML:**

	```html
	<%= Html.Infragistics().TextEditor()
          .ID("textEditor")
          .Width(150)
          .Render()
    %>
	```

 Bind to `selectionChanged` event

 **JavaScript:**

	```js
	$("#textEditor").live('igedtorvaluechanged', function (e, args) {
    	// Handle event
    });
	```

- ***Unbind:***

 The following code shows demonstrates how to unsubscribe from an event already attached using the approach from the sample above.

 ######Code:

 **JavaScript:**

    ```js
    $("#textEditor").die('igedtorvaluechanged');
    ```



## <a id="_Related_Topics"></a>Related Topics


-   [Configuring igEditors at Runtime](Configuring-igEditors-at-Runtime.html)
-   [igGrid Events](%%jQueryApiUrl%%/ui.iggrid#events)
-   [igCurrencyEditor Events](%%jQueryApiUrl%%/ui.igcurrencyeditor#events)
-   [igDateEditor Events](%%jQueryApiUrl%%/ui.igdateeditor#events)
-   [igEditor Events](%%jQueryApiUrl%%/ui.igeditor#events)
-   [igMaskEditor Events](%%jQueryApiUrl%%/ui.igmaskeditor#events)
-   [igNumericEditor Events](%%jQueryApiUrl%%/ui.ignumericeditor#events)
-   [igPercentEditor Events](%%jQueryApiUrl%%/ui.igpercenteditor#events)
-   [igTextEditor Events](%%jQueryApiUrl%%/ui.igtexteditor#events)
-   [igCombo Events](%%jQueryApiUrl%%/ui.igcombo#events)
-   [igDatePicker Events](%%jQueryApiUrl%%/ui.igdatepicker#events)
-   [igRating Events](%%jQueryApiUrl%%/ui.igrating#events)
-   [igTree Events](igtree-event-reference.html)
-   [igUpload Events](%%jQueryApiUrl%%/ui.igupload#events)
-   [igVideoPlayer Events](%%jQueryApiUrl%%/ui.igvideoplayer#events)

##<a id="_Related_Samples"></a>Related Samples


-   [Editing API and Events](%%SamplesUrl%%/grid/editing-api-events)
-   [Grid API and Events](%%SamplesUrl%%/grid/grid-api-events)
-   [Tree API and Events](igtree-event-reference.html#attaching-handlers-jquery)
-   [File Upload API and Events](%%SamplesUrl%%/file-upload/api-events)

 

 


