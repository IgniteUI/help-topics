<!--
|metadata|
{
    "fileName": "igrating(mobile)-overview",
    "controlName": "igRatingMobile",
    "tags": ["API","Data Presentation","Getting Started"]
}
|metadata|
-->

# igRating (Mobile) Overview

## Topic Overview

### Purpose

The topic that introduces the `igRating` Mobile™ control and its features.

### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Features**](#features)
	-   [Vote Customization](#vote-customization)
    -   [Dual-mode operation (Edit/Read-Only modes)](#dual-mode)
    -   [Dynamic data binding](#dynamic-data)
    -   [Rating clearing](#clearing)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="introduction"></a> Introduction

The `igRating` Mobile control enables users to select and rate items from a range of values. By default, the control looks like a row of five stars. The highlighted represent the value of the rating.

![](images/02_igRatingMobileOverview_1.png)

Because the control is designed for mobile devices, the rating values are rounded to whole numbers, except in Read-Only mode. Read-Only mode allows the control to display rating values of either whole or half numbers.

![](images/02_igRatingMobileOverview_2.png)


## <a id="features"></a> Features

The following summarizes the features of the `igRating` Mobile control. Additional details are available after the summary table.

- [Vote Customization](#vote-customization): The `igRating` Mobile control can display custom images for the rating level icons.

- [Dual-mode operation (Edit/Read-Only)modes)](#dual-mode): The `igRating` Mobile control can be configured as a read-only widget.

- [Dynamic changing](#dynamic-data): The `igRating` Mobile control comes with a [JavaScript Client API](%%jQueryApiUrl%%/mobile.igRating) that supports methods for changing the rating value dynamically. You can also dynamically destroy the control, using the control API.

- [Rating clearing](#clearing): The current rating is cleared when the user left-swipes on the `igRating` Mobile control, effectively clearing the rating value that was previously set (replaced by a null value).



### <a id="vote-customization"></a> Vote Customization

The `igRating` Mobile control can display custom images for the rating
level icons.

![](images/02_igRatingMobileOverview_3.png)

This is done with custom styling achieved by overriding the `igRating` Mobile CSS classes. For more information about the `igRating` Mobile CSS classes, follow the [CSS Classes Reference](igRating-Classes-Reference.html) topic.

**Related Samples:**

-   [*igRating* custom items](%%SamplesUrl%%/mobile-rating/custom-items)


### <a id="dual-mode"></a> Dual-mode operation (Edit/Read-Only modes)

The `igRating` Mobile control can be configured as a read-only widget. The default Read-Only style of the control has smaller stars than the style of the standard Edit mode.

![](images/02_igRatingMobileOverview_4.png)

The mode is managed by the [`readOnly`](%%jQueryApiUrl%%/mobile.igRating#options) property. When this property is set to `true`, user operation of the control is disabled.

Read-only values are rounded to the half of the number. For instance, if you set a double value of *2.25*, the control rounds the value to *2.5*. If the value is set to *2.24*, the control rounds the value to *2*.

> **Note:** It is the value that is being rounded, not just its visual representation.


### <a id="dynamic-data"></a> Dynamic data binding

The `igRating` Mobile control comes with a [JavaScript Client API](%%jQueryApiUrl%%/mobile.igRating) that supports methods for changing the rating value dynamically and destroying the control. For more information, follow the [Method Reference](igRating-Method-Reference.html) topic.

> **Note:** All the properties can be changed dynamically, except the [`inputName`](%%jQueryApiUrl%%/mobile.igRating#options) value, which is the name of the hidden input used by the MVC wrapper to carry the rating value to the server.


### <a id="clearing"></a> Rating clearing

The current rating is cleared when the user left-swipes on the `igRating` Mobile control effectively clearing the set rating value (replaced by a null value). This is not achievable within a desktop environment, when the mouse is used.

Note: This feature allows you to set null value via user interaction. It’s possible to this dynamically using the *igRating* Mobile API. For more details about this follow the [Known Issues and Limitations](igRating%28Mobile%29-Known-Issues.html) topics.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Adding igRating Mobile](Adding-igRating%28Mobile%29-to-a-Web-Page.html): This topic explains how you can add the `igRating`™ Mobile control to a web page.

- [API Reference](igRating-API-Reference.html): This topic introduces the `igRating`™ Mobile API categories. You can find all of the references to the control properties, methods, events and CSS classes, as well as some specific cases when the API is used.

- [CSS Classes Reference](igRating-Classes-Reference.html): The topic that introduces the user to the `igRating` control’s CSS classes.

- [Method Reference](igRating-Method-Reference.html): The topic that introduces the user to the `igRating` control’s methods.

- [Known Issues and Limitations](igRating%28Mobile%29-Known-Issues.html): This topic demonstrates the known issues for the mobile `igRating` Mobile control.

- [Accessibility Compliance](igRating%28Mobile%29-Accessibility.html): This topic explains `igRating` Mobile accessibility features and provides advice how to achieve accessibility compliance for pages containing ratings.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Basic Usage](%%SamplesUrl%%/mobile-rating/basic-usage): Sample that shows you how to initialize the `igRating` Mobile.

- [Custom Items](%%SamplesUrl%%/mobile-rating/custom-items): Sample that shows you how to set custom images for the `igRating` Mobile.