<!--
|metadata|
{
    "fileName": "iggrid-columnfixing-method-reference",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Method Reference (Column Fixing, igGrid)

## Column Fixing Method Reference

Fixed and Non-Fixed Columns areas in the `igGrid`™ control are implemented as a two separate table DOM elements. This requires all grid Document Object Model (DOM) manipulation methods to be duplicated for the Fixed Columns area. Usually, the Fixed Columns area APIs are prefixed with the word fixed.

#### Column Fixing method reference chart

The following table summarizes the purpose and functionality of the `igGrid` methods related to the Column Fixing feature.

Method | Description
-------|------------
[allFixedRows](%%jQueryApiUrl%%/ui.iggrid#methods:allFixedRows) | Gets the data for all rows in the Fixed Columns area.
[cellAt](%%jQueryApiUrl%%/ui.iggrid#methods:cellAt) | Gets a specific cell from the grid. Returns the DOM element of the cell at specified location. A new Boolean parameter is added to the API.
[fixedBodyContainer](%%jQueryApiUrl%%/ui.iggrid#methods:fixedBodyContainer) | Gets the body container of the Fixed Columns area. Returns the DOM of the body element containing the fixed columns.
[fixedContainer](%%jQueryApiUrl%%/ui.iggrid#methods:fixedContainer) | Gets the container of the Fixed Columns area. Returns the DOM container element of the fixed columns.
[fixedFooterContainer](%%jQueryApiUrl%%/ui.iggrid#methods:fixedFooterContainer) | Gets the container of the footer in the Fixed Columns area. Returns the DOM container element of the footer in the Fixed Columns area.
[fixedFootersTable](%%jQueryApiUrl%%/ui.iggrid#methods:fixedFootersTable) | Gets the table of the footer in the Fixed Columns area. Returns the DOM table element of the footer in the Fixed Columns area.
[fixedHeaderContainer](%%jQueryApiUrl%%/ui.iggrid#methods:fixedHeaderContainer) | Gets the container of the header in the Fixed Columns area. Returns the DOM container element of the header in the Fixed Columns area.
[fixedRowAt](%%jQueryApiUrl%%/ui.iggrid#methods:fixedRowAt) | Gets a specific row from the Fixed Columns area. Returns the DOM element of the row at the specified index.
[fixedRows](%%jQueryApiUrl%%/ui.iggrid#methods:fixedRows) | Gets the fixed rows. Returns an array of all DOM’s `<tr>` elements.
[fixedTable](%%jQueryApiUrl%%/ui.iggrid#methods:fixedTable) | Gets the fixed table. Returns the DOM element of the fixed table.
[hasFixedColumns](%%jQueryApiUrl%%/ui.iggrid#methods:hasFixedColumns) | Checks whether there are fixed columns in the grid. Returns true or false.
[isFixedColumn](%%jQueryApiUrl%%/ui.iggrid#methods:isFixedColumn) | Checks whether the column is fixed either by column key or index. Returns true or false.

