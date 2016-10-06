# Configuring Axis Label 

The igCategoryChart control allows you full control over configuring, formatting and styling the labels displayed on your chart. By default, you do not need to explicitly set the labels. The Category Chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels. 

### Label Settings

In the igCategoryChart™ control, you can change the rotation angle, margin, horizontal/vertical alignment, opacity, padding and visibility, of the x-axis and y-axis labels using the following properties:

Property Name|Property Type|Description
---|---|---
`xAxisLabelAngle`, `yAxisLabelAngle` | double |Determines angle rotation of x-axis or y-axis labels 
`xAxisLabelHorizontalAlignment`, `yAxisLabelHorizontalAlignment` |HorizontalAlignment |Determines horizontal alignment of the x-axis or y-axis labels 
`xAxisLabelVerticalAlignment`, `yAxisLabelVerticalAlignment`|VerticalAlignment|Determines vertical alignment of the x-axis or y-axis labels
`xAxisLabelVisibility`, `yAxisLabelVisibility`|Visibility bool|Determines whether or not x-axis or y-axis labels are visible
`xAxisLabelLeftMargin`, `yAxisLabelLeftMargin`, `xAxisLabelRightMargin`, `yAxisLabelRightMargin`|Thickness|Determines the margin applied to each x-axis or y-axis labels


### Styling
The look and feel of the category chart's x-axis and y-axis labels can be styled in many aspects, the main of which are applying different font styles such as font type, font size and font weight to the labels. This can be achieved through the following properties:

Property Name|Property Type|Description
---|---|---
`xAxisLabelTextStyle`,`yAxisLabelTextStyle`|object|Determines the font family, size, style to be used for the x-axis or y-axis labels
`xAxisLabelFontSize`, `yAxisLabelFontSize`|double|Determines the size of the font for the x-axis or y-axis labels 
`xAxisLabelFontStretch`,`yAxisLabelFontStretch`|FontStretch|Determines the font stretch to applied to the x-axis or y-axis labels
`xAxisLabelFontStyle`,`yAxisLabelFontStyle`|Visibility bool|Determines the font style of the x-axis or y-axis labels
`xAxisLabelFontWeight`,`yAxisLabelFontWeight`|FontWeight|Determines the font weight of the x-axis or y-axis labels
`xAxisLabelTextColor`,`yAxisLabelTextColor`|Brush|Determines the text color of the x-axis or y-axis labels 


### Code Snippet
The following code example shows how to style labels on the x-axis using style properties:

*In HTML:*

```html
$(function () {
            $("#chart").igCategoryChart({
                dataSource: data,
                xAxisLabelTextStyle: "16pt Verdona",
                xAxisLabelRightMargin: "14",
                xAxisLabelTextColor: "red"
            });
        });
```




The following screenshot demonstrates the igCategoryChart control with the x-axis label styled.

![](images/categorychart_configuring_axis_labels_01.png)

## Related Topics:

- [Walkthrough](categorychart-walkthrough.html)

- [Binding to Data](categorychart-binding-to-data.html)