<!--
|metadata|
{
    "fileName": "iggrid-virtualization-overview",
    "controlName": "igGrid",
    "tags": []
}
|metadata|
-->

# Virtualization Overview (igGrid)

## Topic Overview

### Purpose

This topic introduces the Virtualization feature of the `igGrid`™ control.



## Introduction

Virtualization is a feature of the `igGrid` control that reduces the number of the active in-memory DOM objects. Virtualization achieves complete transparency in user experience as compared to a non-virtualized grid.

The `igGrid` support two virtualization types – fixed and continuous.

Using Virtualization, you can easily bind data to sources that contain millions of records and still render a large portion of data once on the client.



## Supported Virtualization Types

The following provides a brief explanation of the Virtualization types supported by the `igGrid` control.

- [Fixed Virtualization](#fixed): Only the visible rows are rendered in the grid.

- [Continuous Virtualization](#continuous): A pre-defined number of rows is rendered in the grid.



### <a id="fixed"></a> Fixed Virtualization 

With Fixed Virtualization, only the visible rows are rendered in the grid and these rendered rows are used later as a container for the generated data. As users start to scroll the grid, and data in the pool of rows is updated and the rows DOM elements are reused.

Reuse of existing DOM elements translates to constant rendering speed and a very low memory footprint. For example, whether you load 100 or 10,000 records into the grid, the memory and CPU consumption is exactly the same (excluding overhead for data binding).

> **Note:** Fixed Virtualization is also supported for columns, too. It allows users to scroll through the grid horizontally. Only the table cells belonging to visible columns are present in the HTML DOM structure; therefore, the pool of DOM elements is additionally limited in this case by the number of visible columns.

Achieving grid virtualization is possible by implementing client side logic to reuse DOM elements. Therefore, a virtualized grid does not make server requests to fetch additional data. The grid works with the data already available on the client. If you prefer not to load the entire data set to the client at once (which in some circumstances may not be optimal, particularly when you have a very large set of data), you can still combine virtualization with paging, and set your grid to have a large page size.

With Fixed Virtualization, all `igGrid` features except the Grouping features (i.e. Paging, Sorting, Filtering, and Selecting), work as expected.

The picture on the left demonstrates a grid with 10,000 records loaded at on the client. The picture on the right shows the 16 HTML table elements that actually exist in the DOM to support the virtualized grid.

![](images/igGrid_Virtualization_Overview_01.png)

**Related Topics:**

-   [Enabling and Configuring Virtualization](igGrid-Enabling-and-Configuring-Virtualization.html)


### <a id="continuous"></a> Continuous Virtualization 

Continuous Virtualization uses a pre-defined number of rows. As the user scrolls down/up the virtualization determines whether the currently rendered rows are sufficient to display the next/previous portion of rows. If not, the current portion of rows is being disposed and the required portion of rows is recreated. Thus, having 1000 data rows will be displayed by only say 30 as opposed to 1000 row tables which significantly loads the DOM structure.

Each row in the `igGrid` control could span on several lines. Thus, row height may vary from row to row. To determine which rows should be displayed after a scroll takes place, the virtualization calculates the average row height. However, this average row height is just an approximate estimation, because its calculation based on the currently rendered rows and not on all available rows. From here, each time when it is being scrolled, the rows about to be displayed are estimated. This might lead to incorrect scroller position when the scroller is at the top/end positions. The virtualization checks for such situations after each scroll and corrects scroller’s position if necessary.

The picture on the left demonstrates a grid with 1,000 records loaded at on the client. The picture on the right shows the 30 HTML table elements that actually exist in the DOM to support the virtualized grid.

![](images/igGrid_Virtualization_Overview_2.png)

> **Note**: Continuous virtualization enjoys the widest support among controls in Ignite UI and should be your first choice when selecting a virtualization mode. You may find fixed virtualization necessary when attempting to implement column virtualization, but otherwise continuous virtualization is recommended.

**Related Topics:**

-   [Enabling and Configuring Virtualization](igGrid-Enabling-and-Configuring-Virtualization.html)

### Keyboard Interactions

When virtualization is enabled and mouse is over the virtual table, the following key interactions are available:

- UP/DOWN: Scrolls the container up or down.

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic.

- [Enabling and Configuring Virtualization](igGrid-Enabling-and-Configuring-Virtualization.html): This topic explains, with code examples, how to enable and configure the Virtualization feature in the `igGrid`.


### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Virtualization (Fixed)](%%SamplesUrl%%/grid/virtualization-fixed): This sample demonstrates the HTML virtualization capabilities of the `igGrid` using fixed number of rows.

- [Continuous Virtualization](%%SamplesUrl%%/grid/virtualization-continuous): This sample demonstrates the continuous virtualization capabilities of the `igGrid` control.





 

 


