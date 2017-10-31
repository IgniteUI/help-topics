# Series Requirements

### In this topic

This topic contains the following sections:

-   [Setting Chart Type](#setting-chart-type)
-   [Required Settings](#required-settings)
-   [Creating Data Items](#creating-data-items)
-   [Related Content](#related-content)

## Setting ChartType Property

As described in the Chart Types topic the chart can render different types of chart with a simple change of a property.

To assign chart type during initialization:

**In Javascript:**

	<script type="text/javascript">
        $(function () 
        {
            $("#shapeChart").igShapeChart(
                {  
			      chartType: "bubble",
                }
            });
        });

    </script>


<table class="table table-striped">
	<thead>
		<tr>
			<th>Chart Type</th>
			<th>x</th>
			<th>y</th>
			<th>value</th>
			<th>radius</th>
			<th>points*</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>`Point`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
		    <td></td>
		    <td></td>
		    <td></td>
		</tr> 
		<tr>
			<td>`Line`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr> 
		<tr>
			<td>`Spline`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr> 
		<tr>
			<td>`HighDensity`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr> 
		<tr>
			<td>`Bubble`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			<td></td>
			<td>&#9210;</td>
			<td></td>
		</tr> 
		<tr>
			<td>`Area`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			<td></td>
			<td></td>
		</tr> 
		<tr>
			<td>`Contour`</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			<td>&#9210;</td>
			<td></td>
			<td></td>
		</tr> 
		<tr>
			<td>`Polyline`</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>&#9210;</td>
		</tr> 
		<tr>
			<td>`Polygon`</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>&#9210;</td>
		</tr>
	</tbody>
</table>

## Creating Data Items

This section provides examples that show the minimum requirements for each chart type. Each data class below includes properties that are responsible for rending the visual data on the chart.

When setting `ChartType` property to `Point`, `Line`, `Spline`, or `HighDensity` value, use:

**In Javascript:**

    <script>
        function ScatterPoints() 
        { 
    		var dataItems = 
    		[ 
    			{ "x": 10, "y": 10 },  
    			{ "x": 20, "y": 20 }, 
		    ];
            return dataItems;
        }
    </script>

When setting `ChartType` property to `Bubble` value, use:

**In Javascript:**

    <script>
        function ScatterBubbles() 
        { 
    		var dataItems = 
    		[ 
    			{ "x": 10, "y": 10, "radius": 10 },  
    			{ "x": 20, "y": 20, "radius": 10 }, 
    		];
    		return dataItems;
		}
    </script>

When setting `ChartType` property to `Area` or `Contour` value, use:

**In Javascript:**

    <script>
        function ScatterValues() 
        { 
    		var dataItems = 
    		[ 
    			{ "x": 10, "y": 10, "value": 10 }, 
    			{ "x": 20, "y": 20, "value": 10 }, 
    		];
    		return dataItems;
		}
    </script>

When setting `ChartType` property to `Polyline` or `Polygon` value, use:
 
    <script>
        function ScatterShapes(x, y, w, h) 
        {
    	    function createShape(x, y, w, h) 
	        {
    		    return [
    				{ "x": x, "y": y },
    				{ "x": x + w, "y": y },
    				{ "x": x + w, "y": y + h },
    				{ "x": x, "y": y + h },
    				{ "x": x, "y": y }];
    		}
			var data = 
			[ 
			   { "points": [createShape(10, 10, 10, 10)]},
			   { "points": [createShape(20, 20, 10, 10)]},
			];	
			
			return data;
		}
    </script>
    
*Related topics:* 

- [Getting Started](shapechart-getting-started-with-shapechart.html)

- [Chart Types](shapechart-chart-types.html)

- [Binding to Shape File Data](shapechart-binding-to-shapefile-data.html)