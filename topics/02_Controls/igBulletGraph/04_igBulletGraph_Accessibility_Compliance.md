<!--
|metadata|
{
    "fileName": "igbulletgraph-accessibility-compliance",
    "controlName": "igBulletGraph",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igBulletGraph)



## Topic Overview

#### Purpose

This topic explains the `igBulletGraph`™ control's accessibility features and demonstrates how to achieve accessibility compliance for pages containing bullet graphs.

#### Required background

The following topics are prerequisites to understanding this topic:

- [*igBulletGraph* Overview](igBulletGraph-Overview.html): This topic provides conceptual information about the `igBulletGraph` control including its main features, minimum requirements, and user functionality.

- [Adding *igBulletGraph*](igBulletGraph-Adding.html): This is a group of topics demonstrating how to add the `igBulletGraph` control to an HTML page and to an ASP.NET MVC application.


## Accessibility Compliance Reference

#### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The table below contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the igBulletGraph control complies with each of these rules.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

#### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of igBulletGraph.

Rules | Rule text | How we comply
---|---|---
(a) | A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content). | Since igBulletGraph is exclusively a graphic control, consider providing an alternative view for the disabled by converting the chart into a table or grid containing the chart data. This would allow using screen reader to assist users in getting the information from the chart.
(b) | Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation. | See the note for (a) for an alternative way to provide compliance to the rule.
(c) | Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. | You can control coloring and provide suitable colors for the bullet graph using the styling and theming capabilities of the control.
(d)* | Documents shall be organized so they are readable without requiring an associated style sheet. | The control's markup may not be entirely readable without the associated style sheet due to igBulletGraph being client-side control and depending on CSS rules. See the note for (a) for an alternative way to provide compliance to the rule.


## Related Content

#### Topics

The following topic provides additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information for the accessibility compliance of all controls in the Ignite UI product.





 

 


