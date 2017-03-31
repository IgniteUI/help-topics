<!--
|metadata|
{
    "fileName": "igolapflatdatasource-adding-to-an-html-page",
    "controlName": "igOlapFlatDataSource",
    "tags": ["Data Binding","Getting Started","Grids","How Do I"]
}
|metadata|
-->

# Adding igOlapFlatDataSource to an HTML Page

## Topic Overview
### Purpose

This topic demonstrates, with code examples, how to add the `igOlapFlatDataSource`™ component to an HTML page and bind it to data.

### Required background

The following topics are prerequisites to understanding this topic:

**Concepts**

-   Online Analytical Processing (OLAP)

**Topics**

- [igOlapFlatDataSource Overview](igOlapFlatDataSource-Overview.html): This topic provides an overview of the `igOlapFlatDataSource` component and its main features.

### In this topic

This topic contains the following sections:

-   [**Adding igOlapFlatDataSource to an HTML Page – Conceptual Overview**](#conceptual-overview)
    -   [Adding igOlapFlatDataSource to an HTML Page summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [**Adding igOlapFlatDataSource to an HTML Page – Procedure**](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Steps](#procedure-steps)
    -   [Full code](#procedure-full-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="conceptual-overview"></a>Adding igOlapFlatDataSource to an HTML Page – Conceptual Overview
### <a id="summary"></a>Adding igOlapFlatDataSource to an HTML Page summary

The `igOlapFlatDataSource` component makes possible for flat data collections to be fed to %%ProductName%%™ pivot grid controls in a JavaScript client environment. This enables the multidimensional (OLAP) analysis on such data sets.

For the `igOlapFlatDataSource` component to work correctly, its [dataSource](%%jQueryApiUrl%%/ig.OlapFlatDataSource#options) and metadata properties must be specified. Initialization of `igOlapFlatDataSource` is not required when it is used together with any of the %%ProductName%% pivot-grid-related controls (which is the most common case) – `igPivotDataSelector` ™, `igPivotGrid` ™, and `igPivotView`™ (Initialization of `igOlapFlatDataSource` is required only if the component is used on its own.).

For instantiating the `igOlapFlatDataSource` component, two parameters are required: `dataSource` and metadata. The `dataSource` parameter specifies the input data to be used and the metadata parameter specifies how the input data will be treated as OLAP data, that is how dimensions, hierarchies, measures, etc., are generated. Internally, `igOlapFlatDataSource` uses an `igDataSource`™ instance. When specifying the dataSource property, you can either specify an `igDataSource` instance or set it to a data source supported by the `igDataSource`.

### <a id="requirements"></a>Requirements

Following are the general requirements for adding the `igOlapFlatDataSource` component to an HTML page:

-   Data requirements – an `igDataSource` instance or any type of data supported by the `igDataSource`
-   The required JavaScript files:
    -   References to the jQuery library
    -   References to the %%ProductName%% JavaScript files

The Infragistics® JavaScript files reside by default in the JavaScript modules folder under the %%ProductName%% installation path:

-   Jquery-[versionNumber].js (for example, jquery-1.9.0.js) – the jQuery library (available at the jQuery site)
-   `infragistics.util.js` – the JavaScript file containing shared non-UI logic used by some of the %%ProductName%%™ components
-   `infragistics.olapflatdatasource.js` – the JavaScript file containing the igOlapFlatDataSource component
-   (Conditional – if the Infragistics Loader is used) `infragistics.loader.js` – the Infragistics Loader component which can be used to automatically load all the Infragistics JavaScript and CSS files required by a component

### <a id="steps"></a>Steps

Following are the general conceptual steps for using the `igOlapFlatDataSource`.

1. Adding references to the required resources

2. Preparing the input data

3. Defining the `igOlapFlatDataSource` object

4. Configuring the required initialization options

5. Initializing the `igOlapFlatDataSource`



## <a id="procedure"></a>Adding igOlapFlatDataSource to an HTML Page – Procedure
### <a id="procedure-introduction"></a>Introduction

The following procedure defines and initializes an `igOlapFlatDataSource` object that uses a JavaScript array of objects as input data.

The first step of the procedure offers both of the possible ways to reference the required JavaScript files – by using the Infragistics Loader and manually.

The procedure defines an `igOlapFlatDataSource` instance with a JavaScript array set as the data source and with a simple metadata declaration.

### <a id="procedure-steps"></a>Steps

The following steps demonstrate how to add the `igOlapFlatDataSource` component to an HTML page.

1. Add references to required resources.

	-   (Recommended) If using Infragistics Loader:
	     
		Add a reference to the Loader file. (No need to place references to the individual files.)
	
		**In HTML:**
	
	    ```html
	    <script src="js/jquery-1.9.0.js" type="text/javascript"></script>
	    <script src="js/infragistics.loader.js" type="text/javascript"></script>
	    ```
	
	-   If referencing files manually:
	
		Add an individual reference to every required file.
	
	    ```
	    <script src="js/jquery-1.9.0.js" type="text/javascript"></script>
	    <script src="js/infragistics.util.js" type="text/javascript"></script>
	    <script src="js/infragistics.olapflatdatasource.js" type="text/javascript"></script>
	    ```
	
	>**Note:** The jQuery version number may vary. The version number listed in the code is the latest as of this writing.

2. Prepare the input data.

	Define the JavaScript data array.
	
	**In JavaScript:**
	
	```js
	$.ig.loader(function(){
	   var data = [{ "ProductCategory": "Clothing", "UnitPrice": 12.81, "SellerName": "Stanley Brooker", "Country": "Bulgaria", "City": "Plovdiv", "Date": "2007-01-01", "UnitsSold": 282 },
	   { "ProductCategory": "Clothing", "UnitPrice": 49.57, "SellerName": "Elisa Longbottom", "Country": "US", "City": "New York", "Date": "2007-01-05", "UnitsSold": 296 },
	   { "ProductCategory": "Bikes", "UnitPrice": 3.56, "SellerName": "Lydia Burson", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-06", "UnitsSold": 68 },
	   { "ProductCategory": "Accessories", "UnitPrice": 85.58, "SellerName": "David Haley", "Country": "UK", "City": "London", "Date": "2007-01-07", "UnitsSold": 293 },
	   { "ProductCategory": "Components", "UnitPrice": 18.13, "SellerName": "John Smith", "Country": "Japan", "City": "Yokohama", "Date": "2007-01-08", "UnitsSold": 240 },
	   { "ProductCategory": "Clothing", "UnitPrice": 68.33, "SellerName": "Larry Lieb", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-12", "UnitsSold": 456 },
	   { "ProductCategory": "Components", "UnitPrice": 16.05, "SellerName": "Walter Pang", "Country": "Bulgaria", "City": "Sofia", "Date": "2007-02-09", "UnitsSold": 492 }];
	   // Add all the remaining JS code here
	});
	```
	>**Note:** All the remaining JavaScript code from the procedure must be added inside the function passed to the `igLoader`™, which will be executed when all the needed resources have finished loading.

3. Define the `igOlapFlatDataSource` object.

	Create a new `$.ig.OlapFlatDataSource` object by calling its constructor function and then pass a JavaScript object containing the data source options as properties; as a minimum, you must specify the `dataSource` and metadata options.

4. Configure the required initialization options.

	The following code defines the `igOlapFlatDataSource` instance with a JavaScript array set as the data source and with a simple metadata declaration. For more information on how to define metadata refer to [Defining Metadata (igOlapFlatDataSource)](igOlapFlatDataSource-Defining-Metadata.html).

	**In JavaScript:**
	
	```js
	var dataSource = new $.ig.OlapFlatDataSource({
	    dataSource: data,
	    metadata: {
	        cube: {
	            name: "Sales",
	            measuresDimension: {
	                caption: "Measures",
	                measures: [
	                    {  name: "Units Sold", aggregator: function (items, cellMetadata) {
	                        var sum = 0;
	                        $.each(items, function (index, item) {
	                            sum += item.UnitsSold;
	                        });
	                        return sum;}},
	            },
	            dimensions: [ 
	                {
	                    name: "Seller", hierarchies: [{
	                        name: "Seller", levels: [
	                            {
	                                name: "All Sellers",
	                                memberProvider: function (item) { return "All Sellers"; }
	                            },
	                            {
	                                name: "Seller Name",
	                                memberProvider: function (item) { return item.SellerName; }
	                            }]
	                    }]
	                }]
	        }
	    }
	});
	```

5. Initialize the data source.

	Initialize the flat data source by calling the OlapFlatDataSource object’s `initialize()` method that returns a [promise](http://api.jquery.com/deferred.promise/) object that will be resolved with the root [OlapMetadataTreeItem](%%jQueryApiUrl%%/ig.OlapMetadataTreeItem) (the root node of the metadata tree). This is because the initialization is an asynchronous process. The promise object is an object that encapsulates an asynchronous operation exposing methods that can initiate and execute callbacks when the operation either completes or fails such as [done](http://api.jquery.com/deferred.done/), [fail](http://api.jquery.com/deferred.fail/), etc..
	
	>**Note:** If using a version of jQuery that does not implement promises (1.6 and prior), a custom fallback implementation that provides the same interface is automatically used.



### <a id="procedure-full-code"></a>Full code

The following code demonstrates creating and initializing a new instance of the `igOlapFlatDataSource` component. Both alternatives for referencing the required JavaScript resources are provided – with and without using the Infragistics Loader.

### Instantiating OlapFlatDataSource using the Infragistics Loader:

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: '[path to js folder]',
    cssPath: '[path to css folder]',
    resources: 'igOlapFlatDataSource'
});
$.ig.loader(function () {
    var data = [{ "ProductCategory": "Clothing", "UnitPrice": 12.81, "SellerName": "Stanley Brooker", "Country": "Bulgaria", "City": "Plovdiv", "Date": "2007-01-01", "UnitsSold": 282 },
   { "ProductCategory": "Clothing", "UnitPrice": 49.57, "SellerName": "Elisa Longbottom", "Country": "US", "City": "New York", "Date": "2007-01-05", "UnitsSold": 296 },
   { "ProductCategory": "Bikes", "UnitPrice": 3.56, "SellerName": "Lydia Burson", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-06", "UnitsSold": 68 },
   { "ProductCategory": "Accessories", "UnitPrice": 85.58, "SellerName": "David Haley", "Country": "UK", "City": "London", "Date": "2007-01-07", "UnitsSold": 293 },
   { "ProductCategory": "Components", "UnitPrice": 18.13, "SellerName": "John Smith", "Country": "Japan", "City": "Yokohama", "Date": "2007-01-08", "UnitsSold": 240 },
   { "ProductCategory": "Clothing", "UnitPrice": 68.33, "SellerName": "Larry Lieb", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-12", "UnitsSold": 456 },
   { "ProductCategory": "Components", "UnitPrice": 16.05, "SellerName": "Walter Pang", "Country": "Bulgaria", "City": "Sofia", "Date": "2007-02-09", "UnitsSold": 492 }];
    var dataSource = new $.ig.OlapFlatDataSource({
        dataSource: data,
        metadata: {
            cube: {
                name: "Sales",
                measuresDimension: {
                    caption: "Measures",
                    measures: [
                        {  name: "Units Sold", aggregator: function (items, cellMetadata) {
                            var sum = 0;
                            $.each(items, function (index, item) {
                                sum += item.UnitsSold;
                            });
                            return sum;}},
                },
                dimensions: [ 
                    {
                        name: "Seller", hierarchies: [{
                            name: "Seller", levels: [
                                {
                                    name: "All Sellers",
                                    memberProvider: function (item) { return "All Sellers"; }
                                },
                                {
                                    name: "Seller Name",
                                    memberProvider: function (item) { return item.SellerName; }
                                }]
                        }]
                    }]
            }
        }
    });    
    var promise = dataSource.initialize();
    promise.done(function (metadataTree) {
            // do something when the data source is initialized
        }).fail(function (error) {
            throw error;
        });
});
```

### Instantiating OlapFlatDataSource without using the Infragistics Loader:

**In JavaScript:**

```js
$(function() {
    var data = [{ "ProductCategory": "Clothing", "UnitPrice": 12.81, "SellerName": "Stanley Brooker", "Country": "Bulgaria", "City": "Plovdiv", "Date": "2007-01-01", "UnitsSold": 282 },
   { "ProductCategory": "Clothing", "UnitPrice": 49.57, "SellerName": "Elisa Longbottom", "Country": "US", "City": "New York", "Date": "2007-01-05", "UnitsSold": 296 },
   { "ProductCategory": "Bikes", "UnitPrice": 3.56, "SellerName": "Lydia Burson", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-06", "UnitsSold": 68 },
   { "ProductCategory": "Accessories", "UnitPrice": 85.58, "SellerName": "David Haley", "Country": "UK", "City": "London", "Date": "2007-01-07", "UnitsSold": 293 },
   { "ProductCategory": "Components", "UnitPrice": 18.13, "SellerName": "John Smith", "Country": "Japan", "City": "Yokohama", "Date": "2007-01-08", "UnitsSold": 240 },
   { "ProductCategory": "Clothing", "UnitPrice": 68.33, "SellerName": "Larry Lieb", "Country": "Uruguay", "City": "Ciudad de la Costa", "Date": "2007-01-12", "UnitsSold": 456 },
   { "ProductCategory": "Components", "UnitPrice": 16.05, "SellerName": "Walter Pang", "Country": "Bulgaria", "City": "Sofia", "Date": "2007-02-09", "UnitsSold": 492 }];
    var dataSource = new $.ig.OlapFlatDataSource({
        dataSource: data,
        metadata: {
            cube: {
                name: "Sales",
                measuresDimension: {
                    caption: "Measures",
                    measures: [
                        {  name: "Units Sold", aggregator: function (items, cellMetadata) {
                            var sum = 0;
                            $.each(items, function (index, item) {
                                sum += item.UnitsSold;
                            });
                            return sum;}},
                },
                dimensions: [ 
                    {
                        name: "Seller", hierarchies: [{
                            name: "Seller", levels: [
                                {
                                    name: "All Sellers",
                                    memberProvider: function (item) { return "All Sellers"; }
                                },
                                {
                                    name: "Seller Name",
                                    memberProvider: function (item) { return item.SellerName; }
                                }]
                        }]
                    }]
            }
        }
    });    
    var promise = dataSource.initialize();
    promise.done(function (metadataTree) {
            // do something when the data source is initialized
        }).fail(function (error) {
            throw error;
        });
});
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igOlapFlatDataSource Using the ASP.NET MVC Helper](igOlapFlatDataSource-Adding-Using-MVC-Helper.html): This topic explains, in both conceptual and step-by-step form, how to add the `igOlapFlatDataSource` control to an ASP.NET MVC application using ASP.NET MVC helper.

- [Defining Metadata (igOlapFlatDataSource)](igOlapFlatDataSource-Defining-Metadata.html): This topic explains how to define metadata for the data used with `igOlapFlatDataSource` so that flat data can be presented in multidimensional (OLAP) form.

- [Adding igPivotDataSelector](igPivotDataSelector-Adding.html): This is a group of topics demonstrating how to add the `igPivotDataSelector` to an HTML page and to an ASP.NET MVC application.

- [Adding igPivotGrid](igPivotGrid-Adding.html): This is a group of topics demonstrating how to add the `igPivotGrid` to an HTML page and to an ASP.NET MVC application.

- [Adding igPivotView](igPivotView-Adding.html): This is a group of topics demonstrating how to add the `igPivotView` to an HTML page and to an ASP.NET MVC application.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Binding to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapFlatDataSource` and uses an `igPivotDataSelector` for data selection.





 

 


