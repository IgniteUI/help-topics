<!--
|metadata|
{
    "fileName": "igpivotdataselector-accessibility-compliance",
    "controlName": "igPivotDataSelector",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igPivotDataSelector)

##Topic Overview

### Purpose

This topic explains the accessibility features of the `igPivotDataSelector`™ control and provides advice on how to achieve accessibility compliance for pages containing this control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igPivotDataSelector Overview](igPivotDataSelector-Overview.html): This topic provides conceptual information about the `igPivotDataSelector` control including its main features, minimum requirements, and user functionality.

- [Adding igPivotDataSelector](igPivotDataSelector-Adding.html): This is a group of topics demonstrating how to add the `igPivotDataSelector` control to an HTML page and to an ASP.NET MVC application.


##igPivotDataSelector Accessibility Compliance

### igPivotDataSelector accessibility compliance summary

All Infragistics® %%ProductName%%™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The [igPivotDataSelector accessibility compliance summary chart](#accessibility-summary-chart) contains the specific rules of Subpart 1194.22 that pertain to the control.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

>**Note:** As jQuery controls are client-only, consequently some of the rules are unsupported and are marked as limitations.

### <a id="accessibility-summary-chart"></a>igPivotDataSelector accessibility compliance summary chart

The following table summarizes the accessibility compliance features of the `igPivotDataSelector` control.

Rules| Rule text| How we comply
---|---|---
(a) |A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|The control provides the  required attributes.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|You can control the coloring and provide suitable colors using the styling and theming capabilities of `igPivotDataSelector`.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because it is a client-side control and depends on the CSS’s rules.
(n)|When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.|The metadata tree part of the `igPivotDataSelector`™ control participates in the tab sequence of the page and receives focus including via a mouse click. The Defer Update check-box and the Force Update button participate in the tab sequence as well.

\* – control limitations

##Related Content

### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information about the accessibility compliance of all controls in the Infragistics %%ProductName%% product suite.





 

 


