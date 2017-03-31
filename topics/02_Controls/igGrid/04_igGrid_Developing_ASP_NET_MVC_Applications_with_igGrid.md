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
%%ProductName%% is a JavaScript-based [jQuery UI](http://jqueryui.com/) control suite that you can use to build rich, interactive web applications. When %%ProductName%% is paired with ASP.NET MVC, you have the option to use JavaScript directly or with the MVC Helpers provided in %%ProductName%%.

The MVC Helpers are a collection of .NET classes and extension methods that generate the HTML markup and JavaScript required to work with %%ProductName%% controls. Once rendered to the page, there is very little difference between code you may write by hand using a JavaScript-only approach and what is rendered by %%ProductName%% MVC Helpers, but using the helpers may be a good choice for you if:

* You are implementing remote features like remote load-on-demand, remote paging, remote filtering, etc.

* You feel more comfortable working with MVC view engine syntax or in managed code rather than HTML and JavaScript

This document is focused specifically on explaining the igGrid MVC Helper. Along the way you'll become familiar with the different syntax options available when constructing a view as well as the different approaches available to you in working with the server to provide data to the grid.

> **Note:** This document shows sample code using the Razor view engine and in C#.


### In this topic
- [**Getting Started**](#getting-started)
	- [Referencing the %%ProductName%% MVC Assembly](#referencing-igniteui-mvc-assembly)
	- [Referencing Styles and Scripts](#referencing-styles-and-scripts)
- [**Syntax Variations**](#syntax-variations)
 	- [Grid Model](#syntax-grid-model)
 	- [Chanining](#syntax-chaining)
- [**Data Source Definition Variations**](#data-source-variations)
	- [Serialized Data](#data-source-serialized-data)
	- [Asynchronous Data](#data-source-asynchronous-data)
- [**Related Content**](#related-content)
	- [Related Topics](#related-topics)

## <a id="getting-started"></a> Getting Started
Before you can use the igGrid MVC Helper, you must first create a reference to the `Infragistics.Web.Mvc` assembly and reference the proper scripts and style sheets on your page.

### <a id="referencing-igniteui-mvc-assembly"></a>Referencing the %%ProductName%% MVC Assembly
Begin by creating a reference in your ASP.NET application to the %%ProductName%% MVC assembly which is found at this location:

```
%%InstallPath%%\MVC\<MVC_VERSION_NUMBER>\Bin\Infragistics.Web.Mvc.dll
```

### <a id="referencing-styles-and-scripts"></a>Referencing Styles and Scripts
Next, you need to reference the required style sheet and script files on your page.

```html
<link type="text/css" href="css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
<link type="text/css" href="css/structure/infragistics.css" rel="stylesheet" />

<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery-ui.js"></script>
<script type="text/javascript" src="infragistics.core.js"></script>
<script type="text/javascript" src="infragistics.lob.js"></script>
```
> **Note**: Due to the nature of how the %%ProductName%% MVC Helpers operate, you must include references to jQuery, jQuery UI and %%ProductName%% at the top of the page.

## <a id="syntax-variations"></a>Syntax Variations
When using the %%ProductName%% MVC Helpers, there are a few different parts that compose a page that are relevant to using the igGrid. As a page is requested, Model data is collected in the Controller and passed to the View so the %%ProductName%% MVC Helpers can render the control on the page. In the Controller, you can choose to either pass data directly to the view in the form of an `IQueryable<T>` collection, or pass an instance of the `Infragistics.Web.Mvc.GridModel` class.

> **Note**: The igGrid MVC Helper data source uses LINQ and therefore only accepts instances of `IQueryable<T>`. Even when you opt to use the `GridModel` you will explicitly set the `DataSource` property which requires an instance of `IQueryable<T>` .

Therefore, as you use the igGrid MVC Helper you use syntax that follows a pattern like this:

```html
@(Html.Infragistics().Grid(/* collection or grid model here */)...
```
The `Grid` method supports a number of overloads that give you the ability to select a syntax variation you want to use with the MVC Helper. A "syntax variation" is found while either using data collections (`IQueryable<T>`) or a grid model. The following table shows how the return type of the MVC Helper is affected by the argument you pass in to the Helper's `Grid` method.

Syntax Variation | Primary Argument | Return Type
--- | --- | --- |
Grid Model | IGridModel| MvcHtmlString
Chaining | IQueryable&lt;T&gt; | IGrid&lt;T&gt;

> **Note**: The above table refers to the "Primary Argument" because the MVC helper includes a number of variations in the overloads that include the ability to control the rendered TABLE element's HTML attributes, but the main difference between each of the overloads is the differentiation between either using `IQueryable<T>` or `Infragistics.Web.Mvc.GridModel` instances.

### <a id="syntax-grid-model"></a>Grid Model
The first option available to you in configuring the igGrid is to define all the options for the grid (including the data source) in the controller and simply pass the `GridModel` instance to the Helper. As an example, here a controller creates an instance of the `GridModel` class and sets the `DataSource` property to an instance of an `IQueryable<T>` collection.
```csharp
using Infragistics.Web.Mvc;

...

public class GridModelController : Controller
{
    public ActionResult Index()
    {
        PersonRepository repository = new PersonRepository();

        GridModel model = new GridModel();
        model.DataSource = repository.GetAll();

        return View(model);
    }
}
```
Now with the grid model being sent to the view, the MVC Helper is passed the view's Model to render the control.

```html
@using Infragistics.Web.Mvc
@model Infragistics.Web.Mvc.GridModel

...

@(Html.Infragistics().Grid(Model))
```
Notice that the page requires a `using` directive to import `Infragistics.Web.Mvc` at the top of the page to make the API available in the view. The `model`'s declared type is `Infragistics.Web.Mvc.GridModel` which matches what was passed to the view by the controller. Since the return type for the `Grid` method in this case is `MvcHtmlString` (which ultimately is the rendered string of HTML and JavaScript for the page), no further method calls are required to render the control.

<a id="grid-model-source"></a>If you were to view the source of the page rendered as a result of this example you will see something like this:

```html
<table id="Grid1"></table>

<script type="text/javascript">$(function () {$('#Grid1').igGrid({ dataSource: {"Records":[{"Name":"John Smith","Age":45},{"Name":"Mary Johnson","Age":32}],"TotalRecordsCount":0,"Metadata":{"timezoneOffset":-25200000}},dataSourceType: 'json',autoGenerateColumns: false,autoGenerateLayouts: false,mergeUnboundColumns: false, responseDataKey: 'Records', generateCompactJSONResponse: false, enableUTCDates: true, columns: [ { key: 'Name', headerText: 'Name', width: null, dataType: 'string' }, { key: 'Age', headerText: 'Age', width: null, dataType: 'number' } ], features: [ { sortUrlKey: 'sort', sortUrlKeyAscValue: 'asc', sortUrlKeyDescValue: 'desc', name: 'Sorting' } ], localSchemaTransform: false });});</script>
```
It's not important for you to understand everything in this code listing at the moment, but this is included to help you get an understanding of the type of code rendered as you use the MVC Helper. Notice that a HTML `TABLE` element is generated with an `ID` of `Grid1`. Then in the `SCRIPT` element, just after the jQuery `ready` anonymous function, is the jQuery selector of `$('#Grid1')` runs which associates the data and options to the declared `TABLE` element.

#### Settings, Columns and Features
When you want to have fine-grained control over the settings and features of the grid, you simply need to appropriately compose the object model for the grid. The following listing demonstrates how to:

* Disable automatic column generation
* Explicitly configure columns
* Enable multiple sorting on the grid
* Disable sorting for a specific column

<a id="grid-model-features-source"></a>Here is the controller code that initializes the grid model:

```csharp
public ActionResult Index()
{
    PersonRepository repository = new PersonRepository();
    GridModel model = new GridModel();
    model.AutoGenerateColumns = false;

    GridColumn nameColumn = new GridColumn();
    nameColumn.Key = "Name";
    nameColumn.HeaderText = "Name";
    nameColumn.DataType = "string";

    GridColumn ageColumn = new GridColumn();
    ageColumn.Key = "Age";
    ageColumn.HeaderText = "Age";
    ageColumn.DataType = "number";

    model.Columns.Add(nameColumn);
    model.Columns.Add(ageColumn);

    GridSorting sorting = new GridSorting();
    sorting.Mode = SortingMode.Multiple;

    ColumnSortingSetting colSetting = new ColumnSortingSetting();
    colSetting.ColumnKey = "Name";
    colSetting.AllowSorting = false;

    sorting.ColumnSettings.Add(colSetting);

    model.Features.Add(sorting);

    model.DataSource = repository.GetAll();

    return View(model);
}
```

### <a id="syntax-chaining"></a>Chaining
As an alternative to defining the grid model in the controller, you may choose to use the chaining syntax. When you pass in a collection of data into the MVC Helper, the `Grid` method returns an instance of `IGrid` that exposes a fluent interface allowing you to chain method calls to define the control on your page.

Consider a Controller where data is passed to the view as an `IQueryable<T>` collection:

```csharp
using Infragistics.Web.Mvc;

...

public class ChainedController : Controller
{
    public ActionResult Index()
    {
        PersonRepository repository = new PersonRepository();
        IQueryable<Person> people = repository.GetAll();
        return View(people);
    }
}
```

Here the igGrid's MVC Helper passed the collection via the page's `Model`.

```html
@using Infragistics.Web.Mvc
@model System.Linq.IQueryable<HelloMVC.Models.Person>

...

@(Html.Infragistics()
      .Grid(Model)
      .DataBind()
      .Render())
```
Here again the page requires a `using` directive make the `Infragistics.Web.Mvc` API available in the view. The `model` is defined to match the incoming type as determined by what the controller passes to the view. In this case the type is `System.Linq.IQueryable<HelloMVC.Models.Person>`.

As the grid is declared, the `Grid` method is called and the `Model` is passed in as the primary argument. The call to `DataBind` is necessary in order to serialize the data from the server to the client. Finally, `Render` is called to tell the Helper to render the HTML element and JavaScript required to render the control to the page.

The resulting HTML and JavaScript is the same as shown in the previous [Grid Model](#grid-model-source) section.

#### Settings, Columns and Features
When using chaining, you use a similar approach as you might when using the grid model in order to take fine-grained control over the grid. Instead of building the object graph up in the controller, you declaratively define the specifics for the grid using the fluent interface.

The following listing demonstrates how to:

* Disable automatic column generation
* Explicitly configure columns
* Enable multiple sorting on the grid
* Disable sorting for a specific column

<a id="chaining-features-source"></a>Implementing these details using chaining looks like this:

```html
@(Html.Infragistics()
      .Grid(Model)
      .AutoGenerateColumns(false)
      .Columns(column =>
      {
          column.For(x => x.Name).HeaderText("Full Name");
          column.For(x => x.Age).HeaderText("Age");
      })
      .Features(f => f.Sorting()
                      .Mode(SortingMode.Multiple)
                      .ColumnSettings(settings => {
                        settings.ColumnSetting()
                                .ColumnKey("Name")
                                .AllowSorting(false);
      }))
      .DataBind()
      .Render())
```
The Helper uses lambda expressions in order to compose the object graph in Razor in much the same way you would in C# in the controller. Other than the use of lambdas, notice how all declarations are stated with parenthesis, even you are setting a property's value (like setting `AutoGenerateColumns` to `false`).

> **Note:** When you are defining columns using chaining, you do not need to specify the underlying data’s data type, unless you would like to override the automatically inferred data type of the column.

## <a id="data-source-variations"></a>Data Source Definition Variations
Along with syntax variations, the grid is flexible enough to allow for different approaches when binding to data. You can either choose to have the grid rendered along with serialized data by explicitly setting the `DataSource`, or you can allow the grid to be initially rendered empty and allow for subsequent request to fetch data for the grid by providing a `DataSourceUrl` value.

> **Note**: While this section discusses serialized and asynchronous data independently, you may choose to mix the approaches in your applications as both techniques will work together.

### <a id="data-source-serialized-data"></a>Serialized Data
All of the code used so far in this tutorial have provided data for the `DataSource` of the grid which ends up serializing all the data as JSON into the HTML page. ([Click here to see an example of how what serialized data looks like.](#grid-model-source))To revisit these examples you can take a look at how this is accomplished via the [grid model](#grid-model-features-source) as well as with [chaining](#chaining-features-source).

### <a id="data-source-asynchronous-data"></a>Asynchronous Data
If you want remote features enabled, then you may want to set up the grid to support asynchronous requests in order to retrieve data. The following code demonstrates how to use chaining in order to initially render a grid which then gets it's data from a separate location:

> **Note**: When supporting asynchronous data, you must set `AutoGenerateColumns` to `false` and explicitly define grid columns.

The following controller sets the `GridModel`'s `DataSourceUrl` property to an action method that returns JSON data. The `Data` method also return a `GridModel`, but sends it back with data associated to the `DataSource`:

```csharp
using Infragistics.Web.Mvc;

...

public class AsyncController : Controller
{
    private GridModel GetModel()
    {
        GridModel model = new GridModel();
        model.AutoGenerateColumns = false;

        GridColumn nameColumn = new GridColumn();
        nameColumn.Key = "Name";
        nameColumn.HeaderText = "Name";
        nameColumn.DataType = "string";

        GridColumn ageColumn = new GridColumn();
        ageColumn.Key = "Age";
        ageColumn.HeaderText = "Age";
        ageColumn.DataType = "number";

        model.Columns.Add(nameColumn);
        model.Columns.Add(ageColumn);

        model.DataSourceUrl = "/async/data";
        return model;
    }

    public ActionResult Index()
    {
        GridModel model = this.GetModel();

        return View(model);
    }

    public JsonResult Data()
    {
        PersonRepository repository = new PersonRepository();
        GridModel model = GetModel();
        model.DataSource = repository.GetAll();
        return model.GetData();
    }
}
```
The associated View for this controller is:

```html
@using Infragistics.Web.Mvc

@model Infragistics.Web.Mvc.GridModel

@(Html.Infragistics().Grid(Model))
```

## <a id="related-content"></a>Related Content
### <a id="related-topics"></a>Topics
* [igGrid Overview](iggrid-overview.html)
* [Adding Controls to an MVC Project](adding-netadvantage-controls-to-an-mvc-project.html)