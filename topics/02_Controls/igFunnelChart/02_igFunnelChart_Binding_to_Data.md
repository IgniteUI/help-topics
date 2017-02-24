<!--
|metadata|
{
    "fileName": "igfunnelchart-binding-to-data",
    "controlName": "igFunnelChart",
    "tags": ["Charting","Data Binding","Data Presentation"]
}
|metadata|
-->

# Binding igFunnelChart to Data

## Topic Overview

### Purpose

This topic explains how to bind the `igFunnelChart`™ control to different data sources.

### Required background

The following table lists the concepts and topics required as a prerequisite to understanding this topic.

- Concepts
	-   JavaScript arrays
	-   JSON
	-   ASP.NET MVC
-   Topics
	-   [*igDataSource* Overview](igDataSource-igDataSource-Overview.html): This topic provides an overview of the `igDataSource`™ component and explains how to add it to an HTML page.
	-   [*igFunnelChart* Overview](igFunnelChart-Overview.html): This topic provides conceptual information about the `igFunnelChart` control including its main features, minimum requirements, and user functionality.
	-   [Adding *igFunnelChart*](igFunnelChart-Adding.html): This topic demonstrates how to add the `igFunnelChart` control to an HTML page and bind it to data.


### In this topic

This topic contains the following sections:

