<!--
|metadata|
{
    "fileName": "igpivotdataselector-adding-to-html-page",
    "controlName": "igPivotDataSelector",
    "tags": ["Application Blocks","Getting Started","Grids","How Do I"]
}
|metadata|
-->

# Adding igPivotDataSelector to an HTML Page

##Topic Overview

### Purpose

This topic explains, in both conceptual and step-by-step form, how to add the `igPivotDataSelector`™ control to an HTML page.

### Required background

The following topics are prerequisites to understanding this topic:

- [%%ProductName%% Overview](NetAdvantage-for-jQuery-Overview.html): This topic provides some general information on the %%ProductName%%™ library.

- [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html):This topic provides general guidance on adding the required JavaScript resources for using the controls from the %%ProductName%% library.

- [igPivotDataSelector Overview](igPivotDataSelector-Overview.html):This topic provides conceptual information about the `igPivotDataSelector` control including its main features, requirements, and user functionality.

### In this topic

This topic contains the following sections:

-   [Adding igPivotDataSelector – Conceptual Overview](#overview)
    -   [Adding igPivotDataSelector summary](#adding-control-summary)
    -   [Requirements](#summary-requirements)
    -   [Steps](#summary-steps)
-   [Adding igPivotDataSelector – Procedure](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Preview](#procedure-preview)
    -   [Prerequisites](#procedure-prerequisites)
    -   [Overview](#procedure-overview)
    -   [Steps](#procedure-steps)
-   [**Related Content**](#related-contend)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="overview"></a>Adding igPivotDataSelector – Conceptual Overview

### <a id="adding-control-summary"></a>Adding igPivotDataSelector summary

The `igPivotDataSelector` operates using an instance of `igOlapFlatDataSource`™ or `igOlapXmlaDataSource`™. Therefore, when adding the `igPivotDataSelector` to an HTML page, you need to provide a pre-configured data source instance or specify the required options so that one could be created internally.

The data source is specified through either the [dataSource](%%jQueryApiUrl%%/ui.igPivotDataSelector#options:dataSource) parameter or the [dataSourceOptions](%%jQueryApiUrl%%/ui.igPivotDataSelector#options:dataSourceOptions) property of the `igPivotDataSelector`. The data source setting is the only mandatory option to set when initializing the `igPivotDataSelector`.

### <a id="summary-requirements"></a>Requirements

The following table summarizes the requirements for using the `igPivotDataSelector` control.

<table cellspacing="0" cellpadding="0" class="table table-bordered">
	<tbody>
		<tr>
			<th>
				Required Resources
			</th>

			<th>
				Description
			</th>

			<th>
				What you need to do…
			</th>
		</tr>

		<tr>
			<td>
				jQuery and jQuery UI JavaScript resources
			</td>

			<td>
				%%ProductName%%™ is built on top of these frameworks:

				<ul>
					<li><a href="http://jquery.com/" target="_blank">jQuery</a></li>

					<li><a href="http://jqueryui.com/" target="_blank">jQuery UI</a></li>
				</ul>
			</td>

			<td>
				Add script references to both libraries in the &lt;head&gt; section of your page.
			</td>
		</tr>

		<tr>
			<td>
				Modernizr library (Optional)
			</td>

			<td>
				The Modernizr library is used by the `igPivotDataSelector` to detect browser and device capabilities. It is not mandatory and, if not included, the control will behave as if in a normal desktop environment with an HTML5 compatible browser.

				<ul>
					<li><a href="http://modernizr.com/" target="_blank">Modernizr</a></li>
				</ul>
			</td>

			<td>
				Add a script reference to the library in the &lt;head&gt; section of your page.
			</td>
		</tr>

		<tr>
			<td>
				General `igPivotDataSelector` JavaScript Resources
			</td>

			<td>
				The igPivotDataSelector functionality of the %%ProductName%% library is distributed across several files. You can load the required resources in one of the following ways:

				<ul>
					<li>(Recommended)&nbsp;Use the Infragistics® Loader (`igLoader`™). You only need to include a script reference to `igLoader` on your page.</li>

					<li>Load the required resources manually. You need to use the dependencies listed in the table below.</li>
				</ul>

				The following table lists the %%ProductName%% library dependences related to the `igPivotDataSelector` control. These resources need to be referred to explicitly if you chose to load resources manually (i.e. not to use `igLoader`).

				<table cellspacing="0" cellpadding="0" class="table table-bordered">
					<tbody>
						<tr>
							<th>
								JavaScript Resource
							</th>

							<th>
								Description
							</th>
						</tr>

						<tr>
							<td>
								`infragistics.util.js`<br/>
								`infragistics.util.jquery.js`
							</td>

							<td>
								%%ProductName%% utilities
							</td>
						</tr>

						<tr>
							<td>
								(Conditional - if using `igOlapFlatDataSource`) `infragistics.datasource.js`
							</td>

							<td>
								The `igDataSource`™ component
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.olapflatdatasource.js`

								or

								`infragistics.olapxmladatasource.js`
							</td>

							<td>
								Data source framework
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.templating.js`
							</td>

							<td>
								Template engine (`igTemplate`™)
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.ui.shared.js`
							</td>

							<td>
								%%ProductName%% shared code
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.ui.scroll.js`
							</td>

							<td>
								A scroll helper which is internally used
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.ui.combo.js`
							</td>

							<td>
								Combo box control (`igCombo`™)
							</td>
						</tr>

						<tr>
							<td height="22">
								`infragistics.ui.tree.js`
							</td>

							<td height="22">
								The `igTree`™ control
							</td>
						</tr>

						<tr>
							<td height="22">
								`infragistics.ui.pivot.shared.js`
							</td>

							<td height="22">
								%%ProductName%% shared code for pivot components
							</td>
						</tr>

						<tr>
							<td>
								`infragistics.ui.pivotdataselector.js`
							</td>

							<td>
								The `igPivotDataSelector`™ control
							</td>
						</tr>
					</tbody>
				</table><br>
			</td>

			<td>
				Add one of the following:

				<ul>
					<li>A reference to `igLoader`</li>

					<li>A reference to all the required JavaScript files (listed in the table on the left).</li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				IG Theme

				(Optional)
			</td>

			<td>
				This theme contains the visual styles for the %%ProductName%% library. The theme file is:

				<ul>
					<li>`<IG CSS root>/themes/Infragistics/infragistics.theme.css`</li>
				</ul>
			</td>

			<td></td>
		</tr>

		<tr>
			<td>
				`igPivotDataSelector` CSS resources file
			</td>

			<td>
				The styles from the following CSS file are used for rendering various elements of the control:

				<ul>
					<li>`<IG CSS root>/structure/modules/infragistics.ui.shared.css`</li>

					<li>`<IG CSS root>/structure/modules/infragistics.ui.combo.css`</li>

					<li>`<IG CSS root>/structure/modules/infragistics.ui.tree.css`</li>

					<li>`<IG CSS root>/structure/modules/infragistics.ui.pivot.css`</li>
				</ul>
			</td>

			<td>
				Add style reference to the file in your page.
			</td>
		</tr>
	</tbody>
</table>

 

### <a id="summary-steps"></a>Steps

Following are the general conceptual steps for adding `igPivotDataSelector` to an HTML page.

1. Adding references to required resources

2. Adding HTML markup required by the `igPivotDataSelector`

3. Adding a data source

4. Initializing the `igPivotDataSelector`



##<a id="procedure"></a>Adding igPivotDataSelector – Procedure

### <a id="procedure-introduction"></a>Introduction

The procedure below demonstrates, with code examples, how to add the `igPivotDataSelector` component to an HTML application visualizing the Adventure Works sample database. The procedure uses the Infragistics Loader (`igLoader`) to reference the required resources, which is the recommended option.

### <a id="procedure-preview"></a>Preview

The following screenshot is a preview of the final result.

![](images/igPivotDataSelector_Adding_1.png)

### <a id="procedure-prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   The [Adventure Works](http://msftdbprodsamples.codeplex.com/) sample database.
-   An instance of `$.ig.OlapXmlaDataSource` object or `$.ig.OlapFlatDataSource` object

### <a id="procedure-overview"></a>Overview

1. Adding references to required resources

2. Adding HTML markup required by the `igPivotDataSelector`

3. Adding a data source

4. Initializing the `igPivotDataSelector`

### <a id="procedure-steps"></a>Steps

The following steps demonstrate how to add a jQuery `igPivotDataSelector`.

1. Add references to required resources.

	1. Organize the required files.
		
		A. Add the jQuery, jQueryUI and Modernizr JavaScript resources to a folder named Scripts in the directory where your web page resides.

		B. Add the %%ProductName%% CSS files to a folder named Content/ig (For details, see the [Styling and Theming in %%ProductName%%](Deployment-Guide-Styling-and-Theming.html) topic).

		C. Add the %%ProductName%% JavaScript files to a folder named Scripts/ig in your web site or application (For details, see the [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) topic).

	2. Add the references to the required JavaScript libraries.

		Add references to the jQuery, jQuery UI and Modernizr libraries to the `<head>`  section of your page:

		**In HTML:**

		```html
		<script  type="text/javascript" src="Scripts/jquery.js"></script>
		<script  type="text/javascript" src="Scripts/jquery-ui.js"></script>
		<script  type="text/javascript" src="Scripts/modernizr.js"></script>
		```

	3. Add a reference to `igLoader`.Include the `igLoader` script in the page:
 
		**In HTML:**

		```html
		<script  type="text/javascript" src="Scripts/ig/infragistics.loader.js"></script>
		```

	4. Load the required resources.

		Instantiate `igLoader`:

		**In HTML:**

		```html
		<script type="text/javascript">
		    $.ig.loader({
		        scriptPath: "Scripts/ig/",
		        cssPath: "Content/ig/",
		        resources: “igPivotDataSelector,igOlapXmlaDataSource"
		    });
		<script>
		```

2. Add HTML markup required by the `igPivotDataSelector`.

	Create a `div` tag with an `id` of “`dataSelector`” in your HTML page.

	**In HTML:**

	```html
	<div id="dataSelector"></div>
	```

3. Add a data source.

	A sample data source declaration:

	**In JavaScript:**

	```js
	$.ig.loader(function () {    var dataSource = new $.ig.OlapXmlaDataSource({
	                serverUrl: "http://sampledata.infragistics.com/olap/msmdpump.dll",
	                catalog: "Adventure Works DW Standard Edition",
	                cube: "Adventure Works",
	                measureGroup: "Internet Sales",
	                rows: "[Sales Territory].[Sales Territory]",
	                columns: "[Product].[Product Categories]",
	                measures: "[Measures].[Internet Order Count],[Measures].[Internet Gross Profit Margin]"
	            });
	});
	```

	For this data source to work correctly under IE, **before adding the data source declaration,** you need to set the jQuery cross-origin requests support to true:
	
	**In JavaScript:**
	
	```js
	$.support.cors = true;
	```

4. Initialize the `igPivotDataSelector`

	In order for the `igPivotDataSelector` to be loaded, the following code must be added.

	**In JavaScript:**

	```js
	$("#dataSelector").igPivotDataSelector({
	    dataSource: dataSource 
	});
	```

	Following is the alternative (direct) way to specify a data source using the [dataSourceOptions](%%jQueryApiUrl%%/ui.igPivotDataSelector#options:dataSourceOptions) property of the `igPivotDataSelector`. (See [](#adding-control-summary)[Adding igPivotDataSelector summary](#adding-control-summary).)

	**In JavaScript:**

	```js
	$("#dataSelector").igPivotDataSelector({
	      dataSourceOptions: {        
			xmlaOptions:{                    
				serverUrl: " http://sampledata.infragistics.com/olap/msmdpump.dll ",
	          	catalog: "Adventure Works DW Standard Edition ",
	          	cube: "Adventure Works",
	          	measureGroup: "Internet Sales"        
			},
	        rows: "[Sales Territory].[Sales Territory]",
	        columns: "[Product].[Product Categories]",
	        measures: "[Measures].[Internet Order Count],[Measures].[Internet Gross Profit Margin]"     
			}
		});
	```


##<a id="related-contend"></a>Related Content

### <a id="topics"></a>Topics

The following samples provide additional information related to this topic.

- [Adding igPivotDataSelector to an ASP.NET MVC Application](igPivotDataSelector-Adding-Using-the-MVC-Helper.html): This topic explains both conceptually and with a code example how to add the `igPivotDataSelector` to an ASP.NET MVC Application.

### <a id="samples"></a>Samples

The following samples provide additional information related to this
topic.

- [Binding to Flat Data Source](%%SamplesUrl%%/pivot-grid/binding-to-flat-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapFlatDataSource` and uses an `igPivotDataSelector` for data selection.

- [Binding to Xmla Data Source](%%SamplesUrl%%/pivot-grid/binding-to-xmla-data-source): This sample demonstrates how to bind the `igPivotGrid` to an `igOlapXmlaDataSource` and uses an `igPivotDataSelector` for selection.





 

 


