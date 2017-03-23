<!--
|metadata|
{
    "fileName": "iggrid-binding-to-datatable",
    "controlName": "igGrid",
    "tags": ["Data Binding","Editing","Grids","MVC"]
}
|metadata|
-->

# Binding igGrid to DataTable

## Topic Overview

### Purpose

Starting with version 12.2, the `igGrid` supports binding to `DataTable` objects via its ASP.NET MVC Helper. This topic introduces the feature and demonstrates how to configure and use a `DataTable` with the Grid ASP.NET MVC Helper. In addition, you will see how you can use the `DataTable` in conjunction with the grid’s editing functionality.

### Required background

The following topics are prerequisites to understanding this topic:

- [igGrid Overview](igGrid-Overview.html): This topic explains how to add the `igGrid` to a web page.

- [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html): This topic explains the inner workings of `igGrid` and how it collaborates with `igDataSource` to enable binding to different data sources.

- [igGrid Updating](igGrid-Updating.html): This topic explains how to use the Updating feature of the `igGrid` control.

- [Developing ASP.NET MVC Applications with igGrid](igGrid-Developing-ASP-NET-MVC-Applications-with-igGrid.html): This topic explains how to use `igGrid` in ASP.NET MVC Applications



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Binding to DataTable](#dataTable)
    -   [Binding to DataSet](#dataSet)
-   [Known issues and limitations](#known-issues)
-   [Update the grid using the Json.NET serializer](#json-net)
    -   [Prerequisites](#json-net-prerequisites)
    -   [Overview](#json-net-overview)
    -   [Steps](#json-net-steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Resources](#resources)



## <a id="introduction"></a> Introduction

### <a id="dataTable"></a> Binding to *DataTable*

Starting with version 12.2, the `igGrid` supports binding to an ADO.NET `DataTable`.

Binding to a `DataTable` can be done by passing the `DataTable` through the **`GridDataSourceAction`** and defining the grid in the view.

In the scenario below, the model is a `DataTable` (you may set the type to be a .NET dynamic as well). In this  case, the `DataTable` is returned from a `GridDataSourceAction` `ActionMethod` which serializes the model (`DataTable`) into JSON and returns it from the server to be consumed on the client.

**In Razor:**

```csharp
@model  System.Data.DataTable
@(Html.Infragistics().Grid<System.Data.DataTable>().ID("grid1").Height("500px")
		…
        .DataSource(Model)
        .DataSourceUrl(Url.Action("UpdateDataTableGrid"))
        .DataBind()
        .Render()
)
```

**In C#:**

```csharp
[GridDataSourceAction]
[ActionName("UpdateDataTableGrid")]
public ActionResult UpdateDataTableGrid()
{
    DataTable dt = this.MyEmployees;
    return View("UpdateDataTableGrid", dt);
}
```

When the `AutoGenerateColumns` property is set to true, the grid columns' definitions are extracted entirely from the `DataTable` definition.

> **Note:** Having one or more defined columns alongside `AutoGenerateColumns` set to *true* is **not** a valid scenario - you need to either have all columns defined or auto-generated.

### <a id="dataSet"></a> Binding to *DataSet*

There is a new property introduced in the `igGrid` ASP.NET MVC helper: **`DataMember`**.

It contains the name of the `DataTable` from the `DataSet` bound to the current `igGrid`.

When set, the grid looks for the name of the `DataTable` matching the `DataMember` value from the `DataSet` to which the grid is bound. The property is useful when `AutoGenerateLayouts` is false and the layouts are defined manually.

> **Note:** Another change made in v12.2 is that `AutogenerateLayouts` is false by default.



## <a id="known-issues"></a> Known issues and limitations

### Only local configuration is supported for the Filtering, Grouping, and Sorting features, Summaries are not supported

When the `igGrid` performs remote filtering, sorting, and grouping, it uses LINQ expressions internally to filter and sort the data. When using a `DataTable` or `DataSet` as the data source, LINQ expressions won’t work. As a result, filtering, sorting, and grouping features can only be configured for local data when binding to a `DataTable` or `DataSet`.

Similarly, the summaries feature is unsupported when using a `DataTable`/`DataSet` as a data source.

**In Razor:**

```csharp
@(Html.Infragistics().Grid<dynamic>().ID("grid1").Height("500px")
		.AutoGenerateColumns(true)
		.RenderCheckboxes(true)
		.AutoCommit(false)
		.Features(features => {
		    features.Sorting().Type(OpType.Local).Mode(SortingMode.Single);
		    features.Filtering().Type(OpType.Local);
		    features.GroupBy().Type(OpType.Local);
		    features.Paging().PageSize(5).Type(OpType.Remote);
		    features.Updating();
		    features.Hiding();
		    features.Selection().Mode(SelectionMode.Row).MultipleSelection(true);
		    features.RowSelectors();
		    features.Resizing();
		    features.Tooltips().Visibility(TooltipsVisibility.Always);
		})
		.GenerateCompactJSONResponse(false)
		.DataSource(Model)
		.DataSourceUrl(Url.Action("datatable-interactions"))
		.UpdateUrl(Url.Action("EditingSaveChanges"))
		.DataBind()
		.Width("100%")
		.Height("100%")
		.Render()
)
```

*Remote sorting and filtering* can be implemented by processing the request and filtering and/or sorting the data on the `DataSet`/`DataTable` level before returning the data.

The below example demonstrates how to implement remote *sorting* by processing the request and sorting the data on the `DataTable` level before returning it.

**In C#:**

```csharp
[GridDataSourceAction]
[ActionName("UpdateDataTableGrid")]
public ActionResult UpdateDataTableGrid()
{
    DataTable dt = this.MyEmployees;
	NameValueCollection queryString = HttpUtility.ParseQueryString(Request.QueryString.ToString());
	// check the query string for sorting expressions
	List<SortExpression> sortExpressions = BuildSortExpressions(queryString, "sort", true);
	DataView dv = customers.DefaultView;
	if (sortExpressions.Count > 0)
	{
		String sortExpression = "";
		foreach (SortExpression expr in sortExpressions)
		{
			sortExpression += expr.Key + " " + (expr.Mode == SortMode.Ascending ? "asc" : "desc") + ",";
		}
		dv.Sort = sortExpression.Substring(0, sortExpression.Length - 1);
	}
	return View("UpdateDataTableGrid", dv.ToTable());
}

public List<SortExpression> BuildSortExpressions(NameValueCollection queryString, string sortKey, bool isTable)
{
	List<SortExpression> expressions = new List<SortExpression>();
	List<string> sortKeys = new List<string>();
	foreach (string key in queryString.Keys)
	{
		if (!string.IsNullOrEmpty(key) && key.StartsWith(sortKey))
		{
			SortExpression e = new SortExpression();
			e.Key = key.Substring(key.IndexOf("(")).Replace("(", "").Replace(")", "");
			e.Logic = "AND";
			e.Mode = queryString[key].ToLower().StartsWith("asc") ? SortMode.Ascending : SortMode.Descending;
			expressions.Add(e);
			sortKeys.Add(key);
		}
	}
	if (sortKeys.Count > 0 && isTable)
	{
		foreach (string sortedKey in sortKeys)
		{
			queryString.Remove(sortedKey);
		}
		string url = Request.Url.AbsolutePath;
		string updatedQueryString = "?" + queryString.ToString();
		Response.Redirect(url + updatedQueryString);
	}
	return expressions;
}
```

The following features work remotely when binding to a `DataTable` or `DataSet`:

-   Paging
-   Updating – should be changed to work `LoadTransactions`

### If no PrimaryKey is set on the DataTable or DataSet, it should be explicitly set on the Grid

If a `DataTable` or a `DataSet` has a `PrimaryKey` defined then the `igGrid` automatically uses it, otherwise set this manually through the ASP.NET MVC helper. This is needed when updating feature is enabled.

**In Razor:**

```csharp
// The Model in the code snippet below is a DataTable
@(Html.Infragistics().Grid<DataTable>(Model).ID("grid1").Height("500px")
        .PrimaryKey("ProductID")
        .AutoGenerateLayouts(true)
        .AutoGenerateColumns(true)
        .RenderCheckboxes(true)
        .AutoCommit(false)
        .GenerateCompactJSONResponse(false)
        .DataSource(Model)
        .DataSourceUrl(Url.Action("datatable-interactions"))
        .UpdateUrl(Url.Action("EditingSaveChanges"))
        .DataBind()
        .Width("100%")
        .Height("100%")
        .Render()
)
```

### When updating, a serializer which supports Dictionary&lt;string, string&gt; should be used

When updating, a serializer which supports `Dictionary<string, string>` should be used It is a known issue that the Microsoft JSON serializer doesn’t support deserializing a Dictionary to JSON. If you want to use the updating feature, the `GridModel` must override the `LoadTransactions` method. You can use the Json.NET serializer for this purpose. You can download it from the page below and it is also included in ASP.NET MVC 4 as the default serializer.

[http://www.newtonsoft.com/json](http://www.newtonsoft.com/json)

**In C#:**

```csharp
public List<Transaction<T>> LoadTransactionsDictionary<T>(string postdata) where T : class
{
    List<Transaction<T>> transactions = JsonConvert.DeserializeObject<List<Transaction<T>>>(postdata);
    return transactions;
}
```

Another approach is to create a model based on the table’s layout and use it in the `LoadTransactions` method. The sample code below demonstrates how to use the updating feature when binding to `DataTable` and passing a model based on the table’s layout in the `LoadTransactions` method.

**In C#:**

```csharp
public class Employee
{
    public int EmployeeID { get; set; }
    public int DepartmentID { get; set; }
    public string Name { get; set; }
    public string Site { get; set; }
    public DateTime DateOfHire { get; set; }
    public bool OnSite { get; set; }
}
...

public ActionResult EditingSaveChanges()
{
    ViewData["GenerateCompactJSONResponse"] = false;
    GridModel m = new GridModel();
    List<Transaction<Employee>> transactions = m.LoadTransactions<Employee>(HttpContext.Request.Form["ig_transactions"]);
    foreach (Transaction<Employee> t in transactions)
    {
    	if (t.type == "row")
        {
            DataRow dr = this.MyEmployees.Rows.Find(Int32.Parse(t.rowId));
            if (t.row.Name != null)
            {
                dr["Name"] = t.row.Name;
            }
            if (t.row.DateOfHire != null)
            {
                dr["DateOfHire"] = t.row.DateOfHire;
            }
            if (t.row.Site != null)
            {
                dr["Site"] = t.row.Site;
            }
            if (t.row.OnSite != null)
            {
                dr["OnSite"] = t.row.OnSite;
            }
            if (t.row.DepartmentID != null)
            {
                dr["DepartmentID"] = t.row.DepartmentID;
            }
            this.MyEmployees.AcceptChanges();
        }
    }
    JsonResult result = new JsonResult();
    Dictionary<string, bool> response = new Dictionary<string, bool>();
    response.Add("Success", true);
    result.Data = response;
    return result;
}
```


### Manually creating the columns in *igGrid* using the ASP.NET MVC helper in the view

If the `igGrid` is defined in the view and a `DataTable` is used as the grid’s Model then the columns can only be auto-generated. If you want to define the columns manually, define a model which corresponds to the `DataTable` structure and set it as the grid’s type.

> **Note:** The fields of the custom type Employee must match the type and key of the `DataColumns` of the `DataTable` that they represent.

**In C#:**

```csharp
DataTable dtData = new DataTable("Employees");
dtData.Columns.Add("EmployeeID", typeof(int));
dtData.Columns.Add("Name", typeof(string));
dtData.Columns.Add("OnSite", typeof(bool));
dtData.Columns.Add("DateOfHire", typeof(DateTime));
dtData.Columns.Add("DepartmentID", typeof(int));
dtData.Columns.Add("Site", typeof(string));
```

**In C#:**


```csharp
public class Employee
{
    public int EmployeeID { get; set; }
    public int DepartmentID { get; set; }
    public string Name { get; set; }
    public string Site { get; set; }
    public DateTime DateOfHire { get; set; }
    public bool OnSite { get; set; }
}
```


**In Razor:**


```csharp
@( Html.Infragistics().Grid<Employee>().ID("grid1").Height("500px").Width("1000px")
		.Columns(column =>
		{
		    column.For(x => x.EmployeeID).DataType("number").HeaderText("Employee ID");
		    column.For(x => x.Name).DataType("string").HeaderText("Name");
		    column.For(x => x.Site).DataType("string").HeaderText("Site");
		    column.For(x => x.DepartmentID).DataType("number").HeaderText("Department");
		    column.For(x => x.DateOfHire).DataType("date").HeaderText("Date Of Hire");
		    column.For(x => x.OnSite).DataType("bool").HeaderText("On site");
		})
		.DataBind()
		.Render()
)
```



## <a id="json-net"></a> Update the grid using the Json.NET serializer


This procedure explains how to implement the `LoadTransaction` method when using the Grid’s updating feature while bound to a `DataTable`

### <a id="json-net-prerequisites"></a> Prerequisites

To complete the procedure, you need the following:

-   The required Ignite UI JavaScript and CSS files
-   A reference to the *Infragistics.Web.Mvc.dll* assembly
-   Json.NET Serializer - Newtonsoft.Json.dll

This can be downloaded from [http://www.newtonsoft.com/json](http://www.newtonsoft.com/json)

### <a id="json-net-overview"></a> Overview

Following is a conceptual overview of the process:

1.  [Pass the DataTable in the GridDataSourceAction ](#pass-dt-step)
2.  [Add the Json.NET library to the project and reference it](#json-net-step)
3.  [Implement the LoadTransactionsDictionary method](#load-transactions-step)
4.  [Parse the dates from the JSON request](#parse-json-step)

### <a id="json-net-steps"></a> Steps

Following are the general conceptual steps for enabling the updating feature when binding the `igGrid` to a `DataTable`.

1. **Pass the DataTable in the GridDataSourceAction**  <a id="pass-dt-step"></a>

	1.  Pass the `DataTable` in the `DataSourceUrl` action and set the `DataTable`as the grid’s model.
	2.  Also set the `UpdateUrl` to point to the `EditingSaveChanges` controller action. It handles persisting changes in the data base through LINQ

 	**In Razor:**

	```csharp
		@(Html.Infragistics().Grid<DataTable>(Model).ID("grid1").Height("500px")
			.AutoGenerateColumns(true)
			.RenderCheckboxes(true)
			.AutoCommit(false)
			.Features(features => {
				features.Sorting().Type(OpType.Local).Mode(SortingMode.Single);
				features.Filtering().Type(OpType.Local);
				features.GroupBy().Type(OpType.Local);
				features.Paging().PageSize(5).Type(OpType.Remote);
				features.Updating();
				features.Hiding();
				features.Selection().Mode(SelectionMode.Row).MultipleSelection(true);
				features.RowSelectors();
				features.Resizing();
				features.Tooltips().Visibility(TooltipsVisibility.Always);
			})
			.GenerateCompactJSONResponse(false)
			.DataSource(Model)
			.DataSourceUrl(Url.Action("DataTableInteractions"))
			.UpdateUrl(Url.Action("EditingSaveChanges"))
			.DataBind()
			.Width("100%")
			.Height("100%")
			.Render()
		)
	```

 	**In C#:**

	```csharp
	public ActionResult DataTableInteractions()
	{

	   DataTable dt = this.MyEmployees;
	   return View("DataTableInteractions",dt);
	}
	```

2. **Add the Json.NET library to the project and reference it**  <a id="json-net-step"></a>

	1.  Download the *Newtonsoft.Json.dll*

		[http://www.newtonsoft.com/json](http://www.newtonsoft.com/json)

		This is required for ASP.NET MVC 3 and below but is included in the default ASP.NET MVC 4 templates. This JSON library can also be obtained through NuGet.
	2.  Add the assembly file as reference to the project

3. **Implement the *LoadTransactionsDictionary* method in order to use the new serializer**  <a id="load-transactions-step"></a>

	1.  Implement the `LoadTransactionsDictionary` method in order to use the new serializer
	2.  Create a new class which inherits `GridModel`
	3.  Implement `LoadTransactionsDictionary` method

 	**In C#:**

	```csharp
		using Newtonsoft.Json;
		public class NewtonSoftGridModel : GridModel
		{
			/// <summary>
			/// loads a list of transactions from the POST data, in case saveChanges()
			/// is invoked in the client side and UpdateUrl is set
			/// to a valid controller action (GridUpdating)
			/// The method is using the Newtonsoft serializer, which gives the ability
			/// to deserialize objects in to Dictionary<string, string>
			/// </summary>
			/// <typeparam name="T"></typeparam>
			/// <param name="postdata"></param>
			/// <returns></returns>
			public List<Transaction<T>> LoadTransactionsDictionary<T>(string postdata) where T : class
			{
				List<Transaction<T>> transactions = JsonConvert.DeserializeObject<List<Transaction<T>>>(postdata);
				return transactions;
			}
		}
	```

4. **Parse the dates from the JSON format**  <a id="parse-json-step"></a>

	1.  Convert the JSON date string to a `DateTime` object.
	2.  The `ActionMethod` accepts an Ajax post to persist data changes from the grid.
	3.  Grid transactions are available in the form field labeled `ig_transactions` for processing against the data layer.
	4.  Dates are received in JSON format and need to be converted to `DateTime`

 	**In C#:**

	```csharp
	[ActionName("EditingSaveChanges")]
	public ActionResult EditingSaveChanges()
	{
		DataTable dt = this.MyEmployees as DataTable;
		NewtonSoftGridModel m = new NewtonSoftGridModel();

	    List<Transaction<Dictionary<string, string>>> transactionsDict =
			m.LoadTransactionsDictionary<Dictionary<string, string>>(HttpContext.Request.Form["ig_transactions"]);

	    foreach (Transaction<Dictionary<string, string>> t in transactionsDict)
	    {
			...
			if (t.type == "row")
	        {
	            DataRow dr =    dt.Rows.Find(Int32.Parse(t.rowId));
	            if (t.row["Name"] != null)
	            {
	                dr["Name"] = t.row["Name"];
	            }
	            if (t.row["DateOfHire"] != null)
	            {
	                String dateString = t.row["DateOfHire"];
	                dateString = dateString.Replace("/Date(", "");
	                dateString = dateString.Replace(")/", "");
	                long lngString = Int64.Parse(dateString);
	                DateTime origin = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
	                DateTime dateValue = origin.AddSeconds(lngString / 1000);
	                dr["DateOfHire"] = dateValue;
	            }
	            if (t.row["Site"] != null)
	            {
	                dr["Site"] = t.row["Site"];
	            }
	            if (t.row["OnSite"] != null)
	            {
	                dr["OnSite"] = Boolean.Parse(t.row["OnSite"]);
	            }
	            if (t.row["DepartmentID"] != null)
	            {
	                dr["DepartmentID"] = Int32.Parse(t.row["DepartmentID"]);
	            }
	            dt.AcceptChanges();
	        }
	    }
	    JsonResult result = new JsonResult();
	    Dictionary<string, bool> response = new Dictionary<string, bool>();
	    response.Add("Success", true);
	    result.Data = response;
	    return result;
	}
	```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Binding igHierarchicalGrid to DataSet](igHierarchicalGrid-Binding-to-DataSet.html): This topic shows how to configure the `igHierarchicalGrid` ™ control in order to bind it to `DataSet`


### <a id="resources"></a> Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

- [Newtonsoft serializer](http://www.newtonsoft.com/json): The home page of Json.NET serializer.










