<!--
|metadata|
{
    "fileName": "shapechart-configuring-axis-titles",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "Axes"]
}
|metadata|
-->

# Configuring Axis Titles

### Purpose

This topic provides information on configuring the x-axis and y-axis titles in the igShapeChart control.

### In this Topic

This topic contains the following sections:

- [Property Settings](#propertysettings)
- [Code Snippet](#codesnippet)
- [Related Content](#relatedtopics)

<a id="propertysettings" />
## Property Settings

You can customize the look and feel of the `igShapeChart` control's x-axis and y-axis titles in many different ways, such as applying different font styles, margins, and alignment. This can be achieved by utilizing the following properties:

Property Name|Property Type|Description
---|---
`xAxisTitle`, </br> `yAxisTitle`|string|Gets or sets the Text to display below the X-Axis or to the Left of the Y-Axis.
`xAxisTitleAlignment`, </br> `yAxisTitleAlignment`|enumeration|Gets or sets Horizontal alignment of the X-axis title or the Vertical alignment of the Y-Axis title.
`xAxisTitleAngle`, </br> `yAxisTitleAngle`|number|Gets or sets the angle of rotation for the corresponding axis title.
`xAxisTitleBottomMargin`, </br> `yAxisTitleBottomMargin`|number|Gets or sets the bottom margin of a title on the corresponding axis.
`xAxisTitleLeftMargin`, </br> `yAxisTitleLeftMargin`|number|Gets or sets the left margin of a title on the corresponding axis.
`xAxisTitleMargin`, </br> `yAxisTitleMargin`|number|Gets or sets the margin around a title on the corresponding axis.
`xAxisTitleRightMargin`, </br> `yAxisTitleRightMargin`|number|Gets or sets the right margin of a title on the corresponding axis.
`xAxisTitleTextColor`, </br> `yAxisTitleTextColor`|string|Gets or sets color of title on the corresponding axis.
`xAxisTitleTextStyle`, </br> `yAxisTitleTextStyle`|string|Gets or sets CSS font property for title on the corresponding axis.
`xAxisTitleTopMargin`, </br> `yAxisTitleTopMargin`|number|Gets or sets the top margin of a title on the corresponding axis.

<a id="codesnippet" />
## Code Snippet
The following code example shows how to style the titles on the igShapeChart axes using some of the properties mentioned above:

**In HTML:**

```html
$(function () {
    $("#shapeChart").igShapeChart({                
            dataSource: data,
            xAxisTitle: "X-Axis Title",
            xAxisTitleTextStyle: "16pt Arial",                    
            xAxisTitleAngle: 5,
            yAxisTitle: "Y-Axis Title",
            yAxisTitleTextColor: "Red",
            yAxisTitleAngle: 90,
        });
    });
```

The following screenshot demonstrates the igShapeChart control with the titles styled using the above code snippet:

![](images/shapechart-axis-titles.png)

<a id="relatedtopics" />
### Related Content

- [Getting Started with ShapeChart](shapechart-getting-started-with-shapechart.html)

- [Binding to Shapefile Data](shapechart-binding-shapefile-data.html)