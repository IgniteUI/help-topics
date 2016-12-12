<!--
|metadata|
{
    "fileName": "adding-igtemplating-references",
    "controlName": "igTemplating Engine",
    "tags": ["Templating"]
}
|metadata|
-->

# Adding Templating Engine References

## Topic Overview
### Purpose

This topic gives information on what is the minimal set of necessary JavaScript files to start using Infragistics templating engine.

### Required background

The following table lists the materials required as a prerequisite to understanding this topic.

**Concepts**

-   jQuery, jQuery UI
-   ASP.NET MVC

**Topics**

-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html)
-   [Using JavaScript Resouces in Ignite UI](Deployment-Guide-JavaScript-Resources.html)



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Adding Reference to the Required Resources](#required-resources)
    -   [Using igLoader in JavaScript](#javasript)
    -   [Loading resources statically](#loading-resources-statically)
    -   [Using Infragistics MVC Helper reference](#using-mvc-helper-reference)
-   [Related Content](#related-content)



## <a id="introduction"></a>Introduction
### Introduction to the adding reference to the required resources

This procedure will guide you through the process of adding reference to the required resources for the `igTemplating`.

### Requirements

The examples in the next block use the following file structure that needs be present for the referencing to work properly.

-   The jQuery resources have been added to a folder named Scripts in your web site or web application.
-   The Ignite UI JavaScript files have been added to a folder named Scripts/ig in your web site or web application (For more information, refer to the [Using JavaScript Resouces in Ignite UI](Deployment-Guide-JavaScript-Resources.html) topic).

If you use your own structure you should replace *Scripts/ig* with your own folder structure.



## <a id="required-resources"></a>Adding Reference to the Required Resources
### Adding references summary

**There are the following ways to add references to the required resources:**

-   Using `igLoader` in JavaScript
-   Loading Resources Statically
-   Using Infragistics MVC Helper Reference

### <a id="javasript"></a>Using igLoader in JavaScript

The `igLoader` control is the recommended way to load JavaScript and CSS resources required by the Ignite UI library controls. First the `igLoader` script must be included in the page:

**In JavaScript:**

    <script  type="text/javascript" src="Scripts/ig/infragistics.loader.js"></script>

For HTML views the `igLoader` must be instantiated this way:

**In JavaScript:**

    <script type="text/javascript">
        $.ig.loader({
            scriptPath: "Scripts/ig/",
            resources: "igTemplating"
        });
    <script>

### <a id="loading-resources-statically"></a>Loading resources statically

**In HTML:**

    Loading resources statically
        <script src="scripts/jquery.min.js" type="text/javascript"></script>
        <script src="scripts/ig/infragistics.templating.js" type="text/javascript"></script>

### <a id="using-mvc-helper-reference"></a>Using Infragistics MVC Helper reference

The Infragistics.Web.Mvc assembly must be referenced in your ASP.NET MVC project and the corresponding namespace must be referenced in your view.

For more information, refer to the [Using JavaScript Resouces in Ignite UI](Deployment-Guide-JavaScript-Resources.html) topic.

The code to reference the namespace is given in the code snippet below.

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
```

For MVC views, the `igLoader` MVC helper must be used.

**In ASPX:**

    <script  type="text/javascript" src="Scripts/ig/infragistics.loader.js"></script>
    <%= Html.Infragistics().Loader()
           .ScriptPath(Url.Content("~/Scripts/ig/"))
           .Resources("igTemplating")
           .Render()
    %>



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Templating Engine Overview](igTemplating-Overview.html): This topic explains the overview of the options and features the `igTemplate` engine exposes to the developer.





 

 

