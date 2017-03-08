<!--
|metadata|
{
    "fileName": "igcombo-configure-remote-filtering",
    "controlName": "igCombo",
    "tags": ["Filtering"]
}
|metadata|
-->

# Configuring Remote Filtering (igCombo)



##Topic Overview


This topic explains how to configure auto-suggest and different filtering options in the `igCombo`™ control.

###In this topic


This topic contains the following sections:

-   [igCombo Configuration Overview](#overview)
-   [Configure OData list filtering](#odata_filtering)
    -   [OData list filtering configuration details](#odata_details)
    -   [OData list filtering configuration property settings](#odata_settings)
    -   [OData list filtering configuration example](#odata_example)
-   [Configure ASP.NET MVC list filtering](#asp_filtering)
    -   [ASP.NET MVC list filtering configuration details](#asp_details)
    -   [ASP.NET MVC list filtering configuration property settings](#asp_settings)
    -   [ASP.NET MVC list filtering configuration example](#asp_example)
-   [Related Topics](#related_topics)

###Required background


The table bellows lists the background you need for fully understanding the information in this topic.

**Concepts**

You need to be familiar with the following concepts:

-   ASP.NET MVC Only
    -   [ASP.NET MVC Routing](http://www.asp.net/mvc/tutorials/asp-net-mvc-routing-overview-cs)
-   OData Only
    -   [OData: JavaScript Object Notation (JSON) Format](http://www.odata.org/documentation/odata-version-2-0/)
    -   [OData: URI Conventions](http://www.odata.org/documentation/odata-version-2-0/uri-conventions/)

**Topics**

You need to first read the following topics:

-   [igCombo Overview](igCombo-Overview.html)
-   [Adding igCombo](igCombo-Getting-Started.html)
-   [Configure igCombo](igCombo-Configuring.html)

##<a id="overview"></a>igCombo Configuration Overview


###Control configuration chart


The table below lists the configurable behaviors of the `igCombo` control.

<table class="table">
	<thead>
		<tr>
			<th>Configurable behavior</th>
			<th>Behavior details</th>
			<th>Configuration properties</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Remote filtering with OData</td>
			<td>OData provides a way to filter the combo when the data source has a very large amount of records. The igCombo control internally handles sending the proper requests for filtered results from the service.</td>
			<td><ul><li>[filteringType](%%jQueryApiUrl%%/ui.igCombo#options:filteringType)</li><li>[responseDataKey](%%jQueryApiUrl%%/ui.igCombo#options:responseDataKey)</li></ul></td>
		</tr>
		<tr>
			<td>Remote filtering with the ASP.NET MVC helper</td>
			<td>The igCombo ASP.NET MVC helper provides the API to setup server-side filtering when binding to collections of business objects.</td>
			<td><ul><li>[filteringType](%%jQueryApiUrl%%/ui.igCombo#options:filteringType)</li>ComboDataSourceAction<li>[filterExprUrlKey](%%jQueryApiUrl%%/ui.igCombo#options:filterExprUrlKey)</li></ul></td>
		</tr>
	</tbody>
</table>


##<a id="odata_filtering"></a>Configure OData list filtering


###<a id="odata_details"></a>OData list filtering configuration details


The `igCombo` control can be bound to an OData service. Because the OData protocol supports filtering, the `igCombo` can internally handle the request parameters necessary to handle the filtering for Auto-Suggest from an OData service. If your application requires the combo to suggest from a large list of options, using server-side filtering with OData can help avoid having to download a large amount of data that must be bound locally.

###<a id="odata_settings"></a>OData list filtering configuration property settings 


The table below maps the desired configurations to property settings. The properties are accessed through the `igCombo` options.

<table class="table table-bordered">
    <thead>
         <tr>
            <th>In order to…</th>

            <th>Use this property:</th>

            <th>And set it to…</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Configure remote filtering with OData</td>

            <td>
                dataSource<br>

                filteringType<br>

                responseDataKey<br>

				valueKey<br>

                textKey
            </td>

            <td>
                string - OData service URL<br>

                remote<br>

                d.results<br>
				
				string - unique key for item in list<br>

                string - field to display in list
            </td>
        </tr>
    </tbody>
</table>

For detailed information about these properties, refer to their listing in the property reference section:

-   `igCombo` Options

###<a id="odata_example"></a>OData list filtering configuration example


#### Introduction

This example demonstrates how to configure the `igCombo` control for remote filtering with an OData service using the JSONP format.

#### Requirements

To complete the procedure, you need the following:

-   Access to a OData service

#### Overview

Following is a conceptual overview of the process:

1.  Enabling remote filtering
2.  Configuring the data source
3.  Configuring the response data key
4.  Configuring the value key
5.  Configuring the text key

#### Steps

1.  Enable remote filtering.

    Set the filteringType option to ‘remote’ in order to instruct the `igCombo` control to send filtering parameters to the server.

    **In HTML:**

    ```html
    filteringType: "remote"
    ```

    **In ASPX:**

    ```csharp
    FilteringType(ComboFilteringType.Remote)
    ```  

2.  Configure the data source

    Set the dataSource option to the URL of the OData service. In the case of the Ignite UI OData service, JSONP is used to avoid cross-domain restrictions of the browser. This is format is requested by passing a callback parameter in the OData request URI.

    **In HTML:**

    ```html
    dataSource: "http://igniteui.com/api/products?callback=?"
    ```

    **In ASPX:**

    ```csharp
    DataSource("http://igniteui.com/api/products?callback=?")
    ```

3.  Configure the response data key

    The data is returned from OData in a specific schema. If you are accessing an OData v1 service, this key is typically ‘d’. The Ignite UI service is OData v2 and the response key is ‘d.results’.

    **In HTML:**

    ```html
    responseDataKey: "d.results"
    ```

    **In ASPX:**

    ```csharp
    ResponseDataKey("d.results")
    ```

4.  Configure the value key.

    Setting the value key tells the `igCombo` control which field provides unique value for each dropdown item. This value varies and is dependent upon the fields of data to which the `igCombo` control is bound.

    **In HTML:**

    ```html
    valueKey: "ID"
    ```

    **In ASPX:**

    ```csharp
    ValueKey("ID")
    ```

5.  Configure the text key.

    Setting the text key tells the `igCombo` control which field provides text for each dropdown item. This value varies and is dependent upon the fields of data to which the `igCombo` control is bound.

    **In HTML:**

    ```html
    textKey: "ProductName"
    ```

    **In ASPX:**

    ```csharp
    TextKey("ProductName")
    ```

#### Example code

The following listing is the full code used in this example to configure list filtering with OData.

**In HTML:**

```html
$("#comboTarget").igCombo({
    filteringType: "remote",
    responseDataKey: "d.results",
    valueKey: "ID",
	textKey: "ProductName",
    dataSource: "http://igniteui.com/api/products?callback=?"
});
```

**In ASPX:**

```csharp
<%= Html.
    Infragistics().
    Combo().
    ID("comboTarget").   
    FilteringType(ComboFilteringType.Remote).  
    DataSource("http://igniteui.com/api/products?callback=?").
    ResponseDataKey("d.results").
	ValueKey("ID").
    TextKey("ProductName").
    Render()
%>
```

##<a id="asp_filtering"></a>Configure ASP.NET MVC list filtering


###<a id="asp_details"></a>ASP.NET MVC list filtering configuration details 


The `igCombo` ASP.NET MVC helper primarily functions to render the necessary jQuery and HTML on the client while being able to configure the behaviors in C# or Visual Basic.NET.

The other part of the helper is to facilitate remote operations to the server. This is the case with `igCombo` control where you can decorate an `ActionResult` method with the `ComboDataSourceAction` attribute and the helper can facilitate the server-side querying of the data source and return the appropriate data to the client.

###<a id="asp_settings"></a>ASP.NET MVC list filtering configuration property settings


The table below maps the desired configuration to property settings. The properties are accessed through [path to the properties].

<table class="table table-bordered">
    <thead>
         <tr>
            <th>In order to…</th>

            <th>Use this property:</th>

            <th>And set it to…</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Configure remote filtering with the ASP.NET MVC helper</td>

            <td>
                <a href="%%jQueryApiUrl%%/ui.igCombo#options:dataSource" target="_blank">DataSource</a><br>

                <a href="%%jQueryApiUrl%%/ui.igCombo#options:dataSourceUrl" target="_blank">DataSourceUrl</a><br>

                <a href="%%jQueryApiUrl%%/ui.igCombo#options:filteringType" target="_blank">FilteringType</a><br>

                <a href="%%jQueryApiUrl%%/ui.igCombo#options:filterExprUrlKey" target="_blank">FilterExprUrlKey</a><br>

                ComboDataSourceAction
            </td>

            <td>
                IQueryable object<br>

                string URL to ComboDataSourceAction<br>

                remote<br>

                filter<br>

                Attribute used to decorate filtering request ActionResult method
            </td>
        </tr>
    </tbody>
</table>


For detailed information about these properties, refer to their listing
in the property reference section:

-   [igCombo Options](%%jQueryApiUrl%%/ui.igcombo#!options)
-   [igCombo ASP.NET MVC Helper API](%%jQueryApiUrl%%/ui.igcombo)

###<a id="asp_example"></a>ASP.NET MVC list filtering configuration example 


#### Introduction

This example shows how to enable remote filtering with the ASP.NET MVC helper. In this configuration, and action method is defined for data filtering operations. The `igCombo` control is bound to data on the server and when a filtering operation occurs on the client, the request for filtered data is sent to the action method.

#### Requirements

To complete the procedure, you need the following:

-   an ASP.NET MVC application
-   `Infragistics.Web.Mvc.dll` assembly referenced in your project
-   An `igCombo` control bound to data through the ASP.NET MVC helper

#### Overview

Following is a conceptual overview of the process:

1.  Configuring server requests to be handled internally by the combo
2.  Configuring remote filtering

#### Steps

1.  **Configure server requests to be handled internally by the combo.**

    In order to have the requests from the server handled internally, a `ComboDataSource` needs to be defined and configured in the controller on the server. The `ComboDataSourceAction` is an attribute that can be applied to an `ActionResult` configured on your controller. When the `ActionResult` is configured with the attribute and the `igCombo` is provided with the URL to the controller action, requests to the server are handled internally by the combo. The `igCombo` constructs a URL with query parameters that are directed to this action on the server. Once the action receives the request, additional logic is performed by the `ComboDataSourceAction` to filter the IQueryable data source object and return the filtered JSON values to the client.

    **In C#:**

    ```csharp
    [ComboDataSourceAction]
    public ActionResult ComboData()
    {        
        return View(this.GetColors());
    }
    ```

    You can see here that the same call to the data is made without any special filtering logic required.

2.  **Configure remote filtering.**

    Finally, the `ComboDataSourceAction` requires some properties set. The `DataSourceUrl` points to the `ActionResult` method name. Also, the `FilterExprUrlKey` should be set to "filter" which is the URL parameter required by the `ComboDataSourceAction`. This string is passed as a parameter in the request URL to send the filtering expression to the server. The reason the `FilterExprUrlKey` is set to "filter" when using the ASP.NET MVC Helper is because the logic of the `ComboDataSourceAction` specifically looks for "filter" in the request URL query parameters to extract the filtering expression information.

    **In C#:**

    ```csharp
    comboViewModel.DataSourceUrl = Url.Action("combodata");
    comboViewModel.FilteringType = ComboFilteringType.Remote;
    comboViewModel.FilterExprUrlKey = "filter";
    ```

##<a id="related_topics"></a>Related Topics 


Following are some other topics you may find useful.

-	[Configure igCombo](igCombo-Configuring.html)

-	[jQuery and ASP.NET MVC Helper API Links (igCombo)](igCombo-jQuery-And-ASP-NET-MVC-Helper-API-Links.html)

 

 


