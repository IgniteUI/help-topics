<!--
|metadata|
{
    "fileName": "igdialog-property-reference",
    "controlName": "igDialog",
    "tags": ["API"]
}
|metadata|
-->

# Property Reference (igDialog)

## Topic Overview

### Purpose

The topic that introduces the user to the `igDialog`™ control’s properties.

### In this topic

This topic contains the following sections:

-   [**jQuery Property Reference**](#jquery)
-   [**MVC Property Reference**](#mvc)
-   [**Related Content**](#related-content)
    -   [Topics](#topics)
    -   [Samples](#samples)



## <a id="jquery"></a> jQuery Property Reference

The following table summarizes the purpose and functionality of the `igDialog` control’s featured properties. All the properties can be changed dynamically, except for the [`mainElement`](%%jQueryApiUrl%%/ui.igDialog#options:mainElement) and the [`temporaryUrl`](%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl) value.
<table class="table table-striped">
	<tbody>
		<tr>
			<th>
				<p>Property</p>
			</th>

			<th>
				<p>Type</p>
			</th>

			<th>
				<p>Values (**Default Value**)</p>
			</th>

			<th>
				<p>Description</p>
			</th>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:mainElement" target="_blank">mainElement</a></p>
			</td>

			<td>
				<p>object</p>
			</td>

			<td>
				<p>**null**</p>

				<p>DOM object</p>
			</td>

			<td>
				<p>This property will allow the setting and getting of the jQuery HTML DIV object, which is used as main container for dialog. Note the following restrictions is necessary when you are using that property:</p>

				<ul>
					<li>The container is optional and it should not contain any children.</li>

					<li>The container should not have a parent.</li>

					<li>The container should not contain attributes, which might destroy layout or appearance of dialog.</li>

					<li>Change of this option is not supported.</li>
				</ul>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:container" target="_blank">container</a></p>
			</td>

			<td>
				<p>object</p>
			</td>

			<td>
				<p>**null**</p>

				<p>DOM object</p>

				<p>jQuery object</p>
			</td>

			<td>
				<p>Gets or sets the HTML container element for igDialog. By default, the parent form of the original target element is used and if the parent is unavailable, then an HTML body object is used. Note that if the CSS container property “position” is not set with its value as "static", then the position value is set to "relative".</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:state" target="_blank">state</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**“opened”**</p>

				<p>“closed”</p>

				<p>“minimized”</p>

				<p>“maximized”</p>
			</td>

			<td>
				<p>This property allows to you to set and get the state of the dialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:pinned" target="_blank">pinned</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the pinned state of the dialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:position" target="_blank">position</a></p>
			</td>

			<td>
				<p>object</p>
			</td>

			<td>
				<p>**null**</p>

				<p>[100, 200]</p>

				<p>{ my: “left top”,</p>

				<p>at: “left top”,</p>

				<p>offset: “100 200” }</p>
			</td>

			<td>
				<p>Gets or sets the initial position of the igDialog. That can be array of 2 numeric values which represent left/top coordinates. The other option is an object supported by jQuery <a href="http://jqueryui.com/demos/position/" target="_blank">`position()`</a> method.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:modal" target="_blank">modal</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the modal state of the igDialog. When the window is minimized or pinned, you cannot have this state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:draggable" target="_blank">draggable</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to drag the igDialog control.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:resizable" target="_blank">resizable</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to resize the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:trackFocus" target="_blank">trackFocus</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Sets or gets the ability to process the focus and blur events of the control itself as well as its child elements, located in the dialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:enableHeaderFocus" target="_blank">enableHeaderFocus</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to adjust state of header to be in focused and not-focused state. This property works only if the <a href="%%jQueryApiUrl%%/ui.igDialog#options:trackFocus" target="_blank">`trackFocus`</a> property is enabled.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:tabIndex" target="_blank">tabIndex</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**0**</p>
			</td>

			<td>
				<p>Gets or sets the value for the <a href="%%jQueryApiUrl%%/ui.igDialog#options:tabIndex" target="_blank">`tabIndex`</a> attribute applied to the igDialog main HTML element.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:zIndex" target="_blank">zIndex</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**1000**</p>
			</td>

			<td>
				<p>Gets or sets the value of the <a href="%%jQueryApiUrl%%/ui.igDialog#options:zIndex" target="_blank">`zIndex`</a> applied to the igDialog main HTML element.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl" target="_blank">temporaryUrl</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“”</p>
			</td>

			<td>
				<p>Gets or sets the temporary value for IFRAME “src” attribute. This property is used when changing the parent, if the parent of the base element is a HTML IFRAME element. This property is not obligatory, but may prevent exceptions.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:enableDblclick" target="_blank">enableDblclick</a></p>
			</td>

			<td>
				<p>string / boolean</p>
			</td>

			<td>
				<p>**“auto”**</p>
				<p>true</p>
				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the action that will happen if the igDialog header is double clicked.</p>

				<p>If the value is “false” the window will not be affected by mouse double click. However, it will react if the value is “true”. Additionally, the “auto” state implies that the igDialog will be affected by double click only if there is a maximize icon in the header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<a href="%%jQueryApiUrl%%/ui.igDialog#options:height" target="_blank">height</a>
			</td>

			<td> number </td>

			<td>
				<p>**null**</p>
				<p>100</p>
				<p>“100px”</p>
				<p>“2em”</p>
				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets initial height of the dialog in pixels for the normal state. Note that, if “%” is used than the size of the window browser object is used and it has effect only when the igDialog is opening</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:width" target="_blank">width</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**300**</p>
				<p>“300px”</p>
				<p>“2em”</p>
				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the initial width of dialog in pixels for normal state. Note that, if “%” is used than the size of the window browser object is used and it has effect only when the igDialog is opening.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:minHeight" target="_blank">minHeight</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**100**</p>

				<p>“100px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the minimal height of the dialog in the normal state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:minWidth" target="_blank">minWidth</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**150**</p>

				<p>“150px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the minimal width of the dialog in the normal state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:maxHeight" target="_blank">maxHeight</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**null**</p>

				<p>1500</p>

				<p>“1500px”</p>

				<p>“5em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the maximal height of the dialog in the normal state. Note that the value of that option takes effect only while resizing the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:maxWidth" target="_blank">maxWidth</a></p>
			</td>

			<td>
				<p>number</p>
			</td>

			<td>
				<p>**null**</p>

				<p>1500</p>

				<p>“1500px”</p>

				<p>“5em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the maximal width of the dialog in the normal state. Note: that option takes effect only while resizing the dialog by end user.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:closeOnEscape" target="_blank">closeOnEscape</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to close the dialog using the Esc key.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:showCloseButton" target="_blank">showCloseButton</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the close button in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:showMaximizeButton" target="_blank">showMaximizeButton</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the maximize button in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:showPinButton" target="_blank">showPinButton</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the pin button in the header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:pinOnMinimized" target="_blank">pinOnMinimized</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the ability to automatically pin the igDialog when the dialog was minimized.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:openAnimation" target="_blank">openAnimation</a></p>
			</td>

			<td>
				<p>string/number</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“slide”</p>

				<p>“explode”</p>

				<p>500</p>
			</td>

			<td>
				<p>Gets or sets the animation applied to the dialog when it is opened. That can be any object supported by the jQuery show() method.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:closeAnimation" target="_blank">closeAnimation</a></p>
			</td>

			<td>
				<p>string/number</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“slide”</p>

				<p>“explode”</p>

				<p>500</p>
			</td>

			<td>
				<p>Gets or sets the animation applied to the dialog when it is closed. That can be any object supported by the jQuery hide() method.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:dialogClass" target="_blank">dialogClass</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“container-class”</p>
			</td>

			<td>
				<p>Gets or sets the name of the CSS class, which is applied to the main DIV element of the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:imageClass" target="_blank">imageClass</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>**“img-class”**</p>
			</td>

			<td>
				<p>Gets or sets name of the CSS class, which is applied to the SPAN element, located on the left side of igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:headerText" target="_blank">headerText</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“HEADER”</p>
			</td>

			<td>
				<p>Gets or sets the text which appears in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:showHeader" target="_blank">showHeader</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or set the visibility of the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:showFooter" target="_blank">showFooter</a></p>
			</td>

			<td>
				<p>boolean</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the igDialog footer.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:footerText" target="_blank">footerText</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“FOOTER”</p>
			</td>

			<td>
				<p>Gets or sets text,which appears in the igDialog footer.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:closeButtonTitle" target="_blank">closeButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“X”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for close button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:minimizeButtonTitle" target="_blank">minimizeButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“MIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for minimize button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:maximizeButtonTitle" target="_blank">maximizeButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“MAX”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for maximize button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:pinButtonTitle" target="_blank">pinButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“PIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for pin button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:unpinButtonTitle" target="_blank">unpinButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“UNPIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for unpin button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="%%jQueryApiUrl%%/ui.igDialog#options:restoreButtonTitle" target="_blank">restoreButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**null**</p>

				<p>“RESTORE”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for restore button in the igDialog.</p>
			</td>
		</tr>
	</tbody>
</table>





## <a id="mvc"></a> MVC Method Reference

The following table summarizes the purpose and functionality of the `igDialog` *MVC wrapper –* Dialog. Most of the methods correspond to the jQuery properties except for [`mainElement`](%%jQueryApiUrl%%/ui.igDialog#options:mainElement) and [`temporaryUrl`](%%jQueryApiUrl%%/ui.igDialog#options:temporaryUrl), which don’t have MVC wrappers. There are additional MVC methods that don’t have corresponding igDialog properties, such as: [`ContentJquerySelector`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentJquerySelector.html), [`ContentID`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentID.html), [`ID`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ID.html), [`ContentHTML`](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogWrapper~ContentHTML.html).

<table class="table table-striped">
	<tbody>
		<tr>
			<th>
				<p>Property</p>
			</th>

			<th>
				<p>Parameter Type</p>
			</th>

			<th>
				<p>Values (**Default Value**)</p>
			</th>

			<th>
				<p>Description</p>
			</th>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentJquerySelector.html">ContentJquerySelector</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“#igDialog1”</p>
			</td>

			<td>
				<p>This property defines the selector of the igDialog widget that is rendered from the wrapper. This selector should be the same as the selector when the jQuery-only widget is created. For example, if your HTML placeholder has the id “igDialog1”, then the value of <a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentJquerySelector.html">ContentJquerySelector</a> should be “#igDialog”. Then, the Wrapper will render following code:</p>

				<p>$(“#igDialog”).igDialog();</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentID.html">ContentID</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“igDialog1”</p>
			</td>

			<td>
				<p>This property defines the selector of the igDialog widget that is rendered from the MVC wrapper. In contrast to the <a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentJquerySelector.html">ContentJquerySelector</a> property, you only need to pass the id of the HTML placeholder, without the #, and the wrapper will render it automatically. If your value in the <a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentID.html">ContentID</a> is “igDialog”, then the result will be the same as in the previous property:</p>

				<p>$(“#igDialog”).igDialog();</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ID.html">ID</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“igDialog1”</p>
			</td>

			<td>
				<p>This property defines the selector of the igDialog widget that is rendered from the MVC wrapper. It’s absolutely equivalent to the <a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogWrapper~ContentID.html">ContentID</a> property – it accepts the same format for the parameter and renders the same code.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ContentHTML.html">ContentHTML</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“&lt;div id="igDialog1”&gt; igDialog Content &lt;/div&gt;”</p>
			</td>

			<td>
				<p>This property allows you to define the HTML placeholder of the igDialog as part of the wrapper. This HTML code will then become the content of the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Container.html">Container</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“#idContainer”</p>

				<p>“.classContainer”</p>
			</td>

			<td>
				<p>Gets or sets the HTML container element for the igDialog. By default the parent form of the original target element is used and if that parent is unavailable, then the HTML body object is used. Note that if the CSS container property “position” is not set, its value is "static", then the position value is set to "relative".</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~State.html">State</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**DialogState.Opened**</p>

				<p>DialogState.Closed</p>

				<p>DialogState.Minimized</p>

				<p>DialogState.Maximized</p>
			</td>

			<td>
				<p>This property allows you to set and get the state of the dialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Pinned.html">Pinned</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the pinned state of the dialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Position.html">Position</a></p>
			</td>

			<td>
				<p>int</p>
			</td>

			<td>
				<p>Position(100, 200)</p>
			</td>

			<td>
				<p>Gets or sets the initial position of the igDialog. The left and top positions are passed as arguments.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Modal.html">Modal</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the modal state of the igDialog. When the window is minimized or pinned you cannot have this state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Draggable.html">Draggable</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to drag the igDialog control.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Resizable.html">Resizable</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to resize the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~TrackFocus.html">TrackFocus</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to process focus and blur events of child elements, located in the igDialog, in order to maintain the focused state. If that option is enabled, then the focus and blur event handlers are added to all the child elements of dialog. If dialog is modal or it can be maximized, then disabling this option is not recommended.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogWrapper~EnableHeaderFocus.html">EnableHeaderFocus</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to adjust the state of the header to be in focused or not-focused state. This property works only if the <a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~TrackFocus.html">trackFocus</a> property is enabled.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogWrapper~TabIndex.html">TabIndex</a></p>
			</td>

			<td>
				<p>int?</p>
			</td>

			<td>
				<p>**0**</p>
			</td>

			<td>
				<p>Gets or sets the value for the tabIndex attribute applied to the igDialog main HTML element.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ZIndex.html">ZIndex</a></p>
			</td>

			<td>
				<p>int?</p>
			</td>

			<td>
				<p>**1000**</p>
			</td>

			<td>
				<p>Gets or sets the value of the zIndex applied to the igDialog main HTML element.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~EnableDblclick.html">EnableDblclick</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the action that will occur if the igDialog header is double clicked.</p>

				<p>If the value is “false,” the window will not be affected by mouse double click. Contrastingly, it will react if the value is “true”. The “auto” state means that the igDialog will only be affected by double click if there is maximize icon in the header.</p>

				<p>“Auto” is the default state, but you cannot change it dynamically through the MVC wrapper.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Height.html">Height</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>100</p>

				<p>“100px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the initial height of the dialog in pixels for the normal state. Note that if “%” is used, then the size of the window browser object is used and it only takes effect when the igDialog is opening.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~Width.html">Width</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**300**</p>

				<p>“300px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the initial width of the dialog in pixels for the normal state. Note that if “%” is used, then the size of the window browser object is used and it only takes effect when the igDialog is opening.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MinHeight.html">MinHeight</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**100**</p>

				<p>“100px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the minimal height of the dialog in the normal state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MinWidth.html">MinWidth</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>**150**</p>

				<p>“150px”</p>

				<p>“2em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the minimal width of the dialog in the normal state.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MaxHeight.html">MaxHeight</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>1500</p>

				<p>“1500px”</p>

				<p>“5em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the maximal height of the dialog in the normal state. Note that the value of that option has effect only while resizing igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MaxWidth.html">MaxWidth</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>1500</p>

				<p>“1500px”</p>

				<p>“5em”</p>

				<p>“100%”</p>
			</td>

			<td>
				<p>Gets or sets the maximal width of the dialog in the normal state. Note: that option only takes effect while resizing dialog by end user.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~CloseOnEscape.html">CloseOnEscape</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the ability to close the dialog using the Esc key.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ShowCloseButton.html">ShowCloseButton</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the close button in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ShowMaximizeButton.html">ShowMaximizeButton</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the maximize button in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ShowPinButton.html">ShowPinButton</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the pin button in the header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~PinOnMinimized.html">PinOnMinimized</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the ability to automatically pin the igDialog when the dialog was minimized.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~OpenAnimation.html">OpenAnimation</a></p>
			</td>

			<td>
				<p>string/int</p>
			</td>

			<td>
				<p>“slide”</p>

				<p>“explode”</p>

				<p>500</p>
			</td>

			<td>
				<p>Gets or sets animation applied to dialog when it is opened. That can be any object supported by jQuery show() method.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~CloseAnimation.html">CloseAnimation</a></p>
			</td>

			<td>
				<p>string/int</p>
			</td>

			<td>
				<p>“slide”</p>

				<p>“explode”</p>

				<p>500</p>
			</td>

			<td>
				<p>Gets or sets the animation applied to the dialog when it is closed. This can be any object supported by jQuery hide() method.</p>
			</td>
		</tr>

		<tr>
			<td>
                <p>
                [DialogClass](Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~DialogClass.html)
                </p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“container-class”</p>
			</td>

			<td>
				<p>Gets or sets the name of the CSS class, which is applied to the main DIV element of the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ImageClass.html">ImageClass</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“img-class”</p>
			</td>

			<td>
				<p>Gets or sets name of CSS class, which is applied to the SPAN element, located on the left side of the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~HeaderText.html">HeaderText</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“HEADER”</p>
			</td>

			<td>
				<p>Gets or sets the text which appears in the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ShowHeader.html">ShowHeader</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>**true**</p>

				<p>false</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the igDialog header.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~ShowFooter.html">ShowFooter</a></p>
			</td>

			<td>
				<p>bool?</p>
			</td>

			<td>
				<p>true</p>

				<p>**false**</p>
			</td>

			<td>
				<p>Gets or sets the visibility of the igDialog footer.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~FooterText.html">FooterText</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“FOOTER”</p>
			</td>

			<td>
				<p>Gets or sets the text, which appears in the igDialog footer.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~CloseButtonTitle.html">CloseButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“X”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the close button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MinimizeButtonTitle.html">MinimizeButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“MIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the minimize button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~MaximizeButtonTitle.html">MaximizeButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“MAX”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the maximize button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~PinButtonTitle.html">PinButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“PIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the pin button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~UnpinButtonTitle.html">UnpinButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“UNPIN”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the unpin button in the igDialog.</p>
			</td>
		</tr>

		<tr>
			<td>
				<p><a href="Infragistics.Web.Mvc~Infragistics.Web.Mvc.DialogModel~RestoreButtonTitle.html">RestoreButtonTitle</a></p>
			</td>

			<td>
				<p>string</p>
			</td>

			<td>
				<p>“RESTORE”</p>
			</td>

			<td>
				<p>Gets or sets the tooltip for the restore button in the igDialog.</p>
			</td>
		</tr>
	</tbody>
</table>

## <a id="related-content"></a> Related Content

### <a id="topics"></a> Topics

The following topics provide additional information related to this topic:

- [Method Reference (*igDialog*)](igDialog-Method-Reference.html): The topic that introduces the user to the `igDialog` control’s methods.

- [Event Reference (*igDialog*)](igDialog-Event-Reference.html): The topic that introduces the user to the `igDialog` control’s events.

- [CSS Classes Reference (*igDialog*)](igDialog-Css-Classes-Reference.html): The topic that introduces the user to the `igDialog` control’s CSS classes.



### <a id="samples"></a> Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/dialog-window/basic-usage): This sample shows you how to configure the `igDialog` height, width and state.

- [API and Events](igdialog-event-reference.html#attaching-handlers-jquery): This sample demonstrates how to handle events in the Dialog Window control and API usage.

- [ASP.NET MVC Basic Usage](%%SamplesUrl%%/dialog-window/aspnet-mvc-helper): This example demonstrates how you can utilize the ASP.NET MVC helper for the Dialog Window.

- [Modal Dialog](%%SamplesUrl%%/dialog-window/modal-dialog): This sample shows you how to create a modal dialog.

- [Loading External Page](%%SamplesUrl%%/dialog-window/loading-external-page): This sample demonstrates how to load external content from a URL.





 

 


