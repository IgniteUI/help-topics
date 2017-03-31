<!--
|metadata|
{
    "fileName": "igdatasource-binding-igdatasource-to-client-side-data",
    "controlName": "igDataSource",
    "tags": ["Data Binding"]
}
|metadata|
-->

# Binding igDataSource to Client-Side Data

## Overview
This document demonstrates how to bind the %%ProductName%%™ data source component, or `igDataSource`, to client-side JavaScript arrays and JSON data. The general approach of binding to client-side data whether you are binding to standard arrays or JSON arrays is the same. After establishing the data source array, you must bind the data to the `igDataSource` component and then bind the data source to a UI element on the page. While the basic steps for binding to client-side data follow a similar pattern, this topic details the nuances of using the different data formats.

## Binding to Client-Side Data
Regardless of the array format you choose to bind to, your page must have the appropriate JavaScript files included to support the data source component. Listing 1 shows you the script references you must add to your page to work with each of the coming examples.

###Listing 1: Required JavaScript files needed to use the `igDataSource` component



**In Javascript:**

```js
<script src="scripts/jquery-1.4.4.js" type="text/javascript"></script>
<script src="scripts/jquery-ui.js" type="text/javascript"></script>
<script src="scripts/infragistics.core.js" type="text/javascript"></script>
```

>**Note:** The igGridControl component does not dictate that you reference any CSS files, as the data source is a component with no built-in user interface counterpart.

## Binding to JavaScript Arrays
To bind the `igDataSource` component to an array of plain JavaScript array data, add an array to your page as shown in Listing 2.

###Listing 2: Array of array data



**In Javascript:**

    var arrayOfArraysData = [
       ["AED", "Emirati Dirham", "Jun  1 1998 12:00AM"],
       ["AFA", "Afghani", "Jun  1 1998 12:00AM"],
       ["ALL", "Lek", "Jun  1 1998 12:00AM"],
       ["AMD", "Armenian Dram", "Jun  1 1998 12:00AM"],
       ["ANG", "Netherlands Antillian Guilder", "Jun  1 1998 12:00AM"],
       ["AOA", "Kwanza", "Jun  1 1998 12:00AM"],
       ["ARS", "Argentine Peso", "Jun  1 1998 12:00AM"],
       ["ATS", "Shilling", "Jun  1 1998 12:00AM"],
       ["AUD", "Australian Dollar", "Jun  1 1998 12:00AM"],
       ["AWG", "Aruban Guilder", "Jun  1 1998 12:00AM"],
       ["AZM", "Azerbaijanian Manat", "Jun  1 1998 12:00AM"],
    ];

Now create a HTML table element to act as the container for the final data-bound data. Listing 3 demonstrates how to create the shell of the table as well as pre-defining table headers.

###Listing 3: Table structure to support binding to the data source control



**In HTML:**

    <table id="t1">
      <thead>
        <tr>
          <th>Currency Code</th>
          <th>Name</th>
          <th>Modified Date</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

Next, you must have a mechanism available to render the series of data being bound to the table. Listing 4 depicts a jQuery client template definition that matches the defined column headers shown in Listing 3.

###Listing 4: jQuery client template definition for client-side data binding



**In Javascript:**

```js
 var template = "<tr> <td> ${CurrencyCode} </td> <td> ${Name} </td><td> ${ModifiedDate} </td></tr>" 
```

Now that you have the data, the HTML shell and the data binding template prepared, you may move on to binding each piece together.

###Listing 5: Binding the array to the data source component and binding the data source to a table element using jQuery client templates



**In Javascript:**

    var arraySchema = new $.ig.DataSchema("array", {fields:[ 
      {name: "CurrencyCode", type: "string"},
      {name: "Name", type: "string"},
      {name: "ModifiedDate", type: "string"}]
    });
                
    ds = new $.ig.DataSource({dataSource: arrayOfArraysData, schema: arraySchema});
    ds.dataBind();    
                
    $("#t1 tbody").empty();                
    $("#arrayDataTemplate").tmpl(ds.dataView()).appendTo("#t1 tbody");

Listing 5 begins by defining a data schema for the data source component so that when the array is bound to the data source, it knows how to map the data internally during data binding. Next, a new instance of the data source component is created by setting the data format as array and passing in the defined schema.

Finally, the destination table’s contents are emptied and the client template is used to fill the table with the array data using jQuery client templates.

## Binding to JSON Data
Binding the `igDataSource` component to JSON data greatly resembles the approach used to bind plain JavaScript arrays. The main difference between using the two data formats is that since JSON data includes an inherent schema in the object definition, the data source component is able to infer the schema directly from the data.

To bind the `igDataSource` component to an array of JSON objects, add the JSON data to your page as shown in Listing 6.

###Listing 6: Array of JSON data



**In Javascript:**

    var products = [];
    products[0] = { "ProductID": 1, "Name": "Adjustable Race", "ProductNumber": "AR-5381" };
    products[1] = { "ProductID": 2, "Name": "Bearing Ball", "ProductNumber": "BA-8327" };
    products[2] = { "ProductID": 3, "Name": "BB Ball Bearing", "ProductNumber": "BE-2349" };
    products[3] = { "ProductID": 4, "Name": "HS Ball Bearings", "ProductNumber": "BE-2908" };
    products[4] = { "ProductID": 316, "Name": "Blade", "ProductNumber": "BL-2036" };
    products[5] = { "ProductID": 317, "Name": "LL Crankarm", "ProductNumber": "CA-5965" };
    products[6] = { "ProductID": 318, "Name": "ML Crankarm", "ProductNumber": "CA-6738" };
    products[7] = { "ProductID": 319, "Name": "HL Crankarm", "ProductNumber": "CA-7457" };
    products[8] = { "ProductID": 320, "Name": "Chainring Bolts", "ProductNumber": "CB-2903" };
    products[8] = { "ProductID": 321, "Name": "Chainring Nut", "ProductNumber": "CN-6137" };

Now, create a HTML table element to act as the container for the final data-bound data. Listing 7 demonstrates how to create the shell of the table as well as pre-defining table headers.

###Listing 7: Table structure to support binding to the data source control



**In HTML:**

    <table id="t1">
      <thead>
        <tr>
          <th>ProductID</th>
          <th>Name</th>
          <th>Product Number</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>

Next, you must have a mechanism available to render the series of data being bound to the table. Listing 8 depicts a jQuery client template definition that matches the defined column headers shown in Listing 7.

###Listing 8: jQuery client template definition for client-side data binding



**In Javascript:**

    <script id="JsonDataTemplate" type="text/x-jquery-tmpl">
      <tr> <td> ${ProductID} </td> <td> ${Name} </td> <td> ${ProductNumber} </td>
    </script>

Now that you have the data, the HTML shell and the data binding template
prepared, you may move on to binding each piece together.

###Listing 9: Binding the JSON array to the data source component and then to the table element using jQuery client templates



**In Javascript:**

```js
var ds = new $.ig.DataSource({
  type: "json", 
  dataSource: products, 
  responseDataKey: "ProductID"});

ds.dataBind();
            
$("#t1 tbody").empty();                
$($.ig.tmpl(template, ds.dataView())).appendTo("#t1 tbody");    
```

Listing 9 begins by creating a new instance of the data source component by setting the data format as json, setting the `dataSource` to the JSON array and defining an indexer key by giving the `responseDataKey` a value.

>**Note:** The value for `responseDataKey` is usually set to the keyed field in the data source.

Finally the destination table’s contents are emptied and the client template is used to fill the table with the array data using jQuery client templates.

 

 


