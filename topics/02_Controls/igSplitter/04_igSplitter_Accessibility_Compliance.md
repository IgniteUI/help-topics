<!--
|metadata|
{
    "fileName": "igsplitter-accessibility-compliance",
    "controlName": "igSplitter",
    "tags": ["Getting Started","How Do I","Layouts","Section 508"]
}
|metadata|
-->

# Accessibility Compliance



## Topic Overview
### Purpose

This topic explains the accessibility features of the `igSplitter`™ control and provides advice on how to achieve accessibility compliance for pages containing this control.

### Required background

The following topics are prerequisites to understanding this topic:

- [igSplitter Overview](igSplitter-Overview.html): This topic provides conceptual information about the `igSplitter` control including its features and user functionality.

- [Adding igSplitter](Adding-igSplitter.html): This topic demonstrates, with code examples, how to add the `igSplitter` control to an HTML page in either JavaScript and ASP.NET MVC.

## igSplitter Accessibility Compliance
### igSplitter accessibility compliance summary

All Infragistics® Ignite UI® controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. The [igSplitter accessibility compliance summary chart](#summary-chart) contains the specific rules of Subpart 1194.22 that pertain to the control. Also, detailed is how the grid control complies with each rule.

In some cases, to meet the requirements of each accessibility rule, you may need to interact with the control by setting a specific property, but in other cases, the control performs these tasks for you.

>**Note:** As jQuery controls are client-only, consequently some of the rules are unsupported and are marked as limitations.

### <a id="summary-chart"></a>igSplitter accessibility compliance summary chart

The following table summarizes the accessibility compliance features of the `igSplitter` control.

<table class="table">
	<thead>
		<tr>
            <th>
Rules
			</th>

            <th>
Rule text
			</th>

            <th>
How we comply
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
(c)
			</td>

            <td>
Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.
			</td>

            <td>
You can control the coloring and provide suitable colors for maps using the styling and theming capabilities of `igSplitter`.
			</td>
        </tr>

        <tr>
            <td>
(d)
			</td>

            <td>
Documents shall be organized so they are readable without requiring an associated style sheet.
			</td>

            <td>
The control's markup is readable without the associated style sheet because it is a client-side control and depends on the CSS rules.
			</td>
        </tr>

        <tr>
            <td>
(n)
			</td>

            <td>
When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including
                    all directions and cues.
			</td>

            <td>
                When splitter bar is on focus, users can perform the following actions using the keyboard:

                <ul>
                    <li>
**Resize panels**
					</li>
                </ul>

                Pressing an arrow key (Left/Right for a vertical bar and Up/Down for a horizontal bar) moves it with a pre-set step of 10 pixels. (The size of the step is hard-coded and non-configurable.) When the desired position of the bar has been
                    reached, the user needs to press Enter/Tab/Space to resize the panels according the current position of the splitter bar. The ESC key cancels the splitter bar moving action and returns the bar to its original position (the position
                    in which the splitter was before the arrow key was first pressed.

                <ul>
                    <li>
**Expand/collapse panels**
					</li>
                </ul>

                Pressing CTRL+arrow key collapses/expands the panels in the respective direction:

                <ul>
                    <li>
**Ctrl+Left/Right** arrow keys collapse/expand panels with a vertical splitter bar
					</li>

                    <li>
**Ctrl+Up/Down** arrow keys collapse/expand panels with a horizontal splitter bar
					</li>
                </ul>

                This capability needs to be enabled explicitly. For details, refer to the [Configuring topic](Configuring-igSplitter.html).
            </td>
        </tr>
    </tbody>
</table>

## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information about the accessibility compliance of all controls in the Ignite UI product suite.

 

 


