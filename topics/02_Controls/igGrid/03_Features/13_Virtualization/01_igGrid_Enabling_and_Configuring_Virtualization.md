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
    -   [Example](#fixed-example)
-   [**Enabling and Configuring Continuous Virtualization**](#continuous)
    -   [Property settings](#continuous-property-settings)
    -   [Example](#continuous-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)


## <a id="overview"></a> Enabling Virtualization Overview

Virtualization is enabled by setting the [`virtualization`](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) property to true. The type of Virtualization is specified though setting the [`virtualizationMode`](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) property to fixed or continuous.

Enabling virtualization without specifying its type sets it to Fixed (the default Virtualization type).

The virtualization feature cannot function without having height defined in the grid.



## <a id="configuring"></a> Configuring Virtualization Overview 

The following table lists the aspects in which Virtualization can be configured and maps them to the respective properties that manage them.

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Virtualization type
			</th>
            <th>
Configurable aspect
			</th>
            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
Fixed Virtualization
			</td>
            <td>
Full/column/row virtualization
			</td>
            <td>
                <ul>
                    <li>
[virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization)
					</li>
                    <li>
[virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode)
					</li>
                    <li>
[rowVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization)
					</li>
                    <li>
[columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization)
					</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
Row height
			</td>
            <td>
                <ul>
                    <li>
[height](%%jQueryApiUrl%%/ui.iggrid#options:height)
					</li>

                    <li>
[avgRowHeight](%%jQueryApiUrl%%/ui.iggrid#options:avgRowHeight)
					</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td></td>
            <td>
Column width
			</td>
            <td>
                <ul>
                    <li>
[avgColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:avgColumnWidth)
					</li>
                    <li>
[width](%%jQueryApiUrl%%/ui.iggrid#options:width)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>




## <a id="fixed"></a> Enabling and Configuring Fixed Virtualization

Fixed Virtualization is enabled by setting the virtualization option of the `igGrid` control to true and virtualization mode to Fixed. This enables virtualization for both rows and columns. Alternatively, you can enable virtualization on rows or columns only by setting the respective property ([`rowVirtualization`](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) or [`columnVirtualization`](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization)) to true

Specifying the rows’ width is mandatory. If you would like to use column virtualization, you need to define also the columns’ width and the overall width of the grid.

When row virtualization is used, all rows have the same height. If row height is not set correctly, the last rows may be cut off (not shown) in the grid. This same issue exists with column widths, when column virtualization is used. For this reason, need to set manually the row height property for row virtualization and the column width for column virtualization. The correct value is established be calculating the average row height and the average row width, respectively. See Configuring the rows’ height and columns’ width for details.

### <a id="fixed-configuring-rows-columns"></a> Configuring the rows’ height and columns’ width 

The rows’ height and the columns’ width are managed by the `avgRowHeight` and `avgColumnWidth` properties, respectively.

The `avgRowHeight` property determines the height of each displayed row in the grid.

The `avgColumnWidth` property determines the width of each displayed column in the grid.

The general rule is to always set an `avgRowHeight` to value that is evenly divisible by the value of the height of the grid. An important aspect of configuring Fixed virtualization configuration is the process of determining the value for the `avgRowHeight` property. By default, the grid tries to set a reasonable row height that will work for most data sources.

Example:

Grid Height: 600px => `avgRowHeight`: 30, or 15, or 60.

A greater `avgRowHeight` value may be necessary in order to accommodate word wrapping.

If you are using column virtualization you have to calculate `avgColumnWidth` as `avgRowHeight`.

### <a id="fixed-property-settings"></a> Property settings

The following table maps the desired behaviors to property settings.

In order to: | Use this property: | And set it to:
---|---|---
Enable Virtualization | [virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | true
Enable Fixed Virtualization | [virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | fixed
Set the grid height | [height](%%jQueryApiUrl%%/ui.iggrid#options:height) | the desired grid height in pixels
Enable Row Virtualizaion (Optional) | [rowVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:rowVirtualization) | true
Set the row height (Optional) | [avgRowHeight](%%jQueryApiUrl%%/ui.iggrid#options:avgRowHeight) | the calculated row height in pixels
Enable Column Virtualization (Optional) | [columnVirtualization](%%jQueryApiUrl%%/ui.iggrid#options:columnVirtualization) | true
Set the grid width (columnVirtualizaton  only) | [width](%%jQueryApiUrl%%/ui.iggrid#options:width) | the desired grid width in pixels
Set the column width (Optional) | [avgColumnWidth](%%jQueryApiUrl%%/ui.iggrid#options:avgColumnWidth) | the calculated column width in pixels


### <a id="fixed-example"></a> Example

The following table demonstrates how to configure Fixed Virtualization for both rows and columns with row height of 400 pixels.

Property | Value
---|---
[virtualization](%%jQueryApiUrl%%/ui.iggrid#options:virtualization) | true
[virtualizationMode](%%jQueryApiUrl%%/ui.iggrid#options:virtualizationMode) | fixed
[height](%%jQueryApiUrl%%/ui.iggrid#options:height) | 400px


#### Code

The following code configures the setting in the Example.

**In JavaScript:**

```js
$("#grid1").igGrid({
        virtualization: true,
        virtualizationMode: ‘fixed’,
        height: ‘400px’
});
```

**In ASPX:**

```csharp
<%=Html.Infragistics().Grid(Model).ID("grid1")
    .LoadOnDemand(false)
    .AutoGenerateColumns(false)
    .AutoGenerateLayouts(false)
    .PrimaryKey("ProductID")
    .Columns(column => 
    {
        column.For(x => x.ProductID)
			.HeaderText(this.GetGlobalResourceObject("Grid", "ProductID").ToString());
        column.For(x => x.Name)
			.HeaderText(this.GetGlobalResourceObject("Grid", "Name").ToString());
        column.For(x => x.ProductNumber)
			.HeaderText(this.GetGlobalResourceObject("Grid", "ProductNumber").ToString());
        column.For(x => x.MakeFlag)
			.HeaderText(this.GetGlobalResourceObject("Grid", "MakeFlag").ToString());
    })
    .Virtualization(true)
    .VirtualizationMode(VirtualizationMode.Fixed)
}).DataBind().Height("400px").Render() %>
```

The sample below demonstrates how the fixed virtualization works:

<div class="embed-sample">
   [Virtualization (Fixed)](%%SamplesEmbedUrl%%/grid/virtualization-fixed)
</div>

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
<%=Html.Infragistics().Grid(Model).ID("grid1")
    .LoadOnDemand(false)
    .AutoGenerateColumns(false)
    .AutoGenerateLayouts(false)
    .PrimaryKey("ProductID")
    .Columns(column => 
    {
        column.For(x => x.ProductID)
			.HeaderText(this.GetGlobalResourceObject("Grid", "ProductID").ToString());
        column.For(x => x.Name)
			.HeaderText(this.GetGlobalResourceObject("Grid", "Name").ToString());
        column.For(x => x.ProductNumber)
			.HeaderText(this.GetGlobalResourceObject("Grid", "ProductNumber").ToString());
        column.For(x => x.MakeFlag)
			.HeaderText(this.GetGlobalResourceObject("Grid", "MakeFlag").ToString());
    })
    .Virtualization(true)
    .VirtualizationMode(VirtualizationMode.Continuous)
}).DataBind().Height("400px").Render() %>
```

The sample below demonstrates how the continuous virtualization works:

<div class="embed-sample">
   [Virtualization (Continuous)](%%SamplesEmbedUrl%%/grid/virtualization-continuous)
</div>

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Virtualization Overview](igGrid-Virtualization-Overview.html): This topic introduces the Virtualization feature of the `igGrid` control.




 

 


