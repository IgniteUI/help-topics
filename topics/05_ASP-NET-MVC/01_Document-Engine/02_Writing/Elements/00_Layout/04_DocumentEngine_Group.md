<!--
|metadata|
{
    "fileName": "documentengine-group",
    "controlName": "Infragistics Document Library",
    "tags": ["Grouping","Reporting"]
}
|metadata|
-->

# Group

A Group element is a simple content section with no flourishes or frills. The Group element is quite similar to the Band element. The main difference between the two is that the Band element contains headers, dividers, and footers; the Group element does not. You can think of the Group element as nothing more than a section that groups multiple sections together. Place one or two bands inside a group, along with a couple images, a grid, table, or list; the main point is to keep other content elements together in a logical grouping.

Creating a Group element is a simple task, as with most content elements; you do so by calling the AddGroup method off a Section element or other layout element. For a complete list of layout elements to which you can add a Group, see [Layout Element Comparison Table](DocumentEngine-Layout-Element-Comparison-Table.html "Explains how the elements available in the document engine work with the layout elements available in the document engine."). Once you've instantiated a Group, you can add almost any Infragistics Document Engine™ content to it. There are also several other standard properties that you can customize such as [`Background`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Background.html "Link to the Web API Reference Guide to the Background member.") , [`Borders`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Borders.html "Link to the Web API Reference Guide to the Borders member.") , [`Paddings`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Paddings.html "Link to the Web API Reference Guide to the Paddings member.") , [`Margins`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Margins.html "Link to the Web API Reference Guide to the Margins member.") , [`Height`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Height.html "Link to the Web API Reference Guide to the Height member.") and [`Width`](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IGroup~Width.html "Link to the Web API Reference Guide to the Width member.") , and more.

* * * * *

The following code adds a Group element to a Section element and then adds text, a horizontal rule, and an image to the group.

Use the following text to set the the `string1` variable:

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec imperdiet mattis sem. Nunc ornare elit at justo. In quam nulla, lobortis non, commodo eu, eleifend in, elit. Nulla eleifend. Nulla convallis. Sed eleifend auctor purus. Donec velit diam, congue quis, eleifend et, pretium id, tortor. Nulla semper condimentum justo. Etiam interdum odio ut ligula. Vivamus egestas scelerisque est. Donec accumsan. In est urna, vehicula non, nonummy sed, malesuada nec, purus. Vestibulum erat. Vivamus lacus enim, rhoncus nec, ornare sed, scelerisque varius, felis. Nam eu libero vel massa lobortis accumsan. Vivamus id orci. Sed sed lacus sit amet nibh pretium sollicitudin. Morbi urna.

**In Visual Basic:**

```vb
Imports Infragistics.Documents.Reports.Report
Imports Infragistics.Documents.Reports.Graphics
.
.
.
' Add a Group element to the Section element named
' section1 and assign it to group1. Set the Background
' color of the group to light blue (so you can see the
' bounds of the group).
Dim group1 As Infragistics.Documents.Reports.Report.IGroup = section1.AddGroup()
group1.Background = New Background(New Color(180, 199, 228))

Dim groupHeading As IText = group1.AddText()
groupHeading.Style = mainStyle2
groupHeading.AddContent("Group")

' Create two paragraphs of text. Put 10 pixels of padding
' at all edges of the paragrph and separate the two 
' paragraphs with line breaks.
Dim string1 As String = "Lorem ipsum..."

Dim groupText As Infragistics.Documents.Reports.Report.Text.IText = group1.AddText()
groupText.Paddings.All = 10
groupText.AddContent(string1)
groupText.AddLineBreak()
groupText.AddLineBreak()
groupText.AddContent(string1)

' Add a horizontal rule (solid line) after the paragraphs.
' This rule will be black and have 20 pixels of space above
' and below it.
Dim groupRule As Infragistics.Documents.Reports.Report.IRule = group1.AddRule()
groupRule.Pen = Pens.Black
groupRule.Margins.All = 20

' Define an Image element with black borders and 10 pixels
' of padding on each edge. This code will use an image in
' the project folder called "Coffee Bean." You can find this
' image in the Windows folder. You can also use a string to 
' point to any location on your machine.
Dim groupImage As Infragistics.Documents.Reports.Report.IImage = _  group1.AddImage(New Image(Application.StartupPath + "..Coffee Bean.bmp"))
groupImage.Borders.All = New Border(Pens.Black)
groupImage.Margins.All = 10
```

**In C#:**

```csharp
using Infragistics.Documents.Reports.Report;
using Infragistics.Documents.Reports.Graphics;
.
.
.
// Add a Group element to the Section element named
// section1 and assign it to group1. Set the Background
// color of the group to light blue (so you can see the
// bounds of the group).
Infragistics.Documents.Reports.Report.IGroup group1 = section1.AddGroup();
group1.Background = new Background(new Color(180, 199, 228));

// Create two paragraphs of text. Put 10 pixels of padding
// at all edges of the paragrph and separate the two 
// paragraphs with line breaks.
string string1 = "Lorem ipsum...";

Infragistics.Documents.Reports.Report.Text.IText groupText = group1.AddText();
groupText.Paddings.All = 10;
groupText.AddContent(string1);
groupText.AddLineBreak();
groupText.AddLineBreak();
groupText.AddContent(string1);

// Add a horizontal rule (solid line) after the paragraphs.
// This rule will be black and have 20 pixels of space above
// and below it.
Infragistics.Documents.Reports.Report.IRule groupRule = group1.AddRule();
groupRule.Pen = Pens.Black;
groupRule.Margins.All = 20;

// Define an Image element with black borders and 10 pixels
// of padding on each edge. This code will use an image in
// the project folder called "Coffee Bean". You can find this
// image in the Windows folder. You can also use a string to 
// point to any location on your machine.
Infragistics.Documents.Reports.Report.IImage groupImage =   group1.AddImage(new Image(Application.StartupPath + @"..Coffee Bean.bmp"));
groupImage.Borders.All = new Border(Pens.Black);
groupImage.Margins.All = 10;
```