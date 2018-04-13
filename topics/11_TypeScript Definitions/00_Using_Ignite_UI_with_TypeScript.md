<!--
|metadata|
{
    "fileName": "using-ignite-ui-with-typescipt",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Using %%ProductName%% with TypeScript

## Topic Overview

This topic is an overview for using the %%ProductName%% type definitions for TypeScript.

### Required background

The following table lists the materials required as a prerequisite to understanding this topic:

**Concepts**

-   jQuery, jQuery UI
-   [TypeScript](http://www.typescriptlang.org/)

**Topics**

-   [%%ProductName%% Overview](NetAdvantage-for-jQuery-Overview.html)


### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Syntax](#syntax)
-     [Creating TypeScript App with %%ProductName%%](#creating-app)
-   [Related Content](#related-content)

## <a id="introduction"></a>Introduction

%%ProductName%%® provides type definitions for TypeScript allowing you to take advantage of strong typing, compile time checking and intellisense features.

The definitions for the controls can be installed via NPM with the following command `npm install @types/ignite-ui`. They extend the jQuery and jQuery UI definitions for TypeScript and thus it depends on them.

## <a id="syntax"></a> Syntax

Syntax for using %%ProductName%% controls in TypeScript application is the same as you write vanilla JavaScript application. This means that you can refer to the [%%ProductName%% API documentation](%%jQueryApiUrl%%) for code snippets reference.

## <a id="creating-app"></a>Creating TypeScript App with %%ProductName%%

###  <a id="requirements"></a>Requirements 

When considering the required resources the same requirements and options apply as described in the ["Using JavaScript Resources in %%ProductName%%"](Deployment-Guide-JavaScript-Resources.html) documentation in addition to loading the %%ProductName%% Angular directives module afterwards. This means that along with some styles the application would also need to include:

-   [jQuery](http://www.jquery.com/) 1.9 and later
-   [jQuery UI](http://jqueryui.com/) 1.10 and later
-   [TypeScript](http://www.typescriptlang.org/) 1.4 and later
-   [%%ProductName%%](http://www.igniteui.com/) 15.1 and later

### <a id="steps"></a>Steps

1. Create a new HTML App with TypeScript in Visual Studio.
2. Include the %%ProductName%% theme and structural files:

    **In HTML:**
    ```html
    <!-- %%ProductName%% Required Combined CSS Files -->
    <link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />
    <link href="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/css/structure/infragistics.css" rel="stylesheet" />
    ```
    
3.  Add the JavaScript libraries ([modernizr](http://modernizr.com/) is optional):

    **In HTML:**
    ```html
    <!-- JavaScript Library Dependencies -->
    <script src="http://modernizr.com/downloads/modernizr-latest.js"></script>
    <script src="http://code.jquery.com/jquery-1.9.1.min.js"></script>
    <script src="http://code.jquery.com/ui/1.10.3/jquery-ui.min.js"></script>
    ```
4.  Include %%ProductName%% scripts. Preferably use a custom download, but you can also check ["Using JavaScript Resources in %%ProductName%%"](Deployment-Guide-JavaScript-Resources.html) topic for other methods.

    **In HTML:**
    ```html
    <!-- %%ProductName%% Required Combined JavaScript Files -->
    <script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.core.js"></script>
    <script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.lob.js"></script>
	<!-- Required by the data vizualization controls -->
	<script src="http://cdn-na.infragistics.com/igniteui/%%ProductVersion%%/latest/js/infragistics.dv.js"></script>
    ```

5. Add reference path to where the TypeScript file for your application is located:

    **In HTML:**
    ```html
    <script src="./TypeScript/sampleApp.js"></script> 
    ```
    
6. Include the reference paths to the %%ProductName%% and jQuery type definitions for TypeScript:

    **In TypeScript:**
    ```typescript
    /// <reference path="jqueryui.d.ts" />
    /// <reference path="jquery.d.ts" />
    /// <reference path="igniteui.d.ts" />
    ```
    
>**Note:** This is needed for TypeScript versions prior to 1.5 so the compiler could include the dependencies in the program during compilation. In 1.5 and newer versions they can be defined in a separate tsconfig.json file. For more information see the [tsconfig.json wiki page](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json)

7. In your view you need to instruct where your application runs. For example:

    **In HTML:**
    ```typescript
    <body>
        <!--...-->
        <div id="sampleAppID"></div>
        <!--...-->
    </body>
	```
    
8. And finally add the desired control, for example an igDialog:

    **In TypeScript:**
    ```typescript
    $(function () {
      // Initialize the igDialog
      $("#sampleAppID").igDialog({
          state: "closed",
          modal: true,
          draggable: false,
          resizable: false,
          height: 500,
          width: 400
      });
    });
    ```

## <a id="related-content"></a>Related Content

### <a id="samples"></a>Samples

The following samples provide additional information related to this topic.

-   [igHierarchicalGrid TypeScript](%%SamplesUrl%%/hierarchical-grid/typescript)
-   [igTreeGrid TypeScript](%%SamplesUrl%%/tree-grid/typescript)
-   [igPivotGrid TypeScript](%%SamplesUrl%%/pivot-grid/typescript)
