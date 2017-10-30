<!--
|metadata|
{
    "fileName": "shapechart-overview",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "Overview"]
}
|metadata|
-->

# Chart Types 

## Overview

In order to select how data should be displayed it is enough to set the igShapeChart property of this chart.
Below are all of the types that the Shape Chart supports.

Special case is the `Auto` setting of that property. If `Auto` is used the chart will analyze assigned data and will assign the most suitable chart type.

The default value of that property is determined by the size of the underlying ItemsSource bound to the category chart.   

## Supported Chart Types

<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>

                <th>Property Value</th>

                <th>Description</th>

                <th>Example</th>

                
            </tr>
            
            <tr>
                <td>`Area`</td>

                <td>Specifies shape area series</td>

                <td>![](images/shapechart-area-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Bubble`</td>

                <td>Specifies shape column chart with vertical rectangles at each data point</td>

                <td>![](images/shapechart-bubble-01.png)</td>
               
            </tr>
             <tr>
                <td>`Contour`</td>

                <td>Specifies shape step line chart</td>

                <td>![](images/shapechart-contour-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`HighDensity`</td>

                <td>Specifies shape high density chart</td>

                <td>![](images/shapechart-highdensity-01.png)</td>
               
            </tr>
            <tr>
                <td>`Line`</td>

                <td>Specifies shape line series with markers at each data point</td>

                <td>![](images/shapechart-line-01.png)</td>
               
            </tr>
            <tr>
                <td>`Point`</td>

                <td>Specifies shape point chart with markers at each data point</td>

                <td>![](images/shapechart-point-01.png)</td>
               
            </tr>
            <tr>
                <td>`Polygon`</td>

                <td>Specifies shape polygon area series</td>

                <td>![](images/shapechart-polygon-01.png)</td>
               
            </tr>
            <tr>
                <td>`Polyline`</td>

                <td>Specifies shape polygon area series</td>

                <td>![](images/shapechart-polyline-01.png)</td>
               
            </tr>
            <tr>
                <td>`Spline`</td>

                <td>Specifies shape polyline chart</td>

                <td>![](images/shapechart-spline-01.png)</td>
               
            </tr>
            <tr>
                <td>`Auto`</td>

                <td>If Auto is used, the chart will analyze assigned data and will assign the most suitable chart type.</td>

                
               
            </tr>
            </tbody>
            </table>
            </div>




*Related topics:* 

- [Getting Started](shapechart-getting-started-with-shapechart.html)

- [Configuring Chart Types](shapechart-configuring-chart-types.html)

- [Binding to Shape File Data](shapechart-binding-to-shapefile-data.html)