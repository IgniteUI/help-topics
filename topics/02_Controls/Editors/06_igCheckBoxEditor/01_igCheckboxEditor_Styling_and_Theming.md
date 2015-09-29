<!--
|metadata|
{
    "fileName": "igcheckboxeditor-styling-and-theming",
    "controlName": "igCheckboxEditor",
    "tags": ["Editing","Styling","Theming"]
}
|metadata|
-->

# igCheckboxEditor Styling and Theming

In this topic we are going to see how to customize the `igCheckboxEditor`.

## Changing the Icon Image

Lets start with the icon image. As you can see from the image below the default image for the checked state of the control is check icon, but that doesn't mean you should stick to it. The `igCheckboxEditor` allows you to use custom check state image. You can choose one of the [jQuery UI Icons](http://api.jqueryui.com/theming/icons/) or you can set your own custom one. How to accomplish this? Just use the `iconClass` property and set it to a custom class to put you own image or use the JQuery classes. What is more, if intend to use the width and height properties to change the size of the check box editor, it is recommended to put your own custom class with custom image that will fit the sizes that you have set.

**Default Icon Image** 

![](images/igCheckBoxEditor_normal_size.png) 


### Using jQuery UI Icons

In order to use the [jQuery Icons](http://api.jqueryui.com/theming/icons/) you have to choose one and then set its class to the `iconClass` property.

**JavaScript:**

```js
$('#checkInput').igCheckboxEditor({
	iconClass: "ui-icon-star"
});
``` 

![](images/igCheckBoxEditor_Star_Icon.png)


### Using a custom image

Probably you would want to have the option to use a custom image instead of the default one. That is not a problem for Infragistics' `igCheckboxEditor` control. All you have to do is create your own CSS class and use it as a value for the `iconClass` property.

**CSS:**

```css
.ui-state-default .ui-icon.myIcon,
.ui-state-hover .ui-icon.myIcon {
	background: url("check.png");
	width: auto;
	height: auto;
}
```

**JavaScript: **
```js
$('#checkInput').igCheckboxEditor({
	width: 50, 
	height: 50,
	iconClass: "myIcon"
});
``` 

![](images/igCheckBoxEditor_custom_icon.png)

## Changing the size of the editor

### Size Property

Another option that comes in handy when you want to customize the control is the `size` property. The size property takes four values and can deffer from very small to large. The default size is "normal". In the table below you can see how they look.

Image | Size
--- | ---
![](images/igCheckBoxEditor_verysmall_size.png) | very small
![](images/igCheckBoxEditor_small_size.png) | small
![](images/igCheckBoxEditor_normal_size.png) | normal
![](images/igCheckBoxEditor_large_size.png) | large

**JavaScript:**

```js
$('#checkInput').igCheckboxEditor({
	size: "verysmall"
});
```

### Width and Height

Apart from the `size` option you can change the size of the `igCheckboxEditor` control by using the width and height properties. Pay attention that those properties overwrite the size option. Another thing that you should note, when you change the width and the height properties, is that the icon will always be positioned at the center of the DIV element. 

**JavaScript:**

```js
$('#checkInput').igCheckboxEditor({
	width: 60, 
	height: 60
});
```

You can set the dimensions through CSS. Using this approach will allow you to apply additional CSS rules.

**CSS**
```css
.ui-checkbox-container {
	width: 60;
	height: 60;
}
```

![](images/igCheckBoxEditor_custom_size.png)


## Using ThemeRoller
The `igCheckboxEditor` control can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/). 

If you want to use the ThemeRoller follow those simple steps:

1. Go to [jQuery ThemeRoller](http://jqueryui.com/themeroller/) and choose     	a theme.
2. Download the theme and unzip the zip file and take the `jquery-ui.min.css` file and replace the `infragistics.theme.css`.
3. Make sure that your references are correct and run your project.

![](images/igCheckBoxEditor_ThemeRoller.png)

## Related Topics  

-   [igCheckboxEditor Overview](igCheckboxEditor-Overview.html)
-   [Using Theme Roller](#_Using_Theme_Roller)
