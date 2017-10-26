<!--
|metadata|
{
    "fileName": "shapechart-getting-started-with-shapechart",
    "controlName": "igShapeChart",
    "tags": ["API", "ShapeChart", "GettingStarted"]
}
|metadata|
-->

# Getting Started (igShapeChart)

### Purpose

This topic explains using a code example how to add the igShapeChart control to your application.

### In this topic

This topic contains the following sections:

- [Introduction](#Introduction)
- [Preview](#Preview)
- [Overview](#Overview)
- [Steps](#Steps)
- [Related Content](#Related)

<a id="Introduction" />
### Introduction

The following procedure demonstrates adding the igShapeChart to your applications.

<a id="Preview" />
### Preview

The following is a screenshot of the igShapeChart:

![](images/shapechart_getting_started.png)

<a id="Overview" />
### Overview

1. Create a target element for storing the igShapeChart control.
2. Add a data source.
3. Instantiate the igShapeChart and bind the data source.
4. Verify the result.

<a id="Steps" />
### Steps

The following procedure takes you through the steps necessary for adding the igShapeChart to a page.

**Create a target element for storing the igShapeChart**

Create a <div> element within the HTML body on which to instantiate the igShapeChart control.

**In HTML:**
```html
<body>
    <div id="shapeChart"></div>
</body>
```

**Add a data source**

In order to create an igShapeChart, you must first have data to bind it to. The following code snippet demonstrates how to create a simple data source.

**In HTML:**
```html
<script>
    var data = [
    { "X": 10, "Y": 10 },
    { "X": 40, "Y": 10 },
    { "X": 10, "Y": 40 },
    { "X": 40, "Y": 40 }];
</script>
```

**Instantiate the igShapeChart and bind the data source**

Use the selector of the target <div> element defined in step 1 to instantiate the igShapeChart control. You can then set the data property to the data source created in step 2. The following code shows this, along with setting the width, height, and x and y axis minimum and maximum values based on the data source.

**In HTML:**
```html
<script>
    $(function () {
        $("#shapeChart").igShapeChart({                
            dataSource: data,
            width: "600px",
            height: "600px",
            xAxisMinimumValue: 0,
            yAxisMinimumValue: 0,
            xAxisMaximumValue: 50,
            yAxisMaximumValue: 50,
        });
    });
</script>
```

**Verify the result**

Build and run your project to verify the result. If you have implemented the above steps correctly, the displayed igShapeChart should look like the one in the Preview section above.

### Related Content

- [Binding to Shape File Data](shapechart-binding-shapefile-data.html)
- [Binding to Break Even Data](shapechart-binding-break-even-data.html)