<!--
|metadata|
{
    "fileName": "ightmleditor-angularjs-support",
    "controlName": "igHtmlEditor",
    "tags": ["AngularJS"]
}
|metadata|
-->

# AngularJS Support (igHtmlEditor)

## Topic Overview
This topic shows how to configure `igHtmlEditor` with AngularJS. Each of our controls has a corresponding AngularJS directive, `igHtmlEditor` as well. This is an overview of the AngularJS `igHtmlEditor` directive.

### In this topic

This topic contains the following sections:

-   [Preview](#Preview)
-   [Requirements](#Requirements)
-   [Details](#Details)
-   [Related Content](#Related_Content)

### <a id="Preview"></a>Preview
The following is a preview of the final result.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/html-editor/angular](%%SamplesEmbedUrl%%/html-editor/angular)
</div>

### <a id="Requirements"></a>Requirements
In order to run this sample, you need to have:
-   The required Ignite UI JavaScript and CSS files
-   The Ignite UI AngularJS directives

### <a id="Details"></a>Details
In the sample we have an `igHtmlEditor` initialized with its AngularJS directive. The data source of the `igHtmlEditor` is stored in a variable in the AngularJS controller. The same variable holding the data is bound to a HTML `textarea`. When we update the data from the `textarea`, the `igHtmlEditor`'s content is immediately updated.

### <a id="Related_Content"></a>Related Content
The following topics provide additional information related to this topic:
-   [Using Ignite UI with AngularJS](Using-Ignite-UI-with-AngularJS.html) - This topic contains an overview using the Ignite UI directives for AngularJS.
-   [Conditional and Advanced Templating with AngularJS](Conditional-and-Advanced-Templating-with-AngularJS.html) - This topic explains how to use conditional templates and use advanced templating methods to customize controls created with the Ignite UI directives for AngularJS.