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


<table class="table">
	<thead>
		<tr>
			<th>Series Type</th>
			<th>X</th>
			<th>Y</th>
			<th>Value</th>
			<th>Radius</th>
			<th>Points*</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>`Point`</td>
			<td>X</td>
			<td>X</td>
		    <td></td>
		    <td></td>
		    <td></td>
		</tr>
	</tbody>
		<tbody>
		<tr>
			<td>`Line`</td>
			<td>X</td>
			<td>X</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Spline`</td>
			<td>X</td>
			<td>X</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`HighDensity`</td>
			<td>X</td>
			<td>X</td>
			 <td></td>
		    <td></td>
		    <td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Bubble`</td>
			<td>X</td>
			<td>X</td>
			<td></td>
			<td>X</td>
			<td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Area`</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Contour`</td>
			<td>X</td>
			<td>X</td>
			<td>X</td>
			<td></td>
			<td></td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Polyline`</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>X</td>
		</tr>
	</tbody>
	<tbody>
		<tr>
			<td>`Polygon`</td>
			<td></td>
			<td></td>
			<td></td>
			<td></td>
			<td>X</td>
		</tr>
	</tbody>
</table>

## Creating Data Items

The following example exercises the minimum requirements for each chart type. Each data class below includes properties that are responsible for rending the visual data on the chart.

#### Point, Line, Spline, High Density:

**In Javascript:**

    <script>
        function ScatterPoint(x, y) 
        { 
            x = x || 0;
    		y = y || 0;
    		
    		var xy = 
    		[
    		    //add data;
    		    { "x": 10, "y": 10, },
		    ];
            return xy;
        }
    </script>

#### Bubble:

    <script>
        function ScatterBubble(x, y, r) 
        { 
    		x = x || 0;
    		y = y || 0;
    		radius = r || 0;
    		
    		var bubble = 
    		[
    			//add records
    			{ "x": 10, "y": 10, "radius": 10 },
    			
    		];
    		return bubble;
		}
    </script>
    
#### Area, Contour:

    <script>
        function Scatter(x, y, v) 
        { 
    		x = x || 0;
    		y = y || 0;
    		value = v || 0;
    		
    		var series = 
    		[
    			//add records
    			{ "x": 10, "y": 10, "value": 10 },
    			
    		];
    		return bubble;
		}
    </script>

#### Polyline, Polygon:
 
    <script>
        function getRectPoints(x, y, w, h) 
        {
    		x = x || 0;
    		y = y || 0;
    		w = w || 0;	
    		h = h || 0;
		
    	    function dimensions(x, y, w, h) 
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
			    //add records
			   { "points": [dimensions(10, 10, 10, 10)]},
			];	
			
			return data;
		}
    </script>
*Related topics:* 

- [Getting Started](shapechart-getting-started-with-shapechart.html)

- [Chart Types](shapechart-chart-types.html)

- [Binding to Shape File Data](shapechart-binding-to-shapefile-data.html)