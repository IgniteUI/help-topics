<!--
|metadata|
{
    "fileName": "iggrid-columnfixing-enabling",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Enabling Column Fixing (igGrid)

## Topic Overview

### Purpose

This topic explains, with code examples, how to enable the Column Fixing feature of the `igGrid`™ in both JavaScript and ASP.NET MVC.

### Required background

The following topics are prerequisites to understanding this topic:

- [igGrid Overview](igGrid-Overview.html): This topic provides a conceptual overview of the `igGrid` control and its features explains, with code examples, how to add it to an HTML page.

- [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html): This topic explains the inner workings of the `igGrid` control and its interaction with the data source component (`igDataSource`™).

- [Column Fixing Overview (igGrid)](igGrid-ColumnFixing-Overview.html): This topic provides conceptual overview of the `igGrid`™ Column Fixing feature including the supported user interactions and the main configuration options.



### In this topic

This topic contains the following sections:

-   [**Enabling Column Fixing – Conceptual Overview**](#overview)
    -   [Enabling Column Fixing summary chart](#summary-chart)
-   [**Code Examples**](#code-examples)
	-   [Code Example: Enabling Column Fixing in JavaScript](#code-example-js)
	-   [Code Example: Enabling Column Fixing in ASP.NET MVC](#code-example-mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a> Enabling Column Fixing – Conceptual Overview

The Column Fixing feature of the `igGrid` control is not enabled by default, so you need to enable it explicitly. This is done differently in JavaScript and ASP.NET MVC (See Column Fixing summary chart.).

### <a id="summary-chart"></a> Enabling Column Fixing summary chart

The following table summarizes enabling Column Fixing for both JavaScript and ASP.NET MVC. For details, see [Column Fixing – Code Examples](#code-examples).

To enable Column Fixing in… | Do this…
---- | ----
JavaScript | Define the Column Fixing configuration in the `igGrid`’s features array.
ASP.NET MVC | Instantiate the Column Fixing feature in the delegate passed to the Features method of the `igGrid` control.


## <a id="code-examples"></a> Code Examples Summary

The following lists the code examples included in this topic.

- [Enabling Column Fixing in JavaScript](#code-example-js): This example demonstrates enabling the igGrid’s Column Fixing feature with [default configuration](igGrid-ColumnFixing-Overview.html#default-configuration) in JavaScript.

- [Enabling Column Fixing in ASP.NET MVC](#code-example-mvc): This example demonstrates enabling the igGrid Column Fixing feature with default configuration in ASP.NET MVC.

### <a id="code-example-js"></a> Code Example: Enabling Column Fixing in JavaScript

#### Description

The following code creates an `igGrid` instance bound to the Products table data from the AdventureWorks database. The columns are auto-generated and default column width is set. Width and height are defined. Column Fixing is enabled with its [default configuration](igGrid-ColumnFixing-Overview.html#default-configuration).

#### Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: adventureWorks,
    defaultColumnWidth: "100px",
    width: "600px",
    height: "500px",
    features: [
        {
            name: "ColumnFixing"
        }
    ]
});
```

### <a id="code-example-mvc"></a> Code Example: Enabling Column Fixing in ASP.NET MVC

#### Description

The following code creates `igGrid` instance bound to a custom Product object collection defined as a View model. The columns are auto-generated and default column width is set. Width and height are defined. Column Fixing is enabled with its [default configuration](igGrid-ColumnFixing-Overview.html#default-configuration).

#### Code

Following is the code that implements this example.

**In C#:**

```csharp
@model IQueryable<Sample.Models.Product>
@(Html.Infragistics()
    .Grid(Model)
    .DefaultColumnWidth("100px")
    .Width("600px")
    .Height("500px")
    .Features(feature =>
    {
        feature.ColumnFixing();
    })
    .DataBind()
    .Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring Column Fixing (igGrid)](igGrid-ColumnFixing-Configuring.html): This topic explains, with code examples how to configure Column Fixing feature of the `igGrid` control including the position of the Fixed Columns area, the initial column fix state, and the minimum Non-Fixed Columns area width.

- [Method Reference (Column Fixing, igGrid)](igGrid-ColumnFixing-Method-Reference.html): This topic provides reference information about the methods related to the Column Fixing feature of the `igGrid` control.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Column Fixing](%%SamplesUrl%%/grid/column-fixing): This sample demonstrates the basic functionalities of the `igGrid`’s Column Fixing feature – setting columns fixed by default and preventing columns from being fixed by the user.





 

 


