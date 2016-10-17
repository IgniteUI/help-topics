<!--
|metadata|
{
    "fileName": "categorychart-configuring-chart-types",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Configuring Chart Types

## Setting chart type

As described in the [Chart Types](categorychart-chart-types.html) topic the chart can render different types of chart with a simple change of a property.

To assign chart type during initialization:

```javascript
$("#theChart").igCategoryChart({
    dataSource: data,
    chartType: "spline"
});
```

To change chart type after initialization:

```javascript
$("#theChart").igCategoryChart("option", "chartType", "area");
```

## Properties

To further customize the look of the chart there is a number of properties available that allows doing just that.

Property Name|Property Type|Default Value|Description
---|---|---|---
`brushes`|object|null|Gets or sets the palette of brushes to use for coloring the chart series. The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
`negativeBrushes`|object|null|Gets or sets the palette used for coloring negative items of Waterfall chart type. The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
`outlines`|object|null|Gets or sets the palette of brushes to use for outlines on the chart series. The value provided should be an array of CSS color strings or JavaScript objects defining gradients. Optionally the first element can be a string reading "RGB" or "HSV" to specify the interpolation mode of the collection.
`resolution`|number|1|Gets or sets the rendering resolution for series in this chart. Where n = Resolution, for every n horizontal pixels, combine all items into a single datapoint.  When Resolution = 0, all datapoints will be rendered as graphical objects.  Charts with a higher resolution will have faster performance.
`thickness`|number|1|Gets or sets the thickness of the chart series. Depending on the ChartType, this can be the main brush used, or just the outline.
`xAxisGap`|number|0|Gets or sets the amount of space between adjacent categories for the X-axis. Gets or sets the gap is silently clamped to the range [0, inf] when used.
`xAxisOverlap`|number|0|Gets or sets the amount of overlap between adjacent categories for the X-axis. Gets or sets the overlap is silently clamped to the range [-1, 1] when used.
`xAxisInverted`|bool|null|Gets or sets whether the direction of the X-axis is inverted, placing the first data items on the right side instead of left side.
`yAxisInverted`|bool|null|Gets or sets whether the direction of the Y-axis is inverted, placing minimum numeric value at the top of the axis instead of bottom.

## Example

The following example exercises some of the properties mentioned above.
To see more configuration options, follow the links at the bottom of this topic.

```javascript
$("#theChart").igCategoryChart({
	dataSource: data,
	chartType: "waterfall",
	brushes: ["blue", "green"],
	negativeBrushes: ["red", "yellow"],
	outlines: ["black"],
	thickness: 5
});
```
And here is the result of running this code on a web page:
![](images/chart-types-configure.png)

## Related topics

- [Walkthrough](categorychart-walkthrough.html)

- [Chart Types](categorychart-chart-types.html)

- [Axis Gap and Overlap](categorychart-configuring-axis-gap-and-overlap.html)