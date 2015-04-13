<!--
|metadata|
{
    "fileName": "igdialog-animations",
    "controlName": "igDialog",
    "tags": ["API"]
}
|metadata|
-->

# igDialog Animations

## Topic Overview

### Purpose

This topic demonstrates how to animate the `igDialog`™ when it is either opened or closed.

### Required background

The following topics are prerequisites to understanding this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.


### In this topic

This topic contains the following sections:

-   [**Control Configuration Summary**](#configuration-summary)
-   [**Configuring igDialog Animation**](#configuring)
    -   [Property settings](#configure-properties)
    -   [Example with jQuery](#configure-jquery)
    -   [Example with MVC](#configure-mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="configuration-summary"></a> Control Configuration Summary

The properties that need to be configured to animate `igDialog` upon closing and opening are:

- [openAnimation](%%jQueryApiUrl%%/ui.igDialog#options:openAnimation)
- [closeAnimation](%%jQueryApiUrl%%/ui.igDialog#options:closeAnimation)


## <a id="configuring"></a> Configuring igDialog Animation

For a better user interface experience you can create animations when the dialog is opening and closing. The value for any of the animation properties can be any parameter from the jQuery UI [`show()`](http://docs.jquery.com/UI/Effects/show)/[`hide()`](http://docs.jquery.com/UI/Effects/hide) methods. For more information about the parameters, please review jQuery documents.

### <a id="configure-properties"></a> Property settings

The following table maps the desired animation features to property settings:

In order to: | Use this property: | And set it to:
--- | --- | ---
Animate *igDialog* on opening | [openAnimation](%%jQueryApiUrl%%/ui.igDialog#options:openAnimation) | “slide”
Animate *igDialog* on closing | [closeAnimation](%%jQueryApiUrl%%/ui.igDialog#options:closeAnimation) | “explode”


### <a id="configure-jquery"></a> Example with jQuery

The code below demonstrates how set the `igDialog` animations in jQuery:

**In JavaScript:**

```js
$("#dialog").igDialog({
    openAnimation: “slide”
    closeAnimation: "explode"
});
```

### <a id="configure-mvc"></a> Example with MVC

The code below demonstrates how set the `igDialog` animations using Dialog wrapper:

**In C#:**

```csharp
<%= Html.Infragistics()
    .Dialog()
    .ContentID("dialog")
    .OpenAnimation("slide")
    .CloseAnimation("explode")
    .Render()
%>
```



## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [Adding *igDialog*](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.






 

 


