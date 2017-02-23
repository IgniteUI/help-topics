<!--
|metadata|
{
    "fileName": "igcombo-angularjs-support",
    "controlName": "igCombo",
    "tags": ["AngularJS"]
}
|metadata|
-->

# AngularJS Support (igCombo)

## Topic Overview
This topic shows how to configure `igCombo` with AngularJS. Each of our controls has a corresponding AngularJS directive, `igCombo` as well. This is an overview of the AngularJS `igCombo` directive.

### In this topic

This topic contains the following sections:

-   [Preview](#Preview)
-   [Requirements](#Requirements)
-   [Details](#Details)
-   [Related Content](#Related_Content)

### <a id="Preview"></a>Preview
The following is a preview of the final result.

<div class="embed-sample">
   [%%SamplesEmbedUrl%%/combo/angular](%%SamplesEmbedUrl%%/combo/angular)
</div>

### <a id="Requirements"></a>Requirements
In order to run this sample, you need to have:
-   The required Ignite UI JavaScript and CSS files
-   The Ignite UI AngularJS directives

### <a id="Details"></a>Details
In the sample we have listed 20 products. Using the AngularJS ng-repeat we loop through the data source records and for each of these products we create an input and bind it to the ProductName. In this way when we edit something in the input, the change is immediately reflected in the data source. Above the product names there are two `igCombo` controls with similar options. They are bound to the data source with the products. Also they are bound to a value from the controller (combo.value1) which stores the selected product id. On the left side of the `igCombo` controls we have an input which is bound to the same value (combo.value1). We can edit the inputs holding the product names, select a value from any `igCombo` or edit the selected product id - the two-way binding will update the `igCombo` controls and the input with the corresponding values instantly.

### <a id="Related_Content"></a>Related Content
The following topics provide additional information related to this topic:
-   [Using Ignite UI with AngularJS](Using-Ignite-UI-with-AngularJS.html) - This topic contains an overview using the Ignite UI directives for AngularJS.
-   [Conditional and Advanced Templating with AngularJS](Conditional-and-Advanced-Templating-with-AngularJS.html) - This topic explains how to use conditional templates and use advanced templating methods to customize controls created with the Ignite UI directives for AngularJS.