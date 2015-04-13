<!--
|metadata|
{
    "fileName": "iggrid-developing-asp-net-mvc-applications-with-iggrid",
    "controlName": "igGrid",
    "tags": ["Grids","MVC"]
}
|metadata|
-->

# Developing ASP.NET MVC Applications with igGrid

## Overview

The ASP.NET MVC wrapper for the Ignite UI® Grid, or `igGrid`, wraps the already client-only grid in a server-side set of MVC Extensions that allows the grid to be defined and used in the following way:

```
<%= Html.Infragistics().Grid(Model); %>
```

There is no dependence on ASP.NET or any other framework different than MVC. All the code for the MVC wrapper is contained in the *Infragistics.Web.Mvc* assembly, which comes compiled against both MVC2 and MVC3.

Apart from simply wrapping all functionality (options, API, etc.) the MVC wrapper encapsulates much of the data-binding related logic that facilitates paging, sorting, and filtering. You do not need to write any custom code to handle these features; you are only required to point the `DataSource` to an instance of an `IQueryable` object.

## Chaining Syntax

You have two different options of defining the grid in an MVC application available. The first is by configuring a `GridModel` class and passing it as an argument in the grid extension method, and the other is to configure everything in the View using a chaining approach.

## Configuring the Grid Using a GridModel

Using a grid model class relies on the controller to configure the grid. This is useful in a scenario where after a request (such as page change or filtering), you need to retrieve some of the settings/properties with which the grid was configured – which wouldn’t be otherwise available if you would have used chaining to configure everything in the View.

Listing 1: Declaring the grid in an MVC application using `GridModel`

**In C#: Model code (ASP.NET MVC)**

```
public class GridFilteringModel
{
        public GridFilteringModel()
    {
           //The GridModel class holds all the properties for the MVC grid.
           GridFiltering = new Infragistics.Web.Mvc.GridModel();
    }

public Infragistics.Web.Mvc.GridModel GridFiltering { get; set; }
}
```

> **Note:** The `GridModel` base class provides access to all of the MVC Grid properties and methods.

**In C#: Controller code (ASP.NET MVC)**

```
[ActionName("Filtering")]
public ActionResult GridFiltering()
{
   GridFilteringModel model = new GridFilteringModel();
   model.GridFiltering.DataSourceUrl = Url.Action("BindGridFiltering");
   this.InitializeSortingGridOptions(model.GridFiltering);
   return View(model);
}
private void InitializeSortingGridOptions(GridModel model)
{
   model.Height = "500px";
   model.Columns.Add(new GridColumn("Product ID", "ProductID", "number", "100px"));
   model.Columns.Add(new GridColumn("Product Name", "Name", "string", "300px"));
   model.Columns.Add(new GridColumn("Product Number", "ProductNumber", "string", "205px"));
   model.Columns.Add(new GridColumn("Standard Cost", "StandardCost", "number", "110px"));
   GridFiltering filtering = new GridFiltering();
   model.Features.Add(filtering);
}
```

**In ASPX/CSHTML:**

  ```
  <%= Html.Infragistics().Grid("grid1", Model.GridFiltering)%>
  ```

## Configuring the Grid Using Chaining

Initializing the grid with the chaining syntax moves all creation and configuration logic to the view, making the controller code extremely concise and clear. Defining the grid in the view is achieved by exposing required properties and methods in the grid through wrapper methods that always return the same object that called them. For complex objects such as `ColumnSettings` or Columns, lambda expression builders are used in order to achieve the syntax as shown in Listing 2.

Listing 2: Declaring the grid in an MVC application using chaining

**In C#: Model code (ASP.NET MVC)**

```
N/A
```

**In C#: Controller code (ASP.NET MVC)**

```
[ActionName("cell-selection")]
    public ActionResult GridSelection()
    {
        var ds = this.DataRepository.GetDataContext().MyComplexProducts;
        return View("CellSelection", ds);
    }
```

**In ASPX/CSHTML:**

```
<%= Html.Infragistics().Grid(Model).ID("grid1").Columns(column =>
    {
        column.For(x => x.ProductID).HeaderText("Product ID").Width("100px");
        column.For(x => x.Name).HeaderText("Product Name").Width("250px");
        column.For(x => x.ModifiedDate).HeaderText("Modified Date").Width("200px");
        column.For(x => x.ListPrice).HeaderText("List Price").Width("130px");
        }).Features(features => {
            features.Selection().Mode(SelectionMode.Cell).MultipleSelection(true);
        }).Height("500px").DataSourceUrl(Url.Action("PagingGetData")).DataBind().Render()%>
```

