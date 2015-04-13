<!--
|metadata|
{
    "fileName": "igolapflatdatasource-adding-using-mvc-helper",
    "controlName": "igOlapFlatDataSource",
    "tags": ["Data Binding","Getting Started","How Do I","MVC"]
}
|metadata|
-->

# Adding igOlapFlatDataSource to an ASP.NET MVC Application

## Topic Overview
### Purpose

This topic explains, in both conceptual and step-by-step form, how to add the `igOlapFlatDataSource`™ component to an ASP.NET MVC application using the ASP.NET MVC helper.

### Required background

The following topics are prerequisites to understanding this topic:

- [**igOlapFlatDataSource Overview**](igOlapFlatDataSource-Overview.html): This topic provides conceptual information about the `igOlapFlatDataSource` component including its main features, minimum requirements, and user functionality.

- [**Adding igOlapFlatDataSource to an HTML Page**](igOlapFlatDataSource-Adding-to-an-HTML-Page.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapFlatDataSource` component to an HTML page.

### In this topic

This topic contains the following sections:

-   [Adding igOlapFlatDataSource to an ASP.NET MVC Application – Conceptual Overview](#conceptual-overview)
    -   [Adding igOlapFlatDataSource to an ASP.NET MVC application summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igOlapFlatDataSource to an ASP.NET MVC Application – Example](#example)
    -   [Introduction](#example-introduction)
    -   [Prerequisites](#example-prerequisites)
    -   [Steps](#example-steps)
    -   [Full Code](#example-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="conceptual-overview"></a>Adding igOlapFlatDataSource to an ASP.NET MVC Application – Conceptual Overview
### <a id="summary"></a>Adding igOlapFlatDataSource to an ASP.NET MVC application summary

The `igOlapFlatDataSource` is a client-side component accompanied by an ASP.NET MVC helper that allows the component to be used in the CS/VB code of an MVC View. The ASP.NET MVC helper is the same for `igOlapFlatDataSource` and `igOlapXmlaDataSource` component and, depending on the options you set, an instance of the respective data source is created on the client. When using the helper, you provide it with an identifier that enables it to be used in one or more components capable of visualizing its data (`igPivotDataSelector`™, `igPivotGrid`™, `igPivotView`™).

Defining the `igOlapFlatDataSource` in the View is achieved by setting the required properties using methods that always return the same object that called them. This allows chaining syntax to be used for setting all required properties. For complex objects such as DataSourceOptions, lambda expression builders are used in order to achieve this kind of syntax.

### <a id="requirements"></a>Requirements

Following are the general requirements for adding `igOlapFlatDataSource` to an ASP.NET MVC application:

-   A reference to the Infragistics® namespace
-   The required JavaScript files added to your application (For the complete listing, refer to [Adding igOlapFlatDataSource to an HTML Page](igOlapFlatDataSource-Adding-to-an-HTML-Page.html).)

### <a id="steps"></a>Steps

Following are the general conceptual steps for adding `igOlapFlatDataSource` to an ASP.NET MVC application.

1. Adding the Infragistics namespace

2. Configuring the data for the View

3. Loading the required JavaScript resources

4. Adding the `igOlapFlatDataSource`



## <a id="example"></a>Adding igOlapFlatDataSource to an ASP.NET MVC Application – Example
### <a id="example-introduction"></a>Introduction

The procedure below demonstrates how to add the `igOlapFlatDataSource` component to an ASP.NET MVC application. The required resources in this example are referred to automatically with the Infragistics Loader.

### <a id="example-prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   An ASP.NET MVC application
-   Reference to the `Infragistics.Web.Mvc.dll` assembly added to the application project

### <a id="example-steps"></a>Steps

The following steps demonstrate how to add an `igOlapFlatDataSource` to an ASP.NET MVC application.

1. Add the Infragistics namespace.

	Add the Infragistics.Web.Mvc namespace to your View code.
	
	**In ASPX:**
	
	```csharp
	<%=Import Namespace=”Infragistics.Web.Mvc” %>
	```

2. Configure the data for the View.

	In the controller code, in the action method for the View, configure the View’s model:
	
	**In C#:**
	
	```csharp
	//…
	var sales = new List<object>() { 
	    new { ProductCategory = "Clothing", SellerName = "Stanley Brooker", UnitPrice = 12.814, UnitsSold = 282, SalesDate = DateTime.Today.ToShortDateString()},
	    new { ProductCategory = "Bikes", SellerName = "Elisa Longbottom", UnitPrice = 49.579, UnitsSold = 201, SalesDate = DateTime.Today.AddMonths(-14).ToShortDateString()},
	    new { ProductCategory = "Accessories", SellerName = "Erica Wild", UnitPrice = 3.565, UnitsSold = 68, SalesDate = DateTime.Today.AddMonths(-20).ToShortDateString()}
	};
	return View(sales);
	```

3. Add a reference to the Infragistics namespace.

	1. Add script reference to the **Infragistics Loader** component.
	
		Add the following script reference to the head section of the View.
		
		**In ASPX:**
		
		```csharp
		<script src="[path to js folder]/infragistics.loader.js"></script>
		```
		
	2. Add the definition of the **Infragistics Loader**.
	
		The following code loads the required resources using the Infragistics Loader.
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics()
		        .Loader()
		        .ScriptPath("[js path]")
		        .CssPath("[css path]")
		        .Render()
		%>
		```

4. Add the `igOlapFlatDataSource` component.

	1. Add the `igOlapFlatDataSource` declaration setting the ID.
	
		Add the declaration to the code of the View:
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("flatDataSource")
		// remaining code goes here
		%>
		```
	
	2. (Optional) Configure the common OLAP data source properties.
	
		Use the [DataSourceOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.PivotDataSelectorWrapper~DataSourceOptions.html) method to set the properties that are common for both multidimensional (OLAP) data sources, e.g. columns, rows, measures.
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("flatDataSource")
		  .DataSourceOptions(dataSourceOptions => dataSourceOptions
		      .Columns("[SalesDate].[SalesDate]")
		      .Rows("[ProductCategory].[ProductCategory]")
		      .Measures("[Measures].[UnitPrice]"))
		%>
		```
	
	3. Configure the igOlapFlatDataSource-specific properties.
	
		The metadata property of the [FlatDataOptions](Infragistics.Web.Mvc~Infragistics.Web.Mvc.FlatDataOptions_members.html) object is required. Its value defines how dimensions, hierarchies, levels, measures etc. will be generated for the input data. For details, refer to [Defining Metadata (igOlapFlatDataSource)](igOlapFlatDataSource-Defining-Metadata.html).
		
		**In ASPX:**
		
		```csharp
		<%=Html.Infragistics().OlapDataSource().ID("flatDataSource")
		  .DataSourceOptions(dataSourceOptions => dataSourceOptions
		      // common properties
		      .FlatDataOptions(flatOptions => flatOptions.Metadata(
		    metadata => metadata.Cube(cube => cube.Name("Sales")
		        .MeasuresDimension(measuresDimension => measuresDimension.Measures(
		            measures =>
		            {
		                measures.AddMeasure().Name("UnitPrice").Caption("Unit Price").Aggregator("$.ig.OlapUtilities.prototype.sumAggregator('UnitPrice')");
		                measures.AddMeasure().Name("UnitsSold").Caption("Units Sold").Aggregator("$.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')");
		            }))
		        .Dimensions(dimensions =>
		            {
		                dimensions.AddDimension().Name("Seller").Caption("Seller").Hierarchies(
		                    hiearachies =>
		                        hiearachies.AddHierarchy().Name("Seller").Caption("Seller").Levels(levels =>
		                        {
		                            levels.AddLevel().Name("AllSellers").Caption("All Sellers")
		                                .MemberProvider("function(item) {return 'All Sellers';}");
		                            levels.AddLevel().Name("SellerName").Caption("Seller Name")
		                                .MemberProvider("function(item) {return item.SellerName; }");
		                        }));
		                dimensions.AddDimension().Name("SalesDate").Caption("Sales Date").Hierarchies(
		                    hierarchies =>
		                    {
		                        hierarchies.AddHierarchy().Name("SalesDate").Caption("Sales Date").Levels(levels =>
		                        {
		                            levels.AddLevel().Name("AllPeriods").Caption("All Periods").MemberProvider("function(item) { return 'All Periods'; }");
		                            levels.AddLevel().Name("Year").Caption("Year").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('year', 'SalesDate')");
		                            levels.AddLevel().Name("Quarter").Caption("Quarter").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('quarter', 'SalesDate')");
		                            levels.AddLevel().Name("Month").Caption("Month").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('month', 'SalesDate')");
		                            levels.AddLevel().Name("Date").Caption("Date").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('date', 'SalesDate')");
		                        });
		                    });
		                dimensions.AddDimension().Name("ProductCategory").Caption("Product Category").Hierarchies(
		                    hiearachies =>
		                        hiearachies.AddHierarchy().Name("ProductCategory").Caption("Product Category").Levels(levels =>
		                        {
		                            levels.AddLevel().Name("AllProducts").Caption("All Products")
		                                .MemberProvider("function(item) {return 'All Products'; }");
		                            levels.AddLevel().Name("ProductCategory").Caption("Product Category")
		                                .MemberProvider("function(item) {return item.ProductCategory; }");
		                        }));
		            })))
		%>
		```
	
	4. Set the data source to the View’s model.
	
		Set the data source to the model you provided in the controller. Next, call the DataBind method to send the model data to the client.
		
		**In ASPX:**
		
		```csharp
		<%= Html.Infragistics().OlapDataSource().ID("flatDataSource").DataSourceOptions(
		    dataSourceOptions => dataSourceOptions.FlatDataOptions(
		        // flat data options
		    ).DataSource(this.Model).DataBind()))
		%>
		```
	
	5. Render the JavaScript code.
	
		To render the JavaScript code according to the setup that you provided, call the [Render](Infragistics.Web.Mvc~Infragistics.Web.Mvc.OlapDataSourceWrapper~Render.html) method.
		
		**In ASPX:**
		
		```csharp
		<%= Html.Infragistics().OlapDataSource().ID("flatDataSource")
		  // all options
		          .Render()
		%>
		```
		
		At this point, you can use the ID which you set to the OlapDataSource definition, in order to use the data source component instance in pivot-grid-related controls like igPivotDataSelector, igPivotGrid, and igPivotView.
	
	
	
### <a id="example-code"></a>Full Code

Following is the complete code of this procedure.

**In ASPX:**

```csharp
<%= Html.Infragistics().OlapDataSource().ID("flatDataSource")
        .DataSourceOptions(
            dataSourceOptions => dataSourceOptions
                .Columns("[SalesDate].[SalesDate]")
                .Rows("[ProductCategory].[ProductCategory]")
                .Measures("[Measures].[UnitPrice]")
                .FlatDataOptions(flatOptions => flatOptions.Metadata(
                    metadata => metadata.Cube(cube => cube.Name("Sales")
                        .MeasuresDimension(measuresDimension => measuresDimension.Measures(
                            measures =>
                            {
                                measures.AddMeasure().Name("UnitPrice").Caption("Unit Price").Aggregator("$.ig.OlapUtilities.prototype.sumAggregator('UnitPrice')");
                                measures.AddMeasure().Name("UnitsSold").Caption("Units Sold").Aggregator("$.ig.OlapUtilities.prototype.sumAggregator('UnitsSold')");
                            }))
                        .Dimensions(dimensions =>
                            {
                                dimensions.AddDimension().Name("Seller").Caption("Seller").Hierarchies(
                                    hiearachies =>
                                        hiearachies.AddHierarchy().Name("Seller").Caption("Seller").Levels(levels =>
                                        {
                                            levels.AddLevel().Name("AllSellers").Caption("All Sellers")
                                                .MemberProvider("function(item) {return 'All Sellers';}");
                                            levels.AddLevel().Name("SellerName").Caption("Seller Name")
                                                .MemberProvider("function(item) {return item.SellerName; }");
                                        }));
                                dimensions.AddDimension().Name("SalesDate").Caption("Sales Date").Hierarchies(
                                    hierarchies =>
                                    {
                                        hierarchies.AddHierarchy().Name("SalesDate").Caption("Sales Date").Levels(levels =>
                                        {
                                            levels.AddLevel().Name("AllPeriods").Caption("All Periods").MemberProvider("function(item) { return 'All Periods'; }");
                                            levels.AddLevel().Name("Year").Caption("Year").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('year', 'SalesDate')");
                                            levels.AddLevel().Name("Quarter").Caption("Quarter").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('quarter', 'SalesDate')");
                                            levels.AddLevel().Name("Month").Caption("Month").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('month', 'SalesDate')");
                                            levels.AddLevel().Name("Date").Caption("Date").MemberProvider("$.ig.OlapUtilities.prototype.dateMemberProvider('date', 'SalesDate')");
                                        });
                                    });
                                dimensions.AddDimension().Name("ProductCategory").Caption("Product Category").Hierarchies(
                                    hiearachies =>
                                        hiearachies.AddHierarchy().Name("ProductCategory").Caption("Product Category").Levels(levels =>
                                        {
                                            levels.AddLevel().Name("AllProducts").Caption("All Products")
                                                .MemberProvider("function(item) {return 'All Products'; }");
                                            levels.AddLevel().Name("ProductCategory").Caption("Product Category")
                                                .MemberProvider("function(item) {return item.ProductCategory; }");
                                        }));
                            })))
                        .DataSource(this.Model)
                        .DataBind()))
                    .Render()
%>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igPivotDataSelector to an ASP.NET MVC Application](igPivotDataSelector-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotDataSelector` control to an ASP.NET MVC application using the ASP.NET MVC helper.

- [Adding igPivotGrid to an ASP.NET MVC Application](igPivotGrid-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotGrid` control to an ASP.NET MVC application using the ASP.NET MVC helper.

- [Adding igPivotView to an ASP.NET MVC Application](igPivotView-Adding-Using-the-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igPivotView` control to an ASP.NET MVC View using the ASP.NET MVC helper.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Using the ASP.NET MVC Helper with Flat Data Source](%%SamplesUrl%%/pivot-data-selector/using-the-asp-net-mvc-helper-with-flat-data-source): This sample demonstrates how to use the ASP.NET MVC Helper for the `igOlapFlatDataSource` and how to use this data source in `igPivotDataSelector` and `igPivotGrid`.





 

 


