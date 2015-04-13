<!--
|metadata|
{
    "fileName": "adding-igzoombar",
    "controlName": "igZoombar",
    "tags": ["Charting","Data Presentation","How Do I"]
}
|metadata|
-->

# Adding igZoombar

## Topic Overview
### Purpose

This topic explains, with code examples, how to add the `igZoombar`™ control to an HTML page and an ASP.NET MVC application.

### Required background

The following topics are prerequisites to understanding this topic:

- [igZoombar Overview](igZoombar-Overview.html): This topic provides conceptual information about the `igZoombar` control and the functionalities it including the supported user interactions and some configuration basics.


### In this topic

This topic contains the following sections:

-   [**Adding igZoombar – Conceptual Overview**](#conceptual-overview)
    -   [igZoombar summary](#summary)
    -   [igZoombar summary chart](#summary-chart)
-   [**Adding igZoombar – Code Examples**](#code-example)
-   [**Code Example: Adding igZoombar in JavaScript**](#add-in-js)
    -   [Description](#js-description)
    -   [Code](#js-code)
-   [**Code Example: Adding igZoombar in ASP.NET MVC**](#add-in-mvc)
    -   [Description](#mvc-description)
    -   [Code](#mvc-code)
-   [Related Content](#related-topics)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="conceptual-overview"></a>Adding igZoombar – Conceptual Overview
### <a id="summary"></a>igZoombar summary

The `igZoombar` cannot work as a standalone control. It is designed to be used as an enhancement to range-enabled controls like `igDataChart`™. It works only in combination with other controls. The `igZoombar` supports `igDataChart` out of the box.

### <a id="summary-chart"></a>igZoombar summary chart

The following table gives a brief conceptual summary on how to add the `igZoombar` control to an HTML page and an ASP.NET MVC application. For further details, see [Adding igZoombar – Code Examples](Adding-igZoombar.html#code-example).

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
To enable igZoombar in…
			</th>

            <th>
Do this…
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
JavaScript
			</td>

            <td>
Create and instance of `igZoombar` control and attach it to the `igDataChart` control using the [target](%%jQueryApiUrl%%/ui.igzoombar#options:target) option.
			</td>
        </tr>

        <tr>
            <td>
ASP.NET MVC
			</td>

            <td>
                In the View, use the Infragistics® MVC Helper and call its [Zoombar](Infragistics.Web.Mvc~Infragistics.Web.Mvc.InfragisticsSuite`1~Zoombar.html) method which returns the `ZoombarWrapper` object.
                    Attach the `ZoombarWrapper` object to an igDataChart control using its [Target](Infragistics.Web.Mvc~Infragistics.Web.Mvc.ZoombarWrapper~Target.html) method.
                    Finally, call the [ZoombarWrapper.Render](Infragistics.Web.Mvc~Infragistics.Web.Mvc.ZoombarWrapper~Render.html) method.

                
                

                <blockquote>**Note:**
                    There is no need to define placeholders in the HTML page. They will be created automatically by the Infragistics ASP.NET MVC wrapper
                </blockquote>
            </td>
        </tr>
    </tbody>
</table>





## <a id="code-example"></a>Adding igZoombar – Code Examples
### Code examples summary

The following table lists the code examples included in this topic.

- [Adding igZoombar in JavaScript](Adding-igZoombar.html#add-in-js): This example demonstrates adding the `igZoombar` control with [default configuration](igZoombar-Overview.html#default-config) and attaching it to an `igDataChart` in JavaScript.

- [Adding igZoombar in ASP.NET MVC](Adding-igZoombar.html#add-in-mvc): This example demonstrates adding the `igZoombar` control with [default configuration](igZoombar-Overview.html#default-config) and attaching it to an `igDataChart` in ASP.NET MVC.



## <a id="add-in-js"></a>Code Example: Adding igZoombar in JavaScript
### <a id="js-description"></a>Description

The following code creates an `igZoombar` instance with its [default configuration](igZoombar-Overview.html#default-config) and connects it to an `igDataChart`.

### <a id="js-code"></a>Code

**In HTML:**

```html
Code
<!--Add a placeholders to the HTML page -->
<div id="chart"></div>
<br/>
<div id="zoom"></div>
var chart = $("#chart");
$("#chart").igDataChart({
// igDataChart options
});
$("#zoombar").igZoombar({
    target: "#chart"
});
```



## <a id="add-in-mvc"></a>Code Example: Adding igZoombar in ASP.NET MVC
### <a id="mvc-description"></a>Description

The following code creates `igDataChart` and `igZoombar` instances in the View using the Infragistics ASP.NET MVC wrappers. The `igZoombar` control is rendered with its [default configuration](igZoombar-Overview.html#default-config).

### <a id="mvc-code"></a>Code

**In C#:**

```csharp
Code
@(Html.Infragistics().DataChart(Model)
.ID("chart")
// DataChart options
.DataBind()
.Render()
)
@(Html.Infragistics().Zoombar().ID("zoombar").Target("chart").Render())
```



## <a id="related-topics"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring igZoombar](Configuring-igZoombar.html): This topic explains, with code examples, how to configure the zoom action and the zoom window of the `igZoombar` control.

- [Accessibility Compliance (igZoombar)](igZoombar-Accessibility-Compliance.html): This topic explains the accessibility features of the `igZoombar` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igZoombar)](igZoombar-Known-Issues-And-Limitations.html): This topic describes the known issues and limitations of the `igZoombar` control and the available workarounds.

- [jQuery and ASP.NET MVC Helper API Links (igZoombar)](igZoombar-ASP-NET-MVC-Helper-API.html): This topic provides links to the API reference documentation about the `igZoombar` control and the ASP.NET MVC Helper for it.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Basic Zoombar](%%SamplesUrl%%/zoombar/financial-chart): This sample demonstrates integrating `igZoombar` in an `igDataChart` control showing financial data.





 

 


