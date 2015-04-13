<!--
|metadata|
{
    "fileName": "igdateeditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Editing","Known Issues"]
}
|metadata|
-->

# igDateEditor Known Issues

**Known Issues**

-   When the editor’s base element is an INPUT or TEXTAREA element and buttons, theme or [`renderInContainer`](%%jQueryApiUrl%%/ui.igDateEditor#options:renderInContainer) options are enabled, then that element is removed from its parent and wrapped in a SPAN element. This may affect layout of page and siblings of the original base element.

-   Changing value after initialization for [`button`](%%jQueryApiUrl%%/ui.igDateEditor#options:button), [`textMode`](%%jQueryApiUrl%%/ui.igDateEditor#options:textMode) and `renderInContainer` options is not supported.

-   Changing the theme option is not supported after initialization when the base element is an INPUT or TEXTAREA element and if button, `renderInContainer` and theme options are disabled.

For detailed list with known issues and breaking changes of all editors please visit: [Editors Common Known Issues](igCurrencyEditor-igEditor-Known-Issues.html).

## Related Links

[igDateEditor Overview](igDateEditor-Overview.html)

 

 


