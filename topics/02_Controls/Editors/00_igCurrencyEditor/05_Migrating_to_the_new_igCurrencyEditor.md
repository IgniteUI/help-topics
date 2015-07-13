<!--
|metadata|
{
    "fileName": "migrating-to-the-new-igcurrencyeditor",
    "controlName": "igEditors",
    "tags": ["Migration","Getting Started"]
}
|metadata|
-->

# Migrating to the new igCurrencyEditor

With the 15.2 release of Ignite UI™ a new set of editor controls were introduced including a reworked `igCurrencyEditor`. With a new design focused on simplicity and better UX out-of-the-box some features and their API were revised, removed and new ones added. This topic will cover the differences that will be helpful for developers migrating their applications to the new editors.

## Topic overview
This topic aims to help with migration from old currency editor to the new one. Different scenarios are viewed and how they were done before and how they can be done now.

### In this topic
This topic contains the following sections:

1. [Options changes](#options_changes)
2. [New options](#new_options)
3. [API Methods changes](#methods_changes)
4. [New API methods](#new_methods)
5. [Event changes](#event_changes)
6. [New events](#new_events)
7. [Requirements](#requirements)

<a name='options_changes'></a>
### Options changes

Option| Previously| Now
---|---|---
animationHideDuration animationShowDuration|Used to set animation duration when dropdown list is displayed/hidden.|These options are replaced by new option `dropDownAnimationDuration` that controls the dropdown list animation duration.
button|This option was used to set visibility of spin and dropdown button.|This option is renamed to `buttonType` to better communicate what it does.
dataMode|Members of type 'string' and 'number' were supported.|Members of type 'number' are not supported.
