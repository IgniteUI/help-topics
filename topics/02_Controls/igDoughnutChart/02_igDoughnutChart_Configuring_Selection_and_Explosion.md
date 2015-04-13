<!--
|metadata|
{
    "fileName": "igdoughnutchart-configuring-selection-and-explosion",
    "controlName": "Doughnut Chart",
    "tags": ["API","Charting","How Do I","Selection"]
}
|metadata|
-->

# Configuring Selection and Explosion (igDoughnutChart)

## Topic Overview

### Purpose


This topic explains how to configure selection and explosion for the slices of the [`igDoughnutChart`](%%jQueryApiUrl%%/ui.igDoughnutChart#options)™.

### Required background

The following concept is required for understanding this topic:

- [*igDoughnutChart* Overview](igDoughnutChart-Overview.html): This topic provides an overall look at the `igDoughnutChart` control.

- [Adding *igDoughnutChart*](igDoughnutChart-Adding.html): This is a group of topics demonstrating how to add the `igDoughnutChart` control to an HTML page and to an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [**Slice Selection Configuration Summary**](#selection-summary)
-   [**Enable/ Disable Slice Selection**](#toggle-selection)
    -   [Property settings](#toggle-selection-property)
-   [**Configuring the Look of the Selected Slices**](#selected-style)
    -   [Overview](#selected-style-overview)
    -   [Property settings](#selected-style-property)
    -   [Example](#selected-style-example)
-   [**Changing the Selection State upon Slice Click**](#change-selection-click)
    -   [Property settings](#change-selection-click-properties)
    -   [Example](#change-selection-click-example)
-   [**Slice Explosion Configuration Summary**](#slice-explosion-summary)
-   [**Enable/ Disable Slice Explosion**](#toggle-slice-explosion)
    -   [Property settings](#toggle-slice-explosion-property)
    -   [Example](#toggle-slice-explosion-example)
-   [**Changing the Explosion State upon Slice Click**](#slice-explosion-click)
    -   [Property settings](#slice-explosion-click-properties)
    -   [Example](#slice-explosion-click-example)
-   [**Related Content**](#related-content)
    -   [Samples](#samples)



## <a id="selection-summary"></a> Slice Selection Configuration Summary

The following table lists the configurable aspects of the `igDoughnutChart` control related to slice selection.

<table class="table">
	<tbody>
		<tr>
			<th>
				Configurable aspect
			</th>

			<th>
				Details
			</th>

			<th>
				Properties / Events
			</th>
		</tr>

		<tr>
			<td>
				Enable/disable slice selection
			</td>

			<td>
				You can enable or disable the ability to select slices or not.
			</td>

			<td><a href="%%jQueryApiUrl%%/ui.igDoughnutChart#options:allowSliceSelection" target="_blank">allowSliceSelection</a></td>
		</tr>

		<tr>
			<td>
				Configuring the look of the selected slices
			</td>

			<td>
				You can define how the selected slices will look by defining a `style` and assigning it to the <a href="%%jQueryApiUrl%%/ui.igDoughnutChart#options:selectedStyle" target="_blank">`selectedStyle`</a> property of the *igDoughnutChart* control.
			</td>

			<td>selectedStyle</td>
		</tr>

		<tr>
			<td>
				Changing the selection state upon slice click
			</td>

			<td>
				If you attach an event handler for the <a href="%%jQueryApiUrl%%/ui.igDoughnutChart#options:sliceClick" target="_blank">`sliceClick`</a> event, it supplies a reference to the clicked slice in the event arguments allowing you to modify its selection state.
			</td>

			<td>
				<ul>
					<li><a href="%%jQueryApiUrl%%/ui.igDoughnutChart#options" target="_blank">sliceClick</a></li>

					<li><a href="%%jQueryApiUrl%%/ui.igDoughnutChart#options" target="_blank">slice.isSelected</a></li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>

## <a id="toggle-selection"></a> Enable/ Disable Slice Selection

You can alternately enable (default setting) or disable slice selection in the `igDoughnutChart`.

> **Note:** You must perform all the remaining slice selection configurations in this topic with slice selection enabled.

### <a id="toggle-selection-property"></a> Property settings

The following table maps the desired behavior to property settings.

In order to: | Use this property: | And set it to:
--- | --- | ---
Enable/Disable slice selection | [`allowSliceSelection`](%%jQueryApiUrl%%/ui.igDoughnutChart#options:allowSliceSelection) | `true` or `false`



## <a id="selected-style"></a> Configuring the Look of the Selected Slices

### <a id="selected-style-overview"></a> Overview

The `igDoughnutChart` exposes a [`selectedStyle`](%%jQueryApiUrl%%/ui.igDoughnutChart#options:selectedStyle) property that determines the look of the selected slices. By default, no style is applied, and selecting a slice will not alter its appearance in any way. In order to apply your own style to the selected slices, you need to define a style first and then configure it as the value of the `selectedStyle` property. Apart from setting a style that would apply to the slices of all series, it is also possible to specify different styles for the different series by assigning a separate style to each series’ `selectedStyle` property.

### <a id="selected-style-property"></a> Property settings

The following table maps the desired behavior to property settings.

In order to: | Use this property: | And set it to:
--- | --- | ---
Configure the look for selected slices | [`selectedStyle`](%%jQueryApiUrl%%/ui.igDoughnutChart#options:selectedStyle) | A style.


### <a id="selected-style-example"></a> Example

The screenshot below demonstrates how the `igDoughnutChart` control looks as a result of the following settings:

Property | Value
--- | ---
[width](%%jQueryApiUrl%%/ui.igDoughnutChart#options:width) | “350”
[height](%%jQueryApiUrl%%/ui.igDoughnutChart#options:height) | “350”
[series](%%jQueryApiUrl%%/ui.igDoughnutChart#options:series) | { … selectedStyle: stroke: '#31FF1E' }, }


![](images/igDoughnutChart_Configuring_Selection_and_Explosion_%28igDoughnutChart%29_1.png)

Following is the code that implements this example.

**In HTML:**

```html
<html>
<head>
	…
    $(function () {
        var dc = $("#doughnutChart").igDoughnutChart({
			…
            series: [
	            {
		            name: "flatSeries",
		            valueMemberPath: "Index",
		            dataSource: data,
		            labelMemberPath: 'ProductCategory',
		            selectedStyle: { stroke: '#31FF1E' },
	            }
	        ]
	   });
	});
    </script>
</head>
<body>
    <!-- Target element for the igDoughnutChart -->
    <div id="doughnutChart"></div>
</body>
</html>
```



## <a id="change-selection-click"></a> Changing the Selection State upon Slice Click

The `igDoughnutChart` exposes a [`sliceClick`](%%jQueryApiUrl%%/ui.igDoughnutChart#options:sliceClick) event used to change the selected/unselected state of a slice.

### <a id="change-selection-click-properties"></a> Property settings

The following table maps the desired behavior to property settings.

In order to: | Use this event / property: | What to do:
--- | --- | ---
Set the `isSelected` property | [sliceClick](%%jQueryApiUrl%%/ui.igDoughnutChart#options:sliceClick) <br /> [isSelected](%%jQueryApiUrl%%/ui.igDoughnutChart#options:isSelected) | Set the `isSelected` property to `true` or `false`.



### <a id="change-selection-click-example"></a> Example

The following code example demonstrates how to toggle the selection state of slices upon click.

**In HTML:**

```html
<html>
<head>
	…
    $(function () {
            var dc = $("#doughnutChart").igDoughnutChart({
            width: 350,
            height: 350,
            sliceClick: function (event, ui) {
                ui.slice.isSelected = !ui.slice.isSelected;
            },
            series: [
	            {
					…
	            }
	        ]
	   });
	});
    </script>
</head>
<body>
    <!-- Target element for the igDoughnutChart -->
    <div id="doughnutChart"></div>
</body>
</html>
```



## <a id="slice-explosion-summary"></a> Slice Explosion Configuration Summary

The following table lists the configurable aspects of the `igDoughnutChart` control related to slice explosion.

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
Properties / Events
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
Enable/disable slice explosion
			</td>
            <td>
You can enable or disable the ability to explode slices.
			</td>
            <td>
[allowSliceExplosion](%%jQueryApiUrl%%/ui.igDoughnutChart#options:allowSliceExplosion)
			</td>
        </tr>

        <tr>
            <td>
Changing the exploded state of a slice upon slice click
			</td>
            <td>
If you attach an event handler for the [sliceClick](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick) event, a reference to the clicked slice is supplied in the event arguments and
                you can modify its exploded state.
			</td>
            <td>
                <ul>
                    <li>
`sliceClick`
					</li>
                    <li>
[slice.isExploded](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## <a id="toggle-slice-explosion"></a> Enable/ Disable Slice Explosion

You can enable (default setting) or disable slice explosion in the `igDoughnutChart`.

> **Note:** You must perform all the remaining slice explosion configurations in this topic with slice explosion enabled.

### <a id="toggle-slice-explosion-property"></a> Property settings

The following table maps the desired behavior to property settings.

In order to: | Use this property: | And set it to:
--- | --- | ---
Enable/Disable slice explosion | [allowSliceExplosion](%%jQueryApiUrl%%/ui.igDoughnutChart#options:allowSliceExplosion) | `true` or `false`



### <a id="toggle-slice-explosion-example"></a> Example

The following screenshot demonstrates an `igDoughnutChart` with 1 slice exploded.

![](images/igDoughnutChart_Configuring_Selection_and_Explosion_%28igDoughnutChart%29_2.png)



## <a id="slice-explosion-click"></a> Changing the Explosion State upon Slice Click

The `igDoughnutChart` exposes a [`sliceClick`](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick) event used to change whether a slice explodes.

### <a id="slice-explosion-click-properties"></a> Property settings

The following table maps the desired behavior to property settings.

In order to: | Use this event / property: | What to do:
--- | --- | ---
Set the [`isExploded`](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick) property | [sliceClick](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick) <br /> [isExploded](%%jQueryApiUrl%%/ui.igDoughnutChart#events:sliceClick) | Set the `isExploded` property to true or false



### <a id="slice-explosion-click-example"></a> Example

The following code example demonstrates how to toggle the explosion state of slices upon click.

**In HTML:**

```html
<html>
<head>
	…
	$(function () {
        var dc = $("#doughnutChart").igDoughnutChart({
            width: 350,
            height: 350,
            sliceClick: function (event, ui) {
                ui.slice.isExploded = !ui.slice.isExploded;
            },
            series: [
                {
					…
                }
            ]
   		});
	});
    </script>
</head>
<body>
    <!-- Target element for the igDoughnutChart -->
    <div id="doughnutChart"></div>
</body>
</html>
```


## <a id="related-content"></a> Related Content

### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Bind to Collection](%%SamplesUrl%%/doughnut-chart/bind-to-collection): This is an example of rendering the `igDoughnutChart` using the ASP.NET MVC helper. The helper binds to a collection of objects on the server and serializes the collection to JSON objects and renders the required `igDoughnutChart` HTML and JavaScript.





 

 


