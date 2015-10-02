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


The `igMaskEditor` control is jQuery-based widget that extends the `igEditor` control and it exposes a number of options for styling. To customize style of the mask editor you must use theme option to apply custom CSS rules to the control.

The Ignite UI package comes with a number of jQuery UI and Bootstrap themes. Bootstrap support also includes generating and customizing your own bootstrap themes - see [Styling and Theming](Deployment-Guide-Styling-and-Theming.html) for details. All of the themes will style all controls including the editors on the page.

## Using ThemeRoller

As the `igMaskEditor` control uses the jQuery UI CSS framewrok it can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/) where you can customize your own theme or choose from a gallery of available ones. These themes replace the ones that come by default with Ignite UI.

Numeric editor with drop list using the UI Darkness theme:

![](images/igMaskEditor-ui-darkness.png)

## Custom styling

Your CSS may include style overrides for many more elements of the mask editor. For a full list of available classes see the [API Reference Theming classes](%%jQueryApiUrl%%/ui.igMaskEditor#theming). Styles can be applied both by overriding the global classes applied to all editors or by targeting specific elements by ID or other specific trait to allow for more per-control customization.

The default color for the input value in the `igMaskEditor` is black. Here is an example how to change this color:

```html
<style>
.ui-igedit-input
{
	color: #00aeef;
}
</style>
```

![](images/igMaskEditor-custom-style.png)

## Related Topics  

-   [igMaskEditor Overview](igMaskEditor-Overview.html)
 

 


