<!--
|metadata|
{
    "fileName": "using-infragistics-loader",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Adding Required Resources Automatically with the Infragistics Loader

## Introduction
Applications are often built to load all the JavaScript and CSS files during the initial page load, but in some contexts loading all resources up front may not be the best option for the application. In order to either defer script loading, provide asynchronous loading functionality or both, script loaders are used to  take on the responsibility of loading JavaScript and CSS files on to the page.

The Infragistics Loader is a component that asynchronously loads JavaScript and CSS files. Once the component is initialized and the requested files are loaded, a callback is run that allows you to run code that is dependent upon the loaded resources. The loader is flexible as it provides a number of different options for initialization and features support for custom regions and locales.

To use the loader on a page you need to add reference to the `infragistics.loader.js` file. For instance:

```html
<script type="text/javascript" src="http://localhost/igniteui/infragistics.loader.js"></script>
```

## In this Topic
- [Initialization](#initialization)
- [Resource Expressions](#resource-expressions)
- [Working with MVC Helpers](#working-with-mvc-helpers)
- [Localization](#localization)
- [Regional Settings](#regional-settings)
- [Related Content](#related-content)


## <a id="initialization"></a> Initialization
Depending on the needs of your page you may want to initialize the loader in different ways. At a high level, the available options include changing when files are loaded, controlling whether or not to separate initialization from the load notification and defining which files to load.

### Immediate Load and Notification
If you want to immediately load resources and handle the load notification all at once, then you can implement the `ready` function during the initialization step. The following code demonstrates how to load the resources for the igGrid:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid',
    ready: function () {
        console.log('igGrid resources are loaded');
    }
});
```

Notice how the `scriptPath` and `cssPath` point to the root location on the server where the JavaScript and CSS exist. The `resource` member takes an expression that tells the loader what to load and the `ready` function is run once all the requested files are loaded.

### Immediate Load and Separate Notification
Sometimes you may want to immediately load files, but handle the load notification in a separate place in your code. This next code block demonstrates how to separate the load action from the notification.

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid'
});

$.ig.loader(function () {
    console.log('igGrid resources are loaded');
});
```

Here, the resources for the igGrid are still immediately loaded, but you have a finer-grained control over where you are handling the notification when the files are loaded.

Starting in version 2016.2 the loader is deferring notifications of the resources availability til jQuery's document ready. This allows for convenient event flow inline with jQuery standards. The following code snippet demonstrates this new capability:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igCombo'
});

$(function () {
    // Document is ready and igCombo resources are loaded
    $("#combo").igCombo({
        dataSource: data,         
        valueKey: "ID",
        textKey: "Name"
    });
});
```
> **Note:** Deferring of the document ready event is only available in jQuery version 1.6 and above therefore this or newer version of the library is required to be used with Ignite UI 2016.2 and above.

### Load on Demand
When you define resources up front as an option while initializing the loader, all files are immediately downloaded. An alternative to this approach, however, is to load scripts on demand. Loading on demand can help boost the performance of your pages by deferring the file loading until the moment they are needed on the page. The following code demonstrates how to initialize the loader without immediately loading any files.

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
});
```

With the loader initialized you can then load files on demand.

```javascript
$.ig.loader('igGrid', function () {
    console.log('igGrid resources are loaded');
});
```

One way you might want to use this approach is only load resources when a specific button is clicked on the page:

```javascript
$('#show-grid-button').click(function (e) {
    $.ig.loader('igGrid', function () {
        console.log('Loaded igGrid resources');
    });
});
```

### Chaining
Another option available it to chain the calls to the load method by passing in different resource expressions.

```javascript
$.ig.loader({
        scriptPath: 'http://localhost/igniteui/js/',
        cssPath: 'http://localhost/igniteui/css/',
    })
    .load('igGrid',
        function () {
            console.log('igGrid resources are loaded')
        })
    .load('igTree',
        function () {
            console.log('igTree resources are loaded')
        });
```

This approach gives you the option to centralize your code, but still have individual notifications as the resources for separate controls are loaded.

## <a id="resource-expressions"></a> Resource Expressions
The examples shown so far in this tutorial demonstrate a very simple resource expression that loads the core igGrid or igTree resources, but there are a number of ways to construct the resource expression in order to control the files loaded on the page. Depending on how the resource expression is formatted you can load the minimum files for a control, specific features of a control, all the files used by a control, multiple controls at once or an arbitrary list of files.

This section reviews the different ways you can format your expression to produce different results. Keep in mind that each of these approaches may be used together and are not mutually exclusive.

### Loading Features
Certain controls like igGrid, igHierarchicalGrid, igTreeGrid or igDataChart are modular and support "features" which represent code that may need to be downloaded separately from the control's core files. The dot (`.`) in a resource expression tells the loader to include features associated to the root control. For instance, if you want to load the igGrid on to your page, but also include the grid's Sorting feature, then you would use a resource expression like this:

```javascript
igGrid.Sorting
```

This expression tells the loader to load the core igGrid files as well as the files required to support the Sorting feature. You can use the dot more than once express all the features you want load. If you want to load Sorting, Filtering and Paging then you would use a resource expression like this:

```javascript
igGrid.Sorting.Filtering.Paging
```

Here is the above resource expression in context:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid.Sorting.Filtering.Paging',
    ready: function () {
        console.log('Loaded igGrid resources');
    }
});
```

For more information on features and the literals values available for modular controls read the [section on Resource Expression Feature Literals](#resource-expression-feature-literals)

### Loading Multiple Resources
The comma (`,`) in an expression allows you to load resources for more than one control at a time. For instance if you wanted to load resources for the grid, tree and combo all at one time then your expression would look like this:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid,igTree,igCombo',
    ready: function () {
        console.log('Loaded resources for igGrid, igTree and igCombo');
    }
});
```

> **Note:** You must *not* include spaces before or after commas in the expression.

### Loading All Resources/Features
The star (`*`) in an expression introduces a wildcard that tells the loader to load all the files for a control. This means that every file used for any possible feature of the control is loaded. You would use a wildcard expression like this:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid.*',
    ready: function () {
        console.log('Loaded igGrid resources');
    }
});
```

> **Note**: *Take care in using wildcards in resource expressions*. This can contribute to page bloat as you may be forcing the page to download unnecessary files for features that are not used.

### Explicitly Loading Resources
In some instances you may want to use the loader to load custom or external files in conjunction with Ignite UI resources. To explicitly load resources you simply need to add the path to the resource into the resource expression. The example below loads a custom JavaScript file with the igGrid core resources.

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid,../../custom.js',
    ready: function () {
        console.log('Loaded resources for igGrid and custom.js');
    }
});
```

