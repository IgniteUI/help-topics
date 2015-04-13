<!--
|metadata|
{
    "fileName": "deployment-guide-using-netadvantage-for-jquery-in-browsers-that-dont-support-html5-or-css3",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Using Ignite UI in Browsers Without HTML5 or CSS3 Support



Ignite UI™ is a set of controls that takes advantage of [jQuery core](http://jquery.com), [jQuery UI](http://jqueryui.com), [HTML5](http://en.wikipedia.org/wiki/HTML5) (markup and APIs) and modern programming practices to help you create state-of-the-art web applications. While web technologies continue to quickly advance, the browser ecosystem evolves at a much slower pace than the underlying technology. This topic explains how old browsers work with Ignite UI and how you can develop your applications to respond appropriately in the context of new and old browsers.

The controls included in Ignite UI are largely made up of custom [jQuery widgets](http://en.wikipedia.org/wiki/JQuery_UI#Widgets) which have a proven operability and performance track record among new and old browsers. This far-reaching ability is possible because most controls render commonplace HTML markup that is supported in nearly all web browsers. JavaScript dependencies are loaded by the controls and only in certain cases use HTML5 JavaScript APIs. CSS3 styling is only used in limited situations. Table 1 depicts which Ignite UI controls use new HTML features and CSS3 styling.

**Table 1:** Only a select number of Ignite UI controls use HTML5 markup, HTML5 APIs or CSS3 styling.

<table class="table table-striped">
	<thead>
		<tr>
			<th>Control</th>
			<th>HTML5 Markup</th>
			<th>HTML5 APIs</th>
			<th>CSS 3 Styling/Animations</th>
			<th>Behavior and/or appearance in old browsers*</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>igGrid</td>
			<td>None</td>
			<td>None</td>
			<td>Sporadic use of animations during grid updating interactions.</td>
			<td>In older browsers, the animations do not execute and a single gradient is not visible in Internet Explorer.</td>
		</tr>
		<tr>
			<td>igVideoPlayer</td>
			<td>Video</td>
			<td>Video</td>
			<td>None</td>
			<td>The igVideoPlayer control is an extension of the native VIDEO element which supports fallback content in the body of the element.</td>
		</tr>
		<tr>
			<td>igDataChart</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igDoughnutChart</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igFunnelChart</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igPieChart</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igRadialGauge</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igSparkline</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igMap</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>None - consider using [Modernizr](http://www.modernizr.com/) detection to decide whether to render the chart.</td>
		</tr>
		<tr>
			<td>igRating</td>
			<td>Canvas</td>
			<td>Canvas</td>
			<td>None</td>
			<td>Older browsers are served a series of INPUT and SPAN elements which
behave and appear identically from the CANVAS counterpart.</td>
		</tr>
	</tbody>
</table>


>**Note:** All functionality of the grid still executes even while the animations are disabled by older browsers.



>\* In this case "old browsers" refers to any browser that does not support the VIDEO or CANVAS elements or CSS3 animations.

Any control not listed in the above table uses HTML4/XHTML compliant markup which is supported by the majority of the browser landscape.

#Using New HTML Features Made Possible with the Doctype


Since some users will not or cannot update their web browsers in step with technological advances, you must develop your applications in a way to work as desired in modern and provide graceful alternatives for older browsers.

HTML 5 markup, in many cases, is safe to use today in web applications because of the way less-capable browsers respond to mark up that they don't recognize. The streamlined HTML `doctype()` signals to capable browsers that that new markup or JavaScript APIs may be used on a page. If, however, a less-capable browser does not recognize the doctype, then the browser switches into standards mode allowing the browser to gracefully work with markup it does not understand without returning unnecessary errors on the page.

For more information about browser degradation and the HTML doctype, please read [The Truth About Doctypes](http://nimbupani.com/the-truth-about-doctypes.html), by Divya Manian.

#Compensating for Old Browser by Detecting Capabilities


In the past many web developers used user-agent detection to help determine if a browser is capable of supporting a given HTML version. User-agent detection is replete with problems, particularly in the context of modern web development as the concept of supporting HTML5 is nearly impossible to determine. While browser makers have agreed to develop each browser against the public HTML specification, each browser may have different areas of the specification implemented in the browser.

A more reliable approach to detecting whether or not your code will work as expected in a given browser is to use capability detection. You may choose to manually detect capabilities that you suspect may not exist in older browsers or you can use a JavaScript library to aid in capability detection. The following code listing demonstrates how to manually detect the presence support of the CANVAS element and JavaScript API in the browser:

**In Javascript:**

```js
if(document.canvas && document.canvas.getContext()){
    alert("Canvas is supported");
}
```

Alternatively to manually detecting browser capabilities, Modernizer is a JavaScript library which detects modern JavaScript APIs as well as a number of other useful features which help you build robust web applications. The following code listing demonstrates how to detect the CANVAS element and JavaScript API using Modernizr:

**In Javascript:**

```js
if(Modernizr.canvas){
    alert("Canvas is supported");
}
```

Read more about Modernizer on its website: [http://modernizr.com](http://modernizr.com)

#Conclusion


Most controls included in Ignite UI will operate as expect in new as well as old web browsers. In the few cases where controls use state-of-the-art HTML features, either the control compensates for the less-capable browser or you can employ manual or library-based capability detection to determine if your page will work as expected in any given browser.

#Related Items

-   [Modernizr](http://www.modernizr.com/)
-   [The Truth About Doctypes](http://nimbupani.com/the-truth-about-doctypes.html)
-   [jQuery UI Widgets](http://en.wikipedia.org/wiki/JQuery_UI#Widgets)

 

 


