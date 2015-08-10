<!--
|metadata|
{
    "fileName": "igdateeditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Editing","Styling","Theming"]
}
|metadata|
-->

# igDateEditor Styling and Theming

The `igDateEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the numeric editor you must use theme option to apply custom CSS rules to the control.

## Changing the Theme Programmatically

The following code listings are an example how to set a custom theme named *"customTheme"*, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

**Listing 1:** Base HTML structure CSS style for instantiating a date editor

**In HTML:**

```html
<style type="text/css">
     .customTheme .ui-igedit-hover
     { 
          background: #f0ffff;
          border-color:#a0a0a0; 
     }
</style>
<body>
     <input type="text"  id="dateEditor"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

**Listing 2:** Set editor theme during initialization

**In Javascript:**

```js
$('#dateEditor'). igDateEditor(
{
    width: 160,
    theme: 'customTheme' ,
    renderInContainer: true
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

**Listing 3:** Set editor theme after initialization

**In Javascript:**

```js
$('#dateEditor').igDateEditor('option', 'theme', 'customTheme');
```

For the full list of supported customizable CSS classes please visit:

[**API Docs CSS classes list**](%%jQueryApiUrl%%/ui.igdateeditor#theming)

## Using ThemeRoller

The `igDateEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

**Listing 4:** Set editor theme with jQuery UI ThemeRoller

**In HTML:**

```html
<body>
     <input type="text"  id="dateEditor"  />
     <div id="themeRoller"></div>
</body>
```

**In Javascript:**

```js
$('#dateEditor'). igDateEditor({
    width: 160,
    renderInContainer: true,
    buttonType: 'spin', 
    dateInputFormat: 'MMM/yy'
});
$('#themeRoller').themeswitcher();
```

## Related Topics

-   [igDateEditor Overview](igDateEditor-Overview.html)
-   [igDateEditor Known Issues](igDateEditor-Known-Issues.html)

 

 


