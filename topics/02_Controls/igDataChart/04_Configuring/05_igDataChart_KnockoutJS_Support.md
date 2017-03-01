<!--
|metadata|
{
    "fileName": "igdatachart-knockoutjs-support",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Configuring Knockout Support (igDataChart)



##Topic Overview

### Purpose

This topic explains how to configure the `igDataChart`™ control to bind to View-Model objects managed by the Knockout library.

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.

**Topics**

-	[igDataChart Overview](igDataChart-Overview.html) : This topic provides conceptual information about the `igDataChart` control including its main features, minimum requirements for using charts and user functionality.

-	[Series Type (igDataChart)](igDataChart-Series-Types.html):  This topic shows all kinds of charts that can be produced with the help of the `igDataChart` control.

-	[Adding an igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.


**External Resources**

-   [**Knockout Interactive Tutorials**](http://learn.knockoutjs.com/#/?tutorial=intro)

##Introduction

### Knockout support summary

The support for the Knockout library in the `igDataChart` control is intended to make it easier for developers to use the Knockout library and its declarative syntax to instantiate and configure chart controls.

Implementing Knockout support as a Knockout extension, initially invoked when applying Knockout bindings to a page and throughout the page’s life whenever external updates to the View-Model occur.

To instantiate a chart control bound to a Knockout managed data structure you need to specify `igDataChart` configuration options into data-bind attribute of an HTML div or span element. The chart renders at the location of the HTML tag just like if you create the control using JavaScript. Additional information on its more commonly used options please refer to the [](#Configuring_igDataChart)[Configuring `igDataChart` with Knockout Support](#Configuring_igDataChart) section. You can also specify all of the other igDataChart options in the data-bind attribute that are relevant to your business case.

>**Note:** The knockout support is only valid from the View-Model to the View
- in our case the `igDataChart` control. Updates to the View-Model, in our case passed as dataSource property to the `igDataChart`, notify the `igDataChart` UI, and animates the rendering of the new value. Using the API methods to edit the `igDataChart` will not update the View-Model. It is impossible to update the `igDataChart` from the View as it lives inside HTML Canvas element.

>**Note:** The knockout extension for `igDataChart` adds a hidden HTML div element to the browser DOM tree containing the UL list. This is necessary because the chart is a single HTML Canvas element, but the binding handlers of each of the chart items requires additional DOM element, in this case its HTML LI. Keep this in mind when visualizing significantly large data sets.



## Configuring igDataChart with Knockout Support


###<a id="Configuring_igDataChart"></a> Configuring igDataChart with knockout support summary chart

The following table maps the configuration tasks of the `igDataChart` control related to Knockout usage scenarios to their respective properties for managing those tasks. Code examples of some practical implementations are available following the table.

<table class="table table-bordered">
	<thead>
		<tr>
			<th>Configuration task</th>
			<th>Required?</th>
			<th>Details</th>
			<th>Properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Specifying data source for chart items</td>
			<td>Required</td>
			<td>The property for configuring the data source for the chart dataSource.

			It can be flat data source, as shown in the [Code
			Example:](#Code_Example_igDataChart) [Configure igDataChart for editing, adding and
			deleting an item](#Code_Example_igDataChart) section below.
			<blockquote>**Note:** Setting this option as Observable, allows direct access for adding and removing elements to and from the data source with taking place immediately, and updates the chart.</blockquote>
			<blockquote> **Note:** If any individual data source record, configured with its properties as observable, will result in updates then updates to those records have immediate affect on the *igDataChart* item.</blockquote>
			<blockquote>**It is impossible to bind a chart to an array of data sources when using the chart extension for Knockout JS.**</blockquote></td>
			<td><ul><li>[dataSource](%%jQueryApiUrl%%/ui.igDataChart#options:dataSource)</li></ul></td>
		</tr>
		<tr>
			<td>Configuring the member paths that will show the data visualization.</td>
			<td>Required</td>
			<td>Depending on the type of series you may use different member paths and
			map a path with data source record object fields resulting in the data
			for that option being shown in the chart. For more information about the
			series and their corresponding member paths please refer to the [Series
			Type (*igDataChart*)](igDataChart-Series-Types.html) topic.</td>
			<td><ul><li>[Series](%%jQueryApiUrl%%/ui.igDataChart#options:Series)
			<ul><li>[valueMemeberPath](%%jQueryApiUrl%%/ui.igDataChart#options:valueMemeberPath)</li><li>[lowMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:lowMemberPath)</li><li>[xMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:xMemberPath)</li><li>[yMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:yMemberPath)</li><li>[radiusMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:radiusMemberPath)</li><li>[fillMemeberPath](%%jQueryApiUrl%%/ui.igDataChart#options:fillMemeberPath)</li><li>[labelMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:labelMemberPath)</li><li>[angleMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:angleMemberPath)</li><li>[openMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:openMemberPath)</li><li> [closeMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:closeMemberPath)</li><li>[volumeMemberPath](%%jQueryApiUrl%%/ui.igDataChart#options:volumeMemberPath)</li></ul>
			</li></ul></td>
		</tr>
	</tbody>
</table>

##<a id="Code_Example_igDataChart"></a>Code Example: Configure igDataChart for Editing, Adding and Deleting an Item


### Description

This example shows how to instantiate an `igDataChart` control and bind it to a data structure managed by Knockout. Using the declarative syntax of Knockout, instantiate the chart from the data-bind attribute of a div element and bind to the View-Model observable properties.

### Code

The code snippet below shows a View-Model object that has observable flat structure and properties managed by Knockout. In this example, explicitly declaring the data structure is for clarity; however, in a real-world case with a remote data source (*i.e.**,* database) providing the data the data will be in the form of a JSON. The data then can be made observable by using the Knockout Mapping library.

>**Note:** Both the array structures and individual object fields are declared as observable. Hence it will be able to update the View when a data item is added, removed or changed, or it can change the View-Model when the user makes edits.

**In JavaScript:**

```js
var viewModel = {
    data: ko.observableArray(
        [{
            label: ko.observable("I"),
            value1: ko.observable(90.34),
            value2: ko.observable(15.77),
            value3: ko.observable(10.09)
        }, {
            label: ko.observable("II"),
            value1: ko.observable(45.11),
            value2: ko.observable(80.12),
            value3: ko.observable(9.89)
        }, {
        . . .
        }];
    );
}
```

The following code snippet shows how to apply the declared Knockout bindings to the page.

>**Note:** The `ko.applyBindings()` call is made within the Loader’s ready callback. This is necessary because the chart extension for Knockout needs to be loaded into the page before the bindings are applied.

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: "http://localhost/ig_ui/js/",
    cssPath: "http://localhost/ig_ui/css/",
    resources: "igDataChart.Category,extensions/infragistics.ui.datachart.knockout-extensions.js",
    ready: function () {
        ko.applyBindings(viewModel);
    }
});
```

The following code snippet demonstrates how to declare binding options in your View, for a chart control that you want to consist of three different line series. The most important part is the declaration of the instantiation options in the data-bind attribute of the div element.

**In HTML:**

```html
<div data-bind="igDataChart: {
      dataSource: data,
      axes: [{
            name: "xAxis",
            type: "categoryX",
            label: "label",
      }, {
            name: "yAxis",
            type: "numericY",
      }],
      series: [{
            name: "line1",
            type: "line",
            markerType: "automatic",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "value1"
      }, {
            name: "line2",
            type: "line",
            markerType: "automatic",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "value2"
      }, {
            name: "line3",
            type: "line",
            markerType: "automatic",
            xAxis: "xAxis",
            yAxis: "yAxis",
            valueMemberPath: "value3"
      }] }"></div>
```

When the control is bound to the View-Model through Knockout it will receive notifications of any changes.

The control can be bound to a non-observable array and object fields, but doing so will cause you to lose the updating functionality making such a scenario pointless to use in the context of KnockoutJS.

##<a id="Live_Example_igDataChart"></a>Live Example: Edit Chart Items with KnockoutJS

This example demonstrates the igDataChart control reacting to changes in the data source by the Knockout View-Model. Note that the chart is updated without having to re-bind the control. By default, the sample shows the market revenue and expenses for the first 10 days of the month. You can add/remove days and move items along the chart and observe money flow on the market changing accordingly.

>**Note:** The Knockout extensions do not work with the ASP.NET MVC Helpers.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/data-chart/edit-chart-items-with-knockout](%%SamplesEmbedUrl%%/data-chart/edit-chart-items-with-knockout)
</div>

##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[igDataChart Overview](igDataChart-Overview.html):  This topic provides conceptual information about the `igDataChart` control including its main features, minimum requirements for using charts and user functionality.

-	[Series Type (igDataChart)](igDataChart-Series-Types.html):  This topic shows all kinds of charts that can be produced with the help of the `igDataChart` control.

-	[Adding an igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart` control to a page and bind it to data.

-	[Configuring Knockout Support (igCombo)](igCombo-Configuring.html):  This topic explains how to configure the `igCombo` control to bind to View-Model objects managed by the Knockout library.

-	[Configuring Knockout Support (igEditors)](Configuring-Knockout-Support-%28Editors%29.html):  This topic explains how to configure Ignite UI editor controls to bind to View-Model objects using the Knockout library.

-	[Configuring Knockout Support (igTree)](igTree-KnockoutJS-Support.html):  This topic explains how to configure the `igTree` control to bind to View-Model objects managed by the Knockout library.



### Samples

The following samples provide additional information related to this topic.

-	[Bind igDataChart with KnockoutJS](%%SamplesUrl%%/data-chart/bind-data-chart-with-ko):  The sample demonstrates binding `igDataChart` with Knockout View-Model, using Infragistics Knockout extension for the control.



### Resources

The following information (available outside the Infragistics family of content) provides additional information related to this topic.

-	[Knockout Web Site](http://knockoutjs.com/): This is the home page of the Knockout library where all the needed documentation and samples can be found.