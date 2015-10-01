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

-   When the input element is a `<textarea>` (textMode=”multiline”) element the caret position behaviour can be inconsistent. In some browsers, Gecko-based (Firefox) and WebKit-based (Chrome, Opera, Safari) when a is focused, the insertion point is placed at the beginning of the text by default, instead of at the end as observed in Internet Explorer. To provide consistent behavior the [selectionOnFocus](%%jQueryApiUrl%%/ui.igTextEditor#options:selectionOnFocus) default value is set to `selectAll` instead of `browserDefault`


## Related Links
[igTextEditor Overview](igTextEditor-Overview.html)

 

 


