<!--
|metadata|
{
    "fileName": "page-overview",
    "controlName": "Page",
    "tags": ["Getting Started","Layouts","MVC"]
}
|metadata|
-->

# Page Overview

## Topic Overview
#### Purpose

This topic contains information related to the Page MVC wrappers.

#### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Page MVC Wrapper Features](#wrapper-features)
-   [Related Content](#related-content)

## <a id="introduction"></a> Introduction
The Page MVC wrapper is used to define the container for a single Page, in the context of [jQuery mobile](http://jquerymobile.com/demos/1.1.1/docs/pages/page-anatomy.html). Between the opening and closing fragments of the Page wrapper, you can define the Page HTML content, as well as define [Page Content](PageContent.html), [Page Footer](PageFooter.html), [Page Header](PageHeader.html) or other jQuery mobile controls. You can define several pages in a MVC View, but only the first one will be active. If you want to change the page you will need to do this manually. The Page MVC helper renders a jQuery Mobile [page](http://jquerymobile.com/demos/1.1.1/docs/pages/index.html) widget. For more information about page anatomy and page transition, please review this [list](http://jquerymobile.com/demos/1.1.1/docs/pages/index.html), provided by jQuery Mobile.


## <a id="wrapper-features"></a> Page MVC Wrapper Features

### Title
You can define Page title the using MVC control method [Title](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Title.html). When the Page [Title](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Title.html) method is used to name the page, this will result as the value of the HTML `data-title attribute` of the Page container on the client.

### Reference
When there are several Pages in the MVC View, in order to be able to change Pages, every one of them should be referenced. The [Url](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Url.html) method defines the address of the Page. When using the Page [Url](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~Url.html) method, this will result as the value of the HTML `data-url` attribute of the Page container on the client.

### Cache
When you navigate through multiple Pages placed in one View, jQuery mobile framework ensures that only one Page is available in the DOM and clears that Page when it is replaced by new one. By using the [DomCache](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~DomCache.html) property, you can disable this default behavior and enable caching the Page in the DOM browser. When the Page [DomCache](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageModel~DomCache.html) method is used to enable or disable caching, the result will appear as the value of the HTML `data-dom-cache` attribute of the Page container on the client.

### Back and Close Buttons
You can add navigation buttons. There are two types: back and close. The Back Button will appear in the Page header, which is why it is essential to define one. You can configure its text and theme. The Close button will appear only when the Page is opened in a dialog. Close button text is also customizable. When the Page is rendered with configured buttons, if you inspect the browser page you will find values for these properties: `data-add-back-btn`, `data-back-btn-text`, `data-back-btn-theme` and `data-close-btn-text`.

### Theme
Page accepts the standard [jQuery Mobile Themes](http://jquerymobile.com/demos/1.1.1/docs/api/themes.html). By default, the MVC wrappers render controls with the default jQuery mobile form, which is `c`.

### Attributes
The MVC Page wrapper has a method that accepts a list of HTML attributes that will be rendered on the client.

## <a id="related-content"></a> Related Content

### Topics
The following topics provide additional information related to this topic:

- [Adding *Page*](Adding-Page.html): This topic contains the information needed to enable the Page using the Infragistics MVC Wrappers.
- [*Page* Configuring](Page-Configuring.html): This topic contains the information and references needed to configure the Page using the MVC wrapper.
- [Page Property Reference](Page-Property-Reference.html): This topic provides reference information about the properties of the Page MVC Wrapper.

### Samples
The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-page/basic-usage): This sample demonstrates how to use the Page ASP.NET MVC helper to define the HTML DIV element with the data role of type Page.