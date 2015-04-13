<!--
|metadata|
{
    "fileName": "javascript-excel-library-add-document-properties-to-a-workbook",
    "controlName": ["igExcel"],
    "tags": ["How Do I"]
}
|metadata|
-->

# Add Document Properties to a Workbook



Associated with each workbook file are various properties that provide information about its content. These properties include the following pieces of information:

-   Author
-   Title
-   Subject
-   Keywords
-   Category
-   Status
-   Comments

This information can be accessed through the Microsoft® Excel® interface as well as the Properties dialog box for the workbook file. You can edit this information in a workbook before serializing it by using its [`DocumentProperties`](%%jQueryApiUrl%%/ig.excel.DocumentProperties "Link to the Web API Reference Guide to the documentProperties member.") property.

The following code demonstrates how to create a workbook and set its [`title`](%%jQueryApiUrl%%/ig.excel.DocumentProperties#methods:title "Link to the Web API Reference Guide to the title member.") and [`status`](%%jQueryApiUrl%%/ig.excel.DocumentProperties#methods:status "Link to the Web API Reference Guide to the status member.") document properties.

**In JavaScript:**

```js
var workbook = new $.ig.excel.Workbook();
workbook.documentProperties.title("Expense Report");
workbook.documentProperties.status("Complete");
```