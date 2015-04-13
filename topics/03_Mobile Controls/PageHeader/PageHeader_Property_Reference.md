<!--
|metadata|
{
    "fileName": "pageheader-property-reference",
    "controlName": "PageHeader",
    "tags": ["API","Layouts","MVC"]
}
|metadata|
-->

# PageHeader Property Reference



## PageHeader MVC Wrapper (Property) Reference
### Introduction

This topic provides reference information about the properties of the PageHeader MVC Wrapper.

### PageHeader (property) reference chart
The following table explains the properties of the PageHeader MVC wrapper and lists the default and recommended values.

> **Note:** For more information please visit: [jQuery Mobile](http://jquerymobile.com/demos/1.1.1/docs/toolbars/docs-headers.html) .

Property | Type | Description | Values(**Default Value**)
---|---|---|---
[ID](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageHeaderWrapper~ID.html) | string | Gets/Sets the PageHeader ID | “**PageContentID**”
[Theme](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageHeaderWrapper~Theme.html) | string | Gets/Sets the PageHeader theme. | **“a”** “b” “c” “d” “e”
[FixedOptions](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageHeaderWrapper~FixedOptions.html) | Action<[FixedToolBarOptionsWrapper](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper.html)> | Set of methods that allow you to position and configure the header. For more information please review the table below, that describes the methods of the [Fixed Options](#fixed-options) class. | option => { option .DisablePageZoom(true) .Fixed(true); }
[HtmlAttributes](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.PageHeaderWrapper~HtmlAttributes.html) | IDictionary<string,object> | Set additional HTML attributes. | new Dictionary<string, object>() { {"disabled", "disabled"} }

## <a id="fixed-options">Fixed Options MVC Wrapper (Property) Reference
### Introduction

This topic provides reference information about the properties of the *Fixed Options* *MVC Wrapper*.

### PageHeader (property) reference chart

The following table explains the methods of the Fixed Options MVC wrapper and lists the default and recommended values.

> **Note:** Please keep in mind that properties with default null values render the widget with the jQuery mobile default settings. For more information please visit: [Fixed Positioning](http://jquerymobile.com/test/docs/toolbars/bars-fixed-options.html)

<table cellspacing="0" cellpadding="0" class="table table-bordered">
    <tbody>
        <tr>
            <th>
                <p>Property</p>
            </th>

            <th>
                <p>Type</p>
            </th>

            <th>
                <p>Description</p>
            </th>

            <th>
                <p>Values(<span class="ig-bold">Default Value</span>)</p>
            </th>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~Fixed.html">Fixed</a></span></p>
            </td>

            <td>
                <p>bool</p>
            </td>

            <td>
                <p>Enables/Disable s the fixed positioning of the container.</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>“a”</p>

                <p>“b”</p>

                <p>“c”</p>

                <p>“d”</p>

                <p>“e”</p>
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~DisablePageZoom.html">DisablePageZoom</a></span></p>
            </td>

            <td>
                <p>bool?</p>
            </td>

            <td>
                <p>Enables/disables the ability to zoom in and out of a page.</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>true</p>

                <p>false</p>
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~FullScreen.html">FullScreen</a></span></p>
            </td>

            <td>
                <p>bool?</p>
            </td>

            <td>
                <p>Enables/Disables if the fixed toolbar will be visible or not in full screen.</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>true</p>false
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~TapToggle.html">TapToggle</a></span></p>
            </td>

            <td>
                <p>bool?</p>
            </td>

            <td>
                <p>Enables/disable sthe user's ability to toggle the toolbar visibility with a tap on the screen or mouse click.</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>true</p>false
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~TapToggleBlacklist.html">TapToggleBlackList</a></span></p>
            </td>

            <td>
                <p>string</p>
            </td>

            <td>
                <p>A list of jQuery selectors that when tapped, will not cause the toolbars to be toggled.</p>
            </td>

            <td><b>"a, button,</b> <b>input, select, textarea, .ui-header-fixed, .ui-footer-fixed"</b></td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~HideDuringFocus.html">HideDuringFocus</a></span></p>
            </td>

            <td>
                <p>string</p>
            </td>

            <td>
                <p>A list of jQuery selectors that should cause the toolbars to hide while focused, except if they are in a fixed toolbar.</p>
            </td>

            <td><b>"input, select, textarea"</b></td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~Transition.html">Transition</a></span></p>
            </td>

            <td>
                <p>string</p>
            </td>

            <td>
                <p>Gets/sets the <a href="http://jquerymobile.com/demos/1.0a4.1/docs/pages/docs-transitions.html">transition</a> to use when showing and hiding the fixed toolbar.</p>
            </td>

            <td>
                <p><span class="ig-bold">“slide”</span></p>

                <p><span>"slideup"</span></p>

                <p><span>"slidedown"</span></p>

                <p><span>"pop"</span></p>

                <p><span>"fade"</span></p>

                <p><span>"flip"</span></p>
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~UpdatePagePadding.html">UpdatePagePadding</a></span></p>
            </td>

            <td>
                <p>bool?</p>
            </td>

            <td>
                <p>This determines whether the toolbar is visible or not when its parent page is shown.&nbsp;</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>true</p>false
            </td>
        </tr>

        <tr>
            <td>
                <p class="ig-api-link"><span class="ig-api-link"><a href="Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.FixedToolBarOptionsWrapper~VisibleOnPageShow.html">VisibleOnPageShow</a></span></p>
            </td>

            <td>
                <p>bool?</p>
            </td>

            <td>
                <p>Determines if the toolbar is visible when the parent is visible.</p>
            </td>

            <td>
                <p><b>null</b></p>

                <p>true</p>false
            </td>
        </tr>
    </tbody>
</table>