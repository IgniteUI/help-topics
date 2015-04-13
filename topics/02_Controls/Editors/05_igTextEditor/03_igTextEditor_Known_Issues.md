<!--
|metadata|
{
    "fileName": "igtexteditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Editing","Known Issues"]
}
|metadata|
-->

# igTextEditor Known Issues



##Known Issues

-   When the base element for an editor is an INPUT or TEXTAREA element and buttons, theme or [renderInContainer](%%jQueryApiUrl%%/ui.igTextEditor#options:renderInContainer) options are enabled, then that element is removed from its parent and is wrapped in a SPAN element. This may affect layout of page and siblings of original base element.
-   When the base element for the editor is TD element (or other special container other than a SPAN or DIV element), then some browsers may not render the control. . For example fails in Safari when using a TD as the base element for the `igCurrencyEditor` control. To remedy the situation change the default value of the [display](%%jQueryApiUrl%%/ui.igTextEditor#options:display) option from inline-block to block.
-   Changing the theme option is not supported after initialization when the base element is an INPUT or TEXTAREA element and if [button](%%jQueryApiUrl%%/ui.igTextEditor#options:button), `renderInContainer` and [theme](%%jQueryApiUrl%%/ui.igTextEditor#options:theme) options are disabled.
-   When the base element is an INPUT element, setting the [textMode](%%jQueryApiUrl%%/ui.igTextEditor#options:textMode) option to multiline is not supported.
-   When the base element is a TEXTAREA element, then `textMode` option is set to multiline and it cannot be disabled
-   If editor has button, theme or `renderInContainer` options enabled or base element is not an INPUT element or TEXTAREA element, then the width and height options support only numbers (pixels).
-   If the editor is rendered as an INPUT or TEXTAREA element without a SPAN element wrapper, then width and height can be set to a string with percent and other html units.
-   Changing value after initialization for button, `textMode` and `renderInContainer` options is not supported.
-   Options related to filtering entry by list, such as [listMatchIgnoreCase](%%jQueryApiUrl%%/ui.igTextEditor#options), [listMatchOnly](%%jQueryApiUrl%%/ui.igTextEditor#options), [listMatchContains](%%jQueryApiUrl%%/ui.igTextEditor#options) and [listAutoComplete](%%jQueryApiUrl%%/ui.igTextEditor#options), have effect only for `igEditor` with [type](%%jQueryApiUrl%%/ui.igTextEditor#options) set to [text](%%jQueryApiUrl%%/ui.igTextEditor#options) or `igTextEditor`.
-   When the base element is a TEXTAREA (textMode=”multiline”) element and multiple lines are entered that make field scroll:
    -   Vertical scroll may fail and caret may go out of view after multiple keyboard entries without Enter+Shift. This is most likely to happen if caret was located in the middle of text.
    -   In some browsers (particularly Firefox), text may jump vertically and horizontally on every keypress.

For detailed list with known issues and breaking changes of all editors please visit: [Editors Common Known Issues](igCurrencyEditor-igEditor-Known-Issues.html).

## Related Links
[igTextEditor Overview](igTextEditor-Overview.html)

 

 


