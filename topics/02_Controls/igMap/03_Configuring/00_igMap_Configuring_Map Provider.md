<!--
|metadata|
{
    "fileName": "igmap-configuring-map-provider",
    "controlName": "igMap",
    "tags": ["Charting","Data Presentation","How Do I"]
}
|metadata|
-->

# Configuring the Map Provider (igMap)



##Topic Overview

### Purpose

This topic demonstrates, with code examples, how to configure the `igMap`™ control to use the supported map providers and their imagery sets.

### Required background

The following topics are prerequisites to understanding this topic:

-	[igMap Overview](Overview-igMap.html):This topic provides conceptual information about the `igMap` control including its main features, minimum requirements, and user interaction capabilities.

-	[Adding an igMap](Adding-igMap.html): This topic demonstrates how to add a simple map with basic features to a web page.



#### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Background Content Configuration](#background-config)
-   [Map Imagery Reference](#map-reference)
    -   [Map imagery summary](#map-imagery-summary)
    -   [Bing Maps imagery sets](#bing-maps-imagery)
    -   [CloudMade imagery sets](#cloud-made-imagery)
-   [Code Examples](#code-examples)
    -   [Configuring OpenStreetMaps Background Content](#config-open-street-maps)
    -   [Configuring Bing Maps Background Content With Imagery Set](#config-bing-maps)
    -   [Configuring CloudMade Maps Background Content With Imagery Set](#config-cloud-made-maps)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)
    -   [Resources](#resources)



##<a id="introduction"></a>Introduction

### Map providers for igMap summary

The `igMap` control can use any of the following map providers:

-   [OpenStreetMap](http://www.openstreetmap.org/)
-   [Bing® Maps](http://www.bing.com/maps/)
-   [CloudMade](http://cloudmade.com/solutions/portals/)

The map providers deliver the map images and the map series are plotted as overlays over this background content. The control supports plotting any geographic series on any background content. In addition to being able to select your map provider, you can also select between different imagery sets the providers deliver. An imagery set is a themed set of maps like satellite images, satellite images with name labels or road network.

>**Note:** Bing maps and CloudMade maps require you to provide your custom access key to access their content.

The table below shows the same map area and geographic symbol series with the three available map providers.

OpenStreetMap|Bing Maps|CloudMade Maps
---|---
![](images/Configuring_Map_Provider_1.png)|![](images/Configuring_Map_Provider_2.png)|![](images/Configuring_Map_Provider_3.png)


##<a id="background-config"></a>Background Content Configuration

### Control configuration summary chart

The following table lists the configurable aspects of the igMap control related to map providers and imagery sets. Additional details are available after the table.

<table cellspacing="0" cellpadding="0" class="table table-border">
	<tbody>
		<tr>
			<th>
				Configurable aspect
			</th>

			<th width="376">
				Details
			</th>

			<th>
				Properties
			</th>
		</tr>

		<tr>
			<td>
				Background content
			</td>

			<td width="376">
				The control can be configured to use background tiles from a specific provider.
			</td>

			<td>
				In JavaScript

				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igMap#options" target="_blank">backgroundContent.type</a></li>
				</ul>

				In ASP.NET MVC

				<ul>
					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContent`1.html">BackgroundContent()</a></li>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContentBuilder~OpenStreetMaps.html">BackgroundContentBuilder.OpenStreetMaps()</a></li>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContentBuilder~BingMaps.html">BackgroundContentBuilder.BingMaps()</a></li>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContentBuilder~CloudMadeMaps.html">BackgroundContentBuilder.CloudMadeMaps()</a></li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				Imagery set for Bing Maps
			</td>

			<td width="376">
				The imagery set when the background content provider is set to Bing Maps, is configurable.
			</td>

			<td>
				In JavaScript

				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.imagerySet" target="_blank">backgroundContent.imagerySet</a></li>
				</ul>

				In ASP.NET MVC

				<ul>
					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BingMaps~ImagerySet.html">BingMaps.ImagerySet()</a></li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				Imagery set for CloudMade maps
			</td>

			<td width="376">
				The imagery set when the background content provider is set to CloudMade, is configurable.
			</td>

			<td>
				In JavaScript

				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.parameter" target="_blank">backgroundContent.parameter</a></li>
				</ul>

				In ASP.NET MVC

				<ul>
					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.CloudMadeMaps~Parameter.html">CloudMadeMaps.Parameter()</a></li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				Configurable key for the map provider
			</td>

			<td width="376">
				Configure the developer/customer key for access to the map content from the provider.
			</td>

			<td>
				In JavaScript

				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.key" target="_blank">backgroundContent.key</a></li>
				</ul>

				In ASP.NET MVC

				<ul>
					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContentBuilder~BingMaps.html">BackgroundContentBuilder.BingMaps()</a></li>

					<li><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.BackgroundContentBuilder~CloudMadeMaps.html">BackgroundContentBuilder.CloudMadeMaps()</a></li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>





##<a id="map-reference"></a>Map Imagery Reference

### <a id="map-imagery-summary"></a>Map imagery summary

Some map providers offer multiple imagery sets for their maps. Imagery sets are different map images that provide different content or styling.

### <a id="bing-maps-imagery"></a>Bing Maps imagery sets

The following table summarizes the imagery sets for **Bing Maps** supported by the `igMap` control. Configure the selected style by assigning a style code to the [backgroundContent.imagerySet](%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.imagerySet) option. The following a table catalogs the available **Bing Maps** styles. [imagerySet](%%jQueryApiUrl%%/ui.igMap#options:imagerySet)


Aerial

![](images/Configuring_Map_Provider_4.png)

AerialWithLabels

![](images/Configuring_Map_Provider_5.png)

Road

![](images/Configuring_Map_Provider_6.png)

collinsBart

![](images/Configuring_Map_Provider_7.png)



### <a id="cloud-made-imagery"></a>CloudMade imagery sets

CloudMade Maps contains numerous map styles and allows you to develop custom styles. Configure the selected style by assigning a style code to the [backgroundContent.parameter](%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.parameter). A requirement for using **CloudMade Maps** is for you to specify a value for [backgroundContent.parameter](%%jQueryApiUrl%%/ui.igMap#options:backgroundContent.parameter).

The following table illustrates just some of the many standard **CloudMade map** styles. More themes are available online at .

[parameter](%%jQueryApiUrl%%/ui.igMap#options:parameter)|Name|Screenshot
---|---|---
1|The Original|![](images/Configuring_Map_Provider_8.png)
2|Fine Line|![](images/Configuring_Map_Provider_9.png)
7|Tourist|![](images/Configuring_Map_Provider_10.png)


##<a id="code-examples"></a>Code Examples

### Code examples summary

The following table lists the code examples included in this topic.

Example|Description
---|---
[](#config-open-street-maps)[Configuring OpenStreetMaps Background Content](#config-open-street-maps)|This example shows how to configure a map control with an OpenStreetMaps background.
[Configuring Bing Maps Background Content With Imagery Set](#config-bing-maps)|This example shows how to configure a map control with a  Bing Maps background and imagery.
[Configuring CloudMade Maps Background Content With Imagery Set](#config-cloud-made-maps)|This example shows how to configure a map control with a  CloudMade Maps background and imagery.


##<a id="config-open-street-maps"></a>Code Example: Configuring OpenStreetMaps Background Content


### Description

This example shows how to configure a map control with OpenStreetMaps background.

### Code

The following code in JavaScript configures a map control to use OpenStreetMaps. Assign the `backgroundContent` option to an object with "`openStreet`" specified for `type`.

**In JavaScript:**

```js
$("#map").igMap({
    ...
    backgroundContent: {
        type: "openStreet"
    },
    ...
});
```

The following code in ASP.NET MVC configures a map control to use OpenStreetMaps. The `BackgroundContent()` function is passed a lambda expression that executes the `BackgroundContentBuilder. OpenStreetMaps()` static method. That action instantiates an **OpenStreetMaps** class instance that generates JavaScript code similar to the example above.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map(Model)
        .ID("map")
        ...
        .BackgroundContent(bgr => bgr.OpenStreetMaps())
        ...
        .DataBind()
        .Render()
%>
```



##<a id="config-bing-maps"></a>Code Example: Configuring Bing Maps Background Content With Imagery Set

### Description

This example shows how to configure a map control with the Bing Maps background. It also configures the imagery set to display Road.

### Code

The following code in JavaScript configures a map control to use Bing Maps. The `backgroundContent` option is assigned an object with **"bing"** specified for `type` and a `key` specified to enable access to the Bing Maps services. Specify the `Road` imagery set in the `imagerySet` option.

**In JavaScript:**

```js
$("#map").igMap({
    ...
    backgroundContent: {
        type: "bing",
        key: "123456789abcdef",
        imagerySet: "Road"
    },
    ...
});
```

The following code in ASP.NET MVC configures a map control to use Bing Maps. The `BackgroundContent()` function is passed a lambda expression which executes the `BackgroundContentBuilder.BingMaps()` static method with the Bing Maps services access key passed as a parameter. That action instantiates a BingMaps class instance that generates JavaScript code similar to the example above.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map(Model)
        .ID("map")
        ...
        .BackgroundContent(bgr => bgr.BingMaps("123456789abcdef")
                .ImagerySet(ImagerySet.Road))
        ...
        .DataBind()
        .Render()
%>
```



##<a id="config-cloud-made-maps"></a>Code Example: Configuring CloudMade Maps Background Content With Imagery Set


### Description

This example shows how to configure a map control with CloudMade Maps background. It also configures the map style to display to Tourist.

### Code

The following code in JavaScript configures a map control to use CloudMade Maps. Assign the `backgroundContent` option an object with **"cloudMade"** specified for `type` and a `key` specified to enable access to the CloudMade Maps services. Select the “Tourist” map style by configuring the `parameter` option with value 7.

**In JavaScript:**

```js
$("#map").igMap({
    ...
    backgroundContent: {
        type: "cloudMade",
        key: "123456789abcdef",
        parameter: 7
    },
    ...
});
```

The following code in ASP.NET MVC configures a map control to use **CloudMade** Maps. The `BackgroundContent()` function is passed a lambda expression which executes the `BackgroundContentBuilder.CloudMadeMaps()` static method with the CloudMade Maps services access key passed as a `parameter`. That action instantiates a CloudMadeMaps class instance that generates JavaScript code similar to the example above.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map(Model)
        .ID("map")
        ...
        .BackgroundContent(bgr => bgr.CloudMadeMaps("123456789abcdef")
                .Parameter(2))
        ...
        .DataBind()
        .Render()
%>
```



##<a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Data Binding (igMap)](Data-Binding-igMap.html): This topic explains how to bind the `igMap` control to different data sources depending on the map series visualized.

-	[Configuring Features (igMap)](igMap-Configuring-Features.html): This topic is a landing page linking to the topics explaining how to configure various features of the `igMap` control.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[Bing Maps](%%SamplesUrl%%/map/bing-maps): This sample demonstrates how to use Bing Maps to render a geographic series with the map control.

-	[CloudMade Maps](%%SamplesUrl%%/map/cloudmade-maps): This sample demonstrates how to use CloudMade maps to render a geographic series with the map control.


### <a id="resources"></a>Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

-	[OpenStreetMap](http://www.openstreetmap.org/):The home page of OpenStreetMap.

-	[Bing Maps](http://www.bing.com/maps/): The home page of Bing Maps.

-	[CloudMade Maps](http://cloudmade.com/solutions/portals/): The home page of CloudMade.





 

 


