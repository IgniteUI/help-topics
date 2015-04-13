<!--
|metadata|
{
    "fileName": "selectmenu-known-issues",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Known Issues and Limitations (SelectMenu (mobile))

## Known Issues and Limitations Summary
### Known issues and limitations summary chart

The following table summarizes the known issues and limitations for the `SelectMenu` (mobile) control.

**Legend:**

<table class="table">
    <tbody>
        <tr>
            <td><img src="../../images/images/positive.png" alt="" class="img-responsive"></td>
            <td>Workaround available</td>
        </tr>
        <tr>
            <td><img src="../../images/images/negative.png" alt="" class="img-responsive"></td>
            <td>No known workaround</td>
        </tr>
        <tr>
            <td><img src="../../images/images/plannedFix.png" alt="" class="img-responsive"></td>
            <td>Fix planned</td>
        </tr>
    </tbody>
</table>

### SelectMenu (mobile)

Issue | Description | Status
---|---|---
The [CloseText](Infragistics.Web.Mvc.Mobile~Infragistics.Web.Mvc.Mobile.SelectMenuModel~CloseText.html) property of mobile `SelectMenu` not applied when the menus are in custom dialog-based containers | If you set a text for the close button tooltip using the `CloseText` property of the `SelectMenu` control in dialog-based containers, your custom tooltip will not appear and the default one will be shown instead. <br> This is due to jQuery Mobile not injecting the custom close text which cannot be accessed later. | ![](../../images/images/negative.png)





 

 


