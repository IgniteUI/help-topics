<!--
|metadata|
{
    "fileName": "igbulletgraph-known-issues-and-limitations",
    "controlName": "igBulletGraph",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igBulletGraph)

## Known Issues and Limitations

#### Overview

The following table summarizes the known issues and limitations of the `igBulletGraph` control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues in the following summary table.

#### Legend:
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
			<td>Fix planned</td>
		</tr>
	</tbody>
</table>


#### [igBulletGraph](#igBulletGraph)

Issue | Description | Status
---|---|---
[Only one performance bar and one comparative marker supported](#_SingleCMAndPB) | The `igBulletGraph` control supports only one performance bar and one comparative marker. | ![](../../images/images/positive.png)
[No label collisions detection](#_NoLabelsCollision) | The `igBulletGraph` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur. | ![](../../images/images/positive.png)
Performance bar can be drawn only from the minimum scale position | The starting position of the performance bar can only be at the minimum value of the scale, i.e. the performance bar cannot originate from an arbitrary position. | ![](../../images/images/negative.png) ![](../../images/images/plannedFix.png)


## <a id="igBulletGraph"></a> igBulletGraph

#### <a id="_SingleCMAndPB"></a> Only one performance bar and one comparative marker supported

The `igBulletGraph` control supports only one performance bar and one comparative marker.

> **Workaround**
>
The effect of displaying multiple performance bars or multiple comparative markers can be achieved by overlaying several instances of the control.

#### <a id="_NoLabelsCollision"></a> No label collisions detection

The `igBulletGraph` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur.

> **Workaround**
>
Make sure that in the container of the control there is sufficient space to display the labels properly.



 

 


