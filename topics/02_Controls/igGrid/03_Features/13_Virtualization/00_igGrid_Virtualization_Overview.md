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

Virtualization is a feature of the `igGrid` control that reduces the number of the active in-memory DOM objects.

The `igGrid` support two virtualization types – fixed and continuous.

Using Virtualization, you can easily bind data to sources that contain millions of records and still render a large portion of data once on the client.



## Supported Virtualization Types

The following provides a brief explanation of the Virtualization types supported by the `igGrid` control.

- [Fixed Row Virtualization](#fixed-row): Only the visible rows are rendered in the grid.
- [Fixed Column Virtualization](#fixed-column): Only the visible columns are rendered in the grid.
- [Continuous Row Virtualization](#continuous): A pre-defined number of rows is rendered in the grid.



### <a id="fixed-row"></a> Fixed Row Virtualization 

With Fixed Row Virtualization, only the visible rows are rendered in the grid and these rendered rows are used later as a container for the generated data. As users start to scroll the grid, and data in the pool of rows is updated and the rows DOM elements are reused.

Reuse of existing DOM elements translates to constant rendering speed and a very low memory footprint. For example, whether you load 100 or 10,000 records into the grid, the memory and CPU consumption is exactly the same (excluding overhead for data binding).

Achieving grid virtualization is possible by implementing client side logic to reuse DOM elements. Therefore, a virtualized grid does not make server requests to fetch additional data. The grid works with the data already available on the client. If you prefer not to load the entire data set to the client at once (which in some circumstances may not be optimal, particularly when you have a very large set of data), you can still combine virtualization with paging, and set your grid to have a large page size.

With Fixed Row Virtualization, all `igGrid` features except the Grouping features (i.e. Paging, Sorting, Filtering, and Selecting), work as expected.

The picture on the left demonstrates a grid with 80 records loaded on the client. The picture on the right shows the actual HTML table elements that exist in the DOM to support the virtualized grid.

![](images/igGrid_Virtualization_Overview_01.png)

**Related Topics:**

-   [Enabling and Configuring Virtualization](igGrid-Enabling-and-Configuring-Virtualization.html)

### <a id="fixed-column"></a> Fixed Column Virtualization 

With Fixed Column Virtualization only the visible columns are rendereding in the grid.
As users start scrolling horizontally in the grid the currently visible columns are updated and the related DOM elements are reused to display the column data of the new visible columns.

Similarly to fixed row virtualization, column virtualization also only works with the data already available on the client and does not make server requests to fetch any additional data.

It currently does not work in combination with the following features: GroupBy, Append Rows On Demand, Multi-Column Headers, Column Fixing and Multi-Row Layout features.
You can find more details on the Feature Compatibilities in the following topic:

- [Feature Compatibility Matrix (igGrid)](Feature-Compatibility-Matrix(igGrid).html): This topic shows the compatibility between `igGrid` features when enabled at the same time.

The picture on the left demonstrates a grid with 25 columns and 500 records loaded on the client. The picture on the right shows the actual HTML table elements that exist in the DOM to support the virtualized grid.

![](images/igGrid_Virtualization_Overview_3.png)

**Related Topics:**

-   [Enabling and Configuring Virtualization](igGrid-Enabling-and-Configuring-Virtualization.html)

### <a id="continuous"></a> Continuous Row Virtualization 

Continuous Virtualization uses a pre-defined number of rows. As the user scrolls down/up the virtualization determines whether the currently rendered rows are sufficient to display the next/previous portion of rows. If not, the current portion of rows is being disposed and the required portion of rows is recreated. Thus, having 1000 data rows will be displayed by only say 30 as opposed to 1000 row tables which significantly loads the DOM structure.

Each row in the `igGrid` control could span on several lines. Thus, row height may vary from row to row. To determine which rows should be displayed after a scroll takes place, the virtualization calculates the average row height. However, this average row height is just an approximate estimation, because its calculation based on the currently rendered rows and not on all available rows. From here, each time when it is being scrolled, the rows about to be displayed are estimated. This might lead to incorrect scroller position when the scroller is at the top/end positions. The virtualization checks for such situations after each scroll and corrects scroller’s position if necessary.

The picture on the left demonstrates a grid with 500 records loaded at on the client. The picture on the right shows the actual HTML table elements that exist in the DOM to support the virtualized grid.

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
- [Performance Guide](iggrid-performance-guide.html): This topic explains in more details the different grid settings that can further improve the performance.

### <a id="samples"></a> Samples

The following samples provide additional information related to this topic.

- [Virtualization (Fixed)](%%SamplesUrl%%/grid/virtualization-fixed): This sample demonstrates the HTML virtualization capabilities of the `igGrid` using fixed number of rows.

- [Continuous Virtualization](%%SamplesUrl%%/grid/virtualization-continuous): This sample demonstrates the continuous virtualization capabilities of the `igGrid` control.





 

 


