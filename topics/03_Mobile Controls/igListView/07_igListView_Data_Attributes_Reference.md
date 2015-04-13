<!--
|metadata|
{
    "fileName": "iglistview-data-attributes-reference",
    "controlName": "igListView",
    "tags": ["API","Data Binding","Filtering","Sorting"]
}
|metadata|
-->

# Data Attributes Reference (igListView)

## Topic Overview

### Purpose

This topic lists all `igListView`™ data attributes. You can use these attributes to initialize `igListView` in markup.

### Required background

- Concepts
	- HTML 5 data-* attributes
- Topics
	- [igListView Overview](igListView-Overview.html): This topic explains the features of `igListView`.
	- [Adding igListView to a Web Page](igListView-Adding-igListView-to-a-Web-Page.html): This topic explains how you can add `igListView` mobile control to a web page.
- External Resources
	- [HTML 5 data-* attributes](https://html.spec.whatwg.org/multipage/dom.html#embedding-custom-non-visible-data-with-the-data-*-attributes)



### In this topic

This topic contains the following sections:

-   [ListView Options Data Attributes Reference](#options)
-   [ListView Sorting Data Attributes Reference](#sorting)
-   [ListView Filtering Data Attributes Reference](#filtering)
-   [ListView Load on Demand Data Attributes Reference](#load-ondemand)



## <a id="options"></a> ListView Options Data Attributes Reference

`igListView` data attributes allow you to configure control in the markup.

Example `igListView` markup initialization:

**In HTML:**

```html
<div id="igListViewMarkupInitializtion"
    data-role="iglistview"
    data-numbered-list="true"
    data-bindings-header-key="ProductName"
    data-bindings-description-key="CategoryName"
    data-bindings-count-key="InStock"
    data-bindings-image-url-key="ImageUrl"
    data-data-source="northwindProducts">
</div>
```

### ListView Options Data Attributes reference summary

The following table summarizes the purpose and functionality of the `igListView` control’s featured data attributes.

Property | Type | Description | Default Value
---------|------|-------------|--------------
data-role | string | Identifier for the `igListView`. | iglistview
data-inset | bool | Determines whether the list view should appear inset in the page or not. | false
data-numbered-list | bool | Determines whether an **ol** or an **ul** should be used as the main element for a data bound list. | false
data-data-source | object | It can be one of the following: <ul> <li>name of a JavaScript variable</li> <li>an actual Json encoded array</li> <li>any valid data source accepted by $.ig.DataSource,</li> <li>an instance of an $.ig.DataSource</li> </ul> | null
data-data-source-url | string | Specifies a remote URL as a data source, from which data will be retrieved using an AJAX call ($.ajax). | null
data-data-source-type | string | Explicitly set data source type (such as **json**). | null
data-response-data-key | string | This is the property in the responses where data records are held, if the response is wrapped. | null
data-response-total-rec-count-key | string | This is the property in the response, specifying the total number of records on the server. | null
data-local-schema-transform | bool | If this option is set to false, transformations to the data schema will not be applied. | true
data-item-template | string | IG templating style template that will be used to render list items. | null
data-item-details-template | string | IG templating style template that will be used to render details about list items in a sub page. | null
data-image-mode | string | Determines whether to show no image, an icon, or a thumbnail. | thumbnail
data-show-count | bool | Determines whether to show a count bubble. | true
data-item-header-size | string | Determines whether to show a heading tag in the LI. Can be H1 to H6 depending on the value. | h2
data-bindings-text-key | string | Specifies the name of the data source property the value of which would be the node text. | null
data-bindings-text-x-path | string | Specifies the XPath to the text attribute/node. Used in client-only binding directly to XML. | null
data-bindings-image-url-key | string | Specifies the name of the data source property the value of which would be used as an URL for the node image. | null
data-bindings-image-url-x-path | string | Specifies the XPath to the image URL attribute/node. Used in client-only binding directly to XML. | null
data-bindings-navigate-url-key | string | Specifies the name of the data source property the value of which would be used as an **href** attribute for the node anchor. | null
data-bindings-navigate-url-x-path | string | Specifies the XPath to the navigate URL attribute/node. Used in client-only binding directly to XML. | null
data-bindings-count-key | string | Specifies the name of the data source property the value of which would be used as a count of the node. | null
data-bindings-count-x-path | string | Specifies the XPath to the node count. Used in client-only binding directly to XML. | null
data-bindings-header-key | string | Specifies the name of the data source property the value of which would be used as a count of the node. | null
data-bindings-header-x-path | string | Specifies the XPath to the list item header. Used in client-only binding directly to XML. | null
data-bindings-description-key | string | Specifies the name of the data source property the value of which would be used as a count of the node. | null
data-bindings-description-x-path | string | Specifies the XPath to the list item description Used in client-only binding directly to XML. | null
data-bindings-primary-key | string | Specifies the name of the data source property the value of which is the primary key attribute for the data. This property is used when load on demand is enabled and if specified the node paths would be generated using primary keys instead of indices. | null
data-bindings-is-divider-key | string | Specifies the name of the data source property which will be used to determine if an item represents a read-only list divider. | null
data-bindings-details-title-key | string | Specifies the name of the data source property the value of which would be the Title of a sub page for a node. | null
data-bindings-details-title-x-path | string | Specifies the XPath to the title attribute/node. Used in client-only binding directly to XML. | null
data-binding-custom-bindings | array | A list of objects with custom bindings. This will bring in extra data in items or details templates. Each item is an object with key/value pairs of `fieldName` and `dataType`. | []
data-initial-data-bind-depth | number | Only the first level will be data-bound initially. Also serves as a render depth. This means that the number of list levels to be rendered initially depends on the value of this property. | -1
data-odata | bool | If *true*, encodes all requests using OData conventions and the `$expand` syntax. | false
data-default-children-data-property | string | Specifies the default property in the response where children will be located. | Children
data-path-separator | string | Specifies the delimiter for constructing paths for hierarchical lookup of data. | /
data-auto-generate-layouts | bool | If true, will auto generate all layouts assuming default values for key. | false
data-child-layout-key | string | Specifies the layout key. This can be the property that holds the data records for the child layout. | null
data-init-selector | string | The selector used by default to find html elements that should be transformed into this widget. | :jqmData(role='iglistview')



## <a id="sorting"></a> ListView Sorting Data Attributes Reference

`igListView` Sorting feature data attributes allow you to make the configuration in markup.

Example `igListView` markup initialization:

**In HTML:**

```html
<ul id="igListViewSorting"
    data-role="iglistview" 
    data-data-source="northwindProducts"                 
    data-auto-generate-layouts="False" 
    data-bindings-text-key="ProductName"
    data-bindings-description-key="CategoryName"
    data-bindings-image-url-key="ImageUrl"
    data-bindings-count-key="InStock"
    data-sorting="true" 
    data-sorting-type="local"
    data-sorting-sort-presets-label="Sorting options" 
    data-sorting-auto-generate-sort-presets="false" 
    data-sorting-presets='[         {"text":"Inventory","sortedFields":[ {"fieldName":"InStock","direction":"desc"} ]},         {"text":"Category","sortedFields":[ {"fieldName":"CategoryName","direction":"asc"} ]} ]'
    data-sorting-grouping-settings='{"enableCollapsibleDividers" : true }'>
</ul>
```

### ListView Sorting Data Attribute reference summary

The following table summarizes the purpose and functionality of the `igListView` Sorting featured data attributes.

Property | Type | Description | Default Value
---|---|---|---
data-sorting | bool | Enable or disable sorting. | false
data-sorting-type | string | Defines local or remote sorting. | null
data-sorting-case-sensitive | bool | Case sensitivity of the sorting. | false
data-sorting-sort-presets-label | string | The text that is displayed above the sort presets. | null
data-sorting-sort-state | string | The number of the preset to start with selected. | default
data-sorting-sort-url-key | string | URL parameter name which specifies how sorting expressions will be encoded in the URL. Uses OData conventions. `ex: ?sort(col1)=asc` | null
data-sorting-sort-url-key-asc-value | string | URL parameter value for ascending type of sorting. Uses OData conventions. | null
data-sorting-sort-url-key-desc-value | string | URL parameter value for descending type of sorting. Uses OData conventions. | null
data-sorting-custom-sort-function | function | Custom sort function accepting three parameters: <ul> <li>the data to be sorted</li> <li>an array of data source field definitions</li> <li>the direction to sort with (optional).</li> </ul> The function should return the sorted data array. | null
data-sorting-sorted-fields | array | A list of key/value pairs (fieldName and direction) representing the sorted fields and their direction. | []
data-sorting-show-grouping | bool | Determines whether the first sorted field will have groups inserted into the list. | false
data-sorting-group-comparer-function | function | Specifies a custom group by function, which accepts the first and the second value to compare and returns bool value. This value determines whether they are in the same group. | null
data-sorting-group-name-function | function | Specifies a custom group name function, which accepts a value of the group and returns the name that should be displayed. | null
data-sorting-presets | array | A list of preset sorting options. | []
data-sorting-divider-template | string | This is a jQuery templating style template that will be used to render list dividers. Renders with a data object containing Count and Name key/value pairs. | null
data-sorting-auto-generate-sort-presets | bool | When the value is true, and presets array is null, a preset will be generated for every binding. | true
data-sorting-grouping-settings | object | An object with settings that control how grouping appears for default fields and all presets. | [object](%%jQueryApiUrl%%/mobile.igListViewSorting#options:object)




## <a id="filtering"></a> ListView Filtering Data Attributes Reference

`igListView` Filtering feature data attributes allow you to make the configuration in markup.

Example `igListView` Filtering markup initialization:

**In HTML:**

```html
<ul id="filterPresetsListView"
    data-role="iglistview"  
    data-auto-generate-layouts="False" 
    data-bindings-header-key="ProductName"
    data-bindings-description-key="CategoryName"
    data-bindings-count-key="InStock"
    data-bindings-image-url-key="ImageUrl"
    data-data-source="northwindProducts" 
    data-data-source-type="json" 
    data-filtering="true" 
    data-filtering-presets='[         {"text":"Beverages","filteredFields":[ {"fieldName":"CategoryName","searchValue":"Beverages","condition":"equals"} ]},         {"text":"Dairy","filteredFields":[ {"fieldName":"CategoryName","searchValue":"Dairy Products","condition":"equals"} ]},         {"text":"Seafood","filteredFields":[ {"fieldName":"CategoryName","searchValue":"Seafood","condition":"equals"} ]},         {"text":"Confections","filteredFields":[ {"fieldName":"CategoryName","searchValue":"Confections","condition":"equals"} ]} ]' 
    data-filtering-search-bar-enabled="false">
</ul>
```

### ListView Filtering Data Attribute reference summary

The following table summarizes the purpose and functionality of the `igListView` Filtering featured data attributes.

Property | Type | Description | Default Value
---|---|---|---
data-filtering | bool | Enable or disable filtering. | false
data-filtering-type | string | Defines local or remote filtering. | null
data-filtering-case-sensitive | bool | Enables/disables filtering case sensitivity. | false
data-filtering-filter-expr-url-key | string | URL key name that specifies how the filtering expressions will be encoded for remote requests; For example, `&filter('col') = startsWith.` Default value is OData. | null
data-filtering-search-bar-enabled | bool | Determines whether to enable the search bar in the tray. | true
data-filtering-search-bar-fields | array | This is a list of the fields in the source to allow end user keyword search configuration. | []
data-filtering-search-bar-field-name | string | This determines the field for the keyword search. When empty, it will search all the fields. | ””
data-filtering-search-bar-placeholder | string | Determines the placeholder to be displayed in the search bar when it is empty. | null
data-filtering-search-bar-condition | array | Default filtering condition. | contains
data-filtering-filtered-fields | array | This is a list of key/value pairs (*fieldName, searchValue, condition, logic*) representing the filtered fields. | []
data-filtering-filter-presets-label | string | The text that is displayed above the filter presets. | null
data-filtering-filter-state | string | The index of the preset that should be used;*default* for none. | default
data-filtering-presets | array | This is a list of preset filtering options. | []



## <a id="load-ondemand"></a> ListView Load on Demand Data Attributes Reference

`igListView` Load on Demand feature data attributes allow you to make the configuration in markup.

Example `igListView` Load on Demand markup initialization:

**In HTML:**

```html
<ul> 
    data-auto-generate-layouts="False" 
    data-bindings="{'textKey':'ProductName','descriptionKey':'CategoryName','imageUrlKey':'ImageUrl'}" 
    data-data-source="/SampleDataJson/ProductJSONOnDemand" 
    data-generate-compact-jsonresponse="false" 
    data-image-mode="icon" 
    data-inset="true" 
    data-key="Products" 
    data-load-on-demand="true" 
    data-load-on-demand-page-index-url-key="page" 
    data-load-on-demand-page-size="5" 
    data-load-on-demand-page-size-url-key="pageSize" 
    data-load-on-demand-record-count-key="TotalRecordsCount" 
    data-load-on-demand-type="remote" 
    data-response-data-key="Records" 
    data-role="iglistview">
</ul>
```

### ListView Load on Demand Data Attribute reference summary

The following table summarizes the purpose and functionality of the `igListView` Load on Demand featured data attributes.

Property | Type | Description | Default Value
---|---|---|---
data-load-on-demand | bool | Enable or disable load on demand. | false
data-load-on-demand-type | string | Defines local or remote loading. | null
data-load-on-demand-page-size | number | When greater than *0*, controls how many items are initially fetched and loaded. | 10
data-load-on-demand-record-count-key | string | The property in the response that will hold the total number of records in the data source. | null
data-load-on-demand-page-size-url-key | string | Denotes the name of the encoded URL parameter that will state what the currently requested page size is. | null
data-load-on-demand-page-index-url-key | string | Denotes the name of the encoded URL parameter that will state what the currently requested page index is. | null
data-load-on-demand-mode | string | Defines whether to show a button to load more items or they should be fetched automatically. | button
data-load-on-demand-auto-hide-button-at-end | bool | When *true* and there are no pages left (according to data source), more buttons will be fetched and automatic loading will stop. | true



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.


- [Configuring Sorting](igListView-Configuring-Sorting.html): This topic shows how to use sorting feature of `igListView`™.

- [Configuring Filtering](igListView-Configuring-Filtering.html): This topic shows how to use filtering feature of `igListView`™.

- [Configuring Load-on-Demand](igListView-Configuring-Load-on-Demand.html): This topic shows how to use load on demand feature of `igListView`™.

- [igDataSource](igDataSource-igDataSource.html): This topic provides reference information about `igDataSource` topics.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Sort and Group Presets](%%SamplesUrl%%/mobile-list-view/sort-group-presets): This sample shows how to configure a default sort by using the sorted fields collection. In addition, you can configure sort and group presets to appear in the sort tray.

- [Filter Presets](%%SamplesUrl%%/mobile-list-view/filter-presets): This sample demonstrates how filter presets are applied to show only specific categories.

- [Search](%%SamplesUrl%%/mobile-list-view/search): This sample shows how to configure filtering to use search box.

- [Load on Demand](%%SamplesUrl%%/mobile-list-view/load-on-demand): This sample shows how to configure load on demand.





 

 


