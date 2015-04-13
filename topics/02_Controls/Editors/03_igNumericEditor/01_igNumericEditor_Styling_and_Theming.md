<!--
|metadata|
{
    "fileName": "ignumericeditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Styling","Theming"]
}
|metadata|
-->

# igNumericEditor Styling and Theming



##igNumericEditor Styling and Theming


The `igNumericEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the numeric editor you must use theme option to apply custom CSS rules to the control.

##Changing the Theme Programmatically


The following code listings are an example how to set a custom theme named, `customTheme`, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

###Listing 1: Base HTML structure CSS style for instantiating a numeric editor

**In HTML:**

```html
<style type="text/css">
    .customTheme .ui-igedit-hover
    {
        background: #f0ffff;
        border-color:#a0a0a0;
    }
    .customTheme .ui-igedit-fieldincontainer
    {
        height:18px;
        float:left;
        padding-top:0px;
        padding-bottom:0px;
        margin:0px;
        color:#1CC2FF
    }
</style>
<body>
     <input type="text"  id="numericEditor"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

###Listing 2: Set editor theme during initialization

**In Javascript:**

```js
$('#numericEditor').igNumericEditor({
    width: 160,
       dataMode: 'int',
       theme: 'customTheme'
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

###Listing 3: Set editor theme after initialization

jQueryUI – Set the theme option after init.
```
$('#numericEditor').igNumericEditor ('option', 'theme', 'customTheme');
```
For the full list of supported customizable CSS classes please visit [CSS Classes List](%%jQueryApiUrl%%/ui.igNumericEditor#!theming).

##Using ThemeRoller

The `igNumericEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

###Listing 4: Set editor theme with jQuery UI ThemeRoller

**In HTML:**

```html
<body>
     <input type="text"  id="numericEditor"  />
     <div id="themeRoller"></div>
</body>
```

**In C#:**

```csharp
$('#numericEditor').igNumericEditor({
     width: 160,
     dataMode: 'int',
     listItems: ['1234', '2567', '3367', '2578', '5373567', '623475245742'],
     button: 'dropdown'
 });
```

##Related Topics

-   [igNumericEditor Overview](igNumericEditor-Overview.html)
-   [igNumericEditor Known Issues](igNumericEditor-Known-Issues.html)

 

 


