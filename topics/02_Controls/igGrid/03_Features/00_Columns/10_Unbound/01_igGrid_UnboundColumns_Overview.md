<!--
|metadata|
{
    "fileName": "iggrid-unboundcolumns-overview",
    "controlName": "igGrid",
    "tags": ["Getting Started","Grids","How Do I"]
}
|metadata|
-->

# Unbound Columns Overview (igGrid)

## Topic Overview

### Purpose

This topic explains conceptually the Unbound Columns feature of the `igGrid`™ control and the functionalities this feature provides.

### Required background

The following topics are prerequisites to understanding this topic:

Topic

Purpose

- [igGrid Overview](igGrid-Overview.html): This topic provides an overview of the `igGrid` control and explains how to add it to an HTML page.

- [igGrid Architecture Overview](igGrid-igDataSource-Architecture-Overview.html): This topic explains the inner workings of the `igGrid` and how it interacts with the `igDataSource`™ component to enable binding to various data sources.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Setting a Column as Unbound**](#set-unbound)
-   [**Configuring Unbound Columns**](#configure)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)


## <a id="introduction"></a> Introduction

The Unbound Columns feature of the `igGrid` control enables defining of columns that are not directly bound to a field in the underlying data source.Unbound columns can display either arbitrary lists of items or calculated values (usually based on other columns’ values). This can be used for creating summaries on per row basis (rather than out-of-the-box summaries) for columns. Other typical uses of unbound columns involve cases when one data model is either not enough and out of your control or when you need data from different sources.

Unbound columns have the same properties as normal (bound to a data source) columns. The Unbound Columns feature supports and works with all grid features – Sorting, Filtering, and so on. This includes also the standard column enhancements like column templates and formatters.

## <a id="set-unbound"></a> Setting a Column as Unbound

A column is configured as unbound by setting the [`unbound`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unbound) column property of the `igGrid` to true. (The setting of this property differentiates an unbound column from a bound one: true = unbound column, false = bound column.) Setting this property to true causes that particular column to be omitted when binding to the data source and you essentially can get an empty column with no relation to the data model.

Just like with normal (bound) columns unbound columns needs to be uniquely identified by setting the [`key`](%%jQueryApiUrl%%/ui.iggrid#options:columns.key) property.

You can populate unbound column values in several ways. If column values are pre-defined, use the column's [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) property or the grid’s [`setUnboundValues`](%%jQueryApiUrl%%/ui.iggrid#methods:setUnboundValues) method. If a column values are to be calculated, use the column's [`formula`](%%jQueryApiUrl%%/ui.iggrid#options:columns.formula) or [`template`](%%jQueryApiUrl%%/ui.iggrid#options:columns.template) properties.

The sample bellow demonstrates configuring unbound columns in the `igGrid` control.

<div class="embed-sample">
   [Unbound Column](%%SamplesEmbedUrl%%/grid/unbound-column)
</div>

## <a id="configure"></a> Configuring Unbound Columns

The following table lists the configurable aspects of the Unbound Columns of the `igGrid` feature. Additional details are available in separate topics (links provided in the table).

<table class="table table-bordered">
	<thead>
		<tr>
            <th colspan="2">
Configurable aspect
			</th>

            <th>
Details
			</th>

            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
Populating with data
			</td>

            <td>
Populating unbound column values with pre-defined data
			</td>

            <td>
An unbound column is populated with arbitrary values (pre-defined data set) with the [`unboundValues`](%%jQueryApiUrl%%/ui.iggrid#options:columns.unboundValues) array property. <br />

Related topics <br />

[Populating Unbound Columns with Data (igGrid)](igGrid-UnboundColumns-Populating-with-data-LandingPage.html)
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
unboundValues
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Populating unbound calculated values
			</td>

            <td>
To populate an unbound column with calculated values, use a callback function which calculates the value for each cell. <br />

Related topics <br />
                
[Populating Unbound Columns with Data (igGrid)](igGrid-UnboundColumns-Populating-with-data-LandingPage.html)
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
formula
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Populating unbound column values using template
			</td>

            <td>
A template can be used in addition to or as an alternative to `unboundValues` or `formula` properties. The template can populate an unbound column with data from the other
                    columns.
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
template
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Formatting
			</td>

            <td>
Formatting a column using predefined format string
			</td>

            <td>
Format can be applied to the unbound column based on its type.
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
format
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Formatting a column using formatter function
			</td>

            <td>
Format can be applied to the unbound column by using a formatter function callback. The function returns the new value. Formatter function affects only the presentation of the data and doesn’t modify the underlying data source.
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
formatter
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>

			</td>

            <td>
Formatting a column using a template
			</td>

            <td>
A template can be used in addition to or as an alternative to `unboundValues` or `formula` properties. The template can set the formatting of the unbound column’s values.
			</td>

            <td>
                <ul>
                    <li>
unbound
					</li>

                    <li>
template
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>





## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Setting Column as Unbound (igGrid)](igGrid-UnboundColumns-Setting-Column-as-Unbound.html): This topic demonstrates, with code examples, how to set a columns as unbound on either the client or the server.

- [Working with Unbound Columns(igGrid)](igGrid-UnboundColumns-Working-with-LandingPage.html): This is a group of topics covering some common tasks related to the use of unbound columns, like populating with data and optimizing the grid’s performance Unbound Columns feature of the `igGrid` control.

- [Known Issues and Limitations (igGrid, Unbound Columns)](igGrid-UnboundColumns-Known-Issues.html): This topic provides information about the known issues and limitations of the Unbound Columns feature of the `igGrid` control.

- [API Reference (igGrid, Unbound Columns)](igGrid-UnboundColumns-API-Reference-LandingPage.html): This is a group of topics providing reference information about the properties and methods related to the Unbound Columns feature of the `igGrid` control.

- [Column Summaries (igGrid)](igGrid-Column-Summaries.html): This is a group of topics explaining how to create column summaries in the `igGrid`.
