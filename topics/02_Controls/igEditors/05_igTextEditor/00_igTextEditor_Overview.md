<!--
|metadata|
{
    "fileName": "igtexteditor-overview",
    "controlName": "igEditors",
    "tags": ["Editing","Getting Started"]
}
|metadata|
-->

# igTextEditor Overview

## Overview Of The igTextEditor
The Ignite UI™ text editor, or `igTextEditor`, is a control that renders an input field which can be formatted for single or multiline input.

The `igTextEditor` control exposes a rich client-side API, which may be configured the work with any server technology. While the Ignite UI™ controls are server-agnostic, the control does feature wrappers specific for the Microsoft® ASP.NET MVC Framework to configure the control with the .NET™ language of your choice.

The `igTextEditor` control may be extensively styled giving you an opportunity to provide a completely different look and feel for the control as opposed to the default style. Styling options include using your own styles as well as styles from jQuery UI’s ThemeRoller.

Figure 1: The `igTextEditor` control as rendered to the user

![](images/igTextEditor_Overview.png)

[Basic Usage Sample](%%SamplesUrl%%/editors/basic-usage)

## Features
The `igTextEditor` includes the following characteristics:

-	Single and multiline input
-   Validation
-   Filtering entries by include/exclude specific characters
-   Filtering entries by predefined list
-   JavaScript Client API
-   ASP.NET MVC wrapper
-   Overall theme support

## Adding igTextEditor to a Web Page

1.  To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html) help topic.
2.  On your HTML page or ASP.NET MVC View, reference the required JavaScript files, CSS files, and ASP.NET MVC assemblies.

    **In HTML:**

    ```html
    <link type="text/css" href="/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link type="text/css" href="/css/structure/infragistics.css" rel="stylesheet" />
    <script type="text/javascript" src="/Scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery-ui.min.js"></script>
    <script type="text/javascript" src="/Scripts/Samples/infragistics.core.js"></script>
	<script type="text/javascript" src="/Scripts/Samples/infragistics.lob.js"></script>
    ```

    **In Razor:**

    ```csharp
    @using Infragistics.Web.Mvc;

    <link type="text/css" href="@Url.Content("~/css/themes/infragistics/infragistics.theme.css")" rel="stylesheet" />
    <link type="text/css" href="@Url.Content("~/css/structure/infragistics.css")" rel="stylesheet" />

    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-1.9.1.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-ui.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/Samples/infragistics.core.js")"></script>
	<script type="text/javascript" src="@Url.Content("~/Scripts/Samples/infragistics.lob.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/Samples/modules/i18n/regional/infragistics.ui.regional-en.js")"></script>
    ```

3.  For jQuery implementations create an INPUT, DIV or SPAN as the target element in HTML. This step is optional for ASP.NET MVC implementations as the MVC wrapper can create the containing element for you.

	**In HTML:**
   	```html
    <input id="textEditor" type="text" />
	```

4.  Once the above setup is complete, initialize the text editor and set needed options, such as [`width`](%%jQueryApiUrl%%/ui.igTextEditor#options:width), [`placeHolder`](%%jQueryApiUrl%%/ui.igTextEditor#options:placeHolder) etc. 

	> **Note:** For the ASP.NET MVC Views, the `Render` method must be called after all other options are set. An optional boolen parameter can be passed to skip rendering target element if it's already present in the page from the previous step.

	**In Javascript:**
	```js
    <script type="text/javascript">
       $('#textEditor').igTextEditor();
    </script>	
	```
	**In Razor:**
	```csharp
    @(Html.Infragistics().TextEditor()
       .ID("textEditor")
       .Render())
	```

5.  Run the web page to view the basic setup of the `igTextEditor` control.

## Specific options
`igTextEditor` exposes a robust API whith many options providing flexibility in both functionality and appearence. Let's start with the `placeHolder` option. It is the text which appears in the editor when it has no focus and the `value` is null or empty string.

### Configure PlaceHolder

**HTML:**

```html
<input id="email"/>
```

**Javascript:**

```js
<script type="text/javascript">
    $("#email").igTextEditor({
        placeHolder:"John_Doe@email.com"
    });
</script>
```

**In Razor:**

```csharp
@(Html.Infragistics().TextEditor()
    .ID("email")
    .InputName("email")
    .PlaceHolder("John_Doe@email.com")
    .Render()
)
```
### Configure editor mode

The `igTextEditor` has several specific inbuilt modes, based on the purpose it is going to serve. These are exposed trough the `textMode` option that sets the text mode of the editor such as: single-line text editor, password editor or multiline editor. That option has effect only on initialization. If the base element (selector) is TEXTAREA, then "multiline" mode is required.

#### Configure password

**HTML:**

```html
<input id="password"/>
```

**Javascript:**

```js
<script type="text/javascript">
    $("#password").igTextEditor({
        placeHolder:"********"
    });
</script>
```

**In Razor:**

```csharp
@(Html.Infragistics().TextEditor()
    .ID("password")
    .InputName("password")
    .TextMode(TextEditorTextMode.Password)
    .PlaceHolder("********")
    .Render()
)
```

#### Configure Multiline

**HTML:**

```html
<textarea id="note"></textarea>
```

**Javascript:**

```js
<script type="text/javascript">
    $('#note').igTextEditor({
        inputName: "note",
        textMode: "multiline",
        height:"100px"
});
</script>
```

**In Razor:**

```csharp
@(Html.Infragistics().TextEditor()
    .ID("note")
    .InputName("note")
    .TextMode(TextEditorTextMode.Multiline)
    .Height(100)
    .Render()
)
```

## Related Links
-   [Basic Usage Sample](%%SamplesUrl%%/editors/basic-usage)
-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html)
-   [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)

 

 


