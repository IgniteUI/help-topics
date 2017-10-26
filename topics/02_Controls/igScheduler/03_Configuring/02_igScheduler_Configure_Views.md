<!--
|metadata|
{
    "fileName": "igscheduler-configure-views",
    "controlName": "igScheduler",
    "tags": ["views"]
}
|metadata|
-->

# Configuring Views (igScheduler)


## Purpose

The topics in this section provide information about the different views used by the `igScheduler` control to present calendar data.

## Overview

The igScheduler control can be configured to present calendar information in different ways called "views". The view type can be configured using the [ViewMode](%%jQueryApiUrl%%/ui.igscheduler#options:viewMode) property.

## Required Background

Topic |	Purpose
---|---
[Overview (igScheduler)](igScheduler-Overview.html) | This topic provides conceptual information for the `igScheduler`™ control including information regarding: features, configuration, requirements and theming.
[Configuring Appointments (igScheduler)](igScheduler-Configure-Appointments.html) | This topic shows how to setup and configure Appointments DataSource for the `igScheduler`.
 [Configuring Resources (igScheduler)](igScheduler-Configure-Resources.html) | The topics in this section provide information about the resources concept of the `igScheduler` control.

## Agenda View

This topic explains how data is presented in the `igScheduler`'s agenda view.

### Configuring

The following table maps some configurable aspect/behavior of the agenda view to the property that is responsible for:

Aspect | Description | Property
---|---|---
Amount of visible days| Configure the the amount of days in the agenda view. | [dateRangeInterval](%%jQueryApiUrl%%/ui.igscheduler#options:agendaViewSettings.dateRangeInterval)

The following table maps some of the user interactions to the events that are raised by the control:

User Interaction | Description | Event
---|---|--
Changed the range | Fired after agenda view range is changed when using previous and next buttons. | [agendaRangeChanged](%%jQueryApiUrl%%/ui.igscheduler#events:agendaRangeChanged)
Changing the range | Fired before agenda view range is changed when using previous and next buttons. | [agendaRangeChanging](%%jQueryApiUrl%%/ui.igscheduler#events:agendaRangeChanging)

## Month View

This topic explains how data is presented in the igScheduler's month view.

### Configuring

The following table maps some configurable aspect/behavior of the month view to the property/method that is responsible for:

Aspect | Description | Property
---|---|---
Agenda visible appointments | The scope of appointments that are displayed in a MonthView's AgendaView | [agendaVisibilityType](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.agendaVisibilityType)
Appointment indicator mode | The type of content displayed for appointment in a MonthView day. | [appointmentMode](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.appointmentMode)
Agenda visibility | Controls the visibility of an AgendaView in a MonthView. When enabled, the MonthView will display an AgendaView showing the Appointments for the currently selected day at the top of its list of Appointments. | [isAgendaVisible](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isAgendaVisible)
Horizontal Separator | Controls the visibility of the horizontal separators between weeks in the MonthView | [isHorizontalSeparatorVisibile](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isHorizontalSeparatorVisibile)
Days visibility from the next month | Controls the visibility of the days from the next month that occur in the last week of a given month. | [isNextMonthShown](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isNextMonthShown)
Days visibility from the previous month | Controls the visibility of the days from the previous month that occur in the last week of a given month. | [isPreviousMonthShown](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isPreviousMonthShown)
Vertical separator between days | Controls the visibility of the vertical separators between days of the week in a MonthView. | [isVerticalSeparatorVisibile](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isVerticalSeparatorVisibile)
Weekdays names visibility | Controls the visibility of the weekday names in MonthView. | [isWeekdayVisible](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isWeekdayVisible)
Week number visibility | Controls the visibility of the week numbers in a MonthView. | [isWeekNumberVisible](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.isWeekNumberVisible)
Agenda - Month view split orientation | Controls the orientation, which determines whether the MonthView and AgendaView views are split vertically or horizontally. This option can be used when the AgendaView is displayed in the MonthView.
 | [viewSplitOrientation](%%jQueryApiUrl%%/ui.igscheduler#options:monthViewSettings.viewSplitOrientation)

## Week View

This topic explains how data is presented in the igScheduler's week view.

### Configuring

The following table maps some configurable aspect/behavior of the week view to the corresponding property/method:

Aspect | Description | Property
---|---|---
Display mode | The week view can be configured to show all 7 week days or only the days configured as working days. | [weekViewDisplayMode](%%jQueryApiUrl%%/ui.igscheduler#options:weekViewSettings.weekViewDisplayMode)
Time slot duration | Configure the time slots' duration. Currently 5, 6, 10, 15, 30 and 60 minutes are supported. | [timeSlotInterval](%%jQueryApiUrl%%/ui.igscheduler#options:weekViewSettings.timeSlotInterval)
Working days and hours | You can configure this view to display only working hours or all 24 hours. | [workingHoursDisplayMode](%%jQueryApiUrl%%/ui.igscheduler#options:weekViewSettings.workingHoursDisplayMode)

## Day View

This topic explains how data is presented in the igScheduler's day view.

### Configuring

The following table maps some configurable aspect/behavior of the day view to the property/method that is responsible for:

Aspect | Description | Property
---|---|---
Visible days | You can control how many days are visible at a time in the day view. Currently between 1 and 7 days are supported. | [dayViewNumberOfDays](%%jQueryApiUrl%%/ui.igscheduler#options:dayViewSettings.dayViewNumberOfDays)
Time slot duration | Configure the time slots' duration. Currently 5, 6, 10, 15, 30 and 60 minutes are supported. | [timeSlotInterval](%%jQueryApiUrl%%/ui.igscheduler#options:dayViewSettings.timeSlotInterval)
Working days and hours | You can configure this view to display only working hours or all 24 hours. | [workingHoursDisplayMode](%%jQueryApiUrl%%/ui.igscheduler#options:dayViewSettings.workingHoursDisplayMode)


# Related topics

Topic | Purpose
---|---
[Configuring Appointments (igScheduler)](igScheduler-Configure-Appointments.html) | This topic shows how to setup and configure Appointments DataSource for the `igScheduler`.
[Configuring Resources (igScheduler)](igScheduler-Configure-Resources.html): This topic shows how to add and configure Resources list for the appointments.