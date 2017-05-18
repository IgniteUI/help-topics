<!--
|metadata|
{
    "fileName": "migrating-enableUTCDates-option-in-17-1",
    "controlName": "igGrid",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating enableUTCDates option in 17.1

## Date handling in 17.1 for igGrid, igHierarchicalGrid and igTreeGrid

Grids are handling dates through two options `enableUTCDates` and `dateDisplayType` in 17.1.

-	`enableUTCDates` - this option is similar to what it does for igDateEditor and igDatePicker. It has nothing to do with displaying dates anymore. It serves the purpose to specify dates serialization. Whether the dates are serialized as UTC ISO 8061 string or in local time and zone values. 
For example 10:00 AM from a client with local offset of 5 hours ahead of GMT will be serialized as: "2016-11-11T10:00:00+05:00". This is when the option gets the default 'false' value. Otherwise, the date will use the ISO UTC format: "2016-11-11T05:00:00Z".
-	`dateDisplayType` – This option is part of the columns definitions and can be used for the date columns. If set to "local" (default) the grid is rendering the dates in local time zone. If set to "utc" the grid is rendering the dates in UTC. There is one more behavior delivered with that option and designed specifically to handle the default MVC wrappers scenario. It requires data source with time zone offset metadata. The dates are rendered as if in "utc" with the added offset. The idea behind this is to show the same dates the user sees on the server. The option dateDisplayType has no effect on non-date type columns and is ignored.

>**Note:** The `enableUTCDates` option has completely different meaning, but MVC wrappers are enabling it by default, otherwise the option is disabled by default. For example if the option is not set and MVC wrappers are used the dates are serialized in ISO UTC format ("2016-11-11T05:00:00Z"). Otherwise, the default behavior in non-MVC wrappers scenario would serialize the dates to local time and zone values ("2016-11-11T10:00:00+05:00").

The igDataSource transforms and stores the dates as Date objects. $.ig.formatter is responsible to render the dates as they are expected and in accordance with `dateDisplayType` option.

Another behavioral change is that the transaction log will not keep dates serialized. All dates will be preserved as Date objects and serialization will be done only to the passed parameters, when saveChanges is invoked and the enableUTCDates option tells how this should be done.

In 17.1 the MVC wrapper will send the dates into the following format:

```js
{
	"testData": {
		"Records": [
			{
				"ProjectId": 0,
				"Name": "Some project",
				"ExpirationDate": "2010-03-13T08:10:10.000Z"
			},
			"..."
		],
		"Metadata": {
			"timezoneOffset": 7200000,
			"timezoneOffsets": {
				"0": {
					"ExpirationDate": 10800000
				},
				"..."
			}
		}
	}
}
```

## Date handling in 16.2 for igGrid, igHierarchicalGrid and igTreeGrid

The option `enableUTCDates` determines how the grid displays and uses dates into its cells.
-	If enabled the grid shows UTC time, ignoring the client offset. For example, the grid has a property with a value of 2009-02-15T04:00:00Z and the client has GMT+02:00 offset. Then the grid will use 4 AM. In addition, sorting and filtering will consider this value when comparing values.
-	If disabled the grid shows local time, taking into account the client offset. Consider the following example, there is a value of 2009-02-15T04:00:00Z into the data source and the client offset is GMT+02:00. In this case, the used value will be 6 AM.
>**Note:** If the grid is initialized through MVC wrapper the enableUTCDates is enabled by default, otherwise the option is disabled by default.

>**Note:** If the MVC wrapper is used to process the data source or the data source is remote and the GridDataSource attribute is used, then metadata with time zone offsets has been generated.

```js
"Metadata": {
	"timezoneOffset": 7200000,
	"timezoneOffsets": {
		"0": {
			"ExpirationDate": 7200000
		},
		"1": {
			"ExpirationDate": 7200000
		},
		...
		}
```
Each date has its specific offset.
This is how the data source looks like when there is metadata for the time zone offsets. If the data source contains information about the server time zone offsets, igDataSource is always considering the offsets to form the transformed data.

```js
{
	"testData": {
		"Records": [
			{
				"ProjectId": 0,
				"Name": "Some project",
				"ExpirationDate": "/Date(1268467810000)/"
			},
			"..."
		],
		"Metadata": {
			"timezoneOffset": 7200000,
			"timezoneOffsets": {
				"0": {
					"ExpirationDate": 10800000
				},
				"..."
			}
		}
	}
}
```
The data source stores its objects with the sum of the ticks from ExpirationDate and the ticks of the offset for this date. The data source this object for this date value:
```
new Date(1268467810000 + 10800000)
```

Accumulated transactions returned with the API method allTransactions() are being serialized immediately. This means that when a date is updated or added to the data source the value into the accumulated transactions will be with the following format `/Date(1485881423759)/`. On the other hand `pendingChanges()` API method is returning the date object(not serialized). 
The API method `saveChanges()` is sending the serialized accumulated transactions to the server.
>**Note:** In 16.2 version, the MVC wrapper is sending the dates with the Microsoft dates format (`/Date(1485881423759)/`).


## Migrate igGrid,igHierarchicalGrid or igTreeGrid from 16.2 to 17.1

In 17.1 the igDataSource is not going to accept Microsoft date formatting `/Date(1234656000000)/`. If the provided data source contains this kind of data they have to be changed to ISO UTC format "2009-02-15T00:00:00Z".
If the MVC wrapper is used, for the user perspective there is nothing to configure. Internally MVC wrapper was using Microsoft format in 16.2 and from 17.1 it would send the dates in ISO UTC.
To display UTC time in 17.1 grid:

```js
$('#Grid1').igGrid({
	dataSource: 'http://localhost:3000/testData',
	dataSourceType: 'json',
	responseDataKey: 'Records',
	columns: [
		{ key: 'ProjectId', dataType: 'number', headerText: 'Project ID', width: '100px' },
		{ key: 'Name', dataType: 'string', headerText: 'Name', width: '150px' },
		{ key: 'IsPostponed', dataType: 'bool', headerText: 'Is Postponed?', width: '100px' },
		{ key: 'StartDate', dataType: 'date', headerText: 'Start Date', width: '190px', format: 'dateTime', dateDisplayType: 'utc' },
		{ key: 'EndDate', dataType: 'date', headerText: 'End Date', width: '200px', format: 'dateTime', dateDisplayType: 'utc' }
	]
});
```
The same configuration in 16.2 was:

```js
$('#Grid1').igGrid({
	dataSource: 'http://localhost:3000/testData',
	dataSourceType: 'json',
	responseDataKey: 'Records',
	enableUTCDates: true,
	columns: [
		{ key: 'ProjectId', dataType: 'number', headerText: 'Project ID', width: '100px' },
		{ key: 'Name', dataType: 'string', headerText: 'Name', width: '150px' },
		{ key: 'IsPostponed', dataType: 'bool', headerText: 'Is Postponed?', width: '100px' },
		{ key: 'StartDate', dataType: 'date', headerText: 'Start Date', width: '190px', format: 'dateTime' },
		{ key: 'EndDate', dataType: 'date', headerText: 'End Date', width: '200px', format: 'dateTime' }
	]
});
```

In MVC 17.1:
```csharp
@(Html.Infragistics().Grid(Model)
	.ID("Grid1")
	.AutoGenerateColumns(false)
	.AutoGenerateLayouts(false)
	.Columns(column =>
	{
		column.For(project => project.ProjectId).HeaderText("Project ID").DataType("number").Width("100px");
		column.For(project => project.Name).HeaderText("Name").DataType("string ").Width("200px");
		column.For(project => project.IsPostponed).HeaderText("Is Postponed?").DataType("bool").Width("100px");
		column.For(project => project.StartDate).HeaderText("Start Date").DataType("date").Width("150px").DateDisplayType(DateDisplayType.UTC);
		column.For(project => project.EndDate).HeaderText("End Date").DataType("date").Width("150px").DateDisplayType(DateDisplayType.UTC);
	}
	)
	.PrimaryKey("ProjectId")
	.DataSourceUrl(Url.Action("GetData"))
	.Render()
)
```
In MVC 16.2:

```csharp
@(Html.Infragistics().Grid(Model)
	.ID("Grid1")
	.AutoGenerateColumns(false)
	.AutoGenerateLayouts(false)
	.EnableUTCDates(true)
	.Columns(column =>
	{
		column.For(project => project.ProjectId).HeaderText("Project ID").DataType("number").Width("100px");
		column.For(project => project.Name).HeaderText("Name").DataType("string ").Width("200px");
		column.For(project => project.IsPostponed).HeaderText("Is Postponed?").DataType("bool").Width("100px");
		column.For(project => project.StartDate).HeaderText("Start Date").DataType("date").Width("150px");
		column.For(project => project.EndDate).HeaderText("End Date").DataType("date").Width("150px");
	}
	)
	.PrimaryKey("ProjectId")
	.DataSourceUrl(Url.Action("GetData"))
	.Render()
)
```

To display **Local time** in 17.1 grid:
```js
$('#Grid1').igGrid({
	dataSource: 'http://localhost:3000/testData',
	dataSourceType: 'json',
	responseDataKey: 'Records',
	columns: [
		{ key: 'ProjectId', dataType: 'number', headerText: 'Project ID', width: '100px' },
		{ key: 'Name', dataType: 'string', headerText: 'Name', width: '150px' },
		{ key: 'IsPostponed', dataType: 'bool', headerText: 'Is Postponed?', width: '100px' },
		{ key: 'StartDate', dataType: 'date', headerText: 'Start Date', width: '190px', format: 'dateTime', dateDisplayType: 'local' },
		{ key: 'EndDate', dataType: 'date', headerText: 'End Date', width: '200px', format: 'dateTime', dateDisplayType: 'local' }
	]
});
```
The same configuration in 16.2 was:
```js
$('#Grid1').igGrid({
	dataSource: 'http://localhost:3000/testData',
	dataSourceType: 'json',
	responseDataKey: 'Records',
	enableUTCDates: false,
	columns: [
		{ key: 'ProjectId', dataType: 'number', headerText: 'Project ID', width: '100px' },
		{ key: 'Name', dataType: 'string', headerText: 'Name', width: '150px' },
		{ key: 'IsPostponed', dataType: 'bool', headerText: 'Is Postponed?', width: '100px' },
		{ key: 'StartDate', dataType: 'date', headerText: 'Start Date', width: '190px', format: 'dateTime' },
		{ key: 'EndDate', dataType: 'date', headerText: 'End Date', width: '200px', format: 'dateTime' }
	]
});
```

In MVC 17.1:
```csharp
	.ID("Grid1")
	.AutoGenerateColumns(false)
	.AutoGenerateLayouts(false)
	.Columns(column =>
	{
		column.For(project => project.ProjectId).HeaderText("Project ID").DataType("number").Width("100px");
		column.For(project => project.Name).HeaderText("Name").DataType("string ").Width("200px");
		column.For(project => project.IsPostponed).HeaderText("Is Postponed?").DataType("bool").Width("100px");
		column.For(project => project.StartDate).HeaderText("Start Date").DataType("date").Width("150px").DateDisplayType(DateDisplayType.Local);
		column.For(project => project.EndDate).HeaderText("End Date").DataType("date").Width("150px").DateDisplayType(DateDisplayType.Local);
	}
	)
	.PrimaryKey("ProjectId")
	.DataSourceUrl(Url.Action("GetData"))
	.Render()
)
```
In MVC 16.2:
```csharp
@(Html.Infragistics().Grid(Model)
	.ID("Grid1")
	.AutoGenerateColumns(false)
	.AutoGenerateLayouts(false)
	.EnableUTCDates(false)
	.Columns(column =>
	{
		column.For(project => project.ProjectId).HeaderText("Project ID").DataType("number").Width("100px");
		column.For(project => project.Name).HeaderText("Name").DataType("string ").Width("200px");
		column.For(project => project.IsPostponed).HeaderText("Is Postponed?").DataType("bool").Width("100px");
		column.For(project => project.StartDate).HeaderText("Start Date").DataType("date").Width("150px");
		column.For(project => project.EndDate).HeaderText("End Date").DataType("date").Width("150px");
	}
	)
	.PrimaryKey("ProjectId")
	.DataSourceUrl(Url.Action("GetData"))
	.Render()
)

```

>**Note:** The default grid initialized through MVC wrapper will display the dates as they are on the server. If the initialization is not done through the MVC wrapper the default behavior is to show local time.

For more information of how to show the specific client date, please follow the [Using Ignite UI controls in different time zones](Using-IgniteUI-controls-in-different-time-zones.html) topic and specifically the Ignoring server date and displaying the specific client one paragraph.

