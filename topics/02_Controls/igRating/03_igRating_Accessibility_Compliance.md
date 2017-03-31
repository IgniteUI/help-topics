<!--
|metadata|
{
    "fileName": "igrating-accessibility-compliance",
    "controlName": "igRating",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igRating)



## Rating Accessibility Compliance
All of the %%ProductName%%™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. **Table 1** contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

**Table 1: Section 508 compliance description**

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Rules
			</th>

            <th>
How We Comply with Rules
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
(c)
			</td>

            <td>
Using client-side events, the user can change the attributes of any of the control's DOM elements reflecting the current state.
			</td>
        </tr>

        <tr>
            <td>
(d)*
			</td>

            <td>
The control's markup is not readable without the associated style sheet because it’s a client-side control and depends on CSS rules.
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
                By setting the control's ‘focusable’ property to a value equal to true, the control will participate in the tab sequence of the page and receive focus, or get focus, from a mouse click. By default the jQuery Rating control is focusable.

                <ul>
                    <li>
RIGHT ARROW – If the control is horizontal, items are hovered from left to right.
					</li>

                    <li>
LEFT ARROW – If the control is horizontal, items are hovered from right to left.
					</li>

                    <li>
UP ARROW – If the control is vertical, items are hovered from bottom to top.
					</li>

                    <li>
DOWN ARROW – If the control is vertical, items are hovered from top to bottom.
					</li>

                    <li>
END – All of the items are hovered.
					</li>

                    <li>
HOME – No items are hovered.
					</li>

                    <li>
PAGE UP - If the control is horizontal, four items are hovered at once&nbsp;from right to left. If the control is vertical, four&nbsp;items are hovered at once&nbsp;from bottom to top.
					</li>

                    <li>
PAGE DOWN - If the control is horizontal, four items are hovered at once from left to right. If the control is vertical, four items are hovered at once from top to bottom.
					</li>

                    <li>
ENTER or SPACE – Sets hovered values.
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

\* - control limitations

## Related Links
- [igRating Overview](igRating-Overview.html)

 

 


