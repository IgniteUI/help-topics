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
[Embedded iframe (including in controls like *igHtmlEditor*) may reload and lose content](#embedded-iframe) | Maximizing and minimizing the `igDialog` can cause frame elements in the content (including in controls like the `igHtmlEditor`) to reload. This is caused by the dialog moving in the DOM to position itself under the body of the document. Depending on configuration, pinning can produce similar behavior. | ![](../../images/images/positive.png)

## <a id="ig-dialog"></a> igDialog

### <a id="relative-width-height"></a> Controls sized incorrectly when inside an *igDialog* and their width/ height is relative

When a visualization control is embedded inside an `igDialog` and the width and/or height of that embedded control is set relatively (in percentages), the embedded control does not size correctly because the dialog has not been yet created so the dimensions of the embedded control cannot be calculated correctly.

This is because the embedded control is instantiated prior to rendering the `igDialog`.

> **Workaround**
>
If using embedded controls with relative dimensions, instantiate them after the `igDialog` is opened.

### <a id="embedded-iframe"></a> Embedded iframe (including in controls like *igHtmlEditor*) may reload and lose content

This can occur during maximize/minimize operations when the element on which the `igDialog` is instantiated is nested in other elements and moves directly under the body in the DOM hierarchy. That causes the browser to reload `<iframe>`-s inside, creating extra requests or destroying content if they have no source set (as in the case with `igHtmlEditor`) in the process. The position of the dialog in the DOM is crucial for z-axis positioning and that requirement can't be avoided completely. Depending on the [`container`](%%jQueryApiUrl%%/ui.igDialog#options:container) option the same can be observed when performing pin operations.

> **Workaround**
> When using `<iframe>` content it's advisable for the dialog to be initialized as a child of the body and z-index should be enough to bring the dialog above other UI or suitable order of competing items should be created in advance.
