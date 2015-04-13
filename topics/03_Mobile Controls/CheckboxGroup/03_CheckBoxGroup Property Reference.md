<!--
|metadata|
{
    "fileName": "checkboxgroup-property-reference",
    "controlName": "CheckBoxGroup",
    "tags": ["API","Editing","MVC"]
}
|metadata|
-->

# CheckBoxGroup Property Reference



## CheckBoxGroup MVC Wrapper (Property) Reference

This topic provides reference information about the properties of the `CheckBoxGroup` MVC Wrapper.

The following table explains the properties of the `CheckBoxGroup` MVC wrapper and lists the default and recommended values.

**Null Values**

> Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [CheckBoxGroup](http://jquerymobile.com/test/docs/forms/checkboxes/)

### CheckBoxGroup (property) reference chart

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~ID.html) | string |  | “CheckBoxGroupID”
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Text.html) | string | Gets/Sets the text of the `CheckBoxGroup` | “Group”
[Items](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Items.html) | Lambda expression | Define all the Check Boxes that are part of the group | item => { item.CheckBox().ID("chk1").Text("Text"); }
[Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Horizontal.html) | bool | Enable/Disable the Horizontal `CheckBoxGroup` | **false**
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Mini.html) | bool? | Enable/Disable the `CheckBox` Group size state. | **null**
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Theme.html) | string | Get/Set the `CheckBox` theme. | **null** “a” “b” “c” “d” “e”






 

 


