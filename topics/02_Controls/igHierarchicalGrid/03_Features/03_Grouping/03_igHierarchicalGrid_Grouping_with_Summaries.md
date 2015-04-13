<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-grouping-with-summaries",
    "controlName": "igHierarchicalGrid",
    "tags": []
}
|metadata|
-->

# Grouping with Summaries (igHierarchicalGrid)



Configuring Grouping with Summaries (igHierarchicalGrid)

## Topic Overview
### Purpose

Demonstrates, with code examples, the various ways to configure summary values calculation with the *igHierarchicalGrid*™ control’s Grouping feature.

### Required background

The following lists the topics required as a prerequisite to understanding this topic.

- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html): Provides conceptual information about the igHierarchicalGrid™ including information regarding features, binding to data sources, requirements, templates, and interaction.
- [Initializing igHierarchicalGrid](igHierarchicalGrid-Initializing.html): Demonstrates how to initialize the *igHierarchicalGrid* using both jQuery and MVC.
- [igHierarchicalGrid GroupBy Overview](igHierarchicalGrid-Grouping-Overview.html): Introduces the igHierarchicalGrid™ control’s grouping feature as well as providing an overview of the configurable aspects of the feature.



### In this topic

This topic contains the following sections:

-   [Configuring Grouping with Summaries – Overview](#configuring)
-   [Code Example: Configuring a Summary with a Delimiter, Values Format, and a Built-In and Custom Functions](#code-example)
-   [Related Content](#related-content)


## <a id="configuring"></a> Configuring Grouping with Summaries – Overview

#### Configuring Grouping with Summaries chart

The configurable aspects of the *igGridGroupBy* control related to its use in *igHierarchicalGrid*.

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
The summary delimiter character
			</td>

            <td>
Use to define one or more characters acting as a delimiter between different summary functions displayed in group rows.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [summarySettings.multiSummaryDelimiter](%%jQueryApiUrl%%/ui.iggridgroupby_hg#options)
					</li>

                    <li>
MVC: [**GroupBySummarySettings.MultiSummaryDelimiter**](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GroupBySummarySettings~MultiSummaryDelimiter.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
The summary format
			</td>

            <td>
Use to define a format string for the values of the summary function’s output.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [summarySettings.summaryFormat](%%jQueryApiUrl%%/ui.iggridgroupby_hg#options)
					</li>

                    <li>
MVC: [**GroupBySummarySettings.SummaryFormat**](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GroupBySummarySettings~SummaryFormat.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
The summary text before the summary
			</td>

            <td>
Use to define custom text to display on the group row before the summary values.
			</td>

            <td>
                <ul>
                    <li>
jQuery: [columnSettings.summaries.text](%%jQueryApiUrl%%/ui.iggridgroupby_hg#options)
					</li>

                    <li>
MVC: [**GroupBySummaryWrapper.Text**](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GroupBySummaryWrapper~Text.html)
					</li>
                </ul>
            </td>
        </tr>

        <tr>
            <td>
The summary function(s)
			</td>

            <td>
Allows you to set any of various built-in summary functions like, row count, sum, average, minimum and maximum. Additionally, you can configure the name of a custom grouping comparer function for use when composing individual groups in
                    the grid.
			</td>

            <td>
                <ul>
                    <li>
jQuery (built-in): [columnSettings.summaries.summaryFunction](%%jQueryApiUrl%%/ui.iggridgroupby_hg#options)
					</li>

                    <li>
jQuery (custom): [columnSettings.summaries.customSummary](%%jQueryApiUrl%%/ui.iggridgroupby_hg#options)
					</li>
                </ul>

                <ul>
                    <li>
MVC (built-in): [**GroupBySummaryWrapper. SummaryFunction**](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GroupBySummaryWrapper~SummaryFunction.html)
					</li>

                    <li>
MVC (custom): [**GroupBySummaryWrapper.CustomSummary**](Infragistics.Web.Mvc~Infragistics.Web.Mvc.GroupBySummaryWrapper~CustomSummary.html)
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>



## <a id="code-example"></a> Code Example: Configuring a Summary with a Delimiter, Values Format, and a Built-In and Custom Functions
#### Description

The code snippet below activates the Grouping feature of a layout in an igHierarchicalGrid and applies the following settings related to summary values calculation and display:

-   A delimiter of comma and space (e.g. A, B)
-   Formats summary values as fixed point decimal with one digit to the right of the decimal point and a leading zero to the left of the decimal point. If the value is less than 1: summaryFormat: "#0.0".
-   For the Quantity column two summary functions are calculated:
-   -   The maximal value in the group with a text prefix “Max:” (e.g. Max: 55.0): summaryFunction: "max", text: "Max:".
    -   A custom function called summaryDelta()used for summary value with a text prefix “Delta:”: summaryFunction: "custom", customSummary: summaryDelta, text: "Delta:".

#### Code: HTML and jQuery

**In JavaScript:**

```js
Code: HTML and jQuery
...
features: [{
    name: 'GroupBy',
    inherit: true,
    summarySettings: { 
        multiSummaryDelimiter: ", ", 
        summaryFormat: "#0.0" 
    },
    columnSettings: [
        { columnKey: "Bin", isGroupBy: true },
        {
            columnKey: "Quantity",
            summaries: [{
                summaryFunction: "max",
                text: "Max:"
            }, {
                summaryFunction: "custom",
                text: "Delta:",
                customSummary: summaryDelta
            }]
        }
    ]
}]
...
```

#### Code: ASP.NET MVC

**In ASPX:**

```csharp
Code: ASP.NET MVC
...
.Features(feature => {
    feature.GroupBy().Inherit(true)
    .SummarySettings(new GroupBySummarySettings { 
        SummaryFormat = "#0.0",
        MultiSummaryDelimiter = ","
    })
    .ColumnSettings(setting =>
    {
        setting.ColumnSetting().ColumnKey("Bin").IsGroupBy(true);
        setting.ColumnSetting().ColumnKey("Quantity").Summaries(summary =>
        {
            summary.Summary()
                .Text("Max").SummaryFunction(SummaryFunction.Max);
            summary.Summary()
                .Text("Delta").SummaryFunction(SummaryFunction.Custom).CustomSummary("summaryDelta");
        });
    });
});
...
```



## <a id="related-content"></a>Related Content

- [Enabling and Configuring Grouping (igHierarchicalGrid)](igHierarchicalGrid-Grouping-Enabling-and-Configuring.html): Demonstrates how to add grouping functionality to the igHierarchicalGrid™ control in both jQuery and MVC.





 

 


