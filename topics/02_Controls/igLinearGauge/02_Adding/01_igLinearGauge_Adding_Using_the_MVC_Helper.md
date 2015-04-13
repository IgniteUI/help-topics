<!--
|metadata|
{
    "fileName": "iglineargauge-adding-using-the-mvc-helper",
    "controlName": "igLinearGauge",
    "tags": ["Getting Started","MVC"]
}
|metadata|
-->

# Adding igLinearGauge to an ASP.NET MVC application



##Topic Overview


### Purpose

This topic demonstrates, with code examples, how to add the `igLinearGauge`™ to an ASP.NET MVC application using the ASP.NET MVC helper.

### Required background

The following lists the concepts and topics required as a prerequisite to understanding this topic.

-   jQuery
-   jQuery UI
-   ASP.NET MVC
-   ASP.NET MVC HTML Helpers

**Topics**

-	[Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html):This topic explains how to get started with Ignite UI™ components in an ASP.NET MVC application.

-	[igLinearGauge Overview](igLinearGauge-Overview.html):This topic provides conceptual information about the `igLinearGauge` control including its main features, minimum requirements, and user functionality.


### In this topic

This topic contains the following sections:

-   [Adding igLinearGauge to an ASP.NET MVC Application – Conceptual Overview](#overview)
    -   [Adding igLinearGauge summary](#adding-igLeanearGauge)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igLinearGauge to an ASP.NET MVC Application – Procedure](#procedure)
    -   [Introduction](#mvc-introduction)
    -   [Preview](#mvc-preview)
    -   [Prerequisites](#mvc-prerequisites)
    -   [Steps](#mvc-steps)
    -   [Full code](#mvc-full-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="overview"></a>Adding igLinearGauge to an ASP.NET MVC Application – Conceptual Overview

### <a id="adding-igLeanearGauge"></a>Adding igLinearGauge summary

The `igLinearGauge` control can be added to an ASP.NET MVC view using the ASP.NET MVC helper. In order to successfully display the linear gauge, the dimensions of the control should be specified.  When instantiating the `igLinearGauge` control, there are several helper methods that should be set for basic rendering including the following:

Helper Method|Purpose
---|---
[Width()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Sets the width of the igLinearGauge.
[Height()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Sets the height of the igLinearGauge.
[MinimumValue()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Sets the start value for the scale’s range.
[MaximumValue()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Sets the end value for the scale’s range.
[Value()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Sets the value which determines the position of the needle.
[Ranges()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html)|Instantiates range objects for the igLinearGauge. Apart from its [startValue](%%jQueryApiUrl%%/ui.igLinearGauge) and [endValue](%%jQueryApiUrl%%/ui.igLinearGauge), a [name](%%jQueryApiUrl%%/ui.igLinearGauge) must be assigned to the individual range, so that its extent is specified.



### <a id="requirements"></a>Requirements

To complete the procedure, you need the following:

-   An ASP.NET MVC application
-   A reference to the `Infragistics.Web.Mvc.dll` assembly added to the application project. For details, refer to the [Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html) topic.
-   The dependencies of the View:

    -   The `Infragistics.Web.Mvc` namespace added to the ASP.NET MVC View

    **In ASPX:**

    ```csharp
    <%@ Import Namespace="Infragistics.Web.Mvc" %>
    ```

    -   References to the combined Java Script files for all data visualization controls and to the required CSS files added to the `<head>` tag of the ASP.NET MVC View

    **In ASPX:**

    ```csharp
    <link href="<%=Url.Content("~/Scripts/css/themes/infragistics/infragistics.theme.css")%>" rel="stylesheet"></link>
    <link href="<%=Url.Content("~/Scripts/css/structure/infragistics.css")%>" rel="stylesheet"></link>
    <script src="<%=Url.Content("~/Scripts/jquery.min.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/jquery-ui.min.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/js/infragistics.core.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/js/infragistics.dv.js")%>" type="text/javascript"></script>
    ```

    Alternatively, you can use the Infragistics Loader (the igLoader
    component) or explicitly include all igLinearGauge-related files as
    explained in the [Adding *igLinearGauge* to an HTML
    Page](igLinearGauge-Adding-to-an-HTML-Page.html) topic.

### <a id="steps"></a>Steps

1. Adding the ASP.NET MVC Helper

2. Instantiating the `igLinearGauge` control configuring its basic rendering options

3. Configuring the scale

4. Adding a needle

5. Adding comparative ranges



##<a id="procedure"></a>Adding igLinearGauge to an ASP.NET MVC Application – Procedure

### <a id="mvc-introduction"></a>Introduction

This procedure adds an instance of `igLinearGauge` to an ASP.NET MVC application using the ASP.NET MVC helper for the control and configures its basic options - width and height. It also configures its scale and adds a needle and three comparative ranges to it. The procedure presumes that a reference to the `Infragistics.Web.Mvc.dll` assembly has been added to project and the control is rendered to the View with the ASP.NET MVC helper’s `Render()` method.

### <a id="mvc-preview"></a>Preview

The following screenshot is a preview of the result.

![](images/igLinearGauge_Adding_to_an_HTML_Page_1.png)

### <a id="mvc-prerequisites"></a>Prerequisites

An ASP.NET MVC application configured with the required JavaScript files, CSS files and ASP.NET MVC assembly as defined in the Prerequisites of the Adding `igLinearGauge` to an ASP.NET MVC Application procedure.

### <a id="mvc-steps"></a>Steps

The following steps demonstrate how to instantiate `igLinearGauge` in an ASP.NET MVC application using the ASP.NET MVC helper.

1. Add the ASP.NET MVC Helper.

	Add the ASP.NET MVC helper to the body of your ASP.NET page.

	**In ASPX:**

	```csharp
	<body>
    <%=(Html.Infragistics().LinearGauge()
    .Render())%>
    </body>
	```

2. Instantiate the `igLinearGauge` control configuring its basic rendering options. 
	Instantiate the igLinearGauge control. As with all Ignite UI ASP.NET MVC helpers, you must call the Render method to render the HTML and JavaScript to the View.

	**In ASPX:**

	```csharp
	<body>
        <%= Html.Infragistics().LinearGauge()
                        .Width("300px")
                        .Height("70px").Render()%>
    </body>
	```

3. Configure the scale.

	In order to customize the values of the scale, you need to supply values for the [MinimumValue()] (Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html) and [MaximumValue()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.LinearGaugeModel_members.html) methods. In this example, the scale will start at 5 and end at 55.

	**In ASPX:**

    ```csharp
    <%= Html.Infragistics().LinearGauge()
        .Width("300px")
        .Height("70px")
        .MinimumValue(5)
        .MaximumValue(55).Render()
	%>
    ```

	The changed scale is shown on the following screenshot:

	![](images/igLinearGauge_Adding_to_an_HTML_Page_2.png)

4. Add a needle.

	Add the needle by setting the `igLinearGauge`'s `Value()` method. For this example, set this value to 35.

	**In ASPX:**

    ```csharp
    <%= Html.Infragistics().LinearGauge()
		…
        .Value(35)
        .Render()
	%>
    ```

	The following screenshot displays what the `igLinearGauge` control would look so far in the procedure.

	![](images/igLinearGauge_Adding_to_an_HTML_Page_3.png)

5. Add comparative ranges.

	Within the `Ranges()` method, define the individual comparative ranges. The starting and ending values are configured individually for each range ( parameters of `StartValue()` and `EndValue()`) and color (`Brush()`). For this example, configure 3 comparative ranges, each of a different shade of gray, starting at the 0, 15, and 30 tick marks of the scale, respectively.

	**In ASPX:**

    ```csharp
    <%= Html.Infragistics().LinearGauge()
		…
    .Ranges(range =>
        {
            range.Range("range1").StartValue(0).EndValue(15).Brush("red");
            range.Range("range2").StartValue(15).EndValue(30).Brush("yellow");
            range.Range("range3").StartValue(30).EndValue(55).Brush("green");
        })
    .Render()%>
    ```

	The final look of the graph is presented below.

	![](images/igLinearGauge_Adding_to_an_HTML_Page_1.png)



### <a id="mvc-full-code"></a>Full code

Following is the full code for this procedure.

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
<head>
<title>Linear Gauge</title>
<link href="<%=Url.Content("~/Scripts/css/themes/infragistics/infragistics.theme.css")%>" rel="stylesheet"></link>
<link href="<%=Url.Content("~/Scripts/css/structure/infragistics.css")%>" rel="stylesheet"></link>
<script src="<%=Url.Content("~/Scripts/jquery.min.js")%>" type="text/javascript"></script>
<script src="<%=Url.Content("~/Scripts/jquery-ui.min.js")%>" type="text/javascript"></script>
<script src="<%=Url.Content("~/Scripts/js/infragistics.core.js")%>" type="text/javascript"></script>
<script src="<%=Url.Content("~/Scripts/js/infragistics.dv.js")%>" type="text/javascript"></script>
</head>
<body>
    <%= Html.Infragistics().LinearGauge()
        .Width("300px")
        .Height("70px")
        .MinimumValue(5)
        .MaximumValue(55)
        .Value(35)
        .Ranges(range =>
            {
                range.Range("range1").StartValue(0).EndValue(15).Brush("red");
                range.Range("range2").StartValue(15).EndValue(30).Brush("yellow");
                range.Range("range3").StartValue(30).EndValue(55).Brush("green");
            })
        .Render()%>
</body>
</html>
```



##<a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Adding `igLinearGauge` to an HTML Page](igLinearGauge-Adding-to-an-HTML-Page.html):This topic demonstrates, with code examples, how to add the igLinearGauge control to an HTML page.

-	[jQuery and ASP.NET MVC Helper API Links (igLinearGauge)](igLinearGauge-API-Links.html):This topic provides links to the API reference documentation about the `igLinearGauge` control and its ASP.NET MVC Helper.


### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

-	[MVC Initialization](%%SamplesUrl%%/linear-gauge/mvc-initialization):This sample demonstrates how to use the ASP.NET MVC helper for the linear gauge.





 

 


