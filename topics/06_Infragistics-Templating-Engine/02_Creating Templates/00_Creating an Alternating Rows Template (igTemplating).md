<!--
|metadata|
{
    "fileName": "creating-an-alternating-rows-template-(igtemplating)",
    "controlName": "igTemplating Engine",
    "tags": ["How Do I","Templating"]
}
|metadata|
-->

# Creating an Alternating Rows Template (igTemplating)


## <a id="topic-overview"></a>Topic Overview
### <a id="purpose"></a>Purpose

This topic demonstrates how to create alternative row template using the templating engine.

### <a id="required-background"></a>Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [Adding Templating Engine References](Adding-igTemplating-References.html): This topic gives information on what is the minimal set of necessary Java Script files to start using the templating engine

- [Templating Engine Overview](igTemplating-Overview.html): This topic contains information regarding the features supported by the templating Engine

### In this topic

This topic contains the following sections:

-   [Topic Overview](#topic-overview)
    -   [Purpose](#purpose)
    -   [Required Background](#required-background)
-   [Creating an Alternative Row Template](#creating-alternative-row-template)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
-   [Related Content](#relates-content)



## <a id="creating-alternative-row-template"></a>Creating an Alternating Rows Table Template
### <a id="introduction"></a>Introduction

In this example basic substitution template is created and the result is appended to a html table.

### <a id="preview"></a>Preview

The following screenshot is a preview of the final result.

![](images/%28Walkthrough%29Creating_Alternative_Row_Template_1.png)

### <a id="prerequisites"></a>Prerequisites

To complete the procedure you need the following:

-   An empty html page with reference to the minimal set of needed js files for the `templating engine`. (For details, refer to [Adding igTemplating References](Adding-igTemplating-References.html) )

### <a id="steps"></a>Steps

The following steps demonstrate how to create an alternating rows  template.

1.  Add and apply the row template using the `templating engine`

	1. Add a CSS class for the attention row:
	
		**In JavaScript:**
		
		```js
		<style type="text/css">
		      .alternateRow
		      {
		            background-color: #C0C0C0;
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
		{  firstName: "Mark", lastName: "Smith", age: 22},
		{  firstName: "John", lastName: "Rider", age: 35}];
		var template = '{{if $i%2 == 0 }}' +
		'<tr><td><b>First Name: </b>${firstName}</td>' + '<td><b>Last Name: </b>${lastName}</td>' +'<td><b>Age: </b>${age}</td></tr>' +
		'{{else}}' +
		'<tr class="alternateRow">' +'<td><b>First Name: </b>${firstName}</td>' +'<td><b>Last Name: </b>${lastName}</td>' +'<td><b>Age: </b>${age}</td></tr>'+
		'{{/if}}';
		</script>
		```
		
		**In HTML:**
		
		```html
		<body>
		<table id="resultTable" style="border: 1px solid #000;"></table>
		</body>
		```
		
		​3. Apply the template and append the result to the html table:
		
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

	Save the file and double click to preview the result. According to the applied condition the even rows will have `alternativeRow` class applied



## <a id="relates-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Infragistics Templating Engine](Infragistics-Templating-Engine.html): This topic lists the topics with all the information related to the `templating engine`.

- [Creating a Basic Conditional Template](Creating-Basic-Conditional-Template.html): This topic exposes a walkthrough how to create basic conditional template using the `templating engine`.

- [Creating a Basic Substitution Template](Creating-Basic-Substitution-Template.html): This topic exposes a walkthrough how to create basic substitution template using the `templating engine`.

- [Creating a Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html): This topic demonstrates how to create complex property substitution template using the `templating engine`.

- [Creating a Conditional Template Containing a Default Statement](Creating-Conditional-Template-Containing-Default-Statement.html): This topic exposes a walkthrough how to create conditional template with default statement using the `templating engine`.

- [Creating a Multi-Conditional Template Containing a Default Statement](Creating-Multi-Conditional-Template-Containing-Default-Statement.html): This topic demonstrates, with code examples, how to create multi-conditional template with default statement using the `templating engine`.

- [Creating a Nested Blocks Table Template](Creating-Nested-Blocks-Template.html): This topic exposes a walkthrough how to create nested blocks template using the `templating engine`.





 

 


