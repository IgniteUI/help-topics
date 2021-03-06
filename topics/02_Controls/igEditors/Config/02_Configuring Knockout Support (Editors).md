﻿<!--
|metadata|
{
    "fileName": "configuring-knockout-support-(editors)",
    "controlName": "igEditors",
    "tags": ["Data Binding","Data Presentation","Editing"]
}
|metadata|
-->

# Configuring Knockout Support



##Topic Overview


### Purpose

This topic explains how to configure %%ProductName%%® editor controls to bind to View-Model objects using the Knockout library.

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.


**Topics**


-	[igTextEditor Overview](igTextEditor-Overview.html): This topic introduces the `igTextEditor`™ control and provides some basic instantiation examples.

-	[igNumericEditor Overview](igNumericEditor-Overview.html): This topic introduces the `igNumericEditor`™ control and provides some basic instantiation examples.

-	[igDateEditor Overview](igDateEditor-Overview.html): This topic introduces the `igDateEditor`™ control and provides some basic instantiation examples.

-	[igCurrencyEditor Overview](igCurrencyEditor-Overview.html): This topic introduces the `igCurrencyEditor`™ control and provides some basic instantiation examples.

-	[igPercentEditor Overview](igPercentEditor-Overview.html): This topic introduces the `igPercentEditor`™ control and provides some basic instantiation examples.

-	[igMaskEditor Overview](igMaskEditor-Overview.html): This topic introduces the `igMaskEditor`™ control and provides some basic instantiation examples.

-	[igCheckboxEditor Overview](igCheckboxEditor-Overview.html): This topic introduces the `igCheckboxEditor`™ control and provides some basic instantiation examples.

-	[igDatePicker Overview](igDatePicker-Overview.html): This topic introduces the `igDatePicker`™ control and provides some basic instantiation examples.

-	[igTimePicker Overview](igTimePicker-Overview.html): This topic introduces the `igTimePicker`™ control and provides some basic instantiation examples.


**External Resources**

