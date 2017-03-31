<!--
|metadata|
{
    "fileName": "deployment-guide-infragistics-content-delivery-network(cdn)",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Infragistics Content Delivery Network (CDN) for %%ProductName%%

##Topic Overview


### Purpose

This topic explains how to enable Content Delivery Network (CDN) support and how to switch to the Infragistics® CDN.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

-  [Content Delivery Network (CDN)](http://en.wikipedia.org/wiki/Content_delivery_network)


- [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html): This topic explains how to manage the required resources to work with the %%ProductName%% JavaScript within a Web application.

- [Using Infragistics Loader](Using-Infragistics-Loader.html): This topic explains how to manage the required resources to work with the %%ProductName%% using Infragistics Loader.


### In this topic

-   [Enabling CDN Support](#enable-cdn-support-summary)
-   [Enabling CDN Support for Standard HTML Pages](#enable-cdn-support)
   -   [Enabling CDN support for standard HTML pages summary](#summary-cdn-support)
    -   [Referencing CDN-hosted JavaScript and CSS files statically](#referencing-cdn-hosted-js-css)
    -   [Referencing CDN-hosted JavaScript and CSS files with the Loader](#cdn-hosted-js-css-loader)
-   [Enabling CDN Support for ASP.NET MVC](#mvc-enable-cdn)
   -   [Enabling CDN support for ASP.NET MVC summary](#mvc-enable-cdn-summary)
    -   [Referencing CDN-hosted JavaScript files statically](#js-cdn-statically)
    -   [Referencing CDN-hosted JavaScript and CSS files with the Loader](#js-loader-cdn)
-   [Infragistics CDN](#infragistics-cdn)



##Enabling CDN Support Overview


###<a id="enable-cdn-support-summary"></a> Enabling CDN Support summary

To enable CDN support, you need to make the references to the required resources to point to the instances of these resources on the CDN instead of the local server. The files on the CDN are arranged in the same folder structure as they are your local machine. The referencing options are the same too, which means you can reference the resources either statically or with the Infragistics Loader.

The root URL for referencing these resources includes the Volume number of %%ProductName%% and the version number of the resources.

>**Note:**Starting with %%ProductName%% 2012 Volume 2, there is a new 'latest' URL for the CDN. This URL is used in this topic and throughout the help for quickly accessing trial CDN resources. This location is automatically updated to the latest service release of the %%ProductName%% product and displays a trial watermark on the page when used. To use the production URLs, without a trial watermark, the information is contained on the [Keys & Downloads](https://www.infragistics.com/my-account/keys-and-downloads/) page under the selected product's *Source Code* tab on the Infragistics website.

>**Note:** The examples cover using a non-secure URL only, For secure URLs you have to [use secure protocol https](http://en.wikipedia.org/wiki/HTTPS) instead of non-secure protocol http .

>**Note:**Starting with the 13.1 release, only browsers that can accept **GZip-compressed** responses are supported with the Infragistics CDN.



##<a id="enable-cdn-support"></a>Enabling CDN Support for Standard HTML Pages


###<a id="summary-cdn-support"></a> Enabling CDN support for standard HTML pages summary

The following blocks cover referencing resources for standard HTML pages either statically or using the Infragistics Loader.

If you need further details, refer to the [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) topic.

###<a id="referencing-cdn-hosted-js-css"></a>Referencing CDN-hosted JavaScript and CSS files statically

The following code snippet demonstrates how to reference trial JavaScript and style files to the [Infragistics CDN](#infragistics-cdn) in an HTML page.

**In HTML:**

```html
<link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/themes/infragistics/infragistics.theme.css"rel="stylesheet" type="text/css" />
<link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/structure/infragistics.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js" type="text/javascript"></script>
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.core.js" type="text/javascript"></script>
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.lob.js" type="text/javascript"></script>
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.dv.js" type="text/javascript"></script>
```

###<a id="cdn-hosted-js-css-loader"></a> Referencing CDN-hosted JavaScript and CSS files with the Loader

The following code snippet demonstrates how to reference JavaScript and style files to the [Infragistics CDN](#infragistics-cdn) in an HTML page using the Infragistics Loader.

**In HTML:**

```html
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.loader.js"></script>
```

**In Javascript:**

```js
$.ig.loader({
            scriptPath: "http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/",
            cssPath: "http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/"
        });
```



##<a id="mvc-enable-cdn"></a>Enabling CDN Support for ASP.NET MVC


###<a id="mvc-enable-cdn-summary"></a>Enabling CDN support for ASP.NET MVC summary

The following blocks demonstrate referencing resources for ASP.NET MVC either manually or using the Infragistics Loader. The examples cover referencing minified JavaScript files and the ASP.NET MVC Wrapper.

If you need further details, refer to the [Using JavaScript Resources in
%%ProductName%%](Deployment-Guide-JavaScript-Resources.html) topic.

###<a id="js-cdn-statically"></a> Referencing CDN-hosted JavaScript files statically

The following code snippet demonstrates how to statically reference minified JavaScript files to the [Infragistics CDN](#infragistics-cdn) in ASP.NET MVC.

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
<head runat="server">
<link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/themes/infragistics/infragistics.theme.css” rel="stylesheet" type="text/css" />
<link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/structure/infragistics.css" rel="stylesheet" type="text/css" />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"  type="text/javascript"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.21/jquery-ui.min.js type="text/javascript"></script>
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.core.js"type="text/javascript"></script>
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.lob.js"type="text/javascript"></script><script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.dv.js"type="text/javascript"></script></head>
```

###<a id="js-loader-cdn"></a> Referencing CDN-hosted JavaScript and CSS files with the Loader

The following code snippet demonstrates how to reference JavaScript and style files to the [Infragistics CDN](#infragistics-cdn) in ASP.NET MVC using the Infragistics Loader.

**In ASPX:**

```csharp
<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.loader.js"></script>
    <%= Html.Infragistics()
        .Loader()
        .ScriptPath("http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/")
        .CssPath("http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/")
        .Render()
    %>
```



##<a id="infragistics-cdn"></a>Infragistics CDN


### Infragistics CDN summary

Infragistics provides CDN support via a third party CDN web service provider. The following table lists the URLs that are used in the Infragistics CDN-enabled applications. (The URLs and providers subject to change.)


**Non-secure**

```
http://cdn-na.infragistics.com/igniteui
```

**Secure**


```
https://secure-cdn-na.infragistics.com/igniteui
```



To change your current CDN provider, just replace the URLs

By prefixing all CDN-delivered content in your application with the URLs rather than direct URLs to the current CDN provider, Infragistics is able to change providers without negatively affecting your applications that rely on the CDN.

>**Note:** Performance and uptime of the CDN feature are dependent on the current CDN provider used by Infragistics.



## Related Content
### Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

- [Google Libraries API](https://developers.google.com/api-client-library/javascript/start/start-js): The Google Libraries API is a content distribution network and loading architecture for the most popular, open-source JavaScript libraries.





 

 


