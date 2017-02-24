<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-initializing",
    "controlName": "igHierarchicalGrid",
    "tags": ["Getting Started","Grids","How Do I"]
}
|metadata|
-->

# Initializing igHierarchicalGrid



## Topic Overview

### Purpose
This topic demonstrates how to initialize the igHierarchicalGrid™ in both jQuery and MVC.

### In this topic
This topic contains the following sections:

-   [Introduction](#introduction)
-   [Preview](#preview)
-   [Requirements](#requirements)
-   [Initializing a jQuery igHierarchicalGrid](#initializing-jquery)
-   [Initializing a MVC igHierarchicalGrid](#initializing-mvc)
-   [Related Topics](#related-topics)

## <a id="introduction"></a> Introduction
Bellow following are the main igHierarchicalGrid properties that are typically used with initialization. They are same as the properties of the flat igGrid.

-   `key` – the ID of a column layout
-   `dataSource` – the data source that the igHierarchicalGrid takes the data from
-   `initialDataBindDepth` – The level of hierarchy, at which the igHierarchicalGrid will initially bind the data source
-   `responseDataKey` – the object that holds the collection of the row elements.
-   `primaryKey` – the primary key of a child layout
-   `foreignKey` – the foreign key of a child layout

These properties are used in the example procedure that follows.

## <a id="preview"></a>Preview
Following is a preview of the final result.

![](images/igHierarchicalGrid_Initializing_01.png)

## <a id="requirements"></a>Requirements
### General Requirements 
-   jQuery-specific requirements

    -   An HTML web page with a grid connected to a data source
    -   A table tag in the body of the HTML page to serve as a container for the grid

    **In HTML:**

    ```html
    <table id="hierarchicalGrid">
    </table>
    ```

-   MVC-specific requirements
    -   An MVC 2 or MVC 3 project in MS Visual Studio® with a grid connected to a data source
    -   A reference to the MVC dll (stores the MVC IG wrappers)

### Scripting Requirements 
The required scripts for both jQuery and MVC sample are the same because the MVC wrappers just render a jQuery widget.

The following scripts are required to run the grid and its grouping functionality:

-   The jQuery library script
-   The jQuery User Interface (UI) library
-   The IG library script (This is obfuscated code for the controls)

The following code sample demonstrates the scripts as added to the header code of the HTML file.

**In HTML:**

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery-ui.min.js"></script>
<script type="text/javascript" src="infragistics.core.js"></script><script type="text/javascript" src="infragistics.lob.js"></script>
```

### Database Requirements 
For the purpose of this example only:

-   jQuery – Northwind database

-   MVC – Adventure Works database.

## <a id="initializing-jquery"></a>Initializing a jQuery igHierarchicalGrid 
Inside the `$(document).ready()` event handler you can create a igHierarchicalGrid using `ds` data source from the requirements above. Follow the next table to see how to initialize igHierarchicalGrid.

**In Javascript:**

```js
 $("#hierarchicalGrid").igHierarchicalGrid({
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                caption: "Orders By Employee",
                features: [
                    {
                        name: "Responsive",
                        enableVerticalRendering: false,
                        columnSettings: [
                            {
                                columnKey: "Title",
                                classes: "ui-hidden-phone"
                            },
                            {
                                columnKey: "Address",
                                classes: "ui-hidden-phone"
                            }
                        ]
                    },
                    {
                        name: "Sorting",
                        inherit: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5,
                        type: "local",
                        inherit: true
                    }
                ],
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "0%", hidden: true },
                    { key: "FirstName", headerText: "First Name", dataType: "string", width: "20%" },
                   { key: "LastName", headerText: "Last Name", dataType: "string", width: "20%" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "20%" },
                   { key: "Address", headerText: "Address", dataType: "string", width: "25%" },
                   { key: "City", headerText: "City", dataType: "string", width: "15%" }
                ],
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        width: "100%",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "20%" },
                            { key: "CustomerID", headerText: "Customer ID", dataType: "string", width: "0%", hidden: true },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "20%" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "20%" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "20%" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "20%" }
                        ],
                        features: [
                             {
                                 name: "Responsive",
                                 enableVerticalRendering: false,
                                 columnSettings: [
                                     {
                                         columnKey: "ShipAddress",
                                         classes: "ui-hidden-phone"
                                     },
                                     {
                                         columnKey: "ShipCity",
                                         classes: "ui-hidden-phone"
                                     }
                                 ]
                             },
                             {
                                 name: "Summaries",
                                 columnSettings: [
                                      {
                                          columnKey: "OrderID",
                                          summaryOperands: [
                                              {
                                                  rowDisplayLabel: "Orders Count",
                                                  type: "count",
                                                  decimalDisplay: 3
                                              }
                                          ]

                                      },
                                     {
                                         columnKey: "ShipName",
                                         allowSummaries: false
                                     },
                                     {
                                          columnKey: "ShipAddress",
                                          allowSummaries: false
                                     },
                                     {
                                         columnKey: "ShipCity",
                                         summaryOperands: [
                                             {
                                                 rowDisplayLabel: "Sao Paulo Orders",
                                                 type: "custom1",
                                                 summaryCalculator: $.proxy(countSaoPauloValues, this),
                                                 order: 5,
                                                 decimalDisplay: 1
                                             },
                                              {
                                                  rowDisplayLabel: "Bergamo Orders",
                                                  type: "custom2",
                                                  summaryCalculator: $.proxy(countBergamoValues, this),
                                                  order: 6,
                                                  decimalDisplay: 1
                                              }
                                         ]
                                     },
                                      {
                                          columnKey: "ShipCountry",
                                          allowSummaries: false
                                      },

                                     
                                 ]

                             }
                        ]
                    }
                ]
            });
