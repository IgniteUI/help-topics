<!--
|metadata|
{
    "fileName": "iggrid-columnmoving-enabling",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I"]
}
|metadata|
-->

# Enabling Column Moving (igGrid)



## Topic Overview

### Purpose

This topic explains, with code examples, how to enable the Column Moving feature of the `igGrid`™.

### Required background

The following topics are prerequisites to understanding this topic:

- [Column Moving Overview](igGrid-ColumnMoving-Overview.html): This topic explains conceptually the Column Moving feature of the `igGrid` and the functionalities this feature provides.


### In this topic

This topic contains the following sections:

-   [**Column Moving – Conceptual Overview**](#overview)
-   [**Column Moving – Code Examples**](#code-examples)
	-   [Enabling Column Moving in JavaScript (Code Example)](#code-examples-js)
	-   [Enabling Column Moving in ASP.NET MVC (Code Example)](#code-examples-mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a> Column Moving – Conceptual Overview

The `igGrid` does not support column moving by default, so you need to enable it explicitly. This is done differently in JavaScript and ASP.NET MVC.

To enable Column Moving in… | Do this…
---|---
JavaScript | Define the Column Moving configuration in the grid’s `features` array.
ASP.NET MVC | Instantiate the Column Moving feature in the delegate passed to the `Features` method of the grid.


## <a id="code-examples"></a> Column Moving – Code Examples

The following lists the code examples included in this topic.

- [Enabling Column Moving in JavaScript](#code-examples-js): This example demonstrates enabling the `igGrid`’s Column Moving feature with [default configuration](igGrid-ColumnMoving-Overview.html#default-configuration) in JavaScript.

- [Enabling Column Moving in ASP.NET MVC](#code-examples-mvc): This example demonstrates enabling the `igGrid` Column Moving feature with [default configuration](igGrid-ColumnMoving-Overview.html#default-configuration) in ASP.NET MVC.





### <a id="code-examples-js"></a> Enabling Column Moving in JavaScript (Code Example)

The following code creates an `igGrid` instance bound to the Products table data from the *AdventureWorks* database. The columns are auto-generated. Column Moving is enabled with its [default configuration](igGrid-ColumnMoving-Overview.html#default-configuration).


**In JavaScript:**

```js
$("#grid1").igGrid({
    dataSource: adventureWorks,
    autoGenerateColumns: true,
    features: [
        {
            name: "ColumnMoving"
        }
    ]
});
```



### <a id="code-examples-mvc"></a> Enabling Column Moving in ASP.NET MVC (Code Example)

The following code creates `igGrid` instance bound to a custom `Product` object collection defined as a View model. The columns are auto-generated. Column Moving s enabled with its [default configuration](igGrid-ColumnMoving-Overview.html#default-configuration).


**In C#:**

```csharp
Code
@model IQueryable<Sample.Models.Product>
@(Html.Infragistics()
    .Grid(Model)
    .AutoGenerateColumns(true)
    .Features(feature =>
    {
        feature.ColumnMoving();
    })
    .DataBind()
    .Render())
```

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.


- [Configuring Column Moving](igGrid-ColumnMoving-Configuring.html): This topic explains, with code examples, how to configure the Column Moving feature of the `igGrid`.

- [Moving Columns Programmatically](igGrid-ColumnMoving-MovingColumnsProgrammatically.html): This topic explains, with code examples, how to move columns using the column moving API.

- [Property Reference](igGrid-ColumnMoving-PropertyReference.html): This topic provides reference information on some of the properties of the Column Moving feature API of the `igGrid`.


### <a id="samples"></a> Samples

The following sample provides additional information related to this topic.

- [Column Moving](%%SamplesUrl%%/grid/column-management): This sample demonstrates configuring column moving in the `igGrid`.





 

 


