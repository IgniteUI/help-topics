<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-rendering-calculated-values",
    "controlName": "igGrid",
    "tags": ["Calculations","Grids"]
}
|metadata|
-->

# Rendering Calculated Values (Unbound Columns, igGrid)

## Topic Overview

### Purpose

This topic demonstrates, with code examples how to set up formula functions to calculate unbound column values.

### Required background

The following topics are prerequisites to understanding this topic:

- [Unbound Columns Overview](igGrid-UnboundColumns-Overview.html): This topic provides an overview of the Unbound Columns feature of the `igGrid`.

- [Setting a Column as Unbound](igGrid-UnboundColumns-Setting-Column-as-Unbound.html): This topic demonstrates how to set up an Unbound Column for the `igGrid` on the client and on the server. It includes JavaScript and ASP.NET code snippets.



### In this topic

This topic contains the following sections:

-   [**Rendering Calculated Values in Unbound Columns – Overview**](#overview)
-   [**Rendering Calculated Values in Unbound Columns – Code Examples**](#code-examples)
-   [**Rendering Calculated Values in Unbound Columns in JavaScript (Code Example)**](#js)
    -   [Description](#js-description)
    -   [Code](#js-code)
-   [**Rendering Calculated Values in Unbound Columns in ASP.NET MVC (Code Example)**](#mvc)
    -   [Description](#mvc-description)
    -   [Code](#mvc-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Rendering Calculated Values in Unbound Columns – Overview

The `igGrid` supports unbound columns by default, but you need to configure it. This is done differently in JavaScript and ASP.NET MVC.

To set a columns as unbound in… | Do this…
---|---
JavaScript | Define a new column in the grid’s `columns` array and set its `unbound` property to true. Also, define `formula` function that will calculate the value for each cell in the unbound column.
ASP.NET MVC | Use `GridColumnBuilder.Unbound(string key = null)` method to define unbound column and call `UnboundColumnWrapper.Formula(string formula)` method to set the name of the JavaScript function called on the client to calculate the value of each cell in the unbound column.


## <a id="code-examples"></a> Rendering Calculated Values in Unbound Columns – Code Examples

The following table lists the code examples included in this topic.

- [Rendering Calculated Values in Unbound Columns in JavaScript](#js): This example demonstrates setting a formula function to calculate unbound column values in JavaScript.

- [Rendering Calculated Values in Unbound Columns in ASP.NET MVC](#mvc): This example demonstrates setting a formula function to calculate unbound column values in ASP.NET MVC.



## <a id="js"></a> Rendering Calculated Values in Unbound Columns in JavaScript (Code Example)

### <a id="js-description"></a> Description

Each column has a property `formula` that when set should point to a function with 2 parameters with the first parameter being a row object and the second parameter being the grid instance. The row object values depend on the `localSchemaTransform` property. When `localSchemaTransform` is set to true, row object contains only the values from the defined columns in the grid’s columns array. When the `localSchemaTransform` is set to false, then the row object contains all the defined fields in the original data source.

> **Note:** Formula property is effective only when the column is unbound (unbound: true).

### <a id="js-code"></a> Code

The following code creates an `igGrid` instance bound to the sample `employees` array. An unbound column configured using the key `FullName` and its values calculated by a formula function that concatenates the `FirstName` and `LastName` columns.

**In JavaScript:**

```js
var employees = [
    {FirstName: "Nancy", LastName: "Davolio"},
    {FirstName: "Andrew", LastName: "Fuller"},
    {FirstName: "Janet", LastName: "Leverling"}
];
$("#grid").igGrid({
    dataSource: employees,
    autoGenerateColumns: false,
    localSchemaTransform: false,
    columns: [
        { 
            headerText: "Full Name",
            key: "FullName",
            dataType: "string",
            unbound: true,
            formula: function(row, grid) { 
                return row.FirstName + ' ' + row.LastName; 
            }
        }
    ]
});
```



## <a id="mvc"></a> Rendering Calculated Values in Unbound Columns in ASP.NET MVC (Code Example)

### <a id="mvc-description"></a> Description

In order to set formula function you can use `UnboundColumnWrapper<T>.Formula(string formula)` method to configure it in the View or `UnboundColumn.Formula` property to configure it in the Controller using the `GridModel` class. The formula should contain a string that is the name of the JavaScript function executed on the client to calculate the unbound column data. This means that the formula function should use the data from the columns that are available on the client (the `localSchemaTransform` affects data serialization as described in the previous example).

The following example shows how to configure the formula function in the View.

### <a id="mvc-code"></a> Code

Model:

**In C#:**

```csharp
namespace GridDataBinding.Models
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
```

This is a very simple Employee model containing 2 fields.

View:

**In ASPX:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<UnboundColumns.Models.Employee>
<script type="text/javascript">
    function calcFullName(row, grid) {
        return row.FirstName + ' ' + row.LastName;
    }
</script>
@(Html.Infragistics()
.Grid(Model)
.ID("grid1")
.AutoGenerateColumns(false)
.Columns(col =>
{
    col.Unbound("FullName")
        .HeaderText("FullName")
        .Formula("calcFullName")
        .DataType("string");
})
.DataBind()
.Render())
```

The View is strongly typed with model `IQueryable<UnboundColumns.Models.Employee>` used by the Grid MVC wrapper to bind to data. The code configures the grid with one unbound column with key `FullName`. A JavaScript function called `calcFullName` calculates its values on the client. This is the reason to define a script block in the View containing the definition of the `calcFullName` function.

The `calcFullName` function concatenates the `FirstName` and `LastName` fields from the data source.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        return View(this.GetEmployees().AsQueryable());
    }
    private List<Employee> GetEmployees()
    {
        List<Employee> employees = new List<Employee>()
        {
            new Employee() { FirstName = "Nancy", LastName = "Davolio" },
            new Employee() { FirstName = "Andrew", LastName = "Fuller" },
            new Employee() { FirstName = "Janet", LastName = "Leverling" }
        };
        return employees;
    }
}
```

The Controller contains two methods, the `GetEmployees` method returns a list of `Employee` objects, used as a data source for sample data, and the `Index` action method used to pass the data back to the View.


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Populating Unbound Columns Locally (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Locally.html): This topic demonstrates, with code samples how to set unbound column values on the client.

- [Populating Unbound Columns Remotely (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Remotely.html): This topic demonstrates, with code samples how to set unbound column values on the server.

- [Optimizing the Grid Performance When Unbound Columns Are Used](igGrid-UnboundColumns-Optimize-Performance.html): This topic discusses client-based vs. server-based merging of unbound columns and the optimization considerations for each. It also demonstrates how the developer can programmatically control where merging can take place.



 

 


