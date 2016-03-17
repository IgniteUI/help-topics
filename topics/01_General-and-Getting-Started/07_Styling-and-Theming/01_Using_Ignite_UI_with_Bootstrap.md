<!--
|metadata|
{
    "fileName": "using-ignite-ui-with-bootstrap",
    "controlName": [],
    "tags": ["Styling"]
}
|metadata|
-->
#Using Ignite UI with Bootstrap

##Introduction


This topic explains how Ignite UI and Bootstrap work together, how you can get an Ignite UI Bootstrap-based theme for your web application and how you can customize the themes to your liking.

##How Does Ignite UI Work with Bootstrap?


Adding Bootstrap to an Ignite UI application makes Bootstrap features available, however, the Ignite UI controls do not automatically reflect the look and feel set by Bootstrap styles. This is caused by the difference in how jQuery UI widgets in general and Ignite UI controls specifically are styled. In these instances, the controls do not have the necessary Bootstrap class names required which allow the controls reflect the expected styles when Bootstrap is added to the page. Therefore, in order to use Bootstrap styling and theming with Ignite UI controls, Infragistics has made available a number of Bootstrap-based themes that style jQuery UI widgets and Ignite UI controls to match Bootstrap. Beyond the static themes, you may also use the [Ignite UI Bootstrap Theme Generator](%%NewSamplesUrl%%/bootstrap-theme-generator) to upload and customize Bootstrap-based themes.

##Ignite UI Bootstrap Theme Generator


The [Bootstrap Theme Generator](%%NewSamplesUrl%%/bootstrap-theme-generator) is built to give you the ability to download or customize existing themes or upload your own LESS file to create an Ignite UI Bootstrap-based theme of your own.

### Working with LESS Variables

All themes are based off values found in the `variables.less` file which comes from the source code of Bootstrap or a customized theme. When using the Bootstrap Theme Generator you have the option to either work with pre-customized themes or upload your own LESS variables.

### Customizing Provided Themes

The Ignite UI Bootstrap Theme Generator has customized the default [Bootstrap theme](%%NewSamplesUrl%%/bootstrap-theme-generator/default) along with a few other themes from . Should you choose to use one of these themes as a basis for your theme, you'll find that most of the work is already done for you. You can either download the theme in its pre-defined state or you can choose to further customize the theme directly in the Bootstrap Theme Generator site. Once you are stratified with your theme you can download the resulting CSS and/or LESS files for your theme.

### Uploading Custom LESS Values

While there are a number of themes available to you out-of-the-box you may also want to start from scratch with a theme of your own. To generate theme from a source that is not already available on the Bootstrap Theme Generator site you simply need to upload your own variable values.

The theme variables are often found in a file named `variables.less`. You can get a copy of `variables.less` directly from the [Bootstrap source](https://github.com/twbs/bootstrap) or you can get themed versions of the file from any other Bootstrap theme. Common places to find Bootstrap themes include [Bootswatch](http://bootswatch.com/), [WrapBootstrap](https://wrapbootstrap.com/) and [more](https://www.google.com/search?q=bootstrap%20themes).

Once you have tailored the values in your copy of `variables.less` when you [upload the file to the Bootstrap Theme Generator](%%NewSamplesUrl%%/bootstrap-theme-generator/Theme/Upload) and it will provide for you a full Bootstrap-based them which supports Ignite UI controls.

>**Note:** The file you upload does not have to be named `variables.less`, but it must contain values for all the variables found in Bootstrap's `variables.less` file.

##Related Content


-   [Customizing Ignite UI Bootstrap Themes ](Customizing-Ignite-UI-Bootstrap-Themes.html)

                    
