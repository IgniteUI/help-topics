<!--
|metadata|
{
    "fileName": "igbulletgraph-configuring-comparative-ranges",
    "controlName": "igBulletGraph",
    "tags": ["Charting","How Do I"]
}
|metadata|
-->

# Configuring Comparative Ranges (igBulletGraph)

## Topic Overview

#### Purpose

This topic explains, with code examples, how to configure ranges in the `igBulletGraph`™ control. This includes the number of ranges and their positions, lengths, widths, and formatting.

### Required background

The following topics are prerequisites to understanding this topic:

- [*igBulletGraph* Overview](igBulletGraph-Overview.html): This topic provides conceptual information about the `igBulletGraph` control including its main features, minimum requirements, and user functionality.

- [Adding *igBulletGraph*](igBulletGraph-Adding.html): This is a group of topics explaining how to add the `igBulletGraph` control to an HTML page and an ASP.NET MVC application.



### In this topic

This topic contains the following sections:

-   [**Configuring Comparative Ranges**](#configuring)
    -   [Comparative ranges configuration summary](#configuration-summary)
    -   [Comparative ranges configuration summary chart](#configuration-summary-chart)
    -   [Property settings](#property-settings)
    -   [Example](#example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="configuring"></a> Configuring Comparative Ranges

#### <a id="configuration-summary"></a> Comparative ranges configuration summary

The `igBulletGraph` control supports multiple comparative ranges via instantiating its ranges object.

![](images/igBulletGraph_Configuring_Comparative_Ranges_1.png)

Each range can be configured individually by specifying its starting and ending value (in the measures of the scale), fill color, and border thickness and color. The size of a comparative range in the across-the-scale is configurable by adjusting its inner and outer margins.

### <a id="configuration-summary-chart"></a> Comparative ranges configuration summary chart

The following table explains briefly the configurable aspects of `igBulletGraph` control’s comparative ranges and maps them to properties that configure them.

<table class="table table-bordered">
	<tbody>
		<tr>
            <th colspan="2">
Configurable aspects
			</th>
            <th>
Property
			</th>
            <th>
Default value
			</th>
        </tr>
        <tr>
            <th colspan="2">
**Number** (of ranges in the graph)
			</th>
            <td>
[ranges](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges)
			</td>
            <td>
Not set
			</td>
        </tr>
        <tr>
            <th rowspan="6" colspan="2">
**Length, width, and position**
			</th>
            <td>
[startValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.startValue)
			</td>
            <td>
Not set
			</td>
        </tr>
        <tr>
            <td>
[endValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.endValue)
			</td>
            <td>
Not set
			</td>
        </tr>
        <tr>
            <td>
[innerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerStartExtent)
			</td>
            <td>
Not set
			</td>
        </tr>
        <tr>
            <td>
[innerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerEndExtent)
			</td>

            <td>
Not set
			</td>
        </tr>

        <tr>
            <td>
[outerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerStartExtent)
			</td>

            <td>
Not set
			</td>
        </tr>
        <tr>
            <td>
[outerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerEndExtent)
			</td>
            <td>
Not set
			</td>
        </tr>
        <tr>
            <th rowspan="3">
**Look-and-feel**
			</th>
            <th>
Fill color
			</th>
            <td>
[brush](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.brush)
			</td>

            <td>
Defined in the default theme
			</td>
        </tr>

        <tr>
            <th>
Border color
			</th>
            <td>
[outline](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outline)
			</td>
            <td>
Defined in the default theme
			</td>
        </tr>
        <tr>
            <th>
Border thickness
			</th>
            <td>
[strokeThickness](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.strokeThickness)
			</td>
            <td>
*1.0*
			</td>
        </tr>
        <tr>
            <th colspan="2">
**Tooltip**
			</th>
            <td>
[rangeToolTipTemplate](%%jQueryApiUrl%%/ui.igBulletGraph#options:rangeToolTipTemplate)
			</td>
            <td>
The start and end values of the range separated by a hyphen (-).
			</td>
        </tr>
    </tbody>
</table>

> **Note:** If you do not explicitly provide values for the `brush` and `outline` properties for each range, the values are retrieved from the values of *igBulletGraph*’s `rangeBrushes` and `rangeOutlines` objects. They can also be used to predefine a set of brushes to be used consecutively for setting each range’s color or outline fill.

### <a id="property-settings"></a> Property settings

The following table maps the desired behavior to its respective property settings.

<table class="table table-bordered">
	<tbody>
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
        <tr>
            <th colspan="2">
**Aspect**
			</th>
            <th>
**Details**
			</th>
        </tr>
        <tr>
            <th colspan="2">
**Name**
			</th>
            <td>
A name for the range. Used for displaying in the tooltip.
			</td>
            <td>
[name](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.name)
			</td>
            <td>
A string expressing the name of the range
			</td>
        </tr>
        <tr>
            <th rowspan="2">
[]()**Position along the scale**
			</th>
            <th>
Range start
			</th>
            <td>
Position on the scale at which the range begins
			</td>
            <td>
[startValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.startValue)
			</td>
            <td>
The desired value (in the measures of the scale)
			</td>
        </tr>
        <tr>
            <th>
Range end
			</th>
            <td>
Position on the scale at which the range ends
			</td>
            <td>
[endValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.endValue)
			</td>
            <td>
The desired value (in the measures of the scale)
			</td>
        </tr>
        <tr>
            <th rowspan="4">
**Breadth and position**
                (across the scale)
			</th>
            <th>
Inner vertex of the starting edge of the range
			</th>
            <td>
The position of the inner vertex of the starting edge across the scale relative to the edge of the [Reserved area](igBulletGraph-Overview.html#logical-areas). (Inner vertex is the point of the starting edge
                that is the closest to the edge of the Reserved area.)
			</td>
            <td>
[innerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerStartExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the [Graph area](igBulletGraph-Overview.html#logical-areas) depending on the orientation (horizontal / vertical) presented as a fraction of 1 (e.g.
                *0.2*)
			</td>
        </tr>
        <tr>
            <th>
Inner vertex of the ending edge of the range
			</th>
            <td>
The position of the inner vertex of the ending edge across the scale relative to the edge of the Reserved area
			</td>
            <td>
[innerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerEndExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the Graph area depending on the orientation (horizontal / vertical) presented as a fraction of 1 (e.g. *0.3*)
			</td>
        </tr>
        <tr>
            <th>
Outer vertex of the starting edge of the range
			</th>
            <td>
The position of the outer vertex of the starting edge across the scale relative to the edge of the Reserved area. (Outer vertex is the point of the starting edge that is the closest to the edge of the Reserved area)
			</td>
            <td>
[outerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerStartExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the Graph area depending on the orientation (horizontal / vertical) presented as a fraction of 1 (e.g. *0.7*)
			</td>
        </tr>
        <tr>
            <th>
Outer vertex of the ending edge of the range
			</th>
            <td>
The position of the outer vertex of the ending edge across the scale relative to the edge of the Reserved area
			</td>
            <td>
[outerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerEndExtent)
			</td>
            <td>
The desired value as a relative part of the height/width of the Graph area depending on the orientation (horizontal / vertical) presented as a fraction of 1 (e.g. *0.8*)
			</td>
        </tr>
        <tr>
            <th rowspan="3">
**Look-and-feel**
			</th>
            <th>
Fill color
			</th>
            <td>
Fill color of the range
			</td>
            <td>
[brush](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.brush)
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
Thickness of the range’s border
			</td>
            <td>
[strokeThickness](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.strokeThickness)
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
Color of the range’s border
			</td>
            <td>
[outline](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outline)
			</td>
            <td>
The desired color
			</td>
        </tr>
        <tr>
            <th colspan="2">
**Tooltip**
			</th>
            <td>
Content of the tooltip of the comparative range(s)
			</td>
            <td>
[rangeToolTipTemplate](%%jQueryApiUrl%%/ui.igBulletGraph#options:rangeToolTipTemplate)
			</td>
            <td>
The desired template(See [Configuring the Tooltips (*igBulletGraph*)](igBulletGraph-Configuring-the-Tooltips.html).)
			</td>
        </tr>
    </tbody>
</table>

### <a id="example"></a> Example

The screenshot below demonstrates how a comparative range added to the `igBulletGraph` looks as a result of the following settings:

Property | Value
---|---
[brush](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.brush) | “Green”
[name](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.name) | “range1”
[startValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.startValue) | “6”
[endValue](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.endValue) | “89”
[innerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerStartExtent) | “0.5”
[innerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.innerEndExtent) | “0.5”
[outerStartExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerStartExtent) | “0.8”
[outerEndExtent](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outerEndExtent) | “0.8”
[outline](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges.outline) | “Black”

![](images/igBulletGraph_Configuring_Comparative_Ranges_2.png)

Following is the code that implements this example.

**In JavaScript:**

```js
$(function () {
    $("#bulletgraph").igBulletGraph({
                width: "300",
                height: "100",
                ranges: [{
                     name: 'range1',
                     brush:'#008000',
                     startValue:"6",
                     endValue:"89",
                     innerStartExtent:"0.5",
                     innerEndExtent:"0.5",
                     outerStartExtent:"0.8",
                     outerEndExtent:"0.8"
                }]    });});
```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring the Scale (*igBulletGraph*)](igBulletGraph-Configuring-the-Scale.html): This topic explains, with examples, how to configure the scale of the `igBulletGraph` control. This includes positioning the scale inside the control and configuring the scale tick marks and labels.

- [Configuring the Performance Bar (*igBulletGraph*)](igBulletGraph-Configuring-the-Performance-Bar.html): This topic explains, with examples, how to configure the performance bar of the `igBulletGraph` control. This includes the value indicated by the bar, its width, position, and formatting.

- [Configuring the Comparative Marker (*igBulletGraph*)](igBulletGraph-Configuring-the-Comparative-Marker.html): This topic explains, with code examples, how to configure the comparative measure marker of the `igBulletGraph` control. This includes the marker’s value, width, and formatting.

- [Configuring the Background (*igBulletGraph*)](igBulletGraph-Configuring-the-Background.html): This topic explains, with code examples, how to configure a background for the bullet graph. This includes setting the background’s size, position, color, and border.

- [Configuring the Tooltips (*igBulletGraph*)](igBulletGraph-Configuring-the-Tooltips.html): This topic explains, with code examples, how to enable the tooltips in the `igBulletGraph` control and configure the delay with which they are displayed.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Range Settings](%%SamplesUrl%%/bullet-graph/range-settings): This sample demonstrates setting comparative ranges in the `igBulletGraph` control.





 

 


