<!--
|metadata|
{
	"fileName": "igzoombar-using-custom-providers",
	"controlName": "igZoombar",
	"tags": ["Charting","Data Presentation","Customization"]
}
|metadata|
-->

# igZoombar Integration with Custom Components

igZoombar can communicate to any data visualization component that supports zooming through an interface.

## Topic Overview

### Purpose

This topic provides information about the extensibility options of the `igZoombar`™ including a tutorial on how to use the widget to zoom a third-party open source chart through a custom interface called provider.

### Required background

The following topics are prerequisites to understanding this topic:

- [igZoombar Overview](igZoombar-Overview.html): This topic provides conceptual information about the `igZoombar`™ control and the functionalities it including the supported user interactions and some configuration basics.
- [Adding igZoombar](Adding-igZoombar.html): This topic explains, with code examples, how to add the `igZoombar`™ control to an HTML page and an ASP.NET MVC application.
- [Configuring igZoombar](Configuring-igZoombar.html): This topic explains, with code examples, how to configure the zoom action and the zoom window of the `igZoombar`™ control.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Provider Structure**](#provider-structure)
	-   [Assigning a provider](#assigning-a-provider)
-	[**igZoombar with ChartJS**](#igzoombar-with-chartjs)
-   [**Related Content**](#related-content)
	-   [Topics](#topics)
	-   [Samples](#samples)

## <a id="introduction"></a> Introduction

igZoombar is designed with the ability to work with virtually every JavaScript component that provides zooming options. Initialization and communication is handled through an interface that can be extended to support custom controls. The interface is responsible for creating the clone widget (the smaller copy of the zoomable component that renders inside the Zoombar widget), send zoom actions to the component it's attached to and receive notifications from it to update its UI when the zoom changes through the component's own UI or API. Such an interface or an extension to the basic `$.ig.igZoombarProviderDefault` (provider for short) can be initialized by the Zoombar or passed as an instance directly using the [provider](%%jQueryApiUrl%%/ui.igzoombar#options:provider) option.

## <a id="provider-structure"></a> Provider Structure

The custom provider should implement all methods available in the base class `$.ig.igZoombarProviderDefault`. It should be defined in the same namespace if only its name is passed to igZoombar (the suggested option when using the MVC helpers for the widget).

A brief description of each method follows:

- `init` - Constructor returning the provider instance on exit. The default implementation assigns passed options to the settings property.
- `clean` - A method called just before igZoombar deletes the provider instance. Can be used to execute necessary clean-up on the clone or target components.
- `getBaseOpts` - igZoombar calls this to get a valid set of options the component its attached to is initialized with. The widget does not use the returned value itself but rather passes it for further processing back to the provider.
- `cleanOptsForZoom` - After obtaining the base options igZoombar will call this method expecting it to modify them so that they can be used to render the clone component inside its own zoom UI. Example modifications are the removal of grid lines, axes, labels, tooltips, zoom actions. The width and height of the container the clone component should fit in is added by igZoombar as top level properties of the options object passed.
- `createClone` - Should initialize and render the clone component. igZoombar will call it with two parameters - container to initialize the clone on and the options that are first passed through the `getBaseOpts` and `cleanOptsForZoom` functions.  
- `widgetName` - Returns the name of the target component. Can be omitted in most cases.
- `targetWidth` - Returns the width of the target component. This will be called if igZoombar's option [width](%%jQueryApiUrl%%/ui.igzoombar#options:width) is set to `auto` which makes igZoombar try to render with the same width as the component it's zooming.
- `syncMinWidth` - Should sync the property of the target component that corresponds to the [zoomWindowMinWidth](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMinWidth) propert of igZoombar (if applicable).
- `setSize` - igZoombar calls this with parameters width and height to modify the clone components dimensions once it's initialized and then everytime it reposponds to size changes from either API calls or Responsive Web Design-related resizes.
- `targetObject` - Gets or sets the instance of the target component. igZoombar will not try to set the instance itself for custom providers. If it has to create the provider instance itself, handling the provider [providerCreated](%%jQueryApiUrl%%/ui.igzoombar#events:providerCreated) event can be used to set the target instance for future use.
- `update` - Sets new zoom configuration to the target component. igZoombar passes two parameters - the left and right of the new zoom range as a number from 0 to 1 representing fractions of the total zoombar width.

The base provider has two properties in the settings object that gets assigned by the constructor:
- `targetObject` - the target component's instance. It's set by igZoombar only when the provider is determined automatically from the officially supported widgets.
- `zoomChangedCallback` - a callback to execute when the zoom range changes from the target's component own UI or API. This setting is set by igZoombar automatically. The callback function expects two parameters:
  - `event` - an event to pass as original for the [zoomChanging](%%jQueryApiUrl%%/ui.igzoombar#events:zoomChanging)/[zoomChanged](%%jQueryApiUrl%%/ui.igzoombar#events:zoomChanged) events fired by igZoombar. Pass `null` if not applicable.
  - `details` - an object with the following structure:

  ```js
	{
		oldLeft: number,
		oldWidth: number,
		newLeft: number,
		newWidth: number
	}
  ```
  The values should represent the fractions of the total width of the zoomed component with a number ranging from 0 to 1. Only the properties prefixed with `new` are mandatory. The rest are only used in the Zoombar's event arguments.

### <a id="assigning-a-provider"></a> Assigning a provider
Assigning the custom provider is done through the [provider](%%jQueryApiUrl%%/ui.igzoombar#options:provider) option. By default igZoombar will create an instance of `$.ig.ZoombarProviderDataChart` to interface with an igDataChart initialized on the element passed to the [target](%%jQueryApiUrl%%/ui.igzoombar#options:target) option. To use a custom provider pass a reference to the interface class you created. When igZoombar creates an instance of it, it will fire a [providerCreated](%%jQueryApiUrl%%/ui.igzoombar#events:providerCreated) event with the instance as part of the event arguments which allows for any user-specific code to be executed before the provider starts being utilized by the widget.

## <a id="igzoombar-with-chartjs"></a> igZoombar with ChartJS

Using the information above this paragraph will show with code samples how to integrate igZoombar with the popular open source charting solution [ChartJS](https://github.com/chartjs/Chart.js). For briefness, the code only allows zooming horizontal time axes.

First, define the class that the provider will be an instance of.

**In JavaScript:**
```js
$.ig.ZoombarProviderChartJS = $.ig.ZoombarProviderChartJS ||
	$.ig.ZoombarProviderDefault.extend({
});

``` 
Next, start adding overrides to the inherited functions.

**In JavaScript:**
```js
getBaseOpts: function (options) {
	return this.settings.baseOptions;
},
cleanOptsForZoom: function (options) {
	var o = options.options, i;
	o.legend.display = false;
	o.title.display = false;
	for (i = 0; i < o.scales.xAxes.length; i++) {
		o.scales.xAxes[i].display = false;
	}
	return options;
},
```
`getBaseOpts` assumes that there will be a baseOptions setting passed to the constructor. `cleanOptsForZoom` basically cleans the clone chart from titles, legends and axes so that it shows a very basic representation of the target chart.

**In JavaScript:**
```js
createClone: function (container, options) {
	var canvas;
	this.settings.container = container;
	this.setSize(options.width, options.height);
	canvas = $("<canvas></canvas>").appendTo(container);
	window.myZoomLine = new Chart(canvas[0].getContext("2d"), options);
	return container;
},
```
As previously mentioned igZoombar will pass the container it creates for the clone component and the options that were first modified by `cleanOptsForZoom` function. `createClone` will also store the container for future use, add a canvas inside of it and create a ChartJS instance using the 2d context of the canvas and the options it receives.

**In  JavaScript:**
```js
setSize: function (width, height) {
	this.settings.container.css({
		width: width,
		height: height
	});
},
```
ChartJS simply fills the space available in its container, so setting width and height can be done through a jQuery.css call. 

**In JavaScript:**
```js
update: function (a, b) {
	var scaleName, scale,
		chartInstance = this.settings.targetObject, options;
	for (scaleName in chartInstance.scales) {
		if (chartInstance.scales.hasOwnProperty(scaleName) && scaleName.startsWith("x")) {
			scale = chartInstance.scales[scaleName];
			options = scale.options;
			if (!this.scale) {
				this.scale = {
					ft: scale.firstTick,
					lt: scale.lastTick
				}
			}
			scale.firstTick = this.scale.ft;
			scale.lastTick = this.scale.lt;
			options.time.min = scale.getValueForPixel(
				(scale.getPixelForValue(this.scale.lt) - scale.getPixelForValue(this.scale.ft)) * a
			);
			options.time.max = scale.getValueForPixel(scale.getPixelForValue(this.scale.lt) * b);
			chartInstance.update(0);
		}
	}
	return true;
},
```
The function will set the min and max time to be displayed in a ChartJS time axis.

Finally create the chart to be zoomed, the zoombar and handle `providerCreated` to pass the options that are required.

**In JavaScript:**
```js
window.onload = function () {
	var ctx = $("#canvas")[0].getContext("2d");
	window.myLine = new Chart(ctx, config);
	$("#zoombar").igZoombar({
		provider: $.ig.ZoombarProviderChartJS,
		target: $("#canvas"),
		providerCreated: function (evt, ui) {
			ui.provider.settings.baseOptions = $.extend(true, {}, config);
			ui.provider.settings.targetObject = window.myLine;
		}
	});
};
```
Since ChartJS is not zoomable out of the box, no backwards zoom communication using the callback is needed for this specific use-case.

A full demo sample containing the working chart and zoombar is available through the links at the end of the page.

## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance (igZoombar)](igZoombar-Accessibility-Compliance.html): This topic explains the accessibility features of the `igZoombar` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igZoombar)](igZoombar-Known-Issues-And-Limitations.html): This topic describes the known issues and limitations of the `igZoombar` control and the available workarounds.

- [jQuery and ASP.NET MVC Helper API Links (igZoombar)](igZoombar-ASP-NET-MVC-Helper-API.html): This topic provides links to the API reference documentation about the `igZoombar` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

- [igZoombar with ChartJS](https://github.com/IgniteUI/ignite-ui/blob/master/demos/zoombar/zoombar-chartjs.html): This sample demonstrates integrating `igZoombar` with a `ChartJS` control.