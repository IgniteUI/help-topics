<!--
|metadata|
{
    "fileName": "hoverinteractions-callout-layer",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Configuring the Callout Layer (igDataChart)


## Topic Overview

### Purpose


This topic provides information about the callout layer annotation. It describes the properties of the callout layer and also provides an example of its implementation.

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

#### Callout Layer Overview

The `calloutLayer` displays annotations from existing or new data on the chart.

### <a id="preview"></a> Preview

The following image is a preview of the `igDataChart` control renders with the `calloutLayer` added.

![](images/jQuery_Callout_Layer_01.png)


## <a id="properties"></a> Properties

#### Callout Layer Summary

The following table summarizes the properties of the `calloutLayer` layer.

Property Name | Property Type | Description
---|---|---
| labelMemberPath | `String` | Gets or sets the label mapping property for the callouts.
| xMemberPath | `String` | Gets or sets the x-value mapping property for the callouts.
| yMemberPath | `String` | Gets or sets the y-value mapping property for the callouts.
| contentMemberPath | `String` | Gets or sets the content mapping property for the callouts.
| keyMemberPath | `String` | Gets or sets the key mapping property for the callouts.
| isCalloutOffsettingEnabled | `Boolean` | Gets or sets if callouts will be offset from collision resolution.


## <a id="example"></a> Example

This sample demonstrates the Callout Layer that displays tooltips for all target series individually.
The sample options pane allows you to edit the properties of the layer, such as changing the transition duration.

<div class="embed-sample">
   [Callout Layer](%%SamplesEmbedUrl%%/data-chart/callout-layer)
   ![](images/jQuery_Callout_Layer_01.png)
</div>


## <a id="related-content"></a>Related Content

### <a id="topics"></a>Topics

- [Hover Interactions Overview (igDataChart)](HoverInteractions-Hover-Interactions-Overview.html): This topic provides conceptual information about the hover interactions available on the `igDataChart` control including the different types of hover interaction layers available.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

- [Hover Interactions – Category Highlight Layer](HoverInteractions-Category-Highlight-Layer.html#example): This sample demonstrates the Category Highlight Layer that targets a category axis, or all category axes in the `igDataChart`™ control. The sample options pane allows you to edit the properties of the Category Highlight Layer, such as changing the color of the highlight, outline, thickness and more.

- [Hover Interactions – Multiple Layers](%%SamplesUrl%%/data-chart/multiple-layers): This sample demonstrates how multiple layers interact within the `igDataChart` control. This sample displays the Item Tooltip Layer, the Crosshair layer and the Category Highlight Layer.
