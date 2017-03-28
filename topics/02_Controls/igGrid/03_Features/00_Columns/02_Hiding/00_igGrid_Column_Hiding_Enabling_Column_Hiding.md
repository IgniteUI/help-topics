<!--
|metadata|
{
    "fileName": "iggrid-column-hiding-enabling-column-hiding",
    "controlName": "igGrid",
    "tags": ["Getting Started","Grids"]
}
|metadata|
-->

# Enabling Column Hiding (igGrid)

## Topic Overview

### Purpose

This demonstrates how to programmatically hide columns in the `igGrid`™ control.


### In this topic

This topic contains the following sections:

-   [**Introduction**](#introduction)
-   [**Preview**](#preview)
-   [**Requirements**](#requirements)
    -   [General Requirements](#general-requirements)
    -   [Script Requirements](#script-requirements)
    -   [Database Requirements](#database-requirements)
-   [**Enabling column hiding in jQuery**](#enabling-column-hiding-jquery)
-   [**Enabling column hiding in MVC**](#enabling-column-grouping-mvc)
-   [**Keyboard Interactions**](#keyboard-interaction)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)


## <a id="introduction"></a> Introduction

The Column Hiding feature of the `igGrid` control is not enabled by default, so you need to enable it explicitly.

The example below configures a grid with the hiding feature enabled

## <a id="preview"></a> Preview

Following is a preview of the final result (the red arrow points to the hidden column indicator for the hidden SafetyStockLevel column).

![](images/Enabling_Column_Hiding__01.png)

## <a id="requirements"></a> Requirements

### <a id="general-requirements"></a> General requirements

-   jQuery-specific requirements

    -   An HTML web page with a grid connected to a data source
    -   A table tag in the body of the HTML page to serve as a container for the grid

    **In HTML:**

    ```html
    <table id="grid">
    </table>
    ```

-   MVC-specific requirements
    -   An MVC 2 or above project in MS Visual Studio® with a grid connected to a data source
    -   A reference to the Infragistics MVC dll (stores the MVC IG wrappers)

### <a id="script-requirements"></a> Script requirements

-   The required scripts for both jQuery and MVC sample are the same because in the end MVC wrappers just render again jQuery widget. You will need:
    1.  The jQuery library script
    2.  The jQuery UI library
    3.  The Infragistics library script, which is obfuscated code for the controls

The following code sample demonstrates the scripts as added to the header code of the HTML file.

**In HTML:**

```html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery-ui.min.js"></script>
<script type="text/javascript" src="infragistics.core.js"></script><script type="text/javascript" src="infragistics.lob.js"></script>
```

### <a id="database-requirements"></a> Database requirements

For the purpose of this example only:

-   MVC – Adventure Works database

## <a id="enabling-column-hiding-jquery"></a> Enabling column hiding in JQuery

1.  **Set up the data source.**

    The data source used in the following code snipped is for the purpose of this example.

    **In HTML:**

    ```html
    <script type="text/javascript">
    source = [
             { "ProductID": 1, "Name": "Adjustable Race", "SafetyStockLevel": 1000, "ReorderPoint": 750, "StandardCost": 0.0000 }, 
             { "ProductID": 2, "Name": "Bearing Ball", "SafetyStockLevel": 1000, "ReorderPoint": 750, "StandardCost": 0.0000 }, 
             { "ProductID": 3, "Name": "BB Ball Bearing", "SafetyStockLevel": 800, "ReorderPoint": 600, "StandardCost": 0.0000 },
             { "ProductID": 4, "Name": "Headset Ball Bearings", "SafetyStockLevel": 800, "ReorderPoint": 600, "StandardCost": 0.0000 }]

    </script>
    ```

2.  **Create an igGrid with hiding feature.**

    Inside the `$(document).ready()` event handler, you create an igGrid with hiding feature configuration. In the example code below, the column (SafetyStockLevel) is hidden.

    **In Javascript:**

    ```js
    $("#grid").igGrid({
        autoGenerateColumns: true,
           dataSource: source,
           features: [
           {
                name: 'Hiding',
                columnSettings: [
                { 
                    columnKey: 'SafetyStockLevel', 
                    allowHiding: true, 
                    hidden: true
                }]
           }
        ]
    });
    ```

3.  **Save the file.**
4.  (Optional) **Verify the result.**
    1.  To verify the result, open the file. The result should look as shown in the Preview above.

## <a id="enabling-column-grouping-mvc"></a> Enabling column hiding in MVC

1.  **Create an MVC Controller method.**

    Create an MVC Controller method to get data from the Model and will call the View.

    **In MVC:**

    ```csharp
    public ActionResult Default()
    {
        var ds = this.DataRepository.GetDataContext().Products.Take(4);
        return View(ds);
    }
    ```

2.  **Instantiate the igGrid.**

    Instantiate the igGrid with Hiding feature enabled.

    **In ASPX:**

    ```csharp
    <%= Html.Infragistics().Grid(Model)
        .AutoGenerateColumns(true)
        .Features(feature =>{
            feature.Hiding().ColumnSettings(settings => settings.ColumnSetting().ColumnKey("SafetyStockLevel").Hidden(true).AllowHiding(true));
            }).DataBind()
        .Render()
    %>
    ```

    **In Razor:**

    ```csharp
    @( Html.Infragistics().Grid(Model)
        .AutoGenerateColumns(true)
        .Features(feature =>{
            feature.Hiding().ColumnSettings(settings => settings.ColumnSetting().ColumnKey("SafetyStockLevel").Hidden(true).AllowHiding(true));
            }).DataBind()
        .Render()
    )
    ```

3.  **Save file.**
4.  (Optional) **Verify the result.**
    1.  To verify the result, run the MVC project.
    2.  To verify the result, open the file. The result should look as shown in the Preview above.

## <a id="keyboard-interaction"></a> Keyboard Interactions

The following keyboard interactions are available.

When focus is on the grid:

-	TAB: Can move focus between the focusable elements of the hiding UI: column header hiding indicator. 

When focus is on the header’s hiding indicator:

-	ENTER: The column will be hidden.

When focus is on the column chooser dialog:

-	TAB: Can move focus between the focusable elements of the dialog: Show/Hide buttons in the column chooser, the reset button and the Apply/Cancel buttons.

When focus is on one of those elements:

-	ENTER: Changes the state of the Show/Hide button. Also if the focus is on the “Apply” or “Cancel” button the changes are applied or discarded.	
	
## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [igGrid Configuration: Columns](igGrid-Configure-Column-Hiding.html)
- [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)
- [Styling and Theming in Ignite UI](Deployment-Guide-Styling-and-Theming.html)

### <a id="samples"></a> Samples

The following sample provides additional information related to this topic.

- [Column Management](%%SamplesUrl%%/grid/column-management)

 

 


