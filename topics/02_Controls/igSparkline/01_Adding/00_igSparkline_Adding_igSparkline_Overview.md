<!--
|metadata|
{
    "fileName": "igsparkline-adding-igsparkline-overview",
    "controlName": "igSparkline",
    "tags": ["Charting","Data Binding","Data Presentation"]
}
|metadata|
-->

# Adding igSparkline Overview

## Topic Overview
### Purpose

This topic provides an overview of the various ways of adding [`igSparkline`](%%jQueryApiUrl%%/ui.igSparkline.html)™ to an application.

### Required background

The following topic is a prerequisite to understanding this topic:

- [igSparkline Overview](igSparkline-Overview.html): This topic provides an overview of the `igSparkline` control, its benefits, and the supported chart types.


## Adding igSparkline – Conceptual Overview
### Adding igSparkline summary

At its core, the `igSparkline` is a jQuery UI widget built with standard HTML, JavaScript, and CSS. It can be added to any standard HTML document regardless of the server framework used.

The `igSparkline` supports any one-dimensional data source, as long as the data contains one numeric or date field in order to render the chart.

Optionally, you can use the ASP.NET MVC helper with the `igSparkline` to render the required HTML and JavaScript for the control in a view. It provides a .NET-based API for developers that are more comfortable with .NET languages than JavaScript.

Finally, the `igSparkline` is a great tool for embedding in grids to quickly visualize data. To achieve this, create an `igGrid` column template and bind the `igSparkline` to the grid’s data source.

### Requirements

Following are the general requirements for adding an `igSparkline` to your application.

-   The jQuery JavaScript framework
-   The jQuery UI JavaScript UI framework
-   The Modernizr JavaScript library to support touch interactions
-   Infragistics Ignite UI JavaScript and CSS Resources
-   A one-dimensional data source containing numeric or date data
-   If you are going to use the ASP.NET MVC helper you will also require the `Infragistics.Web.Mvc.dll` assembly

### Options for adding the igSparkline

The following table lists the ways in which you can add the `igSparkline` control.

Example| Description
---|---
[Adding igSparkline to an HTML Document](igSparkline-Adding-igSparkline-to-an-HTML-Document.html)|Add the `igSparkline` control to an HTML document using the JavaScript API.
[Adding igSparkline to an ASP.NET MVC View](igSparkline-Adding-igSparkline-to-an-ASPNET-MVC-View.html)|Use the `igSparkline` ASP.NET MVC helper to render the `igSparkline` in an ASP.NET MVC view.
Adding `igSparkline` to an igGrid Column|Add the `igSparkline` to an `igGrid` column template.

#### Related Sample

[Sparkline in Grid](%%SamplesUrl%%/sparkline/sparkline-in-grid)


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Adding igSparkline to an HTML Document](igSparkline-Adding-igSparkline-to-an-HTML-Document.html): This topic explains how to add the `igSparkline` to an HTML page and bind to a JavaScript array.

- [Adding igSparkline to an ASP.NET MVC View](igSparkline-Adding-igSparkline-to-an-ASPNET-MVC-View.html): This topic walks through instantiating an `igSparkline` in an ASP.NET MVC view and bind to a .NET collection of objects.

- [jQuery and ASP.NET MVC Helper API Links (igSparkline)](igSparkline-jQuery-and-ASPNET-MVC-API.html): This topic provides links to the API documentation for jQuery and ASP.NET MVC helper class for the `igSparkline` control.

### Samples

The following samples provide additional information related to this topic.

- [Bind to JSON Data](%%SamplesUrl%%/sparkline/bind-json): This sample binds to JSON data contained in an external script file. It also shows binding with the ASP.NET MVC helper.

- [Sparkline in Grid](%%SamplesUrl%%/sparkline/sparkline-in-grid): This sample demonstrates how to add an `igSparkline` to an `igGrid` column template.

 

 


