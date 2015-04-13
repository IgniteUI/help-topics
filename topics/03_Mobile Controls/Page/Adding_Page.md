<!--
|metadata|
{
    "fileName": "adding-page",
    "controlName": "Page",
    "tags": ["How Do I","Layouts","MVC"]
}
|metadata|
-->

# Adding Page

## Topic Overview
### Purpose
This topic contains information needed to enable the Page using the Infragistics MVC Wrappers.

### Required background
The following topics are prerequisites to understanding this topic:

- [Page Overview](Page-Overview.html): This topic contains information related to the Page MVC wrappers.

### In this topic

This topic contains the following sections:

-   [Enabling Page](#enabling-page)
-   [Related Content](#related-content)

## <a id="enabling-page"></a>Enabling Page

This procedure will guide you through adding a Page in a view page in MVC solution using the MVC Wrappers. You can add multiple instances of a Page wrapper to one MVC View, but only one of them can be active. The sample below is a demonstration of this action:

### Preview 

The following code shows the HTML that is rendered as a final result:

> **Note:** You will notice that the jQuery page widget will render not only those from the MVC Page wrapper on the server, but some additional attributes as well.

**In HTML:**

```html
<div data-role="page" 
     data-title="Page" 
     id="Page1" 
     data-external-page="true" 
     tabindex="0" 
     class="ui-page ui-body-c ui-page-active">
</div>
```

### Prerequisites 

To complete the procedure, you need the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

### Steps

The following steps demonstrate how to Initialize basic Page wrapper:

1. Include resources in the view page

	A reference to the `Infragistics.Web.Mvc.Mobile.dll` is needed as well as reference to the Infragistics Mobile loader. In the following example, all of the js and css files are located under the virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct `js` and `css` location.
	
	**In Razor:**
	
	```csharp
	@using Infragistics.Web.Mvc.Mobile
	<script type="text/javascript" src="http://code.jquery.com/mobile/jquery.min.js"></script>
	 <script type="text/javascript" src="http://code.jquery.com/mobile/1.1.1/jquery.mobile.min.js"></script>
	<script type="text/javascript" src="http://localhost/ig_mobileui/js/infragistics.mobile.loader.js"></script>
	@(Html.InfragisticsMobile().
	    Loader().
	    ScriptPath("http://localhost/ig_mobileui/js/").
	    CssPath("http://localhost/ig_mobileui/css/").
	    Render())
	```

2. Add Page to the view page

	To mark the beginning of the page, add the following code:
	
	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Page()
	    .ID("pg1")
	    .Title("Page")
	    .BeginRender())
	```
	
	When you finish adding page content you need to add the following code to mark the end of the content that will be rendered:
	
	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .Page()
	    .ID("pg1")
	    .EndRender())
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.


## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic:

- [Page Overview](Page-Overview.html): The topics in this group explain how to use Page MVC wrapper.
- [*Page* Configuring](Page-Configuring.html): This topic contains the information and references needed in order to configure the Page using the MVC wrapper.
- [Page Property Reference](Page-Property-Reference.html): This topic provides reference information about the properties of the Page MVC Wrapper.

### Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-page/basic-usage): This sample demonstrates how to use the Page ASP.NET MVC helper to define the HTML DIV element with the data role of type Page.




 

 


