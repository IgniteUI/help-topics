<!--
|metadata|
{
    "fileName": "ighierarchicalgrid-feature-inheritance",
    "controlName": "igHierarchicalGrid",
    "tags": ["Extending","Grids"]
}
|metadata|
-->

# Feature Inheritance (igHierarchicalGrid)

## Topic Overview

### Purpose
This demonstrates how to inherit features in the child layouts of the igHierarchicalGrid™.

## In this topic
This topic contains the following sections:

-   [Introduction](#introduction)
-   [Defining Features and Properties for Layouts Individually](#individually)
-   [Defining Features and Properties for Layouts Using Inheritance](#inheritance)
-   [Customizing the Features and Properties Defined Through Inheritance](#custom)
-   [Related Topics](#relTopics)

## <a id="introduction"></a> Introduction
The layout properties of the igHierarchicalGrid are the same as those of the flat igGrid. But these properties, are not inherited by default from the parent to the child layout, with a few exceptions, like `responseDataKey`, That’s why you need to define the properties and features for every layout. Using inheritance, the features are defined only once in the parent layout and propagate to the child ones.

By default, features are not inherited. Also, the column settings cannot be inherited in the child layouts. This includes the column settings of the grid, as well as the feature column settings. You need to define them in every layout separately.

Using Inheritance feature is mostly helpful when the layouts are generated automatically (`autoGenerateLayouts` is enabled). In fact, in this case, inheritance is the only way to have features for the child layouts. This is because when the definition of the layout is missing, it will be missing for its features, too.

## <a id="individually"></a> Defining Features and Properties for Layouts Individually 
The example code below demonstrates how to define the Sorting feature for a child layout that is on the first level of the hierarchy. You can define the other features inside every child layout in the same way.

**In Javascript:**

```js
$("#grid1").igHierarchicalGrid({
    features: [
        {
            name: "Sorting",
            type: "remote"
        }
    ],
    autoGenerateLayouts: false,
    columnLayouts: [
    {
         features: [
         {
             name: "Sorting",
             type: "remote"
         }
       }    
    ]
});
```

## <a id="inheritance"></a> Defining Features and Properties for Layouts Using Inheritance 
With multiple child layouts, you can define properties and features individually for every child layout, but if the functionality is the same as that in the parent layout, as it is in the code in the block above (Defining Features and Properties for Layouts Individually), you can use the inheritance feature of the igHierarchicalGrid. You set inheritance in the parent (`inherit: true`) and it gets applied to all child layouts.

**In Javascript:**

```js
$("#grid1").igHierarchicalGrid({
    features: [
        {
            name: "Sorting",
            type: "remote",
            inherit: true
        }
    ],
    autoGenerateLayouts: true
});
```

The code below demonstrates how to inherit the Sorting feature, when using the igHierarchicalGrid MVC wrapper.

**In C#:**

```csharp
<%=  Html.Infragistics()
    .Grid(Model)
    .ID("grid1")
    .Features(features =>
    {
        features.Sorting().Inherit(true);  
    }
    .Render()%>
```

## <a id="custom"></a> Customizing the Features and Properties Defined Through Inheritance 
There are cases when you inherit some feature in the parent grid and then define new settings in the child one. Then the igHierarchicalGrid internally merges the both option sets and, if some of the options are duplicated, the custom ones in the child layout will have higher selection priority.

## <a id="remote"></a> Enable Remote features for the child layouts in MVC
When one or more of the child layouts has a remote feature enabled(either explicitly or by inheritance) igHierarchicalGrid cannot be initialized in the View. Since MVC is stateless, the grid needs to be aware on each remote request of the layout hierarchy and the features enabled on each layout. This is accomplished by configuring the igHierarchicalGrid properties in either the Controller or in the Model. Each child layout needs to have a separate action method which will process its remote feature(s) requests, thus a DataSourceUrl must be set. For an example configuration see the [Loading data on demand](igHierarchicalGrid-Load-on-Demand.html) topic.

## <a id="relTopics"></a>Related Topics 
Following are some other topics you may find useful.

- [igHierarchicalGrid Overview](igHierarchicalGrid-Overview.html)
- [Initializing the igHierarchicalGrid](igHierarchicalGrid-Initializing.html)
- [igHierarchicalGrid Properties Reference](%%jQueryApiUrl%%/ui.ighierarchicalgrid#options)

 

 


