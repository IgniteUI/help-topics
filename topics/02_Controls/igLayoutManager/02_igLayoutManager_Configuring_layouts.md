<!--
|metadata|
{
    "fileName": "iglayoutmanager-configuring-layouts",
    "controlName": "igLayoutManager",
    "tags": ["How Do I","Layouts"]
}
|metadata|
-->

# Configuring igLayoutManager



##Topic Overview


### Purpose

This topic explains how to configure the different layouts supported by the `igLayoutManger`® control.

### Required background

The following topics are prerequisites to understanding this topic:


-	[igLayoutManager Overview](igLayoutManager-Overview.html): This topic explains the `igLayoutManager` control conceptually and provides information on the supported layouts and their uses.

-	[Adding igLayoutManager](igLayoutManager-Adding.html): This topic demonstrates, with code examples, how to add the `igLayoutManager` control to an HTML page using either pure HTML, JavaScript, or ASP.MVC implementations.



### In this topic

This topic contains the following sections:

-   [**Specifying a Layout**](#specifying-layout)
    -   [Overview](#oveview)
    -   [Property settings](#property-settings)
-   [**Configuring Individual Layouts**](#config-individual-layouts)
    -   [Configuring individual layouts summary](#config-individual-layouts-summary)
    -  [Configuring individual layouts summary chart](#config-individual-layouts-summary-chart)
-   [**Configuring the Border Layout**](#config-border-layout)
    -   [Overview](#border-overview)
    -   [Property settings](#border-property-settings)
    -   [Example](#border-example)
-   [**Configuring the Column Layout**](#confg-column-layout)
    -   [Overview](#column-overview)
    -   [Minimum requirements](#column-min-requirements)
    -   [Example](#column-example)
-   [**Configuring the Flow Layout**](#config-flow-layout)
    -   [Overview](#flow-overview)
    -   [Property settings](#flow-property-settings)
    -   [Example](#flow-example)
-   [**Configuring the Grid Layout**](#config-grid-layout)
    -   [Overview](#grid-overview)
    -   [Property settings](#grid-settings)
    -   [Example](#grid-example)
-   [**Configuring the Vertical Layout**](#config-vertical-layout)
    -   [Overview](#vertical-overview)
    -   [Property settings](#vertical-settings)
    -   [Example](#vertical-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



##<a id="specifying-layout"></a>Specifying a Layout


###<a id="oveview"></a> Overview

The `igLayoutManager` control supports several layouts. For a conceptual overview of each layout is and information about what it looks like, refer to `igLayoutManager` [**layouts summary chart**](#config-individual-layouts-summary-chart). Layouts are specified by setting the [`layoutMode`](%%jQueryApiUrl%%/ui.iglayoutmanager) property of the `igLayoutManager` with an exception of the Column layout which is configured from the HTML markup (See [**Configuring the Column Layout**](#confg-column-layout).). For the valid settings of this property, see [**Property settings**](#vertical-settings).

###<a id="property-settings"></a> Property settings

The following table lists the valid settings of the [layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode) property of the `igLayoutManager` control.

In order to specify this layout:|Set the layoutMode property to:
---|---
[Border](%%jQueryApiUrl%%/ui.iglayoutmanager#options)|“border”
[Column](%%jQueryApiUrl%%/ui.iglayoutmanager#options)|–
[Flow](%%jQueryApiUrl%%/ui.iglayoutmanager#options)|“flow”
[Grid](%%jQueryApiUrl%%/ui.iglayoutmanager#options)|“grid”
[Vertical](%%jQueryApiUrl%%/ui.iglayoutmanager#options)|“vertical”

##<a id="config-individual-layouts"></a>Configuring Individual Layouts


###<a id="config-individual-layouts-summary"></a> Configuring individual layouts summary

Each layout is customizable to a different degree. Some layouts allow for defining items with different sizes and feature fluid and responsive design. The layouts also differ in the required minimum of configuration settings that are needed to make a layout work properly.

###<a id="config-individual-layouts-summary-chart"></a> Configuring individual layouts summary chart
The following table explains briefly the configurable layouts of the `igLayoutManager` control and maps them to the properties that configure them. Further details are available after the table.

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
Layout
			</th>

            <th>
Configurable aspects
			</th>

            <th>
Details
			</th>

            <th>
Properties
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td rowspan="5">
[Border](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout)
			</td>

            <td>
Visibility of the Footer
			</td>

            <td>
You can choose to show or hide the Footer.
			</td>

            <td>
                <ul>
                    <li>
[showFooter](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showFooter)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Visibility of the Header
			</td>

            <td>
You can choose to show or hide the Header.
			</td>

            <td>
                <ul>
                    <li>
[showHeader](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showHeader)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Visibility of the Left Sidebar
			</td>

            <td>
You can choose to show or hide the Left Sidebar.
			</td>

            <td>
                <ul>
                    <li>
[showLeft](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showLeft)
					</li>
                </ul>

                
            </td>
        </tr>

        <tr>
            <td>
Visibility of the Right Sidebar
			</td>

            <td>
You can choose to show or hide the Right Sidebar.
			</td>

            <td>
                <ul>
                    <li>
[showRight](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showRight)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Relative widths of the Body and the Sidebars
			</td>

            <td>
You can adjust the width of the Body, Left Sidebar and Right Sidebar regions relative to each other (Sidebars car grow wider at the expense of the Body and vice versa.). This is achieved by specifying the width of each Sidebar individually. The widths can be set in either pixels or percentages.
			</td>

            <td>
                <ul>
                    <li>
[leftWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.leftWidth)
					</li>

                    <li>
[rightWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.rightWidth)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Column
			</td>

            <td>
Width of the items’ containers
			</td>

            <td>
You can configure how many columns to merge to accommodate the width of an item container. This is achieved by using the CSS class naming convention &lt;colN&gt; where N is the number of the columns to merge.
			</td>

            <td>
Defined through merging the necessary number of columns with that number indicated in the name of the `<div>` class
			</td>
        </tr>

        <tr>
            <td rowspan="2">
[Flow](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)
			</td>

            <td>
Number of items
			</td>

            <td>
                You can specify the number of items to be rendered either through the HTML markup or using the `itemCount` property.
				<blockquote>
**Note**
When defining the number of items using the itemCount property, you should not define any items in the markup. Defining items in the markup together with setting the itemCount is an undefined scenario and will result in adding the items defined with itemCount property to those defined in the markup.
				</blockquote>
            </td>

            <td>
                <ul>
                    <li>
[itemCount](%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Arrangement of items
			</td>

            <td>
The arrangement of items is also customizable. Rather than a grid of items, you can adjust the spacing to create a single line of items along the scrolling dimension.

                Items can also be of different sizes, which yields something more asymmetrical than a traditional grid but that still has a linear flow to it.
			</td>

            <td>
                <ul>
                    <li>
[items](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items)
					</li>

                    <li>
                        <ul>
                            <li>
[rowSpan](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.rowSpan)
							</li>

                            <li>
[colSpan](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.colSpan)
							</li>

                            <li>
[colIndex](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.colIndex)
							</li>

                            <li>
[rowIndex](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.rowIndex)
							</li>

                            <li>
[width](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.width)
							</li>

                            <li>
[height](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.height)
							</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td rowspan="10">
[Grid](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout)
			</td>

            <td>
Number of rows
			</td>

            <td>
The rows count is customizable in this layout.
			</td>

            <td>
                <ul>
                    <li>
[rows](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.rows)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Number of columns
			</td>

            <td>
The number of columns is customizable in this layout.
			</td>

            <td>
                <ul>
                    <li>
[cols](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.cols)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Arrangement of items
			</td>

            <td>
Items position can be defined using `colIndex` and `rowIndex` options. `colIndex` defines in which column the item will be placed in.
                    `rowIndex`defines in which row the item will be placed in.
			</td>

            <td>
                <ul>
                    <li>
[items](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items)
					</li>

                    <li>
                        <ul>
                            <li>
[colIndex](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.colIndex)
							</li>

                            <li>
[rowIndex](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.rowIndex)
							</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Column height
			</td>

            <td>
You can set the height of the columns in this layout.
			</td>

            <td>
                <ul>
                    <li>
[columnHeight](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.columnHeight)
					</li>
                </ul>

                
            </td>
        </tr>

        <tr>
            <td>
Column width
			</td>

            <td>
You can set the width of the columns in this layout.
			</td>

            <td>
                <ul>
                    <li>
[columnWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.columnWidth)
					</li>
                </ul>

                
            </td>
        </tr>

        <tr>
            <td>
Left margin of the items
			</td>

            <td>
You can set the left margin of the items.
			</td>

            <td>
                <ul>
                    <li>
[marginLeft](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.marginLeft)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Top margin of the items
			</td>

            <td>
You can set the top margin of the items.
			</td>

            <td>
                <ul>
                    <li>
[marginTop](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.marginTop)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Automatic re-arrangement of items upon container resizing
			</td>

            <td>
You can disable the items rearrangement when the container is resized.
			</td>

            <td>
                <ul>
                    <li>
[rearrangeItems](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.rearrangeItems)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Spread of an items across the rows and columns of the grid
			</td>

            <td>
Rows and columns can be spanned across the rows and columns of the grid to accommodate items of different sizes.
			</td>

            <td>
                <ul>
                    <li>
[items](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items)
					</li>

                    <li>
                        <ul>
                            <li>
[rowSpan](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.rowSpan)
							</li>

                            <li>
[colSpan](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items.colSpan)
							</li>
                        </ul>
                    </li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Animated transitions duration
			</td>

            <td>
You can also change the animations duration (its default value is 500) and choose if the items should rearrange to fit in the container when it is resized.
			</td>

            <td>
                <ul>
                    <li>
[animationDuration](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout.animationDuration)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
[Vertical](%%jQueryApiUrl%%/ui.iglayoutmanager#options:Vertical)
			</td>

            <td>
Number of items
			</td>

            <td>
You can configure how many items to render. The items will arrange vertically from top to bottom.

You can specify the number of items to be rendered either through the HTML markup or using the `itemCount` property.
				<blockquote>
**Note**
                
When defining the number of items using the itemCount property, you should not define any items in the markup. Defining items in the markup together with setting the itemCount is an undefined scenario and will result in adding the items defined with itemCount property to those defined in the markup.
				</blockquote>
            </td>

            <td>
                <ul>
                    <li>
[itemCount](%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>





##<a id="config-border-layout"></a>Configuring the Border Layout


### <a id="border-overview"></a>Overview

The Border layout is configurable through the [`layoutMode`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode) property of the control. The host HTML element of the control is `<div>` element. Child `<div>`s can be defined in the HTML markup of the host element, and upon initialization, the control will add the respective HTML elements and CSS classes.

Items are arranged through the respective class for each region. The Tile Manager uses the classes’ names to identify the regions and to position the items. The following table maps the regions to the mandatory class names that implement them.

Region|Class name
---|---
Header|header
Body|center
Footer|footer
Left Sidebar|left
Right Sidebar|right

>**Note:** If there are any children that do not have any of the above classes, they will not be used.

The visibility of the Header, Footer, and Sidebars is configurable, as well as the relative width of the Body and the Left Sidebar and Right Sidebars.

The default settings of the Border layout configure it with all regions visible with the width of the Left Sidebar set at 20% of the total container's width and the width of the Right Sidebar – at 10%. To hide some of the regions, you need to set the respective property ([showHeader](%%jQueryApiUrl%%/ui.iglayoutmanager#options:showHeader), [showFooter](%%jQueryApiUrl%%/ui.iglayoutmanager#options:showFooter), [showLeft](%%jQueryApiUrl%%/ui.iglayoutmanager#options:showLeft), [showRight](%%jQueryApiUrl%%/ui.iglayoutmanager#options:showRight)) to false.

### <a id="border-property-settings"></a>Property settings

<table cellspacing="0" cellpadding="0" class="table">
	<tbody>
		<tr>
			<th>
				In order to:
			</th>

			<th colspan="2">
				Use this property:
			</th>

			<th>
				And set it to:
			</th>

			<th>
				Required?
			</th>

			<th>
				Default setting
			</th>
		</tr>

		<tr>
			<td>
				Set the layout as Border layout
			</td>

			<td colspan="2">
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>border</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>”column”</td>
		</tr>

		<tr>
			<td rowspan="4">
				Show or hide regions
			</td>

			<td>
				Display or hide the Header area
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showHeader" target="_blank">showHeader</a>
			</td>

			<td>
				true or false
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>true</td>
		</tr>

		<tr>
			<td>
				Display or hide the Footer area
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showFooter" target="_blank">showFooter</a>
			</td>

			<td>
				true or false
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>true</td>
		</tr>

		<tr>
			<td>
				Display or hide the Left Sidebar area
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showLeft" target="_blank">showLeft</a>
			</td>

			<td>
				true or false
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>true</td>
		</tr>

		<tr>
			<td>
				Display or hide the Right Sidebar area
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.showRight" target="_blank">showRight</a>
			</td>

			<td>
				true or false
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>true</td>
		</tr>

		<tr>
			<td rowspan="2">
				Set the relative widths of the Body and Sidebars (The widths of the Sidebars are configured directly; the width of the Body is a resultant value of the width of the container minus the widths of the sidebars.)
			</td>

			<td>
				Set the width of the Left Sidebar
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.leftWidth" target="_blank">leftWidth</a>
			</td>

			<td>
				The desired width in pixels or percentages
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>
				“20%”
			</td>
		</tr>

		<tr>
			<td>
				Set the width of the Right Sidebar
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:borderLayout.rightWidth" target="_blank">rightWidth</a>
			</td>

			<td>
				The desired width in pixels or percentages
			</td>

			<td>
				<img alt="" src="../../images/images/negative.png">
			</td>

			<td>
				“10%”
			</td>
		</tr>
	</tbody>
</table>


### <a id="border-example"></a>Example

The picture below demonstrates a Border layout with HTML Markup a result of the following settings:

Property|Value
---|---
[layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)|“border”
[leftWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:leftWidth)|“10%”
[rightWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:rightWidth)|“20%’



![](images/Configuring_layouts_%28igLayoutManager%29_8.png)

Following is the code that implements this example. In the code, custom-created HTML markup is used.

**In HTML:**

```html
<div id="layout" style="height: 300px;">
            <div class="left"> 
                  <h3>LEFT SIDEBAR</h3>
            </div>
            <div class="right">
                  <h3>RIGHT SIDEBAR</h3>
            </div>
            <div class="header">HEADER</div>
            <div class="footer">FOOTER</div>
            <div class="center">
                  <h3>BODY</h3>
            </div>
</div> 
```

**In JavaScript:**

```js
$("#layout").igLayoutManager({ layoutMode: “border”,
         borderLayout: {
            leftWidth: “10%”,
            rightWidth: “20%”
        }
});
```



##<a id="confg-column-layout"></a>Configuring the Column Layout


### <a id="column-overview"></a>Overview

The Column Layout is a based on a 12-column grid system in which columns can be merged to accommodate the width of the items. This layout is implemented entirely in CSS so it doesn’t require the `igLayoutManager` to be instantiated. Its main advantages compared to the other layouts are:

-   Minimum CSS to get it working properly – very few lines of CSS
-   Simplest markup structure

When defining CSS classes, make that all their names are prefixed with an ig class on the container, so that that no other rules get overwritten. The items’ placeholders’ widths are defined through merging the desired number of columns on a particular row. A container can merge up to 12 columns, but the total number of columns merged/occupied by containers on an individual row must be 12. The naming convention of the `<div>` classes that implement the columns is `<colN>` where N is the number of columns merged for the class, e.g. col4 means that the placeholder merges over 4 columns while col1 means that the column is not merged, i.e. the placeholder occupies only one column of the grid.

Any number of rows can be nested in other containers marked as `<colN>`. In this case, the parent container that is marked as `<colN>` will be divided in 12 columns and the nested rows will calculate their widths according to the width of the parent. This means that if the parent container has a class col6 applied, it will merge six columns of the main container's 12 columns. If you place three rows in this container and each of them has a class col4 applied, then each one of them will merge 2 columns of the main container on the page.

### <a id="column-min-requirements"></a>Minimum requirements

With the Column layout, there is no need to instantiate the `igLayoutManager`. You can only assign row class to a `<div>` element and a `<colN>` class to its children elements. This way, the layout will use the browser width to calculate the widths of the 12 columns. If you want to define the width of the main container yourself, then you should instantiate the `igLayoutManager` and set its width property.

### <a id="column-example"></a>Example

The picture below demonstrates a Column layout HTML Markup in which 3 items spread over 4 columns each. The paragraphs are wrapped in a `<div>` element with class col4.

![](images/Configuring_layouts_%28igLayoutManager%29_9.png)

Following is the code that implements this example.

**In HTML:**

```html
<div id="layout" class="ig-layout-col">
            <div class="row">
                  <div class="col4">
                        <p style="height: 100px; background-color: gray; color: white">
                              Content 1
                        </p>
                  </div>
                  <div class="col4">
                        <p style="height: 100px; background-color: gray; color: white">
                              Content 2
                        </p>
                  </div>
                  <div class="col4">
                        <p style="height: 100px; background-color: gray; color: white">
                              Content 3
                        </p>
                  </div>
            </div>
</div>
```



##<a id="config-flow-layout"></a>Configuring the Flow Layout


### <a id="flow-overview"></a>Overview

The host HTML element of the control is unordered list (UL). List items (LI) can be defined in the HTML markup of the host element, and upon initialization, the control will add the respective CSS classes, or they can be defined as an array of item objects in the control options, and the `igLayoutManager` will generate the corresponding markup. In order to have the markup as semantic as possible, when items are defined in the options, and not from markup, an unordered list (UL) and list items (LI) are used to render the items.

### <a id="flow-property-settings"></a>Property settings

The following table maps the desired configuration to its respective property settings.

<table cellspacing="0" cellpadding="0" class="table">
	<tbody>
		<tr>
			<th colspan="2">
				In order to:
			</th>

			<th>
				Use this property:
			</th>

			<th>
				And set it to:
			</th>

			<th>
				Required?
			</th>

			<th>
				Default setting
			</th>
		</tr>

		<tr>
			<td rowspan="5">
				Configure Flow layout without HTML markup
			</td>

			<td>
				Set the layout as Flow layout
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>flow</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>

		<tr>
			<td>
				Specify the number of items
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount" target="_blank">itemCount</a>
			</td>

			<td>
				The desired number of items
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“null”</td>
		</tr>

		<tr>
			<td></td>

			<td colspan="2">
				or
			</td>

			<td colspan="2"></td>
		</tr>

		<tr>
			<td>
				Set the layout as Border layout
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>flow</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>

		<tr>
			<td>
				Arrange items and set their size
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:items" target="_blank">items</a>
			</td>

			<td>
				An array of objects
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>[ ]</td>
		</tr>

		<tr>
			<td>
				Configure Flow layout with HTML markup
			</td>

			<td>
				Set the layout as Border layout
			</td>

			<td>
				<a href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>flow</td>

			<td>
                <img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>
	</tbody>
</table>


#### <a id="flow-example"></a>Example

The screenshot below demonstrates layout as flow without HTML Markup a result of the following settings:

Property|Value
---|---
[`layoutMode`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)|“flow”
[`itemCount`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount)|11



![](images/Configuring_layouts_%28igLayoutManager%29_15.png)

Following is the code that implements this example.

**In HTML:**

```html
<ul id="layout"></ul>
```

**In JavaScript:**

```js
$("#layout").igLayoutManager({
	 layoutMode: “flow”, 
     itemCount: 11 
});
```



##<a id="config-grid-layout"></a>Configuring the Grid Layout


### <a id="grid-overview"></a>Overview

The layout of the `igLayoutManager` is configured to Grid layout by setting the [`layoutMode`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode) property of the control to “grid”. The Grid layout is a complex of absolutely positioned boxes that allows for merging rows and columns. Initializing this layout from the HTML markup is not supported.

You can specify the number of rows and columns for the grid and the items’ height and width. The latter is configured through the [`columnHeight`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:columnHeight) and [`columnWidth`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:columnWidth) properties which serve to set the size of the regular (non-spanning) items (that is, the size of the items that do not span over multiple rows and columns and each of them occupies only one cell in the grid).

Custom arrangement of the items is supported through the [`items`](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items) property which is set to an array of objects. You can disable the automatic re-arrangement of items upon resizing the container; this gives you some extra control of the user experience.

### <a id="grid-settings"></a>Property settings

The following table maps the desired configuration to its respective property settings.

In order to:|Use this property:|And set it to:|Required?|Default setting
---|---|---|---|---
Set the layout as Grid layout|[layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)|“grid”|![](../../images/images/positive.png)|“column”
Number and arrangement of items|[items](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items)|An array of objects|![](../../images/images/negative.png)|[ ]
Set the number of columns in the grid|[cols](%%jQueryApiUrl%%/ui.iglayoutmanager#options:cols)|The desired number of columns|![](../../images/images/negative.png)|“nul”
Set the height of the items|[columnHeight](%%jQueryApiUrl%%/ui.iglayoutmanager#options:columnHeight)|The desired height of the items in pixels or percentages. The value includes the width of the items' top margin.|![](../../images/images/negative.png)|“null”
Set the width of the items|[columnWidth](%%jQueryApiUrl%%/ui.iglayoutmanager#options:columnWidth)|The desired width of the items in pixels or percentages. The value includes the width of the items' left margin.|![](../../images/images/negative.png)|“null”
Set the number of rows|[rows](%%jQueryApiUrl%%/ui.iglayoutmanager#options:rows)|The desired number of rows in the grid|![](../../images/images/negative.png)|“null”
Set the left margin of the items|[marginLeft](%%jQueryApiUrl%%/ui.iglayoutmanager#options:marginLeft)|The desired size in pixels|![](../../images/images/negative.png)|“0”
Set the top margin of the items|[marginTop](%%jQueryApiUrl%%/ui.iglayoutmanager#options:marginTop)|The desired size in pixels|![](../../images/images/negative.png)|“0”
Enable/disable the automatic rearrangement of items upon container resizing|[rearrangeItems](%%jQueryApiUrl%%/ui.iglayoutmanager#options:rearrangeItems)|true or false|![](../../images/images/negative.png)|“true”
Set the duration of animations|[animationDuration](%%jQueryApiUrl%%/ui.iglayoutmanager#options:animationDuration)|The desired duration in milliseconds|![](../../images/images/negative.png)|“500”



### <a id="grid-example"></a>Example

The picture below schematically demonstrates Grid layout configured as a 2x2 grid with an item that spans over two columns on the first row as result of the following settings:

Property|Value
---|---
[layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)|“grid”
[width](%%jQueryApiUrl%%/ui.iglayoutmanager#options:width)|“100%”
[height](%%jQueryApiUrl%%/ui.iglayoutmanager#options:height)|“500px”
[gridLayout](%%jQueryApiUrl%%/ui.iglayoutmanager#options:gridLayout)|A JavaScript object
[items](%%jQueryApiUrl%%/ui.iglayoutmanager#options:items)|An array of objects

![](images/Configuring_layouts_%28igLayoutManager%29_25.png)

Following is the code that implements this example.

**In HTML:**

```html
<ul id="layout"></ul>
```

**In JavaScript:**

```js
$('#layout').igLayoutManager({
    layoutMode: "grid",
    width: "100%",
    height: "500px",
    gridLayout: {
        cols: 2,
        rows: 2
    },
    items: [
          {
              colIndex: 0,
              rowIndex: 0,
                      colSpan: 2
          }, {
              colIndex: 0,
              rowIndex: 1
          }, {
              colIndex: 1,
              rowIndex: 1
          }
    ]
});
```



##<a id="config-vertical-layout"></a>Configuring the Vertical Layout


### <a id="vertical-overview"></a>Overview

The Vertical Layout is configurable through the [layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager) property of the control. The host HTML element of the control is DIV element. Child DIVs can be defined in the HTML markup of the host element, and upon initialization, the control will add the respective CSS classes, or they can be defined as an array of item objects in the control options, and the `igLayoutManager` will generate the corresponding markup. The number of items is specified through the [itemCount](%%jQueryApiUrl%%/ui.iglayoutmanager) property.

### <a id="vertical-settings"></a>Property settings

The following table maps the desired configuration to its respective
property settings.

<table cellspacing="0" cellpadding="0" class="table">
	<tbody>
		<tr>
			<th>
				In order to:
			</th>

			<th>
				Use this property:
			</th>

			<th>
				And set it to:
			</th>

			<th>
				Required?
			</th>

			<th>
				Default setting
			</th>
		</tr>

		<tr>
			<td rowspan="5">
				Set the layout as vertical without HTML markup
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>
				vertical
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>

		<tr>
			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount" target="_blank">itemCount</a>
			</td>

			<td>
				Desired count of items
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“null”</td>
		</tr>

		<tr>
			<td colspan="4">
				or
			</td>
		</tr>

		<tr>
			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>
				*vertical*
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>

		<tr>
			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:items" target="_blank">items</a>
			</td>

			<td>
				Array of objects
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>[ ]</td>
		</tr>

		<tr>
			<td>
				Set the layout as vertical with HTML markup
			</td>

			<td>
				<a class="ig-api-link" href="%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode" target="_blank">layoutMode</a>
			</td>

			<td>
				vertical
			</td>

			<td>
				<img alt="" src="../../images/images/positive.png">
			</td>

			<td>“column”</td>
		</tr>
	</tbody>
</table>



### <a id="vertical-example"></a>Example

The screenshot below demonstrates layout as vertical without HTML Markup as result of the following settings:

Property|Value
---|---
[layoutMode](%%jQueryApiUrl%%/ui.iglayoutmanager#options:layoutMode)|vertical
[itemCount](%%jQueryApiUrl%%/ui.iglayoutmanager#options:itemCount)|3



![](images/Configuring_layouts_%28igLayoutManager%29_31.png)

Following is the code that implements this example.

**In HTML:**

```html
<ul id="layout"></ul>
```

**In JavaScript:**

```js
$("#layout").igLayoutManager({
	 layoutMode: “vertical”, 
     itemCount: 3 
});
```



##<a id="related-content"></a>Related Content


### <a id="topics"></a>Topics

The following topics provide additional information related to this topic.

-	[Handling Events(igLayoutManager)](igLayoutManager-Handling-Events.html): This topic explains, with code examples, how to attach event handlers to the `igLayoutManager` control.

-	[igLayoutManager Accessibility Compliance](igLayoutManager-Accessibility-Compliance.html): This topic explains the accessibility features of the `igLayoutManager` control and provides information on how to achieve accessibility compliance for pages containing this control.

-	[Known Issues and Limitations (igLayoutManager)](igLayoutManager-Known-Issues-and-Limitations.html): This topic provides information about the known issues and limitations of the `igLayoutManager` control.

-	[jQuery and ASP.NET MVC Helper API Links (igLayoutManager)](igLayoutManager-jQuery-and-ASP.NET-MVC-Helper-API-Links-.html): This topic provides links to the API documentation for the jQuery and its ASP.NET MVC helper class for the `igLayoutManager` control.


### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-	[ASP.NET MVC Basic Usage](%%SamplesUrl%%/layout-manager/aspnet-mvc-helper): This sample demonstrates using the ASP.NET MVC helper for the Layout Manager control.

-	[Border Layout from HTML Markup](%%SamplesUrl%%/layout-manager/border-layout-markup): This sample demonstrates initializing the `igLayoutManager` control’s Border layout from the HTML markup by assigning "center"/"left"/"right"/"header"/"footer" CSS classes.

-	[Border Layout – Initializing with JavaScript](help/iglayoutmanager-adding.html#js-steps): This sample demonstrates initializing the `igLayoutManager` control’s Border layout from JavaScript, by handling [`itemRendered`](%%jQueryApiUrl%%/ui.iglayoutmanager#events:itemRendered) events and assigning content to the created regions.

-	[Responsive Column Layout](%%SamplesUrl%%/layout-manager/column-layout-markup): This sample demonstrates how the `igLayoutManager` control’s Column layout can be used by assigning classes to items thus specifying the area their content will span over. This sample does not use JavaScript initialization code: it is done with CSS and HTML only.

-	[Responsive Flow Layout](%%SamplesUrl%%/layout-manager/flow-layout): This sample demonstrates the responsiveness of the `igLayoutManager` control’s Flow layout with various item sizes set either in pixels or percentages and setting the number of items in the `igLayoutManager`'s options without the need for any initial markup.

-	[Grid Layout with colspan and rowspan Support](%%SamplesUrl%%/layout-manager/grid-layout): This sample demonstrates the ability of the `igLayoutManager` control’s Grid layout to allow items to have arbitrary position in a grid with a predefined size including for items with different rowspan and colspan settings.

-	[Responsive Vertical Layout](%%SamplesUrl%%/layout-manager/vertical-layout): This sample s demonstrates the responsiveness of the `igLayoutManager` control’s Vertical layout with various item sizes set either in pixels or percentages and setting the number of items in the `igLayoutManager`'s options without the need for any initial markup.





 

 


