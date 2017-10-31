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

                <td>Specifies area chart with colored surface based on a triangulation of X/Y data with numeric values assigned to each point.</td>

                <td>![](images/shapechart-area-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Bubble`</td>

                <td>Specifies bubble chart with proportional markers at X/Y data</td>

                <td>![](images/shapechart-bubble-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Contour`</td>

                <td>Specifies area chart with colored lines based on a triangulation of X/Y data with numeric values assigned to each point.</td>

                <td>![](images/shapechart-contour-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`HighDensity`</td>

                <td>Specifies high density chart with colored bitmap pixels at X/Y data based on density of nearby points</td>

                <td>![](images/shapechart-highdensity-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Line`</td>

                <td>Specifies line chart with small markers at X/Y data and connected with lines</td>

                <td>![](images/shapechart-line-01.png)</td>
            </tr>
            
            <tr>
                <td>`Point`</td>

                <td>Specifies point chart with small markers at X/Y data</td>

                <td>![](images/shapechart-point-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Polygon`</td>

                <td>Specifies polygon chart with polygons defined by X/Y data</td>

                <td>![](images/shapechart-polygon-01.png)</td>
               
            </tr>
            
            <tr>
                <td>`Polyline`</td>

                <td>Specifies polyline chart with polylines defined by X/Y data</td>

                <td>![](images/shapechart-polyline-01.png)</td>
            </tr>
            
            <tr>
                <td>`Spline`</td>

                <td>Specifies spline chart with small markers at X/Y data and connected with splines</td>

                <td>![](images/shapechart-spline-01.png)</td>
            </tr>
            
            <tr>
                <td>`Auto`</td>
                
                <td>Specifies automatic selection of chart type based on suggestion from internal Data Adapter.</td>
                
                <td></td>
            </tr>
        </tbody>
    </table>
</div>




*Related topics:* 

- [Getting Started](shapechart-getting-started-with-shapechart.html)

- [Configuring Chart Types](shapechart-configuring-chart-types.html)

- [Binding to Shape File Data](shapechart-binding-to-shapefile-data.html)