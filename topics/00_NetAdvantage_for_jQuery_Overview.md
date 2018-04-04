<!--
|metadata|
{
    "fileName": "netadvantage-for-jquery-overview",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# %%ProductName%% Overview

## The jQuery JavaScript Library
The [jQuery](http://jquery.com/) JavaScript library has become one of the most widely-used JavaScript libraries found on the web. jQuery’s browser abstraction layer along with the built-in DOM selection engine make the library a solid platform for constructing UI components and controls. Built on top of the jQuery core, the jQuery UI library provides widgets and interactions for designing highly interactive and responsive web user interfaces.

Benefits of using jQuery include:

-   Cross-Browser Support
-   Plug-in Extensibility
-   CSS Manipulation
-   Utility Functions
-   AJAX
-   Effects and Animations
-   Common Styling Framework with jQuery UI
-   Fast User Interface Performance
-   Feature-Rich UI Widgets
-   HTML 5 Support and Fallback

## Client-Side Development with jQuery, jQuery UI, and HTML5
All major browser vendors have made significant improvements in JavaScript performance in the past several years. These improvements combined with the emergence of HTML 5 standards have contributed to make web applications first-class citizens in modern computing environments. %%ProductName%%™ is built to meet the demands of modern web applications with light-weight, fully-functional, and touch-supported UI components including:

-   Charts
-   Gauges
-   Motion Framework
-   Combo box
-   JavaScript and CSS resources loader
-   Layout Manager
-   Grid and Hierarchical Grid with Selection, Sorting, Filtering, Paging, Updating, Grouping, Column Hiding, Resizing, Row Selectors, Tooltips, Column Summaries, Editors, Virtualization, Multi-Column Headers, REST Support, Column Moving
-   Pivot Grid
-   QR Barcode
-   Text Editor
-   Mask Editor
-   Date Editor
-   Numeric Editor
-   Percent Editor
-   Currency Editor
-   Date Picker
-   Dialog
-   Splitter
-   Templating Engine
-   Tree with Drag-and-Drop
-   Tile Manager
-   File Upload
-   HTML 5 Video Player
-   HTML Editor
-   Rating

## Mobile Client-Side Development with jQuery Mobile

The jQuery Mobile framework is a unified, HTML5-based user interface system for all popular mobile device platforms, built on the rock-solid jQuery and jQuery UI foundation. Its lightweight code base is built with progressive enhancement, and has a flexible, easily theme-able design. Mobile devices are becoming a popular way to access web applications over a network. Many mobile browsers also comply with HTML5, CSS3, and JavaScript standards to the same degree as their desktop counterparts. %%ProductName%%™ is built to meet the demands of mobile web applications with light-weight, fully-functional and touch-supported UI components including:

-   List View
-   Rating with null support and hover

In addition to those two controls, %%ProductName%%™ includes a set of ASP.NET MVC helpers to add standard jQuery Mobile widgets to ASP.NET views using Razor and ASPX syntax. This speeds up development in an ASP.NET MVC project. The ASP.NET MVC helpers support the following controls:

-   Button
-   Check Box
-   Check Box Group
-   Link
-   List View
-   Nav Bar
-   Page
-   Page Content
-   Page Footer
-   Page Content
-   Popup
-   Radio Button Group
-   Select Menu
-   Slider
-   Text Box
-   Toogle Switch

## Server-Side Options
Most of the functionality of %%ProductName%% is available in the browser independent of any particular server framework. Whether using Microsoft® ASP.NET™ Web Forms, ASP.NET MVC, PHP, Java™, Python™ or Ruby on Rails® you are free to choose the server-side technology that best suits your needs.

> **Note:** The igUpload control, while built with jQuery on the client, depends on a server-side counterpart to fully realize its function. An ASP.NET MVC helper is included.

## Product Architecture

### jQuery UI Widgets

The user interface components in %%ProductName%% are built with the jQuery UI framework as their foundation. This means they are created and run in the browser and in most cases do not require any server development. The jQuery UI framework provides a common API, theming and interaction model for the controls that is familiar to anyone already using jQuery and jQuery UI.

### Client-Side DataSource

The data source component, igDataSource, is a client-side JavaScript class that manipulates data through data binding, paging, sorting and filtering collections of data whether local to the client or remote from a web server. Supported remote data formats include: REST, JSON, XML, JSONP and oData. No server-side data binding is required to build data-driven web applications and data-binding operations are available to the client where Ajax can support seamless client-server communication.

### ASP.NET MVC Helpers

%%ProductName%% includes a .NET™ assembly for ASP.NET MVC. This assembly provides .NET developers the ability to interact with the jQuery widgets on the server. Developers using any CLR language can set options on the %%ProductName%% widgets on the server in order emit the appropriate jQuery and HTML to the client.

The ASP.NET MVC Helpers give you the flexibility to implement different server-side ViewModel patterns. The helper API also supports a fluent syntax for use in both Web Forms and Razor View Engine templates.

### ASP.NET MVC Templates

%%ProductName%% includes Visual Studio project templates for ASP.NET MVC 3 and 4. These templates provide a starter web application including all required resources to run a web application with Infragistics controls.

### Infragistics Themes and ThemeRoller

%%ProductName%% widgets, like other jQuery widgets, utilize the jQuery UI CSS Framework for styling. Included in the product are custom jQuery UI themes including `infragistics` and `metro`.

The `infragistics` theme provides a professional and attractive design to all Infragistics and standard jQuery UI widgets. The *metro* theme gives a native Metro UI look and feel to %%ProductName%% controls for upcoming versions of Microsoft® Windows®.

For mobile controls, six themes are included with the %%ProductName%% library to provide native styling for mobile device platforms including: Android, iOS, and Windows Phone. For Android, three different color sets are provided: `holodark`, `hololight`, `hololightdark`. The Windows Phone theme also has two different appearances: `dark` and `light`. The `ios` theme provides a native look and feel for devices running on the iOS platform.

ThemeRoller is a tool provided by jQuery UI and jQuery Mobile which facilitates the creation of custom themes that are compatible with jQuery UI and jQuery Mobile widgets. Many pre-built themes are available for download to use in your website. The Infragistics jQuery widgets support the use of ThemeRoller themes.

## Samples and Installation

### Ignite UI CLI

The easiest way to get started with using Ignite UI for JavaScript is via the Ignite UI CLI. 
It is a tool to initialize, develop, scaffold  and maintain applications in a wide variety of frameworks. The CLI provides you with [predefined templates](https://github.com/IgniteUI/igniteui-cli/wiki/add) for Ignite UI for JavaScript controls.<br/>
You can create projects and add Ignite UI for JavaScript controls in [jQuery](https://jquery.com), [Angular](https://angular.io) or [React](https://reactjs.org), executing the very same commands.<br/>
While creating your application, Ignite UI for JavaScript will be automatically installed as an npm module to your project. This means that you will not need to install manually and manage the required resources - executing a few simple commands and the CLI will do the work for you!

### Microsoft Windows

Available for download from the Infragistics web site is an automated installer for Windows that will install the following items:

-   JavaScript Resources
-   Themes and CSS
-   ASP.NET MVC Samples Browser
-   ASP.NET MVC Helper Assembies
-   ASP.NET MVC Templates
-   Getting Started Demos
-   HTML Demos
-   Help Documentation

### Other Operating Systems

Also available for download from the Infragistics web site is a package which includes the following:

-   JavaScript Resources
-   Themes and CSS
-   Getting Started Demos
-   HTML Demos
-   Help Documentation

> **Note:** The trial download package contains only the minified JavaScript and CSS files.

## External References

-   [jQuery UI](http://jqueryui.com/)
-   [Working with jQuery Widgets](http://learn.jquery.com/jquery-ui/getting-started/#basic-overview-using-jquery-ui-on-a-web-page)
-   [jQuery Themeroller](http://jqueryui.com/themeroller/)
-   [Theming jQuery UI](http://docs.jquery.com/UI/Theming)
-   [jQuery UI CSS Framework](http://docs.jquery.com/UI/Theming/API)
-   [ASP.NET MVC](http://www.asp.net/mvc)

## Related Items
-   [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html)
-   [JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html)
-   [Styling and Theming %%ProductName%%](Deployment-Guide-Styling-and-Theming.html)
