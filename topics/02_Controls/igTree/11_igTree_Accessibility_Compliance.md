<!--
|metadata|
{
    "fileName": "igtree-accessibility-compliance",
    "controlName": "igTree",
    "tags": ["Section 508"]
}
|metadata|
-->

# igTree Accessibility Compliance

## igTree Accessibility Compliance
### Introduction
All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

### Accessibility reference chart
The table below briefly explains how the `igTree` complies to the corresponding Section 508 rules.

Rule | How We Comply with the Rules
---|---
**a**|Parent and leaf node images allow for text equivalents via titles. `ImageUrls` do not provide such capability but developers can select the images and provide a text equivalent via titles. If no title attributes are provided the alt attribute will always read “error” because it is there to visually indicate whenever an image is not correctly loaded due to an incorrect path.
**c**|All interaction elements are marked with a data-role attribute. For example, expanders are marked with `data-role=expander` and checkboxes are marked with `data-role=checkbox`. Also LI elements are marked as data-role=node to differentiate them from other LI elements on the page.
**d**|The tree is readable without the associated style sheet, however all functional visual elements have to be found using the mentioned above data-role attributes.
**k**|See c. and d.
**n**|Keyboard navigation is provided.

## Related Topics
Following are some other topics you may find useful.

-   [Accessibility Compliance](Accessibility-Compliance.html)

 

 


