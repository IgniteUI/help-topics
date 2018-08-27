<!--
|metadata|
{
    "fileName": "iggrid-rowselectors-events",
    "controlName": "igGrid",
    "tags": ["API","Grids","Selection"]
}
|metadata|
-->

# Row Selectors Events (igGrid)


### Purpose
This topic explains the events that are specific to the RowSelectors widget of the `igGrid`™.

### In this topic
This topic contains the following sections:

-   [Events Overview](#overview)
-   [Attaching Handlers to Events in jQuery and MVC](#attach)
-   [Events Reference Chart](#reference-chart)
-   [Related Topics](#topics)

## <a id="overview"></a> Events Overview 

There are three events that are specific the RowSelectors widget. (See the Events Reference Chart block below). The `checkBoxStateChanging` event is cancelable and the propagation can be terminated when in such handler we return false.

**In Javascript:**

```js
$("#grid1").igGrid({
features: [
     {
          name: 'RowSelectors',
          enableCheckBoxes: true,
          checkBoxStateChanging: function (ui, args) {
               return  false;
          }                
     },
     {
         name: 'Selection'
     }
  ]
});
```

Most of the argument methods and properties contain row-specific data, as well as the grid they belong to.

## <a id="attach"></a> Attaching Handlers to Events in jQuery and MVC
 
To attach to an event, you just need to define a handler for it, in the same way you define a property. Now, if the event is triggered, the handler will be called.

**In Javascript:**

```js
$("#grid1").igGrid({
     responseDataKey: 'Records',
     features: [
          {
               name: 'RowSelectors',
                       enableCheckBoxes: true,
               rowSelectorClicked: function(evt, ui) {
                     // Handle event  
               }              },
          {
            name: 'Selection'
          }
     ]
});
```

When attaching a handler in MVC, you need to use the jQuery UI pattern which is a concatenation of the names of the control and the event in lowercase letter format.

**In Javascript:**

```js
$("#grid1").on("iggridrowselectorsrowselectorclicked", function (evt, ui) {
      // Handle event  
   }
);
```

> **Note:** For more information please read the topic [Using Events in %%ProductName%%](Using-Events-in-NetAdvantage-for-jQuery.html).

## <a id="reference-chart"></a> Events Reference Chart 

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
Event
			</th>

            <th>
Description
			</th>

            <th>
Cancelable
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
[rowSelectorClicked](%%jQueryApiUrl%%/ui.iggridrowselectors#events:rowSelectorClicked)
			</td>
            <td>
Fired after a row selector is clicked. <br />
            
Function takes arguments evt and ui. <br />
            
Use ui.row to get reference to the row the clicked row selector resides in. <br />
            
Use ui.rowIndex to get the index of the row the clicked row selector resides in. <br />
            
Use ui.rowKey to get the key of the row the clicked row selector resides in. <br />
            
Use ui.rowSelector to get reference to the row selector cell. <br />
            
Use ui.owner to get reference to igRowSelectors. <br />
            
Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for.
            </td>
            <td>
![](../../../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td>
[checkBoxStateChanging](%%jQueryApiUrl%%/ui.iggridrowselectors#events:checkBoxStateChanging)
			</td>
            <td>
Fired when a row selector checkbox is changing. <br />

Function takes arguments evt and ui. <br />

Use ui.row to get reference to the row the clicked row selector resides in. <br />

Use ui.rowIndex to get the index of the row the clicked row selector resides in. <br />

Use ui.rowKey to get the key of the row the clicked row selector resides in. <br />

Use ui.rowSelector to get reference to the row selector cell. <br />

Use ui.owner to get reference to igRowSelectors. <br />

Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for. <br />

Use ui.currentState to get the current state of the checkbox ("on","off"). <br />

Use ui.newState to get the new state of the checkbox ("on","off"). <br />

Use ui.isHeader to check if the header check box is the one being clicked. In this case no row related args are passed.
			</td>
            <td>
![](../../../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[checkBoxStateChanged](%%jQueryApiUrl%%/ui.iggridrowselectors#events:checkBoxStateChanged)
			</td>

            <td>
Fired after a row selector checkbox had changed state. <br />

Function takes arguments evt and ui. <br />

Use ui.row to get reference to the row the clicked row selector resides in. <br />

Use ui.rowIndex to get the index of the row the clicked row selector resides in. <br />

Use ui.rowKey to get the key of the row the clicked row selector resides in. <br />

Use ui.rowSelector to get reference to the row selector cell. <br />

Use ui.owner to get reference to igRowSelectors. <br />

Use ui.grid to get reference to the igGrid the igRowSelectors are initialized for. <br />

Use ui.state to get the state of the checkbox ("on","off"). <br />

Use ui.isHeader to check if the header check box is the one being clicked. In this case no row related args are passed.
			</td>
            <td>
![](../../../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>


##  <a id="topics"></a> Related Topics 

- [Enabling Row Selectors](igGrid-Enabling-Row-Selectors.html)

- [igGrid Configuration: Row Selectors](igGrid-Configuring-Row-Selectors.html)

 

 


