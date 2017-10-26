<!--
|metadata|
{
    "fileName": "shapechart-configuring-axis-labels",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "AxisLabels"]
}
|metadata|
-->

# Configuring Axis Labels (igShapeChart)

The `igShapeChart` control allows you full control over configuring, formatting and styling the labels displayed on your chart. By default, you do not need to explicitly set the labels. The Shape Chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels.

### In this topic

This topic contains the following sections:


- [Label Settings](#ConfigureLabelSettings)
* [Styling](#ConfigureStyling)
* [Related Content](#RelatedContent)
- [Samples](#Samples)

<a id="ConfigureLabelSettings" />
### Label Settings

In the {ShapeChartName} control, you can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility, of the x-axis and y-axis labels using the following properties:

Property Name|Property Type| Description
---|---
`xAxisLabelAngle`,`xAxisLabelAngle`|number|Determines angle rotation of x-axis or y-axis labels
`xAxisLabelHorizontalAlignment`, `yAxisLabelHorizontalAlignment`|enumeration|Determines horizontal alignment of the x-axis or y-axis labels
`xAxisLabelVerticalAlignment`, `yAxisLabelVerticalAlignment`|enumeration|Determines vertical alignment of the x-axis or y-axis labels
`xAxisLabelLeftMargin`, `yAxisLabelLeftMargin`|number|Determines the left margin applied to each x-axis or y-axis labels
`xAxisLabelTopMargin`, `yAxisLabelTopMargin`|number|Determines the top margin applied to each x-axis or y-axis labels
`xAxisLabelRightMargin`, `yAxisLabelRightMargin`|number|Determines the bottom margin applied to each x-axis or y-axis labels
`xAxisLabelBottomMargin`, `yAxisLabelBottomMargin`|number|Determines the bottom margin applied to each x-axis or y-axis labels

<a id="ConfigureStyling" />
### Styling

The look and feel of the shape chart’s x-axis and y-axis labels can be styled in many aspects, the main of which are applying different font styles such as font type, font size and font weight to the labels. This can be achieved through the following properties:

Property Name|Property Type| Description
---|---
`xAxisLabelTextStyle`, `yAxisLabelTextStyle`|string|Determines angle rotation of x-axis or y-axis labels
`xAxisLabelTextColor`, `yAxisLabelTextColor`|string|Determines text color of the x-axis or y-axis labels
`xAxisFormatLabel`, `xAxisFormatLabel`|object|Gets or sets function which takes an context object and returns a formatted label for the x-axis or y-axis labels.


### <a id="codesnippet"/>Code Snippet
The following code example shows how to style labels on the x-axis using style properties:

*In HTML:*

```html
$(function () {
            $("#chart").igShapeChart({
                dataSource: data,
                xAxisLabelTextStyle: "16pt Verdana",
                xAxisLabelRightMargin: "14",
                xAxisLabelTextColor: "red"
            });
        });
```

The following screenshot demonstrates the igShapeChart control with the x-axis label styled.

![](images/shapechart-configuring-axis-labels-01.png)

## <a id="relatedtopics"/>Related Topics:

- [Getting Started with ShapeChart](shapechart-getting-started-with-shapechart.html)

- [Binding to Shapefile Data](shapechart-binding-shapefile-data.html)


<a id="Samples" />
### Samples

The following sample provides additional information related to this topic.

-	[Configuring Axis Labels](%%SamplesUrl%%/shape-charts/axis-labels):  This sample demonstrates how to configure the axis labels for the `igShapeChart` control.