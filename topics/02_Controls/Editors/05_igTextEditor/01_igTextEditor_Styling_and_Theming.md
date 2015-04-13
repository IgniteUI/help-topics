<!--
|metadata|
{
    "fileName": "igtexteditor-styling-and-theming",
    "controlName": "igEditors",
    "tags": ["Editing","Styling","Theming"]
}
|metadata|
-->

# igTextEditor Styling and Theming

## Text Editor Style Options
The `igTextEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the numeric editor you must use theme option to apply custom CSS rules to the control.

## Changing the Theme Programmatically
The following code listings are an example how to set a custom theme named, `customTheme`, when the mouse hovers over the control. Listing 2 demonstrates how to apply the theme during control initialization, while Listing 3 shows you how to apply the theme after the control is initialized. In either case the HTML from Listing 1 is required.

>**Note:** Your theme may include style overrides for many more elements of the text editor. For a full list of available classes see Table 1 for details.

###Listing 1: Creating a custom theme for the text editor in CSS


**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-field
   { 
          outline:0; 
          border:1px solid #b09090;
          background: #EFE358;
   }
   .customTheme .ui-igedit-hover
   {
          background-color:#cccccc;
   }
   .customTheme .ui-igedit-focus
   {
          background-color:#000080;
   }
</style>
<body>
      <input type="text" id="textEditor" />
</body>
```

To change the theme during initialization, use the approach shown in Listing 2.

###Listing 2: Set editor theme during initialization



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme' ,
    renderInContainer: true
});
```

If the control is already created in the DOM, then you can change the theme at any time using the approach shown in Listing 3.

###Listing 3: Set editor theme after initialization



**In Javascript:**

```js
$('#textEditor').igEditor('option', 'theme', ' customTheme ');
```

>**Note:** Changing theme is not supported, when the theme is not applied during initialization. Further if the base element is an INPUT or TEXTAREA element and the `fieldInContainer` or button options are not enabled, then you cannot change the theme after it’s already applied to the control.

## Using ThemeRoller
The `igTextEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). Listing 4 demonstrates how to change the theme of a control from a Theme Switcher dropdown.

###Listing 4: Set editor theme with jQuery UI ThemeRoller



**In HTML:**

```html
<body>
     <input type="text" id="textEditor" />
     <div id="themeRoller"></div>
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme' ,
    renderInContainer: true
});
$('#themeRoller').themeswitcher();
```

## Creating Custom Themes
The following sections detail the classes available to you as you create your custom themes. First the classes and their application are presented, followed by sample CSS and initialization code.

### Edit Field

Class Name|Applies to:
---|---
ui-igedit-field: |Input field (INPUT or TEXTAREA)
ui-igedit | Input field (INPUT or TEXTAREA)



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-field
   { 
          outline:0;
          border:1px solid #b09090;
          background: #EFE358;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme' ,
    renderInContainer: true
});
```

### Textarea

Class Name | Applies to:
---|---
ui-igedit-textarea | TEXTAREA in addition to the field



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-textarea
   { 
          resize:none; 
          overflow:auto; 
          color:#FF1105; 
          background: #f8f8b0;
   }
</style>
<body>
      <textarea id="textEditor"></textarea>
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme' ,
    renderInContainer: true
});
```

### Hover

Class Name | Applies to:
---|---
ui-igedit-hover|Input field when mouse moves over editor



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-field
   { 
          outline:0; 
          border:1px solid #b09090;
          background: #EFE358;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme',
    renderInContainer: true
});
```

### Focus

Class Name | Applies to:
---|---
ui-igedit-focus | Input field when in focus



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-focus
   { 
          background: #C8BED3; 
          border-color:#454149; 
          color:#FF0000; 
          border-width:medium; 
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme',
    renderInContainer: true
});
```

### Border Color

