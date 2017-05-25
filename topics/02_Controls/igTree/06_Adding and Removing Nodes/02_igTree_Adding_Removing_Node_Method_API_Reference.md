<!--
|metadata|
{
    "fileName": "igtree-adding-removing-node-method-api-reference",
    "controlName": "igTree",
    "tags": ["API"]
}
|metadata|
-->

# Add and Remove Node Method API Reference (igTree)

## Add and Remove Node Method Reference
### Introduction

This topic provides reference information about the methods of the `igTree`™ control related to adding and removing nodes. The methods are listed alphabetically.

### Add and Remove node methods reference chart

The following table explains the methods of add and remove `igTree` control and lists the default and recommended values.

<table class="table table-bordered">
	<thead>
		<tr>
            <th>
Method
			</th>

            <th>
Description
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
[addNode](%%jQueryApiUrl%%/ui.igtree#methods:addNode)
			</td>

            <td>
                Adds a new array of nodes to the tree. New nodes are appended to the root or to a specified parent node.

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
[node](%%jQueryApiUrl%%/ui.igtree#methods:addNode)
			</td>

                            <td>
Specifies the data for creating the new node.
			</td>
                        </tr>

                        <tr>
                            <td>
[parent](%%jQueryApiUrl%%/ui.igtree#methods:addNode)
			</td>

                            <td>
Specifies the jQuery object of the parent node to which the nodes are to be appended.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>
        </tr>

        <tr>
            <td>
[removeAt](%%jQueryApiUrl%%/ui.igtree#methods:removeAt)
			</td>

            <td>
                Removes the node with the specified path and all of its children.

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
[path](%%jQueryApiUrl%%/ui.igtree#methods:removeAt)
			</td>

                            <td>
Specifies the path of the node to be removed.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>
        </tr>

        <tr>
            <td>
[removeNodesByValue](%%jQueryApiUrl%%/ui.igtree#methods:removeNodesByValue)
			</td>

            <td>
                Removes all nodes with the specified value.

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
[value](%%jQueryApiUrl%%/ui.igtree#methods:removeNodesByValue)
			</td>

                            <td>
Specifies the value of the nodes to be removed.
			</td>
                        </tr>
                    </tbody>
</table>
                <br>
            </td>
        </tr>

        <tr>
            <td>
[transactionLog](%%jQueryApiUrl%%/ui.igtree#methods:transactionLog)
			</td>

            <td>
Returns the transaction log stack.
			</td>
        </tr>
    </tbody>
</table>


## Related Content
### Topics

The following topics provide additional information related to this topic.

- [API Links (igTree)](igTree-jQuery-And-ASP-NET-MVC-Helper-API-Links.html): This topic provides links to `igTree` jQuery and ASP.NET MVC Helper API.

- [Adding and Removing Nodes Overview and Examples (igTree)](igTree-Adding-Removing-Nodes-Overview-Examples.html): This topic explains, with code examples, how to add and remove nodes of `igTree` control programmatically.

- [Retrieving the Transaction Log (igTree)](igTree-Retrieving-Transaction-Log.html): This topic explains, with code examples, how to retrieve the transaction log about adding and removing nodes in the `igTree` control.

### Samples

The following samples provide additional information related to this topic.

- [API and Events](igtree-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to use `igTree` API.





 

 


