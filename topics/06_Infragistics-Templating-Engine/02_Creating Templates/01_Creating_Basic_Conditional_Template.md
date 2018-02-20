<!--
|metadata|
{
    "fileName": "creating-basic-conditional-template",
    "controlName": "igTemplating Engine",
    "tags": ["How Do I","Templating"]
}
|metadata|
-->

# Creating a Basic Conditional Template

## <a id="topic-overview"></a>Topic Overview
### <a id="purpose"></a>Purpose

This topic demonstrates how how to create basic conditional template using the templating engine.

### <a id="required-background"></a>Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [Adding Templating Engine References](Adding-igTemplating-References.html): This topic gives information on what is the minimal set of necessary Java Script files to start using the templating engine

- [Templating Engine Overview](igTemplating-Overview.html): This topic contains information regarding the features supported by the templating Engine

### In this topic

This topic contains the following sections:

-   [Topic Overview](#topic-overview)
    -   [Purpose](#purpose)
    -   [Required Background](#required-background)
-   [Creating a Basic Conditional Template](#basic-traditional-template)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
- [Creating igGrid with basic conditional template using the IgniteUI CLI](#adding-using-CLI)
-   [Related Content](#related-content)


## <a id="basic-traditional-template"></a>Creating a Basic Conditional Template
### <a id="introduction"></a>Introduction

In this example basic substitution template is created and the result is appended to a html table

### <a id="preview"></a>Preview

The following screenshot is a preview of the final result. In this example records with age value less than 21 are not shown. In the particular example, there are three records into the data source, but only two are rendered as a result.

![](images/%28Walkthrough%29Creating_Basic_Conditional_Template_1.png)

### <a id="prerequisites"></a>Prerequisites

To complete the procedure you need the following:

-   An empty html page with reference to the minimal set of needed js files for the `templating engine`. (For details, refer to [Adding igTemplating References](Adding-igTemplating-References.html) )

### <a id="steps"></a>Steps

The following steps demonstrate how to create basic conditional template.

1.  Add and apply the row template using IG Template Engine

	1. Add sample data and row template to the page:
	
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		var employees = [
		{ firstName: "Joseph", lastName: "Sommers", age: 17 },
		{  firstName: "Anna", lastName: "Paterson", age: 25}, 
		{  firstName: "Mark", lastName: "Smith", age: 22}];
		var template = '{{if ${age} > 21 }} <tr><td><b>First Name: </b>${firstName}</td><td><b>Last Name: </b>${lastName}</td><td><b>Age: </b>${age}</td></tr> {{/if}}';
		</script>
		```
		
		**In HTML:**
		
		```html
		<body>
		<table id="resultTable" style="border: 1px solid #000;"></table>
		</body>
		```
	
	2. Apply the template and append the result to the html table
	
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

	Save the file and double click to preview the result. According to the applied check into the template only two rows should be rendered, as the third row has value into the age property lower than 21

## <a id="adding-using-CLI"></a> Creating igGrid with basic conditional template using the IgniteUI CLI
The easiest way to create an igGrid with basic conditional template configured is via the Ignite UI CLI. 
To install the Ignite UI CLI:
```
npm install -g igniteui-cli
```
Once the Ignite UI CLI is installed the commands for generating an Ignite UI project, adding a new igGrid component with basic conditional template, building and serving the project are as following:
```
ig new <project name>
cd <project name>
ig add grid-templating newGridTemplating
ig start
```
   
This command will add a new igGrid with templating configured, same as the one demonstrated in our [Conditional Templates](%%SamplesUrl%%/templating-engine/conditional-templates) sample.
 
 For more information and the list of all available commands read the [Using Ignite UI CLI](Using-Ignite-UI-CLI.html) topic.



## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Templating Engine Overview](igTemplating-Overview.html): This topic lists the topics with all the information related to the IG Template Engine

- [Creating an Alternating Rows Template](Creating-an-Alternating-Rows-Template-%28igTemplating%29.html): This topic demonstrates how to create alternative row template using the templating engine

- [Creating a Basic Substitution Template](Creating-Basic-Substitution-Template.html): This topic demonstrates how to create basic substitution template using the templating engine.

- [Creating a Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html): This topic demonstrates how to create complex property substitution template using the templating engine.

- [Creating a Conditional Template Containing a Default Statement](Creating-Conditional-Template-Containing-Default-Statement.html): This topic demonstrates how to create conditional template containing a default statement using the templating engine

- [Creating a Multi-Conditional Template Containing a Default Statement](Creating-Multi-Conditional-Template-Containing-Default-Statement.html): This topic demonstrates, with code examples, how to create multi-conditional template containing a default statement using the templating engine.

- [Creating a Nested Blocks Template](Creating-Nested-Blocks-Template.html): This topic demonstrates how to create nested blocks template using the templating engine

### Samples

The following samples provide additional information related to this topic.

- [Conditional Templates](%%SamplesUrl%%/templating-engine/conditional-templates): This sample demonstrates how conditional cell templates are used in a grid using the Infragistics Template Engine. In the following scenario, cells under the Unit Price column have an image arrow up/down. For the purpose of this sample, the ‘Delta Price’ column is created dynamically and is hidden from the user. The up/down images are applied according to the values in hidden column when compared to the values in the Unit Price column. The Infragistics Templating Engine is comparing the values in the Delta Price and Unit Price columns. If the value Delta Price column is greater than the Unit Price value then a green up arrow is rendered, otherwise a red down arrow is rendered in the grid.