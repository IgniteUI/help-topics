<!--
|metadata|
{
    "fileName": "igradialmenu-user-interaction",
    "controlName": "igRadialMenu",
    "tags": ["Getting Started"]
}
|metadata|
-->

# User Interaction and Usability (igRadialMenu)

## Topic Overview

### Purpose

This topic explains what actions can be performed by the user.

### Required background

The following topics are prerequisites to understanding this topic:

- [igRadialMenu Features](igRadialMenu-Features.html): This topic explains the features supported by the control from developer perspective.

- [igRadialMenu Visual Elements](igRadialMenu-Visual-Elements.html): This topic provides an overview of the visual elements of the control.


### In this topic

This topic contains the following sections:

-   [User Interactions and Usability](#user-interaction)
-   [Gestures](#gestures)
-   [Related Content](#related-content)


## <a id="user-interaction"></a>User Interactions and Usability
### User interactions summary chart

The following table summarizes the user interaction capabilities of the `igRadialMenu` control.

The user can…| Using… | Details
---|---|---
Open the menu| <ul><li>Click on the center button</li></ul>|This will work only if the menu is closed
Close the menu|<ul><li>Click on the center button</li></ul>|This will work only if the root level items are displayed
Perform action|<ul><li>Click on the item’s area</li></ul>|The item should be enabled
Go to next level of sub-items|<ul><li>Click on the outer ring button</li></ul>|The selected item should have sub-items
Go to previous level of items|<ul><li>Click on the center button</li></ul>|If performed in the root level items, closes the `igRadialMenu`

## <a id="gestures"></a>Gestures

Since each item is arranged around a center button, only 1 item exists in any particular direction away from that center button and therefore the direction of a swipe originating from within the center button can be used to determine which item to invoke. This may even be done when the menu is collapsed so as users learn the layout/location of each item within the menu they may quickly choose an item using a swipe without even opening the menu.

To make it easier to determine which item will be triggered by the swipe, a tooltip for the item is displayed while the swipe is in progress. The tooltip is dismissed after a short delay once the item is triggered.

Once the swipe is in progress, one may drag the pointer beyond the bounds of the menu and the gesture can still trigger an item. Once the pointer is dragged approximately twice the diameter of the radial menu displays the items as disabled and will not trigger the gesture. Dragging the pointer back, closer to the items, re-enables it.

Also, once the pointer leaves the bounds of the center button the button will be treated/displayed as disabled for the duration of that swipe/drag. This is done to allow the swipe operation to be aborted but not cause a click of the center button (i.e. not collapse or navigate back up the menu items) when the user drags the pointer back over the center in case they didn’t mean to invoke an action.

Swiping towards an item that contains child/sub items will automatically drill into that item and the menu will be updated to display the sub-items of that item. Swiping when the menu is collapsed will only trigger the action for the root level items and won’t drill into the sub-items.



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Items/Sub-Items Configuration Overview](igRadialMenu-Items-Sub-Items-Configuration-Overview.html): This topic explains the menu items and their configuration properties in general.





 

 


