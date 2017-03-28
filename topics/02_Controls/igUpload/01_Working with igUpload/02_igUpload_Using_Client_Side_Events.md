<!--
|metadata|
{
    "fileName": "igupload-using-client-side-events",
    "controlName": "igUpload",
    "tags": ["Events"]
}
|metadata|
-->

# Using Client-Side Events (igUpload)

The `igUpload` control exposes a rich client-side API featuring a number of events. There are seven different client-side events, which are fired either while the user is interacting with the control or during the upload process.

This topic demonstrates how to attach to client-side event handlers to `igUpload` using basic jQuery version as well as using the ASP.NET™ MVC wrapper. Further, this document details the associated event arguments as well as describing each event.

## Attach to Client-Side Event in jQuery
When the basic `igUpload` jQuery widget is used, the handlers to the events are defined the same way as a jQuery UI option.

For example consider the `fileSelecting` event, which is described later in Client Events section of this document. The name of the event is used as a key and the value should be the handler that will implement the logic.

In jQuery:

```
$(window).load(function () {
    $("#igUpload1").igUpload({
        autostartupload: true,
        fileSelecting: function (e, args) {
        }
    });
});
```

## Attach to Client-Side Event Using the MVC Wrapper
By default the MVC wrappers don’t support defining the event handlers in the context of the wrapper syntax. Event binding is again set up using jQuery.

1.  First, instantiate an instance of `igUpload` using the MVC wrapper

    In ASPX:

    ```
    <%= Html.Infragistics().Upload()
        .ID("igUpload1")
        .AutoStartUpload(true)
        .ProgressUrl("/IGUploadStatusHandler.ashx")
        .Render()
    %>
    ```

