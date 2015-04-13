<!--
|metadata|
{
    "fileName": "radiobuttongroup-configuring",
    "controlName": "RadioButtonGroup",
    "tags": ["Editing","MVC"]
}
|metadata|
-->

# RadioButtonGroup Configuring


## Topic Overview
### Purpose

This topic contains the information and references needed in order to configure the `RadioButtonGroup` using the MVC wrapper.

### Required background

The following topics are prerequisites to understanding this topic:

- [RadioButtonGroup Overview](RadioButtonGroup-Overview.html): This topic contains information related to the `RadioButtonGroup` MVC wrappers.

### In this topic

This topic contains the following sections:

-   [**Control Configuration Summary**](#config-summary)
-   [**Horizontal RadioButtonGroup**](#horizontal-group)
    -   [Overview](#overview)
    -   [Property settings](#property-settings)
    -   [Code Example](#code-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="config-summary"></a>Control Configuration Summary

The following table lists the configurable aspects of the `RadioButtonGroup` MVC wrapper:

Configurable aspects | Details | Properties
---|---|---
Horizontal `RadioButtonGroup` | This sample will show you how to create a horizontal `RadioButtonGroup` | <ul><li>[Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Horizontal.html)</li></ul>


## <a id="horizontal-group"></a>Horizontal RadioButtonGroup
### <a id="overview"></a>Overview

The Horizontal `RadioButtonGroup` method allows you to define the group with a slightly different appearance than the default `RadioButtonGroup`. All of the radio buttons appear as real buttons in horizontal order, and if there is not enough space on the row to accommodate all of the buttons, the remaining buttons appear on the next row. The picture below shows an example of the horizontal `RadioButtonGroup`.

![](images/04_RadioButtonGroupConfiguring_1.png)

### <a id="property-settings"></a>Property settings

The following table maps the desired configuration to display horizontal `RadioButtonGroup`:

In order to: | Use this property: | And set it to:
---|---|---
Set the `RadioButtonGroup` Horizontal | [Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.RadioButtonGroupWrapper~Horizontal.html) | true


### <a id="code-example"></a>Code Example

Use the following code to display the buttons horizontally:

**In Razor:**

```csharp
@(
    Html.InfragisticsMobile()
    .RadioButtonGroup()
    .ID("rdbtngrp2")
    .Horizontal(true)
    .Mini(true)
    .SelectedIndex(1)
    .Items(item =>
    {
        item.RadioButton().ID("rdbtnKurt").Text("Kurt Vonnegut");
        item.RadioButton().ID("rdbtnCoelho").Text("Paolo Coelho"));
        item.RadioButton().ID("rdbtnPirsig").Text("Robert Pirsig");
    })
    .Render()
)
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic:

- [RadioButtonGroup Overview](RadioButtonGroup-Overview.html): This topic contains information related to the `RadioButtonGroup` MVC wrappers.

- [Adding RadioButtonGroup](Adding-RadioButtonGroup.html): This topic contains the information needed to enable the `RadioButtonGroup` using the Infragistics MVC Wrappers.

- [RadioButtonGroup Property Reference](RadioButtonGroup-Property-Reference.html): This topic provides reference information about the properties of the `RadioButtonGroup` MVC Wrapper.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-radiobutton-group/basic-usage): The sample demonstrates how the `RadioButtonGroup` renders both horizontal or vertical orientations.





 

 


