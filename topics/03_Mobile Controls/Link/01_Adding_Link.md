<!--
|metadata|
{
    "fileName": "adding-link",
    "controlName": "Link",
    "tags": ["How Do I","MVC","Navigation"]
}
|metadata|
-->

# Adding Link

## Topic Overview

### Purpose

This topic contains the information needed to enable the `Link` using the Infragistics MVC Wrappers.

### Required background

The following topics are prerequisites to understanding this topic:

Topic

Purpose

[Link Overview](Link-Overview.html)

This topic introduces MVC `Link` control wrapper and its main functionalities.



### In this topic

This topic contains the following sections:

-   [**Enabling Link**](#enabling)
    -   [Prerequisites](#prerequisites)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="enabling"></a> Enabling Link

This procedure will guide you to add a `Link` in a view page in MVC solution using the MVC Wrappers.

### Preview 

The following screenshot is a preview of the final result:

![](images/03_AddingLink_1.png)

### <a id="prerequisites"></a> Prerequisites 

To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

### <a id="overview"></a> Overview 

Following is a conceptual overview of the process:

1. Including resources in the view page
2. Adding a `Link` to the view page
3. Verifying the result

### <a id="steps"></a> Steps

The following steps demonstrate how to add a `Link`, using the MVC Wrappers.

1. Include resources in the view page

	A reference to the *Infragistics.Web.Mvc.Mobile.dll* is needed as well as reference to the Infragistics Mobile loader. In the following example, all of the js and css files are located under virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct js and css location
	
	**In Razor:**
	
	```csharp
	@using Infragistics.Web.Mvc.Mobile
	<script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile.min.js"></script>
	<script type="text/javascript" src="http://localhost/ig_mobileui/js/infragistics.mobile.loader.js"></script>
	@(Html.InfragisticsMobile().
	    Loader().
	    ScriptPath("http://localhost/ig_mobileui/js/").
	    CssPath("http://localhost/ig_mobileui/css/").
	    Render())
	```

2. Add `Link` to the view page

	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Link()
	    .ID("lnk1")
	    .Text("Infragistics")
	    .NavigateUrl("http://www.infragistics.com")
	    .Target("_blank")
	    .Render())
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*Link* Overview](Link-Overview.html): This topic introduces MVC `Link` control wrapper and its main functionalities.

- [Configuring *Link*](Configuring-Link.html): This topic contains the information and references needed to configure the `Link` using the MVC wrapper.

- [*Link* Property Reference](Link-Property-Reference.html): This topic provides reference information about the properties of the `Link` MVC Wrapper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-link/basic-usage): This sample demonstrates various usages of the `Link` ASP.NET MVC helper.
