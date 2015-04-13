<!--
|metadata|
{
    "fileName": "word-creating-word-document-using-object-model-approach",
    "controlName": "Infragistics Word Library",
    "tags": ["Getting Started","How Do I"]
}
|metadata|
-->

# Creating Word Document Using Object Model Approach

This topic illustrates how to create a Microsoft®Word® document and its layout elements using the object model approach.

## Overview
The topic is organized as follows:

-   [Creating a Simple Word Document](#CreateSimpleDoc)
-   [Adding a Hyperlink](#AddHyperlink)
-   [Adding a Picture](#AddPic)
    -   [Adding an Anchored Picture](#AddAnchPic)
    -   [Adding an Inline Picture](#AddInlinePic)
-   [Setting the Header and the Footer](#HeaderFooter)
    -   [Adding and Setting the Header](#Header)
    -   [Adding and Setting the Footer](#Footer)
-   [Example Code: Full Code Sample](#ExCode)
-   [Related Topics](#RelatedTopics)

## <a id="CreateSimpleDoc"></a> Creating a Simple Word Document
The entire Word document is encapsulated by the [Document](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document.html) class. The Document class is the root-level entity in the object hierarchy, under which all other objects are grouped. It serves as a container for block-level content such as paragraphs and tables. Block-level content is contained within the [ContentBlocks](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document~ContentBlocks.html) collection.

Individual paragraphs in the document are encapsulated by the [Paragraph](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Paragraph.html) class. The Paragraph class exposes a [ContentRuns](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Paragraph~ContentRuns.html) collection, which provides a way to add content to the paragraph.

To generate a Word document, create an instance of the Document class and manipulate it using publicly exposed properties and methods, and then call a [Save](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document~Save.html) method.

The various properties of the Word document such as Author, Title, Subject, etc., can be set using the [DocumentProperties](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document~DocumentProperties.html) property. These information can be accessed in Word 2007 by clicking the Office Button and navigating to Prepare > Properties section. Similarly in Word 2010 by clicking the File tab the document properties can be accessed from the right side of the backstage view.

**In C#:**

```csharp
using Infragistics.Documents.Word;

string documentName = @"C:TestWordDOMDoc.docx";
Document doc = new Document();
// Set the document properties, such as title, author, etc.
doc.DocumentProperties.Title = "Sample Document";
doc.DocumentProperties.Author = string.Format("Infragistics.{0}", SystemInformation.UserName);
Infragistics.Documents.Word.Font font = doc.CreateFont();
font.Bold = true;
font.Size = 15;
font.Underline = Underline.Double;
// Add a Paragraph to the document
Paragraph para1 = doc.ContentBlocks.AddParagraph();
para1.ContentRuns.AddTextRun("Sample Word Document with Hyperlinks,Images,Headers and Footers", font);
```

## <a id="AddHyperlink"></a> Adding a Hyperlink to the Word Document
The Infragistics Word library supports hyperlinks. The [AddHyperlink](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.ContentRunsCollection~AddHyperlink.html) method adds a TextHyperlink to the associated paragraph.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Add a Paragraph to the document
Paragraph para2 = doc.ContentBlocks.AddParagraph();
para2.ContentRuns.AddTextRun("Hyperlink:  ");
// Add a Hyperlink
para2.ContentRuns.AddHyperlink("http://www.infragistics.com", "Infragistics Inc.");
```

## <a id="AddPic"></a> Adding a Picture
### <a id="AddAnchPic"></a> Adding Anchored Picture
The [AnchoredPicture](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.AnchoredPicture.html) class encapsulates a picture or image that is anchored to a specific location within the document. [AddAnchoredPicture](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.AnchorsCollection~AddAnchoredPicture.html) method adds an anchored picture to the associated paragraph.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Get Image
Image img = Image.FromFile(@"....Ballon_New_Year.jpg");
// Add a paragraph to the Document
Paragraph para3 = doc.ContentBlocks.AddParagraph();
para3.ContentRuns.AddTextRun("Anchored Picture: An Anchored picture or image is one that is anchored to a specific location within the document. Unlike an inline picture, which moves along with adjacent content, an Anchored Picture remains at a fixed location within the paragraph, with adjacent text flowing around it.");

// Create an Anchored picture
AnchoredPicture anchPic = doc.CreateAnchoredPicture(img);
// Assign the picture outline properties for anchored image
anchPic.AlternateTextDescription = "Word Image";
anchPic.Outline.Color = Color.Brown;
anchPic.Outline.Style = PictureOutlineStyle.Single;
anchPic.Outline.LineWidth = 1;
// Add the Anchored picture to anchor section of the paragraph
para3.Anchors.AddAnchoredPicture(anchPic);
```

### <a id="AddInlinePic"></a> Adding Inline Picture
The [InlinePicture](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.InlinePicture.html) class enacpsulates a picture, which appears inline with the textual content within the document. [AddInlinePicture](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.ContentRunsCollection~AddInlinePicture.html) method adds an inline picture to the associated paragraph.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Get Image
Image img = Image.FromFile(@"....Ballon_New_Year.jpg");

// Add a Paragraph to the document
Paragraph para4 = doc.ContentBlocks.AddParagraph();
para4.ContentRuns.AddTextRun("Inline Picture: An inline picture moves with the adjacent content");

// Create an Inline picture
InlinePicture inlinePic = doc.CreateInlinePicture(img);
inlinePic.AlternateTextDescription = "Word Image";
// Add the Inline picture to a content section of the paragraph
para4.ContentRuns.AddInlinePicture(inlinePic);
```
The [Section](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Section.html) class encapsulates the pagination properties and header/footer content for a document section.

## <a id="HeaderFooter"></a> Setting the Header and the Footer
### <a id="Header"></a> Adding and Setting the Header
The following code example shows how to display text and image in the header section of all pages.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Add a paragraph to the Document
Paragraph para5 = doc.ContentBlocks.AddParagraph();
// Add text to Paragraph
Section sec = doc.Sections.Add(para5);

// Header
Paragraph headerPara = sec.HeaderAllPages.ContentBlocks.AddParagraph();
// The header text alignment is set to right
headerPara.Properties.Alignment = ParagraphAlignment.Right;
// Create an Anchored Image to display in the Header
AnchoredPicture headeranchPic = doc.CreateAnchoredPicture(img);
// Display Anchored Image in Header
headerPara.Anchors.AddAnchoredPicture(headeranchPic);
// Display Text in Header
headerPara.ContentRuns.AddTextRun("This is a header");
```

### <a id="Footer"></a> Adding and Setting the Footer
The [AddPageNumberField](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.ContentRunsCollection~AddPageNumberField.html) method adds a PageNumberField to the associated paragraph.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Add a paragraph to the Document
Paragraph para5 = doc.ContentBlocks.AddParagraph();
// Add section which defines pagination for specified paragraph
Section sec = doc.Sections.Add(para5);

//Footer
Paragraph footerPara = sec.FooterAllPages.ContentBlocks.AddParagraph();
// The footer text alignment is set to right
footerPara.Properties.Alignment = ParagraphAlignment.Right;
// Display Text in Footer
footerPara.ContentRuns.AddTextRun("This is a footer");
// Add Page numbers to the Footer
footerPara.ContentRuns.AddPageNumberField(PageNumberFieldFormat.Ordinal);
```

## <a id="ExCode"></a> Example Code: Full Code Sample
Following is the complete functional code used in the examples in this topic.

**In C#:**

```csharp
using Infragistics.Documents.Word;

string documentName = @"C:TestWordDOMDoc.docx";
Document doc = new Document();
// Set the document properties, such as title, author, etc.
doc.DocumentProperties.Title = "Sample Document";
doc.DocumentProperties.Author = string.Format("Infragistics.{0}", SystemInformation.UserName);
Infragistics.Documents.Word.Font font = doc.CreateFont();
font.Bold = true;
font.Size = 15;
font.Underline = Underline.Double;
// Add a Paragraph to the document
Paragraph para1 = doc.ContentBlocks.AddParagraph();
para1.ContentRuns.AddTextRun("Sample Word Document with Hyperlinks,Images,Headers and Footers", font);
para1.ContentRuns.AddNewLine();
Paragraph para2 = doc.ContentBlocks.AddParagraph();
para2.ContentRuns.AddTextRun("Hyperlink:  ");

// Add a Hyperlink
para2.ContentRuns.AddHyperlink("http://www.infragistics.com", "Infragistics Inc.");
para2.ContentRuns.AddNewLine();

// Get Image
Image img = Image.FromFile(@"....Ballon_New_Year.jpg");
// Add a paragraph to the Document
Paragraph para3 = doc.ContentBlocks.AddParagraph();
para3.ContentRuns.AddTextRun("Anchored Picture: An Anchored picture or image is one that is anchored to a specific location within the document. Unlike an inline picture, which moves along with adjacent content, an Anchored Picture remains at a fixed location within the paragraph, with adjacent text flowing around it.");

// Create an Anchored picture
AnchoredPicture anchPic = doc.CreateAnchoredPicture(img);
// Assign the picture outline properties for anchored image
anchPic.AlternateTextDescription = "Word Image";
anchPic.Outline.Color = Color.Brown;
anchPic.Outline.Style = PictureOutlineStyle.Single;
anchPic.Outline.LineWidth = 1;
// Add the Anchored picture to anchor section of the paragraph
para3.Anchors.AddAnchoredPicture(anchPic);

// Add a Paragraph to the document
Paragraph para4 = doc.ContentBlocks.AddParagraph();
para4.ContentRuns.AddTextRun("Inline Picture: An inline picture moves with the adjacent content");

// Create an Inline picture
InlinePicture inlinePic = doc.CreateInlinePicture(img);
inlinePic.AlternateTextDescription = "Word Image";
// Add the Inline picture to a content section of the paragraph
para4.ContentRuns.AddInlinePicture(inlinePic);

// Add a paragraph to the Document
Paragraph para5 = doc.ContentBlocks.AddParagraph();
// Add text to Paragraph
Section sec = doc.Sections.Add(para5);
// Header
Paragraph headerPara = sec.HeaderAllPages.ContentBlocks.AddParagraph();
// The header text alignment is set to right
headerPara.Properties.Alignment = ParagraphAlignment.Right;
// Create an Anchored Image to display in the Header
AnchoredPicture headeranchPic = doc.CreateAnchoredPicture(img);
// Display Anchored Image in Header
headerPara.Anchors.AddAnchoredPicture(headeranchPic);
// Display Text in Header
headerPara.ContentRuns.AddTextRun("This is a header");

//Footer
Paragraph footerPara = sec.FooterAllPages.ContentBlocks.AddParagraph();
// The footer text alignment is set to right
footerPara.Properties.Alignment = ParagraphAlignment.Right;
// Display Text in Footer
footerPara.ContentRuns.AddTextRun("This is a footer");
// Add Page numbers to the Footer
footerPara.ContentRuns.AddPageNumberField(PageNumberFieldFormat.Ordinal);

doc.Save(documentName);
```

## <a id="RelatedTopics"></a> Related Topics
-   [Creating a Word Document](Word-Create-a-Word-Document.html)
-   [Applying Formatting to Word Document](Word-Apply-Formatting-to-Word-Document.html)
-   [Adding Table to Word Document](Word-Add-Table-to-Word-Document.html)
-   [Adding Images to Word Document](Word-Add-Images-to-Word-Document.html)
-   [Headers Footers and Page Numbers](Word-Headers-Footers-and-Page-Numbers.html)
-   [Understanding Infragistics Word Library](Word-Understanding-Infragistics-Word-Library.html)

 

 