The loader uses the locations defined in `scriptPath` and `cssPath` as the starting paths for resolving resource URLs. As shown here, if your custom resource is in a location outside the folders as referenced by `scriptPath` and `cssPath` the path can be resolved to the correct URL if you provide a relative path.

### <a id="resource-expression-feature-literals"></a> Resource Expression Feature Literals
Often when building a resource expression all you need to use is the name of the control. For controls that include modular features you need to know the literals used to reference the features. The following lists the different controls and the literal names that map to their respective features.

#### igDataChart
- Category
- RangeCategory
- VerticalCategory
- Financial
- ExtendedFinancial
- Polar
- Radial
- Scatter
- Stacked
- Annotation

For instance:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igDataChart.RangeCategory.Scatter'
});
```

#### igGrid
- AppendRowsOnDemand
- CellMerging
- ColumnMoving
- ColumnFixing
- Filtering
- GroupBy
- Hiding
- Paging
- Resizing
- Responsive
- RowSelectors
- Selection
- Sorting
- Summaries
- MultiColumnHeaders
- Tooltips
- Updating

For instance:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igGrid.Sorting.Filtering.Paging'
});
```

#### igHierarchicalGrid
- ColumnMoving
- Filtering
- GroupBy
- Hiding
- CellMerging
- Paging
- Resizing
- Responsive
- RowSelectors
- Selection
- Sorting
- Summaries
- MultiColumnHeaders
- Tooltips
- Updating

For instance:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igHierarchicalGrid.ColumnMoving.RowSelectors.MultiColumnHeaders'
});
```

#### igTreeGrid
- Filtering
- Hiding
- Paging
- Resizing
- Selection
- RowSelectors
- Sorting
- MultiColumnHeaders
- Tooltips
- Updating
- ColumnFixing
- ColumnMoving

For instance:

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igTreeGrid.Paging.Sorting.Filtering'
});
```

## <a id="working-with-mvc-helpers"></a> Working with MVC Helpers
If you initialize a control through MVC helpers, all dependent resources are loaded automatically.

The following demonstrates how to use the loader with the ASP.NET MVC helpers:

