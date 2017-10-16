<!--
|metadata|
{
    "fileName": "igscheduler-adding-igscheduler",
    "controlName": "igScheduler",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->
## Topic Overview and Purpose

The `igScheduler` can be configured to run using jQuery. This help topic demonstrates how to setup a basic `igScheduler` control.

## In this topic

This topic contains the following sections:

- [Adding igScheduler](#adding)
- [Required Background](#background)
- [Adding an igScheduler to Web Page](#webpage)
- [Creating a basic igScheduler implementation, step by step](#basic-implementation)
- [Result](#result)
- [Related topics](#related)

# <a id="adding"></a>Adding igScheduler

## <a id="background"></a>Required Background

The topics listed below are required as a prerequisite to understanding this topic.

- [igScheduler Overview](igScheduler-Overview.html): This topic provides an overview of the `igScheduler` and its features.

- [Using Infragistics Loader](Using-Infragistics-Loader.html):
Before we get started we need to make sure we have loaded all of the needed resources. We first need to load the jQuery resources and then we need to add the required Ignite UI resources. There are three ways to add the Ignite UI resources to your project. You can either use the `igLoader`, you can load the required modules separately or use the bundled files that combine all the required resources. You can find those approaches below:

```js
$.ig.loader({
    scriptPath: "../../igniteui/js/",
    cssPath: "../../igniteui/css/",
    resources: "igScheduler"
});
```

Load bundled modules
```html
<script src="igniteui/js/infragistics.core.js"></script>
<script src="igniteui/js/infragistics.lob.js"></script>
<script src="igniteui/js/infragistics.scheduler-bundled.js"></script>
```

## <a id="webpage"></a>Adding an igScheduler to Web Page

### Introduction

This procedure takes you step-by-step toward adding an `igScheduler` to a web page. This sample demonstrates how to instantiate the igScheduler with a Month View and appointments subjects. You can navigate between time periods and create, edit and delete scheduled activities.


### Requirements

To complete the procedure, you need the following:

-   A website and web page on which to add this example
-   The required JavaScript resources and jQuery themes in your website
-   References to the required JavaScript files and CSS files on your web page

## <a id="basic-implementation"></a>Creating a basic igScheduler implementation
The steps below will guide you on how to quickly setup a `igScheduler` component in your page showing more than one appointments.

1. Adding the required JS and CSS files

    1.1. By using igLoader
Use the loader in order to load the combined JavaScript and CSS files referenced locally in the application.

```html
<head>
    <title>igScheduler example</title>
    <script src="http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js"></script>
    <script src="http://code.jquery.com/jquery-1.11.3.min.js"></script>
    <script src="http://code.jquery.com/ui/1.11.1/jquery-ui.min.js"></script>

    <script src="../IgniteUI/js/infragistics.loader.js"></script>
    <script src="../data-files/scheduler-data.js"></script>
</head>
<body>
    <div id="scheduler"></div>
    <script>
        $.ig.loader({
            scriptPath: "http://dev.igniteui.local/17-1/IgniteUI/js/",
            cssPath: "http://dev.igniteui.local/17-1/IgniteUI/css/",
            resources: "igScheduler"
        });

.....
```

Html div element with id `scheduler` will be wrapped by the `igScheduler widget` on initialization.

    1.2. Load modules separately

```html
<link type="text/css" href="ignite-ui/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.shared.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.editors.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.popover.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.notifier.css" rel="stylesheet" />

<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.toolbarbutton.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.splitbutton.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.colorpicker.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.combo.css" rel="stylesheet" />
<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.scroll.css" rel="stylesheet" />

<link type="text/css" href="ignite-ui/css/structure/modules/infragistics.ui.scheduler.css" rel="stylesheet" />

<script type="text/javascript" src="http://ajax.aspnetcdn.com/ajax/modernizr/modernizr-2.8.3.js"></script>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.11.3.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.11.1/jquery-ui.js"></script>

<script type="text/javascript" src="ignite-ui/js/modules/infragistics.util.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.util.jquery.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.datasource.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.templating.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.scroll.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.shared.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.popover.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.notifier.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.validator.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.combo.js"></script>
<script type="text/javascript" src="ignite-ui/js/modules/infragistics.ui.editors.js"></script>

<!-- ext -->
<script src="ignite-ui/js/modules/infragistics.ext_core.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_text.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_collections.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_io.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_ui.js"></script>
<script src="ignite-ui/js/modules/infragistics.dv_jquerydom.js" ></script>
<script src="ignite-ui/js/modules/infragistics.ext_collectionsExtended.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_threading.js"></script>
<script src="ignite-ui/js/modules/infragistics.ext_web.js"></script>

<!-- xml -->
<script src="ignite-ui/js/modules/infragistics.xml.js"></script>

<!-- dv -->
<script src="ignite-ui/js/modules/infragistics.dv_core.js"></script>
<script src="ignite-ui/js/modules/infragistics.dv_jquerydom.js"></script>

<!-- scheduler -->
<script src="ignite-ui/js/modules/infragistics.scheduler.core.js"></script>
<script src="ignite-ui/js/modules/infragistics.ui.scheduler.core.js"></script>
<script src="ignite-ui/js/modules/infragistics.ui.scheduler.js"></script>
```

    1.3. Load bundled modules
    
```html
<script src="igniteui/js/infragistics.core.js"></script>
<script src="igniteui/js/infragistics.lob.js"></script>
<script src="igniteui/js/infragistics.scheduler-bundled.js"></script>
```

2. Load the data that will be used by the `igScheduler`. In the example `igDataSource` is used to create a schedule list data source.

```javascript
...
$.ig.loader(function () {
    var scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource(),
        appointmentsDS = new $.ig.DataSource({
            primaryKey: "id",
            dataSource: appointments
        });

    appointmentsDS.dataBind();

    scheduleListDataSource.resourceItemsSource(resources);
    scheduleListDataSource.appointmentItemsSource(appointmentsDS);
...
```
3. Assign the data source.

```javascript
$("#scheduler").igScheduler({
    height: "650px",
    width: "100%",
    selectedDate: today,
    dataSource: scheduleListDataSource
});
```

### <a id="result"></a>Result

The following screenshot is a preview of the final result

![](images/scheduler.png)

## <a id="related"></a>Related Topics

-   [igScheduler Overview](igScheduler-Overview.html)

-	[Configuring igScheduler](igscheduler-Configuring.html)

-	[Styling igScheduler](igscheduler-Using-Themes.html)