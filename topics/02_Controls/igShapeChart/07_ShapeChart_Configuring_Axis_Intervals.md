<!--
|metadata|
{
    "fileName": "shapechart-configuring-axis-intervals",
    "controlName": "igShapeChart",
    "tags": ["API", "shapechart", "Interval"]
}
|metadata|
-->

# Configuring Axis Intervals (igShapeChart)

### Purpose
This topic demonstrates explains how to configure the major and minor intervals for chart axes of the igShapeChart control. 

In the igShapeChart control, axis major interval specifies how frequent major gridlines and axis labels are rendered on an axis. Similarly, axis minor interval specifies how frequent minor gridlines are rendered on an axis.


### In this topic

This topic contains the following sections:

- [Configuring XAxis and YAxis Major and Minor Intervals](#ConfiguringXAxis)
- [Code Snippet](#codesnippet)
- [Related Topics](#relatedtopics)

### <a id="ConfiguringXAxis"/>Configuring XAxis and YAxis Major and Minor Intervals

In order to configure|Use this property|And set it to
---|---|---
The frequency of major interval gridlines | `xAxisInterval`, </br> `yAxisInterval` | This value provides configurable spacing for axis labels and major gridlines, if used. Note that the interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval.<br/><br/> On the igShapeChart control's axes, this value is represented as a double between the axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.
The color of the major interval gridlines | `xAxisMajorStroke`, </br> `yAxisMajorStroke` | A color of axis major gridlines.
The thickness of the major interval gridlines | `xAxisMajorStrokeThickness`, </br> `yAxisMajorStrokeThickness` | A thickness in pixels of the axis major gridlines set as a double value
The frequency of minor interval gridlines | `xAxisMinorInterval`, </br> `yAxisMinorInterval` | This value provides adequate spacing for minor gridlines, which are always rendered between major gridlines. As result, a value of an igShapeChart minor interval property should always be much smaller (usually 2-5 time smaller) than the value of the corresponding major interval property of an axis. <br/></br> This value is represented as double between axis minimum value and axis maximum value. By default, numeric axes will not automatically calculate minor interval based on axis minimum values and maximum value.
The color of the minor interval gridlines|`xAxisMinorStroke`, <br/> `yAxisMinorStroke` | A color of axis minor gridlines.
The thickness of the  minor interval gridlines|`xAxisMajorStrokeThickness`, </br> `yAxisMajorStrokeThickness`|A thickness in pixels of the axis major gridlines set as a double value

### <a id="codesnippet"/> Code Snippet

The following code snippet demonstrates how to configure the interval on the x-axis.

**In HTML:**

```html

$(function () {
   $("#chart").igShapeChart({
       xAxisInterval: 20,
       xAxisMinorInterval: 5 , 
       xAxisMinorStroke: "Red",    
       xAxisMajorStroke: "Green",  
       xAxisMinorStrokeThickness: 1,
       xAxisMajorStrokeThickness: 10
    });
});
```

![](images/shapechart-intervals-01.png)

## <a id="relatedtopics"/>Related Topics:

- [Configuring Axis Labels](shapechart-configuring-axis-labels.html)

- [Configuring Axis Range](shapechart-configuring-axis-ranges.html)


<a id="Samples" />
### Samples

The following sample provides additional information related to this topic.

-	[Configuring Axis Intervals](%%SamplesUrl%%/shape-charts/axis-intervals):  This sample demonstrates how to configure the axis intervals for the `igShapeChart` control.