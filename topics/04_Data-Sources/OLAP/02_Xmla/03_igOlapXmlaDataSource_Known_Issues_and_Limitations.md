<!--
|metadata|
{
    "fileName": "igolapxmladatasource-known-issues-and-limitations",
    "controlName": "igOlapXmlaDataSource",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igOlapXmlaDataSource)

## Related Content
### Overview

The following table summarizes the known issues and limitations of the `igOlapXmlaDataSource`™ component for the Ignite UI™ %%ProductVersionShort%% release. Detailed explanations of some of the issues and the existing workarounds are provided for some of the issues after the summary table.

Legend: |  
--------|-------
![](../../../images/images/positive.png) | Workaround available
![](../../../images/images/negative.png) | No known workaround
![](../../../images/images/plannedFix.png) | Fix planned




Issue | Description | Status
---|---|---
Android browsers not supported | The `igOlapXmlaDataSource` component is not supported on browsers for the Android™ operating system. | ![](../../../images/images/plannedFix.png)
[Authenticated cross-domain data access not working with the Mozilla Firefox browser](#cross-domain-firefox) | When using the `igOlapXmlaDataSource` component with authenticated cross-domain access in the Mozilla® Firefox® browser, additional configuration of the [Internet Information Service](http://technet.microsoft.com/en-us/library/hh831725) (IIS) is necessary.| ![](../../../images/images/positive.png)
[Authenticated data access not working with Internet Explorer 8 and 9 for non-trusted domains](#authenticated-access-ie) | The `igOlapXmlaDataSource` component cannot retrieve multi-dimensional (OLAP) data on non-trusted domains with the Internet Explorer® browser, versions 8 and 9. | ![](../../../images/images/positive.png)
[Authentication popup not displayed in the Chrome browser for cross-domain requests](#cross-domain-chrome) | In the Chrome™ browser, versions 13 or higher, the authentication popup dialog is not displayed by default for cross-domain requests. | ![](../../../images/images/positive.png)



### <a id="cross-domain-firefox"></a> Authenticated cross-domain data access not working with the Mozilla Firefox browser

When using the `igOlapXmlaDataSource` component with authenticated cross-domain access in the Mozilla Firefox browser, the authentication process does not work due to a bug in the browser (the pre-flight request is registered as un-authenticated). A workaround exists, involving some additional configuration of [IIS](http://technet.microsoft.com/en-us/library/hh831725).

>**Workaround: ** Register a custom-managed module in IIS to capture the Firefox’s `OPTIONS` verb and complete the response with an authorization header. For details, refer to the [Configuring Authenticated Access for the Mozilla Firefox Browser (igOlapXmlaDataSource)](igOlapXmlaDataSource-Configuring-Authenticated-Access-for-Firefox.html) topic.

### <a id="authenticated-access-ie"></a> Authenticated data access not working with Internet Explorer 8 and 9 for non-trusted domains

The `igOlapXmlaDataSource` component cannot retrieve multi-dimensional (OLAP) data on non-trusted domains with the Internet Explorer browser, versions 8 and 9. If the domain, on which the `msmdpump.dll` HTTP data provider for your SQL Server Analysis Services server is hosted, is not in the trusted domains list of the browser, the browser will not be able to access the server data.

> **Workaround :**The solution can be either of the following:
> -   Users having these versions of the browser must have the data provider domain added to the trusted sites list of their browsers.
> -   Host the data provider on a domain trusted by the user’s browser.

### <a id="cross-domain-chrome"></a> Authentication popup not displayed in the Chrome browser for cross-domain requests

In the Chrome browser, versions 13 or higher, the authentication popup dialog is not displayed by default for cross-domain requests. This behavior is prescribed by the browser’s default security policy. (Displaying a credentials popup dialog under such conditions is considered as security risk by the browser’s manufacturer.)

> **Workaround:**
> The solution can be either of the following:
> -   Host both your website and the HTTP OLAP data provider (msmdpump.dll) on the same domain
> -   Start the Chrome browser by setting the -`-allow-cross-origin-auth-prompt` flag. (If the Chrome browser is started with the `--allow-cross-origin-auth-prompt` flag, the popup is displayed for cross-domain requests, too.)



## Related Content
### Topics

The following topics provide additional information related to this topic.

- [igOlapXmlaDataSource](igOlapXmlaDataSource.html): This is a group of topics explaining the  `igOlapXmlaDataSource` component and its use.





 

 


