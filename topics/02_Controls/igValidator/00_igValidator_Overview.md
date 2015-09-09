<!--
|metadata|
{
    "fileName": "igvalidator_overview",
    "controlName": "igValidator",
    "tags": ["Getting Started"]
}
|metadata|
-->

## igValidator Overview

The `igValidator` control provides new look and feel compared to the previous one. It is designed to be easy to use with any form element and our existing components such as editors, combo box and other components for collecting user input. This control takes advantage to the notification widget design and use its visualizations to display the necessary warning and error messages. 

### In this topic

- [Walk through the igValidator](walk-through)
- [Setting up the igValidator](setting-up)
- [Validations’ priority](validation-priority)
- [Related Content](related-content)

## <a id="walk-through"></a> Walk through the igValidator

The main purpose of the `igValidator` control is to inform the end user for the passed and failed validation immediately. This means that when a user blur the editor's input a feedback message is immediately displayed giving useful information about the state in which the editor is in. For example it can display messages that indicate whether the current field is required or not and whether the user filled the input with the expected type of data. 

The `igValidator` is rich UX control. When the user commit an error the specific input is colored in red to indicate that something went wrong with the current interaction. Optionally you can use the `requiredIndication` property to show in advanced which form elements are required. Also there is a `optionalIndication` property that indicates if a particular field is optional or not.

The invalid notification are shown when the users is not in edit mode. As the user fix the wrong data the notification will disappear.

A whole list of the `igValidator` options can be found in the [igValidator API](%%jQueryApiUrl%%/ui.igValidator)

## <a id="setting-up"></a> Setting up the igValidator

Unlike the old validator control, the new one can be configured independently. This means that you can attach it to any HTML form element as well as our specific editor controls and the combo. It possesses plenty of options which allows you to customize and configure this control corresponding to your needs. The following example demonstrates a basic usage of the `igValidator`.

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

![](images/igValidator.png)


## <a id="validation-priority"></a> Validations' priority

In some scenarios you might need to use multiple validators on a single input in order to validate upon different criteria. In those cases it is important to mention that when you attache multiple validators to a single input, the validations perform in a particular order. The simplest validations passes first and then the more sophisticated conditions are performed. Please note that if one of the validation fails, the other ones won't be triggered until it is fixed. 

By default, the validations priority is as follows (first is most important, last is least important):
1.	required
2.	Infragistics' editor (optional)*
3.	Number
4.	Date
2.	LengthRange
3.	ValueRange
4.	EqualsTo
5.	Email
6.	Pattern (= the regular expression)
7.	Custom function

\* This step is optional and is fired only when you use an `igEditor`. The validator will check id the editor is valid.

## <a id="related-content"></a> Related Content

-	[igValidator jQuery API](%%jQueryApiUrl%%/ui.igValidator)