<!--
|metadata|
{
    "fileName": "adding-button",
    "controlName": "Button",
    "tags": ["How Do I","MVC"]
}
|metadata|
-->

#Adding Button

The following screenshot is a preview of the final result:

![](images/03_AddingButton_1.png)

## Prerequisites

To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Reference the Ignite UI MVC wrappers assembly

## Steps

The following steps demonstrate how to enable the Button using the Infragistics MVC Wrappers:

1. Include resources in the view page

	> **Note:** A reference to the `Infragistics.Web.Mvc.Mobile.dll` is needed as well as a reference to the Infragistics Mobile loader to use the wrapper. In the following example, all the `js` and `css` files are located under a virtual directory named `ig_mobileui`. In order to complete this step on your machine, this folder should be renamed according to the correct `js` and `css` location in your application.
	
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

2. Add Button to the view page

	**In Razor:**
	
	```csharp
	@(
	    Html.InfragisticsMobile()
	    .Button()
	    .ID("btn1")
	    .Text("Button")
	    .Render()
	)
```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*Button* Overview](Button-Overview.html): This topic introduces MVC Button control wrapper and its main functionalities.

- [*Button* Configuring](Button-Configuring.html): This topic contains the information and references needed to configure the Button using the MVC wrapper.

- [*Button* Property Reference](Button-Property-Reference.html): This topic provides reference information about the properties of the Button MVC Wrapper.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-button/basic-usage): This sample demonstrates display options of the Button ASP.NET MVC helper.
