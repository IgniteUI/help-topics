<!--
|metadata|
{
    "fileName": "iggrid-overview",
    "controlName": "igGrid",
    "tags": ["Getting Started","Grids"]
}
|metadata|
-->

# igGrid Overview

## About igGrid

The `igGrid` is a jQuery-based client-side grid that is responsible for presenting and manipulating tabular data. Its whole lifecycle is on the client-side, which makes it independent from server-side technology.

![](images/igGrid_Overview_01.png) 

## Features

The `igGrid` control supports a number of different features:

-   Column Resizing
-   Column Hiding
-   Column Summaries
-   Row Selectors
-   GroupBy
-   Tooltips
-   Sorting
-   Filtering
-   Paging
-   Selection
-   Updating
-   jQuery templates
-   Virtual Scrolling

Further, the grid also includes support for:

-   High Performance data manipulation
-   Keyboard Navigation
-   Rich client-side API
-   ASP.NET MVC wrapper

## Adding igGrid to a Web Page

The following steps demonstrate how to create a basic implementation of the jQuery Grid on a web page using either jQuery client code. To read about which implementation to choose, see [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html).

[igGrid Overview Sample](%%SamplesUrl%%/grid/overview)

To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html) help topic.

1.  On your HTML page, **reference the required JavaScript and CSS** files. **In HTML:**

    ```html
    <script src="scripts/jquery.js" type="text/javascript"></script>
    <script src="scripts/jquery-ui.js" type="text/javascript"></script>
    <script src="scripts/infragistics.core.js" type="text/javascript"></script><script src="scripts/infragistics.lob.js" type="text/javascript"></script>
    <link href="css/themes/infragistics/infragistics.theme.css" rel="stylesheet" type="text/css" />
    <link href="css/structure/infragistics.css" rel="stylesheet" type="text/css" />
    ```

2. Next, reference **the JSON array** which serves as a data source for the grid is added.
    ```html
    <!--Sample JSON Data-->
    <script src="http://www.igniteui.com/data-files/northwind.js"></script>
    ```

3. **Define a table DOM element**, that *igGrid* will use to render the given data.

    **In HTML:**

    ```html
    <table id="grid"></table>
    ```

4. Once the above setup is complete, begin to **set options** including *ID*, *columns* and *dataSource*.

    1.  [columns](%%jQueryApiUrl%%/ui.iggrid#options:columns) – the column object definition for `igGrid`
        -   `headerText` – the text in the header of a column
        -   `key` – the name of the key field in the data source
        -   `dataType` – the data type of a column. Could be “string”, “number” or “date”

    2.  [dataSource](%%jQueryApiUrl%%/ui.iggrid#options:dataSource) – the data that the `igGrid` is displaying data for. Options include:
	    -   JSON object
	    -   JavaScript array
	    -   XML
	    -   Remote data
	    -   Table DOM element
	    
	    **In Javascript:**
	
	    ```js
	    $(function () {
            $("#grid").igGrid({
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "Employee ID", key: "EmployeeID", dataType: "number"
                },
                {
                    headerText: "First Name", key: "FirstName", dataType: "string"
                },
                {
                    headerText: "Last Name", key: "LastName", dataType: "string"
                },
                {
                    headerText: "Title", key: "Title", dataType: "string"
                },
                {
                    headerText: "Birth Date", key: "BirthDate", dataType: "date"
                },
                {
                    headerText: "Postal Code", key: "PostalCode", dataType: "string"
                },
                {
                    headerText: "Country", key: "Country", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                height: "100%",
                width: "100%",
                tabIndex: 1,
                features: [
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging",
                        pageSize: 5
                    },
                    {
                        name: "Filtering"
                    }
                ]
            });
        });
	    ```

5.  Run the web page. The `igGrid` binds to the JSON array and displays the data.

     ![](images/igGrid_Overview_02.png)

6. Working sample
    <div class="embed-sample">
        [igGrid Grid API and Events](%%SamplesEmbedUrl%%/grid/grid-api-events)
    </div>
## Related Content

### Topics

-   [igGrid/igDataSource Architecture Overview](igGrid-igDataSource-Architecture-Overview.html)
-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html) 
-   [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)



 

 


