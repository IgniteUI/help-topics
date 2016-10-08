<!--
|metadata|
{
    "fileName": "categorychart-transition-in-animations",
    "controlName": "igCategoryChart",
    "tags": ["API", "CategoryChart", "Axes"]
}
|metadata|
-->

# Transition In Animations

This feature allows you to animate the series as it loads a new data source. The available animation differs depending on the type of series involved. For example, the column series animates by rising from the x-axis, a line series animates by drawing from the y-axis.
resizes allowing for the title and subtitle information.

### In this topic

- [Overview](#overview)
- [Supported Transition Types](#supportedtransitiontypes)
- [Supported Transition Speed Types](#supportedtransitionspeedtypes)
- [Supported Easing Function Types](#supportedeasingfunctiontypes)
- [Configuring the Transition-In Animations](#configuringthetransitioninanimations)
- [Related Topics](#relatedtopics)

### <a id="overview"/>Overview
By default, animated transitions are disabled and you can enable transition-in animations by setting the isTransitionInEnabled option to “True”.

Animated transitions can be configured in terms of transition type, speed of the individual data points relative to each other, and the easing transition (managed by an easing function).

## <a id="supportedtransitiontypes"/>Supported transition types

Many types of animated transitions are supported based on the nature of the movement and its direction:
* FromZero – Series transitions in from the reference value of the value axis.
* Accordion-type transitions: 
  * From side: 
       * AccordionFromLeft – Series accordions in from the left.
       * AccordionFromRight – Series accordions in from the right.
       * AccordionFromTop – Series accordions in from the top.
       * AccordionFromBottom – Series accordions in from the bottom.
  * From an axis: 
       * AccordionFromCategoryAxisMinimum – Series accordions in from the category axis minimum.
       * AccordionFromCategoryAxisMaximum – Series accordions in from the category axis maximum.
       * AccordionFromValueAxisMaximum – Series accordions in from the value axis maximum.
       * AccordionFromValueAxisMinimum – Series accordions in from the value axis minimum.

* Expand – Series expands from the value midpoints.
* Sweep-type transitions: 
   * From side: 
       * SweepFromLeft – Series sweeps in from the left
       * SweepFromRight – Series sweeps in from the right
       * SweepFromTop – Series sweeps in from the top.
       * SweepFromBottom – Series sweeps in from the bottom.
       * SweepFromCenter – Series sweeps in from the center.
   * From an axis: 
       * SweepFromCategoryAxisMaximum – Series sweeps in from the category axis maximum.
       * SweepFromCategoryAxisMinimum – Series sweeps in from the category axis minimum.
       * SweepFromValueAxisMaximum – Series sweeps in from the value axis maximum.
       * SweepFromValueAxisMinimum – Series sweeps in from the value axis minimum.

## <a id="supportedtransitionspeedtypes"/>Supported transition speed types
The transition’s speed type determines the speed of the individual items of the current series’s transition relative to each other as the animated transition is playing. The following are the different speed types:
* Auto – Automatically selects a speed type.
* IndexScaled – Data points arrive later if their index is further from the axis origin.
* Normal – All speeds are normal, data points arrive at the same time.
* Random – Data points arrive at random times.
* ValueScaled - Data points arrive later if their value is further from the starting point.

## <a id="supportedeasingfunctiontypes"/>Supported easing function types
The easing function determines what way the animation initially eases in. Apply any easing function. It is set to CubicEase by default.

## <a id="configuringthetransitioninanimations"/>Configuring the Transition-In Animations
The transition type is configured by setting the transitionInMode option to the desired transition name. Automatic selection of the transition type based on the series type is possible, too, by setting the property to “Auto” (default).

The following example demonstrates how to enable transition in animations and have the column series accordion in from the right.

*In HTML:*

```html
$(function () {
   $("#chart").igCategoryChart({
      dataSource: data,
      chartType: "auto",
      isTransitionInEnabled: true,
      transitionInDuration: 500,
      transitionInEasingFunction:"cubic"
    });
});
```

## <a id="relatedtopics"/>Related Topics:

- [Walkthrough](categorychart-walkthrough.html)

- [Binding to Data](categorychart-binding-to-data.html)