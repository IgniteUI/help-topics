<!--
|metadata|
{
    "fileName": "popup-property-reference",
    "controlName": "Popup",
    "tags": ["Layouts","MVC"]
}
|metadata|
-->

# Popup Property Reference



## Popup MVC Wrapper (Property) Reference

This topic provides reference information about the properties of the `Popup` MVC Wrapper.

The following table explains the properties of the `Popup` MVC wrapper and lists the default and recommended values.

> **Null Values**
>
> Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [Popup](http://jquerymobile.com/demos/1.2.0-rc.2/docs/pages/popup/index.html)


### Popup (property) reference chart

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~ID.html) | string | Gets or Sets the `Popup` ID. | **“PopupID”**
[PositionTo](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~PositionTo.html) | object/string | Gets or sets the position where the `Popup` should appear. This property can accept any jQuery selector, which will then center over the specified element. It accepts "origin", which centers the popup over the link that opens it, and "window", which centers the popup in the window. | $(“#targetElementID”) <br /> “origin” <br /> “window”
[Tolerance](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~Tolerance.html) | int | Defines the minimum tolerance in pixels from the parent window. You can use either integer values or string values and depending how many numbers it defines, the behavior is different. See the right column or follow the [Popup Overview](Popup-overview.html) to see more detailed information about this. | Tolerance(100,150,100,200) <br /> Tolerance(100,150) <br /> Tolerance(100)
[Transition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~Transition.html) | string | Gets/sets the [transition](http://jquerymobile.com/demos/1.0a4.1/docs/pages/docs-transitions.html) when showing the `Popup` window. | “slide” <br /> “slideup” <br /> “slidedown” <br /> “pop” <br /> “fade” <br /> “flip”
[Corners](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~Corners.html) | bool? | Enables/Disables the rounded `Popup` corners. | **null** <br /> true <br /> false
[Shadow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~Shadow.html) | bool? | Enables/Disables the `Popup` shadow. | **null** <br /> true <br /> fasle
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~Theme.html) | string | Gets/Sets the `Popup` theme. | **null** <br /> “a” <br /> “b” <br /> “c” <br /> “d” <br /> “e”
[OverlayTheme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~OverlayTheme.html) | string | Gets/Sets the overlay `Popup` theme, when the `Popup` is opened. | “a” <br /> “b” <br /> **“c”** <br /> “d” <br /> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PopupWrapper~PositionTo.html) | IDictionary<string,object> | Sets additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }



 

 


