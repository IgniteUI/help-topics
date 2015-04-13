<!--
|metadata|
{
    "fileName": "igdialog-pin",
    "controlName": "igDialog",
    "tags": ["API","How Do I"]
}
|metadata|
-->

# igDialog Pin

## Topic Overview

### Purpose

This topic demonstrates how to configure the `igDialog`™ so that it can be pinned and unpinned and how to perform these actions.

### Required background

The following topics are prerequisites to understanding this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.



### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Control Configuration Summary**](#configuration-summary)
-   [**Configuring Pin/Unpin**](#pin-unpin)
    -   [Property Settings](#pin-unpin-properties)
    -   [Example](#pin-unpin-example)
-   [**Pin on Minimized**](#pin-on-minimized)
    -   [Property Settings](#pin-on-minimized-properties)
    -   [Example](#pin-on-minimized-example)
-   [**Pin igDialog**](#pin)
    -   [Code](#pin-code)
    -   [Example](#pin-example)
-   [**Unpin igDialog**](#unpin)
    -   [Code](#unpin-code)
    -   [Example](#unpin-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a> Introduction

When the `igDialog` is pinned, then the whole control with its HTML content is moved to the original container and the dialog’s absolute position is removed. Pinned `igDialog` does not support modal and maximized states and it is not movable.

> **Note:** If the parent element of the original `igDialog` container is invisible, then when dialog is pinned it also becomes invisible.


## <a id="configuration-summary"></a> Control Configuration Summary

The following table lists the configurable aspects of the `igDialog` control. Additional details are available after the table.
<table class="table">
	<tbody>
		<tr>
			<th>
				Configurable aspects
			</th>

			<th>
				Details
			</th>

			<th>
				Properties and Methods
			</th>
		</tr>

		<tr>
			<td>
				Configuring pin/unpin
			</td>

			<td>
				The properties that need to be configured to allow pin and unpin of the *igDialog* using control UI.
			</td>

			<td>
				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igDialog#options:showPinButton" target="_blank">showPinButton</a></li>

					<li><a href="%%jQueryApiUrl%%/ui.igDialog#options:pinned" target="_blank">pinned</a></li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				Pin on minimized
			</td>

			<td>
				The property that allows you to configure the *igDialog* so that when the state is changed to minimized, it becomes pinned to its parent.
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.igDialog#options:pinOnMinimized" target="_blank">pinOnMinimized</a>
			</td>
		</tr>

		<tr>
			<td>
				Pin *igDialog*
			</td>

			<td>
				Method from *igDialog* API that allows pinning.
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.igDialog#methods:pin" target="_blank">pin()</a>
			</td>
		</tr>

		<tr>
			<td>
				Unpin *igDialog*
			</td>

			<td>
				Method from *igDialog* API that allows unpinning.
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.igDialog#methods:unpin" target="_blank">unpin()</a>
			</td>
		</tr>
	</tbody>
</table>

## <a id="pin-unpin"></a> Configuring Pin/Unpin

The table below demonstrates which properties need to be configured in order to pin the `igDialog` control. Setting [`showPinButton`](%%jQueryApiUrl%%/ui.igDialog#options:showPinButton) property will enable the pin icon in the header, while setting the [`pinned`](%%jQueryApiUrl%%/ui.igDialog#options:pinned) property will configure the initial state of the control.

### <a id="pin-unpin-properties"></a> Property Settings

The following table maps the desired functionality to property settings:

In order to: | Use this property: | And set it to:
--- | --- | ---
Show pin button | [showPinButton](%%jQueryApiUrl%%/ui.igDialog#options:showPinButton) | true
Pin the igDialog | [pinned](%%jQueryApiUrl%%/ui.igDialog#options) | true


### <a id="pin-unpin-example"></a> Example

The screenshot below demonstrates how the `igDialog` looks as a result of the settings above. The window will be pinned at the top left corner of its parent:

![](images/04_3_igDialog_Pin_1.png)



## <a id="pin-on-minimized"></a> Pin on Minimized

The `igDialog` is configured so that it will pin every time it is minimized. For the needs of this example, the `igDialog` is minimized when configured.

### <a id="pin-on-minimized-properties"></a> Property Settings

The following table maps the desired functionality to the property settings:

In order to: | Use this property: | And set it to:
--- | --- | ---
Pin on minimize | [pinOnMinimized](%%jQueryApiUrl%%/ui.igDialog#options:pinOnMinimized) | true
Minimize igDialog | [state](%%jQueryApiUrl%%/ui.igDialog#options:state) | “minimized”


### <a id="pin-on-minimized-example"></a> Example

The screenshot below demonstrate how the `igDialog` looks as a result of the settings above. The window will be minimized and pinned at the top left corner of its parent:

![](images/04_3_igDialog_Pin_2.png)



## <a id="pin"></a> Pin igDialog

As a result of the configuration from the previous paragraph, you will be able to pin the dialog window when the window is unpinned and by pressing the button at the top right corner of the header. If you have the [`showPinButton`](%%jQueryApiUrl%%/ui.igDialog#options:showPinButton) option disabled, then you can pin the control using its API.

### <a id="pin-code"></a> Code

The following code demonstrates how to pin the `igDialog` using its API:

**In JavaScript:**

```js
$('#igDialog).igDialog("pin");
```

### <a id="pin-example"></a> Example

The screenshot below shows you the position of the pin button:

![](images/04_3_igDialog_Pin_3.png)



## <a id="unpin"></a> Unpin igDialog

As a result of the configuration from the previous paragraph, you will be able to unpin the dialog window, when the window is pinned and by pressing the button at the top right corner of the header. If you have the [`showPinButton`](%%jQueryApiUrl%%/ui.igDialog#options:showPinButton) option disabled, then you can unpin the control using its API.

### <a id="unpin-code"></a> Code

The following code demonstrates how to unpin the `igDialog` using its API:

**In JavaScript:**

```js
$('#igDialog).igDialog("unpin");
```

### <a id="unpin-example"></a> Example

The screenshot below shows you the position of the unpin button:

![](images/04_3_igDialog_Pin_4.png)


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [Adding *igDialog*](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Icons](%%SamplesUrl%%/dialog-window/icons): The sample that shows you how to show `igDialog` icons.





 

 


