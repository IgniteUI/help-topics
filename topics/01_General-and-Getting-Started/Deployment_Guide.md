<!--
|metadata|
{
    "fileName": "deployment-guide",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Deployment Guide

## Introduction
Deploying %%ProductName%% applications requires that you account for the three types of resources that make up a control: JavaScript, CSS and images. Each of these resources may be managed differently depending on how you have your application configured.

## Files and Locations
As you prepare to build or deploy your application, it’s a good idea to begin by reviewing the different 
[JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html). Once familiar with the different types of files used by %%ProductName%%, then refer to [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) to learn how to reference control resources (including details on localized resources). We have specific topics that cover [manually adding files to a page](Adding-the-Required-Resources-for-NetAdvantage-for-jQuery.html) as well as [automatically referencing files with the %%ProductName%% script loader](Using-Infragistics-Loader.html). You have the option of requesting files from your servers or via the [Infragistics Content Delivery Network (CDN)](Deployment-Guide-Infragistics-Content-Delivery-Network%28CDN%29.html).

## Localization
If you choose to localize your application you have the option to [customize the localization settings](Customizing-the-localization-of-NetAdvantage-for-jQuery-controls.html), which may have an impact on your deployment procedure.

## Using MVC Helpers
You have the option of working with %%ProductName%% controls directly in JavaScript or by using the ASP.NET MVC helpers. If you use the helper methods then you want to learn how [adding controls to an MVC project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html) can affect your deployment.

## Styling and Theming
Adding themes to your application requires that you deploy the style and image files to the appropriate place on the server. The [Styling and Theming in %%ProductName%%](Deployment-Guide-Styling-and-Theming.html) topic includes details on how the files should be organized.

## Supporting Old Browsers
Sometimes your application is required to run in some old contexts. Make sure to read [Using %%ProductName%% in Browsers Without HTML5 or CSS3 Support](Deployment-Guide-Using-NetAdvantage-for-jQuery-in-Browsers-that-Dont-Support-HTML5-or-CSS3.html) to mitigate any issues working with old browsers.

## Upgrading %%ProductName%%
If your deployment includes an upgrade in %%ProductName%%, then the [Upgrading Projects to the Latest %%ProductName%% Version](Manually-Updating-Previous-Versions.html) topic includes the details to help you make a smooth transition.

