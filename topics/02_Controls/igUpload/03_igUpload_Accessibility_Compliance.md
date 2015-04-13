<!--
|metadata|
{
    "fileName": "igupload-accessibility-compliance",
    "controlName": "igUpload",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igUpload)

## Upload Accessibility Compliance
All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. **Table 1** contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igUpload` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

**Table 1: Section 508 compliance description**

Rules| Compliance
---|---
(c)| Using client side events, the user can change any attribute of any of the control's DOM element reflecting the current state.
(d)\*|The control's markup is not readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
(l)|When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).
(n)|By default the control participate in the tab sequence of the page. By using TAB key, you can navigate the control and its elements.
(o)|You can achieve this through some of the navigation keys mentioned for (n).
(p)|While the files are uploading you are receiving current upload information from the progress bar.

\* - control limitations

## Related Links
- [igUpload Overview](igUpload-Overview.html)

 

 


