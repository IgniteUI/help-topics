<!--
|metadata|
{
    "fileName": "igtimepicker-overview",
    "controlName": "igEditors",
    "tags": ["Editing","Getting Started"]
}
|metadata|
-->

# igTimePicker Overview


The %%ProductName%%™ `igTimePicker` allows you to have an input field with time-only input and a drop-down with listed hours:minutes values. By default, the listed values are with 30 minutes time delta. 

The igTimePicker's input and display time format are configurable. By default, the control uses a 12-hour format.

Depending on the specified time format (12-hour or 24-hour format), the drop-down list begins with 12:00 AM or 00:00 AM and ends with 11:30 PM or 23:30 PM.

The control supports localization, by recognizing different regional options provided by the browser.

The `igTimePicker` control exposes a rich client-side API, which may be configured to work with any server technology. While the %%ProductName%%™ controls are server-agnostic, the picker control provides wrappers specific for the Microsoft® ASP.NET MVC Framework to configure the control with the .NET™ language of your choice.

The `igTimePicker` control may be extensively styled giving you an opportunity to provide a completely different look and feel for the control as opposed to the default style. Styling options include using your own styles as well as styles from jQuery UI's ThemeRoller.

Figure 1: The igTimePicker control during time selection

![](images/igTimePicker_Overview_01.png)

-   [igTimePicker Sample](http://https://www.igniteui.com/editors/time-picker-overview)


## Features

The `igTimePicker` includes the following characteristics:

-   Overall theme support
-   Validation
-   Defining custom input format
-   Defining custom display format
-   Min/Max values
-   Localization
-   JavaScript Client API
-   ASP.NET MVC wrapper

## Adding igTimePicker to a Web Page

1.  To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in  %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) help topic.
2.  On your HTML page or ASP.NET MVC View, reference the required JavaScript files, CSS files, and ASP.NET MVC assemblies.

    **In HTML:**

    ```html
    <link type="text/css" href="/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link type="text/css" href="/css/structure/infragistics.css" rel="stylesheet" />
    <script type="text/javascript" src="/Scripts/jquery.min.js"></script>
    <script type="text/javascript" src="/Scripts/jquery-ui.min.js"></script>
    ```

    **In Razor:**

    ```csharp
    @using Infragistics.Web.Mvc;

    <link type="text/css" href="@Url.Content("~/css/themes/infragistics/infragistics.theme.css")" rel="stylesheet" />
    <link type="text/css" href="@Url.Content("~/css/structure/infragistics.css")" rel="stylesheet" />

    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-1.9.1.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/jquery-ui.min.js")"></script>
    <script type="text/javascript" src="@Url.Content("~/Scripts/Samples/infragistics.core.js")"></script>
    ```

3.  For jQuery implementations, create an INPUT, DIV or SPAN as a target element in HTML. This step is optional for ASP.NET MVC implementations as the MVC wrapper creates the containing element for you.

    **In HTML:**

    ```html
    <input id="timePicker"/>
    ```

4. Once the above setup is complete, initialize the time picker.

    > **Note:** For the ASP.NET MVC Views, the `Render` method must be called after all other options are set.

    **In Javascript:**

    ```js
    <script type="text/javascript">
          $('#timePicker').igTimePicker();
    </script>
    ```

    **In Razor:**

    ```csharp
    @(Html.Infragistics().TimePicker()
                 .ID("timePicker")
                 .Render())
    ```

5.  Run the web page to view the basic setup of the `igTimePicker` control.