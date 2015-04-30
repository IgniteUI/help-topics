<!--
|metadata|
{
    "fileName": "igcombo-knockoutjs-support",
    "controlName": "igCombo",
    "tags": ["Data Binding","Data Presentation","Editing"]
}
|metadata|
-->

# Configuring Knockout Support (igCombo)



##Topic Overview


### Purpose

This topic explains how to configure the `igCombo`™ control to bind it to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.


**Topics**


-	[igCombo Overview](igCombo-Overview.html) : This topic provides conceptual information for the `igCombo` control including information regarding: features, binding to data sources, requirements, and templates.

-	[Adding igCombo](igCombo-Getting-Started.html): This help topic demonstrates how to set up a basic `igCombo` control in different scenarios including binding to JSON data on the client and to a collection of business object on the server.


**External Resources**

-   [Knockout Interactive Tutorials](http://knockoutjs.com/)



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Configuring igCombo with Knockout Support](#igCombo-knockout-support)
-   [Code Examples](#code-examples)
-   [Code Example: Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound)
-   [Code Example: Cascaded Combo Boxes with a Hierarchical Data Source](#cascaded-combo-boxes)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)
    -   [Resources](#resources)



##<a id="introduction"></a>Introduction


### Knockout support summary

The support for the Knockout library in the `igCombo` control is intended to provide easy means for developers to use the Knockout library and its declarative syntax to instantiate and configure combo controls.

The Knockout support is implemented as a Knockout extension which is invoked initially when Knockout bindings are applied to a page and during the page life (when external updates to the View-Model take place).

To instantiate an `igCombo` bound to Knockout-managed data structure, you need to specify `igCombo` configuration options into the data-bind attribute of a div, input, span or select element. The combo is rendered on the place of the element just like if you create the control using JavaScript. For the most important `igCombo` configuration options in this regard, refer to [Configuring with Knockout](#igCombo-knockout-support) section below. In the data-bind attribute, you can specify also any of the other `igCombo` options that have relevance to your business case.

Using the Knockout extension for the `igCombo` control ensures that anytime the `igCombo` input value is changed, either by selecting a new value from the drop-down, or directly writing this new value in the input field, the extension will notify the observable and it will update all its corresponding views. It also ensures that if some external view is updated, the observable in the extension will update the `igCombo` input value. (This is the expected behavior from any other knockout extension.)

In addition to that, the Knockout extension for `igCombo` can be configured in a way that the `igCombo` drop-down reacts to a change in the data source to it which it is bound. This means that, if an item is added, deleted or edited in the data source and the data source is configured as observable, the extension will be able to track additions and removals of elements and update the drop-down list accordingly. Please refer to [Code Example: Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound) for detailed information.



##<a id="igCombo-knockout-support"></a>Configuring igCombo with Knockout Support


### Configuring igCombo with knockout support summary chart

The following table maps the configuration tasks of the `igCombo` control related to Knockout usage scenarios to the respective properties that manage those tasks. Code examples of some practical implementations are available after the table.


<table class="table">
	<thead>
		<tr>
			<th>Configuration task</th>
			<th>Required?</th>
			<th>Details</th>
			<th>Properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Binding the View-Model object’s field to the text of the igCombo control</td>
			<td>Required</td>
			<td>When binding to data using Knockout, the minimum requirement is to configure the text property. This enables the data exchange between the combo text and the View-Model.</td>
			<td><ul><li> [text](%%jQueryApiUrl%%/ui.igcombo)</li></ul></td>
		</tr>
		<tr>
			<td>Binding the View-Model object’s field to the selectedItems of the igCombo control
</td>
			<td>Optional</td>
			<td>Configuring the selectedItems property as observable, enables the data exchange between the combo selected elements and the View-Model.</td>
			<td><ul><li> [selectedItems](%%jQueryApiUrl%%/ui.igcombo)</li></ul><br></td>
		</tr>
		<tr>
			<td>Specifying data source for the drop-down list of the combo box</td>
			<td>Required</td>
			<td>The property for configuring the data source for the drop-down list is dataSource except for cascading combos in which a child igCombo that has a cascading data source. In the latter case, the cascadingDataSource property is used.<br>**Note:** The dataSource and cascadingDataSource properties are mutually exclusive, i.e. you can set only one of them.</td>
			<td><ul><li> [dataSource](%%jQueryApiUrl%%/ui.igcombo)</li><li>[cascadingDataSource](%%jQueryApiUrl%%/ui.igcombo)</li></ul><br>**Note:** The [cascadingDataSource](%%jQueryApiUrl%%/ui.igcombo) property can be configured only on initialization.</td>
		</tr>
		<tr>
			<td>Configuring the name of the display text field in the drop-down data source</td>
			<td>Required</td>
			<td>The name of the display field from the drop-down list data source is required. This makes it possible for the combo to display the correct text when an item is selected. The same text is stored in the text option, too.</td>
			<td><ul><li>[textKey](%%jQueryApiUrl%%/ui.igcombo)</li></ul></td>
		</tr>
		<tr>
			<td>Setting the name of the value field in the drop-down data source</td>
			<td>Required</td>
			<td>The name of the value (or ID) field from the drop-down list data source is required. It enables the combo to provide the value of the selected item.</td>
			<td><ul><li>[valueKey](%%jQueryApiUrl%%/ui.igcombo)</li></ul></td>
		</tr>
		<tr>
			<td>Allowing the text field of the combo to accept values not present in the drop down list</td>
			<td>Optional</td>
			<td>In some application scenarios, the drop-down list of a combo contains suggested values and any other manual input in the text field can be accepted.</td>
			<td><ul><li>[allowCustomValue](%%jQueryApiUrl%%/ui.igcombo)</li></ul></td>
		</tr>
		<tr>
			<td>Custom updating of the View-Model object</td>
			<td>Optional</td>
			<td>By default, the combo box updates the View-Model when it loses focus, that is, when the onBlur event occurs. In addition to this default setting, you can choose to configure updates to occur on every selection from the drop-down list and/or on every keystroke. (Even if these custom update triggers are configured, the update will still be triggered again on onBlur.)</td>
			<td><ul><li>enableSelectionChangedUpdate</li><li>enableTextChangedUpdate</li></ul><br>**Note:** Both properties can be configured only on initialization.Both properties are not available for the igCombo, but only for its Knockout extension.</td>
		</tr>
	</tbody>
</table>


##<a id="code-examples"></a>Code Examples


#### Code examples summary

The following table lists the code examples included in this topic.


-	[Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound) :This example demonstrates the basic configuration of an `igCombo` control bound to a Knockout observable View-Model object.

-	[Cascaded Combo Boxes with a Hierarchical Data Source](#cascaded-combo-boxes):This example demonstrates how to configure two cascaded `igCombo` controls bound to a Knockout observable View-Model object.


##<a id="basic-combo-box-bound"></a>Code Example: Basic Combo Box Bound to a Knockout View-Model Object


###### Description

This example demonstrates the basic configuration of an `igCombo` control bound to a Knockout observable View-Model object. Using the declarative syntax of Knockout, the combo is instantiated from the data-bind attribute of a span element and bound to the View-Model observable properties.

###### Code

### Creating the View-Model object

The following code demonstrates a View-Model object that declares observable properties managed by Knockout.

**In JavaScript:**

```js
var model = [
    { name: "Adam Sandler", id: "1" },
    { name: "Brooke Shields", id: "2" },
    { name: "Charles Chaplin", id: "3" },
    . . .
];
var viewModel = new ViewModel(model);
function ViewModel(actorsList) {
    var self = this;
    this.actorsList = actorsList;
    //  The array of actor objects to be bound to the drop down list
    this.actors = ko.observableArray(self.actorsList);
    //  The array of selected actors
    this.selectedItems = ko.observableArray([{ index: 1 }]);
    //  The name of the currently selected actor.
    this.actorName = ko.observable(self.actors()[0].name);    
    this.isVisible = true;
}
```

#### Apply the declared Knockout bindings to the page

The following code snippet demonstrates how to apply the declared Knockout bindings to the page. Note that the `ko.applyBindings()` call is made within the ready callback of the [Using Infragistics Loader](Using-Infragistics-Loader.html). This is necessary because the combo extension for Knockout needs to be loaded into the page before the bindings are applied.

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: "http://localhost/ig_ui/js/",
    cssPath: "http://localhost/ig_ui/css/",
    resources: "igCombo,extensions/infragistics.ui.combo.knockout-extensions.js",
    ready: function () {
        ko.applyBindings(viewModel);
    }
});
```

#### Declare the binding properties for igCombo in the View

The following code demonstrates how to declare the binding properties for `igCombo` in your View. The most important part is the declaration of the instantiation properties in the data-bind attribute of the corresponding span element.

**In HTML:**

```html
<span id="comboActors" data-bind="igCombo: { 
        text: actorName,
        dataSource: actors,
        selectedItems: selectedItems,
        textKey: 'name',
        valueKey: 'id',
        allowCustomValue: true,
        enableSelectionChangedUpdate: true
    }"></span>
```

Notice that both the `text` and `dataSource` properties of the View-Model object are observable. For the text property, this means that the View-Model object will be able to update the `igCombo` text dynamically and vice-versa: `igCombo` will be able to update the View-Model object. If you configure the dataSource to be an observable array, `igCombo` will be able to track additions and removals of elements and update the drop-down list accordingly. It is possible to declare any of these properties as non-observable, which means that you will lose the corresponding functionalities. If no View-Model object properties are defined as observables, you will not have Knockout support for the `igCombo` and it does not make sense to use the declarative syntax and the Knockout binding extension.

The following code demonstrates how to declare the `igComboVisible` binding, which has the same functionality as the Knockout visible binding.

**In HTML:**

```html
<span id="comboActors" data-bind="igCombo: { ... }, igComboVisible: isVisible"></span>
```

The `igCombo` control is displayed in a HTML element with inline-block property, and because Knockout visible binding sets the display of the element to block, this breaks the `igCombo` appearance. Use the custom `igComboVisible` binding to display `igCombo` properly and in the same time to use the Knockout visible binding functionality.



###<a id="cascaded-combo-boxes"></a>Code Example: Cascaded Combo Boxes with a Hierarchical Data Source


###### Description

This example demonstrates how to configure two cascaded `igCombo` controls bound to a Knockout observable View-Model object. The example uses the context of countries and districts of the countries to represent the cascading scenario. The scenario defines hierarchical data source and binds the first and the second levels to the corresponding `igCombo` controls. The second-level combo filters its drop down list depending on the item selected in the first combo box.

###### Code

**Defining the hierarchical data source**

The following code defines two JavaScript arrays and maps them to two Knockout-managed observable arrays. The first-level array contains the items for the countries with their IDs and names. The second-level array contains the items for the districts for the countries with the `countryID` property pointing to the parent country, district name, and ID.

**In JavaScript:**

```js
var countries = [
    { countryName: "United States", countryID: "US" },
    { countryName: "Bulgaria", countryID: "BG" }
];
var districts = [
    { countryID: "US", districtName: "New Jersey", districtID: "NJ" },
    { countryID: "US", districtName: "California", districtID: "CA" },
    { countryID: "US", districtName: "Illinois", districtID: "IL" },
    { countryID: "US", districtName: "New York", districtID: "NY" },
    { countryID: "US", districtName: "Florida", districtID: "FL" },
    { countryID: "BG", districtName: "Sofia", districtID: "SA" },
    { countryID: "BG", districtName: "Plovdiv", districtID: "PV" },
    { countryID: "BG", districtName: "Varna", districtID: "V" },
    { countryID: "BG", districtName: "Yambol", districtID: "Y" }
];
var countriesKO = ko.mapping.fromJS(countries);
var districtsKO = ko.mapping.fromJS(districts);
```

#### Instantiating the cascading igCombo controls and binding them to data.

The following code instantiates two `igCombo` controls and binds them to the first- and second-level observable arrays (countriesKO and districtsKO). Note how the `parentCombo` and `parentComboKey` options in the child combo (`comboDistrict`) point to the parent combo and specify the parent ID field. This parctically works as a filter in the child combo: whenever an item is selected in the parent combo, the child combo uses the parent ID field to filter its own drop-down list.

**In HTML:**

```html
<span id="comboCountry" data-bind="igCombo: 
    {
        text: cascadingValue,
        textKey: 'countryName',
        valueKey: 'countryID',
        dataSource: countriesKO,   
    }
"></span>
<span id="comboDistrict" data-bind="igCombo: 
    {
        text: cascadingChildValue,
        valueKey: 'districtID',
        textKey: 'districtName',
        dataSource: districtsKO,
        parentComboKey: 'countryID',
        parentCombo: '#comboCountry' 
    }
"></span>
```



##<a id="related-content"></a>Related Content


###<a id="topics"></a> Topics

The following topics provide additional information related to this topic.

-	[Knockout Support (Editors)](Configuring-Knockout-Support-%28Editors%29.html): This topic explains how to configure Ignite UI editor controls to bind to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

###<a id="samples"></a> Samples

The following samples provide additional information related to this topic.

-	[KnockoutJS Binding](%%SamplesUrl%%/combo/bind-combo-with-ko): This sample demonstrates how to bind `igCombo` to data managed by KO data bindings.

###<a id="resources"></a> Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

-	[Knockout](http://knockoutjs.com/): This is the home page of the Knockout library. The library contains complete documentation and samples.

 

 


