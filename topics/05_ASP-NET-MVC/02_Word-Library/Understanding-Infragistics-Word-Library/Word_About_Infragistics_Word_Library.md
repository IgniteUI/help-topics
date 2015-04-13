<!--
|metadata|
{
    "fileName": "word-about-infragistics-word-library",
    "controlName": "Infragistics Word Library",
    "tags": ["How Do I"]
}
|metadata|
-->

# About Infragistics Word Library

This topic explains with examples the possible approaches to creating Word documents: the forward-only streamer approach and the object-model approach.

The topic is organized as follows:

-   [Approaches to Generating Word Documents](#approaches)
    -   [Implementing the Forward-Only Streamer Approach](#streamer)
    -   [Implementating the Object Model Approach](#dom)
-   [Related Topics](#related-content)

## <a id="approaches"></a> Approaches to Generating Word Documents
The Word library enables you to create Microsoft® Word® documents. Word documents can be created by applying either the forward-only streamer approach or the object-model approach. The advantages and disadvantages of each of them are briefly discussed below.

The forward-only streaming approach improves performance but decreases the ease of use since the calls to one method must be balanced with calls to another method and the consequence of this error is usually an exception from which execution cannot resume. The alternative object-driven approach is easy to use but in case of large data may consume large amounts of system memory.

### <a id="streamer"></a> Implementing the Forward-Only Streamer Approach

The [WordDocumentWriter](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.WordDocumentWriter.html) is a streamer object that provides a fast, non-cached, forward-only means of generating streams or files containing word processing data. This object is available in the Infragistics.Documents.IO assembly. The WordDocumentWriter object enables you to create Word documents with improved performance through the forward-only streaming approach.

The WinGridWordWriter™ and WinFormattedTextWordWriter™ components use the WordDocumentWriter object for their exporting to Word functionality. The content exported by these components is directly exported to a file without creating the document in memory and hence use much less RAM and avoid memory issues caused during export of very large data.

The sections below demonstrate how to use the WordDocumentWriter class with code examples.

####  Requirements

A reference to the Infragistics.Web.Mvc.Documents.IO assembly is required.

#### Creating an Instance

The WordDocumentWriter class is abstract, and does not support direct instantiation. Therefore, a static [Create](Infragistics.Web.Mvc.Documents.IO~Infragistics.Documents.Word.WordDocumentWriter~Create.html) method is exposed to create an instance of a derived class.

**In C#:**

```csharp
//  Compile the file name
string filename = "C:SampleWordDoc";

//  Create a new instance of the WordDocumentWriter class using the
//  static 'Create' method.
using ( WordDocumentWriter writer = WordDocumentWriter.Create(filename) )
{
}
```

##### Creating a Blank Word Document

One of the first things when creating a Word document is to indicate the begining the document. This writes the and tags to the output stream, and prepares the writer for further input. The following code sample demonstrates how to start and close a blank Word document:

**In C#:**

```csharp
//  Create a new instance of the WordDocumentWriter class using the
//  static 'Create' method.
string filename = "C:SampleWordDoc";
 using ( WordDocumentWriter writer = WordDocumentWriter.Create(filename) )
{
//  Start the document...note that each call to StartDocument must
//  be balanced with a corresponding call to EndDocument.
writer.StartDocument();

//  TODO: SOmething interesting

//  End the document.
writer.EndDocument();
}
```

#### Adding Paragraphs

The following code sample demonstrates how to add a paragraph with a text run, using a specific font:

**In C#:**

```csharp
private void WriteParagraph(
    WordDocumentWriter writer,
    string text,
    Infragistics.Documents.Word.Font font )
{
    
    //  Open a paragraph
    writer.StartParagraph();

    //  Add a text run with the specified text and font
    writer.AddTextRun( text, font );

    //  Close the paragraph.
    writer.EndParagraph();
}
```

### <a id="dom"></a> Implementating the Object Model Approach

##### Introduction to the Document Class

The [Document](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document.html) class encapsulates all content associated with the Word document. It is the root-level entity in the object hierarchy, under which all other objects are grouped. For generating a Microsoft Word document you need to create an instance of the [Document](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document.html) class, manipulate it using publicly exposed properties and methods, and then call a [Save](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Document~Save.html) method.

##### Requirements

The Object model approach requires a reference to the Infragistics.Documents.Word assembly in addition to the Infragistics.Web.Mvc.Documents.IO assembly.

##### Creating a Blank Word Document and Saving It

The following code sample demonstrates how to use the Document class to create an empty word document and save it to a particular location:

**In C#:**

```csharp
//  Create a new Word Document
Document doc = new Document();

string filename = "C:SampleDoc";

//  Save the document
doc.Save(filename);
```

##### Adding Paragraphs

The following code sample demonstrates how to use the [Paragraph](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Paragraph.html) class to add text to a Document, and align that text with the center of the printable area:

##### Introduction to the Paragraph Class

The Paragraph class encapsulates a single paragraph in the document. A Paragraph is created by adding a member to the Document’s content blocks collection. A Paragraph provides the ability to display a block of text which can be aligned or indented. The Paragraph class exposes a [ContentRuns](Infragistics.Web.Mvc.Documents.Word~Infragistics.Documents.Word.Paragraph~ContentRuns.html) collection, which provides a way to add content to the paragraph.

**In C#:**

 ```csharp
 //  Create a new Word Document
Document doc = new Document();

string filename = "C:SampleDoc";

//  Add a paragraph to the document
Paragraph p = doc.ContentBlocks.AddParagraph();

//  Center align the paragraph
p.Properties.Alignment = ParagraphAlignment.Center;

//  Add a text run to the paragraph
p.ContentRuns.AddTextRun("Hello World");

//  Save the document
doc.Save(filename);
 ```

## <a id="related-content">Related Topics
-   [Using the Infragistics Word Library](Word-Using-the-Infragistics-Word-Library.html)
-   [Word Document Generation References and Dependencies](Word-Word-Document-Generation-References-and-Dependencies.html)

 

 


