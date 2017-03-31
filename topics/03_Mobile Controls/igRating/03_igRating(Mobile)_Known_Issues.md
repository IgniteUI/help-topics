

----------
<!--
|metadata|
{
    "fileName": "igrating(mobile)-known-issues",
    "controlName": "igRatingMobile",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igRating Mobile)

## Topic Overview

### Purpose

This topic demonstrates the known issues for the mobile `igRating`™ control.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [igRating Overview](igRating%28Mobile%29-Overview.html): This topic is an overview for the mobile `igRating` control.

### In this topic

This topic contains the following sections:

-   [**Known Issues and Limitations**](#overview)
    -   [Zero value cannot be selected in the mobile igRating](#zero-value-select)
    -   [Zero value cannot be selected in the mobile igRating - workaround/solution](#zero-value-workaround)
-   [**Related Content**](#related-content)



## <a id="overview"></a> Known Issues and Limitations

The following table summarizes the known issues and limitations for the mobile `igRating` of the %%ProductName%% %%ProductVersionShort%% release. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

Legend: | 
--------|------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround available
![](../../images/images/plannedFix.png) | Fix planned



Feature | Description | Resolved?
---|---|---
Zero value cannot be selected in the mobile `igRating`, when it is running under the Desktop browser. | If you want to set the value of the rating back to zero, it will not be possible while interacting with the control under Desktop browser. | ![](../../images/images/positive.png)



### <a id="zero-value-select"></a> Zero value cannot be selected in the mobile igRating, when it’s running under Desktop browser

It is not possible to set the value of the rating back to zero while interacting with the control under Desktop browser. While this is possible within a touch environment by swiping left to the beginning of the `igRating`, setting the value to null though user interaction is not achievable for desktop environment. However, you can always set the value to null using the `igRating` Mobile API.

### <a id="zero-value-workaround"></a> Zero value cannot be selected in the mobile igRating - workaround/ solution

You can use the `igRating` API and set zero value, as in the code snippet below:

**In JavaScript:**

```js
$("#selector").igRating("option", "value", 0);
```

For more information on how to set an empty rating value and different implementations for this approach, you can refer to the **Samples** in the **Related Content** section.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igRating Mobile Overview](igRating%28Mobile%29-Overview.html): The topic that introduces the user to the `igRating`™ control’s main features and functionality.

- [Adding Mobile igRating to a Page](Adding-igRating%28Mobile%29-to-a-Web-Page.html): This topic explains how you can add `igRating`™ mobile control to a web page.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic. All of the samples shows you different approaches to set zero value for the rating.

- [Basic Usage](%%SamplesUrl%%/mobile-rating/basic-usage): Sample that shows you how to initialize the `igRating` Mobile.

- [Custom Items](%%SamplesUrl%%/mobile-rating/custom-items): Sample that shows you how to set custom images for the `igRating` Mobile.

- [ASP.NET MVC Helper](%%SamplesUrl%%/mobile-rating/aspnet-mvc-helper): Sample that shows you how to initialize the `igRating` Mobile with the ASP.NET MVC helper.





 

 


