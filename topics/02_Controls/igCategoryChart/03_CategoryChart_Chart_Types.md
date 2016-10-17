<!--
|metadata|
{
    "fileName": "categorychart-chart-types",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Chart Types

## Overview

The Category Chart simplifies assignment of the type of rendering compared to the Data Chart.
In order to select how data should be displayed it is enough to set the `chartType` property of this chart.
Below listed all of the types that the Category Chart supports.

Special case is the `auto` setting of that property. If `auto` is used the chart will analyze assigned data and will assign the most suitable chart type.

Default value of that property is `line`.

## Supported chart types

Property Value|Description|Example
---|---|---
`line`|Specifies category line series with markers at each data point|![](images/chart-type-line.png)
`area`|Specifies category area series|![](images/chart-type-area.png)
`column`|Specifies category column chart with vertical rectangles at each data point|![](images/chart-type-column.png)
`point`|Specifies category point chart with markers at each data point|![](images/chart-type-point.png)
`stepLine`|Specifies category step line chart|![](images/chart-type-stepline.png)
`stepArea`|Specifies category step area chart|![](images/chart-type-steparea.png)
`spline`|Specifies category spline line series with markers at each data point|![](images/chart-type-spline.png)
`splineArea`|Specifies category spline area series|![](images/chart-type-splinearea.png)
`waterfall`|Specifies category waterfall chart|![](images/chart-type-waterfall.png)
`auto`|Specifies automatic selection of chart type based on suggestions from Data Adapter

## Related topics

- [Walkthrough](igcategorychart-adding.html)

- [Configuring Chart Types](categorychart-configuring-chart-types.html)