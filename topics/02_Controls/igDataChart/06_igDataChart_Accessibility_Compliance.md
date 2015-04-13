<!--
|metadata|
{
    "fileName": "igdatachart-accessibility-compliance",
    "controlName": "igDataChart",
    "tags": ["Charting","Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igDataChart)



##Topic Overview


### Purpose

This topic explains `igDataChart`™ accessibility features and provides advice how to achieve accessibility compliance for pages containing charts.

### Required background

The following topics are prerequisite to understanding this topic:


-	[**igDataChart Overview**](igDataChart-Overview.html):  This topic provides conceptual information about the `igDataChart` control including its main features, minimum requirements for using charts and user functionality.

-	[**Adding igDataChart**](igDataChart-Adding.html): This topic demonstrates how to create add the `igDataChart` control and bind it to data.





##Accessibility Compliance Reference


### Introduction

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igDataChart` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

#### Accessibility compliance reference summary

The following table summarizes the accessibility compliance features of the igDataChart.

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
			<td>(a)</td>
			<td>A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).</td>
			<td>Since igDataChart is exclusively a graphic control you may consider providing an alternative view for disabled people by converting the chart into a table or igGrid™ component with the chart data. That way screen readers may help users to get the information from the chart.</td>
		</tr>
		<tr>
			<td>(b)</td>
			<td>Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.</td>
			<td>See the note for (a) for an alternative way to provide compliance to the rule.</td>
		</tr>
		<tr>
			<td>(c)</td>
			<td>Web pages shall be designed so that all information conveyed with color is also available without color, for example from context or markup.</td>
			<td>You can control coloring and provide suitable colors for charts using the styling and theming capabilities of igDataChart.</td>
		</tr>
		<tr>
			<td>(d)*</td>
			<td> Documents shall be organized so they are readable without requiring an associated style sheet.</td>
			<td>The control's markup is not readable without the associated style sheet because it’s a client-side control and depends on the CSS rules. See the note for (a) for an alternative way to provide compliance to the rule.</td>
		</tr>
	</tbody>
</table>

\* - control limitations



##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[**Accessibility Compliance**](Accessibility-Compliance.html):  Provides reference information for accessibility compliance of all Ignite UI controls.





 

 


