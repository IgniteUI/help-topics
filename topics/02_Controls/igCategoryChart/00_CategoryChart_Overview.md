### About {CategoryChartName}

The igCategoryChart is a lightweight, highly performant chart. This chart can be easily configured to display category data using an extremely simple and intuitive API. All you need to do is bind your data (a collection or a collection of collections) and the chart takes care of everything else.

The following screenshot demonstrates the category chart displaying a column chart.

![](images/categorychart_overview_01.png)

By using a smart Data Adapter, the data is analyzed and the appropriate visualization is rendered. For example, if the `chartType` is set to `Auto`, the control can determine that if it is provided a small data set then a column chart should be plotted, while a larger data set will draw a line chart.

However, you can also explicitly specify the chart type by setting the `chartType` to:
    
- Line
- Area
- Column
- Point
- Spline
- SplineArea
- StepArea
- StepLine
- Waterfall

Another example of the intuitive behavior of the Category Chart control is that you do not need to explicitly set the labels. The Category Chart will use the first appropriate string property that it finds within the data you provided and will use that for the labels.

Built to be easily configurable, it uses the Data Chart control as its engine, which means that it benefits from the high performing and powerful Data Chart. You can also avail of the  features of the data chart control if you want to avail of them. For more information, refer to the [Extending the Category Chart](categorychart-extending-category-chart.html) topic.

*Related topics:* 

- [Walkthrough](categorychart-walkthrough.html)

- [Binding to Data](categorychart-binding-to-data.html)