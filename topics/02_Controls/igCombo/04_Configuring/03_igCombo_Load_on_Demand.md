<!--
|metadata|
{
    "fileName": "igcombo-load-on-demand",
    "controlName": "igCombo",
    "tags": ["Filtering","How Do I","Performance"]
}
|metadata|
-->

# Configuring Load-on-Demand (igCombo)



##Topic Overview


### Purpose

This topic introduces the Load on Demand feature of the `igCombo`™ control and explains, with code examples how to configure and use it.

### Required background


**Concepts**

-   Load-on-Demand

**Topics**


-	[igCombo Overview](igCombo-Overview.html): This topic provides conceptual information for the `igCombo` control including information regarding features, binding to data sources, requirements, and templates.

-	[Adding igCombo](igCombo-Getting-Started.html): This help topic demonstrates how to setup a basic `igCombo` control and bind it to JSON data on the client and a collection of business object on the server. Both jQuery or ASP.NET MVC Helper environments are covered.

-	[Binding igCombo to Data](igCombo-Binding-to-Data.html): This topic discusses the ways to bind the `igCombo` control to data and provides further details related to data binding.



#### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Enabling Load-on-Demand](#enabling-loadOnDemand)
-   [Configuring Load-on-Demand](#configuring-LoadOnDemand)
-   [Code Example: Load-on-Demand](#code-example-load)
   -   [Description](#description)
    -   [Code](#code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="introduction"></a>Introduction


### Load-on-Demand feature summary

The `igCombo` control supports Load-on-Demand feature. Enabling Load-on-Demand significantly reduces the bandwidth and processing overhead on both the server and the client.

If Load-on-Demand is enabled, the user should first be able to see a scrollbar in the drop-down container, and the first page of list items. If the user scrolls to the end of the list, the next page of items are fetched and appended at the bottom of the list through asynchronous callbacks.



##<a id="enabling-loadOnDemand"></a>Enabling Load-on-Demand


### Enabling Load-on-Demand summary

By default, Load-on-Demand is disabled. To enable it, the `loadOnDemandSettings`.enabled option must be set to true:

**In JavaScript:**

```js
loadOnDemandSettings: { enabled: true }
```

or

**In ASPX:**

```csharp
Html.Infragistics().Combo().LoadOnDemandSettings(load => load.Enabled(true))
```

While data are being loaded from the data source the drop-down list appears a loading indicator. After data loading and rendering on the page is finished the loading indicator is removed.



##<a id="configuring-LoadOnDemand"></a>Configuring Load-on-Demand


### Configuring Load-on-Demand summary

The following table lists the configurable aspects of the `igCombo` control regarding Load-on-Demand and the related drop-down list paging functionality.

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
			<td>Drop-down list paging</td>
			<td>Sets the page size of the drop-down list</td>
			<td>[loadOnDemandSettings.pageSize](%%jQueryApiUrl%%/ui.igcombo#options:loadOnDemandSettings.pageSize)</td>
		</tr>
	</tbody>
</table>


##<a id="code-example-load"></a>Code Example: Load-on-Demand


###<a id="description"></a> Description

This example demonstrates how to configure the Load-on-Demand feature for a remote OData data source with a specific page size.

The code instantiates an `igCombo` control over an already created HTML input tag with id equal to “combo”. On initialization the code sets page size of 25 items for the drop-down list (pageSize: 25). The `responseDataKey`, `responseTotalRecCountKey` and `dataSource` options are assigned values that direct the combo to load the drop-down list by making a query to the specified URL and use d.results.Results and d.results.Count members of the returned JSON object.

###<a id="code"></a> Code

**In JavaScript:**

```js
$("#combo").igCombo({
    loadOnDemandSettings: {
        enabled: true,
        pageSize: 25
    },
    responseDataKey: "d.results.Results",
	responseTotalRecCountKey : "d.results.Count",
    dataSource: 'http://igniteui.com/api/products?&callback=?',
    textKey: "ProductName",
    valueKey: "ID"
});
```

**In ASPX:**

```csharp
<%=
    Html.Infragistics().Combo()
        .ID("combo")
        .DataSource("http://odata.netflix.com/Catalog/Titles?$format=json&$callback=?")
        .ResponseDataKey("d.results")
		.ResponseTotalRecCountKey("d.results.Count")
        .TextKey("ProductName")
        .ValueKey("ID")
        .LoadOnDemandSettings(load => load.Enabled(true).PageSize(25))
        .Render()
%>
```



##<a id="related-content"></a>Related Content


###<a id="topics"></a> Topics

The following topics provide additional information related to this topic.


-	[Configuring igCombo](igCombo-Configuring.html):This topic discusses the different ways to data bind the `igCombo` control as well as other details related to data binding.



###<a id="samples"></a> Samples

The following samples provide additional information related to this topic.

-	[Load-on-Demand](%%SamplesUrl%%/combo/load-on-demand):This sample demonstrates how to use the combo box load-on-demand and paging functionality using a remote OData data source.

-	[Virtualization](%%SamplesUrl%%/combo/virtualization):This sample demonstrates how enabling UI virtualization allows the `igCombo` control to quickly and efficiently render large amounts of data in the combo.

-	 [Filtering](%%SamplesUrl%%/combo/filtering):This sample demonstrates how the dropdown list of the `igCombo` control can be filtered based off of the input value. The auto-suggest and autocomplete functionalities are also supported.





 

 


