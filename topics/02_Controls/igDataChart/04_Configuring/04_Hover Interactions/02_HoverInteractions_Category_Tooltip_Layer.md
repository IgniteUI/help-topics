<!--
|metadata|
{
    "fileName": "hoverinteractions-category-tooltip-layer",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Configuring the Category Tooltip Layer (igDataChart)

## Topic Overview

### Purpose

This topic provides information about the category tooltip layer used for hover interactions. It describes the properties of the category tooltip layer and provides an example of its implementation.

### Required background

The following topics are prerequisites to understanding this topic:


- [Adding igDataChart](igDataChart-Adding.html): This topic demonstrates how to add the `igDataChart`™ control to a page and bind it to data.

- [Binding igDataChart to Data](igDataChart-DataBinding.html): This topic explains how to bind the `igDataChart`™ control to various data sources (JavaScript array, `IQueryable<T>`, web service).


### In this topic

This topic contains the following sections:

-   [Overview](#overview)
	-   [Preview](#preview)
-   [Properties](#properties)
-   [Example](#example)
-   [Related Content](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="overview"></a> Overview

#### Category tooltip layer overview

The `categoryTooltipLayer` displays grouped tooltips for the series on the `igDataChart` control using a category axis.

You can configure tooltips to target a specific axis. This can be done be setting the `targetAxis` property. For more information on this property, see the [Properties](#properties) section below.

By default the grouped tooltips appear at the top of the `igDataChart` control; however this default value can be overridden by setting the `toolTipPosition` property. For more information on this property, see the `categoryTooltipLayer` properties section below.

#### <a id="preview"></a> Preview

The following image is a preview of the `igDataChart` control renders with the `categoryTooltipLayer` added.

![](images/jQuery_Category_Tooltip_Layer_01.png)


## <a id="properties"></a> Properties

#### Category tooltip layer summary

The following table summarizes the properties of the categoryTooltipLayer layer.

Property Name | Property Type | Description
---|---|---
targetAxis | axis | This property specifies which axis should have an enabled category tooltip layer.
useInterpolation | bool | This property specifies if the tooltip’s x position should be interpolated rather than snapping to the gridlines or the center spaces.
toolTipPosition | categoryTooltipLayerPosition | This property specifies the location of the tooltip. It can be set to:<ul><li>Auto –A position is selected automatically</li><li>OutsideStart - Displays at the outside start of the axis</li><li>InsideStart - Displays at the inside start of the axis</li><li>InsideEnd - Displays at the inside end of the axis</li><li>OutsideEnd - Displays at the outside end of the axis</li></ul>


## <a id="example"></a> Example

This sample demonstrates the Category Tooltip Layer that displays grouped tooltips for series that use a category axis.
The sample options pane allows you to edit the properties of the layer, such as changing the position of the tooltip.

<div class="embed-sample">
   [Category Tooltip Layer](%%SamplesEmbedUrl%%/data-chart/category-tooltip-layer)
   ![](images/jQuery_Category_Tooltip_Layer_01.png)
</div>


## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

- [Hover Interactions Overview (igDataChart)](HoverInteractions-Hover-Interactions-Overview.html): This topic provides conceptual information about the hover interactions available on the `igDataChart` control including the different types of hover interaction layers available.

- [Hover Interactions Property Reference (igDataChart)](HoverInteractions-Common-Properties.html): This topic provides information about the properties and methods that the hover interaction feature uses for highlighting, hovering and interacting with the tooltip interactions inherited from the series class.

- [Configuring the Category Highlight Layer (igDataChart)](HoverInteractions-Category-Highlight-Layer.html): This topic provides information about the category highlight layer which is used for hover interactions. It describes the properties of the category highlight layer and provides an example of its implementation.

- [Configuring the Category Item Highlight Layer (igDataChart)](HoverInteractions-Category-Item-Highlight-Layer.html): This topic provides information about the category item highlight layer used for hover interactions. It describes the properties of the category item highlight layer and provides an example of its implementation.

- [Configuring the Item Tooltip Layer (igDataChart)](HoverInteractions-Item-Tooltip-Layer.html): This topic provides information about the item tooltip layer which is used for hover interactions. It describes the properties of the item tooltip layer and also provides an example of its implementation.

- [Configuring the Crosshair Layer (igDataChart)](HoverInteractions-Crosshair-Layer.html): This topic provides information about the crosshair layer used for hover interactions. It describes the properties of the crosshair layer and provides an implementation example.




### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Hover Interactions – Category Highlight Layer](HoverInteractions-Category-Highlight-Layer.html#example): This sample demonstrates the Category Highlight Layer that targets a category axis, or all category axes in the `igDataChart`™ control. The sample options pane allows you to edit the properties of the Category Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Category Item Highlight Layer](HoverInteractions-Category-Item-Highlight-Layer.html#example): This sample demonstrates the Category Item Highlight Layer that highlights items in a series that use a category axis either by drawing a banded shape at their position or by rendering a marker at their position.The sample options pane allows you to edit the properties of the Category Item Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Item Tooltip Layer](HoverInteractions-Item-Tooltip-Layer.html#example): This sample demonstrates the Item Tooltip Layer that displays tooltips for all target series individually. The sample options pane allows you to edit the properties of the layer, such as changing the transition duration.

- [Hover Interactions – Crosshair Layer](HoverInteractions-Crosshair-Layer.html#example): This sample demonstrates the Crosshair Layer that provides crossing lines that meet at the actual value of every series that they are targeting. The sample options pane allows you to edit the properties of the layer, such as changing the thickness of the crosshair.

- [Hover Interactions – Multiple Layers](%%SamplesUrl%%/data-chart/multiple-layers): This sample demonstrates how multiple layers interact within the `igDataChart` control. This sample displays the Item Tooltip Layer, the Crosshair layer and the Category Highlight Layer.


 

 


