<!--
|metadata|
{
    "fileName": "igtilemanager-adding",
    "controlName": "igTileManager",
    "tags": ["Getting Started","Grouping","How Do I","Layouts"]
}
|metadata|
-->

# Adding igTileManager

## Topic Overview
### Purpose

This topic demonstrates, with code examples, how to add the `igTileManager`™ control to an HTML page in either JavaScript or ASP.NET MVC. This topic covers initializing `igTileManager` on the HTML markup. For instantiating the control from the data source, refer to the [Binding igTileManager to Data](igTileManager-Binding.html) topic.

### Required background

The following topic is a prerequisite to understanding this topic:

- [igTileManager Overview](igTileManager-Overview.html): This topic provides conceptual information about the `igTileManager` control including its main features, minimum requirements, and user functionality.

### In this topic

This topic contains the following sections:

-   [Adding igTileManager – Conceptual Overview](#overview)
    -   [Adding igTileManager summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igTileManager to the HTML Markup – **Procedure**](#html-markup-preocedure)
    -   [Introduction](#html-introduction)
    -   [Preview](#html-preview)
    -   [Prerequisites](#html-prerequisites)
    -   [Steps](#html-steps)
-   [**Adding igTileManager to an ASP.NET MVC View – Procedure**](#mvc-procedure)
    -   [Introduction](#mvc-introduction)
    -   [Preview](#mvc-preview)
    -   [Prerequisites](#mvc-prerequisites)
    -   [Steps](#mvc-steps)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Adding igTileManager – Conceptual Overview
### <a id="summary"></a>Adding igTileManager summary

The `igTileManager` is a control that initialize on DIV element. The `igTileManager` can be created either upon added markup in that DIV or from the data source (See [Binding igTileManager to Data](igTileManager-Binding.html)). This topic demonstrates initialization on markup.

It uses the Infragistics Loader (`igLoader`) component to load all %%ProductName%% resources needed by the `igTileManager` control. The markup, too, is defined in HTML page.

### <a id="requirements"></a>Requirements

The following table summarizes the requirements for `igTileManager` control.

<table class="table">
	<thead>
		<tr>
            <th>
Requirement / Required Resource
			</th>

            <th>
Description
			</th>

            <th>
What you need to do…
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
jQuery and jQuery UI JavaScript resources
			</td>

            <td>
%%ProductName%% is built on top of these frameworks:
			</td>

            <td>
Add script references to both libraries in the  section of your page.
			</td>
        </tr>

        <tr>
            <td>
JavaScript resources
			</td>

            <td>
                The igTileManager functionality of the %%ProductName%% library is distributed across several files. You can load the required resources in one of the following ways:

                <ul>
                    <li>
(Recommended)  [Adding Required Resources Automatically with the Infragistics Loader](Using-Infragistics-Loader.html) (igLoader™).
                        You only need to include a script reference to igLoader on your page.
					</li>

                    <li>
Load the required resources manually. You need to use the dependencies listed in the table below.
					</li>
                </ul>

                The following table lists the %%ProductName%% library dependences related to the igTileManager control. These resources need to be referred to explicitly if you chose to load resources manually (i.e. not to use igLoader).

                <table class="table">
	<thead>
		<tr>
                            <th>
JS Resource
			</th>

                            <th>
Description
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
`Infragistics.util.js`
`infragistics.util.jquery.js`
			</td>

                            <td>
%%ProductName%% utilities
			</td>
                        </tr>

                        <tr>
                            <td>
`infragistics.datasource.js`
			</td>

                            <td>
The `igDataSource`™ component
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
`infragistics.ui.layoutmanger.js`
			</td>

                            <td>
The `igLayoutManager`™ component
			</td>
                        </tr>

                        <tr>
                            <td>
`infragistics.ui.splitter.js`
			</td>

                            <td>
The `igSplitter`™ component
			</td>
                        </tr>

                        <tr>
                            <td>
`infragistics.ui.tilemanager.js`
			</td>

                            <td>
The `igTileManager` control
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
                Add one of the following:

                <ul>
                    <li>
A reference to `igLoader`
					</li>

                    <li>
A reference to all the required JavaScript files (listed in the table on the left).
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
IG theme(Optional)
			</td>

            <td>
This theme contains the visual styles for the %%ProductName%% library. The theme file is:

                `{IG CSS root}/themes/Infragistics/infragistics.theme.css`
			</td>

            <td>
Add `style` reference to the file in your page.
			</td>
        </tr>

        <tr>
            <td>
Style references
			</td>

            <td>
The following CSS files are needed for the correct rendering of the control:`{IG CSS root}/structure/modules/infragistics.ui.layout.css``{IG CSS root}/structure/modules/infragistics.ui.splitter.css`
			</td>

            <td>
Add `style` references to those files in your page.
			</td>
        </tr>

        <tr>
            <td>
`igTileManager` structure
			</td>

            <td>
The styles from the following CSS file are used for rendering various elements of the control:

                `{IG CSS root}/structure/modules/infragistics.ui.tilemanager.css`
			</td>

            <td>
Add `style` reference to the file in your page.
			</td>
        </tr>
    </tbody>
</table>



>**Note:**It is recommended to use the `igLoader` component to load JavaScript and CSS resources. For information on how to do this, refer to the [Adding Required Resources Automatically with the Infragistics Loader](Using-Infragistics-Loader.html) topic. In addition to that, in the online [%%ProductName%% Samples Browser](%%SamplesUrl%%), you can find some specific examples on how to use the `igLoader` with the `igTileManager` component.

### <a id="steps"></a>Steps

Following are the general conceptual steps for adding `igTileManager` to an HTML page.

1. Adding the HTML element to host the `igTileManager` control

2. Instantiating `igTileManager`



## <a id="html-markup-preocedure"></a>Adding igTileManager to the HTML Markup – Procedure
### <a id="html-introduction"></a>Introduction

This procedure guides you through the steps of adding an `igTileManager` control with basic functionality to an HTML page using a pure HTML/JavaScript implementation. It uses the Infragistics Loader component (`igLoader`) to load all %%ProductName%% resources needed by the `igTileManager` control. The markup is defined in HTML page as well.

### <a id="html-preview"></a>Preview

The following screenshot is a preview of the final result.

![](images/Adding_igTileManager_1.png)

### <a id="html-prerequisites"></a>Prerequisites

The required resources added and properly referenced. (For a conceptual overview of those resources, see [Requirements](#requirements).) These include:

-   The required files added to their appropriate locations:
    -   The required jQuery and jQueryUI JavaScript resources added to a folder named Scripts in the directory where your web page resides.
    -   The %%ProductName%% CSS files added to a folder named Content/ig (For details, see the [Styling and Theming in %%ProductName%%](Deployment-Guide-Styling-and-Theming.html) topic).

-   The %%ProductName%% JavaScript files added to a folder of your web site or application named Scripts/ig (For details, see the [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) topics).

-   The required JavaScript resources referenced in the <head> section of the page.

**In HTML:**

```html
<script  type="text/javascript" src="Scripts/jquery.js"></script>
<script  type="text/javascript" src="Scripts/jquery-ui.js"></script>
```

-   The igLoader component referenced on the page.

**In HTML:**

```html
<script  type="text/javascript" src="Scripts/ig/infragistics.loader.js"></script>
```

-   The igLoader component instantiated:

**In HTML:**

```html
<script type="text/javascript">
    $.ig.loader({
        scriptPath: "Scripts/ig/",
        cssPath: "Content/ig/",
        resources: “igTileManager"
    });
<script>
```

### <a id="html-steps"></a>Steps

The following steps demonstrate how to add a basic `igTileManager` control to a web page. For other scenarios, read at [Configuring igTileManager](igTileManager-Configuring.html).

1. Add a target element to host `igTileManager`.

	On your web page, define a target HTML DIV element to serve as the base object for the igTileManager control and set its ID. Add three DIVs with heading representing three tiles on the HTML page.
	
	**In HTML:**
	
	```html
	<style type="text/css">
	        #dashboard {
	            position: relative;
	            width: 100%;
	            height: 800px;
	        }
	</style> 
	<div id="dashboard">
	        <div>
	          <figure class=”minimized”>
	             <figcaption>Miami Heat</figcaption>
	             <img src="miami-logo.jpg" alt="error">
	             </figure>
	         <div class="maximized">
	            <img src="miami-maximized.jpg" alt="error">
	             <ul>
	               <li>Top scorer: LeBron James - 25,9 PPG</li>
	               <li>Most rebounds per game: LeBron James - 8.40 TOT</li>
	               <li>Highest three point percentage: James Jones - 0.750</li>
	             </ul>
	         </div>
	        </div>
	        <div>
	           <figure class=”minimized”>
	             <figcaption>San Antonio Spurs</figcaption>
	             <img src="San-Antonio-logo.jpg" alt="error">
	            </figure>
	           <div class="maximized">
	              <img src="San-Antonio-maximized.jpg" alt="error">
	               <ul>
	                 <li>Top scorer: Tony Parker - 20,3 PPG</li>
	                 <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>
	                 <li>Highest three point percentage: Matt Bonner - 0.442</li>
	               </ul>
	           </div>
	         </div>
	         <div>
	             <figure class=”minimized”>
	               <figcaption>New York Knicks</figcaption>
	               <img src="NY-logo.jpg" alt="error">
	             </figure>
	            <div class="maximized">
	             <img src="ny-maximized.jpg" alt="error">
	                <ul>
	                   <li>Top scorer: Carmelo Anthony - 28,7 PPG</li>
	                   <li>Most rebounds per game: Tyson Chandler - 10.70 TOT</li>
	                   <li>Highest three point percentage: Steve Novak - 0.425</li>
	                </ul>
	        </div>
	</div>
	```

2. Instantiate the `igTileManager` and specify its desired layout.

	Add the initialization code to a script element in the HTML page. The initialization code creates igTileManager instance in the DIV element added earlier.
	
	The following code creates an instance of the igTileManager control with square tiles that are 250 pixels along each side.
	
	**In JavaScript:**
	
	```js
	$.ig.loader(function () {
	    //  Create a basic igTileManager control
	    $("#dashboard").igTileManager({
                columnWidth: 250,
                columnHeight: 250,
                minimizedState: “.minimized”,
                maximizedState: “.maximized”
	    });
	});
	```





## <a id="mvc-procedure"></a>Adding igTileManager to an ASP.NET MVC View – Procedure
### <a id="mvc-introduction"></a>Introduction

This procedure guides you through the steps of adding an `igTileManager`, with basic functionality, to an ASP.NET MVC view. The example uses the ASP.NET MVC syntax together with the required Loader configuration.

### <a id="mvc-preview"></a>Preview

The following screenshot preview of the final result.

![](images/Adding_igTileManager_1.png)

### <a id="mvc-prerequisites"></a>Prerequisites

The required resources added and properly referenced. (For a conceptual
overview of those resources, see [Requirements](#requirements).) These
include:

-   The required files added to their appropriate locations:
    -   The required jQuery and jQueryUI JavaScript resources added to a folder named Scripts in the directory where your web page resides.
    -   The %%ProductName%% CSS files added to a folder named Content/ig (For details, see the [Styling and Theming in %%ProductName%%](Deployment-Guide-Styling-and-Theming.html) topic).
    -   The %%ProductName%% JavaScript files added to a folder of your web site or application named Scripts/ig (For details, see the [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) topics).
-   The required JavaScript resources referenced in the <head> section of the page.

    **In HTML:**

    ```html
    <script  type="text/javascript" src="Scripts/jquery.js"></script>
    <script  type="text/javascript" src="Scripts/jquery-ui.js"></script>
    ```

    The igLoader component referenced in the page.

    **In HTML:**

    ```html
    <script  type="text/javascript" src="Scripts/ig/infragistics.loader.js"></script>
    ```

    The igLoader MVC helper configurated for igTileManager:

    **In ASPX:**

    ```csharp
    @(Html.Infragistics()
        .Loader()
        .ScriptPath("http://localhost/ig_ui/js/")
        .CssPath("http://localhost/ig_ui/css/")
        .Render()
    )
    ```

### <a id="mvc-steps"></a>Steps

The following steps demonstrate how to add a basic `igTileManager` control to an ASP.NET MVC application. For other scenarios, read at [Configuring igTileManager](igTileManager-Configuring.html).

1. Add a target element to host `igTileManager`.

	On your web page, define a target HTML DIV element which serves as the base object for the `igTileManager` control and set its ID. Add three DIVs with heading that represent three tiles on the HTML page.
	
	**In HTML:**
	
	```html
	<style type="text/css">
	        #dashboard {
	            position: relative;
	            width: 100%;
	            height: 800px;
	        }
	</style> 
	<div id="dashboard">
	        <div>
	          <figure class=”minimized”>
	             <figcaption>Miami Heat</figcaption>
	             <img src="miami-logo.jpg" alt="error">
	             </figure>
	         <div class="maximized">
	            <img src="miami-maximized.jpg" alt="error">
	             <ul>
	               <li>Top scorer: LeBron James - 25,9 PPG</li>
	               <li>Most rebounds per game: LeBron James - 8.40 TOT</li>
	               <li>Highest three point percentage: James Jones - 0.750</li>
	             </ul>
	         </div>
	        </div>
	        <div>
	           <figure class=”minimized”>
	             <figcaption>San Antonio Spurs</figcaption>
	             <img src="San-Antonio-logo.jpg" alt="error">
	            </figure>
	           <div class="maximized">
	              <img src="San-Antonio-maximized.jpg" alt="error">
	               <ul>
	                 <li>Top scorer: Tony Parker - 20,3 PPG</li>
	                 <li>Most rebounds per game: Tim Duncan - 9.90 TOT</li>
	                 <li>Highest three point percentage: Matt Bonner - 0.442</li>
	               </ul>
	           </div>
	         </div>
	         <div>
	             <figure class=”minimized”>
	               <figcaption>New York Knicks</figcaption>
	               <img src="NY-logo.jpg" alt="error">
	             </figure>
	            <div class="maximized">
	             <img src="ny-maximized.jpg" alt="error">
	                <ul>
	                   <li>Top scorer: Carmelo Anthony - 28,7 PPG</li>
	                   <li>Most rebounds per game: Tyson Chandler - 10.70 TOT</li>
	                   <li>Highest three point percentage: Steve Novak - 0.425</li>
	                </ul>
	        </div>
	</div>
	```

2. Instantiate `igTileManager`

	The following code creates an instance of the `igTileManager` control with square tiles that are 250 pixels along each side.
	
	**In ASPX:**
	
	```csharp
	@(Html.
	  Infragistics().
	  ID("dashboard").
	  minimizedState(“.minimized”).
	  maximizedState(“.maximized”).
	  Render()
	)
	```

## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Binding igTileManager to Data](igTileManager-Binding.html): This topic explains how to bind the `igTileManager` control to a JavaScript array, XML data, strongly typed MVC View, and to a JSON response from a remote service.

- [Configuring igTileManager](igTileManager-Configuring.html): This topic explains how to configure the features and behavior of the `igTileManager` control.

- [Handling Events (igTileManager)](igTileManager-Handling-Events.html): This topic explains, with code examples, how to attach event handlers to the `igTileManager` control.

- [Accessibility Compliance (igTileManager)](igTileManager-Accessibility-Compliance.html): This topic explains the accessibility features of the `igTileManager` control and provides information on how to achieve accessibility compliance for pages containing this control.

- [Known Issues and Limitations (igTileManager)](igTileManager-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igTileManager` control and the available workarounds for them.

- [jQuery and ASP.NET MVC Helper API Links (igTileManager)](igTileManager-jQuery-and-ASP.NET-MVC-Helper-API-Links.html): This topic lists the links to the API reference documentation for the `igTileManager` control.



### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [ASP.NET MVC Basic Usage](%%SamplesUrl%%/tile-manager/aspnet-mvc-helper): This sample demonstrates using the ASP.NET MVC helper for the `igTileManager` control.

- [Tile Manager Binding to JSON](%%SamplesUrl%%/tile-manager/bind-json): This sample demonstrates binding the `igTileManager` control to JSON data source.

- [Tile Manager Item Configurations](%%SamplesUrl%%/tile-manager/item-configurations): This sample demonstrates configuring the tiles inside the `igTileManager` in terms of position and size.

- [Tile Manager Leading Tile Configuration](%%SamplesUrl%%/tile-manager/leading-tile): This sample demonstrates instantiating the `igTileManager` on existing markup in a container with a configuration that defines a leading tile. The leading tile swaps with the rest of the tiles upon expanding.





 

 


