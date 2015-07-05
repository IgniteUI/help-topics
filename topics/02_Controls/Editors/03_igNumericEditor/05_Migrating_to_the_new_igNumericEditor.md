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
