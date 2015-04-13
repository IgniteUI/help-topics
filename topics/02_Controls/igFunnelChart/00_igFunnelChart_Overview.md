<!--
|metadata|
{
    "fileName": "igfunnelchart-overview",
    "controlName": "igFunnelChart",
    "tags": ["Charting","Data Presentation"]
}
|metadata|
-->

# igFunnelChart Overview

## Topic Overview

### Purpose

This topic provides conceptual information about the `igFunnelChart`™ control including its main features, minimum requirements, and user functionality.

### Required background

The following table lists the concepts and topics required as a prerequisite to understanding this topic.

- Concepts
	-   Charting
	-   Funnel chart
	-   Data Visualization
-   Topics
	-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html): General information on the Ignite UI® library.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Minimum Requirements**](#minimum-requirements)
-   [**Main Features Summary**](#main-features)
    -   [Main Features Overview](#main-features-overview)
    -   [Inverted Funnel](#inverted)
    -   [Weighted Slices](#weighted)
    -   [Slice Selection](#slice-selection)
    -   [Bezier Curve Shape](#bezier-curve)
-   [**User Interactions and Usability**](#user-interaction-usability)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a> Introduction

The `igFunnelChart` is a charting control for rendering funnel charts into HTML5 Web applications and sites. It uses the new HTML5 Canvas tag to plot funnel charts on web pages.

![](images/igFunnelChart_Overview_%28Control_Overview%29_1.png)

The `igFunnelChart` control is similar to `igPieChart`™ in that that they display the values associated to different categories of items. They are different though because the sum of the values shown on a funnel chart is not necessarily the total of some larger entity. Funnel slices are usually displayed sorted by value, either largest to smallest or in reverse order. They can display either with the same height or the height may be proportional to item’s value. The funnel chart usually has a conic shape, but it allows a Bezier curve to form the contour of its left and right sides.

## <a id="minimum-requirements"></a> Minimum Requirements

The `igFunnelChart` control is a jQuery UI widget and, therefore, depends on the jQuery and jQuery UI libraries. The Modernizr library is also used internally for detecting browser and device capabilities. The control uses several Ignite UI shared resources for functionality and data binding. References to these resources are needed nevertheless, in spite of pure jQuery or ASP.NET MVC helpers being used. The *Infragistics.Web.Mvc* assembly is required when the control is used in the context of ASP.NET MVC.



## <a id="main-features"></a> Main Features

### <a id="main-features-overview"></a> Main features summary chart

The following table summarizes the main features of the `igFunnelChart` control. Additional details are available after following the summary table.

Feature | Description
--- | ---
[Inverted funnel](#inverted) | The funnel chart allows to be displayed with smallest value and on top as opposed to the regular view with largest value on top.
[Weighted slices](#weighted) | You can configure slices to be displayed with different height based on their value.
[Slice selection](#slice-selection) | You can enable slices to be selected and configure selected and unselected style for slices.
[Bezier-curve shape](#bezier-curve) | You can configure the sides of the funnel chart to take shape in the form of a Bezier curve as opposed to the regular trapezoid shape.


### <a id="inverted"></a> Inverted funnel

By default, a funnel chart displays the largest slice (the largest data value) on top and the rest of the slices going down sorted in descending order by value. The `igFunnelChart` can be configured to display slices in ascending order with the smallest value on top.

![](images/igFunnelChart_Overview_%28Control_Overview%29_2.png)

#### Related Topics:

-   [Configuring igFunnelChart](igFunnelChart-Configuring.html)

### <a id="weighted"></a> Weighted slices

The `igFunnelChart` control allows you to configure slices to be displayed with different height depending on their values. That way an extra visual clue is added for the value of a slice.

![](images/igFunnelChart_Overview_%28Control_Overview%29_3.png)

#### Related Topics:

-   [Configuring igFunnelChart](igFunnelChart-Configuring.html)

### <a id="slice-selection"></a> Slice selection

Slice selection functionality can be enabled for the `igFunnelChart` control allowing the user to select slices with a single mouse click or screen tap. Another click or tap deselects the slice. Additionally, selected and unselected styles can be defined and applied to the slices depending on their state.

![](images/igFunnelChart_Overview_%28Control_Overview%29_4.png)

#### Related Topics:

-   [Configuring igFunnelChart](igFunnelChart-Configuring.html)

### <a id="bezier-curve"></a> Bezier-curve shape

You can add more visual appeal to a funnel chart by making its sides appear as Bezier curves and not straight lines. The control allows you to enable the Bezier curves feature and configure the position of the Bezier control points in order to control the exact shape.

![](images/igFunnelChart_Overview_%28Control_Overview%29_5.png)

#### Related Topics:

-   [Configuring igFunnelChart](igFunnelChart-Configuring.html)



## <a id="user-interaction-usability"></a> User Interactions and Usability

The following table summarizes the user interaction capabilities of the `igFunnelChart` control.

The user can… | Using… | Details | Configurable?
--- | --- | --- | ---
Select slice | <ul><li>Mouse click</li><li>Screen tap</li></ul> | The `igFunnelChart` allows the user to select and deselect slices for purposes in the host application. | ![](../../images/images/positive.png)



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Adding igFunnelChart](igFunnelChart-Adding.html): This topic demonstrates how to add the `igFunnelChart` control to a web page and bind it to data.

- [Binding *igFunnelChart* to Data](igFunnelChart-Binding-to-Data.html): This topic explains how to bind the `igFunnelChart` control to various data sources.

- [Configuring *igFunnelChart*](igFunnelChart-Configuring.html): This topic explains how to configure different visual features and behavior of the `igFunnelChart` control.

- [Styling *igFunnelChart*](igFunnelChart-Styling.html): This topic explains how to customize the look-and-feel of the `igFunnelChart` control.

- [Accessibility Compliance (*igFunnelChart*)](igFunnelChart-Accessibility-Compliance.html): This topic explains the `igFunnelChart` control’s accessibility features and provides advice on how to achieve accessibility compliance for pages containing charts.

- [Known Issues and Limitations (*igFunnelChart*)](igFunnelChart-Known-Issues-and-Limitations.html): This topic lists the known issues related to the `igFunnelChart` control. 
- 
- [jQuery and ASP.NET MVC Helper API Links (*igFunnelChart*)](igFunnelChart-jQuery-and-ASP.NET-MVC-Helper-API--Links.html): This topic lists the links to the API reference documentation for the `igFunnelChart` control and its ASP.NET MVC Helper.

### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Funnel Chart](%%SamplesUrl%%/funnel-chart/funnel-chart): This sample demonstrates using the Funnel Chart control to render data as slices from the largest value to the smallest value with the capability to invert the positions of the slices.

- [Slice Selection](%%SamplesUrl%%/funnel-chart/slice-selection): This sample demonstrates enabling the slice selection functionality and handling the `sliceClicked` event.





 

 


