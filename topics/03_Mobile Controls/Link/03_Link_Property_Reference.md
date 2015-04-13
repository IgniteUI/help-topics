<!--
|metadata|
{
    "fileName": "link-property-reference",
    "controlName": "Link",
    "tags": ["API","MVC","Navigation"]
}
|metadata|
-->

# Link Property Reference

## Link MVC Wrapper (Property) Reference

This topic provides reference information about the properties of the `Link` MVC Wrapper.

The following table explains the properties of the `Link` MVC wrapper and lists the default and recommended values.

> **Null Values**
>
>Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [Link](http://jquerymobile.com/demos/1.1.1/docs/pages/#link-formats.html)


### Link (property) reference chart

Property | Type | Description | Values(Default Value)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~ID.html) | string | Gets/Sets the Link ID. | “LinkID”
[Text](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Text.html) | string | Gets/Sets the Link Text | “Link”
[NavigateUrl](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~NavigateUrl.html) | string | Gets/Sets the target that the Link control is referencing. | “http://www.infragistics.com”
[Target](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Target.html) | string | Gets/Sets the anchor target. | “_blank” <br /> “_parent” <br /> “_self” <br /> “_top” <br /> “framename”
[DestinationRelationship](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~DestinationRelationship.html) | [LinkDestinationRelationshipOptions](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkDestinationRelationshipOptions.html) | Gets/Sets the relationship between the current document and the referenced document. | LinkDestinationRelationshipOptions.Back LinkDestinationRelationshipOptions.Dialog LinkDestinationRelationshipOptions.External LinkDestinationRelationshipOptions.Popup
[Ajax](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Ajax.html) | bool? | Gets/Sets whether AJAX is used to fetch this page. | null
[ReverseDirection](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~ReverseDirection.html) | bool | Gets/sets whether to reverse page animations during transition | false
[DomCache](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~DomCache.html) | bool? | Gets/sets whether DOM caching is turned on for this link | null
[Prefetch](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Prefetch.html) | bool? | Gets/sets whether the page is prefetched to speed up performance | null
[Transition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Transition.html) | string | Gets/sets the [transition](http://jquerymobile.com/demos/1.0a4.1/docs/pages/docs-transitions.html) when navigating to the new content | “slide” <br /> “slideup” <br /> “slidedown” <br /> “pop” <br /> “fade” <br /> “flip”
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Mini.html) | bool? | Enable/Disable the Link size state. | null
[Inline](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Inline.html) | bool? | Enable/Disable the Link inline display state. | null
[RenderMode](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~RenderMode.html) | [LinkRenderMode](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkRenderMode.html) | Render the link as a button, link or render it in natvie mode. | LinkRenderMode.Button <br /> LinkRenderMode.Link <br /> LinkRenderMode.Native
[Icon](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Icon.html) | string | Get/Set the [icon](http://api.jquerymobile.com/icons/) when the Link is rendered as a button. | “arrow-l” <br /> “delete” <br /> “plus” <br /> “minus” <br /> “check” <br /> “gear”
[IconPosition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~IconPosition.html) | string | Get/Set the [icon](http://api.jquerymobile.com/icons/) position, when the Link is rendered as a button. | “right” <br /> “left” <br /> “top” <br /> “bottom”
[IconShadow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~IconShadow.html) | bool? | Enable/Disable the icon shadow, when the Link is rendered as a button. | null
[Shadow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Shadow.html) | bool? | Enable/Disable the Link shadow, when the Link is rendered as a button. | null
[Corners](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Corners.html) | bool? | Enable/Disable the rounded Link corners, when the Link is rendered as a button. | null
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~Theme.html) | string | Get/Set the Link theme. | null <br /> “a” <br /> “b” <br /> “c” <br /> “d” <br /> “e”
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.LinkWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }

 

 


