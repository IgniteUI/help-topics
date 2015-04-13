<!--
|metadata|
{
    "fileName": "igpivotdataselector-known-issues-and-limitations",
    "controlName": "igPivotDataSelector",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igPivotDataSelector)

##Known Issues and Limitations (igPivotDataSelector)

### Overview

The following table summarizes the known issues and limitations of the `igPivotDataSelector`™ control for the Ignite UI™ %%ProductVersionShort%% release. Detailed explanations of some of the issues and the existing workarounds are provided for some of the issues after the summary table.

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
[Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19](#drop-lable-problem)|When drag-and-drop-ing an item between areas of the `igPivotDataSelector` and/or the `igPivotDataSelector`™, the drop label remains.|![](../../images/images/positive.png)

### <a id="drop-lable-problem"></a>The Drop label remains after drag-and-drop between drop areas in jQuery UI 1.8.19

When drag-and-drop-ing an item between areas of the `igPivotDataSelector` and/or the `igPivotGrid`, the drop label remains. This behavior is caused by a bug in the jQuery UI draggable introduced in version 1.8.19. For more information see, [jQuery UI Bug 8269](http://bugs.jqueryui.com/ticket/8269).

>**Workaround:** Use a version of jQuery UI, different from 1.8.19.

##Related Content

### Topics

The following topics provide additional information related to this topic.

- [igPivotDataSelector](igPivotDataSelector.html): This is a group of topics explaining the `igPivotDataSelector` component and its use.





 

 


