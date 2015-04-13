<!--
|metadata|
{
    "fileName": "documentengine-quick-image",
    "controlName": "Infragistics Document Library",
    "tags": ["Reporting"]
}
|metadata|
-->

# Quick Image

The Quick Image element lets you add images to most layout elements with little or no effort. To quickly add an image to your report, you simply need to call the AddQuickImage method of whichever layout element you need to insert an image in. This method has only one parameter, an [Infragistics.Documents.Reports.Graphics.Image](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Image.html "Link to the Web API Reference Guide to the Image member.") . You can either pass in a previously created image, or you can instantiate a new image. See Image for more information.

The following code creates a Quick Image element by calling the [AddQuickImage](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection~AddQuickImage.html "Link to the Web API Reference Guide to the AddQuickImage member.") method off the [ISection](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the Web API Reference Guide to the ISection interface.") interface and passing in a new image. The new image will use the second overload, using a string to identify the path of the image. This topic assumes that you have a Report element defined with at least one Section element added to it. See [Report](DocumentEngine-Report.html "Explains the report object that's available in the document engine.") and [Section](DocumentEngine-Section.html "Explains the section element that's used in the document engine.") for more information.

**In C#:**

```csharp
section1.AddQuickImage(new Image(Application.StartupPath + @"..Coffee Bean.bmp"));
```

 

 


