<!--
|metadata|
{
	"fileName": "extending-iggrid-modal-dialog",
	"controlName": "igGrid",
	"tags": ["Getting Started","Grids","How to"]
}
|metadata|
-->

# Extending igGrid Modal Dialog

## In this topic

- [Overview](#overview)
- [Using Custom Dialogs](#using-custom-dialogs)
- [Requirements](#requirements)
- [Related Content](#related-content)
    -   [Samples](#samples)
    -   [Topics](#topics)

## <a id="overview"></a> Overview
`igGridModalDialog` is a widget which comes with igGrid's scripts and builds all dialog-based UI for igGrid's features. These include the `dialog` edit mode for igGridUpdating, the advanced filter dialog for igGridFiltering, the column chooser for igGridHiding, etc. The main features of the widget include the ability to block user interaction on the grid while it is opened, drag & resize constrained by containment options and visualization settings. Each grid feature using the widget exposes a certain amount of options that are then passed to the dialog on initialization, however, these options are often limited to what would make most sense and not break the dialog's functionality for the specific purpose it is serving. Further customization of the dialog is possible through extensions.

## <a id="using-custom-dialogs"></a> Using Custom Dialogs
Each feature using `igGridModalDialog` exposes a `dialogWidget` option for the name of the widget to initialize when attempting to create the dialog. The following list contains links to these options' API descriptions:

- [ColumnMoving](%%jQueryApiUrl%%/ui.iggridcolumnmoving#options:dialogWidget)
- [Filtering](%%jQueryApiUrl%%/ui.iggridfiltering#options:dialogWidget)
- [GroupBy](%%jQueryApiUrl%%/ui.iggridgroupby#options:dialogWidget)
- [Hiding](%%jQueryApiUrl%%/ui.iggridhiding#options:dialogWidget)
- [Sorting](%%jQueryApiUrl%%/ui.iggridsorting#options:dialogWidget)
- [Updating](%%jQueryApiUrl%%/ui.iggridupdating#options:dialogWidget)

Your custom dialog should be a jQuery UI widget and you should pass its name as the option's value. In JavaScript this will look similar to the following:

```js
$.widget("ui.CustomDialog", $.ui.igGridModalDialog, {
	...
});

grid.igGrid({
	autoGenerateColumns: true,
	features: [
		{
			name: "Filtering",
			mode: "advanced",
			dialogWidget: "CustomDialog"
		}
	],
	dataSource: data
});
```
**Note:** While extending `igGridModalDialog` is not necessary it is highly advisable as it will ensure all functions and options required by igGrid's features are available out of the box. The following section covers the required API in details.

## <a id="requirements"></a> Requirements

The custom dialog widget should include certain functions and fire certain events igGrid's features subscribe to during their lifecycle. All of these will be available if you choose to extend the existing `igGridModalDialog`, however, this section will also provide information which is useful if you need to use them as hooks for your custom logic safely.

- Required methods
  - `openModalDialog` - called when the dialog should open. No parameters will be passed to this method.
  - `closeModalDialog` - called when the dialog should close because of an user interaction specific to the feature or a method from the feature's API is executed. User interactions specific to the dialog should be implemented seperately. The method should accept two parameters.
    1. `accepted` - if the feature recognizes between confirmed and declined state of the dialog it will send this parameter showing if the end-user wants to apply the changes he made through the dialog's UI or not. Features that don't distinguish between the two apply changes as the user interacts with the dialog. This value should be available in the event arguments as explained later down the section.
    2. `fromUI` - some features add UI to the dialog that contains logic to close it based on end-user interaction. This parameter is a boolean flag that tells the dialog if the close call comes from such interaction or from the feature's API. The value should be available in the event arguments to allow features handling the closing of the dialog to decide if feature specific events should be fired or not.
  - `getCaptionButtonContainer` - should return a jQuery object containing the element which represents the caption of the custom dialog. Features use this container to place an additional close button. The function may return a detached element to prevent features from adding this button, however, it's advisable to cache it for later removal reducing the possibility for memory leaks.
  - `getContent` - should return a jQuery object containing the element which represents the main content area of the dialog where features will render the main dialog UI. Features usually render the UI each time the dialog opens instead of using existing one.
- Required events
  - `modalDialogOpening`, `modalDialogOpened` - both events should be fired regardless of whether the dialog opens because of an API call or end-user interaction. This is required because the process is asyncronous with the -ed event firing after the showing animation completes. The event arguments object should contain the property `owner` assigned with the dialog's instance.
  - `modalDialogClosing`, `modalDialogClosed` - both events should be fired regardless of whether the dialog closes because of an API call or end-user interaction. As with the events fired on opening this is caused by the asyncronous nature of the process causing the features to not be able to execute code after the dialog is closed as a continuation of the close call they send. Both events should contain the properties `owner`, `accepted` and `raiseEvents`(the latter two based on the parameters availability in the `closeModalDialog` call).
  - `modalDialogMoving` - fired when the dialog is dragged (if this functionality is available). Features don't use this event apart from propagating it through events of their own.
  - `modalDialogContentsRendering`, `modalDialogContentsRendered` - fired during dialog rendering - as with the previous event these are used only to be propagated by the features.
  - `buttonOKClick`, `buttonCancelClick` - events fired when the respective button is clicked. These should contain the property `toClose` in the event arguments. Features will change the value of the property to `true` if the dialog's state allows the dialog to be closed. Otherwise the dialog should not be closed.

**Note:** Since jQuery UI allows for any number of options to be passed on widgets' initialization without being available in the widget's `options` property, none of the options passed by igGrid's features is required. For custom dialogs most of them will not be applicable either. There is no mechanism that will allow for features to pass custom options.

## <a id="related-content"></a> Related Content

### <a id="samples"></a>Samples

The following sample shows a custom dialog being used to edit the grid.

- [Custom Modal Dialog](%%SamplesUrl%%/grid/customize-updating)

### <a id="topics"></a> Topics

-   [Row Edit Dialog (igGrid)](igGrid-Updating-RowEditDialog-LandingPage.html)
-   [Configuring the Column Chooser (igGrid)](igGrid-Hiding-Column-Chooser.html)
-   [Group By Dialog Overview (igGrid)](igGrid-Group-By-Dialog-Overview.html)
-   [Column Moving Overview (igGrid)](igGrid-ColumnMoving-Overview.html)
-   [Filtering (igGrid)](igGrid-Filtering.html)
-   [Multiple Sorting Dialog (igGrid)](igGrid-Multiple-Sorting-Dialog.html)