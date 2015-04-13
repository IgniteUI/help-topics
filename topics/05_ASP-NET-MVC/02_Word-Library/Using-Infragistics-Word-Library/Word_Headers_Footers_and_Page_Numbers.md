<!--
|metadata|
{
    "fileName": "word-headers-footers-and-page-numbers",
    "controlName": "Infragistics Word Library",
    "tags": ["How Do I","Layouts"]
}
|metadata|
-->

# Headers Footers and Page Numbers
Using the Infragistics® Word library you can create headers and footers that may be as simple as a document title and a page number to images, multiple paragraphs, tables and hyperlinks.

The following screenshots depicts a Word document created with text and image in the `Header`:

![](images/Word_Headers_Footers_and_Page_Numbers_01.png)

The following screenshots depicts a Word document created with text and page number in the `Footer`:

![](images/Word_Headers_Footers_and_Page_Numbers_02.png)

> **Note:** A reference to the `Infragistics.Web.Mvc.Documents.IO` assembly is required for the following code.

## Headers and Footers
To write content to the headers and footers in a document section you must use the [SectionHeaderFooterWriterSet](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.SectionHeaderFooterWriterSet.html) class that holds one or more [WordHeaderFooterWriter](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.WordHeaderFooterWriter.html) instances. The headers and footers can either be set to all pages or to the first page only. Text, image, multiple paragraphs, hyperlinks can all be added to the header and footer sections.

**In C#:**

```csharp
using Infragistics.Documents.Word;

//  Specify the default parts for header and footer
SectionHeaderFooterParts parts = SectionHeaderFooterParts.HeaderAllPages | SectionHeaderFooterParts.FooterAllPages;
SectionHeaderFooterWriterSet writerSet = docWriter.AddSectionHeaderFooter(parts);
// Set text for Header
writerSet.HeaderWriterAllPages.Open();
writerSet.HeaderWriterAllPages.StartParagraph();
writerSet.HeaderWriterAllPages.AddTextRun("This text appears in the Header.");
writerSet.HeaderWriterAllPages.EndParagraph();
writerSet.HeaderWriterAllPages.Close();
// Set text for Footer
writerSet.FooterWriterAllPages.Open();
writerSet.FooterWriterAllPages.StartParagraph();
writerSet.FooterWriterAllPages.AddTextRun("This text appears in the footer.");
writerSet.FooterWriterAllPages.EndParagraph();
writerSet.FooterWriterAllPages.Close();
```

## Page Numbers
Page numbers are possible by adding the right settings to either the header or footer of a Word document using the [AddPageNumberField](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.WordHeaderFooterWriter~AddPageNumberField.html) method. This method accepts the `PageNumberFieldType` enum value and font object as optional argument. The `PageNumberFieldType` enum offers several formats such as `Decimal`, `RomanLowercase`, `TextCardinal`, `Ordinal` etc., for the page numbers.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Add Page numbers to the Footer
writerSet.FooterWriterAllPages.AddPageNumberField(PageNumberFieldFormat.Ordinal, font);
```
The following complete code adds header, footer and page numbers to the Word document.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Create a new instance of the WordDocumentWriter class using the
// static 'Create' method.
//  This instance must be closed once content is written into Word.
WordDocumentWriter docWriter = WordDocumentWriter.Create(@"C:TestWordDoc.docx");
//  Use inches as the unit of measure
docWriter.Unit = UnitOfMeasurement.Inch;
//  Create a font, which we can use in content creation
Infragistics.Documents.Word.Font font = docWriter.CreateFont();
font.Bold = true;
// Paragraph Properties
ParagraphProperties paraformat = docWriter.CreateParagraphProperties();

//Start the document...note that each call to StartDocument must
//be balanced with a corresponding call to EndDocument.
docWriter.StartDocument();
//Start a paragraph
docWriter.StartParagraph();
docWriter.AddNewLine();
docWriter.AddTextRun("This document demonstrates headers, footers and page numbers.", font);
// End the paragraph
docWriter.EndParagraph();
// Create a page break
paraformat.PageBreakBefore = true;
docWriter.StartParagraph(paraformat);
docWriter.EndParagraph();
// Header and Footer
//  Specify the default parts for header and footer.
SectionHeaderFooterParts parts = SectionHeaderFooterParts.HeaderAllPages | SectionHeaderFooterParts.FooterAllPages;
SectionHeaderFooterWriterSet writerSet = docWriter.AddSectionHeaderFooter(parts);
// Get Image to display in the Header
Image img = Image.FromFile(@"....Ballon_New_Year.jpg");
// Create an Anchored Image
AnchoredPicture anchPic = docWriter.CreateAnchoredPicture(img);
anchPic.Size = new SizeF(0.75f, 0.75f);
// Reset paragraph properties
paraformat.Reset();
paraformat.Alignment = ParagraphAlignment.Right;
// Header
writerSet.HeaderWriterAllPages.Open();
// The header text alignment is set to right
// by passing in the ParagraphProperties instance
writerSet.HeaderWriterAllPages.StartParagraph(paraformat);
// Add Image to the header
writerSet.HeaderWriterAllPages.AddAnchoredPicture(anchPic);
// Add text to the Header
writerSet.HeaderWriterAllPages.AddTextRun("This text appears in the Header.");
writerSet.HeaderWriterAllPages.EndParagraph();
writerSet.HeaderWriterAllPages.StartParagraph(paraformat);
// Add text to the Header
writerSet.HeaderWriterAllPages.AddTextRun("Multiple paragraphs can be added to the Header.");
writerSet.HeaderWriterAllPages.EndParagraph();
writerSet.HeaderWriterAllPages.Close();
//Footer
writerSet.FooterWriterAllPages.Open();
// The footer text alignment is set to right
// by passing in the ParagraphProperties instance
writerSet.FooterWriterAllPages.StartParagraph(paraformat);
writerSet.FooterWriterAllPages.AddTextRun("This text appears in the footer. ");
// Add Page numbers to the Footer
writerSet.FooterWriterAllPages.AddPageNumberField(PageNumberFieldFormat.Ordinal, font);
writerSet.FooterWriterAllPages.EndParagraph();
writerSet.FooterWriterAllPages.Close();

// End the Document
docWriter.EndDocument();
// Close the writer
docWriter.Close();
```

## Related Topics
-   [Creating a Word Document](Word-Create-a-Word-Document.html)
-   [Applying Formatting to Word Document](Word-Apply-Formatting-to-Word-Document.html)
-   [Adding Table to Word Document](Word-Add-Table-to-Word-Document.html)
-   [Word Add Images to Word Document](Word-Add-Images-to-Word-Document.html)
-   [Understanding Infragistics Word Library](Word-Understanding-Infragistics-Word-Library.html)

 

 


