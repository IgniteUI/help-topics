<!--
|metadata|
{
    "fileName": "igqrcodebarcode-configuring-the-dimensions",
    "controlName": "igBarcode",
    "tags": ["Application Scenarios","How Do I"]
}
|metadata|
-->

# Configuring the Dimensions of the QR Barcode (igQRCodeBarcode)



## Topic Overview
### Purpose

This topic demonstrates how to configure the `igQRCodeBarcode`™ control’s size and dimensional aspects, like the stretch and fill and the size of the minimum-size element.

### Required background

The following topics are prerequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.

### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [QR barcode dimensions configuration summary](#config-summary)
    -   [QR barcode dimensions configuration summary chart](#summary-chart)
-   [Configuring the Size of the Minimum-Size Element](#min-size-element)
    -   [Overview](#min-size-element-overview)
    -   [Property settings](#min-size-element-settings)
    -   [Example](#min-size-element-example)
-   [Configuring the Stretch of the Matrix](#config-stretch-of-matrix)
    -   [Overview](#stretch-of-matrix-overview)
    -   [Property settings](#stretch-of-matrix-settings)
    -   [Example](#stretch-of-matrix-example)
-   [Configuring the Logical Grid’s Fill Mode](#config-fill-mode)
    -   [Overview](#fill-mode-overview)
    -   [Property settings](#fill-mode-settings)
    -   [Example](#fill-mode-example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction
### <a id="config-summary"></a>QR barcode dimensions configuration summary

If the [width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width) and [height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height) properties have not been set for the `igQRCodeBarcode` control, it is sized according to the size of its container (if defined). Setting the height and width creates a containing rectangular area in which the QR (Quick Response) barcode matrix is displayed. You can specify how the matrix fills this containing area in several aspects:

-   Stretch of the matrix
-   Size of the minimum-size element
-   Internal grid fill mode

For details, see [QR barcode dimensions configuration summary chart](#summary-chart).

### <a id="summary-chart"></a>QR barcode dimensions configuration summary chart

The following table lists the configurable aspects related to the QR barcode dimensions. Further details are available after the table.

Configurable aspect| Details| Properties
---|---|---
[Size of the minimum-size element](#min-size-element)| You can adjust `igQRCodeBarcode` minimum-size element’s width for the symbol in millimeters.|<ul><li>[xDimension](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:xDimension)</li></ul>
[Stretch of the matrix](#config-stretch-of-matrix)|You can specify the horizontal and vertical space which `igQRCodeBarcode` takes inside its container.|<ul><li>[stretch](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:stretch)</li></ul>
[Logical grid’s fill mode](#config-fill-mode)|You can customize how the internal grid containing the bars will fill the `igQRCodeBarcode` control's dimensions.|<ul><li>[barsFillMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barsFillMode)</li></ul>


## <a id="min-size-element"></a>Configuring the Size of the Minimum-Size Element
### <a id="min-size-element-overview"></a>Overview

The minimum-size element width for the matrix affects the size of the matrix itself and is related to the available space in the container and the technology used to decode the QR barcode, i.e. mobile phones, etc.. The size of the minimum-size element is managed by the `xDimension` property of the `igQRCodeBarcode` control. The property value is taken into account when the stretch option of the control is set to a value which suggests that its content preserves its nominal size, i.e. stretch = “none”.

### <a id="min-size-element-settings"></a>Property settings

The following table maps the desired behavior to property settings.

In order to:| Use this property:| And set it to:
---|---|---
Specify the minimum-size element’s width|[xDimension](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:xDimension)|The desired value in millimeters in the range 0.01÷100


### <a id="min-size-element-example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks as a result of the following settings:

Property| Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“100px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“150px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“http://www.infragistics.com”
[stretch](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:stretch)|“none”
[xDimension](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:xDimension)|“0.8”


![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_1.png)

Following is the code that implements this example.

**In HTML:**

```html
<head>
...
    <script type="text/jscript">
        $(function () {                        
          $("#barcode").igQRCodeBarcode({
                data: "http://www.infragistics.com",
                width: "100px",
                height: "150px",
                stretch:"none",
                xDimension:"0.8"
            });
            });
    </script>
</head>
<body>
      <div id="barcode"></div>
</body>
```



## <a id="config-stretch-of-matrix"></a>Configuring the Stretch of the Matrix
### <a id="stretch-of-matrix-overview"></a>Overview

The stretch of the QR barcode matrix determines the horizontal and vertical extents of the width which the matrix occupies the control’s container. This is managed by the stretch option.

The following table explains the supported values of the stretch option and demonstrates their effect.

Value| Result | Description| Details
---|---|---|---
fill|![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_2.png)|The content is resized to fill the destination’s dimensions.|When using fill, as the content's height and width are scaled independently, the original aspect ratio of the image is not preserved which is why using this value is not recommended when the barcode is used for reading (for reading, use either none or uniform).
none|![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_3.png)|The content preserves its nominal dimensions.|uniform
(default)|![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_4.png)|The content is resized to fit the destination’s dimensions while its native aspect ratio is preserved.
uniformToFill|![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_5.png)|The content is resized to fill the destination’s dimensions completely while it preserves its native aspect ratio.|If the aspect ratio of the destination rectangle differs from that of the source, the excessive source content will be cut off.

### <a id="stretch-of-matrix-settings"></a>Property settings

The following table maps the desired stretch behavior to the property settings that configure it.

In order to:| Use this property:| And set it to:
---|---|---
Resize the source content to fill the destination’s dimensions|[stretch](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:stretch)|<ul><li>“fill”</li></ul>
Keep the nominal dimensions of the source content|stretch|<ul><li>“none”</li></ul>
Resize the source content to fit in the destination’s dimensions while keeping its native aspect ratio|stretch|<ul><li>“uniform”</li></ul>
Resize the source content to fill the destination’s dimensions while keeping its native aspect ratio|stretch|<ul><li>“uniformToFill”</li></ul>


### <a id="stretch-of-matrix-example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks
as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“100px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“150px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“http://www.infragistics.com”
[stretch](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:stretch)|“fill”



![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_6.png)

Following is the code that implements this example.

**In HTML:**

```html
<head>
...
    <script type="text/jscript">
        $(function () {                        
          $("#barcode").igQRCodeBarcode({
                data: "http://www.infragistics.com",
                width: "100px",
                height: "150px",
                stretch:"fill"
            });
            });
    </script>
</head>
<body>
      <div id="barcode"></div>
</body>
```



## <a id="config-fill-mode"></a>Configuring the Logical Grid’s Fill Mode
### <a id="fill-mode-overview"></a>Overview

The various bars comprising the barcode are visualized in a logical grid. The `barsFillMode` property of the `igQRCodeBarcode` control defines how the logical grid containing the bars fills the control's dimensions. By default, the grid fills all the available space for `igQRCodeBarcode` control.

When the `barsFillMode` has been set to `fillSpace`, depending on the dimensions of the control and the bars grid and the DPI of the user, in some cases, the actual bars’ width and height may differ from those that have been set in the code. This might render the barcode unreadable – for instance, if the internal grid has 200 columns and the width of the control is 300 px, then the columns’ bars will have integer widths (some will be 1 px and some 2 px) to fill the control. This mode is recommended for all scenarios where there is no machine reading.

The recommended mode for machine reading is `ensureEqualSize`. If the internal grid has 200 columns and the width of the control is 300 px, then the grid will shrink to 200 px in width making all cells equal.

### <a id="fill-mode-settings"></a>Property settings

The following table maps the desired fill behaviors of the logical grid to the property settings that configure it.

In order to:| Use this property:| And set it to:
---|---|---
Configure the logical grid to fill the control’s container|[barsFillMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#optionsbarsFillMode)|fillSpace
Configure bar cells of the logical grid to have the same dimensions|barsFillMode|ensureEqualSize

### <a id="fill-mode-example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks
as a result of the following settings:

Property| Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“150px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“150px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“http://www.infragistics.com”
[barsFillMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barsFillMode)|“ensureEqualSize”



![](images/igQRCodeBarcode_Configuring_the_Dimensions_of_the_QR_Code_%28igQRCodeBarcode%29_7.png)

Following is the code that implements this example.

**In HTML:**

```html
<head>
…
    <script type="text/jscript">
        $(function () {                        
                  $("#barcode").igQRCodeBarcode({
	                data: "http://www.infragistics.com",
	                width: "150px",
	                height: "150px",
	                barsFillMode:"ensureEqualSize"
            });
            });
    </script>
</head>
<body>
      <div id="barcode"></div>
</body>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring the QR-Code-Specific Settings (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-QR-Code-Specific-Settings.html): This topic explains, with code examples, how to configure the settings of the `igQRCodeBarcode` control that are specific to the QR (Quick Response) barcode, like the error correction level, size version, FNC1 mode, and the application indicator.

- [Configuring the Character Encoding (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-Character-Encoding.html): This topic explains how to configure the desired character encoding in the `igQRCodeBarcode` control.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [QR Barcode Dimensions](%%SamplesUrl%%/barcode/qr-barcode-dimensions): This sample demonstrates configuring the dimensions’ settings of the `igQRCodeBarcode` control.





 

 


