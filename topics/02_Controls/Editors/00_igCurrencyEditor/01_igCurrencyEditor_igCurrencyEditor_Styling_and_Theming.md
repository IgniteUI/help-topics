<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igcurrencyeditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Styling","Theming"]
}
|metadata|
-->

# igCurrencyEditor Styling and Theming

The `igCurrencyEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the numeric editor you must use theme option to apply custom CSS rules to the control.

## Changing the Theme Programmatically

The following code listings are an example how to set a custom theme named, *"customTheme"*, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

**Listing 1:** Base HTML structure CSS style for instantiating a currency editor


In HTML:

```
<style type="text/css">
    .customTheme .ui-igedit-hover { background: #f0ffff; border-color:#a0a0a0; }
    .customTheme .ui-igedit-fieldincontainer { 
		height:18px; float:left; padding-top:0px; padding-bottom:0px; margin:0px; color:#1CC2FF  
	}
</style>
<body>
     <input type="text"  id="currencyEditor"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

**Listing 2:** Set editor theme during initialization

In Javascript:

```
$('#currencyEditor').igCurrencyEditor({
    width: 160,
    theme: 'customTheme'
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

**Listing 3:** Set editor theme after initialization

In Javascript:

```
$('# currencyEditor').igCurrencyEditor('option', 'theme', 'customTheme');
```

For the full list of supported customizable CSS classes please visit

## Using ThemeRoller
The igCurrencyEditor control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

**Listing 4:** Set editor theme with jQuery UI ThemeRoller

In HTML:

```
<body>
     <input type="text"  id="currencyEditor"  />
     <div id="themeRoller" />
</body>
```



In Javascript - Initialize Percent Editor:

```
$('#currencyEditor').igCurrencyEditor({
    width: 160,
    listItems: [1234, 2567, 3367, 2578, 5373567, 23475245742],
    button: 'dropdown'
});
$('#themeRoller').themeswitcher();
```

## Related Topics

-   [igCurrencyEditor Overview](igCurrencyEditor-igCurrencyEditor-Overview.html)
-   [igCurrencyEditor Known Issues](igCurrencyEditor-igCurrencyEditor-Known-Issues.html)

 

 


