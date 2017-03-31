<!--
|metadata|
{
    "fileName": "igvideoplayer-overview",
    "controlName": "igVideoPlayer",
    "tags": ["Getting Started"]
}
|metadata|
-->

# igVideoPlayer Overview

## About the Video Player
The %%ProductName%%™ Video Player, or `igVideoPlayer`, is an HTML 5 video player, which renders video on a web page with a robust, cross-browser user interface. The video player is built using the HTML 5 video tag and the jQuery UI framework providing users with a fast-loading, rich multimedia experience without the need for installing and maintaining browser plugins.

When using the video player, you can choose from several implementation options. The video player exposes a rich jQuery API, which can be configured without the use of any specific server backend. Also, developers using the Microsoft® ASP.NET MVC framework can leverage the video player’s server-side wrapper to configure the control with their .NET™ language of choice.

Styling the `igVideoPlayer` provides a consistent appearance across supported browsers. The video player can utilize your existing style sheets and can be styled using jQuery UI’s ThemeRoller.

**Figure 1: igVideoPlayer with player controls**

[![Running Sample](images/VideoPlayer_Overview_01.png)](%%SamplesUrl%%/video-player/basic-usage)

## Features
-   Uses the HTML 5 video tag to render video without the need for browser plugins
-   Built-in fallback for non-HTML 5 browsers including customizable unsupported message
-   Style-able playback controls, which display consistently across supported browsers
-   Full-screen support with options and animations
-   Advertisement support including video ads and banners ads
-   Bookmark support including Table of Contents
-   JavaScript Playback API
-   Keyboard Shortcuts
-   Display Related Videos

## Adding igVideoPlayer to a Web Page
The following steps demonstrate how to create a basic implementation of the video player on a web page using either jQuery client code or ASP.NET MVC server code.

>**Note:** To read more about which implementation to choose, see [%%ProductName%% Overview](NetAdvantage-for-jQuery-Overview.html).

**Figure 2: igVideoPlayer showing initial video player view**

[![Running Sample](images/VideoPlayer_Overview_02.png)](%%SamplesUrl%%/video-player/basic-usage)

1.  To get started, include the required and localized resources for your application. Details on which resources to include can be found in the [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html) help topic.
2.  On your HTML page or ASP.NET MVC View, reference the required JavaScript files, CSS files, and ASP.NET MVC assemblies.

	**Listing 1: CSS and JavaScript references for igVideoPlayer**
	
	**In HTML:**

	```html
	<link type="text/css" href="/css/themes/infragistics/infragistics.theme.css" rel="stylesheet" />    
	<link type="text/css" href="/css/structure/infragistics.css" rel="stylesheet" />
	<script src="scripts/jquery-1.4.4.js" type="text/javascript"></script>    
	<script src="scripts/jquery-ui.js" type="text/javascript"></script>
    <script type="text/javascript" src="/Scripts/Samples/infragistics.core.js"></script>    
	<script type="text/javascript" src="/Scripts/Samples/infragistics.lob.js"></script>
	```
	 
	**Listing 2: CSS and JavaScript references for igVideoPlayer in ASPX ASP.NET MVC View**
	
	**In ASPX:**

	```csharp
    <%@ Import Namespace="Infragistics.Web.Mvc" %>

    <!DOCTYPE html>
    <html>
    <head runat="server">
        <link href="<%= Url.Content("~/css/themes/infragistics/infragistics.theme.css") %>" rel="stylesheet" type="text/css" />
		<link href="<%= Url.Content("~/css/structure/infragistics.css") %>" rel="stylesheet" type="text/css" />

        <script src="<%= Url.Content("~/scripts/jquery-1.4.4.js") %>" type="text/javascript"></script>
		<script src="<%= Url.Content("~/scripts/jquery-ui.js") %>" type="text/javascript"></script>
        <script src="<%= Url.Content("~/scripts/infragistics.core.js") %>" type="text/javascript"></script>
		<script src="<%= Url.Content("~/scripts/infragistics.lob.js") %>" type="text/javascript"></script>
	```

	**Listing 3: CSS and JavaScript references for igVideoPlayer in Razor ASP.NET MVC View**
	
	**In Razor:**
	
	```csharp
	@using Infragistics.Web.Mvc;
	
	<!DOCTYPE html>
	<html>
	<head>
	    <link href="@Url.Content("~/css/themes/infragistics/infragistics.theme.css")" rel="stylesheet" type="text/css" />
	    <link href="@Url.Content("~/css/structure/infragistics.css")" rel="stylesheet" type="text/css" />
	    <script src="@Url.Content("~/scripts/jquery-1.4.4.js")" type="text/javascript"></script>
		<script src="@Url.Content("~/scripts/jquery-ui.js")" type="text/javascript"></script>
	    <script src="@Url.Content("~/scripts/infragistics.core.js")" type="text/javascript"></script>
		<script src="@Url.Content("~/scripts/infragistics.lob.js")" type="text/javascript"></script>
	```

