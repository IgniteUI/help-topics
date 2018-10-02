<!--
|metadata|
{
    "fileName": "breaking-changes-2018-volume-2",
    "controlName": "",
    "tags": ["Breaking Changes","Known Issues"]
}
|metadata|
-->

# Breaking Changes 2018 Volume 2

## igGrid
- From version 18.2 on, when remote features, such as Sorting, Filtering, Paging etc. are enabled the query string, created for feature`s requests, will include not only the column key but the column type as well. For example:
 
 GetData?sort(**Name%3Astring**)=asc&page=0&pageSize=1&pk=ProductID&_=1538145630155

### Filtering changes

 - The DOM structure for filtering drop down conditions list has changed. In versions prior to 18.2 there was a separate div element rendered for each column's conditions list drop down. With performance in mind, from version 18.2 on, only one div element will be rendered for all columns.
 
 - The default filtering condition (which depends on the column data type) or the one explicitly set via the [*condition*](%%jQueryApiUrl%%/ui.iggridfiltering#options:columnSettings.condition) option in the Filtering`s [*columnSettings*](%%jQueryApiUrl%%/ui.iggridfiltering#options:columnSettings) is now selected in the drop-down conditions list. The only exceptions are the columns, which default (or explicitly set) condition does not require user's input such as Boolean columns, date columns with conditions "Today", "Yesterday", "This month" etc. In the later the end user should explicitly select them so that they get applied.