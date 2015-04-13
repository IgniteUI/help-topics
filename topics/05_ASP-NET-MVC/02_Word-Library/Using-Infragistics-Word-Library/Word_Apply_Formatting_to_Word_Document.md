<!--
|metadata|
{
    "fileName": "word-apply-formatting-to-word-document",
    "controlName": "Infragistics Word Library",
    "tags": ["Formatting","How Do I"]
}
|metadata|
-->

# Applying Formatting to Word Document

This topic demonstrates formatting of Word document using the Infragistics® Word library. The code below uses the forward-only [WordDocumentWriter](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.WordDocumentWriter.html) object. The various formatting functionalities discussed in this topic are Font, Paragraph formatting and Page attributes such as size, orientation etc.

**Note:** A reference to the Infragistics.Web.Mvc.Documents.IO assembly is required.

## Designating Fonts
The [Font](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.Font.html) class provides a way to customize the visual attributes of a character or range of characters.

**In C#:**

```csharp
using Infragistics.Documents.Word;

//  Create a font, which can be reused in content creation
Infragistics.Documents.Word.Font font = docWriter.CreateFont();
font.Bold = true;
font.Size = .23f;
font.Underline = Underline.Double;
font.UnderlineColor = Color.Blue;
font.Effects.Capitalization = Capitalization.CapsOn;
```

## Paragraph Properties
The [ParagraphProperties](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.ParagraphProperties.html) class provides a way to control formatting for a paragraph.

**In C#:**

```csharp
using Infragistics.Documents.Word;

// Paragraph Properties
// Create a new instance of the WordDocumentWriter class using the
// static 'Create' method.
WordDocumentWriter docWriter = WordDocumentWriter.Create(@"C:TestWordDoc.docx");
ParagraphProperties paraformat = docWriter.CreateParagraphProperties();
paraformat.Alignment = ParagraphAlignment.Right;
```

## Section Properties
The [SectionProperties](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.SectionProperties.html) class provides a way to control page attributes such as size, margin and orientation. The DefineSection method passing in the SectionProperties instance must be called after the EndParagraph method.

**In C#:**

```csharp
using Infragistics.Documents.Word;

//  Create a new instance of the WordDocumentWriter class using the
//  static 'Create' method.
WordDocumentWriter docWriter = WordDocumentWriter.Create(@"C:TestWordDoc.docx");
//  Use inches as the unit of measure
docWriter.Unit = UnitOfMeasurement.Inch;
SectionProperties secProperties = docWriter.CreateSectionProperties();
secProperties.PageSize = new SizeF(7, 5);
secProperties.PageOrientation = PageOrientation.Landscape;
// Applies the section properties(PageSize and Orientation) for the above added paragraphs
docWriter.DefineSection(secProperties);    
```
Following is the complete code with all the above mentioned formatting.

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
//Start the document...note that each call to StartDocument must
//be balanced with a corresponding call to EndDocument.
docWriter.StartDocument();
//Start a paragraph
docWriter.StartParagraph();
//  Add a text run for the title, bolded and a little bigger
font.Bold = true;
font.Size = .23f;
font.Underline = Underline.Double;
font.UnderlineColor = Color.Blue;
font.Effects.Capitalization = Capitalization.CapsOn;
docWriter.AddTextRun("Paragraphs and Topic Sentences", font);
//End the paragraph
docWriter.EndParagraph();

// Paragraph Properties
ParagraphProperties paraformat = docWriter.CreateParagraphProperties();
paraformat.Alignment = ParagraphAlignment.Right;

// Start another Paragraph
// and apply the ParagraphProperties Object
docWriter.StartParagraph(paraformat);
docWriter.AddNewLine();
// Reset font, and apply different font settings for this paragraph.
font.Reset();
font.Italic = true;
font.ForeColor = Color.Blue;
font.Effects.TextEffect = FontTextEffect.EngravingOn;
docWriter.AddTextRun("A paragraph is a series of sentences that are organized and coherent, and are all related to a single topic. Almost every piece of writing you do that is longer than a few sentences should be organized into paragraphs. This is because paragraphs show a reader where the subdivisions of an essay begin and end, and thus help the reader see the organization of the essay and grasp its main points.", font);
// End the paragraph
docWriter.EndParagraph();
//Add an Empty paragraph
docWriter.AddEmptyParagraph();
docWriter.StartParagraph();
font.Reset();
font.ForeColor = Color.Red;
docWriter.AddTextRun("This page is defined by the SectionProperties object. The size of the page is set to 7x5 inches and the Orientation is set to Landscape.", font);
docWriter.EndParagraph();

// Set page attributes
SectionProperties secProperties = docWriter.CreateSectionProperties();
secProperties.PageSize = new SizeF(7, 5);
secProperties.PageOrientation = PageOrientation.Landscape;
// Applies the section properties(PageSize and Orientation) for the above added paragraphs
docWriter.DefineSection(secProperties);

// End the Document
docWriter.EndDocument();
// Close the writer
docWriter.Close();
```

## Related Topics
-   [Creating a Word Document](Word-Create-a-Word-Document.html)
-   [Adding Table to Word Document](Word-Add-Table-to-Word-Document.html)
-   [Word Add Images to Word Document](Word-Add-Images-to-Word-Document.html)
-   [Headers Footers and Page Numbers](Word-Headers-Footers-and-Page-Numbers.html)
-   [Understanding Infragistics Word Library](Word-Understanding-Infragistics-Word-Library.html)

 

 


