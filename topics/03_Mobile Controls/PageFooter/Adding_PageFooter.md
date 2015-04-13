<!--
|metadata|
{
    "fileName": "adding-pagefooter",
    "controlName": "PageFooter",
    "tags": ["How Do I","Layouts","MVC"]
}
|metadata|
-->

# Adding PageFooter
This topic contains the information needed in order to enable the PageFooter using the Infragistics MVC Wrappers.

## Required background

The following topics are prerequisites to understanding this topic:
- [PageFooter Overview](PageFooter-Overview.html): This topic contains information related to the PageFooter MVC wrappers.

## Adding PageFooter
This procedure will show how to add the PageFooter in MVC solution using the MVC Wrappers. You can add multiple instances of a PageFooter wrapper to one MVC View, but only one of them can be active. This sample demonstrates how to initialize an empty `PageFooter` control and the result that is rendered and sent to the client browser.

### Code Preview 
The following code shows the HTML that is rendered as a final result:

**In HTML:**

```html
<div data-role="page-footer" 
     id="pgftr1" >
</div>
```

### Prerequisites 

To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

## Steps

The following steps demonstrate how to Initialize a basic PageFooter wrapper:

​1. Include resources in the view page

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

​2. Add `PageFooter` to the view page

To mark the beginning of the `PageFooter`, add the following code:

**In Razor:**
```csharp
@(Html.InfragisticsMobile()
    .PageFooter()
    .ID("pgftr1")
    .Title("PageFooter")
    .BeginRender())
```

When you finish adding page content, you need to add the following code to mark the end of the content that will be rendered:

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .PageFooter()
    .ID("pgftr1")
    .EndRender())
```

​3. Verify the result

Save the view, rebuild, and run the application to verify the result.


## Related Content
### Topics

The following topics provide additional information related to this topic:

- [PageFooter Overview](PageFooter-Overview.html): The topics in this group explain how to use PageFooter MVC wrapper.
- [PageFooter Property Reference](PageFooter-Property-Reference.html): This topic provides reference information about the properties of the PageFooter MVC Wrapper.

### Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-pagefooter/basic-usage): This sample shows several ASP.NET MVC helpers used to render a jQuery Mobile page, header, footer, and content element.