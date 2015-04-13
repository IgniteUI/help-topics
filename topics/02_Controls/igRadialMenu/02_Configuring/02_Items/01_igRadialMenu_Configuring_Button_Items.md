<!--
|metadata|
{
    "fileName": "igradialmenu-configuring-button-items",
    "controlName": "igRadialMenu",
    "tags": ["How Do I","Layouts"]
}
|metadata|
-->

# Configuring Button Items (igRadialMenu)



## Topic Overview
### Purpose

This topic explains the [`igRadialMenu`](%%jQueryApiUrl%%/ui.igRadialMenu#options)™ button items.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialMenu Features](igRadialMenu-Features.html): This topic explains the features supported by the control from developer perspective.

- [igRadialMenu Visual Elements](igRadialMenu-Visual-Elements.html): This topic provides an overview of the visual elements of the control.

- [Items/Sub-Items Configuration Overview](igRadialMenu-Items-Sub-Items-Configuration-Overview.html): This topic explains in general the menu items and their common configuration properties.



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Button Items Configuration Summary](#button-items-config)
-   [Related Content](#related-content)



## <a id="introduction"></a>Introduction
### Button items summary

The `igRadialMenu`’s button items are ordinary items, which may be clicked to perform an action. The button items can include text and/or icons. Additionally, button items can have Sub-Items, and in this case the parent item will have an arrow button on the outer ring allowing the user to navigate the Sub-Items group.

You may configure button items as checkbox items, in which case an arc indicates their checked state is within the items area just inside the outer ring.

Button items can be configured as radio button items and there are two modes in which they can operate:

-   Radio button group with at least one checked item
-   Radio button group with no checked items

The following screenshot shows different button item types:

![](images/igRadialMenu_04.png)

1.  Plain button items
2.  Checkbox button item in checked state
3.  Arrows showing that these color items have Sub-Items
4.  Radio buttons group with the second choice checked



## <a id="button-items-config"></a>Button Items Configuration Summary
### Button items configuration summary chart

The following table briefly explains the main configurable aspects of the button items control and maps them to properties that configure them.

Configurable aspect| Details| Options
---|---|---
Header|Add, edit or delete text in the item|`header`
Icon|Add, edit or delete an icon in the item|`icon`
Adding unbound sub-items|Add, edit or delete unbound sub-items|`items`
Check Box|Configure the button item as a checkbox by setting the `CheckBehaviour` property to `CheckBox` and using the `IsChecked` property to set or obtain its state|<ul><li>checkBehavior</li><li>isChecked</li></ul>
Radio Button|Configure the button item as a radio button by setting the `CheckBehaviour` property to `RadioButton` (for a group with one checked item) or `RadioButtonAllowAllUp` (for a group which allows no checked items) and set a group name using the GroupName property to an equal value for all group members|<ul><li>`checkBehaviour`</li><li>`isChecked`</li><li>`groupName`</li></ul>
Events|You may configure the Click event to attach event handlers and perform actions when the user clicks on a particular button item. There are also events notifying you when a button has been checked or unchecked.|<ul><li>`click`</li><li>`checked`</li><li>`unchecked`</li></ul>


## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Configuring Numeric Items](igRadialMenu-Configuring-Numeric-Items.html):  This topic explains the `igRadialMenu`’s numeric items.

- [Configuring Color Items](igRadialMenu-Configuring-Color-Items.html): This topic explains the `igRadialMenu`’s color items.

### Samples

The following sample provides additional information related to this topic.

- [Button Items](%%SamplesUrl%%/radial-menu/button-items): This sample demonstrates how to define and configure button items.





 

 


