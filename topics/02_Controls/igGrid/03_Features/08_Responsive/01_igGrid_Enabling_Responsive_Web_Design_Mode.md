<!--
|metadata|
{
    "fileName": "iggrid-enabling-responsive-web-design-mode",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I","Layouts"]
}
|metadata|
-->

# Enabling Responsive Web Design (RWD) Mode (igGrid)

## Topic Overview

### Purpose

This topic explains, with code examples, how to enable Responsive Web Design (RWD) Mode in the `igGrid`™ control.

### Required background

The following lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

- Concept
	-   Responsive Web Design
	-   Responsive Frameworks
	-   CSS Media Queries
- Topics
	- [Responsive Web Design (RWD) Mode Overview (igGrid)](igGrid-Responsive-Web-Design-Mode-Overview.html): This topic explains conceptually the Responsive Web Design (RWD) Mode Support feature of the `igGrid` control and the functionalities this feature provides.
- External Resources
	-   [A List Apart: Responsive Web Design](http://alistapart.com/article/responsive-web-design)
	-   [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
	-   [Wikipedia: Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_web_design)
	-   [CSS 3 Media Queries](http://www.w3.org/TR/css3-mediaqueries/)

### In this topic

This topic contains the following sections:

-   [**Enabling Responsive Web Design Mode – Conceptual Overview**](#overview)
-   [**Enabling Responsive Web Design Mode – Code Examples**](#examples)
-   [**Code Example: Enabling Responsive Web Design Mode in JavaScript**](#js-example)
    -   [Code](#js-code)
-   [**Code Example: Enabling Responsive Web Design Mode in ASP.NET MVC**](#mvc-example)
    -   [Code](#mvc-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Enabling Responsive Web Design Mode – Conceptual Overview

The `igGrid` control does not have the Responsive Web Design (RWD) mode enabled by default, so you need to enable and configure it explicitly. The RWD mode is enabled through the Responsive feature. This is done differently in JavaScript and ASP.NET MVC.

The following table brefly explains how to enable the Responsive Web Design (RWD) mode for the `igGrid` control. For details, refer to the code examples following the table.

To enable RWD mode in… | Do this…
---|---
JavaScript | Define the RWD mode (the feature name is `Responsive`) configuration in the `igGrid`’s `features` array.
ASP.NET MVC | Instantiate the `Responsive` feature in the delegate passed to the `Features` method of the grid.



## <a id="examples"></a> Enabling Responsive Web Design Mode – Code Examples

The following lists the code examples included in this topic.

- [Enabling RWD Mode in JavaScript](#js-example): This example demonstrates enabling `igGrid`’s RWD mode with column hiding configuration in JavaScript.

- [Enabling RWD Mode in ASP.NET MVC](#mvc-example): This example demonstrates enabling `igGrid` RWD Mode with column hiding configuration in ASP.NET MVC.





## <a id="js-example"></a> Code Example: Enabling Responsive Web Design Mode in JavaScript

This example creates an `igGrid` instance bound to the Products table data from the AdventureWorks sample database. Three columns are defined manually: ProductID, Name, ProductNumber.

The RWD mode column hiding is configured for the ProductID and ProductNumber columns by using CSS classes.

To the ProductID column, the `hidden-tablet` and `hidden-phone` CSS classes are applied, which means that the column will be hidden in the Tablet and Phone profiles, respectively.

To the ProductNumber the `hidden-phone` CSS class is applied, which means that the column will be hidden in the Phone profile only.

### <a id="js-code"></a> Code

Following is the code that implements this example.

**In JavaScript:**

```js
$("#grid1").igGrid({
    height: "100%",
    width: "100%",
    columns: [
        { headerText: "Product ID", key: "ProductID", dataType: "number"},
        { headerText: "Product Name", key: "Name", dataType: "string" },
        { headerText: "Product Number", key: "ProductNumber", dataType: "string" }
    ],
    autoGenerateColumns: false,
    dataSource: adventureWorks,
    responseDataKey: "Records",
    features: [
        {
            name: "Responsive",
            columnSettings: [
                {
                    columnKey: "ProductID",
                    classes: "hidden-tablet hidden-phone"
                },
                {
                    columnKey: "ProductNumber",
                    classes: "hidden-phone"
                }
            ]
        }
    ]
});
```



## <a id="mvc-example"></a> Code Example:Enabling Responsive Web Design Mode in ASP.NET MVC

This example creates an `igGrid` instance bound to a custom `Product` object collection defined as a View model. Three columns are defined manually: ProductID, Name, ProductNumber.

The RWD mode column hiding is configured for the ProductID and ProductNumber columns by using CSS classes.

To the ProductID column, the `hidden-tablet` and `hidden-phone` CSS classes are applied, which means that the column will be hidden in the Tablet and Phone profiles, respectively.

To the ProductNumber the `hidden-phone` CSS class is applied, which means that the column will be hidden in the Phone profile only.

### <a id="mvc-code"></a> Code

Following is the code that implements this example.

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<GridDataBinding.Models.Product>
@(Html.Infragistics()
	.Grid(Model)
	.ID("grid1")
	.AutoGenerateColumns(false)
	.Columns(col =>
	{
	    col.For(c => c.ProductID).HeaderText("Product ID");
	    col.For(c => c.Name).HeaderText("Product Name");
	    col.For(c => c.ProductNumber).HeaderText("Product Number");
	})
	.Features(feature =>
	{
	    feature.Responsive().ColumnSettings(cs =>
	    {
	        cs.ColumnSetting().ColumnKey("ProductID").Classes("hidden-tablet hidden-phone");
	        cs.ColumnSetting().ColumnKey("ProductNumber").Classes("hidden-phone");
	    });
	})
	.DataBind()
	.Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring Responsive Web Design (RWD) Mode (igGrid)](igGrid-Configuring-Responsive-Web-Design-Mode-LandingPage.html): This is a group of topics explaining the various configuration tasks related to the Responsive Web Design (RWD) mode in the `igGrid` control, like configuring column hiding, creating custom row and column templates, creating custom RWD configurations, and configuring RWD mode for use with Twitter Bootstrap.




 

 


