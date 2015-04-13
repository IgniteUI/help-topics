<!--
|metadata|
{
    "fileName": "documentengine-getting-started-with-infragistics-document-engine",
    "controlName": "Infragistics Document Library",
    "tags": ["Getting Started","Reporting"]
}
|metadata|
-->

# Getting Started with Infragistics Document Engine



The Infragistics Document Engine™ is a large assembly containing multiple namespaces with several interfaces in each. If you are new to the Documents assembly, we can completely understand the potential to get a little overwhelmed at the sheer size of the assembly. For this reason, we've added a quick start topic that will guide you through the shortest route that you need to take in order to understand the Infragistics Document Engine and create a simple report of your own.

Since report writing is a linear process, you can use the following road map to help you understand the Document Engine's Document Object Model.

    Report > Section > Layout Elements > Report Graphics > Pattern Content > Publishing

## Report
The [`Report`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report.html "Link to the Web API Reference Guide to the Report member.") object contains all the objects, properties, and information needed to create a report. Your first step in creating a report is to instantiate this object. Once instantiated, you can add sections and report information, set report-specific properties, save your report, or load an existing report. You can access report bookmarks, as well as preferences, attached files, and embedded fonts. When you are ready to add content to your report, You can use the AddSection method to add a Section element.

See [`Report`](DocumentEngine-Report.html "Discusses the Report object that's available in the Document Engine.") for more information.

## Section
Once you have your Report object, you can't create any content until you've added an [`ISection`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the Web API Reference Guide to the ISection interface.") object. The Section element is unique because it is the only layout element that you can add to the report itself. Every other layout element (e.g., Band, Chain, Flow, and Group) can be added to the Section element. Add as many Sections as needed to your report. You can add extra pages to sections, as well as add multiple headers and footers. You need a firm grasp on what layout elements and content the Section element can and cannot include.

See [Section](DocumentEngine-Section.html "Discusses the section object that's avialable in the document engine.") for more information.

## Layout Elements
There are 10 elements that will help you organize and lay out the content of your report. These elements can contain text, images, tables, trees, lists, and many more content elements. A good layout element to start out with is the Band element. The Band element, like the Section element, can contain most other layout elements and pattern content. The Band element also has a collection of repeatable headers, footers, and dividers.

See the [DocumentEngine Report Layout](DocumentEngine-Report-Layout.html "Discusses the layout elements available to help generate reports.") section for more information; to quickly get started, see the [Band](DocumentEngine-Band.html "Explains the Document Engine's Band element.") topic for a layout element that can fit most your needs.

## Report Graphics
Now that you've gone through the basics of report writing (i.e., creating a report, adding sections, and filling those sections with layout elements and content), you need to add a little liveliness to your report by using report graphics. Report graphics affords you color, gradient and solid fills, different style fonts, canvases containing rectangles of all shapes and sizes, and images (Images are worth a thousand words!). Add beauty to your report's layout with Brushes and Pens. You can use Brushes and Pens for Backgrounds and Borders respectively, and would be a great stop on your journey to a place where executive reports are fun to read!

See the [Report Graphics](DocumentEngine-Report-Graphics.html "Explains the document engine's report graphics objects.") section for more information; to quickly get started, see the [`Brushes`](DocumentEngine-Brushes.html "Explains the document engine brushes.") and [`Pens`](DocumentEngine-Pens.html "Explains the document engines pens.") topics.

## Pattern Content
Pattern content is the heart of your report. Any text that you wish to add will be done through the elements found in this group. You'll find a Text element here that allows you to add any text with any style. Use Grids, Lists, Trees, of data from a DataSet, use the [ITable](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Table.ITable.html "Link to the Web API Reference Guide to the ITable interface.") interface. Do you have a list of names or products important to your report? List them out using the [`IList`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.List.IList.html "Link to the Web API Reference Guide to the IList interface.") interface. Each of these elements can be easily added to your layout elements through specific methods (i.e., AddTable for the ITable interface and AddList for the IList interface). These methods are found off most layout elements.

See the [Pattern Content](DocumentEngine-Pattern-Content.html "Explains the pattern content that's available in the document engine.") section for more information; to quickly get started, see the [Text](DocumentEngine-Text.html "Explains the text element that's available in the document engine.") topic.

## Publishing
When you're finished writing your report, you may need to share it with someone! How you publish your report depends on several factors. Let's go over the different ways of publishing.

**Printing** -- The simplest method of publishing. Call the [Print](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Print.html "Link to the Web API Reference Guide to the Print member.") method from the Report object and you'll be able to print your report directly to a local printer.

**Publishing** -- The term “Publish” here refers to writing your report to a PDF or XPS file. This method is equivalent to printing a Microsoft® Word document using the Adobe Acrobat® PDF writer.

**Saving as XML** -- You have the option of saving your entire report content to an XML file. This enables you to save the entire finished report and load it at a later time. This is useful if you know you will need to make additions or modifications to your report once it has been published.

**Generate** -- This process of publishing is unique and a bit strange, but extremely useful. Using the [`Generate`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Generate.html "Link to the Web API Reference Guide to the Generate member.") method off the Report object creates graphic objects of a set amount of pages from your report. What you can do with these graphic objects is use them as thumbnail images of your report's pages.

See [Publishing a Report](DocumentEngine-Publish-a-Report.html "Explains how to publish a report created by the document engine.") for more information.

 

 


