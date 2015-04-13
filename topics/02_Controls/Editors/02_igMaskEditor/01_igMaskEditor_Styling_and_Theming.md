<!--
|metadata|
{
    "fileName": "igmaskeditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Editing","Styling","Theming"]
}
|metadata|
-->

# igMaskEditor Styling and Theming

##igMaskEditor Styling and Theming


The `igMaskEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the mask editor you must use theme option to apply custom CSS rules to the control.

##Changing the Theme Programmatically


The following code listings are an example how to set a custom theme named, `customTheme`, when the mouse hovers over the control. Listing 2  demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

###Listing 1: Base HTML structure CSS style for instantiating a mask editor

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
     <input type="text"  id="maskEditor"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

###Listing 2: Set editor theme during initialization

**In Javascript:**

```js
$('#maskEditor').igMaskEditor({
    width: 160,
    renderInContainer: true,
    nullText: 'Enter Value', 
       theme: 'customTheme'
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

###Listing 3: Set editor theme after initialization

**In Javascript:**

```js
$('#maskEditor').igDateEditor('option', 'theme', 'customTheme');
```

For the full list of supported customizable CSS classes please visit [CSS Class List](%%jQueryApiUrl%%/ui.igMaskEditor#!theming)

##Using ThemeRoller

The `igMaskEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

###Listing 4: Set editor theme with jQuery UI ThemeRoller

**In HTML:**

```html
<body>
     <input type="text"  id="maskEditor"  />
     <div id="themeRoller"></div>
</body>
```

**In C#:**

```csharp
$('#maskEditor').igMaskEditor({
    width: 160,
    renderInContainer: true,
    nullText: 'Enter Value',
       listItems: ['1234567832', '1235567853', '1235567238'], 
       button: 'dropdown'
});
$('#themeRoller').themeswitcher();
```

##Related Topics  

-   [igMaskEditor Overview](igMaskEditor--Overview.html)
-   [igMaskEditor Known Issues](igMaskEditor-Known-Issues.html)

 

 


