<!--
|metadata|
{
    "fileName": "hoverinteractions-final-value-layer",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Configuring the Item Tooltip Layer (igDataChart)


## Topic Overview

### Purpose


This topic provides information about the item tooltip layer which is used for hover interactions. It describes the properties of the item tooltip layer and also provides an example of its implementation.

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

#### Item tooltip layer overview

The `itemToolTipLayer` displays tooltips for all the series on the `igDataChart` control individually when the mouse hovers over that particular series.

The tooltip style is inherited from the chart; however you can override this default behavior by setting the `toolTipStyle` property. For more information on this property see the [Properties](#properties) section below.

### <a id="preview"></a> Preview

The following image is a preview of the `igDataChart` control renders with the `itemToolTipLayer` added.

![](images/jQuery_Item_Tooltip_Layer_01.png)


## <a id="properties"></a> Properties

#### Item tooltip layer summary

The following table summarizes the properties of the `itemToolTipLayer` layer.

Property Name | Property Type | Description
---|---|---
| labelMemberPath | `String` | Gets or sets the label mapping property for the callouts.
| xMemberPath | `String` | Gets or sets the x-value mapping property for the callouts.
| yMemberPath | `String` | Gets or sets the y-value mapping property for the callouts.
| contentMemberPath | `String` | Gets or sets the content mapping property for the callouts.
| keyMemberPath | `String` | Gets or sets the key mapping property for the callouts.
| isCalloutOffsettingEnabled | `Boolean` | Gets or sets if callouts will be offset from collision resolution.


## <a id="example"></a> Example

This sample demonstrates the Item Tooltip Layer that displays tooltips for all target series individually.
The sample options pane allows you to edit the properties of the layer, such as changing the transition duration.

<div class="embed-sample">
   [Item Tooltip Layer](%%SamplesEmbedUrl%%/data-chart/item-tooltip-layer)
   ![](images/jQuery_Item_Tooltip_Layer_01.png)
</div>


## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

- [Hover Interactions Overview (igDataChart)](HoverInteractions-Hover-Interactions-Overview.html): This topic provides conceptual information about the hover interactions available on the `igDataChart` control including the different types of hover interaction layers available.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Hover Interactions – Category Highlight Layer](HoverInteractions-Category-Highlight-Layer.html#example): This sample demonstrates the Category Highlight Layer that targets a category axis, or all category axes in the `igDataChart`™ control. The sample options pane allows you to edit the properties of the Category Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Multiple Layers](%%SamplesUrl%%/data-chart/multiple-layers): This sample demonstrates how multiple layers interact within the `igDataChart` control. This sample displays the Item Tooltip Layer, the Crosshair layer and the Category Highlight Layer.
