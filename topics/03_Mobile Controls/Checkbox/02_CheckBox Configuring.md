<!--
|metadata|
{
    "fileName": "checkbox-configuring",
    "controlName": "CheckBox",
    "tags": ["Editing","How Do I","MVC"]
}
|metadata|
-->

# CheckBox Configuring

## Topic Overview

### Purpose

This topic contains the information and references needed to configure the `CheckBox` using the MVC wrapper.

### Required background

The following topics are prerequisites to understanding this topic:

- [CheckBox Overview](CheckBox-Overview.html): This topic introduces the MVC `CheckBox` control wrapper and its main functionalities.


### In this topic

This topic contains the following sections:

-   [Control Configuration Summary](#summary)
-   [Customize CheckBox Appearance](#appearance)
-   [Native CheckBox](#native)
-   [Related Content](#related-content)



## <a id="summary"></a> Control Configuration Summary

The following table lists the configurable aspects of the `CheckBox` MVC wrapper.:

Configurable aspects | Details | Properties
---------------------|---------|-----------
Customize CheckBox Appearance | The MVC CheckBox wrapper has methods in its API that allow you to configurethe control’s appearance. | [Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Mini.html) <br /> [Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Theme.html)
Native CheckBox | Set the default HTML CheckBox appearance. | [UseNative](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Theme.html)





## <a id="appearance"></a> Customize CheckBox Appearance

The MVC CheckBox wrapper has methods in its API that allow you to configure the control’s appearance.

![](images/04_CheckBoxConfiguring_1.png)

### Property settings

The following table maps the desired configuration to configure checkbox appearance:

In order to: | Use this property: | And set it to:
---|---|---
Restrict the CheckBox size. | [Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Mini.html) | true
Set a jQuery Mobile Theme | [Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Theme.html) | “b”


### Code Example

The code below demonstrates how customize `CheckBox` appearance:

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .CheckBox()
    .ID("chkbx1")
    .Text("Agree License")
    .Mini(true)
    .Theme("b")
    .Render())
```



## <a id="native"></a> Native CheckBox

By default, jQuery Mobile modifies the normal input of type `CheckBox` to make it applicable for mobile devices. But the MVC `CheckBox` wrapper allows you to restore the basic HTML `CheckBox` appearance if you want.

![](images/04_CheckBoxConfiguring_2.png)

### Property settings

The following table maps the ideal configuration to be used to set the true state text of the `CheckBox` to “Enable”:

In order to: | Use this property: | And set it to:
---|---|---
Set the default HTML `CheckBox` appearance. | [UseNative](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Theme.html) | true



### Code Example

The code below demonstrates how to set the basic HTML `CheckBox` appearance:

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .CheckBox()
    .ID("check1")
    .UseNative(true)
    .Text("Native CheckBox")
    .Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*CheckBox* Overview](CheckBox-Overview.html): This topic contains information related to the `CheckBox` MVC wrappers.

- [Adding *CheckBox*](Adding-CheckBox.html): This topic contains the information needed in order to enable the `CheckBox` using the Infragistics MVC Wrappers.

- [*CheckBox* Property Reference](CheckBox-Property-Reference.html): This topic provides reference information about the properties of the `CheckBox` MVC Wrapper



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-checkbox-group/basic-usage): This sample demonstrates usages of the `CheckBoxGroup` ASP.NET MVC helper.





 

 