-   [**Binding to Data Sources**](#data-sources)
-   [**Code Examples Summary**](#examples-summary)
-   [**Code Example: Binding *igFunnelChart* to a JavaScript Array**](#javascript-array)
-   [**Code Example: Binding *igFunnelChart* to XML data**](#xml)
    -   [**Full sample illustrating XML binding**](#full-sample)
-   [**Code Example: Binding *igFunnelChart* in a Strongly Typed MVC View**](#mvc-model)
-   [**Code Example: Binding *igFunnelChart* to a JSON Response from a Remote Service**](#remote-service-json)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="data-sources"></a> Binding to Data Sources

### Data sources summary

Bind data to `igFunnelChart` in the same way you would bind any other control to the Ignite UI® library. Data is bound either by assigning a data source to the `dataSource` option or by providing a URL in the `dataSourceUrl` if data is provided by a web or Windows Communication Foundation (WCF) service. The `igFunnelChart` control creates and uses an `igDataSource` object to handle data.

### Supported data sources listing

The `igFunnelChart` control supports the following data sources:

-   JavaScript array
-   JSON
-   XML
-   IQueryable&lt;T&gt;
-   [*igDataSource*](igDataSource-igDataSource.html)

### Requirements

Each data source has different requirements for data binding to the `igFunnelChart` control. The following table lists each requirement category.

<table class="table">
	<tbody>
		<tr>
			<th>Requirement category</th>
			<th>Requirement listing</th>
		</tr>
		<tr>
			<td>Data structures</td>
			<td>
				<ul>
					<li>JSON (client side from a web or WCF service, or from an MVC controller action)</li>
					<li>XML (client side or from a web or WCF service)</li>
					<li>JavaScript array</li>
					<li>IQueryable&lt;T&gt; in ASP.NET MVC</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Data types</td>
			<td>
				<ul>
					<li>String: for slice labels</li>
					<li>Number: for slice values</li>
				</ul>
			</td>
		</tr>
	</tbody>
</table>


## <a id="examples-summary"></a> Code Examples Summary

The following table lists the code examples included in this topic.

Example | Description
--- | ---
[Binding to a JavaScript Array](#javascript-array) | This example demonstrates how to bind the `igFunnelChart` control to a JavaScript array.
[Binding *igFunnelChart* to XML Data](#xml) | This example demonstrates how to bind the `igFunnelChart` control to an XML structure.
[Binding* igFunnelChart* in a Strongly Typed MVC View](#mvc-model) | This example demonstrates how to bind the `igFunnelChart` control to a model object in a strongly-typed ASP.NET MVC View using the MVC helper.
[Binding *igFunnelChart* to a JSON Response from a Remote Service](#remote-service-json) | This example demonstrates how to configure an `igFunnelChart` control to request remote data and bind it to a JSON response.





## <a id="javascript-array"></a> Code Example: Binding *igFunnelChart* to a JavaScript Array

### Description

One of the most common data binding scenarios is to visualize data from a JavaScript array of data objects on your web page. This example defines a sample array of objects with two data fields and configures a funnel chart using the array as the data source.

### Code

The following snippet **defines a JavaScript array**. Put the snippet into a script block in your page.

**In JavaScript:**

```js
var data = [
    { Budget: 30, Department: "Administration" },
    { Budget: 50, Department: "Sales" },
    { Budget: 60, Department: "IT" },
    { Budget: 50, Department: "Marketing" },
    { Budget: 100, Department: "Development" },
    { Budget: 20, Department: "Support" }
];
```

The following snippet instantiates a funnel chart and **binds the chart to the array** defined above. This example only shows the essential data binding code omitting all other instantiation details.

**In JavaScript:**

```js
$("#funnel").igFunnelChart({
    . . .    
    dataSource: data,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    outerLabelMemberPath: "Department"
});
```



## <a id="xml"></a> Code Example: Binding *igFunnelChart* to XML data

### Description

The `igFunnelChart` control supports XML structures as a data source with the help of the `igDataSource` component. This code example shows how to pass an XML structure to an `igDataSource` object and how to bind the data source object to the funnel chart control.

### Code

The following code snippet **defines an XML structure** with a JavaScript string. The structure contains nodes with two data attributes: Department and Budget.

**In JavaScript:**

```js
var xmlDoc = 
    '<CompanyBudget>' +
        '<BudgetEntry Department="Development" Budget="100" />' +
        '<BudgetEntry Department="IT" Budget="60" />' +
        '<BudgetEntry Department="Sales" Budget="60" />' +
        '<BudgetEntry Department="Marketing" Budget="50" />' +
        '<BudgetEntry Department="Administration" Budget="30" />' +
        '<BudgetEntry Department="Support" Budget="20" />' +
    '</CompanyBudget>';
```

The following code snippet shows how to **declare the structure of the XML data** into an `igDataSchema` object recognizable by the `igDataSource`.

**In JavaScript:**

```js
var xmlSchema = new $.ig.DataSchema("xml",
    {
        searchField: "//BudgetEntry",
        fields: [
            { name: "Department", xpath: "./@Department" },
            { name: "Budget", xpath: "./@Budget", type: "number" }
        ]
    }
);
```

The following code snippet shows how to **instantiate an `igDataSource` using the XML data and the schema object**.

**In JavaScript:**

```js
var ds = new $.ig.DataSource({
    type: "xml",
    dataSource: xmlDoc,
    schema: xmlSchema
});
```

The following code snippet shows **instantiation code for the `igFunnelChart` control that binds to the data source** created above. The data source object handles the data from the XML structure and provides it in a suitable form to the funnel chart control.

**In JavaScript:**

```js
$("#chartNormal").igFunnelChart({
    . . .
    dataSource: ds,
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    outerLabelMemberPath: "Department"
});
```

### <a id="full-sample"></a> Full sample illustrating XML binding

This sample shows how to bind an `igFunnelChart` to data available in XML structure. For that purpose the XML data is passed to an `igDataSource` which provides the data to the funnel chart.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/funnel-chart/xml-binding](%%SamplesEmbedUrl%%/funnel-chart/xml-binding)
</div>

## <a id="mvc-model"></a> Code Example: Binding *igFunnelChart* in a Strongly Typed MVC View

### Description

In an MVC application you will usually want to have a strongly-typed View and pass it data objects from the business logic layer of your application. This example provides the essential code which defines a sample data class and passes a model object to the `igFunnelChart` MVC helper which instantiates a funnel chart. The data model object is required to be an IQueryable of the data class.

### Code

The next code snippet **declares a sample class** consisting of two data fields.

**In C#:**

```csharp
public class BudgetData
{
    public decimal Budget { get; set; }
    public string Department { get; set; }
}
```

The following code snippet specifies a strongly-typed MVC View at the beginning. Then it shows how to use the MVC helper for `igFunnelChart` in order to **bind to the Model object of the View**.

**In ASPX:**

```csharp
@model IQueryable<MvcApp.Models.BudgetData>
. . .
@(Html.Infragistics().FunnelChart(Model)
    .ID("funnel")
    . . .
    .ValueMemberPath("Budget")
    .InnerLabelMemberPath("Budget")
    .OuterLabelMemberPath("Department")
    .DataBind()
    .Render()
)
```



## <a id="remote-service-json"></a> Code Example: Binding *igFunnelChart* to a JSON Response from a Remote Service

### Description

This code example shows how to bind JSON data from a request to a remote service (MVC controller action in this case) to the `igFunnelChart` control.

### Code

The next code snippet **declares a sample class** consisting of two data fields.

**In C#:**

```csharp
public class BudgetData
{
    public decimal Budget { get; set; }
    public string Department { get; set; }
}
```

The following code snippet defines a controller **action method that services a remote request**. The method uses `getData()` method to implement the actual data retrieval logic and is not shown here.

**In C#:**

```csharp
[ActionName("getBudget")]
public JsonResult GetBudget()
{
    var data = getData();
    return new JsonResult 
    { 
        Data = data, 
        JsonRequestBehavior = JsonRequestBehavior.AllowGet 
    };
}
```

The following code snippet contains **instantiation code for the `igFunnelChart` control that configures a URL for a remote data service**. The code snippet contains only the essential data binding code omitting all other instantiation options.

**In JavaScript:**

```js
$("#chartRemote").igFunnelChart({
    . . .
    dataSourceUrl: "/businessLogic/getBudget",
    valueMemberPath: "Budget",
    innerLabelMemberPath: "Budget",
    outerLabelMemberPath: "Department"
});
```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring *igFunnelChart*](igFunnelChart-Configuring.html): This topic explains how to configure different visual features and behavior of the `igFunnelChart` control.

- [Styling *igFunnelChart*](igFunnelChart-Styling.html): This topic explains how to customize the look-and-feel of the `igFunnelChart` control.

- [Accessibility Compliance (*igFunnelChart*)](igFunnelChart-Accessibility-Compliance.html): This topic explains the `igFunnelChart` control’s accessibility features and provides advice on how to achieve accessibility compliance for pages containing charts.

- [Known Issues and Limitations (*igFunnelChart*)](igFunnelChart-Known-Issues-and-Limitations.html): This topic lists the known issues related to the `igFunnelChart` control. 
 
- [jQuery and ASP.NET MVC Helper API Links (*igFunnelChart*)](igFunnelChart-jQuery-and-ASP.NET-MVC-Helper-API--Links.html): This topic lists the links to the API reference documentation for the `igFunnelChart` control and its ASP.NET MVC Helper.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Funnel Chart](%%SamplesUrl%%/funnel-chart/funnel-chart): This sample demonstrates using the Funnel Chart control to render data as slices from the largest value to the smallest value with the capability to invert the positions of the slices.




 

 


