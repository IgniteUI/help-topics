<!--
|metadata|
{
    "fileName": "textbox-property-reference",
    "controlName": "TextBox",
    "tags": ["API","Editing","MVC"]
}
|metadata|
-->

# TextBox Property Reference

## TextBox ASP.NET MVC Helper Property Reference
### Introduction

This topic provides reference information about the properties of the TextBox ASP.NET MVC helper.

### TextBox property reference chart

The following table explains the properties of the `TextBox` ASP.NET MVC helper and lists the default and recommended values.

>**Null Values**: Properties with default null values render the widget with the jQuery mobile default settings. For more information please, see the [textinput](http://jquerymobile.com/demos/1.1.1/docs/forms/textinputs/)

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~ID.html) | string | Get/Set the `TextBox` ID. | “txtbx1”
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Text.html) | string | Gets/Sets the `TextBox` text. | “Search…” <br> “Type your search here…”
[Disabled](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Disabled.html) | bool | Gets or sets whether to disable the `TextBox`. When it is disabled, the `TextBox` is read-only and the text displays in a disabled style. | true <br> **false**
[Mode](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Mode.html) | [TextEditorTextMode](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextEditorTextMode.html) | The `TextBox` can have several modes including – Text, Multiline, Password, Search. | TextEditorTextMode.Text <br> TextEditorTextMode.Multiline <br> TextEditorTextMode.Password <br> TextEditorTextMode.Search
[ClearSearchButtonText](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~ClearSearchButtonText.html) | string | When `TextBox`  [TextEditorTextMode](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextEditorTextMode.html)is from type Search then if you type text, a close button will appear in the search field. This property gets or sets the text that appears as a tooltip when the close button  is hovered. | “Clear” <br> “Clear Search”
[UseNative](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~UseNative.html) | bool | Enables/Disables Native `TextBox` appearance. | **false** <br> true
[Label](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Label.html) | string | Gets/Sets the `TextBox` label. | “TextBox Label”
[HideLabel](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~HideLabel.html) | bool? | Hide/Show `TextBox` Label | **null**
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Mini.html) | bool? | Enable/Disable `TextBox` size state. | **null**
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~Theme.html) | string | Get/Set `TextBox` theme. | **null** <br> “a” <br> “b”  <br> “c” <br> “d” <br> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.TextBoxWrapper~HtmlAttributes.html) | IDictionary<string, object> | Set additional HTML attributes. | `new Dictionary<string, object>() { {"disabled", "disabled"} }`


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [TextBox Overview](TextBox-Overview.html): This topic contains information related to the `TextBox` MVC helpers.

- [Adding](AddingTextBox.html): This topic contains information needed to enable the `TextBox` using the Infragistics ASP.NET MVC Helpers.


### Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/mobile-textbox/basic-usage): This sample demonstrates how to use the `TextBox` ASP.NET MVC helper to define several types of input fields.





 

 


