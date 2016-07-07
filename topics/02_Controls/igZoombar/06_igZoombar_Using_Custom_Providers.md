<!--
|metadata|
{
	"fileName": "igzoombar-using-custom-providers",
	"controlName": "igZoombar",
	"tags": ["Charting","Data Presentation","Customization"]
}
|metadata|
-->

# igZoombar Using Custom Providers

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

igZoombar is designed with the ability to work with virtually every JavaScript component that provides zooming options. Initialization and communication is handled through an interface that can be extended to support custom controls. The interface is responsible for creating the clone widget (the smaller copy of the zoomable component that renders inside the Zoombar widget), send zoom actions to the component its attached to and receive notifications from it to update its UI when the zoom changes through the component's own UI or API. Such an interface or an extension to the basic `$.ig.igZoombarProviderDefault` (provider for short) can be initialized by the Zoombar or passed as an instance directly using the [provider](%%jQueryApiUrl%%/ui.igzoombar#options:provider) option.

## <a id="provider-structure"></a> Provider Structure

The custom provider should implement all methods available in the base class `$.ig.igZoombarProviderDefault`. It should be defined in the same namespace if only its name is passed to igZoombar (the suggested option when using the MVC helpers for the widget).

A brief description of each method follows:

- `init` - Constructor returning the provider instance on exit. The default implementation assigns passed options to the settings property.
- `clean` - A method called just before Zoombar deletes the provider instance. Can be used to e.g. unbind jQuery events attached to the element of the zoomed component.
- `getBaseOpts` - igZoombar calls this to get a valid set of options the component its attached to is initialized with. The widget does not use the returned value itself but rather passes it for further processing back to the provider.
- `cleanOptsForZoom` - After obtaining the base optionss igZoombar will call this method expecting it to modify them so that they can be used to render the clone component inside its own zoom UI. Example modifications are the removal of grid lines, axes, labels, tooltips, zoom actions. The width and height of the container the clone component should fit in is added by igZoombar as top level properties of the options object passed.
- `createClone` - Should initialize and render the clone component. igZoombar will call it with two parameters - container to initialize the clone on and the options that are first passed through the `getBaseOpts` and `cleanOptsForZoom` functions.  
- `widgetName` - Returns the name of the target component. Can be omitted in most cases.
- `targetWidth` - Returns the width of the target component. This will be called if igZoombar's option [width](%%jQueryApiUrl%%/ui.igzoombar#options:width) is set to `auto` which makes igZoombar try to render with the same width as the component it's zooming.
- `syncMinWidth` - Should sync the property of the target component that corresponds to the [minWidth](%%jQueryApiUrl%%/ui.igzoombar#options:minWidth) propert of igZoombar (if applicable). 

### <a id="assigning-a-provider"></a> Assigning a provider  

## <a id="igzoombar-with-chartjs"></a> igZoombar with ChartJS

## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance (igZoombar)](igZoombar-Accessibility-Compliance.html): This topic explains the accessibility features of the `igZoombar` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igZoombar)](igZoombar-Known-Issues-And-Limitations.html): This topic describes the known issues and limitations of the `igZoombar` control and the available workarounds.

- [jQuery and ASP.NET MVC Helper API Links (igZoombar)](igZoombar-ASP-NET-MVC-Helper-API.html): This topic provides links to the API reference documentation about the `igZoombar` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.
[//]: # (This sample is part of the GitHub repo demos and should link to github.io)

- [igZoombar with ChartJS](%%SamplesUrl%%/): This sample demonstrates integrating `igZoombar` with a `ChartJS` control.