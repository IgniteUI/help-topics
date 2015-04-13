<!--
|metadata|
{
    "fileName": "igradialmenu-configuration-overview",
    "controlName": "igRadialMenu",
    "tags": ["How Do I","Layouts"]
}
|metadata|
-->

# igRadialMenu Configuration Overview



## Topic Overview
### Purpose

This topic explains how to configure the [`igRadialMenu`](%%jQueryApiUrl%%/ui.igRadialMenu#options)™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialMenu Features](igRadialMenu-Features.html): This topic explains the features supported by the control from developer perspective.

- [igRadialMenu Visual Elements](igRadialMenu-Visual-Elements.html): This topic provides an overview of the visual elements of the control.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [igRadialMenu Configuration Summary](#config-summary)
-   [Related Content](#related-content)



## <a id="introduction"></a>Introduction
### igRadialMenu summary

The `igRadialMenu` control divides the items area into equally sized wedges displaying all of the menu items from a certain level arranged in a circle in the items area. Each menu item can occupy one or more wedges. If the sum of the wedges of all menu items is greater than the wedges count, the wedges size is recalculated so all menu items can fit in the items area. If the sum of the wedges of all menu items is less than the wedges count, a blank space will be added after the last menu item.



## <a id="config-summary"></a>igRadialMenu Configuration Summary

The following table briefly explains the main configurable aspects of the `igRadialMenu` control and maps them to the properties that configure them.

Configurable aspect| Details| Options
---|---|---
Open/Close| Set/Obtain the status of the `igRadialMenu`| `isOpen`
Minimum wedge count| Set/Obtain the minimum wedge count| `minWedgeCount`
Items’ start angle| Set/Obtain the start angle of the items in degree |`rotationInDegrees`
Items’ start angle as percentage of wedge|Set/Obtain the start angle of the items in percentage of the wedge width|`rotationAsPercentageOfWedge`
Wedge padding|Set/Obtain, in degrees, the amount of padding around each menu item|`wedgePaddingInDegrees`
Unbound items| Edit the unbound root level items collection| `items`


## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Items/Sub-Items Configuration Overview](igRadialMenu-Items-Sub-Items-Configuration-Overview.html)| This topic explains in general the menu items and their common configuration properties.

- [Configuring the Center Button](igRadialMenu-Configuring-Center-Button.html)| This topic explains how to configure the Center Button.

- [Configuring Tooltips](igRadialMenu-Configuring-Tooltips.html)| This topic explains how to configure the items’ tooltips.

### Samples

The following sample provides additional information related to this topic.

- [Configure Items](%%SamplesUrl%%/radial-menu/configure-items): This sample demonstrates how to configure `igRadialMenu` items’ parameters.





 

 


