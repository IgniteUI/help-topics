﻿<!--
|metadata|
{
    "fileName": "igscheduler-configure-recurrence",
    "controlName": "igScheduler",
    "tags": ["recurrence"]
}
|metadata|
-->

# Configuring Recurrence (igScheduler)


## Purpose

The topics in this section provide information about the recurrence concept of the `igScheduler` control.

## Overview

The activity recurrence is used when you need to have repetitions of an activity following a specific recurrence pattern (for example each day at a specific hour or each month at a specific date).

In order to create recurrence you can follow these steps:
1.	Select the day for your activity (from the scheduler month view for example) and choose `Create appointment` button after the notifier shows up.
2.	Fill in the required fields from `Create New Appointment` dialog that will be used for the new appointment instance.
3.	Check `Recurring event` checkbox and set `Frequency` and `Count`.
4.	Press `Create` button

![](../images/recurrenceCreation.png)

## Recurrence object properties

The following table lists the Recurrence properties and their purpose:

Property |	Purpose
---|---
recurrence | Gets/Sets a recurrence pattern for the recurrence root activity. Example `FREQ=DAILY;INTERVAL=1;COUNT=2;WKST=MO`
isRecurrenceRoot | A boolean property indicating if the activity is a recurrence root activity..
recurrenceRoot | Returns the `root recurrence activity` or `null` if the activity is not associated with a recurrence.
recurrenceId | Returns the `ID` of the `root recurrence activity` or `null` if the activity is not associated with a recurrence.

### Code example

The following code example demonstrates how to create a recurrent appointment with a monthly recurrence rule and 5 repetitions:


```javascript
var recurrence = new $.ig.scheduler.DateRecurrence();
	recurrence.frequency($.ig.scheduler.DateRecurrenceFrequency.weekly);
	recurrence.count(5);


var dentistAppointment = {
            "start": new Date(2017, 9, 18, 15, 30),
            "end": new Date(2017, 9, 19, 0, 0),
            "subject": "Dentist appointment",
            "location": "Sofia, Iztok, str. Tintyava 28",
            "description": "Bring all the papers",
            "resourceId": 8,
            "recurrence": recurrence
        };

$("#scheduler").igScheduler("createAppointment", dentistAppointment);
```
*Note:*
`Recurrence` field can accept data in format `'FREQ=MONTHLY;INTERVAL=1;COUNT=2;WKST=MO'`, `start` and `end` fields accept a JavaScript date object or a string `'18/10/2018'`.

## Related topics

Topic | Purpose
---|---
[Configuring Appointments (igScheduler)](igScheduler-Configure-Appointments.html) | This topic shows how to setup and configure Appointments DataSource for the `igScheduler`.
[Configuring Views (igScheduler)](igScheduler-Configure-Views.html): The topics in this section provide information about the different views used by the  `igScheduler` control to present calendar data.