<!--
|metadata|
{
    "fileName": "radiobuttongroup-property-reference",
    "controlName": "RadioButtonGroup",
    "tags": ["Editing","MVC"]
}
|metadata|
-->

# RadioButtonGroup Property Reference

## RadioButtonGroup MVC Wrapper (Property) Reference
### Introduction

This topic provides reference information about the properties of the `RadioButtonGroup` MVC Wrapper.

### RadioButtonGroup (property) reference chart

The following table explains the properties of the `RadioButtonGroup` MVC wrapper and lists the default and recommended values.

> Null Values : Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit:

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~ID.html) | string | Gets/Sets the `RadioButtonGroup` ID. | “rdbtngrp1”
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Text.html) | string | Gets/Sets the `RadioButtonGroup` text. | “RadioButtonGroup”
[Items](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Items.html) | Action<[RadioButtonModelsBuilder](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonModelsBuilder.html)> | Defines all of the radio buttons that belong to that group. See the next table that describes the Radio  Button methods. | `item => { item.RadioButton().ID("rdbtnKurt").Text( "Kurt"); item.RadioButton().ID("rdbtnPirsig").Text( "Pirsig"); }`
[SelectedIndex](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~SelectedIndex.html) | int | Gets/Sets a selected index of the group. | 0 <br> 1 <br> 2
[Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Horizontal.html) | bool | Designates if the group is horizontal or vertical. | **false** <br> true
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Mini.html) | bool? | Enables/Disables the `RadioButtonGroup` size state. | **null**
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Theme.html) | string | Gets/Sets the `RadioButtonGroup` theme. | **null** <br> “a” <br> “b” <br> “c” <br> “d” <br> “e”


### Radio Button (property) reference chart

The following table explains the properties of the Radio Button MVC wrapper and lists the default and recommended values.

>Null Values: Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit:

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~ID.html) | string | Gets/Sets the Radio  Button ID. | “buttonID”
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~Text.html) | string | Gets/Sets the Radio  Button text. | “Button”
[Selected](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~Selected.html) | bool | Gets/Sets the selected value. | **false** <br> true
[UseNative](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~UseNative.html) | bool | Enables/Disables the native HTML appearance of the Radio  Button. | **false** <br> true
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~Mini.html) | bool? | Enables/Disables the Radio  Button’s size state. | **null** <br> true <br> false
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~Theme.html) | string | Gets/Sets the Radio  Button theme. | **null** <br> “a” <br> “b” <br> “c” <br> “d” <br> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | `new Dictionary<string, object>() { {"disabled", "disabled"} }`






 

 


