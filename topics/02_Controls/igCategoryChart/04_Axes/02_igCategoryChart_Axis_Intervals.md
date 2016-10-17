<!--
|metadata|
{
    "fileName": "igcategorychart-axis-intervals",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Axis Interval

### Purpose
This topic demonstrates explains how to configure the major and minor intervals for chart axes of the igCategoryChart control. 

In the igCategoryChart control, axis major interval specifies how frequent major gridlines and axis labels are rendered on an axis. Similarly, axis minor interval specifies how frequent minor gridlines are rendered on an axis.


### In this topic

This topic contains the following sections:

- [Configuring XAxis and YAxis Major and Minor Intervals](#ConfiguringXAxis)
- [Code Snippet](#codesnippet)
- [Related Topics](#relatedcontent)

### <a id="ConfiguringXAxis"/>Configuring XAxis and YAxis Major and Minor Intervals

In order to configure|Use this property|And set it to
---|---|---
The frequency of major interval gridlines | `xAxisInterval`,`yAxisInterval` | This value provides adequate spacing for axis labels and major gridlines, if used. Note that the interval for axis labels will also be set by this value, displaying one label at the point on the axis associated with the interval.<br/>On X axes, this value is represented as an index between the first and last category item. Generally, this value should equal to 10-20% of total numbers of category items so that all axis labels fit on axis so that they are not clipped by other axis labels.<br/>On date time axes, this value is represented as time span between axis minimum value and axis maximum value. <br/> On Y axes, this value is represented as double between axis minimum value and axis maximum value. By default, numeric axes will automatically calculate and find a nice and round interval based on axis minimum values and maximum value.<br/>On date time axes, this value is represented as time span between axis minimum value and axis maximum value.
The color of the major interval gridlines | `xAxisMajorStroke`,`yAxisMajorStroke` | A color of axis major gridlines.
The thickness of the major interval gridlines | `xAxisMajorStrokeThickness`,`yAxisMajorStrokeThickness` | A thickness in pixels of the axis major gridlines set as a double value
The frequency of minor interval gridlines | `xAxisMinorInterval`,`yAxisMinorInterval` | This value provides adequate spacing for minor gridlines, which are always rendered between major gridlines. As result, a value of XAxisMinorInterval property should always be much smaller (usually 2-5 time smaller) than the value of XAxisInterval property of an axis.<br/>On category axes, this value is represented as fraction of major Interval property. Generally, this value should equal to between 0.25 and 0.5 <br/> On numeric axes, this value is represented as double between axis minimum value and axis maximum value. By default, numeric axes will not automatically calculate minor interval based on axis minimum values and maximum value. <br/> On date time axes, this value is represented as time span between axis minimum value and axis maximum value.
The color of the minor interval gridlines|`xAxisMinorStroke`, `yAxisMinorStroke` | A color of axis minor gridlines.
The thickness of the  minor interval gridlines|`xAxisMajorStrokeThickness`, `yAxisMajorStrokeThickness`|A thickness in pixels of the axis major gridlines set as a double value

### <a id="codesnippet"/> Code Snippet

The following code snippet demonstrates how to configure the interval on the x-axis.

*In HTML:*

```html

<ig:XamCategoryChart x:Name="chart1"  
                     XAxisInterval="1"
                     XAxisMinorInterval="1" 
                     XAxisMinorStroke="Red"    
                     XAxisMajorStroke="Green"  
                     XAxisMinorStrokeThickness="1"
                     XAxisMajorStrokeThickness="1"
                      />
```

![](images/categorychart-intervals-01.png)

## <a id="relatedtopics"/>Related Topics:

- [Walkthrough](igcategorychart-adding.html)

- [Binding to Data](categorychart-binding-to-data.html)

- [Configuring Axis Gap and Overlap](configuring-axis-gap-and-overlap.html)

- [Configuring Axis Labels](configuring-axis-labels.html)

- [Configuring Axis Range](configuring-axis-range.html)

- [Configuring Axis Tickmarks](configuring-axis-tickmarks.html)

- [Configuring Axis Titles](configuring-axis-titles.html)