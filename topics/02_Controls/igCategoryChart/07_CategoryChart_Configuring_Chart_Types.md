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

As described in the [Chart Types](categorychart-chart-types.html) topic the chart can render differnt types of chart with a simple change of a property.

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

## Setting 

## Related topics

- [Walkthrough](categorychart-walkthrough.html)

- [Chart Types](categorychart-chart-types.html)