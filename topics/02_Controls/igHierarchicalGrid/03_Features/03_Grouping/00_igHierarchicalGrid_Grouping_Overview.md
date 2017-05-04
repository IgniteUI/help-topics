<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-grouping-overview",
    "controlName": "igHierarchicalGrid",
    "tags": []
}
|metadata|
-->

# Grouping Overview (igHierarchicalGrid)

## Topic Overview
### Purpose

This topic introduces the igHierarchicalGrid™ control’s grouping feature as well as providing an overview of the configurable aspects of the feature.

#### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Grouping Configuration Summary](#summary)
-   [Related Content](#related-content)

## <a id="introduction"></a> Introduction

### Grouping in the igHierarchicalGrid summary

The igHierarchicalGrid control is implemented as a collection of flat grid objects (igGrid™) that work together. The grouping feature is enhanced to cover specific situations arising from having several flat grids nested within the hierarchical grid.

The igHierarchicalGrid supports a column grouping functionality that enables the user to utilize the data in one or more columns as a primary and, respectively, secondary criteria for grouping the records within the group.

Grouping in the igHierarchicalGrid works the same as the related function in Microsoft® Office Outlook® – you drag a column that you want to group by and drop it into a special grouping area above the grid. This re-arranges the grid with as many groups as distinct value existing in the selected column. In addition, inside the groups, the records are sorted. Dropping additional columns within the already existing groups results in further groupings.

You can define, implement and manage your own custom grouping method using the igGridGroupBy™ widget.

The picture bellow shows a hierarchical grid using the values of the Color column, at the root level, to group and arrange the data in the grid. That is to say the grid is grouped by its Color column at the root level. At the child level, the grid shows data from the ProductInventories table configured to group items by the Shelf column. Note columns serving as grouping criteria appear in the group by area (if the area is enabled) and in the group header rows with their corresponding value.

![](images/igHierarchicalGrid_Grouping_Overview_1.png)



## <a id="summary"></a> Grouping Configuration Summary
#### Grouping configuration summary chart

The configurable aspects of the igGridGroupBy widget related to the igHierarchicalGrid control.

<table class="table table-striped">
	<thead>
		<tr>
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
            <td>
Grouping mode
			</td>

            <td>
There are local and remote grouping modes supported by the igGridGroupBy widget.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [type](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
MVC: [Type](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~Type.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Column Settings
			</td>

            <td>
This option allows you to separately configure each column’s group by criteria.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [columnSettings](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
MVC: [ColumnSettings](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~ColumnSettings.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Group summaries
			</td>

            <td>
Group summaries aggregate some group-specific information about every group, like the count of rows in the group.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [summarySettings](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
MVC: [SummarySettings](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~SummarySettings.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Grouped row text templates
			</td>

            <td>
Template for the text of the grouped row.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [groupedRowTextTemplate](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
MVC: [GroupedRowTextTemplate](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~GroupedRowTextTemplate.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Client events
			</td>

            <td>
                The igGridGroupBy widget has special events that can be handled during its lifecycle. These events are raised when:

                <ul>
                    <li>
The grouping action begins. (Cancelable.)
					</li>

                    <li>
The grouping action ends.
					</li>
                </ul>
            </td>

            <td>
                jQuery:

                <ul>
                    <li>
[groupedColumnsChanging](%%jQueryApiUrl%%/ui.iggridselection_hg#events)
					</li>

                    <li>
[groupedColumnsChanged](%%jQueryApiUrl%%/ui.iggridselection_hg#events)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
Appearance
			</td>

            <td>
Numerous features allowing you change the look-and-feel of the group indicators and their text.
			</td>

            <td>
                jQuery:

                <ul>
                    <li>
[groupByAreaVisibility](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[initialExpand](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[emptyGroupByAreaContent](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[expansionIndicatorVisibility](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[groupByLabelWidth](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[labelDragHelperOpacity](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[indentation](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[expandTooltip](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[collapseTooltip](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>

                    <li>
[removeButtonTooltip](%%jQueryApiUrl%%/ui.iggridselection_hg#options)
					</li>
                </ul>

                MVC:

                <ul>
                    <li>
[GroupByAreaVisibility](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~GroupByAreaVisibility.html)
					</li>

                    <li>
[InitialExpand](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~InitialExpand.html)
					</li>

                    <li>
[EmptyGroupByAreaContent](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~EmptyGroupByAreaContent.html)
					</li>

                    <li>
[ExpansionIndicatorVisibility](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~ExpansionIndicatorVisibility.html)
					</li>

                    <li>
[GroupByLabelWidth](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~GroupByLabelWidth.html)
					</li>

                    <li>
[LabelDragHelperOpacity](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~LabelDragHelperOpacity.html)
					</li>

                    <li>
[Indentation](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~Indentation.html)
					</li>

                    <li>
[ExpandTooltip](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~ExpandTooltip.html)
					</li>

                    <li>
[CollapseTooltip](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~CollapseTooltip.html)
					</li>

                    <li>
[RemoveButtonTooltip](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GridGroupBy~RemoveButtonTooltip.html)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



## <a id="related-content"></a> Related Content

### Topics
The following topics provide additional information related to this topic.

- [Enabling and Configuring Grouping](igHierarchicalGrid-Grouping-Enabling-and-Configuring.html): This topic demonstrates, with code examples, how to enable and configure the Grouping feature of the igHierarchicalGrid™ control in both jQuery and MVC.
- [igGridGroupBy jQuery Reference](%%jQueryApiUrl%%/ui.iggridselection_hg): A complete reference to the jQuery options, methods, events and style classes for the igGridGroupBy control.