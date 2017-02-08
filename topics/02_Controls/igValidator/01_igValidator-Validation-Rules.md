<!--
|metadata|
{
    "fileName": "igvalidator-validation-rules",
    "controlName": ["igValidator"],
    "tags": ["Validation"]
}
|metadata|
-->

# Validation Rules

The `igValidator` provides a number of built-in validation rules that define a certain criteria values must conform to - including type checks, range limits, regular expression pattern and custom function.

### In this topic
 - [Introduction](#intro)
 - [Rules order of execution](#rules-order)
    - [Required](#required)
    - [Infragistics' editor (optional)](#igcontrols)
    - [Number](#number)
    - [Date](#date)
    - [Length Range](#length)
    - [Value Range](#value)
    - [EqualsTo](#equals)
    - [Email](#email)
    - [Credit Card](#card)
    - [Pattern (regular expression)](#pattern)
    - [Custom function](#custom)
 - [Rule Inheritance](#inherit)
 - [Validator Defaults object](#defaults-obejct)
 - [Related Content](#related-content)
 
### Required background
You need to first read the following topics:

- [igValidator Overview](igValidator-Overview.html)

## <a id="intro"></a> Introduction

Rule checks are applied each time validation is performed on the target or field in their specified [order](#rules-order) to asses the validity of the current value. All rule configurations accept at least an `errorMessage` to allow setting a custom text just for that particular check, while some might include additional options. The `igValidator` locale also has a predefined set of appropriate rule messages, so in case setting one is not needed most rules support a shorthand configuration.


## <a id="rules-order"></a> Rules order of execution

In some scenarios the `igValidator` control or field options needs to use multiple validation rules in order to validate upon different criteria or supplement (for example required and number). In those cases it is important to mention that those are performed in a particular order to prevent unnecessary checks and also present the user correct information about what requirement the value did not meet. The simplest, more general validations pass with priority and then the more sophisticated, specialized conditions are performed.

> **Note:** If one of the rules in the chain fails then the value is considered invalid and no further rules will be checked. This way if a value is empty, the error message will state the value is required, even though it would also technically not pass as valid email as well.

By default, the validations priority is as follows:

1.  [Required](#required)
2.  [Infragistics' editor (optional)](#igcontrols)
3.  [Number](#number)
4.  [Date](#date)
5.  [Length Range](#length)
6.  [Value Range](#value)
7.  [EqualsTo](#equals)
8.  [Email](#email)
9.  [Credit Card](#card)
10. [Pattern (regular expression)](#pattern)
11. [Custom function](#custom)


### <a id="required"></a> Required

The [`required`](%%jQueryApiUrl%%/ui.igValidator#options:required) rule validates that a value was entered. This applies to multiple scenarios - inputs and editors cannot have empty text as value, multiple choice targets (such as a checkbox group or an `igCombo`) are required to have at least one item selected. A single checkbox control will be required to be checked.

> **Note:** As this rule is first in priority, no other rule should be concerned with or fail if the value is empty.

Can be configured as both a boolean value or an object with message:

```js
$('#editor').igValidator({
  required: true
});
// OR
$('#editor').igValidator({
  required: {
    errorMessage : "This field is required."
  }
});
```

### <a id="igcontrols"></a> Infragistics' editor (optional)

This step is optional and is fired only when you use an `igEditor`. The validator will call `isValid` on the editor to check if its specific requirements (selection, required mask fields, etc.) are fulfilled. The `igValidator` will attempt to use an error-specific message from the editor, but if no such is available will revert to the generic "default" locale one. There are no additional options related to this functionality.

### <a id="number"></a> Number

The [`number`](%%jQueryApiUrl%%/ui.igValidator#options:number) rule checks if the value is a valid number. The rule allows to specify decimals and thousands separators, so number formats beyond the native JavaScript parsing can be validated. Globally defined in the [defaults obejct](#defaults-obejct) separators for decimals and thousands are '.' and ',' respectively. Can be used help guide the [ValueRange](#value) validation.

Number check can be configured as both a boolean shorthand or an object with settings:
```js
$('#editor').igValidator({
  number: true
});
// OR
$('#editor').igValidator({
  number: {
    errorMessage : "Not a valid number",
    decimalSeparator: ".",
    thousandsSeparator: " "
  }
});
```

### <a id="date"></a> Date

The [`date`](%%jQueryApiUrl%%/ui.igValidator#options:date) checks if a value (usually sting-based) can be successfully parsed as a JavaScript Date object. Can be used help guide the [ValueRange](#value) validation.
			
> **Note:** Dependat on JavaScript Date parsing which will accept a wide range of formats, but also partial values.

Can be configured as both a boolean value or an object with message:

```js
$('#editor').igValidator({
  date: true
});
// OR
$('#editor').igValidator({
  date: {
    errorMessage : "Not a valid date"
  }
});
```

### <a id="length"></a> Length Range

The [`lengthRange`](%%jQueryApiUrl%%/ui.igValidator#options:lengthRange) rule checks if the value length falls between a certain minimum, maximum or both. This applies equally to string values length and array values length.

For error messages this rule can use a wide variety of locale entries based on the value type and options - `"minSelectMessage"` for array values (multi-selection targets), `"maxLengthMessage"` for string values exceeding the maximum or `"rangeLengthMessage"` that fully states the range when both ends are defined. All messages make use of placeholders such as "{0}" to replace min and max in case those change at runtime and can also be used in the `errorMessage` option.

Can be configured as array shorthand or an object with options:
```js
$('#editor').igValidator({
  lengthRange: [ 1, 10]
});
// OR
$('#editor').igValidator({
  lengthRange: {
    min: 6,
    max: 20,
    errorMessage: "Must be at least {0} long and no more than {1}."
  }
});
```

> **Note:** Only one of the `min` and `max` range values can be set, so shorthand configurations such as `lengthRange: [ 1 ]` or `lengthRange: [, 10]` are also valid as falsy (undefined, null or 0) values are ignored.


### <a id="value"></a> Value Range

The [`valueRange`](%%jQueryApiUrl%%/ui.igValidator#options:valueRange) rule checks if the value is between a certain minimum, maximum or both. This applies equally to comparable values - numbers and dates. Since dates can also have a numeric representation, setting the `number` or `date` rules can help guide the validation. When working with numbers, this rule inherits the `number` rule parsing capabilities reusing either its separator options or the defaults.

Like the [LengthRange](#length) this rule uses different messages depending on which the range ends defined and those can also contain placeholders. Similarly, ranges can be defined with only one end, but 0 is an accepted value.

Can be configured as array shorthand or an object with options:

```js
$('#editor').igValidator({
  valueRange: [ 1, 10]
});
// OR
$('#editor').igValidator({
  valueRange: {
    min: 6,
    max: 20,
    errorMessage: "Value must be between {0} and {1}."
  }
});
```

### <a id="equals"></a> EqualsTo

The [`equalTo`](%%jQueryApiUrl%%/ui.igValidator#options:equalTo) validation requires the value of the target and another field to be the same. The selector for the other field can point to different types of input and including elements on which other supported Ignite UI editor controls are initialized. This check is performed based on the `igValidator` triggers where the rule is defined.

Can be configured with a valid jQuery selector/reference or and object with `selector` option additional message:

```js
$('#editor').igValidator({
  equalTo: $("#myEditor")
});
// OR
$('#editor').igValidator({
  equalTo: {
    selector: "#myEditor"
    errorMessage: "Value did not match."
  }
});
```

### <a id="email"></a> Email

The [`email`](%%jQueryApiUrl%%/ui.igValidator#options:email) rule checks if the value is a valid email address. Note that the full email address specification allows for a very wide range of characters and format and is considered mostly impossible to fit in a rule and rarely applied, so the [default regular expression](#defaults-obejct) used for email validation closely follows the one defined in the [HTML5 specification for email input](https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email).

Can be configured as both a boolean value or an object with message:

```js
$('#editor').igValidator({
  email: true
});
// OR
$('#editor').igValidator({
  email: {
    errorMessage : "Enter a valid email"
  }
});
```

### <a id="card"></a> Credit Card

The [`creditCard`](%%jQueryApiUrl%%/ui.igValidator#options:creditCard) verifies the given value is a valid payment card (often commonly referred to as credit card) number. This check does not depend or check on the card type as it uses the Luhn algorithm that can validate [all of the active issuers](https://en.wikipedia.org/wiki/Payment_card_number#Issuer_identification_number_.28IIN.29). Values can contain spaces and dashes and any number of digits. In case of specific type length and format requirements, those can be validated using the [Length Range](#length) in advance and [Pattern (regular expression)](#pattern) rule, which will pass after this one.

> **Note:** Keep in mind this validation only confirms the card number conforms to the algorithm and not that such card actually exists, as such numbers can be easily generated. 

Can be configured as both a boolean value or an object with message:

```js
$('#editor').igValidator({
  creditCard: true
});
// OR
$('#editor').igValidator({
  creditCard: {
    errorMessage : "Enter a valid card number"
  }
});
```

### <a id="pattern"></a> Pattern (regular expression)

The [`pattern`](%%jQueryApiUrl%%/ui.igValidator#options:pattern) matches the value against a JavaScript regular expression. Accepts either a RegExp object or a valid string that can be passed to the `new RegExp()` constructor.

Can be configured with both a RegExp value or an object with expression and message:

```js
$('#editor').igValidator({
  pattern: "^[a-z]+$"
});
// OR
$('#editor').igValidator({
  pattern: {
    expression: /^[a-z]+$/,
    errorMessage : "Value did not match"
  }
});
```

### <a id="custom"></a> Custom function

The [`custom`](%%jQueryApiUrl%%/ui.igValidator#options:custom) rule allows to execute an external function to determine the validity of the value. The function can be provided as direct reference or by name as long as it's visible in the global scope (i.e. `window["name"]`). The function will be executed in the context of the control, so 'this' can be used as a reference the calling `igValidator` widget. Should accept value and optional field settings arguments to determine and return the state of the field as a boolean.

Can be configured with both a RegExp value or an object with expression and message:

```js
$('#editor').igValidator({
  custom: function(value, fieldOptions){
    return false;
  }
});
// OR
$('#editor').igValidator({
  custom: {
    method: function(value, fieldOptions){
      return false;
    },
    errorMessage : "Value did not match"
  }
});
```

## <a id="inherit"></a> Rule Inheritance

Like other options when the `igValidator` is configured with a fields collection, some rule settings can also be set globally in the options and be inherited by all fields. All type-based rules and range rules can be inherited, leaving out only the field-specific `equalTo` and `pattern`. Each field can also define its own rules to override the globals.

```js
$('#validationForm').igValidator({
  required : true, //global
    fields : [{
        selector : "#requiredField"
      }, {
        selector : "#notRequired",
        required : false, // override
      }
	]
});
```

## <a id="defaults-obejct"></a> Validator Defaults object

The `$.ui.igValidator.defaults` holds the global defaults used by all instances of the `igValidator`. Those include the following properties:

- `showAllErrorsOnSubmit` Boolean option to show all errors on submit.  Value false will show error message only for the first failed target. Default value is true.
- `decimalSeparator` Default decimal separator (".") to use when no explicit number option property is defined
- `thousandsSeparator` Default decimal thousands (",") to use when no explicit number option property is defined
- `emailRegEx` Default email checking RegExp object matching the [HTML5 specification for email input](https://www.w3.org/TR/html5/forms.html#e-mail-state-(type=email).

To globally override one of those settings set the property after loading the required Ignite UI resources and before initializing the `igValidator` control.

```js
// override default thousands separator:
$.ui.igValidator.defaults.thousandsSeparator = "";
```

## <a id="related-content"></a> Related Content

- [Validator Overview Sample](%%SamplesUrl%%/validator/overview)
-	[igValidator jQuery API](%%jQueryApiUrl%%/ui.igValidator)