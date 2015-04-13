<!--
|metadata|
{
    "fileName": "documentengine-container-and-condition",
    "controlName": "Infragistics Document Library",
    "tags": ["Layouts","Reporting"]
}
|metadata|
-->

# Container and Condition

The Container element is an extremely important and unique element that is designed for two specific purposes:

-   The Container element can inject report content through XML.
-   The Container element, when used with the Condition element, can conditionally display content based on whether or not all the content fits on the page.

## Injecting XML
The Container element allows you to inject report content using XML. You can output report content to an XML file by calling the [Save](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report~Save.html "Link to the Web API Reference Guide to the Save member.") method of the [Report](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report.html "Link to the Web API Reference Guide to the Report member.") object. Once you have your XML file, you can use an [IContainer](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IContainer.html "Link to the Web API Reference Guide to the IContainer interface.") interface's [Load](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.IContainer~Load.html "Link to the Web API Reference Guide to the Load member.") method to load the XML into the container; the content will look no different whether you create it with the document object model (DOM) or load it from an XML file. If you wanted to load report content from an XML file called Report.xml, you could use code similar to the following.

**In Visual Basic:**

```vb
' Load the content of the XML file directly into the container.
container.Load((Application.StartupPath + "..Report.xml"))
```

**In C#:**

```csharp
// Load the content of the XML file directly into the container.
container.Load(Application.StartupPath + @"..Report.xml");
```

## Conditionally Displaying Content
You can add Text elements and most other [layout elements](DocumentEngine-Report-Layout.html "Explains the layout elements available in the document engine.") to the Container element. This feature alone is not what makes the Container element unique; but, when used in conjunction with a Condition element, you can determine beforehand how to handle the content if it doesn't all fit on one page.

The Condition element's constructer accepts two parameters:

-   the name of the container to apply the condition to
-   a Boolean identifying what the Document Engine should do if all the content doesn't fit on one page

A typical scenario would be to create a Container element and fill it with content. Once the Container element is created, create a Condition element and pass in the name of the container. There will, in fact, be two conditions that you'll be testing for (False: the content of the container doesn't fit on one page. True: the content of the container does fit on one page.) Passing False as the second parameter means that the Document Engine should show this Condition element if the Container doesn't fit. Therefore, you may wish to add some text to the Condition element stating that the text didn't fit or some other substitution content. You should then add another Condition element, which will pass True as the second parameter. Passing True as the second parameter means that the Document Engine was able to fit the content on one page, but will also show the content of this Condition element. You can either leave the Condition element empty and just show the Container element's content, or you can add your own custom content to the Condition element.

Use the following code to create a Container element and then two Condition elements based on the Container element. The first condition will appear only if the container doesn't fit on the page. The second condition will appear only if the container does fit on the page. You can change the amount of iterations the FOR loop performs to increase or decrease the amount of content in the Container element.

Use the following String for the content of the `Text` element:

> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec imperdiet mattis sem. Nunc ornare elit at justo. In quam nulla, lobortis non, commodo eu, eleifend in, elit. Nulla eleifend. Nulla convallis. Sed eleifend auctor purus. Donec velit diam, congue quis, eleifend et, pretium id, tortor. Nulla semper condimentum justo. Etiam interdum odio ut ligula. Vivamus egestas scelerisque est. Donec accumsan. In est urna, vehicula non, nonummy sed, malesuada nec, purus. Vestibulum erat. Vivamus lacus enim, rhoncus nec, ornare sed, scelerisque varius, felis. Nam eu libero vel massa lobortis accumsan. Vivamus id orci. Sed sed lacus sit amet nibh pretium sollicitudin. Morbi urna.

1.  **Create the Container element and fill it with content.**

    **In Visual Basic:**

    ```vb
    Dim container As Infragistics.Documents.Reports.Report.IContainer = _  section1.AddContainer("Container1")

    ' Define a Text element for the container.
    Dim containerText As Infragistics.Documents.Reports.Report.Text.IText = _  container.AddText()

    ' Add the same content 10 times. Lower this number to 5
    ' or less in order to fit the content on one page.
    For i As Integer = 0 To 9
            containerText.AddContent("Lorem ipsum...")
            containerText.AddLineBreak()
            containerText.AddLineBreak()
    Next i
    ```

    **In C#:**

    ```csharp
    // Define a Container element.
    Infragistics.Documents.Reports.Report.IContainer container =   section1.AddContainer("Container1");

    // Define a Text element for the container.
    Infragistics.Documents.Reports.Report.Text.IText containerText =   container.AddText();

    // Add the same content 10 times. Lower this number to 5
    // or less in order to fit the content on one page.
    for (int i = 0; i < 10; i++)
    {
            containerText.AddContent("Lorem ipsum...");
            containerText.AddLineBreak();
            containerText.AddLineBreak();
    }
    ```

2.  **Create the Condition elements.**

    **In Visual Basic:**

    ```vb
    ' If the content doesn't fit, use this condition.
    Dim condition As Infragistics.Documents.Reports.Report.ICondition =   section1.AddCondition(container, False)
    Dim conditionText As Infragistics.Documents.Reports.Report.Text.IText =   condition.AddText()
    conditionText.AddContent("Container doesn't fit")

    ' If the content fits, use this condition.
    condition = section1.AddCondition(container, True)
    ```

    **In C#:**

    ```csharp
    // If the content doesn't fit, use this condition.
    Infragistics.Documents.Reports.Report.ICondition condition =   section1.AddCondition(container, false);
    Infragistics.Documents.Reports.Report.Text.IText conditionText =   condition.AddText();
    conditionText.AddContent("Container doesn't fit");

    // If the content fits, use this condition.
    condition = section1.AddCondition(container, true);
    ```