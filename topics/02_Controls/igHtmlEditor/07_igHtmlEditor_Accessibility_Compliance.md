<!--
|metadata|
{
    "fileName": "ightmleditor-accessibility-compliance",
    "controlName": "igHtmlEditor",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance



##Topic Overview


### Purpose

This topic explains `igHtmlEditor`™ accessibility features and provides advice on how to achieve accessibility compliance for pages containing this control.

### Required background

The following topics are prerequisites to understanding this topic:


-	[igHtmlEditor Overview](igHtmlEditor-Overview.html): This topic describes the features of the `igHtmlEditor`.

-	[Adding igHtmlEditor](igHtmlEditor-Adding-igHtmlEditor.html): This topic describes how to add an `igHtmlEditor` to a web page.


##Accessibility Compliance Reference


### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igHtmlEditor` control complies with each rule.

To meet the requirements for each accessibility rule, in some cases, you may need to interact with the control by setting a specific option, but in other cases the control does the work for you.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance rules for the `igHtmlEditor` control.

Rules|Rule Text|How We Comply
---|---|---
(a)| A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content). | All toolbar buttons have the title attribute defined. Combo boxes are using input elements for the selected text.
(c)\*|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.| There is no additional markup which will indicate the selected color for fore color and back color buttons.
(d)\*| Documents shall be organized so they are readable without requiring an associated style sheet.| The control's markup is not readable without the associated style sheet because it is a client-side control and depends on the CSS rules. 
(j)|Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.|The `igHtmlEditor` control does not itself contribute to causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz. (There are no BLINK or MARQUEE elements as part of the editor.)
(k)\*| A text-only page, with equivalent information or functionality, shall be provided to make a web site comply with the provisions of this part, when compliance cannot be accomplished in any other way. The content of the text-only page shall be updated whenever the primary page changes.| The `igHtmlEditor` has a TEXTAREA element which holds the HTML code of the editor. This TEXTAREA can be used for text-only pages, but additional actions are needed by the developer to extract and present this data in a text-only page.
(m)| When a web page requires that an applet, plug-in or other application be present on the client system to interpret page content, the page must provide a link to a plug-in or applet that complies with §1194.21(a) through (l).| The `igHtmlEditor` doesn’t use OBJECT, APPLET or EMBED elements in it.
(l)\*|When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.| Scripts are used to generate HTML content on the page. The generated HTML content can be read by assistive technology. However, there is no NOSCRIPT element rendered.
(n)| When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.| The `igHtmlEditor` uses a TEXTAREA element to hold its data and when used in an HTML form, this TEXTAREA is submitted with the form content.



*- control limitation



##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI controls.





 

 


