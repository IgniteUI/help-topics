<!--
|metadata|
{
    "fileName": "ightmleditor-known-issues",
    "controlName": "igHtmlEditor",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations

##Topic Overview

### Purpose

This topic lists the known issues and limitations of the `igHtmlEditor`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

-	[Known Issues](Known-Issues-Revision-History.html): Provides reference information for known issues and limitations of all Ignite UI controls.


##Known Issues and Limitations

### Overview

The following table summarizes the known issues and limitations of the `igHtmlEditor` control. Detailed explanations of known issues and the possible workarounds are provided for some of the issues in the following summary table.

### Legend:


<table class="table">
    <tbody>
        <tr>
            <td><img src="../../images/images/positive.png" alt="" class="img-responsive"></td>
            <td>Workaround available</td>
        </tr>
        <tr>
            <td><img src="../../images/images/negative.png" alt="" class="img-responsive"></td>
            <td>No known workaround</td>
        </tr>
        <tr>
            <td><img src="../../images/images/plannedFix.png" alt="" class="img-responsive"></td>
            <td>Fix planned</td>
        </tr>
    </tbody>
</table>                                               



Feature|Description|Status
---|---|---
Tables and images cannot be resized in WebKit-based browsers (Chrome, Safari, etc).|There are no resize handles for tables when the IFRAME BODY has the contenteditable attribute set to true. [Here](http://code.google.com/p/chromium/issues/detail?id=52800) you can find bug details in the Chromium tracker.|![](../../images/images/negative.png)
[Cut, Copy, and Paste toolbar functionality works only in Internet Explorer](#cut-copy-paste)|Internet Explorer has an API for Cut, Copy and Paste functionality while other browsers provide limited or no support.|![](../../images/images/positive.png)
In Internet Explorer, PRE element borders stay visible even after PRE elements go outside of the editor viewport.|When scrolling the igHtmlEditor contents in Internet Explorer with a PRE element selected in design view, the element’s resize border stays visible even after the PRE element scrolls outside of the editor viewport.|![](../../images/images/negative.png)
[In Firefox, Symbol, Webdings, and Wingdings fonts are rendered differently than on other browsers.](#style-difference)|In Firefox, Symbol, Webdings, and Wingdings fonts are rendered differently than on the other browsers.|![](../../images/images/positive.png)
[In Firefox, if the igHtmlEditor is used in an HTML form with input fields after it, when pressing F5 the input fields are filled with the text from the combo boxes.](#html-forms)|In Firefox, if the igHtmlEditor is used in an HTML form with input fields after it which don’t have *name* attribute defined, when pressing F5 the input fields are filled with the text from the Font name, Font size and Headings combo boxes.|![](../../images/images/positive.png)
[When an igHtmlEditor is used inside an igDialog, the editor is not sized correctly](#igDialog)|When an igHtmlEditor is used inside the igDialog and its width and/or height is set to percentages, the editor is not sized correctly because the dialog is not yet created and the igHtmlEditor dimensions cannot be calculated correctly.|![](../../images/images/positive.png)
Hyperlinks cannot be opened in Internet Explorer.|Right clicking on a link in IE won't list options to open it. Also "CTRL + click" won't open it.|![](../../images/images/negative.png)
In Internet Explorer 6-10 the undo/redo functionality is not consistent.|The undo/redo functionality is achieved through the native browser implementation. In IE the undo/redo buffer is reset when elements are inserted or deleted programmatically. Features like "Dom path toolbar" depend on such functionality, that's why some actions reset the undo/redo buffer.|![](../../images/images/negative.png)
In Internet Explorer tables added through the view source mode should not have new lines in them.|New lines in the table elements causes exceptions when using IE selection and range api.|![](../../images/images/negative.png)
Internet Explorer multiple dropdown style selection | In Internet Explorer when a range is collapsed(no selection), selecting multiple styles from the editor dropdowns will not persist the previously selected styles. | ![](../../images/images/negative.png)



####<a id="cut-copy-paste"></a> Cut, Copy, and Paste toolbar functionality works only in Internet Explorer workaround

For other browsers like Firefox, Chrome, Safari, and Opera, you can use keyboard shortcuts like Ctrl+C, Ctrl+X, Ctrl+V.

####<a id="style-difference"></a> In Firefox, Symbol, Webdings, and Wingdings fonts are rendered differently than on other browsers.

You should use UTF character numeric references instead. You can find more information in the [Mozilla Web Developer FAQ](https://developer.mozilla.org/en/Mozilla_Web_Developer_FAQ#Why_aren.E2.80.99t_symbol.2Fdingbat_fonts_working.3F).

#### <a id="html-forms"></a>In Firefox, if the igHtmlEditor is used in an HTML form with input fields after it, when pressing F5 the input fields are filled with the text from the combo boxes.

As a workaround you can clear the text of the INPUT elements after initializing the `igHtmlEditor`.

Example:

**In JavaScript:**

```js
$.ig.loader(function () {
    $("#htmlEditor").igHtmlEditor({
        width: "100%"
    });
    $("#forumAnswer input[type='text']").val("");
});
```

**In HTML:**

```html
<form id="forumAnswer" action="/SaveAnswer" method="post">
    <input type="text" name="username"></input>
    <div id="htmlEditor"></div>
    <input type="text" name="tags"></input>
</form>
```

In the example above, all INPUT elements in the FORM named "formAnswer" are cleared after the `igHtmlEditor` is initialized.

If you want finer control on clearing the INPUT elements, use a container element or directly reference the INPUTs by name or id.

>**Note:** This behavior is not observed on initial loading of the page, but on refreshing the page with F5. The issue occurs with INPUT elements in the same FORM element as the `igHtmlEditor` that do not have a name attribute defined.

####<a id="igDialog"></a> When an igHtmlEditor is used inside an igDialog, the editor is not sized correctly

It is recommended to initialize the `igHtmlEditor` after the `igDialog` is opened in order to avoid any auto-sizing issues.

Example:

**In JavaScript:**

```js
$.ig.loader(function () {
    $("#dialog").igDialog({width: 900, height: 600, state: "closed"});
    $("#openDialogButton").bind("click", function() {
        $("#dialog").igDialog("open");
        $("#htmlEditor").igHtmlEditor({
            width: "100%",
            height: "100%"
        });
    });
});
```



##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Accessibility Compliance(igHtmlEditor)](igHtmlEditor-Accessibility-Compliance.html): This topic explains the accessibility features of the `igHtmlEditor` and gives information on how to achieve accessibility compliance for pages containing `igHtmlEditor`.

-	[Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all Ignite UI controls.





 

 