Class Name | Applies to:
---|---
ui-igedit-bordercolor|Input field and buttons, when editor has no focus and no mouse hovering over it



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-bordercolor
   { 
          border-color: #00FF3B;
          border-width:medium;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme',
    renderInContainer: true
});
```

### Disabled States

Class Name | Applies to:
---|---
ui-igedit-disabled| Input field when it is disabled
ui-igedit-buttondisabled |Buttons in disabled state



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-disabled
   { 
          filter:alpha(opacity=80);
          opacity:0.8;
          color:#a09090;
          background-color:#5D5757;
          border-color:#A0A0A0;
   }
   .customTheme .ui-igedit-buttondisabled 
   { 
          filter:alpha(opacity=80);
          opacity:0.8;
          background:#5D5757;
          border-color: #A0A0A0;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    theme: 'customTheme',
    button: 'dropdown spin',
    disabled: true,
    renderInContainer: true
});
```

### Negative Values

Class Name | Applies to:
---|---
ui-igedit-negative |Input field when editor type is numeric and value is negative



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-negative
   { 
          color:#e00000;
          font-family:"Times New Roman", Times, serif;
          font-style:italic; background-color:#C4C4C4;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
       renderInContainer: true,
       type: 'numeric',
       theme: 'customTheme'
});
```

### Null Values

Class Name| Applies to:
---|---
ui-igedit-nullvalue | Input field when it has no focus and no value (water-mark)



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-nullvalue{color: #0564FF;}
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
       renderInContainer: true,
       nullText: 'Enter Text', 
       theme: 'customTheme'
});
```

### Field in Container

Class Name | Applies to:
---|---
ui-igedit-fieldincontainer | Input field when it is located in container (for example when buttons are enabled)



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-fieldincontainer{ height: 15px ; float:right; padding-top:0px; padding-bottom:1px; margin:2px; color: #0A22FF; background-color:#C0C4C1 }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
       renderInContainer: true,
       nullText: 'Enter Text', 
       theme: 'customTheme'
});
```

### Button Image State Override

Class Name | Applies to:
---|---
ui-igedit-buttonsimagestateoverride | Images of buttons when mouse is moved over editor or when editor has focus, but mouse is not over a button



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-buttonsimagestateoverride
   {
          background-color:Red;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
   width: 160,
   theme: 'customTheme',
   listItems: ['Theme1', 'Theme2', 'Theme3', 'Theme4'],
   button: 'spin',
   spinRollOver: true, 
   renderInContainer: true,
   nullText: 'Select Value'
});
```

### Button

Class Name| Applies to:
---|---
ui-igedit-button| Drop-down button of editor


