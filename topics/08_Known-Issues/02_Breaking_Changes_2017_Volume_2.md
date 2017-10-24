<!--
|metadata|
{
    "fileName": "breaking-changes-2017-volume-2",
    "controlName": "",
    "tags": ["Breaking Changes"]
}
|metadata|
-->

# Breaking Changes 2017 Volume 2

The following topic summarizes the breaking changes of the 2017 Volume 2 release.

## igDataChart

- Changed the default value of the `windowResponse` option from deferred to immediate.  This means that panning and zooming actions will happen immediately as the user moves the pointer position during these actions.  The previous deferred behavior would wait until the user finished the movement before refreshing the view.

## Various Data Visualization controls

Some optional functionality was modularized and their files were reorganized like below:

- Removed

  infragistics.ui.barcode.js  
  infragistics.radialmenu_core.js  
  infragistics.chart_sparkline.js  
  infragistics.dv.simple.core.js
 
- Added

  infragistics.ui.qrcodebarcode.js  
  infragistics.barcode_core.js  
  infragistics.radialmenu.js  
  infragistics.olap.js  
  infragistics.sparkline.js  
  infragistics.dv_interactivity.js  
  infragistics.datachart_interactivity.js  
  infragistics.dv_visualdata.js  
  infragistics.datachart_visualdata.js