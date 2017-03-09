<!--
|metadata|
{
    "fileName": "iglayoutmanager-handling-events",
    "controlName": "igLayoutManager",
    "tags": ["How Do I","Events","Layouts"]
}
|metadata|
-->

# Handling Events (igLayoutManager)



##Topic Overview


### Purpose

This topic explains, with a code examples, how to attach event handlers to the `igLayoutManager`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

-	[Using Events in Ignite UI](Using-Events-in-NetAdvantage-for-jQuery.html): This topic explains how to manage the required resources to work with Ignite UI® within a Web application.

-	[igLayoutManager Overview](igLayoutManager-Overview.html): This topic explains the `igLayoutManager` control conceptually and provides information on the supported layouts and their uses.

-	[Adding igLayoutManager](igLayoutManager-Adding.html): This topic demonstrates, with code examples, how to add the `igLayoutManager` control to an HTML page using either pure HTML, JavaScript, or ASP.MVC implementations.



### In this topic

This topic contains the following sections:

-   [**Handling Events – Conceptual Overview**](#overview)
    -   [Handling events summary](#summary)
    -   [Event handling cases summary chart](#event-handaling)
-   [**Code Examples**](#code-examples)
-   [**Code Example: Handling the itemRendered Event Upon Initialization in jQuery**](#example-jquery)
    -   [Description](#itemRender-jquery-description)
    -   [Code](#itemRender-jquery-code)
-   [**Code Example: Handling the itemRendered Event Upon Initialization in ASP.NET**](#example-asp-net)
    -   [Description](#itemRender-mvc-description)
    -   [Code](#itemRender-mvc-code)
-   [**Code Example: Handling the itemRendered Event at Run-Time in jQuery**](#example-run-time-jquery)
    -   [Description](#itemRender-jquery-description-run-time)
    -   [Code](#itemRender-jquery-code-run-time)
-   [**Code Example: Handling the itemRendered Event at Run-Time in ASP.NET MVC**](#example-run-time-mvc)
    -   [Description](#itemRender-mvc-description-run-time)
    -   [Code](#itemRender-mvc-code-run-time)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="overview"></a>Handling Events – Conceptual Overview


### <a id="summary"></a>Handling events summary

Attaching event handler functions to the `igLayoutManager` control is commonly done upon the initialization of the control.

When using the MVC helper, it is necessary to assign event handlers at run-time because you cannot define event handlers within the MVC helper.

jQuery supports the following methods for assigning event handlers:

-   bind()
-   delegate()
-   live()
-   on()

The `igLayoutManager` supports the following events:

-   [`itemRendering`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendering) –fired after an item has been rendered in the container the items
-   [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) –fired after all items are rendered
-   [`rendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:rendered) –fired before an item is going to accommodate 100% of the container's width or height

For details on how to handle events, refer to the [Using Events in Ignite UI](Using-Events-in-NetAdvantage-for-jQuery.html) topic.

### <a id="event-handaling"></a>Event handling cases summary chart

The following table explains briefly the event handling cases related the `igLayoutManager`. Further details are available after the table.

<table cellspacing="0" cellpadding="0">
	<tbody>
		<tr>
			<th>
				Event handling case
			</th>

			<th>
				Details
			</th>
		</tr>

		<tr>
			<td>
				Handling events upon initialization in jQuery
			</td>

			<td>
				When binding to events on widget initialization, you subscribe to the event using an option which in the following format:

				`<eventName>: <handler>`

				The valid settings for `<eventName>` are:

				<ul>
					<li>itemRendering</li>

					<li>itemRendered</li>

					<li>rendred</li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				Handling events at run-time in jQuery and ASP.NET MVC
			</td>

			<td>
				You can assign the event handler to the name of a function in order to implement the handler outside control initialization.
			</td>
		</tr>
	</tbody>
</table>



##<a id="code-examples"></a>Code Examples


The following table lists the code examples included in this topic.

Example|Description
---|---
[Handling the itemRendered Event Upon Initialization in jQuery](#example-jquery)|This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events) event upon initialization in jQuery.
[Handling the itemRendered Event Upon Initialization in ASP.NET MVC](#example-asp-net)|This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events) event upon initialization using the ASP.NET MVC wrapper.
[Handling the itemRendered Event at Run-Time in jQuery](#example-run-time-jquery)|This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events) event at run-time in jQuery.
[Handling the itemRendered Event at Run-Time in ASP.NET MVC](#example-run-time-mvc)|This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) event at run-time using the ASP.NET MVC wrapper.

##<a id="example-jquery"></a>Code Example: Handling the itemRendered Event Upon Initialization in jQuery


### <a id="itemRender-jquery-description"></a>Description

This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) event upon initialization in jQuery.

### <a id="itemRender-jquery-code"></a>Code

**In JavaScript:**

```js
$(".selector").igLayoutManager({
                        itemRendered: function(evt, ui) { 
                              // Handle event
                        }
});
```



##<a id="example-asp-net"></a>Code Example: Handling the itemRendered Event Upon Initialization in ASP.NET MVC


### <a id="itemRender-mvc-description"></a>Description

This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) event upon initialization using the ASP.NET MVC wrapper.

### <a id="itemRender-mvc-code"></a>Code

**In ASPX (MVC):**

        
```csharp
@(Html.Infragistics().LayoutManager()
        .AddClientEvent("iglayoutmanageritemrendered", "itemRenderedHandler")
        .Render());
```



##<a id="example-run-time-jquery"></a>Code Example: Handling the itemRendered Event at Run-Time in jQuery


### <a id="itemRender-jquery-description-run-time"></a>Description

This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) event at run-time in jQuery. 

### <a id="itemRender-jquery-code-run-time"></a>Code

**In JavaScript:**

```js
$(document).delegate(".selector", "iglayoutmanageritemrendered", function(evt, ui) { 
   // Handle event
});
```



##<a id="example-run-time-mvc"></a>Code Example: Handling the itemRendered Event at Run-Time in ASP.NET MVC


### <a id="itemRender-mvc-description-run-time"></a>Description

This example assigns an event handling function to the [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events) event at run-time using the ASP.NET MVC wrapper.

### <a id="itemRender-mvc-code-run-time"></a>Code

**In JavaScript:**

```js
$(document).delegate(".selector", "iglayoutmanageritemrendered", function(evt, ui) { 
   // Handle event
});
```



##<a id="related-content"></a>Related Content


### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Configuring the Layouts (igLayoutManager)](igLayoutManager-Configuring-layouts.html) This topic explains, with code examples, how to configure the title and subtitle of the `igLayoutManager` control. This includes the title area width the start position of the text and the title/subtitle text itself.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[ASP.NET MVC Basic Usage](%%SamplesUrl%%/layout-manager/aspnet-mvc-helper): This sample demonstrates using the ASP.NET MVC helper for the Layout Manager control.

-	[Border Layout from HTML Markup](%%SamplesUrl%%/layout-manager/border-layout-markup): This sample demonstrates initializing the `igLayoutManager` control’s Border layout from the HTML markup by assigning *"center"*/*"left"*/*"right"*/*"header"*/*"footer"* CSS classes.

-	[Border Layout – Initializing with JavaScript](help/iglayoutmanager-adding.html#js-steps): This sample demonstrates initializing the `igLayoutManager` control’s Border layout from JavaScript, by handling [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) events and assigning content to the created regions.

-	[Responsive Column Layout](%%SamplesUrl%%/layout-manager/column-layout-markup): This sample demonstrates how the `igLayoutManager` control’s Column layout can be used by assigning classes to items thus specifying the area their content will span over. This sample does not use JavaScript initialization code: it is done with CSS and HTML only.

-	[Responsive Flow Layout](%%SamplesUrl%%/layout-manager/flow-layout): This sample demonstrates the responsiveness of the `igLayoutManager` control’s Flow layout with various item sizes set either in pixels or percentages and setting the number of items in the `igLayoutManager`'s options without the need for any initial markup.

-	[Grid Layout with colspan and rowspan Support](%%SamplesUrl%%/layout-manager/grid-layout): This sample demonstrates the ability of the `igLayoutManager` control’s Grid layout to allow items to have arbitrary position in a grid with a predefined size including for items with different rowspan and colspan settings.

-	[Responsive Vertical Layout](%%SamplesUrl%%/layout-manager/vertical-layout)" This sample s demonstrates the responsiveness of the `igLayoutManager` control’s Vertical layout with various item sizes set either in pixels or percentages and setting the number of items in the `igLayoutManager`'s options without the need for any initial markup.





 

 


