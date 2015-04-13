<!--
|metadata|
{
    "fileName": "igcombo-binding-cascading-igcombo-controls-to-cascading-data-sources",
    "controlName": "igCombo",
    "tags": ["Data Binding","How Do I"]
}
|metadata|
-->

# Binding Cascading igCombo Controls to a Cascading Data Sources



##Topic Overview


#### Purpose

This topic explains how to bind parent and child `igCombo`™ controls to a cascading data source. For binding each of the cascading `igCombo` controls to a different data source, see the [Binding Cascading Controls to Individual Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Individual-Data-Sources.html) topic.

#### Required background

The following topics are prerequisites to understanding this topic:


-	[igCombo Overview](igCombo-Overview.html): This topic provides an overview of the `igCombo` control including information regarding: features, binding to data sources, requirements, and templates.

-	[Binding to Data](igCombo-Data-Binding.html): This topic discusses the different ways to data bind the `igCombo` control, as well as some other details related to data binding.



#### In this topic

-   [Binding Cascading igCombo Controls to Cascading Data Sources – Conceptual Overview](#binding-to-cascading-data-source)
  -   [Binding cascading igCombo controls to cascading data sources summary](#binding-cascading-data-source-summary)
    -   [Cascading data sources summary](#cascading-data-source-summary)
    -   [Requirements](#requirements)
-   [Binding Cascading igCombo Controls to Cascading Data Sources – Code Example](#code-example-binding)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="binding-to-cascading-data-source"></a>Binding Cascading igCombo Controls to Cascading Data Sources – Conceptual Overview


####<a id="binding-cascading-data-source-summary"></a> Binding cascading igCombo controls to cascading data sources summary

The cascading functionality of the `igCombo` control requires configuring of at least two instances of the control bound together in parent-child relationships. When a value from the parent `igCombo` is selected, then the values in the child are filtered. This is a time-saving functionality that `igCombo` delivers “out of the box”: all you need is to configure parent and child `igCombo` and their data sources.

Using the cascading data source allows you to define heterogeneous data source, including remote and local with different data keys.

The parent `igCombo` in the cascading couple is defined the “normally”. The parent `igCombo` data source can be any supported data source (See [Binding igCombo to Data Overview](igCombo-Data-Binding.html) topic for details.).

For the child `igCombo` data source, an additional key is required to hold the relation with the parent. The child `igCombo` requires the configuring of two more properties:

-   [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) – defines the ID or the jQuery selector of the parent combo box.
-   [`cascadingDataSources`](%%jQueryApiUrl%%/ui.igcombo#options:cascadingDataSources) – defines the cascading data source that is bound to the child `igCombo`. Note that when you use this property, you do not have to define a [`parentComboKey`](%%jQueryApiUrl%%/ui.igcombo#options:parentComboKey) property and vice versa. (For a practical implementation of this, see [Binding Cascading igCombo Controls to Cascading Data Sources – Code Example](#code-example-binding)).

After these properties are defined, the values will be automatically filtered internally by the `igCombo` control.

####<a id="cascading-data-source-summary"></a> Cascading data sources summary

Cascading data sources are an alternative to using a homogeneous data source in the child `igCombo` control and defining a [`parentComboKey`](%%jQueryApiUrl%%/ui.igcombo#options:parentComboKey). A cascading data source can contain other data sources that can be heterogeneous. This means that any of the data sources can have its own text and value keys. Cascading data source can also be a mix of local and remote data sources.

A cascading data source can be a dictionary of array of objects and any object must have one of the following properties:

-   `dataSource` – reference to the data source if a local data source is used
-   `dataSourceUrl` – reference to the remote data source if a remote data source is used.
-   `valueKey` – optional override for the `valueKey` of the `igCombo`
-   `textKey` – optional override for the `textKey` of the `igCombo`

An example of a cascading data source that contains a mix or local and remote data sources, with different value keys, can be:

**In JavaScript:**

```js
cascadingDataSource = {
    key1: { dataSource: localDS, valueKey: “Identificator” }
    key2: { dataSourceUrl: 
http://odata.netflix.com/Catalog/Titles?$filter=Name%20eq%20%27The%20Name%20of%20The%20Rose%27&$format=json
, valueKey: “Id”}
}
```

####<a id="requirements"></a> Requirements

Following are the general requirements for binding cascading `igCombo` controls to individual data sources.

-   References to the jQuery, jQuery UI scripts and styles. For details, refer to the [Using JavaScript Resouces in Ignite UI](Deployment-Guide-JavaScript-Resources.html) topic.
-   References to the [`igCombo`](igCombo-Getting-Started.html) resource files. You can either add these references manually or use the [`igLoader`](Using-Infragistics-Loader.html) component for automatic referencing (recommended).
-   The child data source must contain an additional key holding the relation with the parent.



##<a id="code-example-binding"></a>Binding Cascading igCombo Controls to Cascading Data Sources – Code Example


####<a id="introduction"></a> Introduction

This example procedure demonstrates how to configure two `igCombo` instances so that when a value in the parent one is selected then the values in child `igCombo` are filtered automatically.

The procedure binds the controls to two local data source that has different value keys. Since two local data source are used, you will be able to see the data source data. In the procedure, an array of objects is created to serve as the selected data source.

For an alternative approach that achieves the same result using two separate data sources, refer to the [Binding Cascading igCombo Controls to Individual Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Individual-Data-Sources.html) topic.

####<a id="preview"></a> Preview

The following screenshot is a preview of the final result.

![](images/02_Cascading_Combo_with_Cascading_Data_Source_1.png)

####<a id="prerequisites"></a> Prerequisites

To complete the procedure, you need the following:

-   A standard HTML page opened for editing

#### <a id="overview"></a>Overview 

Following is a conceptual overview of the process:

​1. Adding the HTML placeholders for parent and child `igCombo` controls

​2. Adding the data source for the parent `igCombo` control

​3. Adding the parent `igCombo` control

​4. Adding the cascading data source for the child `igCombo` control

​5. Adding the child `igCombo` control

​6. (Optional) Verifying the result

####<a id="steps"></a> Steps

The following steps demonstrate how to bind child `igCombo` control to a cascading data sources. At the same time the parent `igCombo` is bound to normal data source.


1. Add the HTML placeholders for parent and child `igCombo` controls.

	For this procedure, define the SPAN element to store the drop-downs. The HTML placeholder can be a DIV element, but in this procedure we use SPAN because we want the both combo boxes on the same row.
	
	**In HTML:**
	
	```html
	<span id="comboCountryCascading"></span>
	<span id="comboDistrictCascading"></span>
	```

2. Add the data source for the parent `igCombo` control.

	For this procedure, define the parent `igCombo` data source as an array of objects.
	
	**In JavaScript:**
	
	```js
	dsCountryCascading = [
	      { txtCountry: “United States”, valCountry: “US” },
	      { txtCountry: “Bulgaria”, valCountry: “BG” },
	];
	```

3. Add the parent `igCombo` control.

	Add the parent `igCombo` defining the required properties.
	
	**In JavaScript:**
	
	```js
	$('#comboCountryCascading').igCombo({
	      textKey: 'txtCountry',
	      valueKey: 'valCountry',
	      dataSource: dsCountryCascading
	});
	```

4. Add the cascading data source for the child `igCombo` control.

	Because the cascading data source is an object that contains other data sources, you first need to define those separate data sources. In this case, there are two parent values – “US” and “BG” – which means you have to define adjoining data source for those values.
	
	1. Define the data source for the child values of the “United States” parent value:
	
		**In JavaScript:**
		
		```js
		dsStatesUSCascading = [
		      { state: "New Jersey”},
		      { state: "California"},
		      { state: "Illinois"},
		      { state: "New York"},
		      { state: "Florida"}
		];
		```
	
	2. Define the data source for the child values of the “Bulgaria” parent value:
	
		**In JavaScript:**
		
		```js
		dsDistrictBGCascading = [
		      { district: "Sofia"},
		      { district: "Plovdiv"},
		      { district: "Varna"},
		      { district: "Yambol"}
		];
		```
	
	3. Define the cascading data source with the relation keys:
	
		**In JavaScript:**
		
		```js
		dsCascStatesDistricts = {
		      “US” : { dataSource: dsStatesUSCascading, textKey: "state" },
		      “BG” : { dataSource: dsDistrictBGCascading, textKey: "district" }
		};
		```
		
		>**Note:** As mentioned earlier in the procedure, if the parent value key is an integer, the cascading data source can alternatively be an array instead of objects and can have the following format:
		
		**In JavaScript:**
		
		```js
		dsCascStatesDistricts = [
		      { dataSource: dsStatesUSCascading, , textKey: "state" },
		      { dataSource: dsDistrictBGCascading, , textKey: "district" }
		];
		```
		
		When a value from the parent is selected, in response, the data source with the same index will be selected from the cascading data source. If the selected parent value is with index 1, then the child `igCombo` internally picks up the `dsDistrictBGCascading` data source.

5. Add the child `igCombo` control.
	
	Add the child `igCombo` control defining the [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) and [`cascadingDataSources`](%%jQueryApiUrl%%/ui.igcombo#options:cascadingDataSources) properties.
	
	**In JavaScript:**
	
	```js
	$("#comboDistrictCascading").igCombo({
	      cascadingDataSources: dsCascStatesDistricts,
	      parentCombo: $('#comboCountryCascading')
	});
	```
	
	>**Note:** If you are not using the jQuery selector for the [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) property, you must add the hash symbol (#) before the ID.

6. (Optional) Verify the result.

	Open the HTML page in your browser to view the result. If you have completed the procedure correctly, you will have two functional drop-downs aligned horizontally as shown in the [Preview](#preview).





##<a id="related-content"></a>Related Content


####<a id="topics"></a> Topics

The following topics provide additional information related to this topic.


-	[Binding Cascading Controls to Individual Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Individual-Data-Sources.html)

This topic explains how to bind the parent and child `igCombo`™ controls to individual data sources.



#### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[Cascading Combo](%%SamplesUrl%%/combo/cascading-combos): This sample demonstrates three cascading `igCombo` controls.





 

 


