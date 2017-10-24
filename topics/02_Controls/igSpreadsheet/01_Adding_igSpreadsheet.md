<!--
|metadata|
{
    "fileName": "adding-igspreadsheet",
    "controlName": "igSpreadsheet",
    "tags": []
}
|metadata|
-->

# Adding igSpreadsheet

## Topic Overview 
###Purpose

The `igSpreadsheet`™ is a jQuery widget that visualize excel documents in all modern browsers. The purpose of this topic is to provide a step-by-step guidance on how to add this control to your project.

###Required background

To understand this topic you need to be familiar with the concept and topics related to the [Infragistics JavaScript Excel Library](javascript-excel-library.html).

## JavaScript Resources
Before we get started we need to make sure we have loaded all of the needed resources. We first need to load the jQuery resources and then we need to add the required Ignite UI resources. There are three ways to add the Ignite UI resources to your project. You can:
- use the `igLoader` (below)
- load the required modules [separately](#separate-files)
- use the [bundled files](#bundled) that combine all the required resources

```js
$.ig.loader({
    scriptPath: "../../igniteui/js/",
    cssPath: "../../igniteui/css/",
    resources: "igSpreadsheet"
});
```

> **Note:** In case you are going to create a new excel file instead of loading your own file, you can load only `igSpreadsheet` but if you need to load and work with Xlsx files, please note that you will have to load additionally `igExcel.LoadSaveXlsx` resource.

In the following topic you can find more about the `igLoader` and how to work with it.

[Adding Required Resources Automatically with the Infragistics Loader](using-infragistics-loader.html)

### <a id="separate-files"></a>Load modules separately
```html
<!-- util -->
<script src="js/modules/infragistics.util.js"></script>
<script src="js/modules/infragistics.util.jquery.js"></script>

<!-- ext -->
<script src="js/modules/infragistics.ext_core.js"></script>
<script src="js/modules/infragistics.ext_text.js"></script>
<script src="js/modules/infragistics.ext_collections.js"></script>
<script src="js/modules/infragistics.ext_io.js"></script>
<script src="js/modules/infragistics.ext_ui.js"></script>
<script src="js/modules/infragistics.dv_jquerydom.js" ></script>
<script src="js/modules/infragistics.ext_collectionsExtended.js"></script>
<script src="js/modules/infragistics.ext_threading.js"></script>
<script src="js/modules/infragistics.ext_web.js"></script>

<!-- xml -->
<script src="js/modules/infragistics.xml.js"></script>

<!-- documents.core -->
<script src="js/modules/infragistics.documents.core_core-en.js"></script>
<script src="js/modules/infragistics.documents.core_core.js"></script>
<script src="js/modules/infragistics.documents.core_openxml.js"></script>

<!-- excel -->
<script src="js/modules/infragistics.excel_core-en.js"></script>
<script src="js/modules/infragistics.excel_core.js"></script>
<script src="js/modules/infragistics.excel_functions.js"></script>
<script src="js/modules/infragistics.excel_serialization_biff8.js"></script>
<script src="js/modules/infragistics.excel_serialization_openxml.js"></script>

<!-- undo -->
<script src="js/modules/infragistics.undo.js"></script>

<!-- dv -->
<script src="js/modules/infragistics.dv_core.js"></script>
<script src="js/modules/infragistics.dv_jquerydom.js"></script>

<!-- combo -->
<script src="js/modules/infragistics.util.jquery.js"></script>
<script src="js/modules/infragistics.datasource.js"></script>
<script src="js/modules/infragistics.templating.js"></script>
<script src="js/modules/infragistics.ui.scroll.js"></script>
<script src="js/modules/infragistics.ui.validator.js"></script>
<script src="js/modules/infragistics.ui.combo.js"></script>

<!-- spreadsheet -->
<script src="js/modules/infragistics.spreadsheet.js"></script>
<script src="js/modules/infragistics.ui.spreadsheet.js"></script>
```


### <a id="bundled"></a> Load bundled files
```html
<script src="js/infragistics.core.js"></script>
<script src="js/infragistics.lob.js"></script>
<script src="js/infragistics.excel-bundled.js"></script>
<script src="js/infragistics.spreadsheet-bundled.js"></script>
```

## Creating a basic igSpreadsheet implementation on client-side


As we have our resources loaded, now we can step up to the initialization of the control. The following code demonstrates how to create a basic widget that will load an empty spreadsheet. 

```js
$("#spreadsheet").igSpreadsheet({
    height: "600",
    width: "100%"
});
```

Note that when you initialize an empty `igSpreadsheet` you can use all the available options in you initialization code, but if you need to load an external file that will be opened and visualized through the `igSpreadsheet`, then the initial settings such as [`areGridlinesVisible`](%%jQueryApiUrl%%/ui.igspreadsheet#options:areGridlinesVisible) , [`zoomLevel`](%%jQueryApiUrl%%/ui.igspreadsheet#options:zoomLevel) and etc. will not be respected. The visual appearance of the loaded file will be the same as the visual appearance of the file itself. That is because the loading of the external file comes after the initial rendering of the control. So if you want to apply any of the options to your external file you need to call them after the  file is loaded (at runtime).

```js
$("#spreadsheet").igSpreadsheet({
    height: "600",
    width: "100%"
});

var workbook = null;
var xhr = new XMLHttpRequest();
xhr.open('GET', '../../data-files/FormattingData.xlsx', true);
xhr.responseType = 'arraybuffer';

xhr.onload = function (e) {
    // response is unsigned 8 bit integer
    var responseArray = new Uint8Array(this.response);
    $.ig.excel.Workbook.load(responseArray, function () {
        workbook = arguments[0];
        //as the workbook is loaded you can call the options that you want to apply to the excel file here
        $("#spreadsheet").igSpreadsheet("option", "workbook", workbook);
    }, function () {
        console.log("fail");
    })
};

xhr.send();
```

## Creating a basic igSpreadsheet implementation using ASP.NET MVC/Core helpers
If you want to define the control on server-side then you can use the MVC wrapper. The code below will achieve the same result as when the control is defined on the client-side.

In MVC:
```
@(Html.Infragistics()
    .Spreadsheet()
    .Height("600")
    .Width("100%")
    .WorkbookURL("../../data-files/FormattingData.xlsx")
)
```
> **Note:** When using the 'WorkbookURL' option, the Spreadsheet MVC helper automatically generates the required client-side code, that is needed to request an excel file and load it in the spreadsheet.


## Related Links
 -   [igSpreadsheet Overview](igSpreadsheet-Overview.html)
 -   [igSpreadsheet Activation and Navigation Interactions](igSpreadsheet-Activation-and-Navigation-Interactions.html)
 -   [igSpreadsheet Visual Elements](igSpreadsheet-Visual-Elements.html)
 -   [igSpreadsheet Feature Overview](igSpreadsheet-Feature-Overview.html)
 -   [igSpreadsheet Selection](igSpreadsheet-Selection.html)
