<!--
|metadata|
{
    "fileName": "iglineargauge-known-issues-and-limitations",
    "controlName": "igLinearGauge",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igLinearGauge)


##Known Issues and Limitations

### Overview

The following table summarizes the known issues and limitations of the `igLinearGauge` control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues in the following summary table.

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


### [igLinearGauge]

Issue|Description|Status
---|---|---
[Only one needle supported](#single-needle-supported)|The `igLinearGauge` control supports only one needle.|![](../../images/images/positive.png)
[No label collisions detection](#no-collisions-detection)|The `igLinearGauge` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur.|![](../../images/images/positive.png)


##igLinearGauge


### <a id="single-needle-supported"></a>Only one needle supported

The igLinearGauge control supports only one needle.

>**Workaround** : The effect of displaying multiple needles can be achieved by overlaying several instances of the control.

### <a id="no-collisions-detection"></a>No label collisions detection

The `igLinearGauge` control does not provide means for detecting label collisions. As a result, when the space to visualize the labels is not sufficient, label collisions may occur.

>**Workaround**: Make sure that in the container of the control there is sufficient space to display the labels properly.



 

 


