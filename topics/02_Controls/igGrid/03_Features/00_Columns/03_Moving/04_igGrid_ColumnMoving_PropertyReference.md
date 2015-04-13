<!--
|metadata|
{
    "fileName": "iggrid-columnmoving-propertyreference",
    "controlName": "igGrid",
    "tags": ["API","Grids"]
}
|metadata|
-->

# Property Reference (igGrid)



## igGrid Column Moving Properties

The following table explains some of the properties of the `igGrid` Column Moving feature and lists the default and recommended values. The properties are sorted alphabetically.

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
            <td><a id="addMovingDropdown" name="addMovingDropdown"></a>
[addMovingDropdown](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:addMovingDropdown)
			</td>

            <td>
bool
			</td>

            <td>
When false, hides the column moving menu for all columns.
			</td>

            <td>
true
			</td>
        </tr>

        <tr>
            <td><a id="columnSettings" name="columnSettings"></a>
[columnSettings](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings)
			</td>

            <td>
array
			</td>

            <td>
If column moving is enabled, configures individual columns for which moving will be disabled. The columns are specified through the [`columnSettings.allowMoving`](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.allowMoving) and [`columnSettings.columnIndex`](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnIndex) /[`columnSettings.columnKey`](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnKey) properties.
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td><a id="allowMoving"></a>
[columnSettings.allowMoving](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.allowMoving)
			</td>

            <td>
bool
			</td>

            <td>
When false, disables column moving for a particular column in the grid. The configured column is specified by either  [`columnSettings.columnIndex`](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnIndex) or [`columnSettings.columnKey`](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnKey)
                        .
			</td>

            <td>
true
			</td>
        </tr>

        <tr>
            <td><a id="columnIndex" name="columnIndex"></a>
[columnSettings.columnIndex](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnIndex)
			</td>

            <td>
number
			</td>

            <td>
The index of the column that is being configured. Use the column index to specify the column when the grid columns do not have column keys defined (e.g. when [`autoGenerateColumns`](%%jQueryApiUrl%%/ui.iggrid#options:autoGenerateColumns) is set to true).
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td><a id="columnKey" name="columnKey"></a>
[columnSettings.columnKey](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:columnSettings.columnKey)
			</td>

            <td>
string
			</td>

            <td>
The column key of the column that is being configured. Use the column key to configure the column when the grid columns have column keys defined (e.g. when the grid columns are defined manually).
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td><a id="mode" name="mode"></a>
[mode](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:mode)
			</td>

            <td>
string
			</td>

            <td>
Sets the [Column Moving mode](igGrid-ColumnMoving-Overview.html#mode). The valid values are:

                <ul>
                    <li>
“immediate” – sets Column Moving to Immediate mode
					</li>
                </ul>
(As the user draggs the header, it is moved and the columns swap animatedly.)

                <ul>
                    <li>
“deferred” – sets Column Moving to Deferred mode
					</li>
                </ul>

                (Dragging does not move the column header but, instead, arrowheads appear to mark the position where the column would be dropped if the user releases the mouse button.)
            </td>

            <td>
“immediate”
			</td>
        </tr>

        <tr>
            <td><a id="moveType" name="moveType"></a>
[moveType](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:moveType)
			</td>

            <td>
string
			</td>

            <td>
                Sets the [Column Moving type](igGrid-ColumnMoving-Overview.html#type). The valid values are:

                <ul>
                    <li>
“dom” – sets the type to DOM Manipulation
					</li>
                </ul>

                (The column will be moved by detaching the column DOM and then re-attaching it back in the DOM tree.)

                <ul>
                    <li>
“render” – sets the type to Grid Re-rendering
					</li>
                </ul>

                (The grid will be re-rendered with the new column order.)
            </td>

            <td>
“dom”
			</td>
        </tr>

        <tr>
            <td><a id="movingDialogAnimationDuration" name="movingDialogAnimationDuration"></a>
[movingDialogAnimationDuration](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:movingDialogAnimationDuration)
			</td>

            <td>
number
			</td>

            <td>
Sets the timeDuration in milliseconds to of the animation showing or hiding the [Move Columns dialog](igGrid-ColumnMoving-Overview.html#column-moving-dialog).
			</td>

            <td>
200
			</td>
        </tr>

        <tr>
            <td><a id="movingDialogHeight" name="movingDialogHeight"></a>
[movingDialogHeight](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:movingDialogHeight)
			</td>

            <td>
number
			</td>

            <td>
Sets the height of the [Move Columns dialog](igGrid-ColumnMoving-Overview.html#column-moving-dialog). By default, the height is not set, so that the dialog height stretches to show all the
                    grid columns.
			</td>

            <td>
N/A
			</td>
        </tr>

        <tr>
            <td><a id="movingDialogWidth" name="movingDialogWidth"></a>
[movingDialogWidth](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:movingDialogWidth)
			</td>

            <td>
number
			</td>

            <td>
Sets the width of the [Move Columns dialog](igGrid-ColumnMoving-Overview.html#column-moving-dialog).
			</td>

            <td>
400
			</td>
        </tr>
    </tbody>
</table>


## Related Content

### Topics

The following topics provide additional information related to this topic.

- [Column Moving Overview](igGrid-ColumnMoving-Overview.html): This topic explains conceptually the Column Moving feature of the `igGrid` and the functionalities this feature provides.

- [Enabling Column Moving](igGrid-ColumnMoving-Enabling.html): This topic explains, with code examples, how to enable the Column Moving feature of the `igGrid`.

- [Configuring Column Moving](igGrid-ColumnMoving-Configuring.html): This topic explains, with code examples, how to configure the Column Moving feature of the `igGrid`.

- [Moving Columns Programmatically](igGrid-ColumnMoving-MovingColumnsProgrammatically.html): This topic explains, with code examples, how to move columns using the column moving API.





 

 


