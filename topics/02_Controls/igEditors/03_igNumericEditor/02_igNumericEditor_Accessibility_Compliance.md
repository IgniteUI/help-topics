<!--
|metadata|
{
    "fileName": "ignumericeditor-accessibility-compliance",
    "controlName": "igEditors",
    "tags": ["Section 508"]
}
|metadata|
-->

# igNumericEditor Accessibility Compliance


##igNumericEditor Accessibility Compliance


All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igNumericEditor` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

Table 1: Section 508 compliance description

Rules|How We Comply with Rules
---|---
(c)|Using client side events, the user can change attributes of any of the control's DOM element reflecting the current state.
(d)|The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
(l)|When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).
(n)|[Keyboard Navigation (igNumericEditor)](igNumericEditor-Keyboard-Navigation.html)</td>

## <a id="wai-aria"></a> WAI-ARIA Support

In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities. The `igNumericEditor` has been designed so that it follows these guidelines.

The list below provides details about what changes have been made to the `igNumericEditor` to support WAI-ARIA. Please note that no special settings are  needed to leverage these changes, as they are all enabled by default.

<ul>
<li>The input element of the `igNumericEditor` will render a <b>tabindex</b> attribute with a corresponding value from the <b>tabindex</b> option of the igNumericEditor, which allows access to the elements through the use of <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> keys.

>**Note:** If the tabindex option is not specified - tabindex equal to -1 is rendered as an attribute to the input element.</li>

<li>The `igNumericEditor` is decorated with a <b>textbox</b> role. In case there are defined listItems option and list is rendered the editor input is decorated with <b>combobox</b> role.</li>

<li>The `igNumericEditor` is decorated with a <b>aria-label</b> attribute with the corresponding value depending on the locale. The default value is 'Numeric Editor'. </li>

<li>In case button is rendered
<ul>
<li>Every rendered button is decorated with <b>button</b> role
<li>Every rendered button has id (generated from the id of the widget) 
<li>Every rendered button has <b>aria-label</b> attribute rendered with value extracted from the loaded locale. </li>
</ul>
</li> 

<li>In case list items are rendered
<ul>
<li>
The editor input is decorated with <b>aria-owns</b> attribute equal to the id of the list container. 
</li>
<li>The dropdown list is decorated with <b>listbox</b> role. </li>
<li>Every list item element has generated id and it's decorated with <b>option</b> role.</li>
<li>Every list item element has <b>aria-posinset</b> attribute rendered with the corresponding order number in the list</li>
<li>Every list item element has <b>aria-selected</b> attribute rendered by default false. The value is changed according to the selection into the drop down list.
<li>Every list item has <b>title</b> attribute rendered equal to the text value of the item


 

 


