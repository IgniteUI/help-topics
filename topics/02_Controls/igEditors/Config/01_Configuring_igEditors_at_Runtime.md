<!--
|metadata|
{
    "fileName": "configuring-igeditors-at-runtime",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Configuring igEditors at Runtime



##Topic Overview


###Purpose


The topic explains how to handle events and set options for `igEditor` based controls.

###In this topic


This topic contains the following sections:

-   [Binding to events and setting options](#_Binding_to_events_and_setting_options)
    -   [Bind events on initialization](#_Bind_events_on_initialization)
    -   [Set options on initialization](#_Set_options_on_initialization)
    -   [Bind events after initialization](#_Bind_events_after_initialization)
    -   [Set options after initialization](#_Set_options_after_initialization)
-   [Related Topics](#_Related_Topics)

###Requirements


#### General requirements

-   jQuery-specific requirements
-   An HTML web page where %%ProductName%% controls are instantiated.
-   MVC-specific requirements
-   An MVC project in Microsoft Visual Studio®
-   A reference to the Infragsitics.Web.Mvc dll (contains the ASP.NET MVC helper)

#### Scripting requirements

-   The required scripts for both jQuery and ASP.NET MVC are the same because the helpers render similar JavaScript as the jQuery widget. You will need:

	1.  The jQuery core library script
	2.  The jQuery UI library
	3.  The required %%ProductName%% script files for the editors on your page

##<a id="_Binding_to_events_and_setting_options"></a>Binding to events and setting options

There are two main ways to bind events and set options for the `igEditor` controls – during control initialization and during runtime.

###<a id="_Bind_events_on_initialization"></a>Bind events on initialization


#### Overview

When binding to events on initialization of the widget you subscribe to the event using an option which takes the form of: `eventName:<handler>`. In the following example, the event handler function is implemented inline, but you can also assign the event handler to the name of a function to implement the handler outside of the control initialization.

####Examples


##### igCurrencyEditor


The following example attaches an event handler to the blur event of the `igCurrencyEditor` control.



**In Javascript:**

```js
$("#currencyeditor").igCurrencyEditor({	
    blur: function (evt, ui) {	
        // Handle event
    }
});
```

###<a id="_Set_options_on_initialization"></a>Set options on initialization


#### Overview

When setting an option on initialization of the widget use standard JSON syntax which includes *`optionName: <value>`* while separating the different option setting with a comma.

#### Examples

##### igNumericEditor



The following example initializes the `igNumericEditor` control and sets the default value and maximum value of the control using an options JSON object.



**In Javascript:**

```js
$("#numericeditor").igNumericEditor({
    value: 20,
    maxValue: 100
});
```

###<a id="_Bind_events_after_initialization"></a>Bind events after initialization


#### Overview

 There are a number of different approaches are supported by jQuery for handling events. Depending on your situation you may choose to use the `bind()`, `live()`, `delegate()` or `on()` functions to wire event handlers to a widget's events.

The following list discusses the details of each function:

-	**bind**:Attaches an event handler to existing DOM elements that match a given selector.

-	**live**: Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do not propagate up the DOM tree.

-	**delegate**: Attaches an event handler to existing and any new DOM elements that match a given selector. Event handlers do propagate up the DOM tree.

-	**on**: Attaches an event handler to existing and any new DOM elements that match a given selector. (The delegate function is obsolete in jQuery version 1.7, making on the preferred approach for establishing event handlers.)



When using `bind()`, keep in mind that it attaches the specified handler only on the currently available elements, which means dynamically added items (after the DOM is loaded) aren't included in the event handler assignments. The `delegate()` function is a newer version of `live()` and it has improved performance over `live()`.

>**Note**: As of jQuery version 1.7 `on()` and `one()` functions are available as preferred replacements for `delegate()`.

When using any of the prescribed jQuery event wiring functions make sure to adhere to the jQuery UI event naming conventions. For instance the jQuery UI widget factory adds the name of the widget as a prefix of the event name.

Since the collection `igEditor` controls (e.g. `igNumericEditor`, `igCurrencyEditor`, etc.) are pre-configured instances of the `igEditor` base control, event names are concatenated using the “*igeditor*” prefix instead of a name more specific to the type of control you are instantiating. For instance to subscribe to the focus event of an editor, you must subscribe to “*igeditorfocus*” rather than “*igcurrencyeditorfocus*” (or any other control name variation).

Therefore for example if want to attach to the “columnhiding” event of the “*iggridhiding*” widget, the event name becomes, “`iggridhidingcolumnhiding`”.

#### Examples

##### igTextEditor



The following example instantiates an `igTextEditor` control using the ASP.NET MVC helper and then subscribes to the focus event once the control is initialized.
 



Begin by instantiating the editor in the view.

**In HTML:**

```html
<%= Html.Infragistics().TextEditor()
     .ID("texteditor")
     .Width(200)
     .Render()
%>
```

Next, subscribe to the focus event using `bind()`.

**In Javascript:**

```js
$("#texteditor").bind(‘igeditorfocus’, function (evt, ui) {
    // Handle event
});
```

##### igDateEditor



The following example instantiates an `igDateEditor` using the ASP.NET MVC helper then subscribes to the focus event after initialization.



Begin by instantiating the `igTextEditor` control in the view.

**In HTML:**

```html
<%= Html.Infragistics().DateEditor()
        .ID("dateeditor")
        .Width(200)
        .Render()
%>
```

Next, subscribe to the focus event using `bind()`.

**In Javascript:**

```js
$("#dateeditor").bind(‘igeditorfocus’, function (evt, ui) {
    // Handle event
});
```

###<a id="_Set_options_after_initialization"></a>Set options after initialization


#### Overview

In order to manipulate an option after initialization, you access the control created upon initialization and change option values. Changing option follow this syntax:

```
$(‘#inputFieldID’).igTextEditor (‘option’, <option name>,<option  value>);
```

The ASP.NET MVC helper internally renders an `igEditor` control. So your code should look like this:

```
$(‘#inputFieldID’).igEditor (‘option’, <option name>,<option value>);
```

When using the widget on the client at runtime you should also use the `igEditors` client widget to access any member of the widget.

>**Note**: The practice of accessing of accessing controls using the `igEditor` function to set options applies for all editor controls.

#### Examples

##### igMaskEditor



The following example instantiates an `igMaskEditor` control with the ASP.NET MVC helper and then changes the input mask after initialization.



Begin by instantiating the `igMaskEditor` control in the view.

**In HTML:**

```html
<%= Html.Infragistics().MaskEditor()
      .ID("maskeditor")
      .Width(200)
      .Render()
%>
```

Next, set the `inputMask` option by calling the `igEditor` function.

**In Javascript:**

```js
$("#maskeditor").igEditor('option', 'inputMask', ‘CCCCCCCCCC’);
```

##### igPercentEditor



The following example instantiates an `igPercentEditor` control using the ASP.NET MVC helper and changes the maximum decimals after initialization.
 



Begin by instantiating the `igMaskEditor` control in the view.

**In HTML:**

```html
<%= Html.Infragistics().PercentEditor()
       .ID("percenteditor")
       .Width(200)
       .Render()
%>
```

Next, Set the `maxDecimals` option using the `igEditor` function.

**In Javascript:**

```js
$("#percenteditor").igEditor('option', 'maxDecimals', 10);
```

##<a id="_Related_Topics"></a>Related Topics


-   [Using Events in %%ProductName%%](Using-Events-in-NetAdvantage-for-jQuery.html)

 

 


