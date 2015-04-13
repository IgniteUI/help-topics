<!--
|metadata|
{
    "fileName": "documentengine-report-element",
    "controlName": "Infragistics Document Library",
    "tags": ["Reporting"]
}
|metadata|
-->

# Report Element



The Report element is the top-level object that defines the entire report. You must add all content to a report by way of a Section element. Most layout elements use methods to create additional and nested layout elements; this is the same for the Report element, but you can add only one layout element type, the Section element, to the Report element. An easier way to understand this concept would be to visualize it as an object model diagram. For example, a report's layout can be as simple as the following tree:

-   Report
    -   Section
        -   Layout element (Group element for Title page)
    -   Section
        -   Navigation Helper (TOC element for table of contents)
    -   Section
        -   Layout element (Band element for report content)
            -   Layout element (Flow element for multiple columns)
    -   Section
        -   Pattern Content (Table element to show pertinent data)
    -   Section
        -   Navigation Helper (Index)

You can see from the above tree that Sections are the only layout elements you can add to the Report element. Section elements can contain any content element aside from another Section element. Logically, if you can only add a Section element to a Report element, then you would need to be able to add everything to a Section element.

The Report element also has several other properties and methods that are important for report writing. Below is a short list of report features you are likely to use frequently.

-   **Bookmarks** -- Use the [Bookmarks](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Bookmarks.html "Link to the Web API Reference Guide to the Bookmarks member.") property to add bookmarks to your PDF document.
-   **Information** -- You can add information about the report such as the Author, Company, Copyright, Title, Subject, and more.
-   **Saving and Loading as XML** -- You can use the [Save](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Save.html "Link to the Web API Reference Guide to the Save member.") method to save your full report as an XML file. At a later time, you can load the content of the report from the saved XML file with the [Load](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Load.html "Link to the Web API Reference Guide to the Load member.") method.
-   **Publishing your Report** -- When you've finished your report and are ready to create a PDF document from it, you will use the [Publish](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Publish.html "Link to the Web API Reference Guide to the Publish member.") method to write a PDF, XPS, or plain text document. For more information on the Publish method, see [Publish a Report](DocumentEngine-Publish-a-Report.html "Explains how to publish a report created with document engine.").

* * * * *

The following code will produce a report with the same structure as the tree above. This example does not set any other properties, it only instantiates objects. For example code that shows more detail, see each individual element's help topic for additional information.

**In C#:**

```csharp
using Infragistics.Documents.Reports.Report;
using Infragistics.Documents.Reports.Report.Section;
using Infragistics.Documents.Reports.Report.TOC;
using Infragistics.Documents.Reports.Report.Index;
using Infragistics.Documents.Reports.Report.Band;
using Infragistics.Documents.Reports.Report.Flow;
using Infragistics.Documents.Reports.Report.Table;
.
.
.
Report report = new Report();

ISection section1 = report.AddSection();
IGroup group1 = section1.AddGroup();

ISection section2 = report.AddSection();
ITOC tableOfContents = section2.AddTOC();

ISection section3 = report.AddSection();
IReportBand band1 = section3.AddBand();
IFlow flow1 = band1.AddFlow();

ISection section4 = report.AddSection();
ITable table1 = section4.AddTable();

ISection section5 = report.AddSection();
IIndex index1 = section5.AddIndex();
```


