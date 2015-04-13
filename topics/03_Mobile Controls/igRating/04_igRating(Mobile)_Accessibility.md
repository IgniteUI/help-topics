<!--
|metadata|
{
    "fileName": "igrating(mobile)-accessibility",
    "controlName": "igRatingMobile",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igRating Mobile)



### Purpose

This topic explains `igRating`™ accessibility features and provides advice how to achieve accessibility compliance for pages containing ratings.



## Accessibility Compliance Reference

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed information about how the grid control complies with each rule is represented.

Apart from Section 508 we are also following [Mobile Web Best Practices](http://www.w3.org/TR/mobile-bp/) guide and [Web Content Accessibility Guidelines](http://www.w3.org/WAI/intro/wcag.php) guide.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the `igRating`.

Rules | Rule Text | How We Comply
---|---|---
(c) | Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup. | Using client-side events, the user can change attributes of any of the control's DOM elements reflecting the current state.
(d)* | Documents shall be organized so they are readable without requiring an associated style sheet. | The control's markup is not readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
(l) | When pages utilize scripting languages to display content, or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology. | When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).

\* - control limitations


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics


The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI controls.

- [igRating (Mobile) Overview](igRating%28Mobile%29-Overview.html): The topic that introduces the user to the `igRating`™ control’s main features and functionality.





 

 


