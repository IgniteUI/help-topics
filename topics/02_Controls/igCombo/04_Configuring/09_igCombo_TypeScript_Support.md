<!--
|metadata|
{
    "fileName": "igcombo-typescript-support",
    "controlName": "igCombo",
    "tags": ["typescript"]
}
|metadata|
-->

# TypeScript Support (igCombo)

## Topic Overview
This topic shows how to configure `igCombo` with TypeScript data source. We can define a TypeScript class, create a data source with instances from our class and bind the data source to the `igCombo`.

### In this topic

This topic contains the following sections:

-   [Preview](#Preview)
-   [Requirements](#Requirements)
-   [Overview](#Overview)
-   [Steps](#Steps)
    -   [Create the HTML](#create_html_markup)
    -   [Create a TypeScript Class](#create_typescript_class)
    -   [Create a Data Source](#create_data_source)
    -   [Create an igCombo with TypeScript Data Source](#create_combos)
-   [Related Content](#Related_Content)

### <a id="Preview"></a>Preview
The following screenshot is a preview of the final result.

![](images/igCombo_TypeScript.png)

### <a id="Requirements"></a>Requirements
In order to run this sample, you need to have:
-   The required Ignite UI JavaScript and CSS files

### <a id="Overview"></a>Overview
This topic takes you step-by-step toward creating a TypeScript class, data source and `igCombo`.

### <a id="Steps"></a>Steps

​<a id="create_html_markup"></a>Create the HTML - we are going to have three combos demonstrating keyboard navigation, multiple selection and filtering respectively.

**In HTML:**
```html
<div>
    <h4 class="combo-label">
        Keyboard navigation
    </h4>
    <div id="keyNavigationCombo"></div>
</div>
<div>
    <h4 class="combo-label">
        Multiple Selection with Checkboxes
    </h4>
    <div id="checkboxSelectCombo"></div>
</div>
<div>
    <h4 class="combo-label">
        Filtering Condition of Contains
    </h4>
    <div id="filterContainsCombo"></div>
</div>
```
​<a id="create_typescript_class"></a>Create a TypeScript Class - the class will store information about a mountain top with several characteristics - `id`, `mountainName`, `country` and `height`.

**In TypeScript:**
```typescript
class MountainTop {
    id: number;
    mountainName: string;
    country: string;
    height: number;
    constructor(inId: number, inMountanName: string, inCountry: string, inHeight: number) {
        this.id = inId;
        this.mountainName = inMountanName;
        this.country = inCountry;
        this.height = inHeight;
    }
}
```

​<a id="create_data_source"></a>Create a Data Source - we are going to create 10 instances of our class `MountainTop` and add them to an array which will be our data source.

**In TypeScript:**
```typescript
var mountainTopsData: MountainTop[] = [];
mountainTopsData.push(new MountainTop(1, "Everest", "Nepal/Tibet", 29.035));
mountainTopsData.push(new MountainTop(2, "K2 (Mount Godwin Austen)", "Pakistan/China", 29.250));
mountainTopsData.push(new MountainTop(3, "Kangchenjunga", "India/Nepal", 28.169));
mountainTopsData.push(new MountainTop(4, "Lhotse", "Nepal/Tibet",  27.940));
mountainTopsData.push(new MountainTop(5, "Makalu", "Nepal/Tibet", 27.766));
mountainTopsData.push(new MountainTop(6, "Cho Oyu", "Nepal/Tibet", 26.906));
mountainTopsData.push(new MountainTop(7, "Dhaulagiri", "Nepal", 26.795));
mountainTopsData.push(new MountainTop(8, "Manaslu", "Nepal", 26.781));
mountainTopsData.push(new MountainTop(9, "Nanga Parbat", "Pakistan", 26.660));
mountainTopsData.push(new MountainTop(10, "Annapurna", "Nepal", 26.545));
```

​<a id="create_combos"></a>Create an igCombo with TypeScript Data Source - we define our three combos and assign the data source to them.

**In TypeScript:**
```typescript
$(function () {
    $("#keyNavigationCombo").igCombo({
        width: "270px",
        textKey: "mountainName",
        valueKey: "id",
        dataSource: mountainTopsData,
        multiSelection: {
            enabled: true
        },
    });

    $("#checkboxSelectCombo").igCombo({
        width: "270px",
        dataSource: mountainTopsData,
        textKey: "mountainName",
        valueKey: "id",
        multiSelection: {
            enabled: true,
            showCheckboxes: true
        }
    });

    $("#filterContainsCombo").igCombo({
        width: "270px",
        textKey: "mountainName",
        valueKey: "mountainName",
        dataSource: mountainTopsData,
        filteringType: "local",
        filteringCondition: "contains",
        highlightMatchesMode: "contains"
    });
});
```

### <a id="Related_Content"></a>Related Content
The following topic provides additional information related to this topic:
-   [Using Ignite UI with TypeScript](Using-Ignite-UI-with-TypeScript.html) - This topic contains an overview for using the Ignite UI type definitions for TypeScript.