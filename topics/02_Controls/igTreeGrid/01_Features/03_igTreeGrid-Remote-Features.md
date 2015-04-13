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
- [**Related Content**](#related-content)
    - [Topics](#topics)
    - [Samples](#samples)

## <a id="introduction"></a> Introduction

When the tree grid is set up to use remote features, Ajax requests are used for data interactions. Having remote features such as Paging allows for working with very large sets without the need to bind the `igTreeGrid` to the entire data initially which can greatly benefit performance. Additionally, having server-side control on intermediate states allows for completely custom logic to be applied on the outcome of the operations. 

Supported features that can perform remote operations are **Sorting**, **Filtering** and **Paging**.

> **Note:** Currently these remote operations need to be handled manually by manipulating the data on the server side based on the parameters send with the remote Ajax requests of the grid.


### <a id="request-format"></a> Request Format

All features share the same [`dataSourceUrl`](%%jQueryApiUrl%%/ui.igtreegrid#options:dataSourceUrl) endpoint address (also used for [Load on Demand](igTreeGrid-Load-On-Demand.html)) for requesting additional data. This means back-end implementations for multiple remote features need to be able to handle more than one style of request by reading the provided parameters.

When handling requests on the back end it's important to maintain the logical order of the operations - for example filtering data transformations should be applied first and then sorting if needed, before cutting down the results to the required page size:

**In C#:**
```csharpcsharp
private IQueryable GetProcessedData(TreeGridModel gridModel)
{
	IQueryable queryableData = (IQueryable)gridModel.DataSource;
	NameValueCollection queryString = this.HttpContext.Request.QueryString;
	TreeGridProcessDataHelper helper = new TreeGridProcessDataHelper();
	
	foreach (string key in queryString.Keys)
	{
		if (key.Contains("filter"))
		{
			// handle filtering
			queryableData = helper.TransformFilterData(queryString, gridModel);
		}
		if (key.Contains("sort"))
		{
			// handle sorting
			queryableData = helper.TransformSortData(queryString, gridModel);
		}
		if (key.Contains("pageSize"))
		{
			// handle paging
			queryableData = helper.TransformPagingData(queryString, gridModel, queryableData);
		}
	}
	return queryableData;
}
```

## <a id="features"></a> Feature Specific Details

While besides the specific parameters, there can also be specific requirements for the returned data in order for the features to functions to work correctly without direct access to the entire data. Also while each feature can be configured separately for local or remote operation, the behavior of local features on a limited subset of data (a page) can be different from what the user would expect. For that reason, in most cases involving remote pagination, other operations are handled remotely as well.

### <a id="filtering"></a> Remote Filtering

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:type) feature option to `'remote'`. Data requests for Filtering will supply at least one `filter(<property>)` style parameter. If Advanced [`mode`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:mode) is enabled a `filterLogic` conditional operator is also sent specifying if the criteria must all match ("AND") or any one is enough ("OR"). It will look similar to the following:

```
http://<SERVER>/treegrid/GetTreeData?filter(LastName)=contains(ski)&filter(HireDate)=before(1425340800000)&filterLogic=AND
```
A full list of the possible conditions is availabe in the [API Usage (igGrid Filtering)](igGrid-Filtering.html#api) topic. In simple mode the criterial logic is not controlled by the user and is static (usually defaults to conditional-AND) so the `filterLogic` parameter is omitted. Usually the server side would have access to the inital Tree Grid model to verify that.

When preparing data for the response the [`matchFiltering`](%%jQueryApiUrl%%/ui.igtreegridfiltering#options:matchFiltering) property must be set when handling the filtering to let filtering know which part of the data is an actual match, while also obeying the defined display mode and level restrictions  of the initial model.

**Related topic:** [Remote Filtering (igGrid)](igGrid-Filtering.html#remote)

### <a id="sorting"></a> Remote Sorting

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.ui.igtreegridsorting#options:type) feature option to `'remote'`. Ajax requests have at least one `sort(<propertyName>)` style parameter (depending on the [`mode`](%%jQueryApiUrl%%/ui.igtreegridsorting#options:mode)) that defines either ascending or descending sorting direction for each object property:

```
http://<SERVER>/treegrid/GetTreeData?sort(Email)=asc&sort(Title)=desc
```

**Related topic:** [Remote Sorting (igGrid)](igGrid-Sorting-Overview.html#remote)

### <a id="paging"></a> Remote Paging

Enable the remote operation by setting the [`type`](%%jQueryApiUrl%%/ui.igtreegridpaging#options:type) feature option to `'remote'`. Remote Paging operations use two main parameters - the `page` index the user is requesting and the respective row count per page set by `pageSize`:

```
http://<SERVER>/treegrid/GetTreeData?page=1&pageSize=3
```
For all requests with remote Paging a `"TotalRecordsCount"` field must be provided in order for the client side widget to be able to determine the number of pages the user is allowed to pick from:

```csharp
public JsonResult GetTreeData()
{
	TreeGridModel gridModel = GetRemoteTreeGridModel();
    IQueryable<EmployeeData> allData = RepositoryFactory.GetHierarchicalEmployeeData().AsQueryable();
	gridModel.DataSource = allData.AsQueryable();
	TreeGridPaging paging = (TreeGridPaging)gridModel.Features.Find(x => x.Name == "Paging");

	IQueryable data = GetProcessedData(gridModel);

	JsonResult result = new JsonResult();
	result.JsonRequestBehavior = JsonRequestBehavior.AllowGet;
	result.Data = new ResultData() { Records = data, TotalRecordsCount = paging.TotalRecordsCount };
	return result;
}
```
**Related topic:** [Remote Paging (igGrid)](igGrid-Paging.html#remote)

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
-   [Features Overview (igTreeGrid)](igTreeGrid-Features-Overview.html): This topic covers the basics around the modular features available for the `igTreeGrid` control. 

### <a id="samples"></a> Samples
- [igTreeGrid Remote Features](%%SamplesUrl%%/tree-grid/remote-features)
