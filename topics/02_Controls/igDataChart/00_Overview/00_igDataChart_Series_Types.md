<!--
|metadata|
{
    "fileName": "igdatachart-series-types",
    "controlName": "igDataChart",
    "tags": ["Charting","Data Presentation","Getting Started"]
}
|metadata|
-->

# Series Types (igDataChart)



##Topic Overview


### Purpose

This topic explains conceptually the kinds of chart series that can be produced with the `igDataChart`™ control.

### Required Background

The following topics are prerequisite to understanding this topic:



-	[igDataChart Overview](igDataChart-Overview.html)

This topic provides conceptual information about the `igDataChart` control including its main features, minimum requirements for using charts and user functionality.



#### In This Topic

This topic contains the following sections:

-   [Chart Series Types](#chart-series-types)
   -   [Supported chart types summary](#supported-chart-types)
    -   [Supported chart types table](#supported-chart-types-table)
    -   [Bar and Column series](#bars-and-columns)
    -   [Bubble series](#bubble)
    -   [Category series](#category-series)
    -   [Financial series](#financial-series)
    -   [Polar series](#polar-series)
    -   [Radial series](#radial-series)
    -   [Range Category series](#range-series)
    -   [Scatter series](#scatter-series)
-   [Composite Charts](#composite)
-   [Related Content](#related-content)
  -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="chart-series-types"></a>Chart Series Types


### <a id="supported-chart-types"></a>Supported chart types summary

The `igDataChart` control allows for a variety of series types to be implemented for different visualization purposes.

See the next block for detailed information on supported series types and basic configuration information.

>**Note:** Pie charts can be created using the separate `igPieChart` control. For details see [igPieChart Overview](igPieChart-Overview.html).

###<a id="supported-chart-types-table"></a> Supported chart types table

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Chart type
			</th>

            <th>
Series  type
			</th>

            <th>
Description
			</th>

            <th>
`Series.type` property setting
			</th>

            <th>
Data binding properties
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
[Bar and Column](igDataChart-Series-Types.html#bars-and-columns)
			</td>

            <td>
Bar
			</td>

            <td>
Visualizes categorized data with horizontal bars.
			</td>

            <td>
`bar`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Column
			</td>

            <td>
Visualizes categorized data with vertical columns.
			</td>

            <td>
`column`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Bar
			</td>

            <td>
Visualize categorized data with horizontal bars containing horizontally stacked segments.
			</td>

            <td>
`stackedBar`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Bar
			</td>

            <td>
Visualize categorized data with horizontal bars containing horizontally stacked segments normalized to percentage values.
			</td>

            <td>
`stacked100Bar`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Column
			</td>

            <td>
Visualize categorized data with vertically stacked columns.
			</td>

            <td>
`stackedColumn`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Column
			</td>

            <td>
Visualize categorized data with vertically stacked columns where the values are normalized to percentages.
			</td>

            <td>
`stacked100Column`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>
[Bubble](igDataChart-Series-Types.html#bubble)
			</td>

            <td>
Bubble
			</td>

            <td>
Visualizes data described by multiple parameters with colored circles with different diameter.
			</td>

            <td>
`bubble`
			</td>

            <td>
                <ul>
                    <li>
[xMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.xMemberPath)
					</li>

                    <li>
[yMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.yMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>

                    <li>
[fillMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.fillMemberPath)
					</li>

                    <li>
[labelMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.labelMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
[Category](igDataChart-Series-Types.html#category-series)
			</td>

            <td>
Line
			</td>

            <td>
Visualizes categorized data with a line with sharp edges on data points.
			</td>

            <td>
`line`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Area
			</td>

            <td>
Visualizes categorized data with colored area below a line with sharp edges on data points.
			</td>

            <td>
`area`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Spline
			</td>

            <td>
Visualizes categorized data with a line with smooth edges on data points.
			</td>

            <td>
`spline`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Spline Area
			</td>

            <td>
Visualizes categorized data with colored area below a line with smooth edges on data points.
			</td>

            <td>
`splineArea`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Waterfall
			</td>

            <td>
Visualizes categorized data with vertical columns where the first column for the first category starts from the x-axis and each next category starts where the previous one ends.
			</td>

            <td>
`waterfall`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Point
			</td>

            <td>
Visualize categorized data with individually plotted point markers.
			</td>

            <td>
`point`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Area
			</td>

            <td>
Visualize categorized data with stacked colored area below a line with sharp edges on data points.
			</td>

            <td>
`stackedArea`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Line
			</td>

            <td>
Visualize categorized data in stacked lines with sharp edges on data points.
			</td>

            <td>
`stackedLine`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Spline
			</td>

            <td>
Visualize categorized data in stacked lines with smooth edges on data points
			</td>

            <td>
`stackedSpline`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked Spline Area
			</td>

            <td>
Visualize categorized data with stacked colored area below a line with smooth edges on data points.
			</td>

            <td>
`stacked100Bar`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Area
			</td>

            <td>
Visualize categorized data with stacked colored area below a line with sharp edges on data points where the values are normalized to percentages.
			</td>

            <td>
`stacked100Area`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Line
			</td>

            <td>
Visualize categorized data in stacked lines with sharp edges on data points where the values are normalized to percentages.
			</td>

            <td>
`stacked100Line`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Spline
			</td>

            <td>
Visualize categorized data in stacked lines with smooth edges on data points where the values are normalized to percentages.
			</td>

            <td>
`stacked100Spline`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Stacked 100 Spline Area
			</td>

            <td>
Visualize categorized data with stacked colored area below a line with smooth edges on data points where the values are normalized to percentages.
			</td>

            <td>
`stacked100SplineArea`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>
[Financial](igDataChart-Series-Types.html#financial-series)
			</td>

            <td>
Candlestick
			</td>

            <td>
Displays opening, closing, highest and lowest value of a financial (investment) instrument in the form of a candlestick.
			</td>

            <td>
`candlestick`
			</td>

            <td>
                <ul>
                    <li>
[openMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.openMemberPath)
					</li>

                    <li>
[closeMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.closeMemberPath)
					</li>

                    <li>
[highMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.highMemberPath)
					</li>

                    <li>
[lowMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.lowMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
OHLC
			</td>

            <td>
Abbreviation for Open, High, Low, Close. Displays opening, closing, highest and lowest value of a financial (investment) instrument in the form of vertical lines with markings for opening and closing values.
			</td>

            <td>
`ohlc`
			</td>

            <td>
                <ul>
                    <li>
[openMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.openMemberPath)
					</li>

                    <li>
[closeMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.closeMemberPath)
					</li>

                    <li>
[highMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.highMemberPath)
					</li>

                    <li>
[lowMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.lowMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
[Polar](igDataChart-Series-Types.html#polar-series)
			</td>

            <td>
Polar Scatter
			</td>

            <td>
Visualizes data with dots (or other types of markers) in a polar coordinate system.
			</td>

            <td>
`polarScatter`
			</td>

            <td>
                <ul>
                    <li>
[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.angleMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Polar Line
			</td>

            <td>
Visualizes data with a line with sharp edges on data points in a polar coordinate system.
			</td>

            <td>
`polarLine`
			</td>

            <td>
                <ul>
                    <li>
[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.angleMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Polar Area
			</td>

            <td>
Visualizes data with colored area below a line with sharp edges on data points in a polar coordinate system.
			</td>

            <td>
`polarArea`
			</td>

            <td>
                <ul>
                    <li>
[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.angleMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Polar Spline
			</td>

            <td>
Visualize data with a spline displaying Bezier-curved transitions between data points in a polar coordinate system.
			</td>

            <td>
`polarSpline`
			</td>

            <td>
                <ul>
                    <li>
[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.angleMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Polar Spline Area
			</td>

            <td>
Visualize data with colored area below a spline displaying Bezier-curved transitions between data points in a polar coordinate system.
			</td>

            <td>
`polarSplineArea`
			</td>

            <td>
                <ul>
                    <li>
[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.angleMemberPath)
					</li>

                    <li>
[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.radiusMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
[Radial](igDataChart-Series-Types.html#radial-series)
			</td>

            <td>
Radial Line
			</td>

            <td>
Visualizes categorized data with a line with sharp edges on data points with all categories distributed in a circle.
			</td>

            <td>
`radialLine`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Radial Column
			</td>

            <td>
Visualizes categorized data with columns starting from a common center and turned on different angles.
			</td>

            <td>
`radialColumn`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Radial Pie
			</td>

            <td>
Visualizes categorized data with pie-slice shaped elements starting from a common center and turned on different angles.
			</td>

            <td>
`radialPie`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Radial Area
			</td>

            <td>
Visualize categorized data with colored area below a line with sharp edges on data points with all categories distributed in a circle.
			</td>

            <td>
`radialArea`
			</td>

            <td>
[valueMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.valueMemberPath)
			</td>
        </tr>

        <tr>
            <td>
[Range Category](igDataChart-Series-Types.html#range-series)
			</td>

            <td>
Range Area
			</td>

            <td>
Visualizes categorized data in ranges between two values with colored area between two lines with sharp edges on data points.
			</td>

            <td>
`rangeArea`
			</td>

            <td>
                <ul>
                    <li>
[lowMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.lowMemberPath)
					</li>

                    <li>
[highMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.highMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Range Column
			</td>

            <td>
Visualizes categorized data in ranges between two values with columns.
			</td>

            <td>
`rangeColumn`
			</td>

            <td>
                <ul>
                    <li>
[lowMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.lowMemberPath)
					</li>

                    <li>
[highMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.highMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
[Scatter](igDataChart-Series-Types.html#scatter-series)
			</td>

            <td>
Scatter
			</td>

            <td>
Visualizes data with dots in Cartesian coordinate system.
			</td>

            <td>
`scatter`
			</td>

            <td>
                <ul>
                    <li>
[xMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.xMemberPath)
					</li>

                    <li>
[yMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.yMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Scatter Line
			</td>

            <td>
Visualizes data with a line with sharp edges on data points in Cartesian coordinate system.
			</td>

            <td>
`scatterLine`
			</td>

            <td>
                <ul>
                    <li>
[xMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.xMemberPath)
					</li>

                    <li>
[yMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.yMemberPath)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Scatter Spline
			</td>

            <td>
Visualize data with a spline displaying Bezier-curved transitions between data points in Carthesian coordinate system.
			</td>

            <td>
`scatterSpline`
			</td>

            <td>
                <ul>
                    <li>
[xMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.xMemberPath)
					</li>

                    <li>
[yMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:series.yMemberPath)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

###<a id="bars-and-columns"></a> Bar and Column series

Bar and column charts visualize data with the help of filled rectangles where the larger size corresponds to the visualized value.

![](images/igDataChart_Types_1.png)

Technically, bar and column charts mean one and the same but we make a distinction that bar charts have bars span horizontally and column charts have bars span vertically.

Bar charts are used to display data of separate functions for a discrete category axis values. For example the figure below shows a bar chart with the volume of car sales from three manufacturers (separate functions, i.e. single manufacturer sales as a function of region) for different geographical regions (discrete category axis values).

###<a id="bubble"></a> Bubble series

Bubble charts represent data entities with four independent numeric parameters in the form of (typically) filled circles.

![](images/igDataChart_Types_2.png)

The coordinates of the center of each circle represent the common x- and y-coordinate parameters of each entity. The radius of the bubble represents the third parameter. Part of the bubbles can be filled with different color to represent a possible fourth parameter of the data series. The fourth parameter is not mandatory and if skipped all bubbles will be depicted with the same color. There is also an additional fifth parameter that can be used as a label for each data point.

###<a id="category-series"></a> Category series

Category series charts are a range of series types for the `igDataChart` control that allow data for separate distinct category axis values to be plotted. This various types are: area, column, line, spline, spline area, step area, step line and waterfall. For more details you can investigate the topic dedicated on category series charts.

Following is an example of a waterfall chart.

![](images/igDataChart_Types_7.png)

###<a id="financial-series"></a> Financial series

Financial charts (also called candlestick charts) are a variation of bar charts which allows for more variables to be depicted.

![](images/igDataChart_Types_3.png)

They are mainly used to visualize stock market movements of a particular commodity, currency or stock representing opening, closing, minimum and maximum price for a particular period. Each “candlestick” stands for a specific time period (for example, a day), the lowest point of the candlestick is the lowest price, the highest point is the highest price, and the lower and higher end of the bar are the closing and opening prices, correspondingly.

Usually these charts are combined with trend lines which are derived by using some mathematical function applied on the data series to calculate approximation and extrapolation of the data. For example, average, quadratic, or logarithmic functions.

### <a id="polar-series"></a>Polar series

Polar scatter charts are plotted in polar coordinate system where the first coordinate is expressed in angle units (degrees, radians) and the second as distance from center (radius). The chart shows discrete points which are not connected and is useful to assess the “density” of the points (for example, measurement samples) in a certain area on the chart.

![](images/igDataChart_Types_4.png)

It is also possible to plot polar line or area depending on the purpose.

###<a id="radial-series"></a> Radial series

Radial line charts are similar to polar scatter charts but it is a category type series, i.e. it lacks angle coordinate and instead data is divided into categories that are spread evenly across a full circle. The distance from the center depicts the visualized value.

![](images/igDataChart_Types_5.png)

It is usually used to visualize small datasets and to compare quantitatively between multiple aspects of one object. For example, it is used for player statistics in sports regarding different aspects like agility, speed, effectiveness, etc.

###<a id="range-series"></a> Range Category series

Range category charts are used to depict the spread between two values that fall in a certain category. The variables used to plot the chart are the category coordinate, and two values in the same measurement unit for the category.

![](images/igDataChart_Types_8.png)

This chart was invented by stock market traders and used primarily in that industry. The specific feature is that these charts are not time based but rather *movement* based, i.e. two different values on the category (x) axis represent two different movements and the change between deals can be tracked.

Using `igDataChart` you can implement range area and range column charts, and the sample chart above is a range area chart.

### <a id="scatter-series"></a>Scatter series

Scatter charts depict individual points in orthogonal (Cartesian) coordinate system, and is sometimes also called XY-chart. It is possible to plot only discrete points or points connected with lines.

![](images/igDataChart_Types_6.png)

Scatter charts are used to represent scientific measurement or other data collection for the relation of two variables and easily shows the density of samples in particular area of the measurement, and it is possible to spot trends in the distribution of data.



##<a id="composite"></a>Composite Charts


### Composite charts summary

Composite charts plot at least two data series that either use different axis ranges or are visualized by two different types of graphs. That means that, for example, one function spans between 1 and 100, and the other between 5 and 500, or even has a logarithmic scale, or one function is depicted by columns and the other by line.

This sample demonstrates how to configure a composite chart with two Y-axes with different range and two different data series types: column and line series.
There are no specific settings for creating composite charts but rather you can mix different series types and use multiple axes.
<div class="embed-sample">
   [Composite Chart](%%SamplesEmbedUrl%%/data-chart/composite-chart)
   ![](images/igDataChart_Types_9.png)
</div>

##<a id="related-content"></a>Related Content

###<a id="topics"></a> Topics

The following topics provide additional information related to this topic.


-	[Adding igDataChart](igDataChart-Adding.html): This topic demonstrates how to add the igDataChart control to a web page and bind it to data.

-	[](igDataChart-API-Links.html)[jQuery and ASP.NET MVC Helper API Reference Links (igDataChart)](igDataChart-API-Links.html): This topic provides links to the API documentation for jQuery and ASP.NET MVC helper class for `igDataChart`



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.


-	[Bar and Column Series](%%SamplesUrl%%/data-chart/bar-and-column-series): This sample demonstrates creating bar and column series charts.

-	[Category Series](%%SamplesUrl%%/data-chart/category-series): This sample demonstrates creating category series charts.

-	[Composite Chart](%%SamplesUrl%%/data-chart/composite-chart): This sample demonstrates creating a composite chart.

-	[Financial Series](%%SamplesUrl%%/data-chart/financial-series): This sample demonstrates creating financial (or “candlestick”) charts.

-	[Polar Series](%%SamplesUrl%%/data-chart/polar-series): This sample demonstrates creating polar charts.

-	[Radial Series](%%SamplesUrl%%/data-chart/radial-series): This sample demonstrates creating radial charts.

-	[Range Category Series](%%SamplesUrl%%/data-chart/range-category-series): This sample demonstrates creating range category charts.

-	[Scatter Series](%%SamplesUrl%%/data-chart/scatter-series): This sample demonstrates creating scatter (or “XY series) charts.

-	[Stacked Series](%%SamplesUrl%%/data-chart/stacked-series): This sample demonstrates creating Stacked series charts (XY charts).





 

 


