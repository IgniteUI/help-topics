<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-known-issues",
    "controlName": "igHierarchicalGrid",
    "tags": ["Grids","Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igHierarchicalGrid)

## Known Issues and Limitations Summary

The following table summarizes the known issues and limitations of the `igHierarchicalGrid`™ control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

#### Legend:

<table class="table">
    <tbody>
        <tr>
            <td><img src="../../images/images/positive.png" alt="" class="img-responsive"></td>
            <td>Workaround available</td>
        </tr>
        <tr>
            <td><img src="../../images/images/negative.png" alt="" class="img-responsive"></td>
            <td>No known workaround</td>
        </tr>
        <tr>
            <td><img src="../../images/images/plannedFix.png" alt="" class="img-responsive"></td>
            <td>Fix planned</td>
        </tr>
    </tbody>
</table>

#### [igHierarchicalGrid](#general)

Issue | Description | Status
---|---|---
[Screen taps misinterpreted on Android 4.* devices](#android-taps) | On Android 4.*-powered touch devices tapping on the drop-down in the Group By modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog. | ![](../../images/images/positive.png)
[Rendering issues in the hierarchical grid when features are referenced in a particular order](#feature-order) | The `igHierarchicalGrid`’s child layouts may have rendering issues if the Row Selectors feature is added after the Group By feature to the feature list. | ![](../../images/images/positive.png)
[Limitation for the primary key values](#limitation-primary-key) | `igHierarchicalGrid` uses primary key value of the parent layout to create child layout `<div>` element with unique `id` attribute (according to the [HTML5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute) [space characters](http://www.w3.org/TR/html5/infrastructure.html#space-character)must not be used in the id attribute value). When the primary key values contain invalid characters the DIV element cannot be selected with the [jQuery ID selector](http://api.jquery.com/id-selector/).As a result features on the child grid may not work as expected. Example: Opening filter dropdown on child grid causes an exception. | ![](../../images/images/negative.png)
Self-reference not working in MVC | If you want to bind an `igHierarchicalGrid` to self-referencing data, the MVC pattern will not allow you to do this because of limitation in serializing. | ![](../../images/images/negative.png)
[Load-on-Demand not working with chaining](#load-on-demand-chaining) | It is not possible to enable Load-on-Demand in the View page of your MVC project. | ![](../../images/images/positive.png)
[Load-on-Demand without primary keys for the layouts throws an exception](#load-on-demand-primary) | If you enable the Load-on-Demand feature and do not define primary keys for all child layouts, an exception will be thrown. | ![](../../images/images/positive.png)
[Some child layout columns are hidden or cut out](#hidden-child-columns) | When an `igHierarchicalGrid` has no width defined and the child layout has width that exceeds the width grid, some of the child’s columns will be cut or hidden. | ![](../../images/images/positive.png)
Defining a feature more than once not possible | **In JavaScript:** In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once throws an error. **In MVC:** In both `igGrid` and `igHierarchicalGrid`, defining a feature more than once in the MVC Wrapper, causes only the last definition to be taken into account. | ![](../../images/images/negative.png)
Client-side binding to XML | Binding to XML is supported only for recursive schemas. | ![](../../images/images/plannedFix.png)
When Load-on-Demand is false persistence is not working for the child layouts | When Load-on-Demand is false remote Filtering, Sorting or GroupBy are not persisted for the child layout. The persist option is automatically set to false for those features in this scenario. | ![](../../images/images/negative.png)
The id attribute is mandatory for the DOM control placeholder | The id attribute should be set on the DOM element on which the grid is initialized. Grid use jQuery ID selector internally for faster selection. | ![](../../images/images/negative.png)
Column keys which contain spaces are not supported | Column keys are used for generating some DOM elements IDs. Having spaces in an HTML id attribute is not allowed according to the [HTML 5 specification](http://www.w3.org/TR/html5/dom.html#the-id-attribute). | ![](../../images/images/negative.png)
Using virtualization with initialExpandDepth is not supported|Currently when virtualization is enabled all rows are fetched as collapsed. Setting initialExpandDepth will have no effect.| ![](../../images/images/negative.png)


#### [igHierarchicalGrid GroupBy](#grouping)

Issue | Description | Status
---|---|---
[Limitation of remote grouping in hierarchical grid](#remote-grouping) | Grouping columns from more than one layout (or from the root grid) does not work with remote grouping. | ![](../../images/images/positive.png)
[Erroneous remote grouping with Load-on-Demand](#remote-grouping-error) | If remote Group By is enabled with Load-on-Demand for the entire grid, the groups are incorrect unless you modify the action that returns the data that is being loaded on demand. | ![](../../images/images/positive.png)
[Exception thrown when the Group By feature defines column settings together with enabling inheritance](#inheritance-exception) | If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown. | ![](../../images/images/positive.png)
[Limitation of remote grouping from different child layouts](#different-child-layouts) | When Load-on-Demand is disabled grouping columns from different child layouts with remote group by will invoke the parent's `DataSourceUrl` instead of the `DataSourceUrl` of the child. | ![](../../images/images/positive.png)


### igHierarchicalGrid RowSelectors

Issue | Description | Status
---|---|---
Row Selectors works on only one layout at a time | The Row Selectors’ feature checkboxes selected in one layout become deselected when user checks the checkboxes in another layout. | ![](../../images/images/negative.png)

### igHierarchicalGrid Tooltips

Issue | Description | Status
---|---|---
Tooltips are not shown for child layout when options for Tooltips are different in child and root options definition | This is no longer supported as all Tooltips instances in an hierarchical grid will use the same DOM elements (to reduce DOM complexity).  | ![](../../images/images/negative.png)


### <a id="general"></a> igHierarchicalGrid

<table class="table table-striped">
	<thead>
        <tr>
            <th>Issue</th>
            <th>Description</th>
			<th>Workaround</th>
        </tr>
    </thead>
    <tbody>
        <tr id="android-taps">
            <td>
                <a id="misinterpreted-screen-taps"></a>Screen taps misinterpreted on Android 4.* devices
            </td>

            <td>
	            On Android 4.*-powered touch devices tapping on the drop-down in the Group By modal dialog in a hierarchical grid will often act on the grid cell behind the modal dialog.
			</td>
			<td>
	            Set the [`modalDialogDropDownWidth`](%%jQueryApiUrl%%/ui.iggridgroupby#options) and [`modalDialogDropDownAreaWidth`](%%jQueryApiUrl%%/ui.iggridgroupby#options) properties to values which ensure that the drop-down in the modal dialog is wide enough to show the whole layouts tree, or you just set those settings to null.
            </td>
            </tr>
            <tr id="limitation-primary-key">
	            <td>
	            	The `<div>` element of child layout cannot be selected with the jQuery ID selector
	            </td>
	
	            <td>
	            	There can be two different workarounds depending on whether the Updating feature is enabled or not.
				</td>
				<td>
	            	**If the updating feature is not enabled: **Remove the [primaryKey](%%jQueryApiUrl%%/ui.iggrid#options) option from the grid configuration. The igHierarchicalGrid will auto-generate primary keys for the data rows. **If the updating feature is enabled:**Add an extra field to each layout of the igHierarchicalGrid data source and use it as a primary key. You can fill this field with sequential numbers.
	            </td>
            </tr>
			<tr id="feature-order">
	            <td>
	            	Rendering issues in the hierarchical grid features are added in a particular order
	            </td>
	            <td>
	           		In the igHierarchicalGrid, child layouts may have rendering issues (missing or misaligned columns) if the Row Selectors feature is added after the grouping feature to the feature list.
				</td>
				<td>
					To avoid this, add the Row Selectors **before** grouping in the array.
				</td>
            </tr>
			<tr id="load-on-demand-chaining">
		    	<td>
		           	Load-on-Demand not working with chaining
		    	</td>
	            <td>
		            It is not possible to enable Load-on-Demand in the View page of the MVC project.
				</td>
				<td>
		            Either create the hierarchical model in the Controller or create a model class and then pass that class to the View page.
			    </td>
            </tr>
		    <tr id="load-on-demand-primary">
				<td>
		            Load-on-Demand without primary keys for the layouts throws an exception
		    	</td>
	            <td>
		            If you enable the Load-on-Demand feature and do not define primary keys for all child layouts, an exception will be thrown. This is because, without a primary key for a layout, it is not be possible for the grid to make the Load On Demand request for data.
				</td>
				<td>
					It’s always a good practice to define the primary and foreign keys for every layout.
		    	</td>
		    </tr>
              <tr id="hidden-child-columns">
	             <td>
		            Some child layout columns are hidden or cut out
			    </td>
			    <td>
					When an igHierarchicalGrid has no width defined and the child layout has width that exceeds the width of the grid, some of the child’s columns will be cut out or hidden.
				</td>
				<td>
					It’s always a good practice to set width to the igHierarchicalGrid. This would allow for a horizontal scroll bar to appear if the child layout is wider than the grid width.
			    </td>
		    </tr>

    </tbody>         
</table>

## <a id="grouping"></a> igHierarchicalGrid GroupBy
<table class="table table-striped">
	<thead>
        <tr>
            <th>Issue</th>
            <th>Description</th>
			<th>Workaround</th>
        </tr>
    </thead>
    <tbody>
		<tr id="remote-grouping">
            <td>
				Limitation of remote grouping in hierarchical grid
			</td>

            <td>
				Grouping columns from more than one layout (or from the root grid) does not work with remote grouping.
			</td>
			<td>  
                **Use local group-by:** This circumvents the problem entirely.
                
                **Use remote group-by:** When using remote grouping, only group columns from one layout (or the root grid).
			</td>
        </tr>      
        <tr id="remote-grouping-error">
            <td>
				Erroneous remote grouping with Load-on-Demand
			</td>

            <td>
				If remote Group By is enabled with Load-on-Demand for the entire grid, the groups are incorrect unless you modify the action that returns the data that is being loaded on demand.
			</td>
			<td>                    
                When implementing the action method that returns the data requested on demand, set the type of the returned result to be GridColumnLayoutModel (and not GridModel). The
                code below demonstrates how to do it.
                    <br>
                **In C#:**

<pre>public JsonResult BindChildLayout(string path, string layout)
{
    GridColumnLayoutModel childLayout = new GridColumnLayoutModel();
    …
    return childLayout.GetData(path, layout);
}
</pre>
			</td>
        </tr>

        <tr id="inheritance-exception">
            <td>
				Exception thrown when the Group By feature defines column settings together with enabling inheritance
			</td>

            <td>
				Exception is thrown when the Group By feature defines column settings and enables inheritance at the same time. This issue occurs in an MVC solution with a grid using chaining approach in the MVC View page. If you enable the Group By feature and, in it, attempt to both define column settings and enable inheritance, a page exception will be thrown.
			</td>
			<td>
				Instead of defining both column settings and enabling inheritance in the Group By feature, in the Group By feature disable inheritance and then manually define the same Group By settings in every child layout.
			</td>
        </tr>

        <tr id="different-child-layouts">
            <td>
				Limitation of remote grouping from different child layouts
			</td>
            <td>
				When Load-on-Demand is false the DataSourceUrl of the child layouts are not taken into account.
			</td>
			<td>
				Enable Load-on-Demand functionality.
			</td>
        </tr>
    </tbody>
</table>


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Enabling and Configuring Grouping (igHierarchicalGrid)](igHierarchicalGrid-Grouping-Enabling-and-Configuring.html): This topic demonstrates, with code examples, how to enable and configure the Grouping feature of the `igHierarchicalGrid` control in both jQuery and MVC.
- [Load-on-Demand (igHierarchicalGrid)](igHierarchicalGrid-Load-on-Demand.html): This topic demonstrates the two ways to load data to the `igHierarchicalGrid` – at once and on demand.
- [Configuring Row Selectors (igHierarchicalGrid)](igHierarchicalGrid-Configuring-RowSelectors.html): Demonstrates, with code examples, how to configure the `igHierarchicalGrid` control’s Row Selection feature.

### Resources

The following material (available outside the Infragistics family of content) provides additional information related to this topic.

- [ID Selector (“#id”)](http://api.jquery.com/id-selector/): The article in the jQuery documentation explaining jQuery ID selector.