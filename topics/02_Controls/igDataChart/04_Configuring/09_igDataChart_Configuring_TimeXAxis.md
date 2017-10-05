<!--
|metadata|
{
    "fileName": "igdatachart-configuring-axis-intervals",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Using TimeXAxis with the (igDataChart)

This topic demonstrates, with code examples, how to use TimeXAxis in the `igDataChart`™ control. The benefit of using TimeXAxis is to accurately label data, dynamically, as either date, time or both at any range necessary. 

This topic is organized as follows:

-   [Introduction](#introduction)
-   [Axis Label Format Properties](#labelformats)
-   [Axis Interval Properties](#intervals)
-   [Axis Break Properties](#breaks)
-   [Related Content](#related-content)

### <a id="introduction"></a>Introduction

The TimeXAxis may be used with the following series:
-	Category Series
-	Financial Indicators
-   Financial Series

For more information on what axis types are required by a specific series, refer to the Series Requirements topic.

Note:
All category axes require data binding and data mapping in order to show labels on the axis lines. Refer to the Getting Started with Data Chart topic for code example how to bind data to the category.

### <a id="labelformats"></a>Axis Label Format Properties

The TimeXAxis has the following label format properties:

LabelFormats – a collection of type TimeAxisLabelFormat. Each TimeAxisLabelFormat added to the collection is responsible for assigning a unique Format, and Range.

An instance of TimeAxisLabelFormat can be added to the LabelFormatsproperty associated with each IntervalType, including a unique Format and Range. This can be especially useful for drilling data from years to milliseconds to adjust the labels depending on the range of time shown by the chart.

Configurations can be customized by using the Format and Range properties of each TimeAxisLabelFormat that is added to the axis.
eg. The following lists a typical set of label formats for the given amount of time in view:

1.	1825 days or more (eg. 5 years) will result in a format of "yyyy".
2.	365 days or more (eg. 1 year) will result in a format of "MMM yy".
3.	1 day or more will result in a format of "MMM dd".
4.	5 hours or more will result in a format of "hh:mm".
5.	Less than 30 minutes will result in a format of "hh:mm:ss".

**In Javascript:**

	```js
	<script type="text/javascript">
        $(function () {
            $("#chart").igDataChart({
                dataSource: data,
                axes: [{
                    type: "time",
                    name: "xAxis",
                    dateTimeMemberPath: "Date",
                    labelFormats: [
                    {
				       format: "hh:mm:ss", 
				       range: 0 * 0 * 0 * 0 * 0
				    },
					{
					   format: "hh:mm",
					   range: 0 * 5 * 0 * 0 * 0 
					},
					{
					   format: "MMM dd",
					   range: 1 * 0 * 0 * 0 * 0 
					},
					{
					   format: "MMM yy",
					   range: 365 * 0 * 0 * 0 * 0 
					},
				    {
				       format: "yyyy",
                       range: 1825 * 0 * 0 * 0 * 0 
				    }],
                }, 
            });
        });
    </script>
	```

### <a id="intervals"></a>Axis Interval Properties

The TimeXAxis replaces the conventional Interval property with an Intervals collection of type TimeAxisInterval. Each TimeAxisInterval added to the collection is responsible for assigning a unique Interval, Range, and IntervalType.

An instance of TimeAxisInterval can be added to the Intervals property associated with each IntervalType, including a unique Interval and Range. This can be especially useful for drilling data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart.

The following code snippet demonstrates how to implement several Intervals for each IntervalType XamDataChart control. The result is shown in Figure 3 below.

	```js
	<script type="text/javascript">
        $(function () {
            $("#chart").igDataChart({
                dataSource: data,
                axes: [{
                    type: "time",
                    name: "xAxis",
                    dateTimeMemberPath: "Date",
                    intervals: [
                    {
                        intervalType: "Seconds",
                        interval: 36,
                        range: 0 * 0 * 0 * 0 * 0
                    },
                    {
                        intervalType: "Minutes",
                        interval: 5,
                        Range: 0 * 0 * 30 * 0 * 0
                    },
                    {
                        intervalType: "Hours",
                        interval: 48,                                
                        Range: 0 * 5 * 0 * 0 * 0
                    },
                    {
                        intervalType: "Days",
                        interval: 12,
                        Range: 1 * 0 * 0 * 0 * 0
                    },
                    {
                        intervalType: "Months",
                        interval: 12,
                        Range: 365 * 0 * 0 * 0 * 0
                    },
                    {
                        intervalType: "Years",
                        interval: 1,
                        Range: 1825 * 0 * 0 * 0 * 0
                    }],
                }, 
            });
        });
    </script>
	```


### <a id="breaks"></a>Axis Breaks Properties

The TimeXAxis has the option to exclude intervals of data in view. As a result, labels will not appear at the excluded interval. For example, working/non-working, holidays, and/or weekends.

Configurations can be further customized by using the Start, End and Interval properties of TimeAxisBreak.

The following code snippets show how to skip labels on the TimeXAxis in the XamDataChart for a range of years, causing uneven intervals. The result is shown in Figure 4 below.

 **In Javascript:**

	```js
	<script type="text/javascript">
        $(function () {
            $("#chart").igDataChart({
                dataSource: data,
                axes: [{
                    type: "time",
                    name: "xAxis",
                    dateTimeMemberPath: "Date"
                    label: "DateString",
                    breaks: [{
				        start: new Date("2009-12-26T00:00:00"),
						end: new Date("2009-12-27T23:59:59.99"),
				        interval: 7 * 24 * 60 * 60 * 1000
						}],
                }, {
                    type: "numericY",
                    name: "yAxis",
                }],
            });
        });
    </script>
	```

### Related Topics

The following topic provides additional information related to this topic:

-	[Adding igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.