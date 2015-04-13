<!--
|metadata|
{
    "fileName": "igupload-known-issues",
    "controlName": "igUpload",
    "tags": ["Known Issues"]
}
|metadata|
-->

# Known Issues and Limitations (igUpload)

## igUpload Known Issues
When using the `igUpload` control be aware of the following limitations of the control or are exposed from browsers limitations:

1.  The max uploaded size for a file is 2 GB. This is browser limitation. Some browsers like newer versions of Opera allow 4GB files.
2.  It’s recommended when you set the option [**maxSimultaneousFilesUploads**](%%jQueryApiUrl%%/ui.igUpload#options), its value must be the maximum value as dictated by the browser. When you are uploading more than one file at a time you are making requests equal to the count of uploaded files. For IE6 it is recommended this option to be 1, for other browsers it is recommended to be 1 or 2. For instance Mozilla FireFox 3.6+ could handle a maximum value of 3.
3.  The `igUpload` control doesn’t support keyboard navigation, except during tabbed navigation, then the control will gain focus on the page. When using the TAB key, you can navigate the control and its elements.
4.  When you want to upload files and the browser displays a pop-window to select items from your local drives, you are able to select only one file at a time.
5.  The jQuery Upload control, including the MVC wrapper, don’t have server events. You can only point the handler and the folder where it uploads all the files, but you cannot handle and delete or move the files when the upload is finished. However you do have a workaround available in the context of ASP.NET™ MVC: in the Global.asax file you can attach manually to the server-side events to perform necessary logic to accompany the upload.
	 >**Note:** This approach is not meant to be a prescription for a best practice, but a work around to the limitation. Using the global events will fire those events for each page in the application, therefore you must make sure the code only executes in the context of the pages that are doing an upload.

The following sample demonstrates how to attach a handler in the Global.asax file and delete the uploaded file:

**In Global.asax:**

```
using Infragistics.Web.Mvc.Models;

protected void Application_Start()
{
        UploadProgressManager upm = UploadProgressManager.Instance;
        upm.AddFinishingUploadEventHandler("serverID1", this.OnFileFinishing);
}

protected void OnFileFinishing(object sender, UploadFinishingEventArgs e)
{
        string filePath = String.Format("{0}{1}", e.FolderPath, e.TemporaryFileName);
        if (File.Exists(filePath))
        {       
                try
                {
                        File.Delete(filePath);
                }
                catch (Exception ex)
                {
                }
        }
}
```

>**Note:** For more information about the use classes and events you can follow the [Using HTTP Handler and Module](igUpload-Using-HTTP-Handler-and-Modules.html) topic and go through the API help.

## Dependencies
The `igUpload` control depends on the following separate Ignite UI™ widgets – `igButton` `igBrowseButton`, `igProgressBar` and the ajaxQueue plugin. These widgets are included with the `igUpload` control so you have them available by default.

Also, the widget uses strings defined from an external JavaScript file ig.ui.fileupload-en.js. Other language locales may be added by creating other similar files with the proper two letter language suffix.

## Related Links
- [Using HTTP Handler and Module](igUpload-Using-HTTP-Handler-and-Modules.html)

- [igUpload Overview](igUpload-Overview.html)

 

 