**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-button 
   { 
          border-color: #FFC082;
          border-width:thin;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
   width: 160,
   theme: 'customTheme',
   listItems: ['Theme1', 'Theme2', 'Theme3', 'Theme4'],
   button: 'dropdown',
   spinRollOver: true, 
   renderInContainer: true,
   nullText: 'Select Value'
});
```

### Button Hover

Class Name| Applies to:
---|---
ui-igedit-buttonhover |Buttons in mouse-over state



**In HTML:**

```html
<style type="text/css">
   .customTheme .ui-igedit-buttonhover 
   {
          border-color:#272828;
          border-width:thin;
   }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
   width: 160,
   theme: 'customTheme',
   listItems: ['Theme1', 'Theme2', 'Theme3', 'Theme4'],
   button: 'dropdown',
   spinRollOver: true, 
   renderInContainer: true,
   nullText: 'Select Value'
});
```

### Button Image, Default, Presses and Focus

Class Name | Applies to:
---|---
ui-igedit-buttonimage |Image of drop-down button
ui-igedit-buttondefault | Buttons in default state
ui-igedit-buttonpressed | Buttons in pressed state
ui-igedit-buttonfocus | Buttons when editor has focus



**In HTML:**

```html
<style type="text/css">
    .customTheme .ui-igedit-buttonimage 
    { 
            background-position: 0 -192px; 
    }
    .customTheme .ui-igedit-buttondefault 
    { 
            border-color: #FFC082;
            border-width:thin;
    }
    .customTheme .ui-igedit-buttonpressed
    { 
            border-color: red;
            border-width:thin;
    }
    .customTheme .ui-igedit-buttonfocus 
    {
            border-color: Blue;
            border-width:thin;
    }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
   width: 160,
   theme: 'customTheme',
   listItems: ['Theme1', 'Theme2', 'Theme3', 'Theme4'],
   button: 'dropdown',
   renderInContainer: true,
   nullText: 'Select Value'
});
```

### List Item States

Class Name| Applies to:
---|---
ui-igedit-listitem | Items in drop-down list
ui-igedit-listitemhover |Item in drop-down list when mouse is moved over it
ui-igedit-listitemselected | Selected item in drop-down list
ui-igedit-listitemcolumnborder | Items in all columns of drop-down list besides the last column located on the right side

This code snippet demonstrates how you can style the HTML of each item, while previously applied styles are still in effect. (For more complex demonstrations please visit the online samples browser.)



**In HTML:**

```html
<style type="text/css">
    .customTheme .ui-igedit-listitem
    { 
            border-top: #D0B0A0 1px solid;
            font-size: 12px; 
    }
    .customTheme .ui-igedit-listitemhover 
    { 
            background-color: #757777;
    }
    .customTheme .ui-igedit-listitemselected 
    { 
            background-color: #FF4949;
    }
    .customTheme .ui-igedit-listitemcolumnborder 
    { 
            border-right: 2px groove #D09090 !important; 
    }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
   width: 160,
   theme: 'customTheme',
   button: 'dropdown',
   renderInContainer: true,
   nullText: 'Select Value',
   listColumns: 2,
   listWidth: 270,
   listItems: 
   [
    'String item',
    { text: 'Red SPAN', getHtml: function () {
    return '<span style="background:red;display:inline-block;width:10px;height:10px;">
</span> ' + this.text;
    }}
  ]
});
```

## Spin Button States

Class Name | Applies to:
---|---
ui-igedit-spinbutton | Spin buttons
ui-igedit-spinlowerimage |Lower spin button
ui-igedit-spinupperimage | Upper spin button
ui-igedit-spinlowerimagehover | Lower spin button in mouse-over state
ui-igedit-spinlowerimagepressed | Lower spin button in pressed state
ui-igedit-spinupperimagehover | Upper spin button in mouse-over state
ui-igedit-spinupperimagepressed | Upper spin button in pressed state



**In HTML:**

```html
<style type="text/css">
    .customTheme .ui-igedit-spinbutton 
    {
            border-color:#9090E0;
            border-width:thin;
    }
    .customTheme .ui-igedit-spinlowerimage 
    {
            background-position: -64px 0;
            background-color: #F0E0D0;
    }
    .customTheme .ui-igedit-spinupperimage 
    {
            background-position: 0 0;
            background-color: #A0E0A0;
    }
    .customTheme .ui-igedit-spinlowerimagehover 
    {
            background-color: #F0C0C0;
    }
    .customTheme .ui-igedit-spinlowerimagepressed 
    { 
            background-color: #FF9090;
    }
    .customTheme .ui-igedit-spinupperimagehover
    {
            background-color: #70E070;
    }
    .customTheme .ui-igedit-spinupperimagepressed
    {
            background-color: #00E000;
    }
</style>
<body>
      <input type="text"  id="textEditor"  />
</body>
```



**In Javascript:**

```js
$('#textEditor').igEditor(
{
    width: 160,
    button: 'spin',
    renderInContainer: true,
    theme: 'custom15',
    listItems: ['Theme1', 'Theme2', 'Theme3', 'Theme4'],
    nullText: 'Enter Text'
});
```
 

##Related Topics  

-   [igTextEditor Overview](igTextEditor-Overview.html)
-   [igTextEditor Known Issues](igTextEditor-Known-Issues.html)

 

 


