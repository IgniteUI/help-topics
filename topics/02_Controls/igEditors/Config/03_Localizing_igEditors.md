<!--
|metadata|
{
    "fileName": "localizing-igeditors",
    "controlName": "igEditors",
    "tags": []
}
|metadata|
-->

# How to localize the igEditors



##Topic Overview

In this sample we show how a culture can be set to the editors' regional option to change the format of dates, times, and currencies. Three regions are configured here (United States, Japan and Tamil, India) and there are many more to choose from in the infragistics.ui.regional-i18n.js files. 

##Use cases

The 'regional' option allows you to provide great experience to your users if you are targeting a specific geographic region or culture. 

The igDatePicker and the igDateEditor are the two editors which look is affected the most by the 'regional' option. If you need to be sure that your users from a specific region will see the editors in the context they are expecting to see it, just set the desired regional value and the editors will show the month names and the day names in the language the region is using. This will also update the labels of the buttons that your users can interact with - the next and previous month buttons as well as the 'open calendar' button in the igDatePicker control. 

The 'regional' option guarantees you that not only the language that the controls will use is correct but also the culture. This means that you shouldn`t worry what is the date format that your users are used to, what day is considered to be the first of the week or if the language of your users is written right-to-left. You just need to set the option and the editors will be setup correctly.

The other editors also have their own specifics when they need to be shown to users from another culture. 

If you set the 'regional' option when using the igNumericEditor, igCurrencyEditor or igPercentEditor, the component will use the correct negative pattern, decimal separator and group separator for the given culture. It will also show the correct currency symbol and will provide the expected context to your users. 

<div class="embed-sample">
   [<link text>](%%SamplesEmbedUrl%%/editors/localizing-editors)
</div>

##<a id="_Related_Topics"></a>Related Topics

-   [Editors Help Overview](igeditors-landingpage.html)
-   [Customizing the Localization of Ignite UI Controls](customizing-the-localization-of-netadvantage-for-jquery-controls.html)
