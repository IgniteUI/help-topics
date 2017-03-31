<!--
|metadata|
{
    "fileName": "igdoughnutchart-accessibility-compliance",
    "controlName": "Doughnut Chart",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igDoughnutChart)

## Topic Overview

### Purpose

This topic explains the [`igDoughnutChart`](%%jQueryApiUrl%%/ui.igDoughnutChart#options)™ control's accessibility features and demonstrates how to achieve accessibility compliance for pages containing doughnut charts.

### Required background

The following topics are prerequisites to understanding this topic:

- [*igDoughnutChart* Overview](igDoughnutChart-Overview.html): This topic provides an overall look at the `igDoughnutChart` control.

- [Adding *igDoughnutChart*](igDoughnutChart-Adding.html): This is a group of topics demonstrating how to add the `igDoughnutChart` control to an HTML page and to an ASP.NET MVC application.


## Accessibility Compliance Reference

### Introduction

All of the %%ProductName%%™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the `igDoughnutChart` control complies with each of these rules.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of `igDoughnutChart`.

Rules | Rule text | How we comply
---- | ---- | ----
(a) | A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content). | Since igDoughnutChart is exclusively a graphic control, consider providing an alternative view for the disabled by converting the chart into a table or grid with the chart data. Thus allowing screen readers to assist users in getting the information from the chart.
(b) | Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation. | See the note for (a) for an alternative way to provide compliance to the rule.
(c) | Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. | You can control coloring and provide suitable colors for charts using the styling and theming capabilities of `igDoughnutChart`.
(d)* | Documents shall be organized so they are readable without requiring an associated style sheet. | The control's markup may not be entirely readable without the associated style sheet due to `igDoughnutChart` being a client-side control and depending on CSS rules. See the note for (a) for an alternative way to provide compliance to the rule.



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topic provides additional information related to this topic.
- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information for the accessibility compliance of all controls in the %%ProductName%% product.





 

 


