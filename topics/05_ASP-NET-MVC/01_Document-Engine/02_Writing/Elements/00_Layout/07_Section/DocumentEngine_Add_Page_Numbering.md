<!--
|metadata|
{
    "fileName": "documentengine-add-page-numbering",
    "controlName": "Infragistics Document Library",
    "tags": ["Paging","Reporting"]
}
|metadata|
-->

# Add Page Numbering

An excellent report element that helps your reader navigate a report is page numbering. Used in conjunction with a table of contents, your reader will be able to quickly scan the table of contents and decide which page the feature they want to read is on. Once the reader has the page number, it is a simple task to flip to that page (or enter the page number at the bottom of the Adobe Acrobat Reader's viewer).

You'll find the mechanism for adding page numbers in the Section element of the document object model. For more information on the Section element, see the [`Section`](DocumentEngine-Section.html "Explains the section element of the document engine.") topic. There is a [`PageNumbering`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.PageNumbering.html "Link to the Web API Reference Guide to the PageNumbering member.") object available through the [`PageNumbering`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection~PageNumbering.html "Link to the Web API Reference Guide to the PageNumbering member.") property of the [`ISection`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the Web API Reference Guide to the ISection interface.") object which holds all the required settings to add page numbering to your report.

The following code will add page numbering in the lower-right corner of the report. Pay special attention to the comments as they describe each property in greater detail.

![](images/DocumentEngine_Add_Page_Numbering_01.png)

**In Visual Basic:**

```vb
' Get a reference to the section's PageNumbering object.
Dim pn As Infragistics.Documents.Reports.Report.Section.PageNumbering = _  section1.PageNumbering

' Create a style for the page numbering font.
pn.Style = New Infragistics.Documents.Reports.Report.Text.Style(Fonts.Arial, Brushes.Black)

' The Template property is the actual string that
' shows the page numbering. Use the [Page #] place-
' holder for the current page and the [TotalPages]
' place-holder for the total amount of pages in
' the entire document.
pn.Template = "Page [Page #] of [TotalPages]"

' Setting SkipFirst to true does not place page
' numbering on the first page of the section. This
' is useful if the first page is a Title page.
pn.SkipFirst = False

' The page numbering will be aligned with the
' right side of the page. Valid values off the
' Alignment enum include Left, Center, and Right.
pn.Alignment.Horizontal = Infragistics.Documents.Reports.Report.Alignment.Right

' The page numbering will be located at the 
' bottom of the page. Valid values off the
' Alignment enum include Top and Bottom.
pn.Alignment.Vertical = Infragistics.Documents.Reports.Report.Alignment.Bottom

' The page numbering is at the extreme bottom
' of the page, so we need to change the Y Offset
' in order to bring it in line with the rest of
' the page footer text.
pn.OffsetY = -18
```

**In C#:**

```csharp
// Get a reference to the section's PageNumbering object.
Infragistics.Documents.Reports.Report.Section.PageNumbering pn = _  section1.PageNumbering;

// Create a style for the page numbering font.
pn.Style = new Infragistics.Documents.Reports.Report.Text.Style(Fonts.Arial, Brushes.Black);
 
// The Template property is the actual string that
// shows the page numbering. Use the [Page #] place-
// holder for the current page and the [TotalPages]
// place-holder for the total amount of pages in
// the entire document.
pn.Template = "Page [Page #] of [TotalPages]";
                        
// Setting SkipFirst to true does not place page
// numbering on the first page of the section. This
// is useful if the first page is a Title page.
pn.SkipFirst = false;

// The page numbering will be aligned with the
// right side of the page. Valid values off the
// Alignment enum include Left, Center, and Right.
pn.Alignment.Horizontal = Infragistics.Documents.Reports.Report.Alignment.Right;

// The page numbering will be located at the 
// bottom of the page. Valid values off the
// Alignment enum include Top and Bottom.
pn.Alignment.Vertical = Infragistics.Documents.Reports.Report.Alignment.Bottom;
 
// The page numbering is at the extreme bottom
// of the page, so we need to change the Y Offset
// in order to bring it in line with the rest of
// the page footer text.
pn.OffsetY = -18; 
```

 

 


