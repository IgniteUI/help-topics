<!--
|metadata|
{
    "fileName": "igtreegrid-known-issues-and-limitations",
    "controlName": ["igTreeGrid"],
    "tags": ["Grids", "Data Binding", "Getting Started"]
}
|metadata|
-->

# Known Issues and Limitations (igTreeGrid)

The following table summarizes the known issues and limitations of the `igTreeGrid`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

Legend | 
-------|--------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | Fix planned


Issue | Description | Status
------|-------------|-------
[Expansion indicators can be cropped/hidden with remote features](#expand-indicator-crop) | Expansion indicators on lower levels in the hierarchy can be cropped/hidden when rendered in the separate indicators non-data column in remote scenarios | ![](../../images/images/positive.png)
[Misaligned first cells' data on lower levels](#misaligned-data) | Padding on lower levels can push displayed data beyond the available width of the cell and cause the text to wrap around to the initial position, breaking visual hierarchy | ![](../../images/images/positive.png) 
Scroll position changes when expanding/collapsing rows in rowVirtualization mode with paging (allLevels).|When rowVirtualization and paging with  [`mode`](%%jQueryApiUrl%%/ui.igtreegrid#options:mode) set to `allLevels` are enabled the scroll position will change when expanding/collapsing rows.| ![](../../images/images/negative.png) 

## <a id="expand-indicator-crop"></a> Expansion indicators can be cropped/hidden when rendered on lower levels
Expansion indicators can become cropped or hidden when the expansion indicator column's width is not bid enough. Normally it is determined from the bound data, but in a remote scenario it should instead be provided from the back-end through the [`initialIndentationLevel`](%%jQueryApiUrl%%/ui.igtreegrid#options:initialIndentationLevel) setting which determines how many indentations should be reserved as width for that column.

Besides the number of indentations the actual step width can also be reduced by setting the row [`indentation`](%%jQueryApiUrl%%/ui.igtreegrid#options:indentation) option to lower value.


## <a id="misaligned-data"></a> Misaligned first cell data on lower levels

Deeply nested levels of hierarchy can add a large amount of padding and cause the text to wrap around to the initial position, breaking visual hierarchy. To overcome this analysis of the data structure is required - the very basic options is to modify either the number of columns or the [`columns.width`](%%jQueryApiUrl%%/ui.igtreegrid#options:columns.width) where possible to fit in more content.

The other option available is to reduce the overall padding by setting the row [`indentation`](%%jQueryApiUrl%%/ui.igtreegrid#options:indentation) option to lower value. For example:

```js
$(".selector").igTreeGrid({
    indentation: "15px"
});
```

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics
-   [Features Overview (igTreeGrid)](igTreeGrid-Features-Overview.html): This topic covers the basics around the modular features available for the `igTreeGrid` control.

### <a id="samples"></a> Samples
- [igTreeGrid Overview](%%SamplesUrl%%/tree-grid/overview)
