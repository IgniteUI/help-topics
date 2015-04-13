<!--
|metadata|
{
    "fileName": "igvideoplayer-accessibility-compliance",
    "controlName": "igVideoPlayer",
    "tags": ["Section 508"]
}
|metadata|
-->

# Accessibility Compliance (igVideoPlayer)

## Video Player Accessibility Compliance
All of the Ignite UI™ controls and components comply with Section 508, Subpart 1194.22 of the Rehabilitation Act of 1973. Table 1 contains the specific rules of Subpart 1194.22 that pertain to the control. Also detailed is how the video player control complies with each rule.

To meet the requirements each accessibility rule, in some cases, you may need to interact with the control by to setting a specific property, but in other cases the control does the work for you.

>**Note:** As jQuery controls are client-only, some of the rules are not supported and are marked as limitations.

**Table 1: Section 508 compliance description**

<table class="table">
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
Using client side events, the user can change attributes of any of the control's DOM element reflecting the current state.
			</td>
        </tr>

        <tr>
            <td>
(d)*
			</td>

            <td>
The control's markup is not readable without the associated style sheet because it’s a client-side control and depends on the CSS rules.
			</td>
        </tr>

        <tr>
            <td>
(j)*
			</td>

            <td>
The control is designed to not cause flickering of the screen. However, the video played may contain certain effects that resemble flickering and which the control does not limit or in any other way stop from playing.
			</td>
        </tr>

        <tr>
            <td>
(l)
			</td>

            <td>
When the control's scripts are changing the page markup, the newly created content complies with the screen reader due to the attributes described in rule (c).
			</td>
        </tr>

        <tr>
            <td>
(n)
			</td>

            <td>
                The jQuery Video Player participates in the tab sequence of the page and receives focus including via a mouse click.

                <ul>
                    <li>
RIGHT ARROW – Playback is forwarded. (when slider is on focus)
					</li>

                    <li>
LEFT ARROW – Playback is reverted. (when slider is on focus)
					</li>

                    <li>
SPACE – Pauses or plays the video depending on the current state.
					</li>

                    <li>
ESC – Exits from full screen
					</li>

                    <li>
TAB – Move across playback controls and set the focus to each control button. This will work only when Infragistics playback controls are used – embedded browser controls do not support keyboard navigation.
					</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

\* - control limitations

 


