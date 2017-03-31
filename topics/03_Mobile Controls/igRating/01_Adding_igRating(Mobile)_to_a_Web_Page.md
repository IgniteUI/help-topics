<!--
|metadata|
{
    "fileName": "adding-igrating(mobile)-to-a-web-page",
    "controlName": "igRatingMobile",
    "tags": ["Data Presentation","Getting Started"]
}
|metadata|
-->

# Adding igRating (Mobile) to a Web Page

## Topic Overview

### Purpose

This topic explains how you can add `igRating`™ mobile control to a web page.

### Required background

- Concepts
	- jQuery Mobile framework
- Topics
	- [igRating Overview](igRating%28Mobile%29-Overview.html): The topic that introduces the user to the `igRating`™ control’s main features and functionality.
- External Resources
	- [jQuery Mobile Events](http://jquerymobile.com/demos/1.1.0-rc.1/docs/api/events.html)


### In this topic

This topic contains the following sections:

-   [**Adding igRating to a Web Page**](#adding)
    -   [Overview](#adding-overview)
    -   [Steps](#adding-steps)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="adding"></a> Adding igRating to a Web Page

This procedure guides you through the process of adding an `igRating` control to a web page. You have the option of instantiating the control in several ways. This topic demonstrates the typical jQuery UI method, the jQuery mobile method (by using attributes) and instantiating the control using the MVC Rating wrapper.

### Preview

The following screenshot is a preview of the final result.

![](images/02_igRatingAdding_1.png)

### <a id="adding-overview"></a> Overview

This topic takes you step-by-step toward adding the `igRating` control to a web page. The following is a conceptual overview of the process:

1. [Reference the required JavaScript and CSS files](#reference-resources)
2. [Instantiate igRating](#instantiate-igListView)

### <a id="adding-steps"></a> Steps

The following steps demonstrate how to add the `igRating` control to a web page.

1. Reference the required JavaScript and CSS files <a id="reference-resources"></a>

	You can add the required files by two ways, one is by using individual scripts and the other is by using the [Infragistics loader component](Using-Infragistics-Loader.html).
	
	The recommended approach to instantiating the rating control is to use the loader. The following code listings will demonstrate how to work with the loader manually as well as interfacing with the loader component.
	
	1. Reference using individual files
	
		**In HTML:**
		
		```html
		<link rel="stylesheet" href="jquery.mobile.structure.min.css" />
		<link rel="Stylesheet" href="infragistics.mobile.theme.css" />
		<link rel="Stylesheet" href="infragistics.mobile.rating.css" />
		    
		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="jquery.mobile.min.js"></script>
		<script type="text/javascript" src="infragistics.mobileui.rating.js"></script>
		```

	2. Reference using Infragistics loader
	
		**In HTML:**
		
		```html
		<link rel="stylesheet" href="jquery.mobile.structure.min.css" />
		<script type="text/javascript" src="jquery.min.js"></script>
		<script type="text/javascript" src="jquery.mobile.min.js"></script>
		<script type="text/javascript" src="infragistics.mobile.loader.js"></script>
		```
		
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		    $.ig.loader({
		        scriptPath: "../js/",
		        cssPath: "../css/",
		        resources: "igmRating",
		        theme: "ios"
		    });
		</script>
		```

2. Instantiate `igRating` <a id="instantiate-igListView"></a>
	1. Instantiate through markup

		If you want to initialize the `igRating` control on a web page with markup only, then you must declare a HTML DIV element and define the appropriate attributes and the accompanying %%ProductName%% files will initialize the widget behind the scenes.
		
		To define the required attributes, use HTML 5 `data-*` attributes to set all the initial settings of the `igRating` control.
		
		The `data-role` attribute defines the control which will wrap the HTML element. At the same time the other options customize the `igRating` control’s appearance and behavior.
		
		**In HTML:**
		
		```html
		<div id="igRating1"
		    data-role="igrating"
		    data-value="2"
		    data-vote-count="5"
		    data-read-only="false">
		</div>
		```

	2. Instantiate in JavaScript
	
		​i. Define DIV HTML placeholder
		
		**In HTML:**
		
		```html
		<div id="igRating"></div>
		```
		
		​ii. JavaScript initialization code
		
		If you are using the Infragistics loader component then you can put code from the following code inside the loader’s callback function:
		
		**In JavaScript:**
		
		```js
		$.ig.loader(function () {
		/*Initialization code here*/
		});
		```
		
		If you are referencing individual files then you can bind to jQuery Mobile `pageinit` event as demonstrated by the following code listing:
		
		**In JavaScript:**
		
		```js
		$(document).bind({ pageinit: function () {
		    $("#igRating1").igRating({
		        value: 2,
		        voteCount: 5,
		        readOnly: false
		    });
		}});
		```
	
	3.  Instantiate in MVC using Razor syntax
	
		**In C#:**
		
		```csharp
		@(Html
		    .InfragisticsMobile()
		    .Rating()
		    .ID("igRating1")
		    .Value(2)
		    .VoteCount(5)
		    .ReadOnly(false)
		    .Render()
		)
		```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igRating Mobile Overview](igRating%28Mobile%29-Overview.html): This topic introduces the user to the `igRating` control’s main features.

- [Data Attributes Reference](igRating-Data-Attributes-Reference.html): This topic lists all `igRating`™ data attributes. You can use these attributes to initialize `igRating` in markup.

- [Known Issues and Limitations](igRating%28Mobile%29-Known-Issues.html): This topic demonstrates the known issues for the mobile `igRating` control.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/mobile-rating/basic-usage): Sample that shows you how to initialize the `igRating` Mobile.





 

 