-   [Knockout Interactive Tutorials](http://learn.knockoutjs.com/)



### In this topic

This topic contains the following sections:

-   [Introduction](#_Introduction)
-   [Code Examples](#_Code_Examples)
-   [Code Example: Configuring Value Binding for Editor Controls](#_Configuring_Value_Binding_for_Editor_Controls)
    -   [Configuring an Input Mask (igMaskEditor)](#_Configuring_an_Input_Mask)
    -   [Configuring a Scaling Factor (igPercentEditor)](#_Configuring_a_Scaling_Factor)
    -   [Complete code example](#complete-sample)
-   [Code Example: Configuring Immediate Update Mode (igTextEditor)](#_Configuring_Immediate_Update_Mode)
-   [Code Example: Configuring Editors Disable Handler (igTextEditor)](#_Configuring_Disable_Handler)
-   [Related Content](#_Related_Content)
    -   [Topics](#_Topics)
    -   [Resources](#_Resources)



##<a id="_Introduction"></a>Introduction


### Knockout support summary

The support for the Knockout library in %%ProductName%% editor controls is intended to provide easy means for developers to use the Knockout library and its declarative syntax to instantiate and configure %%ProductName%% editors.

The Knockout support is implemented as a Knockout extension which is invoked initially when Knockout bindings are applied to a page and during the page life when external updates to the View-Model happen. You can specify any of the editor control options that have relevance for your business case in the data-bind attribute.


##<a id="_Code_Examples"></a>Code Examples


### Code examples summary

The following table lists the code examples included in this topic.


-	 [Configuring Value Binding for Editor Controls](#_Configuring_Value_Binding_for_Editor_Controls) : This example shows how to bind the value option of %%ProductName%% editor controls to a View-Model object using the Knockout declarative syntax.
    -	[Configuring an Input Mask (igMaskEditor)](#_Configuring_an_Input_Mask) : This example shows how to bind an `igMaskEditor`™ to a View-Model object using the Knockout declarative syntax.
    -	[Configuring a Scaling Factor (igPercentEditor)](#_Configuring_a_Scaling_Factor): This example shows how to bind an `igPercentEditor`™ to a View-Model object using the Knockout declarative syntax.
    -	[Complete code example](#complete-sample): This sample demonstrates binding %%ProductName%% Editor controls to data managed by Knockout data bindings.

-	[Code Example: Configuring Immediate Update Mode (igTextEditor)](#_Configuring_Immediate_Update_Mode): This example shows how to instantiate an `igTextEditor` control and configure updates on every key stroke.





## <a id="_Configuring_Value_Binding_for_Editor_Controls"></a>Code Example: Configuring Value Binding for Editor Controls

This example shows how to bind the value option of %%ProductName%% editor controls to a View-Model managed by Knockout. It is shown in the context of `igTextEditor`, `igNumericEditor`, `igCurrencyEditor` and `igDateEditor` controls. Using the declarative syntax of Knockout, the controls are instantiated from data-bind attribute of input elements and bound to View-Model observable properties.

#### Code

The code snippet below shows a View-Model object that declares observable properties managed by Knockout.

**In JavaScript:**

```js
var viewModel = {
    orderDate: ko.observable(new Date(2017, 0, 21)),
    dueInDays: ko.observable(7),
    customerName: ko.observable("Peter Sanders"),
    contactPhone: ko.observable("(318) 555-6879"),
    advancePayment: ko.observable(516.89),
    discountPercent: ko.observable(8)
};
```

The following code snippet shows how to apply the declared Knockout bindings to the page. Note that the `ko.applyBindings()` call is made within the ready callback of the Loader. This is necessary because the %%ProductName%% editor extensions for Knockout need to be loaded into the page before the bindings are applied.

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: "http://localhost/ig_ui/js/",
    cssPath: "http://localhost/ig_ui/css/",
    resources: "igEditors,extensions/infragistics.ui.editors.knockout-extensions.js",
    ready: function () {
        ko.applyBindings(viewModel);
    }
});
```

The following code snippet shows how to declare binding options for editor controls in your view. The most important part is the declaration of the instantiation options in the data-bind attribute of the corresponding input elements.

**In HTML:**

```html
<!-- date editor -->
<input data-bind="igDateEditor: { value: orderDate }"/>
<!-- numeric editor -->
<input data-bind="igNumericEditor: { value: dueInDays }"/>
<!-- text editor -->
<input data-bind="igTextEditor: { value: customerName }"/>
<!-- currency editor -->
<input data-bind="igCurrencyEditor: { value: advancePayment }"/>
```

### <a id="_Configuring_an_Input_Mask"></a> Configuring an Input Mask (`igMaskEditor`)

This example shows how to bind an `igMaskEditor` control to a View-Model object managed by Knockout. Using the declarative syntax of Knockout an `igMaskEditor` is instantiated from a data-bind attribute of an input element and bound to an observable property of a View-Model. The `inputMask` option of the editor is configured also in order to limit user input according to a certain pattern.

#### Code

The code snippet below instantiates an `igMaskEditor` control. The control is bound to the `contactPhone` observable property of the View-Model object. In addition the `inputMask` option of the mask editor is set to a mask representing phone numbers.

**In HTML:**

```html
<!-- mask editor -->
<input id="contactPhoneIG" class="row-control" data-bind="igMaskEditor: { 
        value: contactPhone,
        inputMask: '(000) 000-0000'
    }"/>
```



### <a id="_Configuring_a_Scaling_Factor"></a> Configuring a Scaling Factor (`igPercentEditor`)

This example shows how to bind an `igPercentEditor` to a View-Model object managed by Knockout. Using the declarative syntax of Knockout the `igPercentEditor` is instantiated from a data-bind attribute of an input element and bound to a View-Model observable property. The `displayFactor` option of the editor is configured also in order to scale the underlying View-Model value to a proper percentage input.

#### Code

The code snippet below instantiates an `igPercentEditor` control. The control is bound to the `discountPercent` observable property of the View-Model object. In addition the `displayFactor` option of the editor is set to 1 in order to scale properly the numeric value in `discountPercent`.

**In HTML:**

```html
<!-- percent editor -->
<input id="discountPercentIG" class="row-control" data-bind="igPercentEditor: { 
        value: discountPercent, 
        displayFactor : 1 
    }"/>
```

### <a id="complete-sample"></a> Complete code example

This sample demonstrates binding %%ProductName%% Editor controls to data managed by Knockout data bindings:

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/editors/bind-editors-with-ko](%%SamplesEmbedUrl%%/editors/bind-editors-with-ko)
</div>


##<a id="_Configuring_Immediate_Update_Mode"></a>Code Example: Configuring Immediate Update Mode (`igTextEditor`)

This example shows how to bind the value option of %%ProductName%% editor control to a View-Model, managed by Knockout and configure the control to update the View-Model on every keystroke. By default, any edits in an %%ProductName%% editor control are sent to the View-Model when the control loses focus i.e. when `onBlur` event occurs. The following code snippet demonstrates how to set the `updateMode` of the `igTextEditor` Knockout extension to `immediate`. This allows the editor to update the View-Model on each keystroke or when an input text change occurs.

### Code

Following is the code that implements this example.

**In HTML:**

```html
<div data-bind="igTextEditor: { 
        value: customerName, 
        updateMode: 'immediate' 
    }"></div>
```

>**Note:** The update mode option can be configured only on initialization. It cannot be changed at run-time.

##<a id="_Configuring_Disable_Handler"></a>Code Example: Configuring Editors Disable Handler (igTextEditor)

If a developer wants to apply the Knockout [`disabled`](http://knockoutjs.com/documentation/disable-binding.html) binding handler this will not automatically enables/disables the editors, because they has a special logic that handles enabling/disabling the control. For that puprose an additional `igEditorDisable` binding handler is created. The following code demonstrates how to declare the `igEditorDisable` binding: 

**In JavaScript:**

```js
function viewModel() {
    this.isDisabled =  ko.observable(false);
}
```

**In HTML:**

```html
<div data-bind="igTextEditor: { ...}, igEditorDisable: isDisabled"></div>
```

##<a id="_Related_Content"></a>Related Content


###<a id="_Topics"></a> Topics

The following topics provide additional information related to this topic.


-	[Configuring Knockout Support (igCombo)](igCombo-KnockoutJS-Support.html) : This topic explains how to configure the `igCombo`™ control to bind to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).



###<a id="_Resources"></a> Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.


-	[Knockout](http://knockoutjs.com/): This is the home page of the Knockout library. The library contains complete documentation and samples.





 

 


