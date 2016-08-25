<!--
|metadata|
{
    "fileName": "igscroll-known-issues",
    "controlName": "igScroll",
    "tags": ["Scroll","Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igScroll)


The following table summarizes the known issues and limitations of the `igScroll`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

**Legend:**
<table class="table">
	<tbody>
		<tr>
			<td>![](../../images/images/positive.png)</td>
			<td>Workaround available</td>
		</tr>
		<tr>
			<td>![](../../images/images/negative.png)</td>
			<td>No known workaround</td>
		</tr>
		<tr>
			<td>![](../../images/images/plannedFix.png)</td>
			<td>No known workaround, fix planned</td>
		</tr>
	</tbody>
</table>

## [igScroll – General](#scroll-general)

Issue | Description | Status
------|-------------|-------
[When initailizing igScroll on a initially hidden element scrolling does not work.](#initially-hidden) | When initializing the igScroll on a hidden element, after showing the element the scrollbars don't show and scrolling does not work| ![](../../images/images/positive.png)
Keyboard Interaction don't work if the igScroll target element does not have tabIndex attribute set and is not focusable. | Keyboard interactions are only availble when the igScroll element is focused. If the element is not focusable (has no tabIndex attribute) no keyboard interactions can be invoked. | ![](../../images/images/negative.png)

## <a id="scroll-general"></a> igScroll – General

### <a id="initially-hidden"></a> When initailizing igScroll on a initially hidden element scrolling does not work.

 When initializing the igScroll on a hidden element, after showing the element the scrollbars don't show and scrolling does not work.
 
> **Workaround** 
> 
> The `scrollHeight`/`scrollWidth` options should be set to the related container height and width after the container is shown.

## Related Content

### Topics

The following topics provide additional information related to this topic.

- [igScroll](igScroll.html) - This is a group of topics containing the help content about the `igSCroll` control.

