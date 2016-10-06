<!--
|metadata|
{
    "fileName": "igcategorychart-configuring-axis-gap-and-overlap",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Configuring Axis Gap and Overlap on {CategoryChartName}

## Topic Overview

### Purpose

This topic provides information on configuring axis gap and axis overlap in the `igCategoryChart`™ control.

### Required background

The following topic is a prerequisite to understanding this topic:
- [CategoryChart Walkthrough](categorychart-walkthrough.html)

This topic demonstrates how to add the `igCategoryChart`™ control to the page and bind it to data.

### In this topic

## Axis Gap

### Overview

The Axis Gap feature of the igCategoryChart control allows setting the gap between series of the chart.

### Property



### Example

```javascript
$("#chart").igCategoryChart({
    title: "Countries population",
    xAxisTitle: "Countries",
    yAxisTitle: "Millions of people",
    dataSource: data,
    chartType: "column",
    xAxisGap: 0.5
});
```

## Axis Overlap

## Related Content

### Topics

### Samples