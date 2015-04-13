<!--
|metadata|
{
    "fileName": "igdatasource-igdatasource-overview",
    "controlName": "igDataSource",
    "tags": ["Getting Started"]
}
|metadata|
-->

# igDataSource Overview

## About the igDataSource
The `igDataSource` is a jQuery-based component which serves as an intermediate layer between the data bound controls (including the `igGrid` control) and the actual data source. Sources of data for the component may include:

-   Web service (connect through REST GET, WCF, etc.)
-   Local data – JSON, XML, HTML Table, JavaScript array (including strings of JSON and XML)
-   Function returning data

>**Note:** As opposed to the `igGrid` control, the `igDataSource` component is implemented as a plain JavaScript class and does not extend the base jQuery widget.

## Features
The `igDataSource` component supports the following features out-of-the-box:

-   Local (the data is defined on the client-side) and remote (the data is coming from a server) data binding
-   Paging
-   Sorting
-   Filtering
-   Data schema support: translate data from many sources into a consistent format

## Adding Data Source to a Web Page
1.  On your HTML page, reference the required JavaScript libraries: 

	**In HTML:**
	
	```html
	<script type="text/javascript" src="jquery-1.4.4.min.js"></script>
	<script type="text/javascript" src="jquery-ui.min.js"></script>
	<script type="text/javascript" src="infragistics.core.js"></script>
	
	```

2.  Next, create a JSON array which serves as a data source for the `igDataSource`.

	**In Javascript:**
	
	```js
	var products = [];
	products[0] = { "ProductID": 1, "Name": "Adjustable Race", "ProductNumber": "AR-5381" };
	products[1] = { "ProductID": 2, "Name": "Bearing Ball", "ProductNumber": "BA-8327" };
	products[2] = { "ProductID": 3, "Name": "BB Ball Bearing", "ProductNumber": "BE-2349" };
	products[3] = { "ProductID": 4, "Name": "Headset Ball Bearings", "ProductNumber": "BE-2908" };
	products[4] = { "ProductID": 316, "Name": "Blade", "ProductNumber": "BL-2036" };
	products[5] = { "ProductID": 317, "Name": "LL Crankarm", "ProductNumber": "CA-5965" };
	products[6] = { "ProductID": 318, "Name": "ML Crankarm", "ProductNumber": "CA-6738" };
	products[7] = { "ProductID": 319, "Name": "HL Crankarm", "ProductNumber": "CA-7457" };
	products[8] = { "ProductID": 320, "Name": "Chainring Bolts", "ProductNumber": "CB-2903" };
	products[8] = { "ProductID": 321, "Name": "Chainring Nut", "ProductNumber": "CN-6137" };
	```

3.  In your HTML document, in your body tag, add a HTML table.
    
	**In HTML:**
	
	```html
	<table id="table1">
	</table>
	```

4.  Create the following jQuery template:

	**In Javascript:**

	```js
	var rowTemplate = "<tr> <td> ${ProductID} </td> <td> ${Name} </td> <td> ${ProductNumber}</td></tr>"
	```

5.  Inside the `$(document).ready()` event handler, create a new  `igDataSource` instance, binding it to the local JSON string and apply its data to the table element using the jQuery template.

	**In Javascript:**
	
	```js
	<script type="text/javascript">
	    $(document).ready(function () {
	        var ds = new $.ig.DataSource({ type: "json", dataSource: products });
	        ds.dataBind();
	        $($.ig.tmpl(rowTemplate, ds.dataView())).appendTo("#table1 tbody");
	    });
	</script>
	```

	>**Note:** The datasource property is set to products variable, which holds the JSON data. 

6.  Save and run your HTML document.
	
	![](images/igDataSource_Overview_01.png)

 

##Related Topics

-   [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html)
-   [Performing Data Transformations Using DataSchema (igDataSource)](igDataSource-Using-DataSchema.html)

 

 


