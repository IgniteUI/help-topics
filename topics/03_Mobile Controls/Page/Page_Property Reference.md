<!--
|metadata|
{
    "fileName": "page-property-reference",
    "controlName": "Page",
    "tags": ["API","Layouts","MVC"]
}
|metadata|
-->

# Page Property Reference

This topic provides reference information about the properties of the Page *MVC Wrapper*.

## Page (property) reference chart

The following table explains the properties of the Page MVC wrapper and lists the default and recommended values.

> **Note:** Please keep in mind that properties with default `null` values render the widget with the jQuery mobile default settings. For more information, please visit jQuery Mobile [Page](http://jquerymobile.com/demos/1.1.1/docs/pages/index.html).

Property | Type | Description | Values (**Default Value is in bold**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~ID.html) | string | Gets/Sets the Page ID. | “**PageID**”
[Title](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Title.html) | string | Gets/Sets the Page Title | “Page”
[Url](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Url.html) | string | Gets/Sets the Page URL. This property is very useful for when you define several Pages in a single View. This property will help you with the transition between the Pages. | **“http://infragistics.com”**
[DomCache](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~DomCache.html) | bool | Enable caching of the Page. Review the [previously-visited](http://jquerymobile.com/demos/1.1.1/docs/pages/index.html) pages to get more information on this property. | **false**
[AddBackButton](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~AddBackButton.html) | bool | Add/Remove the Page back button. | **false**
[BackButtonText](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~BackButtonText.html) | string | Gets/Sets the text of the Page back button. | “Back”
[CloseButtonText](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~CloseButtonText.html) | string | Gets/Sets the text of the Page close button | “X”
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageWrapper~Theme.html) | string | Gets/Sets the Page theme. | **null** “a” “b” “c” “d” “e”
[BackButtonTheme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~BackButtonTheme.html) | string | Get/Set the Back Button theme. | “a” “b” **“c”** “d” “e”
[OverlayTheme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~OverlayTheme.html) | string | Gets/Sets the Overlay Button theme when the Page is opened in a Dialog. | “a” “b” **“c”** “d” “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }






 

 


