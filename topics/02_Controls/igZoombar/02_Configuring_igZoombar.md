<!--
|metadata|
{
    "fileName": "configuring-igzoombar",
    "controlName": "igZoombar",
    "tags": ["API","Charting","Data Presentation","How Do I"]
}
|metadata|
-->

# Configuring igZoombar

## Topic Overview
### Purpose

This topic explains, with code examples, how to configure the zoom action and the zoom window of the `igZoombar`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igZoombar Overview](igZoombar-Overview.html): This topic provides conceptual information about the `igZoombar` control and the functionalities it provides including the supported user interactions and some configuration basics.

- [Adding igZoombar](Adding-igZoombar.html): This topic explains, with code examples, how to add the `igZoombar` control to an HTML page and an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [**igZoombar Default Configuration**](#default-config)
    -   [igZoombar default configuration summary](#config-summary)
    -   [igZoombar default configuration summary chart](#config-summary-chart)
-   [**Configuring the Initial Zoom-Range Window Size and Position**](#config-windows-size-position)
    -   [Overview](#size-position-overview)
    -   [Property settings](#size-position-settings)
    -   [Example](#size-position-example)
-   [**Configuring the Minimum Zoom-Range Window Size**](#min-zoom-windows-size)
    -   [Overview](#min-zoom-overview)
    -   [Property settings](#min-zoom-settings)
    -   [Example](#min-zoom-example)
-   [**Configuring the Refresh Mode**](#config-refresh-mode)
    -   [Overview](#refresh-mode-overview)
    -   [Property settings](#refresh-mode-settings)
    -   [Example](#refresh-mode-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="default-config"></a>igZoombar Default Configuration
### igZoombar default configuration summary

By default, the zoom-range window is positioned at the center of the `igZoombar` control and spans over 30 percent of its total breadth (= 100%). The zoom-range window can be sized down to 5 percent of the control’s total breadth. The default refresh mode is Immediate.

### igZoombar default configuration summary chart

The following table lists the `igZoombar` properties and their settings that form the default configuration of the control.

Property | Type | Default Value | Description
---|---|---|---
[defaultZoomWindow.left](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.left)| number | *35* |The starting (left) edge of the zoom-range window is placed at 35 percent of the total breadth of the `igZoombar` control, counted from its starting (left) edge.
[defaultZoomWindow.width](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.width) | number |*30* |The width of the zoom-range window is set to 30 percent of the total breadth of the `igZoombar` control.
[zoomWindowMinWidth](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMinWidth) | number | *5* |The zoom-range window can be sized down by the user to 5 percent of the control’s total breadth.
[zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction) | string |*“immediate”* |The default refresh mode is Immediate.


## <a id="config-summary"></a>igZoombar Configuration Summary
### <a id="config-summary-chart"></a>igZoombar configuration summary chart

The following table lists the configurable aspects of `igZoombar`. Further details on most of them are available after the table.

<table class="table">
	<thead>
		<tr>
            <th>
Configurable aspect
			</th>

            <th>
Details
			</th>

            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
Initial zoom-range window size and position
			</td>

            <td>
The initial breadth and position of the zoom-range window can be configured.
			</td>

            <td>
                <ul>
                    <li>
[defaultZoomWindow.left](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.left)
					</li>

                    <li>
[defaultZoomWindow.width](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.width)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Minimum zoom-range window size
			</td>

            <td>
The minimum breadth of the zoom-range window is a size limit under which users cannot shrink the window any further. This minimum size is configurable.
			</td>

            <td>
                <ul>
                    <li>
[zoomWindowMinWidth](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMinWidth)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Refresh upon zoom interaction
			</td>

            <td>
                The igZoombar control can be configured to one of the following refresh modes based on how the control responds to zoom interactions performed by the user:

                <ul>
                    <li>
**Immediate** (default) – the zoom effect is applied without any delay as the user interacts with the igZoombar control
					</li>

                    <li>
**Deferred** – the zoom effect is delayed until the user finishes their interaction
					</li>
                </ul>
            </td>

            <td>
                <ul>
                    <li>
[zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Movement step of the zoom-range window
			</td>

            <td>
The step, with which the zoom-range window shifts upon clicking/tapping the navigation buttons on the scrollbar or pressing the Left/Right arrow keys on the keyboard, is configurable.
			</td>

            <td>
                <ul>
                    <li>
[zoomWindowMoveDistance](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMoveDistance)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>





## <a id="config-windows-size-position"></a>Configuring the Initial Zoom-Range Window Size and Position
### <a id="size-position-overview"></a>Overview

By default, the zoom-range window is positioned at 35 percent of the total width of the `igZoombar` control counted from its starting (left) edge, and its breadth is set to 30 percent of the total width of control. This effectively places the zoom-range window in the center of the available scrollable range.

You can change the breadth of the window and position anywhere within the range.

### <a id="size-position-settings"></a>Property settings

The following table maps the desired configuration to property settings. All properties as set as a percentage of the total width of the control, counted from its starting (left) edge.

In order to configure: | Use this property: | And set it to:
---|---|---
The position of the starting (left) edge of the zoom-range window |[defaultZoomWindow.left](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.left)|The desired percentage number
The breadth of the zoom-range window|[defaultZoomWindow.width](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.width)|The desired percentage number



### <a id="size-position-example"></a>Example

The code below demonstrates setting the zoom-range window to the utmost-right position on the range upon the initialization of the `igZoombar` control as a result of the following settings:

Property | Value
---|---
[defaultZoomWindow.left](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.left)|70
[defaultZoomWindow.width](%%jQueryApiUrl%%/ui.igzoombar#options:defaultZoomWindow.width)|30


**In JavaScript:**

```js
$("#zoom").igZoombar({ 
	defaultZoomWindow: {
	        left: 70,
	        width: 30
	  }
});
```



## <a id="min-zoom-windows-size"></a>Configuring the Minimum Zoom-Range Window Size
### <a id="min-zoom-overview"></a>Overview

The minimum breadth of the zoom-range window is a size limit under which users cannot shrink (zoom in) the window any further. This limit prevents conflicts in case the range-based control with which `igZoombar` is integrated has lower zooming threshold than `igZoombar`. Setting the minimum breadth of the zoom-range window constrains the user from crossing that threshold.

This minimum breadth of the zoom-range window is configurable. By default, it is set to 5 percent of the total breadth of the `igZoombar` control.

### <a id="min-zoom-settings"></a>Property settings

The following table maps the desired configuration to the property settings that manage it.

In order to configure: | Use these properties: | And set it to:
---|---|---
The minimum size of the zoom-range window | [zoomWindowMinWidth](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMinWidth) |The desired number as a percentage of the total width of the control, counted from its starting (left) edge



### <a id="min-zoom-example"></a>Example

The code below demonstrates setting the minimum breadth of the zoom-range window width to 10 percent of the total width of the `igZoombar` control, counted from its starting (left) edge:

Property | Value
---|---
[zoomWindowMinWidth](%%jQueryApiUrl%%/ui.igzoombar#options:zoomWindowMinWidth)|10



**In JavaScript:**

```js
$("#zoom").igZoombar({ 
      zoomWindowMinWidth: 10
});
```



## <a id="config-refresh-mode"></a>Configuring the Refresh Mode
### <a id="refresh-mode-overview"></a>Overview

The Refresh mode controls the refresh action of the component to which `igZoombar` is attached. The `igZoombar` control can be configured to one of the following refresh modes based on how the control responds to zoom interactions performed by the user:

-   Immediate (default) – the zoom effect is applied without any delay as the user interacts with the `igZoombar` control
-   Deferred – the zoom effect is delayed until the user finishes their interaction. You may need to configure `igZoombar` to this mode when the control operates in a data-intensive environment and the immediate refresh might operate with unacceptable latency or stall the application.

The Refresh mode is configured with the [zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction) property.

### <a id="refresh-mode-settings"></a>Property settings

The following table maps the desired configuration to property settings.

In order to configure the Refresh mode to: | Use these properties: |And set it to: 
---|---|---
Deferred | [zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction) |“deferred”
Immediate | [zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction) | “immediate”


### <a id="refresh-mode-example"></a>Example

The code below demonstrates configuring the Refresh mode of the `igZoombar` control to Deferred:

Property | Value
---|---
[zoomAction](%%jQueryApiUrl%%/ui.igzoombar#options:zoomAction) | “deferred”



**In JavaScript:**

```js
$("#zoom").igZoombar({ 
      zoomAction: "deferred"
});
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance (igZoombar)](igZoombar-Accessibility-Compliance.html): This topic explains the accessibility features of the `igZoombar` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igZoombar)](igZoombar-Known-Issues-And-Limitations.html): This topic describes the known issues and limitations of the `igZoombar` control and the available workarounds.

- [jQuery and ASP.NET MVC Helper API Links (igZoombar)](igZoombar-ASP-NET-MVC-Helper-API.html): This topic provides links to the API reference documentation about the `igZoombar` control and the ASP.NET MVC Helper for it.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Basic Zoombar](%%SamplesUrl%%/zoombar/financial-chart): This sample demonstrates integrating `igZoombar` in an `igDataChart` control showing financial data.





 

 


