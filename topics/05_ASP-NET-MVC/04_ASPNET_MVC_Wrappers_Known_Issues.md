<!--
|metadata|
{
    "fileName": "aspnet-mvc-wrappers-known-issues",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Wrappers Known Issues and Limitations (Ignite UI ASP.NET MVC)



## Known Issues and Limitations Summary

The following table summarizes the known issues and limitations of the Ignite UI™ ASP.NET MVC wrappers. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.


Legend: | 
--------|---------
![](../images/images/positive.png) | Workaround available
![](../images/images/negative.png) | No known workaround
![](../images/images/plannedFix.png) | No known workaround, fix planned

### Ignite UI ASP.NET MVC Wrappers


Issue | Description | Status
------|-------------|--------
[MVC helper-generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page](#helper-loader-scripts) | When the MVC Loader and an MVC Helper for any control is used in an ASP.NET MVC View, the JavaScript code they generate is executed after any custom page set-up code from the [`$(document).ready()`](http://api.jquery.com/ready/) or [`$(window).load()`](http://api.jquery.com/load-event/) events. | ![](../images/images/positive.png)
[Default value for AutoGenerateLayouts changed](#default-autogeneratelayouts) | In the ASP.NET MVC Helper for grids, the default value of the `AutoGenerateLayouts` property has changed to false in order to avoid an additional remote data request for flat grids. | ![](../images/images/negative.png)
[MVC Loader not functioning correctly in an MVC Razor Layout View](#loader-layout-view) | The ASP.NET MVC Loader cannot initialize before the controls in an actual View when it is included in an ASP.NET MVC Razor Layout View. | ![](../images/images/positive.png)



## Known Issues and Limitations Details

### <a id="helper-loader-scripts"></a> MVC helper-generated code in conjunction with the MVC Loader executes after any custom JavaScript code on a page

When the MVC Loader and an MVC Helper for any control is used in an ASP.NET MVC View, the JavaScript code they generate is executed after any custom page set-up code from the [`$(document).ready()`](http://api.jquery.com/ready/) or [`$(window).load()`](http://api.jquery.com/load-event/) events.

This is because the control is rendered in the body part of a page and script code is usually put in the head part. If the custom code refers to the control rendered by the MVC helper code, it may fail since the control does not exist yet. This is a timing issue and depends on how quickly the loader loads necessary resources.

> **Workaround**
> 
> Attach to the last event in the control initialization sequence like `dataBound` and execute any JavaScript code on the control from the event handler. Alternatively, you can put a short `script` block after the MVC helper like the one in the code snippet below.  In the code below, the `customControlLogic()` function handles any custom code. This ensures that code affecting the control will execute after the control has instantiated.

**In JavaScript:**

```js
$.ig.loader(function () {
    customControlLogic();
});
```

### <a id="default-autogeneratelayouts"></a> Default value for AutoGenerateLayouts changed

In the ASP.NET MVC Helper for grids, the default value of the `AutoGenerateLayouts` property has changed to false in order to avoid an additional remote data request for flat grids.

When [`AutoGenerateLayouts`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~AutoGenerateLayouts.html) is set to true in remote data binding scenarios such as remote sorting and filtering, there is an additional request to the data source. When `AutoGenerateLayouts` is set to false, that additional request is prevented.

> **Note:**
> 
> This is a breaking change.

### <a id="loader-layout-view"></a> MVC Loader not functioning correctly in an MVC Razor Layout View

The ASP.NET MVC Loader cannot initialize before the controls in an actual View when it is included in an ASP.NET MVC Razor Layout View.

ASP.NET MVC helpers do not produce the proper Loader code when the Loader is included in a layout page in an  ASP.NET MVC Razor application. They use the regular jQuery `$(function() { })` (document.ready) syntax. This happens only for ASP.NET MVC Razor applications. In MVC ASPX Views with master pages this problem does not occur.

The reason for this is that layout Views are processed and executed after the particular View is rendered and the Loader has no chance to initialize prior to View rendering.

> **Workaround**
> 
> Do not to include the MVC Loader in an ASP.NET MVC Razor layout page in your applications; instead, include it in each particular View.



 

 


