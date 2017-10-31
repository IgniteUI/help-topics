<!--
|metadata|
{
    "fileName": "igqrcodebarcode-adding-to-an-html-page",
    "controlName": "igBarcode",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# Adding igQRCodeBarcode to an HTML Page

## Topic Overview
### Purpose

This topic demonstrates, with code examples, how to add the `igQRCodeBarcode`™ control to an HTML page.

### Required background

The following topics are prerequisites to understanding this topic:

- [igQRCodeBarcode Overview](igQRCodeBarcode-Overview.html): This topic provides conceptual information about the `igQRCodeBarcode` control including its main features and minimum requirements.


### In this topic

This topic contains the following sections:

-   [Adding igQRCodeBarcode to an HTML Page – Conceptual Overview](#overview)
    -   [Adding igQRCodeBarcode summary](#summary)
    -   [Requirements](#requirements)
    -   [Steps](#steps)
-   [Adding igQRCodeBarcode to an HTML Page – Procedure](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Preview](#procedure-preview)
    -   [Prerequisites](#procedure-prerequisites)
    -   [Steps](#procedure-steps)
    -   [Full code](#procedure-code)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a>Adding igQRCodeBarcode to an HTML Page – Conceptual Overview
### <a id="summary"></a>Adding igQRCodeBarcode summary

To add `igQRCodeBarcode` control to a web page requires an HTML element, a `<div>` to serve as the base for instantiation. The basic configuration of `igQRCodeBarcode` requires providing a value for the data option (to feed the control with the data to display) along with setting values for its width and height.

### <a id="requirements"></a>Requirements

The following table summarizes the requirements for using the `igQRCodeBarcode` control.

<table class="table table-bordered">
	<thead>
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
	</thead>
	<tbody>
        

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
General `igQRCodeBarcode` JavaScript Resources
			</td>

            <td>
                The igQRCodeBarcode control depends on functionality distributed across several files in the %%ProductName%% Library. You can load the required resources in one of the following ways:

                <ul>
                    <li>
Use the Infragistics® Loader (`igLoader`™). You only need to include a script reference to `igLoader` on your page.
					</li>

                    <li>
Load the required resources manually. You need to use the dependencies listed in the table below.
					</li>

                    <li>
Load the two combined files, containing the logic for all data visualization controls from the %%ProductName%% package - `infragistics.core.js`, `infragistics.dv.js`.
					</li>
                </ul>

                The following table lists the %%ProductName%% library dependences related to the igQRCodeBarcode control. These resources need to be referred to explicitly if you chose not to use `igLoader` or
                    the combined files.

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
`infragistics.util.js`<br/>
`infragistics.util.jquery.js`
			                </td>

                            <td>
%%ProductName%% utilities
			                </td>
                        </tr>
                        
                        <tr>
                            <td>
`infragistics.ui.widget.js`
                            </td>
                            <td>
Common widget
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
`infragistics.dv_core.js`<br/>
`infragistics.dv_jquerydom.js`<br/>
`infragistics.ext_core.js`<br/>
`infragistics.ext_collection.js`<br/>
`infragistics.ext_collectionsextended.js`<br/>
`infragistics.ext_text.js`<br/>
`infragistics.ext_ui.js`
                            </td>
                            <td>
Data visualization core functionality
                            </td>
                        </tr>

                        <tr>
                            <td>
`infragistics.dv.simple.core.js`
			                </td>

                            <td>
A shared library for data visualization components
			                </td>
                        </tr>
                        
                        <tr>
                            <td>
`infragistics.encoding.core.js`<br/>
`infragistics.encoding_<encoding-name>.js`
                            </td>
                            <td>
Character encodings.  The various supported encodings can be found under the %%ProductName%%™ package folder structure:<br/> /modules/encoding<br/><br/>Please see the [Configuring the Character Encoding](igQRCodeBarcode_Configuring_the_Character_Encoding.html) topic for more detail.
                            </td>
                        </tr>

                        <tr>
                            <td>
`infragistics.barcode_core.js`<br/>
`infragistics.barcode_qrcodebarcode.js`
			                </td>

                            <td>
The `igQRCodeBarcode` control
			                </td>
                        </tr>

                        <tr>
                            <td>
`infragistics.ui.qrcodebarcode.js`
			                </td>

                            <td>
The `igQRCodeBarcode` widget
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

                    <li>
A reference to the combined files and optionally to the file containing the encodings.
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



### <a id="steps"></a>Steps

Following are the general conceptual steps for adding `igQRCodeBarcode` to an HTML Page.

1. Creating the target element for storing the `igQRCodeBarcode` control

2. Instantiating the `igQRCodeBarcode` control

3. Configuring the basic rendering options



## <a id="procedure"></a>Adding igQRCodeBarcode to an HTML Page – Procedure
### <a id="procedure-introduction"></a>Introduction

This procedure adds an instance of `igQRCodeBarcode` to an HTML page and configures its basic options - data, width and height. The string data to encode is http://www.infragistics.com. The procedure presumes the required resources are added to the header of the HTML page, so it instantiates the `igQRCodeBarcode` control in the document ready event to prevent any errors due to DOM being not fully loaded.

### <a id="procedure-preview"></a>Preview

The following screenshot is a preview of the result.

![](images/igQRCodeBarcode_Adding_igQRCodeBarcode_to_an_HTML_Page_1.png)

### <a id="procedure-prerequisites"></a>Prerequisites

To complete the procedure, you need the required JavaScript and CSS files referenced on the HTML page.

**In HTML:**

```html
<!DOCTYPE html>
<html>
<head>
      <!-- %%ProductName%%  CSS File -->
      <link href="../../igniteui/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
      
      <script type="text/javascript" src="../../js/jquery.min.js"></script>
      <script type="text/javascript" src="../../js/jquery-ui.js"></script>
      
      <!-- %%ProductName%% Required Common JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.util.js"></script>
      <script src="../../igniteui/js/modules/infragistics.util.jquery.js"></script>
      <script src="../../igniteui/js/modules/infragistics.dv.simple.core.js"></script>      
      
      <!-- QR Code Barcode Specific JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.barcode_qrcodebarcode.js"></script>
      <script src="../../igniteui/js/modules/infragistics.ui.barcode.js"></script>
</head>
<body>
</body>
</html>
```

### <a id="procedure-steps"></a>Steps

Follow these steps to add an `igQRCodeBarcode` to an HTML page.

1. Create the target element for storing the `igQRCodeBarcode` control.
    
	Create a `<div>` element within the HTML body on which to instantiate the `igQRCodeBarcode` control.
	
	**In HTML:**
	
	```html
	<body>
	    <!-- Target element for the igQRCodeBarcode -->
	    <div id="barcode"></div>
	</body>
	```

2. Instantiate the `igQRCodeBarcode` control.

	Use the selector of the target element defined in step 1 to instantiate the `igQRCodeBarcode` control.
	
	**In HTML:**
	
	```html
	<script type="text/jscript">
	    $(function () {                        
	              $("#barcode").igQRCodeBarcode({
	        });
	        });
	</script>
	```

3. Configure the basic rendering options.

	When instantiating the `igQRCodeBarcode`, configure the data, width, and height options.
	
	**In HTML:**
	
	```html
	$("#barcode").igQRCodeBarcode({
                width: "200px",
                height: "200px",
                data: "http://www.infragistics.com"
    });
	```



### <a id="procedure-code"></a>Full code

Following is the full code for this procedure.

**In HTML:**

```html
<!DOCTYPE html>
<html>
<head>
      <!-- %%ProductName%%  CSS File -->
      <link href="../../igniteui/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
      
      <script type="text/javascript" src="../../js/jquery.min.js"></script>
      <script type="text/javascript" src="../../js/jquery-ui.js"></script>
      
      <!-- %%ProductName%% Required Common JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.util.js"></script>
      <script src="../../igniteui/js/modules/infragistics.util.jquery.js"></script>
      <script src="../../igniteui/js/modules/infragistics.dv.simple.core.js"></script>
      
      <!-- QR Code Barcode Specific JavaScript Files -->
      <script src="../../igniteui/js/modules/infragistics.barcode_qrcodebarcode.js"></script>
      <script src="../../igniteui/js/modules/infragistics.ui.barcode.js"></script>
      
      <script type="text/jscript">
        $(function () {                        
                  $("#barcode").igQRCodeBarcode({
                        width: "200px",
                        height: "200px",
                        data: "http://www.infragistics.com"
            });            
        });
      </script>
</head>
<body>
      <div id="barcode"></div>      
</body>
</html>
```



## <a id="related-content"></a>Related Content
### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

- [Adding igQRCodeBarcode to an ASP.NET MVC Application](igQRCodeBarcode-Adding-Using-the-MVC-Helper.html): This topic demonstrates, with code examples, how to add the `igQRCodeBarcode` control to an ASP.NET MVC View using the ASP.NET MVC helper.

- [jQuery and ASP.NET MVC Helper API Links (igQRCodeBarcode)](igQRCodeBarcode-API-Links.html): This topic provides links to the API reference documentation about the `igQRCodeBarcode` control and the ASP.NET MVC Helper for it.



### <a id="samples"></a>Samples

The following sample provides additional information related to this topic.

- [Basic Configuration](%%SamplesUrl%%/barcode/basic-configuration): This sample demonstrates a basic configuration of the `igQRCodeBarcode` control.