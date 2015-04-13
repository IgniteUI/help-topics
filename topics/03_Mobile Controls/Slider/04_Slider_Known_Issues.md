<!--
|metadata|
{
    "fileName": "slider-known-issues",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Known Issues and Limitations (Slider (mobile))

## Known Issues and Limitations Summary

The following table summarizes the known issues and limitations for the `Slider` (mobile) control.

Legend: | 
------------|-------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | Fix planned


#### Slider (mobile)

Issue | Description | Status
---|---|---
[Mobile Slider does not slide on Windows Phone 7](#mobile-slider-windows-seven) | Because Windows® Phone 7 does not support standard touch events, the slider is read-only. | ![](../../images/images/positive.png)


## Known Issues and Limitations Details
### <a id="mobile-slider-windows-seven"></a>Mobile Slider does not slide on Windows Phone 7

Because Windows Phone 7 does not support standard touch events, the slider is read-only.

> **Workaround**
> 
>  By default, on devices that do not support touch events, the slider instantiates with a numeric input field rendered on the left-hand side of the slider. This behavior can be customized using the `NumericInputDisplayMode` method on the ASP.NET helper.



 

 


