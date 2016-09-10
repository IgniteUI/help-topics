<!--
|metadata|
{
    "fileName": "igvalidator-overview",
    "controlName": ["igValidator"],
    "tags": ["Getting Started", "Validation", "ASP.NET MVC"]
}
|metadata|
-->

# igValidator Overview

The `igValidator` control provides new look and feel compared to the previous one. It is designed to be easy to use with any form element and our existing components such as editors, combo box and other components for collecting user input. This control takes advantage to the notification widget design and use its visualizations to display the necessary success and error messages.

### In this topic

- [Introduction](#introduction)
- [Setting up the igValidator](#setting-up)
- [Validation triggers](#triggers)
- [Validation rules](#validation-priority)
- [ASP.NET MVC and Data Annotations](#mvc-annotations)
- [Related Content](#related-content)

## <a id="introduction"></a> Introduction

The main purpose of the `igValidator` control is to inform the end user for the passed and failed validation immediately by default. This means that when a user blur the editor's input a feedback message is immediately displayed giving useful information about the state in which the editor is in. For example it can display messages that indicate whether the current field is required or not and whether the user filled the input with the expected type of data.

The `igValidator` supports different [configurations](#setting-up) and multiple [validation rules](#validation-priority) with messages for both success and error. The messages can be either placed in a predefined [`messageTarget`](%%jQueryApiUrl%%/ui.igValidator#options:messageTarget) or handed off to the `igNotifier` widget. In the latter case if the user data fails a validation rule the specific input is colored in red to indicate that something went wrong with the current interaction along with showing a notification.

Optionally you can use the `requiredIndication` property to hint in advance which form elements are required. There is also an `optionalIndication` property that indicates a particular field is optional.

The whole list of the `igValidator` options can be found in the [igValidator API](%%jQueryApiUrl%%/ui.igvalidator)

## <a id="setting-up"></a> Setting up the igValidator

The validator control can be configured independently on one or multiple targets (fields) or as an integrated part of the supported Ignite UI controls - Editors, Combo and Rating. It possesses plenty of options which allows you to customize and configure this control corresponding to your needs.

### Configuring from other Ignite UI controls

```html
<div id="textEditor"></div>
```
```js
$('#textEditor').igTextEditor({
  inputName: "pass",
  textMode: "password",
  validatorOptions: {
    required: true,
    onblur: true,
    lengthRange: [6, 20],
    requiredIndication: true
  }
});
```

![](images/igValidator.png)

> **Note:** When configured from an Editor control the validator does not support an additional `fields` collection.

### Standalone igValidator on one field
The following example demonstrates a basic usage with a single target filed. Targets can be any HTML form element as well as our specific editor controls and the combo.

```html
<div id="validator"></div>
```

```js
$('#validator').igTextEditor();

$('#validator').igValidator({
  required: true,
  onblur: true,
  requiredIndication: true
});
```

### Standalone igValidator with multiple fields
The control supports a [`fields`](%%jQueryApiUrl%%/ui.igvalidator#options:fields) collection describing each field with validation options and a selector. Fields must provide a valid jQuery [`selector`](%%jQueryApiUrl%%/ui.igvalidator#options:fields.selector) and can contain any of the validation rules and triggers, but not other fields or event handlers. Rules from the main options level will also be inherited by fields if no such option is provided.

```html
<form id="validationForm">
    <fieldset>
        <h4> Feedback form</h4>
        <p> Enter your name: (Validation onsubmit, required)</p>
        <input type="text" id="grpEdit1"></input>
        <p> Enter date: (Validation onblur, not required on submit)</p>
        <input type="text" id="grpEdit2"></input>
        <p> Give us rating: ( Validation onsubmit, minimum value = 1.5) </p>
        <div id="rating"></div>
        <p> Subscribe for free samples : (Validation onsubmit,required)</p>
        <div id="igCheckboxEditor"></div>
        <br>
        <input type="submit" value="Submit"></input>
    </fieldset>
</form>
```

```js
$("#rating").igRating({
		precision : "half",
		valueAsPercent : false
	});
	$("#igCheckboxEditor").igCheckboxEditor();

	$('#validationForm').igValidator({
		required : true, //inherited
		fields : [{
				selector : "#grpEdit1",
				onblur : false // override default
			}, {
				selector : "#grpEdit2",
				date : true,
				required : false, // override
				onchange : true
			}, {
				selector : "#rating",
				successMessage : "Thanks!",
				onchange : true,
				valueRange : {
					min : 1.5,
					errorMessage : "At least 1.5 stars required (custom message)"
				},
				notificationOptions : {
					mode : "popover"
				}
			}, {
				selector : "#igCheckboxEditor",
				onchange : true
			}
		]
	});
```

> **Note:** Both standalone configurations support fields enhanced with Ignite UI Editor controls, however they must be initialized in advance for the validator to discover and handle them correctly. In case the timing cannot be controlled and the validator is initialized before other control(s) the [`updateField`](%%jQueryApiUrl%%/ui.igvalidator#methods:updateField) method can be used to update that field in the validator.


## <a id="triggers"></a> Validation triggers

Triggers allow specifying when validation should be performed and include three settings - [`onchange`](%%jQueryApiUrl%%/ui.igValidator#options:onchange), [`onblur`](%%jQueryApiUrl%%/ui.igValidator#options:onblur)  and [`onsubmit`](%%jQueryApiUrl%%/ui.igValidator#options:onsubmit). These options resemble the native DOM events that they relay to and allow to control how often should the value be checked based on standard user interactions. By default only `onchange` is disabled to accommodate most common scenarios. Note that the `onsubmit` trigger will have no effect unless there's a parent form for the target input or the validator is initialized on the form itself.

### <a id="threshold"></a> Threshold
While the [`threshold`](%%jQueryApiUrl%%/ui.igValidator#options:threshold) option is not technically a validation trigger, it is still an integral part of the validation cycle. When set, if the **length** of the value is less than the threshold then none of the validation rules will be run. This is most useful in scenarios where there's no value in showing an error message too early (for example when `onchange` is enabled) as the value cannot realistically fulfil the requirements under a certain length.

> **Note:** Using the [`isValid`](%%jQueryApiUrl%%/ui.igvalidator#methods:isValid) and [`validate`](%%jQueryApiUrl%%/ui.igvalidator#methods:validate) methods or validation on submit will ignore the threshold option. This allows required fields to properly prevent submitting for example. API methods will also ignore trigger conditions.


## <a id="validation-priority"></a> Validation rules

The `igValidator` rules define a number of conditions for a value to be accepted and in some scenarios you might need to use multiple rules on a single input in order to validate upon different criteria. On a single input the rules are executed per validation and in a particular order. 

Default validation rules include (by priority):

1.	Required
2.	Infragistics' editor (optional)
3.	Number
4.	Date
5.	LengthRange
6.	ValueRange
7.	EqualsTo
8.	Email
9.  Credit Card
10.	Pattern (regular expression)
11.	Custom function

For detailed information for each rule, refer to the [**Validation Rules topic**](igValidator-Validation-Rules.html).


## <a id="mvc-annotations"></a> ASP.NET MVC and Data Annotations

To setup a validator in ASP.NET MVC the Infragistics HTML Helper [Validator()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.InfragisticsSuite`1~Validator().html) extension can be used:

**In Razor:**
```csharp
	@(Html.Infragistics().Validator()
		.ID("firstName")
		.Required(true)
		.Render())
```
The helper can also be initialized with an [ValidatorModel](Infragistics.Web.Mvc~Infragistics.Web.Mvc.ValidatorModel.html). Model properties and helper methods follow the jQuery API of the control as closely as possible.  

Besides configuring the validator through the dedicated wrapper, when using strongly-typed editors the Model will be automatically inspected for Data Annotations and the appropriate validation rules and their messages will be added to the control configuration. Additionally, the [ValidatorOptions()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.BaseEditorWrapper`2~ValidatorOptions.html) helper method can still be used to add or override rules.

For a step-by-step guide please refer to the [Configuring ASP.NET MVC Validation (Editors)](Configuring-ASP.NET-MVC-Validation.html) topic.

## <a id="related-content"></a> Related Content

- [Validator Overview Sample](%%SamplesUrl%%/validator/overview)
- [Data Annotation Validation Sample](%%SamplesUrl%%/editors/data-annotation-validation)
-	[igValidator jQuery API](%%jQueryApiUrl%%/ui.igValidator)
