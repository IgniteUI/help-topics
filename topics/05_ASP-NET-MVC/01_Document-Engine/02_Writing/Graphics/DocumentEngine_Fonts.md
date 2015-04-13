<!--
|metadata|
{
    "fileName": "documentengine-fonts",
    "controlName": "Infragistics Document Library",
    "tags": ["Reporting","Styling"]
}
|metadata|
-->

# Fonts

You can't write a report without text, so fonts will be an integral part of your report-writing experience. Of course, you could use all default settings for your text, but those defaults still use fonts (default font is Arial, 12 pt.). All you need in order to define a font is the name and size. There are several overloads for the [`Font`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~_ctor.html "Link to the Web API Reference Guide to the Font member.") constructor that also give you other options when defining fonts such as [FontStyle](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.FontStyle.html "Link to the Web API Reference Guide to the FontStyle member.") and location of the font (if it's not in the system's Fonts folder). There are a number of styles that you can add to your fonts through properties; for example:

-   [Bold](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~Bold.html "Link to the Web API Reference Guide to the Bold member.")
-   [Double Strikeout](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~DoubleStrikeout.html "Link to the Web API Reference Guide to the Double Strikeout member.")
-   [Double Underline](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~DoubleUnderline.html "Link to the Web API Reference Guide to the Double Underline member.")
-   [Italic](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~Italic.html "Link to the Web API Reference Guide to the Double Underline member.")
-   [Strikeout](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~Strikeout.html "Link to the Web API Reference Guide to the Strikeout member.")
-   [Underline](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~Underline.html "Link to the Web API Reference Guide to the Underline member.")

Each of these styles is also available in the FontStyle enumeration, which is used when setting the [Style](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Font~Style.html "Link to the Web API Reference Guide to the Style member.") property. You can also access a collection of predefined fonts and styles using the [Fonts](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Graphics.Fonts.html "Link to the Web API Reference Guide to the Fonts member.") class. Keep in mind, though, that each font in the Fonts class is sealed and you cannot modify the style (e.g., add Bold or Underline).

![Shows several of the fonts available for use in PDFs, and is the results of the code listed below.](images/DocumentEngine_Fonts_01.png)

* * * * *

The example code below demonstrates a few common uses of the Font object by defining two fonts and using them in Text elements.

1.  **Define the Font objects.**

    **In Visual Basic:**

    ```vb
    Imports Infragistics.Documents.Reports.Report
    Imports Infragistics.Documents.Reports.Graphics
    .
    .
    .
    ' Define two font objects.
    Dim verdanaBigItalic As New Font("Verdana", 18, FontStyle.Italic)
    Dim verdanaSmallBold As New Font("Verdana", 10, FontStyle.Bold)
    ```

    **In C#:**

    ```csharp
    using Infragistics.Documents.Reports.Report;
    using Infragistics.Documents.Reports.Graphics;
    .
    .
    .
    // Define two font objects.
    Font verdanaBigItalic = new Font("Verdana", 18, FontStyle.Italic);
    Font verdanaSmallBold = new Font("Verdana", 10, FontStyle.Bold);
    ```

2.  **Add three Text elements to the main section (section1) and set their styles.**

    **In Visual Basic:**

    ```vb
    ' Add a new Text element to the section and store the 
    ' reference fontText. Then set the style using the font
    ' created earlier and use a black brush.
    Dim fontText As Infragistics.Documents.Reports.Report.Text.IText = section1.AddText()
    fontText.Margins = New Margins(0, 3)
    fontText.Style = _
      New Infragistics.Documents.Reports.Report.Text.Style(verdanaBigItalic, Brushes.Black)
    fontText.AddContent("This font is Verdana, 18 pt., and Italic")

    ' Add another text element.
    fontText = section1.AddText()
    fontText.Margins = New Margins(0, 3)
    fontText.Style = _
      New Infragistics.Documents.Reports.Report.Text.Style(verdanaSmallBold, Brushes.Black)
    fontText.AddContent("This font is Verdana, 10 pt., and Bold")

    ' Add another text element; this time using a predefined font
    ' and changing the color to red.
    fontText = section1.AddText()
    fontText.Margins = New Margins(0, 3)
    fontText.Style = _
      New Infragistics.Documents.Reports.Report.Text.Style( _
      Fonts.TimesNewRomanBold, Brushes.Red)
    fontText.AddContent("This font is a predefined font: Fonts.TimesNewRomanBold")
    ```

    **In C#:**

    ```csharp
    // Add a new Text element to the section and store the 
    // reference fontText. Then set the style using the font
    // created earlier and use a black brush.
    Infragistics.Documents.Reports.Report.Text.IText fontText = section1.AddText();
    fontText.Margins = new Margins(0, 3);
    fontText.Style = 
      new Infragistics.Documents.Reports.Report.Text.Style(verdanaBigItalic, Brushes.Black);
    fontText.AddContent("This font is Verdana, 18 pt., and Italic");

    // Add another text element.
    fontText = section1.AddText();
    fontText.Margins = new Margins(0, 3);
    fontText.Style = 
      new Infragistics.Documents.Reports.Report.Text.Style(verdanaSmallBold, Brushes.Black);
    fontText.AddContent("This font is Verdana, 10 pt., and Bold");

    // Add another text element; this time using a predefined font
    // and changing the color to red.
    fontText = section1.AddText();
    fontText.Margins = new Margins(0, 3);
    fontText.Style = 
      new Infragistics.Documents.Reports.Report.Text.Style( 
      Fonts.TimesNewRomanBold, Brushes.Red);
    fontText.AddContent("This font is a predefined font: Fonts.TimesNewRomanBold");
    ```