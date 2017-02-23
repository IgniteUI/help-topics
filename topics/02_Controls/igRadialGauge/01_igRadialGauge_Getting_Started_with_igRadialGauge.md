<!--
|metadata|
{
    "fileName": "igradialgauge-getting-started-with-igradialgauge",
    "controlName": "igRadialGauge",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# Adding igRadialGauge


### Purpose

This topic demonstrates how to add the `igRadialGauge`™ control to a web page and bind it to data.

### Required background

The following lists the materials required as a prerequisite to understanding this topic.

-   [jQuery](http://learn.jquery.com/), [jQuery UI](http://jqueryui.com/)

**Topics**

- [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html): General information on the Ignite UI™ library.

- [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html): This topic provides general guidance on adding required JavaScript resources to use controls from the Ignite UI library.

- [igRadialGauge Overview](igRadialGauge-igRadialGauge-Overview.html): This topic provides conceptual information about the `igRadialGauge` control including its main features, minimum requirements for using charts and user functionality.

### In this topic

This topic contains the following sections:

-   [**Add Radial Gauge to a Web Page**](#add-radial-gauge)
   -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)



## <a id="add-radial-gauge"></a>Add Radial Gauge to a Web Page
### <a id="introduction"></a>Introduction

This procedure guides you through the process of adding a radial gauge control to a web page.

### <a id="preview"></a>Preview

The following screenshot is a preview of the final result.

![](images/igRadialGauge_Getting_Started_01.png)

### <a id="overview"></a>Overview

This topic takes you step-by-step toward adding a radial gauge to a web page The following is a conceptual overview of the process:

1.  Adding references to the required resources
    -   Overview
    -   Referencing resources in JavaScript using the `igLoader`
    -   Referencing resources manually

2.  Add HTML markup required by the `igRadialGauge`
3.  Instantiate the radial gauge 
4.  (Optional) Verifying the result

### <a id="steps"></a>Steps

The following steps demonstrate how to add an `igRadialGauge` control to a web page.

1. Add references to the required resources.

	**Overview**
	
	Reference the required resources. Referencing resources includes:
	
	-   Adding the jQuery, jQueryUI and Modernizr JavaScript resources to a folder named Scripts in your web site or web application.
	-   Adding the Ignite UI CSS files to a folder named Content/ig in your web site or web application (see the [Styling and Theming in Ignite UI](Deployment-Guide-Styling-and-Theming.html) topic for details).
	-   Adding the Ignite UI JavaScript files to a folder named Scripts/ig in your web site or web application (see the [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html) topic for details).
	
	**The resources can be added either manually or using loaders** (recommended).
	
	Referencing resources in JavaScript using the igLoader
	
	The `igLoader`™ control is the recommended way to load JavaScript and CSS resources required by the Ignite UI library controls. First the igLoader script must be included in the page:
	
	**In HTML:**
	
	```html
	<script  type="text/javascript" src="Content/ig/infragistics.loader.js"></script>
	```
	
	For HTML views the igLoader must be instantiated this way:
	
	**In HTML:**
	
	```html
	<script type="text/javascript">
	    $.ig.loader({
	        scriptPath: "Scripts/ig/",
	        cssPath: "Content/ig/",
	        resources: "igRadialGauge"
	    });
	<script>
	```
	
	The resources option specifies that the `igRadialGauge` control will be rendered.

2. Add HTML markup required by the `igRadialGauge`.

	**HTML example**
	
	Add the div elements for the radial gauge which will be referred in the gauge instantiation code.
	
	**In HTML:**
	
	```html
	<div id="gauge" class="gaugeContainer"></div>
	```

3. Instantiate the radial gauge.

	HTML example
	
	For the gauge div tags to be wrapped and the gauge drawn, the `igRadialGauge` control must be instantiated and its main options set. Add the code below to the existing code in the `<script>` tag used above for data array definition:
	
	**In Javascript:**
	
	```js
	$(function () {
	    $("#gauge").igRadialGauge({
	        width: "450px",
	        height: "450px"
	    });
	});
	```  

4. (Optional) Verify the result.

	To verify the result, save the page and view the final result in a web browser. The radial gauge should render as shown in the [Preview](#preview).



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic:

- [Configuring the Background (igRadialGauge)](igRadialGauge-Configuring-the-Backing.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s backing feature. It describes the properties of the backing area and provides an example of its implementation.

- [Configuring Labels (igRadialGauge)](igRadialGauge-Configuring-Labels.html): This topic provides a conceptual overview of labels with the `igRadialGauge`™ control. It describes the properties of the labels and also provides an example of how to configure the labels.

- [Configuring Needles (igRadialGauge)](igRadialGauge-Configuring-Needles.html): This topic provides a conceptual overview of needles with the `igRadialGauge`™ control. It describes the properties of the needles and also provides an example of how to configure them.

- [Configuring Ranges (igRadialGauge)](igRadialGauge-Configuring-Ranges.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s ranges. It describes the properties of the ranges and provides an example of how to add ranges to the radial gauge.

- [Configuring the Scales (igRadialGauge)](igRadialGauge-Configuring-the-Scales.html): This topic provides a conceptual overview of the `igRadialGauge`™ control’s scale. It describes the properties of the scale and also provides an example of how to implement it.

- [Configuring the Tick Marks (igRadialGauge)](igRadialGauge-Configuring-Tick-Marks.html): This topic provides a conceptual overview of tick marks with the `igRadialGauge`™ control. It describes the tick marks’ properties and provides an example of how to implement them.

### Samples

The following samples provide additional information related to this topic.

- [API Usage](%%SamplesUrl%%/radial-gauge/api-usage): The buttons and api-viewer showcase some of `igRadialGauge`'s needle methods. You can change the value of the needle at runtime and obtain the current value of the needle by clicking the corresponding buttons.

- [Gauge Animation](%%SamplesUrl%%/radial-gauge/motion-framework): This sample demonstrates how you can easily animate the Radial Gauge by setting the `transitionDuration` property.

- [Gauge Needle](%%SamplesUrl%%/radial-gauge/gauge-needle): Displayed as a pointer, the Needle indicates a single value on a scale. The options pane below allows you to interact with the Radial Gauge control’s Needle.

- [Label Settings](igradialgauge-configuring-labels.html#lable-example):  This sample demonstrates how to configure the Radial Gauge control’s Label settings. Use the slider to see how the `labelInterval` and `labelExtent` properties affect the Label.

- [Needle Dragging](%%SamplesUrl%%/radial-gauge/drag-needle): This sample demonstrates how you can drag the Radial Gauge control’s needle by using the Mouse events.

- [Range](%%SamplesUrl%%/radial-gauge/range): A range is a visual element that highlights a specified range of values on a scale. Use the options pane below to set the Radial Gauge control’s Range properties.

- [Scale Settings](%%SamplesUrl%%/radial-gauge/scale-settings): A scale defines a range of values in the Radial Gauge. Use the options pane below to set the Radial Gauge control’s Scale properties.

- [Tick Marks](%%SamplesUrl%%/radial-gauge/tickmarks): Tick marks can be displayed at every user specified interval on a gauge. Use the options pane below to set the Radial Gauge control’s Tick Mark properties.





 

 


