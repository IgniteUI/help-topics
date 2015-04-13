<!--
|metadata|
{
    "fileName": "excelengine-add-document-properties-to-a-workbook",
    "controlName": "Infragistics Excel Library",
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

This information can be accessed through the Microsoft® Excel® interface as well as the Properties dialog box for the workbook file. You can edit this information in a workbook before serializing it by using its [`DocumentProperties`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.Workbook~DocumentProperties.html "Link to the Web API Reference Guide to the DocumentProperties member.") property.

The following code demonstrates how to create a workbook and set its [`Title`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.DocumentProperties~Title.html "Link to the Web API Reference Guide to the Title member.") and [`Status`](Infragistics.Web.Mvc.Documents.Excel~Infragistics.Documents.Excel.DocumentProperties~Status.html "Link to the Web API Reference Guide to the Status member.") document properties.

**In Visual Basic:**

```vb
Dim workbook As New Infragistics.Documents.Excel.Workbook()
workbook.DocumentProperties.Title = "Expense Report"
workbook.DocumentProperties.Status = "Complete"
```

**In C#:**

```csharp
Infragistics.Documents.Excel.Workbook workbook = new Infragistics.Documents.Excel.Workbook();
workbook.DocumentProperties.Title = "Expense Report";
workbook.DocumentProperties.Status = "Complete";
```



 

 


