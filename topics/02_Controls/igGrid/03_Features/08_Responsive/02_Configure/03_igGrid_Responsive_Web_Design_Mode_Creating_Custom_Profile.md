<!--
|metadata|
{
    "fileName": "iggrid-responsive-web-design-mode-creating-custom-profile",
    "controlName": "igGrid",
    "tags": []
}
|metadata|
-->

# Creating Custom Responsive Web Design (RWD) Profiles (igGrid)

## Topic Overview

### Purpose

This topic explains, with code examples, how to create custom Responsive Web Design (RWD) mode profiles for the `igGrid`™ control.

### Required background

The following table lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

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

### In this topic

This topic contains the following sections:

-   [**Creating Custom RWD Mode Profiles Overview**](#overview)
    -   [Creating custom RWD mode profiles summary chart](#summary-chart)
-   [**Creating Custom RWD Mode Profiles Inline**](#inline)
	-   [Overview](#inline-overview)
    -   [Property settings](#inline-property-settings)
    -   [Example](#inline-example)
-   [**Creating Custom RWD Mode Configuration by Extending the $.ig.ResponsiveMode Class**](#extending)
    -   [Overview](#extending-overview)
    -   [Property settings](#extending-property-settings)
    -   [Example](#extending-example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> Creating Custom RWD Mode Profiles Overview

If you are targeting a specific device, chances are that the default profile of RWD mode profiles may not suit your needs. In this case, you will want to define a custom RWD mode profile.

When you configure custom RWD mode profiles inline, you implicitly use the `$.ig.ResponsiveMode` class implementation for mode activation. This implementation checks the class( `minWidth`, `maxWidth`, `minHeight` and `maxHeight`) properties for profile activation against the browser’s window height and width( `window.clientWidth` and `window.clientHeight`).

Extending `$.ig.ResponsiveMode` class allows you to implement `$.ig.ResponsiveMode.isActive` method and set various rules for profile activation.

When extending `$.ig.ResponsiveMode` class the following rules apply:

-   Class name convention – your class must be named `$.ig.<custom_class_name>Mode`, where *<custom_class_name>* is the name of your class.
-   Registering the class as a RWD mode profile – declare a custom mode in the `responsiveConfig` property of the RWD Mode feature. In the following code, `<custom_mode_name>` stands for the actual name of the RWD mode profile.

    **In JavaScript:**

    ```js
    responsiveConfig: {    <custom_mode_name>: “<custom_class_name>” }
    ```

    The RWD Mode feature differentiates between two types of `responsiveModes` properties – object properties and string properties:

    -   **Object properties** define inline RWD mode custom profiles, as explained in [Creating Custom RWD Mode Profiles Inline](#inline).
    -   **String properties** define the name of the class which will be used to determine and activate the RWD mode custom profiles, as explained in [Creating Custom RWD Mode Configuration by Extending the $.ig.ResponsiveMode Class](#extending).


### <a id="summary-chart"></a> Creating custom RWD mode profiles summary chart

The following table briefly explains the available alternatives for *creating custom RWD mode*. Additional details are available after the table.

Task | Details | Properties
-----|---------|-----------
[Creating Custom RWD Mode Profiles Inline](#inline) | Inline custom RWD mode profile creation uses `$.ig.ResponsiveMode` class implementation. | [responsiveModes](%%jQueryApiUrl%%/ui.iggridresponsive#options:responsiveModes) <br /> **responsiveModes.&lt;custom_name&gt;**
[Creating Custom RWD Mode Configuration by Extending the $.ig.ResponsiveMode Class](#extending) | By extending `$.ig.ResponsiveMode` you should implement the `$.ig.ResponsiveMode.isActive` function. This offers you greater flexibility to set the rules for mode activation. | [responsiveModes](%%jQueryApiUrl%%/ui.iggridresponsive#options) <br /> **responsiveModes.&lt;custom_name&gt;**





## <a id="inline"></a> Creating Custom RWD Mode Profiles Inline

### <a id="inline-overview"></a> Overview

Inline custom RWD mode profiles are defined directly in the `responsiveModes` property. Configuring custom RWD mode profiles inline includes profiles defining a new property of the `responsiveModes` object, where the property name is used for the RWD mode custom profile name and property values are used as a profile object. This object can have any of the following properties: `minWidth`, `maxWidth`, `minHeight` and `maxHeight`, which define width and height boundaries for mode activation.

The profile object is then used by the RWD Mode feature to create an instance of the `$.ig.ResponsiveMode` class which will determine and activate the correct RWD mode profile.

The `$.ig.ResponsiveMode` class has an `isActive` method which is called by the RWD Mode feature to check for mode activation. The `$.ig.ResponsiveMode.isActive` method implementation uses `minWidth`, `maxWidth`, `minHeight` and `maxHeight` settings and checks them against browser’s `window.innerWidth` and `window.innerHeight` properties.

### <a id="inline-property-settings"></a> Property settings

The following table maps the desired task to the property settings related to it.

In order to: | Use this property: | And set it to:
-------------|--------------------|----------------
Create custom RWD mode profile inline | `responsiveModes.<custom_name>` | An identifier which will be used as a name of the custom responsive mode. <br /> For example: `responsiveModes.galaxyNexusPhone`, where `<custom_name>` = *galaxyNexusPhone*



### <a id="inline-example"></a> Example

The following code demonstrates how to define inline custom RWD mode profile named `customPhone`. The `customPhone` setting is an object with the properties `minWidth` and `maxWidth` defining the width range which will activate the mode based on the screen width (respective height range properties, e.g. `minHeight` and `maxHeight`, are not defined, because covering mode-based changes of the height is beyond the scope of this example). The options defined in `customPhone` are used to initialize the `$.ig.ResponsiveMode` class.

With these settings, the Name column is configured as hidden in `customPhone` mode.

**In JavaScript:**

<div class="embed-sample">
   [Responsive Web Design Mode](%%SamplesEmbedUrl%%/grid/responsive-web-design-mode)
</div>

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<GridDataBinding.Models.Product>
@(Html.Infragistics()
	.Grid(Model)
	.ID("grid1")
	.AutoGenerateColumns(false)
	.Columns(col =>
	{
	    col.For(c => c.ProductID).HeaderText("Product ID");
	    col.For(c => c.Name).HeaderText("Product Name");
	    col.For(c => c.ProductNumber).HeaderText("Product Number");
	})
	.Features(feature =>
	{
	    feature.Responsive().ResponsiveConfig(config => config.AddExplicitMode("customPhone", m => m.MinWidth(0).MaxHeight(767)))
	    .ColumnSettings(cs =>
	    {
	        cs.ColumnSetting().ColumnKey("Name").Configuration(conf => {
	            conf.AddColumnModeConfiguration("customPhone", c => c.Hidden(true));
	        });
	    });
	})
	.DataBind()
	.Render())
```



## <a id="extending"></a> Creating Custom RWD Mode Configuration by Extending the $.ig.ResponsiveMode Class

### <a id="extending-overview"></a> Overview

There are cases when inline defining of RWD mode custom profiles is not suitable for determining the profile. This is the case with the `$.ig.BootstrapMode` class in which [Twitter Bootstrap](http://twitter.github.com/bootstrap/) CSS classes are used to determine the active profile. (Twitter Bootstrap uses [CSS Media Queries](http://www.w3.org/TR/css3-mediaqueries/) to determine which styles are applied to elements in a situation engaging RWD mode). Extending the `$.ig.ResponsiveMode` class allows you to define your custom logic to determine the profile activation by implementing the `$.ig.ResponsiveMode.isActive` method (for example you can check the browser agent string, but this is not a recommended practice). This method should return a Boolean value, which is *true* when the profile is active and *false* otherwise.

Custom profile is created in several steps:

1.  First, you must extend `$.ig.ResponsiveMode` class. This class has settings for `minWidth`, `maxWith`, `minHeight`, `maxHeight` and one function called `isActive` which returns *true* if the mode defined in the settings is currently active and *false* otherwise. Your class should be named `$.ig.<custom_class_name>Mode`, where `<custom_class_name>` is the name of your class.
2.  Declare the custom profile in the `responsiveConfig` property of the feature. Example:

    **In JavaScript:**

    ```js
    responsiveConfig: {    <custom_mode_name>: “<custom_class_name>” }
    ```
	
	Where `<custom_mode_name>` is the name of the profile which you
	will use to configure column hiding and template switching.
	
3.  Use the custom profile to configure column hiding or template switching

	-   Configure column hiding – use the `columnSettings.configuration.<custom_mode_name>` property to configure column hiding for a column.
	-   Configure template switching – use the `columnSettings.configuration` for column template to configure template for the profile.

### <a id="extending-property-settings"></a> Property settings

The following table maps the desired task to the property settings
related to it.

In order to: | Use this property: | And set it to:
-------------|--------------------|----------------
Create custom RWD mode profile by extending `$.ig.ResponsiveMode` class | `responsiveModes.<custom_name>` | A class name in the `$.ig` namespace which extends `$.ig.ResponsiveMode` and has name suffix Mode.


### <a id="extending-example"></a> Example

The following code defines a class `$.ig.CustomPhoneMode` which extends the `$.ig.ResponsiveMode` class. The `minWidth` and `maxWidth` values are set in order to configure RWD mode switching by width. The isActive function calls the base class’s implementation of the `isActive` i.e. `$.ig.ResponsiveMode.isActive` (in real-life situations you will want to put some custom logic instead of calling the base implementation).

> **Note:** This code is common for JavaScript and MVC implementations.

**In JavaScript:**

```js
$.ig.loader(function () {
    $.ig.CustomPhoneMode = $.ig.CustomPhoneMode || $.ig.ResponsiveMode.extend({
        settings: {
            minWidth: 0,
            maxWidth: 767
        },
        init: function (options) {
            this.settings = $.extend(true, {}, $.ig.CustomPhoneMode.prototype.settings, options);
            this._super(this.settings);
            return this;
        },
        isActive: function () {
            return this._super();
        }
    });
});
```

The following code defines new property of the `responsiveModes` object named `custom_phone` which has a value of “CustomPhone”. The RWD Mode feature seeks a class named `$.ig.CustomPhoneMode` which will be used to identify and activate the RWD mode profile.

With these settings, the `Name` column is configured as hidden in `custom_phone` mode.

**In JavaScript:**

```js
$.ig.loader(function () {
    $("#grid1").igGrid({
        width: "100%",
        columns: [
            { headerText: "Product ID", key: "ProductID", dataType: "number"},
            { headerText: "Product Name", key: "Name", dataType: "string" },
            { headerText: "Product Number", key: "ProductNumber", dataType: "string" }
        ],
        autoGenerateColumns: false,
        dataSource: adventureWorks,
        responseDataKey: "Records",
        features: [
        {
            name: "Responsive",
            columnSettings: [
                {
                    columnKey: "Name",
                    configuration: {
                        custom_phone: {
                            hidden: true
                        }
                    }
                }
            ],
            responsiveModes: {
                custom_phone: "CustomPhone"
            }
        }
    ]
    });
});
```

**In C#:**

```csharp
@using Infragistics.Web.Mvc
@model IQueryable<GridDataBinding.Models.Product>
@(Html.Infragistics()
	.Grid(Model)
	.ID("grid1")
	.AutoGenerateColumns(false)
	.Columns(col =>
	{
	    col.For(c => c.ProductID).HeaderText("Product ID");
	    col.For(c => c.Name).HeaderText("Product Name");
	    col.For(c => c.ProductNumber).HeaderText("Product Number");
	})
	.Features(feature =>
	{
	    feature.Responsive().ResponsiveConfig(config => config.AddPredefinedMode("custom_phone", "CustomPhone"))
	    .ColumnSettings(cs =>
	    {
	        cs.ColumnSetting().ColumnKey("Name").Configuration(conf => {
	            conf.AddColumnModeConfiguration("custom_phone", c => c.Hidden(true));
	        });
	    });
	})
	.DataBind()
	.Render())
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Configuring Column Hiding (igGrid, RWD Mode)](igGrid-Responsive-Web-Design-Mode-Configuring-Column-Hiding.html): This topic explains, with code examples, how to configure column hiding for the `igGrid` control in Responsive Web Design (RWD) mode.

- [Configuring Column Templates (igGrid, RWD Mode)](igGrid-Responsive-Web-Design-Mode-Configuring-Row-and-Column-Templates.html): This topic explains, with code examples, how to define column templates for the individual Responsive Web Design (RWD) mode profiles of the `igGrid` control and how to configure automatic change of template when switching the active RWD mode profile.
