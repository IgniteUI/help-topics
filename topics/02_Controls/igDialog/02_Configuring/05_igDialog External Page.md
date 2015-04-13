<!--
|metadata|
{
    "fileName": "igdialog-external-page",
    "controlName": "igDialog",
    "tags": ["API","How Do I"]
}
|metadata|
-->

# igDialog External Page

## Topic Overview

## Purpose

This topic demonstrates how to make load external page into the `igDialog`™ control.

### Required background

The following topics are prerequisites to understanding this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.



### In this topic

This topic contains the following sections:

-   [**Configuring igDialog with External Page**](#configuring)
	-   [Overview](#overview)
    -   [Property Settings](#property-settings)
    -   [Example](#example)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="configuring"></a> Configuring igDialog with External Page

### <a id="overview"></a> Overview

You can use the `igDialog` and load not only a bunch of HTML elements, but an entire page. As you know, you can apply the `igDialog` on a HTML `DIV` element and the content that is inside that `DIV` will become the content of the dialog window. It is similar when the `igDialog` loads an external page – the difference is that the HTML container should be the `IFRAME` element. The content page of the `IFRAME` will be the content of the `igDialog`.

**In HTML:**


```html
<iframe id="dialog" src="http://www.infragistics.com/” frameborder="0"></iframe>
```

### <a id="property-settings"></a> Property Settings

The code from the previous paragraph is enough to load external page into the `igDialog`. The next `igDialog` properties are only recommended, because they will make the window user friendly.

The following table maps the desired property settings.

In order to: | Use this property: | And set it to:
--- | --- | ---
Show header text – title of the site | [headerText](%%jQueryApiUrl%%/ui.igDialog#options:headerText) | “Infragistics”
Make the `igDialog` maximize- able | [showMaximizeButton](%%jQueryApiUrl%%/ui.igDialog#options:showMaximizeButton) | true
Set a temporary `IFRAME` URL source. | [temporaryUrl](%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl) | “Infragistics.com”



> **Note:** It is not obligatory to use the [`temporaryUrl`](%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl) property, but using it may prevent exceptions. When the `igDialog` for the external page is created, the target element is removed from its original container and inserted into dynamically created main element. This may trigger an exception if the `IFRAME` element does not have some temporary URL as a source. If an error appears while loading external page, you can use the [`temporaryUrl`](%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl) property, which will set impermanent source of the `IFRAME` element.

### <a id="example"></a> Example

The screenshot below demonstrates how the `igDialog` load external page, as a result of the settings above:

![](images/04_6_igDialog_ExternalPage_1.png)



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Loading External Page](%%SamplesUrl%%/dialog-window/loading-external-page): This sample demonstrates how to load external content from a URL.





 

 


