<!--
|metadata|
{
    "fileName": "iggrid-multi-row-layout",
    "controlName": "igGrid",
    "tags": ["Getting Started","Grids","Multi-Row Layout"]
}
|metadata|
-->

# Grid Multi-Row Layout

## In this topic

- [Overview](#overview)
- [Initialization] (#initialization)
- [API in a Multi-Row Layout Grid] (#api)
- [Supported Features] (#features)

## <a id="overview"></a> Overview

Multi-Row Layout is a feature for the Ignite UI™ grid, or `igGrid`. It allows you to create a complex structure that repeats for each record and contains multiple physical rows and cells in them that can span multiple columns and rows. Such structure allows for greater rendering flexibility in grids with many columns that would otherwise require a horizontal scrollbar or when the data shown is better presented in a non-tabular fashion.

**Figure 1: Visual example of a Multi-Row Layout Grid

![](images/igGrid_MultiRowLayout_01.png)

## <a id="initialization"></a> Initialization

**In Javascript:**

```js
{ headerText: "ID", key: "ProductID", dataType: "number", rowIndex: 0, columnIndex: 0 },
{ headerText: "Units in Stock", key: "UnitsInStock", dataType: "number", rowIndex: 1, columnIndex: 0 },
{ headerText: "Product Description", key: "ProductDescription", dataType: "string", rowIndex: 1, columnIndex: 1, colSpan: 2, width: "300px" },
{ headerText: "Unit Price", key: "UnitPrice", dataType: "number", format: "#.##", rowIndex: 0, columnIndex: 1, width: "100px" },
{ headerText: "Date Added", key: "DateAdded", dataType: "date", rowIndex: 0, columnIndex: 2 },
{ headerText: "In Stock", key: "InStock", dataType: "bool", rowIndex: 0, columnIndex: 3, rowSpan: 2 }
```

## <a id="api"></a> API in a Multi-Row Layout Grid

## <a id="features"></a> Supported Features