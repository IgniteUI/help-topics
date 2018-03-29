<!--
|metadata|
{
    "fileName": "igdatachart-configuring-percentchangeyaxis",
    "controlName": "igDataChart",
    "tags": ["Charting","How Do I","Axis","PercentChangeYAxis"]
}
|metadata|
-->
# Configuring the PercentChangeYAxis (igDataChart)

This topic demonstrates, with code examples, how to use the PercentChangeYAxis in the `igDataChart` control. This axis allows the ability to show percent values as opposed to the actual bound values to the chart.

### In this topic

This topic contains the following sections:
-   [Overview](#overview)
-   [Code Example](#code_example)
-   [Related Content](#related)

<a id="overview"></a>
### Overview

The PercentChangeYAxis may be used with the following series types:

- Category Series
- Range Series
- Financial Indicators
- Financial Series
- Scatter Series

The PercentChangeYAxis works such that it takes the first data point in your series as a reference value. Each value after the first value is scaled according to what percent increase or decrease it is compared to the reference value.

For CategorySeries, this reference value corresponds to the `ValueMemberPath` for those series.

For ScatterSeries, the reference value will correspond to the `YMemberPath` for those series. 

For RangeSeries, the reference value will correspond to the first low value.

For FinancialSeries and Financial Indicators, the reference value will correspond to the first "Open" value.

<a id="code_example"></a>
### Code Example

The following code example demonstrates usage of the PercentChangeYAxis element in the igDataChart control.

**In JavaScript:**

```js
$(function () {
    $("#chart").igDataChart({
        width: "100%",
        height: "500px",                
        axes: [{
            name: "xAxis",
            type: "categoryX",
            dataSource: data,                             
            label: "Date"                    
        },
		{
            name: "yAxis",
            type: "percentChangeY",            
        }],
        series: [{
            name: "series1",
            dataSource: data,            
            type: "financial",
            displayType: "candlestick",           
            xAxis: "xAxis",
            yAxis: "yAxis",
            openMemberPath: "Open",
            highMemberPath: "High",
            lowMemberPath: "Low",
            closeMemberPath: "Close",                        
        }
       ],
   });   
});
```

The following screenshot depicts the igDataChart using the PercentChangeYAxis with a financial series:

![](images/igDataChart_percent_change_y_axis.png)

<a id="related"></a>
### Related Content

-	[Adding igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.
- [Configuring Ordinal Time X-Axis](igdatachart-configuring-ordinaltimexaxis.html): This topic demonstrates how to use OrdinalTimeXAxis in the `igDataChart` control.