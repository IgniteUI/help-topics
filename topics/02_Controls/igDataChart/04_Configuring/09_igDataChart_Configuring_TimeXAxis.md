<!--
|metadata|
{
    "fileName": "igdatachart-configuring-timexaxis",
    "controlName": "igDataChart",
    "tags": ["Charting","How Do I","Axis","TimeXAxis"]
}
|metadata|
-->

# Configuring the TimeXAxis (igDataChart)

This topic demonstrates, with code examples, how to use TimeXAxis in the `igDataChart`™ control. The benefit of using TimeXAxis is to dynamically change label formats as you zoom in or out of the data.  In addition, axis breaks can be created which omit dates within a range.  For example, weekends can be skipped.

This topic is organized as follows:

-   [Introduction](#introduction)
-   [Axis Break Properties](#breaks)

Note: The following sections are only required if the default labels (i.e. formatting and intervals) need to be changed.
-   [Axis Label Format Properties](#labelformats)
-   [Axis Interval Properties](#intervals)
-   [Related Content](#related-content)

### <a id="introduction"></a>Introduction

![](images/igDataChart_%28TimeXAxis%29_1.png)

Figure 2: Sample implementation of the TimeXAxis

The TimeXAxis may be used with the following series:
-	Category Series
-	Financial Indicators
-   Financial Series

For more information on what axis types are required by a specific series, refer to the Series Requirements topic.

Note:
All category axes require data binding and data mapping in order to show labels on the axis lines. Refer to the Getting Started with Data Chart topic for code example how to bind data to the category.

### <a id="breaks"></a>Axis Breaks Properties

The TimeXAxis has the option to exclude intervals of data with Breaks. As a result, labels will not appear at the excluded interval. For example, working/non-working, holidays, and/or weekends.

Several axis breaks can be added to the Breaks property and configured by using a unique Start, End and Interval.


<table class="table">
	<thead>
		<tr>
			<th>Property Name</th>
			<th>Property Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>`Breaks`</td>
			<td>array</td>
			<td>A list of axis label intervals. The interval selected is according to the visible axis range.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Start`</td>
			<td>Date</td>
			<td>The start time of the axis break.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`End`</td>
			<td>Date</td>
			<td>The end time of the axis break.</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Interval`</td>
			<td>number</td>
			<td>The interval at which to repeat this break, expressed as a Date.</td>
		</tr>
	</tbody>
</table>

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
![](images/igDataChart_%28TimeXAxis_Break%29_1.png)
Figure 4: TimeXAxis displaying data from Monday through Friday in 2010.

### <a id="labelformats"></a>Axis Label Format Properties

The TimeXAxis has the following label format properties:

An instance of TimeAxisLabelFormat can be added to the LabelFormatsproperty associated with each interval allowed, including a unique Format and Range. This can be especially useful for drilling data from years to milliseconds to adjust the labels depending visible axis range.

<table class="table">
	<thead>
		<tr>
			<th>Property Name</th>
			<th>Property Type</th>
			<th>Description</th>
		
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>`LabelFormats`</td>
			<td>array</td>
			<td>A list of label formats. The label format selected will be the one with the largest range smaller than the visible range of the axis.</td>
		   
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Format`</td>
			<td>string</td>
			<td>The DateTime format string to apply according to the visible axis range.</td>
		   
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Range`</td>
			<td>number</td>
			<td>The axis range threshold at which to apply the label format, represented in milliseconds.</td>
		   
		</tr>
	</tbody>
</table>

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
				       range: 1000
				    },
					{
					   format: "hh:mm",
					   range: 60 * 1000 
					},
					{
					   format: "MMM dd",
					   range: 24 * 60 * 60 * 1000
					},
					{
					   format: "MMM yy",
					   range: 365.24 * 24 * 60 * 60 * 1000 
					},
				    {
				       format: "yyyy",
                       range: 5 * 365 * 24 * 60 * 60 * 1000  
				    }],
                }, 
            });
        });
    </script>
	```
![](images/igDataChart_%28TimeXAxis_LabelFormats%29_1.png)

Figure 2: The XamDataChart control with a custom TimeAxisLabelFormat of "hh:mm:ss"

### <a id="intervals"></a>Axis Interval Properties

The TimeXAxis provides an Intervals collection of type TimeAxisInterval. Each TimeAxisInterval added to the collection is responsible for assigning a unique Interval, Range, and IntervalType.

An instance of TimeAxisInterval can be added to the Intervals property associated with each IntervalType, including a unique Interval and Range. This can be especially useful for drilling data from years to milliseconds to provide unique spacing between labels depending on the range of time shown by the chart.


<table class="table">
	<thead>
		<tr>
			<th>Property Name</th>
			<th>Property Type</th>
			<th>Description</th>
		
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>`Intervals`</td>
			<td>array</td>
			<td>A list of axis label intervals. The interval selected is according to the visible axis range.</td>
		   
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Interval`</td>
			<td>number</td>
			<td>The interval, expressed as a multiple of IntervalType.</td>
		   
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`IntervalType`</td>
			<td>enumeration</td>
			<td>The unit of time for the interval.</td>
		   
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Range`</td>
			<td>number</td>
			<td>The axis range threshold at which to apply the label format, represented in milliseconds.</td>
		   
		</tr>
	</tbody>
</table>

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
    					Range: 1000
                    },	
        			{
        				intervalType: "Minutes",
        				interval: 5,
        				Range: 60 * 1000 
                    },
        			{
        				intervalType: "Hours",
        				interval: 1,
        				Range: 60 * 60 * 1000 
        			},
                    {
                        intervalType: "Days",
                        interval: 12,
                        Range: 24 * 60 * 60 * 1000  
                    },
                    {
                        intervalType: "Months",
                        interval: 12,
                        Range: 365.24 * 24 * 60 * 60 * 1000  
                    },
                    {
                        intervalType: "Years",
                        interval: 1,
                        Range: 5 * 365 * 24 * 60 * 60 * 1000 
                    }],
                }, 
            });
        });
    </script>
	```
![](images/igDataChart_%28TimeXAxis_Interval%29_1.png)
Figure 3: TimeXAxis displaying data every 48 hours.

### <a id="related-content"></a>Related Topics

The following topic provides additional information related to this topic:

-	[Adding igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.

-	[Data Chart - Time X-Axis with Axis Breaks](%%SamplesUrl%%/data-chart/time-x-axis.html):  This sample demonstrates the Time X-Axis with axis breaks in the `igDataChart` control.