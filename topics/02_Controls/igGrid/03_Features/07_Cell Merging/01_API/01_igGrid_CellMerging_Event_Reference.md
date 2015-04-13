<!--
|metadata|
{
    "fileName": "iggrid-cellmerging-event-reference",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Event Reference (Cell Merging, igGrid)


## Topic Overview

### Purpose

This topic provides reference information on the `igGrid`™ control’s Cell Merging feature’s events.

#### Required background

The following topic is a prerequisite to understanding this topic:

- [Cell Merging Overview (igGrid)](igGrid-CellMerging-Overview.html): This topic explains the `igGrid` control’s Cells Merging feature and its functionality. It contains code examples demonstrating how to enable and configure cell merging in the `igGrid`.




## Cell Merging Event Reference
This section describes the events related to the `igGrid` control’s Cell Merging feature listed in alphabetical order.

The following table explains the events fired with the Cell Merging feature enabled and, indicates whether an individual event can be stopped.

<table class="table table-bordered">
	<tbody>
        <tr>
            <td>
![](../../../../../images/images/positive.png)
			</td>
            <td colspan="2">
Yes (= the event **can** be stopped)
			</td>
        </tr>

        <tr>
            <td>
![](../../../../../images/images/negative.png)
			</td>
            <td  colspan="2">
No (= the event **cannot** be stopped)
			</td>
        </tr>
		<tr>
            <th>
Event
			</th>
            <th>
Description
			</th>
            <th>
Can be stopped?
			</th>
        </tr>

        <tr>
            <td>
[cellsMerging](%%jQueryApiUrl%%/ui.iggridcellmerging#events:cellsMerging)
			</td>
            <td>
                This event is raised before the merging cells with equal values.

                The handler function takes the arguments `evt` and `ui`. The `ui` argument options and their usage follow.

                <table class="table">
					<thead>
						<tr>
                            <th>
Argument name
							</th>
                            <th>
Usage
							</th>
                        </tr>
					</thead>
					<tbody>
                        <tr>
                            <td>
[ui.row](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.row)
							</td>
                            <td>
Gets reference to the row the merged group starts in
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowIndex](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.rowIndex)
							</td>
                            <td>
Gets the index of the row the merged group starts in.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowKey](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.rowKey)
							</td>
                            <td>
Gets the key of the row the merged group starts in.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.owner](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.owner)
							</td>
                            <td>
Gets reference to `igGridCellMerging` widget.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.grid](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.grid)
							</td>
                            <td>
Gets reference to the `igGrid` for which the `igGrid` Cell Merging is initialized.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.value](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.value)
							</td>
                            <td>
Gets the repeated cells value of the merged group to be created.
							</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>
            <td>
![](../../../../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td>
[cellsMerged](%%jQueryApiUrl%%/ui.iggridcellmerging#events:cellsMerged)
			</td>
            <td>
                When a merged group finishes (a different value is found) this event fires. The handler function takes arguments `evt` and `ui`. The `ui` argument
                    options and their usage follow.

                <table class="table">
					<thead>
						<tr>
                            <th>
Argument name
							</th>
                            <th>
Usage
							</th>
                        </tr>
					</thead>
					<tbody>
                        <tr>
                            <td>
[ui.row](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.row)
							</td>
                            <td>
Gets reference to the row the merged group starts in
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowIndex](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.rowIndex)
							</td>
                            <td>
Gets the index of the row the merged group starts in.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.rowKey](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.rowKey)
							</td>
                            <td>
Gets the key of the row the merged group starts in.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.owner](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.owner)
							</td>
                            <td>
Gets reference to `igGridCellMerging` widget.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.grid](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.grid)
							</td>

                            <td>
Gets reference to the `igGrid` the `igGridCellMerging` are initialized for.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.value](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.value)
							</td>
                            <td>
Gets the repeated cell’s value of the merged group.
							</td>
                        </tr>

                        <tr>
                            <td>
[ui.count](%%jQueryApiUrl%%/ui.iggridcellmerging#options:ui.count)
							</td>
                            <td>
Gets the total count of merged cells.
							</td>
                        </tr>
                    </tbody>
				</table>
            </td>

            <td>
![](../../../../../images/images/negative.png)
			</td>
        </tr>
    </tbody>
</table>


## Related Content

### Topics

The following topics provide additional information related to this topic.

- [Property Reference (Cell Merging, igGrid)](igGrid-CellMerging-Property-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s properties.

- [CSS Classes Reference (Cell Merging, igGrid)](igGrid-CellMerging-CSS-Classes-Reference.html): This topic provides reference information on the `igGrid` control’s Cell Merging feature’s CSS classes.



 

 


