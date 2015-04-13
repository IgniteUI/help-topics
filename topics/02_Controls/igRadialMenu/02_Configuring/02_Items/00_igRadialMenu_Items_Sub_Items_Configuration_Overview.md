<!--
|metadata|
{
    "fileName": "igradialmenu-items-sub-items-configuration-overview",
    "controlName": "igRadialMenu",
    "tags": ["How Do I","Layouts","Tips and Tricks"]
}
|metadata|
-->

# Items/Sub-Items Configuration Overview (igRadialMenu)

## Topic Overview
### Purpose

This topic explains the menu items and their configuration properties in general.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialMenu Features](igRadialMenu-Features.html): This topic explains the features supported by the control from developer perspective.

- [igRadialMenu Visual Elements](igRadialMenu-Visual-Elements.html): This topic provides an overview of the visual elements of the control.

- [igRadialMenu Configuration Overview](igRadialMenu-Configuration-Overview.html): This topic explains how to configure the `igRadialMenu`.

### In this topic

This topic contains the following sections:

-   [Menu Items Configuration Summary](#configuration-summary)
-   [Related Content](#related-content)

## <a id="configuration-summary"></a>Menu Items Configuration Summary
### Menu Items configuration summary chart

The `igRadialMenu` control supports several item types, whose common configurable options are listed in the following table.

Configurable aspect| Details| Options
---|---|---
Menu item index| Specifies the location of a menu item.<br>**Note:** If you do not specify the item’s index the items will be rendered in the order they are defined.|`wedgeIndex`
Menu item span|Specifies how many wedges a menu item should span.|`wedgeSpan`
Recent item|Holds a reference to the last selected Sub-Item. Thus allowing automatic alignment (rotate) Sub-Items functionality.|`recentItem`
Automatic align (rotate) sub-items|Specifies whether an item’s Sub-Items automatically rotate so that the recently selected item matches its position with its parent item.For example for a button item, the item specified in the `recentItem` property will be aligned. For a color item or color well the child color well whose color matches the color of the parent color well / color item will be used.|`autoRotateChildren`

## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Configuring Button Items](igRadialMenu-Configuring-Button-Items.html): This topic explains the `igRadialMenu`’s button items.

- [Configuring Numeric Items](igRadialMenu-Configuring-Numeric-Items.html): This topic explains the `igRadialMenu`’s numeric items.

- [Configuring Color Items](igRadialMenu-Configuring-Color-Items.html):This topic explains the `igRadialMenu`’s color items.



### Samples

The following samples provide additional information related to this topic.

- [Configure Items](%%SamplesUrl%%/radial-menu/configure-items): This sample demonstrates how to configure `igRadialMenu` items’ parameters.

- [Numeric Items](%%SamplesUrl%%/radial-menu/numeric-items): This sample demonstrates how to define number items and gauge items.

- [Color Items](%%SamplesUrl%%/radial-menu/color-items): This sample demonstrates how to define and use color items and color wells to allow color drilldown selection.