<!--
|metadata|
{
    "fileName": "igqrcodebarcode-adding-using-the-mvc-helper",
    "controlName": "igBarcode",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# Adding igQRCodeBarcode to an ASP.NET MVC Application



## Topic Overview
### Purpose

This topic demonstrates, with code examples, how to add the `igQRCodeBarcode`™ to an ASP.NET MVC application using the ASP.NET MVC helper.

### Required background

The following table lists the concepts and topics required as a prerequisite to understanding this topic.

-   jQuery
-   jQuery UI
-   ASP.NET MVC
-   ASP.NET MVC HTML Helpers

Topics

- [Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html): This topic explains how to get started with Ignite UI™ components in an ASP.NET MVC application.

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.


### In this topic

This topic contains the following sections:

-   [Adding igQRCodeBarcode to an ASP.NET MVC Application – Conceptual Overview](#overview)
    -   [Adding igQRCodeBarcode summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igQRCodeBarcode to an ASP.NET MVC Application – Procedure](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Preview](#procedure-preview)
    -   [Prerequisites](#procedure-prerequisites)
    -   [Steps](#procedure-steps)
    -   [Full code](#procedure-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Adding igQRCodeBarcode to an ASP.NET MVC Application – Conceptual Overview
### <a id="summary"></a>Adding igQRCodeBarcode summary

The `igQRCodeBarcode` control can be added to an ASP.NET MVC view using the ASP.NET MVC helper. In order to successfully display the barcode, data should be fed to the helper as well as the dimensions of the control should be specified.  When instantiating the `igQRCodeBarcode` control, there are several helper methods that should be set for basic rendering including the following:

Helper Method|Purpose
---|---
Data()|Sets the string data to be encoded by the `igQRCodeBarcode`
Height()|Sets the string height of the `igQRCodeBarcode`
Width()|Sets the string width of the `igQRCodeBarcode`

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

    **In Razor:**

    ```csharp
    @using Infragistics.Web.Mvc
    ```

    -   References to the combined files for all data visualization controls added to the `<head>` tag of the ASP.NET MVC View

    **In ASPX:**

    ```csharp
    <script src="<%=Url.Content("~/Scripts/jquery.min.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/jquery-ui.min.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/js/infragistics.core.js")%>" type="text/javascript"></script>
    <script src="<%=Url.Content("~/Scripts/js/infragistics.dv.js")%>" type="text/javascript"></script>
    ```

    **In Razor:**

    ```csharp
    <script src="@Url.Content("~/Scripts/jquery.min.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/jquery-ui.min.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/js/infragistics.core.js")" type="text/javascript"></script>
    <script src="@Url.Content("~/Scripts/js/infragistics.dv.js")" type="text/javascript"></script>
    ```

    Alternatively, you can use the Infragistics Loader (the igLoader
    component) or explicitly include all igQRCodeBarcode-related files
    as explained in the [Adding *igQRCodeBarcode* to an HTML Page](igQRCodeBarcode-Adding-to-an-HTML-Page.html) topic.

### <a id="steps"></a>Steps

1. Adding the ASP.NET MVC Helper

2. Instantiating the `igQRCodeBarcode` control


## <a id="procedure"></a>Adding igQRCodeBarcode to an ASP.NET MVC Application – Procedure
### <a id="procedure-introduction"></a>Introduction

This procedure adds an instance of `igQRCodeBarcode` to an ASP.NET MVC application using the ASP.NET MVC helper for the control and configures its basic options - data, width and height. The string data to encode is *http://www.infragistics.com.* The procedure presumes that a reference to the `Infragistics.Web.Mvc.dll` assembly has been added to project and the control is rendered to the View with the ASP.NET MVC helper’s `Render()` method.

### <a id="procedure-preview"></a>Preview

The following screenshot is a preview of the result.

![](images/igQRCodeBarcode_Adding_igQRCodeBarcode_to_an_ASP.NET_MVC_Application_1.png)

### <a id="procedure-prerequisites"></a>Prerequisites

An ASP.NET MVC application configured with the required JavaScript files, CSS files and ASP.NET MVC assembly as defined in the Prerequisites of the Adding `igQRCodeBarcode` to an ASP.NET MVC Application procedure.

### <a id="procedure-steps"></a>Steps

The following steps demonstrate how to instantiate `igQRCodeBarcode` in an ASP.NET MVC application using the ASP.NET MVC helper.

1. Add the ASP.NET MVC Helper.

	Add the ASP.NET MVC helper to the body of your ASP.NET page.
	
	**In ASPX:**
	
	```csharp
	<%=(Html.Infragistics().QRCodeBarcode()
	.Render())%>
	```
	
	**In Razor:**
	
	```csharp
	@(Html.Infragistics().QRCodeBarcode()
	.Render())
	```

2. Instantiate the `igQRCodeBarcode` control.

	Instantiate the `igQRCodeBarcode` control. As with all Ignite UI ASP.NET MVC helpers, you must call the [Render](Infragistics.Web.Mvc~Infragistics.Web.Mvc.QRCodeBarcodeRenderer~Render.html) method to render the HTML and JavaScript to the View.
	
	**In ASPX:**
	
	```csharp
	<%=(Html.Infragistics().QRCodeBarcode()
		.Height("200px")
		.Width("200px")
		.Data(“http://www.infragistics.com”).Render())
	%>
	```
	
	**In Razor:**
	
	```csharp
	@(Html.Infragistics().QRCodeBarcode()
		.Height("200px")
		.Width("200px")
		.Data(“http://www.infragistics.com”).Render())
	```



### <a id="procedure-code"></a>Full code

Following is the full code for this procedure.

**In ASPX:**

```csharp
<%@ Import Namespace="Infragistics.Web.Mvc" %>
<!DOCTYPE html>
<html>
	<head>
		<title>QR Barcode</title>
		<script src="<%=Url.Content("~/Scripts/jquery.min.js")%>" type="text/javascript"></script>
		<script src="<%=Url.Content("~/Scripts/jquery-ui.min.js")%>" type="text/javascript"></script>
		<script src="<%=Url.Content("~/Scripts/js/infragistics.core.js")%>" type="text/javascript"></script>
		<script src="<%=Url.Content("~/Scripts/js/infragistics.dv.js")%>" type="text/javascript"></script>
	</head>
	<body>
		<%=(Html.Infragistics().QRCodeBarcode()
		.Height("200px")
		.Width("200px")
		.Data(“http://www.infragistics.com”).Render())%>
	</body>
</html>
```

**In Razor:**

```csharp
@using Infragistics.Web.Mvc
<head>
	<title>@ViewBag.Title</title>
	<script src="@Url.Content("~/Scripts/jquery.min.js")" type="text/javascript"></script>
	<script src="@Url.Content("~/Scripts/jquery-ui.min.js")" type="text/javascript"></script>
	<script src="@Url.Content("~/Scripts/js/infragistics.core.js")" type="text/javascript"></script>
	<script src="@Url.Content("~/Scripts/js/infragistics.dv.js")" type="text/javascript"></script>
</head>
<body>
	@(Html.Infragistics().QRCodeBarcode()
	.Height("200px")
	.Width("200px")
	.Data(“http://www.infragistics.com”).Render())
</body>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igQRCodeBarcode to an HTML Page](igQRCodeBarcode-Adding-to-an-HTML-Page.html): This topic demonstrates, with code examples, how to add the `igQRCodeBarcode` control to an HTML page.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and its ASP.NET MVC Helper.



### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

- [MVC Initialization](%%SamplesUrl%%/barcode/mvc-initialization): This sample demonstrates using the ASP.NET MVC helper for adding the igQRCodeBarcode control to an HTML page.





 

 


