<!--
|metadata|
{
    "fileName": "igzoombar-known-issues-and-limitations",
    "controlName": "igZoombar",
    "tags": ["Charting","Data Presentation","Known Issues","Breaking Changes"]
}
|metadata|
-->

# Known Issues And Limitations (igZoombar)

## Known Issues and Limitations
### Overview

The following table summarizes the known issues and limitations of the `igZoombar` control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues in the following summary table.

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

### igZoombar

Issue | Description | Status
---|---|---
`igDataChart` Radial Series not supported| `igZoombar` supports only horizontal zooming while Radial Series zooming makes sense only when done on both axes. Because of this, zooming Radial Series with `igZoombar` does not work properly. |![](../../images/images/negative.png)
[igZoombar thumbnail not rendered when used with igDataChart](igZoombar-Known-Issues-And-Limitations.html#thumbnail)| `igZoombar` creates its thumbnail by using the options of the `igDataChart` control (which is referenced in `igZoombar` ‘s [target](%%jQueryApiUrl%%/ui.igzoombar#options) option). `igZoombar` trims off some of these options in an attempt to remove the clutter from the thumbnail. This can make the new option set invalid.| ![](../../images/images/positive.png)
[The clone and the target widget of igZoombar doesn’t synchronize automatically](igZoombar-Known-Issues-And-Limitations.html#synchronize)|Changing the widget being zoomed by the `igZoombar` control does not update the clone automatically.|![](../../images/images/positive.png)
[`igZoombar` does not work  with igDataCharts with Stacked Series](igZoombar-Known-Issues-And-Limitations.html#stackedseries)| The `igZoombar` creates a clone of the original `igDataChart` that it targets. By default the `igZoombar` infers the clone's options from the original chart object (refer to the [`clone`](%%jQueryApiUrl%%/ui.igzoombar#options:clone) option of the `igZoombar`). In the case of the stacked series, which have a more complex structure, the original chart modifies the series that the user provides internally. Due to this the `igZoombar` cannot obtain the original series and cannot recreate the clone automatically.| ![](../../images/images/positive.png)

## igZoombar
### <a id="thumbnail"></a>igZoombar thumbnail not rendered when used with igDataChart

`igZoombar` creates its thumbnail by using the options of the `igDataChart` control (which is referenced in `igZoombar` ‘s [target](%%jQueryApiUrl%%/ui.igzoombar#options:target) option). `igZoombar` trims off some of the options attempting to remove the clutter from the thumbnail. This can make the new option set invalid.

>**Workaround:** Use `igDataChart` options to initialize `igZoombar` by configuring its [clone](%%jQueryApiUrl%%/ui.igzoombar#methods:clone) option.

**In JavaScript:**

```js
$("#zoombar").igZoombar({
      target: "chart",
      clone: {
            // use igDataChart options
      }
});
```

### <a id="synchronize"></a>The clone and the target widget of igZoombar doesn’t synchronize automatically

Changing the widget being zoomed by the `igZoombar` control does not
update the clone automatically.

>**Workaround:** Using the `igZoombar` public API, retrieve the element on which the clone is initialized and apply the same changes on it. When updating the `igDataChart` instance, also update its `igZoombar` thumbnail clone using the [clone](%%jQueryApiUrl%%/ui.igzoombar#methods) API method.

**In JavaScript:**

```js
$("#dataChart").igDataChart("addItem", {"Item1": "Value1", "Item2": 1000, "Item3": 1019.75}, "series1" );
$("#zoombar").igZoombar("clone").igDataChart("addItem", {"Item1": "Value1", "Item2": 1000, "Item3": 1019.75}, "series1" );
```
### <a id="stackedseries"></a>igZoombar does not work  with igDataCharts with Stacked Series

The `igZoombar` creates a clone of the original `igDataChart` that it targets. By default the `igZoombar` infers the clone's options from the original chart object (refer to the [`clone`](%%jQueryApiUrl%%/ui.igzoombar#options:clone) option of the `igZoombar`). In the case of the stacked series, which have a more complex structure, the original chart modifies the series that the user provides internally. Due to this the `igZoombar` cannot obtain the original series and cannot recreate the clone automatically.
>**Workaround:**Use igDataChart options to initialize igZoombar by configuring its [clone](%%jQueryApiUrl%%/ui.igzoombar#methods:clone) option.

**In JavaScript:**

```js
$("#zoombar").igZoombar({
      target: "chart",
      clone: {
            // use igDataChart options
      }
});
```


 

 


