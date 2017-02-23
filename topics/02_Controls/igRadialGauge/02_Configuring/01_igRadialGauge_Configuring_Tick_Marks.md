<!--
|metadata|
{
    "fileName": "igradialgauge-configuring-tick-marks",
    "controlName": "igRadialGauge",
    "tags": ["Charting","How Do I"]
}
|metadata|
-->

# Configuring the Tick Marks (igRadialGauge)



## Topic Overview
### Purpose

This topic provides a conceptual overview of tick marks with the `igRadialGauge`™ control. It describes the tick marks’ properties and provides an example of how to implement them.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialGauge](igRadialGauge.html): This section gives you an overview of the `igRadialGauge`™ control and its main features.

- [Adding igRadialGauge](igRadialGauge-Getting-Started-with-igRadialGauge.html): This topic explains using a code example how to add the `igRadialGauge`™ control to a page.

### In this topic

This topic contains the following sections:

-   [Tick Marks Overview](#overview)
-   [Preview](#preview)
-   [Tick Mark Properties](#mark-properties)
-   [Configuring the Tick Marks](#config-tick-marks)
-   [Related Content](#related-content)



## <a id="overview"></a>Tick Marks Overview
### Tick marks overview

The radial gauge tick marks are visual elements displayed as lines at specified intervals on the gauge.

There are two types of tick marks, major and minor. Use the `minorTickCount` property to specify the number of minor tick marks displayed between each major tick mark.

### <a id="preview"></a>Preview

The next image is a preview of the `igRadialGauge` with major and minor tick marks added.

![](../images/igRadialGauge_Getting_Started_01.png)



## <a id="mark-properties"></a>Tick Mark Properties
### Tick mark properties summary

The following table summarizes the `igRadialGauge` control’s tick marks properties:

Property Name| Property Type| Description
---|---|---
`interval`|Double|Determines the scale interval of the major tick marks.
`tickStartExtent`|Double|Determines the start position of major tick marks, measured from the center of the gauge. The value of this property should be between 0 and 1 and only affects major tick marks. To change the extent of minor tick marks, use the `minorTickStartExtent` property.
`tickEndExtent`|Double|Determines the end position of major tick marks, measured from the center of the gauge. The value of this property should be between 0 and 1 and only affects major tick marks. To change the extent of minor tick marks, use the `minorTickExtentCount` property. 
`tickStrokeThickness`|Double|Determines the stroke thickness of the major tick marks.
`minorTickStartExtent`|Double|Determines the position at which to start rendering the minor tick marks as a value from 0 to 1, measured from the center of the gauge. Values greater than 1 can be used to make this extend further than the normal radius of the gauge.
`minorTickEndExtent`|Double|Determines the position at which to stop rendering the minor tick marks as a value from 0 to 1, measured from the center of the gauge. Values greater than 1 can be used to make this extend further than the normal radius of the gauge.
`minorTickCount`|Double|Determines the number of tick marks to place between two major tick marks.
`minorTickStrokeThickness`|Double|Determines the thickness of minor tick marks.
`tickBrush`|Brush|Determines the brush of major tick marks. This property is used to change the brush of the major tick marks of the gauge scale.
`minorTickBrush`|Brush|Determines the brush used for the minor tick marks. This property is used to change the brush of the minor tick marks of the gauge scale.


## <a id="config-tick-marks"></a>Configuring the Tick Marks
### Example

The screenshot below illustrates how the `igRadialGauge` renders with its tick marks configured as follows:

Property| Value
---|---
`tickStartExtent`| 0.4
`tickEndExtent`| 0.5
`tickStrokeThickness`| 1
`minorTickStartExtent`| 0.4
`minorTickEndExtent`| 0.45
`minorTickCount`| 10



![](images/igRadialGauge_TickMark_01.png)

The following is the code that implements this example:

 **In JavaScript:** 
  
```js
$("#gauge").igRadialGauge({
	width: "400px",
	height: "400px",
	tickStartExtent: 0.4,
	tickEndExtent:   0.5,
	tickStrokeThickness: 1,
	minorTickStartExtent: 0.4,
	minorTickEndExtent: 0.45,
	minorTickCount: 10                                  
});                                                                  
```

## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic:

- [Adding igRadialGauge](igRadialGauge-Getting-Started-with-igRadialGauge.html): This topic explains using a code example how to add the `igRadialGauge`™ control to a %%PlatformName%% application.

- [Configuring the Background (igRadialGauge)](igRadialGauge-Configuring-the-Backing.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s backing feature. It describes the properties of the backing area and provides an example of its implementation.

- [Configuring Labels (igRadialGauge)](igRadialGauge-Configuring-Labels.html): This topic provides a conceptual overview of labels with the `igRadialGauge`™ control. It describes the properties of the labels and also provides an example of how to configure the labels.

- [Configuring Needles (igRadialGauge)](igRadialGauge-Configuring-Needles.html): This topic provides a conceptual overview of needles with the `igRadialGauge`™ control. It describes the properties of the needles and also provides an example of how to configure them.

- [Configuring Ranges (igRadialGauge)](igRadialGauge-Configuring-Ranges.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s ranges. It describes the properties of the ranges and provides an example of how to add ranges to the radial gauge.

- [Configuring the Scales (igRadialGauge)](igRadialGauge-Configuring-the-Scales.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s scale. It describes the properties of the scale and also provides an example of how to implement it.

### Samples

The following samples provide additional information related to this topic:

- [API Usage](%%SamplesUrl%%/radial-gauge/api-usage): The buttons and api-viewer showcase some of `igRadialGauge`'s needle methods. You can change the value of the needle at runtime and obtain the current value of the needle by clicking the corresponding buttons.

- [Gauge Animation](%%SamplesUrl%%/radial-gauge/motion-framework): This sample demonstrates how you can easily animate the Radial Gauge by setting the `transitionDuration` property.

- [Gauge Needle](%%SamplesUrl%%/radial-gauge/gauge-needle): Displayed as a pointer, the Needle indicates a single value on a scale. The options pane below allows you to interact with the Radial Gauge control’s Needle.

- [Label Settings](igradialgauge-configuring-labels.html#lable-example):  This sample demonstrates how to configure the Radial Gauge control’s Label settings. Use the slider to see how the `labelInterval` and `labelExtent` properties affect the Label.

- [Needle Dragging](%%SamplesUrl%%/radial-gauge/drag-needle): This sample demonstrates how you can drag the Radial Gauge control’s needle by using the Mouse events.

- [Range](%%SamplesUrl%%/radial-gauge/range): A range is a visual element that highlights a specified range of values on a scale. Use the options pane below to set the Radial Gauge control’s Range properties.

- [Scale Settings](%%SamplesUrl%%/radial-gauge/scale-settings): A scale defines a range of values in the Radial Gauge. Use the options pane below to set the Radial Gauge control’s Scale properties.

- [Tick Marks](%%SamplesUrl%%/radial-gauge/tickmarks): Tick marks can be displayed at every user specified interval on a gauge. Use the options pane below to set the Radial Gauge control’s Tick Mark properties.