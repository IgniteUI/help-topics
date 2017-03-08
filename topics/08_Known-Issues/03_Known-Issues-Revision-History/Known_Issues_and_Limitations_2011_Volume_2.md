<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2011-volume-2",
    "controlName": "",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2011 Volume 2

## Topic Overview
### Purpose

This topic lists the known issues and limitations in the 2011 Volume 2 release of the Ignite UI™ library.


## Known Issues and Limitations in 2011 Volume 2
### Overview

The following table summarizes the known issues and limitations of the Ignite UI 2011 Volume 2 release. Detailed explanations of known issues and the possible workarounds are provided for in the known issues topics for each control.

### Legend:

<table class="table">
    <tbody>
        <tr>
            <td><img src="../../images/images/positive.png" alt="" class="img-responsive"></td>
            <td>Workaround available</td>
        </tr>
        <tr>
            <td><img src="../../images/images/negative.png" alt="" class="img-responsive"></td>
            <td>No known workaround</td>
        </tr>
        <tr>
            <td><img src="../../images/images/plannedFix.png" alt="" class="img-responsive"></td>
            <td>Fix planned</td>
        </tr>
    </tbody>
</table>

Feature | Description | Status
---|---|---
[Using Document Engines from NetAdvantage for ASP.NET and Ignite UI together workaround ](#using-document-engine) | Using both the Infragistics ASP.NET and Ignite UI documents assemblies together will cause namespace conflict exceptions. | ![](../../images/images/positive.png)
[igEditor styling ](#igEditor-styling) | Layout of html elements was modified and rounded corners are rendered around whole editor, not only buttons. | ![](../../images/images/positive.png)
`igEditor` spin buttons | Spin buttons are rendered horizontally. | ![](../../images/images/negative.png)
[igEditor rendering failure ](#rigEditor-rendering-failure) | Rendering may fail if the base element is TD. | ![](../../images/images/positive.png)
[Cannot use igGridHiding with row templates ](#cannot-use-grid-hiding-roe-templates) | `igGridHiding`™ cannot hide columns when row templates are used. | ![](../../images/images/positive.png)
[igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped ](#grouping-issue) | If a grid control has some columns explicitly defined and `autoGenerateColumns` set to `true`, having columns grouped at initialization will prevent other columns from being grouped at runtime. | ![](../../images/images/positive.png)
[MVC helper configuration for flat grids ](#mvc-helper-config) | All grids are generated as `igHierarchicalGrid`™ by the MVC helper for grids. | ![](../../images/images/positive.png)
[Grid column widths ](#grid-column-widths) | The scenario where some columns' widths are defined in percentage, while others' are in pixels (or not specified at all) is not supported. | ![](../../images/images/positive.png)
[Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7 ](#grid-layout-problems) | When grid width is not specified, header and footer elements are rendered shorter than the grid in Microsoft Internet Explorer® 7. | ![](../../images/images/positive.png)
[Grid API calls do not work as expected with DIV elements ](#grid-api-calls-donot-work) | If a grid is instantiated from a DIV element the API calls to the grid's features do not work as expected. | ![](../../images/images/positive.png)
[Virtualization does not work with GroupBy for igGrid ](#virtualization-doesnot-work-groupby) | The virtualization feature is not supported with the GroupBy feature for `igGrid`. | ![](../../images/images/negative.png)
[Virtualization does not work for igHierarchicalGrid ](#virtualization-doesnot-work-hierarchicalgrid) | The virtualization feature is not supported for `igHierarchicalGrid`. | ![](../../images/images/negative.png)



## <a id="using-document-engine"></a>Using Document Engines from Infragistics ASP.NET and Ignite UI together workaround

Using both the Infragistics ASP.NET and Ignite UI documents assemblies
together will cause namespace conflict exceptions.

To resolve this issue, reference either the documents assemblies from Infragistics ASP.NET or the documents assemblies from Ignite UI in your application. The documents libraries within these assemblies are the same and can be used to replace one another.

## <a id="igEditor-styling"></a>igEditor styling

Layout of html elements was modified and rounded corners are rendered around whole editor, but not only buttons.

Application may disable rounded corners by providing custom CSS or overriding default `igEditor` CSS classes.

## <a id="rigEditor-rendering-failure"></a>igEditor rendering failure

Rendering may fail if the base element is TD.

Application should not restrict width of parent element if the base element is TD or it should ensure that actual width of the TD element is not less than the width of the `igEditor` control. Parent element is not only the parent table but the whole chain of parents up in the DOM hierarchy.

## <a id="cannot-use-grid-hiding-roe-templates"></a>Cannot use igGridHiding with row templates

The scenario in which a row template is used and some columns are hidden is not supported.

The solution to this problem is to omit the definitions of the cell of columns you want to hide, from the row template instead of using the `igGridHiding` control.

## <a id="grouping-issue"></a>igGridGroupBy and autoGenerateColumns to True prevents other columns from being grouped

If a grid control has some columns explicitly defined and `autoGenerateColumns` set to true, having columns grouped at initialization will prevent other columns from being grouped at runtime.

The option `autoGenerateColumns` is true by default so if you are planning to have columns grouped at initialization you have to explicitly define them. It is better to define all of the columns that you want in the grid and set `autoGenerateColumns` to false.

## <a id="mvc-helper-config"></a>MVC helper configuration for flat grids

All grids are generated as `igHierarchicalGrid`.

You have to explicitly call the `AutoGenerateLayouts`(false) method of the grid helper with argument false and a flat grid will be generated by the MVC helper for grids.

## <a id="grid-column-widths"></a>Grid column widths workaround

The scenario where some columns' widths are defined in percentage, while
others' are in pixels (or not specified at all) is not supported.

Define all column widths in one unit of measure: percentage or in pixels, but do not mix the two.

## <a id="grid-layout-problems"></a>Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7

When a grid control does not have width defined, its header and footer elements (caption, pager, group-by area etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer® 7.

The solution to this problem is to define the width for the grid explicitly.

## <a id="grid-api-calls-donot-work"></a>Grid API calls do not work as expected with DIV elements

If a grid is instantiated from a DIV element, the API calls to the grid's features did not work as expected.

The calls to the API of the grid's features should rely on the table that they are actually attached to: [gridElementId]_table. If the grid is bound to a DIV with `id` attribute "`grid1`" the easiest way to reference that table is to use either the grid's `id()` or `widget()` API methods like shown here:

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

or

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```

## <a id="virtualization-doesnot-work-groupby"></a>Virtualization does not work with GroupBy for igGrid

The virtualization feature is not supported with the GroupBy feature for
`igGrid`.

## <a id="virtualization-doesnot-work-hierarchicalgrid"></a>Virtualization does not work for igHierarchicalGrid

The virtualization feature is not supported for `igHierarchicalGrid`.



 

 


