<!--
|metadata|
{
    "fileName": "igfunnelchart-accessibility-compliance",
    "controlName": "igFunnelChart",
    "tags": ["Charting","Data Presentation"]
}
|metadata|
-->

# Accessibility Compliance (igFunnelChart)

## Topic Overview

### Purpose

This topic explains the accessibility features of the `igFunnelChart`™ control’s and provides advice on how to achieve accessibility compliance for pages containing charts.

### Required background

The following topics are prerequisites to understanding this topic:

- [***igFunnelChart* Overview**](igFunnelChart-Overview.html): This topic provides conceptual information about the `igFunnelChart` control including its main features, minimum requirements, and user functionality.

- [**Adding *igFunnelChart***](igFunnelChart-Adding.html): This topic demonstrates how to add the `igFunnelChart` control to an HTML page and bind it to data.





## *igFunnelChart* Accessibility Compliance

#### *igFunnelChart* accessibility compliance summary

All Infragistics® %%ProductName%%® controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The [***igFunnelChart* accessibility compliance summary chart**](#compliance-summary-chart) contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the funnel chart control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

> **Note:** As jQuery controls are client-only, consequently some of the rules are unsupported and are marked as limitations.

### <a id="compliance-summary-chart"></a> igFunnelChart accessibility compliance summary chart

The following table summarizes the accessibility compliance features of the `igFunnelChart`.

Rules | Rule Text | How We Comply
--- | --- | ---
(a) | A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content). | Since `igFunnelChart` is exclusively a graphic control you may consider providing an alternative view for disabled people by converting the chart data into a table or `igGrid`™ component with the chart data. That way screen readers can help users to retrieve the chart’s information.
(b) | Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation. | See the How We Comply column note for rule (a) describing an alternative to comply with this rule.
(c) | Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. | You can control coloring and provide suitable colors for maps using `igFunnelChart` styling and theming capabilities.
(d)* | Documents shall be organized so they are readable without requiring an associated style sheet. | The control's markup is not readable without the associated style sheet because it is a client-side control governed by CSS rules. See note (a) for a description of an alternative way to comply with this rule.


* – control limitations



## Related Content

### Topics

The following topic provides additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information for accessibility compliance of all controls in the Infragistics %%ProductName%% product.





 

 


