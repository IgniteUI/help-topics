<!--
|metadata|
{
    "fileName": "adding-netadvantage-controls-to-an-mvc-project",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Adding Controls to an MVC Project

## Topic Overview

This topic explains how to get started with Ignite UI™ components in an ASP.NET MVC application.

### In this topic

This topic contains the following sections:

-   [Using MVC helper](#mvcHelper)
-   [Methods for Defining Ignite UI Controls in an MVC Project](#methodsMVC)
-   [Developing ASP.NET MVC application with igTree](#developingMVC)
-   [Related Content](#related)

## <a id="mvcHelper"></a> Using MVC helper

### Using the MVC helper overview

The ASP.NET MVC helpers for Ignite UI wrap the already client-only control in a server-side set of MVC Extensions that allows the control to be defined and used in the following way:

**In ASPX:**

```csharp
<%= Html.Infragistics().CONTROL_NAME()  %>
```

OR

**In ASPX:**

```csharp
<%= Html.Infragistics().CONTROL_NAME(Model)  %>
```

All controls have helper methods available off of the `Infragistics()` or `InfragisticsMobile()` extension methods and can be seen using intellisense.

**In ASPX:**

```csharp
<%= Html.Infragistics().Grid("grid1", Model.GridFiltering)%>
```

### Navigate to the installed resources

If you have chosen the typical installation of Ignite UI 20%%ProductVersionShort%% , you can find the resources under the paths below:

<table class="table">
	<thead>
		<tr>
			<th>Type</th>
			<th>Path</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Assemblies</td>
			<td>%%InstallPath%%\MVC</td>
		</tr>
		<tr>
			<td>Script files</td>
			<td>%%InstallPath%%\js</td>
		</tr>
		<tr>
			<td>CSS files</td>
			<td>%%InstallPath%%\css</td>
		</tr>
	</tbody>
</table>

## MVC 2, MVC 3, MVC 4 and MVC 5

All the code for the MVC helper is contained in the `Infragistics.Web.Mvc` assembly, which comes compiled against all MVC2, MVC3, MVC4 and MVC5. For further details on the assembly location of the ASP.NET MVC helpers, please read [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)

> **Note**: You should set `Copy Local` property of the reference of the dll to be `true`.

### Use the MVC helper for the loader

The Infragistics loader is used to load dependent scripts and styles files required for the page. For further details on how to use the loader please refer to the topic: [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html).

The following code listing demonstrates how to initialize the loader using the ASP.NET MVC helper:

**In ASPX:**

  ```csharp
  <script src="{IG Resources root}/js/infragistics.loader.js"></script>
    <%= Html.Infragistics()
        .Loader()
        .ScriptPath("{IG Resources root}/js/")
        .CssPath("{IG Resources root}/css/")
        .Render()
    %>
  ```


The JavaScript files are also available in a hosted environment on the Infragistics CDN. The benefits of using a CDN are numerous so please refer to the [Infragistics Content Delivery Network (CDN)](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html) help topic for details.

**In ASPX:**

```csharp
<script src="http://cdn-na.infragistics.com/jquery/%%ProductVersionCondensed%%/latest/js/infragistics.loader.js"></script>
```

**In ASPX:**

```csharp
<%= Html.Infragistics().Loader()
    .ScriptPath(“http://cdn-na.infragistics.com/jquery/%%ProductVersionCondensed%%/latest/js/”)
    .CssPath(“http://cdn-na.infragistics.com/jquery/%%ProductVersionCondensed%%/latest/css/”)
	.Render() %>
```

### Calling Render() method

When instantiating the control with the ASP.NET MVC Helper, you must call the Render method last after all other options are configured. This is the method that renders the HTML and JavaScript necessary to instantiate the control on the client.

## <a id="methodsMVC"></a> Methods for Defining Ignite UI Controls in an MVC Project

### Methods for configuring the controls summary

There are two different options available for defining controls in an MVC application available. The following table lists the available methods for defining Ignite UI controls depending on whether you define the control in a Model or in the View. Additional details are available after the summary table.

<table class="table">
	<thead>
		<tr>
			<th>Method</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Defining controls in a Model</td>
			<td>Defining the control by configuring a Model class and passing it as an argument in the grid extension method.</td>
		</tr>
		<tr>
			<td>Defining controls in a View</td>
			<td>Defining the control in the View using chaining syntax.</td>
		</tr>
	</tbody>
</table>

### Configuring controls in a View

Initializing the control with the chaining syntax moves all creation and configuration logic to the view, making the controller code extremely concise and clear. Defining the control in the view is achieved by exposing required properties and methods through helper’s methods that always return the same object that called them.

The following code listing demonstrates how to initialize the `igTree` control using the chanining syntax.

**In ASPX:**

```csharp
<%= Html.
        Infragistics().
        Tree().
        ID("MVCBoundTree").
        Bindings( bindings => {
            bindings.
            TextKey("Text").
            ValueKey("Value").
            ChildDataProperty("Child").
            Bindings( b1 => {
                b1.
                TextKey("Text").
                ValueKey("Value").
                ImageUrlKey("ImageUrl").
                NavigateUrlKey("NavigateUrl").
                TargetKey("Target");
            });
        }).
        DataSource(Model).
        DataBind().
        Render()  
    %>
```

For complex objects [lambda expressions](http://msdn.microsoft.com/en-us/library/bb397687.aspx) are used in order to achieve the syntax. The following code listing demonstrates how to configure `ColumnLayouts` using lambda expressions.

**In ASPX:**

```csharp
.ColumnLayouts(layouts =>
    {
        layouts.For(x => x.CustomerAddresses)
        .PrimaryKey("AddressID")
        .ForeignKey("CustomerID")
        .AutoGenerateColumns(false)
        .Columns(childcols1 =>
            {
                childcols1.For(x => x.AddressTypeID).HeaderText("AddressTypeID");
                childcols1.For(x => x.AddressID).HeaderText("AddressID");
                childcols1.For(x => x.CustomerID).HeaderText("CustomerID");
            })
	})
```

### Configuring controls in a Model

Using a model class relies on the controller to configure the control. This is useful in a scenario where after a request, you need to retrieve some of the settings or properties of the control which wouldn’t be otherwise available if you would have used chaining to configure everything in the View.

> **Note**: The model class exists as a helper that can be used to help return data to the view. It is not required for any specific functionality in the controller but does make more complex remote operations easier to code.

**In C#:**

```csharp
[ActionName("Filtering")]
public ActionResult GridFiltering()
{
   GridFilteringModel model = new GridFilteringModel();
   model.GridFiltering.DataSourceUrl = Url.Action("BindGridFiltering");
   this.InitializeSortingGridOptions(model.GridFiltering);
   return View(model);
}

private void InitializeSortingGridOptions(GridModel model)
{
   model.Height = "500px";
   model.Columns.Add(new GridColumn("Product ID", "ProductID", "number", "100px"));
   model.Columns.Add(new GridColumn("Product Name", "Name", "string", "300px"));
   model.Columns.Add(new GridColumn("Product Number", "ProductNumber",        "string", "205px"));
   model.Columns.Add(new GridColumn("Standard Cost", "StandardCost", "number", "110px"));
   GridFiltering filtering = new GridFiltering();
   model.Features.Add(filtering);
}
```



## <a id="developingMVC"></a>Developing ASP.NET MVC application with igTree

### Introduction

The following procedure demonstrates how to add the required assemblies and resources (CSS and JavaScript files) to work with Ignite UI in ASP.NET MVC.

### Requirements

To complete the procedure, you need the following:

-   A project with any Web application
-   Ignite UI 20%%ProductVersionShort%% installed
-   [jQuery](http://jquery.com/) core library 1.4.4 version or above
-   [jQuery UI](http://jqueryui.com/) library 1.8.17 or above
-   [Modernizr](http://modernizr.com/) open-source JavaScript library 2.5.2 or above

### Overview

This topic takes you step-by-step toward developing an ASP.NET MVC application with the `igTree` control. The following is a conceptual overview of the process:

1. Declaring the `igTree` in an MVC application using chaining

2. Adding the controller’s code

3. Bindings

### Steps

The following steps demonstrate how to develop ASP.NET MVC application with `igTree`.

1. Adding required resource to the MVC application

	 - Navigate to the installation folder of Ignite UI 20%%ProductVersionShort%%: `%%InstallPath%%`
	
	 - Copy the `js` and `css` folder to the root directory of your MVC application
	
	 - Add reference to `Infragistics.Web.Mvc` assembly
	
	> **Note**: You should set `Copy Local` property of the reference of the dll to `true`.

2. Declare the igTree in an MVC application

	 - Add the Infragistics loader
	
	This step adds the Infragistics loader to the header of the page
	
	**In ASPX:**
	
	```csharp
	<%= Html.Infragistics()
	        .Loader()
	        .ScriptPath("{IG Resources root}/js/")
	        .CssPath("{IG Resources root}/css/")
	        .Render()
	    %>
	```
	
	 - Add the igTree control
	
	This step adds the `igTree` control to the MVC application.
	
	**In ASPX:**
	
	```csharp
	<%= Html.Infragistics()
	        .Tree()
	        .ID("XmlTree")
	        .InitialExpandDepth(0)
	        .DataSource(Model)
	        .CheckboxMode(CheckboxMode.TriState)
	        .DataBind()
	        .Render()  
	    %>
	```
	
	> **Note**: Notice the use of the Render method the code listing. All Infragistics ASP.NET MVC Helpers require the Render method to be called as the last method in order to initiate server-side rendering for the control.

3. Add the controller’s code

	 - Add the action name
	
	This step adds the `ActionName` to the controller
	
	**In C#:**
	
	```csharp
	[ActionName("node-images")]
	public ActionResult DataBindingUsingMVC()
	{
	    return View("NodeImages", this.GetData());
	}
	```
	
	 - Add the `GetData()` helper method to the controller
	
	This step defines the helper method for creating the data source
	
	**In C#:**
	
	```csharp
	private IEnumerable<Folders> GetData()
	{
	   string phisicalFilePath = System.Web.HttpContext.Current.Server.MapPath(System.Web.HttpContext.GetGlobalResourceObject("Tree", "path_treeData").ToString());
	   var ctx = XDocument.Load(phisicalFilePath);
	   IEnumerable<Folders> data = from item in ctx.Root.Elements("Folder")
	      select new Folders
	      {
	         Text = item.Attribute("Text").Value,
	         Value = item.Attribute("Value").Value,
	         ImageUrl = Url.Content(item.Attribute("ImageUrl").Value),
	         Folder = from i1 in item.Elements("Folder")
	    select new Folders
	     {
	       Text = i1.Attribute("Text").Value,
	       Value = i1.Attribute("Value").Value,
	       ImageUrl = Url.Content(i1.Attribute("ImageUrl").Value),
	       Folder = from i2 in i1.Elements("Folder")
	              select new Folders
	              {
	          Text = i2.Attribute("Text").Value,
	          Value = i2.Attribute("Value").Value,
	          ImageUrl = Url.Content(i2.Attribute("ImageUrl").Value),
	          Folder = from i3 in i2.Elements("Folder")
	                  select new Folders
	                  {
	                        Text = i3.Attribute("Text").Value,
	                        Value = i3.Attribute("Value").Value,
	                        ImageUrl = Url.Content(i3.Attribute("ImageUrl").Value)
	                  }
	               }
	             }
	         };
	  return data;
	}
	```

4. Bindings

	 - Add the tree bindings
	
	This step adds the bindings configuration to the igTree.
	
	> **Note**: In order for the igTree control to determine how each field of the bound data should function in the  hierarchy, a binding object must be configured for each type of object that needs to be displayed in the tree.
	
	**In C#:**
	
	```csharp
	.Bindings( bindings => {
	            bindings.
	            ValueKey("Value").
	            TextKey("Text").
	            ImageUrlKey("ImageUrl").
	            ChildDataProperty("Folder");
	        }).
	```

## Next Steps
Now that you've had the opportunity to learn about working with Ignite UI and ASP.NET MVC, make sure to check out 
[Developing ASP.NET MVC Applications with igGrid](igGrid-Developing-ASP-NET-MVC-Applications-with-igGrid.html) for more detail on working specifically with ASP.NET MVC.

## <a id="related"></a>Related Content

### Topics

The following topics provide additional information related to this topic.

- [Developing ASP.NET MVC Applications with igGrid](igGrid-Developing-ASP-NET-MVC-Applications-with-igGrid.html)

- [JavaScript Files in Ignite UI](Deployment-Guide-JavaScript-Files.html)

- [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)
- [Styling and Theming Ignite UI](Deployment-Guide-Styling-and-Theming.html)

- [Infragistics Content Delivery Network (CDN) for Ignite UI](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html)