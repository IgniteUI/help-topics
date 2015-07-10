<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igcurrencyeditor-accessibility-compliance",
    "controlName": "igEditors",
    "tags": ["Section 508"]
}
|metadata|
-->

# igCurrencyEditor Accessibility Compliance

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igCurrencyEditor` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

Table 1: Section 508 compliance description

Rules|Compliance
---|---
(c)|Using client side events, the user can change attributes of any of the control's DOM element reflecting the current state.
(d)|The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
(l)|When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).
(n)|[Keyboard Navigation (igCurrencyEditor)](igCurrencyEditor-Keyboard-Navigation.html)


