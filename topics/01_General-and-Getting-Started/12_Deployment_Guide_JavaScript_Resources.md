<!--
|metadata|
{
    "fileName": "deployment-guide-javascript-resources",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Using JavaScript Resources in %%ProductName%%



##Topic Overview

#### Purpose

This topic explains how to manage the required resources to work with %%ProductName%%™ within a Web application.

#### In this topic

This topic contains the following sections:

-   [Referencing Infragistics JavaScript Resources](#referencing_resources)
  -   Referencing Infragistics JavaScript resources summary
    -   Referencing Infragistics JavaScript from a custom download
    -   Referencing JavaScript resources using the Infragistics Loader
    -   Referencing the combined and minified JavaScript file
    -   Referencing the Infragistics template engine JavaScript file
-   [Referencing External JavaScript Resources](#referencing_external_libraries)
   -   Referencing external resources summary
    -   Referencing JavaScript libraries
-   [Referencing Localization Resources](#referencing_localization_resources)
   -   Referencing localization resources summary
    -   Referencing English and Japanese localization
    -   Code example: referencing localization resources using the Infragistics Loader
    -   Code example: referencing localization resources manually
-   [Infragistics Content Deliver Network](#infragistics_cdn)
-   [Related Content](#related_content)


##<a id="referencing_resources"></a>Referencing Infragistics JavaScript Resources


### Referencing Infragistics JavaScript resources summary

To work with %%ProductName%%, you must reference the Infragistics resources in your Web application. You can reference these resources in three different ways.

-	**Including a custom JavaScript file**: This is the recommended approach to reference %%ProductName%% JavaScript files. You can [create a custom download](%%SamplesUrl%%/download) of selected %%ProductName%% controls and components.

-	**Using Infragistics Loader**: The *Infragistics Loader* can be used to resolve all the Infragistics resources (styles and scripts)

-	**Including individual JavaScript files** : You can manually reference all the required files


### Referencing Infragistics JavaScript from a custom download

To create an %%ProductName%% custom build, go to the [custom download page](%%SamplesUrl%%/download). Custom builds have two main benefits. First, by choosing only the controls and features used in your application, the browser downloads and executes less total JavaScript. Second, the JavaScript is combined into one file reducing the amount of requests that the browser makes to the server. These benefits result in faster performance for your application.

**In HTML:**

```html
<script src="../scripts/infragistics.js" type="text/javascript"></script>
```

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
<head runat="server">
..    
<script src="<%= Url.Content("~/scripts/infragistics.js") %>" type="text/javascript"></script>
```

### Referencing JavaScript resources using the Infragistics Loader

The *Infragistics Loader* resolves all the Infragistics resources (styles and scripts) for you. You just need to provide the path to required CSS and JavaScript files and declare which resources the loader will fetch for the page. You need to reference the *Infragistics Loader*:

**In HTML:**

```html
<script src="Scripts/infragistics.loader.js" type="text/javascript"></script>
```

Inside another `<script>` element, you need to include the JavaScript code below to call the *Infragistics Loader* and declare the widget (feature).

**In Javascript:**

```js
$.ig.loader({
    scriptPath: '{IG Resources root}/js/',
    cssPath: '{IG Resources root}/css/'
});                     
$.ig.loader('igGrid.Paging.Updating', 
     function () {
     // Create a couple of igGrids 
        $("#grid1").igGrid({
        virtualization: false,
        autoGenerateColumns: true,
        jQueryTemplating: false,
…
```

### Referencing the combined and minified JavaScript file

You need to manually reference several resources for %%ProductName%% to work, including the base JavaScript files.

The combined scripts for all Infragistics JavaScript files is the following:

**In HTML:**

```html
<script src="../scripts/infragistics.core.js" type="text/javascript"></script>
<script src="../scripts/infragistics.lob.js" type="text/javascript"></script>
<script src="../scripts/infragistics.dv.js" type="text/javascript"></script>
```

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
<head runat="server">
..    
<script src="<%= Url.Content("~/scripts/infragistics.core.js") %>" type="text/javascript"></script>
<script src="<%= Url.Content("~/scripts/infragistics.lob.js") %>" type="text/javascript"></script>
<script src="<%= Url.Content("~/scripts/infragistics.dv.js") %>" type="text/javascript"></script>
```

### Referencing the Infragistics template engine JavaScript file

Currently jQuery controls use Infragistics template engine. The following code adds the minimal set of necessary JavaScript files needed to enable IG Template engine.

**In HTML:**

```html
<script src="../scripts/ig.templating.js" type="text/javascript"></script>
```

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
<head runat="server">
..    
<script src="<%= Url.Content("~/scripts/ig.templating.js") %>" type="text/javascript"></script>
```



##<a id="referencing_external_libraries"></a>Referencing External JavaScript Resources


### Referencing external JavaScript libraries summary

The **Modernizr**, **JQuery**, and **JQuery UI** JavaScript libraries are always required in your projects including the %%ProductName%%. The Modernizr library detects the current browser features, allowing the controls to identify a touch or non-touch environment.

Note: You need to include a JSON parser implementation for Internet Explorer 7, because it doesn't include a native JSON parser. Such parser is provided by [JSON-js](https://github.com/douglascrockford/JSON-js) library. Remember that you need to include JSON-js library before any other JavaScript Library.

### Referencing JavaScript libraries

References needed to include the libraries mentioned above:

-   JSON-js library (only for Internet Explorer 7):

**In HTML:**

```html
<script scr="../scripts/json.js" type="text/javascript"></script>
```

-   Modernizr library:

**In HTML:**

```html
<script scr="../scripts/modernizr.js" type="text/javascript"></script>
```

-   JQuery library:

**In HTML:**

```html
<script src="../scripts/jquery.js" type="text/javascript"></script>
```

-   JQuery UI library:

**In HTML:**

```html
<script src="../scripts/jquery-ui.js" type="text/javascript"></script>
```

>**Note:** References must be included in the same order detailed above.



##<a id="referencing_localization_resources"></a>Referencing Localization Resources


### Referencing localization resources summary

%%ProductName%% ships with resources for English and Japanese languages.

Starting with Volume 2012.2 we will provide Russian ([ru]), Bulgarian ([bg]), German ([de]), Spanish ([es]) and French ([fr]) localization as part of the product. Localization files must be placed in the localization folder `../js/i18n` (where *js* is the root folder for the JavaScript files in the %%ProductName%% program installation).

After adding Infragistics resources, the *scripts* folder of your Web application will have a *modules* folder. Under the modules folder localization resources for modular widgets (igGrid) need to be combined into one file.

The *i18n* folder will be placed inside the *modules* folder, holding the JavaScript files to localize the widgets to the Japanese, Bulgarian,  Russian, German, Spanish and French languages.

JavaScript files provide localized formats including dates, numbers, and currency for the jQuery editors. These reside *in `../js/modules/i18n/regional`* (where js is the root folder for the JavaScript files in the %%ProductName%% program installation).

>**Note:** The regional settings are not part of combined scripts file,therefore they must be referenced if the combined scripts file is used.

>**Note**: In case that Infragistics Loader is **NOT** used, localization scripts must always be included before the actual JavaScript files. The same applies for regional scripts.

>**Note:** In case that Infragistics Loader is **NOT** used and we want to configure any regional settings, the *infragistics.util.js* file must be included before any regional JavaScript files. This is because the regional JavaScript files are dependent of *infragistics.util.js* functionality and use it internally.

There are two ways to reference localization resources:

-   Using Infragistics Loader, which resolves the Infragistics resources (styles and scripts) and also the localization resources.
-   Referencing the localization scripts manually.

The examples below will demonstrate how to include Bulgarian localization resources, assuming you already have the JavaScript files mentioned above.

### Referencing English and Japanese localization

If the resources are combined with the widget and all EN resources are combined with the widget JavaScript then there is no need to include **-en.js**. If it’s English locale and English product have been installed. In the same manner no need to include **-ja.js* resources if it’s Japanese locale and Japanese product was installed.

### Code example: referencing localization resources using the Infragistics Loader

The following code example will demonstrate how to include localization resources using the *Infragistics Loader*. The widgets localization is controlled by the locale option.

**In Javascript:**

```js
$.ig.loader({
            scriptPath: '{IG Resources root}/js/',
            cssPath: '{IG Resources root}/css/',
            resources: 'igHierarchicalGrid.*',
            locale: “bg”,
            regional :”en-GB”
        });
//Continue loading the widget
```

>**Note:** When the jQuery UI date picker widget is configured to be used with the Infragistics editors, it is necessary to do separate setting for the date picker’s regional settings.

**The *jquery-ui-i18n.js* must be referenced on the page.**

Regional setting needs to be specified as well: `$.datepicker.setDefaults($.datepicker.regional['ru']);`

When setting regional settings the editors the following file must be referenced on the page:

`infragistics.ui.regional-i18n.js`

### Code example: referencing localization resources manually

The following code example will demonstrate how to include localization resources manually. As mentioned above the localization resources must precede the other infragistics scripts.

**In HTML:**


```html
<!-- Needed JavaScript libraries -->
<!-- Modernizr library -->
<script scr="../scripts/modernizr.js" type="text/javascript"></script>
<!-- JQuery library -->
<script src="../scripts/jquery.js" type="text/javascript"></script>
<!-- JQuery UI library -->
<script src="../scripts/jquery-ui.js" type="text/javascript"></script>

<!-- Bulgarian locale -->
 <script src="../scripts/modules/js/i18n/infragistics-bg.js" type="text/javascript"></script> 
<!-- English (en-BG) regional settings -->
    <script src="../scripts/modules/i18n/regional/infragistics.ui.regional-en-GB.js" type="text/javascript"></script> 
```


## <a id="infragistics_cdn"></a>Infragistics Content Deliver Network

### Infragistics Content Deliver Network (CDN) summary

The JavaScript files are also available in a hosted environment on the Infragistics CDN. For more information on the benefits of using a CDN, refer to the [Infragistics Content Delivery Network (CDN)](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html) topic.

**In HTML:**

```html
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.loader.js">
</script>
```


##<a id="related_content"></a>Related Content


### Topics

The following topics provide additional information related to this topic.


- [JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html): This topic is a reference to the JavaScript files required to work with the controls included in %%ProductName%%™.

- [Using Infragistics Loader](Using-Infragistics-Loader.html): This topic explains how to manage the required resources to work with the %%ProductName%% using Infragistics Loader. 

- [Styling and Theming %%ProductName%%](Deployment-Guide-Styling-and-Theming.html): Instructions on setting up your application for design time, options for using CSS in production and an overview on creating or customizing a theme.

- [Infragistics Content Delivery Network (CDN) for %%ProductName%%](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html): Instructions on using Infragistics Content Delivery Network (CDN) in %%ProductName%%.





 

 


