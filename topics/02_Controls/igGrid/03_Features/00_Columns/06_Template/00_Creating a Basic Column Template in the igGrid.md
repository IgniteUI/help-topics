<!--
|metadata|
{
    "fileName": "creating-a-basic-column-template-in-the-iggrid",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I","Templating"]
}
|metadata|
-->

# Creating a Basic Column Template (igGrid)

## Topic Overview

### Purpose

This topic demonstrates how to create basic column template for the `igGrid`™ control.

### In this topic

This topic contains the following sections:

-   [**Creating a Basic Colum Template in the igGrid**](#basic-tempalte)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="basic-tempalte"></a> Creating a Basic Colum Template in the igGrid

In this example basic column templates are applied to the grid. The first two columns have intentionally left blank header text fields, but these are moved before each value into a cell. Into the last column `Price: $` is inserted before each value coming from the data source.

### <a id="preview"></a> Preview

The following screenshot is a preview of the final result. Only the columns with red outline have column templates assigned.

![](images/GridColumnTemplateWalkthough_1.png)

### <a id="prerequisites"></a> Prerequisites

To complete the procedure you need an empty html page.

### <a id="steps"></a> Steps

The following steps demonstrate how to create a basic column template in the `igGrid`

1. Prepare html page

	To prepare the html page, add an `igLoader` and configure it to load `igHierarchicalGrid` resources.
	
	**In Javascript:**
	
	```js
	<script src="http://localhost/ig_ui/js/infragistics.loader.js"></script>
	<script type="text/javascript">
		$.ig.loader({
			scriptPath: "http://localhost/ig_ui/js/",
			cssPath: "http://localhost/ig_ui/css/",
			resources: "igGrid"
		});
	</script>
	```

2. Add and apply the column template

	1. Add sample data to the page and table tag to the body of the page.
	
		**In Javascript:**
		
		```js
		<script type="text/javascript">
		var northwindProducts = [{
			"ProductID": 1,
			"ProductName": "Chai",
			"QuantityPerUnit": "10 boxes x 20 bags",
			"UnitPrice": "18.0000"
		}, {
			"ProductID": 2,
			"ProductName": "Chang",
			"QuantityPerUnit": "24 - 12 oz bottles",
			"UnitPrice": "19.0000"
		}];
		</script>
		```
		
		**In HTML:**
		
		```html
		<body>
			<table id="grid1"></table>
		</body>
		```
	
	​2. Add igGrid with column templates set.
	
		**In Javascript:**
		
		```js
		<script type="text/javascript">
		$.ig.loader(function () {
	        $("#grid1").igGrid({
				width: 700,
				columns: [
					{ headerText: " ", key: "ProductID", dataType: "number", template: "ID: ${ProductID}", width: 50},
					{ headerText: " ", key: "ProductName", dataType: "string", template: "Product Name: ${ProductName}", width: 250 },
					{ headerText: "Quantity ", key: "QuantityPerUnit", dataType: "string", width: 200 },
					{ headerText: "Unit Price", key: "UnitPrice", dataType: "number", template: "Price: ${UnitPrice}", width: 100 }
				],
				autoGenerateColumns: false,
				dataSource: northwindProducts                  
	        })
		});
		</script>
		```

3. (Optional) Verify the result

	Save the file and open it to preview the result.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Infragistics Templating Engine](igTemplating-Overview.html): This section contains topics covering the use the Infragistics® Templating Engine.

### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Column Template](%%SamplesUrl%%/grid/column-template): This sample shows how to insert a button into a column using igGrid column template functionality.





 

 


