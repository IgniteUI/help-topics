<!--
|metadata|
{
    "fileName": "igscheduler-accessibility-compliance",
    "controlName": "igScheduler",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igScheduler)


## igScheduler Accessibility Compliance


### Purpose

This topic explains `igScheduler`™ accessibility features and provides advice how to achieve accessibility compliance for pages containing schedulers.

### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

#### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the igScheduler.

<table class="table">
	<thead>
		<tr>
			<th>Rules</th>
			<th>Rule Text</th>
			<th>How We Comply</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>(c)</td>
			<td>Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.</td>
			<td>You can control coloring and provide suitable colors for scheduler using the styling and theming capabilities of igScheduler.
            Using client-side events, the user can change attributes of any of the control's DOM elements reflecting the current state.</td>
		</tr>
		<tr>
			<td>(d)</td>
			<td>Documents shall be organized so they are readable without requiring an associated style sheet.</td>
			<td>The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules..</td>
		</tr>
        <tr>
			<td>(j)</td>
			<td>Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.	</td>
			<td>The igScheduler control does not itself contribute to causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz. (There are no BLINK or MARQUEE elements as part of the control.)</td>
		</tr>
        <tr>
			<td>(l)</td>
			<td>When pages utilize scripting languages to display content or to create interface elements, the information provided by the script shall be identified with functional text that can be read by assistive technology.</td>
			<td>When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).</td>
		</tr>
        <tr>
			<td>(n)</td>
			<td>When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.</td>
			<td>Keyboard navigation for selecting different date is provided and the same applies for the date picker editor when it is on focus (edit mode).</td>
		</tr>
	</tbody>
</table>

## WAI-ARIA Support
In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities. The igScheduler is not yet completely designed to follow these guidelines.

The list below provides links to more details on how WAI-ARIA support has been implemented in Widgets that are part of the scheduler and follows WAI-ARIA guidelines.

- [igDatePicker](igdatepicker-accessibility-compliance.html#wai-aria)
- [igDateEditor](igdateeditor-accessibility-compliance.html#wai-aria)
- [igTextEditor](igtexteditor-accessibility-compliance.html#wai-aria)


## Related Topics


Following are some other topics you may find useful.

-	[Accessibility Compliance](Accessibility-Compliance.html)