## Data Binding

All data binding in the MVC grid wrapper is done using LINQ. Therefore the `DataSource` property only accepts instances of `IQueryable`.

There are two important properties to consider when data binding the grid, the `DataSource`, and the `DataSourceUrl`. If you specify a `DataSource` initially when rendering the page for the first time, the grid automatically sends the data inline as part of the grid initialization JavaScript code. Therefore only one request is made to render the grid and bind to data.

If you specify `DataSourceUrl`, and don’t specify `DataSource`, the grid is rendered empty, and a second request will be made to the `DataSourceUrl` to fetch the data. This is particularly useful in situations where you are loading the grid from an MVC application, but binding to a WCF web service that is hosted in the same application.

In order to use the Paging, Filtering and Sorting features, you must specify a `DataSourceUrl` property. This is the URL mapped to a controller action, which is invoked whenever a feature makes a request to the server. The way to mark a controller action to return pure JSON is described in Listing 3.

Listing 3: marking a controller action with the `GridDataSourceAction` attribute

**In C#: Controller code (ASP.NET MVC)**

```
[GridDataSourceAction]
[ActionName("PagingGetData")]
public ActionResult PagingGetData()
{
   var ds = this.DataRepository.GetDataContext().MyComplexProducts;
   return View("RowSelection", ds);
}
```

**In ASPX/CSHTML:**

 ```
 <%= Html.Infragistics().Grid(Model).ID("grid1").Columns(column =>
    {
        column.For(x => x.ProductID).HeaderText("Product ID").Width("100px");
        column.For(x => x.Name).HeaderText("Product Name").Width("250px");
        column.For(x => x.ModifiedDate).HeaderText("Modified Date").Width("200px");
        column.For(x => x.ListPrice).HeaderText("List Price").Width("130px");
        }).Features(features => {
            features.Selection().Mode(SelectionMode.Cell).MultipleSelection(true);
        }).Height("500px").DataSourceUrl(Url.Action("PagingGetData")).DataBind().Render()%>
 ```

As explained, the MVC grid translates URL parameters to LINQ expressions and clauses, therefore all paging, sorting, filtering comes out of the box.

## Using the Grid in an MVC Application

To get started with the `igGrid` control in an ASP.NET MVC application, you first need to include the relevant script references in your view – they are detailed in Listing 4.

Listing 4: CSS and Script references

**In HTML:**
```html

<link type="text/css" href="css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
<link type="text/css" href="css/structure/infragistics.css" rel="stylesheet" />
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery-ui.js"></script>
<script type="text/javascript" src="infragistics.core.js"></script>
<script type="text/javascript" src="infragistics.lob.js"></script>
```

There are several ways to define grid columns. By default `AutoGenerateColumns` is enabled, therefore if you don’t manually specify columns, they are inferred from the underlying business object in your data source and created programmatically on the client.

Another way is to define columns is to use chaining, and the last approach is to define the columns using an instance of the `GridModel` class.

> **Note:** When you are defining columns using chaining, you do not need to specify the underlying data’s data type, unless you would like to override the automatically inferred data type of the column.

You can easily enable features and configure them directly in the View, using the following chaining syntax given in Listing 5 (relevant code is in bold).

> **Note:** Make sure to add a reference to the *Infragistics.Web.Mvc* assembly in your project.

Listing 5: Enabling grid features in the View

**In ASPX/CSHTML:**

```
<%= Html.Infragistics().Grid(Model).ID("grid1").Height("400px").Columns(column =>
    {
        column.For(x => x.ProductID).HeaderText("Product ID");
        column.For(x => x.Name).HeaderText("Product Name");
        column.For(x => x.ModifiedDate).HeaderText("Modified Date");
        column.For(x => x.ListPrice).HeaderText("List Price");
        }).Features(features => {
            features.Filtering().Mode(FilterMode.Advanced).ColumnSettings(settings =>
            {
                settings.ColumnSetting().ColumnKey("ProductID").AllowFiltering(false);
            });
        }).DataSourceUrl(Url.Action("GridGetData")).DataBind().Render()%>
```

## Related Content

### Topics

-   [igGrid Overview](igGrid-Overview.html)

 

 


