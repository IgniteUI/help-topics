<!--
|metadata|
{
    "fileName": "igdatachart-known-issues",
    "controlName": "igDataChart",
    "tags": ["Charting","Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igDataChart)



### Purpose

This topic lists all known issues and limitations in the `igDataChart`™ control.



##Known Issues and Limitations


### Overview

The following table summarizes the known issues and limitations of the `igDataChart` control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

Legend: | 
--------|------
![](../../images/images/positive.png) | Workaround available                 
![](../../images/images/negative.png) | No known workaround available        
![](../../images/images/plannedFix.png) |  Fix planned                          
                                                    

<table class="table">
	<thead>
		<tr>
			<th>Feature</th>
			<th>Description</th>
			<th>Status</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>[First and last items appear half cut in financial series
			charts](#first-last-items-half-cut)</td>
			<td>In financial series the first and the last data items do not appear
			entirely on the chart view but are plotted as if they are cut in half.</td>
			<td>![](../../images/images/plannedFix.png)</td>
		</tr>
		<tr>
			<td>[Chart animation disabled when axis range changes](#chart-animation-issue)</td>
			<td>If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data to appear immediately without any motion effect.</td>
			<td>![](../../images/images/positive.png)</td>
		</tr>
		<tr>
			<td>[Monolith shadows do not allow for the blur effect to be applied to them](#monolith_shadow)</td>
			<td>When the [useSingleShadow](%%jQueryApiUrl%%/ui.igDataChart#options:useSingleShadow) property of the series is set to "true", the [shadowBlur](%%jQueryApiUrl%%/ui.igDataChart#options:shadowBlur)
			setting is disregarded and no blur is applied to the shadow.</td>
			<td>![](../../images/images/positive.png)</td>
		</tr>
	</tbody>
</table>

### <a id="first-last-items-half-cut"></a> First and last items appear half cut in financial series charts

In financial series the first and the last data items do not appear entirely on the chart view but are plotted as if they are half cut.

A new feature of data charts will be implemented in future releases that will solve this problem.

### <a id="chart-animation-issue"></a> Chart animation disabled when axis range changes

If you use the Motion Framework for charts and updated data causes Y-axis range to be changed then all chart animation is disabled and new data appear immediately without any motion effect.

The solution to this problem is to select an appropriate range for the Y-axis of your chart and set the  `minimumValue` and `maximumValue` options accordingly which will prevent axis range changes.

### <a id="monolith_shadow"></a> Monolith shadows do not allow for the blur effect to be applied to them

When the [`useSingleShadow`](%%jQueryApiUrl%%/ui.igDataChart#options:useSingleShadow) property of the series is set to "true", the [`shadowBlur`](%%jQueryApiUrl%%/ui.igDataChart#options:shadowBlur) setting is disregarded and no blur is applied to the shadow. This is a deliberate limitation due to a [Google® Chrome™ bug](https://code.google.com/p/chromium/issues/detail?id=100703) and extended to all major browsers thus ensuring consistent behavior across all of them. This behavior is subject to change once the aforementioned Chrome issue is resolved.

If you need to apply blur to the shadow, use the Compound type of shadow (`useSingleShadow: true`).



 

 


