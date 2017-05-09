<!--
|metadata|
{
    "fileName": "igtree-drag-and-drop-property-api-reference",
    "controlName": "igTree",
    "tags": ["API"]
}
|metadata|
-->

# Drag-and-Drop Property API Reference (igTree)

## Drag-and-Drop Property Reference
### Introduction

This topic provides reference information about the properties of the `igTree`™ control related to its Drag-and-Drop feature. The properties are listed alphabetically.

### Drag-and-Drop property reference chart

The following table explains the properties of the drag-and-drop feature of `igTree` and lists the default and recommended values.

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
[allowDrop](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.allowDrop)
			</td>

            <td>
Boolean
			</td>

            <td>
Specifies whether the control will accept drops from other controls.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
false
			</td>
        </tr>

        <tr>
            <td>
[containment](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.containment)
			</td>

            <td>
Boolean/Selector/Element/String/Array
			</td>

            <td>
When true, the area inside which the helper is contained is scrollable while dragging.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
false
			</td>
        </tr>

        <tr>
            <td>
[]()[copyAfterMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.copyAfterMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Copy after”. This hint appears when the copied node is about to be dropped after the currently highlighted node (the node over which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Copy after</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[copyBeforeMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.copyBeforeMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Copy before”. This hint appears when the copied node is about to be dropped before the currently highlighted node (the node over which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Copy before</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[copyBetweenMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.copyBetweenMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Copy between”. This hint appears when the copied node is about to be dropped between the two currently highlighted adjacent nodes (the nodes between which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Copy between</strong> {0} and {1}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[copyToMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.copyToMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Copy to”. This hint appears during dragging when the copied node is about to be dropped over the currently highlighted node (the node over which the mouse pointer is hovering at the moment). In this case, the copied node
                    will become a child node of the target (highlighted) node.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Copy to</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>

			</td>

            <td>

			</td>

            <td>

			</td>

            <td>

			</td>
        </tr>

        <tr>
            <td>
[customDropValidation](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.customDropValidation)
			</td>

            <td>
Function
			</td>

            <td>
Provides an entry point for custom drop validation. The custom validation must have a Boolean return value. It makes the drop point not valid if false is returned.

                Custom drop validation function is overridden by the internal tree validation, so you can invalidate a drop-and-drop action only at the drop point.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[dragAndDrop](%%jQueryApiUrl%%/ui.igtree#options:dragAndDrop)
			</td>

            <td>
Boolean
			</td>

            <td>
Enables/disables the Drag-and-Drop feature.
			</td>

            <td>
false
			</td>
        </tr>

        <tr>
            <td>
[dragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings)
			</td>

            <td>
Object
			</td>

            <td>
Complex option for the settings managing the drag-and-drop feature.
			</td>

            <td>
none
			</td>
        </tr>

        <tr>
            <td>
[dragAndDropMode](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragAndDropMode)
			</td>

            <td>
String
			</td>

            <td>
                Specifies the Drag-and-Drop mode.

                The valid settings are:

                <ul>
                    <li>
[default](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragAndDropMode)
					</li>

                    <li>
[move](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragAndDropMode)
					</li>

                    <li>
[copy](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragAndDropMode)
					</li>
                </ul>

                Each of them sets the respective Drag-and-Drop mode.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
            </td>

            <td>
default
			</td>
        </tr>

        <tr>
            <td>
[dragOpacity](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragOpacity)
			</td>

            <td>
Float
			</td>

            <td>
Opacity/transparency level of the dragged node and the hint while dragging. The range of valid values is between 0 and 1 with 1 meaning the hint is
                    fully opaque and 0 meaning the hint is fully transparent.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
0.75
			</td>
        </tr>

        <tr>
            <td>
[dragStartDelay](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.dragStartDelay)
			</td>

            <td>
Number
			</td>

            <td>
Time to elapse (in milliseconds) after a `mousedown` event after which dragging will be allowed. The purpose of this option is to prevent unwanted drags when clicking on an element.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
200
			</td>
        </tr>

        <tr>
            <td>
[expandDelay](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.expandDelay)
			</td>

            <td>
Number
			</td>

            <td>
Time to elapse (in milliseconds) after a `mousedown` event after which the node will expand after hovering it during drag.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
1000
			</td>
        </tr>

        <tr>
            <td>
[helper](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.helper)
			</td>

            <td>
String
			</td>

            <td>
                Allows for a helper element to be used for displaying the dragging.

                The valid settings are:

                <ul>
                    <li>
[default](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.helper)
					</li>

                    <li>
    `<function>;`
					</li>
                </ul>

                <function> means you are providing a function that is returning a DOM element.</function>

                The default setting means the the helper element uses a function that is defined internally.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
            </td>

            <td>
default
			</td>
        </tr>

        <tr>
            <td>
[invalidMoveToMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.invalidMoveToMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup for invalid drop location. This hint appears when the moved node is about to be dropped over an invalid drop location.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong></strong></p></div>
			</td>
        </tr>

        <tr>
            <td>
[moveAfterMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.moveAfterMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Move after”. This hint appears when the moved node is about to be dropped after the currently highlighted node (the node over which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Move after</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[moveBeforeMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.moveBeforeMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Move before”. This hint appears when the moved node is about to be dropped before the currently highlighted node (the node over which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings property.](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings property.)
			</td>

            <td>
<div><p><span></span><strong>Move before</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[moveBetweenMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.moveBetweenMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Move between”. This hint appears when the moved node is about to be dropped between the two currently highlighted adjacent nodes (the nodes between which the mouse pointer is hovering at the moment).

                This property is set inside the [DragAndDropSettings property.](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings property.)
			</td>

            <td>
<div><p><span></span><strong>Move between</strong> {0} and {1}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[moveToMarkup](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.moveToMarkup)
			</td>

            <td>
String
			</td>

            <td>
Hint markup upon “Move to”. This hint appears during dragging when the moved node is about to be dropped over the currently highlighted node (the node over which the mouse pointer is hovering at the moment). In this case, the moved node
                    will become a child node of the target (highlighted) node.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
<div><p><span></span><strong>Move to</strong> {0}</p></div>
			</td>
        </tr>

        <tr>
            <td>
[revert](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.revert)
			</td>

            <td>
Boolean
			</td>

            <td>
If set to true, the dragged node will return to its original locations when dragging stops.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
true
			</td>
        </tr>

        <tr>
            <td>
[revertDuration](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.revertDuration)
			</td>

            <td>
Number
			</td>

            <td>
Duration of the revert animation (in milliseconds).

                Setting this property to 0 disables the animation.

                The [revertDuration](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.revertDuration) setting is ignored if the [revert](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.revert) property
                    is false.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
500
			</td>
        </tr>

        <tr>
            <td>
[zIndex](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings.zIndex)
			</td>

            <td>
Number
			</td>

            <td>
z-index for the helper while the element being dragged.

                The z-index specifies the stack order of an element. An element with a greater stack index is always in front of an element with a lower stack order.

                This property is set inside the [DragAndDropSettings](%%jQueryApiUrl%%/ui.igtree#options:dragAndDropSettings) property.
			</td>

            <td>
10
			</td>
        </tr>
    </tbody>
</table>





## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Drag-and-Drop Overview (igTree)](igTree-Drag-and-Drop-Overview.html): This topic provides an overview the Drag-and-Drop feature of the `igTree` control.

- [Drag-and-Drop Event Reference (igTree)](igTree-Drag-and-Drop-Event-API-Reference.html): This topic provides reference information about the events of the `igTree` control related to its Drag-and-Drop feature.

- [API Links (igTree)](igTree-jQuery-And-ASP-NET-MVC-Helper-API-Links.html): This topic provides links to `igTree` jQuery and ASP.NET MVC Helper API.

### Samples

The following samples provide additional information related to this topic.

- [Drag and Drop - Single Tree](%%SamplesUrl%%/tree/drag-and-drop-single-tree): This sample demonstrates how to initialize the `igTree` control with the Drag-and-Drop feature enabled.

- [Drag and Drop - Multiple Trees](%%SamplesUrl%%/tree/drag-and-drop-multiple-trees): This sample demonstrates how to drag-and-drop nodes between two `igTrees`.

- [API and Events](igtree-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to use `igTree` API.





 

 


