<!--
|metadata|
{
    "fileName": "iggrid-configuring-knockout-support",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Configuring Knockout Support (igGrid)

## Topic Overview

### Purpose

This topic explains how to configure the `igGrid`™ control for binding it to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.

- Topics
	- [igGrid Overview](igGrid-Overview.html): This topic provides an overview of the `igGrid` control and explains how to add it to an HTML page.
	- [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html): This topic explains the inner workings of the `igGrid` and how it interacts with the `igDataSource`™ component to enable binding to various data sources.
- External Resources
	- [Knockout Interactive Tutorials](http://learn.knockoutjs.com/)



### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Configuring igGrid with Knockout Support**](#configuring)
-   [**Code Examples**](#examples)
-   [**Code Example: Grid Bound to a Knockout View-Model Object**](#view-model-bound)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)
    -   [Resources](#resources)



## <a id="introduction"></a> Introduction

The `igGrid` control’s support for the Knockout library provides developers with an easy means for using the Knockout library and its declarative syntax to instantiate and configure grid controls.

The Knockout support is implemented as a Knockout extension which is initially invoked when Knockout bindings are applied to a page and during the page life (when external updates to the View-Model take place).

To instantiate an `igGrid` bound to Knockout-managed data structure, you need to specify `igGrid` configuration options into the data-bind attribute of a table element. This renders the grid at the specified location on the element just like creating the control using JavaScript. For information on configuring this option refer to [**Configuring igGrid with Knockout**](#configuring) section below. Additionally, you may specify any of the other `igGrid` options that have relevance to your business case using the data-bind attribute.

Using the Knockout extension for the `igGrid` control ensures that anytime changes occur to the `igGrid` data, either by editing, adding or deleting a row, the extension notifies the observable and updates all its corresponding views. It also ensures that if some external view is updated, the observable in the extension will update the `igGrid` data. (This is the expected behavior from all knockout extension.)

Additionally, you can configure the Knockout extension for `igGrid` such that the `igGrid` reacts to changes in the data source to it which it is bound. This means that, if a row is added, deleted or updated in a data source configured as observable, the extension will be able to track additions and removals of elements and update the grid’s rows accordingly. Please refer to [Code Example: Grid Bound to a Knockout View-Model Object](#view-model-bound) for detailed information.



## <a id="configuring"></a> Configuring igGrid with Knockout Support

The following table maps the configuration tasks of the `igGrid` control related to Knockout usage scenarios to the respective properties that manage those tasks. A code example of a practical implementation follows the table.

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Configuration task
			</th>
            <th>
Required?
			</th>
            <th>
Details
			</th>
            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
Binding the View-Model object’s field to the column keys of the grid
			</td>
            <td>
Required
			</td>
            <td>
When binding to data using Knockout, the minimum requirement is to configure the `key` property of the grid’s columns. This enables the data exchange between the grid and the View-Model.
			</td>
            <td>
                <ul>
                    <li>
[columns[i].key](%%jQueryApiUrl%%/ui.iggrid#options:columns.key)
					</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
Specifying data source for the grid
			</td>
            <td>
Required
			</td>
            <td>
The property for configuring the data source for the grid is `dataSource`
			</td>
            <td>
                <ul>
                    <li>
[dataSource](%%jQueryApiUrl%%/ui.iggrid#options:dataSource)
					</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
Updating of the View-Model object
			</td>
            <td>
Optional
			</td>
            <td>
By default, the grid updates the View-Model through its KnockoutDataSource. For this to occur:
                <ul>
                    <li>
The updating feature must be enabled
					</li>
                    <li>
Changes are made
					</li>
                </ul>
You have the choice of configuring the updates to occur with each addition, deletion or update completion of a row in the grid (if `autoCommit` is enabled) or when `dataDirty` event is executed (in case that `autoCommit` is not enabled).
            </td>
            <td>
                <ul>
                    <li>
[features[{name:”Updating”}]](%%jQueryApiUrl%%/ui.iggrid#options:features)
					</li>
                    <li>
[autoCommit](%%jQueryApiUrl%%/ui.iggrid#options:autoCommit)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>




## <a id="examples"></a> Code Examples

The following lists the code example included in this topic.

- [Grid Bound to a Knockout View-Model Object](#view-model-bound): This example demonstrates the basic configuration of an `igGrid` control bound to a Knockout observable View-Model object.


## <a id="view-model-bound"></a> Code Example: Grid Bound to a Knockout View-Model Object

This procedure demonstrates the basic configuration of an `igGrid` control bound to a Knockout observable View-Model object. Using the declarative syntax of Knockout, the grid is instantiated from the `data-bind` attribute of a `table` element and bound to the View-Model observable properties.

### Prerequisites

To complete the procedure, you need the following:

1.  The required Ignite UI JavaScript and CSS files for version 13.1 and later
2.  The knockout library referenced on the page

**In JavaScript:**

```js
<script src="{IG Resources root}/js/extensions/infragistics.datasource.knockoutjs.js"></script>
    
<script src="{IG Resources root}/js/extensions/infragistics.ui.grid.knockout-extensions.js"></script>
```

### Overview

1.  Create the View-Model object
2.  Apply the declared Knockout bindings to the page
3.  Declare the binding properties for `igGrid` in the View

### Steps

Following are the general conceptual steps for binding `igGrid` to a Knockout observable View-Model object

1. **Create the View-Model object**

	The following code demonstrates a View-Model object that declares observable properties managed by Knockout.
	
	Observe that both the array structures and individual object fields are declared as observable. Hence it will be able to update the view when a data item is added, removed or changed, or it can change the View-Model when the user makes edits.
	
	**In JavaScript:**
	
	```js
	var itemsModel, db = nwCustomersWithOrders;
    var Item = function (ID, ContactName, City, Country) {
        var self = this;
        this.ID = ko.observable(ID);
        this.ContactName = ko.observable(ContactName);
        this.City = ko.observable(City);
        this.Country = ko.observable(Country);
    }
    function ItemsViewModel() {
        var self = this;
        self.data = ko.observableArray([]);
        self.selectedItemID = ko.observable(0);
        for (var i = 0; i < db.length; i++) {
            self.data.push(new Item(db[i].ID, db[i].ContactName, db[i].City, db[i].Country));
        }
        self.selectionChanged = function (evt, ui) {
            var rowdata = ui.row;             
            var selectedItemInArray = 
                ko.utils.arrayFirst(self.data(), function (item) {
                return item.ID() === rowdata.id;
            });                      
            self.selectedItemID(parseInt(rowdata.index));
        };           
    }
    itemsModel = new ItemsViewModel();
	```

2. **Apply the declared Knockout bindings to the page**

	The following code snippet demonstrates how to apply the declared Knockout bindings to the page.
	
	Observe that the `ko.applyBindings()` call is made within the ready callback of the [Infragistics Loader](Using-Infragistics-Loader.html). This is necessary because the grid extension for Knockout needs to be loaded into the page before the bindings are applied.
	
	**In JavaScript:**
	
	```js
	$.ig.loader({
	    scriptPath: "http://{IG Resources root}/ig_ui/js/",
	    cssPath: "http://{IG Resources root}/ig_ui/css/",
	    resources:  "igGrid.*,extensions/infragistics.datasource.knockoutjs.js,extensions/infragistics.ui.grid.knockout-extensions.js",
	    ready: function () {
	        ko.applyBindings(itemsModel);
	    }
	});
	```

3. **Declare the binding properties for igGrid in the View**

	The following code demonstrates how to declare the binding properties for `igGrid` in your View. The most important part is the declaration of the instantiation properties in the `data-bind` attribute of the corresponding `table` element.
	
	Observe that all the columns’ `key` and `datasource` properties of the View-Model object are observable. For the `key` property, this means that the View-Model object will be able to update the `igGrid` data dynamically and vice-versa: `igGrid` will be able to update the View-Model object. If you configure the `dataSource` to be an observable array, `igGrid` will be able to track additions and removals of elements and update the rows’ list accordingly. It is possible to declare any of these properties as non-observable, which means that you will lose the corresponding functionalities. If no View-Model object properties are defined as observables, you will not have Knockout support for the `igGrid` and it does not make sense to use the declarative syntax and the Knockout binding extension.
	
	**In HTML:**
	
	```html
	<table id="grid" data-bind="igGrid: {
	            dataSource: data, 
	            width: 700, 
	            primaryKey: 'ID', 
	            autoCommit: true, 
	              features: [ 
	                {
	                 name: 'Updating', 
	                    editMode: 'row',
	                    columnSettings: [
	                        {
	                            columnKey : 'ID',
	                            readOnly : true
	                        }
	                    ]
	                    },
	                {
	                    name: 'Selection', 
	                    mode: 'row', 
	                    multipleSelection: true,
	                    activation: true,
	                    rowSelectionChanged:itemsModel.selectionChanged
	                },
	                {
	                    name: 'Paging', 
	                    type: 'local', 
	                    pageSize: 5
	                }
	              ],
	            autoGenerateColumns: false, 
	            columns: [
	                { headerText: 'Customer ID ', key: 'ID', dataType: 'string'},                  
	                { headerText: 'Contact Name', key: 'ContactName', dataType: 'string' },  
	                { headerText: 'City', key: 'City', dataType: 'string' },
	                { headerText: 'Country', key: 'Country', dataType: 'string' }
	            ]
	    }">
	</table>
	```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring Knockout Support (igCombo)](igCombo-KnockoutJS-Support.html): This topic explains how to configure the `igCombo` control to bind to View-Model objects managed by the Knockout library

- [Knockout Support (Editors)](Configuring-Knockout-Support-%28Editors%29.html): This topic explains how to configure Ignite UI editor controls to bind to View-Model objects managed by the Knockout library.

- [Configuring Knockout Support (igTree)](igTree-KnockoutJS-Support.html): This topic explains how to configure the `igTree` control to bind to View-Model objects managed by the Knockout library.


### <a id="samples"></a> Samples

This sample demonstrates support of knockout.js bindings with the `igGrid` widget. In this implementation, the selected row of the grid is bound using a standard two-way binding:
<div class="embed-sample">
   [%%SamplesEmbedUrl%%/grid/bind-grid-with-ko](%%SamplesEmbedUrl%%/grid/bind-grid-with-ko)
</div>


### <a id="resources"></a> Resources

The following information is available outside the Infragistics family of content and provides additional information related to this topic.

- [Knockout Home](http://knockoutjs.com/): This is the home page of the Knockout library containing complete documentation, live examples and developer forum.





 

 


