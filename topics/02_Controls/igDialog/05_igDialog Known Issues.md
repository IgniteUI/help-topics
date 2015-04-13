<!--
|metadata|
{
    "fileName": "igdialog-known-issues",
    "controlName": "igDialog",
    "tags": ["Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igDialog)



## Known Issues and Limitations Summary

### Known issues and limitations summary chart

The following table summarizes the known issues and limitations for the `igDialog`™ control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

Legend: | 
--------|--------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | No known workaround, fix planned

### [igDialog](#ig-dialog)

Issue | Description | Status
------|---------|--------
[Controls sized incorrectly when inside an *igDialog* and their width/height is relative](#relative-width-height) | Controls inside an `igDialog` do not have correct dimensions if their width/height is relative. This is because any embedded controls are instantiated before rendering `igDialog` so their dimensions cannot be calculated correctly. | ![](../../images/images/positive.png)


## <a id="ig-dialog"></a> igDialog

### <a id="relative-width-height"></a> Controls sized incorrectly when inside an *igDialog* and their width/ height is relative

When a visualization control is embedded inside an `igDialog` and the width and/or height of that embedded control is set relatively (in percentages), the embedded control does not size correctly because the dialog has not been yet created so the dimensions of the embedded control cannot be calculated correctly.

This is because the embedded control is instantiated prior to rendering the `igDialog`.

> **Workaround** 
> 
If using embedded controls with relative dimensions, instantiate them after the `igDialog` is opened.



 

 


