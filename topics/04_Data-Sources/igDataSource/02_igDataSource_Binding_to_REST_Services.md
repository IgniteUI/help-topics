<!--
|metadata|
{
    "fileName": "igdatasource-binding-to-rest-services",
    "controlName": "igDataSource",
    "tags": ["Data Binding"]
}
|metadata|
-->

# Binding igDataSource to REST Services

## Overview
This document demonstrates how to bind REST services to the %%ProductName%%™ data source, or `igDataSource`, control. To show the true flexibility of the data source control, the included sample does not use the %%ProductName%% grid, or `igGrid`, control to render data to the user. Instead you learn how to handle rendering manually directly from the data source.

>**Note:** Using a manual rendering approach implies that you may use the `igDataSource` control to build your own data bound controls

## Example
To begin, consider a how you may approach building a stock quote reporting application. First, you must connect to a Stock Quote service, which is hosted on the following URLs in the application:

 

`/Services/StockQuoteService.svc/GetStockQuoteGET?symbol=MSFT`

 

The service would return the following XML response, given in Listing 1, when it is queried with the MSFT symbol.

###Listing 1: Sample service response

**In XML:**

```xml
<StockQuotes>
  <Stock>
    <Symbol>MSFT</Symbol>
    <Last>25.32</Last>
    <Date>5/12/2011</Date>
    <Time>4:00pm</Time>
    <Change>0.00</Change>
    <Open>N/A</Open>
    <High>N/A</High>
    <Low>N/A</Low>
    <Volume>41755</Volume>
    <MktCap>213.5B</MktCap>
    <PreviousClose>25.32</PreviousClose>
    <PercentageChange>0.00%</PercentageChange>
    <AnnRange>22.73 - 29.73</AnnRange>
    <Earns>2.517</Earns>
    <P-E>10.06</P-E>
    <Name>Microsoft Corpora</Name>
  </Stock>
</StockQuotes>
```

## Configuring the Data Source
In order to configure the data source to communicate to the service, you must provide the data source control a data schema and URL of the service as shown in Listing 2.

###Listing 2: Connecting the data source to a REST service

**In Javascript:**

```js
var url = "/SamplesBrowser/Services/StockQuoteService.svc/GetStockQuoteGET?symbol=MSFT";

var quoteSchema = new $.ig.DataSchema("xml", { fields: [
      { name: "Name", xpath: "Name" },
      { name: "Symbol", xpath: "Symbol" },
      { name: "Last", xpath: "Last" },
      { name: "Date", xpath: "Date" },
      { name: "Time", xpath: "Time" },
      { name: "Change", xpath: "Change" },
      { name: "Open", xpath: "Open" },
      { name: "High", xpath: "High" },
      { name: "Low", xpath: "Low" },
      { name: "Volume", xpath: "Volume" },
      { name: "MktCap", xpath: "MktCap" },
      { name: "PreviousClose", xpath: "PreviousClose" },
      { name: "PercentageChange", xpath: "PercentageChange" },
      { name: "AnnRange", xpath: "AnnRange" },
      { name: "Earns", xpath: "Earns" },
      { name: "PE", xpath: "P-E"}],
    searchField: "//StockQuotes/Stock"
});
ds = new $.ig.DataSource({ callback: render, dataSource: url, schema: quoteSchema }).dataBind();
```

Defining the schema is required in order to specify which parts from the response data are being bound in the data source.

>**Note:** If the service just returns JSON data, then the only required part of the schema is the “name” property in each field. In other words, the “xpath” property is only necessary for XML data.

>**Note:** Data schemas are implied for JSON results and are only necessary for XML data. Further, you don’t have to specify that the service returns XML. The Data Source automatically detects this.

## Rendering the Result
Once the data is processed by the data source, then the data is ready to render to the user. The way to achieve rendering is to provide a callback pointer in the `dataSource` initialization code. As biding to services is remote binding, the response is not immediately available when the `dataBind()` method is called. Therefore, the control points to a callback function which is executed by the data source whenever the response is available and parsed. Listing 3 demonstrates how to assign a implement function that uses jQuery client templates to render data to the user.

###Listing 3: Callback function used by data source control

**In Javascript:**

```js
var render = function (success, error) {
   if (success) {
      $("#quoteContainer").empty();
      $("#quoteTemplate").tmpl(ds.dataView()).appendTo("#quoteContainer");
   } else {
      alert(error);
   }
};
```

>**Note:** The callback function must be declared before supplying it to the data source initialization.

Once the callback function is called, the `dataView` is rendered in a jQuery Template.

 

##Related Topics

-   [igDataSource Overview](igDataSource-igDataSource-Overview.html)
-   [Performing Data Transformations Using DataSchema (igDataSource)](igDataSource-Using-DataSchema.html)

 

 


