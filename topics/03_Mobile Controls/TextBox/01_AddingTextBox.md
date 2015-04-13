<!--
|metadata|
{
    "fileName": "addingtextbox",
    "controlName": "TextBox",
    "tags": ["Editing","How Do I","MVC"]
}
|metadata|
-->

# Adding TextBox

The following steps demonstrate how to add a `TextBox` in an ASP.NET MVC view.

## Steps

1. Include resources in the view page

	Reference to the `Infragistics.Web.Mvc.Mobile.dll` and the Infragistics Mobile loader. In the following example, the required JavaScript and CSS files are located under a virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the location of the JavaScript and CSS resources in your application.
	
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

2. Add a `TextBox` to the View

	**In Razor:**
	
	```csharp
	@(
	    Html.InfragisticsMobile()
	    .TextBox()
	    .ID("txtbx1")
	    .Text("Basic Text Box")
	    .Render()
	)
	```

3. Verify the result

	Save the View, rebuild, and run the application to verify the result.

## Related Content

### Topics

The following topics provide additional information related to this topic.

- [TextBox Overview](TextBox-Overview.html): This topic contains information related to the TextBox ASP.NET MVC helpers.
- [TextBox Property Reference](TextBox-Property-Reference.html): This topic provides reference information about the options of the `TextBox` ASP.NET MVC helper.

### Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/mobile-textbox/basic-usage): This sample demonstrates how to use the `TextBox` ASP.NET MVC helper to define several types of input fields.





 

 


