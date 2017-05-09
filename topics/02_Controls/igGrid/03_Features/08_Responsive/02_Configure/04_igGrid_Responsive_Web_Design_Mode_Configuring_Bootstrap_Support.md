<!--
|metadata|
{
    "fileName": "iggrid-responsive-web-design-mode-configuring-bootstrap-support",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I","Layouts"]
}
|metadata|
-->

# Configuring Bootstrap Support (igGrid, RWD Mode)

## Topic Overview

### Purpose

This topic explains how to configure Responsive Web Design (RWD) mode for the `igGrid`™ control using Twitter Bootstrap’s RWD classes.

### Required background

The following table lists the topics and articles required as a prerequisite to understanding this topic.

- Concept
    - Responsive Web Design
    - Responsive Frameworks
    - CSS Media Queries
- Topics
    - [Responsive Web Design Mode Overview (igGrid)](igGrid-Responsive-Web-Design-Mode-Overview.html): This topic explains conceptually the RWD Mode feature of the `igGrid` control and the functionalities this feature provides.
    - [Enabling Responsive Web Design (RWD) Mode (igGrid)](igGrid-Enabling-Responsive-Web-Design-Mode.html): This topic explains, with code examples, how to enable the Responsive Web Design (RWD) mode in the `igGrid` control.
	- [Configuring Responsive Web Design (RWD) Mode Overview (igGrid)](igGrid-Configuring-Responsive-Web-Design-Mode-Overview.html): This topic explains conceptually the elements of which configuring Responsive Web Design (RWD) mode consists – configuring column hiding and configuring the templates – and how these elements relate to each other.
- External Resources
    -   [A List Apart: Responsive Web Design](http://alistapart.com/article/responsive-web-design)
    -   [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
    -   [Wikipedia: Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_web_design)
    -   [CSS 3 Media Queries](http://www.w3.org/TR/css3-mediaqueries/)


## Configuring Bootstrap Support

You can configure Twitter Bootstrap to be used for RWD Mode profiles. The RWD Mode feature  (*infragistics.ui.grid.responsive.js*) has a class which supports Twitter-Bootstrap-framework-responsive CSS classes. This class is named `$.ig.BootstrapMode` and is activated in the `responsiveModes` option.

> **Note:** You need to include Twitter bootstrap CSS file in order to use the CSS class names.


### Overview

Following is a conceptual overview of the process:

​1. Configuring the RWD Mode feature to use the Bootstrap JavaScript utility class for profile activation

​2. Configuring RWD Mode column hiding, row and column templates by using Twitter Bootstrap

### Steps

To configure Twitter Bootstrap for use with RWD Mode profiles:

1. Configure the RWD Mode feature to use the Bootstrap JavaScript utility class for profile activation.

	Bootstrap profile activation is configured in RWD Mode [`responsiveModes`](%%jQueryApiUrl%%/ui.iggridresponsive#options:responsiveModes) option, which is an object with properties, the names of the RWD Mode profiles and values the lowercased name of the class which implements the profile activation (without the "Mode" suffix). In this case the value will be "bootstrap" for all of the modes (Desktop, Tablet, Phone), because one class is responsible for all of the profile activations.
	
	Example:
	
	**In JavaScript:**
	
	```js
	responsiveModes: {
	    desktop: “bootstrap”,
	    tablet: “bootstrap”,
	    phone: “bootstrap”
	}
	```

2. Configure RWD Mode column hiding, row and column templates by using Twitter Bootstrap.

	Once you have configured Twitter Bootstrap to be used for the RWD mode profiles, column hiding, row and column templates functionalities will use Twitter Bootstrap profile activation implementation.
	
	> **Note:** If you plan on using the Bootstrap defined CSS classes only for hiding columns you don’t need to switch the RWD mode recognition to the Bootstrap one. You can use its CSS classes in RWD Mode column hiding directly with the `columnSettings.classes` property after you referenced the Twitter Bootstrap CSS file.

The following table matches the Twitter Bootstrap CSS classes to the RWD respective configurations.

Class | Phone (up to 767 px) | Tablet (768 ÷ 979 px) | Desktop (980 px or more)
---|---|---|---
`.visible-phone` | Visible | Hidden | Hidden
`.visible-tablet` | Hidden | Visible | Hidden
`.visible-desktop` | Hidden | Hidden | Visible
`.hidden-phone` | Hidden | Visible | Visible
`.hidden-tablet` | Visible | Hidden | Visible
`.hidden-desktop` | Visible | Visible | Hidden

### Sample

The below sample demonstrates how to configure Responsive Web Design Mode feature to use Twitter Bootstrap Framework utility class for profile activation.

<div class="embed-sample">
   [Twitter Bootstrap](%%SamplesEmbedUrl%%/grid/twitter-bootstrap)
</div>