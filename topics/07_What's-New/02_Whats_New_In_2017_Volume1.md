<!--
|metadata|
{
    "fileName": "whats-new-in-2017-volume1",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# What's New in 2017 Volume 1

This topic presents the controls and the new and enhanced features for the Ignite UI™ 2017 Volume 1 release.


## What’s New Summary

The following summarizes what’s new in 2017 Volume 1. Additional details follow.

### igGrid

Feature | Description
---|---
[GroupBy Summaries](#groupSummaries)| The GroupBy feature now allows a summary row to be displayed below each group data island.

## igGrid

### <a id="groupSummaries"></a> GroupBy Summaries

The GroupBy Summaries feature allows an additional summary row to be displayed below each group data island that displays summary information for the data columns in that island. The summary row is visible only when the related group is expanded.

![](images/group-summaries.png)

#### Related Topics
-   [GroupBy Summaries Feature Overview (igGrid)](igGrid-GroupBy-Summaries.html)

#### Related Samples
-   [Grouping with summaries](%%SamplesUrl%%/grid/grouping)

## igMap

Open Street Map can now accept custom tile source by re-purposing the *tileSource* option off of the *backgroundContent* object.

**In JavaScript**

	$(function () {
            $("#map").igMap({
                width: "700px",
                height: "500px",
                windowRect: { left: 0.1, top: 0.1, height: 0.7, width: 0.7 },
                // specifies imagery tiles from OpenStreetMap
                backgroundContent: {
                    type: "openStreet",
                    tilePath: "tile.openstreetmap.org/{Z}/{X}/{Y}.png"
                }
            });
        });

Before this change *tilePath* was only relevant to the Bing Map. After the change it is applicable to the Open Street Map as well.

Omitting the protocol specifier (*http:* or *https:*) in the URL allows for the control to detect and use the protocol of the hosting web site. It is also possible to force the control into desired protocol by explicitely setting it in the *tilePath* option:

**In JavaScript**

    tilePath: "https://tile.openstreetmap.org/{Z}/{X}/{Y}.png"

*{Z}*, *{X}*, and *{Y}* tokens are replaced during tile rendering by Zoom, Horizontal location, and Vertical location of each tile respectively.
