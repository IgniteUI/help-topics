<!--
|metadata|
{
    "fileName": "igcheckboxeditor-overview",
    "controlName": "igEditors",
    "tags": ["Editing","Getting Started"]
}
|metadata|
-->

# igCheckBoxEditor Overview

The Ignite UI check box editor, or "`igCheckBoxEditor`", is a control that renders a check box field which permits users to make a binary choice between one or multiple mutually exclusive options.

As the user interacts with the control the visual appearance is updated to give immediate feedback. The editor has two states and the check box works as a two-state toggle. One of the states reflects the checked solution and the other reflects the not checked solution.


![](images/igCheckBoxEditor_normal_size.png) 

## Adding igCheckBoxEditor to a Web Page

1.  To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html) help topic.

2.  On your HTML page or ASP.NET MVC View, reference the required JavaScript files, CSS files, and ASP.NET MVC assemblies.

    **In HTML:**

    ```html
    <link type="text/css" href="/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link type="text/css" href="/css/structure/infragistics.css" rel="stylesheet" />
    <script type="text/javascript" src="/Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/Scripts/infragistics.core.js"></script>
	<script type="text/javascript" src="/Scripts/infragistics.lob.js"></script>
    ```

    **In Razor:**

    ```csharp
    @using Infragistics.Web.Mvc;

    <link type="text/css" href="@Url.Content("~/css/themes/infragistics/infragistics.theme.css")" rel="stylesheet" />
    <link type="text/css" href="@Url.Content("~/css/structure/infragistics.css")" rel="stylesheet" />

    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-1.9.1.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-ui.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/infragistics.core.js")"></script>
	<script type="text/javascript" src="@Url.Content("~/Scripts/infragistics.lob.js")"></script>
    ```

3.  For jQuery implementations create an INPUT,a SPAN or a DIV as the target element in HTML. This step is optional for ASP.NET MVC implementations as the MVC wrapper creates the containing element for you.

	**In HTML:**
   	```html
    <input id="checkBoxEditor"  type="text"/>
	```

4.  Once the above setup is complete, initialize the check box editor. 

	> **Note:** For the ASP.NET MVC Views, the `Render` method must be called after all other options are set.

	**In Javascript:**
	```js
    <script type="text/javascript">
		$('#checkBoxEditor').igCheckboxEditor();
    </script>	
	```
	**In Razor:**
	```csharp
    @(Html.Infragistics().CheckBoxEditor()
       .ID("checkBoxEditor")
       .Render())
	```

5.  Run the web page to view the basic setup of the `igCheckBoxEditor` control.

## Keyboard Navigation

As most of the Infragistics' control the `igCheckBoxEditor` supports keyboard navigation. Essentially what you can do is use the 'Tab' key to focus the check box element and when the check box is focused you can use the 'space' key to toggle the check state of the control.

Press| To
---|---
<kbd>Tab key</kbd>|Focus the check box editor
<kbd>Space key</kbd>| Check or uncheck the editor  


## Specific properties

In this section we are going to pay attention to some of specific options for the `igCheckBoxEditor` and how to use them. 

Lets start with the value option. The `value` option sets the value of the input that is going to be used, when the form is submitted. What is more if this option is not set then the check box editor  begins to behave as a binary control with two states - true and false, depending on the check state.

Another property worth to mention is the `inputName`. If you don't set this property then the widget can be use only as a simple binary editor, but if you want to use the control in a submitting form a name attribute is required. There are two ways to set the name attribute. You can either use the `inputName` property or you can set the name attribute in the INPUT DOM element.   

## Related Links

-  

