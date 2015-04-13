<!--
|metadata|
{
    "fileName": "igrating-known-issues",
    "controlName": "igRating",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igRating)



## Known Issues
When using jQuery Rating control be aware of the following limitations.

**Note:** The next limitations exist because the following items were not included in the original design of the control.

1.  Almost all of the `igRating` properties can be changed dynamically. There are three read-only properties that cannot be modified using the jQuery UI syntax `($('#rating1').igRating('option', 'nameOfTheOption', 'valueOfTheOption')):`

    -   [vertical](%%jQueryApiUrl%%/ui.igRating#options)
    -   [swapDirection](%%jQueryApiUrl%%/ui.igRating#options)
    -   [focusable](%%jQueryApiUrl%%/ui.igRating#options)

    If you have a case that you want to change some of these properties
    dynamically you can use a workaround to achieve this functionality.
    You can destroy the control, persist its current values, and then
    just create a new one with new read-only property values.

2.  In some cases you want to use rating that has the functionality to select only one of all the items. The default behavior of the Rating control is as following: when three from five items are selected all the items before the selected one have been styled as selected. This is normal for most of the cases when rating is used. But if you want only the selected item to be styled as a selected one, there isn’t a property that allows setting this. But you can achieve this by setting dynamically another `igRating` property – ‘[cssVotes](%%jQueryApiUrl%%/ui.igRating#options)’. To see the workaround, follow this link: [Custom Items](%%SamplesUrl%%/rating/custom-items) sample.
3.  If you are using a theme from a Theme Roller instead of `jquery.ui.custom.css`, the `jquery.ui.all.css` file is required.

## Related Links
- [igRating Overview](igRating-Overview.html)

 

 


