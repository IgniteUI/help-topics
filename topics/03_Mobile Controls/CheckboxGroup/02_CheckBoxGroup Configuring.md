<!--
|metadata|
{
    "fileName": "checkboxgroup-configuring",
    "controlName": "CheckBoxGroup",
    "tags": ["Editing","How Do I","MVC"]
}
|metadata|
-->

# CheckBoxGroup Configuring

## Topic Overview

### Purpose

This topic contains the information and references needed to configure the `CheckBoxGroup` using the MVC wrapper.

### Required background

The following topics are prerequisites to understanding this topic:

- [*CheckBoxGroup* Overview](CheckBoxGroup-Overview.html): This topic contains information related to the `CheckBoxGroup` MVC wrapper.


### In this topic

This topic contains the following sections:

-   [Control Configuration Summary](#summary)
-   [Horizontal CheckBoxGroup](#horizontal)
-   [Related Content](#related-content)



## <a id="summary"></a> Control Configuration Summary
The following table lists the configurable aspects of the `CheckBoxGroup` MVC wrapper:

Configurable aspects | Details | Properties
----|----|----
Horizontal `CheckBoxGroup` | The [`Horizontal`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Horizontal.html) method is used to show `CheckBox` items in horizontal order. | [Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Horizontal.html)





## <a id="horizontal"></a> Horizontal CheckBoxGroup

The [`Horizontal`](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Horizontal.html) method is used to show check box items in horizontal order. This is helpful in cases when your `CheckBox` titles have short names and can be accommodated within one row. The following picture shows you how the horizontal `CheckBoxGroup` looks:

![](images/04_CheckBoxGroupConfiguring_1.png)

If the parent container width is not enough for all the `CheckBox` items, then the items will be shown on the next row, like as demonstrated in the next picture.

![](images/04_CheckBoxGroupConfiguring_2.png)

### Property settings

The following table maps the desired configuration to display horizontal a `CheckBoxGroup`:

In order to: | Use this property: | And set it to:
----|----|----
Set horizontal orientation for a `CheckBoxGroup` | [Horizontal](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.CheckBoxGroupWrapper~Horizontal.html) | true



### Code Example

**In Razor:**

```csharp
@(Html.InfragisticsMobile()
    .CheckBoxGroup()
    .ID("chkbxgrp1")
    .Items(item => {
        item.CheckBox().ID("chk1").Text("Kia");
        item.CheckBox().ID("chk2").Text("VW");
        item.CheckBox().ID("chk3").Text("Audi");
        item.CheckBox().ID("chk4").Text("Porche");
        item.CheckBox().ID("chk5").Text("Volvo");
    })
    .Horizontal(true)
    .Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [*CheckBoxGroup* Overview](CheckBoxGroup-Overview.html): This topic contains information related to the `CheckBoxGroup` MVC wrapper.

- [Adding *CheckBoxGroup*](Adding-CheckBoxGroup.html): This topic contains the information needed to enable the `CheckBoxGroup` using the Infragistics MVC Wrappers.

- [*CheckBoxGroup* Property Reference](CheckBoxGroup-Property-Reference.html):  This topic provides reference information about the properties of the `CheckBoxGroup` MVC Wrapper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-checkbox-group/basic-usage): This sample demonstrates usages of the `CheckBoxGroup` ASP.NET MVC helper.






 

 