3.  For jQuery implementations, define a div or video as the target element in HTML. This step is optional for ASP.NET MVC implementations as the MVC wrapper creates the containing element for you. 

	**Listing 4: Base DIV element defined for use with igVideoPlayer**

	**In HTML:**

	```html
	<div id=”videoPlayer” ></div>
	```

4.  Once the above setup is complete, begin to set options including ID, Height, Width, and Title. The Height and Width options are strings which can be set as integer, pixel, or percent widths. 
	>**Note:** For the ASP.NET MVC Views, the Render method must be called after all other options are set. 
	
	** Listing 5: Instantiating igVideoPlayer in jQuery**

    **In JavaScript:**

    ```js
    <script type="text/javascript">

        $(window).load(function () {
            $('#videoPlayer').igVideoPlayer({
                height: '300px',
                width: '400px',
                title: 'Video Sample'
            });
        });

    </script>
    ```

    **Listing 6: Instantiating igVideoPlayer in ASPX ASP.NET MVC View**

    **In ASPX:**

    ```csharp
    <%= Html.Infragistics().VideoPlayer()
        .ID("videoPlayer")
        .Height("300px")
        .Width("400px")
        .Title("Video Sample")
        .Render() %>
    ```

    **Listing 7: Instantiating igVideoPlayer in Razor ASP.NET MVC View**

    **In Razor:**

	```csharp
	@(
	  Html.Infragistics().VideoPlayer()
	  .ID("videoPlayer")
	  .Height("300px")
	  .Width("400px")
	  .Title("Video Sample")
	  .Render()
	)
	```

5.  For cross-browser compatibility, many sites will require hosting different formats for each video. For more information regarding HTML 5 video and browser support, please see the [igVideoPlayer Working with HTML5 Video](igVideoPlayer-Working-with-HTML5-Video.html) help topic. Set the sources option to the list of video sources.

    1.  In ASP.NET MVC, we are using the View’s associated Controller and Action Method to provide video URLs to the View.
    2.  Notice in ASP.NET MVC, the Source must be set before Render is called last.

    **
     Listing 8: Setting video sources in jQuery**

    **In JavaScript:**

    ```js
    $('#videoPlayer').igVideoPlayer({
        height: '300px',
        width: '400px',
        title: 'Sample',
        sources: ['http://www.yourdomainhere.com/videos/sample.mp4',
            'http://www.yourdomainhere.com/videos/sample.webm',
            'http://www.yourdomainhere.com/videos/sample.ogv']
    });
    ```

    **Listing 9: Setting video sources in ASPX ASP.NET MVC View**

    **In HTML:**

    ```html
    <%= Html.Infragistics().VideoPlayer()
        .ID("videoPlayer")
        .Height("300px")
        .Width("400px")
        .Sources(ViewData["videoSources"] as List<String>)
        .Render() %>
    ```

    **Listing 10: Setting video sources in Razor ASP.NET MVC View**

    **In Razor:**

	```csharp
	@(
	  Html.Infragistics().VideoPlayer()
	  .ID("videoPlayer")
	  .Height("300px")
	  .Width("400px")
	  .Title("Video Sample")     
	  .Sources(ViewData["videoSources"] as List<String)
	  .Render()
	)
	```

    **Listing 11: Setting video sources in the Controller for ASP.NET
    MVC for use in a View**

    **In C#:**

    ```csharp
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            ViewData["videoSources"] = new List<String> {
                    "http://yourdomainhere.com/videos/sample.mp4",
                    "http://yourdomainhere.com/videos/sample.webm",
                    "http://yourdomainhere.com/videos/sample.ogv" };

            return View();
        }

    }
    ```

    **In Visual Basic:**

    ```vb
    Public Class HomeController
        Inherits Controller

        Public Function Index() As ActionResult
            ViewData("videoSources") = New List(Of [String])() From { _
                "http:// yourdomainhere.com/videos/sample.mp4", _
                "http:// yourdomainhere.com/videos/sample.webm ", _
                "http:// yourdomainhere.com/videos/sample.ogv" _
            }

            Return View()
        End Function

    End Class
    ```

6.  Finally, run the web page in an HTML 5 - compliant browser and the video player will load the video selection.

## Related Links
-   [igVideoPlayer Basic Usage Samples](%%SamplesUrl%%/video-player/basic-usage)
-   [%%ProductName%% Overview](NetAdvantage-for-jQuery-Overview.html)
-   [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html)
-   [JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html)
-   [igVideoPlayer Working with HTML5 Video](igVideoPlayer-Working-with-HTML5-Video.html)

 

 


