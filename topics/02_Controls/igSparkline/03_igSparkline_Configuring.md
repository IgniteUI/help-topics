<!--
|metadata|
{
    "fileName": "igsparkline-configuring",
    "controlName": "igSparkline",
    "tags": ["API","Charting","Data Presentation"]
}
|metadata|
-->

# Configuring igSparkline

## Topic Overview
### Purpose

This topic provides an overview of the various ways to configure the [`igSparkline`](%%jQueryApiUrl%%/ui.igSparkline.html)™ control and links to the related API members.

### Required background

The following topics are prerequisites to understanding this topic:

- [igSparkline Overview](igSparkline-Overview.html): This topic provides conceptual information about the `igSparkline` control including its main features.

- [Adding igSparkline to an HTML Document](igSparkline-Adding-igSparkline-to-an-HTML-Document.html): This topic explains how to add the `igSparkline` to an HTML page and bind to a JavaScript array.

- [Adding igSparkline to an ASP.NET MVC View](igSparkline-Adding-igSparkline-to-an-ASPNET-MVC-View.html): This topic walks through how to instantiate an `igSparkline` in an ASP.NET MVC view and bind to a .NET collection of objects.

## igSparkline Configuration Summary
### igSparkline configuration summary chart

The following table lists the configurable aspects of the `igSparkline` control.

Configurable aspects | Details | Properties
---|---|---
Defining the Sparkline Type | Specifies the type of Sparkline: Line, Area, Column or WinLoss. | `displayType`
Defining a Normal Range | Defines a shaded area across the chart (horizontally). | `normalRangeVisibility`
Configuring the Normal Range | Configures the various normal range aspects: top and bottom border, and color. | `normalRangeMinimum` `normalRangeMaximum` `normalRangeFill`
Defining Markers | Defines markers to display on the following chart types: Line, Area and Column. | `markerVisibility` <br> `highMarkerVisibility` <br> `lowMarkerVisibility` <br> `firstMarkerVisibility` `lastMarkerVisibility` <br>  `negativeMarkerVisibility`
Configuring the Markers | Configures the various marker aspects: brush size and color. | `markerSize` <br> `markerBrush`
Adding a Trend Line | Specifies which, of the more than a dozen, trend line to superimpose over the chart. | `trendLineType`
Configuring the Trend Line | Configures the various trend line aspects: trend line brush, period, and type, and line thickness. | `trendLineBrush` <br>  `trendLinePeriod` `trendLineType` <br>  `trendLineThickness`
Interpolating Unknown Values | Identifies an unknown value (null or NaN) and allows you to interpolate or view it as a blank point. | `unknownValuePlotting`
Configuring the Tooltip | Enables a tooltip and displays the supplied HTML template with support for the following keys: Low, High, First, Last | `toolTipTemplate`




## Related Content
### Topics

The following topics provide additional information related to this topic.

- [igSparkline Visual Elements](igSparkline-Visual-Elements.html): This topic provides an overview and images explaining the visual elements of the `igSparkline`.

- [jQuery and ASP.NET MVC Helper API Links (igSparkline)](igSparkline-jQuery-and-ASPNET-MVC-API.html): This topic provides links to the API documentation for the jQuery and its ASP.NET MVC helper class for the `igSparkline` control.

### Samples

The following samples provide additional information related to this topic.

- [Normal Range and Trend Lines](%%SamplesUrl%%/sparkline/normal-range-and-trend-lines): Sample demonstrating the normal range and trend line features.

- [Tooltips and Markers](%%SamplesUrl%%/sparkline/tooltips-and-markers): Sample demonstrating the tooltip and marker features.





 

 


