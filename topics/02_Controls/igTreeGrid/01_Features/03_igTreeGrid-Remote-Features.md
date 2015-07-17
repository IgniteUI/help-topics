<!--
|metadata|
{
    "fileName": "igtreegrid-remote-features",
    "controlName": ["igTreeGrid"],
    "tags": ["Grids", "MVC"]
}
|metadata|
-->

# Remote Features (igTreeGrid)

Data-manipulation features of the `igTreeGrid` support either setup for local or remote execution. The latter is particularly useful when there's a need to reduce the load on the client or apply custom logic on the data before sending back up to the client. This topic covers the basics of enabling remote operations for the Tree Grid.

### Required background

The following lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

-   [Features Overview (igTreeGrid)](igTreeGrid-Features-Overview.html): This topic covers the basics around the modular features available for the `igTreeGrid` control. 
-   [Filtering (igTreeGrid)](igTreeGrid-Filtering.html): This topic explains how the `igTreeGridFiltering` operates on hierarchical data.

### In this topic:

- [**Introduction**](#introduction)
	- [Request Format](#request-format)
- [**Feature Specific Details**](#features)
    - [Remote Filtering](#filtering)
    - [Remote Sorting](#sorting)
    - [Remote Paging](#paging)
- [**Performance Considerations**](#considerations)
- [**Related Content**](#related-content)
    - [Topics](#topics)
    - [Samples](#samples)

## <a id="introduction"></a> Introduction

When the tree grid is set up to use remote features, Ajax requests are used for data interactions. Having remote features such as Paging allows for working with very large sets without the need to bind the `igTreeGrid` to the entire data initially which can greatly benefit performance.What is more, data set is processed in memory. Additionally, having server-side control on intermediate states allows for completely custom logic to be applied on the outcome of the operations. 

Supported features that can perform remote operations are **Sorting**, **Filtering** and **Paging**.

In order to take advantage of the remote features functionality the controller action method responsible for Sorting, Filtering and Paging should be decorated with TreeGridDataSourceAction attribute. This is all that needs to be done and the TreeGridDataSourceAction is handling everything else for you. In this scenario requests are handled by the ignite UI Grid MVC Wrapper which automatically adds parameter to the request and returns the data in the appropriate format. 
Another benefit of the remote features is that expanded state is persisted across user interactions. For instance, if the user expand a node on the first page and moves to the second page, afterwards when he is on the first page again the expanded state of the nodes is going to be persisted. Same is applicable when filtering or sorting interactions are performed. 

### <a id="request-format"></a> Request Format

All features share the same [`dataSourceUrl`](%%jQueryApiUrl%%/ui.igtreegrid#options:dataSourceUrl) endpoint address (also used for [Load on Demand](igTreeGrid-Load-On-Demand.html)) for requesting additional data. This means that if there are any custom back-end implementations for multiple remote features they need to be able to handle more than one style of request by reading the provided parameters.

In case that requests are going to be manually handled on the back end it's important to maintain the logical order of the operations - for example filtering data transformations should be applied first and then sorting if needed, before cutting down the results to the required page size:


## <a id="features"></a> Feature Specific Details

While besides the specific parameters, there can also be specific requirements for the returned data in order for the features to functions to work correctly without direct access to the entire data. Also while each feature can be configured separately for local or remote operation, the behavior of local features on a limited subset of data (a page) can be different from what the user would expect. For that reason, in most cases involving remote pagination, other operations are handled remotely as well.

### <a id="filtering"></a> Remote Filtering

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:type) feature option to `'remote'`. Data requests for Filtering will supply at least one `filter(<property>)` style parameter. If Advanced [`mode`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:mode) is enabled a `filterLogic` conditional operator is also sent specifying if the criteria must all match ("AND") or any one is enough ("OR"). It will look similar to the following:


```
ttp://<SERVER>/TreeGrid/GetData?filter(EmployeeID)=equals(3)&filterLogic=AND&filtering.fromLevel=0&filtering.toLevel=-1&__matchFiltering=__matchFiltering&filtering.displayMode=showWithAncestors&pk=EmployeeID&propertyDataLevel=__ig_options.dataLevel&propertyExpanded=__ig_options.expanded&childDataKey=Employees&initialExpandDepth=-1&_=1437122016866
```

A full list of the possible conditions is availabe in the [API Usage (igGrid Filtering)](igGrid-Filtering.html#api) topic. In simple mode the criterial logic is not controlled by the user and is static (usually defaults to conditional-AND) so the `filterLogic` parameter is omitted. Usually the server side would have access to the inital Tree Grid model to verify that.

When preparing data for the response the [`matchFiltering`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:matchFiltering) property must be set when handling the filtering to let filtering know which part of the data is an actual match, while also obeying the defined display mode and level restrictions  of the initial model.

Filtering Response looks like the following:

```js
Metadata: {timezoneOffset: 10800000, filtering.countRecords: 1}
filtering.countRecords: 1
timezoneOffset: 10800000
Records: [{EmployeeID: 2, FirstName: "Name 1", LastName: "Last Name 1", Level: "Level:0",…}]
0: {EmployeeID: 2, FirstName: "Name 1", LastName: "Last Name 1", Level: "Level:0",…}
TotalRecordsCount: 0
```


**Related topic:** [Remote Filtering (igGrid)](igGrid-Filtering.html#remote)

### <a id="sorting"></a> Remote Sorting

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.ui.igtreegridsorting#options:type) feature option to `'remote'`. Ajax requests have at least one `sort(<propertyName>)` style parameter (depending on the [`mode`](%%jQueryApiUrl%%/ui.igtreegridsorting#options:mode)) that defines either ascending or descending sorting direction for each object property. There are two additional parameters defining from which(fromlevel) to which level(toLevel) sorting is performed:

```
http://<SERVER>/TreeGrid/GetData?sort(EmployeeID)=asc&sorting.fromLevel=0&sorting.toLevel=-1&pk=EmployeeID&propertyDataLevel=__ig_options.dataLevel&propertyExpanded=__ig_options.expanded&childDataKey=Employees&initialExpandDepth=-1&_=1437123084738
```

**Related topic:** [Remote Sorting (igGrid)](igGrid-Sorting-Overview.html#remote)

### <a id="paging"></a> Remote Paging

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.igtreegridpaging#options:type) feature option to `'remote'`. Remote Paging operations use following parameters - the `page` index the user is requesting, the respective row count per page set by `pageSize`, `listExpanisonStates[2]` which keeps the information about the expansion state.  Every time a node is expanded or collapsed a request is sent in order to update this property and preserve this state across user interactions:

```
http://<SERVER>/TreeGrid/GetData?page=1&pageSize=5&paging.mode=allLevels&paging.contextRowMode=none&pk=EmployeeID&listExpansionStates%5B2%5D=false&propertyDataLevel=__ig_options.dataLevel&propertyExpanded=__ig_options.expanded&childDataKey=Employees&initialExpandDepth=-1&_=1437129614152
```

### <a id="considerations"></a> Performance Considerations

In case that there is an SQL end point in you application what could be done in order to improve performance by decreasing the number of calls to the SQL is caching the data.

**Related topic:** [Remote Paging (igGrid)](igGrid-Paging.html#remote)

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
-   [Features Overview (igTreeGrid)](igTreeGrid-Features-Overview.html): This topic covers the basics around the modular features available for the `igTreeGrid` control. 

### <a id="samples"></a> Samples
- [igTreeGrid Remote Features](%%SamplesUrl%%/tree-grid/remote-features)
