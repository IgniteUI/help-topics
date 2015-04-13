<!--
|metadata|
{
    "fileName": "documentengine-publish-a-report",
    "controlName": "Infragistics Document Library",
    "tags": ["Reporting"]
}
|metadata|
-->

# Publish a Report

Publishing a report is synonymous with writing a PDF or XPS file. Once you've created and designed your report, you can publish it with the [Publish](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Publish.html "Link to the Web API Reference Guide to the Publish member.") method off the [Report](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report.html "Link to the Web API Reference Guide to the Report member.") object. There are two overloads for the Publish method:

-   The first parameter of the first overload accepts a string for the full path of the file name you will publish the report to.
-   The first parameter of the second overload accepts a file stream.
-   The second parameter of both overloads accepts the FileFormat you will publish the report as (PDF, XPS, plain text).

The following code will publish a report (assuming your Report object is defined as "report") as a PDF file in the current user's My Documents folder. Once the report is published, you can then use the Process.Start method from the System.Diagnostics namespace to open the new PDF file. You can also call the Start method from a button, toolbar, menu, or any other clickable UI element.

> **Note:** Be sure that the end user's system has the Adobe Acrobat Reader installed before you start the process. You might want to use a try/catch block to catch the exception if the Acrobat Reader is not installed. Also, the end user's system should have the .NET Framework 3.0 installed if they wish to view an XPS document.

**In C#:**

```csharp
// define a string that contains the path to
// the current user's My Documents folder.
string myDocuments =
  System.Environment.GetFolderPath(System.Environment.SpecialFolder.MyDocuments);

// Publish the report to the current user's 
// My Documents folder with the name of Report.pdf.
// The FileFormat enum can be used to publish the report
// as an XPS or plain text file as well. Remember to 
// change the file extension if you change the file format.
report.Publish(myDocuments + "Report.pdf", FileFormat.PDF);

// The Process.Start method runs the specified file
// using the application registered to run that file.
System.Diagnostics.Process.Start(myDocuments + "Report.pdf");
```