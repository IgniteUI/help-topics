<!--
|metadata|
{
    "fileName": "igtilemanager-known-issues-and-limitations",
    "controlName": "igTileManager",
    "tags": ["Known Issues","Layouts"]
}
|metadata|
-->

# Known Issues and Limitations (igTileManager)

## Known Issues and Limitations
### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igTileManager`™ control for the Ignite UI® %%ProductVersion%% release. Detailed explanations of all of the issues and the existing workarounds are provided after the summary table.

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



### igTileManager

Issue| Description |Status
---|---|---
`igTileManager` not working properly for browsers not supporting the box-sizing model | This box-sizing model ensures that the box grows inwards instead of outwards. Otherwise positioning of tiles that have paddings and borders and any other outer height/width modifiers is very difficult. |![](../../images/images/negative.png)
jQuery versions lower than 1.8.0 are not supported. |There are certain limitations in JQuery versions earlier than 1.8.0 that prevent the `igTileManager` control from working properly. |![](../../images/images/negative.png)
Animated transitions may be choppy when having multiple tiles with data-intensive content (like images).|The `igTileManager` control relies on jQuery animations and is constrained by their performance.|![](../../images/images/negative.png) <br> ![](../../images/images/plannedFix.png)
`igTileManager` not working properly when the page is zoomed in over 130%.|When the web page has been zoomed to more than 130% of its actual size in the browser and the user maximizes a tile, the minimized tiles are put out of sight and the user cannot interact with them.|![](../../images/images/negative.png) <br> ![](../../images/images/plannedFix.png)


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Configuring igTileManager](igTileManager-Configuring.html): This topic explains how to configure the features and behavior of the `igTileManager` control.
    




 

 


