<!--
|metadata|
{
    "fileName": "igqrcodebarcode-accessibility-compliance",
    "controlName": "igBarcode",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igQRCodeBarcode)

## Topic Overview
### Purpose

This topic explains the `igQRCodeBarcode`™ control's accessibility features and provides advice on how to achieve accessibility compliance for pages containing barcodes.

### Required background

The following topics are prerequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides an overall look at the `igQRCodeBarcode` control.

- [Adding igQRCodeBarcode](igQRCodeBarcode-Adding.html): This is a group of topics demonstrating how to add the `igQRCodeBarcode` control to an HTML page and to an ASP.NET MVC application.


## Accessibility Compliance Reference
### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the `igQRCodeBarcode` control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of `igQRCodeBarcode`.

Rules| Rule text| How we comply
---|---|---
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|By default, the coloring of the `igQRCodeBarcode` control is black and white (black bars on white background).
(d)|Documents shall be organized so they are readable without requiring an associated style sheet.|Data encoded by the `igQRCodeBarcode` control is readable even without an associated style sheet.
(l)|When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.|When the control's scripts are changing the page markup, the newly created content complies with the screen reader due to the attributes described in rule (c).


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information for the accessibility compliance of all controls in the Ignite UI product.





 

 


