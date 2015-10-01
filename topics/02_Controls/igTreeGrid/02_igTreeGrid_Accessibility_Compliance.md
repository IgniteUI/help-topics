<!--
|metadata|
{
    "fileName": "igtreegrid-accessibility-compliance",
    "controlName": "igTreeGrid",
    "tags": ["Grids","Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igTreeGrid)

## igTreeGrid Accessibility Compliance

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
			<td>The igTreeGrid control participates in the tab sequence of the page and receives focus including via a mouse click. Selection must be enabled in order keyboard navigation to work.<ul>
					<li>LEFT ARROW: When a cell is selected, this command makes the previous cell selected.</li>
					<li>RIGHT ARROW: When a cell is selected, this command makes the next cell selected.</li>
					<li>UP ARROW: Makes the row/cell in the previous row selected</li>
					<li>DOWN ARROW: Makes the row/cell in the next row selected</li>
					<li>SHIFT+UP (or DOWN) ARROW: Includes the above (or below) row/cell in a multiple selection</li>
					<li>CTRL+UP (or DOWN) ARROW: Changes the currently active row/cell</li>
					<li>SHIFT+ENTER: Deselects the currently selected row/cell</li>
				</ul>* Descriptive label (for) is not provided for the editor input elements as part of the igTreeGridUpdating feature. This makes sense only if the grid's element is a form which is not supported.</td>
		</tr>
	</tbody>
</table>

\* - control limitations
 
 
## <a id="wai-aria"></a> WAI-ARIA Support


The igTreeGrid follows the [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/)  which defined how to design Web content and Web applications to be more accessible to users with disabilities.

The list below provides details on the ARIA attributes that are inherited from the igGrid and the ones specific to the igTreeGrid.

ARIA attributes inherited from the igGrid widget:
<ul>
<li>All elements of the igGrid render a <b>tabindex</b> attribute with a corresponding value from the <b>tabindex</b> option of the igGrid, which allows access to the elements through the use of TAB and SHIFT+TAB keys.</li>
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

Additional attributes that are specific to the igTreeGrid and help define its the hierarchical structure:
<ul>
<li>The igTreeGrid is decorated with a <b>treegrid</b> role.</li>
<li>The expansion indicators are focusable and can be used to expand/collapse the current row using the Enter/Spacebar keys.</li>
<li>The rows have <b>aria-level</b> attribute, which defines the hierarchical level of the row within the structure.
</li>
<li>The rows have <b>aria-expanded</b> attribute, which holds information on the current expanded/collapsed state of the row.</li>
<li>Each row has an <b>id</b> attribute. Parent rows have <b>aria-owns</b> attribute, which holds reference to the related child row ids.</li>
</ul>
