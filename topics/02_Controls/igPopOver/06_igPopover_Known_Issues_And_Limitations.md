<!--
|metadata|
{
    "fileName": "igpopover-known-issues-and-limitations",
    "controlName": "igPopover",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Known Issues And Limitations (igPopover)

## Known Issues and Limitations Summary
### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igPopover`™ control for the Ignite UI® 20%%ProductVersionShort%% release. Detailed explanations of all of the issues and the existing workarounds are provided after the summary table.

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

### igPopover

Issue|Description|Status
---|---|---
[The pointer is mispositioned in Chrome on page loading](#mispositioned-pointer)|If the `igPopover` is shown when initially loading the page, the arrow is not positioned properly according to the content frame.|![](../../images/images/positive.png)
[show](%%jQueryApiUrl%%/ui.igpopover#methods:show) method requiring target parameter with [selectors](%%jQueryApiUrl%%/ui.igpopover#options:selectors) option is used|When the selectors option is set and multiple targets are available, the show method needs DOM element to be passed as parameter, otherwise an error is thrown.|![](../../images/images/negative.png)


## igPopover
### <a id="mispositioned-pointer"></a>The pointer is mispositioned in Chrome on page loading

In Google® Chrome™ browser, if the `igPopover` control appears upon the initial loading of the page, the pointer is not positioned properly relative to the content frame.

The issue occurs because the DOM element is loaded, but the content is not, so the width and height of the target element are 0.

>**Workaround 1:** Set width and height of the target element with the style attribute.

**In HTML:**

```html
style="width:160px;height:160px"
```

>**Workaround 2:** Invoke the [show](%%jQueryApiUrl%%/ui.igpopover#methods:show) method of the `igPopover` inside the `$(window).load()` function.

**In JavaScript:**

```js
$(window).load(function () {
            $('#imgPopover').igPopover("show");
        });
```



 

 


