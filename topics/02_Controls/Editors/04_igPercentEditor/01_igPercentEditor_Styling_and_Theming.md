<!--
|metadata|
{
    "fileName": "igpercenteditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Editing","Styling","Theming"]
}
|metadata|
-->

# igPercentEditor Styling and Theming

##igPercentEditor Styling and Theming


The `igPercentEditor` control is jQuery-based control that extends `igNumericEditor` and exposes a number of options for styling. To customize style of your percent editor you must use theme option.

##Changing the Theme Programmatically

The following code listings are an example how to set a custom theme named, `customTheme`, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

###Listing 1: Base HTML structure and CSS style for instantiating a percent editor


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
     <input type="text"  id="percentEditor"  />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

###Listing 2: Set editor theme during initialization



**In Javascript:**

```js
$('#percentEditor').igPercentEditor({
     percentDisplayFactor: 100,
     width: 160, 
     theme: 'customTheme'
 });
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

###Listing 3: Set editor theme after initialization



**In Javascript:**

```js
$('#percentEditor').igPercentEditor ('option', 'theme', 'customTheme');
```

For the full list of supported customizable CSS classes please visit

##Using ThemeRoller


The `igPercentEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a dropdown.

###Listing 4: Set editor theme with jQuery UI ThemeRoller



**In HTML:**

```html
<body>
     <input type="text"  id="percentEditor"  />
     <div id="themeRoller"></div>
</body>
```



**In Javascript:**

```js
$('#numericEditor').igPercentEditor({
    listItems: [10, 25, 50, 75, 100],
    percentDisplayFactor: 100,
    width: 160,
    button: 'dropdown',
    nullText: 'Select Value'
 });
```

##Related Topics  

-   [igPercentEditor Overview](igPercentEditor-Overview.html)
-   [igPercentEditor Known Issues](igPercentEditor-Known-Issues.html)

 

 


