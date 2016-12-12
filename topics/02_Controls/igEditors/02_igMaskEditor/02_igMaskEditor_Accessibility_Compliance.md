<!--
|metadata|
{
    "fileName": "igmaskeditor-accessibility-compliance",
    "controlName": "igEditors",
    "tags": ["Editing","Section 508"]
}
|metadata|
-->

# igMaskEditor Accessibility Compliance

##igMaskEditor Accessibility Compliance

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igMaskEditor` control complies with each rule. To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you. 
>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

Table 1: Section 508 compliance description

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Rules</th>

            <th>How We Comply with Rules</th>
        </tr>

        <tr>
            <td>(c)</td>

            <td>Using client side events, the user can change attributes of any of the control's DOM element reflecting the current state.</td>
        </tr>

        <tr>
            <td>(d)</td>

            <td>The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.</td>
        </tr>

        <tr>
            <td>(l)</td>

            <td>When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).</td>
        </tr>

        <tr>
            <td>(n)</td>

            <td>
 When `igMaskEditor` is on focus(edit mode) keyboard navigation is available. See the
[Editors Keyboard Navigation topic](igMaskEditor-Keyboard-Navigation.html) for a detailed list of available key operations and their respective action.
            </td>
        </tr>
    </tbody>
</table>
 
 

## <a id="wai-aria"></a> WAI-ARIA Support

In 2014 the W3C finalized their [WAI-ARIA specification](http://www.w3.org/TR/wai-aria/) which defined how to design Web content and Web applications to be more accessible to users with disabilities. The `igMaskEditor` has been designed so that it follows these guidelines.

The list below provides details about what changes have been made to the `igMaskEditor` to support WAI-ARIA. Please note that no special settings are  needed to leverage these changes, as they are all enabled by default.


- The input element of the `igMaskEditor` will render a <b>tabindex</b> attribute with a corresponding value from the <b>tabindex</b> option of the igMaskEditor, which allows access to the elements through the use of <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> keys.

> **Note:** If the tabindex option is not specified - tabindex equal to -1 is rendered as an attribute to the input element.</li>

- The `igMaskEditor` is decorated with a <b>textbox</b> role. 

- The `igMaskEditor` is decorated with a <b>aria-label</b> attribute with the corresponding value depending on the locale. The default value is 'Mask Editor'.

- In case button is rendered

	- Every rendered button is decorated with <b>button</b> role
	- Every rendered button has id (generated from the id of the widget) 
	- Every rendered button has <b>aria-label</b> attribute rendered with value extracted from the loaded locale.


