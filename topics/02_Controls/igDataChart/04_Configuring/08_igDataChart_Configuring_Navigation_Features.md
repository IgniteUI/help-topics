<!--
|metadata|
{
    "fileName": "igdatachart-configuring-navigation-features",
    "controlName": "igDataChart",
    "tags": ["Charting","How Do I","Navigation"]
}
|metadata|
-->

# Configuring the Navigation Features (igDataChart)



##Topic Overview

### Purpose

This topic explains, with code examples, how to configure navigation features of the `igDataChart`™ control and how to use its API to define the position and size of the visible portion of the chart.

### Required background

The following topics are prerequisites to understanding this topic:

-	[](igDataChart-Overview.html)[igDataChart Overview](igDataChart-Overview.html):  This topic provides conceptual information about the `igDataChart` control including its main features, minimum requirements for using charts and user functionality.

-	[](igDataChart-Adding.html)[Adding igDataChart](igDataChart-Adding.html): This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.

-	[Binding igDataChart to Data](igDataChart-DataBinding.html):  This topic demonstrates how to bind the `igDataChart` control to various data sources (JavaScript array, `IQueryable<T>`, web service).


### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Navigation Features Configuration Summary](#navigation)
-   [Code Example](#example)
-   [Related Content](#related-content)
    -   [Topics](#topics)



##<a id="introduction"></a>Introduction


### <a id="navigation"></a>Navigation features summary

The `igDataChart` control provides an extensive set of navigation features along with options and methods for using them in your code.

When enabled the Overview Plus Detail (OPD) panel appears on the lower right corner of the chart. It shows a thumbnail of the entire chart and contains buttons and slider for zooming. Additionally, you can drag the rectangle of the current view across the panel to position it on different regions.

The user can perform zooming in and out with mouse scroll or Page Up/Down keys, panning with mouse drag or touch and drag, and other navigational actions all being controlled by option settings. For reference for all interactive features see [igDataChart Overview: User Interaction and Usability](igDataChart-Overview#user-interaction).

As a developer, you can use the `igDataChart`’s options and methods to set the current chart position and get the coordinates of the current view, in various ways, as the user navigates to different regions. You can either present a specific view at initialization or change the view at runtime depending on the user input or dynamic actions.



##Navigation Features Configuration Summary


### Navigation features configuration summary chart

The following table lists the configurable aspects of the `igDataChart` control regarding navigation features.

Configurable aspect |Details |Properties
---|---|---
OPD panel visibility |By default, the OPD panel is not shown. When  configured to display, the OPD panel is shown in the lower right corner of the chart.|In JavaScript:<li>[overviewPlusDetailPaneVisibility](%%jQueryApiUrl%%/ui.igDataChart#options:overviewPlusDetailPaneVisibility)<br>In ASP.NET MVC:<li> [OverviewPlusDetailPaneVisibility()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~OverviewPlusDetailPaneVisibility.html)
Default interaction|By default, panning is not allowed and zooming is the default dragging interaction. You can configure panning to be the default dragging interaction.|In JavaScript:<li>[defaultInteraction](%%jQueryApiUrl%%/ui.igDataChart#options:defaultInteraction)<br>In ASP.NET MVC:<li>[DefaultInteraction()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~DefaultInteraction.html)
Panning modifier key|Modifier key to use when panning is not the default interaction.|In JavaScript:<li>[panModifier](%%jQueryApiUrl%%/ui.igDataChart#options:panModifier)<br>In ASP.NET MVC:<li>[PanModifier()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~PanModifier.html)
Zooming modifier key|Modifier key to use when zooming is not the default interaction. By default, the Ctrl key switches to zooming.|In JavaScript: <li>[dragModifier](%%jQueryApiUrl%%/ui.igDataChart#options:dragModifier)<br>In ASP.NET MVC:<li> [DragModifier()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~DragModifier.html)
Zooming|Vertical or/and horizontal zoom can be enabled or disabled, individually or at the same time.|In JavaScript: <li>[horizontalZoomable](%%jQueryApiUrl%%/ui.igDataChart#options:horizontalZoomable)<br><li>[verticalZoomable](%%jQueryApiUrl%%/ui.igDataChart#options:verticalZoomable)<br>In ASP.NET MVC:<li> [HorizontalZoomable()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~HorizontalZoomable.html)<br><li> [VerticalZoomable()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~VerticalZoomable.html)
Setting the visible portion of the chart|Set the coordinates and size of the visible portion of the chart you want displayed.|In JavaScript:<li>[windowRect](%%jQueryApiUrl%%/ui.igDataChart#options:windowRect)<br>In ASP.NET MVC:<li>[WindowRect()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~WindowRect.html)

##<a id="example"></a>Code Example

This sample demonstrates various navigation methods available in the jQuery chart. Panning and zooming through the control’s content can be performed using built-in keyboard navigation (Arrows, Page Up/Down, Home key), built-in mouse navigation (Shift + mouse drag, mouse scroll, mouse down + mouse drag), and the overview plus detail pane, as well as from code-behind using the control's window position and scale properties.

<div class="embed-sample">
   [Chart Navigation](%%SamplesEmbedUrl%%/data-chart/chart-navigation)
</div>


##<a id="related-content"></a>Related Content


###<a id="topics"></a> Topics

The following topics provide additional information related to this topic.

-	[Configurable Visual Elements (igDataChart)](igDataChart-Visual-Elements.html): This topic lists all configurable visual elements of the `igDataChart` control and the properties that manage them.

-	[Series Types (igDataChart)](igDataChart-Series-Types.html): This topic shows all kinds of charts that can be produced with the help of the `igDataChart` control.