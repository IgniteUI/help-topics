<!--
|metadata|
{
    "fileName": "documentengine-section-element",
    "controlName": "Infragistics Document Library",
    "tags": ["Layouts","Reporting"]
}
|metadata|
-->

# Section Element

The Section element is the only layout element that you can add to the Report element. This makes the Section element unique in several ways:

- The Section element can contain every layout element (except another Section element). You can add individual pages to a report through the Section element

- The Section element can contain Stationery and Decoration elements to use as watermarks and stamps. No other layout element can contain these two elements.

- Through the Section element, you can add page numbering to your report.

- These unique features of the Section element allow you to organize your report on a high level as well as apply several necessary settings to the report as a whole.

The following code will define a [Report](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Report.html "Link to the Web API Reference Guide to the Report member.") and add a single [ISection](Infragistics.Web.Mvc.Documents.Reports~Infragistics.Documents.Reports.Report.Section.ISection.html "Link to the Web API Reference Guide to the ISection interface.") to it. The Section will include headers, footers, stationery, and decorations.

1.  **Define the Report and Section.**

	**In C#:**
	
	```csharp
	using Infragistics.Documents.Reports.Report;
	.
	.
	.
	Infragistics.Documents.Reports.Report.Report report = new Report();
	
	// Create the main Section and add 50 pixels of padding on each edge.
	Infragistics.Documents.Reports.Report.Section.ISection section1 = 
	  report.AddSection();
	section1.PagePaddings.Left = 50;
	section1.PagePaddings.Right = 50;
	```

2.  **Add a Header element to the Section.**
	
	**In C#:**
	
	```csharp
	Infragistics.Documents.Reports.Report.Section.ISectionHeader sectionHeader =   section1.AddHeader();
	sectionHeader.Repeat = true;
	sectionHeader.Height = 50;
	
	Infragistics.Documents.Reports.Report.Text.IText sectionHeaderText =   sectionHeader.AddText(0, 0);
	sectionHeaderText.Paddings.All = 10;
	sectionHeaderText.Alignment = 
	  new TextAlignment(Alignment.Left, Alignment.Middle);
	sectionHeaderText.Height = new RelativeHeight(100);
	sectionHeaderText.AddContent("Section Header");
	```

3.  **Add a Stationery element to the Section.**

	**In C#:**
	
	```csharp
	// Add a stationery element to the report.
	// This element will read "DRAFT" in large
	// letters at an angle beneath the content
	// of the report.
	Infragistics.Documents.Reports.Report.Section.IStationery stationery =   section1.AddStationery();
	stationery.Repeat = true;
	Infragistics.Documents.Reports.Report.Text.IText stationeryText =   stationery.AddText(200, 400, -45);
	stationeryText.Style = new Style(new Font("Verdana", 72), Brushes.Silver);
	stationeryText.AddContent("DRAFT");
	```

4.  **Add a Decoration element to the Section.**

	**In C#:**
	
	```csharp
	// Add a decoration element to the report.
	// This element will serve as a stamp that
	// will say "REJECTED" in large letters
	// over the content of the report.
	Infragistics.Documents.Reports.Report.Section.IDecoration decoration =   section1.AddDecoration();
	decoration.MasterRange = MasterRange.All;
	decoration.Rear = false;
	
	Infragistics.Documents.Reports.Report.Text.IText decorationText =   decoration.AddText(350, 650, -15);
	decorationText.Style = new Style(new Font("Verdana", 40), Brushes.Red);
	decorationText.Width = new RelativeWidth(35);
	decorationText.Borders = 
	  new Borders(new Pen(Colors.Red, 3, DashStyle.Solid), 10);
	decorationText.AddContent("REJECTED");
	```

5.  **Add a Footer element to the Section.**

	**In C#:**
	
	```csharp
	Infragistics.Documents.Reports.Report.Section.ISectionFooter sectionFooter =   section1.AddFooter();
	sectionFooter.Repeat = true;
	sectionFooter.Height = 50;
	
	Infragistics.Documents.Reports.Report.Text.IText sectionFooterText =   sectionFooter.AddText(0, 0);
	sectionFooterText.Paddings.All = 10;
	sectionFooterText.Alignment = 
	  new TextAlignment(Alignment.Center, Alignment.Middle);
	sectionFooterText.Height = new RelativeHeight(100);
	sectionFooterText.Background = new Background(Brushes.Gainsboro);
	sectionFooterText.AddContent("Copyright © 1996 - 2007 Infragistics, Inc." +
	  " All rights reserved.");
	```