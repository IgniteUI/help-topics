<!--
|metadata|
{
    "fileName": "adding-pageheader",
    "controlName": "PageHeader",
    "tags": ["How Do I","Layouts","MVC"]
}
|metadata|
-->

# Adding PageHeader

This procedure guides you through adding a Page Header in a view Page Header in a MVC solution using the MVC Wrappers. You can add multiple instances of a Page Header wrapper to one MVC View, but only one of them can be active. This sample below shows the procedure for adding a Page Header to a MVC View and the results that are rendered and sent to the client browser.

## Code Preview 
The following code shows the HTML that is rendered as a final result:

**In HTML:**

```html
<div data-role="page-header" 
     id="pghdr1" >
</div>
```

## Prerequisites 

To complete the procedure, you need to do the following:

-   Create an MVC Mobile application
-   Add references to the needed resources for the MVC reassurance wrappers to the project

## Steps

​1. Include resources in the view page

A reference to the `Infragistics.Web.Mvc.Mobile.dll` is needed as well as a reference to the Infragistics Mobile loader. In the following example, all of the js and css files are located under virtual directory named `ig_mobileui`. In order to complete this step, this folder should be renamed according to the correct js and css location.

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

​2. Add `Page Header` to the view page

To mark the beginning of the Page Header, add the following code:

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .PageHeader()
    .ID("pghdr1")
    .Title("Page Header")
    .BeginRender())
```

When you finish adding page content, you need to add the following code. This code marks the end of the content that will be rendered.

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .PageHeader ()
    .ID("pgftr1")
    .EndRender())
```

​3. Verify the result

Save the view, rebuild, and run the application to verify the result.

## Related Content
#### Topics

The following topics provide additional information related to this topic:

- [PageHeader Overview](PageHeader-Overview.html): The topics in this group explain how to use the Page Header MVC wrapper.
- [PageHeader Property Reference](PageHeader-Property-Reference.html): This topic provides reference information about the properties of the Page Header MVC Wrapper.

### Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-pageheader/basic-usage): This sample shows several ASP.NET MVC helpers used to render a jQuery Mobile page, header, footer, and content element.





 

 


