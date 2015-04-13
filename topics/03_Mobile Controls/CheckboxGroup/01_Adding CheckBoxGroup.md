<!--
|metadata|
{
    "fileName": "adding-checkboxgroup",
    "controlName": "CheckBoxGroup",
    "tags": ["Editing","How Do I","MVC"]
}
|metadata|
-->

#Adding CheckBoxGroup

## Introduction

The `CheckBoxGroup` MVC wrapper combines several `CheckBox` items under one group. This topic will demonstrate you how to initialize a `CheckBoxGroup` with default behavior.

The following screenshot is a preview of the final result:

![](images/03_AddingCheckBoxGroup_1.png)

## Prerequisites
To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

## Procedure
The following steps demonstrate how to initialize a `CheckBoxGroup`:

1. Include resources in the view page

	A reference to the Infragistics.Web.Mvc.Mobile.dll is needed as well as reference to the Infragistics Mobile loader. In the following example, all the js and css files are located under a virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct `js` and `css` location
	
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

2. Add `CheckBoxGroup` to the view page

	**In Razor:**

	```csharp
	@(Html.InfragisticsMobile()
	    .CheckBoxGroup()
	    .ID("chkbxgrp1")
	    .Theme("a")
	    .Items(item => {
	        item.CheckBox().Text("Check Box 1");
	        item.CheckBox().Text("Check Box 2");
	        item.CheckBox().Text("Check Box 3");
	    })
	    .Render())
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*CheckBoxGroup* Overview](CheckBoxGroup-Overview.html): This topic contains information related to the `CheckBoxGroup` MVC wrapper.

- [Configure *CheckBoxGroupe*](CheckBoxGroup-Configuring.html): This topic contains the information and references needed to configure the `CheckBoxGroup` using the MVC wrapper.

- [*CheckBoxGroup* Property Reference](CheckBoxGroup-Property-Reference.html):  This topic provides reference information about the properties of the `CheckBoxGroup` MVC Wrapper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-checkbox-group/basic-usage): This sample demonstrates usages of the `CheckBoxGroup` ASP.NET MVC helper.