```html
<script src="http://localhost/igniteui/js/infragistics.loader.js"></script>

<%= Html.Infragistics()
    .Loader()
    .ScriptPath("http://localhost/igniteui/js/")
    .CssPath("http://localhost/igniteui/css/")
    .Render()    %>
```

## <a id="localization"></a> Localization
Localization of the widgets is controlled by the locale option. The following locales are currently supported in Ignite UI:

- English(en)
- Japanese(ja)
- Bulgarian(bg)
- Russian(ru)
- Spanish(es)
- French(fr)
- German(de)

The English and Japanese versions of Ignite UI have their respective resources merged with the product code.

The loader can also detect the browser's language setting and automatically switch to this locale. This behavior is controlled by the `autoDetectLocale` option, which is set to `false` by default. If `autoDetectLocale` is set and `locale` is set, the `locale` option takes precedence.

## <a id="regional-settings"></a> Regional Settings
Regional settings are relevant to some Ignite UI controls like editors where numeric and currency values are formatted differently depending on the region. The loader automatically loads regional settings by inferring it from the locale or from auto-detecting is from the browser.

To force the loader to load a custom regional setting, you need to configure the `regional` option of the loader.

> **Note**: The regional settings follow the standard for regional settings and can be either 2 characters, or 5 characters long.

All regional files can be found in folder:

```javascript
{Ignite UI resources root}/js/modules/i18n/regional/
```

The following code loads the hierarchical grid with the Updating feature enabled (which uses the Ignite UI editor controls) for the Bulgarian locale using Great Britain English.

```javascript
$.ig.loader({
    scriptPath: 'http://localhost/igniteui/js/',
    cssPath: 'http://localhost/igniteui/css/',
    resources: 'igHierarchicalGrid.Updating',
    locale: 'bg',
    regional : 'en-GB'
});
```

### Special Considerations for the jQuery UI Date Picker
When the jQuery UI date picker widget is configured to use the Ignite UI editors, you need to include a reference to `jquery-ui-i18n.min.js` on the page and the regional setting needs to be specified. For instance:

```javascript
$.datepicker.setDefaults($.datepicker.regional['ru']);
```

### Special Considerations for Ignite UI Editors
When setting regional settings for editors, the following file must be referenced on the page:

```javascript
infragistics.ui.regional-i18n.js
```

Accepted values for regional option are the ending of the files in the regional folder. They are the same as the standard values supported by jQuery:

Region  | Region | Region | Region |
--- | --- | --- | --- |
af (South Africa)	            | fa (Farsi, Iran)            | ko (Korea)	            | sr (Cyrillic, Serbia)
ar (Arabic)	                    | fi (Finland)                | lt (Lithuania)	        | sr-SR (Latin, Serbia)
az (Azerbaijan, Latin)          | fo (Faroe)	              | lv (Latvia)	            | sv (Sweden)
bg (Bulgaria)	                | fr-CH (French, Switzerland) | ms (Malaysia)	        | ta (Tamil, India)
bs (Bosnia)	                    | fr (France)	              | nl (Dutch, Netherlands)	| th (Thailand)
ca (Catalan)	                | he (Hebrew, Israel)	      | no (Norway)	            | tr (Turkey)
cs (Czech)	                    | hr (Croatia)	              | pl (Poland)	            | uk (Ukraine)
da (Denmark)	                | hu (Hungary)	              | pt-BR (Brazil)	        | vi (Vietnam)
de (Germany)	                | hy (Armenia)	              | ro (Romania)	        | zh-CN (PRC, China)
el (Greece)	                    | id (Indonesia)	          | ru (Russia)	            | zh-HK (Hong Kong SAR PRC, China)
en-GB (English, United Kingdom) | is (Iceland)	              | sk (Slovakia)	        | zh-TW (Taiwan, China)
es (Spain)				        | it (Italy)	              | sl (Slovenia)           |
et (Estonia)	                | ja (Japan)  				  | sq (Albania)

## <a id="related-content"></a> Related Content
- [JavaScript Files in Ignite UI](deployment-guide-javascript-files.html)
- [Infragistics Content Delivery Network (CDN) for Ignite UI](deployment-guide-infragistics-content-delivery-network%28cdn%29.html)
- [Adding Required Resources Manually](adding-the-required-resources-for-netadvantage-for-jquery.html)
- [Using JavaScript Resources in Ignite UI](deployment-guide-javascript-resources.html)
