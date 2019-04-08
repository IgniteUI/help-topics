<!--
|metadata|
{
    "fileName": "known-issues-and-limitations-2011-volume-1",
    "controlName": "",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations in 2011 Volume 1


## Topic Overview
### Purpose

This topic lists the known issues and limitations in the 2011 Volume 1 release of the %%ProductName%%™ library.


## Known Issues and Limitations in 2011 Volume 1
### Overview

The following table summarizes the known issues and limitations in the 2011 Volume 1 release of the %%ProductName%%. Detailed explanations of known issues and the possible workarounds are provided for in the known issues topics for each control.

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
[Grid column widths](#grid-column-widths)|The scenario where some columns' widths are defined in percentage, while others' are in pixels (or not specified at all) is not supported.|![](../../images/images/positive.png)
[Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7](#grid-layout-problem-ie7)|When grid width is not specified, header and footer elements are rendered shorter than the grid in Microsoft Internet Explorer® 7.|![](../../images/images/positive.png)
[Grid API calls do not work as expected with DIV elements](#grid-api-call-no-work)|If a grid is instantiated from a DIV element the API calls to the grid's features do not work as expected.|![](../../images/images/positive.png)



## <a id="grid-column-widths"></a>Grid column widths workaround

The scenario where some columns' widths are defined in percentage, while
others' are in pixels (or not specified at all) is not supported.

Define all column widths in one unit of measure: percentage or in pixels, but do not mix the two.

## <a id="grid-layout-problem-ie7"></a>Grid layout problems for header and footer elements in Microsoft Internet Explorer® 7

When a grid control does not have width defined, its header and footer elements (caption, pager, group-by area etc.) are rendered with a smaller width than the records table in Microsoft Internet Explorer® 7.

The solution to this problem is to define the width for the grid explicitly.

## <a id="grid-api-call-no-work"></a>Grid API calls do not work as expected with DIV elements

If a grid is instantiated from a DIV element, the API calls to the grid's features did not work as expected.

The calls to the API of the grid's features should rely on the table that they are actually attached to: [*gridElementId*]_table. If the grid is bound to a DIV with `id` attribute "`grid1`" the easiest way to reference that table is to use either the grid's `id()` or `widget()` API methods like shown here:

**In JavaScript:**

```js
$("#" + $("#grid1").igGrid("id")).igGridPaging("option", "pageSize", 2)
```

or

**In JavaScript:**

```js
$("#grid1").igGrid("widget").igGridPaging("option", "pageSize", 10)
```



 

 


