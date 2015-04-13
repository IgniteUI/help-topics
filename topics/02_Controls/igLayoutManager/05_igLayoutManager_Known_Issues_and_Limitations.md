<!--
|metadata|
{
    "fileName": "iglayoutmanager-known-issues-and-limitations",
    "controlName": "igLayoutManager",
    "tags": ["Known Issues","Layouts"]
}
|metadata|
-->

# Known Issues and Limitations (igLayoutManager)



##Known Issues and Limitations


### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igLayoutManager`™ control for the Ignite UI® %%ProductVersion%% release.

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

 

Issue|Description|Status
---|---|---
Items in Grid and Border layouts are overlapping in IE7|IE7 does not support box-sizing:border-box, because of  this limitations we could observe an overlapping in Grid and Border layouts.|![](../../images/images/negative.png)
[Grid Layout items with scrollbars have incorrect width in IE9.](#grid-layout)|There is a bug in IE9 that incorrectly calculates the width of the elements that are position: absolute, box-sizing:border-box and have scrollbars|![](../../images/images/positive.png)



### <a id="grid-layout"></a>Grid Layout items with scrollbars have incorrect width in IE9.

To avoid the issue the items in IE9 should not have scrollbars. Change the following style to: `.ig-layout-item { overflow: hidden }`



 

 


