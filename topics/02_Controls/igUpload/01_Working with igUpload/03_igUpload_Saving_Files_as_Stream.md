<!--
|metadata|
{
    "fileName": "igupload-saving-files-as-stream",
    "controlName": "igUpload",
    "tags": []
}
|metadata|
-->

# Saving Files as Stream (igUpload)

## Topic Overview
### Purpose

This topic explains how to process and save upload files as either file or memory streams. A detailed procedure is provided on saving files as memory stream by individual processing of each uploaded file chunk.

### Required background

The following topics are prerequisites to understanding this topic:

- [igUpload Overview](igUpload-Overview.html): This topic explains conceptually the `igUpload` control and its features. It also demonstrates how to add the control to an HTML page.

- [Configuring igUpload](igUpload-Configuring-igUpload.html): This topic explains, with code examples, how to configure the `igUpload` control.

- [Using the HTTP Handler and Module (igUpload)](igUpload-Using-HTTP-Handler-and-Modules.html): This topic demonstrates how to configure the HTTP Module and HTTP Handler to process the server events necessary to accept the data uploaded with the `igUpload` control.

- [Using Client- Side Events(igUpload)](igUpload-Using-Client-Side-Events.html): This topic explains how to handle the client-side events raised by the `igUpload` control.



### In this topic

This topic contains the following sections:

