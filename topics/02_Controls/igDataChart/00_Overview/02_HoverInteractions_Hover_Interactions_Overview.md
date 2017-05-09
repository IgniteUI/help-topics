<!--
|metadata|
{
    "fileName": "hoverinteractions-hover-interactions-overview",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Hover Interactions Overview (igDataChart)

#### Purpose

This topic provides conceptual information about the hover interactions available on the `igDataChart` control including the different types of hover interaction layers available.

#### Required background

The following topics are prerequisites to understanding this topic:

- [Adding igDataChart](igDataChart-Adding.html): This topic demonstrates how to add the `igDataChart`™ control to a page and bind it to data.

- [Binding igDataChart to Data](igDataChart-DataBinding.html): This topic explains how to bind the `igDataChart`™ control to various data sources (JavaScript array, `IQueryable<T>`, web service).


#### In this topic

This topic contains the following sections:

-   [Overview](#overview)
-   [Common Properties](#common-properties)
-   [Types of Layers](#types-of-layers)
    -   [Crosshair Layer](#crosshair-layer)
    -   [Category Highlight Layer](#category-highlight-layer)
    -   [Category Item Highlight Layer](#category-item-highlight-layer)
    -   [Category Tooltip Layer](#category-tooltip-layer)
    -   [Item Tooltip Layer](#item-tooltip-layer)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a> Overview

#### Hover interactions summary

Hover interactions are implemented through hover interaction layers which are series that are added to the series collection. These layers are dependent on the cursor position. Adding the hover interaction layers to the `igDataChart` control disables the default behavior of the crosshairs and/or tooltips (depending on which type of layer added).

The default behavior is disabled because it prevents visual confusion as the hover interaction layers perform a similar visual function compared to the built in behavior as the cursor moves. You can, however, override this behavior and allow the default crosshair functionality to perform in addition to the hover interaction layer functionality. Also of note, only target a series by one tooltip layer at a time. If you target more than one tooltip layer at a series, the hover interaction layers that use tooltips will not function as expected. Using a tooltip for a series in more than one location at once is not allowed.

The following screenshot displays the `igDataChart` control with the category highlight layer, the crosshair layer and the item tooltip layer implemented.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Multiple_Layers_01.png)



## <a id="common-properties"></a> Common Properties

#### Common properties and methods overview

Since the hover interaction layers inherit from the `Series` object, they gain a lot of the properties and methods that are available on the `Series` base class. However, not everything from the `Series` class is meaningful for the hover interaction layers. For example, hover interaction layers are not designed to interact with the mouse and should not be hit testable; consequently they will not raise mouse related events.

For more information on the common properties and methods, see the [Hover Interactions Property Reference (igDataChart)](HoverInteractions-Common-Properties.html) topic.



## <a id="types-of-layers"></a> Types of Layers

#### Introduction

Currently there are 5 different hover interaction layers available on the `igDataChart` control. Each of these hover interactions layers provides a different highlight, hover and tooltip interactions that may be used individually or combined with one another providing powerful hover interactions.

The following summarizes the different types of layers available on the `igDataChart` control:

### <a id="crosshair-layer"></a> Crosshair Layer

The `crosshairLayer` provides crossing lines that meet at the actual value of every targeted series.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Crosshair_Layer_01.png)

For more information, see the [Configuring the Crosshair Layer (igDataChart)](HoverInteractions-Crosshair-Layer.html) topic.

### <a id="category-highlight-layer"></a> Category Highlight Layer

The `categoryHighlightLayer` targets a category axis, or all category axes in the `igDataChart` control. They draw a shape that illuminates the area of the axis closest to the cursor position.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Category_Highlight_Layer_01.png)

For more information, see the [Configuring the Category Highlight Layer (igDataChart)](HoverInteractions-Category-Highlight-Layer.html) topic.

### <a id="category-item-highlight-layer"></a> Category Item Highlight Layer

The `categoryItemHighlightLayer` layer highlights items in a series that use a category axis either by drawing a banded shape at their position or by rendering a marker at their position.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Item_Highlight_Layer_01.png)

For more information, see the [Configuring the Category Item Highlight Layer (igDataChart)](HoverInteractions-Category-Item-Highlight-Layer.html) topic.

### <a id="category-tooltip-layer"></a> Category Tooltip Layer

The `categoryTooltipLayer` displays grouped tooltips for series using a category axis.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Category_Tooltip_Layer_01.png)

For more information, see the [Configuring the Category Tooltip Layer (igDataChart)](HoverInteractions-Category-Tooltip-Layer.html) topic.

### <a id="item-tooltip-layer"></a> Item Tooltip Layer

The `itemTooltipLayer` displays tooltips for all target series individually.

![](../04_Configuring/04_Hover Interactions/images/jQuery_Item_Tooltip_Layer_01.png)

For more information, see the [Configuring the Item Tooltip Layer (igDataChart)](HoverInteractions-Item-Tooltip-Layer.html) topic.


## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

- [Hover Interactions Overview (igDataChart)](HoverInteractions-Hover-Interactions-Overview.html): This topic provides conceptual information about the hover interactions available on the `igDataChart` control including the different types of hover interaction layers available.

- [Hover Interactions Property Reference (igDataChart)](HoverInteractions-Common-Properties.html): This topic provides information about the properties and methods that the hover interaction feature uses for highlighting, hovering and interacting with the tooltip interactions inherited from the `series` class.

- [Configuring the Crosshair Layer (igDataChart)](HoverInteractions-Crosshair-Layer.html): This topic provides information about the crosshair layer used for hover interactions. It describes the properties of the crosshair layer and provides an implementation example.

- [Configuring the Category Highlight Layer (igDataChart)](HoverInteractions-Category-Highlight-Layer.html): This topic provides information about the category highlight layer which is used for hover interactions. It describes the properties of the category highlight layer and provides an example of its implementation.

- [Configuring the Category Item Highlight Layer (igDataChart)](HoverInteractions-Category-Item-Highlight-Layer.html): This topic provides information about the category item highlight layer used for hover interactions. It describes the properties of the category item highlight layer and provides an example of its implementation.

- [Configuring the Category Tooltip Layer (igDataChart)](HoverInteractions-Category-Tooltip-Layer.html):  This topic provides information about the category tooltip layer used for hover interactions. It describes the properties of the category tooltip layer and provides an example of its implementation.

- [Configuring the Item Tooltip Layer (igDataChart)](HoverInteractions-Item-Tooltip-Layer.html): This topic provides information about the item tooltip layer which is used for hover interactions. It describes the properties of the item tooltip layer and also provides an example of its implementation.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Hover Interactions – Crosshair Layer](HoverInteractions-Crosshair-Layer.html#example): This sample demonstrates the Crosshair Layer that provides crossing lines that meet at the actual value of every series that they are targeting. The sample options pane allows you to edit the properties of the layer, such as changing the thickness of the crosshair.

- [Hover Interactions – Category Highlight Layer](HoverInteractions-Category-Highlight-Layer.html#example): This sample demonstrates the Category Highlight Layer that targets a category axis, or all category axes in the `igDataChart`™ control. The sample options pane allows you to edit the properties of the Category Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Category Item Highlight Layer](HoverInteractions-Category-Item-Highlight-Layer.html#example): This sample demonstrates the Category Item Highlight Layer that highlights items in a series that use a category axis either by drawing a banded shape at their position or by rendering a marker at their position.The sample options pane allows you to edit the properties of the Category Item Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Category Tooltip Layer](HoverInteractions-Category-Tooltip-Layer.html#example): This sample demonstrates the Category Tooltip Layer that displays grouped tooltips for series that use a category axis. The sample options pane allows you to edit the properties of the layer, such as changing the position of the tooltip.

- [Hover Interactions – Item Tooltip Layer](HoverInteractions-Item-Tooltip-Layer.html#example): This sample demonstrates the Item Tooltip Layer that displays tooltips for all target series individually. The sample options pane allows you to edit the properties of the layer, such as changing the transition duration.

- [Hover Interactions – Multiple Layers](%%SamplesUrl%%/data-chart/multiple-layers): This sample demonstrates how multiple layers interact within the `igDataChart` control. This sample displays the Item Tooltip Layer, the Crosshair layer and the Category Highlight Layer.





 

 


