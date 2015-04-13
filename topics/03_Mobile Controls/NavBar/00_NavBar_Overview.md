<!--
|metadata|
{
    "fileName": "navbar-overview",
    "controlName": "NavBar",
    "tags": ["Getting Started","MVC","Navigation"]
}
|metadata|
-->

# NavBar Overview

## Topic Overview

### Purpose

This topic contains information related to the `NavBar` MVC wrappers.

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**NavBar MVC Wrapper Main Features Summary**](#summary)
-   [**NavBar MVC Wrapper Features**](#features)
-   -   [Items](#items)
    -   [Icon](#icon)
    -   [Theme](#theme)
    -   [Attributes](#attributes)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)


## <a id="introduction"></a> Introduction

The NavBar MVC defines a menu of items that are reference to external pages or internal page blocks. The control proposes API for configuring and styling individual items as well as the NavBar as a whole. The NavBar MVC helper renders a jQuery Mobile [navbar](http://jquerymobile.com/demos/1.1.1/docs/toolbars/docs-headers.html) widget.

![](images/02_NavBarOverview_1.png)



## <a id="summary"></a> NavBar MVC Wrapper Main Features Summary

The following table summarizes the main features of the NavBar MVC wrapper:

Feature | Description
---|---
Items | The `NavBar` allows you to define items; each of them can have own theme, icon and set of items.
Icon | You can define an icon for every item, and define icon position either on a general or individual level.
Theme | Link accepts the standard jQuery Mobile Themes.
Attributes | The MVC Link wrapper has a method that accepts a list of HTML attributes that will be rendered on the client.


## <a id="features"></a> NavBar MVC Wrapper Features

### <a id="items"></a> Items

`NavBar` allows you to define items, each of them can have its own theme, icon and set of items. For more information about individual item methods, please see [*NavBar* property reference](NavBar-Property-Reference.html) topic.

### <a id="icon"></a> Icon

Button can be customized to have different icons. You can achieve this by using the Icons wrapper method. You can pass as a parameter any of the supported jQuery Mobile [Button icons](http://jquerymobile.com/demos/1.1.1/docs/buttons/buttons-icons.html). The following picture shows you NavBars that have different icons for every item. If you want to understand how to achieve the result below, review the [Adding NavBar](Adding-NavBar.html) topic.

![](images/02_NavBarOverview_1.png)

### <a id="theme"></a> Theme

Link accepts the standard [jQuery Mobile Themes](http://jquerymobile.com/demos/1.1.1/docs/api/themes.html), but the theme can be applied only when the control has a button-like appearance. By default, MVC wrappers render controls with the default jQuery mobile form, which is “c”. The following picture shows you a `NavBar` customized with theme “a”.

![](images/02_NavBarOverview_3.png)

### <a id="attributes"></a> Attributes

The MVC Link wrapper has a method that accepts a list of HTML attributes that will be rendered on the client.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Adding *NavBar*](Adding-NavBar.html): This topic contains the information needed to enable the `NavBar` using the Infragistics MVC Wrappers.

- [*NavBar* Property Reference](NavBar-Property-Reference.html): This topic provides reference information about the properties of the `NavBar` MVC Wrapper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-navbar/basic-usage): The `NavBar` ASP.NET MVC helper allows you to create navigation menus and customize them.





 

 


