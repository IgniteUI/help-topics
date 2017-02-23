<!--
|metadata|
{
    "fileName": "data-binding-igmap",
    "controlName": "igMap",
    "tags": ["Charting","Data Binding","Data Presentation"]
}
|metadata|
-->

# Binding igMap to Data



##Topic Overview

### Purpose

This topic explains how to bind the `igMap`™ control to different data sources depending on the map series visualized.

### Required background

The following table lists the topics and concepts required as a prerequisite to understanding this topic.

**Concepts**

-   JavaScript arrays
-   [JSON](http://www.json.org/)
-   [Web Services](https://en.wikipedia.org/wiki/Web_service)
-   [WCF Services](http://msdn.microsoft.com/en-us/library/aa480190.aspx)
-   [ASP.NET MVC](http://www.asp.net/mvc)
-   [Shape files](http://wiki.openstreetmap.org/wiki/Shapefiles)
-   [DBF database files](http://en.wikipedia.org/wiki/DBase)
-   [Triangulation (ITF) files](http://vterrain.org/Implementation/Formats/ITF.html)

**Topics**

- [igDataSource Overview](igDataSource-igDataSource-Overview.html): General description of the `igDataSource`™ control which serves as an intermediate layer between the data bound controls and the actual data source.

-	[igMap Overview](Overview-igMap.html): This topic provides conceptual information about the `igMap` control including its main features, minimum requirements, and user functionality.

-	[Adding an igMap](Adding-igMap.html): This topic demonstrates how to add a simple map with basic features to a web page.



### In this topic

This topic contains the following sections:

-   [Supported Data Sources](#supported-datasources)
    -   [Supported data sources summary](#supported-datasource-summary)
    -   [Map series to data sources reference chart](#map-series-chart)
-   [Data Binding Summary](#data-binding)
    -   [Binding to JavaScript array](#binding-js-array)
    -   [Binding to JSON data](#binding-json)
    -   [Binding to shape data source](#binding-shape-datasource)
    -   [Binding to shape database](#binding-shape-database)
    -   [Binding to triangulation data source](#binding-triangulation-datasource)
-   [Code Examples Summary](#code-example-summary)
-   [Code Example: Binding Geographic Symbol Series to a JavaScript Array](#example-js-array)
-   [Code Example: Binding Geographic Symbol Series to a Model Object in ASP.NET MVC](#example-mvc-model-object)
-   [Code Example: Binding Geographic Symbol Series to a JSON Database](#example-json-local)
-   [Code Example: Binding Geographic Symbol Series to a JSON Database from a Remote Service](#example-json-database)
-   [Code Example: Binding Geographic Shape Series to a Shape/DBF File Pair](#example-bdf-file-pair)
-   [Code Example: Binding Geographic Scatter Area Series to a Triangulation File](#example-triangulation-file)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="supported-datasources"></a>Supported Data Sources

### <a id="supported-datasource-summary"></a>Supported data sources summary chart

The `igMap` control supports the following data sources:

Data Source|Binding
---|---
[JavaScript array](#binding-js-array)|Geographic Symbol series map can be bound to a local JavaScript array of data with geographic coordinates of points to be visualized.
[JSON](#binding-json)|The igMap control can be configured to use local JSON data or to request remote data and receive a JSON response which, in turn, can be bound to a Geographic Symbol series instance.
[Shape files](#binding-shape-datasource)|The Geographic Shape and Geographic Polyline series require a shape ([DBF files](#binding-shape-database)) file or a custom shape data source to be provided for visualization.
[DBF files](#binding-shape-database)|The Geographic Shape and Geographic Polyline series require a DBF database file or a custom data source to be provided to bind additional data attributes to the shapes and polylines.
[Triangulation (ITF) files](#binding-triangulation-datasource)|The Geographic Scatter Area and Geographic Contour Line series require a triangulation (ITF) files or a custom triangulation data source for visualization.

### <a id="map-series-chart"></a>Map series to data sources reference chart

The different map series supported by the `igMap` control bind to and visualize different kinds of data. Here follows a reference table with the supported data sources for each map series type.

<table cellspacing="0" cellpadding="0" class="table">
	<tbody>
		<tr>
			<th>
				Map Series
			</th>

			<th>
				Data Sources
			</th>

			<th>
				Related Topic
			</th>
		</tr>

		<tr>
			<td>
				Geographic Symbol
			</td>

			<td>
				<ul>
					<li>JavaScript array</li>

					<li>JSON from a remote service</li>
				</ul>
			</td>

			<td>
				<a class="ig-topic-link" href="igMap-Configuring-Geographic-Symbol-Series.html" data-auto-update-caption="true">Configuring Geographic Symbol Series (igMap)</a>
			</td>
		</tr>

		<tr>
			<td>
				Geographic Shape
			</td>

			<td>
				<ul>
					<li>Shape file with a paired DBF file</li>
				</ul>
			</td>

			<td>
				<a class="ig-topic-link" href="igMap-Configuring-Geographic-Shapes.html" data-auto-update-caption="true">Configuring Geographic Shapes Series (igMap)</a>
			</td>
		</tr>

		<tr>
			<td>
				Geographic Polyline
			</td>

			<td>
				<ul>
					<li>Shape file with a paired DBF file</li>
				</ul>
			</td>

			<td>
				<a class="ig-topic-link" href="igMap-Configuring-Geographic-Polyline-Series.html" data-auto-update-caption="true">Configuring Geographic Polyline Series (igMap)</a>
			</td>
		</tr>

		<tr>
			<td>
				Geographic Scatter Area
			</td>

			<td>
				<ul>
					<li>Triangulation file</li>
				</ul>
			</td>

			<td>
				<a class="ig-topic-link" href="igMap-Configuring-Geographic-Scatter-Area-Series.html" data-auto-update-caption="true">Configuring Geographic Scatter Area Series (igMap)</a>
			</td>
		</tr>

		<tr>
			<td>
				Geographic Contour Line
			</td>

			<td>
				<ul>
					<li>Triangulation file</li>
				</ul>
			</td>

			<td>
				<a class="ig-topic-link" href="igMap-Configuring-Geographic-Scatter-Area-Series.html" data-auto-update-caption="true">Configuring Geographic Scatter Area Series (igMap)</a>
			</td>
		</tr>
	</tbody>
</table>





##<a id="data-binding"></a>Data Binding Summary

### <a id="binding-js-array"></a>Binding to JavaScript array

Geographic symbol series map can be bound to a local JavaScript array of data with geographic coordinates of points to be visualized. The array may store additional data attributes which are bound to the corresponding points on the map. The additional data attributes are available for tooltip templates and callback functions.

For a sample implementation of binding the `igMap` control to a JavaScript array, see [Code Example: Binding Geographic Symbol Series to a JavaScript Array](#example-js-array).

### <a id="binding-json"></a>Binding to JSON data

The `igMap` control can be configured to request remote data and receive a JSON response which can be bound to a geographic symbol series instance. The JSON response must provide geographic coordinates for the points to be visualized and may contain additional attributes. The additional attributes will be bound to the corresponding points on the map together with the geographic coordinates. They are available for tooltip templates and callback functions.

For a sample implementation of binding the `igMap` control to JSON data, see [Code Example: Binding Geographic Symbol Series to a JSON Database from a Remote Service](#example-json-database).

The `igMap` can also be configured to use a local JSON data and example for that case you can find in [Code Example: Binding Geographic Symbol Series to a JSON Database](#example-json-local).

### <a id="binding-shape-datasource"></a>Binding to shape data source

The geographic shape and polyline series require a shape data source to be provided for visualization. The shape data source can be a shape file or a JavaScript array or JSON with shape data.

Shape files (SHP) are a special file format and they contain information for closed shapes (regions) or open shapes (polylines) which can be plotted on a map. The `igMap` control loads shape files with a get request. They can be stored in a content or data folder in your web application or web site. The shape files are always delivered together with a corresponding DBF database file containing data about the shapes being visualized.

>**Note:** Usually it is necessary to register the SHP file extension as an application/octet-stream MIME type on the web server or in the directory where your SHP files are stored. Otherwise the security policy on the web server may prohibit serving these files to clients.

For a sample implementation of binding the `igMap` control to a shape data source, see to [Code Example: Binding Geographic Shape Series to a Shape/DBF File Pair](#example-bdf-file-pair).

### <a id="binding-shape-database"></a>Binding to shape database

The geographic shape and polyline series require data to be provided to bind data attributes to shapes and polylines. These data usually are supplied from DBF files but may also be provided by a custom data source together with the shapes.

The `igMap` control loads DBF files with a get request. They can be stored in a content or data folder in your web application or web site. A DBF file always complements a corresponding shape file with data about the geographic shapes being visualized.

>**Note:** Usually it is necessary to register the DBF file extension as an application/octet-stream MIME type in the web server or in the directory where your DBF files are stored. Otherwise the security policy on the web server may prohibit serving these files to clients.

For a sample implementation of binding the `igMap` control to a shape database, see [Code Example: Binding Geographic Shape Series to a Shape/DBF File Pair](#example-bdf-file-pair).

### <a id="binding-triangulation-datasource"></a>Binding to triangulation data source

The geographic scatter area and contour line series require a triangulation (ITF) file or a custom triangulation data source in the form of JavaScript array or JSON for visualization.

The ITF files are a special file format which contains information about Triangular Irregular Networks (TIN). The ITF abbreviation stands for Intermediate TIN Format. The TINs are a way to describe mathematically geographic surfaces in three dimensions. The ITF files are loaded with a get request. They can be stored in a content or data folder in your web site or web application.

>**Note:** Usually it is necessary to register the ITF file extension as an application/octet-stream MIME type in the web server or in the directory where your ITF files are stored. Otherwise the security policy on the web server may prohibit serving these files to clients.

For a sample implementation of binding the `igMap` control to a triangulation data source, see [Code Example: Binding Geographic Scatter Area Series to a Triangulation File](#example-triangulation-file).



##<a id="code-example-summary"></a>Code Examples Summary


### Code examples summary chart

The following table lists the code examples included in this topic.

Example|Description
---|---
[Code Example: Binding Geographic Symbol Series to a JavaScript Array](#example-js-array)|This code example shows how to bind a JavaScript array to geographic symbol series in the `igMap` control.
[Code Example: Binding Geographic Symbol Series to a Model Object in ASP.NET MVC](#example-mvc-model-object)|This code example shows how to bind a view model object to an `igMap` control instance in an ASP.NET MVC application.
[Code Example: Binding Geographic Symbol Series to a JSON Database from a Remote Service](#example-json-database)|This code example shows how to bind JSON data from a remote service request to geographic symbol series in the `igMap` control.
[Code Example: Binding Geographic Shape Series to a Shape/DBF File Pair](#example-bdf-file-pair)|This code example shows how to bind a pair of shape and database files to geographic shape series in the `igMap` control.
[Code Example: Binding Geographic Scatter Area Series to a Triangulation File](#example-triangulation-file)|This code example shows how to bind triangulation file to a geographic scatter area series in the `igMap` control.


##<a id="example-js-array"></a>Code Example: Binding Geographic Symbol Series to a JavaScript Array

### Description

This code example shows how to bind a JavaScript array to geographic
symbol series in the `igMap` control.

### Code

The following code snippet defines a JavaScript array with some geographic coordinates.

**In JavaScript:**

```js
var data = [
    { Name: "Warsaw", Country: "Poland", Latitude: 52.21, Longitude: 21 },
    { Name: "London", Country: "England", Latitude: 51.50, Longitude: 0.12 },
    { Name: "Berlin", Country: "Germany", Latitude: 52.50, Longitude: 13.33 },
    { Name: "Moscow", Country: "Russia", Latitude: 55.75, Longitude: 37.51 },
    { Name: "Sydney", Country: "Australia", Latitude: -33.83, Longitude: 151.2 },
    { Name: "Tokyo", Country: "Japan", Latitude: 35.6895, Longitude: 139.6917 }
];
```

The following code instantiates an `igMap` control and configures geographic symbol series with the already defined array. The assignment of the array data to the `dataSource` property of the series object configures the control to use the array. The `latitudeMemberPath` and `longitudeMemberPath` options are configured with the names of the properties of the objects in the array which contain the geographic latitude and longitude.

**In JavaScript:**

```js
$("#map").igMap({
    backgroundContent: {
        type: "openStreet"
    },
    series: [{
        type: "geographicSymbol",
        name: "worldCities",
        dataSource: data,
        latitudeMemberPath: "Latitude",
        longitudeMemberPath: "Longitude",
        markerType: "automatic"
    }]
});
```



##<a id="example-mvc-model-object"></a>Code Example: Binding Geographic Symbol Series to a Model Object in ASP.NET MVC


### Description

This code example shows how to bind a view model object to an `igMap`
control instance in an ASP.NET MVC application.

### Code

1. Data model

	The following code snippet defines a data model object for an ASP.NET MVC application.

	**In C#:**

	```csharp
	namespace SampleMvcApp.Models
	{
	    public class WorldCity
	    {
	        public string Name { get; set; }
	        public string Country { get; set; }
	        public double Latitude { get; set; }
	        public double Longitude { get; set; }
	    }
	}
	```

2. Controller action method

	The following code snippet defines a controller action method which creates a list of model objects, fills the list with data and passes the data to an ASP.NET MVC view.

	**In C#:**

	```csharp
	public ActionResult Index()
	{
	    List<SampleMvcApp.Models.WorldCity> WorldCities = 
	        new List<SampleMvcApp.Models.WorldCity>
	    {
	        new WorldCity { Name = "Warsaw", Country = "Poland", 
	            Latitude = 52.21, Longitude = 21 },
	        new WorldCity { Name = "London", Country = "England", 
	            Latitude = 51.50, Longitude = 0.12 },
	        new WorldCity { Name = "Berlin", Country = "Germany", 
	            Latitude = 52.50, Longitude = 13.33 },
	        new WorldCity { Name = "Moscow", Country = "Russia", 
	            Latitude = 55.75, Longitude = 37.51 },
	        new WorldCity { Name = "Sydney", Country = "Australia", 
	            Latitude = -33.83, Longitude = 151.2 },
	        new WorldCity { Name = "Tokyo", Country = "Japan", 
	            Latitude = 35.6895, Longitude = 139.6917 }
	    };
	    return View(WorldCities.AsQueryable());
	}
	```

3. Map instantiation and data binding

	The following code snippet shows the MVC helper code which instantiates an `igMap` control in a strongly-typed ASP.NET MVC view.

	**In ASPX:**

	```csharp
	<%@ Page Language="C#" Inherits="IQueryable<SampleMvcApp.Models.WorldCity>"
	    MasterPageFile="~/Views/Shared/MvcSite.Master" %>
	<%= Html.Infragistics().Map(Model)
	        .ID("map")
	        .BackgroundContent(bgr => bgr.OpenStreetMaps())
	        .Series(series => {
	            series.GeographicSymbol("worldCities")
	                .LatitudeMemberPath(item => item.Latitude)
	                .LongitudeMemberPath(item => item.Longitude);
	        })
	        .DataBind()
	        .Render()
	%>
	```

	-   The following code snippet shows the MVC helper code which instantiates an igMap control in a regular ASP.NET MVC view by setting the type of the model object directly into the helper.

		**In ASPX:**

		```csharp
		<%= Html.Infragistics().Map<SampleMvcApp.Models.WorldCity>(Model)
		        .ID("map")
		        .BackgroundContent(bgr => bgr.OpenStreetMaps())
		        .Series(series => {
		            series.GeographicSymbol("worldCities")
		                .LatitudeMemberPath(item => item.Latitude)
		                .LongitudeMemberPath(item => item.Longitude)
		                .MarkerType(MarkerType.Automatic);
		        })
		        .DataBind()
		        .Render()
		%>
		```

	In both examples, the `LatitudeMemberPath()` and `LongitudeMemberPath()` calls configure the names of the properties of the objects in the data model which contain the geographic latitude and longitude.

##<a id="example-json-local"></a>Code Example: Binding Geographic Symbol Series to a JSON Database

### Description

This sample demonstrates how to bind JSON data with locations of cities in the world to the igMap control using a geographic symbol series.

### Example

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/map/json-binding](%%SamplesEmbedUrl%%/map/json-binding)
</div>

##<a id="example-json-database"></a>Code Example: Binding Geographic Symbol Series to a JSON Database from a Remote Service

### Description

This code example shows how to bind JSON data from a remote service
request to geographic symbol series in the `igMap` control.

### Code

The following code shows how to instantiate an `igMap` control and bind it to data returned from a remote service in JavaScript. The assignment of a URL to the dataSourceUrl option of the map series object configures the control to execute a GET request for data to that URL. A Web service, WCF service or an MVC controller action must be configured for that URL and it must return a JSON formatted data. The dataSourceType option is configured with the value “json” to specify that the expected result from the remote call is a JSON formatted array of data.

**In JavaScript:**

```js
$("#map").igMap({
    backgroundContent: {
        type: "openStreet"
    },
    series: [{
        type: "geographicSymbol",
        name: "worldCities",
        dataSourceUrl: "http://www.example.com/WorldCitiesData",
        latitudeMemberPath: "Latitude",
        longitudeMemberPath: "Longitude"
    }]
});
```

The following code shows how to instantiate an `igMap` control and bind it to data returned from a remote service in ASP.NET MVC. The assignment of a URL to the `DataSourceUrl()` call of the map series object configures the control to execute a GET request for data to that URL. A Web service, WCF service or an MVC controller action must be configured for that URL and it must return a JSON formatted data. The `DataSourceType()` call specifies that the expected result is a JSON formatted array of data.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map<SampleMvcApp.Models.WorldCity>()
        .ID("map")
        .BackgroundContent(bgr => bgr.OpenStreetMaps())
        .Series(series => {
            series.GeographicSymbol("worldCities")
                .DataSourceType("json")
                .DataSourceUrl("http://www.example.com/WorldCitiesData")
                .LatitudeMemberPath(item => item.Latitude)
                .LongitudeMemberPath(item => item.Longitude);
        })
        .DataBind()
        .Render()
%>
```



##<a id="example-bdf-file-pair"></a>Code Example: Binding Geographic Shape Series to a Shape/DBF File Pair

### Description

This code example shows how to bind a pair of shape and database files
to geographic shape series in the `igMap` control.

### Code

The following code instantiates an `igMap` control and configures geographic shape series in JavaScript. The shape and database file locations on the server are specified correspondingly in the `shapeDataSource` and `databaseSource` options assignments. The `shapeMemberPath` assignment is given for reference purposes only and is an optional parameter that can be omitted.

**In JavaScript:**

```js
$("#map").igMap({
    backgroundContent: {
        type: "openStreet"
    },
    series: [{
        type: "geographicShape",
        name: "world",
        shapeMemberPath: "points",
        shapeDataSource: "/Data/world.shp",
        databaseSource: "/Data/world.dbf"
    }]
});
```

The following code instantiates an `igMap` control and configures geographic shapes series in ASP.NET MVC. The shape and database file locations on the server are specified correspondingly in the `ShapeDataSource()` and `DatabaseSource()` calls. The `ShapeMemberPath()` call is given for reference purposes only and is an optional parameter that can be omitted.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map()
        .ID("map")
        .BackgroundContent(bgr => bgr.OpenStreetMaps())
        .Series(series => {
            series.GeographicShape("world")
                .ShapeMemberPath("points")
                .ShapeDataSource(Url.Content("~/Data/world.shp"))
                .DatabaseSource(Url.Content("~/Data/world.dbf"));
        })
        .DataBind()
        .Render()
%>
```



##<a id="example-triangulation-file"></a>Code Example: Binding Geographic Scatter Area Series to a Triangulation File

### Description

This code example shows how to bind triangulation file to a geographic scatter area series in the igMap control.

### Code

The following code instantiates an `igMap` control and configures geographic scatter area series in JavaScript. The triangulation file location on the server is specified in the `triangulationDataSource` option assignment. Specifying values for the properties `triangleVertexMemberPath1`, `triangleVertexMemberPath2`, `triangleVertexMemberPath3`, `longitudeMemberPath`, `latitudeMemberPath`, and `colorMemberPath` is needed only if a custom triangulation data source is used.

**In JavaScript:**

```js
$("#map").igMap({
    series: [{
        type: "geographicScatterArea",
        name: "precipitation",
        colorScale: {
            type: "customPalette",
            interpolationMode: "interpolateRGB",
            minimumValue: 0.15,
            palette: ["#3300CC", "#4775FF", "#0099CC", "#00CC99", "#33CC00", "#99CC00", 
                "#CC9900", "#FFC20A", "#CC3300"]
        },
        triangleVertexMemberPath1: "v1",
        triangleVertexMemberPath2: "v2",
        triangleVertexMemberPath3: "v3",
        longitudeMemberPath: "pointX",
        latitudeMemberPath: "pointY",
        colorMemberPath: "value",
        triangulationDataSource: "/Data/precipitation.itf"
    }]
});
```

The following code instantiates an `igMap` control and configures geographic scatter area series in ASP.NET MVC. The triangulation file location on the server is specified in the `TriangulationDataSource()` call. Specifying values for `TriangleVertexMemberPath1()`, `TriangleVertexMemberPath2()`, `TriangleVertexMemberPath3()`, `LongitudeMemberPath()`, `LatitudeMemberPath()`, and `ColorMemberPath()` is optional.

**In ASPX:**

```csharp
<%= Html.Infragistics().Map()
        .ID("map")
        .Series(series => {
            series.GeographicScatterArea("precipitation")
                .ColorScale(cs => 
                    cs.CustomPalette()
                        .InterpolationMode(InterpolationMode.InterpolateRGB)
                        .MinimumValue(0.15)
                        .Palette(new List<string>() { "#3300CC", "#4775FF", "#0099CC", 
                            "#00CC99", "#33CC00", "#99CC00", "#CC9900", "#FFC20A", 
                            "#CC3300" })
                )
                .TriangleVertexMemberPath1("v1")
                .TriangleVertexMemberPath2("v2")
                .TriangleVertexMemberPath3("v3")
                .LongitudeMemberPath("pointX")
                .LatitudeMemberPath("pointY")
                .ColorMemberPath("value")
                .TriangulationDataSource(Url.Content("~/Data/precipitation.itf"));
        })
        .DataBind()
        .Render()
%>
```



##<a id="related-content"></a>Related Content


### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[igMap Overview](Overview-igMap.html):  This topic provides conceptual information about the `igMap`™ control including its main features, minimum requirements, and user functionality.

-	[Adding an igMap](Adding-igMap.html): This topic demonstrates how to add a simple map with basic features to a web page.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[Geographic Symbol Series](%%SamplesUrl%%/map/geo-symbol-series): This sample demonstrates creating maps and visualizing Geographic Symbol series.

-	[Geographic Shapes Series](%%SamplesUrl%%/map/geo-shapes-series): This sample demonstrates binding shape files and database files to a map control and configuring Geographic Shapes map series.

-	[Geographic Polyline Series](%%SamplesUrl%%/map/geo-polyline-series): This sample shows binding shape and database files and configuring Geographic Polyline map series.

-	[Geographic Scatter Area Series](%%SamplesUrl%%/map/geo-scatter-area): This sample demonstrates binding pre-triangulated (ITF) files to a map control with the help of the Geographic Scatter Area series.

-	[Geographic Contour Line Series](%%SamplesUrl%%/map/geo-contour-line): This sample demonstrates how to bind pre-triangulated (ITF) files to a map control and configure Geographic Contour Line series.





 

 


