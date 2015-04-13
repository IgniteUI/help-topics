<!--
|metadata|
{
    "fileName": "documentengine-setting-pageorientation-when-publishing-a-report",
    "controlName": "Infragistics Document Library",
    "tags": ["Layouts","Reporting"]
}
|metadata|
-->

# Setting PageOrientation when publishing a Report

When publishing a PDF or XPS document, the Orientation of the page can be set by the [PageOrientation](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection~PageOrientation.html "Link to the API Reference Guide to the value member.") property. When the [Report.Publish(](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Publish.html "Link to the API Reference Guide to the Report.Publish member.")) method is used, the PageOrientation needs to be directly set on each Section [ISection()](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the API Reference Guide to the value member.") that you add to the Report.

**In C#:**

```csharp
Infragistics.Documents.Reports.Report.Report r = new Report();

//Adding a section to the Report
Infragistics.Documents.Reports.Report.Section.ISection s = r.AddSection();

 s.PageOrientation = PageOrientation.Portrait;

 //Adding Text to the Section
 Infragistics.Documents.Reports.Report.Text.IText t = s.AddText();

 t.AddContent(”Test Text”);


 string theFile = @”c:test.pdf”;

 r.Publish(theFile, FileFormat.PDF);
```