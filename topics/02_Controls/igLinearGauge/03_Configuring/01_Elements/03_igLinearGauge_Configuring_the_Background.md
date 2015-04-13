<!--
|metadata|
{
    "fileName": "iglineargauge-configuring-the-background",
    "controlName": "igLinearGauge",
    "tags": ["Charting","How Do I","Styling"]
}
|metadata|
-->

# Configuring the Background (igLinearGauge)



##Topic Overview


### Purpose

This topic explains, with code examples, how to configure a background for the linear gauge. This includes setting the background’s size, position, color, and border.

### Required background

The following topics are prerequisites to understanding this topic:

-	[igLinearGauge Overview](igLinearGauge-Overview.html): This topic provides conceptual information about the `igLinearGauge`™ control including its main features, minimum requirements, and user functionality.

-	[Adding igLinearGauge](igLinearGauge-Adding.html):This is a group of topics demonstrating how to add the `igLinearGauge` control to an HTML page and to an ASP.NET MVC application.


### In this topic

This topic contains the following sections:

-   [Configuring the Background](#configuring-background)
    -   [Background configuration summary](#background-config-summary)
    -   [Background configuration summary chart](#background-congic-chart)
    -   [Property settings](#property-settings)
    -   [Example](#example)
-   [Related Content](#related-content)
    -   [Topics](#topics)



##<a id=configuring-background""></a>Configuring the Background

### <a id="background-config-summary"></a>Background configuration summary

The background of the `igLinearGauge` control is configurable in terms of spread and position and look-and-feel (fill and border). The spread and position are configurable in the dimension across the scale (through the [backingInnerExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingInnerExtent) and [backingOuterExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOuterExtent) properties); along the scale, the background always spreads from one edge of the control to the other. The fill color and the border are managed by a set of properties available in the style template.

The following picture demonstrates a background color of a variety of orange and a cyan border with a thickness of 3 pixels. The background extent is made smaller by providing values for its [backingInnerExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingInnerExtent) and [backingOuterExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOuterExtent) properties.

![](../../images/igLinearGauge_Overview_12.png)

### <a id="background-congic-chart"></a>Background configuration summary chart

The following table explains briefly the configurable aspects of `igLinearGauge` control’s background and maps them to properties that configure them.

<table cellspacing="0" cellpadding="0" class="table">
	<tbody>
		<tr>
			<th colspan="2">Configurable aspects</th>

			<th>
				Property
			</th>

			<th>
				Default value
			</th>
		</tr>

		<tr>
			<th rowspan="2" colspan="2">Spread and position<br>
			(across the scale)</th>

			<td>
				<a href="%%jQueryApiUrl%%/ui.igLinearGauge#options:backingInnerExtent" target="_blank">backingInnerExtent</a>
			</td>

			<td>0</td>
		</tr>

		<tr>
			<td><a href="%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOuterExtent" target="_blank">backingOuterExtent</a></td>

			<td>1.0</td>
		</tr>

		<tr>
			<th rowspan="3">Look-and-feel</th>

			<th>
				Fill color
			</th>

			<td><a href="%%jQueryApiUrl%%/ui.igLinearGauge#options:backingBrush" target="_blank">backingBrush</a></td>

			<td>
				Defined in the default theme
			</td>
		</tr>

		<tr>
			<th>
				Border color
			</th>

			<td><a href="%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOutline" target="_blank">backingOutline</a></td>

			<td>
				Defined in the default theme
			</td>
		</tr>

		<tr>
			<th>
				Border thickness
			</th>

			<td><a href="%%jQueryApiUrl%%/ui.igLinearGauge#options:backingStrokeThickness" target="_blank">backingStrokeThickness</a></td>

			<td>2.0</td>
		</tr>
	</tbody>
</table>



### <a id="property-settings"></a>Property settings

The following table maps the desired behavior to its respective property settings.

<table class="table table-bordered">
	<thead>
		<tr>
            <th colspan="3">
In order to configure:
			</th>
            <th rowspan="2">
Use this property:
			</th>
            <th rowspan="2">
And set it to:
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <th colspan="2">
Aspect
			</th>
            <th>
Details
			</th>
        </tr>
        <tr>
            <th rowspan="2">
Spread and position
                (across the scale)
			</th>
            <th>
Bottom / left edge position
			</th>
            <td>
The position of lower edge of the background (at horizontal orientation) or the left edge (at vertical orientation) relative to the bottom edge of the [Graph area](igLinearGauge-Overview.html#graph-area) at horizontal orientation or to its left edge – at vertical orientation.
			</td>
            <td>
[backingInnerExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingInnerExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the Graph area (depending on the orientation) presented as a fraction of 1 (e.g. 0.2)
			</td>
        </tr>
        <tr>
            <th>
Top / right edge position
			</th>
            <td>
The position of top edge of the background at horizontal orientation or the right edge at vertical orientation relative to the lower edge of the Graph area at horizontal orientation or to its left edge – at vertical orientation.
			</td>
            <td>
[backingOuterExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOuterExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the Graph area (depending on the orientation) presented as a fraction of 1 (e.g. 0.2)
			</td>
        </tr>
        <tr>
            <th rowspan="3">
Look-and-feel
			</th>
            <th>
Fill color
			</th>
            <td>
Fill color of the background
			</td>
            <td>
[backingBrush](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingBrush)
			</td>
            <td>
The desired color
			</td>
        </tr>
        <tr>
            <th>
Border thickness
			</th>
            <td>
Border thickness of the background
			</td>
            <td>
[backingStrokeThickness](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingStrokeThickness)
			</td>
            <td>
The desired value in pixels
			</td>
        </tr>
        <tr>
            <th>
Border color
			</th>
            <td>
Border color of the background
			</td>
            <td>
[backingOutline](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOutline)
			</td>
            <td>
The desired color
			</td>
        </tr>
    </tbody>
</table>



### <a id="example"></a>Example

The screenshot below demonstrates how the `igLinearGauge` looks as a result of the following settings:

Property|Value
---|---
[backingBrush](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingBrush)|'#FFDAB9'
[backingOutline](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOutline)|'#00FFFF'
[backingStrokeThickness](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingStrokeThickness)|“3”
[backingInnerExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingInnerExtent)|“0.2”
[backingOuterExtent](%%jQueryApiUrl%%/ui.igLinearGauge#options:backingOuterExtent)|“0.7”

![](images/igLinearGauge_Configuring_the_Background_1.png)

Following is the code that implements this example.

**In JavaScript:**

 ```js
 $(function () {             
    $("#linearGauge").igLinearGauge({
        width: "300px",
        height: "70px",
        backingBrush:'#FFDAB9',
        backingOutline: '#00FFFF',
        backingStrokeThickness: "3",
        backingInnerExtent:"0.2",
        backingOuterExtent:"0.7"
  });
 ```

##<a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Configuring the Scale (igLinearGauge)](igLinearGauge-Configuring-the-Scale.html): This topic explains, with examples, how to configure the scale of the `igLinearGauge` control. This includes positioning the scale inside the control and configuring the scale tick marks and labels.

-	[Configuring the Needle (igLinearGauge)](igLinearGauge-Configuring-the-Needle.html): This topic explains, with examples, how to configure the needle of the `igLinearGauge` control. This includes the value indicated by the it, its width, position, and formatting.

-	[Configuring Comparative Ranges (igLinearGauge)](igLinearGauge-Configuring-Comparative-Ranges.html): This topic explains, with code examples, how to configure ranges in the `igLinearGauge` control. This includes the number of ranges and their positions, lengths, widths, and formatting.

-	[Configuring the Tooltips (igLinearGauge)](igLinearGauge-Configuring-the-Tooltips.html):This topic explains, with code examples, how to enable the topoltips in the `igLinearGauge` control and configure the delay with which they are displayed.





 

 


