<!--
|metadata|
{
    "fileName": "checkbox-overview",
    "controlName": "CheckBox",
    "tags": ["Editing","Getting Started","MVC"]
}
|metadata|
-->

# CheckBox Overview

## Topic Overview

### Purpose

This topic contains information related to the `CheckBox` MVC wrappers.

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**CheckBox MVC Wrapper Main Features Summary**](#features-summary)
-   [**CheckBox MVC Wrapper Features**](#features)
    -   [Text](#text)
    -   [Mini](#mini)
    -   [Native Appearance](#native-appearance)
    -   [Theme](#theme)
    -   [Attributes](#attributes)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a> Introduction

The CheckBox MVC wrapper is a server-side control that renders the [jQuery](http://jquerymobile.com/demos/1.1.1/docs/forms/checkboxes/) control. It allows you to add a checkbox in your MVC web project and configure its state either on the client or on the server. This means that you can use the jQuery Mobile [checkboxradio](http://jquerymobile.com/demos/1.1.1/docs/forms/checkboxes/) plugin to dynamically modify the checkbox.

![](images/02_CheckBoxOverview_1.png)



## <a id="features-summary"></a> CheckBox MVC Wrapper Main Features Summary

The following table summarizes the main features of the `CheckBox` MVC wrapper:

Feature | Description
---|---
Text | [`Text`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Text.html) property allows you to set and get the text of the control.
Check | This control allows checking, unchecking, and changing control value.
Mini | The `CheckBox` can have two states – one normal and another that can make the control smaller.
Native appearance | The MVC CheckBox wrapper allows you to restore the basic HTML checkbox appearance.
Theme | `CheckBox` accepts the standard jQuery Mobile Themes.
Attributes | The MVC `CheckBox` wrapper has a method that accepts a list of HTML attributes that will be rendered on the client.



## <a id="features"></a> CheckBox MVC Wrapper Features

### <a id="text"></a> Text

The `CheckBox` [`Text`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Text.html) property allows you to set and get the text of the control.

![](images/02_CheckBoxOverview_2.png)

### <a id="mini"></a> Mini

The `CheckBox` can have two states – one normal and another that can make the control smaller. If the default size of the `CheckBox` does not fit your requirements and you want to restrict the control size, you can make the CheckBox smaller using its [`Mini`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~Mini.html) method.

![](images/02_CheckBoxOverview_3.png)

### <a id="native-appearance"></a> Native Appearance

By default, jQuery Mobile modifies the normal input of type checkbox to make it applicable for mobile devices. But the MVC `CheckBox` wrapper allows you to restore the basic HTML checkbox appearance if you want.

![](images/02_CheckBoxOverview_4.png)

### <a id="theme"></a> Theme

`CheckBox` can have the standard [jQuery Mobile Themes](http://jquerymobile.com/demos/1.1.1/docs/api/themes.html). By default, MVC wrappers render controls with the default jQuery mobile form, which is “c”. The following picture shows you checkbox customized with theme “b”.

![](images/02_CheckBoxOverview_5.png)

### <a id="attributes"></a> Attributes

The MVC `CheckBox` wrapper has a method that accepts a list of HTML attributes that will be rendered on the client. The method name is [`HtmlAttributes`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxWrapper~HtmlAttributes.html) and it accepts parameter from type [Dictionary](http://msdn.microsoft.com/en-us/library/xfhwa508.aspx)



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Adding *ChecBox*](Adding-CheckBox.html): This topic contains the information needed in order to enable the `CheckBox` using the Infragistics MVC Wrappers.

- [Configure *CheckBox*](CheckBox-Configuring.html): This topic contains the information and references needed to configure the `CheckBox` using the MVC wrapper.

- [*CheckBox* Property Reference](CheckBox-Property-Reference.html): This topic provides reference information about the properties of the `CheckBox` MVC Wrapper



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-checkbox/basic-usage): This sample demonstrates usages of the `CheckBox` ASP.NET MVC helper.





 

 


