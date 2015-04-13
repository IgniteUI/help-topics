<!--
|metadata|
{
    "fileName": "igqrcodebarcode-styling",
    "controlName": "igBarcode",
    "tags": ["How Do I","Styling"]
}
|metadata|
-->

# Styling igQRCodeBarcode

## Topic Overview
### Purpose

This topic explains how to style the `igQRCodeBarcode`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [igQRCodeBarcode appearance configuration summary](#summary)
    -   [igQRCodeBarcode appearance configuration summary chart](#summary-chart)
-   [Configuring the Appearance of the igQRCodeBarcode Control](#config-appearance)
    -   [Property settings](#property-settings)
    -   [Example](#example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction
### <a id="summary"></a>igQRCodeBarcode appearance configuration summary

The `igQRCodeBarcode` exposes the API for adjusting its bars' color thus allowing for achieving a unique and trendy look which can be complemented by coloring the border of the control and specifying custom border thickness.

### <a id="summary-chart"></a>igQRCodeBarcode appearance configuration summary chart

The following table lists the configurable appearance related aspects of the `igQRCodeBarcode` control.

Configurable aspect|Details|Properties
---|---|---
Color of the barcode bars|You can set the color of the barcode.|<ul><li>[barBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barBrush)</li></ul>
Background color|You can specify the color of the background area behind the bars of the barcode.|<ul><li>[backingBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingBrush)</li></ul>
Border thickness and color|You can customize the barcode’s border thickness and color.|<ul><li>[backingOutline](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingOutline)</li><li>[backingStrokeThickness](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingStrokeThickness)</li></ul>


## <a id="config-appearance"></a>Configuring the Appearance of the igQRCodeBarcode Control
### <a id="property-settings"></a>Property settings

The following table maps the desired behavior to property settings.

In order to:| Use this property: And set it to:
---|---|---
Configure the background color|[backingBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingBrush)|The desired color
Configure the color of the barcode bars|[barBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barBrush)|The desired color
Configure the border thickness|[backingStrokeThickness](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingStrokeThickness)|The desired value
Configure the border color|[backingOutline](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingOutline)|The desired color



### <a id="example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` looks as a result of the following settings:

Property|Value
---|---
[backingBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingBrush)|“yellow”
[barBrush](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barBrush)|“blue”
[backingStrokeThickness](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingStrokeThickness)|“5”
[backingOutline](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:backingOutline)|“green”



![](images/igQRCodeBarcode_Styling_igQRCodeBarcode_1.png)

Following is the code that implements this example.

**In HTML:**

```html
<head>
...
    <script type="text/jscript">
        $(function () {                        
          $("#barcode").igQRCodeBarcode({
                width: "150px",
                height: "150px",
                data: "http://www.infragistics.com",
                backingBrush: "yellow",
                barBrush: "blue",
                backingStrokeThickness:"5",
                backingOutline: "green"
           });
       });
    </script>
</head>
<body>
	<div id="barcode">
	</div>
</body>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring igQRCodeBarcode](igQRCodeBarcode-Configuring.html): This is a group of topics explaining how to configure the `igQRCodeBarcode` control’s dimensions, character encoding, and QR-code-specific settings.

- [Accessibility Compliance (igQRCodeBarcode)](igQRCodeBarcode-Accessibility-Compliance.html): This topic explains the accessibility features of the `igQRCodeBarcode` control and provides advice on how to achieve accessibility compliance for pages containing barcodes.

- [Known Issues and Limitations (igQRCodeBarcode)](igQRCodeBarcode-Known-Issues-and-Limitations.html): This topic provides information on the known issues and limitations of the `igQRCodeBarcode` control.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Configuring Colors](%%SamplesUrl%%/barcode/configuring-colors):  This sample demonstrates styling the `igQRCodeBarcode` control by configuring the colors used in the barcode.





 

 


