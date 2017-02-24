<!--
|metadata|
{
    "fileName": "ightmleditor-api-reference",
    "controlName": "igHtmlEditor",
    "tags": ["API"]
}
|metadata|
-->

# igHtmlEditor API Reference



##Topic Overview


### Purpose

This topic explains the JavaScript API of the `igHtmlEditor`™.

### In This Topic

This topic contains the following sections:

-   [igHtmlEditor Options](#options)
-   [igHtmlEditor Methods](#methods)
-   [igHtmlEditor Events](#events)
-   [Related Content](#related-content)



##<a id="options"></a>igHtmlEditor Options


### igHtmlEditor options summary

The following table explains the options of the `igHtmlEditor` control and lists the default and recommended values.

Option| Type| Description|Default Value 
---|---|---|---
showFormattingToolbar| boolean|Shows/hides the "Formatting" toolbar.|true
showTextToolbar|boolean|Shows/hides the "Text" toolbar.|true
showInsertObjectToolbar|boolean|Shows/hides the "Insert Object" toolbar.|true
showCopyPasteToolbar|boolean|Shows/hides the "Copy Paste" toolbar.|true
width|numeric|Set or get the widget width.|705
height|numeric|Set or get the widget height.|350
toolbarSettings|array|The HTML editor toolbars list.|-
customToolbars|array|The HTML editor custom toolbars list.|-
inputName|string|This is the name of the input element which is holding the editor value.|“”

##<a id="methods"></a>igHtmlEditor Methods


### igHtmlEditor methods summary

The following table explains the methods of the `igHtmlEditor` control.

Property|Return Type|Description
---|---|---
getContent|string|Gets the content of the HTML editor.
setContent|-|Sets the content of the HTML editor.
destroy|-|Destroys the widget.
executeAction|-|Executes HTML editor commands.
isDirty|boolean|Returns true/false if the editor contents were modified or not.

##<a id="events"></a>igHtmlEditor Events


### igHtmlEditor events summary

The following table explains the events of the `igHtmlEditor` control.

Property|Description|Cancellable
---|---|---
rendered|Event fired after the whole widget has been rendered.|false
rendering|Event fired before the whole widget has been rendered.|true
actionExecuting|Event fired before some of the editor toolbar item is clicked.|true
actionExecuted|Event fired after some of the editor toolbar item is clicked.|false
toolbarCollapsing|Event fired before some of the toolbars is collapsed.|true
toolbarCollapsed|Event fired after some of the toolbars is collapsed.|false
toolbarExpanding|Event fired before some of the toolbars is expanded.|true
toolbarExpanded|Event fired after some of the toolbars is collapsed.|false
cut|Event is fired on keyboard cut action.|false
copy|Event is fired on keyboard copy action.|false
paste|Event is fired on keyboard paste action.|false
undo|Event is fired on keyboard undo action.|false
redo|Event is fired on keyboard redo action.|false

##<a id="related-content"></a>Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Adding igHtmlEditor](igHtmlEditor-Adding-igHtmlEditor.html):  This topic explains how to add `igHtmlEditor` to a web page.

-	[Working with the igHtmlEditor](igHtmlEditor-Working-with-igHtmlEditor.html):  This is landing page for all topics on configuration capabilities of `igHtmlEditor`.



### Samples

The following samples provide additional information related to this topic.

-	[Edit Content](%%SamplesUrl%%/html-editor/edit-content):  In this forum post example, an initial piece of content provided in the HTML Editor.

-	[Custom Toolbars and Buttons](%%SamplesUrl%%/html-editor/custom-toolbars-and-buttons): This sample demonstrates how the HtmlEditor control works as an email client. This implementation features a custom toolbar where you can add a signature to the message.

-	[API and Events](ightmleditor-modifying-contents-programmatically#api-and-events-demo): This sample demonstrates how to handle events in the Html Editor control and API usage.