<!--
|metadata|
{
    "fileName": "iggrid-binding-to-javascript-array-and-json-array",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Binding igGrid to a JavaScript array and JSON array (igGrid)


This document demonstrates how to bind the `igGrid` control to a JSON array, JavaScript array and HTML table element.

## Binding to Client-Side Data

The following steps demonstrate how to bind the `igGrid` control to client-side data.

1.  To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html) help topic.
2.  On your HTML page, reference the required JavaScript and CSS files.

    **In Javascript:**

    ```js
    <script src="scripts/jquery.js" type="text/javascript"></script>
    <script src="scripts/jquery-ui.js" type="text/javascript"></script>
    <script src="scripts/infragistics.core.js" type="text/javascript"></script>
	<script src="scripts/infragistics.lob.js" type="text/javascript"></script>
    <link href="css/themes/infragistics/infragistics.theme.css" rel="stylesheet" type="text/css" />
    <link href="css/structure/infragistics.css" rel="stylesheet" type="text/css" />
    ```

3.  Next, add your desired client-side data source:

    -   JSON array:

	    **In Javascript:**
	
	    ```js
	    var data = [ 
			{ "Name": "John Smith", "Age": 45 },
			{ "Name": "Mary Johnson", "Age": 32 },
			{ "Name": "Bob Ferguson", "Age": 27 }
		];
	    ```

    -   JavaScript array:

	    **In Javascript:**
	
	    ```js
	    arrayOfArraysData = [
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
	    ```

    -   HTML table:

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

4.  jQuery client-side grid initialization:

    - JSON array:
        
	    **In HTML:**

        ```html
        <table id=”grid1”></table>
        ```

		**In Javascript:**

	    ```js
	    $(function () {
            $("#grid1").igGrid({
                dataSource: data
            });
        });
	    ```
		**Running sample demonstrating igGrid JSON binding**
		<div class="embed-sample">
			[igGrid JSON Binding](%%SamplesEmbedUrl%%/grid/json-binding)
		</div>

    -   JavaScript array:

	    **In HTML:**
	
	    ```html
	    <table id=”grid1”></table>
	    ```
	
	    **In Javascript:**
	
	    ```js
	    $(function () {
            $("#grid1").igGrid({
               autoGenerateColumns: false,
                columns: [
                    { headerText: "Employee ID", key: "ProductID", dataType: "string" },
                    { headerText: "Name", key: "Name", dataType: "string" },
                    { headerText: "Date", key: "ProductNumber", dataType: "string" },
                ],
                dataSource: arrayOfArraysData,
                
            });
        });
	    ```
    -   HTML table:

		**In Javascript:**

        ```js
        $("#grid1").igGrid({
           autoGenerateColumns: false,
            columns: [
        		{ key: 1, width: "100px", dataType: "number", headerText: "[Custom Header]" }
            ],
        	defaultColumnWidth: 150    
        });
        ```

## Related Links

-   [Table as DataSoure Sample](iggrid-binding-to-datatable.html)
-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html)
-   [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)

 

 


