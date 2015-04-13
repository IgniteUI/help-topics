<!--
|metadata|
{
    "fileName": "igpopover-property-reference",
    "controlName": "igPopover",
    "tags": ["API","Events","How Do I"]
}
|metadata|
-->

# Property Reference (igPopover)



## igPopover Property Reference
### Introduction

This topic explains the properties of the `igPopover`™ control and lists their default values.

### igPopover property reference chart

The following table explains the properties of the `igPopover` control and lists the default values. The properties are listed alphabetically.

<table class="table table-bordered">
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
[animationDuration](%%jQueryApiUrl%%/ui.igpopover#options:animationDuration)
            </td>

            <td>
number
            </td>

            <td>
Duration of the animated showing/hiding of the popover.
            </td>

            <td>
150
            </td>
        </tr>

        <tr>
            <td>
[closeOnBlur](%%jQueryApiUrl%%/ui.igpopover#options:closeOnBlur)
            </td>

            <td>
bool
            </td>

            <td>
Controls whether the popover will close on blur or not
            </td>

            <td>
true
            </td>
        </tr>

        <tr>
            <td>
[containment](%%jQueryApiUrl%%/ui.igpopover#options:containment)
            </td>

            <td>
object
            </td>

            <td>
The containment setting for the popover.

                Containment works by specifying an object (like DIV container, for example) whose boundaries will serve to restrict the area within which the popover can be shown.
            </td>

            <td>
null
            </td>
        </tr>

        <tr>
            <td>
[contentTemplate](%%jQueryApiUrl%%/ui.igpopover#options:contentTemplate)
            </td>

            <td>
string|function
            </td>

            <td>
The content for the popover container. If left null the content will be retrieved from the target.
            </td>

            <td>
null
            </td>
        </tr>

        <tr>
            <td>
[direction](%%jQueryApiUrl%%/ui.igpopover#options:direction)
            </td>

            <td>
enumerable
            </td>

            <td>
                The position of the popover relative to the target element. The direction is the side of the target on which the popover container will be shown. The valid settings are:

                <ul>
                    <li>
"auto”
                    </li>

                    <li>
“left”
                    </li>

                    <li>
”right”
                    </li>

                    <li>
“top”
                    </li>

                    <li>
“bottom"
                    </li>
                </ul>
            </td>

            <td>
“auto”
            </td>
        </tr>

        <tr>
            <td>
[headerTemplate.closeButton](%%jQueryApiUrl%%/ui.igpopover#options:headerTemplate.closeButton)
            </td>

            <td>
bool
            </td>

            <td>
Controls whether the popover renders a functional Close button.
            </td>

            <td>
false
            </td>
        </tr>

        <tr>
            <td>
[headerTemplate.title](%%jQueryApiUrl%%/ui.igpopover#options:headerTemplate.title)
            </td>

            <td>
string
            </td>

            <td>
The content of the popover header.
            </td>

            <td>
null
            </td>
        </tr>

        <tr>
            <td>
[height](%%jQueryApiUrl%%/ui.igpopover#options:height)
            </td>

            <td>
number
            </td>

            <td>
Height for the popover. Leave null for auto
            </td>

            <td>
null
            </td>
        </tr>

        <tr>
            <td>
[maxHeight](%%jQueryApiUrl%%/ui.igpopover#options:maxHeight)
            </td>

            <td>
string|number
            </td>

            <td>
Maximum height of the popover if no [height](%%jQueryApiUrl%%/ui.igpopover#options:height) has been specified.
            </td>

            <td>
200
            </td>
        </tr>

        <tr>
            <td>
[maxWidth](%%jQueryApiUrl%%/ui.igpopover#options:maxWidth)
            </td>

            <td>
string|number
            </td>

            <td>
Maximum width of the popover if no [width](%%jQueryApiUrl%%/ui.igpopover#options:width) has been specified.
            </td>

            <td>
200
            </td>
        </tr>

        <tr>
            <td>
[position](%%jQueryApiUrl%%/ui.igpopover#options:position)
            </td>

            <td>
enumerable
            </td>

            <td>
                The position of the popover relative to the target element in case the popover is larger than the target. If the popover is smaller, it will always be shown in the middle of the visible area on the target element side set as `direction`.

                The valid settings are:

                <ul>
                    <li>
"auto”
                    </li>
                </ul>

                The popover position will be determined automatically.

                <ul>
                    <li>
“balanced”
                    </li>
                </ul>

                The popover will be positioned at the middle of the target element side set as `direction`.

                <ul>
                    <li>
“start”
                    </li>
                </ul>

                The popover will be positioned at the beginning of the target element side set as `direction`.
                    
The beginning of the side is considered its left-hand section at “top”/“bottom” directions and its upper section at “left”/“right” directions.

                <ul>
                    <li>
“end"
                    </li>
                </ul>

                The popover will be positioned at the end (bottom or right) of the target element side set as `direction`.

                The end of the side is considered its right-hand section at “top”/“bottom” directions and its lower section at “left”/“right” directions.
            </td>

            <td>
“auto”
            </td>
        </tr>

        <tr>
            <td>
[selectors](%%jQueryApiUrl%%/ui.igpopover#options:selectors)
            </td>

            <td>
string
            </td>

            <td>
Selectors indicating which items should show popovers. Any jQuery selector is a valid setting and the pre-defined setting is [title] which means that the title attribute of the item will be shown.

                Customize if you need to display something different than the title attribute or if you need a different selector for event delegation.

                When changing this option, you will likely need to also change also the [`contentTemplate`](%%jQueryApiUrl%%/ui.igpopover#options:contentTemplate) option.
            </td>

            <td>
null
            </td>
        </tr>

        <tr>
            <td>
[showOn](%%jQueryApiUrl%%/ui.igpopover#options:showOn)
            </td>

            <td>
enumerable
            </td>

            <td>
                The event on which the popover will be shown. The valid settings are:

                <ul>
                    <li>
"mouseenter" (fired on mouseover)
                    </li>

                    <li>
"click"
                    </li>

                    <li>
"focus" (The target elements gets the focus.)
                    </li>
                </ul>

                Note:

                <blockquote>
                    The [`showOn`](%%jQueryApiUrl%%/ui.igpopover#options:showOn) setting has no effect in touch environment. On touch devices,
                    the popover appears on tap and this activation is not configurable.
                </blockquote>
            </td>

            <td>
"mouseenter"
            </td>
        </tr>

        <tr>
            <td>
[width](%%jQueryApiUrl%%/ui.igpopover#options:width)
            </td>

            <td>
number
            </td>

            <td>
Width of the popover. Leave null for auto.
            </td>

            <td>
null
            </td>
        </tr>
    </tbody>
</table>



 

 


