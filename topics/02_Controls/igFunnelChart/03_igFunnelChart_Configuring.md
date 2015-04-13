<!--
|metadata|
{
    "fileName": "igfunnelchart-configuring",
    "controlName": "igFunnelChart",
    "tags": ["Charting","Data Binding"]
}
|metadata|
-->

# Configuring igFunnelChart

## Topic Overview

### Purpose

This topic explains how to configure the visual features and behavior of the `igFunnelChart`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [*igFunnelChart* Overview](igFunnelChart-Overview.html): This topic provides conceptual information about the `igFunnelChart` control including its main features, minimum requirements, and user functionality.

- [Adding *igFunnelChart*](igFunnelChart-Adding.html): This topic demonstrates how to add the `igFunnelChart` control to an HTML page and bind it to data.

### In this topic

This topic contains the following sections:

-   [**igFunnelChart Configuration Overview**](#configuration-overview)
    -   [igFunnelChart features summary](#features-summary)
    -   [igFunnelChart configuration summary chart](#configuration-summary-chart)
    -   [igFunnelChart default configuration](#default-configuration)
    -   [Minimum requirements](#minimum-requirements)
-   [**Code Examples**](#examples-summary)
-   [**Code Example: Configuring an Inverted Funnel Chart**](#inverted)
-   [**Code Example: Configuring Weighted Slices**](#weighted)
-   [**Code Example: Configuring a Bezier-Curve Funnel Chart**](#bezier-curve)
-   [**Code Example: Enabling Slice Selection**](#slice-selection)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="configuration-overview"></a> *igFunnelChart* Configuration Overview

### <a id="features-summary"></a> *igFunnelChart* features summary

The purpose of the `igFunnelChart` control is to display values for a set of categories representing some aspect (for example, total inventory for categories of products or population for age groups in a country).

The configurable aspects of the `igFunnelChart` control are:

-   Funnel’s direction
-   Slices’ weight
-   Funnel’s shape
-   Slice selection
-   Label visibility
-   Outer label alignment
-   Tooltip look-and-feel
-   Animation speed

Each of these aspects is explained in the configuration summary chart below.

### <a id="configuration-summary-chart"></a> *igFunnelChart* configuration summary chart

The following table lists the configurable aspects of the `igFunnelChart` control.

<table  class="table table-striped">
	<tbody>
		<tr>
			<th>Configurable aspect</th>
			<th>Details</th>
			<th>JavaScript properties</th>
			<th>ASP.NET MVC properties</th>
		</tr>
		<tr>
			<td>Funnel's direction</td>
			<td>By default, the chart is rendered with the items listed in descending order based on their values value (highest value on top, lowest value at bottom).	igFunnelChart can be configured to display slices in reverse order.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:isInverted" target="_blank">isInverted</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~IsInverted.html">IsInverted()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Slices' weight</td>
			<td>By default, the funnel chart renders slices of varying height depending on their values. You can configure the heights to be uniform.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:funnelSliceDisplay" target="_blank">funnelSliceDisplay</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~FunnelSliceDisplay.html">FunnelSliceDisplay()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Funnel's shape</td>
			<td>igFunnelChart renders a shape based on either straight line or Bezier curve. If enabled, Bezier curved shapes require you to set the coordinates of the Bezier control points.	By default, the chart is rendered with straight line.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:useBezierCurve" target="_blank">useBezierCurve</a>
					</li>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:bezierPoints" target="_blank">bezierPoints</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~UseBezierCurve.html">UseBezierCurve()</a>
					</li>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~BezierPoints.html">BezierPoints()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Slice selection</td>
			<td>Slice selection is the capability for selecting individual slices. When a slice is selected, a corresponding event is fired. By default, slice selection is disabled.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:allowSliceSelection" target="_blank">allowSliceSelection</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~AllowSliceSelection.html">AllowSliceSelection()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Label visibility</td>
			<td>igFunnelChart renders labels inside slices (inner) and outside of (outer) slices and provides individual visibility control for both labels. By default, if the path of the inner label is defined, then the label will be visible. This is not valid for the outer label, even if its path has been defined.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:innerLabelVisibility" target="_blank">innerLabelVisibility</a>
					</li>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:outerLabelVisibility" target="_blank">outerLabelVisibility</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~InnerLabelVisibility.html">InnerLabelVisibility()</a>
					</li>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~OuterLabelVisibility.html">OuterLabelVisibility()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Outer label alignment</td>
			<td>You can position the outer labels on either the left or right side of the funnel chart. By default, the labels are positioned on the left of the funnel chart.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:outerLabelAlignment" target="_blank">outerLabelAlignment</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~OuterLabelAlignment.html">OuterLabelAlignment()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Tooltip look-and-feel</td>
			<td>You can define a template for rendering tooltips on the page. By default, there is no tooltip template define, so no tooltips are displayed.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:tooltipTemplate" target="_blank">tooltipTemplate</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChart`1~TooltipTemplate.html">TooltipTemplate()</a>
					</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Animation speed</td>
			<td>You can configure the speed at which igFunnelChart renders animation when visual elements of the funnel chart change. By default, the duration of the animation is 0 ms which means that animation is disabled.</td>
			<td>
				<ul>
					<li>
						<a href="%%jQueryApiUrl%%/ui.igfunnelchart#options:transitionDuration" target="_blank">transitionDuration</a>
					</li>
				</ul>
			</td>
			<td>
				<ul>
					<li>
						<a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.FunnelChartModel~TransitionDuration.html">TransitionDuration()</a>
					</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>


### <a id="default-configuration"></a> *igFunnelChart* default configuration

With its default settings, the `igFunnelChart` control renders a funnel chart with:

-   items listed in descending order
-   weighted slices (slices’ heights are proportional to their values)
-   straight lines shape
-   visible inline labels

and without:

-   visible outline labels
-   slice selection
-   tooltips
-   animation

The following picture demonstrates a funnel chart rendered with these default settings of the `igFunnelChart` control

![](images/Configuring_igFunnelChart_%28Code_Examples%29_1.png)

### <a id="minimum-requirements"></a> Minimum requirements

For the chart to render properly, you need to configure the `igFunnelChart` control to have:

-   a data source
-   width
-   height

Though it is not a technical requirement, for the chart to make sense to users, you need to define also:

-   the value member
-   the inner label
-   the outer label


## <a id="examples-summary"></a> Code Examples Summary

The following table lists the code examples included in this topic.

Example | Description
--- | ---
[Configuring an Inverted Funnel Chart](#inverted) | This example demonstrates how to configure an `igFunnelChart` control to render an inverted funnel.
[Configuring Weighted Slices](#weighted) | This example demonstrates how to configure an `igFunnelChart` control to render weighted slices.
[Configuring a Bezier-Curve Funnel Chart](#bezier-curve) | This example demonstrates how to configure an `igFunnelChart` control to use Bezier curve shape.
[Enabling Slice Selection](#slice-selection) | This example demonstrates how to enable the slice selection feature of `igFunnelChart` and how to respond to slice clicked events.



## <a id="inverted"></a> Code Example: Configuring an Inverted Funnel Chart

### Description

This code example shows how to configure an `igFunnelChart` control to display an inverted funnel. A normal funnel chart displays the largest slice at the top and the smallest at the bottom of the funnel while an Inverted funnel chart displays the smallest slice at the top and the largest at the bottom.

### Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#chartInverted").igFunnelChart({
    width: "325px",
    height: "450px",
    dataSource: data,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    innerLabelVisibility: "visible",
    outerLabelMemberPath: "Department",
    outerLabelVisibility: "visible",
    isInverted: true
});
```



## <a id="weighted"></a> Code Example: Configuring Weighted Slices

### Description

This code example shows how to configure an `igFunnelChart` control to render weighted slices. Normally funnel charts render with slices of equal height while Weighted slices render with different height depending on their value.

### Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#chartWeighted").igFunnelChart({
    width: "325px",
    height: "450px",
    dataSource: data,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    innerLabelVisibility: "visible",
    outerLabelMemberPath: "Department",
    outerLabelVisibility: "visible",
    funnelSliceDisplay: "weighted"
});
```



## <a id="bezier-curve"></a> Code Example: Configuring a Bezier-Curve Funnel Chart

### Description

This code example shows how to configure an `igFunnelChart` control to use Bezier curve shape.

To enable the Bezier Curve feature, use the `useBezierCurve` option. The `bezierPoints` option configures the coordinates of the upper and lower Bezier control points, which determine the shape of the funnel chart. The string passed to the option must contain four numbers between 0 and 1 separated by a space. Define the x- and y-coordinates of the upper control point with the first and the second numbers, respectively and define the x- and y-coordinates of the lower control point with the third and the fourth numbers, respectively.

### Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#chartBezier").igFunnelChart({
    width: "325px",
    height: "450px",
    dataSource: data,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    innerLabelVisibility: "visible",
    outerLabelMemberPath: "Department",
    outerLabelVisibility: "visible",
    useBezierCurve: true,
    bezierPoints: "0.1 0.1 0.7 1"
});
```



## <a id="slice-selection"></a> Code Example: Enabling Slice Selection

### Description

This code example shows how to enable the slice selection feature of `igFunnelChart` and how to respond to “slice clicked” events. Enabling slice selection raises a `sliceClicked` event with every click on a slice.

Enable slice selection by setting the `allowSliceSelection` option to *true*. Set the `useUnselectedStyle` option to *true* in order to configure the control to change the appearance of unselected slices by rendering them with a special style. (For details, refer to the [Styling topic](igFunnelChart-Styling.html).)

Configuring the `sliceClicked` option with an event handler adds or removes the item associated to the clicked slice from an internal array. The event handler uses the `ui.selected` flag passed from the control to determine whether the slice had just been selected or unselected.

> **Note:** If the API selection changes the sliceClicked event will not fire. You can get the indices of the selected slices using the `selectedSliceItems()` method of the `igFunnelChart`.

### Code

Following is the code that implements this example.

**In JavaScript:**

```js
var selectedSlices = [];
$("#chart").igFunnelChart({
    width: "350px",
    height: "500px",
    dataSource: data,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    innerLabelVisibility: "visible",
    outerLabelMemberPath: "Department",
    outerLabelVisibility: "visible",
    allowSliceSelection: true,
    useUnselectedStyle: true,
    sliceClicked: function (evt, ui) {
        if (ui.selected) {
            selectedSlices.push(ui.item);
        }
        else {
            selectedSlices.removeItem(ui.item);
        }
    }
});      
```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Binding *igFunnelChart* to Data](igFunnelChart-Binding-to-Data.html): This topic explains how to bind the `igFunnelChart` control to various data sources.

- [Styling *igFunnelChart*](igFunnelChart-Styling.html): This topic explains how to customize the look-and-feel of the `igFunnelChart` control.

- [Accessibility Compliance (*igFunnelChart*)](igFunnelChart-Accessibility-Compliance.html): This topic explains the `igFunnelChart` control’s accessibility features and provides advice on how to achieve accessibility compliance for pages containing charts.

- [Known Issues and Limitations (*igFunnelChart*)](igFunnelChart-Known-Issues-and-Limitations.html): This topic lists the known issues related to the `igFunnelChart` control. 
 
- [jQuery and ASP.NET MVC Helper API Links (*igFunnelChart*)](igFunnelChart-jQuery-and-ASP.NET-MVC-Helper-API--Links.html): This topic lists the links to the API reference documentation for the `igFunnelChart` control and its ASP.NET MVC Helper.




### <a id="samples"></a> Samples

The following sample provides additional information related to this topic.

- [Slice Selection](%%SamplesUrl%%/funnel-chart/slice-selection): This sample demonstrates enabling the slice selection functionality and handling the `sliceClicked` event.





 

 


