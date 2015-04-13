<!--
|metadata|
{
    "fileName": "igqrcodebarcode-configuring-the-qr-code-specific-settings",
    "controlName": "igBarcode",
    "tags": ["Application Scenarios","How Do I"]
}
|metadata|
-->

# Configuring the QR-Code-Specific Settings (igQRCodeBarcode)



## Topic Overview
### Purpose

This topic explains, with code examples, how to configure the settings of the `igQRCodeBarcode`™ control that are specific to the QR (Quick Response) barcode, like the error correction level, size version, FNC1 mode, and the application indicator.

### Required background

The following topics are perequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [QR-Code-Specific Settings Configuration Summary](#config-summary)
-   [Configuring the Error Correction Level](#error-correction-level)
    -   [Overview](#error-overview)
    -   [Property settings](#error-setting)
    -   [Example](#error-overview)
-   [Configuring the Size Version](#config-size-version)
    -   [Overview](#size-version-overview)
    -   [Property settings](#size-version--settings)
    -   [Example](#size-version--example)
-   [Configuring the FNC1 Mode](#config-FNC1-mode)
    -   [Overview](#fnc1-overview)
    -   [Property settings](#fnc1-settings)
    -   [Example](#fnc1-example)
-   [Configuring the Application Indicator](#config-application-indicator)
    -   [Overview](#app-overview)
    -   [Property settings](#app-property)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="config-summary"></a>QR-Code-Specific Settings Configuration Summary
### QR-code-specific settings configuration summary chart

The following table explains briefly the QR-code-specific settings of the `igQRCodeBarcode` control and maps them to properties that configure them. Further details are available after the table.

Setting| Details| Properties
---|---|---
[Error correction level](#error-correction-level)|A built-infunctionality of the `igQRCodeBarcode` control that enables restoring of encoded data that has become unreadable because of the barcode being damaged or dirty|<ul><li>[errorCorrectionLevel](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)</li></ul>
[Size version](#config-size-version)|Specifies the size version QR code barcode matrix in number of modules|<ul><li>[sizeVersion](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)</li></ul>
[FNC1 mode](#config-FNC1-mode)|Specifies the format of the encoded data according to a pre-defined data encoding standard|<ul><li>[fnc1Mode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)</li></ul>
[Application indicator](#config-application-indicator)|Identifies the relevant specification by AIM Inc.|<ul><li>[applicationIndicator](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)</li></ul>

## <a id="error-correction-level"></a>Configuring the Error Correction Level
### <a id="error-overview"></a>Overview

The error correction level feature is a built-in functionality of the `igQRCodeBarcode` control that enables restoring of encoded data that has become unreadable because of the barcode being damaged or dirty. The `igQRCodeBarcode` control has several correction levels based on the percentage of the symbols that can be restored if damaged. Note that the higher the correction level, the higher storage capacity will be required from the user’s device for scanning the QR code. By default, error correction is set to a level which allows for the recovery of 15% of the symbol code words.

### <a id="error-setting"></a>Property settings

The following table maps the desired behavior to the property settings that configure it.

In order to configure the data recovery level at the percentage damaged symbols:| Use this property:| And set it to:
---|---|---
7%| [errorCorrectionLevel](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|<ul><li>“low”</li></ul>
15% (default)|errorCorrectionLevel| <ul><li>“medium”</li></ul>
25%|errorCorrectionLevel|<ul><li>“quartil”</li></ul>
30%|errorCorrectionLevel|<ul><li>“high”</li></ul>



### <a id="error-overview"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“200px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“200px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“http://www.infragistics.com”
[errorCorrectionLevel](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:errorCorrectionLevel)|“high”


![](images/igQRCodeBarcode_Configuring_the_QR-Code-Specific_Settings_%28igQRCodeBarcode%29_1.png)

Following is the code that implements this example.

**In JavaScript:**

  ```js
  $("#barcode").igQRCodeBarcode({
        width: "200px",
        height: "200px",
        data: "http://www.infragistics.com",
        errorCorrectionLevel:"high"
  });
  ```



## <a id="config-size-version"></a>Configuring the Size Version
### <a id="size-version-overview"></a>Overview

The size version setting of the `igQRCodeBarcode` control specifies the size version QR code barcode matrix. The size version refers to the number of the black and white modules that make up the matrix. Forty size versions are supported, starting from Version 1 which generates a 21x21 module matrix and ending with Version 40 whose matrix is 177x177 modules. If the size version is not set explicitly, the smallest version that accommodates the data will be used. For a list of all size versions and the number of modules they represent, refer to the [igQRCodeBarcode jQuery API](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options) page.

### <a id="size-version--settings"></a>Property settings

The following table maps the desired behavior to the property settings
that configure it.

In order to specify the size of the module matrix:| Use this property: |And set it to:
---|---|---
The smallest version that accommodates the data|[sizeVersion](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|<ul><li>“undefined”</li></ul>
21x21 module matrix|sizeVersion|<ul><li>“version1”</li></ul>



### <a id="size-version--example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks
as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“200px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“200px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“http://www.infragistics.com”
[sizeVersion](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“version7”

![](images/igQRCodeBarcode_Configuring_the_QR-Code-Specific_Settings_%28igQRCodeBarcode%29_2.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$("#barcode").igQRCodeBarcode({
    width: "200px",
    height: "200px",
    data: "http://www.infragistics.com",
    sizeVersion:"version7"
});
```



## <a id="config-FNC1-mode"></a>Configuring the FNC1 Mode
###<a id="fnc1-overview"></a>Overview

The FNC1 mode setting of `igQRCodeBarcode` control specifies the format of the encoded data according to a pre-defined data encoding standard. The FNC1 mode setting applies to the entire barcode and is not affected by subsequent mode indicators.

### <a id="fnc1-settings"></a>Property settings

The following table maps the desired behavior to the property settings
that configure it.

In order to:| Use this property: |And set it to:
---|---|---
Specify that data is not identified as encoded according to a specific pre-defined encoding specification|[fnc1Mode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|<ul><li>“none”</li></ul>
Specify that data is encoded according to the [GS1 General Specification](http://www.gs1.org/genspecs)|fnc1Mode|<ul><li>“gs1”</li></ul>
Specify that data is encoded according to a specific industry application agreed with AIM Inc.|fnc1Mode|<ul><li>“industry”</li></ul>

### <a id="fnc1-example"></a>Example

The screenshot below demonstrates how the `igQRCodeBarcode` control looks
as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“200px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“200px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|"(15)679356"
[fnc1Mode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options)|“gs1”


![](images/igQRCodeBarcode_Configuring_the_QR-Code-Specific_Settings_%28igQRCodeBarcode%29_3.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$("#barcode").igQRCodeBarcode({
    width: "200px",
    height: "200px",
    data: "(15)679356",
    fnc1Mode:"gs1"
});
```



## <a id="config-application-indicator"></a>Configuring the Application Indicator
### <a id="app-overview"></a>Overview

The application indicator identifies the relevant specification by AIM Inc.. It is used only with the Industry FNC1 mode, i.e. when the `fnc1Mode` property is set to industry.

### <a id="app-property"></a>Property settings

The following table maps the desired behavior to property settings.

In order to:| Use this property:| And set it to:
---|---|---
Specify the application indicator|[applicationIndicator](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:applicationIndicator)|A string representing the AIM Inc. specification code. The allowed symbols belong to the set {a - z, A - Z} or represent a two-digit number, denoting the specification concerned by AIM Inc..


## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring the Dimensions of the QR Barcode (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-Dimensions.html): This topic demonstrates how to configure the igQRCodeBarcode control’s size and dimensional aspects, like the stretch and fill and the size of the minimum-size element.

- [Configuring the Character Encoding (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-Character-Encoding.html): This topic explains how to configure the desired character encoding in the `igQRCodeBarcode` control.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Configuring the QR-Code-Specific Settings](%%SamplesUrl%%/barcode/configuring-the-qr-code-specific-settings): This sample demonstrates configuring the QR-code-specific settings.





 

 


