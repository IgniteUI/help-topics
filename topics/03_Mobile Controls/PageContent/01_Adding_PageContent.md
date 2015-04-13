<!--
|metadata|
{
    "fileName": "adding-pagecontent",
    "controlName": "PageContent",
    "tags": ["How Do I","Layouts","MVC"]
}
|metadata|
-->

# Adding PageContent

## Topic Overview
This topic contains information needed to enable the `PageContent` using the Infragistics MVC Wrappers.

This topic contains the following sections:

-   [**Enabling the PageContent**](#enabling-pagecontent)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="enabling-pagecontent"></a>Enabling PageContent
This procedure will guide you to add the `PageContent` in a view page in the MVC solution using the MVC Wrappers. `PageContent` semantically distinguishes the part of the page that holds the real content. The `PageContent` wrapper couldn’t exist without the parent MVC Page wrapper. Each Page contains no more than one `PageContent` area.

## <a id="preview"></a>Preview

The following code demonstrates the code that is rendered after the PageContent is configured.

> **Note**: You will notice that the jQuery Page widget will render some additional attributes, like `class` and `role`, even you didn’t define them on the server.

**In HTML:**
```html
<div data-role="content" id="pgcnt1" class="ui-content" role="main"> 
    <p>Content</p> 
</div>
```

## <a id="prerequisites"></a>Prerequisites 

To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

## <a id="steps"></a>Steps

The following steps demonstrate how to configure the basic PageContent wrapper to render container that holds the HTML code.

1. Include resources in the view page

	A reference to the `Infragistics.Web.Mvc.Mobile.dll` is needed as well as reference to the Infragistics Mobile loader. In the following example, all of the `js` and `css` files are located under virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct `js` and `css` location.
	
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

2. Add the `PageContent` to the view page

	The `PageContent` wrapper, just like the `Page` one, needs to surround the content that is inside.
	
	**In Razor:**
	
	```csharp
	@(Html.InfragisticsMobile()
	    .PageContent()
	    .ID("pgcnt1")
	    .BeginRender())
	    <p>Content</p>
	@(Html.InfragisticsMobile()
	    .PageContent()
	    .ID("pgcnt1")
	    .EndRender())
	```

3. Verify the result

	Save the view, rebuild, and run the application to verify the result.

## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic:

- [PageContent Overview](PageContent-Overview.html): This topic contains information related to the PageContent MVC wrappers.
- [PageContent Property Reference](PageContent-Property-Reference.html): This topic provides reference information about the properties of the `PageContent` MVC Wrapper.

### <a id="samples"></a>Samples
The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-pagecontent/basic-usage): The sample shows you how to render the HTML DIV element with the data role of type content, using the Content ASP.NET MVC helper.





 

 


