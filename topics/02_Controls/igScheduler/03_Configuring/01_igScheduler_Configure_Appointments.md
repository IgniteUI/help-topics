<!--
|metadata|
{
    "fileName": "igscheduler-configure-appointments",
    "controlName": "igScheduler",
    "tags": ["appointments"]
}
|metadata|
-->

# Configuring Appointments (igScheduler)


## Purpose

This topic explains how to bind, create, update and delete appointments in the `igScheduler` control.

## Overview

The appointments are used to represent an event which starts at a specific time and ends at a specific time. The appointment can be associated with resource

## Appointment object properties

The following table lists the Appointment's key properties and their purpose:

Property |	Purpose 
---|---
id | This property is used to distinguish this activity amongst all other appointments. It must be unique. | 
subject | This `string` property is used as short description of the activity it is the main information shown in the control’s views and therefor used to distinguish a specific appointment amongst the other appointments.
location| This `string` property is used to store the location where the appointment should take place.
start | This `Date` property contains the start date and time of the appointment.
end | This `Date` property contains the end date and time of the appointment.
resourceId | This property is used to associate the current appointment with a resource.

### Code example

The appointments are instance of [$.ig.DataSource](%%jQueryApiUrl%%/ig.datasource) passed to the appointmentItemsSource of the `ScheduleListDataSource`.

```javascript
var appointments = [{
        "id": 11,
        "start": new Date(currentYear, currentMonth, 2, 6, 45),
        "end": new Date(currentYear, currentMonth, 3, 6, 45),
        "subject": "Marketing conference",
		"resourceId": 1
    },
    {
        "id": 5,
        "end": new Date(currentYear, currentMonth, 3, 12, 45),
        "start": new Date(currentYear, currentMonth, 3, 13, 45),
        "subject": "Dentist appointment"
		"resourceId": 6
    },
    {
        "id": 10,
        "start": new Date(currentYear, currentMonth, 4, 8),
        "end": new Date(currentYear, currentMonth, 4, 8, 30),
        "subject": "Distributions sync",
        "description": "Sync with distributions team"
		"resourceId": 11
    }
],
scheduleListDataSource = new $.ig.scheduler.ScheduleListDataSource();

scheduleListDataSource.appointmentItemsSource(resources);

$("#scheduler").igScheduler({
    height: "650px",
    width: "100%",
    dataSource: scheduleListDataSource
});

```

## Finding appointment by ID

Appointments can be accessed by id using the [getAppointmentById method](%%jQueryApiUrl%%/ui.igscheduler#methods:getAppointmentById)

### Code example

```javascript
var appointment = $("#scheduler").igScheduler("getAppointmentById", 4);
```

## Adding appointment through the API

Appointments can be added through [createAppointment method](%%jQueryApiUrl%%/ui.igscheduler#methods:createAppointment) by passing as the argument appointment object.

### Code example

```javascript
var appointment = $("#scheduler").igScheduler("createAppointment", {
    id: 1,
    subject: "Some subject",
    location: "Somewhere",
    start: new Date(2017, 04, 05, 12, 30),
    end: new Date(2017, 04, 05, 12, 30),
    resourceId: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
});
```

## Editing appointment through the API

Appointments can be edited through [editAppointment method](%%jQueryApiUrl%%/ui.igscheduler#methods:editAppointment) by passing as argument the appointment object and object containing tha properties that will be changed.

### Code example

```javascript
var appointment = var appointment = $("#scheduler").igScheduler("getAppointmentById", 4);

$("#scheduler").igScheduler("editAppointment", appointment, {
    subject: "Some subject",
    location: "Somewhere",
    start: new Date(2017, 04, 05, 12, 30),
    end: new Date(2017, 04, 05, 12, 30),
    resourceId: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit."
});
```

## Deleting appointment through the API

Appointments can be deleted through [deleteAppointment method](%%jQueryApiUrl%%/ui.igscheduler#methods:deleteAppointment) by passing as argument the appointment object.

### Code example

```javascript
var appointment = var appointment = $("#scheduler").igScheduler("getAppointmentById", 4);

$("#scheduler").igScheduler("deleteAppointment", appointment);
```

## Related topics

Topic | Purpose
---|---
[Configuring Appointments (igScheduler)](igScheduler-Configure-Appointments.html) | This topic shows how to setup and configure Appointments DataSource for the `igScheduler`.