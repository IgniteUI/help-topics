g<!--
|metadata|
{
    "fileName": "documentengine-known-issues",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Known Issues and Limitations (Infragistics Document Engine)

## Known Issues and Limitations Summary
The following table summarizes the known issues and limitations for the Infragistics Document Engine component.

**Legend:**

![](../../../../images/images/positive.png)  – Workaround available

![](../../../../images/images/negative.png)  – No known workaround

![](../../../../images/images/plannedFix.png)  – No known workaround, fix planned

## Infragistics Document Engine
Issue | Description | Status
---|---|---
Namespace conflict | Using the NetAdvantage® for ASP.NET and Ignite UI™ documents’ assemblies together causes namespace conflict exceptions. | ![](../../../../images/images/positive.png)



## Known Issues and Limitations Details
Using the Infragistics ASP.NET and Ignite UI documents’ assemblies together causes namespace conflict exceptions.

### Workaround
Reference either the documents assemblies from Infragistics ASP.NET or the documents assemblies from Ignite UI in your application. The documents’ libraries within these assemblies are the same and can be used to replace one another.



 

 


