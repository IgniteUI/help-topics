<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-binding-to-dataset",
    "controlName": "igHierarchicalGrid",
    "tags": ["Data Binding","Grids","MVC"]
}
|metadata|
-->

# Binding igHierarchicalGrid to a DataSet

## Topic Overview

### Purpose

This topic shows how to configure the `igHierarchicalGrid`™ control in order to bind it to a DataSet.

### Required background

The following topics are prerequisites to understanding this topic:

- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html): This topic explains how to add an `igHierarchicalGrid` to a web page.
- [Binding igGrid to DataTable](igGrid-Binding-to-DataTable.html): This topic shows how to bind the `igGrid` control to a `DataTable` data source
- [Load-on-Demand (igHierarchicalGrid)](igHierarchicalGrid-Load-on-Demand.html): This topic demonstrates the two ways to load data to the `igHierarchicalGrid` – all at once and on demand.



### In this topic

-   [Introduction](#introduction)
    -   [Binding to a DataSet](#binding)
    -   [Load on Demand](#load-on-demand)
-   [Known issues and limitations](#known-issues)
-   [Related Content](#related-content)



## <a id="introduction"></a> Introduction

### <a id="binding"></a> Binding to a DataSet

Starting with version 12.2, the `igHierarchicalGrid` supports data binding to a `DataSet`. Until version 12.1, the `DataSource` property accepted instances of `IQueryable` only.

There is a new property introduced in the `GridModel` - `DataMember`. When set, the grid looks for the name of the `DataTable` matching the `DataMember` value from the `DataSet` to which the grid is bound. The property is useful when `AutoGenerateLayouts` is False and the layouts are defined manually. When `AutoGenerateLayouts` is True, this setting is ignored.

**In C#:**

```csharp
GridModel model = new GridModel();          
DataSet ds = GetEmployDepartmentDataSet();
model.DataSource = ds;
model.AutoGenerateColumns = true;
model.AutoGenerateLayouts = false;
model.DataBind();
// Setting as DataMember of the root grid the name of Departments DataTable 
model.ColumnLayouts[0].DataMember = "Departments";
// Setting as DataMember of the child grid the name of Employees DataTable
model.ColumnLayouts[0].ColumnLayouts[0].DataMember = "Employees";
```

Another change in volume 12.2 is that `AutoGenerateLayouts` is `False` by default.

Binding to a `DataSet` is accomplished in one of the following ways:

#### Return the DataSet from the action method referenced by the grid’s *DataSourceURL* in the view.

In this scenario the model type is `DataSet`, however you may set it to be of type dynamic as well.

**In ASPX:**

```csharp
<%=(Html.Infragistics().Grid<System.Data.DataSet>().ID("grid1").Height("500px")
    .AutoGenerateColumns(true)
    .AutoGenerateLayouts(true)     
    .RenderCheckboxes(true)
    .AutoCommit(false)       
    .Features(features => {
            features.Sorting().Type(OpType.Local).Mode(SortingMode.Single);
            features.Paging().PageSize(5).Type(OpType.Remote);
            features.Updating();
            features.Filtering().Type(OpType.Local);
            features.GroupBy().Type(OpType.Local);
            features.Hiding();
            features.Selection().Mode(SelectionMode.Row).MultipleSelection(true);
            features.RowSelectors();
            features.Resizing();
            features.Tooltips().Visibility(TooltipsVisibility.Always);
        })        
    .GenerateCompactJSONResponse(false)
    .DataSource(Model)
    .DataSourceUrl(Url.Action("dataset-interactions"))
    .UpdateUrl(Url.Action("EditingSaveChanges"))
    .DataBind()
    .Width("100%")
    .Height("100%")
    .Render()) %>
```

**In C#:**

```csharp
[GridDataSourceAction]
[ActionName("dataset-interactions")]
public ActionResult DataSetInteractions()
{
	DataSet ds = this.DepartmentsData;
	return View("DataSetInteractions", ds);
}
```

#### Construct a *GridModel* in the controller and return as the view’s model

**In ASPX:**

```csharp
@model  Infragistics.Web.Mvc.GridModel
@(Html.Infragistics().Grid(Model))
```

**In C#:**

```csharp
GridModel model = new GridModel();
DataSet ds = GetEmployDepartmentDataSet();
model.DataSource = ds;
model.AutoGenerateColumns = true;
model.AutoGenerateLayouts = true;
// defining the grid
return View("BindToDataSet", model);
```

### <a id="load-on-demand"></a> Load on Demand

When binding the `igHierarchicalGrid` to a `DataSet`, `LoadOnDemand` is supported.

When using `LoadOnDemand` with the `igHierarchicalGrid` you need to set both the `DataSource` and `DataSourceUrl`.

**In C#:**

```csharp
GridModel grid = GridLoadOnDemandModel();            
grid.DataSource = GetEmployDepartmentDataSet();
grid.DataSourceUrl = this.Url.Action("NewBindParent");
grid.ColumnLayouts[0].DataSourceUrl = this.Url.Action("NewBindChild");
return View("NewLoadOnDemand", grid);

public JsonResult NewBindChild(string path, string layout)
{
	GridModel model = GridLoadOnDemandModel();           
	model.DataSource = GetEmployDepartmentDataSet();
	model.DataMember = "Employees";
	return model.GetData(path, layout);
}
```

## <a id="known-issues"></a> Known issues and limitations

### When binding to a DataSet with no DataMember set and AutogenerateLayouts is false, the igHierarchicalGrid is bound only to the first table in the DataSet tables collection

When binding to a DataSet with no `DataMember` set and `AutoGenerateLayouts` is false, then the `igHierarchicalGrid` is bound only to the first table in the DataSet collection.

The grid uses the [DataRelations](http://msdn.microsoft.com/en-us/library/system.data.datarelation.aspx) between the tables to build the hierarchy.

1.  The first table in the dataset tables array is used as the root table.
2.  If the DataTables do not have DataRelations, the grid shows the root table only.

In other words, iteration is done through the DataTables’ DataRelations, not the table collection itself.

### Filtering, GroupBy and Sorting features can be only Local type, Summaries feature is not supported

LINQ expressions used internally by the Filtering, Sorting and Grouping features don’t work with `DataTable`s or `DataSet`s.

Due to this initially setting a grouped column via the ColumnSettings option, even when the GroupBy’s Type option is set to Local, is not supported since the GridModel will try to sort the data before sending it to the client. 

Remote Sorting and Filtering can be implemented by manually handling the request and processing the data of the `DataSet` before returning it as a `JsonResult`.

In addition, the Summaries feature is unsupported when using a `DataSet` as the grid’s data source.

**In ASPX:**

```csharp
<%=(Html.Infragistics().Grid<System.Data.DataSet>().ID("grid1").Height("500px")
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
        .Render()) %>
```

**In C#:**

```csharp
GridFiltering filtering = new GridFiltering();
filtering.Type = OpType.Local;
model.Features.Add(filtering);
```

The following features work remotely with the grid:

-   Paging
-   Updating – should be changed to work with the `LoadTransactions` method

#### When updating, a serializer which supports Dictionary&lt;string, string&gt; should be used

The Microsoft JSON serializer doesn’t support deserializing a Dictionary from JSON. If you want to use the updating feature, the `GridModel` must override the `LoadTransactions` method. You can use the Json.NET serializer for this purpose. You can download it from the page below and it is also included in ASP.NET MVC 4 as the default JSON serializer.

[http://james.newtonking.com/projects/json-net.aspx](http://james.newtonking.com/projects/json-net.aspx)

**In C#:**

```csharp
public List<Transaction<T>> LoadTransactionsDictionary<T>(string postdata) where T : class
{
    List<Transaction<T>> transactions = JsonConvert.DeserializeObject<List<Transaction<T>>>(postdata);
    return transactions;
}
```

Another approach is to create strongly-typed models which correspond to the structure of each `DataTable` from the `DataSet`. The fields of the custom type must match the type and key of the `DataColumns` of the `DataTable` that they represent. This model should be used in the LoadTransactions method.

The sample [Editing DataSet](%%SamplesUrl%%/hierarchical-grid/editing-dataset) demonstrates how to use the updating feature when binding to a `DataSet` and passing a model based on the root table’s layout in the `LoadTransactions` method.

### If no primaryKeys are set on the bound DataTables, they should be set on the corresponding GridModel and ColumnLayout objects

When using the *Updating* feature, if `DataTables` have `PrimaryKeys` defined, then the `igHierarchicalGrid` automatically uses them, otherwise this should be set manually on the `ColumnLayouts`. This is needed when the updating feature is enabled.

**In C#:**

```csharp
GridModel grid = new GridModel();
grid.PrimaryKey = "DepartmentID";
```

### Manually creating the columns in igHierarchicalGrid using the ASP.NET MVC helper in the view

When bound to a `DataSet` and manually creating layouts, each `ColumnLayout` should have its `DataMember` set to its corresponding `DataTable`’s name in the dataset tables’ collection.

If the `igHierarchicalGrid` is defined in the view and a `DataSet` is used as the grid’s Model then the columns can only be auto-generated. If you want to define the columns manually, define a model which corresponds to the root `DataTable` structure and set it as the grid’s type.

You should create strongly-typed models which correspond to the structure of each `DataTable` from the `DataSet`. Thus you should be able to use the the grid’s ASP.NET MVC helper in the view.

Note: The fields of the custom type Customer must match the type and key of the DataColumns of the DataTable that they represent.

**In C#:**

```csharp
DataTable dtCustomers = new DataTable("Customers");
dtCustomers.Columns.Add("CustomerID", typeof(int));
dtCustomers.Columns.Add("CustomerName ", typeof(string));
DataTable dtData = new DataTable("Orders");
dtData.Columns.Add("OrderID", typeof(int));
dtData.Columns.Add("CustomerID ", typeof(int));
dtData.Columns.Add("OrderQty", typeof(int));
```

**In C#:**

```csharp
public class Customer
{
    public int CustomerID { get; set; }
    public string CustomerName { get; set; }      
    public List<Order> Orders { get; set; }
}

public class Order
{
    public int OrderID { get; set; }
    public int OrderQty { get; set; }      
}
```

**In ASPX:**

```csharp
// class Customer copies the structure of the root DataTable 
// additionally class Order is created
// and has the same fields as table Orders columns 
@(Html.Infragistics().Grid<Infragistics.Web.Mvc.Samples.Models.Customer>(Model)
.ID("grid1").Height("550px").Width("100%"). PrimaryKey("CustomerID")
        .Columns(column =>
        {
            column.For(x => x.CustomerID).HeaderText(“CustomerID”);
        }).
        ColumnLayouts(layouts => {
            layouts.For(x => x.Orders).ResponseDataKey(String.Empty).Width("100%").ForeignKey("CustomerID").PrimaryKey("OrderID")
.AutoGenerateColumns(false).AutoGenerateLayouts(false)
.Columns(childcolumn =>
                {
                    childcolumn.For(x => x.OrderID).HeaderText(“OrderID”);
                    
                }).Features(features => features.Updating().EditMode(GridEditMode.Row).ColumnSettings(
                    cs => cs.ColumnSetting().ColumnKey("OrderID").ReadOnly(true)
                ));
        })
```


## <a id="related-content"></a> Related Content

### Samples

- [Editing - Edit Dialog](%%SamplesUrl%%/hierarchical-grid/row-edit-dialog): This sample demonstrates how to use the updating feature with edit dialog.
- [Load On Demand](%%SamplesUrl%%/hierarchical-grid/load-on-demand): This sample demonstrates how to use Load On Demand.





 

 


