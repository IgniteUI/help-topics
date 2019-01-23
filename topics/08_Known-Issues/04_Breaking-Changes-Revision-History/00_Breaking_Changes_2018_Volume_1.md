<!--
|metadata|
{
    "fileName": "breaking-changes-2018-volume-1",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Breaking Changes 2018 Volume 1

The following topic summarizes the breaking changes of the 2018 Volume 1 release.

## igCategoryChart
IsHorizontalZoomEnabled and IsVerticalZoomEnabled properties are set to true by default.
ChartType property set to Auto instead of Line. The control will select the type of series to render based on the number of data points that are bound.

## igShapeChart
ShapeChart has IsHorizontalZoomEnabled and IsVerticalZoomEnabled properties set to true by default

## Domain Charts
Domain Charts (ex. CategoryChart, ShapeChart) are dependent on a newly added js file: infragistics.datachart_domainChart.js

## Ignite UI
The infragistics.util.jquerydeferred.js has been removed. The loader Chart will now support double.ToString(“00.0#) formatting.

## PercentChangeYAxis
This axis is not supported with stacked series

## igSpreadsheet
igSpreadsheet now requires a reference to igDialog.