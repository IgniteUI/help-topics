<!--
|metadata|
{
    "fileName": "igcombo-known-limitations",
    "controlName": "igCombo",
    "tags": ["Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igCombo)



##Known Issues and Limitations Summary


### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igCombo`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

Legend | 
-------|------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | No known workaround, fix planned

Issue | Description | Status
---|---|---
[In IE9 and lower versions placeHolder text is not previewed](#IE9PlaceHolder) | Input placeholders are simply ignored in IE9 and below|![](../../images/images/negative.png)
[When virtualization is enabled, all ItemTemplate elements should have equal heights](#virtualizationAndItemTemplate) | Misalignment issues may occur with the scrollbar | ![](../../images/images/positive.png)
[When Grouping and Virtualization are used some items are not rendered properly](#groupingWithVirtualization) | When scrolling down, some items are not properly added|![](../../images/images/negative.png)
[When loadOnDemand is used, initialSelectedItems option won't work as expected"](#lodWithInitialSelectedItems) | Initial selection won't be reflected if the item is currently not present in the page loaded by the combo.|![](../../images/images/negative.png)


##Known Issues and Limitations Details


###<a id="IE9PlaceHolder"></a>In IE9 and lower versions placeHolder text is not previewed

HTML5 introduces the `placeholder` attribute on `input` elements, which allows to display a greyed-out default text, although input placeholders are simply ignored in IE9 and below. This is because IE does not support it.

###<a id="virtualizationAndItemTemplate"></a> When virtualization is enabled, all ItemTemplate elements should have equal heights

If `itemTemplate` is used with `virtualization` some misalignment issues may occur with the scrollbar. For example the last visible item could be partially hidden.

**Workaround**
A potential work around for this issue is to set `height` to the item template like:
```
<script type="text/javascript">
	$('#combo1').igCombo({
		filteringType: "remote",
		responseDataKey:"d.results",
		dataSource: "http://igniteui.com/api/employees?callback=?",
		valueKey: "ID",
		textKey: "Name",
		visibleItemsCount: 5,
		virtualization: true,
		itemTemplate: "<div class='comboItemContainer' style='height:100px'>" + 
							"<div class='empInfo'>" + 
								"<span class='empName'>${Name}</span>" + 
								"<p>${BirthDate}</p>" + 
								"<div>${Address}</div>" + 
							"</div>" + 
						"</div>"
	});
</script>
```
###<a id="groupingWithVirtualization"></a>When Grouping and Virtualization are used some items are not rendered properly

When scrolling up/down through the item list, while there are grouped items, some list items may not be rendered properly or rendered at all.

###<a id="lodWithInitialSelectedItems"></a>When loadOnDemand is used, initialSelectedItems option won't work as expected
Initial selection won't be reflected if the item is currently not present in the page loaded by the combo (e.g. first 16 initially loaded items). This is because the combo cannot extract the text of an item that is not yet loaded and thus cannot populate it in the combo input.
