<!--
|metadata|
{
    "fileName": "creating-conditional-template-containing-default-statement",
    "controlName": "igTemplating Engine",
    "tags": ["How Do I","Templating"]
}
|metadata|
-->

# Creating a Conditional Template Containing a Default Statement(igTemplating)


## Topic Overview
### Purpose

This topic demonstrates, with code examples, how to create multi-conditional template with default statement using the templating engine.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [Adding Templating Engine References](Adding-igTemplating-References.html): This topic gives information on what is the minimal set of necessary Java Script files to start using the templating engine

- [Templating Engine Overview](igTemplating-Overview.html): This topic contains information regarding the features supported by the templating Engine



### In this topic

This topic contains the following sections:

-   [Creating a Conditional Template with Default Statement](#conditional-template-default-statement)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
-   [Related Content](#related-content)



## <a id="conditional-template-default-statement"></a>Creating a Conditional Template Containing a Default Statement
### <a id="introduction"></a>Introduction

In this example a conditional template with default statement is created and the result is appended to an html table. In the following example there is check if the age value is below 17, or between 18 and 21. And according to that check two different styles are applied.

### <a id="preview"></a>Preview

The following screenshot is a preview of the final result. In this example the rows with age value below 17 are with red background, these with age value between 18 and 21 have yellow background and there is default statement which does not apply any extra styles.

![](images/%28Walkthrough%29Creating_Conditional_Template_With_Default_Statement_1.png)

### <a id="prerequisites"></a>Prerequisites

To complete the procedure you need the following an empty html page with reference to the minimal set of needed js files for the templating engine.

For details, refer to the [Adding igTemplating References](Adding-igTemplating-References.html) topic.

### <a id="steps"></a>Steps

The following steps demonstrate how to create a conditional template.

1.  Add and apply the row template using the templating engine

	1. Add a CSS class for the attention row:
		
		**In JavaScript:**
		
		```js
		<style type="text/css">
		      .rowCriticalAttention
		      {
		            font-weight:bold;
		            background-color: #FF7283;
		      }
		</style>
		```
	
	2. Add sample data and a row template to the page:
	
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		var employees = [
		{ firstName: "Joseph", lastName: "Sommers", age: 17 },
		{  firstName: "Anna", lastName: "Paterson", age: 25}, 
		{  firstName: "Mark", lastName: "Smith", age: 22}];
		var template = '{{if ${age} < 21 }} <tr class="rowCriticalAttention">' +
		'<td><b>First Name: </b>${firstName}</td>' +
		'<td><b>Last Name: </b>${lastName}</td>' +
		'<td><b>Age: </b>${age}</td></tr>' +
		'{{else}}' +
		'<tr><td><b>First Name: </b>${firstName}</td>' +
		'<td><b>Last Name: </b>${lastName}</td>' +
		'<td><b>Age: </b>${age}</td></tr>' +
		'{{/if}}';
		</script>
		```
		
		**In HTML:**
		
		```html
		<body>
		<table id="resultTable" style="border: 1px solid #000;"></table>
		</body>
		```
	
	3. Apply the template and append the result to the html table:
	
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		$(document).ready(function () {
		      var result = $.ig.tmpl(template, employees);
		      $('#resultTable').html(result);
		});
		</script>
		```

2.  (Optional) Verify the result

	Save the file and double click on the html file to preview the result.



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Creating an Alternating Rows Template](Creating-an-Alternating-Rows-Template-%28igTemplating%29.html): This topic demonstrates how to create alternative row template using the templating engine.

- [Creating a Basic Conditional Template](Creating-Basic-Conditional-Template.html): This topic demonstrates how to create basic conditional template using the templating engine.

- [Creating a Basic Substitution Template](Creating-Basic-Substitution-Template.html): This topic demonstrates how to create basic substitution template using the templating engine.

- [Creating a Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html): This topic demonstrates how to create complex property substitution template using the templating engine.

- [Creating a Nested Blocks Template](Creating-Nested-Blocks-Template.html): This topic demonstrates how to create nested blocks template using the templating engine.



### Samples

The following samples provide additional information related to this topic.

- [Conditional Templates](%%SamplesUrl%%/templating-engine/conditional-templates): This sample demonstrates how conditional cell templates are used in a grid using the Infragistics Template Engine. In the following scenario, cells under the Unit Price column have an image arrow up/down. For the purpose of this sample, the ‘Delta Price’ column is created dynamically and is hidden from the user. The up/down images are applied according to the values in hidden column when compared to the values in the Unit Price column. The Infragistics Templating Engine is comparing the values in the Delta Price and Unit Price columns. If the value Delta Price column is greater than the Unit Price value then a green up arrow is rendered, otherwise a red down arrow is rendered in the grid.





 

 


