<!--
|metadata|
{
    "fileName": "documentengine-site",
    "controlName": "Infragistics Document Library",
    "tags": ["Layouts","Reporting"]
}
|metadata|
-->

# Site
The Site element affords you the ultimate customizability in placing layout elements on a page. Using the Site element, you can place elements using their x- and y-coordinates, and even rotate them to any angle.

The Site element doesn't have unique properties that make it different from other layout elements; instead, each method that adds content elements contains two overloads. These overloads allow you to place each layout element separately wherever you chose.

The first overload of each layout element method accepts two floats, the distance from the left side of the Site element and the distance from the top of the Site element. The second overload accepts an additional float that controls the angle at which the layout element should be placed.

![](images/Site.png)

The following code adds a Site element to a Section element and then adds Text and Image elements to the Site element. The Text element is rotated 45 degrees and the Image element is rotated -45 degrees similar to the image above. This topic assumes that you already have a [Report](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report.html "Link to the Web API Reference Guide to the Report member.") defined along with a [Section](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the Web API Reference Guide to the ISection interface.") element added.

Use the following text to set the the `string1` variable:

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec imperdiet mattis sem. Nunc ornare elit at justo. In quam nulla, lobortis non, commodo eu, eleifend in, elit. Nulla eleifend. Nulla convallis. Sed eleifend auctor purus. Donec velit diam, congue quis, eleifend et, pretium id, tortor. Nulla semper condimentum justo. Etiam interdum odio ut ligula. Vivamus egestas scelerisque est. Donec accumsan. In est urna, vehicula non, nonummy sed, malesuada nec, purus. Vestibulum erat. Vivamus lacus enim, rhoncus nec, ornare sed, scelerisque varius, felis. Nam eu libero vel massa lobortis accumsan. Vivamus id orci. Sed sed lacus sit amet nibh pretium sollicitudin. Morbi urna.

**In C#:**

```csharp
using Infragistics.Documents.Reports.Report;
.
.
.
string string1 = "Lorem ipsum...";

// Define a new Site element and color its background.
Infragistics.Documents.Reports.Report.ISite site = section1.AddSite();
site.Background = new Background(Brushes.LightSteelBlue);

// Add a Text element to the Site element. The text element
// will be placed 250 pixels to the left and 100 pixels down
// and rotated 45 degrees clockwise.
Infragistics.Documents.Reports.Report.Text.IText siteText = site.AddText(250,100,45);
// Replace string1 with some text.
siteText.AddContent(string1);
// Color the Background of the Text element.
siteText.Background = new Background(Brushes.LightSlateGray);
// The Text element will only be half the width of the Site element.
siteText.Width = new RelativeWidth(50);

// Add an Image element to the Site element. The Image element
// will be placed 200 pixels to the left and 100 pixels down
// and rotated 45 degrees counter-clockwise.
Infragistics.Documents.Reports.Report.IImage siteImage =   site.AddImage(new Image(@"C:WindowsCoffee Bean.bmp"), 200, 400, -45);
```