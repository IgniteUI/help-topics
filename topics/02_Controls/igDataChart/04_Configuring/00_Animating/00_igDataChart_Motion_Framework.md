<!--
|metadata|
{
    "fileName": "igdatachart-motion-framework",
    "controlName": "igDataChart",
    "tags": ["API","Charting"]
}
|metadata|
-->

# Infragistics Motion Framework for Charts Overview (igDataChart)



##Topic Overview


### Purpose

This topic provides an overview of the Infragistics® Motion Framework™ for charts and the aspects in which chart animation can be configured.

### Required background

Prerequisite topics required to understand this material.


-	[](igDataChart-Overview.html)[igDataChart Overview](igDataChart-Overview.html):  This topic provides conceptual information about the `igDataChart`™ control including its main features, minimum requirements for using charts and user functionality.

-	[](igDataChart-Adding.html)[Adding igDataChart](igDataChart-Adding.html):  This topic demonstrates how to add the `igDataChart`™ control to a page and bind it to data.





##Infragistics Motion Framework for Charts


### Infragistics Motion Framework for Charts summary

The Infragistics Motion Framework tells the story of your data in a way that allows the end users to experience a fully customizable immersive and animated user experience. End users can move step-by-step through time to see the relationship between data points change with each transition.

Motion Framework works on the principle that data is being fed, either continually or in batches, to a chart control that invokes the appropriate API method whenever data changes to render a fully customizable animated visual representation of your data.

The Motion Framework allows developers using the Ignite UI chart controls, to increase the visual appeal of, and imply trends or other meaning behind the data.



##Chart Animation Configuration Summary


### Chart animation configuration chart

A catalog of the Infragistics Motion Network supported configurable chart animation aspects.

<table class="table">
	<thead>
		<tr>
			<th>Configurable aspects</th>
			<th>Details</th>
			<th>Properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Transition time</td>
			<td>You can define the duration of animation for a particular data change for each data series.</td>
			<td>jQuery:<br>[series[“key”].transitionDuration](%%jQueryApiUrl%%/ui.igDataChart#options:series[“key”].transitionDuration)<br>MVC:<br>[Series.TransitionDuration()](Infragistics.Web.Mvc~Infragistics.Web.Mvc.Series`3~TransitionDuration.html)</td>
		</tr>
		<tr>
			<td>Notifications that all data items have been replaced</td>
			<td>Notifies the chart that the items have been cleared from the specified data source.</td>
			<td><ul><li>[notifyClearItems()](%%jQueryApiUrl%%/ui.igDataChart#methods:notifyClearItems)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item insertions</td>
			<td>Notifies the chart that an item has been inserted at the specified index in the specified data source.</td>
			<td><ul><li>[notifyInsertItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:notifyInsertItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item removals</td>
			<td>Notifies the chart that an item has been removed from the specified index in the specified data source.</td>
			<td><ul><li>[notifyRemoveItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:notifyRemoveItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item changes</td>
			<td>Notifies the chart that an item has been set in the specified data source.</td>
			<td><ul><li> [notifySetItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:notifySetItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item additions</td>
			<td>Notifies the chart that a new item has been added to the data source.</td>
			<td><ul><li>[addItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:addItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item insertions</td>
			<td>Notifies the chart that a new item has been inserted to the data source.</td>
			<td><ul><li>[insertItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:insertItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item removals</td>
			<td>Notifies the chart that a new item has been deleted from the data source.</td>
			<td><ul><li>[removeItem()](%%jQueryApiUrl%%/ui.igDataChart#methods:removeItem)</li></ul></td>
		</tr>
		<tr>
			<td>Notifications for data item updates</td>
			<td>Notifies the chart that an item has been updates in the data source.</td>
			<td><ul><li>[setItem() ](%%jQueryApiUrl%%/ui.igDataChart#methods:setItem)</li></ul></td>
		</tr>
	</tbody>
</table>

###<a id="motion-framework-sample"></a> Sample

The following sample demonstrates how to use the Motion Framework™ with igDataChart to build highly engaging visualizations and provide smooth playback of changes in data over time.

<div class="embed-sample">
   [Motion Framework](%%SamplesEmbedUrl%%/data-chart/motion-framework)
</div>


##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Animating Charts in HTML and JavaScript (igDataChart)](igDataChart-Animating-HTML.html)

This topic demonstrates, with code examples, how to add a simple animated column chart in HTML and JavaScript.

-	[Animating Charts in ASP.NET MVC(igDataChart)](Animating-Charts-in-ASP.NET-MVC.html)

This topic demonstrates, with code examples, how to add a simple animated column chart in MVC using AJAX POST request for adding data dynamically.






 

 


