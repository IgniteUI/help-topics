<!--
|metadata|
{
    "fileName": "igmap-configuring-geographic-proportional-symbol-series"
    "controlName": "igMap",
    "tags": ["Charting","Data Presentation","How Do I"]
}
|metadata|
-->

# Configuring Geographic Proportional Symbol Series (igMap)

##Topic Overview

### Purpose

This topic explains how to configure the Geographic Proportional Symbol series using the `igMap`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igMap Overview](Overview-igMap.html): This topic provides conceptual information about the `igMap` control including its main features, minimum requirements and user interaction capabilities.

- [Adding an igMap](Adding-igMap.html): This topic is a walkthrough for adding a simple `igMap` control with basic features to a web page.


### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Geographic Symbol Series Configuration Summary](#config-summary)
-   [Code Examples Summary](#code-example-summary)
    -   [Configuring Geographic Symbol Series in JavaScript](#config-series-js)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="introduction"></a>Introduction


### Geographic symbol series summary

The geographic symbol series of the `igMap` plots the markers for the geographic points specified by the data in your application. This map series can be useful for highlighting points of interest in your particular business case like department stores, warehouses, or offices. Additional uses of this map series may be in a fleet management system or a GPS system for dynamic vehicle tracking.

The following screenshot is a preview of the geographic symbol series in the `igMap` control. The RadiusScale of the symbols uses proportional radius scale in order to indicate the significance of data point's value.

![](images/Configuring_Geographic_Proportional_Symbol_Series_1.png)

## <a id="config-summary"></a>Geographic Proportional Symbol Series Configuration Summary

### Geographic Proportional Symbol series configuration summary chart

The following table lists the `igMap` control’s configurable aspects pertaining to the geographic proportional symbol series.

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
Configurable aspect
			</th>

            <th>
Details
			</th>

            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
Set up geographic proportional symbol series
			</td>

            <td>
Use these mandatory settings to configure the type of map series to the geographic proportional symbol and set series name.
			</td>

            <td>
                In JavaScript:

                <ul>
                    <li>
[series.type](%%jQueryApiUrl%%/ui.igMap#options:series.type)
					</li>

                    <li>
[series.name](%%jQueryApiUrl%%/ui.igMap#options:series.name)
					</li>
                </ul>**
Value:


				**series.type: “geographicProportionalSymbol”**,

				**series.type: “seriesName”**



				In ASP.NET MVC:


				
					
						[MapSeriesBuilder Class](Infragistics.Web.Mvc~Infragistics.Web.Mvc.MapSeriesBuilder`1.html)

						
							[.GeographicProportionalSymbol()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.MapSeriesBuilder`1~GeographicProportionalSymbol.html)
						
					
				
Value:


				**series.GeographicProportionalSymbol(“seriesName”)**
			**</td>
		</tr>

		<tr>
			<td>
Data binding options of geographic proportional symbol series
			</td>

			<td>
Use these mandatory settings to configure which properties of the input data contain the geographic coordinates for drawing the points on the map.
			</td>

			<td>
				In JavaScript:

				<ul>
					<li>
[series.latitudeMemberPath](%%jQueryApiUrl%%/ui.igMap#options:series.latitudeMemberPath)
					</li>

					<li>
[series.longitudeMemberPath](%%jQueryApiUrl%%/ui.igMap#options:series.longitudeMemberPath)
					</li>
				</ul>

				In ASP.NET MVC:

				<ul>
					<li>
						[GeographicProportionalSymbol<t> Class](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GeographicSymbolSeries`1.html)</t>

						<ul>
							<li>
[.LatitudeMemberPath()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GeographicProportionalSymbol`1~LatitudeMemberPath.html)
							</li>

							<li>
[.LongitudeMemberPath()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GeographicProportionalSymbol`1~LongitudeMemberPath.html)
							</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
Tooltips visibility
			</td>

			<td>
Use these settings to enable or disable tooltip rendering.

				The default, settings for this control does not render tooltips.
			</td>

			<td>
				In JavaScript:

				<ul>
					<li>
[series.showTooltip](%%jQueryApiUrl%%/ui.igMap#options:series.showTooltip)
					</li>
				</ul>

				In ASP.NET MVC:

				<ul>
					<li>
						[GeographicProportionalSymbol<t> Class](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GeographicProportionalSymbol`1.html)</t>

						<ul>
							<li>
[.ShowTooltip()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Series`3~ShowTooltip.html)
							</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
Tooltip template
			</td>

			<td>
Use this setting to configure which template to use for rendering the tooltips.
			</td>

			<td>
				In JavaScript:

				<ul>
					<li>
[series.tooltipTemplate](%%jQueryApiUrl%%/ui.igMap#options:series.tooltipTemplate)
					</li>
				</ul>

				In ASP.NET MVC:

				<ul>
					<li>
						[GeographicProportionalSymbol<t> Class](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GeographicProportionalSymbol`1.html)</t>

						<ul>
							<li>
[.TooltipTemplate()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Series`3~TooltipTemplate.html)
							</li>
						</ul>
					</li>
				</ul>
			</td>
		</tr>
<tr>

			<td>

				Marker Outline

			</td>



			<td>

				This mandatory setting configures the color palette for the outlining the values.



				There is no default value for the setting.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.markerOutline.brushes" target="_blank">series.markerOutline.brushes</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.MarkerOutline`1~Brushes.html">MarkerOutline.Brushes()</a></li>

				</ul>

			</td>

		</tr>

	<tr>

			<td>

				Color palette

			</td>



			<td>

				This mandatory setting configures the color palette for the values.



				There is no default value for the setting.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.fillScale.brushes" target="_blank">series.fillScale.brushes</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FillScale`1~Brushes.html">FillScale.Brushes()</a></li>

				</ul>

			</td>

		</tr>



		<tr>

			<td>

				Minimum value for color palette

			</td>



			<td>

				Configure the minimum value for calculating value sub ranges.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.fillScale.minimumValue" target="_blank">series.fillScale.minimumValue</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.ValueBrushScale~MinimumValue.html">FillScale.MinimumValue()</a></li>

				</ul>

			</td>

		</tr>



		<tr>

			<td>

				Maximum value for color palette

			</td>



			<td>

				Configure the maximum value for calculating value sub ranges.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.fillScale.maximumValue" target="_blank">series.fillScale.maximumValue</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.ValueBrushScale~MaximumValue.html">FillScale.MaximumValue()</a></li>

				</ul>

			</td>

		</tr>

	<tr>

			<td>

				Radius Scale

			</td>



			<td>

				This mandatory setting configures the radius scale for the bubbles values.



				There is no default value for the setting.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.radiusScale.brushes" target="_blank">series.radiusScale.brushes</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.RadiusScale`1~Brushes.html">RadiusScale.Brushes()</a></li>

				</ul>

			</td>

		</tr>



		<tr>

			<td>

				Minimum value for bubbles

			</td>



			<td>

				Configure the minimum value for calculating value sub ranges.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.radiusScale.minimumValue" target="_blank">series.radiusScale.minimumValue</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.ValueBrushScale~MinimumValue.html">RadiusScale.MinimumValue()</a></li>

				</ul>

			</td>

		</tr>



		<tr>

			<td>

				Maximum value for bubbles

			</td>



			<td>

				Configure the maximum value for calculating value sub ranges.

			</td>



			<td>

				In JavaScript:



				<ul>

					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:series.radiusScale.maximumValue" target="_blank">series.radiusScale.maximumValue</a></li>

				</ul>



				In ASP.NET MVC:



				<ul>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.ValueBrushScale~MaximumValue.html">RadiusScale.MaximumValue()</a></li>

				</ul>

			</td>

		</tr>


	</tbody>
</table>





##<a id="code-example-summary"></a>Code Examples Summary

### Code examples summary chart

The following table lists the code examples included in this topic.

Example|Description
---|---
[Configure Geographic Symbol Series in JavaScript](#config-series-js)|This code example shows how to configure an `igMap` control to display geographic symbol series in JavaScript.
[Configure Geographic Symbol Series in ASP.NET MVC](#config-series-mvc)|This code example shows how to configure an `igMap` control to display geographic symbol series in ASP.NET MVC.


##<a id="config-series-js"></a>Code Example: Configuring Geographic Symbol Series in JavaScript

### Description

This code example shows how to configure an `igMap` control to display geographic symbol series in JavaScript. The example shows how to specify the data binding options of the series. Automatic marker selection is configured along with marker collision avoidance logic, and marker outline and fill colors are specified too.

### Code

**In JavaScript:**

```js
 $("#map").igMap({
    ...
    series: [{
    name: "series1",
    type: "geographicProportionalSymbol", 
    dataSource: data,
    markerType: "circle", 
    markerOutline: "black",
    longitudeMemberPath: "Longitude",
    latitudeMemberPath: "Latitude",
    radiusMemberPath: "Magnitude",
    radiusScale: {
        minimumValue: 10,
        maximumValue: 40, 
    },
    fillMemberPath: "Magnitude",
    fillScale: {
         type: "value",
         brushes: ["red", "yellow"],
         minimumValue: 1,
         maximumValue: 12
     }
    }],
    ...
});
```

The following screenshot is a result from the code above of the geographic symbol series in the `igMap` control with a defined radiusScale, markerOutline, and fillScale.

![](images/Configuring_Geographic_Proportional_Symbol_Series_2.png)

##<a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Configuring the Map Series (igMap)](igMap-Creating-Different-Kinds-Maps.html): This topic is a landing page linking to the topics explaining how to configure all supported map visualizations by the `igMap` control and how to use different background content (map providers).

-	[Configuring Features (igMap)](igMap-Configuring-Features.html): This topic is a landing page linking to the topics explaining how to configure various features of the `igMap` control.

-	[Data Binding (igMap)](Data-Binding-igMap.html): This topic explains how to bind the `igMap` control to different data sources depending on the map series visualized.

-	[Styling Maps (igMap)](Styling-igMap.html):This topic explains how the igMap control can be configured with regard to visual styling.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[Geographic Symbol Series](%%SamplesUrl%%/map/geo-symbol-series): This sample demonstrates how to create maps and visualize geographic symbol series.