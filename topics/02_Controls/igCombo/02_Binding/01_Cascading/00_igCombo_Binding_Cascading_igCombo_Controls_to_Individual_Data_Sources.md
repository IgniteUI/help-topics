<!--
|metadata|
{
    "fileName": "igcombo-binding-cascading-igcombo-controls-to-individual-data-sources",
    "controlName": "igCombo",
    "tags": ["Data Binding","Editing","How Do I"]
}
|metadata|
-->

# Binding Cascading igCombo Controls to Individual Data Sources



##Topic Overview


### Purpose

This topic explains how to bind the parent and child `igCombo`™ controls to individual data sources. For binding cascading `igCombo` controls to cascading data source, see the [Binding Cascading igCombo Controls to a Cascading Data Source](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html) topic.

### Required background

The following topics are prerequisites to understanding this topic:


-	[igCombo Overview](igCombo-Overview.html): This topic provides an overview of the `igCombo` control including its features, binding to data sources, requirements, and templates.

-	[Binding igCombo to Data](igCombo-Data-Binding.html): This topic discusses the different ways to data bind the `igCombo` control, as well as some other details related to data binding.



### In this topic

This topic contains the following sections:

-   [Binding Cascading igCombo Controls to Individual Data Sources – Conceptual Overview](#binding-individual-data-source)
  -   [Binding cascading igCombo controls to individual data sources     summary](#binding-individual-data-source-summary)
    -   [Requirements](#requirements)
-   [Binding Cascading igCombo Controls to Individual Data Sources – Code Example](#code-example-binding-ids)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="binding-individual-data-source"></a>Binding Cascading igCombo Controls to Individual Data Sources – Conceptual Overview


###<a id="binding-individual-data-source-summary"></a> Binding cascading igCombo controls to individual data sources summary

The cascading functionality of the `igCombo` control requires configuring of at least two instances of the control bound together in parent-child relationships. When a value from the parent `igCombo` is selected, then the values in the child are filtered. This is a time-saving functionality that `igCombo` delivers “out of the box”: all you need is to configure parent and child `igCombo` and their data sources.

The parent `igCombo` in the cascading couple is defined the “normally”. The parent `igCombo` data source can be any supported data source (See [Binding igCombo to Data Overview](igCombo-Data-Binding.html) topic for details.).

For the child `igCombo` data source, an additional key is required to hold the relation with the parent. The child `igCombo` requires the configuring of two more properties:

-   [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) – defines the ID or the jQuery selector of the parent combo box
-   [`parentComboKey`](%%jQueryApiUrl%%/ui.igcombo#options:parentComboKey) – defines the additional parent ID key from the [`dataSource`](%%jQueryApiUrl%%/ui.igcombo#options:dataSource) bound to the child `igCombo`. Note that when you use that property, the `igCombo` [`dataSource`](%%jQueryApiUrl%%/ui.igcombo#options:dataSource) should contain key that relates to parent data source key and the data source itself should be homogeneous. (For a practical implementation of this, see [](#code-example-binding-ids)[Binding Cascading igCombo Controls to Individual Data Sources – Code Example](#code-example-binding-ids)).

After these properties are defined, the values will be automatically filtered internally by the `igCombo` control.

####<a id="requirements"></a> Requirements

Following are the general requirements for binding cascading `igCombo` controls to individual data sources.

-   References to the jQuery, jQuery UI scripts and styles. For details, refer to the [Using JavaScript Resouces in Ignite UI](Deployment-Guide-JavaScript-Resources.html) topic.
-   References to the [igCombo](igCombo-Getting-Started.html) resource files. You can either add these references manually or use the [igLoader](Using-Infragistics-Loader.html) component for automatic referencing (recommended).
-   The child data source must contain an additional key holding the relation with the parent.



##<a id="code-example-binding-ids"></a>Binding Cascading igCombo Controls to Individual Data Sources – Code Example


###<a id="introduction"></a> Introduction

This example procedure demonstrates how to configure two `igCombo` instances so that when a value in the parent one is selected then the values in child `igCombo` are filtered automatically. In this example, the parent `igCombo` values are country names and when a country is selected, the child `igCombo` values are filtered to show only the districts or states from that country.

The procedure shows how to configure the `igCombo` instances and their data sources and provides the needed HTML code snippet.

As a data source for the parent `igCombo`, an array of objects is used.

For an alternative approach that achieves the same result using a single cascading data source, refer to the the [Binding Cascading igCombo to Cascading Data Source](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html) topic.

###<a id="preview"></a> Preview

The following screenshot is a preview of the final result.

![](images/01_Cascading_Combo_with_Individaul_Data_Source_1.png)

###<a id="prerequisites"></a> Prerequisites

To complete the procedure, you need the following:

-   A standard HTML page opened for editing

###<a id="overview"></a> Overview 

Following is a conceptual overview of the process:

​	1. Adding the HTML placeholders for parent and child `igCombo` controls

​	2. Adding the data source for the parent `igCombo` control

​	3. Adding the parent `igCombo` control

​	4. Adding the data source for the child `igCombo` control

​	5. Adding the child `igCombo` control

​	6. (Optional) Verifying the result

###<a id="steps"></a> Steps

The following steps demonstrate how to bind the parent and child `igCombo` controls to a different data sources.

1. Add the HTML placeholders for parent and child `igCombo` controls.

	For this procedure, define the SPAN element to store the drop-downs. The HTML placeholder can be a DIV element, but in this procedure we use SPAN because we want the both combo boxes on the same row.
	
	**In HTML:**
	
	```html
	<span id="comboCountry"></span>
	<span id="comboDistrict"></span>
	```

2. Add the data source for the parent `igCombo` control.

	For this procedure, define the parent `igCombo` data source as an array of objects.
	
	**In JavaScript:**
	
	```js
	dsCountry = [
	      { txtCountry: 'United States', valCountry: "US" },
	      { txtCountry: 'Bulgaria', valCountry: "BG" }
	];
	```

3. Add the parent `igCombo` control.

	Add the parent `igCombo` defining the required properties.
	
	**In JavaScript:**
	
	```js
	$("#comboCountry").igCombo({
	      textKey: "txtCountry",
	      valueKey: "valCountry",
	      dataSource: dsCountry
	});
	```

4. Add the data source for the child `igCombo` control.

	For this procedure, define the child `igCombo` data source as an array of objects. Note the additional key (`keyCountry`) holding the relation to the parent.
	
	**In JavaScript:**
	
	```js
	dsCascDistrict = [
	      { keyCountry: "US", txtDistrict: "New Jersey", valDistrict: "NJ" },
	      { keyCountry: "US", txtDistrict: "California", valDistrict: "CA" },
	      { keyCountry: "US", txtDistrict: "Illinois", valDistrict: "IL" },
	      { keyCountry: "US", txtDistrict: "New York", valDistrict: "NY" },
	      { keyCountry: "US", txtDistrict: "Florida", valDistrict: "FL" },
	      { keyCountry: "BG", txtDistrict: "Sofia", valDistrict: "SA" },
	      { keyCountry: "BG", txtDistrict: "Plovdiv", valDistrict: "PV" },
	      { keyCountry: "BG", txtDistrict: "Varna", valDistrict: "V" },
	      { keyCountry: "BG", txtDistrict: "Yambol", valDistrict: "Y" }
	];
	```

5. Add the child `igCombo` control.

	Add the child `igCombo` control defining the [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) and [`parentComboKey`](%%jQueryApiUrl%%/ui.igcombo#options:parentComboKey) properties.
	
	**In JavaScript:**
	
	```js
	$("#comboDistrict").igCombo({
	      valueKey: "valDistrict",
	      textKey: "txtDistrict",
	      dataSource: dsCascDistrict,
	      parentComboKey: "keyCountry",
	      parentCombo: "#comboCountry"
	});
	```
	
	>**Note:** If you are not using the jQuery selector for the [`parentCombo`](%%jQueryApiUrl%%/ui.igcombo#options:parentCombo) property, you must add the hash symbol (#) before the ID.

6. (Optional) Verify the result.

	Open the HTML page in your browser to view the result. If you have completed the procedure correctly, you will have two functional drop-downs aligned horizontally as shown in the [Preview](#preview).


##<a id="related-content"></a>Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

-	[Binding Cascading igCombo Controls to a Cascading Data Source](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html): This topic explains how to bind the parent and child `igCombo` controls to a cascading data source.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

-	[Cascading Combo](%%SamplesUrl%%/combo/cascading-combos): This sample demonstrates three cascading `igCombo` controls.





 

 


