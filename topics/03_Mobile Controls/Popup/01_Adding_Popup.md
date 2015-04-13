<!--
|metadata|
{
    "fileName": "adding-popup",
    "controlName": "Popup",
    "tags": ["Layouts","MVC"]
}
|metadata|
-->

# Adding Popup

## Topic Overview

### Purpose

This topic contains the information needed in order to enable the `Popup` using the Infragistics MVC Wrapper.

### Required background

The following topics are prerequisites to understanding this topic:

- [Popup](Popup-overview.html) [Overview](Popup-overview.html): This topic introduces the `Popup` MVC wrapper.



### In this topic

This topic contains the following sections:

-   [**Enabling Popup**](#enabling)
    -   [Code Preview](#code-preview)
    -   [Prerequisites](#prerequisites)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="enabling"></a> Enabling Popup

This procedure will guide you through adding `Popup` in a view page in MVC solution using the MVC Wrappers. You can add multiple instances of a `Popup` wrapper to one MVC View, but only one of them can be active. This sample below shows how this can be achieved.

### <a id="code-preview"></a> Code Preview 

The following code shows the HTML that is rendered as a final result:

> **Note:** You will notice that the MVC `Popup` wrapper will render some default attributes, even you did not define them on the server. Some of them like `aria-disabled` are added by jQuery itself, in addition to the attributes rendered by the MVC Page wrapper on the server.

**In HTML:**

```html
<div data-role="popup" id="popup1" type="Popup" 
     class="ui-popup ui-overlay-shadow ui-corner-all ui-body-c" 
     aria-disabled="false" data-disabled="false" 
     data-shadow="true" data-corners="true" data-transition="none" 
     data-position-to="origin"> 
    <img src="/Content.png" alt="Content"> 
</div> 
```

The picture below shows how the result will look when the browser renders the `Popup` widget:

![](images/03_AddingPopup_1.png)

### <a id="prerequisites"></a> Prerequisites 

To complete the procedure, you need the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

### <a id="overview"></a> Overview 

Following is a conceptual overview of the process:

1. Including resources in the view page
2. Adding `Popup` to the view page
3. Adding link to open `Popup`
4. Verifying the result

### <a id="steps"></a> Steps

The following steps demonstrate how to Initialize basic `Popup` wrapper.

1. Include resources in the view page

	A reference to the Infragistics.Web.Mvc.Mobile.dll is needed as well as reference to the Infragistics Mobile loader. In the following example, all of the js and css files are located under a virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct js and css location.
	
	**In Razor:**
	
	```csharp
	@using Infragistics.Web.Mvc.Mobile
	<script src="http://code.jquery.com/jquery.min.js"></script>
	<script src="http://code.jquery.com/mobile/1.1.1/jquery.mobile.min.js"></script>
	<script type="text/javascript" src="http://localhost/ig_mobileui/js/infragistics.mobile.loader.js"></script>
	@(Html.InfragisticsMobile()
	    .Loader()
	    .ScriptPath("http://localhost/ig_mobileui/js/")
	    .CssPath("http://localhost/ig_mobileui/css/")
	    .Render())
	```

2. Add `Popup` to the view page

	To mark the beginning of the `Popup`, add the following code:
	
	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Popup()
	    .ID("popup1")
	    .BeginRender())
	```
	
	You need to add some content inside the `Popup`, otherwise the `Popup` will not display. In this example, there is an image inside as content of the `Popup`:
	
	**In HTML:**
	
	```html
	<img src="Content.png" alt="content"/>
	```
	
	When you finish adding `Popup` content, you need to add the following code to mark the end of the content that will be rendered:
	
	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Popup()
	    .ID("popup1")
	    .EndRender())
	```

3. Adding link to open `Popup`

	After you’ve created the `Popup` content, you need to add the link that will open the widget. What you need to do is add the id of the `Popup` as a reference to the link reference. Notice that you also need the hash symbol as a prefix. The other attribute that needs to be explicitly set is the `data-rel`.
	
	**In HTML:**
	
	```html
	<a href="#popup1" data-rel="popup">Open Popup</a>
	```
	
	You can also use the ASP.NET MVC helper to create the same anchor tag as shown above:
	
	**In C#:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Link()
	    .ID("lnk1")
	    .Text("Open Popup")
	    .NavigateUrl("#popup1")
		.DestinationRelationship(LinkDestinationRelationshipOptions.Popup)
	    .Render())
	```

4. Verify the result

	Save the view, rebuild, and run the application to verify the result.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Popup Overview](Popup-overview.html): This topic introduces to the `Popup` MVC wrapper.

- [Popup Property Reference](Popup-Property-Reference.html): This topic provides reference information about the properties of the `Popup` MVC Wrapper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-popup/basic-usage): This sample demonstrates how to initialize the `Popup` ASP.NET MVC helper and how to open it on a button click. Note: `Popup` Mobile widget is introduced in jQuery Mobile, version 1.2.0.






 

 


