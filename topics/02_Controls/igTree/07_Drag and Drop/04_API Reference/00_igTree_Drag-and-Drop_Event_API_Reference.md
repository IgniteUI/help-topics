<!--
|metadata|
{
    "fileName": "igtree-drag-and-drop-event-api-reference",
    "controlName": "igTree",
    "tags": ["API","Events"]
}
|metadata|
-->

# Drag-and-Drop Event API Reference (igTree)

## Drag-and-Drop Event Reference
### Introduction

The following chart provides reference information about the events of the `igTree`™ control related to its Drag-and-drop feature. The events are listed in alphabetical order.

### Drag-and-drop event reference chart

The following table explains the drag-and-drop events of the `igTree` control and, for each event, indicates whether it can be stopped.

**Legend:**
<table class="table">
    <tbody>
        <tr>
            <td><img alt="" src="../../../../images/images/positive.png" width="19" height="18"></td>
            <td>Yes (= the event <span class="ig-bold">can</span> be stopped)</td>
        </tr>
        <tr>
            <td><img alt="" src="../../../../images/images/negative.png" width="18" height="19"></td>
            <td>No (= the event <span class="ig-bold">cannot</span> be stopped)</td>
        </tr>
    </tbody>
</table>

<table class="table table-bordered">
	<thead>
		<tr>
            <th colspan="2">
Event
			</th>

            <th>
Description
			</th>

            <th>
Can be stopped?
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td colspan="2">
[drag](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

            <td>
                Raised during the node is being dragged. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage
                    follow.

                <table class="table table-bordered">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.binding](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the binding property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.data](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the data property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.element](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the element property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.helper](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the helper property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.offset](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the offset property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.orginalPosition](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the originalPosition property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.path](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the path property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.position](%%jQueryApiUrl%%/ui.igtree#events:drag)
			</td>

                            <td>
Gets a reference to the position property.
			</td>
                        </tr>
                    </tbody>
</table>
            </td>

            <td>
![](../../../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td colspan="2">
[dragStart](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

            <td>
                Raised when the dragging of the node begins. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage
                    follow.

                <table class="table table-bordered">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.binding](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the binding property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.data](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the data property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.element](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the element property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.helper](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the helper property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.offset](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the offset property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.orginalPosition](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the originalPosition property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.path](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the path property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.position](%%jQueryApiUrl%%/ui.igtree#events:dragStart)
			</td>

                            <td>
Gets a reference to the position property.
			</td>
                        </tr>
                    </tbody>
</table>
            </td>

            <td>
![](../../../../images/images/positive.png)
			</td>
        </tr>

        <tr>
            <td colspan="2">
[dragStop](%%jQueryApiUrl%%/ui.igtree#events:dragStop)
			</td>

            <td>
                Raised when dragging the node has stopped. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage
                    follow.

                <table class="table table-bordered">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.helper](%%jQueryApiUrl%%/ui.igtree#events:dragStop)
			</td>

                            <td>
Gets a reference to the helper property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.offset](%%jQueryApiUrl%%/ui.igtree#events:dragStop)
			</td>

                            <td>
Gets a reference to the offset property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.orginalPosition](%%jQueryApiUrl%%/ui.igtree#events:dragStop)
			</td>

                            <td>
Gets a reference to the originalPosition property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.position](%%jQueryApiUrl%%/ui.igtree#events:dragStop)
			</td>

                            <td>
Gets a reference to the position property.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>

			</td>
        </tr>

        <tr>
            <td colspan="2">
[nodeDropped](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

            <td>
                Raised after a node has been dropped. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage follow.

                <table class="table table-bordered">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.binding](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the binding property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.data](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the data property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.draggable](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the draggable property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.element](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the element property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.helper](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the helper property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.offset](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the offset property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.path](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the path property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.position](%%jQueryApiUrl%%/ui.igtree#events:nodeDropped)
			</td>

                            <td>
Gets a reference to the position property.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
![](../../../../images/images/negative.png)
			</td>
        </tr>

        <tr>
            <td colspan="2">
[nodeDropping](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

            <td>
                Raised when the node is being dropped. The handler function takes arguments `evt` and `ui`. The `ui` argument options and their usage follow.

                <table class="table table-bordered">
	<thead>
		<tr>
                            <th>
Argument name
			</th>

                            <th>
Usage
			</th>
                        </tr>
	</thead>
	<tbody>
                        

                        <tr>
                            <td>
[ui.binding](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the binding property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.data](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the data property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.draggable](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the draggable property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.element](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the element property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.helper](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the helper property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.offset](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the offset property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.path](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the path property.
			</td>
                        </tr>

                        <tr>
                            <td>
[ui.position](%%jQueryApiUrl%%/ui.igtree#events:nodeDropping)
			</td>

                            <td>
Gets a reference to the position property.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>

            <td>
![](../../../../images/images/positive.png)
			</td>
        </tr>
    </tbody>
</table>





## Related Content
### Topics

The following topics provide additional information related to this topic.

- [Drag-and-Drop Property Reference (igTree)](igTree-Drag-and-Drop-Property-API-Reference.html): This topic is a chart with reference information about the properties of the `igTree` control related to its Drag-and-Drop feature.

- [API Links (igTree)](igTree-jQuery-And-ASP-NET-MVC-Helper-API-Links.html): This topic provides links to the `igTree` jQuery and ASP.NET MVC Helper API.

### Samples

The following samples provide additional information related to this topic.

- [Drag and Drop - Single Tree](%%SamplesUrl%%/tree/drag-and-drop-single-tree): This sample demonstrates how to initialize the `igTree` control with the Drag-and-Drop feature enabled.

- [Drag and Drop - Multiple Trees](%%SamplesUrl%%/tree/drag-and-drop-multiple-trees): This sample demonstrates how to drag-and-drop nodes between two `igTrees`.

- [API and Events](igtree-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to use `igTree` API.





 

 


