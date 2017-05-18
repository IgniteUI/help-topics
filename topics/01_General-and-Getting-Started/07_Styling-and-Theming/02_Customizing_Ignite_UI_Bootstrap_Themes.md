<!--
|metadata|
{
    "fileName": "customizing-ignite-ui-bootstrap-themes",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Customizing %%ProductName%% Bootstrap Themes

When customizing a Bootstrap-based theme for %%ProductName%%, there are specific steps you must follow in order to correctly modify the theme. Depending on how you wish to customize your theme you may want to add Bootstrap styles to an %%ProductName%% theme, modify LESS/SASS variables, customize jQuery UI controls or customize %%ProductName%% controls specifically. This topic explains the different files (and their purpose) that make up an %%ProductName%% Bootstrap-based theme and describes the steps required in order for you to modify the theme.

##Anatomy of a Theme


The Bootstrap-based theme is compiled from the main theme file (`infragistics.theme.less`/ `infragistics.theme.scss` file in each theme folder) and the file includes references to a number of other LESS files which provide values and rules which make up the theme.

The following table lists the different files which are referenced by the main theme file and their purpose:

File Name | Purpose
---|---
variables.less / variables.scss | When creating a comprehensive Bootstrap-based theme, the `variables` file includes not only the style rules which relate to %%ProductName%% controls, but also the rest of the style rules required to create a Bootstrap theme. 
framework.less / framework.scss|The `framework` file includes the structure style rules required for jQuery UI native controls. There are no theme-related styles here, so unless you need to alter the structure of a native control, you don’t need to modify this file.
infragistics.jqueryui.theme.less / infragistics.jqueryui.theme.scss| The `infragistics.jqueryui.theme` file includes all the style rules relevant to styling jQuery UI widgets in the theme.
infragistics.igniteui.theme.less / infragistics.igniteui.theme.scss | The `infragistics.igniteui.theme` file includes all the style rules relevant to styling %%ProductName%% controls in the theme.



## Adding Bootstrap Theme Styles to an %%ProductName%% Theme


If you are looking to integrate a Bootstrap theme into an %%ProductName%% theme you need to incorporate the variables from Bootstrap and use them in the %%ProductName%% theme. The following steps demonstrate how to do this integration:

1.  You can find different bootstrap themes under `\css\themes\bootstrap3`, `\css\themes\bootstrap3\<theme name>` or `\css\themes\bootstrap4` that you can use as a base by crating a copy. You can modify the variables file or replace it with one from your chosen Bootstrap. See the Modifying Variables to Customize Your Theme section below.
2.  Next, you need to verify or perhaps adjust the sprites used in the theme (depending on the color palette of your theme you may need to adjust the colors used in the sprite image). Sprite images are found in the images folder. Once the sprites are finalized, open the `infragistics.theme.*ss` file in a text editor. There are three basic icon sprites that can be used in the theme.

    **In LESS:**
	```css
	// Icon sprites
	@ui-icons-darker: url(images/ui-icons_222222_256x240.png);
	@ui-icons-dark: url(images/ui-icons_888888_256x240.png);
	@ui-icons-light: url(images/ui-icons_ffffff_256x240.png);
	```

3.  Now you need to check that the most suitable icon sprite is used according to your theme’s colors in its different states (default, hover, active, focused). To find the relevant style rules in the `_shared-styles/infragistics.jqueryui.theme.*ss` file, search the file for the area for icons and states by searching for:

    **In LESS:**
	```css
    /* Icons
    ----------------------------------*/
    /* states and images */
	```
	
	You can now verify that the rules are using the appropriate sprite positions for your theme. Be aware that there are also exceptions and specific overrides for certain controls. Most exceptions are for the editor controls, so make sure you have the best selection defined for each instance.

4.  Save and re-compile the theme using the new variables.

## Modifying Variables to Customize Your Theme


The following steps demonstrate where to modify the variables in order to customize the %%ProductName%% theme.

1.  Open `variables.less` or `variables.scss`(depending on the chosen base theme) in your text editor and edit the values to fit your intended design. The names of the values are self-explanatory and will give you an idea as to what they will affect. For example you might find this set of variables:

    **In LESS:**
	```css
    //** Background color for `<body>`.
    @body-bg: #ffffff;
    //** Global text color on `<body>`.
    @text-color: #444444;
    //** Global textual link color.
    @link-color: #428bca;
    //** Link hover color set via `darken()` function.
    @link-hover-color: darken(@link-color, 15%);
	```

2.  Set the desired values for each of the variables and save the file.
3.  Open the `infragistics.theme.*ss` file in a text editor, check the icon sprites that are being used (step 2 of the first method).
4.  Re-compile the theme using the new variables.

                    