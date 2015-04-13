<!--
|metadata|
{
    "fileName": "igcombo-known-limitations",
    "controlName": "igCombo",
    "tags": ["Known Issues","Tips and Tricks"]
}
|metadata|
-->

# Known Issues and Limitations (igCombo)



##Known Issues and Limitations Summary


### Known issues and limitations summary chart

The following table summarizes the known issues and limitations of the `igCombo`™ control. Detailed explanations of some of the issues and the existing workarounds are provided after the summary table.

Legend | 
-------|------
![](../../images/images/positive.png) | Workaround available
![](../../images/images/negative.png) | No known workaround
![](../../images/images/plannedFix.png) | No known workaround, fix planned

Issue | Description | Status
---|---|---
[Multiple selection and custom values cannot be used together](#multiSelection) | `AllowCustomValue = true` is together with either with `multiSelection = “on”` `or multiSelection = “onWithCheckBoxes”` is not supported. | ![](../../images/images/positive.png)
[Using the key of the parent combo for cascading combos prevents filtering the child combo](#parentComboKey) | For the workaround, see the [Binding Cascading igCombo Controls to a Cascading Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html)topic. | ![](../../images/images/positive.png)
[Load-on-demand not supported for cascading igCombo child](#Load_on_demand) | Configuring a cascading child `igCombo` to have load-on-demand enabled together with defining its parent combo key is not supported. | ![](../../images/images/negative.png)


##Known Issues and Limitations Details


###<a id="multiSelection"></a>Multiple selection and custom values cannot be used together

Using multiple selection and custom values together is not supported (`AllowCustomValue = true` is together with either with         `multiSelection = “on”` or `multiSelection = “onWithCheckBoxes”` is not supported).

**Workaround**

A potential work around for this issue is to supply the user an option to add a value to the list of choices externally of the `igCombo` control. This separates the input of new values from the multiple selection behavior provided by the `igCombo` control.

###<a id="parentComboKey"></a> Using the key of the parent combo for cascading combos prevents filtering the child combo

Using a [parentComboKey](%%jQueryApiUrl%%/ui.igcombo#options:parentComboKey) for cascading igCombos makes it impossible to filter the child `igCombo`. If you require filtering on child igCombos, use the cascading data sources approach instead of having a parent combo key. For details, see the [Binding Cascading `igCombo` Controls to a Cascading Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html) topic.

###<a id="Load_on_demand"></a> Load-on-demand not supported for cascading igCombo child

Configuring a cascading child `igCombo` to have load-on-demand enabled together with defining its parent combo key is not supported. This is due to the fact that the data source for cascading combo can be obtained only once, at the time of the initial loading. Changing the selected item in the parent combo may only filter the existing records in the data source.



##Related Content


### Topics

The following topics provide additional information related to this topic.

-	[Binding Cascading igCombo Controls to a Cascading Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Cascading-Data-Sources.html): This topic explains how to bind parent and child `igCombo` controls to a cascading data source. For binding each of the cascading `igCombo` controls to a different data source, see the [Binding Cascading igCombo Controls to Individual Data Sources](igCombo-Binding-Cascading-igCombo-Controls-to-Individual-Data-Sources.html) topic.





 

 


