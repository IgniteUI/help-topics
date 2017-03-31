<!--
|metadata|
{
    "fileName": "igqrcodebarcode-configuring-the-character-encoding",
    "controlName": "igBarcode",
    "tags": ["Application Scenarios","Data Presentation","How Do I"]
}
|metadata|
-->

# Configuring the Character Encoding (igQRCodeBarcode)



## Topic Overview
### Purpose

This topic explains how to configure the desired character encoding in the `igQRCodeBarcode`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Character encoding configuration summary](#summary)
    -   [Character encoding configuration summary chart](#summary-chart)
-   [Configuring the Character Encoding](#config-character-encoding)
    -   [Overview](#encoding-overview)
    -   [Requirements](#encoding-requirements)
    -   [Property settings](#encoding-settings)
    -   [Example](#encoding-example)
-   [Configuring the Character Set](#config-character-set)
    -   [Overview](#set-overview)
    -   [Property settings](#set-settings)
    -   [Example](#set-example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a>Introduction
### <a id="summary"></a>Character encoding configuration summary

The configuration of the encoding for `igQRCodeBarcode` is related to the ability of the control to encode the characters fed to its [data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data) property.

By default, if the Shift_JIS encoding has been loaded, the `igQRCodeBarcode` control uses the most efficient conversion of the respective data into a binary string and, in the contrary case, the data is encoded at 8 bits per character.

The default character set the `igQRCodeBarcode` control is preconfigured to UTF-8. If, however, ISO 8859-1 character set has been loaded instead, it will be used as the default one.

### <a id="summary-chart"></a>Character encoding configuration summary chart

The following table explains briefly the configurable aspects of `igQRCodeBarcode` control’s character encoding and maps them to properties that configure them.

Configurable aspect|Details|Properties
---|---|---
[The character encoding mode](#config-character-encoding)|You can specify what encoding mode to use depending on the type data that needs to be encoded.|<ul><li>[encodingMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:encodingMode)</li></ul>
[The character set](#config-character-set)|The `igQRCodeBarcode` control allows for encoding data from different character sets.|<ul><li>[eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber)</li></ul>



## <a id="config-character-encoding"></a>Configuring the Character Encoding
### <a id="encoding-overview"></a>Overview

The `igQRCodeBarcode` is capable of encoding large numbers of characters, using compaction, depending on the types of the data characters. It can also encode JIS Kanji characters by setting `encodingMode` to Kanji (only Kanji characters are encoded).

In order to ensure minimum size of the files carrying the encodings logic, the default value of the `encodingMode` resolves to undefined if the Shift_JIS encoding has been loaded, and to byte otherwise.

### <a id="encoding-requirements"></a>Requirements

For the `igQRCodeBarcode` control to operate properly, the respective character encoding file(s) for the character sets in use are required and must be loaded to the application. This means loading either the file containing all encodings or just the files for the individual encodings to be used. The alternative is as follows:

-   The `infragistics.encoding.js` file. It contains the full sets of character encodings. This should be the preferred alternative if more than one encodings is going to be needed in the application, i.e. to generate barcodes using multiple changing sets.
-   The `infragistics.encoding.core.js` and the `infragistics.encoding_<encoding-name>.js` file. The latter contains only the `<encoding-name>` encoding. Several `infragistics.encoding_<encoding-name>.js` files can be included to support multiple languages. This alternative is recommended if no other encodings will be used because of the smaller file size.

1.  The desired encoding files can be found at the following location under the %%ProductName%%™ package folder structure:

    <IG JS root>/modules/encoding

### <a id="encoding-settings"></a>Property settings

The following table explains how to set the character encoding mode for the input data depending on the data type.

In order to configure:|Use this property:|And set it to:
---|---|---
Automatic recognition of the optimal encoding mode for the different sequences of data (if there are such)|[encodingMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:encodingMode)|undefined
Encoding of data from decimal digit set (0-9)|encodingMode|numeric
Encoding of data from a set of 45 characters – digits (0-9), upper case letters (A-Z), and nine other characters (space $ % * + _ . / : ).|encodingMode|alphanumeric
Encoding of 8-bits data (8 bits per character) encodingMode byte. Encoding of Kanji characters in accordance with the Shift JIS system|encodingMode|kanji



2.  For details on the different encoding modes, refer to the [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html) topic.

### <a id="encoding-example"></a>Example

In order to use the Kanji mode, the Shift_JIS encoding should be loaded.

The screenshot below demonstrates how the `igQRCodeBarcode` control looks as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“200px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“200px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“花"
[encodingMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:encodingMode)|“kanji”


![](images/igQRCodeBarcode_Configuring_the_Character_Encoding_%28igQRCodeBarcode%29_1.png)

Following is the code that implements this example.

**In HTML:**

```html
<html>
<head>
      <link rel="stylesheet" href="../../themes/smoothness/jquery-ui.css"/>      
      <script type="text/javascript" src="../../js/jquery.min.js"></script>
      <script type="text/javascript" src="../../js/jquery-ui.js"></script>
      
      <!-- QR Code Barcode Specific JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.util.js"></script>
      <script src="../../igniteui/js/modules/infragistics.dv.simple.core.js"></script>
      <script src="../../igniteui/js/modules/encoding/infragistics.encoding.core.js"></script>
      <script src="../../igniteui/js/modules/encoding/infragistics.encoding_shift_jis.js"></script>
      <script src="../../igniteui/js/modules/infragistics.barcode_qrcodebarcode.js"></script>
      <script src="../../igniteui/js/modules/infragistics.ui.barcode.js"></script>
      
      <script type="text/jscript">
        $(function () {                        
                  $("#barcode").igQRCodeBarcode({
                        width: "200px",
                        height: "200px",
                        data: "花",
                        encodingMode:"kanji"
                   }); 
            });
    </script>
</head>
<body>
      <div id="barcode"></div>
</body>
</html>
```



## <a id="config-character-set"></a>Configuring the Character Set
### <a id="set-overview"></a>Overview

The `igQRCodeBarcode` control has a built-in support for encoding data from character sets other than the default one. This support is managed by setting the Extended Channel Interpretation (ECI) number represented by the [eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber) property.

In order to ensure minimum size of the files carrying the encodings logic, the default value of eciNumber resolves to *3* which represents the ISO-8859-1 character set (if this set has been loaded) and to 26 which represents the UTF-8 character set (if the ISO-8859-1 character set hasn’t been loaded).

### ECI numbers reference chart

The ECI numbers supported by the igQRCodeBarcode control and the ISO character sets they correspond to are listed in the table below:

ECI Number|ISO Character Set
---|---
0|CP 437
1|ISO-8859-1
2|CP 437
3|ISO-8859-1
4|ISO-8859-2
5|ISO-8859-3
6|ISO-8859-4
7|ISO-8859-5
8|ISO-8859-6
9|ISO-8859-7
10|ISO-8859-8
11|ISO-8859-9
13|ISO-8859-11
15|ISO-8859-13
17|ISO-8859-15
20|Shift JIS
21|Windows-1250
22|Windows-1251
23|Windows-1252
24|Windows-1256
25|UTF-16
26|UTF-8
27|ISO-646-US
28|Big5
29|GB 2312
30|KSC-5601



### <a id="set-settings"></a>Property settings

The following table maps the desired behavior to property settings.

In order to:| Use this property: |And set it to:
---|---|---
Specify the character set|[eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber)|The ECI number for the ISO character set you want to use
Encode the number of the ISO character set in the barcode|[eciHeaderDisplayMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciHeaderDisplayMode)|show
Omit the number of the ISO character set from the barcode|[eciHeaderDisplayMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciHeaderDisplayMode)|hide (default)


### <a id="set-example"></a>Example

Assuming that the data to be encoded is in Greek and the [eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber) to be used is 9 which corresponds to character set ISO/IEC 8859-7.

The screenshot below demonstrates how the `igQRCodeBarcode` control looks
as a result of the following settings:

Property|Value
---|---
[width](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:width)|“200px”
[height](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:height)|“200px”
[data](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:data)|“ΑΒΓΔΕ”
[eciNumber](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciNumber)|9
[eciHeaderDisplayMode](%%jQueryApiUrl%%/ui.igQRCodeBarcode#options:eciHeaderDisplayMode)|“show”

![](images/igQRCodeBarcode_Configuring_the_Character_Encoding_%28igQRCodeBarcode%29_2.png)

Following is the code that implements this example.

**In HTML:**

```html
<html>
<head>
      <link rel="stylesheet" href="../../themes/smoothness/jquery-ui.css"/>
      <script type="text/javascript" src="../../js/jquery.min.js"></script>
      <script type="text/javascript" src="../../js/jquery-ui.js"></script>
      
      <!-- QR Code Barcode Specific JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.util.js"></script>
      <script src="../../igniteui/js/modules/infragistics.dv.simple.core.js"></script>
      <script src="../../igniteui/js/modules/encoding/infragistics.encoding.core.js"></script>
      <script src="../../igniteui/js/modules/encoding/infragistics.encoding_iso-8859-7.js"></script>
      <script src="../../igniteui/js/modules/infragistics.barcode_qrcodebarcode.js"></script>
      <script src="../../igniteui/js/modules/infragistics.ui.barcode.js"></script>
      
      <script type="text/jscript">
              $(function () {                        
                  $("#barcode").igQRCodeBarcode({
                        width: "200px",
                        height: "200px",
                        data: "ΑΒΓΔΕ",
                        eciNumber: 9,
                        eciHeaderDisplayMode: "show"
                 });
            });
          </script>
</head>
<body>
      <div id="barcode"></div>
</body>
</html>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Configuring the QR-Code-Specific Settings (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-QR-Code-Specific-Settings.html): This topic explains, with code examples, how to configure the settings of the igQRCodeBarcode control that are specific to the QR (Quick Response) barcode, like the error correction level, size version, FNC1 mode, and the application indicator.

- [Configuring the Dimensions of the QR Barcode (igQRCodeBarcode)](igQRCodeBarcode-Configuring-the-Dimensions.html): This topic demonstrates how to configure the `igQRCodeBarcode` control’s size and dimensional aspects, like the stretch and fill and the size of the minimum-size element.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Configuring the QR-Code-Specific Settings](%%SamplesUrl%%/barcode/configuring-the-qr-code-specific-settings): This sample demonstrates configuring the QR-code-specific settings.





 

 


