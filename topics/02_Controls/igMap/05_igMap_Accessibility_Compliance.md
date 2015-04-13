<!--
|metadata|
{
    "fileName": "igmap-accessibility-compliance",
    "controlName": "igMap",
    "tags": ["Charting","Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igMap)



##Topic Overview


### Purpose

This topic explains the `igMap`™ control’s accessibility features and provides advice on how to achieve accessibility compliance for pages containing charts.

### Required background

The following topics are prerequisites to understanding this topic:


-	[igMap Overview](Overview-igMap.html): This topic provides conceptual information about the `igMap` control including its main features, minimum requirements and user interaction capabilities.

-	[Adding an igMap](Adding-igMap.html): This topic is a walkthrough for adding a simple `igMap` control with basic features to a web page.


##Accessibility Compliance Reference

### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the igMap control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

>**Note:** As jQuery controls are client-only, consequently some of the rules are unsupported and are marked as limitations.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the `igMap`.

Rules|Rule Text|How We Comply
---|---|---
(a)|A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|Since igMap is exclusively a graphic control you may consider providing an alternative view for disabled people by converting the map data into a table or igGrid™ component with the chart data. That way screen readers can help users to retrieve the chart’s information.
(b)|Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation. |See the note in How We Comply column for rule (a) for a description of an alternative way to comply with this rule.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. |You can control coloring and provide suitable colors for maps using the styling and theming capabilities of igMap.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because it is a client-side control governed by CSS rules. See note (a) for a description of an alternative way to comply with this rule.

\* - control limitations

##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Accessibility Compliance](Accessibility-Compliance.html):Provides reference information for accessibility compliance of all controls in the Ignite UI product.





 

 


