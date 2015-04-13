<!--
|metadata|
{
    "fileName": "igcombo-configure-selection",
    "controlName": "igCombo",
    "tags": ["Selection"]
}
|metadata|
-->

# Configuring Selection (igCombo)



##Topic Overview


###Purpose


The `igCombo`™ control supports single and multiple selection, checkboxes, selection events and an API for changing the selection behavior programmatically. This topic shows how these different aspects of the selection functionality can be configured.

###In this topic


This topic contains the following sections:

-   [igCombo Selection Configuration Overview](#configuration_overview)
-   [Configure Multiple Selection](#configure_multiple_selection)
    -   [Multiple selection details](#multiple_selection_details)
    -   [Multiple selection settings](#multiple_selection_settings)
-   [Code Example: Configure checkboxes](#code_example)
-   [Clear Selection](#clear_selection)
    -   [Clear selection details](#clear_selection_details)
    -   [Clear selection settings](#clear_selection_settings)
-   [Handle selection Events](#handle_selection_events)
    -   [Selection events details](#selection_events_details)
    -   [Selection events settings](#selection_events_settings)
-   [Cancel Selection](#cancel_selection)
    -   [Introduction](#cancel_selection_introduction)
    -   [Overview](#cancel_selection_overview)
    -   [Steps](#cancel_selection_steps)
-   [Related Topics](#related_topics)

###Required background


The table below lists the background you need to fully understand the information in this topic.

**Topics**

You need to first read the [igCombo Overview](igCombo-Overview.html) and [Adding igCombo](igCombo-Getting-Started.html) topic.

**External Resources**

You need to first read the following articles:

-   [jQuery bind() API](http://api.jquery.com/bind/)
-   [jQuery live() API](http://api.jquery.com/live/)

##<a id="configuration_overview"></a>igCombo Selection Configuration Overview 


###Selection configuration 


The table below lists the configurable behaviors of the `igCombo` control.

<table class="table">
	<thead>
		<tr>
			<th>Configurable behavior</th>
			<th>Behavior details</th>
			<th>Configuration properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Multiple selection</td>
			<td>Multiple selection allows users to select more than one item in the combo from the dropdown or by typing multiple values in the text box.</td>
			<td>[multiSelection](%%jQueryApiUrl%%/ui.igCombo#options:multiSelection)</td>
		</tr>
		<tr>
			<td>Clear selection</td>
			<td>Programmatically clears the selection from the igCombo control.</td>
			<td>[deselectAll](%%jQueryApiUrl%%/ui.igCombo#methods:deselectAll)</td>
		</tr>
		<tr>
			<td>Handle selection events</td>
			<td>Capture selection events to perform logic in response to a selection operation occurring.</td>
			<td>[selectionChanging](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanging)</td>
		</tr>
		<tr>
			<td>Handle selection events</td>
			<td>Capture selection events to perform logic in response to a selection operation occurring.</td>
			<td>[selectionChanging](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanging)<br>[selectionChanged](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanged)</td>
		</tr>
		<tr>
			<td>Cancel Selection</td>
			<td>Cancel the selection changing event to cancel a selection operation.</td>
			<td>[selectionChanging](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanging)</td>
		</tr>
	</tbody>
</table>


##<a id="configure_multiple_selection"></a>Configure Multiple Selection 


###<a id="multiple_selection_details"></a>Multiple selection details


Enabling multiple selection allows the user to select multiple items with the mouse or keyboard from the dropdown. In addition, the users also can type multiple values in the text box separating them by ``itemSeparator`` to select corresponding values. Default value for the ``itemSeparator`` is ``', '``.

Finally, you can enable checkboxes to facilitate multiple selection.

![](images/Configure_Selection_in_the_igCombo__01.png)

###<a id="multiple_selection_settings"></a>Multiple selection settings


The table below maps the desired configurations to property settings. The properties are accessed through the `igCombo` control options.

<table class="table">
	<thead>
		<tr>
			<th>In order to configure</th>
			<th>Use this option</th>
			<th>Set it to</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Multiple selection</td>
			<td>[**multiSelection.enabled**](%%jQueryApiUrl%%/ui.igCombo#options:multiSelection.enabled)</td>
			<td>true</td>
		</tr>
		<tr>
			<td>Show checkboxes</td>
			<td>[**multiSelection.showCheckboxes**](%%jQueryApiUrl%%/ui.igCombo#options:multiSelection.showCheckboxes)</td>
			<td>true</td>
		</tr>
	</tbody>
</table>

###<a id="code_example"></a>Code Example: Configure checkboxes 


Following is the full code used in this example to configure multiple selection with checkboxes using the `igCombo` control options with the following parameters:

**Multiple Selection** – Enabled with checkboxes

**In HTML:**

```html
<script type="text/javascript">
    $(function () {
        $("#comboTarget").igCombo({
            dataSource: colors,
            multiSelection: {
				enabled: true,
				showCheckboxes: true
			}
        });
    });
</script>
```



**In ASPX:**

```csharp
<%= Html.
    Infragistics().
    Combo().
    DataSource(this.Model as IQueryable<System.Drawing.Color>).
    MultiSelectionSettings(ms => {
		ms.Enabled(true);
		ms.ShowCheckBoxes(true);
	}).   
    Render()
%>
```

###Multiple selection property reference


For detailed information about these properties, refer to their listing in the property reference section:

**igCombo Options**

####<a id="clear_selection"></a>Clear selection


######<a id="clear_selection_details"></a>Clear selection details 


To clear the selection of the `igCombo` control programmatically, use the method deselectAll.

![](images/Configure_Selection_in_the_igCombo__02.png)

######<a id="clear_selection_settings"></a>Clear selection settings


The table below maps the desired behaviors to property settings. The properties are accessed through the `igCombo` options.

<table class="table">
	<thead>
		<tr>
			<th>In order to</th>
			<th>Use this method and event</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Clear selection</td>
			<td>[**delesectAll**](%%jQueryApiUrl%%/ui.igCombo#methods:delesectAll)</td>
		</tr>
		<tr>
			<td>Handle an event after selection has been changed</td>
			<td>[**selectionChanged**](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanged)</td>
		</tr>
	</tbody>
</table>

###<a id="handle_selection_events"></a>Handle selection events


######<a id="selection_events_details"></a>Selection events details


You can use selection events to perform logic when a selection operation occurs. The `selectionChanging` is raised before the selection is changed within the control and the `selectionChanged` event is raised directly after the igCombo’s selection is changed.

######<a id="selection_events_settings"></a>Selection events settings


The table below maps the desired configurations to property settings. The properties are accessed through the `igCombo` options.

<table class="table">
	<thead>
		<tr>
			<th>In order to</th>
			<th>Use this event</th>
			<th>Set it to</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Handle an event prior to selection being changed</td>
			<td>[**selectionChanging**](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanging)</td>
			<td>`function()`</td>
		</tr>
		<tr>
			<td>Handle an event after selection has been changed</td>
			<td>[**selectionChanged**](%%jQueryApiUrl%%/ui.igCombo#events:selectionChanged)</td>
			<td>`function()`</td>
		</tr>
	</tbody>
</table>

##<a id="cancel_selection"></a>Cancel Selection 


###<a id="cancel_selection_introduction"></a>Introduction 


By handling the `selectionChanging` event, you can cancel a selection operation.

###<a id="cancel_selection_overview"></a>Overview


-	Following is a conceptual overview of the process:

-	Handling the `selectionChanging` event

-	Cancelling the event by returning false

###<a id="cancel_selection_steps"></a>Steps


1.  Handle the `selectionChanging` event.

    1.  Define a handler function.

        Define a function that is called when the `selectionChanging` event is raised.

        **In HTML and JavaScript:**

        ```html
        <script type="text/javascript">        
            function comboSelectionChanging(evt, ui) {

            };   
        </script>
        ```

    2.  Configure the handler for the `selectionChanging` event.

        Once you have a handler defined, you must set it as the handler for the `selectionChanging` event. In jQuery, this can be done when the widget is instantiated. In ASP.NET MVC, the event should be attached using the jQuery live or bind API. Using the live or bind API is an option for attaching the event in a pure jQuery implementation as well. The type for this event is ‘igcomboselectionchanging’.

        **In HTML:**

        ```html
        $("#comboTarget").igCombo({
                    selectionChanging: comboSelectionChanging
        });
        ```

		 **In ASPX:**

		```csharp
		 $("#comboTarget").bind("igcomboselectionchanging", comboSelectionChanging);
		```

2.  Cancel the event by returning false.

    **In HTML and JavaScript:**

    ```html
    <script type="text/javascript">
            
        function comboSelectionChanging(evt, ui) {
           if (conditionNotMet)
              return false;
         };   
    </script>
    ```

##<a id="related_topics"></a>Related Topics 


Following are some other topics you may find useful.

-	[Configuring igCombo](igCombo-Configuring.html)

 

 


