<!--
|metadata|
{
    "fileName": "tag-helpers",
    "controlName": "",
    "tags": ["ASP.NET MVC","Getting Started", "TagHelpers"]
}
|metadata|
-->

# Using Ignite UI Tag Helpers

## Topic Overview

This topic demonstrates how to configure Ignite UI™ components by using the Tag Helpers syntax introduced in the new ASP.NET Core 1.0

### In this topic

This topic contains the following sections:

-   [Adding Tag Helpers to scope of the view](#addtaghelper)
-   [Configuring data bound control](#control-configuration)
-   [Related Content](#related)

## <a id="addtaghelper"></a> Adding Tag Helpers to scope of the view

To add all Ignite UI Tag Helpers to the current view scope, the @addTagHelper directive is used:

```csharp
@using Infragistics.Web.Mvc

@addTagHelper "Infragistics.Web.Mvc.TagHelpers.*, Infragistics.Web.Mvc"
```

The namespace using is not required if no enumeration options are used. 
In order to register only a specific control to the view, the namespace of the control Tag Helper should be specified by ending with wildcard (*).

For example if the igGrid should be only registered:

```csharp
@using Infragistics.Web.Mvc

@addTagHelper "Infragistics.Web.Mvc.TagHelpers.Grids.Grid.*, Infragistics.Web.Mvc"
```

## <a id="control-configuration"></a> Configuring data bound control

In this section we will demonstrate how to configure igGrid by using the ig-grid Tag Helper.

Lets have the following model:

```
namespace MyApp.Models
{
    using System;
 
    public class User
    {
        public int Id { get; set; }

        public string Username { get; set; }

        public string CountryId { get; set; }

        public DateTime BirthDate { get; set; }

        public bool IsAdmin { get; set; }
    }
}
```
we should register it to the view

```csharp
@model IQueryable<MyApp.Models.User>
```

and lets configure igGrid with updating feature with editor some editors:

```html
<ig-grid ig-data-source="@Model"
         auto-generate-columns="false"
         auto-generate-layouts="false"
         primary-key="Id"
         render-checkboxes="true" 
         width="900px"
         id="grid"
         update-url="@Url.Action("Update")">
    <columns>
        <column key="Id" header-text="ID" width="150px" />
        <column key="Username" header-text="Username" width="200px" />
        <column key="IsAdmin" header-text="IsAdmin" ig-data-type="bool" width="200px" />
        <column key="BirthDate" header-text="BirthDate" ig-data-type="date" width="100px" />
        <column key="CountryId" header-text="Country" width="200px" />
    </columns>
    <features>
        <updating>
            <updating-column-settings>
                <updating-column-setting column-key="CountryId" 
                                         editor-type="@ColumnEditorType.Combo">
                    <combo-editor-options value-key="Id"
                                          text-key="Name"
                                          mode="@ComboMode.DropDown"
                                          ig-data-source="@Url.Action("Countries")" />
                </updating-column-setting>
                <updating-column-setting column-key="BirthDate"
                                         editor-type="@ColumnEditorType.DatePicker" />
            </updating-column-settings>
        </updating>
    </features>
</ig-grid>

<input type="button" id="saveChanges" class="button-style" value="Save Changes" />

<script type="text/javascript">
    $("#saveChanges").on("click", function() {
        $("#grid").igGrid("saveChanges");
    });
</script>
```

As demonstrated, the control configuration is similar to what would be done using the Html Helpers.
The control is declared as tag and options are set as tag attributes with expcetion of the options 
that are set using lambda expression, which are declared as child tags.

For example the columns with Html Helper are being set:

```csharp
.Columns(column =>
{
    column.For(m => m.Id).HeaderText("ID").Width("150px");
    column.For(m => m.Username).Width("200px");
    column.For(m => m.IsAdmin).HeaderText("Is аdmin").DataType("bool").Width("200px");
    column.For(m => m.BirthDate).HeaderText("Is аdmin").DataType("bool").Width("200px");
    column.For(m => m.CountryId).HeaderText("Country").Width("200px");
})
```

and by using Tag Helpers:

```html
<columns>
    <column key="Id" header-text="ID" width="150px" />
    <column key="Username" width="200px" />
    <column key="IsAdmin" header-text="Is аdmin" ig-data-type="bool" width="200px" />
    <column key="BirthDate" header-text="Birth date" ig-data-type="date" width="100px" />
    <column key="CountryId" header-text="Country" width="200px" />
</columns>
```

## <a id="related"></a> Related Content
- [Using Ignite UI controls in ASP.NET Core 1.0](Using-IgniteUI-Controls-in-ASP.NET-Core-1.0-project.html)
- [Adding Controls to an MVC Project](Adding-NetAdvantage-Controls-to-an-MVC-Project.html)