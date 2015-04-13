<!--
|metadata|
{
    "fileName": "slider-adding",
    "controlName": "Slider",
    "tags": ["How Do I","MVC"]
}
|metadata|
-->

# Adding Slider

## Topic Overview

### Purpose

This topic details how to add a jQuery Mobile `slider` using the Infragistics ASP.NET MVC helper.

### Required background

The following topics are prerequisites to understanding this topic:

- [Slider Overview](Slider-Overview.html): This topic details the features of the `Slider` ASP.NET MVC helper.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Adding a Slider**](#adding)
-   [**Related Content**](#related-content)


## <a id="introduction"></a>Introduction

The Slider ASP.NET MVC helper is used to render a jQuery Mobile `slider` in an ASP.NET view. A slider is a common UI element on mobile devices that is used as an editor for numeric input.



## <a id="adding"></a>Enabling Slider

This procedure guides you in adding a `Slider` to a view in an ASP.NET MVC solution using the ASP.NET MVC helper.

### Preview

The following screenshot is a preview of the final result.

![](images/Slider_Adding_1.png)

### Prerequisites

To complete the procedure, you need the following:

-   An ASP.NET MVC Mobile application

### Overview

Following is a conceptual overview of the process:

1. Including resources in the view page

2. Adding a Slider to the view page

3. Verifying the result

### Steps

The following steps demonstrate how to add a `Slider` with default options to a View.

1. Include resources in the view page

	Reference the *Infragistics.Web.Mvc.Mobile.dll* assembly as well as the Infragistics Mobile loader. In the following example, all of the JavaScript and CSS files are located under a virtual directory named *ig_mobileui*. In order to complete this step, change the path to the correct JavaScript and CSS location in your application.
	
	**In Razor:**
	
	```csharp
	@using Infragistics.Web.Mvc.Mobile
	<script src="http://code.jquery.com/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile.min.js"></script>
	<script type="text/javascript" src="http://localhost/ig_mobileui/js/infragistics.mobile.loader.js"></script>
	@(Html.InfragisticsMobile().
	    Loader().
	    ScriptPath("http://localhost/ig_mobileui/js/").
	    CssPath("http://localhost/ig_mobileui/css/").
	    Render())
	```

2. Add `Slider` to the view page

	In this example, the `Slider` is configured with the [`Label`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SliderWrapper~Label.html) property set to “*Volume*” and [`Value`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SliderWrapper~Value.html) set to *30.0*
	
	**In Razor:**
	
	```csharp
	@(
	    Html.InfragisticsMobile()
	    .Slider()
	    .Label("Volume")
	    .Value(30.0)    
	    .Render()
	)
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.




## <a id="related-content"></a>Related Content

### Topics

The following topics provide additional information related to this topic.

- [Slider Overview](Slider-Overview.html): This topic details the features of the `Slider` ASP.NET MVC helper.

- [Configure Slider](Slider-Configuring.html): This topic contains information and references needed to configure the `Slider` using the ASP.NET MVC helper

- [Property Reference](Slider-Property-Reference.html): This topic provides reference information about the properties of the `Slider` ASP.NET MVC helper



### Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/mobile-slider/basic-usage): This sample demonstrates how the Slider ASP.NET MVC helper is used in a basic example.

- [Color Picker](%%SamplesUrl%%/mobile-slider/color-picker): This sample demonstrates how the Slider ASP.NET MVC helper is used in a Color Picker scenario. When the sliders are moved, the color of the square is changed and the hex value of the color gets populated automatically.





 

 


