<!--
|metadata|
{
    "fileName": "adding-checkbox",
    "controlName": "CheckBox",
    "tags": ["Editing","How Do I","MVC"]
}
|metadata|
-->

# Adding CheckBox

The following screenshot is a preview of the final result:

![](images/03_AddingCheckBox_1.png)

## Steps

The following steps demonstrate how to enable the `CheckBox` using the Infragistics MVC Wrappers:

1. Include resources in the view page

	> **Note:** A reference to the `Infragistics.Web.Mvc.Mobile.dll` is needed as well as reference to the Infragistics Mobile loader. In the following example, all of the js and css files are located under a virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct `js` and `css` location.
	
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

2. Add `CheckBox` to the view page

	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .CheckBox()
	    .Text("Basic CheckBox")
	    .ID("chkbx1")
	    .Checked(true)
	    .Render())
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*CheckBox* Overview](CheckBox-Overview.html): This topic contains information related to the `CheckBox` MVC wrappers.

- [Configure *CheckBoxGroup*](CheckBoxGroup-Configuring.html): This topic contains the information and references needed to configure the `CheckBoxGroup` using the MVC wrapper.

- [*CheckBoxGroup* Property Reference](CheckBoxGroup-Property-Reference.html):  This topic provides reference information about the properties of the `CheckBoxGroup` MVC Wrapper.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-checkbox-group/basic-usage): This sample demonstrates usages of the `CheckBoxGroup` ASP.NET MVC helper.
