<!--
|metadata|
{
    "fileName": "pagecontent-overview",
    "controlName": "PageContent",
    "tags": ["Getting Started","Layouts","MVC"]
}
|metadata|
-->

# PageContent Overview

## Introduction
`PageContent` semantically distinguishes the part of the page that holds the real content. The `PageContent` wrapper could not exist without the parent MVC Page wrapper. Each Page contains no more than one `PageContent` area. At runtime, the MVC wrapper renders the HTML DIV with the data role of type `content`.

## PageContent MVC Wrapper Features
### Theme
`PageContent` accepts the standard [jQuery Mobile Themes](http://jquerymobile.com/demos/1.1.1/docs/api/themes.html). By default, the MVC wrappers render controls from theme "c".

### Attributes
The MVC `PageContent` wrapper has a method that accepts a list of HTML attributes that will be rendered on the client.

## Related Content
### Topics

The following topics provide additional information related to this topic:

- [Adding *PageContent*](Adding-PageContent.html): This topic contains the information needed to enable the PageContent using the Infragistics MVC Wrappers.
- [PageContent Property Reference](PageContent-Property-Reference.html): This topic provides reference information about the properties of the PageContent MVC Wrapper.

### Samples
The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-pagecontent/basic-usage): The sample shows you how to render the HTML DIV element with the data role of type content, using the Content ASP.NET MVC helper.