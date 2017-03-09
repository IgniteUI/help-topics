<!--
|metadata|
{
    "fileName": "igsparkline-binding-to-data",
    "controlName": "igSparkline",
    "tags": ["Charting","Data Binding","Data Presentation"]
}
|metadata|
-->

# Binding igSparkline to Data

## Topic Overview
### Purpose

This topic explains how to bind the `igSparkline` ™ control to various data sources (JavaScript array, `IQueryable<T>`, web service).

### Required background

The following table lists the prerequisite materials required to understanding this topic.

**Concepts**

-   Data Binding
-   JSON
-   Web Services
-   WCF Services
-   ASP.NET MVC

**Topics**

- [igDataSource Overview](igDataSource-igDataSource-Overview.html): General description of the `igDataSource` control which serves as an intermediate layer between the data bound controls and the actual data source.

- [igSparkline Overview](igSparkline-Overview.html): This topic provides conceptual information about the `igSparkline` control including its main features.


## Binding to Data Sources
### Supported data sources

The `igDataChart` control supports the following data sources:

Data Source| Binding
---|---
`igDataSource`|Used internally by the control to manage data operations
`IEnumerable<T>`|Used to supply data from an MVC controller method



#### Requirements for binding

Requirements for binding to the `igDataSource` control vary from data source to data source. The following table lists each requirement category.

<table class="table">
	<thead>
		<tr>
            <th>
Requirement category
			</th>

            <th>
Requirement listing
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
Data structure
			</td>

            <td>
                <ul>
                    <li>
JSON (client side or from a web or WCF service)
					</li>

                    <li>
XML (client side or from a web or WCF service)
					</li>

                    <li>
JavaScript array
					</li>

                    <li>
IEnumerable<T> in ASP.NET MVC
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Data types
			</td>

            <td>
                <ul>
                    <li>
String (for category axes)
					</li>

                    <li>
Number
					</li>

                    <li>
Date
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

#### Data sources summary

The `igSparkline` control’s data binding is identical to that of the other controls in the Ignite UI™ library. The way to bind data is either by assigning a data source to the `dataSource` option or by providing a URL in the `dataSourceUrl` in the event that data is provided by a web or WCF service.

Data structure|Related Topic/Sample
---|---
Data binding to a JavaScript Array|**Related Topic**<br>[Adding igSparkline to an HTML Document](igSparkline-Adding-igSparkline-to-an-HTML-Document.html)
Data binding to an IEnumerable<T>|**Related Topic**<br>[Adding igSparkline to an ASP.NET MVC View](igSparkline-Adding-igSparkline-to-an-ASPNET-MVC-View.html)
Data binding to remote Data|**Refer to the sample below** <br>

#### Bind to Remote Data
<div class="embed-sample">
   [%%SamplesEmbedUrl%%/sparkline/bind-to-remote-data](%%SamplesEmbedUrl%%/sparkline/bind-to-remote-data)
</div>

## Related Content
### Topics

The following topic provides additional information related to this topic.

- [jQuery and ASP.NET MVC Helper API Links (igSparkline)](igSparkline-jQuery-and-ASPNET-MVC-API.html): This topic provides links to the API documentation for the jQuery and its ASP.NET MVC helper class for the `igSparkline` control.


### Samples

The following samples provide additional information related to this topic.

- [Bind to JSON Data](%%SamplesUrl%%/sparkline/bind-json): This sample shows a basic implementation of the `igSparkline` bound to a JavaScript array.




 

 


