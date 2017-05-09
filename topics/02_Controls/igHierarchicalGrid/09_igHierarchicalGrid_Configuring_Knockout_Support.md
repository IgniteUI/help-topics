<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-configuring-knockout-support",
    "controlName": "igHierarchicalGrid",
    "tags": ["Grids","Knockout"]
}
|metadata|
-->

# Configuring Knockout Support (igHierarchicalGrid)

## Topic Overview

### Purpose
This topic explains how to configure the `igHierarchicalGrid`™ control for binding it to View-Model objects managed by the [Knockout library](http://knockoutjs.com/).

### Required background

The following table lists the topics and external resources required as a prerequisite to understanding this topic.

- Topics
	- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html): This topic provides an overview of the `igHierarchicalGrid` control.
    - [Initializing igHierarchicalGrid](igHierarchicalGrid-Initializing.html): This topic demonstrates how to initialize the `igHierarchicalGrid`.
	- [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html): This topic explains the inner workings of the `igGrid` and how it interacts with the `igDataSource`™ component to enable binding to various data sources.
- External Resources
	- [Knockout Interactive Tutorials](http://learn.knockoutjs.com/)

### In this topic

This topic contains the following sections:
-   [**Introduction**](#introduction)
-   [**Configuring igHierarchicalGrid with Knockout Support**](#configuring)
-   [**Code Examples**](#examples)
-   [Related Topics](#related-topics)

## <a id="introduction"></a> Introduction

The `igHierarchicalGrid` control’s support for the Knockout library provides developers with an easy means for using the Knockout library and its declarative syntax to instantiate and configure grid controls.

The Knockout support is implemented as a Knockout extension which is initially invoked when Knockout bindings are applied to a page and during the page life (when external updates to the View-Model take place).

To instantiate an `igHierarchicalGrid` bound to Knockout-managed data structure, you need to specify `igHierarchicalGrid` configuration options into the data-bind attribute of a table element. This renders the grid at the specified location on the element just like creating the control using JavaScript. For information on configuring this option refer to [**Configuring igHierarchicalGrid with Knockout**](#configuring) section below. Additionally, you may specify any of the other `igGrid` options that have relevance to your business case using the data-bind attribute.

The `igHierarchicalGrid` uses the `igGrid` Knockout extension, which ensures that anytime changes occur to the `igHierarchicalGrid` data, either by editing, adding or deleting a row, the extension notifies the observable and updates all its corresponding views. It also ensures that if some external view is updated, the observable in the extension will update the `igHierarchicalGrid` data.

## <a id="configuring"></a> Configuring igHierarchicalGrid with Knockout Support

The following table maps the configuration tasks of the `igHierarchicalGrid` control related to Knockout usage scenarios to the respective properties that manage those tasks.

Configuration task| Required | Details | Properties
------------------|----------|---------|-----------
Binding the View-Model object’s field to the column keys| Yes | The Knockout binding requires the key property of the grid’s columns to be specified. This enables the data exchange between the grid and the View-Model. | [column.key](%%jQueryApiUrl%%/ui.iggrid#options:columns.key)
Specifying the data source | Yes |  The data source option should be set to the observable data. | [dataSource](%%jQueryApiUrl%%/ui.iggrid#options:dataSource)
Specifying the column layouts | Yes | The columnLayouts option should be specified. | [columnLayouts](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options:columnLayouts)

## <a id="examples"></a> Code Examples

The following example demonstrates  the basic configuration of an `igHierarchicalGrid` control bound to a Knockout observable View-Model object.
In this implementation, the first row of the hierarchical grid parent/child layout is bound using a standard two-way binding.

<div class="embed-sample">
   [Hierarchical Grid KnockoutJS Configuration](%%SamplesEmbedUrl%%/hierarchical-grid/bind-hgrid-with-ko)
</div>

## <a id="related-topics"></a> Related Topics
Following are some other topics you may find useful.
- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html)
- [Configuring Knockout Support (igGrid)](igGrid-Configuring-Knockout-Support.html)

The following information is available outside the Infragistics family of content and provides additional information related to this topic.
- [Knockout Home](http://knockoutjs.com/): This is the home page of the Knockout library containing complete documentation, live examples and developer forum.
