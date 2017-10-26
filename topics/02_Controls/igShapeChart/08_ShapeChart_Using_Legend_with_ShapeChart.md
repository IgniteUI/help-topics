<!--
|metadata|
{
    "fileName": "shapechart-using-legend-with-shapechart",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "Legend"]
}
|metadata|
-->

# Using Legend (igShapeChart)

This topic explains, with a code example, how to add a legend to the igShapeChart control.

### Required Background

The following topics are prerequisites to understanding this topic:

- [igShapeChart Overview](shapechart-binding-to-shapefile-data.html): This topic provides conceptual information about the igShapeChart control including its main features, minimum requirements, and user functionality.
- [Getting Started with igShapeChart](shapechart-binding-to-shapefile-data.html): This topic explains, with a code example, how to add the igShapeChart to your application.

### In this topic
- [Introduction](#Introduction)
- [Preview](#Preview)
- [Code Example](#CodeExample)
- [Related Content](#Related)
- [Samples](#Samples)

<a id="Introduction" />
### Introduction

The igShapeChart control has support for showing legends, but does not currently display legends for any series in the chart by default. In order to show a common legend for your shape chart, you need to set the legend option on the chart.

The legend element that will be created will pull the names of its items from the Title property of the series that are plotted in the chart, and it will show your series' names in the format of "Series Type (XMemberPath vs YMemberPath)" by default. You can format the name shown in the Legend by utilizing the SeriesAdded event. The event arguments of this event can net you the series that has been added, allowing you to modify the Title of that series accordingly.

<a id="Preview" />
### Preview

The following is a preview of what the igShapeChart will look like when following the code example given below:

![](images/shapechart_legend.png)

<a id="CodeExample" />
### Code Example

The following code example shows how to use a legend for multiple series plotted within the igShapeChart control.

**In HTML:**
```html
<script>
    var list1 = [
    { "X": 20, "Y": 20 },
    { "X": 20, "Y": 40 },
    { "X": 40, "Y": 40 },
    { "X": 40, "Y": 20 }];

    var list2 = [
    { "X": 60, "Y": 20 },
    { "X": 60, "Y": 40 },
    { "X": 80, "Y": 40 },
    { "X": 80, "Y": 20 }];

    var data = [[list1], [list2]];
            
    $(function () {
        $("#shapeChart").igShapeChart({                
            dataSource: data,
            width: "500px",
            height: "500px",
            xAxisMinimumValue: 0,
            yAxisMinimumValue: 0,
            xAxisMaximumValue: 90,
            yAxisMaximumValue: 50,
            legend: { element: "legend", type: "legend" },
        });
    });
</script>
```

<a id="Related" />
### Related Content

- [Binding to Shape File Data](shapechart-binding-shapefile-data.html)
- [Binding to Break Even Data](shapechart-binding-break-even-data.html)

<a id="Samples" />
### Samples

The following sample provides additional information related to this topic.

-	[Using Legend](%%SamplesUrl%%/shape-charts/using-legend):  This sample demonstrates usage of a legend with the `igShapeChart` control.