<!--
|metadata|
{
    "fileName": "igradialgauge-configuring-the-scales",
    "controlName": "igRadialGauge",
    "tags": ["Charting","How Do I","Tips and Tricks"]
}
|metadata|
-->

# Configuring the Scales (igRadialGauge)



## Topic Overview
### Purpose

This topic provides a conceptual overview of the `igRadialGauge`™ control’s scale. It describes the properties of the scale and also provides an example of how to implement it.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialGauge](igRadialGauge.html): This section gives you an overview of the `igRadialGauge`™ control and its main features.

- [Adding igRadialGauge](igRadialGauge-Getting-Started-with-igRadialGauge.html): This topic explains using a code example how to add the `igRadialGauge`™ control to a page.



### In this topic

This topic contains the following sections:

-   [Scale Overview](#overview)
-   [Preview](#preview)
-   [Scale Properties](#scale-properties)
-   [Configuring the Scale](#config-scale)
-   [Related Content](#related-content)



## <a id="overview"></a>Scale Overview
### Scale overview

Used to represent the values of the gauge visually, a scale defines a range of values in the `igRadialGauge` control. The tick marks and ranges are all the elements that can be added to a scale.

### <a id="preview"></a>Preview

The following image is a preview of the `igRadialGauge` control with the scale added.

![](../images/igRadialGauge_Getting_Started_01.png)



## <a id="scale-properties"></a>Scale Properties
### Scale properties summary

The following table summarizes the properties of the `igRadialGauge` control related to the scale:

<table class="table">
	<thead>
		<tr>
            <th>
Property Name
			</th>

            <th>
Property Type
			</th>

            <th>
Description
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
`scaleStartExtent`
			</td>

            <td>
`double`
			</td>

            <td>
Specifies the starting position of the scale measured from the center of the gauge. The value of this property should be between 0 and 1.

                Setting this property to a value greater than the `scaleEndExtent` property will result in the start extent defaulting back to the actual `scaleEndExtent` value.
			</td>
        </tr>

        <tr>
            <td>
`scaleEndExtent`
			</td>

            <td>
`double`
			</td>

            <td>
Specifies the end position of the scale measured from the center of the gauge. The value of this property should be between 0 and 1.

                Setting this property to a value less than the `scaleStartExtent` property will result in the end extent defaulting back to the actual `scaleStartExtent` value.
			</td>
        </tr>

        <tr>
            <td>
`scaleStartAngle`
			</td>

            <td>
`double`
			</td>

            <td>
Specifies the start angle for the scale in degrees.
			</td>
        </tr>

        <tr>
            <td>
`scaleEndAngle`
			</td>

            <td>
`double`
			</td>

            <td>
Specifies the end angle for the scale in degrees.
			</td>
        </tr>

        <tr>
            <td>
`scaleOversweep`
			</td>

            <td>
`double`
			</td>

            <td>
Specifies the amount of extra space (in degrees) the scale sweeps, in both directions, beyond the start and end values. This value must be greater than 0. The default value is 3.
			</td>
        </tr>

        <tr>
            <td>
`scaleBrush`
			</td>

            <td>
`brush`
			</td>

            <td>
Specifies the brush used to fill the background of the scale.
			</td>
        </tr>

        <tr>
            <td>
`scaleSweepDirection`
			</td>

            <td>
`sweepDirection`
			</td>

            <td>
Specifies whether the scale sweeps clockwise or counterclockwise.
			</td>
        </tr>

        <tr>
            <td>
`scaleOversweepShape`
			</td>

            <td>
`radialGaugeScaleOversweepShape`
			</td>

            <td>
                <table class="table">
	<thead>
		
	</thead>
	<tbody>
                        <tr>
                            <td>
circular
			</td>

                            <td>
Increases the angle at which the ends of the shape is drawn
			</td>
                        </tr>

                        <tr>
                            <td>
fitted
			</td>

                            <td>
Increase the angle of the outer and inner arc, but increases the angle of the inner arc more in order to keep the connecting lines of the scale shape parallel with where they would have been if the `scaleOversweep` property
                                    was set to 0.
			</td>
                        </tr>

                        <tr>
                            <td>
auto
			</td>

                            <td>
The property’s default setting, Auto – automatically determines the backing shape and sets the `scaleOversweep` property accordingly.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>

                If this property is set to Circular and the value of the `backingShape` property is set to Fitted a visible gap will appear between the scale and the arc of backing shape. To ensure that the scale aligns
                    correctly with the backing area of the gauge, the&nbsp;`scaleOversweep` property and the `backingShape`&nbsp;property should be set to the same value.
            </td>
        </tr>
    </tbody>
</table>


##<a id="config-scale"></a>Configuring the Scale 

### Example

The screenshot below illustrates how the `igRadialGauge` renders with its scale properties configured as follows:

Property| Value
---|---
`scaleStartExtent`|0.5
`scaleEndExtent`|0.4
`scaleOversweep`|15
`scaleSweepDirection`|counterclockwise



![](images/igRadialGauge_Scale_01.png)

The following is the code that implements this example:

 **In JavaScript:**  

```js
$("#gauge").igRadialGauge({
	width: "400px",
	height: "400px",
	scaleStartExtent: 0.5,
	scaleEndExtent  : 0.4,
	scaleOversweep: 15,
	scaleSweepDirection: "counterclockwise"
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

- [Configuring the Tick Marks (igRadialGauge)](igRadialGauge-Configuring-Tick-Marks.html): This topic provides a conceptual overview of tick marks with the `igRadialGauge`™ control. It describes the tick marks’ properties and provides an example of how to implement them.

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