-   [Saving Files as Stream – Conceptual Overview](#conceptual-overview)
    -   [Saving files as stream summary](#file-stream-summary)
    -   [Steps](#file-stream-steps)
-   [File Processing Overview](#file-processing-overview)
    -   [File processing summary](#file-processing-summary)
    -   [File stream processing](#file-stream-processing)
    -   [Memory stream processing](#memory-stream-processing)
-   [Saving Files as Memory Stream by Processing Each Uploaded Chunk of the File Individually – Procedure](#procedure)
    -   [Introduction](#procedure-introduction)
    -   [Prerequisites](#procedure-prerequisites)
    -   [Overview](#procedure-overview)
    -   [Steps](#procedure-steps)



## <a id="conceptual-overview"></a>Saving Files as Stream – Conceptual Overview
### <a id="file-stream-summary"></a>Saving files as stream summary

When uploading files, you typically want to process them on the server. For example, you may want to save them to a database or to compress them before saving them to a file system.

To enable the processing of the uploading files, you need to enable the `igUpload`’s MVC wrapper’s HTTP module. To enable that module, you must register it in the project’s web.config file. The exact configuration varies depending of the installed Internet Information Services (IIS) version.

To upload and process files correctly, the `igUpload` control needs some pieces of data about the files and the upload process, like the file size and the upload status and progress. To allow this data exchange, you must enable the `igUpload`’s MVC wrapper’s HTTP handler. To enable that handler, you must register it in the project’s web.config file. The exact configuration varies depending of the installed Internet Information Services (IIS) version.

The `igUpload` control can work without any application settings explicitly defined. It is a good practice however to always configure things like:

-   A folder for storing temporary files

If such folder is not configured, the files are stored in the default location which is `<project folder>/Uploads`.

-   The file size limit

The maximum allowed size for the uploading files is set through the `maxFileSizeLimit` property. The default setting is 4 Mb.

-   The file saving mode

The file saving mode specifies how file processing is done – as a file stream or memory stream. (For details, refer to [File Processing Overview](#file-processing-overview).) The file saving mode is managed by the `FileSaveType` property. The allowed values are `filestream` and `memorystream` corresponding to the respective manners of file processing. The default setting is `filestream`.

In the View, you have to configure the `igLoader` component and the `igUpload` control, as well as the client-side error handling for `igUpload`.

In the Controller, you have to implement the method which will process each individual chunk of data of the file.

### <a id="file-stream-steps"></a>Steps

Following are the general conceptual steps for saving files as stream.

1.  [Configuring the igUpload MVC wrapper’s HTTP module](#http-module)
2.  [Configuring the igUpload MVC wrapper’s HTTP handler](#http-handler)
3.  [(Optional) Configuring the igUpload MVC wrapper’s application settings](#application-settings)
4.  [Implementing the file caching functionality](#caching-functionality)
5.  [Configuring the igUpload MVC wrapper in the View](#mvc-wrapper-view)
6.  [Configuring the igUpload MVC wrapper in the Controller](#mvc-wrapper-controller)
7.  [Registering igUpload server-side events](#server-side-events)



## <a id="file-processing-overview"></a>File Processing Overview
### <a id="file-processing-summary"></a>File processing summary

The `igUpload` MVC wrapper provides the following ways to process uploaded files depending on whether files are processed on demand while uploading or after they are saved to a temporary file on the server:

-   File stream processing – the uploaded files are first saved as temporary files by the `igUpload` MVC wrapper’s HTTP module. You can process the files after the files are saved. Use this mode when you want to save the files on the server file system.
-   Memory stream processing – the uploaded files can be processed on demand either during the upload (and then saved) or after they are uploaded to memory. Use this mode when you need a finer control over the upload process (When you want, for instance, to compress the file before saving it to the disk or to save it to a database.)

### <a id="file-stream-processing"></a>File stream processing

File stream mode uploads the file to a temporary location (indicated by `fileUploadPath` application setting) and keeps it there unless you choose to process it. In order to process the uploaded file, you need to handle `UploadFinishing` event. `UploadFinishing` event has a parameter of type `FilesStream` which gives you access to the uploaded file. Using this parameter you can, for example, move the file to another location. When processing the file manually, you must set the `UploadFinishingEventArgs`.Cancel property to `true`. This way the temporary file (if exists) will be deleted by `igUpload`.)

If `UploadFinishing` event is not handled, then the temporary file is renamed to its original file overwriting any existing file with the same name and stays in the temporary folder.

### <a id="memory-stream-processing"></a>Memory stream processing

When using memory stream processing, files are uploaded to `MemoryStream` objects that you can process manually. The `igUpload` MVC wrapper component offers the following approaches to uploading to `MemoryStream` objects (based on which events you’re handling and how you process those events.):

-   (Recommended) Process each chunk individually.

    In order to be able to process file manually, you need to handle the FileUploading event. The FileUploading’s FileUploadingEventArgs parameter has a FileChunk property of type byte array. (This property store the current/last uploaded chunk of data.) FileUploading is a cancelable event so you can use it to return feedback to the MVC wrapper’s HTTP module, regardless of the file chunk having been processed or not. Whether you choose to cancel the event or not, depends on whether want to process the file chunks automatically or manually.

    -   Manual processing of the file chunks

        If you want to process the file chunks manually, you need to cancel the FileUploading event. In such cases, the `igUpload` MVC wrapper will not append the chunk into an internal MemoryStream object. This approach is covered in detail in [Saving Files as Memory Stream by Processing Each Uploaded Chunk of the File Individually – Procedure](#procedure)

    -   Automatic processing of the file chunks

If you decide not to cancel `FileUploading` event, then the file chunk is appended to a `MemoryStream` object which will be available in the `UploadFinishing` event (UploadFinishingEventArgs.FileStream).

To handle the `FileUploading` event, use the `AddFileUploadingEventHandler` method of the `UploadProgressManager` class. `UploadProgressManager` is a singleton class an instance of which can be accessed by its Instance property.

-   Processing the whole file at once.

This is achieved by handling the `UploadFinishing` event. The `UploadFinishing`’s `UploadFinishingEventArgs` parameter has a `FileStream` property which holds the uploaded file as a `MemoryStream` object. Use this property (`UploadFinishingEventArgs.FileStream`) to process the file data. This approach has the disadvantage of keeping the file data in memory until the file is fully uploaded to the server.



## <a id="procedure"></a>Saving Files as Memory Stream by Processing Each Uploaded Chunk of the File Individually – Procedure
### <a id="procedure-introduction"></a>Introduction

This example configures `igUpload` using memory stream processing by handling the `FileUploading` event and processing each file chunk individually. Uploaded chunks are appended to an ASP.NET cache buffer. When the buffer reaches a certain threshold it is written to a file on disk. This strategy allows us to optimize `igUpload` usage of RAM and thus handling more file uploads simultaneously.

This example creates a custom class in order to implement file caching functionality. `UploadUtils` is static class the purpose which is to handle currently uploading files into a `MemoryStream` dictionary in the cache. It also uses `igUpload`’s `fileUploadPath` application setting in order to write files to this directory.

Optionally, a folder for storing temporary files is created and the maximum size of the uploading files is set to 100 Mb.

### Requirements

Following are the general requirements for saving file as memory stream by processing each uploaded chunk of the file individually.

-   Microsoft® Visual Studio® 2010 or later
-   ASP.NET MVC 2 or higher
-   Infragistics Ignite UI® 13.1 or higher

### <a id="procedure-prerequisites"></a>Prerequisites

-   A C# ASP.NET MVC 3 Web Application Microsoft Visual Studio project called “`igUploadMemoryStreamExample`” based on the Internet Application template
-   A reference to `Infragistics.Web.Mvc.dll` file added to the project.
-   The following scripts added to the `<project folder>/Views/Shared/_Layout.cshtml` file
    -   `<project folder>/Scripts/jquery-1.5.1.min.js`
    -   `<project folder>/Scripts/jquery-ui-1.8.11.min.js`
-   Infragistics Ignite UI scripts included in the project and properly referenced
    -   The scripts must reside in `<project folder>`Infragistics folder.
    -   The scripts must be referenced in the head tag of the `<project folder>/Views/Shared/_Layout.cshtml` file (The file is available as part of the project.):

        **In HTML:**

        ```html
        <script src="@Url.Content("~/Scripts/jquery-1.5.1.min.js")" type="text/javascript"></script>
        <script src="@Url.Content("~/Scripts/jquery-ui-1.8.11.min.js")" type="text/javascript"></script>
        ```

-   An `<project folder>`Uploads folder where the temporary files will be uploaded
-   The route to the IGUploadStatusHandler.ashx ignored in the Global.asax file

Set the RegisterRoutes option at the beginning of the RegisterRoutes method:

**In C#:**


```csharp
routes.IgnoreRoute("IGUploadStatusHandler.ashx");
```

### <a id="procedure-overview"></a>Overview

Following is a conceptual overview of the process:

1.  [Configuring the igUpload MVC wrapper’s HTTP module](#http-module)
2.  [Configuring the igUpload MVC wrapper’s HTTP handler](#http-handler)
3.  [(Optional) Configuring the igUpload MVC wrapper’s application settings](#application-settings)
4.  [Implementing the file caching functionality](#caching-functionality)
5.  [Configuring the igUpload MVC wrapper in the View](#mvc-wrapper-view)
6.  [Configuring the igUpload MVC wrapper in the Controller](#mvc-wrapper-controller)
7.  [Registering igUpload server-side events](#server-side-events)
8.  [(Optional) Verifying the result](#verifying-the-result)

### <a id="procedure-steps"></a>Steps

The following steps demonstrate how to upload file as memory stream.

1. <a id="http-module"></a>Configure the `igUpload` MVC wrapper’s HTTP module.

	Enable the HTTP module by registering it in the project’s web.config file:
	
	-   Configuration for Internet Information Services (IIS) 6
	
	To configure IIS 6, in the <system.web> section, under the `<httpModules>` section of the web.config file, register the `igUpload` MVC wrapper’s HTTP module.
	
	**In XML:**
	
	```xml
	<system.web>
	    <httpModules>
	        <add name="IGUploadModule" type="Infragistics.Web.Mvc.UploadModule" />
	    </httpModules>
	</system.web>
	```
	
	-   Configuration for IIS 7
	
	To configure IIS 7, in the `<system.webServer>` section, under the `<modules>` section of the web.config file, register the `igUpload` MVC wrapper’s HTTP module.
	
	**In XML:**
	
	```xml
	<system.webServer>
	    <modules runAllManagedModulesForAllRequests="true">
	        <add name="IGUploadModule" type="Infragistics.Web.Mvc.UploadModule" 
	                                   preCondition="managedHandler" />
	    </modules>
	</system.webServer>
	```

2. <a id="http-handler"></a>Configure the `igUpload` MVC wrapper’s HTTP handler.

	Enable the HTTP module by registering it in the project’s web.config file:
	
	-   Configuration for IIS 6
	
	To configure IIS 6, in the `<system.web>` section, under the `<httpHandlers>` section of the web.config file, register the `igUpload` MVC wrapper’s HTTP handler.
	
	**In XML:**
	
	```xml
	<system.web>
	    <httpHandlers>
	         <add verb="GET" type="Infragistics.Web.Mvc.UploadStatusHandler" 
	                         path="IGUploadStatusHandler.ashx" />
	    </httpHandlers>
	</system.web>
	```
	
	-   Configuration for IIS 7
	
	To configure IIS 7, in the `<system.webServer>` section, under the `<handlers>` section of the web.config file, register the `igUpload` MVC wrapper’s HTTP handler.
	
	**In XML:**
	
	```xml
	<system.webServer>
	    <handlers>
	        <add name="IGUploadStatusHandler" path="IGUploadStatusHandler.ashx" verb="*"
	             type="Infragistics.Web.Mvc.UploadStatusHandler" preCondition="integratedMode" />
	   </handlers>
	</system.webServer>
	```

3. <a id="application-settings"></a>Configure `igUpload` MVC wrapper’s application settings.

	Configure the application settings.
	
	1. (Optional) Configure a temporary files folder.
	
		The following code configures a folder for storing temporary files called Uploads.
		
		**In XML:**
		
		```xml
		<appSettings>
		    <add key="fileUploadPath" value="~/Uploads" />
		</appSettings>
		```
	
	2. (Optional) Configure the file size limit.
	
		The following code sets the maximum size of the files uploading files to 100 Mb.
		
		**In XML:**
		
		```xml
		<appSettings>
		    <!--100 Mb = 2097152 bytes-->
		    <add key="maxFileSizeLimit" value="104857600" />
		</appSettings>
		```
	
	3. Configure the file saving mode.
	
		The following code sets the file saving mode to memorystream.
		
		**In XML:**
		
		```xml
		<appSettings>
		    <add key="FileSaveType" value="memorystream"/>
		</appSettings>
		```

4. <a id="caching-functionality"></a>Implement the file caching functionality.

	To implement the caching functionality:
	
	1. Configure the buffer size.
	
		**A.** Open the web.config file.
		
		**B.** Add the buffer size application setting.
		
		In this example, the uploadUtilsBufferSize application setting configures the threshold for buffering file data before writing it to disk. Use this configuration setting to implement our own buffering of the file in the ASP.NET cache. The following code configures it to 2 Mb.
		
		**In XML:**
		
		```xml
		<appSettings>
		    <!--2 Mb = 2097152 bytes-->
		    <add key="uploadUtilsBufferSize" value="2097152" />
		</appSettings>
		```
	
	2. Add the UploadUtils.cs file to the project.
	
		**A.** Right-click on the project.
		
		**B.** From the context menu, select Add and then Class…”. The Add New Item dialog opens.
		
		**C.** In the Add New Item dialog, Name field, type UploadUtils.cs.
		
		**D.** Press Add. The file is now added to the project.
	
	3. Implement the UploadUtils class.
	
		**A.** Open the UploadUtils.cs file. All the code in the steps that follow is written in that file.
		
		**B.** Make the class static.
		
		Add the static keyword to the UploadUtils class definition:
		
		**In C#:**
		
		```csharp
		public static class UploadUtils
		{
		    // Class definition here see steps 2 to 7
		}
		```
		
		**C.** Add the using clauses.
		
		The using clauses are needed by the ConfigurationManager and Path classes. In the following code the first using clause is for the ConfigurationManager class and the second is for the Path class:
		
		**In C#:**
		
		```csharp
		using System.Configuration;
		using System.IO;
		```
		
		**D.** Configure the constants.
		
		The constants required if the web.config file doesn’t contain application definitions for the uploadUtilsBufferSize and fileUploadPath settings.
		
		**In C#:**
		
		```csharp
		//4 Mb default buffer size
		private const int DEFAULT_BUFFER_SIZE = 4 * 1024 * 1024; 
		private const string DEFAULT_UPLOAD_PATH = "~/Uploads";
		```
		
		**E.** Configure the buffer size.
		
		Define the static BufferSize property. This property returns the uploadUtilsBufferSize application setting.
		
		**In C#:**
		
		```csharp
		public static int BufferSize
		{
		    get
		    {
		        int bufferSize;
		        if (Int32.TryParse(ConfigurationManager.AppSettings ["uploadUtilsBufferSize"], out bufferSize))
		        {
		            return bufferSize;
		        }
		        return DEFAULT_BUFFER_SIZE;
		    }
		}
		```
		
		**F.** Configure the upload path.Add the following code which defines the static UploadPath property. This property returns the fileUploadPath application setting.
		
		**In C#:**
		
		```csharp
		public static string UploadPath
		{
		    get
		    {
		        string path = DEFAULT_UPLOAD_PATH;
		        if (ConfigurationManager.AppSettings["fileUploadPath"] != null)
		        {
		            path = ConfigurationManager.AppSettings["fileUploadPath"];
		        }
		        if (path.StartsWith("~"))
		        {
		            path = HttpContext.Current.Server.MapPath(path);
		        }
		        if (!path.EndsWith(Path.DirectorySeparatorChar.ToString()))
		            path += Path.DirectorySeparatorChar;
		        if (!Directory.Exists(path))
		            throw new DirectoryNotFoundException(path);
		        return path;
		    }
		}
		```
		
		**G.** Configure the method for retrieving the stream from the cache.
		
		Define the GetStreamFromCache static method. This static method returns the MemoryStream by a given key. To do this it manages a `Dictionary<string, MemoryStream>` object into the ASP.NET cache. The dictionary holds the currently uploading files data. As you are going to see in the [Configure the `igUpload` MVC wrapper in the Controller](#mvc-wrapper-controller) section, that will make it possible not to keep the whole file into the cache. Instead, it will write the data to the file on disk by chunks which size is defined by the UploadUtils.BufferSize property.
		
		**In C#:**
		
		```csharp
		public static MemoryStream GetStreamFromCache(string key)
		{
		    Dictionary<string, MemoryStream> uploadingFiles = HttpContext.Current.Cache["UploadingFiles"] as Dictionary<string, MemoryStream>;
		    MemoryStream stream;
		    if (uploadingFiles == null)
		    {
		        uploadingFiles = new Dictionary<string, MemoryStream>();
		        HttpContext.Current.Cache["UploadingFiles"] = uploadingFiles;
		    }
		    if (!uploadingFiles.ContainsKey(key))
		    {
		        stream = new MemoryStream();
		        uploadingFiles.Add(key, stream);
		    }
		    else
		    {
		        stream = uploadingFiles[key];
		    }
		    return stream;
		}
		```
		
		**H.** Configure the method for removing the stream from the cache.
		
		Define the RemoveStreamFromCache static method. This method removes an item form the dictionary by a key. As you are going to see in the [Configure the `igUpload` MVC wrapper in the Controller](#mvc-wrapper-controller) section, you will use it to remove file from the currently uploading files cache.
		
		**In C#:**
		
		```csharp
		public static void RemoveStreamFromCache(string key)
		{
		    Dictionary<string, MemoryStream> uploadingFiles = HttpContext.Current.Cache["UploadingFiles"] as Dictionary<string, MemoryStream>;
		    if (uploadingFiles != null && uploadingFiles.ContainsKey(key))
		    {
		        uploadingFiles.Remove(key);
		    }
		}
		```
		
		**I.** Configure the method to write the stream to a file.
		
		Define the AppendStreamToFile static method. This static method writes a MemoryStream object to a file. The method accepts as parameters a file name and the MemoryStream value.
		
		**In C#:**
		
		```csharp
		public static void AppendStreamToFile(string fileName, MemoryStream stream)
		{
		    using (FileStream fs = new FileStream(fileName, FileMode.Append))
		    {
		        stream.WriteTo(fs);
		    }
		}
		```

5. <a id="mvc-wrapper-view"></a>Configure the `igUpload` MVC wrapper in the View.

	In the `<project folder>/ViewsHomeIndex.cshtm` file put the code to configure the View.
	
	Include the Infragistics.Web.Mvc namespace first.
	
	Next come a reference to the `infragistics.loader.js` file and a handler of the `igUpload` `onError` client-side event. This `OnError` client-side handler appends the errors to a `<div>` element with an ID equal to `uploadErrors`. The `<div>` element is defined at the end of the code snippet.
	
	The `onError` event handles two types of events – server-side and client-side. They can be distinguished with the `ui.errorType` property.
	
	If `ui.errorType == “serverside”`, then the error comes from the developer code on the server. Its message is kept in `ui.serverMessage`.
	
	If `ui.errorType == “clientside”`, then the error is at the client side. Its message is kept in `ui.errorMessage`. For more information see the [Using Client- Side Events](igUpload-Using-Client-Side-Events.html) topic.
	
	After the `onError` handler is configured, the `igLoader` is defined. The `igLoader` component is responsible for loading the resources used by the `igGrid`.
	
	Finally, `igUpload`.ID is explicitly defined. This enables the client-side event to subscribe to the correct control. The `ControlID` method adds an identifier of the control with which you can identify it on the server and subscribe to its server-side events.
	
	**In C#:**
	
	```csharp
	@using Infragistics.Web.Mvc
	<script src=@Url.Content("~/Infragistics/js/infragistics.loader.js") type="text/javascript"></script>
	<script type="text/javascript">
	    $(document).delegate("#upload1", "iguploadonerror", function (evt, ui) {
	        if (ui.errorType === "serverside")
	            $("#uploadErrors").append("<p>" + ui.serverMessage + "</p>");
	        else
	            $("#uploadErrors").append("<p>" + ui.errorMessage + "</p>");
	    });
	</script>
	@(Html.Infragistics().Loader()
	    .CssPath(Url.Content("~/Infragistics/css/"))
	    .ScriptPath(Url.Content("~/Infragistics/js/"))
	    .Render())
	@(
	Html.Infragistics().Upload()
	    .ID("upload1")
	    .ControlId("upload1")
	    .AutoStartUpload(false)
	    .Mode(UploadMode.Multiple)
	    .ProgressUrl("/IGUploadStatusHandler.ashx")
	    .Render()
	)
	<div id="uploadErrors" style="color: red;"></div>
	```

6. <a id="mvc-wrapper-controller"></a>Configure the `igUpload` MVC wrapper in the Controller.

	To configure the controller:

	1. Open the `<project folder>/ControllersHomeController.cs` file. All the code in the steps that follow is written in that file.
	
	2. Delete the existing HomeController class methods.
	
	3. Define the methods for handling `igUpload` control’s server-side events.
		
		**A.** Add the using clauses.Add the following using clauses:
		
		**In C#:**
		
		```csharp
		using Infragistics.Web.Mvc;
		using System.IO;
		```
		
		They are used by the UploadStatus enumeration and MemoryStream class.
		
		**B.** Add the Index method.
		
		Index action method returns the View with the same name.
		
		**C.** Add a handler for the `igUpload`’s FileUploading event.
		
		Add the igUpload_FileUploading method to the `<project folder>/ControllersHomeController.cs` file:
		
		**In C#:**
		
		```csharp
		internal static void igUpload_FileUploading(object sender, FileUploadingEventArgs e)
		{
		    MemoryStream stream = UploadUtils.GetStreamFromCache(e.TemporaryFileName);
		    stream.Write(e.FileChunk, 0, e.FileChunk.Length);
		    if (stream.Length >= UploadUtils.BufferSize)
		    {
		        string fileName = UploadUtils.UploadPath + e.TemporaryFileName;
		        stream.Flush();
		        UploadUtils.AppendStreamToFile(fileName, stream);
		        stream.Close();
		        UploadUtils.RemoveStreamFromCache(e.TemporaryFileName);
		    }
		    e.Cancel = true;
		}
		```		
		It is very important to note that several files can be uploaded simultaneously which means that this event can rise asynchronously for the files. That is why you need to have a way to recognize for which file the incoming data is. One possible approach is to look into the FileUploadingEventArgs.TemporaryFileName property which guarantees a unique name for a file. In the FileUploading handler, use TemporaryFileName as a key to write file data to the ASP.NET cache by using the UploadUtils.GetStreamFromCache static method.
		
		The FileUploading handler writes the file data to a file if the stream length exceeds the UploadUtils.BufferSize threshold. This ensures that the computer RAM is fully utilized.
		
		**D.** Add the igUpload_FinishingUpload method.
		
		Add the igUpload_FinishingUpload method to the `<project folder>/ControllersHomeController.cs` file. The FinishingUpload handler writes the last chunk of the file which is still in the cache and renames the file to its original name. If there is an existing file in the same directory it is deleted and the new file is written.
		
		>**Warning:** The FinishingUpload handler overwrites files with the same name! In a real-world scenario, you usually do not want overwrite files, so you should employ a user name or some other identifier to ensure that files do not overwrite each other, but, of course, that depends on the business scenario which you are implementing.
		
		**In C#:**
		
		```csharp
		internal static void igUpload_FinishingUpload(object sender, UploadFinishingEventArgs e)
		{
		    string uploadFilePath = UploadUtils.UploadPath;
		    string fileName = UploadUtils.UploadPath + e.TemporaryFileName;
		    MemoryStream stream = UploadUtils.GetStreamFromCache(e.TemporaryFileName);
		    UploadUtils.AppendStreamToFile(fileName, stream);
		    stream.Close();
		    UploadUtils.RemoveStreamFromCache(e.TemporaryFileName);
		    string newFileName = UploadUtils.UploadPath + e.FileName;
		    if (System.IO.File.Exists(newFileName))
		        System.IO.File.Delete(newFileName);
		    System.IO.File.Move(fileName, newFileName);
		}
		```
	
		**E.** Add the igUpload_FinishedUpload method.
	
		Add the igUpload_FinishedUpload method to the `<project folder>/ControllersHomeController.cs` file. The FinishedUpload implementation handles situations where the user cancels the upload. It deletes the temporary file in which we store file data.
		
		**In C#:**
		
		```csharp
		internal static void igUpload_FinishedUpload(object sender, UploadFinishedEventArgs e)
		{
		    switch (e.FileStatus)
		    {
		        case UploadStatus.CancelledByClientCommand:
		        case UploadStatus.CancelledByClientConnection:
		            // delete the file if the upload was unsuccessful
		            System.IO.File.Delete(e.TemporaryFileName);
		            break;
		    }
		}
		```

7. <a id="server-side-events"></a>Register `igUpload`‘s server-side events.

	The server-side events handlers of the `igUpload` component need to be registered only once, so it is appropriate to be done in the Application_Start method of the Global.asax file.
	
	1. Open the Global.asax file.
	
	2. Add the using clause.Add the using clause for the UploadProgressManager class.
		
		**In C#:**
		
		```csharp
		using Infragistics.Web.Mvc;
		```
	
	3. Modify the Application_Start method.
	
		The following code subscribes to the FileUploading, FinishingUpload and FinishedUpload events of the control which ControlID is upload1. This is done by using the AddFileUploadingEventHandler, AddFinishingUploadEventHandler and AddFinishingUploadEventHandler methods of the UploadProgressManager class. The code is added to the Application_Start method.
		
		**In C#:**
		
		```csharp
		UploadProgressManager.Instance.AddFileUploadingEventHandler("upload1",
		    new EventHandler<FileUploadingEventArgs>(Controllers.HomeController.igUpload_FileUploading));
		UploadProgressManager.Instance.AddFinishingUploadEventHandler("upload1",
		    new EventHandler<UploadFinishingEventArgs>(Controllers.HomeController.igUpload_FinishingUpload));
		UploadProgressManager.Instance.AddFinishedUploadEventHandler("upload1",
		    new EventHandler<UploadFinishedEventArgs>(Controllers.HomeController.igUpload_FinishedUpload)); 
		```

8. <a id="verifying-the-result"></a>(Optional) Verify the result.

	To verify the result, build and run the project. Upload a file and check if it is available in the temporary uploaded files folder.





 

 


