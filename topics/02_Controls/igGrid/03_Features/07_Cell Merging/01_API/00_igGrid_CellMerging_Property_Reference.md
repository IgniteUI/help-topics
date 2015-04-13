<!--
|metadata|
{
    "fileName": "iggrid-cellmerging-property-reference",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Property Reference (Cell Merging, igGrid)

## Topic Overview

### Purpose

This topic provides reference information on the `igGrid`™ control’s Cell Merging feature’s properties.

### Required background

The following topic is a prerequisite to understanding this topic:

- [Cell Merging Overview (igGrid)](igGrid-CellMerging-Overview.html): This topic explains the `igGrid` control’s Cells Merging feature and its functionality. It contains code examples demonstrating how to enable and configure cell merging in the `igGrid`.




## Cell Merging Property Reference

This section describes the `igGrid` control’s related Cell Merging properties.

The following table summarizes the Cell Merging property’s purpose and functionality.

<table class="table">
	<thead>
		<tr>
            <th>
Property
			</th>
            <th>
Type
			</th>
            <th>
Description
			</th>
            <th>
Default Value
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
[initialState](%%jQueryApiUrl%%/ui.iggridcellmerging#options:initialState)
			</td>
            <td>
string
			</td>
            <td>
                Sets the Cell Merging initial mode. The valid values are:

                <ul>
                    <li>
`“regular”` – sets Cell Merging to regular initial mode. Renders equal cells as usual and merges the cells after sorting operation and applies
                        the style to the equal groups.
					</li>

                    <li>
`“merged”` – sets Column Cell Merging to merged initial mode. When the `initialState` is “merged”, the equal cells are initially rendered with
                        the special style applied.
					</li>
                </ul>
            </td>
            <td>
 “regular”
			</td>
        </tr>
    </tbody>
</table>





## Related Content

### Topics

The following topics provide additional information related to this topic.

- [Event Reference](igGrid-CellMerging-Event-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s events.

- [CSS Classes Reference (Cell Merging, igGrid)](igGrid-CellMerging-CSS-Classes-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s CSS classes.



 

 


