<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-populating-with-data-remotely",
    "controlName": "igGrid",
    "tags": ["API","Grids","How Do I"]
}
|metadata|
-->

# Populating Unbound Columns Remotely (igGrid)

## Topic Overview

### Purpose

This topic demonstrates, with code samples how to set unbound column values on the server.

### Required Background

The following topics are prerequisites to understanding this topic:

- [Unbound Columns Overview](igGrid-UnboundColumns-Overview.html): This topic provides an overview of the Unbound Columns feature of the `igGrid`.

- [Setting a Column as Unbound (igGrid)](igGrid-UnboundColumns-Setting-Column-as-Unbound.html): This topic demonstrates how to set up an Unbound Column for the `igGrid` on the client and on the server. It includes JavaScript and ASP.NET code snippets.

- [Populating Unbound Columns Overview (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Overview.html): This topic provides a conceptual overview of how an unbound column can be populated with data and briefly explains the options (local/remote).


### In this topic

This topic contains the following sections:

-   [**Populating Unbound Columns with Data Remotely – Conceptual Overview**](#overview)
	-   [Populating Unbound Columns with Data Remotely Scenarios](#scenarios)
-   [**Code Examples**](#code-examples)
-   [**Populating unbound column in the View with chaining using the UnboundValues method (Code Example)**](#UnboundValues-pk)
    -   [Description](#UnboundValues-description)
    -   [Code](#UnboundValues-code)
-   [**Populating unbound column in the Controller by using the primary key (Code Example)**](#primary-key)
    -   [Description](#primary-key-description)
    -   [Code](#primary-key-code)
-   [**Populating unbound column in Controller without using the primary key (Code Example)**](#without-primary-key)
    -   [Description](#without-primary-key-description)
    -   [Code](#without-primary-key-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Populating Unbound Columns with Data Remotely – Conceptual Overview

The `igGrid` supports unbound columns by default, but you will need to configure them. The following table summarizes the configuration options.

<table class="table table-bordered">
	<thead>
		<tr>
            <th colspan="2">
To set unbound column value …
			</th>

            <th>
Do this…
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
In View using chaining
			</td>
            <td>
Serializes unbound values on the client as part of the column definition
			</td>
            <td>
Use the `UnboundColumnWrapper.UnboundValues(List list)` method, which is equivalent to the client side property `unboundValues`. It will serialize  the object list in the `unboundValues` property on the client as part of column definition.
			</td>
        </tr>

        <tr>
            <td>
			</td>
            <td>
Sets unbound column values by primary key
			</td>
            <td>
Use the `Grid.SetUnboundValues(string key, Dictionary values)` method in the View.
			</td>
        </tr>

        <tr>
            <td>
			</td>
            <td>
Sets unbound column values without using primary key
			</td>
            <td>
Use the `Grid.SetUnboundValues(string key, List values)` method in the View.
			</td>
        </tr>

        <tr>
            <td>
In Controller using `GridModel` class
			</td>
            <td>
Serializes unbound values on the client as part of the column definition
			</td>
            <td>
Use the `UnboundColumn.UnboundValues` property.
			</td>
        </tr>

        <tr>
            <td>
			</td>
            <td>
Sets unbound column values by using the primary key
			</td>
            <td>
Use the `GridModel.SetUnboundValues(string key, Dictionary values)` method.
			</td>
        </tr>

        <tr>
            <td>
			</td>
            <td>
Sets unbound column values without using the primary key
			</td>
            <td>
Use the `GridModel.SetUnboundValues(string key, List values)` method.
			</td>
        </tr>
    </tbody>
</table>



### <a id="scenarios"></a> Populating Unbound Columns with Data Remotely Scenarios

The following table summarizes the supported scenarios of the `igGrid` Remotely Populating Unbound Columns with Data.

#### Legend:

<table class="table">
	<tbody>
		<tr>
			<td>
![](../../../../../../../images/images/positive.png)
			</td>
			<td>
				Workaround available
			</td>
		</tr>

		<tr>
			<td>
![](../../../../../../../images/images/negative.png)
			</td>
			<td>
				No known workaround
			</td>
		</tr>

		<tr>
			<td>
![](../../../../../../../images/images/plannedFix.png)
			</td>
			<td>
				Fix planned
			</td>
		</tr>
	</tbody>
</table>

 | Remote data (DataSourceUrl is set) | MergeUnboundColumns option value | Local Features | Remote features
---|---|---|---|---
In View using `SetUnboundValues(` `string columnKey, List unboundValues)` | No | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are not applicable because DataSourceUrl is not set.
 |  | false |  | 
 | Yes Unbound columns are not populated with data, because the Grid configuration in View is not persisted. That is to say that the grid configuration is restored with the default values for all the settings and MergeUnboundColumns are false by default. | true | ![](../../../../../../../images/images/negative.png) | ![](../../../../../../../images/images/negative.png) igGrid Disables Remote features for the unbound column as described in the [Known Issues and Limitations](igGrid-Known-Issues.html) topic.
 |  | false |  | 
In View using `SetUnboundValues( string columnKey, Dictionary unboundValues)` | No | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are not applicable because DataSourceUrl is not set.
 |  | false |  | 
 | Yes Unbound columns will not be populated with data, because Grid configuration in View is not persisted and MergeUnboundColumns will be false. | true | ![](../../../../../../../images/images/negative.png) | ![](../../../../../../../images/images/negative.png) Remote features are disabled for the unbound column as described in the [Known Issues and Limitations](igGrid-Known-Issues.html) topic.
 |  | false |  | 
In Model using `SetUnboundValues(` `string columnKey, List unboundValues)` | No | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are not applicable because DataSourceUrl is not set.
 |  | false |  | 
 | Yes Populates unbound columns with data, but enabeling remote paging causes the data to be the same on each page as described in the [Known Issues and Limitations](igGrid-Known-Issues.html) topic. | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are disabled for the unbound column as described in the [Known Issues and Limitations](igGrid-Known-Issues.html) topic.
 |  | false |  | 
In Model using `SetUnboundValues(` `string columnKey, Dictionary unboundValues)` | No | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are not applicable because DataSourceUrl is not set.
 |  | false |  | 
 | Yes | true | ![](../../../../../../../images/images/positive.png) | ![](../../../../../../../images/images/negative.png) Remote features are disabled for the unbound column as described in the [Known Issues and Limitations](igGrid-Known-Issues.html) topic.
 |  | false |  | 




## <a id="code-examples"></a> Code Examples

The following table lists the code examples included in this topic.

- [Populating unbound column in the View with chaining by using the primary key](#UnboundValues-pk): This example demonstrates populating an unbound column with values in the View using the `Grid<T>.SetUnboundValues(string key, Dictionary<object, object> values)` overloaded method.

- [Populating unbound column in the View with chaining without using the primary key](#UnboundValues-without-pk): This example demonstrates populating an unbound column with values in the Controller using the `Grid<T>.SetUnboundValues(string key, List<object> values)` overloaded method.

- [Populating unbound column in the Controller by using the primary key](#primary-key): This example demonstrates populating an unbound column with values in the Controller using the `GridModel.SetUnboundValues(string key, Dictionary<object, object> values)` overloaded method.

- [Populating unbound column in the Controller without using the primary key](#without-primary-key): This example demonstrates populating an unbound column with values in the Controller using the `GridModel.SetUnboundValues(string key, List<object> values)` overloaded method.




## <a id="UnboundValues-pk"></a> Populating unbound columns in the View with chaining using the primary key (Code Example)

### <a id="UnboundValues-description"></a> Description

This example uses the `Grid<T>.SetUnboundValues(string key, Dictionary<object, object> values)` method to set unbound column data.

This overload accepts two parameters: “Column key” and a Dictionary of `<PrimaryKey, Unbound Value>` pairs. The `PrimaryKey` in the dictionary points to a primary key of a row in the `igGrid` and the “Unbound Value” is the value that is set in the unbound column whose key is equal to “Column key.”

> **Note:** Only use this overload after defining a primary key.

When using the `SetUnboundValues` and `MergeUnboundColumns = TRUE`, the unbound values are added to the bound data after performing any paging, sorting, filtering, etc. operations because there is a clearly defined correlation between a row identifier and unbound value meaning that there is no need to take additional actions when paging/sorting/filtering are remote.

### <a id="UnboundValues-code"></a> Code

Model:

**In C#:**

```csharp
namespace UnboundColumns.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string ProductNumber { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
```

This is a very simple Product model which contains four fields.

View:

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<UnboundColumns.Models.Product>
@(Html.Infragistics()
.Grid(Model)
.ID("grid1")
.PrimaryKey("ProductID")
.AutoGenerateColumns(false)
.Columns(col =>
{
    col.For(c => c.ProductID).HeaderText("Product ID");
    col.Unbound("InStock")
        .HeaderText("In Stock")
        .DataType("bool");
})
.MergeUnboundColumns(true)
.SetUnboundValues("InStock", (Dictionary<object, object>)ViewData["ProductsInStock"])
.DataBind()
.Render())
```

The View is very simple. It has a strongly typed model `IQueryable<UnboundColumns.Models.Product>`. This is the model used by the Grid MVC wrapper to bind to data. Grid is configured with one unbound column with key `InStock` which is bound to data by a call to `Grid<T>.SetUnboundValues(string columnKey, List<object> unboundValues)`. The code defines the primary key so that the Grid Wrapper matches the unbound values with the grid data by primary key.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        Dictionary<object, object> productsInStock =
        new Dictionary<object, object>();
        productsInStock.Add(1, true);
        productsInStock.Add(2, false);
        productsInStock.Add(3, false);
        ViewData["ProductsInStock"] = productsInStock;
        return View(this.GetProducts().AsQueryable());
    }
    private List<Product> GetProducts()
    {
        List<Product> products = new List<Product>()
        {
            new Product() { ProductID = 1, Name = "Adjustable Race", ProductNumber = "AR-5381" },
            new Product() { ProductID = 2, Name = "Bearing Ball", ProductNumber = "BA-8327" },
            new Product() { ProductID = 3, Name = "BB Ball Bearing", ProductNumber = "BE-2349" }
        };
        return products;
    }
}
```

The Controller contains two methods. `GetProducts` is a private method which returns a sample list of products. `Index` action method constructs the unbound values dictionary instance called `productsInStock` and saves it in the `ViewData` variable with key `ProductsInStock`. Finally `GetProducts` result is passed to the View.



## <a id="UnboundValues-without-pk"></a> Populating unbound column in the View with chaining without using the primary key (Code Example)

### Description

This overload accepts a Column Key and List of values as parameters. The values from the list are set in the column’s cells with the specified “Column Key.” Will throw a custom exception if you failed to provide an unbound column with the specified key or the key is of bound column.

Use this method if a primary key is undefined.

If there is a defined primary key, we recommend you to use the overload `GridModel.SetUnboundValues(string key, Dictionary<object, object> values)`. Using the list in this case negatively affects performance because the whole data source is traversed in order to create a correlation between the row identifier and the list items. Make the relationship according the order of the items in the unbound list of values.

It sets as many values as the list contains. If the number of the rows is greater than the list’s length, than the remaining rows are not filled.

> **Note:** The use of `Grid<T>.SetUnboundValues (<Column key>, <List of values>)` overload without a defined primary key results in no mapping existing between the primary key, or some other row identifier, and the unbound values. Consider this when using remote filtering, sorting or paging.

When using `SetUnboundValues` and `MergeUnboundColumns = “true”`, adds the unbound values to the bound data after performing any paging, sorting, filtering, etc. operations.

### Code

Model:

**In C#:**

```csharp
namespace UnboundColumns.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string ProductNumber { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
```

This is a very simple Product model which contains four fields.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        List<object> productsInStock =
        new List<object>();
        productsInStock.Add(true);
        productsInStock.Add(false);
        productsInStock.Add(false);
        ViewData["InStock"] = productsInStock;
        return View(this.GetProducts().AsQueryable());
    } 
    private List<Product> GetProducts()
    {
        List<Product> products = new List<Product>()
        {
            new Product() { ProductID = 1, Name = "Adjustable Race", ProductNumber = "AR-5381" },
            new Product() { ProductID = 2, Name = "Bearing Ball", ProductNumber = "BA-8327" },
            new Product() { ProductID = 3, Name = "BB Ball Bearing", ProductNumber = "BE-2349" }
        };
        return products;
    }
}
```

The Controller contains two methods. `GetProducts` is a private method that returns a sample list of products, while the public `Index` action method creates a list of objects used by the unbound column. This list is saved in the `ViewData` variable called `InStock`. Finally, the `Index` action method passes the product’s data to the view.

View:

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<UnboundColumns.Models.Product>
@(Html.Infragistics()
.Grid(Model)
.ID("grid1")
.AutoGenerateColumns(false)
.Columns(col =>
{
    col.Unbound("InStock")
        .HeaderText("In Stock")
        .DataType("bool");
})
.SetUnboundValues("InStock", (List<object>)ViewData["InStock"])
.DataBind()
.Render())
```

The strongly typed View is with model `IQueryable<UnboundColumns.Models.Product>`. The Grid MVC wrapper uses this model to bind to data. The code configures the grid with one unbound column with key `InStock` bound to data by a call to `UnboundColumnWrapper<T>.UnboundValues(List<object> list)`.



## <a id="primary-key"></a> Populating unbound column in the Controller by using the primary key (Code Example)

### <a id="primary-key-description"></a> Description

This example uses the `GridModel.SetUnboundValues(string key, Dictionary<object, object> values)` method to set unbound column data.

This overload accepts two parameters: “Column key” and a Dictionary of
`<PrimaryKey, Unbound Value>` pairs. The PrimaryKey in the dictionary points to a primary key of a row in the `igGrid` and the “Unbound Value” is the value which is set in the unbound column with key equal to “Column key.”

> **Note:** Only Use this overload when a primary key is defined

When using the `SetUnboundValues` and `MergeUnboundColumns = TRUE`, it adds the unbound values to the bound data after performing any paging, sorting, filtering, etc. operations because there is a clearly defined correlation between a row identifier and unbound value meaning that there is no need to take additional actions when remotely paging/sorting/filtering.

### <a id="primary-key-code"></a> Code

Model:

**In C#:**

```csharp
namespace UnboundColumns.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string ProductNumber { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
```

This is a very simple Product model containing four fields.

View:

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model GridModel
@Html.Infragistics().Grid(Model)
```

The View is very simple with a strongly typed `GridModel` model used to configure the grid in the Controller.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        GridModel gridModel = GetGridModel();
        return View(gridModel);
    }
    private GridModel GetGridModel()
    {
        GridModel gridModel = new GridModel();
        gridModel.DataSource = this.GetProducts().AsQueryable();
        gridModel.PrimaryKey = "ProductID";
        gridModel.AutoGenerateColumns = false;
        gridModel.MergeUnboundColumns = true;
        gridModel.Columns.Add(new GridColumn()
        {
            Key = "ProductID",
            HeaderText = "Product ID"
        });
        gridModel.Columns.Add(new UnboundColumn()
        {
            Key = "InStock",
            HeaderText = "In Stock"
        });
        Dictionary<object, object> productsInStock =
        new Dictionary<object, object>();
        productsInStock.Add(1, true);
        productsInStock.Add(2, false);
        productsInStock.Add(3, false);
        gridModel.SetUnboundValues("InStock", productsInStock);
        return gridModel;
    }
    private List<Product> GetProducts()
    {
        List<Product> products = new List<Product>()
        {
            new Product() { ProductID = 1, Name = "Adjustable Race", ProductNumber = "AR-5381" },
            new Product() { ProductID = 2, Name = "Bearing Ball", ProductNumber = "BA-8327" },
            new Product() { ProductID = 3, Name = "BB Ball Bearing", ProductNumber = "BE-2349" }
        };
        return products;
    }
}
```

The Controller contains three methods. `GetProducts` is a private method that returns a sample list of products. `Index` action method calls `GetGridModel` method and passes its result to the View. The `GetGridModel` method configures the grid using the `GridModel` class. Note that the `PrimaryKey` property is set. This is mandatory if you want to use this `SetUnboundValues` method overload. In the end of the method a new `Dictionary<object, object>` is created and populated and a call to `GridModel.SetUnboundValues` is made (Usually you will populate the values from another data source or calculate them on the fly).



## <a id="without-primary-key"></a> Populating unbound column in the Controller without using the primary key (Code Example)

### <a id="without-primary-key-description"></a> Description

This overload accepts a Column Key and List of values as parameters. The values from the list are set in the cells of the column with the specified “Column Key”. A custom exception is thrown if there is not an unbound column with the specified key or the key is of bound column.

Use this method even if a primary key is undefined.

If there is a primary key defined, we recommend you to use the overload `GridModel.SetUnboundValues(string key, Dictionary<object, object> values)`. Using the list in this case negatively affects performance because the whole data source is traversed in order to create a correlation between the row identifier and the list items. Make this relation according to the order of the items in the unbound list of values.

It sets as many values as the list contains. If the number of the rows
is greater than the list’s length, than the remaining rows are not
filled.

> **Note:** If you do not assign a primary key and you are using the `GridModel.SetUnboundValues (<Column key>, < List of values >)` overload results in no mapping between the primary key (or some other row identifier) and unbound values. This should be taken into account when using remote Filtering, Sorting, Paging

When using `SetUnboundValues` and `MergeUnboundColumns = “true”`, the unbound values are added to the bound data after performing any paging, sorting, filtering, etc. operations.

### <a id="without-primary-key-code"></a> Code

Model:

**In C#:**

```csharp
namespace UnboundColumns.Models
{
    public class Product
    {
        public int ProductID { get; set; }
        public string Name { get; set; }
        public string ProductNumber { get; set; }
        public DateTime ReleaseDate { get; set; }
    }
}
```

This is a very simple Product model which contains four fields.

View:

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model GridModel
@Html.Infragistics().Grid(Model)
```

The View is very simple consisting of a strongly typed model `GridModel` used to configure the grid in the Controller.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        GridModel gridModel = GetGridModel();
        return View(gridModel);
    }
    private GridModel GetGridModel()
    {
        GridModel gridModel = new GridModel();
        gridModel.DataSource = this.GetProducts().AsQueryable();
        gridModel.AutoGenerateColumns = false;
        gridModel.MergeUnboundColumns = true;
        gridModel.Columns.Add(new UnboundColumn()
        {
            Key = "InStock",
            HeaderText = "In Stock"
        });
        List<object> productsInStock =
        new List<object>();
        productsInStock.Add(true);
        productsInStock.Add(false);
        productsInStock.Add(false);
        gridModel.SetUnboundValues("InStock", productsInStock);
        return gridModel;
    }
    private List<Product> GetProducts()
    {
        List<Product> products = new List<Product>()
        {
            new Product() { ProductID = 1, Name = "Adjustable Race", ProductNumber = "AR-5381" },
            new Product() { ProductID = 2, Name = "Bearing Ball", ProductNumber = "BA-8327" },
            new Product() { ProductID = 3, Name = "BB Ball Bearing", ProductNumber = "BE-2349" }
        };
        return products;
    }
}
```

The Controller contains three methods. `GetProducts` is a private method which returns a sample list of Products. Public Index action method calls the `GetGridModel` method and passes its result to the View. The `GetGridModel` method configures the grid using the `GridModel` class. Note that the `PrimaryKey` property is not set. In the end the method creates and populates a new `List<object>` and makes a call to the `GridModel.SetUnboundValues` (Usually you will populate the values from another data source or calculate them on the fly).


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Populating Unbound Columns Locally (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Locally.html): This topic demonstrates, with code samples how to set unbound column values on the client.

- [Rendering Calculated Values (Unbound Columns, igGrid)](igGrid-UnboundColumns-Rendering-Calculated-Values.html): This topic demonstrates, with code examples how to set up formula function to calculate unbound column values.

- [Optimizing the Grid Performance When Unbound Columns Are Used](igGrid-UnboundColumns-Optimize-Performance.html): This topic discusses client-based vs. server-based merging of unbound columns and the optimization considerations for each. It also demonstrates how the developer can programmatically control where merging can take place.
