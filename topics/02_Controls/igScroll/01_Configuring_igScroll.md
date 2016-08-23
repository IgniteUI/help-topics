<!--
|metadata|
{
    "fileName": "igscroll-configuring",
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
	- [Scrolling multiple containers at once vertically](#syncVertically)
	- [Scrolling multiple containers at once horizontally](#syncHorizontally)
	- [Set custom horizontal scrollbar](#customHorizontalScr)
	- [Set custom vertical scrollbar](#customVerticalScr)
	- [Set custom vertical scrollbar](#customVerticalScr)
- [Related Content](#related)

## <a id="defaults"></a> Default configuration

This section lists the default igScroll settings that affect its display and scrolling behavior.

Property | Type | Default Value | Description
---|---|---|---
[scrollbarType](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarType)| string | "custom" | This option determines the type of scrollbars that will be displayed in the container. By default custom scrollbars are displayed. If you'd like to show the native scrollbars for the current environement set the option to "native".  If you'd like to hide the scrollbars set it to "none".
[alwaysVisible](%%jQueryApiUrl%%/ui.iggrid#options:alwaysVisible)| bool | false | This option determines whether the custom scrollbars should be always visible, regardless of the environment. By default the scrollbars hide when the user does not interact with the scrollable content or scrollbar. If you'd like the scrollbars to always be visible set this option to true. * Applicable only when scrollbarType is "custom". *
[wheelStep](%%jQueryApiUrl%%/ui.iggrid#options:wheelStep)| number | 50 | This option determines how many pixels will be scrolled when using mouse wheel once. *Applicable only for scrolling with no smoothing - [smoothing](%%jQueryApiUrl%%/ui.iggrid#options:smoothing) option should be  set to "false".*
[inertiaStep](%%jQueryApiUrl%%/ui.iggrid#options:inertiaStep) | number | 1 | This option determines the modifier how much the inertia will scroll on mobile devices. If a negative value is set the scrolling will be inverted.
[inertiaDuration](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDuration) | number | 1 | This option determines the modifier for how long the inertia will scroll before stopping on mobile devices. Setting the value to 0 will disable inertia for mobile devices.
[swipeToleranceX](%%jQueryApiUrl%%/ui.iggrid#options:swipeToleranceX) | number | 30 | This option determines how much pixels of left/right deviation will be tolerated when you're swiping up/down. This ensures that when the user intends to scroll down/up but his gesture has a slight left/right deviation, the content will only scroll in the intended direction - up/down (without also scrolling left/right).
[inertiaDeltaY](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDeltaY) | number | 1.25 | This option determines how many times the vertical speed should be bigger than the horizontal one so the inertia proceeds only vertically without scrolling horizontally. 
[inertiaDeltaX](%%jQueryApiUrl%%/ui.iggrid#options:inertiaDeltaX) | number | 2 | This option determines how many times the horizontal speed should be bigger than the vertical one so the inertia proceeds only horizontally without scrolling vertically. 

## <a id="summary"></a>Configuration Summary
The following table lists the configurable aspects of `igScroll`.

In order to configure: | Use these properties: | And set them to:
---|---|---
Smooth wheel scrolling - <br/> Behavior is similar to the scrolling behavior on Firefox when using mouse wheel.| [smoothing](%%jQueryApiUrl%%/ui.iggrid#options:smoothing) <br/> [smoothingStep](%%jQueryApiUrl%%/ui.iggrid#options:smoothingStep) <br/> [smoothingDuration](%%jQueryApiUrl%%/ui.iggrid#options:smoothingDuration)| true <br/> 1 <br/> 1
[Scrolling multiple containers at once vertically](#syncVertically)| [syncedElemsV](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsV) |Array of jQuery elements that you want to be vertically synched with the current igScroll.  
[Scrolling multiple containers at once horizontally](#syncHorizontally)| [syncedElemsH](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsH) |Array of jQuery elements that you want to be horizontally synched with the current igScroll.
[Set custom horizontal scrollbar](#customHorizontalScr) | [scrollbarH](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarH)| Element that should act as the horizontal scrollbar. <br/> Could be an external element with `overflow-x: auto` and content with width in order to display horizontal scrollbar. 
[Set custom vertical scrollbar](#customVerticalScr) | [scrollbarV](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarV)| Element that should act as the vertical scrollbar.<br/> Could be an external element with `overflow-y: auto` and content with height in order to display vertical scrollbar. 
When two containers are synced, allow scrolling to happen only via the synced scroll container and disallow scrolling from the current one. <br/> This is useful in case when there’s custom logic behind the linked vertical scrollbar that scrolls the main content up/down like updating how much is showed after certain scrolling position. <br/> For example when implementing virtualization. | [scrollOnlyVBar](%%jQueryApiUrl%%/ui.iggrid#options:scrollOnlyVBar)/[scrollOnlyHBar](%%jQueryApiUrl%%/ui.iggrid#options:scrollOnlyHBar) | true
Set custom horizontal scrollbar parent for the horizontal/vertical scrollbars. <br/> Useful when you want to build a more custom DOM structure - for example in combination with the [modifyDOM](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsV) option set to false. | [scrollbarHParent](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarHParent)/ [scrollbarVParent](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarHParent) | Element that will act as the parent element of the scroll.

## <a id="syncVertically"></a> Scrolling multiple containers at once vertically

This section contains information on how to sync different containers vertically with a code example.

### Example

1) Define the igScroll DOM element.

	**In HTML:**

		```html
			 <div style="width: 33%; float:left; position: relative;">
				<div id='scrContainerLeft' style="height:200px; width:100%; overflow: hidden;">
					<div style="width: 500px;">
						...
					</div>
				</div>
			</div>
		```

2) Define the additional scrollable containers that will be synced to the igScroll.

	**In HTML:**
	
		```html
		 <div style="width: 33%; float:left; position: relative;">
			<div id='scrContainerMiddle' style="height:200px;  width:100%;  overflow: auto;">
				<div  style="height:600px;width: 500px; background-color: green;">
					...
				</div>
			</div>
		</div>
		<div style="width: 33%; float:right; position: relative;">
			<div id='scrContainerRight' style="height:200px;  width:100%; overflow: auto;">
				<div  style="height:600px;width: 500px; background-color: red;">
					...
				</div>
			</div>
		</div>
		```

3) Initialize an igScroll widget with the [syncedElemsV](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsV) option pointing to the additional scrollable elements.

	**In Javascript:**
	
	  ```js
	    $("#scrContainerLeft").igScroll({
			syncedElemsV: [$("#scrContainerMiddle"), $("#scrContainerRight")]
		});
	  ```
	  
## <a id="syncHorizontally"></a> Scrolling multiple containers at once horizontally

This section contains information on how to sync different containers horizontally with a code example.

### Example

Follow steps 1 and 2 for defining multiple scrollable containers in [Scrolling multiple containers at once vertically](#syncVertically).
And initialize an igScroll widget with the [syncedElemsH](%%jQueryApiUrl%%/ui.iggrid#options:syncedElemsH) option pointing to the additional scrollable elements.

	**In Javascript:**
	
	  ```js
	    $("#scrContainerLeft").igScroll({
			syncedElemsH: [$("#scrContainerMiddle"), $("#scrContainerRight")]
		});
	  ```
## <a id="customHorizontalScr"></a> Set custom horizontal scrollbar

This section contains information on how to set a custom element as the horizontal scrollbar of the igScroll with a code example.

### Example

1) Define the main target element.

	**In HTML:**

			```html
				<div style="width: 200px;">
					<div id='scrContainerLeft' style="height:200px; width:100%; overflow: hidden;">
						<div style="width: 500px;">
							...
						</div>
					</div>
				</div>
			```

2) Define the custom scrollbar element.

	**In HTML:**
	
		```html
			<div id='customHScroll' style='width:200px; overflow-x:auto;'>
				<div style='width:500px; height:1px;'></div>
			</div>
		```

3) Initialize an igScroll widget with the [scrollbarH](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarH) option pointing to the custom scrollbar element.
	  
	  **In Javascript:**
	  
	  ```js
		$("#scrContainerLeft").igScroll({
			scrollbarH: $("#customHScroll")
		});
	  ```

## <a id="customVerticalScr"></a> Set custom vertical scrollbar

This section contains information on how to set a custom element as the vertical scrollbar of the igScroll with a code example.
 ### Example

1) Define the main target element.

	**In HTML:**
			

				```html
				<div style="width: 200px; float:left; position:relative;">
					<div id='scrContainerLeft' style="height:200px; width:100%; overflow: hidden;">
						<div style="width: 500px;">
								...
							</div>
						</div>
					</div>
				```

2) Define the custom scrollbar element.

	**In HTML:**
		
		
			```html
				<div id='customVScroll' style='height:200px; overflow-y:auto; float:left; position:relative;'>
					<div style='width:20px; height:500px;'></div>
				</div>
			```

3) Initialize an igScroll widget with the [scrollbarH](%%jQueryApiUrl%%/ui.iggrid#options:scrollbarH) option pointing to the custom scrollbar element.
		  
	**In Javascript:**
			  
			  
			  ```js
				$("#scrContainerLeft").igScroll({
					scrollbarV: $("#customVScroll")
				});
			  ```

## <a id="related"></a> Related Content


### Topics
-   [igScroll Overview](igScroll-Overview.html)

### Samples
 

 


