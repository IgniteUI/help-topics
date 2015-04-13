<!--
|metadata|
{
    "fileName": "iglistview-adding-iglistview-to-a-web-page",
    "controlName": "igListView",
    "tags": ["API","Getting Started","How Do I"]
}
|metadata|
-->

# Adding igListView to a Web Page

## Topic Overview

### Purpose

This topic explains how you can add `igListView`™ mobile control to a web page.

### Required background

- Concepts
	- [jQuery Mobile framework](http://jquerymobile.com/)
- Topics
	- [igListView](igListView.html): Landing page for all `igListView` topics.
	- [igListView Overview](igListView-Overview.html): Provides conceptual overview for the `igListView`.
- External Resources
	- [jQuery Mobile Events](http://jquerymobile.com/demos/1.1.0-rc.1/docs/api/events.html)



### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Property Reference**](#property-reference)
-   [**Method Reference**](#method-reference)
-   [**Events Reference**](#events-reference)
-   [**Bindings Reference**](#bindings-reference)
-   [**Adding igListView to a Web Page**](#adding)
    -   [Preview](#preview)
    -   [Overview](#overview)
    -   [Steps](#steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a> Introduction

The `igListView` control can be bound to various types of data sources. This is done through using the `igDataSource` widget as an intermediate between `igListView` and the data source itself. Apart from that `igListView` can be bound to an Unordered List and an Ordered List HTML element.

By default, the `igListView` has a predefined set of properties to which it can be bound. These are defined in `Bindings` property. For example you can define header, text, image, navigate URL, count bubble, description for each item in the list. You can also use Infragistics templating engine to define your own template. This is done by using the `itemTemplate` property.

![](images/Adding_igListView_1.png)



## <a id="property-reference"></a> Property Reference

This section describes the various properties of `igListView`.

The following table summarizes the purpose and functionality of the `igListView` Sorting control’s featured properties.

Property | Description
---|---
[inset](%%jQueryApiUrl%%/mobile.igList#options:inset) | Determines whether the list view should appear inset in the page or not.
[numberedList](%%jQueryApiUrl%%/mobile.igList#options:numberedList) | Indicates if an ol or ul should be used as the main element for a data bound list.
[dataSource](%%jQueryApiUrl%%/mobile.igList#options:dataSource) | Can be any valid data source accepted by `$.ig.DataSource`, or an instance of an `$.ig.DataSource` itself.
[dataSourceUrl](%%jQueryApiUrl%%/mobile.igList#options:dataSourceUrl) | Specifies a remote URL as a data source, from which data will be retrieved using an AJAX call `($.ajax)`.
[dataSourceType](%%jQueryApiUrl%%/mobile.igList#options:dataSourceType) | Explicitly set data source type (such as json).
[itemTemplate](%%jQueryApiUrl%%/mobile.igList#options:itemTemplate) | IG templating style template that will be used to render list items.
[itemDetailsTemplate](%%jQueryApiUrl%%/mobile.igList#options:itemDetailsTemplate) | IG templating style template that will be used to render details about list items in a sub page.
[imageMode](%%jQueryApiUrl%%/mobile.igList#options:imageMode) | Determines whether to show no image, an icon, or a thumbnail.
[showCount](%%jQueryApiUrl%%/mobile.igList#options:showCount) | Determines whether to show a count bubble or not.
[itemHeaderSize](%%jQueryApiUrl%%/mobile.igList#options:itemHeaderSize) | Determines whether to show a heading tag in the LI. Can be H1 to H6 depending on the value.
[bindings](%%jQueryApiUrl%%/mobile.igList#options:bindings) | Specifies the data binding properties and keys.
[searchTrayExpandLabel](%%jQueryApiUrl%%/mobile.igList#options:searchTrayExpandLabel) | The text displayed in the search tray footer when it is collapsed and all the states are default.
[features](%%jQueryApiUrl%%/mobile.igList#options:features) | Array of list filter definitions: sorting, filtering, load on demand etc.





## <a id="method-reference"></a> Method Reference

This section describes the methods of `igListView`.

The following table summarizes the purpose and functionality of the `igListView` Sorting control’s featured properties.

Method | Description | Parameters
---|---|---
[container](%%jQueryApiUrl%%/mobile.igList#methods:container) | Returns the DIV that is the topmost container of the list widget. | N/A
[toggleSearchArea](%%jQueryApiUrl%%/mobile.igList#methods:toggleSearchArea) | Toggles the search area. | N/A
[dataBind](%%jQueryApiUrl%%/mobile.igList#methods:dataBind) | Binds to data. | N/A
[destroy](%%jQueryApiUrl%%/mobile.igList#methods:destroy) | Destroys the widget. | N/A



## <a id="events-reference"></a> Events Reference

This section lists the events fired by `igListView`.

The following table summarizes the purpose and functionality of the `igListView` control’s events.

Event | Description | Cancellable
---|---|---
[dataBinding](%%jQueryApiUrl%%/mobile.igList#events:dataBinding) | This event is fired before data binding takes place. | true
[dataBound](%%jQueryApiUrl%%/mobile.igList#events:dataBound) | This event is fired after data binding is complete. | false
[dataRendering](%%jQueryApiUrl%%/mobile.igList#events:dataRendering) | This event is fired before cleaning up the UL/OL and rendering new items. | true
[dataRendered](%%jQueryApiUrl%%/mobile.igList#events:dataRendered) | This event is fired after the list is completely rendered. | false
[renderingTray](%%jQueryApiUrl%%/mobile.igList#events:renderingTray) | This event is fired before the search tray is rendered for the list. | true
[renderedTray](%%jQueryApiUrl%%/mobile.igList#events:renderedTray) | This event is fired after the search tray is rendered for the list. | false
[renderingTrayFooterBar](%%jQueryApiUrl%%/mobile.igList#events:renderingTrayFooterBar) | This event is fired before the search tray footer bar is rendered for the list. | true
[renderedTrayFooterBar](%%jQueryApiUrl%%/mobile.igList#events:renderedTrayFooterBar) | This event is fired after the search tray footer bar is rendered for the list. | false
[footerRendering](%%jQueryApiUrl%%/mobile.igList#events:footerRendering) | This event is fired before footer is rendered to the list. Use it to add contents to footer. | true
[footerRendered](%%jQueryApiUrl%%/mobile.igList#events:footerRendered) | This event is fired after list view footer has been rendered. | false
[itemsRendering](%%jQueryApiUrl%%/mobile.igList#events:itemsRendering) | This event is fired before new list items are rendered. | true
[itemsRendered](%%jQueryApiUrl%%/mobile.igList#events:itemsRendered) | This event is fired after list items have been created and added to the DOM. | false
[subPageCreating](%%jQueryApiUrl%%/mobile.igList#events:subPageCreating) | This event is fired before page for child list and/or details are created. | true
[subPageCreated](%%jQueryApiUrl%%/mobile.igList#events:subPageCreated) | This event is fired after list items have been created and added to the DOM. | false
[schemaGenerated](%%jQueryApiUrl%%/mobile.igList#events:schemaGenerated) | This event is fired after $.ig.DataSource schema has been generated, in case it needs to be modified. | false
[requestError](%%jQueryApiUrl%%/mobile.igList#events:requestError) | This event is fired if there is an error in the request, when the list is doing a remote operation, such as data binding, load on demand, sorting, etc. | false



## <a id="bindings-reference"></a> Bindings Reference

### Introduction

This section describes the predefined binding’s properties of `igListView`. The default template is similar to the code snippet below, however it depends on the settings:

**In HTML:**

```html
<li>
    <div>
        <a href="${navigateUrlKey}">
            <img src="${imageUrlKey}">
            <h2>${headerKey}</h2>
            <p>${descriptionKey}</p>
            ${textKey}
            <span>${countKey}</span>
        </a>
    </div>
</li>
```

Heading part is configurable through `itemHeaderSize` property.

Alternatively you can use Infragistics template engine to define your own template. Use `itemTemplate` property for this purpose.

### Bindings reference summary

The following table summarizes the purpose and functionality of the `igListView` bindings object literal featured properties.

Property | Description
---|---
[textKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.textKey) | Specifies the name of the data source property the value of which would be the node text.
[imageUrlKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.imageUrlKey) | Specifies the name of the data source property the value of which would be used as a URL for the node image.
[navigateUrlKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.navigateUrlKey) | Specifies the name of the data source property the value of which would be used as a href attribute for the node anchor.
[countKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.countKey) | Specifies the name of the data source property the value of which would be used as a count of the node.
[headerKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.headerKey) | Specifies the name of the data source property the value of which would be used as a header of the node.
[descriptionKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.descriptionKey) | Specifies the name of the data source property the value of which would be used as a description of the node.
[primaryKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.primaryKey) | Specifies the name of the data source property the value of which is the primary key attribute for the data. This property is used when load on demand is enabled and if specified the node paths would be generated using primary keys instead of indices.
[isDividerKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.isDividerKey) | Specifies the name of the data source property which will be used to determine if an item represents a read-only list divider.
[detailsTitleKey](%%jQueryApiUrl%%/mobile.igList#options:bindings.detailsTitleKey) | Specifies the name of the data source property the value of which would be the Title of a sub page for a node.
[customBindings](%%jQueryApiUrl%%/mobile.igList#options:bindings.customBindings) | A list of objects of custom bindings. This will bring in extra data to be used in item or details templates. Each item should be an object with key/value pairs of `fieldName` and `dataType`.




## <a id="adding"></a> Adding igListView to a Web Page

This procedure guides you to the process of adding `igListView` to the web page. You can instantiate the control in several ways. Here we discuss the standard jQuery UI method and also the jQuery mobile method by using attributes.

### <a id="preview"></a> Preview

The following screenshot is a preview of the final result.

![](images/Adding_igListView_1.png)

### <a id="overview"></a> Overview

This topic takes you step-by-step toward adding `igListView` to a web page. The following is a conceptual overview of the process:

1.  [Referencing the required JavaScript and CSS files](#reference-resources)
2.  [Defining the data](#define-data)
3.  [Instantiating igListView](#instantiate)

### <a id="steps"></a> Steps

The following steps demonstrate how to add `igListView` to a web page.

1. Reference the required JavaScript and CSS files <a id="reference-resources"></a>
	
	You can add the required files in a couple of ways,

	-   by using individual scripts
	
	-   by using Infragistics loader
	
	The recommended way is to use the loader.

	-   Reference using individual files.

		**In HTML:**

	    ```html
	    <link rel="stylesheet" href="jquery.mobile.structure.min.css" />
	    <link rel="Stylesheet" href="infragistics.mobile.list.css" />
	    <link rel="Stylesheet" href="infragistics.mobile.theme.css" />
	        
	    <script type="text/javascript" src="jquery.min.js"></script>
	    <script type="text/javascript" src="jquery.mobile.min.js"></script>
	        
	    <script type="text/javascript" src="infragistics.util.js"></script>
	    <script type="text/javascript" src="infragistics.ui.shared.js"></script>
	    <script type="text/javascript" src="infragistics.datasource.js"></script>
	    <script type="text/javascript" src="infragistics.ui.scroll.js"></script>
	    <script type="text/javascript" src="infragistics.mobileui.list.js"></script>
	    ```
	-   Reference using Infragistics loader.

		**In HTML:**
		
		```html
		<link rel="stylesheet" href="jquery.mobile.structure.min.css" />
		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="jquery.mobile.min.js"></script>
		<script type="text/javascript" src="infragistics.mobile.loader.js"></script>
		```
		
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		    $.ig.loader({
		        scriptPath: "../js/",
		        cssPath: "../css/",
		        resources: "igmList",
		        theme: "ios"
		    });
		</script>
		```

2. Define the data to bind to <a id="define-data"></a>

	The following code defines a JavaScript array of objects. This data will be used to bind `igListView` to it. Data is taken from the Northwind Employees table.

	**In JavaScript:**
	
	```js
	var northwindEmployees = [
	    { "ID": 1, "Name": "Davolio, Nancy", "Title": "Sales Representative", 
	        "ImageUrl": "../content/images/nw/employees/1.png",
	        "Phone": "(206) 555-9857", "PhoneUrl": "tel:(206) 555-9857" },
	    { "ID": 2, "Name": "Fuller, Andrew", "Title": "Vice President, Sales", 
	        "ImageUrl": "../content/images/nw/employees/2.png",
	        "Phone": "(206) 555-9482", "PhoneUrl": "tel:(206) 555-9482" },
	    { "ID": 3, "Name": "Leverling, Janet", "Title": "Sales Representative", 
	        "ImageUrl": "../content/images/nw/employees/3.png",
	        "Phone": "(206) 555-3412", "PhoneUrl": "tel:(206) 555-3412" },
	    { "ID": 4, "Name": "Peacock, Margaret", "Title": "Sales Representative", 
	        "ImageUrl": "../content/images/nw/employees/4.png",
	        "Phone": "(206) 555-8122", "PhoneUrl": "tel:(206) 555-8122" },
	    { "ID": 5, "Name": "Buchanan, Steven", "Title": "Sales Manager", 
	        "ImageUrl": "../content/images/nw/employees/5.png",
	        "Phone": "(71) 555-4848", "PhoneUrl": "tel:(71) 555-4848" },
	]
	```

3. Instantiate `igListView` <a id="instantiate"></a>
	
	1. Instantiate through markup
	
		If you want to initialize `igListView` on a web page with markup only you need to define an HTML UL element. The included JavaScript files will initialize the widget behind the scenes. Use HTML 5 data-* attributes to bind element to the data. Data-role attribute defines the control which will wrap the HTML element. In this case, this is `iglistview`. Data source points to the JavaScript array defined in step 2. Other attributes bind to properties from the data source.

		**In HTML:**
		
		```html
		<ul id="jsonListView"
		    data-role="iglistview"
		    data-data-source="northwindEmployees" 
		    data-bindings-header-key="Name"
		    data-bindings-primary-key="ID"
		    data-bindings-text-key="Phone"
		    data-bindings-image-url-key="ImageUrl"
		    data-bindings-navigate-url-key="PhoneUrl">
		</ul>
		```

	2. Instantiate in JavaScript
	
		a. Define DIV HTML placeholder
	
		**In HTML:**
		
		```html
		<div id="jsonListView"></div>
		```
		
		b. Include the JavaScript initialization code
	
		-   If you are using Infragistics loader then put the following code inside `$.ig.loader(function () {/*Initialization code here*/});`
		-   If you are referencing individual files then bind to jQuery Mobile `pageinit` event.
	
		**In JavaScript:**
		
		```js
		$("#jsonListView").igListView({
		    dataSource: northwindEmployees,
		    bindings: {
		        headerKey: 'Name',
		        primaryKey: 'ID',
		        textKey: 'Phone',
		        imageUrlKey: 'ImageUrl',
		        navigateUrlKey: 'PhoneUrl'
		    }
		});
		```
	
	3. Instantiate in MVC

		**In C#:**
		
		```csharp
		@model IQueryable<EmployeeViewModel>
		@(Html
		    .InfragisticsMobile()
		    .ListView(Model)
		    .ID("basicMvcListView")
		    .ImageMode(ImageMode.ThumbNail)
		    .Bindings(b =>
		    {
		        b.HeaderKeyFor(e => e.Name)
		            .PrimaryKeyFor(e => e.ID)
		            .TextKeyFor(e => e.Phone)
		            .ImageUrlKeyFor(e => e.ImageUrl);
		    })
		    .DataBind()
		    .Render()
		)
		```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igListView Overview](igListView-Overview.html): This topic explains the features of `igListView`™.

- [Data Attributes Reference](igListView-Data-Attributes-Reference.html): This topic lists all `igListView`™ data attributes. You can use these attributes to initialize `igListView` in markup.

- [igDataSource](igDataSource-igDataSource.html): This topic provides reference information about `igDataSource` topics.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [JSON Binding](%%SamplesUrl%%/mobile-list-view/json-binding): This sample shows how to bind `igListView` to JSON object.

- [Bind to Collection](%%SamplesUrl%%/mobile-list-view/bind-collection): This sample shows how to bind `igListView` to a model in an ASP.NET MVC application.

- [Dynamic Binding](%%SamplesUrl%%/mobile-list-view/dynamic-binding): This sample shows how to bind `igListView` at runtime.





 

 


