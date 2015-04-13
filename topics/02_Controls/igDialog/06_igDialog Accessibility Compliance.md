<!--
|metadata|
{
    "fileName": "igdialog-accessibility-compliance",
    "controlName": "igDialog",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igDialog)

### Purpose

This topic explains the `igDialog`™ accessibility features and provides advice regarding how to achieve accessibility compliance for pages containing dialog windows.

### Required background

The following topics are prerequisite to understanding this topic:

-   [**Accessibility Compliance Reference**](#accessibility-compliance)
	-   [Introduction](#accessibility-compliance-intro)
    -   [Accessibility compliance reference summary](#accessibility-compliance-summary)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="accessibility-compliance"></a> Accessibility Compliance Reference

### <a id="accessibility-compliance-intro"></a> Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed information about how the grid control complies with each rule is represented.

To meet the requirements of each accessibility rule, in some cases you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are thus marked as limitations.

### <a id="accessibility-compliance-summary"></a> Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the igDialog:

Rules | Rule Text | How We Comply
---------| -----------| ----------
(c) | Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. | Using client-side events, the user can change attributes of any of the control's DOM elements reflecting the current state.
(d)* | Documents shall be organized so they are readable without requiring an associated style sheet. | The control's markup is not readable without the associated style sheet  because it is a client-side control and depends on the CSS rules.
(l) | When pages utilize scripting languages to display content or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology. | When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).


* - control limitations

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI controls.
- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.





 

 


