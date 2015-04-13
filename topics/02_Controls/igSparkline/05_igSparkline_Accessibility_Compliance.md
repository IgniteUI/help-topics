<!--
|metadata|
{
    "fileName": "igsparkline-accessibility-compliance",
    "controlName": "igSparkline",
    "tags": ["Charting","Data Presentation"]
}
|metadata|
-->

# Accessibility Compliance (igSparkline)

## Topic Overview
### Purpose

This topic explains [`igSparkline`](%%jQueryApiUrl%%/ui.igSparkline.html)™ accessibility features and provides specific advice on achieving accessibility compliance for pages containing an `igSparkline`.

### Required background

The following topics are prerequisite to understanding this topic:

- [igSparkline Overview](igSparkline-Overview.html): This topic provides an overview of the `igSparkline` control, its benefits, and the supported chart types.

- [Adding igSparkline Overview](igSparkline-Adding-igSparkline-Overview.html): This topic provides an overview of the various ways of adding `igSparkline` to an application.


## Accessibility Compliance Reference
### Introduction

All of the Infragistics® Ignite UI® controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The table below contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igSparkline` control complies with each rule.

To meet the requirements of each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the `igSparkline`.

Rule | Rule Text| How We Comply
---|---|---
(a)|A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|Since `igSparkline` is exclusively a graphic control rendered with a canvas HTML element. You may consider providing an alternative view for disabled people by converting the chart into a table or `igGrid`™ component with the chart data. Thus allowing screen readers to help users get the information from the chart.
(b)|Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.|See the comments in How We Comply for rule (a) for an alternative way to provide compliance to the rule.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|Color can be customized to provide suitable colors for charts using the styling and theming capabilities of `igSparkline`.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because it is a client-side control and depends on the CSS rules. See the comments in How We Comply for rule (a) for an alternative way to provide compliance to the rule.


\* - control limitations



## Related Content
### Topics

The following topic provides additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI controls.





 

 


