<!--
|metadata|
{
    "fileName": "iggrid-configuring-responsive-web-design-mode-overview",
    "controlName": "igGrid",
    "tags": ["Grids","How Do I","Layouts"]
}
|metadata|
-->

# Configuring Responsive Web Design (RWD) Mode Overview (igGrid)

## Topic Overview

### Purpose

This topic explains conceptually the elements of which configuring Responsive Web Design (RWD) mode consists – configuring column hiding and configuring the templates – and how these elements relate to each other.

### Required background

The following lists the topics and articles required as a prerequisite to understanding this topic.

- Concept
    - Responsive Web Design
    - Responsive Frameworks
    - CSS Media Queries
- Topics
    - [Responsive Web Design Mode Overview (igGrid)](igGrid-Responsive-Web-Design-Mode-Overview.html): This topic explains conceptually the RWD Mode feature of the `igGrid` control and the functionalities this feature provides.
    - [Enabling Responsive Web Design (RWD) Mode (igGrid)](igGrid-Enabling-Responsive-Web-Design-Mode.html): This topic explains, with code examples, how to enable the Responsive Web Design (RWD) mode in the `igGrid` control.
- External Resources
    -   [A List Apart: Responsive Web Design](http://alistapart.com/article/responsive-web-design)
    -   [Twitter Bootstrap](http://twitter.github.com/bootstrap/)
    -   [Wikipedia: Responsive Web Design](http://en.wikipedia.org/wiki/Responsive_web_design)
    -   [CSS 3 Media Queries](http://www.w3.org/TR/css3-mediaqueries/)

### In this topic

This topic contains the following sections:

-   [**Configuring Responsive Web Design (RWD) Overview**](#overview)
    -   [Configuring RWD mode summary](#summary)
    -   [Configuring column hiding](#column-hiding)
    -   [Configuring the RWD mode templates](#templates)
    -   [Custom RWD mode configurations](#custom-configurations)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)


## <a id="overview"></a> Configuring Responsive Web Design (RWD) Overview

### <a id="summary"></a> Configuring RWD mode summary

The Responsive Web Design (RWD) mode can be configured to engage the following functionalities:

-   [Column hiding](igGrid-Responsive-Web-Design-Mode-Configuring-Column-Hiding.html) – this functionality hides/shows columns depending of the active RWD profile.
-   [Template switching](igGrid-Responsive-Web-Design-Mode-Configuring-Row-and-Column-Templates.html) – this functionality applies column template depending of the active RWD profile.
-   [Custom RWD Mode configuration](igGrid-Responsive-Web-Design-Mode-Creating-Custom-Profile.html) – this functionality allows you to create custom RWD profiles.

Column hiding and template-based configuration functionalities can be configured for use with Twitter Bootstrap RWD classes. (For details, refer to the [Configuring Bootstrap Support](igGrid-Responsive-Web-Design-Mode-Configuring-Bootstrap-Support.html) topic.)


### <a id="column-hiding"></a> Configuring column hiding
Column visibility can be configured in the following ways:

-   **By using CSS classes** – with [CCS 3 media queries](http://www.w3.org/TR/css3-mediaqueries/). Each class collection is tested whether it produces visible elements which are then used to show or hide the column through the igGrid API. 
	> **Note:** CSS Media Queries are not supported on older browsers. For details, see [CSS Media Queries Browser Support](http://caniuse.com/css-mediaqueries). 

	CSS classes are configured in the `columnSettings.classes` property.

-   **By configuration settings** – configuration settings use the defined RWD mode profiles and the recognized active profile to determine the column’s visibility. By default, configuration settings use also CSS 3 media queries to determine the RWD mode profile. However if you do not want to depend on the CSS 3, then extending the `$.ig.ResponsiveMode` class gives you the opportunity to use window resize events.

**Related Topics**

-   [Configuring Column Hiding](igGrid-Responsive-Web-Design-Mode-Configuring-Column-Hiding.html)


### <a id="templates"></a> Configuring the RWD mode templates

Column RWD Mode template is configured in the `columnSettings.configuration` option. The configuration option accepts an object literal with properties the names which are configured in `responsiveModes` option and the values are an object literal with a single property named as the template which contains the template string.

One column template is created for each configured [profile](igGrid-Responsive-Web-Design-Mode-Overview.html#profiles). When the profile is activated, the grid is rendered according to the profile template.

**Related Topics**

-   [Configuring Column Templates](igGrid-Responsive-Web-Design-Mode-Configuring-Row-and-Column-Templates.html)


### <a id="custom-configurations"></a> Custom RWD mode configurations

The RWD mode has some predefined profiles: Desktop, Tablet, and Phone. In addition to that, you can create custom profiles. Custom profiles can be created either inline in the `responsiveModes` option or by extending the `$.ig.ResponsiveMode` class.

**Related Topics**

-   [Creating Custom Responsive Web Design (RWD) Mode Profiles](igGrid-Responsive-Web-Design-Mode-Creating-Custom-Profile.html)



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring Column Hiding (igGrid, RWD Mode)](igGrid-Responsive-Web-Design-Mode-Configuring-Column-Hiding.html): This topic explains, with code examples, how to configure column hiding for the `igGrid` control in Responsive Web Design (RWD) mode.

- [Configuring Row and Column Templates (igGrid, RWD Mode)](igGrid-Responsive-Web-Design-Mode-Configuring-Row-and-Column-Templates.html): This topic explains, with code examples, how to define row and column templates for the individual Responsive Web Design (RWD) mode profiles of the `igGrid` control and how to configure automatic change of template when switching the active RWD mode profile.

- [Creating Custom Responsive Web Design (RWD) Profiles (igGrid)](igGrid-Responsive-Web-Design-Mode-Creating-Custom-Profile.html): This topic explains, with code examples, how to create custom Responsive Web Design (RWD) mode profiles for the `igGrid` control.

- [Configuring Bootstrap Support (igGrid, RWD Mode)](igGrid-Responsive-Web-Design-Mode-Configuring-Bootstrap-Support.html): This topic explains how to configure Responsive Web Design (RWD) mode for the `igGrid` control using Twitter Bootstrap’s RWD classes.
