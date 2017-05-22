<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-setting-column-as-unbound",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I"]
}
|metadata|
-->

# Setting a Column as Unbound (igGrid)

## Topic Overview

### Purpose

This topic demonstrates how to set up an Unbound Column for the igGrid™ on the client and on the server. It includes JavaScript and ASP.NET code snippets.

### Required background

The following topic is a prerequisite to understanding this topic:

- [Unbound Columns Overview (igGrid)](igGrid-UnboundColumns-Overview.html): This topic explains conceptually the Unbound Columns feature of the `igGrid` and the functionalities this feature provides.


### In this topic

This topic contains the following sections:

-   [Unbound Columns–Overview](#overview)
-   [Code Examples](#code-examples)
-   [Setting a Column as Unbound in JavaScript (Code Example)](#js)
-   [Setting a Column as Unbound in ASP.NET MVC (Code Example)](#mvc)
-   [Related Content](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Setting a Column as Unbound – Overview

The `igGrid` does support unbound columns by default, but you have to configre it. This is done differently in JavaScript and ASP.NET MVC.

To set column as unbound in… | Do this…
---|---
JavaScript | Define the column in the grid’s `columns` array and add `unbound` property set to true.
ASP.NET MVC | Call the Unbound method on `GridColumnBuilder` object and pass a string which will be used as a key for the column.



## <a id="code-examples"></a> Code Examples

The following table lists the code examples included in this topic.

- [Setting a Column as Unbound in JavaScript](#js): This example demonstrates configuring an unbound column in `igGrid` with a formula function providing the data values.

- [Setting a Column as Unbound in ASP.NET MVC](#mvc): This example demonstrates configuring an unbound column in ASP.NET MVC. Unbound column values are supplied by a call to `UnboundValues` method.



## <a id="js"></a> Setting a Column as Unbound in JavaScript (Code Example)

Populate unbound column values as part of grid initialization code by using the [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) property. In this scenario, unbound column data should already be available at the time the grid is initializing. It is important to note that unbound values populate sequentially in the unbound column, so the order of the grid data and order of `unboundValues` data should match.

Note: There are other ways to set unbound column values on the client that are covered in [Populating Unbound Columns Locally (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Locally.html) topic.

### Code

The following code creates an `igGrid` instance bound to a sample `userAccounts` array, configures an unbound column with key “DomainName” and provides its values by the `unboundValues` property.

**In JavaScript:**

```js
var userAccounts = [
    {UserAccountId: 1, UserId: 1, UserName: "nancyd"},
    {UserAccountId: 2, UserId: 2, UserName: "andrewf"},
    {UserAccountId: 3, UserId: 3, UserName: "janetl"}
];
$("#grid").igGrid({
    dataSource: userAccounts,
    autoGenerateColumns: false,
    columns: [
        {key: "UserAccountId", headerText: "UserAccountId"},
        {key: "UserName", headerText: "UserName"},
        { 
            headerText: "Domain Name",
            key: "DomainName",
            dataType: "string",
            unbound: true,
            unboundValues: ["examplenancyd", "exampleandrewf", "examplejanetl"]
        }
    ]
});
```


## <a id="mvc"></a> Setting a Column as Unbound in ASP.NET MVC (Code Example)

The following code creates `igGrid` instance bound to a custom Employee object collection defined as View model. Unbound column values are supplied by a call to `UnboundValues` method. `UnboundValues` argument is a `ViewData` variable called `EmployeeFullName` that is a `List<object>` instance and holds the concatenated columns `FirstName` and `LastName`.

> **Note:** There are other ways to set unbound column values on the server covered in [Populating Unbound Columns Remotely (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Remotely.html) topic.

### Code

The following code creates `igGrid` instance bound to a custom Employee object collection defined as View model. Unbound column values supplied by a call to `UnboundValues` method. `UnboundValues` argument is a `ViewData` variable called “EmployeeFullName” which is a `List<object>` instance and holds the concatenated columns `FirstName` and `LastName`.

What `UnboundValues` method does is to serialize the data in the `unboundValues` property of the column.

Model:

**In C#:**

```csharp
namespace UnboundColumns.Models
{
    public class Employee
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
```

This is a very simple Employee model containing 2 fields: `FirstName` and `LastName`.

View:

**In ASPX:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<UnboundColumns.Models.Employee>
@(Html.Infragistics().Grid(Model)
.AutoGenerateColumns(false)
.ID("grid1")
.Columns(column =>
    {
        column.Unbound("FullName").UnboundValues((List<object>)ViewData["EmployeeFullName"]);
    }
)
.DataBind()
.Render())
```

The View is strongly typed with model `IQueryable<UnboundColumns.Models.Employee>`. The Grid MVC wrapper uses this model to bind to data. The code configures the grid with one unbound column with key `FullName` and provides its values by the `ViewData` variable with key `EmployeeFullName`.

Controller:

**In C#:**

```csharp
public class HomeController : Controller
{
    public ActionResult Index()
    {
        List<object> employeeFullName = new List<object>();
        List<Employee> employees = this.GetEmployees();
        foreach (Employee emp in employees)
        {
            employeeFullName.Add(emp.FirstName + " " + emp.LastName);
        }
        ViewData["EmployeeFullName"] = employeeFullName;
        return View(employees.AsQueryable());
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

The Controller contains 2 methods, the `GetEmployees` method returns a list of Employee objects used as a data source for sample data, and the Index action method constructs the `ViewData["EmployeeFullName"]` variable by concatenating each employee `FirstName` and `LastName` and passes the employees data back to the View.


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topic provides additional information related to this topic.

- [Working with Unbound Columns(igGrid)](igGrid-UnboundColumns-Working-with-LandingPage.html): This group of topics explains how an unbound column can be populated with data on the client or on the server.

 

 


