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


##Known Limitations


-   When the input element is a `<textarea>` (textMode=”multiline”) element the caret position behaviour can be inconsistent. In some browsers, Gecko-based (Firefox) and WebKit-based (Chrome, Opera, Safari) when a is focused, the insertion point is placed at the beginning of the text by default, instead of at the end as observed in Internet Explorer. To provide consistent behavior the [selectionOnFocus](%%jQueryApiUrl%%/ui.igTextEditor#options:selectionOnFocus) default value is set to `selectAll` instead of `browserDefault`
-   Multi-line text mode not supported in an `<input>` base element. If the base element is `<input>`, setting the [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode) option to *multiline* is not supported.
-   If the base element is `<textarea>`, the [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode) option is set to *multiline* and cannot be changed.
-   Changing value after initialization for [`buttonType`](%%jQueryApiUrl%%/ui.igtexteditor#options:buttonType), [`textMode`](%%jQueryApiUrl%%/ui.igtexteditor#options:textMode), [`dropDownOnReadOnly`](%%jQueryApiUrl%%/ui.igtexteditor#options:dropDownOnReadOnly), [`visibleItemsCount`](%%jQueryApiUrl%%/ui.igtexteditor#options:visibleItemsCount), and [`dropDownAttachedToBody`](%%jQueryApiUrl%%/ui.igtexteditor#options:dropDownAttachedToBody) options is not supported


## Related Links
- [igTextEditor Overview](igTextEditor-Overview.html)

 

 


