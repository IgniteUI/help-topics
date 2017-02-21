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



## Topic Overview


### Purpose

This topic explains how to configure the `igCombo`™ control to bind it to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.


**Topics**


-	[igCombo Overview](igCombo-Overview.html) : This topic provides conceptual information for the `igCombo` control including information regarding: features, binding to data sources, requirements, and templates.

-	[Adding igCombo](igCombo-Getting-Started.html): This help topic demonstrates how to set up a basic `igCombo` control in different scenarios including binding to JSON data on the client and to a collection of business object on the server.


**External Resources**

-   [Knockout Interactive Tutorials](http://learn.knockoutjs.com/)



### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Configuring igCombo with Knockout Support](#igCombo-knockout-support)
-   [Code Examples](#code-examples)
-   [Code Example: Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)
    -   [Resources](#resources)



## <a id="introduction"></a>Introduction


### Knockout support summary

The support for the Knockout library in the `igCombo` control is intended to provide easy means for developers to use the Knockout library and its declarative syntax to instantiate and configure combo controls.

The Knockout support is implemented as a Knockout extension which is invoked initially when Knockout bindings are applied to a page and during the page life (when external updates to the View-Model take place).

To instantiate an `igCombo` bound to Knockout-managed data structure, you need to specify `igCombo` configuration options into the data-bind attribute of a div, input, span or select element. The combo is rendered on the place of the element just like if you create the control using JavaScript. For the most important `igCombo` configuration options in this regard, refer to [Configuring with Knockout](#igCombo-knockout-support) section below. In the data-bind attribute, you can specify also any of the other `igCombo` options that have relevance to your business case.

Using the Knockout extension for the `igCombo` control ensures that anytime the `igCombo` selected items is changed, by selecting a new value from the drop-down, the extension will notify the observable and it will update all its corresponding views. It also ensures that if some external view is updated, the observable in the extension will update the `igCombo` selected items. (This is the expected behavior from any other knockout extension.)

In addition to that, the Knockout extension for `igCombo` can be configured in a way that the `igCombo` drop-down reacts to a change in the data source to it which it is bound. This means that, if an item is added, deleted or edited in the data source and the data source is configured as observable, the extension will be able to track additions and removals of elements and update the drop-down list accordingly. Please refer to [Code Example: Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound) for detailed information.

>**Note:** In difference with the Knockout support for the `igCombo`, versions 14.2 and earlier, the extension has introduced some differences in the options and the way it is bound to the View-Model. Those changes are introduced, to meet the needs of the new `igCombo` control, released with version 15.1  Please refer to the [Configuring with Knockout](#igCombo-knockout-support) section below, as well as to the [Migrating to the New Combo](igCombo-Migrating-To-The-New-Combo.html) topic.

##<a id="igCombo-knockout-support"></a>Configuring igCombo with Knockout Support


### Configuring igCombo with knockout support summary chart

The following table maps the `igCombo` control configuration tasks related to Knockout usage scenarios to the respective properties that manage those tasks. Code examples of some practical implementations are available after the table.


<table class="table table-bordered">
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
			<td>Binding the View-Model object’s field to the igCombo selected items</td>
			<td>Required</td>
			<td>Array of the selected items in the igCombo. Configuring the selectedItems property enables the data exchange between the combo selected items and the View-Model.</td>
			<td><ul><li> `selectedItems` </li></ul><br>Possible values:<ul><li>array of primitives</li><li>array of objects</li></ul><br>**Note:** The value property is not available for the igCombo, but only for its Knockout extension.</td>
		</tr>
		<tr>
			<td>Configuring data source for the igCombo</td>
			<td>Required</td>
			<td>Sets a valid data source accepted by $.ig.DataSource, or an instance of an $.ig.DataSource itself.</td>
			<td><ul><li> [`dataSource`](%%jQueryApiUrl%%/ui.igcombo#options:dataSource)</li></ul></td>
		</tr>
		<tr>
			<td>Configuring the data source field that holds the items' display text</td>
			<td>Required</td>
			<td>Sets the name of the data source field which contains the items' display text. The text for each item is displayed in the dropdown list and in the combo box when an item is selected. The same text is stored in the text option, too.</td>
			<td><ul><li>[`textKey`](%%jQueryApiUrl%%/ui.igcombo#options:textKey)</li></ul></td>
		</tr>
		<tr>
			<td>Configuring the data source field that holds the items' values</td>
			<td>Required</td>
			<td>Sets the name of data source field (ID field) which contains the items' values. The igCombo items' values are mapped against this field.</td>
			<td><ul><li>[`valueKey`](%%jQueryApiUrl%%/ui.igcombo#options:valueKey)</li></ul></td>
		</tr>
		<tr>
			<td>Defining the type of the selected items</td>
			<td>Optional</td>
			<td>Setting the type of the selected items in the array, either to be "primitive" or "object". The extension itself automatically defines the type of the selected items if there are any and that's why this option is not required. The `selectedItemType` option can be used in scenarios where the extension is not able to define the type automatically because no item is selected.</td>
			<td><ul><li>`selectedItemType`</li></ul><br>Possible values:<ul><li>"primitive"</li><li>"object"</li></ul> <br>**Note:** The value property is not available for the igCombo, but only for its Knockout extension.</td>
		</tr>
	</tbody>
</table>


## <a id="code-examples"></a>Code Examples


### Code examples summary

The following table lists the code examples included in this topic.


-	[Basic Combo Box Bound to a Knockout View-Model Object](#basic-combo-box-bound) :This example demonstrates the basic configuration of an `igCombo` control bound to a Knockout observable View-Model object.

## <a id="basic-combo-box-bound"></a>Code Example: Basic Combo Box Bound to a Knockout View-Model Object


This example demonstrates the basic configuration of an `igCombo` control bound to a Knockout observable View-Model object. Using the declarative syntax of Knockout, the combo is instantiated from the data-bind attribute of a span element and bound to the View-Model observable properties.


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
    //  Select the first actor, using his id.
    this.selectedActor = ko.observableArray([self.actors()[0].id]);
    // Alternative way to select an actor, using the whole object, containing value and text
    // this.selectedActor = ko.observableArray([self.actors()[0]]);
    this.isVisible = true;
}
```
>**Note:** You can select `igCombo` items by passing either an array of primitives, containing the selected values, or an array of objects, containing the value and the text of the items. Using primitive values is recommended, in cases when View-Model is attached in addition to a HTML select element, and in the same time is attached to an `igCombo` control. This is because the KnockoutJS library operates with an array of primitives, when HTML select is attached to the View-Model.

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
        dataSource: actors,
        textKey: 'name',
        valueKey: 'id',
        selectedItems: selectedActor
    }"></span>
```

Notice that both the `selectedItems` and `dataSource` properties of the View-Model object are observable. For the selectedItems property, this means that the View-Model object will be able to update the `igCombo` selected items dynamically and vice-versa: `igCombo` will be able to update the View-Model object. If you configure the `dataSource` to be an observable array, `igCombo` will be able to track additions and removals of elements and update the drop-down list accordingly. It is possible to declare any of these properties as non-observable, which means that you will lose the corresponding functionalities. If no View-Model object properties are defined as observables, you will not have Knockout support for the `igCombo` and it does not make sense to use the declarative syntax and the Knockout binding extension.

The following code demonstrates how to declare the `igComboVisible` binding, which has the same functionality as the Knockout visible binding.

**In HTML:**

```html
<span id="comboActors" data-bind="igCombo: { ... }, igComboVisible: isVisible"></span>
```

The `igCombo` control is displayed in a HTML element with inline-block property, and because Knockout visible binding sets the display of the element to block, this breaks the `igCombo` appearance. Use the custom `igComboVisible` binding to display `igCombo` properly and in the same time to use the Knockout visible binding functionality.

## <a id="related-content"></a>Related Content


### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

-	[Knockout Support (Editors)](Configuring-Knockout-Support-%28Editors%29.html): This topic explains how to configure Ignite UI editor controls to bind to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

-	[Migrating to the New Combo](igCombo-Migrating-To-The-New-Combo.html#ko_changes): This topic aims to help with migration from old combo to the new one. The document includes the changes in the Knockout integration of the igCombo.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

-	The sample below demonstrates how to bind igCombo to data managed by KO data bindings. Binding an array to combo's drop-down and model property to the combo selected items is implemented.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/combo/bind-combo-with-ko](%%SamplesEmbedUrl%%/combo/bind-combo-with-ko)
</div>

>**Note:**  The Knockout extensions do not work with the ASP.NET MVC Helpers.

### <a id="resources"></a> Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

-	[Knockout](http://knockoutjs.com/): This is the home page of the Knockout library. The library contains complete documentation and samples.






