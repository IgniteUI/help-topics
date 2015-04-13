<!--
|metadata|
{
    "fileName": "igeditor-known-issues-dp",
    "controlName": "igDatePicker",
    "tags": ["Known Issues"]
}
|metadata|
-->

# igEditor Known Issues



Known Issues

-   When the editor’s base element is an **INPUT** or **TEXTAREA** element and buttons, theme or renderInContainer options are enabled, then that element is removed from its parent and wrapped in a SPAN element. This may affect layout of page and siblings of the original base element.
-   When the base element for the editor is **TD** element (or other special container other than a **SPAN** or **DIV** element), then some browsers may not render the control. For example, rendering fails in Safari when using a **TD** as the base element for the *igCurrencyEditor* control. To remedy the situation change the default value of the display option from inline-block to block.
-   Changing the theme option is not supported after initialization when the base element is an **INPUT** or **TEXTAREA** element and if button, renderInContainer and theme options are disabled.
-   When the base element is an **INPUT** element, setting the textMode option to multiline is not supported.
-   When the base element is a **TEXTAREA** element then textMode option is set to “multiline” and cannot be changed
-   When the base element is a **SELECT** element, it is replaced by **INPUT** element. The drop down button and list Items are created programmatically and the content is filled from the options of the original **SELECT** element.
-   If editor has enabled the button, theme or renderInContainer options or the base element is not an **INPUT** or **TEXTAREA** element, then width and height options support only numbers (pixels).
-   If editor is rendered as an **INPUT** or **TEXTAREA** element without a SPAN element wrapper, then width and height can be set to a string with percent and other html units.
-   Changing value after initialization for button, textMode and renderInContainer options is not supported.
-   Options related to filtering entry by list, such as listMatchIgnoreCase, listMatchOnly, listMatchContains and listAutoComplete, have effect only for *igEditor* with type set to text or *igTextEditor*
-   To disable all triggers for drop-down the dropDownTriggers option should be set to an empty string or null.
-   If user enters text longer than width of the edit field:
    -   Caret in some browsers may go out of view. (The editor control features logic to minimize this occurrence, but it’s not 100% supported)
    -   Some browsers may fail to instantly adjust the caret’s position while characters are entered. The caret may also briefly (for a split second) jump to the end of the text and back. Although the actual entry-point for the next key and the real location of caret should be correct.
    -   In some browsers, particularly in Firefox, text may jump/shake horizontally on every keypress
-   When base element is **TEXTAREA** (textMode=”multiline”) and multiple lines are entered, that make the field scroll:
    -   Vertical scroll may fail and the caret may go out of view after multiple keyboard entries, when **Shift + Enter** (New Line) is entered. This may happen if caret was located in the middle of text.
    -   In some browsers, particularly in Firefox, text may jump vertically and horizontally on every keypress.
-   If *igEditor* has type set to ”datepicker” or *igDatePicker* then it is dependent on jquery-datepicker and requires reference to `jquery.ui.datepicker.js` or to combined library such as `jqueryui/1.8.7/jquery-ui.js`.
-   The *igEditor* with type set to ”datepicker” or *igDatePicker* does not support textMode option set to ”multiline”, or **TEXTAREA** as a base element
-   Numeric editors do not support group, or thousand separators and symbols, in edit mode
-   Numeric and Date editors depend on `$.ig._regional`, therefore, that object should be available in a reference to `ig.util.js` or to a combined `ig-js` file


## Related Links

- [igDatePicker Overview](igDatePicker-Overview.html)

 

 


