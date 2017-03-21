<!--
|metadata|
{
	"fileName": "historyjs-integration-with-igniteui-controls",
	"controlName": [],
	"tags": ["Getting Started","How to", "historyjs"]
}
|metadata|
-->

# History.js Integration with Ignite UI controls

## Topic Overview

### Purpose

Ignite UI controls are fully integrated with history.js – a popular framework for browser history support. This topic describes the requirements to achieve that and demonstrates how the igGrid control can be integrated with history.js framework.

### Required background

The following table lists the concepts, topics, and articles required as a prerequisite to understanding this topic.

- Topics
    - [Paging](igGrid-Paging.html) Paging feature allows you to divide your data in pages so that you can achieve better performance by fetching only a predefined number of records from your original data source.
    - [Filtering](igGrid-Filtering.html) The Filtering feature of the `igGrid` allows users to do Excel-style filtering of data.
    - [Sorting Overview](igGrid-Sorting-Overview.html) The igGrid control sorting feature enables single or multiple column sorting in an ascending or descending order.
    - [Column Resizing](igGrid-Column-Resizing.html) This topic explains the column resizing functionality of the `igGrid`™ control.
- External Resources
    - [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
    - [History.js library](https://github.com/browserstate/history.js/)
	- [Getting Started with the History API](http://blog.teamtreehouse.com/getting-started-with-the-history-api)


### In this topic

This topic contains the following sections:

-   [**History.js Overview**](#overview)
-   [**igGrid and History.js Integration**](#grid)
-   [**Sample**](#historyjs-sample)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)



## <a id="overview"></a> History.js Overview

HTML5 has History/State APIs that allows manipulating the browser history. With the expanding usage of Single Page Applications, where all the page manipulations happen asynchronously, the need to change the page URL accordingly, when having dynamic page change, grows. This is also required, in order to have a unique entry point to each page section. HTML5 History/State APIs allows saving a page states and creating corresponding URL's for each of them, and while navigating back and forward across the page to restore that page's states.
Not all the browsers still fully support that functionality, but the [History.js](https://github.com/browserstate/history.js/) framework polyfills the problems that may occur across the browsers.

When using the browser History API, a current page is defined with three main parameters:

-   **state** - object that is holding current page information.
-   **title** - title of the current page.
-   **url** - the entry point that is associated with the current page in its state.

Defining the current page state, using the parameters above, then the page can be added to the history stack, replaced or restored from there and it will be available, when navigating through the browser history.

Ignite UI controls can be fully integrated with history.js. When we want to save the state of IgniteUI control, we use the client-side event API of the latter. Those events carry the current state of the IgniteUI control - a state we can use the push it to the browser history stack. Follow the next paragraph for more information of how to integrate igGrid with the HistotyJS framework.

The following are the browser History and History.js API methods that are needed to enable that functionality for the IgniteUI controls. Follow that [topic](https://developer.mozilla.org/en-US/docs/Web/API/History_API), for detailed information about the full browser History API and [History.js](https://github.com/browserstate/history.js/) framework overview in GitHub.


 - **pushState()** - add an entry to the history stack.

```
window.History.pushState(state, title, url);
```


- **getState()** - get current entry from the history stack.

```
window.History.getState();
```


 - **replaceState()** - update an entry to the history stack.

```
window.History.replaceState(currState.data);
```


 - **statechange** - History.js event fired when navigation through the browser history appears.

```
window.History.Adapter.bind(window, 'statechange', function (e, args) { }
```

## <a id="grid"></a> igGrid and History.js Integration
In this section igGrid control is used to show how IgniteUI control can be integrated with the History.js framework. The following grid features are used, for the need of the sample: paging, filtering, sorting and resizing. For each one of them we will define a state that is required to properly save it. We will save that state and then will ensure when the _statechange_ history event is fired, to properly restore the grid state.

The state object contains all the information needed to restore the page at the desired point and it is associated with a URL to describe it.
Let's start by adding a paging state to the browse history. After that will see what's the difference when adding the same functionality for the sorting feature:


```
pageIndexChanged: function (e, args) {
    var pageIndex = args.pageIndex + 1, // pageIndex starts from 0
        state = { key: "page", value: pageIndex };
    window.History.pushState(state, null, formURL("page", pageIndex));
}
```
We choose our state to have the name of the feature and the pageIndex. This is all we need to have the proper paging state and restore it lately.
Note: In the sample code below you can see what the _formURL()_ method is doing to create an proper URL. In this case with paging, it builds the following string: "?page=2" and associate it with the current paging state, while for other features it is more complicated.

Then the state can be recovered inside the statechange event handler:


```
window.History.Adapter.bind(window, 'statechange', function (e, args) {
    currState = window.History.getState().data;
    gridHistoryJS.igGridPaging("pageIndex", currState.value - 1);
}
```

This is enough for a feature like paging, where we always have a selected page and also have only one method to change paging state - _pageIndex()_.
The procedure above will not work for a feature like sorting. It's because in sorting, we can have several sorted columns, which state we need to save and restore separately, and when restoring we may need to unsort a column, instead of sorting it, which is achieved with two different API methods. We will look in details, with the next case. Let imagine we have the following case:

1. The grid is not sorted.
2. Change paging from first to second page.
3. Sort a column in ascending order.
4. Sort the same column in descending order.
5. Go back in browser history.
6. Go back in browser history again.

When the first back is hit, then what we want to do is to change last sorted column state, from descending to ascending. If we have added previously a sorting state, the same way as paging:


```
columnSorted: function (e, args) {
    var columnKey = args.columnKey,
        dir = args.direction,
        state = { key: "sort", value: [columnKey, dir] };
    if (!isEmptyValue(columnKey) && !isEmptyValue(dir)) {
        window.History.pushState(state, null, formURL("sort", [columnKey, dir]));
    }
}
```

then we can restore last column sorting state correctly using the code below.


```
window.History.Adapter.bind(window, 'statechange', function (e, args) {
    var currState = window.History.getState().data,
        column = currState.value.columnKey,
        status = currState.value.dir;

        gridHistoryJS.igGridSorting("sortColumn", column, status);

}
```

But when the second back is hit, and we go from state 3 to 2 (in the list above), then the code above will not work, cause what we really want is unsort the last sorted column. That's why the following code will be needed instead:


```
window.History.Adapter.bind(window, 'statechange', function (e, args) {
    var currState = window.History.getState().data,
        column = currState.value.columnKey;

        gridHistoryJS.igGridSorting("unsortColumn", column);

}
```

The problem here is how to distinguish, which is the correct method you need, when going back in the history? This is not possible, unless you have some additional information for the current history state. What we really need, in this case is, before we add new state for the sorted column (in 3.), is to modify the previous paging state and add an undo state for the sorted column. This will help, not only restore the previous paging state, but in addition to undo and unsort the current sorted one.

For each feature state, before we add it to the history stack, we want to save its undo state. This can happen in an IgniteUI control's _-ing_ event, where we still have the old state information. For sorting, it is the columnSorting event:


```
columnSorting: function (e, args) {
    var currState = window.History.getState(), data;

            data = { key: "sort", value: [args.columnKey] };
			data.undo = true;
			currState.data.undoData = data;
			window.History.replaceState(currState.data);
}
```

We take the previous state, add and undo information to it, and replace it in the history stack. 
The code above defines an object _undoData_ similar to the _data_ one, having in addition a flag that says the state needs to be undone.


```
window.History.Adapter.bind(window, 'statechange', function (e, args) {
    var currState = window.History.getState().data,
        column = currState.value.columnKey,
        status = currState.value.dir,
        undoColumn = currState.undoData.value.columnKey;

        if (currState.undoData.undo) {
            gridHistoryJS.igGridSorting("unsortColumn", undoColumn);
        } else {
            gridHistoryJS.igGridSorting("sortColumn", column, status);
        }

}
```

## <a id="historyjs-sample"></a> Sample
This sample demonstrates how the igGrid control can be integrated with history.js. Filter, sort, resize the list of footballers or change the grid page, to create a new view and send it using the generated browser URL.
In addition, the sample have some code that apply a sorting, when the grid is initially rendered. It also shows how the saving, replacing and restoring happens for the other grid features and how to form an URL for the different grid feature states.


<div class="embed-sample">
   [HistoryJS](%%SamplesEmbedUrl%%/grid/history)
</div>

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Manipulating the browser history](https://developer.mozilla.org/en-US/docs/Web/API/History_API)
- [History.js library](https://github.com/browserstate/history.js/)
- [Getting Started with the History API](http://blog.teamtreehouse.com/getting-started-with-the-history-api)
- [Paging](igGrid-Paging.html) Paging feature allows you to divide your data in pages so that you can achieve better performance by fetching only a predefined number of records from your original data source.
- [Filtering](igGrid-Filtering.html) The Filtering feature of the `igGrid` allows users to do Excel-style filtering of data.
- [Sorting Overview](igGrid-Sorting-Overview.html) The igGrid control sorting feature enables single or multiple column sorting in an ascending or descending order.
- [Column Resizing](igGrid-Column-Resizing.html) This topic explains the column resizing functionality of the `igGrid`™ control.