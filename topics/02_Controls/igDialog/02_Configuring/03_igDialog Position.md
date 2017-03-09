<!--
|metadata|
{
    "fileName": "igdialog-position",
    "controlName": "igDialog",
    "tags": ["API","How Do I"]
}
|metadata|
-->

# igDialog Position

## Topic Overview

### Purpose

This topic demonstrates how to position `igDialog`™.

### Required background

The following topics are prerequisites to understanding this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.



### In this topic

This topic contains the following sections:

-   [**Control Configuration Summary**](#configuration-summary)
-   [**Configuring igDialog Position**](#position)
    -   [Property Formats](#position-formats)
    -   [Example with Object](#position-object)
    -   [Example with jQuery UI Object](#position-jquery-object)
-   [**Configure igDialog Stack Order**](#stack-order)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="configuration-summary"></a> Control Configuration Summary

The following table lists the configurable aspects of the `igDialog` control. Additional details are available after the table.

Configurable aspects | Details | Properties
--- | --- | ----
Configuring `igDialog` Position | The properties that need to be configured to position the `igDialog`. | [position](%%jQueryApiUrl%%/ui.igDialog#options:position)
Configure `igDialog` stack order | The property that specifies the stack order of the dialog. | [zIndex](%%jQueryApiUrl%%/ui.igDialog#options:zIndex)





## <a id="position"></a> Configuring igDialog Position

The `igDialog` can be positioned according to its parent. The control API has a property called [`position`](%%jQueryApiUrl%%/ui.igDialog#options:position) that can be configured and modified dynamically. The following table will show you how to use this property and what values it accepts.

### <a id="position-formats"></a> Property Formats

The table below demonstrates what type of format property [`position`](%%jQueryApiUrl%%/ui.igDialog#options:position) accepts:

<table class="table">
	<tbody>
		<tr>
			<th>
				Format
			</th>

			<th>
				Example
			</th>

			<th>
				Type
			</th>
		</tr>

		<tr>
			<td>
				{ left: leftPos, top: topPos }
			</td>

			<td>
				{ left: 100, top: 200 }
			</td>

			<td>
				JavaScript object
			</td>
		</tr>

		<tr>
				<td>
				{<br />
					my: “position”,<br />
					at: “position”,<br />
					of: “parent”,<br />
					offset: “left top”,<br />
					collision: “alternative position”<br />
					using: function(){}<br />
				}
			</td>

			<td>{</span> my: “left top”,</span> at: “left top”,</span> of: window,</span> offset: “</span>10</span>0</span> 20</span>0”</span>}</span></td>

			<td>object (supported by jQuery UI</span> <a href="http://jqueryui.com/demos/position/" target="_blank">position()</a> method)</span></td>
		</tr>
	</tbody>
</table>

### <a id="position-object"></a> Example with Object

The code below demonstrates how the `igDialog` can be positioned using object:

**In JavaScript:**

```js
$("#dialog").igDialog({
    position: { left: 100, top: 200 }
});
```

**In C#:**

```csharp
<%= Html.Infragistics()
    .Dialog()
    .Position(100,200)
    .Render()
%>
```

### <a id="position-jquery-object"></a> Example with jQuery UI Position Object

The code below demonstrates how the `igDialog` can be positioned using specially defined objects supported by jQuery UI [`.position()`](http://api.jqueryui.com/position/):

**In JavaScript:**

```js
var dialogPosition = {
    my: “left top”,
    at: “left top”,
    of: window,
    offset: “100 200”
}
$("#dialog").igDialog({
    position: dialogPosition
});
```



## <a id="stack-order"></a> Configure igDialog Stack Order

By default, the `igDialog` window appears at the top of the page stack. Its default [`zIndex`](%%jQueryApiUrl%%/ui.igDialog#options:zIndex) value is 1000, which means if you don’t modify any other DOM elements with value higher than 1000, the dialog will appear at the top of the page. If you want to change this default value because you want to show the element over or underneath another element, you can do this by changing the [`zIndex`](%%jQueryApiUrl%%/ui.igDialog#options:zIndex) value.

### Example

The code below demonstrates how to change the [`zIndex`](%%jQueryApiUrl%%/ui.igDialog#options:zIndex):

**In JavaScript:**

```js
$("#dialog").igDialog({
    zIndex: 1001
});
```

**In C#:**

```csharp
<%= Html.Infragistics()
    .Dialog()
    .ZIndex(1001)
    .Render()
%>
```


## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [***igDialog* Overview**](igDialog-Overview.html): The topic introduces the user to the `igDialog` control’s main features.

- [**Adding *igDialog***](Adding-igDialog.html): This topic demonstrates how to add the `igDialog` control to a web page.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [API and Events](igdialog-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to handle events in the Dialog Window control and API usage.





 

 


