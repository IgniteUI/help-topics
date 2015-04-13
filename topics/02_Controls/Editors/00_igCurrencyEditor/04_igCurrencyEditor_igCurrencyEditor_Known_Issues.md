<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igcurrencyeditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Known Issues"]
}
|metadata|
-->

# igCurrencyEditor Known Issues


**Known Issues**

-   When the base element for an editor is an INPUT or TEXTAREA element and buttons, theme or [`renderInContainer`](%%jQueryApiUrl%%/ui.igCurrencyEditor#options:renderInContainer) options are enabled, then that element is removed from its parent and is wrapped in a SPAN element. This may affect layout of page and siblings of original base element.
-   When the base element for the editor is TD element (or other special container other than a SPAN or DIV element), then some browsers may not render the control. For example, rendering fails in Safari when using a TD as the base element for the [`igCurrencyEditor`](%%jQueryApiUrl%%/ui.igCurrencyEditor#!overview) control. To remedy the situation change the default value of the display option from **inline-block** to **block**.
-   Changing the theme option is not supported after initialization when the base element is an INPUT or TEXTAREA element and if button, renderInContainer and theme options are disabled.
-   If the editor control is rendered as an INPUT or TEXTAREA element without a SPAN element wrapper, then the width and height can be set to a string with percent and other HTML units.

For detailed list with known issues and breaking changes of all editors please visit: [Editors Common Known Issues](igCurrencyEditor-igEditor-Known-Issues.html).

## Related Links

[igCurrencyEditor Overview](igCurrencyEditor-igCurrencyEditor-Overview.html)

 

 


