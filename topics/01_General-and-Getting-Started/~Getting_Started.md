<!--
|metadata|
{
    "fileName": "getting-started",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Getting Started with %%ProductName%%

## In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Download and Install](#download)
-   [Host %%ProductName%% in your project](#hosting)
    -   [Using NPM, JSPM, NuGet](#package_managers)
    -   [Add CSS and JavaScript references](#add_references)
    -   [Sample %%ProductName%% Boilerplate HTML page (using trial CDN links)](#boilerplate)
-   [Add your first control](#first_control)
    -   [Add an igGrid Directly](#directly)
    -   [Add an igGrid using Page Designer](#page_designer)
-   [Get just what you need](#custom_download)
-   [Using CDN Links](#cdn)
-   [TypeScript Definitions](#typescript)
-   [AngularJS Extensions](#angularjs)
-   [Angular 2 Extensions](#angular)
-   [ReactJS Extensions](#reactjs)
-   [ASP.NET MVC Wrappers](#aspnet_wrappers)
-   [Related Content](#related_content)

## <a id="introduction"></a>Introduction

%%ProductName%%&trade; is an advanced HTML5+ toolset that helps you create stunning, modern Web apps. Building on jQuery and jQuery UI, it primarily consists of feature rich, high-performing UI controls/widgets such as all kinds of charts, data visualization maps, (hierarchical, editable) data grids, pivot grids, enhanced editors (combo box, masked editors, HTML editor, date picker, to name a few), flexible data source connectors, and a whole lot more.

%%ProductName%% comes in two vesions: 
-   Open Source - a free version that contains a subset of the complete toolset. Grids and Data Visualization controls are excluded. For more information checkout the [%%ProductName%% OSS](https://github.com/IgniteUI/ignite-ui) project on GitHub&trade;.
-   Full - a paid version that contains the complete toolset.

## <a id="download"></a>Download and Install

You can download the %%ProductName%% from its [download page](http://www.infragistics.com/products/ignite-ui/download). 
Depending on your operating system you have several options to install the product, both trial and licensed.

For Windows:

- **[Platform Installer](https://www.infragistics.com/my-account/keys-and-downloads)**: Platform Installer is a Windows only online installer that gives you a wizard like experience to manage (install, update, uninstall) %%ProductName%% and all other Infragistics Developer tools their help and samples.

- **[Download full product](http://www.infragistics.com/products/ignite-ui/download)**: 
A Windows only offline MSI installer containing the product, help and samples.

For MacOs, Linux, Unix etc.

- **[Download No Installer Bundle](http://www.infragistics.com/products/ignite-ui/download)**: 
A Windows only offline MSI installer containing the product and samples.

# <a id="hosting"></a>Host %%ProductName%% in your project

You have several options to host %%ProductName%% in your project:

- Use Package Manager like NPM, JSPM, NuGet
- Copy the [JavaScript and CSS files](Adding-the-Required-Resources-for-NetAdvantage-for-jQuery.html) from the %%ProductName%% installation directory into your project
- Use [Infragistics Content Delivery Network (CDN)](#cdn)

## <a id="package_managers"></a>Using NPM, JSPM, NuGet

%%ProductName%% supports a number of package managers: NPM, JSPM and NuGet.

NPM (installs [%%ProductName%% Open Source](https://www.npmjs.com/package/ignite-ui))

```
    npm install ignite-ui
```

For instructions how to configure the full licensed package, please check [Using %%ProductName%% npm packages](Using-Ignite-UI-Npm-Packages.html) topic.

NuGet (installs [%%ProductName%% Trial](https://www.nuget.org/packages/IgniteUI/))

```
    Install-Package IgniteUI
```

For instructions how to configure the licensed package, please check [Using %%ProductName%% NuGet packages](Using-Ignite-UI-NuGet-Packages.html) topic.

JSPM (installs [%%ProductName%% Open Source](https://www.npmjs.com/package/ignite-ui))
```
    jspm install npm:ignite-ui
```

For instructions how to configure the full licensed package, please check [Using System.JS with %%ProductName%% controls](Using-System.JS-with-IgniteUI-controls.html) topic.

### <a id="add_references"></a>Add CSS and JavaScript references

%%ProductName%% depends on jQuery and jQuery UI libraries and you need to add references to them before the %%ProductName%% scripts. You also have several options to include the %%ProductName%% controls in the page
- Referencing combined and minified bundle files - installation comes with combined and minified files which group controls by type. There are `infragistics.core.js` (mandatory), `infragistics.lob.js` which contains the Line of Business controls like Grids, `infragistics.dv.js` which contains the Data Visualization controls like Charts, `infragistics.excel-bundled.js` which contains all excel exporting related logic, `infragistics.spreadsheet-bundled.js` which contains only spreadsheet user interface implementation and `infragistics.scheduler-bundled.js` which contains all scheduler related logic. For more information check [Adding Required Resources Manually](Adding-the-Required-Resources-for-NetAdvantage-for-jQuery.html) topic.
- Referencing individual control files - For more information check [JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html) topic.
- Using Infragistics Loader - The Infragistics Loader is a loader that can automatically load %%ProductName%% files (and not only). It saves you the burden to reference control files manually. For more information check [Adding Required Resources Automatically with the Infragistics Loader](Using-Infragistics-Loader.html) topic.
- Using AMD Loader - %%ProductName%% is AMD compatible and can be used with all popular AMD loaders.

### <a id="boilerplate"></a>Sample %%ProductName%% Boilerplate HTML page (using trial CDN links)

The following code represents a sample boilerplate HTML page containing the required references (CDN links) needed to start using %%ProductName%%.

```
<!DOCTYPE html>
<html>
<head>
    <title></title>

    <!-- %%ProductName%% Required Combined CSS Files -->
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css" rel="stylesheet" />
    
    <style>

        /* ----- CSS Goes Here ----- */

    </style>
</head>
<body>

    <!-- ----- HTML Goes Here ----- -->

    <table id="grid"></table>

    <!-- JavaScript Library Dependencies -->
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    <!-- %%ProductName%% Required Combined JavaScript Files -->
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js"></script>    
    <script>

        $(function () {

            // ----- JavaScript Goes Here ----- //

        });

    </script>

</body>
</html>
```

## <a id="first_control"></a>Add your first control

There are two options available: Directly or with Page Designer

### <a id="directly"></a>Add an igGrid Directly

<div class="embed-sample">
   [igGrid Paging](%%SamplesEmbedUrl%%/grid/paging)
</div>

### <a id="page_designer"></a>Add an igGrid using Page Designer

The %%ProductName%% [Page Designer](http://designer.igniteui.com/) gives you a complete designer experience to configure any %%ProductName%% control by only using the mouse.
To add `igGrid` to a page design area (on the left) in the toolbox (on the right) find "List & Pickers" section and drag and drop the Grid control. Then use the Property Editor to configure the grid. When ready just copy the resulting generated page.

## <a id="custom_download"></a>Get just what you need

The %%ProductName%% [Custom Download Page](https://www.igniteui.com/download) gives you the option to choose only the %%ProductName%% controls and features you use in your project and download optimized (minified and combined) JavaScript and CSS files for maximum page load performance.

## <a id="cdn"></a>Using CDN Links

Instead of hosting the %%ProductName%% script files into your project, you can just use %%ProductName%% CDN links. For Internet applications CDN usually serves files faster to the end users compared to host them on premise.

Following are the %%ProductName%% Trial links. For more details checkout [Infragistics Content Delivery Network (CDN) for %%ProductName%%](deployment-guide-infragistics-content-delivery-network%28cdn%29.html) topic.

```
    <!-- %%ProductName%% Required Combined CSS Files (Trial) -->
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css" rel="stylesheet" />

    <!-- JavaScript Library Dependencies -->
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    <!-- %%ProductName%% Required Combined JavaScript Files (Trial) -->
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js"></script>
```

## <a id="typescript"></a>TypeScript Definitions

%%ProductName%% provides type definitions for TypeScript allowing you to take advantage of strong typing, compile time checking and IntelliSense features. For more information check [Using %%ProductName%% with TypeScript](Using-Ignite-UI-with-TypeScript.html) topic.

## <a id="angularjs"></a>AngularJS Extensions

%%ProductName%% AngularJS extenstions provide two-way data binding and declarative initialization for controls used in AngularJS applications. For more information check [Using %%ProductName%% with AngularJS](Using-Ignite-UI-with-AngularJS.html) topic.

## <a id="angular"></a>Angular Extensions

%%ProductName%% Angular Extensions provide two-way data binding, declarative initialization and native API for controls used in Angular applications. For more information  check [%%ProductName%% extensions for Angular](https://github.com/IgniteUI/igniteui-angular-wrappers) on GitHub.

## <a id="reactjs"></a>ReactJS Extensions

%%ProductName%% ReactJS extenstions provide JSX markup and React API initialization. For more information check [%%ProductName%% extensions for React](https://github.com/IgniteUI/igniteui-react) on GitHub.

## <a id="aspnet_wrappers"></a>ASP.NET MVC Wrappers

%%ProductName%% ASP.NET MVC Wrappers provide Model and View Chaining initialization as well as out of the box server-side remote requests handling. For more information check [Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html) topic.

## <a id="related_content"></a>Related Content

### Topics

- [Deployment Guide](Deployment-Guide.html)
- [%%ProductName%% Page Designer](http://designer.igniteui.com/)