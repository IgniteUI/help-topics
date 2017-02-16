<!--
|metadata|
{
    "fileName": "iggrid-enabling-and-configuring-virtualization",
    "controlName": "igGrid",
    "tags": []
}
|metadata|
-->

# Enabling and Configuring Virtualization (igGrid)

## Topic Overview

### Purpose

This topic explains, with code examples, how to enable and configure the Virtualization feature in the `igGrid`™.

### In this topic

This topic contains the following sections:

-   [**Enabling Virtualization Overview**](#overview)
-   [**Configuring Virtualization Overview**](#configuring)
-   [**Enabling and Configuring Fixed Virtualization**](#fixed)
	-   [Configuring the rows’ height and columns’ width](#fixed-configuring-rows-columns)
    -   [Property settings](#fixed-property-settings)
    -   [Fixed Row Virtualization Example](#fixed-row-example)
    -   [Column Row Virtualization Example](#fixed-column-example)
-   [**Enabling and Configuring Continuous Virtualization**](#continuous)
    -   [Property settings](#continuous-property-settings)
    -   [Example](#continuous-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)


## <a id="overview"></a> Enabling Virtualization Overview

Virtualization is enabled by setting the [`virtualization`](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) property to true. The type of Virtualization is specified though setting the [`virtualizationMode`](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) property to fixed or continuous.

Enabling virtualization without specifying its type sets it to Fixed (the default Virtualization type).

The row virtualization feature cannot function without having height defined in the grid.
The column virtualization feature cannot function without having width defined in the grid.


## <a id="configuring"></a> Configuring Virtualization Overview 

The following table lists the different configurable settings of the Virtualization feature and maps them to the respective properties that manage them.

|Setting | Property | Description
| -------------------| ------------------- |----------- 
Row virtualization | [rowVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) | Enables/Disables virtualization for rows only.
Column virtualization | [columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) | Enables/Disables column virtualization.When column virtualization is enable so is row virtualization. When enabled it also automatically sets virtualization mode to "fixed".
Both row and column virtualization | [virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | Enables/Disables both row and column virtualization.
Virtualization mode | [virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | Determines row virtualization mode.
Average Row Height | [avgRowHeight](%%jQueryApiUrl%%/ui.iggrid#options:avgRowHeight) | Used for row virtualization in **fixed mode**. Determines the average value in pixels that will be used to calculate how many rows to render. All row heights will be automatically set to this value.
Average Column Width| [avgColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:avgColumnWidth) | Used for column virtualization in **fixed mode**. This is the average value in pixels for the column widths.

## <a id="fixed"></a> Enabling and Configuring Fixed Virtualization

Fixed Virtualization is enabled by setting the virtualization option of the `igGrid` control to true and virtualization mode to Fixed. This enables virtualization for both rows and columns. Alternatively, you can enable virtualization on rows only by setting the respective property: [`rowVirtualization`](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization).

>**Note:** Fixed Row Virtualization requires avgRowHeight and grid height to be set. <br/> Fixed Column Virtualization requires the grid and all its columns to have width set (if columns don't have explicit width set then the defaultColumnWith option should be set). Also the avgColumnWidth should be set.

When row virtualization is used, all rows have the same height. If average row height is not set correctly, the last rows may be cut off (not shown) in the grid. 
This same issue exists with column widths, when column virtualization is used. For this reason, it's required to set manually the row height property for row virtualization and the column widths and average column widths for column virtualization. The correct value is established by calculating the average row height and the average column width, respectively. See Configuring the average rows’ height and columns’ width for details.

### <a id="fixed-configuring-rows-columns"></a> Configuring the average rows’ height and average columns’ width 

The average rows’ height and the columns’ average width are managed by the `avgRowHeight` and `avgColumnWidth` properties, respectively.

The `avgRowHeight` property determines the average height of the displayed rows in the grid.

The `avgColumnWidth` property determines the average width of the displayed columns in the grid.

The general rule is to always set an `avgRowHeight` to value that is evenly divisible by the value of the height of the grid. An important aspect of configuring Fixed virtualization configuration is the process of determining the value for the `avgRowHeight` property. By default, the grid tries to set a reasonable row height that will work for most data sources.

Example:

Grid Height: 600px => `avgRowHeight`: 30, or 15, or 60.

A greater `avgRowHeight` value may be necessary in order to accommodate word wrapping.

If you are using column virtualization you have to calculate `avgColumnWidth` similarly to `avgRowHeight`.

Example:

Grid Width: 300px, example column widths for 4 columns: 100px, 200px, 100px, 200px => `avgColumnWidth`: 150

>**Note:** Note that the columns visible widths must be equal to the igGrid’s width.


### <a id="fixed-property-settings"></a> Property settings

The following table maps the desired behaviors to property settings.

In order to: | Use this property: | And set it to:
---|---|---
Enable Virtualization | [virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | true
Enable Fixed Virtualization | [virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | fixed
Set the grid height (Required for row virtualization) | [height](%%jQueryApiUrl%%/ui.iggrid#options:height) | the desired grid height in pixels
Enable only Row Virtualizaion | [rowVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) | true
Set the average row height (Required for row virtualization) | [avgRowHeight](%%jQueryApiUrl%%/ui.iggrid#options:avgRowHeight) | the calculated row height in pixels
Enable Column Virtualization | [columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) | true
Set the grid width (Required for column virtualization) | [width](%%jQueryApiUrl%%/ui.iggrid#options:width) | the desired grid width in pixels
Set the column width (Required for column virtualization) | [defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth ) | The default column width that will be applied to all columns that don't have explictly set width.
Set the average column width (Required for column virtualization)| [avgColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:avgColumnWidth) | the calculated column width in pixels

### <a id="fixed-row-example"></a> Fixed Row Virtualization Example

The following table demonstrates how to configure Fixed Row Virtualization.

Property | Value
---|---
[rowVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) | true
[virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | fixed
[height](%%jQueryApiUrl%%/ui.iggrid#options:height) | 600px
[avgRowHeight](%%jQueryApiUrl%%/ui.iggrid#options:avgRowHeight) | 30px

#### Code

The following code configures the setting in the Example.

**In JavaScript:**

```js
$("#grid1").igGrid({
        rowVirtualization: true,
        virtualizationMode: ‘fixed’,
        height: ‘600px’,
        avgRowHeight: ‘30px’,
});
```

**In ASPX:**

```csharp
<%=Html.Infragistics().Grid(Model).ID("grid1").LoadOnDemand(false).AutoGenerateColumns(false).AutoGenerateLayouts(false).PrimaryKey("ProjectID").Columns(column => 
    {
        column.For(x => x.ProjectID)
			.HeaderText("ProjectID").ToString());
        column.For(x => x.Name)
			.HeaderText("Name"));
        column.For(x => x.StartDate)
			.HeaderText("StartDate");
        column.For(x => x.EndDate)
			.HeaderText("EndDate"));
    })
    .Height("600px")
	.RowVirtualization(true)
	.VirtualizationMode(VirtualizationMode.Fixed)
    .AvgRowHeight("30px")
}).DataBind().Render() %>
```
### <a id="fixed-column-example"></a> Fixed Column Virtualization Example

The following table demonstrates how to configure Fixed Column Virtualization.

Property | Value
---|---
[columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) | true
[virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | fixed
[width](%%jQueryApiUrl%%/ui.iggrid#options:width) | 400px
[defaultColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:defaultColumnWidth) | 200px
[avgColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:avgColumnWidth) | 200px

>**Note:** Note that instead of defaultColumnWidth you can instead define specific width for each column.

#### Code

The following code configures the setting in the Example.

**In JavaScript:**

```js
$("#grid1").igGrid({
        columnVirtualization: true,
        virtualizationMode: ‘fixed’,
        width: ‘400px’,
        defaultColumnWidth: ‘200px’,
        avgColumnWidth: ‘200px’
});
```

**In ASPX:**

```csharp
<%=Html.Infragistics().Grid(Model).ID("grid1").LoadOnDemand(false).AutoGenerateColumns(false).AutoGenerateLayouts(false).PrimaryKey("ProjectID").Columns(column => 
    {
        column.For(x => x.ProjectID).HeaderText("ProjectID");
        column.For(x => x.Name).HeaderText("Name");
        column.For(x => x.StartDate).HeaderText("StartDate");
        column.For(x => x.EndDate).HeaderText("EndDate");
    })
    .Width("400px")
    .DefaultColumnWidth("200px")
	.ColumnVirtualization(true)
	.VirtualizationMode(VirtualizationMode.Fixed)
    .AvgColumnWidth("200px")
}).DataBind().Render() %>
```

As a result you'll have only two columns rendered in the current data view at a time.

## <a id="continuous"></a> Enabling and Configuring Continuous Virtualization

Continuous Virtualization is enabled by setting the virtualization option of the igGrid control to true and virtualization mode to continuous. The height of the grid is configurable.
> **Note:** Column virtualization is not supported with continuous virtualization.


### <a id="continuous-property-settings"></a> Property settings

The following table maps the desired behaviors to property settings.

In order to: | Use this property: | And set it to:
---|---|---
Enable Virtualization | [virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | true
Enable Continues Virtualization | [virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | continuous
Set height | [height](%%jQueryApiUrl%%/ui.iggrid#options:height) | the desired grid height in pixels


### <a id="continuous-example"></a> Example

The following table demonstrates how to configure Continuous Virtualization for both rows and columns with row height of 400 pixels.

Property | Value
---|---
[virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | true
[virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | continuous
[height](%%jQueryApiUrl%%/ui.iggrid#options:height) | 400px


![](images/igGrid_Enabling_and_Configuring_Virtualization_1.png)

#### Code
The following code configures the setting in the Example.

**In JavaScript:**

```js
$("#grid1").igGrid({
        virtualization: true,
        virtualizationMode: ‘continuous’,
        height: ‘400px’
});
```

**In ASPX:**

```csharp
<%=Html.Infragistics().Grid(Model).ID("grid1").LoadOnDemand(false).AutoGenerateColumns(false).AutoGenerateLayouts(false).PrimaryKey("ProjectID").Columns(column => 
    {
        column.For(x => x.ProjectID)
			.HeaderText(this.GetGlobalResourceObject("Grid", "ProjectID").ToString());
        column.For(x => x.Name)
			.HeaderText(this.GetGlobalResourceObject("Grid", "Name").ToString());
        column.For(x => x.StartDate)
			.HeaderText(this.GetGlobalResourceObject("Grid", "StartDate").ToString());
        column.For(x => x.EndDate)\
			.HeaderText(this.GetGlobalResourceObject("Grid", "EndDate").ToString());
    })
	.Virtualization(true)
	.VirtualizationMode(VirtualizationMode.Continuous)
}).DataBind().Height("400px").Render() %>
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Virtualization Overview](igGrid-Virtualization-Overview.html): This topic introduces the Virtualization feature of the `igGrid` control.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Virtualization (Fixed)](%%SamplesUrl%%/grid/virtualization-fixed): This sample demonstrates the HTML virtualization capabilities of the `igGrid` using fixed number of rows.

- [Continuous Virtualization](%%SamplesUrl%%/grid/virtualization-continuous): This sample demonstrates the continuous virtualization capabilities of the `igGrid` control.
