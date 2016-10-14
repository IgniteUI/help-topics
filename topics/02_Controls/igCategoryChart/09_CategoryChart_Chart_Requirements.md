<!--
|metadata|
{
    "fileName": "categorychart-chart-requirements",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Chart Requirements

## Overview

While using the `igCategoryChart` it is important to remember a few rules that will make the data visualization better.
This control will make an intelligent attempt to visualize any data that is assigned to it. However, there are still a few rules that need to be followed.

This topics describes the rules that need to be applied to the data before it is assigned to the chart.

## Data source requirements

Generally, the chart will attempt to treat the data that is provided to it as a collection of objects.

### Array of objects

The most commonly used data source that the `igCategoryChart` control recognizes and is able to work with is an array of objects.
While analyzing such a data source during data binding routine the chart makes several attempt to extract the following attributes out of that data and show them in the chart automatically:

- *Series titles*. These are extracted from a distinct property of each object. If there are no distinct properties in the data objects, the first string property is assigned to be the series title. The distinct property types are analyzed in the following order:
1. string
2. date
3. number
 
- *Category scale*. Numeric properties are assigned into a category and their values are used to select minimum and maximum value of the Y axis. 

Example:
```javascript
[
    { "Label": "1995", "Brazil": 161, "Indonesia": 197, "United States": 266, "India": 920, "China": 1297 },
    { "Label": "2005", "Brazil": 186, "Indonesia": 229, "United States": 295, "India": 1090, "China": 1216 },
    { "Label": "2015", "Brazil": 204, "Indonesia": 256, "United States": 322, "India": 1251, "China": 1361 },
    { "Label": "2025", "Brazil": 218, "Indonesia": 277, "United States": 351, "India": 1396, "China": 1394 }
]
```

> **Note:** In some cases the chart will assign `yAxisMinimumValue` to be other than `0`. Setting this option to a value explicitly will prevent this behavior.

### Array of arrays

The `igCategoryChart` control is also able to recognize objects in an array of arrays (multi-dimensional data).
The rules of discovering data described above are also applicable in this scenario.

Example:
```javascript
[
    [
        [
            { "AmountSold": 2, "Item": "Hat" },
            { "AmountSold": 5, "Item": "Jacket" },
            { "AmountSold": 3, "Item": "Shoes" }
        ]
    ],
    [
        [
            { "AmountSold": 5, "Item": "Hat" },
            { "AmountSold": 2, "Item": "Jacket" },
            { "AmountSold": 1.9, "Item": "Shoes" }
        ]
    ],
    [
        [
            { "AmountSold": 4, "Item": "Hat" },
            { "AmountSold": 7, "Item": "Jacket" },
            { "AmountSold": 3, "Item": "Shoes" }
        ]
    ]
]
```

### Data intents

To influence the logic of data recognition by the `igCategoryChart`, a sub-object with the name of `__dataIntents` can be assigned to the data with meta data that corresponds to the properties in the data objects and description of their roles.

Example:
```javascript
var data = [
    {
        id:0,
        title:"Shoes",
        another_title: "Fancy shoes",
        sold:5
    },
    {
        id:1,
        title:"Hats",
        another_title: "Fancy hats",
        sold:2
    },
    {
        id:2,
        title:"Gloves",
        another_title: "Fancy gloves",
        sold:3
    }
];
data.__dataIntents = {
    id: ["DontPlot"],
    another_title: ["AxisLabelValue"]
};
```

Full list of supported metadata values:
Metadata value|Application description
--|--
PrimarySeriesValue|Indicates which value to use as the primary category series value
SeriesX|Indicates which value should be used for scatter X values 
SeriesY|Indicates which value should be used for scatter Y values  
SeriesFill|Indicates which value should be used for bubble color values
SeriesLabel|Indicates which value should be used for bubble label values
SeriesRadius|Indicates which value should be used for bubble radius values
SeriesAngle|Indicates which value should be used for polar angle values
SeriesShape|Indicates which value should be used for shape geometry values
SeriesValue|Indicates which value should be used for secondary series values
SeriesTitle|Indicates which value should be used for series title values
OpenSeriesValue|Indicates which value should be used for series open values
HighSeriesValue|Indicates which value should be used for series high values
LowSeriesValue|Indicates which value should be used for series low values
CloseSeriesValue|Indicates which value should be used for series close values
VolumeSeriesValue|Indicates which value should be used for volume values
AxisLabelValue|Indicates which value should be used for axis label values
AxisDateValue|Indicates which value should be used for axis date values
DontPlot|Indicates that the value should not be considered when inferring data series

## Restrictions

Plain JSON object, or a dictionary in a form of JSON sub-objects is not currently supported.

Unsupported data examples:
```javascript
{
    "Shoes": 5,
    "Hats": 2,
    "Gloves": 1
}
```

```javascript
{
    "Shoes": {
        "2014":5,
        "2015":7,
        "2016":9
    },
    "Hats": {
        "2014":2,
        "2015":1,
        "2016":0
    },
    "Gloves": {
        "2014":2,
        "2015":4,
        "2016":3
    }
}
```
Arrays (of any dimension) of values is also out of scope of the currently supported data sources in the `igCategoryChart`.

```javascript
[[100, 200], [200, 300], [300, 400], [400, 500], [50, 100]]
```