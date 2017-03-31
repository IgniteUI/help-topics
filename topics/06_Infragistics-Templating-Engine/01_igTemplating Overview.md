<!--
|metadata|
{
    "fileName": "igtemplating-overview",
    "controlName": "igTemplating Engine",
    "tags": ["Getting Started","Templating"]
}
|metadata|
-->

# Templating Engine Overview

## Topic Overview
### Purpose

This topic is an overview of the options and features the templating engine exposes to the developer.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [**Adding Templating Engine References**](Adding-igTemplating-References.html): This topic gives information on what is the minimal set of necessary Java Script files to start using the templating engine.



### In this topic

This topic contains the following sections:

-   [Main Features](#main-feature)
    -   [Scalar Property output (Substitution)](#scalar-property)
    -   [Nested property output (Substitution)](#nested-property)
    -   [Block if tag](#block-if-tag)
    -   [Block if -else tag](#block-if-else-tag)
    -   [Block if –elseif - else tag](#block-if-elseif-else-tag)
    -   [Block each tag](#block-each-tag)
    -   [Index](#index)
    -   [Data](#data)
    -   [Comments](#comments)
-   [Related Content](#related-content)



## <a id="main-feature"></a>Main Features
### Features Overview

The following table summarizes the main features of the templating engine. Additional details are available after following the summary table.

**Legend:**

*Condition –* Conditional (a statement or expression in computer programming languages). It might have two possible values – true and false.

**Feature** | **Syntax** | **Description**
---|---|---
Scalar Property output (Substitution) | `${property }` | Variable output
Nested property output (Substitution) | `${parent.property }` | Variable output of nested properties
Block **if** tag | `{{if Condition }}` <br> Do Something <br> `{{/if}}` | Conditional, with a **then** branch, where Do Something is the template applied in that case
Block **if- else** tag | `{{if Condition}}` <br>  Do Something <br> `{{else}}` Do Something Else {{/if}} | Conditional, with **then** and **otherwise** branches.
Block **if-elseif-else** tag | `{{if Condition}}` <br> Do Something <br> `{{elseif Condition }}` <br> Do Something Else <br> `{{else}}` <br> Do default stuff <br> `{{/if}}` | Conditional, with then and multiple **otherwise** branches along with a default branch at the end.
Block **each** tag | `{{each movies }} ${movies.name} {{/each}}` | Iteration and output of the nested property(-ies).
Index | `$i` | Reserved key word to access the index of the current iteration on the data members.
Data | `$data` | Reserved key word to access the data of the current iteration on the data members.
Comments | #That comment will be ignored# `$i` | Comments start with **#** and finish with the **#** sign and are ignored from the template engine.


**When applying a template the result is of type String.**

>Keep in mind, that when using Infragistics Template Engine for applying a template on a data, the result is of type string. That means in all of the samples below the variable the result is a string.

### <a id="scalar-property"></a>Scalar Property output (Substitution)

The templating engine recognizes defined property names, the values of which are replaced by the corresponding property values in the data provided.

**Example**:

**In JavaScript:**

```js
data = [{prop: ‘Value’}] 
$.ig.tmpl(‘${prop}’, data) 
```

**Result:** Value

#### Related Topics:

-   [Creating a Basic Substitution Template](Creating-Basic-Substitution-Template.html)

### <a id="nested-property"></a>Nested property output (Substitution)

The templating engine recognizes children properties of the parent property, the values of which are replaced by the corresponding property values in the data provided.

**Example:**

**In JavaScript:**

```js
var data = [{parent: {child1: 'Val', child2: 'Val2'}}];
var result = $.ig.tmpl('${parent.child2}', data);
```

**Result:** Val2

#### Related Topics:

-   [Creating a Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html)

### <a id="block-if-tag"></a>Block if tag

The templating engine recognizes complete or opened and closed conditional blocks defined in the template. The syntax is `{{if Condition}}` Do Something `{{/if}}`

>**Note:** List of blocks is not supported. Keep in mind that list of blocks are not supported, which means the following - “`{{if *Condition1* }}` Do Something `{{/if}} {{if *Condition2* }}` Do Something else `{{/if}}`” is not a correctly defined block.

**Example:**

**In JavaScript:**

```js
var data = [{ Value: 1, Text:"Value1"},{ Value: 2, Text:"Value2"}];
var result = $.ig.tmpl('{{if ${Value} === 2}} ${Text} {{/if}}', data);
```

**Result:** Value2

#### Related Topics:

-   [Creating a Basic Conditional Template](Creating-Basic-Conditional-Template.html)

### <a id="block-if-else-tag"></a>Block if -else tag

The templating engine recognizes complete or opened and closed conditional blocks with default statement defined in the template. The syntax is `{{if Condition}}` Do Something `{{else}}` Do Default `{{/if}}`

**Example:**

**In JavaScript:**

```js
var data = [{prop: 2}];
var result = $.ig.tmpl('{{if ${prop} > 2}} ${prop}{{else}} "The minimum value is 2" {{/if}}', data);
```

**Result:** The minimum value is 2

#### Related Topics:

-   [Creating a Conditional Template Containing a Default Statement](Creating-Conditional-Template-Containing-Default-Statement.html)

### <a id="block-if-elseif-else-tag"></a>Block if –elseif - else tag

The templating engine recognizes inner block statements such as continuation of conditionals like elseif and else defined in the template. The syntax is `{{if Condition}}` Do Something `{{elseif}}`Do Something else`{{else}}` Do Default `{{/if}}`

**Example:**

**In JavaScript:**

```js
var data = [{value: 1}, {value: 2}, {value: 3},{value: 4}];
var result = $.ig.tmpl('{{if ${value} == 1}} <b>${value}</b>{{elseif ${value} == 2 }} <i>${value}</i> {{else}} ${value} {{/if}}', data); 
```

**Result:** **1** *2* 3 4, which stands for 1 with bold style, 2 with italic style and 3 4 with normal

#### Related Topics:

-   [Creating a Multi-Conditional Template Containing a Default Statement](Creating-Multi-Conditional-Template-Containing-Default-Statement.html)

### <a id="block-each-tag"></a>Block each tag

The templating engine recognizes and supports each blocks. The blocks need to be completed. The engine iterates through the members of the array and properties can be accessed using `${member.prop}` syntax. The syntax of the each block is the following: `{{each Member}}` Do stuff related to Member.Prop `{{/each}}`

**Example:**

**In JavaScript:**

```js
var movies = [
{
      name: "movie1",
      actors: [
            {name: "name1", age: 35},
            {name: "name2", age: 45}
      ]
}];
var result = $.ig.tmpl('{{each ${actors} }} ${actors.name}, ${actors.age} <br /> {{/each}}', movies);
```

**Result:** name1, 35

name2, 45

#### Related Topics:

-   [Creating a Nested Blocks Template](Creating-Nested-Blocks-Template.html)

### <a id="index"></a>Index

**In JavaScript:**

```js
var data =  [{value: 11}, {value: 22}];
var result = $.ig.tmpl('$i: ${value} ', data);
```

**Result**: 0: 11 1: 22

#### Related Topics:

-   [Creating an Alternating Rows Template](Creating-an-Alternating-Rows-Template-%28igTemplating%29.html)

### <a id="data"></a>Data

**In JavaScript:**

```js
var data = [{tagsList: ["Rock", "Alternative"]}, {tagsList: ["Pop", "Dance"]}]; var result = $.ig.tmpl('{{ each ${tagsList} }} $data {{/each}}', data);
```

**Result**: Rock Alternative Pop Dance

### <a id="comments"></a>Comments

The templating engine recognizes and ignores comments in the template. The hash tag (#) defines the start of a comment and another hash tag defines the end of a comment.

**Example:**

**In JavaScript:**

```js
var data =  [{value: 1}, {value: 2}];
var result = $.ig.tmpl('#This comment will be ignored#<p>$i</p>', data);
```

**Result:** 

```html
<p>0</p><p>1</p>
```


## <a id="related-content"></a>Related Content
### Topics

The following topics provide additional information related to this topic.

- [Creating an Alternating Rows Template](Creating-an-Alternating-Rows-Template-%28igTemplating%29.html): This topic demonstrates how to create alternative row template using the templating engine.

- [Creating a Basic Conditional Template](Creating-Basic-Conditional-Template.html): This topic demonstrates how to create basic conditional template using the templating engine.

- [Creating a Basic Substitution Template](Creating-Basic-Substitution-Template.html): This topic demonstrates how to create basic substitution template using the templating engine.

- [Creating a Complex Property Substitution Template](Creating-Complex-Property-Substitution-Template.html): This topic demonstrates how to create complex property substitution template using the templating engine.

- [Creating a Conditional Template Containing a Default Statement](Creating-Conditional-Template-Containing-Default-Statement.html): This topic demonstrates how to create conditional template containing a default statement using the templating engine.

- [Creating a Multi-Conditional Template Containing a Default Statement](Creating-Multi-Conditional-Template-Containing-Default-Statement.html): This topic demonstrates, with code examples, how to create multi-conditional template containing a default statement using the templating engine.

- [Creating a Nested Blocks Template](Creating-Nested-Blocks-Template.html): This topic demonstrates how to create nested blocks template using the templating engine.

### Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/templating-engine/basic-usage): The Infragistics Templating Engine provides a consistent templating syntax for all of the %%ProductName%% controls. This example demonstrates the templating syntax in context when customizing the `igCombo` control's header, items, and footer.

- [Grid Column Template](%%SamplesUrl%%/templating-engine/grid-column-template): This sample shows how to insert a button into a column using igGrid column template functionality. In the most right column there is button for each row. Pressing a button will delete its containing row.

- [Conditional Templates](%%SamplesUrl%%/templating-engine/conditional-templates): This sample demonstrates how conditional cell templates are used in a grid using the Infragistics Template Engine. In the following scenario, cells under the Unit Price column have an image arrow up/down. For the purpose of this sample, the ‘Delta Price’ column is created dynamically and is hidden from the user. The up/down images are applied according to the values in hidden column when compared to the values in the Unit Price column. The Infragistics Templating Engine is comparing the values in the Delta Price and Unit Price columns. If the value Delta Price column is greater than the Unit Price value then a green up arrow is rendered, otherwise a red down arrow is rendered in the grid.

- [Nested Templates](%%SamplesUrl%%/templating-engine/nested-templates): This sample demonstrates how nested templates are possible using the Infragistics Templating Engine. In the following scenario each feature of the Infragistics Templating Engine is used to iterate through the movies collection from the data source and unordered list is created as an output in the last column.

- [ASP.NET MVC Usage](%%SamplesUrl%%/templating-engine/aspnet-mvc-usage): When using ASP.NET MVC Helpers, you can use the Infragistics Templating Engine in ASP.NET MVC views. The approach is identical to that in JavaScript.





 

 


