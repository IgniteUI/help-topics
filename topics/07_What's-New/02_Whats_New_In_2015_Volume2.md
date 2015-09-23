<!--
|metadata|
{
    "fileName": "whats-new-in-2015-volume2",
    "controlName": [],
    "tags": []
}
|metadata|
-->

#What's New in 2015 Volume 2

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2015 Volume 2 release.


##What’s New Summary

The following summarizes what’s new in 2015 Volume 2. Additional details follow.

### General

Feature | Description
---|---
[Stub](#stub) | Stub description

### igDataChart

Feature | Description
---|---
[New Axis Intervals](#chart-axis-intervals) | The Major and Minor intervals feature of the `igDataChart` control allows you to apply intervals with the specified color and thickness to the x and y axes of the `igDataChart` control.

##General

### <a id="stub"></a>Stub

Stub description


## igDataChart

### <a id="chart-axis-intervals"></a> New Axis Intervals

The igDataChart now allows you to implement both Major and Minor intervals for all Numeric and Category type axes, via the Interval and MinorInterval properties. This feature also includes the ability to customize the color and thickness for intervals via the MajorStroke, MajorThickness, MinorStroke and MinorThickness properties, exposed from the chart axes.

The following example demonstrates the use of Major and Minor Axis Intervals on the NumericX Axis of an igDataChart LineSeries.



![](images/jQuery_AxisIntervals_NumericX_01.png)

This example demonstrates the use of Major and Minor Axis Intervals on the NumericY Axis of an igDataChart LineSeries.

![](images/jQuery_AxisIntervals_NumericY_01.png)

#### Related Topics

-   [igDataChart Overview](igDataChart-Overview.html)
-   [Configuring Axis Intervals (igDataChart)](igdatachart-configuring-axis-intervals.html)

#### Related Samples

-   [NumericAxesIntervals](%%SamplesUrl%%/data-chart/numeric-xaxis-intervals) : This sample demonstrates the use of Major and Minor Axis Intervals on the ScatterLineSeries, using NumericX and NumericY Axes.
-   [CategoryXAxisIntervals](%%SamplesUrl%%/data-chart/category-xaxis-intervals) : This sample demonstrates the use of Major and Minor Axis Intervals on the ColumnSeries, using CategoryXAxis.

