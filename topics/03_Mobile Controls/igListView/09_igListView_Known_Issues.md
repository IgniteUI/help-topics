<!--
|metadata|
{
    "fileName": "iglistview-known-issues",
    "controlName": "igListView",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igListView )

## Topic Overview

### Purpose

This topic describes the known issues for the `igListView`™ control.

### Required background

The following table lists the topics required as a prerequisite to understanding this topic.

- [Known Issues](Known-Issues-Revision-History.html): Provides reference information for known issues and limitations of all %%ProductName%% controls.


## Known Issues and Limitations

The following table summarizes the known issues and limitations for `igListView`™ of the %%ProductName%% %%ProductVersionShort%% release. Detailed explanations of known issues and the possible workarounds are provided for some of the issues follow the summary table.

### Legend:
<table class="table">
	<tbody>
        <tr>
            <td>
![](../../images/images/positive.png)
			</td>
            <td>
Workaround available
			</td>
        </tr>
        <tr>
            <td>
![](../../images/images/negative.png)
			</td>
            <td>
No known workaround available
			</td>
        </tr>
        <tr>
            <td>
![](../../images/images/plannedFix.png)
            </td>
            <td>
Fix planned
			</td>
        </tr>
    </tbody>
</table>


Feature | Description | Resolved?
---|---|---
igListView will not work as expected when `$.mobile.ajaxEnabled = false` | If jQueryMobile is set so that `$.mobile.ajaxEnabled = false`, the list view does not work as expected since the child pages are not created in the page load. | ![](../../images/images/negative.png)
[]()Netflix oData may not work in Android 4 devices | There is a problem with Netflix oData service when a request is made by Android 4 browser. | ![](../../images/images/negative.png)
[]()Doing all fields filtering with presets may not work in oData | This is because oData works with one Boolean logic (AND or OR). In this case it will be an AND logic in the preset and an OR in the **All Fields**. | ![](../../images/images/negative.png)
[Doing all fields filtering with non-string fields will not work with entity to Linq queries](#linq) | Linq to entity does not support `ToString()` method. | ![](../../images/images/positive.png)
[Dividers are counted into the page size](#dividers) | This may cause sorting, filtering or load on demand to stop working as expected. For example you may get 4 items shown in a page size of 5. This is a problem by design and will not be addressed. | ![](../../images/images/positive.png)




### <a id="linq"></a> Doing all fields filtering with non-string fields will not work with entity to Linq queries workaround

Linq to entity does not support `ToString()` method.

For example the following code:

**In C#:**

```csharp
private ActionResult FilterData()
{
    IQueryable<Person> queryable = this.GetDataFromLinqToEntities();
    return View(queryable);
}
```

should be rewritten as:

**In C#:**

```csharp
private ActionResult FilterData()
{
    IQueryable<Person> queryable = this.GetDataFromLinqToEntities();
    return View(queryable.ToArray().AsQueryable());
}
```

### <a id="dividers"></a> Dividers are counted into the page size workaround

You can handle client side events and try to manually load more data.




## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics


The following topics provide additional information related to this topic.

- [Accessibility Compliance (igListView)](igListView-Accessibility-Compliance.html): This topic explains the accessibility features of the `igListView`™ and gives information on how to achieve accessibility compliance for pages containing `igListView`.

- [Accessibility Compliance](Accessibility-Compliance.html): Provides reference information for accessibility compliance of all %%ProductName%% controls.





 

 


