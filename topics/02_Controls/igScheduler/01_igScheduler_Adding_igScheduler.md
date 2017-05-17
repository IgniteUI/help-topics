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
- [Preview](#preview)
- [Creating a basic igScheduler implementation, step by step](#basic-implementation)
- [Related topics](#related)

# <a id="adding"></a>Adding igScheduler

## <a id="background"></a>Required Background

The topics listed below are required as a prerequisite to understanding this topic.

-	[igScheduler Overview](igScheduler-Overview.html): This topic provides an overview of the `igScheduler` and its features.

-	[Using Infragistics Loader](Using-Infragistics-Loader.html):
Before we get started we need to make sure we have loaded all of the needed resources. We first need to load the jQuery resources and then we need to add the required Ignite UI resources. There are two ways to add the Ignite UI resources to your project. You can either use the `igLoader` or you can load the required modules separately. For the purpose of our guidance we will use the `igLoader`.

```js
$.ig.loader({
    scriptPath: "../../igniteui/js/",
    cssPath: "../../igniteui/css/",
    resources: "igScheduler"
});
```

## <a id="webpage"></a>Adding an igScheduler to Web Page

### Introduction

This procedure takes you step-by-step toward adding an `igScheduler` to a web page. This sample demonstrates how to instantiate the igScheduler with a Month View and appointments subjects. You can navigate between time periods and create, edit and delete scheduled activities.

### <a id="preview"></a>Preview

The following screenshot is a preview of the final result

![](images/scheduler.png)

### Requirements

To complete the procedure, you need the following:

-   A website and web page on which to add this example
-   The required JavaScript resources and jQuery themes in your website
-   References to the required JavaScript files and CSS files on your web page

## <a id="basic-implementation"></a>Creating a basic igScheduler implementation
The steps below will guide you on how to quickly setup a `igScheduler` component in your page showing more than one appointments.

1. Adding the required JS and CSS files

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

Html div element with id `scheduler` will be wrapped by the `igScheduler widget` on initiallization.

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

## <a id="related"></a>Related Topics

-   [igScheduler Overview](igScheduler-Overview.html)

-	[Configuring igScheduler](igscheduler-Configuring.html)

-	[Styling igScheduler](igscheduler-Using-Themes.html)