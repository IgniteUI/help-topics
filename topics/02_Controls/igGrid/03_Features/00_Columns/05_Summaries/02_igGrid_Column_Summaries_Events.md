<!--
|metadata|
{
    "fileName": "iggrid-column-summaries-events",
    "controlName": "igGrid",
    "tags": ["API","Grids","Summaries"]
}
|metadata|
-->

# Column Summaries Events (igGrid)

## Topic Overview

### Purpose

This topic explains the events that are specific to the Column Summaries widget of the `igGrid`™.

### In this topic

This topic contains the following sections:

-   [Events Overview](#overview)
-   [Attaching Handlers to Events in jQuery and MVC](#attach-handlers)
-   [Events Reference Chart](#reference-chart)
-   [Related Topics](#topics)

## <a id="overview"></a> Events Overview 

There are three events that are specific the Column Summaries widget. (See the Events Reference Chart block below). All the events that suffix is ‘-ing’ are cancelable and the propagation can be terminated when in such handler we return false.

**In Javascript:**

```js
$("#grid1").igGrid({
   features: [
    {
        name: 'Summaries',
        showDropDownButton: true,
        summariesCalculating: function (e, args) {
              return  false;
        }
     }
   ]
});
```

Most of the argument methods and properties contain a row specific data, as well as the grid they belong to.

## <a id="attach-handlers"></a> Attaching Handlers to Events in jQuery and MVC 

To attach to an event, you just need to define a handler for it, in the same way you define a property. Now, if the event is triggered, the handler will be called.

**In Javascript:**

```js
$("#grid1").igGrid({
    features: [
        {
            name: 'Summaries',
            showDropDownButton: true,
            summariesCalculating: function (e, args) {
            // Handle event  
            }
        }
    ]
});
```

When attaching a handler in MVC, you need to use the jQuery UI pattern which is a concatenation of the names of the control and the event in lowercase letter format.

**In Javascript:**

```js
$("#grid1").live("iggridsummariessummariescalculating", function (e, args) {
	// Handle event  
});
```

> **Note:**
> The jQuery live function is used in case some DOM elements are added after attaching to the handler.

## <a id="reference-chart"></a> Events Reference Chart 

Event | Description | Cancelable
---|---|---
[dropDownOpening](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownOpening) | Fired before drop down is opened for a specific column summary | ![](../../../../../images/images/positive.png)
[dropDownOpened](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownOpened) | Fired after the filter dropdown is opened for a specific column | ![](../../../../../images/images/negative.png)
[dropDownClosing](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownClosing) | Fired before the dropdown for a summary column starts closing | ![](../../../../../images/images/positive.png)
[dropDownClosed](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownClosed) | Fired after a summary column dropdown is completely closed | ![](../../../../../images/images/negative.png)
[summariesCalculating](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesCalculating) | Fired before summaries calculations are made | ![](../../../../../images/images/positive.png)
[summariesCalculated](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesCalculated) | Fired after summaries calculation are completely made | ![](../../../../../images/images/negative.png)
[summariesMethodSelectionChanged](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesMethodSelectionChanged) | Fired when user selects summary method from checkbox | ![](../../../../../images/images/negative.png)
[summariesToggling](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesToggling) | Event is fired before summary rows start toggling | ![](../../../../../images/images/positive.png)
[summariesToggled](%%jQueryApiUrl%%/ui.iggridsummaries#events:summariesToggled) | Event is fired after summary rows are toggled | ![](../../../../../images/images/negative.png)
[dropDownOKClicked](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownOKClicked) | Event is fired when OK button is clicked in drop down | ![](../../../../../images/images/negative.png)
[dropDownCancelClicked](%%jQueryApiUrl%%/ui.iggridsummaries#events:dropDownCancelClicked) | Event is fired when Cancel button is clicked in drop down | ![](../../../../../images/images/negative.png)


## <a id="topics"></a> Related Topics 

[Enabling Column Summaries](igGrid-Enabling--Column-Summaries.html)

[igGrid Configuration: Column Summaries](igGrid-Configuring-Column-Summaries.html)

 

 


