<!--
|metadata|
{
    "fileName": "ightmleditor-modifying-contents-programmatically",
    "controlName": "igHtmlEditor",
    "tags": ["API","How Do I"]
}
|metadata|
-->

# Modifying Contents Programmatically



##Topic Overview

### Purpose

This topic explains how to modify `igHtmlEditor`™ contents by using the API.

### Required Background

-   CSS Media Types
-   Rich-Text Editing in the browser i.e. `execCommand` method

**Topics**

-	[igHtmlEditor Overview](igHtmlEditor-Overview.html): This topic explains the features of `igHtmlEditor`.

-	[Adding igHtmlEditor](igHtmlEditor-Adding-igHtmlEditor.html): This topic explains how to add `igHtmlEditor` to a web page.


**External Resources**

-   CSS Media Types
-   Rich-Text Editing in Mozilla
-   execCommand Method in Internet Explorer
-   execCommand compatibility article



### In This Topic

This topic contains the following sections:

-   [igHtmlEditor Methods](#methods)
-   [Get the contents of the igHtmlEditor](#get-the-contents)
-   [Set the contents of the igHtmlEditor](#set-the-content)
-   [Apply formatting to the igHtmlEditor’s contents](#apply-formatting)
-   [Printing the igHtmlEditor’s contents](#printing-the-content)
-   [API and Events Demo](#api-and-events-demo)
-   [Related Content](#related-content)



##<a id="methods"></a>igHtmlEditor Methods


### igHtmlEditor methods summary

The following table explains the methods of the `igHtmlEditor` control.

Property|Return Type|Description
---|---|---
getContent|string|Gets the content of the html editor.
setContent|-|Sets the content of the html editor.
executeAction|-|Executes igHtmlEditor commands.
isDirty|boolean|Returns true/false as to whether the editor contents are modified.

##<a id="get-the-contents"></a>Get the contents of the igHtmlEditor


### Introduction

You can get the contents of the `igHtmlEditor` by using the `getContent` method. Contents can be accessed as text or as HTML.

### Steps

The following steps demonstrate how to get the contents of the `igHtmlEditor`.


1. Get the contents as text

	In order to get the contents of the `igHtmlEditor` as text, use the following code:

	**In JavaScript:**

	```js
	var contentAsText = $("#htmlEditor").igHtmlEditor("getContent", "text");
	```

2. Get the contents as HTML

	In order to get the contents of the `igHtmlEditor` as HTML, use the following code:

	**In JavaScript:**

	```js
	var contentAsHtml = $("#htmlEditor").igHtmlEditor("getContent", "html");
	```


##<a id="set-the-content"></a>Set the contents of the igHtmlEditor


### Introduction

On initialization, if there is any HTML in the `igHtmlEditor` container, it is displayed as the initial content of the editor.

At runtime, you can set the contents of the `igHtmlEditor` by using the `setContent` method. Contents can be either a string of text or a string of HTML.

### Steps

The following steps demonstrate how to apply different styling to the `igHtmlEditor` content selection.

1. Set the contents as text

	In order to set the contents of the `igHtmlEditor` as text, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("setContent", "This is text content.", "text");
    ```

2. Set the contents as HTML

	In order to set the contents of the `igHtmlEditor` as HTML, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("setContent", "<p>This is html content.</p>", "html");
    ```


##<a id="apply-formatting"></a>Apply formatting to the igHtmlEditor’s contents


### Introduction

This procedure explains how you can format selected text in the `igHtmlEditor`.

In order to apply formatting to the selected text, use the `executeAction` method. This method is based on the `execCommand` method which is available in the browser when you set the `designMode` attribute on the document element to true. This is essentially what the `igHtmlEditor` is doing internally.

### Steps

The following steps demonstrate how to apply formatting to the selected text in the editor.

1. Set selected content as Bold

	In order to apply Bold styling to the selected content in the `igHtmlEditor`, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "bold");
    ```

2. Set selected content as Italic

	In order to apply Italic styling to the selected content in the `igHtmlEditor`, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "italic");
    ```

3. Set selected content as Underline

	In order to apply Underline styling to the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "underline");
    ```

4. Set selected content as Left aligned

	In order to apply Left alignment to the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "justifyLeft");
    ```

5. Set selected content as Centered

	In order to apply Centered Alignment to the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "justifyCenter");
    ```

6. Set selected content as Right aligned

	In order to apply Right Alignment to the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "justifyRight");
    ```

7. Set the selected text color

	In order to apply a text color to the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "foreColor", "red");
    ```

8. Set the selected text font name

	In order to set the font of the selected content in the igHtmlEditor, use the following code:

	**In JavaScript:**

    ```js
    $("#htmlEditor").igHtmlEditor("executeAction", "fontName", "Arial");
    ```


##<a id="printing-the-content"></a>Printing the igHtmlEditor’s contents


### Introduction

This procedure explains how to print the `igHtmlEditor` contents. Because the `igHtmlEditor` is implemented as an IFRAME, there are some considerations which must be taken into account in order to print the content of the IFRAME. The general concept is to call the print function on the IFRAME but there are some specifics for Internet Explorer and Opera.  For Internet Explorer you have to apply focus to the IFRAME first and then call print on the IFRAME.  While the Opera browser cannot print IFRAMEs out of the box, there are workarounds - one of which is described here.

### Steps

The following steps demonstrate how to print the `igHtmlEditor` contents.

1. Focus the IFRAME DOM element (required for Internet Explorer only)

	The igHtmlEditor IFRAME has an ID which is constructed by appending “_editor” to the igHtmlEditor ID.  In the following code the editor ID is “htmlEditor” and the IFRAME ID is “htmlEditor_editor”.  First, check that the focus method exists on the `contentWindow` of the IFRAME and then call the focus function.

	**In JavaScript:**

    ```js
    if (typeof document.getElementById("htmlEditor_editor").contentWindow.focus === "function") {
    	document.getElementById("htmlEditor_editor").contentWindow.focus();
    }
    ```       

2. Call print on the IFRAME DOM element

	Check that the print method exists on the `contentWindow` of the IFRAME and then call the print function.

	**In JavaScript:**

	```js
	if (typeof document.getElementById("htmlEditor_editor").contentWindow.print === "function") {
		document.getElementById("htmlEditor_editor").contentWindow.print();
	}
	```

3. Set the @media CSS rule for the Opera browser

	In Opera, the previous steps print the whole page in which the `igHtmlEditor` is instantiated. To print the contents of the `igHtmlEditor` only, use the following method.  One approach is to use the CSS @media rule to define print-specific CSS. In this rule, define a class to hide the elements you don’t want to print. The follow example defines class “no-print” which is applied to elements that you don’t want to appear in the print output.

	**In CSS:**

	```css
	@media print {
        .no-print {
            display: none;
        }
    }
	```

	**In HTML:**

	```html
	<body>
          <header class="no-print">
                     <h1>This header will not be printed</h1>
          </header>
           <!--igHtmlEditor target element-->
          <div id="htmlEditor">
          </div>
          <footer class="no-print">
               <h1>This footer will not be printed</h1>
          </footer>
          </div>
    </body>
	```

	>**Note:** This approach prints the entire `igHtmlEditor` control in addition to the contents.

##<a id="api-and-events-demo"></a>API and Events Demo
The following sample demonstrates how to handle events and use the API of the `igHtmlEditor` control:

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/html-editor/api-and-events](%%SamplesEmbedUrl%%/html-editor/api-and-events)
</div>

##<a id="related-content"></a>Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Configuring Toolbars and Buttons](igHtmlEditor-Configuring-Toolbars-and-Buttons.html): This topic explains how to configure the igHtmlEditor toolbars and buttons.