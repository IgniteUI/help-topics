<!--
|metadata|
{
    "fileName": "iggrid-binding-to-html-table-data",
    "controlName": "igGrid",
    "tags": ["Data Binding","Grids","How Do I"]
}
|metadata|
-->

# Binding igGrid to HTML Table Data

## Overview

The Ignite UI® `igGrid`, allows binding to existing plain HTML tables, through the `igDataSource` control. There are several points to consider when binding to a HTML table.

-   You do not need to specify a `dataSource`. If you are instantiating the `igGrid` widget on the same table to which you would like to bind
-   The data extraction, parsing, binding and formatting process are done through the data source control. This means that once the grid is bound, the table BODY of the plain HTML table is cleared, and  data is stored now in the data source in the format of an array of JavaScript objects. This implies you cannot rebind to the grid again in the same way (getting the data from the TABLE), because it is already cleared.
-   If you would like to get the data from one HTML table, but instantiate the grid Widget on another HTML table (possibly empty), you should set the `dataSource` option of the grid to the DOM element pointing to the HTML table containing your data. Listing 1 shows how to do that

**Listing 1:** HTML TABLE as dataSource

**In Javascript:**

```js
dataSource: $('#myTable')[0]
```

> **Note:** the indexer is needed in order to select the DOM element containing the data.

-   Since the HTML table data is not named (there are no keys, just data cells), column keys are automatically generated from 1 to n, where “n” is the number of columns in the HTML table.
-   If your HTML table already contains headers (THEAD element with THs in it), they are automatically parsed and set as `headerText` for the jQuery grid.
-   All grid features work out of the box once the grid is data bound – paging, sorting, filtering, selection, etc.
-   You can still override the `headerText` or the `dataType` of a column, by specifying the settings in code. For example if you know that a specific column contains integers, but you don’t want this to be parsed as strings.

## Binding to an Existing Table

Listing 2 shows a complete example that shows how to bind the grid to an existing HTML table and configured to shows fewer columns than are in the table.

**Listing 2:** Binding to the same HTML Table

**In Javascript:**

```js
$("#t1").igGrid({          
    autoGenerateColumns: false,
    columns: [
    	{ headerText: "ProductID", key: "ProductID", width: "100px", dataType: "number" },
    	{ headerText: "Name", key: "Name", width: "80px", dataType: "string" },
    ],
    defaultColumnWidth: 150,
    features: [
    	{
    		name: 'Sorting',
    		type: 'local'
    	}
    ]
}); 
```



**In HTML:**

```html
<table id="t1" cellpadding="5" cellspacing="0" border="1">
	<thead>
        <tr>
            <th>
               Product ID 
            </th>
            <th>
              Product Name
            </th>
            <th>
              Product Number  
            </th>
        </tr>
	</thead>
    <tbody>
        <tr><td>1</td><td>Adjustable Race</td><td>AR-5381</td></tr>
        <tr><td>2</td><td>Bearing Ball</td><td>BA-8327</td></tr>
        <tr><td>3</td><td>BB Ball Bearing</td><td>BE-2349</td></tr>
        <tr><td>4</td><td>Headset Ball Bearings</td><td>BE-2908</td></tr>
        <tr><td>316</td><td>Blade</td><td>BL-2036</td></tr>
        <tr><td>317</td><td>LL Crankarm</td><td>CA-5965</td></tr>
        <tr><td>318</td><td>ML Crankarm</td><td>CA-6738</td></tr>
        <tr><td>319</td><td>HL Crankarm</td><td>CA-7457</td></tr>
        <tr><td>320</td><td>Chainring Bolts</td><td>CB-2903</td></tr>
        <tr><td>321</td><td>Chainring Nut</td><td>CN-6137</td></tr>
    </tbody>
</table>
```

## Binding to a New Table
Listing 3 shows how to bind the grid to a new HTML table and override the default data type of string when Table data is parsed when the jQuery Grid is bound to HTML all keys are named 1 to n, where "n" is the number of cells in a table row.

**Listing 3:** Binding to a new HTML Table

**In Javascript:**

```js
$("#t2").igGrid({
    columns: [
         {key: 1, width: "100px", dataType: "number", headerText: "[Custom Header]" }
    ],
    defaultColumnWidth: 150,
    features: [
        {
        name: 'Sorting',
        type: 'local'
        }
     ],
     dataSource: $("#t1")[0]
}); 
```
**In HTML:**

```html
<table id="t1" cellpadding="5" cellspacing="0" border="1">
    <thead>
        <tr>
            <th>
               Product ID 
            </th>
            <th>
              Product Name
            </th>
            <th>
              Product Number  
            </th>
        </tr>
    </thead>
    <tbody>
        <tr><td>1</td><td>Adjustable Race</td><td>AR-5381</td></tr>
        <tr><td>2</td><td>Bearing Ball</td><td>BA-8327</td></tr>
        <tr><td>3</td><td>BB Ball Bearing</td><td>BE-2349</td></tr>
        <tr><td>4</td><td>Headset Ball Bearings</td><td>BE-2908</td></tr>
        <tr><td>316</td><td>Blade</td><td>BL-2036</td></tr>
        <tr><td>317</td><td>LL Crankarm</td><td>CA-5965</td></tr>
        <tr><td>318</td><td>ML Crankarm</td><td>CA-6738</td></tr>
        <tr><td>319</td><td>HL Crankarm</td><td>CA-7457</td></tr>
        <tr><td>320</td><td>Chainring Bolts</td><td>CB-2903</td></tr>
        <tr><td>321</td><td>Chainring Nut</td><td>CN-6137</td></tr>
    </tbody>
</table>
  
<table id="t2"></table>
```

**Running Sample**
<div class="embed-sample">
   [%%SamplesEmbedUrl%%/grid/html-binding](%%SamplesEmbedUrl%%/grid/html-binding)
</div>
## Known Issues and Limitations
The `igGrid` has [known limitations](igGrid-Known-Issues.html) that should be taken into account.
## Related topics
[igGrid Overview](igGrid-Overview.html)
