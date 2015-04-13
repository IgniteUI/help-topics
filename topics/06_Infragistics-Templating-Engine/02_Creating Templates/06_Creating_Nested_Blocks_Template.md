<!--
|metadata|
{
    "fileName": "creating-nested-blocks-template",
    "controlName": "igTemplating Engine",
    "tags": ["How Do I","Templating"]
}
|metadata|
-->

# Creating a Nested Blocks Template



## Topic Overview
### Purpose

This topic demonstrates how to create nested blocks template using the templating engine

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [Adding Templating Engine References](Adding-igTemplating-References.html): This topic gives information on what is the minimal set of necessary Java Script files to start using the templating engine

- [Templating Engine Overview](igTemplating-Overview.html): This topic contains information regarding the features supported by the templating Engine


### In this topic

This topic contains the following sections:

-   [Creating a Nested Blocks Template](#creating-nested-blocks)
    -   [Introduction](#introduction)
    -   [Preview](#preview)
    -   [Prerequisites](#prerequisites)
    -   [Steps](#steps)
-   [Related Content](#related-content)



## <a id="creating-nested-blocks"></a>Creating a Nested Blocks Template
### <a id="introduction"></a>Introduction

In this example a nested block template is created and the result is appended to an html table.

### <a id="preview"></a>Preview

The following screenshot demonstrates how nested properties are combined into two groups – Name and Age, while in the data source they are three – `firstName`, `lastName` and `age`. The templating engine iterates through each item into `teamMembers` array. As a result of applying the nested blocks template implemented in this example.

![](images/%28Walkthrough%29Creating_Nested_Blocks_Template_1.png)

### <a id="prerequisites"></a>Prerequisites

To complete the procedure you need the following:

-   An empty html page with reference to the minimal set of needed js files for the templating engine. (For details, refer to [Adding igTemplating References](Adding-igTemplating-References.html) )

### <a id="steps"></a>Steps

The following steps demonstrate how to create basic substitution template.

1.  Add and apply the row template using templating engine

	1. Add sample data and row template to the page:
	
		**In JavaScript:**
		
		```js
		<script type="text/javascript">
		var team = [{
		      teamMembers: [
		         { firstName: "Joseph", lastName: "Sommers", age: 35 },
		         { firstName: "Anna ", lastName: "Paterson", age: 25}, 
		         { firstName: "Mark", lastName: "Smith", age: 40}      ]
		}];
		var template = '{{each ${teamMembers} }}' +
		'<tr><td><b>Name: </b>${teamMembers.firstName} ${teamMembers.lastName}</td>' +'<td><b>Age: </b>${teamMembers.age}</td></tr>' +
		'{{/each}}';
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
		      var result = $.ig.tmpl(template, team);
		      $('#resultTable').html(result);
		});
		</script>
		```

2.  (Optional) Verify the result

	Save the file and double click to preview the result


## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Templating Engine Overview](igTemplating-Overview.html): This topic lists the topics with all the information related to the IG Template Engine

- [Creating Basic Substitution Template](Creating-Basic-Substitution-Template.html): This topic exposes a walkthrough how to create basic substitution template using IG Template engine

- [Creating Basic Conditional Template](Creating-Basic-Conditional-Template.html): This topic exposes a walkthrough how to create basic conditional template using IG Template engine

- [Creating Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html): This topic exposes a walkthrough how to create complex property substitution template using IG Template engine

- [Creating Conditional Template Containing a Default Statement](Creating-Conditional-Template-Containing-Default-Statement.html): This topic exposes a walkthrough how to create conditional template with default statement using IG Template engine

- [Creating Multi-Conditional Template with Default Statement](Creating-Multi-Conditional-Template-Containing-Default-Statement.html): This topic exposes a walkthrough how to create multi-conditional template with default statement using IG Template Engine

- [Creating Alternative Row Template](Creating-an-Alternating-Rows-Template-%28igTemplating%29.html): This topic exposes a walkthrough how to create alternative row template using IG Template engine



### Samples

The following samples provide additional information related to this topic.

- [Nested Templates](%%SamplesUrl%%/templating-engine/nested-templates): This sample demonstrates how nested templates are possible using the Infragistics Templating Engine. In the following scenario each feature of the Infragistics Templating Engine is used to iterate through the movies collection from the data source and unordered list is created as an output in the last column.





 

 


