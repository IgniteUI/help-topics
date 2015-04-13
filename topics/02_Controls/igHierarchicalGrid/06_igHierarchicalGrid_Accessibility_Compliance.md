<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-accessibility-compliance",
    "controlName": "igHierarchicalGrid",
    "tags": ["Grids","Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igHierarchicalGrid)

## igHierarchicalGrid Accessibility Compliance Overview

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The table in the Section "508 Compliance Description" block lists the specific rules of Subpart 1194.22 that pertain to the control and details how the grid control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by to setting a specific property, but in other cases, the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

## Section 508 Compliance Description

Rules | How We Comply with Rules
--------|------------
(a)| A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).
(b)| Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.
(d) | The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
(g) | Row and column headers shall be identified for data tables.
(h) | Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.
(n) | The igHierarchicalGrid control participates in the tab sequence of the page and receives focus including via a mouse click. Selection must be enabled in order keyboard navigation to work. <ul><li>**Left arrow** - when a cell is selected, this command makes the previous cell selected.</li><li>**Right arrow** - when a cell is selected, this command makes the next cell selected.</li><li>**Up arrow** - makes the row/cell in the previous row selected</li><li>**Down arrow** - makes the row/cell in the next row selected<li>**Shift+up/down arrow** - includes the above (or below) row/cell in a multiple selection</li><li>**Ctrl+up/down arrow** - changes the currently active row/cell</li><li>**Shift+Enter** - deselects the currently selected row/cell</li></ul>
