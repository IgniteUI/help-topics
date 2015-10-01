<!--
|metadata|
{
    "fileName": "iggrid-accessibility-compliance",
    "controlName": "igGrid",
    "tags": ["Grids","Section 508","WAI-ARIA"]
}
|metadata|
-->

# Accessibility Compliance (igGrid)

### In this topic

This topic contains the following sections:

-	[Section 508 Compliance](#section-508)
-	[WAI-ARIA Support](#wai-aria)

## <a id="section-508"></a> igGrid Section 508 Compliance

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the grid control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.
 
Table 1: Section 508 compliance description

<table class="table table-striped">
	<tbody>
		<tr>
			<th>Rules</th>
			<th>How We Comply with Rules</th>
		</tr>
		<tr>
			<td>(a)</td>
			<td>A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content).</td>
		</tr>
		<tr>
			<td>(b)</td>
			<td>Equivalent alternatives for any multimedia presentation shall be synchronized with the presentation.</td>
		</tr>
		<tr>
			<td>(d)*</td>
			<td>The control's markup is not readable without the associated style sheet because it's a client-side control and depends on the CSS rules.</td>
		</tr>
		<tr>
			<td>(g)</td>
			<td>Row and column headers shall be identified for data tables.</td>
		</tr>
		<tr>
			<td>(h)</td>
			<td>Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.</td>
		</tr>
		<tr>
			<td>(n)*</td>
			<td>The igGrid control participates in the tab sequence of the page and receives focus including via a mouse click. Selection must be enabled in order keyboard navigation to work.<ul>
					<li>LEFT ARROW: When a cell is selected, this command makes the previous cell selected.</li>
					<li>RIGHT ARROW: When a cell is selected, this command makes the next cell selected.</li>
					<li>UP ARROW: Makes the row/cell in the previous row selected</li>
					<li>DOWN ARROW: Makes the row/cell in the next row selected</li>
					<li>SHIFT+UP (or DOWN) ARROW: Includes the above (or below) row/cell in a multiple selection</li>
					<li>CTRL+UP (or DOWN) ARROW: Changes the currently active row/cell</li>
					<li>SHIFT+ENTER: Deselects the currently selected row/cell</li>
				</ul>* Descriptive label (for) is not provided for the editor input elements as part of the igGridUpdating feature. This makes sense only if the grid's element is a form which is not supported.</td>
		</tr>
	</tbody>
</table>

\* - control limitations
 
## <a id="wai-aria"></a> WAI-ARIA Support

In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities. The igGrid has been designed so that it follows these guidelines.

The list below provides details about what changes have been made to the igGrid to support WAI-ARIA. Please note that no special settings are  needed to leverage these changes, as they are all enabled by default.

<ul>
<li>All elements of the igGrid render a <b>tabindex</b> attribute with a corresponding value from the <b>tabindex</b> option of the igGrid, which allows access to the elements through the use of TAB and SHIFT+TAB keys.</li>
<li>The igGrid is decorated with a <b>grid</b> role.</li>
<li> The header elements are each decorated with an <b>aria-label</b> attribute with the column header text, which allows the header text to be read instead of the <b>title</b> attribute value when a <b>title</b> attribute is present.</li>
<li> All column headers are decorated with the <b>columnheader</b> role.</li>
<li> The thead, tbody, and tfoot elements are all decorated with a <b>rowgroup</b> role</li>
<li> The rows are decorated with a <b>row</b> role.</li>
<li> Row selector elements are decorated with a <b>rowheader</b> role.</li>
<li> Table cell elements inside of the table body rows are decorated with a <b>gridcell</b> role. </li>
<li> Table cell elements inside of the table body rows are decorated with <b>aria-describedby</b> attributes with a value set to the <b>id</b> of the corresponding columnheader element of the column the table cell belongs to. </li>
<li> Table cell elements inside of the table body rows are decorated with <b>aria-selected</b> attributes when the selection feature is enabled. By default the value of the <b>aria-selected</b> will be <b>false</b> unless a row is selected initially in configuration.</li>
<li> The table is decorated with an <b>aria-multiselectable</b> attribute when the selection feature is enabled. The value of this attribute depends on the value of the <b>multipleSelection</b> option of the selection feature.</li>
<li> Checkboxes are decorated with the <b>checkbox</b> role and <b>aria-checked</b> attribute. In addition, checkboxes are decorated with the <b>aria-title</b> attribute which corresponds to the related column header.</li>
</ul>