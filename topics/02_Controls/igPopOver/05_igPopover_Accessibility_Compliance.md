<!--
|metadata|
{
    "fileName": "igpopover-accessibility-compliance",
    "controlName": "igPopover",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igPopover)

## Topic Overview
### Purpose

This topic explains the accessibility features of the `igPopover`™ control and provides information on how to achieve accessibility compliance for pages containing this control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igPopover Overview](igPopover-Overview.html): This topic provides conceptual information about the `igPopover` control including its main features, minimum requirements, and user functionality.

- [Adding igPopover](Adding-igPopover.html): This topic demonstrates, with code examples, how to add the `igPopover` control to an HTML page in either JavaScript or ASP.NET MVC. The topic covers initializing `igPopover` on the HTML markup.





## Accessibility Compliance Reference
### Introduction

All Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The table below contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the `igPopover` control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

### Accessibility compliance reference chart

The following table summarizes the accessibility compliance features of `igPopover`.

Rule| Rule text| How we comply
---|---|---
(a)| A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|The control provides the required attributes.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|You can control the coloring and provide suitable colors using the styling and theming capabilities of `igPopover`.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because it is a client-side control and depends on the CSS’s rules.
(j)|Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.|The `igPopover` control does not itself contribute to causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz. (There are no BLINK or MARQUEE elements as part of the control.)


\* – control limitations



## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information for accessibility compliance of all Ignite UI™ controls.





 

 


