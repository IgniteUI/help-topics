<!--
|metadata|
{
    "fileName": "pagefooter-property-reference",
    "controlName": "PageFooter",
    "tags": ["API","Layouts","MVC"]
}
|metadata|
-->

# PageFooter Property Reference
This topic provides reference information about the properties of the PageFooter MVC Wrapper.

## PageFooter MVC Wrapper (Property) Reference
The following table explains the properties of the PageFooter MVC wrapper and lists the default and recommended values.

> **Note**: For more information please visit: <a href="http://jquerymobile.com/demos/1.1.1/docs/toolbars/docs-footers.html">jQuery Mobile</a>.

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageFooterWrapper~ID.html) | string | Gets/Sets the PageFooter ID | “**PageContentID**”
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageFooterWrapper~Theme.html) | string | Gets/Sets the PageFooter theme. | **“a”** “b” “c” “d” “e”
[FixedOptions](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageFooterWrapper~FixedOptions.html) | Action<[FixedToolBarOptionsWrapper](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper.html)> | Set of methods that allow you to position and configure the footer. For more information please review the table below, that describes the methods of the [Fixed Options](#fixed-options) class. | option => { option.DisablePageZoom(true).Fixed(true); }
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageFooterWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }


## <a id="fixed-options"></a>Fixed Options MVC Wrapper (Property) Reference
The following table explains the methods of the Fixed Options MVC wrapper and lists the default and recommended values.

> **Note**: Properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [Fixed Positioning](http://jquerymobile.com/test/docs/toolbars/bars-fixed-options.html)

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[Fixed](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~Fixed.html) | bool | Enables/Disable s the fixed positioning of the container. | **null** “a” “b” “c” “d” “e”
[DisablePageZoom](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~DisablePageZoom.html) | bool? | Enables/disables the ability to zoom in and out of a page. | **null**, true, false
[FullScreen](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~FullScreen.html) | bool? | Enables/Disables if the fixed toolbar will be visible or not in full screen. | **null** true false
[TapToggle](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~TapToggle.html) | bool? | Enables/disable sthe user's ability to toggle the toolbar visibility with a tap on the screen or mouse click. | **null** true false
[TapToggleBlackList](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~TapToggleBlacklist.html) | string | A list of jQuery selectors that when tapped, will not cause the toolbars to be toggled. | **"a, button,**  **input, select, textarea, .ui-header-fixed, .ui-footer-fixed"**
[HideDuringFocus](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~HideDuringFocus.html) | string | A list of jQuery selectors that should cause the toolbars to hide while focused, except if they are in a fixed toolbar. | **"input, select, textarea"**
[Transition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~Transition.html) | string | Gets/sets the [transition](http://jquerymobile.com/demos/1.0a4.1/docs/pages/docs-transitions.html) to use when showing and hiding the fixed toolbar. | **“slide”** "slideup" "slidedown" "pop" "fade" "flip"
[UpdatePagePadding](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~UpdatePagePadding.html) | bool? | This determines whether the toolbar is visible or not when its parent page is shown. | **null** true false
[VisilbeOnPageShow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~VisibleOnPageShow.html) | bool? | Determines if the toolbar is visible when the parent is visible. | **null** true false
