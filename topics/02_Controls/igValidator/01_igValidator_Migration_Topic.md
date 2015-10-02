<!--
|metadata|
{
    "fileName": "igvalidator-migration-topic",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

## Migrating to the new igValidator control

With the 15.2 release of Ignite UI™ we introduce a new reworked `igValidator` control, with a new design, focused on ease of use and improved UX experience. This control uses the new `igNotifier` control to display error messages.

## Topic overview
This topic aims to help migrating from the old validator to the new one.

### In this topic
This topic contains the following sections:

1. [Options changes](#options_changes)
2. [New options](#new_options)
3. [API Methods changes](#methods_changes)
4. [New API methods](#new_methods)
5. [Event changes](#event_changes)
6. [New events](#new_events)
7. [Requirements](#requirements)


<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
alignment| Used for determining the location of the error label.| You should use the `igNotifier` `direction` property.
animationHide, animationShow | Set the duration of hide and show animations in milliseconds. | You should use the `igNotifier` `animationDuration` property.
bodyAsParent| Determines the parent/location of error message.|You should use the `igNotifier` `appendTo` property.
checkboxesName| Use the name attribute of checkboxes in order to validate ranges. |This option is removed. Checkboxes with the same name are automatically detected.
element|Gets or sets reference to html element, which is used to process mousedown and mouseup events in order to trigger validation.|This option is removed. API methods `validate()` and `isValid()` should be used instead.
enableTargetErrorCss|Allows user to apply error css to target element.| Use the equivalent `allowCSSOnTarget` on the `igNotifier`
errorLabel|Gets or sets custom jQuery element, which innerHTML will be used to show validation messages.|This property is renamed to `messageTarget`.
formSubmit|Triggers validation when application called form.submit().|This option is removed.
keepFocus|Set focus back to editor when validation failed|This option is removed.
locale|Sets object that contains custom settings.|This option is removed. You can use the localization files for default messages or assign error messages for separate validation rules.
max, maxLength |Used to determine the maximum length of text or maximum number of selected items.| Those options are replaced by the `lengthRange` property.
min, minLength |Used to determine the minimum length of text or minimum number of selected items.| Those options are replaced by the `lengthRange` property.
regExp|Gets or sets regular expression which is used to validate value in text editor.|This property is renamed to pattern.
showIcon|Determines whether the icon of the error messages should be visible or not.| You can set this option though the `igNotifier` options.
theme|Sets a selector for CSS classes.| This option is removed. You can use the `igNotifier` CSS classes to customize the appearance of the error messages.

<a name='new_options'></a>
### New options

Option| Description
---|---
number|Validate if value is a number.
date|Validate if value is a date.
email|Validate if value is an email.
lengthRange|Gets or sets minimum and maximum length of text or number of selected items.
valueRange|Gets or sets minimum and maximum values.
successMessage|Gets or sets text for success message.
threshold|Determines the validation minimum input length.
equalTo|Requires the value in this field to be the same as another input element or editor control.
custom|Gets or sets a custom function to perform validation.
fields|Determines a list of field items describing each field with validation options and a selector.
notificationOptions|Sets the options for the `igNotifier` used to show error messages.
requiredIndication|Show an asterisks indication next to required fields.
optionalIndication|Show an optinal label indication next to optional fields.

-	[See all igValidator options](%%jQueryApiUrl%%/ui.igvalidator#options)
-	[See all igNotifier options](%%jQueryApiUrl%%/ui.ignotifier#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Change Description
---|---|---
getLocaleOption|This method is removed. You can use the localization files for default messages or assign error messages for separate validation rules.
hide| Method now hides all available messages and also takes optional field parameter.
isMessageDisplayed| Check for currently displayed message(s). Takes an optional field.
isValidState| This option is renamed to `isValid`. It takes optional field.
validate| This option return bool values only and takes optional field.


<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
getErrorMessages|Gets all current error messages for invalid field(s).
notifier|Gets the notifier for the `igValidator` or for a single filed.
addField|Adds an new input to the fields collection and initializes it with the validator.
removeField|Removes an input from the fields collection.
updateField|Updates a field in the validator collection. Used to reiitialize field in case a control has been initialized after the validator or to pass in new options.

[See all API methods](%%jQueryApiUrl%%/ui.igvalidatior#methods)


<a name='event_changes'></a>
### Event changes

Event|Changes
---|---
checkValue|This event is renamed to `validating` to better communicate what it does. Return false to cancel the event.
validation| This event is renamed to `validated` to better communicate what it does. This event is not cancellable.

> **Note:** Both events are now aligned with the default behavior, where returning false on the cancellable event will prevent further execution on this action and produce no further effects for the event that cannot be cancelled. To change the outcome of validation use the `custom` function option.

<a name='new_events'></a>
### New events

Event|Description
---|---
success| Event raised for invalid field after value was validated but before any action takes effect.
successShowing|Event which is raised before success message is displayed.
successHiding|Event which is raised before success message is hidden.
successShown|Event which is raised after success message was displayed.
successHidden| Event which is raised after success message was hidden.
formValidating|Event triggered on `igValidator` instance level before handling a form submit event.
formValidated|Event triggered on igValidator instance level as it is about to handle a form submit event.
formError|Event triggered when the form is submitted and an error occurs
formSuccess|Event triggered when the form is submitted successfully


[See all events](%%jQueryApiUrl%%/ui.igvalidator#events)
