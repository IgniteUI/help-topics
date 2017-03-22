<!--
|metadata|
{
    "fileName": "getting-started",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# In this topic

This topic contains the following sections:

-   [Download and Install](#download)
-   [Host Ignite UI in your project](#hosting)
    -   [Using NPM, JSPM, NuGet](#package_managers)
    -   [Add CSS and JavaScript references](#add_references)
    -   [Sample Ignite UI Boilerplate html page (using trial CDN links)](#boilerplate)
-   [Add your first control](#first_control)
    -   [Add an igGrid Directly](#directly)
    -   [Add an igGrid using Page Designer](#page_designer)
-   [Get just what you need](#custom_download)
-   [Using CDN Links](#cdn)
-   [TypeScript Directives](#typescript)
-   [AngularJS Wrappers](#angularjs)
-   [Angular 2 Wrappers](#angular)
-   [ReactJS Wrappers](#reactjs)
-   [Related Content](#related_content)

# <a id="download"></a>Download and Install

You can download the Ignite UI&trade; from its [download page](http://www.infragistics.com/products/ignite-ui/download). 
Depending on your operating system you have several options to install the product, both trial and licensed.

For Windows:

- **[Platform Installer](https://www.infragistics.com/my-account/keys-and-downloads)**: Platform Installer is a Windows only online installer that gives you a wizard like experience to manage (install, update, uninstall) Ignite UI and all other Infragistics Developer tools their help and samples.

- **[Download full product](http://www.infragistics.com/products/ignite-ui/download)**: 
A Windows only offline MSI installer containing the product, help and samples.

For MacOs, Linux, Unix etc.

- **[Download No Installer Bundle](http://www.infragistics.com/products/ignite-ui/download)**: 
A Windows only offline MSI installer containing the product and samples.

# <a id="hosting"></a>Host Ignite UI in your project

You have several options to host Ignite UI in your project:
- Copy the JavaScript and CSS files from the Ignite UI installation directory into your project
- Use [Infragistics Content Delivery Network (CDN)](#cdn)
- Use Package Manager like NPM, JSPM, NuGet

## <a id="package_managers"></a>Using NPM, JSPM, NuGet

Ignite UI supports a number of package managers: NPM, JSPM and NuGet.

NPM (installs Ignite UI Open Source)

```
    npm install ignite-ui
```

For instructions how to configure the licensed package, please check [Using Ignite UI npm packages](Using_Ignite_UI_Npm_Packages.html) topic.

NuGet (installs Ignite UI Trial)

```
    Install-Package IgniteUI
```

For instructions how to configure the licensed package, please check [Using Ignite UI NuGet packages](Using_Ignite_UI_NuGet_Packages.html) topic.

JSPM (installs Ignite UI Open Source)
```
    jspm install npm:ignite-ui
```

For instructions how to configure the licensed package, please check [Using System.JS with Ignite UI controls](Using-System.JS-with-IgniteUI-controls.html) topic.

## <a id="add_references"></a>Add CSS and JavaScript references

Ignite UI depends on jQuery and jQuery UI libraries and you need to add references to them before the Ignite UI scripts. You also have several options to include the Ignite UI controls in the page
- Referencing combined and minified bundle files - installation comes with a combined and minified files which group controls by type. There are `infragistics.core.js` (mandatory), `infragistics.lob.js` which contains the Line of Business controls like Grids and `infragistics.dv.js` which contains the Data Visualization controls like Charts. For more information check [Adding Required Resources Manually](Adding_the_Required_Resources_for_NetAdvantage_for_jQuery.html) topic.
- Referencing individual control files - For more information check [JavaScript Files in Ignite UI](Deployment_Guide_JavaScript_Files.html) topic.
- Using Infragistics Loader - The Infragistics Loader is a loader that can automatically load Ignite UI files (and not only). It saves you the burden to reference control files manually. For more information check [Adding Required Resources Automatically with the Infragistics Loader](Using_Infragistics_Loader.html) topic.
- Using AMD Loader - Ignite UI is AMD compatible and can be used with all popular AMD loaders.

## <a id="boilerplate"></a>Sample Ignite UI Boilerplate html page (using trial CDN links)

```
<!DOCTYPE html>
<html>
<head>
    <title></title>

    <!-- Ignite UI Required Combined CSS Files -->
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css" rel="stylesheet" />
    
    <style>

        /* ----- CSS Goes Here ----- */

    </style>

    <!-- JavaScript Library Dependencies -->
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    <!-- Ignite UI Required Combined JavaScript Files -->
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js"></script>

</head>
<body>

    <!-- ----- HTML Goes Here ----- -->
    
    <script>

        $(function () {

            // ----- JavaScript Goes Here ----- //

        });

    </script>

</body>
</html>
```

# <a id="first_control"></a>Add your first control

There are two options available: Directly or with Page Designer

## <a id="directly"></a>Add an igGrid Directly

```
$(function () {
    // Data
    var populationData = [
        { "CountryName": "China", "1995": 1216, "2005": 1297, "2015": 1361, "2025": 1394 },
        { "CountryName": "India", "1995": 920, "2005": 1090, "2015": 1251, "2025": 1396 },
        { "CountryName": "United States", "1995": 266, "2005": 295, "2015": 322, "2025": 351 },
        { "CountryName": "Indonesia", "1995": 197, "2005": 229, "2015": 256, "2025": 277 },
        { "CountryName": "Brazil", "1995": 161, "2005": 186, "2015": 204, "2025": 218 }
    ];

    // Grid
    $("#grid").igGrid({
        width: "100%",
        dataSource: populationData,
        autoGenerateColumns: false,
        columns: [{
            key: "CountryName",
            headerText: "Country",
            width: "33.33%"
        }, {
            key: "2005",
            headerText: "2005",
            width: "33.33%"
        }, {
            key: "2015",
            headerText: "2015",
            width: "33.33%"
        }],
        features: [{
            name: "Sorting",
            columnSettings: [{
                columnKey: "2015",
                currentSortDirection: "descending"
            }]
        }]
    });
});
```

## <a id="page_designer"></a>Add an igGrid using Page Designer

The Ignite UI Page Designer gives you a complete designer experience to configure any Ignite UI control by only using the mouse.
To add `igGrid` to a page design area (on the left) in the toolbox on the right find "List & Pickers" sectoin and drag and drop the Grid control. Then use the Property Editor to configure the grid. When ready just copy the resulting generated page.

# <a id="custom_download"></a>Get just what you need

The Ignite UI [Custom Download Page](https://www.igniteui.com/download) gives you the option to choose only the Ignite UI controls and features you use in your project and download optimized (minified and combined) JavaScript and CSS files.


# <a id="cdn"></a>Using CDN Links

Instead of hosting the Ignite UI script files into your project, you can just use Ignite UI CDN links. For Internet applications CDN usually serves files faster to the end users compared to host them on premise.

Following are the Ignite UI Trial links. For more details checkout [Infragistics Content Delivery Network (CDN) for Ignite UI](deployment_guide_infragistics_content_delivery_network%28cdn%29.html) topic.

```
    <!-- Ignite UI Required Combined CSS Files (Trial) -->
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="http://cdn-na.infragistics.com/igniteui/latest/css/structure/infragistics.css" rel="stylesheet" />

    <!-- JavaScript Library Dependencies -->
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>

    <!-- Ignite UI Required Combined JavaScript Files (Trial) -->
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.lob.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/latest/js/infragistics.dv.js"></script>
```

# <a id="related_content"></a>Related Content

### Topics

- [Deployment Guide](Deployment-Guide.html)
- [HTML 5 Designer](http://designer.igniteui.com/)
