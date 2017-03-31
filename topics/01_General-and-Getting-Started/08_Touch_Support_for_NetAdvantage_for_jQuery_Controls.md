<!--
|metadata|
{
    "fileName": "touch-support-for-netadvantage-for-jquery-controls",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Touch Support for %%ProductName%% Controls



##Topic Overview


### Purpose

This topic provides a summary of how the %%ProductName%%™ suite supports touch-enabled environments, suggests best practices, and lists the touch-support specifics of the individual %%ProductName%% controls.

### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
    -   [Touch support summary](#touch-support-summary)
    -   [Scrolling in touch environment](#scrolling-touch-environment)
    -   [Mobile Pages Best Practices](#mobile-pages-best-practice)
-   [Touch Support Specifics of Individual Controls](#touch-support-specifics-individual-controls)
    -   [igGrid](#iggrid)
    -   [igHierarchicalGrid](#ighierarchicalgrid)
    -   [igPopover](#igpopover)
    -   [igVideoPlayer](#igvideoplayer)



##<a id="introduction"></a>Introduction


###<a id="touch-support-summary"></a> Touch support summary

All %%ProductName%% controls support touch interaction. This support is possible by adding new features and components in order to support touch-compatible behaviors.

Rendered in a touch-enabled environment, each %%ProductName%% control will look and behave the same way under Desktop and Touch platforms. For example, the igGrid™ widget is not an entirely new control for the touch device, but includes touch-optimized features which are available under a touch-enabled environment. This adaptability allows you (with little configuration) to have multi-platform control in your applications. For details surrounding individual controls, refer to the Control overview section.

>**Note:** It’s recommended to use the Modernizr JavaScript library together with %%ProductName%% for jQuery controls. The controls work well without Modernizr, but when the library is available on the page, the controls adapt to a more touch-friendly mode.

###<a id="scrolling-touch-environment"></a> Scrolling in touch environment

All %%ProductName%% controls support scrolling by default when running under a touch-enabled environment. The scrolling behavior is controlled by an internal component called `igScroll`™.

For the scrolling behavior to be operational under touch, the `igScroll` script must be referenced on the page. This is done automatically when using the [Infragistics® Loader](Using-Infragistics-Loader.html). However, if you do not use the Loader, you need to either reference it manually or to reference the infragistics.core.js file which contains `igScroll`.

To reference `igScroll` manually:

**In HTML:**

```html
<script type="text/javascript" src="js/modules/infragistics.ui.scroll.js"></script>
```

You can use the `igScroll` component to make other HTML elements scrollable, like the `<div>`, for example:

**In HTML:**

```html
<div data-scroll=”true”></div>
```

This way, the `igScroll` component makes the container scrollable under touch-enabled browsers.

###<a id="mobile-pages-best-practice"></a>Mobile Pages Best Practices

%%ProductName%% controls are optimized for touch as well as standard desktop web browser use. In addition to using the stock controls you will want to make sure to follow a few best practices in order to get the best performance and response from each control:

-   **Use Modernizr**

	Use the Modernizr JavaScript library together with %%ProductName%% controls in order to ensure the controls render in the most touch-optimized mode possible.

-   **Define the viewport meta tag**

	Explicitly setting the view port dimensions of your page will ensure your page is rendered under right dimensions and proportions. The following code listing demonstrates how to configure your pages view port meta tag:

**In HTML:**

```html
<meta name="viewport" 
      content="width=device-width, 
               initial-scale=1, 
               maximum-scale=2.5, 
               minimum-scale=0.1, 
               user-scalable=yes" />
```

##<a id="touch-support-specifics-individual-controls"></a>Touch Support Specifics of Individual Controls


###Touch Support controls summary

The following table summarizes the controls have specifics in their support of touch-enabled environments. Additional details are available for each updated control after the table.

<table class="table table-striped">
    <thead>
        <tr>
            <th>
Control
            </th>

            <th>
Description
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
[*igGrid*](#iggrid)
            </td>
            <td>
Some of the features include properties that allow touch-optimized interaction.
            </td>
        </tr>

        <tr>
            <td>
[*igHierarchicalGrid*](#ighierarchicalgrid)
            </td>
            <td>
The `igHierarchicalGrid`™ internally uses the `igGrid` widget; therefore, all touch-optimized features of `igGrid` are also available in the `igHierarchicalGrid` widget.
            </td>
        </tr>

        <tr>
            <td>
[*igPopover*](#igpopover)
            </td>
            <td>
The control is fully functional in touch environment. The only limitation is that you cannot configure the activation event: on touch devices the popover always shows on tap no matter what event has been set as activating.
            </td>
        </tr>

        <tr>
            <td>
[*igVideoPlayer*](#igvideoplayer)
            </td>

            <td>
When Modernizr library is available, `igVideoPlayer`™ falls back to the default browser video player.
            </td>
        </tr>
    </tbody>
</table>

###<a id="iggrid"></a> igGrid

The following list summarizes the `igGrid` features that have properties to support touch capabilities or needs special modification to run properly in touch-enabled environments.

-   **Feature Chooser**
-   **GroupBy**
-   **Hiding**
-   **Multiple Selection** – There are some special selection properties that allow you to select multiple cells on touch platforms.
-   **Multiple Sorting**
-   **Row Selectors** –You need to explicitly define row selectors, when you want to select multiple rows on touch platform. (You must use the Row Selectors widget anytime you want to select multiple rows.)
-   **Tooltips** – use the popover style which is a tooltip style specially designed to meet the touch compatibility needs

### Related Content

<table class="table table-striped">
    <thead>
        <tr>
            <th>
Feature
            </th>

            <th>
Content
            </th>
        </tr>
    </thead>
    <tbody>
        

        <tr>
            <td>
**Feature Chooser**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](igGrid-Feature-Chooser.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](%%SamplesUrl%%/grid/feature-chooser)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Hiding**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Hiding Column Chooser](igGrid-Hiding-Column-Chooser.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](%%SamplesUrl%%/grid/feature-chooser)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**GroupBy**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Group By Modal Dialog](igGrid-Group-By-Dialog-Overview.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Grouping Customization](%%SamplesUrl%%/grid/grouping-customization)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Multiple Selection**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Multiple Cell Selection](igGrid-Multiple-Cell-Selection.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Selection](%%SamplesUrl%%/grid/selection)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Multiple Sorting**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Multiple Sorting Dialog Window](igGrid-Multiple-Sorting-Dialog.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](%%SamplesUrl%%/grid/feature-chooser)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Row Selectors**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Enabling Row Selectors](igGrid-Row-Selectors.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Row Selectors](%%SamplesUrl%%/grid/row-selectors)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Tooltips**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Tooltips Popover](igGrid-Popover-Style-for-Tooltips.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Tooltips](%%SamplesUrl%%/grid/tooltips)
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



###<a id="ighierarchicalgrid"></a>igHierarchicalGrid

To make an `igHierarchicalGrid` feature touch-compatible, you configure its settings in the same way as with the `igGrid` control.

The following list summarizes the `igHierarchicalGrid` features that have properties to support touch-capabilities or require special modification to run properly in touch-enabled environments.

-   **Feature Chooser**
-   **GroupBy**
-   **Hiding**
-   **Multiple Selection** – There are some special selection properties that allow you to select multiple cells on touch platforms. (For the `igHierarchicalGrid` you will need to enable the Selection feature in the parent grid, because the selection feature is not inherited.)
-   **Multiple Sorting**
-   **Row Selectors** –You need to explicitly define row selectors, when you want to select multiple rows on touch platform. (You must use the Row Selectors widget anytime you want to select multiple rows.)
-   **Tooltips** – use the popover style which is a tooltip style specially designed to meet the touch compatibility needs

>**Note:** Since the `igHierarchicalGrid` internally uses the `igGrid`, the topics relating to these features are `igGrid` topics. The only exception is `igGrid` Group By feature for the `igHierarchicalGrid`, where the modal dialog differs between the two grids.

### Related Content

<table class="table table-striped">
    <thead>
        <tr>
            <th>
Feature
            </th>

            <th>
Content
            </th>
        </tr>
    </thead>
    <tbody>
        

        <tr>
            <td>
**Feature Chooser**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](igGrid-Feature-Chooser.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](%%SamplesUrl%%/grid/feature-chooser)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Hiding**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Hiding Column Chooser](igGrid-Hiding-Column-Chooser.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Feature Chooser](%%SamplesUrl%%/grid/feature-chooser)
                    </li>
                </ul>

                
            </td>
        </tr>

        <tr>
            <td>
**GroupBy**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Group By Modal Dialog](igGrid-Group-By-Dialog-Overview.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[Grouping with summaries](%%SamplesUrl%%/grid/grouping)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Multiple Selection**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Multiple Cell Selection](igGrid-Multiple-Cell-Selection.html)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Multiple Sorting**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Multiple Sorting Dialog Window](igGrid-Multiple-Sorting-Dialog.html)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Row Selectors**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igHierarchicalGrid Enabling Row Selectors](igHierarchicalGrid-Enabling-RowSelectors.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igHierarchicalGrid Row Selectors](%%SamplesUrl%%/hierarchical-grid/row-selectors)
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
**Tooltips**
            </td>

            <td>
                <h4>Related topics</h4>

                <ul>
                    <li>
[igGrid Tooltips Popover](igGrid-Popover-Style-for-Tooltips.html)
                    </li>
                </ul>

                <h4>Related samples</h4>

                <ul>
                    <li>
[igGrid Tooltips](%%SamplesUrl%%/grid/tooltips)
                    </li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



### <a id="igpopover"></a>igPopover

`igPopover` is supported on touch devices by default. In touch environment however, you cannot control the activating event: the control always shows on the tap user action, no matter what event has been set as activating (i.e. the setting of the [showOn](%%jQueryApiUrl%%/ui.igpopover#options) option is ignored).

#### Related topics

-   [igPopover Overview](igPopover-Overview.html)

#### Related samples

-   [Basic Usage](%%SamplesUrl%%/popover/basic-popover)
-   [ASP.NET MVC Basic Usage](%%SamplesUrl%%/popover/aspnet-mvc-helper)

###<a id="igvideoplayer"></a> igVideoPlayer

When running the `igVideoPlayer` control on a mobile device with the Modernizr library is available on the page, the browser’s default video player rendered to the user. If the Modernizr library is not available, then the actual `igVideoPlayer` control is rendered to the user (in some cases the `igVideoPlayer` control may have fewer touch capabilities than the default device controls).

#### Related Samples

-   [Video Player Basic Usage](%%SamplesUrl%%/video-player/basic-usage)



 

 


