<!--
|metadata|
{
    "fileName": "igpiechart-accessibility",
    "controlName": "igDataChart",
    "tags": ["Charting","Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igPieChart)

##Topic Overview

### Purpose

This topic explains the accessibility features of the `igPieChart`™ and provides advice how to achieve accessibility compliance for pages containing charts.

### Required background

The following topics are prerequisite to understanding this topic:

- [igPieChart Overview](igPieChart-Overview.html): This topic provides conceptual information about the `igPieChart` control including its main features, minimum requirements, and user functionality.

- [Adding an igPieChart](igPieChart-Adding.html): This topic demonstrates how to create add the `igPieChart` control and bind it to data.


##igPieChart Accessibility Compliance

### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The [Accessibility compliance reference chart](#accessibility-reference-chart) that follows contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igPieChart` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are indicated as limitations.

### <a id="accessibility-reference-chart"></a>Accessibility compliance reference chart

The following table summarizes the accessibility compliance features of the `igPieChart`.

Rules| Rule Text|How We Comply
---|---|---
(a)| A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|Since `igPieChart` is  exclusively a graphic control, you may consider providing an alternative  view for disabled people by converting the chart into a table or grid with the chart data. That way screen readers may help users to get the  information from the chart.
(b)|Equivalent alternatives for any multimedia presentation shall be  synchronized with the presentation.|See the note for (a) for an alternative way to provide compliance to the rule.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|You can control coloring and provide suitable colors for charts using the  styling and theming capabilities of `igPieChart`.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because of `igPieChart` being a client-side control and depending on the CSS rules. See the note for (a) for an alternative way to provide compliance to the rule.


\* - control limitation


##Related Content

### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI  controls.





 

 


