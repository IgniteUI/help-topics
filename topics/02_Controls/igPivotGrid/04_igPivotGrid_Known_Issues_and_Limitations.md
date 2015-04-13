<!--
|metadata|
{
    "fileName": "igpivotgrid-known-issues-and-limitations",
    "controlName": "igPivotGrid",
    "tags": ["Grids","Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igPivotGrid)

##Known Issues and Limitations (igPivotGrid)

### Overview

The following table summarizes the known issues and limitations of the `igPivotGrid`™ control for the Ignite UI™ %%ProductVersionShort%% release. Detailed explanations of some of the issues and the existing workarounds are provided for some of the issues after the summary table.

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


Issue| Description| Status
---|---|---
Captions-based sorting is always alphabetical|No custom captions sorting behaviors are currently supported by the `igPivotGrid`. Only alphabetical sorting is available.| ![](../../images/images/plannedFix.png)
Expanding or collapsing a member re-renders the grid| When a member in the rows or columns of the `igPivotGrid` is expanded or collapsed, the whole grid re-renders.|![](../../images/images/plannedFix.png)
[The igPivotGrid does not render correctly in Android-based browsers](#render-issue-android)|In browsers for the Android™ operating system, only the first column of the `igPivotGrid` is displayed. |![](../../images/images/positive.png)
[Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19](#drop-label-remains)|When drag-and-dropping an item between areas of the `igPivotGrid` and/or the `igPivotDataSelector`™, the drop label remains.|![](../../images/images/positive.png)
[Horizontal scrollbar not visible on Mac OS when its "Show scrollbars only when scrolling" option is set to true](#horizontal-scrolbar-invisible)|The grid horizontal scrollbar has overflow set to "hidden".|![](../../images/images/positive.png)

### <a id="render-issue-android"></a>The igPivotGrid does not render correctly in Android-based browsers

In browsers for the Android operating system, only the first column of the `igPivotGrid` is visible.

>**Workaround :**Two workarounds are available:
	-   Set the table-layout CSS property of the `igPivotGrid`’s table container to auto.
	-   Set the width option of the `igPivotGrid` to an explicit size.

### <a id="drop-label-remains"></a>The Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19

When drag-and-dropping an item between areas of the `igPivotGrid` and/or the `igPivotDataSelector`, the drop label remains. This behavior is caused by a bug in the jQuery UI draggable introduced in version 1.8.19. For more information see, [jQuery UI Bug 8269](http://bugs.jqueryui.com/ticket/8269).

>**Workaround:** Use a version of jQuery UI, different from 1.8.19.

 
### <a id="horizontal-scrolbar-invisible"></a>Horizontal scrollbar not visible on Mac OS when its "Show scrollbars only when scrolling" option is set to true

Use the rendered event to apply overflow-x "auto" to the horizontal scrollbar.

>**Workaround:** Example code:

```
rendered: function (e, args) {

var grid = args.owner,

$scrollContainer = grid.scrollContainer();

$scrollContainer.css('overflow-x', 'auto');

$("#" + grid.id() + "_hscroller_container").hide();

}
```

##Related Content

### Topics

The following topics provide additional information related to this topic.

- [igPivotGrid](igPivotGrid.html): This is a group of topics explaining the `igPivotGrid` component and its use.





 

 


