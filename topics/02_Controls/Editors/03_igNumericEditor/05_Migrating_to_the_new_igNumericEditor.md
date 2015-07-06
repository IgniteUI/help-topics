<!--
|metadata|
{
    "fileName": "migrating-to-the-new-ignumericeditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igNumericEditor

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igNumericEditor`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old numeric editor to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

### In this topic
This topic contains the following sections:

1. [Options changes](#options_changes)
2. [New options](#new_options)

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|Used to set animation duration when drop-down list is displayed/hidden.|These options are replaced by new option `dropDownAnimationDuration` that controls the drop-down list animation duration.
button|This option was used to set visibility of spin and drop-down button.|This option is renamed to `buttonType` to better communicate what it does.
dataMode|Members of type 'string' and 'number' were supported.|Members of type 'number' are not supported.
decimalSeparator|This option set the character, which is used as decimal separator.|This option is renamed to `numericDecimalSeparator` to better communicate what it does.
display|-|This option is removed.
dropDownOnReadOnly|This option was used to set ability to override the "readOnly" option and allow showing the drop-down list and changing the value in the editor from a list.|This option is removed. If `readOnly` is set to `true` the drop-down list cannot be displayed.
dropDownTriggers|-|This option is removed.
focusOnSpin|If that option was disabled and the editor was not focused, then a mouse click on the spin button would keep the text in the editor in not focused format and perform spin actions.|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
groups|This was used to set the number of digits in integer part of number, which are divided into groups.|This option is renamed to `numericGroups` to better communicate what it does.
groupSeparator|This was used to set the character, which is used as separator for groups.|This option is renamed to `numericGroupSeparator` to better communicate what it does.
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed.
listColumns|-|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element. 
listMaxHeight|Used to set maximum height of drop-down list in pixels.|This option is removed. You can use the new option [visibleItemsCount:](#visibleItemsCount) to set the number of visible list items.
maxDecimals minDecimals|These options were used to set the maximum/minimum number of decimal places which are used in no focus state.|These options are renamed to `numericMaxDecimals` and `numericMinDecimals` to better communicate what they do.
negativePattern|This was used to set the pattern for negative numeric values.|This option is renamed to `numericNegativePattern` to better communicate what it does.
nullable|This option was used to set ability to prevent null value.|This option is renamed to `allowNullValue` to better communicate what it does.
nullText|Used to set text which appears in editor when editor has no focus and "value" in editor is null or empty string.|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|-|This option is removed.
required|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|This was used to override the "readOnly" option and allow changing "value" of editor on spin events. |This option is removed. Setting `readOnly` to `true` disables the spin buttons.
textAlign|Default was `null`|Now default is `left`.
theme|-|This option is removed.
validatorOptions |-|This option is removed.

<a name='new_options'></a>
### New options

Option| Description
---|---
disabled|<a name='disabled'></a>Use to set the disabled attribute. Does not allow editing. Disables all the buttons and iteracitons applied. On submit the current value is not sent into the request: `$('#numericEditor').igNumericEditor({ disabled: true }] })`.
listItemHoverDuration|<a name='listItemHoverDuration'></a>Use to set the hover/unhover animation duration of items inside the drop-down list: `$('#numericEditor').igNumericEditor({ listItems: [1, 2, 3, 4], listItemHoverDuration: 400 }] })`.
visibleItemsCount|<a name='visibleItemsCount'></a>Use to set how many items should be shown at once: `$('#numericEditor').igNumericEditor({ listItems: [1, 2, 3, 4], visibleItemsCount: 2 }] })`.
isLimitedToListValues|<a name='isLimitedToListValues'></a>Use to set the ability to allow values only set into the list items. This validation is done only when the editor is blured, or enter key is pressed: `$('#numericEditor').igNumericEditor({ listItems: [1, 2, 3, 4], isLimitedToListValues: true }] })`.
revertIfNotValid|<a name='revertIfNotValid'></a>Use to set the editor to revert value to previous value in case of not valid value on blur, or enter key. If set to false clear is called: `$('#numericEditor').igNumericEditor({ listItems: [1, 2, 3, 4], isLimitedToListValues: true, revertIfNotValid: false }] })`.
preventSubmitOnEnter|<a name='preventSubmitOnEnter'></a>Use to set the ability of the editor to prevent form submition on enter key pressed.
dropDownOrientation|<a name='dropDownOrientation'>Use to set drop down opening orientation for the dorp down list when open button is clicked: `$('#numericEditor').igNumericEditor({ listItems: [1, 2, 3, 4], dropDownOrientation: 'top' }] })`.
