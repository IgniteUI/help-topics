<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igeditor-known-issues",
    "controlName": "igEditors",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Editors Common Known Issues



## Known Issues

-   When the editor’s base element is an INPUT or TEXTAREA element and buttons, theme or renderInContainer options are enabled, then that element is removed from its parent and wrapped in a SPAN element. This may affect layout of page and siblings of the original base element.
-   When the base element for the editor is TD element (or other special container other than a SPAN or DIV element), then some browsers may not render the control. For example, rendering fails in Safari when using a TD as the base element for the igCurrencyEditor control. To remedy the situation change the default value of the display option from inline-block to block.
-   Changing the theme option is not supported after initialization when the base element is an INPUT or TEXTAREA element and if button, renderInContainer and theme options are disabled.
-   When the base element is an INPUT element, setting the textMode option to multiline is not supported.
-   When the base element is a TEXTAREA element then textMode option is set to “multiline” and cannot be changed
-   When the base element is a SELECT element, it is replaced by INPUT element. The drop down button and list Items are created programmatically and the content is filled from the options of the original SELECT element.
-   If editor has enabled the button, theme or renderInContainer options or the base element is not an INPUT or TEXTAREA element, then width and height options support only numbers (pixels).
-   If editor is rendered as an INPUT or TEXTAREA element without a SPAN element wrapper, then width and height can be set to a string with percent and other html units.
-   Changing value after initialization for button, textMode and renderInContainer options is not supported.
-   Options related to filtering entry by list, such as listMatchIgnoreCase, listMatchOnly, listMatchContains and listAutoComplete, have effect only for igEditor with type set to text or igTextEditor
-   To disable all triggers for drop-down the dropDownTriggers option should be set to an empty string or null.
-   If user enters text longer than width of the edit field:
    -   Caret in some browsers may go out of view. (The editor control features logic to minimize this occurrence, but it’s not 100% supported)
    -   Some browsers may fail to instantly adjust the caret’s position while characters are entered. The caret may also briefly (for a split second) jump to the end of the text and back. Although the actual entry-point for the next key and the real location of caret should be correct.
    -   In some browsers, particularly in Firefox, text may jump/shake horizontally on every keypress
-   When base element is TEXTAREA (textMode=”multiline”) and multiple lines are entered, that make the field scroll:
    -   Vertical scroll may fail and the caret may go out of view after multiple keyboard entries, when Shift + Enter (New Line) is entered. This may happen if caret was located in the middle of text.
    -   In some browsers, particularly in Firefox, text may jump vertically and horizontally on every keypress.
-   If igEditor has type set to ”datepicker” or igDatePicker then it is dependent on jquery-datepicker and requires reference to jquery.ui.datepicker.js or to combined library such as jqueryui/1.8.7/jquery-ui.js.
-   The igEditor with type set to ”datepicker” or igDatePicker does not support textMode option set to ”multiline”, or TEXTAREA as a base element
-   Numeric editors do not support group, or thousand separators and symbols, in edit mode
-   Numeric and Date editors depend on $.ig._regional, therefore, that object should be available in a reference to ig.util.js or to a combined ig-js file
-   Changing locale dynamically for an editor not possible with Infragistics Loader. Regional settings of editors cannot be changed programmatically when using the Infragistics® Loader.

    > **Workaround**
	> 
    A post-back is necessary in order to change the regional option. Another workaround is to destroy the editor control, call the Loader to load with a different locale, and then re-create the control itself.

-   Change in styling

    The layout of HTML elements has modified and rounded corners are rendered around the whole editor, not only around buttons.

    > **Workaround**
	>
    Applications can disable rounded corners by providing custom CSS or overriding default igEditor CSS classes.

-   Spin buttons issue - Spin buttons are rendered horizontally.
-   Editors rendering failure

    Rendering may fail if the base element is <td>.

    > **Workaround**
	> 
    Applications should not restrict the width of a parent element if the base element is <td> or it should ensure that the actual width of the <td> element is no less than the width of the editor control. The parent element is not only the parent table but the whole upchain of parents in the DOM hierarchy.

-   igDateEditor and igDatePicker Knockout extensions have limitation in Immediate update mode. igDateEditor and igDatePicker Knockout extensions have a limitation when the updateMode property is set to immediate. The Immediate mode is not supported when date format is different than en-US. When non en-US format is used, Immediate mode, works correct only if the date is selected from the date picker, or a valid date is pasted inside the editor. If the value is typed, character by character, the wrong date is populated. The limitation is due to limitation of the JavaScript Date object constructor.

    > **Workaround**
	>
    Either use the default update mode – On Change – or force the user to select the date from the igDatePicker component and not to enter it manually.

 

 


