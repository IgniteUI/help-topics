<!--
|metadata|
{
    "fileName": "igtreegrid-load-on-demand",
    "controlName": ["igTreeGrid"],
    "tags": ["Grids", "MVC", "Virtualization"]
}
|metadata|
-->

# Load on Demand (igTreeGrid)

The `igTreeGrid` Load on Demand feature allows for binding to a remote data source and only initially loading the visible data into the grid. Additional data is available by  making remote requests for child records "on demand" as the parents are expanded. This type of interaction allows for a faster page load, faster Tree Grid binding, a lighter initial footprint and potential for presenting the the most up-to-date data.

This feature can be combined with additional remote features to achieve complete data virtualization.


### Required Background

The following lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

- [Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html): This topic explains how to get started with Ignite UI™ components in an ASP.NET MVC application.


## Introduction

The Load on Demand functionality enables the tree grid to request the data for the child nodes from the server as the user interacts with the grid (expands a node). This approach significantly reduces the data being transferred between the browser and the server.

As Load on Demand is a remote operation it does require server support and well as specific data format - the back end must be able to handle [requests](#request-format) and reply with the appropriate level of data. Currently the `igTreeGrid` feature supports loading **hierarchical data only** from the server. This is because responses for each request include `null` set to the object property configured as `ChildDataKey` for leaf-level rows and an empty array/collection otherwise to prompt the `igTreeGrid` to render an indicator and request the data when the user expands.

When a row is expanded, the data for the child records is requested with an Ajax call to the server. The feature uses the same [`dataSourceUrl`](%%jQueryApiUrl%%/ui.igtreegrid#options:dataSourceUrl) address shared by other [remote features](igTreeGrid-Remote-Features.html). This means back-end implementations for multiple remote features need to be able to handle more than one style of request.

Rendering expansion indicators in their own column also requires providing the [`initialIndentationLevel`](%%jQueryApiUrl%%/ui.igtreegrid#options:initialIndentationLevel) which determines how many indentations should be reserved as width for that column. This is done to ensure there will be enough space to render the most indented indicator for the leaf levels. Normally this would be determined from the bound data, but in a remote scenario it must be explicitly set up front.

## <a id="request-format"></a> Request Format

With the Ajax call to the remote data source, the `igTreeGrid` will provide a number of parameters - a **path** based on the bound hierarchy to the parent, **depth** and the name of the **primary key** property. Depending on the scenario and data one or more can be used to identify the specific piece of data/layout needed.

For example in the Grid described in the [walkthrough](#walkthrough) below:

![](images/igtreegrid-load-on-demand.png "igTreeGrid with Load on Demand")

produces the following two requests, where the single root row has an primary key value of "2":

![](images/igtreegrid-load-on-demand-requests.png "igTreeGrid with Load on Demand requests")  

and as visible, the child record's key value is "5", producing a path of `2/5` for its data request.

> **Note:** While Ignite UI comes with ASP.NET MVC helper models to help developers, this feature in not dependent on the platform. Rather, Load on demand can be enabled through the [`enableRemoteLoadOnDemand`](%%jQueryApiUrl%%/ui.igtreegrid#options:enableRemoteLoadOnDemand) option and implemented with any server-side platform that can provide an endpoint to handle the incoming request and return the processed data as JSON.

## <a id="walkthrough"></a> Walkthrough

To quickly get enable the Load on demand functionality of the Tree Grid follow the steps.

1. Configure the `TreeGridModel` model. Set [`LoadOnDemand`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.TreeGridModel~LoadOnDemand.html) to `true` and [`DataSourceUrl`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridModel~DataSourceUrl.html) to the endpoint URL that will handle the requests:

	```csharp
	private TreeGridModel GetTreeGridModel()
	{
		TreeGridModel gridModel = new TreeGridModel();
		gridModel.LoadOnDemand = true;
		gridModel.DataSourceUrl = Url.Action("ChildEmployeesOnDemand");

		gridModel.Width = "100%";
		gridModel.AutoGenerateColumns = false;
		gridModel.Columns = new List<GridColumn>();
		gridModel.Columns.Add(new GridColumn() { Key = "ID", HeaderText = "ID", DataType = "number", Width = "10%", Hidden = true });
		gridModel.Columns.Add(new GridColumn() { Key = "FirstName", HeaderText = "First Name", DataType = "string", Width = "25%" });
		gridModel.Columns.Add(new GridColumn() { Key = "LastName", HeaderText = "Last Name", DataType = "string", Width = "25%" });
		gridModel.Columns.Add(new GridColumn() { Key = "Title", HeaderText = "Title", DataType = "string", Width = "30%" });
		gridModel.Columns.Add(new GridColumn() { Key = "StartDate", HeaderText = "Start Date", DataType = "date", Width = "15%" });
		gridModel.PrimaryKey = "ID";
		gridModel.ChildDataKey = "Employees";
		gridModel.RenderExpansionIndicatorColumn = true;
		gridModel.InitialIndentationLevel = 4;
		return gridModel;
	}
	```
2. Assign the appropriate source and pass the model to the view:

	```csharp
	public ActionResult LoadOnDemand()
	{
		TreeGridModel gridModel = GetTreeGridModel();

        gridModel.DataSource = RepositoryFactory.GetHierarchicalEmployeeData().AsQueryable();
		return View(gridModel);
	}
	```
3. Crate a controller action to handle the data requests. Use the `path` parameter by splitting it into separate identifiers that correspond to the record key values and use those to navigate to the target level. Return the level data with empty collections for child data:

	```csharp
	public JsonResult ChildEmployeesOnDemand(string path, int? depth)
    {
        TreeGridModel model = this.GetTreeGridModel();
        IEnumerable<EmployeeData> result = new List<EmployeeData>().AsQueryable();

        //The path represents the primary Keys of the expanded parent rows separated with a slash up to the currently expanded row.
        string[] identifiers = path.Split('/');

        if (identifiers.Length > 0)
        {
            IEnumerable<EmployeeData> data = RepositoryFactory.GetHierarchicalEmployeeData();
            string whereExpr = "";
            for (int i = 0; i < identifiers.Length; i++)
            {
                whereExpr = "ID = " + identifiers[i];
                data = data.AsQueryable().Where(whereExpr).Select(x => x.Employees).FirstOrDefault();
            }
            result = data.Select(e =>
            {
                if (e.Employees != null) { e.Employees = new List<EmployeeData>(); } return e;
            });
        }

        model.DataSource = result.AsQueryable();
        return model.GetData();
    }
	```
	> Note: The `igTreeGrid` will provide as much information as possbile to determine the requested data and using it entirely depends on the level of funtionality required. For example if the underlying data has a unique **primary keys** the last identifier (or `identifiers[depth]`) can be used to access the expanded record directly. Also the provided key name parameter can be used to either assign Routing rules for separate data views or in the creation of a predicate string used for querying the source.

4. Create a view and instantiate the `TreeGrid` wrapper with the configured model.

	**In CSHTML:**
	```csharp
	@using Infragistics.Web.Mvc
	// ..
	@(Html.Infragistics().TreeGrid(Model))
	```

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
-   [Features Overview (igTreeGrid)](igTreeGrid-Features-Overview.html): This topic covers the basics around the modular features available for the `igTreeGrid` control.

### <a id="samples"></a> Samples
- [Load on Demand](%%SamplesUrl%%/tree-grid/load-on-demand)
- [igTreeGrid Remote Features](%%SamplesUrl%%/tree-grid/overview)
