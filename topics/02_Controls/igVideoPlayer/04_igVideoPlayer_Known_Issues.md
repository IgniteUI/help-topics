<!--
|metadata|
{
    "fileName": "igvideoplayer-known-issues",
    "controlName": "igVideoPlayer",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igVideoPlayer)

## Known Issues and Limitations

The following list contains known issues and limitations that exist either because of incomplete browser support or jQuery bugs:

-   In Microsoft® Internet Explorer™ 9
    -   The video’s sound is played for a second when video was first muted while it is paused and then it is played again.
    -   The poster image is not shown in Internet Explorer 9. It is shown only if the video source is not loaded by the video tag. The browser shows the first video frame as poster instead.
    -   Dragging the volume slider’s handle doesn’t work smoothly when using jQuery UI version 1.8.5 or earlier. This issue is not observable with versions 1.8.6 or later.
-   In Google® Chrome™
    -   When the user switches from normal screen to full screen or vice versa, the custom browser controls shrink and expand which looks like a flicker effect. This is due to browser rendering issues specific only for Chrome.
-   In Opera™ 11.10 or lower
    -   The buffered progress doesn’t update in Opera 11.10 or lower.
-   In Opera
    -   Calling the supports_video method will always returns false even if the browser supports video.
-   With jQuery 1.4.2 or lower
    -   Specifying width/height with strings like ‘400’ doesn’t work prior jQuery version 1.4.3. You should either use numbers like 400 or strings with ‘px’ inside like ‘400px’.
-   Control Layout
    -   When the control is placed in a table container the custom Infragistics controls are affected by the table’s default properties. In order to fix this issue you should put “`border-spacing: 0;`” on its parent

## Related Links
- [igVideoPlayer Overview](igVideoPlayer-Overview.html)

 

 


