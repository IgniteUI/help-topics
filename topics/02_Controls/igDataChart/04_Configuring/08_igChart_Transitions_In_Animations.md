<!--
|metadata|
{
    "fileName": "igchart-transitions-in-animations",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Transitions In Animations



##Topic Overview


### Purpose

This topic provides information on enabling the `igDataChart`™ controls transition animation feature along with a listing of the supported series.

### Required background

The following topic is a prerequisite to understanding this topic:

-	[Adding igDataChart](igDataChart-Adding.html)

This topic demonstrates how to add the `igDataChart`™ control to a page and bind it to data.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Overview](#overview)
    -   [Supported series](#supported-series)
    -   [Supported transition types](#supported-transition-types)
    -   [Supported transition speed types](#supported-transition-speed-types)
    -   [Supported easing function types](#supported-easing-function-types)
-   [Configuring the Transition In Animations](#transition-in-animations)
    -   [Overview](#transition-overview)
    -   [Example](#transition-example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="introduction"></a>Introduction


###<a id="overview"></a> Overview

This feature allows you to animate the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the `columnSeries` animates by rising from the x-axis, a `lineSeries` animates by drawing from the y-axis. Refer to the following sample to see how the different series animate visually, [Transition Animation](%%SamplesUrl%%/data-chart/transition-animation) and [Transition Animation (Financial)](igChart-transitions-in-animations.html#transition-example).

Enable animated transitions by setting the `isTransitionInEnabled` property to “`true`”.

By default, animated transitions are disabled.

Animated transitions can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function).

###<a id="supported-series"></a> Supported series

The following series types support the transition animations feature:

-   Category Series
-   Range Category Series
-   Financial Price Series
-   Financial Indicators

###<a id="supported-transition-types"></a> Supported transition types

Many types of animated transitions are supported based on the nature of the movement and its direction:

-   `fromZero` – Series transitions in from the reference value of the value axis.
-   accordion-type transitions:
    -   From side:
        -   `accordionFromLeft` – Series accordions in from the left.
        -   `accordionFromRight` – Series accordions in from the right.
        -   `accordionFromTop` – Series accordions in from the top.
        -   `accordionFromBottom` – Series accordions in from the bottom.
    -   From an axis:
        -   `accordionFromCategoryAxisMinimum` – Series accordions in from the category axis minimum.
        -   `accordionFromCategoryAxisMaximum` – Series accordions in from the category axis maximum.
        -   `accordionFromValueAxisMaximum` – Series accordions in from the value axis maximum.
        -   `accordionFromValueAxisMinimum` – Series accordions in from the value axis minimum.
-   `expand` – Series expands from the value midpoints.
-   Sweep-type transitions:
    -   From side:
        -   `sweepFromLeft` – Series sweeps in from the left
        -   `sweepFromRight` – Series sweeps in from the right
        -   `sweepFromTop` – Series sweeps in from the top.
        -   `sweepFromBottom` – Series sweeps in from the bottom.
        -   `sweepFromCenter` – Series sweeps in from the center.
    -   From an axis:
        -   `sweepFromCategoryAxisMaximum` – Series sweeps in from the category axis maximum.
        -   `sweepFromCategoryAxisMinimum` – Series sweeps in from the category axis minimum.
        -   `sweepFromValueAxisMaximum` – Series sweeps in from the value axis maximum.
        -   `sweepFromValueAxisMinimum` – Series sweeps in from the value axis minimum.

###<a id="supported-transition-speed-types"></a> Supported transition speed types

The transition’s speed type determines the speed of the individual items of the current series’s transition relative to each other as the animated transition is playing. The following are the different speed types:

-   `auto` – Automatically selects a speed type.
-   `indexScaled` – Data points arrive later if their index is further from the axis origin.
-   `normal` – All speeds are normal, data points arrive at the same time.
-   `random` – Data points arrive at random times.
-   `valueScaled` - Data points arrive later if their value is further from the starting point.

###<a id="supported-easing-function-types"></a> Supported easing function types

The easing function determines what way the animation initially eases in. Apply any easing function. It is set to `cubicEase` by default.



##<a id="transition-in-animations"></a>Configuring the Transition In Animations


###<a id="transition-overview"></a> Overview

The transition type is configured by setting the `transitionInMode` property to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to “auto” (default).

###<a id="transition-example"></a> Example

The following example demonstrates how to enable and change transition in animations for the financial chart:

<div class="embed-sample">
   [Transition Animation (Financial)](%%SamplesEmbedUrl%%/data-chart/transition-animation-financial)
</div>

##<a id="related-content"></a>Related Content


###<a id="topics"></a> Topics

The following topic provides additional information related to this topic:

-	[Adding igDataChart](igDataChart-Adding.html)

This topic demonstrates how to add the `igDataChart`™ control to a page
and bind it to data.



###<a id="samples"></a> Samples
The following samples provide additional information related to this topic.


-	[Transition Animation](%%SamplesUrl%%/data-chart/transition-animation): This sample demonstrates the animation feature that is displayed at the chart initialization.