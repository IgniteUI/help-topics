<!--
|metadata|
{
    "fileName": "igtree-knockoutjs-support",
    "controlName": "igTree",
    "tags": ["Data Binding","Data Presentation","Editing"]
}
|metadata|
-->

# Configuring Knockout Support

## Topic Overview
### Purpose

This topic explains how to configure the `igTree`™ control to bind to View-Model objects managed by the Knockout library.

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.

**Topics**

- [igTree Overview](igTree-Overview.html): This topic provides conceptual information for the `igTree` control including information regarding: features, binding to data sources, requirements, and templates.

- [Getting Started with igTree](igTree-Getting-Started.html): This topic demonstrates how to setup an `igTree` control in different application scenarios binding to JSON data on the client and a collection of business object on the server.


**External Resources**

-   [Knockout Interactive Tutorials](http://learn.knockoutjs.com/)


## Introduction
### <a id="summary"></a>Knockout support summary

The support for the Knockout library in the `igTree` control is intended to provide easy means for developers to use the Knockout library and its declarative syntax to instantiate and configure tree controls.

The Knockout support is implemented as a Knockout extension which is invoked initially when Knockout bindings are applied to a page and during the page life when external updates to the View-Model happen.

To instantiate a tree control bound to Knockout managed data structure you need to specify `igTree` configuration options into data-bind attribute of a div element. The tree is rendered on the place of the div just like if you create the control using JavaScript. You can refer to the most important options in the [Tree with Knockout Configuration Summary](#summary) section below. You can also specify all of the other `igTree` options that have relevance for your business case in the data-bind attribute.



## Code Example: Configuring a Simple Two-Level Hierarchy Tree
### Description

This example shows how to instantiate an `igTree` control and bind it to a two-level hierarchical data structure managed by Knockout. Using the declarative syntax of Knockout, the tree is instantiated from the data-bind attribute of a div element and bound to View-Model observable properties.

### Code

The code snippet below shows a View-Model object that declares a hierarchical structure with observable properties managed by Knockout. The data structure is declared explicitly here for clarity of the example. In a real-world case when the data comes from a remote data source (i.e. database) the data will be in the form of a JSON. The data then can be made observable by using the Knockout Mapping library.

**In JavaScript:**

```js
var viewModel = {
    data: ko.observableArray(
        [{
            ID: ko.observable("1"),
            CategoryName: ko.observable("Stationery"),
            Products: ko.observableArray(
                [{
                    ProductID: ko.observable("1"),
                    ProductName: ko.observable("Pencil")
                }, {
                . . .
                }]
            )
        }, {
        . . .
        }];
    );
}
```

The following code snippet shows how to apply the declared Knockout bindings to the page. Note that the `ko.applyBindings()` call is made within the ready callback of the Loader. This is necessary because the tree extension for Knockout needs to be loaded into the page before the bindings are applied.

**In JavaScript:**

```js
$.ig.loader({
    scriptPath: "http://localhost/ig_ui/js/",
    cssPath: "http://localhost/ig_ui/css/",
    resources: "igTree,extensions/infragistics.ui.tree.knockout-extensions.js",
    ready: function () {
        ko.applyBindings(viewModel);
    }
});
```

The following code snippet shows how to declare binding options for the tree control in your view. The most important part is the declaration of the instantiation options in the data-bind attribute of the div element.

**In HTML:**

```html
<div data-bind="igTree: {
    dataSource: data,
    bindings: {
        textKey: 'CategoryName',
        valueKey: 'ID',
        childDataProperty: 'Products',
        bindings: {
            textKey: 'ProductName',
            valueKey: 'ProductID'
        }
    }
}"></div>
```

When the control is bound to the View-Model through Knockout it will receive notifications for any changes. Note that both the array structures and individual object fields are declared as observable. Hence it will be able to update the view when a data item is added, removed or changed, or it can change the View-Model when the user makes edits.

The control can be bound be bound to non-observable object also but the application will lose the updating functionality and such a scenario makes a little sense.


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Bind Editors with Knockout](Configuring-Knockout-Support-%28Editors%29.html): This topic explains how to configure %%ProductName%% editor controls to bind to View-Model objects using the Knockout library.

- [Configuring Knockout Support (igCombo)](igCombo-KnockoutJS-Support.html): This topic explains how to configure the `igCombo` control to bind to View-Model objects managed by the Knockout library.

### Samples

The following samples provide additional information related to this topic.

- [KnockoutJS Binding](%%SamplesUrl%%/tree/bind-tree-with-ko): This sample demonstrates binding `igTree` to hierarchical data managed by Knockout data bindings.


### Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

- [Knockout](http://knockoutjs.com/): This is the home page of the Knockout library where all the needed documentation and samples can be found.





 

 


