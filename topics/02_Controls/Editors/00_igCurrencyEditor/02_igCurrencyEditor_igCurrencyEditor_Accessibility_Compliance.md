<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igcurrencyeditor-accessibility-compliance",
    "controlName": "igEditors",
    "tags": ["Section 508"]
}
|metadata|
-->

# igCurrencyEditor Accessibility Compliance

All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the `igCurrencyEditor` control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

> **Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

Table 1: Section 508 compliance description
<table class="table">
    <thead>
        <tr>
            <th>
Rules
            </th>
            <th>
Compliance
            </th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
(c)
            </td>
            <td>
Using client side events, the user can change attributes of any of the control's DOM element reflecting the current state.
            </td>
        </tr>
        <tr>
            <td>
(d)
            </td>
            <td>
The control's markup is readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
            </td>
        </tr>
        <tr>
            <td>
(l)
            </td>
            <td>
When the control's scripts are changing the page markup, the new created content complies with the screen reader due to the attributes described in rule (c).
            </td>
        </tr>
        <tr>
            <td>
(n)
            </td>

            <td>
When igCurrencyEditor in on focus(edit mode):
                <ul>
                    <li>
UP ARROW – increases the value of the editor
                    </li>
                    <li>
DOWN ARROW – decrease the value of the editor
                    </li>
                    <li>
Ctrl/Alt + DOWN ARROW – opens dropdown calendar
                    </li>
                    <li>
Ctrl/Alt + UP ARROW – closes dropdown calendar
                    </li>
                    <li>
Escape – closes dropdown calendar (if opened)
                        <ul>
                            <li type="circle">
If dropdown calendar is opened
                                <ul>
                                    <li>
Navigation within that calendar is defined by rules of jquery.datepicker
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>

                * Descriptive label is not provided for the editor input.
                
            </td>
        </tr>
    </tbody>
</table>


