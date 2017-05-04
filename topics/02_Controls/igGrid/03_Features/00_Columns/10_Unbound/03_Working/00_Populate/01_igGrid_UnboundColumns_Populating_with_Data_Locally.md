<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-populating-with-data-locally",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Populating Unbound Columns Locally (igGrid)

## Topic Overview

### Purpose

This topic demonstrates, with code examples how to set unbound column values on the client.

### Required background

The following topics are prerequisites to understanding this topic:

- [Unbound Columns Overview](igGrid-UnboundColumns-Overview.html): This topic provides an overview of the Unbound Columns feature of the `igGrid`.

- [Setting a Column as Unbound (igGrid)](igGrid-UnboundColumns-Setting-Column-as-Unbound.html): This topic demonstrates how to set up an Unbound Column for the `igGrid` on the client and on the server. It includes JavaScript and ASP.NET code snippets.

- [Populating Unbound Columns Overview (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Overview.html): This topic provides a conceptual overview of how an unbound column can be populated with data and briefly explains the options (local/remote).



### In this topic

This topic contains the following sections:

-   [Populating Unbound Columns with Data Locally – Conceptual Overview](#overview)
-   [Code Examples](#code-examples)
-   [Populating unbound column through the unboundValues property (Code Example)](#unboundValues)
-   [Populating unbound column using the setUnboundValues method (Code Example)](#setUnboundValues)
-   [Populating unbound column using the dataBound event (Code Example)](#dataBound-event)
-   [Populating unbound column using the setCellValue method (Code Example)](#setCellValue)
-   [Related Content](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Populating Unbound Columns with Data Locally – Conceptual Overview

The `igGrid` supports unbound columns by default, but you have to configure it. This is done differently depending on the grid’s lifetime.

To set unbound column value … | | Do this…
--- | ------- | ------- 
In grid initialization code | If the values are known | Use `unboundValues` property.
 | If the values need to be calculated | Use `dataBound` event. Use formula property of the column. For more information see the [Rendering Calculated Values in Unbound Columns](igGrid-UnboundColumns-Rendering-Calculated-Values.html) topic.
At runtime | To set multiple values | Use `setUnboundValues` method.
 | To set single value | Use `setCellValue` method.





## <a id="code-examples"></a> Code Examples

The following table lists the code examples included in this topic.

- [Populating unbound column through the unboundValues property](#unboundValues): Demonstrates populating an unbound column with values in the grid initialization code by using `unboundValues` property of the column.

- [Populating unbound column using the setUnboundValues method](#setUnboundValues): Demonstrates populating an unbound column with values at runtime by using `setUnboundValues` method.

- [Populating unbound column using the dataBound event](#dataBound-event): Demonstrates populating an unbound column with values by calculating them in the grid’s `dataBound` event.

- [Populating unbound column using the setCellValue method](#setCellValue): Demonstrates populating an unbound column cell value at runtime by using the grid’s updating `setCellValue` method.





## <a id="unboundValues"></a> Populating unbound column through the unboundValues property (Code Example)

You can use the column’s [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) property to initialize it with values known at the time the grid is initialized. Typical scenario is when you need to merge the data coming from an external data source in `igGrid`.

> **Note:** If the length of the array of values is less than the count of the data rows, the remaining cells are left blank.

### Code

The following code creates an `igGrid` instance bound to the sample `userAccounts` array, configures the unbound column with key `AccountIsLocked` and provides its values from the `unboundValues` property.

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
            headerText: "Account is Locked",
            key: "AccountIsLocked",
            dataType: "bool",
            unbound: true,
            unboundValues: [true, false, true]
        }
    ]
});
```



## <a id="setUnboundValues"></a> Populating unbound column using the setUnboundValues method (Code Example)

You can use [`setUnboundValues`](%%jQueryApiUrl%%/ui.iggrid#methods:setUnboundValues) method to set column values at runtime after initializing the grid and binding to data. Typical scenario is when you need to merge data coming from external data source in `igGrid` asynchronously.

Note: If the length of the array of values is less than the count of the data rows, the remaining cells remain unfilled. The grid re-renders its unbound column after values are set. This neither rebinds nor re-renders the grid.

### Code

The following code creates an `igGrid` instance bound to the sample `userAccounts` array, configures an unbound column with key `AccountIsLocked` and provides its values at runtime by the `setUnboundValues` method.

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
            headerText: "Account is Locked",
            key: "AccountIsLocked",
            dataType: "bool",
            unbound: true
        }
    ]
});
var lockedUserAccounts = [true,false,true];
$("#grid").igGrid("setUnboundValues", "AccountIsLocked", lockedUserAccounts);
```


## <a id="dataBound-event"></a> Populating unbound column using the dataBound event (Code Example)

You can use the grid’s [`dataBound`](%%jQueryApiUrl%%/ui.iggrid#events:dataBound) event to set column values calculated from other column values.

### Code

The following code creates an `igGrid` instance bound to the sample employees array, configures an unbound column using key `FullName` and calculates its values in the grid’s `dataBound` event by concatenating the `FirstName` and `LastName` columns.

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
            unbound: true
        }
    ],
    dataBound: function (evt, ui) {
        var i, grid = ui.owner,
            data = grid.dataSource.data();
        for (i = 0; i < data.length; i++) {
          data[i]["FullName"] = 
            data[i]["FirstName"] + ' ' + data[i]["LastName"];
        }
    }
});
```



## <a id="setCellValue"></a> Populating unbound column using the setCellValue method (Code Example)

You can use [`setCellValue`](%%jQueryApiUrl%%/ui.iggridupdating#methods:setCellValue) method to set single cell value at runtime. Typical scenario involves working with the updating feature enabled. When adding or updating row its unbound columns values need to be calculated.

### Code

The following code creates an `igGrid` instance bound to the sample products array, configures an unbound column using the `TotalPrice` key and calculates its value at runtime when adding or updating a new row.

**In JavaScript:**

```js
var products = [
    {ProductID: 1, UnitPrice: 4.1, VAT: 0.2}, 
    {ProductID: 2, UnitPrice: 4.1, VAT: 0.2}, 
    {ProductID: 3, UnitPrice: 4.1, VAT: 0.2}
];
$("#grid").igGrid({
    dataSource: products,
    autoGenerateColumns: false,
    primaryKey: "ProductID",
    columns: [
        { key: "ProductID", dataType: "number" },
        { key: "VAT", dataType: "number" },
        { key: "UnitPrice" },
        { 
            headerText: "Total Price",
            key: "TotalPrice",
            dataType: "number",
            unbound: true
        }
    ],
    features: [
        {
            name: "Updating",
            mode: "row",
            editRowEnded: function (evt, ui) {
                var totalPrice = ui.values["UnitPrice"] * (1 + ui.values["VAT"]);
                ui.owner.setCellValue(ui.rowID, "TotalPrice", totalPrice);
            }
        }
    ]
});
```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Populating Unbound Columns Remotely (igGrid)](igGrid-UnboundColumns-Populating-with-Data-Remotely.html): This topic demonstrates, with code samples how to set unbound column values on the server.

- [Rendering Calculated Values in Unbound Columns](igGrid-UnboundColumns-Rendering-Calculated-Values.html): This topic demonstrates, with code examples how to set up formula function to calculate unbound column values.

- [Optimizing the Grid Performance When Unbound Columns Are Used](igGrid-UnboundColumns-Optimize-Performance.html): This topic discusses client-based vs. server-based merging of unbound columns and the optimization considerations for each. It also demonstrates how the developer can programmatically control where merging can take place.



 

 


