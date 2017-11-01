<!--
|metadata|
{
    "fileName": "igbulletgraph-adding-to-an-html-page",
    "controlName": "igBulletGraph",
    "tags": ["Application Scenarios","Charting","Getting Started","How Do I"]
}
|metadata|
-->

# Adding igBulletGraph to an HTML Page

## Topic Overview

#### Purpose

This topic demonstrates, with code examples, how to add the `igBulletGraph`™ control to an HTML page.

#### Required background

The following topics are prerequisites to understanding this topic:

- [*igBulletGraph* Overview](igBulletGraph-Overview.html): This topic provides conceptual information about the `igBulletGraph`™ control including its main features, minimum requirements, and user functionality.


#### In this topic

This topic contains the following sections:

-   [**Adding *igBulletGraph* to an HTML Page – Conceptual Overview**](#overview)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [**Adding igBulletGraph to an HTML Page – Procedure**](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#procedure-steps)
    -   [Full code](#full-code)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Adding igBulletGraph to an HTML Page – Conceptual Overview

To add `igBulletGraph` control to a web page requires an HTML element, a `div` to serve as the base for instantiation. The basic configuration of `igBulletGraph` requires providing values for its dimensions - `width` and `height`.

#### <a id="requirements"></a>Requirements

The following table summarizes the requirements for using the `igBulletGraph` control.

<table class="table table-bordered">
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
                %%ProductName%%™ is built on top of the following frameworks:

                <ul>
                    <li>
[jQuery](http://jquery.com/)
					</li>

                    <li>
[jQuery UI](http://jqueryui.com/)
					</li>
                </ul>
            </td>
            <td>
Add script references to both libraries in the `<head>` section of your page.
			</td>
        </tr>
        <tr>
            <td>
General *igBulletGraph* JavaScript Resources
			</td>
            <td>
The *igBulletGraph* control depends on functionality distributed across several files in the %%ProductName%% Library. You can load the required resources in one of the following ways:

                <ul>
                    <li>
Use the Infragistics® Loader (*igLoader*™). You only need to include a script reference to *igLoader* on your page.
					</li>
                    <li>
Load the required resources manually. You need to use the dependencies listed in the table below.
					</li>
                    <li>
Load the two combined files, containing the logic for all data visualization controls from the %%ProductName%% package - *infragistics.core.js*, *infragistics.dv.js* and *infragistics.encoding.js* (optional).
					</li>
                </ul>

The following table lists the %%ProductName%% library dependencies related to the *igBulletGraph* control. These resources need to be referred to explicitly if you chose not to use *igLoader* or the combined files.

				<table class="table">
					<tbody>
						<tr>
							<th>
JS Resource
							</th>
							<th>
Description
							</th>
						</tr>
						<tr>
							<td>
*infragistics.util.js*<br>
*infragistics.util.jquery.js*
							</td>
							<td>
%%ProductName%% utilities
							</td>
						</tr>
						<tr>
							<td>
*infragistics.ext_core.js*<br>
*infragistics.ext_collections.js*<br>
*infragistics.ext_ui.js*<br>
*infragistics.dv_jquerydom.js*<br>
*infragistics.dv_core.js*<br>
*infragistics.dv_geometry.js*
							<td>
A shared library for data visualization components
							</td>
						</tr>
						<tr>
							<td>
*infragistics.ui.widget.js*
                            </td>
							<td>
Base igWidget for all Ignite UI widgets.
							</td>
						</tr>
						<tr>
							<td>
*infragistics.bulletgraph.js*
                            </td>
							<td>
The *igBulletGraph* control
							</td>
						</tr>
						<tr>
							<td>
*infragistics.ui.bulletgraph.js*
                            </td>
							<td>
The *igBulletGraph* widget
							</td>
						</tr>
					</tbody>
				</table>
            </td>
            <td>
                Add one of the following:

                <ul>
                    <li>
A reference to *igLoader*
					</li>
                    <li>
A reference to all the required JavaScript files (listed in the table on the left).
					</li>
                    <li>
A reference to the combined files and optionally to the file containing the encodings.
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

#### <a id="steps"></a>Steps

Following are the general conceptual steps for adding `igBulletGraph` to an HTML Page.

1. Creating the target element for storing the `igBulletGraph` control.
2. Instantiating the `igBulletGraph` control.
3. Configuring the basic rendering options.
4. Configuring the scale.
5. Adding performance bar.
6. Configuring the comparative marker.
7. Adding comparative ranges.


## <a id="procedure"></a>Adding igBulletGraph to an HTML Page – Procedure
#### <a id="procedure-introduction"></a> Introduction
This procedure adds an instance of `igBulletGraph` to an HTML page and configures its dimensions, its scale and adds a performance bar, comparative marker and three comparative ranges to it.

The procedure presumes the required resources are added to the header of the HTML page, so it instantiates the `igBulletGraph` control in the document ready event to prevent any errors due to DOM being not fully loaded.

#### <a id="preview"></a>Preview

The following screenshot is a preview of the result.

![](images/igBulletGraph_Adding_igBulletGraph_to_an_HTML_Page_1.png)

### <a id="prerequisites"></a>Prerequisites

To complete the procedure, you need the required JavaScript and CSS files referenced on the HTML page.

**In HTML:**

```html
<!DOCTYPE html>
<html>
<head>
	<!-- %%ProductName%% Required Combined CSS Files -->
	<link href="../../igniteui/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
	<link href="../../igniteui/css/structure/modules/infragistics.ui.bulletgraph.css" rel="stylesheet"/>
	<script type="text/javascript" src="../../js/jquery.min.js"></script>
	<script type="text/javascript" src="../../js/jquery-ui.js"></script>
	<!-- Bullet Graph Required JavaScript Files -->
	<script src="../../igniteui/js/modules/infragistics.util.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.util.jquery.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_core.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_collections.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_ui.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_jquerydom.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_core.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_geometry.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ui.widget.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.bulletgraph.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ui.bulletgraph.js" type="text/javascript"></script>
</head>
<body>
</body>
</html>
```

### <a id="procedure-steps"></a>Steps

Follow these steps to add an `igBulletGraph` to an HTML page.

1. **Create the target element for storing the *igBulletGraph* control.**

	Create a `<div>` element within the HTML body on which to instantiate the `igBulletGraph` control.
	
	**In HTML:**
	
	```html
	<body>
	    <!-- Target element for the igBulletGraph -->
	      <div id="bulletGraph"></div>
	</body>
	```

2. **Instantiate the *igBulletGraph* control.**

	Use the selector of the target element defined in step 1 to instantiate the `igBulletGraph` control.

	**In HTML:**

    ```html
    <script type="text/jscript">
        $(function () {                        
                  $("#bulletGraph").igBulletGraph({
            });
            });
    </script>
    ```

3. **Configure the basic rendering options.**

	When instantiating the igBulletGraph, configure the `width` and `height` options.
	
	**In HTML:**
	
	```html
	$("#bulletGraph").igBulletGraph({
	    width: "300px",
	    height: "70px"
	});
	```

4. **Configure the scale.**

	In order to customize the values of the scale, you need to set its [`minimumValue`](%%jQueryApiUrl%%/ui.igBulletGraph#options:minimumValue) and [`maximumValue`](%%jQueryApiUrl%%/ui.igBulletGraph#options:maximumValue) properties. In this example, the scale will start at 5 and end at 55.
	
	**In HTML:**
	
	```html
	$("#bulletGraph").igBulletGraph({
	    width: "300px",
	    height: "70px",
	    minimumValue: "5",
	    maximumValue: "55"
	});
	```

	The changed scale is shown on the following screenshot:
	
	![](images/igBulletGraph_Adding_igBulletGraph_to_an_HTML_Page_2.png)

5. ​**Add performance bar.**

	The primary measure of the `igBulletGraph` is visualized by its performance bar. Its value is managed by the [`value`](%%jQueryApiUrl%%/ui.igBulletGraph#options:value) property setting. For this example, set the value property to 35.
	
	**In HTML:**

    ```html
    $("#bulletGraph").igBulletGraph({
		…
        value:"35"
    });
	```

6. **Configure the comparative marker.**

	To position the comparative measure marker on the scale is managed by the value of the [`targetValue`](%%jQueryApiUrl%%/ui.igBulletGraph#options:targetValue) property. For this example, set the `targetValue` property to 43.
	
	**In HTML:**

    ```html
    $("#bulletGraph").igBulletGraph({
		…
        targetValue:"43"
    });
    ```

	The following screenshot displays what the `igBulletGraph` control would look so far in the procedure.
	
	![](images/igBulletGraph_Adding_igBulletGraph_to_an_HTML_Page_3.png)

7. **Add comparative ranges.**

	In order to compare the value displayed by the performance bar against some meaningful range(s) of values, these comparative ranges need to be displayed on the scale. Comparative ranges are managed by [`ranges`](%%jQueryApiUrl%%/ui.igBulletGraph#options:ranges) property within which several individual ranges can be defined, each of which having its own starting and ending values ([`startValue`](%%jQueryApiUrl%%/ui.igBulletGraph#options:startValue) and [`endValue`](%%jQueryApiUrl%%/ui.igBulletGraph#options:endValue)) and color ([`brush`](%%jQueryApiUrl%%/ui.igBulletGraph#options:brush)). 
	
	For this example, configure 3 comparative ranges, each of a different shade of gray, starting at the 0, 15, and 30 tick marks of the scale, respectively.
	
	**In HTML:**

	```html
	$("#bulletGraph").igBulletGraph({
		…
	    ranges: [{
	        name: 'range1',
	        startValue: 0,
	        endValue: 15,
	        brush: '#DCDCDC'
	    },
	    {
	        name: 'range2',
	        startValue: 15,
	        endValue: 30,
	        brush: '#A9A9A9'
	    },
	    {
	        name: 'range3',
	        startValue: 30,
	        endValue: 55,
	        brush: '#808080'
	    }
	    ]
	});
	```
	
	The final look of the graph is presented below.
	
	![](images/igBulletGraph_Adding_igBulletGraph_to_an_HTML_Page_1.png)



### <a id="full-code"></a>Full code

Following is the full code for this procedure.

**In HTML:**

```html
<!DOCTYPE html>
<html>
<head>
	<!-- %%ProductName%% Required Combined CSS Files -->
	<link href="../../igniteui/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
	<link href="../../igniteui/css/structure/infragistics.css" rel="stylesheet"/>
	<script type="text/javascript" src="../../js/jquery.min.js"></script>
	<script type="text/javascript" src="../../js/jquery-ui.js"></script>
	<!-- Bullet Graph Required JavaScript Files -->
	<script src="../../igniteui/js/modules/infragistics.util.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.util.jquery.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_core.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_collections.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ext_ui.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_jquerydom.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_core.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.dv_geometry.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ui.widget.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.bulletgraph.js" type="text/javascript"></script>
	<script src="../../igniteui/js/modules/infragistics.ui.bulletgraph.js" type="text/javascript"></script>
        <script type="text/jscript">
        $(function () {             
            $("#bulletGraph").igBulletGraph({
                width: "300px",
                height: "70px",
                minimumValue: "5",
                maximumValue: "55",
                value:"35",
                targetValue:"43",
                ranges: [{
                    name: 'range1',
                    startValue: 0,
                    endValue: 15,
                    brush: '#DCDCDC'
                },
                {
                    name: 'range2',
                    startValue: 15,
                    endValue: 30,
                    brush: '#A9A9A9'
                },
                {
                    name: 'range3',
                    startValue: 30,
                    endValue: 55,
                    brush: '#808080'
                }
                ]
            });
        });
    </script>
</head>
<body>
    <!-- Target element for the igBulletGraph -->
      <div id="bulletGraph"></div>
</body>
</html>
```



## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding *igBulletGraph* to an ASP.NET MVC Application](igBulletGraph-Adding-Using-the-MVC-Helper.html): This topic demonstrates, with code examples, how to add the igBulletGraph control to an ASP.NET MVC View using the ASP.NET MVC helper.

- [jQuery and ASP.NET MVC Helper API Links (*igBulletGraph*)](igBulletGraph-API-Links.html): This topic provides links to the API reference documentation about the `igBulletGraph` control and the ASP.NET MVC Helper for it.



### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

- [Basic Configuration](%%SamplesUrl%%/bullet-graph/basic-configuration): This sample demonstrates a simple configuration of the `igBulletGraph` control.