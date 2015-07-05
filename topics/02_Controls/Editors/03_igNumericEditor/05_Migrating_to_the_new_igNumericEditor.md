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

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|Used to set animation duration when drop-down list is displayed/hidden.|These options are removed. New option [dropDownAnimationDuration](#dropDownAnimationDuration) is added to control the drop-down list animation duration.
button|-|This option is renamed to `buttonType` to better communicate what it does.
dataMode|-|Members of type 'number' are removed.
decimalSeparator|-|This option is renamed to `numericDecimalSeparator` to better communicate what it does.
display|-|This option is removed.
dropDownOnReadOnly|-|This option is removed. If `readOnly` is set to `true` the drop-down list cannot be displayed.
dropDownTriggers|-|This option is removed.
focusOnSpin|-|This option is removed. Now if the editor is not focused, then a mouse click on the spin button will not focus the editor.
groups|-|This option is renamed to `numericGroups` to better communicate what it does. Even if the default value is null - if internationalization file is provided and it contains default values for those properties the values are imlicitly set.
groupSeparator|-|This option is renamed to `numericGroupSeparator` to better communicate what it does. Even if the default value is null - if internationalization file is provided and it contains default values for those properties the values are imlicitly set.
height width|Previously supported type: `number`.|Now supported types are: `number`, `string`, `null`. If using type `string`, the height can be set in pixels (px) and percentage (%).
hideEnterKey|-|This option is removed.
listColumns|-|This option is removed.
listDropDownAsChild |Value `true` created html element for list as a child of main html element. Value `false` created list as a child of body.|Renamed to `dropDownAttachedToBody`. Value `true` creates list as a child of body. Value `false` will create html element for list as a child of main html element. 
listMaxHeight|-|This option is removed.
maxDecimals minDecimals|-|These options are renamed to `numericMaxDecimals` and `numericMinDecimals` to better communicate what they do.
negativePattern|-|This option is renamed to `numericNegativePattern` to better communicate what it does.
nullable|-|This option is renamed to `allowNullValue` to better communicate what it does.
nullText|-|This option is renamed to `placeHolder` to better communicate what it does.
renderInContainer|-|This option is removed.
required|-|This option is removed.
selectionOnFocus|Previously supported members: `select`, `-1`, `start`, `0`, `end`, `1`, `default`, `2`.|Now supported members are: `selectAll`, `atStart`, `atEnd`, `browserDefault`. The default value is `selectAll`.
spinOnReadOnly|-|This option is removed. Setting `readOnly` to `true` disables the spin buttons.
textAlign|Default was `null`|Now default is `left`.
theme|-|This option is removed.
validatorOptions |-|This option is removed.
