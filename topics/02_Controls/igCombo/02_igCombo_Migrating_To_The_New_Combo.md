<!--
|metadata|
{
    "fileName": "igcombo-migrating-to-the-new-combo",
    "controlName": ["igCombo"],
    "tags": ["Migration"]
}
|metadata|
-->

# Migrating to the new combo

## Topic overview
This topic aims to help with migration from old combo to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

### In this topic
This topic contains the following sections:

1. [General changes](#general_changes)
2. [Options changes](#options_changes)
3. [New options](#new_options)
4. [API Methods changes](#methods_changes)
5. [New API methods](#new_methods)
6. [Event changes](#event_changes)
7. [New events](#new_events)
8. [Knockout Integration changes](#ko_changes)
9. [Requirements](#requirements)

<a name='general_changes'></a>
### General changes

Option|Description
---|---
Item|<a name='item'></a>Item is how we call the new structure that we use for representing the list items in the drop down list. It is an object with two properties - `element` and `data`. The `element` is the jQuery reference to the list item, while the `data` is the corresponding data from the data source behind this element. The `data` is a reference to the corresponding data item in the data source, it includes the `text` and `value` fields and if their property name is known they can be accessed by `item.data.textPropertyName` or `item.data.valuePropertyName`. In case where their property name is unknown or might change the same can be accessed by getting the property name directly from the combo : `item.data[$("#combo").igCombo("option", "valueKey")]` for value field and `item.data[$("#combo").igCombo("option", "textKey")]` for text field.

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
width|$(‘#combo’).igCombo({ width: 300 })| The default width is set through css. The recommended way to set new combo width is `<style>.ui-igcombo-wrapper { width: 300px } </style>`. Old way is also supported.
height|$(‘#combo’).igCombo({ height: 300 })| The default height  is set through css. The recommended way to set new combo height is `<style>.ui-igcombo-wrapper { height: 300px } </style>`. Old way is also supported.
enableDisplayBlock|$(‘#combo’).igCombo({ enableDisplayBlock: true})|This option is removed. Now this can be controlled through css: `<style>.ui-igcombo-wrapper { display: block }</style>`
mode| Previously supported values: `editable, dropdown, readonlylist, readonly, 0, 1, 2, 3`.| Now supported values are: `editable, dropdown, readonlylist, readonly`. Drop down mode now closely mimics the html select element behavior, this means that when selection is single there will be always a selected item and clear button will be disabled by default.
renderMatchItems|-|This option is renamed to `highlightMatchesMode` to better communicate what it does.
filteringType|`filteringType` default is `'none'`| Now `filteringType` default is `'local'`, so local filtering will be enabled by default. To disable filtering when initializing combo: `$('#combo').igCombo({ filteringType: 'none' })` or if combo is already created use `$('#combo').igCombo('option', 'filteringType', 'none' })`.
selectedItems| Used to specify initial selected items and to set/get selected items after combo is created. | This option is removed. Initial selected items can be set using new option [initialSelectedItems](#initialSelectedItems). Setting selection is done through combo API methods: [value](#value), [select](#select) or [index](#index). Getting selected items can be done through API method [selectedItems](#selectedItems).
multiSelection|Previously supported values: `null, false, 0, off, true, 1, on, 2, onWithCheckboxes'`|<a name='multiSelection'></a>Now this option is used to setup all multiple selection settings. Object with following settings can be provided: `enabled, addWithKeyModifier, showCheckboxes, itemSeparator`. Set `enabled` to `true` to enable multiple selection. Set addWithKeyModifier to `true` to require holding `ctrl` key to add the item to already selected items, by default all selections are additive without holding `ctrl`. Set `showCheckboxes` to `true` to render check-boxes in front of each list item. Set `itemSeparator` to change what string is rendered between the selected items, the default string is ', '. Example with all settings: `$('#combo').igCombo({ multiSelection: { enabled: true, addWithKeyModifier: true, showCheckboxes: true, itemSeparator: ', ' } })`
itemSeparator|Used to change what string is rendered between the selected items.|This option is removed and added as setting of [multiSelection](#multiSelection) option
enableActiveItem|Used to enable/disable the active item when navigating with keyboard.| This option is removed. The active item is removed when selection is single and navigating with keyboard will change the selection. The active item is always enabled when multiple selection is enabled. 
dropDownMaxHeight dropDownMinHeight|Used to set drop down list max and min height.|These options are removed. New option [visibleItemsCount](#visibleItemsCount) is added to control the drop down height.
dropDownAsChild|Used to render the drop down list as child of the combo element.| Renamed to `dropDownAttachedToBody`. Default value is `true`. Set to `false` to render the drop down as a child: `$('#combo').igCombo({ dropDownAttachedToBody: false })`
showDropDownButton|Used to control the visibility of the drop down button|This option is removed. The visibility of the drop down button can be controlled through css. To disable the drop down button: `<style>#combo .ui-igcombo-button { display: none; }</style>`
nullText|Used to specify what text is shown in text input when it is empty.| Renamed to `placeHolder`. It is a known issue that this option does not work for IE8/9.
closeDropDownOnSelect|Used to specify whether the drop down should close when selection is made.|Changed to specify whether to close the drop down list when single item in the list is selected with mouse click or enter press. Default is `false` for single selection and `true` for multiple selection. This option will not close the drop down when multiple selection is enabled and additive selection is performed. `$('#combo').igCombo({ closeDropDownOnSelect: false })`
allowCustomValue|Used to allow custom value in combo's text input.|This option was initially not supported, but is again available as of the September service release for 15.1 and the 15.2 volume release.
dataBindOnOpen|Used to delay data binding to when the drop down is opened.|This option is not supported. The same functionality can be achieved by canceling the data binding event and data bind when the drop down list is first opened.
text|Used to set custom text in combo input on initialization|This option is not supported. To set initial selection use option [initialSelectedItems](#initialSelectedItems).
clearSelectionOnBlur|Used to preserve selected items on blur when the text input didn't match the selected items text.| This option is not supported.
valueKeyType textKeyType|Used to specify the data type behind the value/text data|These options are not supported. The type of value and text fields from the data source will be used.
parentCombo cascadingDataSources parentComboKey|Used to setup cascading functionality|These options are not supported. Internal cascading functionality is no longer supported. It can be achieved through changing related combo data sources on current combo's selection changed event. [See sample](%%SamplesUrl%%/combo/cascading-combos)

*We tried hard to ensure behavioral parity between the old and new combo, but some things we could not complete for 15.1. If these behaviors are crucial to your solution, and you want to upgrade to 15.1, please contact us.

<a name='new_options'></a>
### New options

Option| Description
---|---
initialSelectedItems|<a name='initialSelectedItems'></a>Use to set what items should be selected when combo is initially created, by specifying the selected item index or value: `$('#combo').igCombo({ initialSelectedItems: [{ index: 2 }, { index: 5 }, { value: 'items_value' }] })`.
visibleItemsCount|<a name='visibleItemsCount'></a>This option can be used to control the maximum number of items that can be visible at a time. When it is set to 10 and there are 20 items in the list, only 10 will be shown at a time. When there are 5 items in the list only the 5 will be shown and drop down height will be as much as required for the 5 items. Default value is 15. `$('#combo').igCombo({ visibleItemsCount: 10 })`
autoSelectFirstMatch|Specifies whether the first list item starting with the entered in the input text should be automatically selected. When multiple selection is enabled this option will instead put the active item on the matching element. When disabled only full matches will be automatically selected. By default it is set to true. To disable it: `$('#combo').igCombo({ autoSelectFirstMatch: false })`
delayFilteringOnKeyUp|Specifies the delay duration before triggering next filtering operation. Useful to boost performance by lowering the filtering operations count. Default is 250 ms. To change it: `$('#combo').igCombo({ delayFilteringOnKeyUp: 1000 })`
preventSubmitOnEnter|Specifies whether to prevent default form submitting on enter key press. Default is true. To disable it: `$('#combo').igCombo({ preventSubmitOnEnter: false })`

[See all options](%%jQueryApiUrl%%/ui.igcombo#options)

<a name='methods_changes'></a>
### API Methods changes

Method| Previously| Now
---|---|---
dropDownVisible|Used to control visibility of the drop down list|This API method is removed. Use [openDropDown](#openDropDown) to open the drop down list and [closeDropDown](#closeDropDown) to close the drop down list
setFocus|Used to set focus to combo text input.|This API method is removed. Focus on the text input can be set by calling  jQuery `focus` method on the input: `$("#combo").igCombo("textInput").focus()`
hasFocus|Used to check whether combo text input has focus.|This API method is removed. To check whether the text input has focus jQuery `is(":focus")` can be used: `$("#combo").igCombo("textInput").is(':focus').`
isSelected|Used to check whether list item at specified index is selected.|There are three API methods that check whether an item is selected: [isSelected](#isSelected) by jQuery reference, [isIndexSelected](#isIndexSelected) by index and [isValueSelected](#isValueSelected) by value.
selectedIndex|Used to get index of the first selected item or set the selection by index.|This API method was renamed to [index](#index). This method also accepts array of indexes to select multiple items at once. When multiple items are selected it will return array with all selected indexes. The rest of the functionality is the same.
value|Used to get value of the first selected item or set the selection by value.|This method also accepts array of values to select multiple items at once. When multiple items are selected this method will return array with all selected values. The rest of the functionality is the same.
values|Used to get values of all selected items or set the selection by values.|This API method is removed. Its functionality was merged into `value` method. 
itemByIndex|Used to get object with members relative to the list item at specific index. Used to return object with `{ element, index, value, text }`.|This API method is renamed to `itemFromIndex`. The object returned is [item](#item).
itemByValue|Used to get object with members relative to the list item with specific value. Used to return object with `{ element, index, value, text }`.|This API method is renamed to `itemFromValue`. The object returned is [item](#item).
getDataSource|Used to get reference to data source used by combo.|This API method is removed. Reference to the data source can be get through `$("#combo").igCombo("option", "dataSource")`
getData|Used to get reference to current data used by combo.|This API method is removed. Reference to the current data can be get through `$("#combo").igCombo("option", "dataSource").dataView()`
getRecordsCount|Used to get records count in dataSource, dataView or total server data.|This API method is removed. To get records count in dataSource use: `$("#combo").igCombo("option", "dataSource").data().length`. To get records count in dataView use: `$("#combo").igCombo("option", "dataSource").dataView().length`. To get records count in total server data use: `$('#combo').igCombo('option', 'dataSource').totalRecordsCount()`
filter|Method parameters used to be `event, filterText, noFilter` | Method parameters changed to `filterText, event`
remove|Used to remove the combo from its parent element while keeping rest of the functionality.|This API method is not supported.
getFooter|Used to get reference to combo footer.|This API method is not supported, as there is no footer yet.

<a name='new_methods'></a>
### New API Methods

Method|Description
---|---
openDropDown|<a name='openDropDown'></a>Use this method to open the drop down list.
closeDropDown|<a name='closeDropDown'></a>Use this method to close the drop down list.
select|<a name='select'></a>Use to select one or more list items by passing the items jQuery reference: `$('#combo').igCombo('select', $('.itemSelector'))`
value|<a name='value'></a>Use to select one or more list items by value: `$('#combo').igCombo('value', 'itemValue')` to select single item or `$('#combo').igCombo('value', ['itemValue_1', 'itemValue_2', 'itemValue_3'])` to select multiple items at once. Calling this method without parameters will return the selected values.
index|<a name='index'></a>Use to select one or more list items by their index in the data source: `$('#combo').igCombo('index', 5)` to select single item or `$('#combo').igCombo('index', [3, 5, 8, 10])` to select multiple items. Calling this method without parameters will return the selected indexes.
isSelected|<a name='isSelected'></a>Use to check whether specific jQuery element is selected. `$('#combo').igCombo('isSelected', $('.selector'))`
isIndexSelected|<a name='isIndexSelected'></a>Use to check whether item at specific index is selected. `$('#combo').igCombo('isIndexSelected', 5)`
isValueSelected|<a name='isValueSelected'></a>Use to check whether item with specific value is selected. $('#combo').igCombo('isValueSelected', 'itemValue')
dataForValue|Gets the associated data source data of an list item by value matching it's valueKey property. `$('#combo').igCombo('dataForValue', 'itemValue')`
dataForElement|Gets the associated data source data of list item in the combo by its jQuery reference. `$('#combo').igCombo('dataForElement', $('.listItemSelector'))`
itemsFromElement|Gets [item](#item) represening li element in the combo by its jQuery element. When multiple elements are given the method will return array with items. `$('#combo').igCombo('itemsFromElement', $('.listItemSelector'))`
itemsFromValue|Gets [item](#item) representing li element in the combo by its value. When array of values are given the method will return array with items. `$('#combo').igCombo('itemsFromValue', 'itemValue')`
itemsFromIndex|Gets <a href='#item'>item</a> representing li element in the combo by its index. When array of indexes are given the method will return array with items. `$('#combo').igCombo('itemsFromIndex', 3)`
items|Gets array with all <a href='#item'>items</a> in the combo.
filteredItems|Gets array with all filtered [items](#item) in the combo.
selectedItems|<a name='selectedItems'></a> Gets the selected [item](#item). When multiple items are selected will return array with the selected [items](#item).
listItems|Gets jQuery reference to all rendered list items in the combo drop down lsit
clearFiltering|Clears the filtering
clearInput|Clears text input value and removes all selection, filtering and highlighting.
selectAll|Selects all list items
deselect|Deselects list item by jQuery reference
deselectByValue|Deselects list item with specific value
deselectByIndex|Deselects list item at specific index
deselectAll|Deselects all selected list items
comboWrapper|Gets jQuery reference to the outer element of the combo
dropDown|Gets jQuery reference to the drop down list of the combo
textInput|Gets jQuery reference to the text input of the combo
valueInput|Gets jQuery reference to the value input of the combo
dropDownOpened|Checks whether the drop down is opened

[See all API methods](%%jQueryApiUrl%%/ui.igcombo#methods)

<a name='event_changes'></a>
### Event changes

Event|Changes
---|---
selectionChanging|Event argument ui.oldItems renamed to ui.currentItems to better communicate that these items are still the current selected as the selection change hasn't still happened. Items are in [item](#item) format.
selectionChanged|Items are in [item](#item) format.
dropDownOpening dropDownOpened dropDownClosing dropDownClosed|Event argument ui.element renamed to ui.list to communicate better that this is the drop down list.
textChanged|This event was removed. To check when the text has changed bind to combo text input keydown event.
noMatchFound|This event was removed as the `autoComplete` feature is not fully supported yet.
activeItemChanging activeItemChanged|These events were removed.

<a name='new_events'></a>
### New events

Event|Description
---|---
rendered|Event raised when rendering of combo is completed.
itemsRendering|Event which is raised before rendering of the combo items is performed.
itemsRendered|Event which is raised after rendering of the combo items completes. Function callback is passed argument `ui.items` that is array of [items](#item) representing the rendered list item elements.

[See all events](%%jQueryApiUrl%%/ui.igcombo#events)

<a name='ko_changes'></a>
###Knockout Integration changes
One of the changes, introduced with the new `igCombo` control, is the one that the combo is considered as control that accepts values only from its list. There isn't an option to allow custom values in the `igCombo`, as it was in the old one, which leads to a need for a different work process in the Knockout extension. This means that the only time, when the `igCombo` can notify the View-Model about a change, is when an item is selected/deselected and the selected items collection is changed. In such cases, some of the old Knockout extension options are not necessary anymore and some other need to be introduced. The following changes have been made to integrate the `igCombo` with its Knockout extension.

####New options

Option| Description 
---|---
selectedItems| Array of the selected items in the `igCombo`. When configured in the View-model, this ensures that there is a data exchange between the combo selected items and the View-Model.
selectedItemType| Allows configuring the type of the selected items in the array, either to be "primitive" or "object". 

####Removed options

Option| Description 
---|---
text| The combo cannot anymore update the View-model, when a change in its input occurs. <br> If, with the old `igCombo`, you had a View-model property that holds the combo value and it got updated and notified other subscribers, then because such an option doesn't exist in the `igCombo` Knockout extension anymore, the `selectionChanged` event handler can be used to take current combo value and notify the subscribers. The code snippets below the table, demonstrate how the old functionality can be simulated. 
value| This option is not needed, because the newly introduced `selectedItems` option is used, when you want to select item by its value.
enableTextChangedUpdate| The `igCombo` doesn't have `textChanged` event, and therefore we cannot have such a functionality.
enableSelectionChangedUpdate| With the new changes, the update always happens on selection change of the combo, that's why such an option is not necessary.
cascadingDataSource| The `igCombo` control doesn't contain such an option, that's why it also cannot be used in the Knockout extension.

**Before**
```html
<script type="text/javascript">
var model = [
    { name: "Adam Sandler", id: "nm0001191" },
    { name: "Brooke Shields", id: "nm0000222" },
    { name: "Charles Chaplin", id: "nm0000122" },
];
var viewModel = new ViewModel(model);
 function ViewModel(actorsList) {
    this.selectedActor = ko.observable(actorsList[0].name);
 }
</script>
<span id="comboActors" data-bind="igCombo: {
    text: selectedActor,
    textKey: 'name',
    valueKey: 'id'
}"></span>
```

**Now**
```html
<script type="text/javascript">
var model = [
    { name: "Adam Sandler", id: "nm0001191" },
    { name: "Brooke Shields", id: "nm0000222" },
    { name: "Charles Chaplin", id: "nm0000122" },
];
var viewModel = new ViewModel(model);
 function ViewModel(actorsList) {
    this.selectedActor = ko.observable(actorsList[0].name);
    this.selectedActorNew = ko.observableArray([actorsList[0].id]);
    this.selectionChanged = function(e, args) {
        this.selectedActor(args.items[0].data.name);
    }
 }
</script>
<span id="comboActors" data-bind="igCombo: {
    selectedItems: selectedActorNew,
    textKey: 'name',
    valueKey: 'id',
    selectionChanged: selectionChanged
}"></span>
```

>**Note:** This will only work, when there is a change from the `igCombo` to the View-Model. 

<a name='requirements'></a>
### jQuery requirements

Lib| Prev required version| New required version
---|---|---
jQuery core|1.4.4|1.8.3
jQuery UI|1.7|1.9.2