```

The sample below demonstrates how to bind igHierarchicalGrid to JSON data source. You should see the igHierarchicalGrid (as shown in the Preview above).
<div class="embed-sample">
   [igHierarchicalGrid JSON Binding](%%SamplesEmbedUrl%%/hierarchical-grid/json-binding)
</div>

## <a id="initializing-mvc"></a>Initializing a MVC igHierarchicalGrid 
1.  Create the LINQ to SQL model. ![](images/igHierarchicalGrid_Initializing_02.png)
2.  Create an MVC Controller method.

    Create MVC Controller method that will get data from the Model and will call the View

    **In MVC:**

    ```csharp
    public ActionResult Default()
    {
        var ctx = new AdventureWorksDataContext("ConnString");
        var ds = ctx.Products;

        return View("Events", ds);
     }
    ```

3.  Define the igHierarchicalGrid.

    **In ASPX:**

    ```csharp
    <%= Html.Infragistics()
    .Grid(Model)
    .ID("grid1")
    .LoadOnDemand(false)
    .AutoGenerateColumns(true)
    .PrimaryKey("ProductID")
    .AutoGenerateLayouts(false)
    .ColumnLayouts(layouts => {
        layouts.For(x => x.ProductInventories)
            .PrimaryKey("LocationID")
            .ForeignKey("ProductID")
            .AutoGenerateColumns(false)
            .Columns(childcols1 =>
            {
                childcols1.For(x => x.ProductID);
                childcols1.For(x => x.LocationID);
                childcols1.For(x => x.Shelf);
                childcols1.For(x => x.Bin);
                childcols1.For(x => x.Quantity);
            });
    })
    .Width("750px")
    .DataBind()
    .Render()%>
    ```
         

4.  Save the project.
5.  (Optional) Verify the result.

To verify the result, run your application. You should see the igHierarchicalGrid (as shown in the Preview above).

## <a id="related-topics"></a>Related Topics 
Following are some other topics you may find useful.

-   [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html)
-   [Grid Properties Reference](%%jQueryApiUrl%%/ui.igGrid#options)
-   [igHierarchicalGrid Properties Reference](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options)
