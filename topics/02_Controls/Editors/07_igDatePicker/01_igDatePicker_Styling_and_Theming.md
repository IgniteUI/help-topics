<!--
|metadata|
{
    "fileName": "igdatepicker-styling-and-theming",
    "controlName": "igDatePicker",
    "tags": ["Styling","Theming"]
}
|metadata|
-->

# igDatePicker Styling and Theming


The `igDatePicker` control is jQuery-based widget that extends the igDateEditor control and it exposes a number of options for styling. To customize style of the numeric editor you must use theme option to apply custom CSS rules to the control.

> **Note:** The `igDatePicker` control reuses the drop-down calendar from `jQuery.datepicker` and you should use style options available for `jQuery.datepicker`.

## Changing the Theme Programmatically

The following code listings are an example how to set a custom theme named *"customTheme"*, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

**Listing 1:** Base HTML structure CSS style for instantiating a date picker

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
        color:#1CC2FF;
    }
</style>
<body>
     <input type="text"  id="datepicker"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

**Listing 2:** Set picker theme during initialization



**In Javascript:**

```js
$('#datepicker').igDatePicker({
     width: 160,
     regional: 'en-US', 
        theme: 'customTheme'
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

**Listing 3:** Set picker theme after initialization



**In Javascript:**

```js
$('#datepicker').igDatePicker('option', 'theme', 'customTheme');
```

For the full list of supported customizable css classes please visit

## Using ThemeRoller

The `igDatePicker` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

**Listing 4:** Set picker theme with jQuery UI ThemeRoller



**In HTML:**

```html
<body>
     <input type="text"  id="datepicker"  />
     <div id="themeRoller" />
</body>
```



**In JavaScript - Initialize igDatePicker:**

```js
$('#datepicker').igDatePicker({
    width: 160,
    regional: 'en-US'
});
$('#themeRoller').themeswitcher();
```

 

**Related Topics**

-   [igDateEditor Overview](igDateEditor-Overview.html)
-   [igDatePicker Overview](igDatePicker-Overview.html)
-   [igDatePicker Known Issues](igDatePicker-Known-Issues.html)

 

 


