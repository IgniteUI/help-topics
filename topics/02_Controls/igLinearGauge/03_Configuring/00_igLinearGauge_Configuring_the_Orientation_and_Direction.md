<!--
|metadata|
{
    "fileName": "iglineargauge-configuring-the-orientation-and-direction",
    "controlName": "igLinearGauge",
    "tags": ["Charting","How Do I"]
}
|metadata|
-->

# Configuring the Orientation and Direction (igLinearGauge)

##Topic Overview

### Purpose

This topic explains how to configure the `igLinearGauge`™ control with vertical scale and/or inverted scale direction.

### Required background

The following topics are prerequisites to understanding this topic:

-	[igLinearGauge Overview](igLinearGauge-Overview.html): This topic provides conceptual information about the `igLinearGauge` control including its main features, minimum requirements, and user functionality.

-	[Adding igLinearGauge](igLinearGauge-Adding.html):This topic explains how to add the `igLinearGauge` control to a %%PlatformName%% application.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Scale orientation and direction configuration summary](#scale-orientation-summary)
    -   [Scale orientation and direction configuration summary chart](#scale-orientation-summary-chart)
-   [Configuring the Scale Orientation](#config-scale-orientation)
    -   [Overview](#orientation-overview)
    -   [Property settings](#orientation-settings)
    -   [Example](#orientation-examples)
-   [Configuring the Scale Direction (Scale Inversion)](#direction-config)
    -   [Overview](#direction-overview)
    -   [Property settings](#direction-settings)
    -   [Example – inverted direction at horizontal orientation](#direction-horizontal-example)
    -   [Example – inverted direction at vertical orientation](#direction-vertical-example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="introduction"></a>Introduction

### <a id="scale-orientation-summary"></a>Scale orientation and direction configuration summary

The `igLinearGauge` control supports both vertical and horizontal orientations of its scale. By default, the scale assumes the horizontal orientation. In the vertical orientation, the scale values increase in an upwards direction with its numbering labels positioned to the left.

![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_1.png)

It is defined by the [orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation) property of the control.

The scale direction is the direction in which the values of the scale increase. It can be standard (left-to-right or at horizontal orientation and bottom-to-top at vertical orientation) or inverted (right-to-left or at horizontal orientation and top-to-bottom or at vertical orientation).

Inverted direction at horizontal orientation|Inverted direction at vertical orientation
---|---
![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_2.png)|![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_3.png)


Scale direction is defined by the [isScaleInverted](%%jQueryApiUrl%%/ui.igLinearGauge#options:isScaleInverted) property of the control. The default orientation is standard.

### <a id="scale-orientation-summary-chart"></a>Scale orientation and direction configuration summary chart

The following table explains briefly the configurable aspects of the `igLinearGauge`’s control orientation and scale inversion and maps them to properties that configure them.

Configurable aspect|Details|Properties
---|---|---
Scale orientation|Horizontal or vertical orientation of the linear gauge scale inside the control.|[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)
Scale direction|Direction of the linear gauge, standard or inverted.|[isScaleInverted](%%jQueryApiUrl%%/ui.igLinearGauge#options:isScaleInverted)



##<a id="config-scale-orientation"></a>Configuring the Scale Orientation

### <a id="orientation-overview"></a>Overview

The orientation (horizontal or vertical) of the linear gauge is specified by the [orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation) property of the control.

### <a id="orientation-settings"></a>Property settings

The following table maps the desired configuration to its respective property settings.

In order to:|Use this property:|And set it to:
---|---|---
Specify horizontal orientation|[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)|"horizontal"
Specify vertical orientation|[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)|"vertical"


### <a id="orientation-examples"></a>Example

The screenshot below demonstrates how the `igLinearGauge` looks as a result of the following settings:

Property|Value
---|---
[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)|“vertical”


![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_1.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$('#igLinearGauge').igLinearGauge({
    width: ”70”,
    height: ”300”,
    orientation: "vertical"
});
```



##<a id="direction-config"></a>Configuring the Scale Direction (Scale Inversion)

### <a id="direction-overview"></a>Overview

With horizontal orientation, the standard (default) direction of the scale is left-to-right, which means that the scale begins at the left edge of the [Graph area](igLinearGauge-Overview.html#graph-area) and ends at its right edge (the [scaleStartExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:scaleStartExtent) indicates an outset from the left edge of the Graph area and the [scaleEndExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:scaleEndExtent) – the distance from the left edge of the Graph area to the end of the scale):

![](../images/igLinearGauge_Overview_5.png)

When the direction is inverted, the scale begins at the right edge of the Graph area and ends at its left edge (the `scaleStartExtent` indicates an outset from the right edge of the Graph area and the `ScaleEndExtent` – the distance from the right edge of the Graph area to the end of the scale):

![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_4.png)

With vertical orientation, the standard (default) direction of the scale is bottom-to-top, which means that the scale begins at the bottom of the Graph area and ends at its top (the `scaleStartExtent` indicates an outset from the bottom edge of the Graph area and the `scaleEndExtent` – the distance from the bottom edge of the Graph area to the end of the scale):

![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_5.png)

When the direction is inverted, the scale begins at the top edge of the Graph area and ends at its bottom edge (the `scaleStartExtent` indicates an outset from the top edge of the Graph area and the `scaleEndExtent` – the distance from the top edge of the Graph area to the end of the scale):

![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_6.png)

### <a id="direction-settings"></a>Property settings

The following table maps the desired configuration to its respective
property settings.

In order to:|Use this property:|And set it to:
---|---|---
Configure standard direction|[isScaleInverted](%%jQueryApiUrl%%/ui.igLinearGauge#options:isScaleInverted)|“false”
Configure inverted direction|isScaleInverted|“true”



### <a id="direction-horizontal-example"></a>Example – inverted direction at horizontal orientation

The screenshot below demonstrates how the `igLinearGauge` looks as a
result of the following settings:

Property|Value
---|---
[isScaleInverted](%%jQueryApiUrl%%/ui.igLinearGauge#options:isScaleInverted)|“true”
[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)|“horizontal”



![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_2.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$('#igLinearGauge').igLinearGauge({
    width: “70”,
    height: “300”,
    isScaleInverted: "true"
});
```

### <a id="direction-vertical-example"></a>Example – inverted direction at vertical orientation

The screenshot below demonstrates how the `igLinearGauge` looks as a
result of the following settings:

Property|Value
---|---
[isScaleInverted](%%jQueryApiUrl%%/ui.igLinearGauge#options:isScaleInverted)|“true”
[orientation](%%jQueryApiUrl%%/ui.igLinearGauge#options:orientation)|“vertical”



![](images/igLinearGauge_Configuring_the_Orientation_and_Direction_3.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$('#igLinearGauge').igLinearGauge({
    width: '70',
    height: '300',
    orientation: "vertical", 
    isScaleInverted: "true"
});
```



##<a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

-	[Configuring the Visual Elements (igLinearGauge)](igLinearGauge-Configuring-the-Visual-Elements.html): This is a group of topics covering in detail the visual elements the `igLinearGauge` control (like the scale elements, needle and ranges, etc.) and explaining, with code examples, how to configure them.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[Vertical Orientation](%%SamplesUrl%%/linear-gauge/vertical-horizontal-orientation):This sample demonstrates how to change the orientation of the `igLinearGauge` and how to invert the scale.