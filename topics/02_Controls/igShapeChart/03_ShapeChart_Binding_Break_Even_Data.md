<!--
|metadata|
{
    "fileName": "shapechart-binding-to-break-even-data",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "BreakEven"]
}
|metadata|
-->

# Binding Break-Even Data in igShapeChart 

This topic explains, with a code example, how to bind break-even data in the igShapeChart control.

### Required Background

The following topics are prerequisites to understanding this topic:

- [igShapeChart Overview](shapechart-binding-to-shapefile-data.html): This topic provides conceptual information about the igShapeChart control including its main features, minimum requirements, and user functionality.
- [Getting Started with igShapeChart](shapechart-binding-to-shapefile-data.html): This topic explains, with a code example, how to add the igShapeChart to your application.

### In this topic
- [Overview](#Overview)
- [Preview](#Preview)
- [Code Example](#CodeExample)
- [Related Content](#Related)

<a id="Overview" />
### Overview

The igShapeChart control has support for displaying "break-even" data. In order to do this, you will need to have at least a single data item with four numeric properties named FixedCost, VariableCost, Revenue, and Units. You can also optionally add a numeric property named MarginalProfit in order to plot that as well. For example, this would allow you to view a financial visualization of the break-even point given a number of units sold when bought for a particular price and sold for a particular price.

Once plotted, the igShapeChart control will create a view with the Revenue property on the Y-Axis and the Units property on the X-Axis to generate a linear financial view of the relation between the two. This includes a series for each of the required properties mentioned above.

Also generated will be a linear view of the Total Cost, Break Even point, and optionally the Marginal Profit, along with an area view of the Profit Area, Loss Area, and optionally, the Marginal Area as well.

<a id="Preview" />
### Preview

The following is a preview of what the igShapeChart will look like when following the code example given below:

![](images/shapechart_breakeven_03.png)

<a id="CodeExample" />
### Code Example

The following code example shows how to bind break-even data to the igShapeChart control.

**In HTML:**
```html
<body>
    
    <div id="shapeChart"></div>
    <div id="legend"></div>
    
    <script>
    
        var data = [
        {
            "Units": 100, "Revenue": 1800, "VariableCost": 600, "FixedCost": 1000,
        }];
             
        $(function () {             
            $("#shapeChart").igShapeChart({                
                dataSource: data,
			    thickness: 3,
                width: "500px",
                height: "500px",
                yAxisTitle: "Price ($)",
                xAxisTitle: "Number of Units",                
                brushes: ["#7F2AFA", "#FF3100", "#02B602", "#7222E7", "#C62600", "#808080", "#282828", "#029802", "#078FE4"],
                legend: $("#legend")
            });

            $("#legend").igChartLegend({});
        });

    </script>

</body>

```

<a id="Related" />
### Related Content

- [Binding to Shape File Data](shapechart-binding-to-shapefile-data.html)
- [Using Legend](shapechart-using-legend.html)
