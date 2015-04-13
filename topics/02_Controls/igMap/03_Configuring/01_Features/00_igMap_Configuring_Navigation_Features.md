<!--
|metadata|
{
    "fileName": "igmap-configuring-navigation-features",
    "controlName": "igMap",
    "tags": ["Charting","How Do I","Navigation"]
}
|metadata|
-->

# Configuring the Navigation Features (igMap)



##Topic Overview

### Purpose

This topic explains, with code examples, how to configure navigation features of the `igMap`™ control and how to use its API to define the position and size of the visible portion of the map.

### Required background

The following topics are prerequisites to understanding this topic:

- [igMap Overview](Overview-igMap.html): This topic provides conceptual information about the `igMap` control including its main features, minimum requirements and user interaction capabilities.

- [Adding an igMap](Adding-igMap.html): This topic is a walkthrough for adding a simple `igMap` control with basic features to a web page.

### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Navigation Features Configuration Summary](#navigation)
-   [Code Examples Summary](#code-example)
    -   [Retrieving the Coordinates of the Visible Portion of the Map and Converting Them into Geographic Units](#coordinates-visible-portion)
    -   [Getting Notification on Every Map Window Change](#notification)
    -   [Retrieving the Geographic Coordinates of the Center of the Map](#coordinates-map-center)
    -   [Centering the Map on a Geographic Point](#centering)
    -   [Zooming a Map Programmatically](#zooming)
    -   [Panning a Map Programmatically](#panning)
-   [Related Content](#related-content)
    -   [Topics](#topics)



##<a id="introduction"></a>Introduction


### <a id="navigation"></a>Navigation features summary

Navigating and finding objects are the main purposes for using maps. The `igMap` control provides an extensive set of navigation features along with options and methods for using them in your code.

When enabled the Overview Plus Detail (OPD) panel appears on the lower right corner of the map. It shows a thumbnail of the world map and contains buttons and slider for zooming. Additionally, you can drag the rectangle of the current view across the panel to position it on different regions.

The user can perform zooming in and out with mouse scroll or Page Up/Down keys, panning with mouse drag or touch and drag, and other navigational actions all being controlled by option settings. For reference for all interactive features see [igMap Overview: User Interaction and Usability](Overview-igMap.html#user-interaction).

As a developer, you can use the `igMap`’s options and methods to set the current map position and get the coordinates of the current view, in various ways, as the user navigates to different regions. You can either present a specific view at initialization or change the view at runtime depending on the user input or dynamic actions.



##Navigation Features Configuration Summary


### Navigation features configuration summary chart

The following table lists the configurable aspects of the `igMap` control regarding navigation features.

Configurable aspect |Details |Properties
---|---|---
OPD panel visibility |By default, the OPD panel is not shown. When  configured to display, the OPD panel is shown in the lower right corner of the map.|In JavaScript:<li>[overviewPlusDetailPaneVisibility](%%jQueryApiUrl%%/ui.igMap#options:overviewPlusDetailPaneVisibility)<br>In ASP.NET MVC:<li> [OverviewPlusDetailPaneVisibility()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~OverviewPlusDetailPaneVisibility.html)
OPD panel background image|URL to a background image for the OPD panel.|In JavaScript:<li>[overviewPlusDetailPaneBackgroundImageUri](%%jQueryApiUrl%%/ui.igMap#options:overviewPlusDetailPaneBackgroundImageUri)<br>In ASP.NET MVC: <li>[OverviewPlusDetailPaneBackgroundImageUri()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Map`1~OverviewPlusDetailPaneBackgroundImageUri.html)
Default interaction|By default, panning is not allowed and zooming is the default dragging interaction. You can configure panning to be the default dragging interaction.|In JavaScript:<li>[defaultInteraction](%%jQueryApiUrl%%/ui.igMap#options:defaultInteraction)<br>In ASP.NET MVC:<li>[DefaultInteraction()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~DefaultInteraction.html)
Panning modifier key|Modifier key to use when panning is not the default interaction.|In JavaScript:<li>[panModifier](%%jQueryApiUrl%%/ui.igMap#options:panModifier)<br>In ASP.NET MVC:<li>[PanModifier()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~PanModifier.html)
Zooming modifier key|Modifier key to use when zooming is not the default interaction. By default, the Ctrl key switches to zooming.|In JavaScript: <li>[dragModifier](%%jQueryApiUrl%%/ui.igMap#options:dragModifier)<br>In ASP.NET MVC:<li> [DragModifier()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~DragModifier.html)
Retrieving the currently visible portion of the map|Get the coordinates and size of the visible portion of the World map.|<li>[actualWindowRect](%%jQueryApiUrl%%/ui.igMap#options:actualWindowRect)
Setting the visible portion of the map|Set the coordinates and size of the visible portion of the World map you want displayed.|In JavaScript:<li>[windowRect](%%jQueryApiUrl%%/ui.igMap#options:windowRect)<br>In ASP.NET MVC:<li>[WindowRect()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.SeriesViewer`3~WindowRect.html)

>**Note:** The `windowRect` option allows you to set the current map window and keeps the last value assigned to it. The `actualWindowRect` option allows the developer to get the updated window, with respect to the map aspect ratio, and provides information on the rendering of the actual map window.



##<a id="code-example"></a>Code Examples Summary


### Code examples summary chart

The following table lists the code examples included in this topic.

Example | Description
---|---
[](#coordinates-visible-portion)[Retrieving the Coordinates of the Visible Portion of the Map and Converting Them into Geographic Units](#coordinates-visible-portion)|This code example shows how to get the coordinates of the visible portion of the map and convert them into geographic units.
[](#notification)[Getting Notification on Every Map Window Change](#notification)|This code example shows how to attach to the  `windowRectChanged` event of the `igMap` control and receive notification on every change to the current map window.
[Retrieving the Geographic Coordinates of the Center of the Map](#coordinates-map-center)|This code example shows how to get the  coordinates of the visible portion of the map and calculate the geographic coordinates of its central point.
[](#centering)[Centering the Map on a Geographic Point](#centering)|This code example shows how to center the visible portion of the map on a point using its geographic coordinates (for example, to center around a city).
[](#zooming)[Zooming a Map Programmatically](#zooming)|This code example shows how to zoom in and out using the `igMap` API. 
[](#panning)[Panning a Map Programmatically](#panning)|This code example shows how to pan East, West, North and South using the `igMap` API.


## <a id="coordinates-visible-portion"></a>Code Example: Retrieving the Coordinates of the Visible Portion of the Map and Converting Them into Geographic Units


### Description

This code example shows how to get the Map Window in geographic coordinates.

Internally the `igMap` control keeps the position and size of the displayed portion of the map in units from 0 to 1 relative to the whole World map. For horizontal positions, 0 is visually the left most point of the map or the most Western corresponding to a geographic longitude of -180 degrees, and 1 being the right most point of the map or the most Eastern corresponding to a geographic longitude of +180 degrees. Similarly, for vertical position, 0 is visually the top most or the most Northern point on the map with a geographic latitude of 90 degrees, and 1 being the bottom most or the most Southern point with a geographic latitude of -90 degrees.

The `igMap` control provides the `getGeographicFromZoom()` method to convert relative coordinates into geographic coordinates accepting a window rectangle object whose properties are left, top, width, and height in relative units and returns an object with the same properties in geographical units.

### Code

The following code snippet shows how to use the `igMap` control’s `actualWindowRect` option to return the currently displayed view position and size, and convert them into geographical units.

**In JavaScript:**

```js
var relative = $("#map").igMap("option", "actualWindowRect");
var geographic = $("#map").igMap("getGeographicFromZoom", relative);
//  Assign coordinates to geographic area input elements
$("#leftGeo").val(geographic.left);
$("#topGeo").val(geographic.top);
$("#widthGeo").val(geographic.width);
$("#heightGeo").val(geographic.height);
```



##<a id="notification"></a>Code Example: Getting Notification on Every Map Window Change


### Description

Since the user can zoom and pan using the interactive features of the map, an HTML application may need notification of each time the current map window moves or changes scale. The `igMap` control provides the `windowRectChanged` event so that an application can attach a function call whenever the map window changes.

### Code

The following code snippet attaches a function to the `actualWindowRectChanged` event using the `on()` syntax of jQuery. The attached function converts the coordinates to geographic units and stores them into the values of HTML elements on the page.

**In JavaScript:**

```js
$(document).on("igmapactualwindowrectchanged", "#map", function (evt, ui) {
    //  Convert from relative to geographic coordinates
    var geographic = $("#map").igMap("getGeographicFromZoom",
                    {
                        left: ui.newLeft,
                        top: ui.newTop,
                        width: ui.newWidth,
                        height: ui.newHeight
                    }
        );
    //  Assign coordinates to geographic area input elements
    $("#leftGeo").val(geographic.left);
    $("#topGeo").val(geographic.top);
    $("#widthGeo").val(geographic.width);
    $("#heightGeo").val(geographic.height);
});
```



##<a id="coordinates-map-center"></a>Code Example: Retrieving the Geographic Coordinates of the Center of the Map


### Description

This code example shows how to get the coordinates of the visible portion of the map and calculate the coordinates of the geographical center point. This allows you to determine if the map is centered or is close to some geographic point of interest to the user.

### Code

The code snippet below gets the `actualWindowRect` option to determine the current map window. Then it converts it into geographic units and calculates both the center point’s coordinates and the radius of the displayed area in geographical units (degrees). The radius is the lesser of the width or height of the window. The values are calculated and assigned to the values of HTML elements on the page.

**In JavaScript:**

```js
//  Calculates the central point and radius of the specified rectangle in
//  geographic coordinates
function centeredFromGeographic(geographic) {
    var centered =
        {
            latitude: geographic.top + (geographic.height / 2),
            longitude: geographic.left + (geographic.width / 2),
            radius: Math.min(geographic.height / 2, geographic.width / 2)
        };
    return centered;
}
 
var relative = $("#map").igMap("option", "actualWindowRect");
var geographic = $("#map").igMap("getGeographicFromZoom", relative);
//  Calculate central point and radius and assign to Center and Zoom editors
var centered = centeredFromGeographic(geographic);
$("#centerLatitude").val(centered.latitude);
$("#centerLongitude").val(centered.longitude);
$("#centerRadius").val(centered.radius);
```



##<a id="centering"></a>Code Example: Centering the Map on a Geographic Point

### Description

This code example shows how to center the visible portion of the map on a point, using its geographic coordinates. This can be useful for applications where the user selects a point from a list (for example, a city, hospital, department store…) and the application navigates and zooms to that point.

### Code

The code below gets the coordinates of a point from the values of HTML elements on the page and then uses them to calculate the coordinates of the appropriate rectangular map window in geographical units. The code then converts the geographical into relative units using the `getZoomFromGeographic()` method and assigns the result to the `windowRect` option to make the reposition the map to the requested area.

**In JavaScript:**

```js
//  Calculates the geographic coordinates of a square around a central point and radius
function geographicFromCentered(centered) {
    var geographic =
    {
        left: centered.longitude - centered.radius,
        top: centered.latitude - centered.radius,
        width: centered.radius * 2,
        height: centered.radius * 2
    };
    return geographic;
}
var centered =
    {
        latitude: $("#centerLatitude").val(),
        longitude: $("#centerLongitude").val(),
        radius: $("#centerRadius").val()
    };
var geographic = geographicFromCentered(centered);
var relative = $("#map").igMap("getZoomFromGeographic", geographic);
$("#map").igMap("option", "windowRect", relative);
```



##<a id="zooming"></a>Code Example: Zooming a Map Programmatically

### Description

This code example shows how to zoom in and out using the `igMap` API. Zooming is carried out by recalculating the currently displayed map window, keeping the same center point, but rendered either a little bit larger (zoom out) or smaller (zoom in).

### Code

The following code snippet shows how to programmatically zoom in by defining a zoom scale of 5% in the `zoomScale` variable and calls the `zoomIn()` method to perform the actual zoom operation. The method first calculates the aspect ratio of the map control as the ratio between its width and its height. Then it calculates the zoom scale in absolute units and calculates the new map window’s width, height, and coordinates of the upper left corner. Calculating the height from the new width – preserves the aspect ratio and actually keeps the window centered on the same point. Additionally, it Caps the coordinates of the upper left corner to stay below 1.0. At the end, assigns the new map window to the control’s `windowRect` option.

**In JavaScript:**

```js
var zoomScale = 0.05;   //  Zoom scale to be used for zoom in/out operations
zoomIn("#map", zoomScale);
//  Calculates and sets a new zoomed in window rectangle for the specified map 
//  control, and specified zoom factor
function zoomIn(mapSelector, zoomFactor) {
    var map = $(mapSelector);
    var aspectRatio = map.width() / map.height();
    var mapWindow = map.igMap("option", "windowRect");
    var zoomScaleAbs = mapWindow.width * zoomFactor;
    mapWindow.width = mapWindow.width - (2 * zoomScaleAbs);
    mapWindow.height = mapWindow.width / aspectRatio;
    mapWindow.left = Math.min(1.0, mapWindow.left + zoomScaleAbs);
    mapWindow.top = Math.min(1.0, mapWindow.top + zoomScaleAbs);
    map.igMap("option", "windowRect", mapWindow);
}
```

The following code snippet shows how to programmatically zoom out. It acts identically to the zoom in example but performs different calculations to enlarge the map window and maintains the upper left corner coordinates above 0.0.

**In JavaScript:**

```js
var zoomScale = 0.05;   //  Zoom scale to be used for zoom in/out operations
zoomOut("#map", zoomScale);
//  Calculates and sets a new zoomed out window rectangle for the specified map 
//  control, and specified zoom factor
function zoomOut(mapSelector, zoomFactor) {
    var map = $(mapSelector);
    var aspectRatio = map.width() / map.height();
    var mapWindow = map.igMap("option", "windowRect");
    var zoomScaleAbs = mapWindow.width * zoomScale;
    mapWindow.width = mapWindow.width + (2 * zoomScaleAbs);
    mapWindow.height = mapWindow.width / aspectRatio;
    mapWindow.left = Math.max(0.0, mapWindow.left - zoomScaleAbs);
    mapWindow.top = Math.max(0.0, mapWindow.top - zoomScaleAbs);
    map.igMap("option", "windowRect", mapWindow);
}
```



##<a id="panning"></a>Code Example: Panning a Map Programmatically

### Description

This code example shows how to pan East, West, North and South using the `igMap` API. Perform panning by recalculating the position of the upper left corner of the currently displayed map window so that it moves in any one of the four directions.

### Code

The following code snippet defines functions for panning to the four possible directions. All of the methods get the current map window from the control using the `actualWindowRect` option and translate the upper left corner in the required direction. All functions take care to limit the coordinates of the upper left corner between 0.0 and 1.0. The `panFactor` argument defines how much the view will move to the required direction in percent.

**In JavaScript:**

```js
//  Calculates and sets a new window rectangle for the specified map control with
//  the specified amount of panning to the North
function panNorth(mapSelector, panFactor) {
    var map = $(mapSelector);
    var mapWindow = map.igMap("option", "actualWindowRect");
    var panScale = Math.min(mapWindow.width, mapWindow.height) * panFactor;
    mapWindow.top = Math.max(0.0, mapWindow.top - panScale);
    map.igMap("option", "windowRect", mapWindow);
}
//  Calculates and sets a new window rectangle for the specified map control with
//  the specified amount of panning to the South
function panSouth(mapSelector, panFactor) {
    var map = $(mapSelector);
    var mapWindow = map.igMap("option", "actualWindowRect");
    var panScale = Math.min(mapWindow.width, mapWindow.height) * panFactor;
    mapWindow.top = Math.min(1.0 - mapWindow.height, mapWindow.top + panScale);
    map.igMap("option", "windowRect", mapWindow);
}
//  Calculates and sets a new window rectangle for the specified map control with
//  the specified amount of panning to the West
function panWest(mapSelector, panFactor) {
    var map = $(mapSelector);
    var mapWindow = map.igMap("option", "actualWindowRect");
    var panScale = Math.min(mapWindow.width, mapWindow.height) * panFactor;
    mapWindow.left = Math.max(0.0, mapWindow.left - panScale);
    map.igMap("option", "windowRect", mapWindow);
}
//  Calculates and sets a new window rectangle for the specified map control with
//  the specified amount of panning to the East
function panEast(mapSelector, panFactor) {
    var map = $(mapSelector);
    var mapWindow = map.igMap("option", "actualWindowRect");
    var panScale = Math.min(mapWindow.width, mapWindow.height) * panFactor;
    mapWindow.left = Math.min(1.0 - mapWindow.width, mapWindow.left + panScale);
    map.igMap("option", "windowRect", mapWindow);
}
```



##<a id="related-content"></a>Related Content


###<a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring the Visual Features (igMap)](igMap-Configuring-Visual-Features.html): This topic shows how to configure visual features of the `igMap` control like cross hairs, tooltip templates, marker templates, and other.

- [Configuring the Map Series (igMap)](igMap-Creating-Different-Kinds-Maps.html): The topics in this group explain how to configure all supported map types (map series) of the `igMap`™ control in order to produce many different kinds of maps.





 

 