2.  Then, using the jQuery `bind()` function, associate the event handler to the event.

    In jQuery:

    ```
    $(window).load(function () {
        $("#igUpload1").bind({ iguploadfileselecting: function (e, args) {    }});});
    ```

    >**Note:** The name of the event now is combination of control name plus event name. This is jQuery UI convention for attaching handler to an event. For more information, please read: [jQuery UI Developer Guide](http://jqueryui.com/development/)

3.  Inside the attached handler you can implement any necessary logic. For this you can use the attributes of the event, which is named the same for all the events - e for the event, args for the arguments. Depending on the event, the args arguments contains a different set of properties. 
	>**Note:** Remember that if you want to cancel an event (cancellable events are `fileSelecting` and `fileUploading`) you just need to return **false** from the function.

 
This sample demonstrates how to utilize the igUpload's events and methods: 

<div class="embed-sample">
   [API and Events](%%SamplesEmbedUrl%%/file-upload/api-events)
</div>



## Client Events
**Table 1** details the events available for the `igUpload` control.

**Table 1: Client events available from the `igUpload` control**

<table class="table">
	<thead>
		<tr>
            <th>
Event Name
			</th>

            <th>
Description
			</th>
        </tr>
	</thead>
	<tbody>
        

        <tr>
            <td>
fileSelecting
			</td>

            <td>
The `fileSelecting` event is fired immediately after the browse button is clicked. When this event fires you have an opportunity to cancel the process of populating the browsing window.

                The args attribute is empty when the fileSelecting event is fired. When cancelled (by returning false from the function) the browse dialog is not shown.
			</td>
        </tr>

        <tr>
            <td>
fileSelected
			</td>

            <td>
                The fileSelected event is fired just after a file is selected from the browser pop-up window.

                Upon selection, the event arguments already have some basic information about the file. The args object has two properties:

                <ul>
                    <li>
`fileID`: A consecutive number for every file starting from 0. This useful for multiple upload scenarios, where you can use the ID to identify the different files.
					</li>

                    <li>
`filePath`: Name of the selected file
					</li>
                </ul>

                
                    Note: The cycle of firing fileSelecting and fileSelected events is repeated, when adding additional files.
                
            </td>
        </tr>

        <tr>
            <td>
fileUploading
			</td>

            <td>
                The fileUploading event is fired during the upload process and is fired while file is uploading.. This event is cancelable.

                The first time the event is invoked is when the button for uploading the file is pressed. Then depending on the `progressUpdateInterval` value (which determines the refresh period), the fileUploading event is fired again.

                At this point, the event args contains the following information:

                <ul>
                    <li>
`fileID`: A consecutive number for every file starting from 0. This useful for multiple upload scenarios, where you can use the  ID to identify the different files.
					</li>

                    <li>
`filePath`: Name of the selected file
					</li>

                    <li>
`fileStatus`: Integer representing the status of the file. The value is determined by the server, where an enumeration that maps the integer value with the description of the status. For more information see Table 2.
					</li>

                    <li>
`TotalSize`: Returns the file size sum of all selected files to upload. The metric is bytes.
					</li>

                    <li>
`UploadedBytes`: Returns current amount of uploaded bytes when the `fileUpload` event is fired.
					</li>
                </ul>

                You can also cancel this event by returning false value in the event handler method.
            </td>
        </tr>

        <tr>
            <td>
fileUploaded
			</td>

            <td>
The `fileUploaded` event is fired when all the files are uploaded to the server. When the event is raised the args parameter contains the three properties `fileID`, `filePath` and `TotalSize`.
                For details on these items see the fileUploading event.
			</td>
        </tr>

        <tr>
            <td>
fileUploadAborted
			</td>

            <td>
The `fileUploadAbort` event is fired if you cancel individual file upload using the cancel button associated with each file. The event args object has the same properties as `fileUploading` arguments,
                the only difference is that status is with the value of the canceled file.
			</td>
        </tr>

        <tr>
            <td>
cancelAllClicked
			</td>

            <td>
The `cancelAllClicked` event is fired when during the process of uploading when the user clicks the global Cancel button, which is valid for all uploaded files.
			</td>
        </tr>

        <tr>
            <td>
onError
			</td>

            <td>
                The onError event fires when an exception is thrown on the server or client side.

                The event args contain the following information:

                <ul>
                    <li>
`errorCode`: Integer that represents the error code. Table 3 details server side error codes and Table 4 details client error codes.
					</li>

                    <li>
`errorMessage`: Detailed error information
					</li>

                    <li>
`errorType`: Type of error - the values can be either server-side or client-side.
					</li>

                    <li>
`serverMessage`: This is property is able to be set during the server event `UploadStarting`. If not set it’s an empty string. (You can use it to display custom error messages.)
					</li>
                </ul>

                
                    Note: Keep in mind that you may want to attach a handler to the onError event to monitor the status of the upload. If an error occurs on the server, the event will fire and the errorCode will expose the underlying problem
                    with the operation. Further, you can also use the localized JavaScript files, which are ig.ui.upload-en.js and ig.ui.upload-jp.js, to find the localized error descriptions. You can also define you own strings for the errors in those
                    files.
                
            </td>
        </tr>
		<tr>
		<td>onFormDataSubmit</td>
		<td>
			The onFormDataSubmit event fires before submitting the uploading file(and its additional data if any) to the server. 
			It could be used to append additional data fields to the FormData object.
			 <ul>
                    <li>
`fileId`:  Gets unique identifier of the file.
					</li>

                    <li>
`fileInfo`: Gets reference to the fileInfo object - contains information for the fileName, fileSize, serverMessage, etc.
					</li>

                    <li>
`xhr`:	Gets reference to the original XMLHttpRequest object(if the browser supports HTML 5 file API - if not it is undefined).
					</li>

                    <li>
`formData`: Gets reference to FormData object(if the browser supports HTML5 file API) or reference to jQuery representation of `<form>`.
					</li>
                    <li>
`owner`: Gets igUpload widget object.
					</li>
                </ul>
		</td>
		</tr>
		<tr>
		<td>onXHRLoad</td>
		<td>The onXHRLoad event is fired when the onload(of XmlHttpRequest) is fired. This event will be fired only if the browser supports HTML5 API.</td>
		</tr>
    </tbody>
</table>

The following tables map the message codes returned from the server with their meanings.

 

**Table 2**: Enumeration of type **UploadStatus**

Value | Description
---|---
0| File is not started
1| File Uploading is started
2| File Upload is finished
3| File not found - this status is used when it is not found such key in the dictionary
4| Cancel file uploading by client command
5| Size of the file exceeded
6| Error while file is uploading
7| File upload is cancelled from server-side event handler
8| File uploading is cancelled by dropping client connection
9| Status of file when the whole content is uploaded but the file is with temporary filename

 

**Table 3:** Enumeration of type FileError (for server side error)

Value| Description
---|---
-1| No error
0|File error occurs when getting file name from the request
1|MIME type validation failed
2|File size exceeded
3|Temporary folder where file should be uploaded could not be found
4|Error while parsing request header
5|File does not exist with the specified key in the request
6|Error occurs when file saving fails
7|Error occurs when trying to write file content
8|Error occurred when trying to write file content for the first time
9|Error occurred when trying to delete file
10|Error set when file upload is cancelled on start uploading in event handler


**Table 4:** Enumeration of type FileError (for client side error codes)

Value |Description
---|---
1 |Max allowed uploading files exceeded
2 |Client side extenstion validation
3 |Error thrown when trying to start upload file with not existing id
4 |Ajax error when trying to get file status
5 |Ajax error when trying to call cancel command in httpHandler
6 |Error occurs when trying to remove file upload with not existing id
7 |Ajax error when trying to get file size
8 |Error thrown when trying to check if the file could be canceled and `maxSimultaneousFilesUploads` Is less or equal to 0

## Related Links
-   [Ignite UI Overview](NetAdvantage-for-jQuery-Overview.html)
-   [Using JavaScript Resources in Ignite UI](Deployment-Guide-JavaScript-Resources.html)

 

 


