<!--
|metadata|
{
    "fileName": "igfinancial-chart-known-limitations",
    "controlName": "igFinancialChart",
    "tags": ["Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igFinancialChart)



##Known Issues and Limitations Summary


### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igFinancialChart`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

Legend | 
-------|------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | No known workaround, fix planned

Issue | Description | Status
---|---|---
[When binding the financial chart to data without all price properties (High,Low,Open.Close) in order to include a series visual in the zoom pane you must set the zoomSliderType](#ZoomPaneProperties) | $("#chart").igFinancialChart( {dataSource: data, "zoomSliderType": "line"} ) | ![](../../images/images/positive.png)

##Known Issues and Limitations Details


###<a id="ZoomPaneProperties"></a>When binding the financial chart to data without all price properties (High,Low,Open.Close) in order to include a series visual in the zoom pane you must set the zoomSliderType
You can work around this by using the following code:
$("#chart").igFinancialChart( {dataSource: data, "zoomSliderType": "line"}