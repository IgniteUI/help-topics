<!--
|metadata|
{
    "fileName": "igscroll-overview",
    "controlName": "igScroll",
    "tags": ["Configuration","igScroll"]
}
|metadata|
-->

# Configuring igScroll

## Purpose

This topic explains, with code examples, how to configure the [igScroll].

### In this topic

This topic contains the following sections:

- [Default configuration](#defaults)
- [Configuration Summary](#summary)
- [Related Content](#related)

## <a id="defaults"></a> Default configuration

This section lists the default igScroll settings that affect its display and scrolling behavior.

Property | Type | Default Value | Description
---|---|---|---
[scrollbarType](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarType)| string | "custom" | This option determines the type of scrollbars that will be displayed in the container. By default custom scrollbars are displayed. If you'd like to show the native scrollbars for the current environement set the option to "native".  If you'd like to hide the scrollbars set it to "none".
[alwaysVisible](%%jQueryApiUrl%%/ui.iggrid#options:alwaysVisible)| bool | false | This option determines whether the custom scrollbars should be always visible, regardless of the environment. By default the scrollbars hide when the user does not interact with the scrollable content or scrollbar. If you'd like the scrollbars to always be visible set this option to true. * Applicable only when scrollbarType is "custom". *
[wheelStep](%%jQueryApiUrl%%/ui.iggrid#options:wheelStep)| number | 50 | This option determines how many pixels will be scrolled when using mouse wheel once. *Applicable only for scrolling with no smoothing - [smoothing](%%jQueryApiUrl%%/ui.iggrid#options:smoothing) option should be  set to "false".*
[inertiaStep](%%jQueryApiUrl%%/ui.iggrid#options:inertiaStep) | number | 1 | This option determines the modifier how much the inertia will scroll on mobile devices. 
[inertiaDuration](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDuration) | number | 1 | This option determines the modifier for how long the inertia will scroll before stopping on mobile devices. If a negative value is set the scrolling will be inverted. Setting the value to 0 is equivalent to disabling inertia for mobile devices.
[swipeToleranceX](%%jQueryApiUrl%%/ui.iggrid#options:swipeToleranceX) | number | 30 | This option determines how much pixels of left/right deviation will be tolerated when you're swiping up/down. This ensures that when the user intends to scroll down/up but his gesture has a slight left/right deviation, the content will only scroll in the intended direction - up/down (without also scrolling left/right).
[inertiaDeltaY](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDeltaY) | number | 1.25 | This option determines how many times the vertical speed should be bigger than the horizontal one so the inertia proceeds only vertically without scrolling horizontally. 
[inertiaDeltaX](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDeltaX) | number | 2 | This option determines how many times the horizontal speed should be bigger than the vertical one so the inertia proceeds only horizontally without scrolling vertically. 

## <a id="summary"></a>Configuration Summary
The following table lists the configurable aspects of `igScroll`.

In order to configure: | Use these properties: | And set them to:
---|---|---
Smooth wheel scrolling - <br/> Behavior is similar to the scrolling behavior on Firefox when using mouse wheel.| [smoothing](%%jQueryApiUrl%%/ui.iggrid#options:smoothing) <br/> [smoothingStep](%%jQueryApiUrl%%/ui.iggrid#options:smoothingStep) <br/> [smoothingDuration](%%jQueryApiUrl%%/ui.iggrid#options:smoothingDuration)| true <br/> 1 <br/> 1
Scrolling multiple containers at once vertically| [syncedElemsV](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsV) |Array of jQuery elements that you want to be vertically synched with the current igScroll.  
Scrolling multiple containers at once horizontally| [syncedElemsH](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsH) |Array of jQuery elements that you want to be horizontally synched with the current igScroll.
Set custom horizontal scrollbar | [scrollbarH](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarH)| Element that should act as the horizontal scrollbar. <br/> Could be an external element with `overflow-x: auto` and content with width in order to display horizontal scrollbar. 
Set custom vertical scrollbar | [scrollbarV](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarV)| Element that should act as the vertical scrollbar.<br/> Could be an external element with `overflow-y: auto` and content with height in order to display vertical scrollbar. 
When two containers are synced, allow scrolling to happen only via the synced scroll container and disallow scrolling from the current one. <br/> This is useful in case when there’s custom logic behind the linked vertical scrollbar that scrolls the main content up/down like updating how much is showed after certain scrolling position. <br/> For example when implementing virtualization. | [scrollOnlyVBar](%%jQueryApiUrl%%/ui.iggrid#options:scrollOnlyVBar)/[scrollOnlyHBar](%%jQueryApiUrl%%/ui.iggrid#options:scrollOnlyHBar) | true
Set custom horizontal scrollbar parent for the horizontal/vertical scrollbars. <br/> Useful when you want to build a more custom DOM structure - for example in combination with the [modifyDOM](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsV) option set to false. | [scrollbarHParent](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarHParent)/ [scrollbarVParent](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarHParent) | Element that will act as the parent element of the scroll.

## <a id="related"></a> Related Content

### Topics
-   [igScroll Overview](igScroll-Overview.html)

### Samples
 

 


