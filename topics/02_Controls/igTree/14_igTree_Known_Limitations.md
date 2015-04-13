<!--
|metadata|
{
    "fileName": "igtree-known-limitations",
    "controlName": "igTree",
    "tags": ["How Do I","Known Issues","Tips and Tricks"]
}
|metadata|
-->

# igTree Known Limitations

## Known Issues and Limitations Overview
### Issues/Limitations chart
The table below briefly describes the known issues/limitations of the Ignite UI® %%ProductVersion%% release for the `igTree`™ control. Detailed explanations and the possible workarounds are provided for some of the issues in the blocks following the table.

Legend:

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

Feature | Description | Workaround?
---|---|---
LI fixed widths|In IE7, when LI elements inherit fixed widths from their parent containers, the content of a given LI may be larger than this fixed width and thus the LI always wraps. |![](../../images/images/positive.png)
Searching nodes with Load on demand|When using the `findNodesByText` method, searching is limited to the nodes that have been rendered on the client. Therefore, using this in conjunction with `loadOnDemand` enabled will return results only from the nodes that have been created.|![](../../images/images/negative.png)
Active node styles do not de-activate properly|In Firefox, there is an issue in jQuery 1.4.4 which fails to fire the blur event as expected. This causes the active styles of nodes to remain even after they are no longer active.|![](../../images/images/positive.png)
Client-side binding to XML|Binding to XML with hierarchical bindings is fully supported under ASP.NET MVC but client-side binding is limited to flat bindings. This is planned to be supported in a future release.|![](../../images/images/plannedFix.png)
Move and copy a node without primary key in a tree with primary keys|This is caused by mixtured of bindings that contain primary keys and ones that do not.|![](../../images/images/negative.png)

### LI fixed widths limitation description
When LI elements inherit fixed widths from their parent containers in IE7, the content of a given LI may be larger than this fixed width and thus the LI always wraps it.

### LI fixed widths workaround
This can be resolved by explicitly setting the appropriate custom width to all LI elements of the tree.

### Active node styles description
In Firefox, there is an issue in jQuery 1.4.4 which fails to fire the blur event as expected. This causes the active styles of nodes to remain even after they are no longer active.

### Active node styles workaround
Upgrade to a later version of jQuery after 1.4.4 or upgrade to the latest service release of Ignite UI where the `igTree` control resolves this issue internally.

## Move and copy a node without primary key in a tree with primary keys
Do not mix bindings with primary keys and bindings without.

Following are some other topics you may find useful.

-   [Known Issues](Known-Issues-Revision-History.html)
-   [igTree Overview](igTree-Overview.html)

 

 


