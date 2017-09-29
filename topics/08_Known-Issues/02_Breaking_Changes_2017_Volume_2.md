<!--
|metadata|
{
    "fileName": "breaking-changes-2017-volume-2",
    "controlName": "",
    "tags": ["Breaking Changes"]
}
|metadata|
-->

# Breaking Changes 2017 Volume 2

The following topic summarizes the breaking changes of the 2017 Volume 2 release.

## igGrid

### Cell Merging changes

The igGrid Cell Merging feature now supports physical cell merging.

Now with physical cell merging being supported, cells can actually be merged the way cells would be merged inside HTML Table using 'rowspan'. That way the cells that should be actually merged are not visible and only one merged cell is rendered. The old behavior of cell mering is still supported and is reffered to visual cell merging. The difference compared to the physical cell merging is that here for displaying merged cells are used CSS styles, instead of rowspan. 

The physical cell merging does not support the following features - Responsive, :

In response to that, the following options were removed/added:

| Option Name | Description | Default value | State |
|-------------|-------------|---------------|-------|
|[*initialState*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:initialState) | Controls the initial state. | "regular" | <span style="color:red">Removed</span>|
|[*mergeType*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeType) | Defines the type of merging. | "visual" | <span style="color:green">New</span>|
|[*mergeOn*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeOn) | Defines when merging should be applied. | "sorting" | <span style="color:green">New</span>|
|[*mergeStrategy*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:mergeStrategy) | Defines the rules merging is based on. | "duplicate" | <span style="color:green">New</span>|
|[*columnSettings*](%%jQueryApiUrl%%/ui.iggridcellmerging#options:columnSettings) | A list of column settings that specifies hiding options on a per column basis. | [ ] | <span style="color:green">New</span>|


In addition to the option changes above, the igGrid Cell Merging MVC wrapper options are also updated. The following types were removed/added:

| Type Name | Description | State |
|-------------|-------------|---------------|-------|
|CellMergingInitialState | Type used to specify the Initial State option. | <span style="color:red">Removed</span>|
|CellMergingMergeOn | Type used to specify when merging should be applied | <span style="color:green">New</span>|
|CellMergingMergeStrategy | Type used to sepcify merging strategy |<span style="color:green">New</span>|
| CellMergingMergeType | Type used to specify type of merging | <span style="color:green">New</span> | 
