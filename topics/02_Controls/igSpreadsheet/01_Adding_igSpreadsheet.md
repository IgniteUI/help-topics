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

Before we get started we need to make sure we have loaded all of the needed resources. We first need to load the jQuery resources and then we need to add the required Ignite UI resources. There are two ways to add the Ignite UI resources to your project. You can either use the `igLoader` or you can load the required modules separately. You can find both approaches below:

```js
$.ig.loader({
    scriptPath: "../../igniteui/js/",
    cssPath: "../../igniteui/css/",
    resources: "igSpreadsheet"
});
```
In case you are going to create a new excel file instead of loading your own file, you can load only `igSpreadsheet` but if you need to load an external file, please note that you will have to load additionally `igExcel.LoadSaveXlsx` resource. 
In the following topic you can find more about the `igLoader` and how to work with it. 

[Adding Required Resources Automatically with the Infragistics Loader](using-infragistics-loader.html)

```html
<!-- util -->
<script src="js/modules/infragistics.util.js"></script>

<!-- ext -->
<script src="js/modules/infragistics.ext_core.js"></script>
<script src="js/modules/infragistics.ext_text.js"></script>
<script src="js/modules/infragistics.ext_collections.js"></script>
<script src="js/modules/infragistics.ext_io.js"></script>
<script src="js/modules/infragistics.ext_ui.js"></script>
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

## Creating a basic igSpreadsheet implementation


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

## Related Links
 -   [igSpreadsheet Overview](igSpreadsheet-Overview.html)
 -   [igSpreadsheet Activation and Navigation Interactions](igSpreadsheet-Activation-and-Navigation-Interactions.html)
 -   [igSpreadsheet Visual Elements](igSpreadsheet-Visual-Elements.html)
 -   [igSpreadsheet Feature Overview](igSpreadsheet-Feature-Overview.html)
 -   [igSpreadsheet Selection](igSpreadsheet-Selection.html)
