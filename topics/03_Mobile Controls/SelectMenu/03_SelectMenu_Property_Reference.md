<!--
|metadata|
{
    "fileName": "selectmenu-property-reference",
    "controlName": "SelectMenu",
    "tags": ["API","Editing","MVC","Selection"]
}
|metadata|
-->

# Select Menu Property Reference

## SelectMenu Property Reference
### Introduction

This topic provides reference information about the properties of the `SelectMenu` helper.

### SelectMenu property reference chart

The following table explains the properties of the `SelectMenu` ASP.NET MVC helper and lists their default values.

>**Note:** Properties with a default null value render the widget on the client with the jQuery mobile framework’s default settings. For this reason, any default states listed in this table reflect the time of this writing and subject to change without notice. To verify the current default settings, see the jQuery Mobile documentation for the [selectmenu](http://api.jquerymobile.com/selectmenu/).

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
[CloseText](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~CloseText.html)
			</td>

            <td>
string
			</td>

            <td>
The text of the close button. it appears as a tooltip
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Corners](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Corners.html)
			</td>

            <td>
bool?
			</td>

            <td>
When set to true, the menu is rendered with rounded corners.
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[HidePlaceholderMenuItems](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~HidePlaceholderMenuItems.html)
			</td>

            <td>
bool?
			</td>

            <td>
When set to true, hides place holder menu items when custom menu is used
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Icon](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Icon.html)
			</td>

            <td>
string
			</td>

            <td>
The icon used for the drop down indicator. Here is a list of the possible values: [Icons](http://api.jquerymobile.com/icons/)
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[IconPosition](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~IconPosition.html)
			</td>

            <td>
string
			</td>

            <td>
The position of the icon, if there is any. The four possible values are: “Left”, “Right”, “Top”, and “Bottom”
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[IconShadow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~IconShadow.html)
			</td>

            <td>
bool?
			</td>

            <td>
This property sets whether the selectmenu displays icon shadows
			</td>

            <td>
Null
			</td>
        </tr>

        <tr>
            <td>
[Shadow](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Shadow.html)
			</td>

            <td>
bool?
			</td>

            <td>
This property sets whether the selectmenu displays shadows
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Inline](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Inline.html)
			</td>

            <td>
bool?
			</td>

            <td>
The selectmenu renders inline
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Multiple](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Multiple.html)
			</td>

            <td>
bool
			</td>

            <td>
This option enables multiple choice selection for the selectmenu
			</td>

            <td>
false
			</td>
        </tr>

        <tr>
            <td>
[NativeMenu](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~NativeMenu.html)
			</td>

            <td>
bool?
			</td>

            <td>
Use the native menu or a custom one
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Disabled](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Disabled.html)
			</td>

            <td>
bool?
			</td>

            <td>
When true, the selectmenu is disabled (read-only mode).

                By default, the selectmenu is enabled and editable.
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[Label](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Label.html)
			</td>

            <td>
string
			</td>

            <td>
Label text for the selectmenu. In the rendered HTML, the label is listed before the form element.

                By default, the selectmenu displays no label.
			</td>

            <td>
null
			</td>
        </tr>

        <tr>
            <td>
[LabelAlignment](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~LabelAlignment.html)
			</td>

            <td>
[Infragistics.Web.Mvc.Mobile.Alignment](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.Alignment.html)
			</td>

            <td>
                Alignment of the label (if the label is shown).

                The valid values are:

                <ul>
                    <li>
Left
					</li>

                    <li>
Right
					</li>

                    <li>
Bottom
					</li>

                    <li>
Top
					</li>
                </ul>
            </td>

            <td>
Top
			</td>
        </tr>

        <tr>
            <td>
[HideLabel](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~HideLabel.html)
			</td>

            <td>
bool
			</td>

            <td>
When true, the label is hidden.
			</td>

            <td>
false
			</td>
        </tr>

        <tr>
            <td>
[Mini](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuWrapper~Mini.html)
			</td>

            <td>
bool?
			</td>

            <td>
Renders the selectmenu with a mini layout.
			</td>

            <td>
null
			</td>
        </tr>
    </tbody>
</table>





 

 


