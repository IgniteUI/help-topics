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

## Using ThemeRoller

As the `igDatePicker` control uses the jQuery UI CSS framewrok it can also be fully styled using the [jQuery UI ThemeRoller](http://jqueryui.com/themeroller/) where you can customize your own theme or choose from a gallery of available ones. These themes replace the ones that come by default with Ignite UI.

Date picker using the UI Darkness theme:



## Custom styling

Your CSS may include style overrides for many more elements of the date picker. For a full list of available classes see the [API Reference Theming classes](%%jQueryApiUrl%%/ui.igDateEditor#theming). Styles can be applied both by overriding the global classes applied to all editors or by targeting specific elements by ID or other specific trait to allow for more per-control customization.

```css
.ui-igedit-input{
	color: #00aeef;
}
```

![](\images\igDateEditor_custom_style.png)

## Related Topics

-   [igDateEditor Overview](igDateEditor-Overview.html)
-   [igDatePicker Overview](igDatePicker-Overview.html)
-   [igDatePicker Known Issues](igDatePicker-Known-Issues.html)

 

 


