<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-rowselectors-events",
    "controlName": "igHierarchicalGrid",
    "tags": []
}
|metadata|
-->

# Event Reference (Row Selectors, igHierarchicalGrid)

## Topic Overview
### Purpose

This topic provides a reference for events the Row Selectors feature of the igHierarchicalGrid™ control and code examples about handling these events.

#### Required background

Prerequisite topics required to understand this material.

- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html): Provides conceptual information about the igHierarchicalGrid control, including: features, data binding, requirements, templates, and interaction.
- [Initializing the igHierarchicalGrid](igHierarchicalGrid-Initializing.html): Demonstrates how to initialize the igHierarchicalGrid using both jQuery and MVC.

### In this topic

This topic contains the following sections:

-   [Row Selector Events Reference](#events_reference)
-   [Code Example: Attaching an Event Handler at Initialization in jQuery](#example_attaching_event_handler_jquery)
-   [Code Example: Attaching an Event Handler in jQuery and MVC at Run-Time](#example_attaching_event_handler_mvc)
-   [Code Example: Cancelling the Check-Box State Changing Event](#example_cancelling_checkbox_state)
-   [Related Content](#related_content)


## <a id="events_reference"></a> Row Selector Events Reference
### Introduction

There are three events specific to the igGridRowSelectors widget:

-   `checkBoxStateChanging`
-   `checkBoxStateChanged`
-   `rowSelectorClicked`

The `checkBoxStateChanging` event may be canceled, and propagation can be terminated when the event handler returns `false`.

### Row Selector events reference summary
The purpose and function of the igGridRowSelectors control’s events.

<table class="table">
	<thead>
		<tr>
            <th>
Property
			</th>

            <th>
Description
			</th>

            <th>
Can be Stopped
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
[rowSelectorClicked](%%jQueryApiUrl%%/ui.iggridrowselectors_hg#events)
			</td>

            <td>
                Raised after clicking on a row selector. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage
                    follow.

                <table class="table table-striped">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.row](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowIndex](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the index of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowKey](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the key of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowSelector](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row selector cell.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.owner](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to igRowSelectors.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.grid](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the igGrid where the igRowSelectors control is initialized.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
![](../../../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[checkBoxStateChanging](%%jQueryApiUrl%%/ui.iggridrowselectors_hg#events)
			</td>

            <td>
                Raised when a row selector checkbox is changing. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their
                    usage follow.

                <table class="table table-striped">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.row](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowIndex](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the index of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowKey](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the key of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowSelector](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row selector cell.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.owner](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to igRowSelectors.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.grid](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the igGrid where the igRowSelectors control is initialized.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.currentState](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the current state of the checkbox (**on** or **off**).
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.newState](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the new state of the checkbox (**on** or **off**).
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.isHeader](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Checks to see if the header check box is the one being clicked. In this case no row related arguments are passed.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
![](../../../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[checkBoxStateChanged](%%jQueryApiUrl%%/ui.iggridrowselectors_hg#events)
			</td>

            <td>
                Raised after a row selector checkbox changes state. The handler function takes arguments `evt` and `ui`. The `ui` argument options and
                    their usage follow.

                <table class="table table-striped">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.row](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowIndex](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the index of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowKey](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the key of the row where the clicked row selector resides.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowSelector](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the row selector cell.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.owner](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to igRowSelectors.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.grid](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets a reference to the igGrid for which the igRowSelectors are initialized.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.state](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Gets the current state of the checkbox (**on** or **off**).
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.isHeader](%%jQueryApiUrl%%/ui.iggridrowselectors_hg)
			</td>

                            <td>
Checks if the header check box is the one being clicked. In this case no row related arguments are passed.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
![](../../../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>

## Code Examples

### <a id="example_attaching_event_handler_jquery"></a> Code Example: Attaching an Event Handler at Initialization in jQuery
Assigning an event handler functions as a common option to the igGridRowSelectors control’s `rowSelectorClicked` event at initialization. When the event occurs the handling function is called. However, the event handler is no longer called if the control is destroyed and recreated without the handler being reassigned.

#### Code

An example of assigning event handling function to the `rowSelectorClicked` event at initialization.

**In JavaScript:**

```js
$("#grid").igHierarchicalGrid({
    initialDataBindDepth: -1,
    dataSource: data,
    dataSourceType: "json",
    responseDataKey: "Records",
    autoGenerateColumns: true,
    autoGenerateLayouts: true,
    primaryKey: "ID",
    features: [
        {
            name: 'RowSelectors',
            enableCheckBoxes: true,
            rowSelectorClicked: function(evt, ui) {
                // Handle event  
            }
        },
        {
            name: 'Selection'
        }
    ]
});
```



## <a id="example_attaching_event_handler_mvc"></a> Code Example: Attaching an Event Handler in jQuery and MVC at Run-Time
### Description

Attaching an event handler at runtime using the jQuery `delegate()` method.

When using the MVC helper, it is necessary to assign event handlers at runtime, since you cannot define event handlers within the MVC helper. Depending on the method used there are three ways to assign an event:

1.  `bind()`
2.  `live()`
3.  `delegate()`

The recommended method, `delegate()`, offers the best performance and allows the event handler to be automatically attached should the control be destroyed and recreated.

### Code
The code in this example assigns an event handler at runtime. See [Enabling Row Selectors(igHierarchicalGrid)](igHierarchicalGrid-Enabling-RowSelectors.html) for additional information on using the MVC helper.

**In JavaScript:**

```js
$("#grid").delegate("#iggridrowselectorsrowselectorclicked":
    function (e, args) {
        // Handle event  
    }
);
```



## <a id="example_cancelling_checkbox_state"></a> Code Example: Canceling the Check-Box State Changing Event
### Description
This example demonstrates canceling the `checkBoxStateChanging` event. This resulted in a particular row, meeting the specific criteria, not being able to be selected or unselected.

### Code

In this example, code detects if the checkbox on the header row is checked. Handling the `checkBoxStateChanging` event, allows a checkbox selection to be canceled. In this way, you can prevent all of the rows being selected at once and force the user to select rows individually. Thus, preventing the user from selecting all the desired rows at once and force the user to select only specific rows one at a time.

**In JavaScript:**

```js
$("#grid").igHierarchicalGrid({
    initialDataBindDepth: -1,
    dataSource: data,
    dataSourceType: "json",
    responseDataKey: "Records",
    autoGenerateColumns: true,
    autoGenerateLayouts: true,
    primaryKey: "ID",
    features: [
        {
            name: 'RowSelectors',
            enableCheckBoxes: true,
            checkBoxStateChanging: function (evt, ui) {
                       if (ui.isHeader && ui.newState === "on")
                           return false;
                   }
        },
        {
            name: 'Selection'
        }
    ]
});
```



## <a id="related_content"></a> Related Content
### Topics

Refer to the following topics for additional information.

- [Enabling Row Selectors](igHierarchicalGrid-Enabling-RowSelectors.html): Demonstrates, with code examples, how to enable the Row Selectors feature in jQuery and in ASP.NET MVC.
- [Configuring Row Selectors](igHierarchicalGrid-Configuring-RowSelectors.html): Demonstrates, with code examples, how to configure the igHierarchicalGrid’s Row Selectors feature.

### Samples

The following samples provide additional information related to this topic.

- [**Row Selectors**](%%SamplesUrl%%/hierarchical-grid/selection-rowselectors): Demonstrates the usage of RowSelectors in igHierarchicalGrid.





 

 


