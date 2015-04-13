<!--
|metadata|
{
    "fileName": "igqrcodebarcode-overview",
    "controlName": "igBarcode",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# igQRCodeBarcode Overview



## Topic Overview
### Purpose

This topic provides conceptual information about the `igQRCodeBarcode`™ control including its main features and minimum requirements.

### Required background

The following concept is required as a prerequisite to understanding this topic:

-   [QR barcode](http://en.wikipedia.org/wiki/QR_code)

### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Main Features](#main-features)
    -   [Main features summary](#main-features-summary)
    -   [Main features summary chart](#main-feature-summary-chart)
-   [Minimum Requirements](#minimum-requirements)
-   [Default Settings](#default-settings)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction
### igQRCodeBarcode summary

The `igQRCodeBarcode` control generates QR (Quick Response) barcode images for use in your web application. The following screenshot shows a sample `igQRCodeBarcode` control with the “*http://www.infragistics.com*” data encoded.

![](images/igQRCodeBarcode_Overview_1.png)

The control supports the industry-standard encodings and has several options for optimizing the sizing, positioning, and readability of the generated QR barcodes.



## <a id="main-features"></a>Main Features
### <a id="main-features-summary"></a>Main features summary

The `igQRCodeBarcode` control is configurable in terms of QR-code-specific settings, as well as in look-and-feel (background color, border color and thickness). For details, see [Main features summary chart](#main-feature-summary-chart).

### <a id="main-feature-summary-chart"></a>Main features summary chart

The following table summarizes the main features of the `igQRCodeBarcode` control. For further details, refer to the [Configuring igQRCodeBarcode](igQRCodeBarcode-Configuring.html) group of topics.

<table class="table">
	<thead>
		<tr>
            <th colspan="2">
Feature
			</th>

            <th>
Description
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td rowspan="4">
**Size, stretch, and fill**
			</td>

            <td>
Configurable dimensions
			</td>

            <td>
If the [width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width) and [height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height) properties have
                    not been set for the `igQRCodeBarcode` control, it is sized according to the size of its container (if defined). Setting the height and width creates a containing rectangular area in which the QR (Quick Response)
                    barcode matrix is displayed.
			</td>
        </tr>

        <tr>
            <td>
Configurable Minimum-Size Element
			</td>

            <td>
The minimum-size element width for the matrix affects size of the matrix itself and is related to the available space on the page and the technology used to decode the QR barcode, i.e. mobile phones, etc.. The size of the minimum-size
                    element is managed by the [xDimension](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:xDimension) property.
			</td>
        </tr>

        <tr>
            <td>
Configurable stretch
			</td>

            <td>
The [stretch](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:stretch) controls the spread of the QR barcode matrix within the control’s container in both horizontal and vertical directions.
			</td>
        </tr>

        <tr>
            <td>
Configurable fill
			</td>

            <td>
The various bars comprising the barcode matrix comprises are visualized in a logical grid. The [barsFillMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:barsFillMode) property of the `igQRCodeBarcode` control
                    defines how the logical grid containing the bars fills the control's dimensions. By default, the grid fills all the available space for `igQRCodeBarcode` control.
			</td>
        </tr>

        <tr>
            <td rowspan="6">
**QR-code-specific**
			</td>

            <td>
Configurable Error Correction Level
			</td>

            <td>
The `igQRCodeBarcode` control is able to restore the encoded data if the barcode is damaged or dirty. The permissible deviation is managed with the [errorCorrectionLevel](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:errorCorrectionLevel) property.
			</td>
        </tr>

        <tr>
            <td>
Configurable Size Version
			</td>

            <td>
The `igQRCodeBarcode` control allows for specifying the number of its modules by the selection of an appropriate size version. The values of the property are built-in and vary from the smallest version to accommodate
                    the data (undefined) to big size versions such as 177x177 modules.
			</td>
        </tr>

        <tr>
            <td>
Configurable Encoding Mode
			</td>

            <td>
The `igQRCodeBarcode` control is capable of encoding large numbers of characters, using compaction, depending on the types of the [data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data) characters. JIS Kanji characters are supported as well by using the Kanji value of the [encodingMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:encodingMode) property.
			</td>
        </tr>

        <tr>
            <td>
Configurable Extended Channel Interpretation (ECI) Number
			</td>

            <td>
The `igQRCodeBarcode` control can encode data from character sets other than the default UTF-8 or ISO-8859-1. This functionality is controlled by the [eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber) property.
			</td>
        </tr>

        <tr>
            <td>
Configurable FNC1 Mode
			</td>

            <td>
The `igQRCodeBarcode` control supports different formats of the encoded data or FNC1 modes – Gs1 (according to GS1 General Specifications) mode and Industry mode for data formatted in accordance with specific
                    industry application previously agreed upon by AIM Inc..
			</td>
        </tr>

        <tr>
            <td>
Configurable Application Indicator
			</td>

            <td>
In case that `igQRCodeBarcode` control's FCN1 mode is set to Industry, the application indicator property can be used to identify the relevant specification by AIM Inc..
			</td>
        </tr>

        <tr>
            <td rowspan="3">
**Look-and-feel**
			</td>

            <td>
Configurable barcode bars’ color
			</td>

            <td>
You can set the color of the barcode.
			</td>
        </tr>

        <tr>
            <td>
Configurable background color
			</td>

            <td>
You can specify the color of the background area behind the bars of the barcode.
			</td>
        </tr>

        <tr>
            <td>
Configurable border thickness and color
			</td>

            <td>
You can customize the barcode’s border thickness and color.
			</td>
        </tr>
    </tbody>
</table>





## <a id="minimum-requirements"></a>Minimum Requirements

The minimum configuration of `igQRCodeBarcode` which is needed in order to have the control operational is to specify its dimensions (width and height) and feed data to it by setting a value to the data option.

>**Note:** Depending on the type of data to be encoded, additional encoding files might need to be loaded and the `eciNumber` might need to be set (see the [Configuring the Character Encoding (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-Character-Encoding.html) topic for details).



## <a id="default-settings"></a>Default Settings

If the width and height options have not been set for the `igQRCodeBarcode` control, it is sized according to the size of its container (if defined).

By default, if the aspect ratio of the available space for rendering the control differs from that of its content, the content is resized to fit in the destination's dimensions while it preserves its native aspect ratio (1:1) (the default value of the stretch property being uniform).

The various bars comprising the barcode matrix are visualized in a logical grid. By default, this grid fills all the space available for the `igQRCodeBarcode` (`barsFillMode = ”fillSpace”`).

The default configuration specifies a data recovery level at the 15% of the damaged symbols (`errorCorrectionLevel = "medium"`).

If the size version of the QR code barcode matrix has not been explicitly set, the smallest size version that accommodates the data will be used (`sizeVersion = "undefined"`).

In order to ensure minimum size of the files, carrying the encodings logic, the default values of the following two properties vary according to the selected encoding:

-   `encodingMode` resolves to undefined if the Shift_JIS encoding has been loaded and to byte otherwise
-   `eciNumber` resolves to “3” (ISO-8859-1 character set) if ISO-8859-1 character set has been loaded; otherwise it resolves to “26” (UTF-8 character set)



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.

- [Configuring igQRCodeBarcode](igQRCodeBarcode-Configuring.html): This is a group of topics explaining how to configure the `igQRCodeBarcode` control’s dimensions, character encoding, and QR-code-specific settings.

- [Styling igQRCodeBarcode](igQRCodeBarcode-Styling.html): This topic explains how to configure the look-and-feel of the `igQRCodeBarcode` control be setting the barcode color, the background color, and the border color and thickness.

- [Accessibility Compliance (igQRCodeBarcode)](igQRCodeBarcode-Accessibility-Compliance.html): This topic explains the accessibility features of the `igQRCodeBarcode` control and provides advice on how to achieve accessibility compliance for pages containing barcodes.

- [Known Issues and Limitations (igQRCodeBarcode)](igQRCodeBarcode-Known-Issues-and-Limitations.html): This topic provides information on the known issues and limitations of the `igQRCodeBarcode` control.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Configuring the QR-Code-Specific Settings](%%SamplesUrl%%/barcode/configuring-the-qr-code-specific-settings): This sample demonstrates configuring the QR-code-specific settings.

- [QR Barcode Dimensions](%%SamplesUrl%%/barcode/qr-barcode-dimensions): This sample demonstrates configuring the dimensions’ settings of the `igQRCodeBarcode` control.

- [Configuring Colors](%%SamplesUrl%%/barcode/configuring-colors): This sample demonstrates styling the `igQRCodeBarcode` control by configuring the colors used in the barcode.





 

 


