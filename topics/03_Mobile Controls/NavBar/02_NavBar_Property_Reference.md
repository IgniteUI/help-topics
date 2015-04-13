<!--
|metadata|
{
    "fileName": "navbar-property-reference",
    "controlName": "NavBar",
    "tags": ["API","MVC","Navigation"]
}
|metadata|
-->

# NavBar Property Reference

## Topic Overview

### Purpose

This topic provides reference information about the properties of the `NavBar` MVC Wrapper.

### Required background

The following topics are prerequisites to understanding this topic:

- [*NavBar* Overview](NavBar-Overview.html): This topic contains information related to the `NavBar` MVC wrappers.

### In this topic

This topic contains the following sections:

-   [**NavBar MVC Wrapper (Property) Reference**](#reference)
-   [**NavBar Item MVC Wrapper (Property) Reference**](#item-reference)



## <a id="reference"></a>NavBar MVC Wrapper (Property) Reference

This topic provides reference information about the properties of the `NavBar` MVC Wrapper.


The following table explains the properties of the `NavBar` MVC wrapper and lists the default and recommended values.

> **Null Values**
>
> Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [NavBar](http://jquerymobile.com/demos/1.1.1/docs/toolbars/docs-navbar.html)


### NavBar (property) reference chart

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarWrapper~ID.html) | string | Get/Set the `NavBar` ID. | “navbar1”
[Items](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarWrapper~Items.html) | Lambda expression | Define all the `NavBar` items. For more information about configuring individual NavBar items, review the table in the next paragraph | item => { item.NavBarItem().Text(“Home”); }
[IconPosition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarWrapper~IconPosition.html) | string | Get/Set the [icon](http://api.jquerymobile.com/icons/) | **“right”** <br /> “left” <br /> “top” <br /> “bottom”
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarWrapper~Theme.html) | string | Get/Set the `NavBar` theme. | **null** <br /> “a” <br /> “b” <br /> “c” <br /> “d” <br /> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }






## <a id="item-reference"></a>NavBar Item MVC Wrapper (Property) Reference
This topic provides reference information about the properties of the item from the `NavBar` MVC Wrapper.


The following table explains the methods of the item from the `NavBar` MVC wrapper and lists the default and recommended values.

> **Null Values**
>
> Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [NavBar](http://jquerymobile.com/demos/1.1.1/docs/toolbars/docs-navbar.html)



### NavBar Item (property) reference chart

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~Text.html) | string | Get/Set the `NavBar` item text. | “Home”
[NavigateUrl](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~NavigateUrl.html) | string | Get/Set the `NavBar` item reference. | “http://www.infragistics.com”
[Items](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~NavBarItem.html) | Lambda expression | Define all the child `NavBar` items. | item => { item.NavBarItem().Text(“Home”); }
[Icon](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~Icon.html) | string | Get/Set the [icon](http://api.jquerymobile.com/icons/) | “arrow-l” <br /> “delete” <br /> “plus” <br /> “minus” <br /> “check” <br /> “gear”
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~Theme.html) | string | Get/Set the `NavBar` item theme. If the theme is not set individually for an item, it will use the overall theme defined in the `NavBar` wrapper. | **null** <br /> “a” <br /> “b” <br /> “c” <br /> “d” <br /> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.NavBarItemWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes to the `NavBar` item. | new Dictionary<string, object>() { {"disabled", "disabled"} }
