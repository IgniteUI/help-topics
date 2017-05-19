<!--
|metadata|
{
    "fileName": "igscheduler-configure-resources",
    "controlName": "igScheduler",
    "tags": ["resources"]
}
|metadata|
-->

# Configuring Resources (igScheduler)


## Purpose

The topics in this section provide information about the resources concept of the `igScheduler` control.

## Overview

In order to distinguish activities' owner the `igScheduler` control supports Resources. A resource may be a person or some other entity which owns one or more activities. Every resource needs to have a unique id.

## Resource object properties

The following table lists the Resource's key properties and their purpose:

Property |	Purpose
---|---
id | The resource’s ID must be unique amongst all resources.
displayName | The display name identifies a resource in the application’s user interface.
colorScheme | The color scheme is used to highlight the activities associated with this resource. The color scheme is optional, and is auto generated from one when not set. Color scheme can be set by using the `$.ig.scheduler.ScheduleResourceColorScheme` enumeration.

## Resources color scheme
There are 12 color predefined for the color scheme of the resources which can be used. `Stone` color is applied only when no resource is associated with appointment and cannot be set manually. 

![Resources color scheme](../images/preDefinedColors.png)

### Code example

The resources are passed to the resourceItemsSource of the `ScheduleListDataSource` as array of objects. 

```javascript
var resources = [
	{ id: 1, displayName: "Trina Friesen" },
	{ id: 2, displayName: "Mack Koch" },
	{ id: 3, displayName: "Burney O'Kon" },
	{ id: 4, displayName: "Dawson Rohan" },
	{ id: 5, displayName: "Cain Schmidt" },
	{ id: 6, displayName: "Jesenia Rogahn" },
	{ id: 7, displayName: "Tod Heller" },
	{ id: 8, displayName: "Rhonda Cormier" },
	{ id: 9, displayName: "Hayden Lockman" },
	{ id: 10, displayName: "Tierra Witting" },
	{ id: 11, displayName: "Roderic Considine" }
],
scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource();

scheduleListDataSource.resourceItemsSource(resources);

$("#scheduler").igScheduler({
    height: "650px",
    width: "100%",
    dataSource: scheduleListDataSource
});

```

## Related topics

Topic | Purpose
---|---
[Configuring Appointments (igScheduler)](igScheduler-Configure-Appointments.html) | This topic shows how to setup and configure Appointments DataSource for the `igScheduler`.
[Configuring Views (igScheduler)](igScheduler-Configure-Views.html): The topics in this section provide information about the different views used by the  `igScheduler` control to present calendar data.