<!--
|metadata|
{
    "fileName": "igpivotview-accessibility-compliance",
    "controlName": "igPivotView",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igPivotView)

##Topic Overview

### Purpose

This topic explains the accessibility features of the `igPivotView`™ control and provides advice on how to achieve accessibility compliance for pages containing this control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igPivotView Overview](igPivotView-Overview.html): This topic provides conceptual information about the `igPivotView` control including its main features, minimum requirements, and user functionality.

- [Adding igPivotView](igPivotView-Adding.html): This is a group of topics demonstrating how to add the `igPivotView` control to an HTML page and to an ASP.NET MVC application.


##igPivotView Accessibility Compliance

### igPivotView accessibility compliance summary

All Infragistics® %%ProductName%%™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The [igPivotView accessibility compliance summary chart](#summary-chart) contains the specific rules of Subpart 1194.22 that pertain to the control.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

>**Note:** As jQuery controls are client-only, consequently some of the rules are unsupported and are marked as limitations.

### <a id="summary-chart"></a>igPivotView accessibility compliance summary chart

The following table summarizes the accessibility compliance features of the `igPivotView` control.

Rules| Rule text| How we comply
---|---|---
(a)| A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).|The control provides the required attributes.
(c)|Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.|You can control the coloring and provide suitable colors using the styling and theming capabilities of `igPivotView`.
(d)\*|Documents shall be organized so they are readable without requiring an associated style sheet.|The control's markup is not readable without the associated style sheet because it is a client-side control and depends on the CSS’s rules.
(g)|Row and column headers shall be identified for data tables.|-
(h)|Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.|- 
(n)|When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.|The metadata tree part of the igPivotDataSelector™ in the igPivotView control participates in the tab sequence of the page and receives focus including via a mouse click. The Defer Update check-box and the Force Update button participate in the tab sequence as well. The [Selection](%%jQueryApiUrl%%/ui.iggridselection) feature must be enabled for the igPivotGrid in order keyboard navigation for data cells to work. To use the keyboard for navigation between cells, a cell must be first selected with the mouse.<ul><li>Keyboard selection</li><li>Left arrow – selects the cell adjacent to the left of the currently selected cell</li><ul><li>Right arrow – selects the cell adjacent to the right of the currently selected cell</li><li>Up arrow – selects the cell/row adjacent to the top of the currently selected cell/row</li><li>Down arrow – selects the cell/row adjacent to the bottom of the currently selected cell/row</li><li>Shift+Up/Down arrow – includes in the selection the cell/row adjacent to the top of the current selection</li><li>Ctrl+ Up/Down arrow – shifts the focus from the currently active row/cell to the next adjacent row/cell in upward/downward direction</li></ul></ul><br>When splitter bar of the `igSplitter`™ control is on focus, users can perform the following  actions using the keyboard:<ul><li>Resize panels - Pressing an arrow key (Left/Right) moves it with a pre-set step of 10 pixels. (The size of the step is hard-coded and non-configurable.) When the desired position of the bar has been reached, the user needs to press Enter/Tab/Space to resize the panels according the current position of the splitter bar. The ESC key cancels the splitter bar moving action and returns the bar to its original position (the position in which the splitter was before the arrow key was first pressed.</li><li>Expand/collapse panels – Ctrl+Left/Right arrow keys collapse/expand the panels</li></ul>



\* – control limitations



##Related Content

### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): This topic provides reference information about the accessibility compliance of all controls in the Infragistics %%ProductName%% product suite.





 

 


