<!--
|metadata|
{
    "fileName": "manually-updating-previous-versions",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Upgrading Projects to the Latest %%ProductName%% Version



##Topic Overview


### Purpose

This topic details how to upgrade projects that use %%ProductName%%™ to the current version of the %%ProductName%% library.

### Required background

The following list presents the topics required as a prerequisite to understanding this topic.


- [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html): This topic explains how to manage the required resources to work with the %%ProductName%% JavaScript within a Web application.

- [Styling and Theming %%ProductName%%](Deployment-Guide-Styling-and-Theming.html): This topic provides instructions on setting up your application for design time, options for using CSS in production and an overview on creating or customizing a theme.

- [JavaScript Files in %%ProductName%%](Deployment-Guide-JavaScript-Files.html): This topic is a reference to the JavaScript files required to work with the controls included in %%ProductName%%.


##Introduction

Every new %%ProductName%% volume release has a lot of new features and bug fixes. If you want to adopt the latest changes, you need to upgrade your projects by updating all JavaScript and theme files. %%ProductName%% has no automated upgrade utility, so you have to replace these files manually. To do this, you need to first become familiar with new files and the new folder structure as new releases usually come with significant changes in file organization.

### What you need to upgrade

What you need to upgrade depends on what your application uses, as outlined in the following table.

<table class="table table-striped">
<thead>
	<tr>
		<th>
			If your application uses
		</th>
		<th>
			Then update
		</th>
	</tr>
</thead>
<tbody>
	<tr>
		<td>
			JavaScript files and jQuery UI themes
		</td>
		<td>
			The script and theme files
		</td>
	</tr>
	<tr>
		<td>
			JavaScript files and jQuery UI themes + ASP.NET MVC
		</td>
		<td>
			The script and theme files + assembly reference files
		</td>
	</tr>
</tbody>
</table>


## Upgrading a Project Manually


### Introduction

The procedure of updating a project that uses %%ProductName%% includes updating the JavaScript files and jQuery UI themes and, if the ASP.NET MVC is used, also the references to the assemblies.

### <a id="prerequisites"></a>Prerequisites

To complete the procedure, you need the following:

-   The latest version of the JavaScript files.

By default, the installer places the new JavaScript files in:
 

 ```
 %%InstallPath%%\js
 ```

where *ProductVersionShort* stands for the release year and release number separated by a dot, e.g. *2013.2*.

If you don’t have this version installed, you need to download the %%ProductName%% installation .zip file available from [here](https://www.infragistics.com/Membership/Default.aspx?panel=Downloads).

-   The latest version of the jQuery UI themes.

By default, the installer places the new themes in:`%%InstallPath%%\css\themes.`  If you don’t have this version installed, you need to download the %%ProductName%% installation .zip file available from [here](http://jqueryui.com/download).

-   The latest version of the %%ProductName%% assemblies.

By default, the installer places the new assemblies in:  `%%InstallPath%%\MVC`. If you don’t have this version installed, you need to download the %%ProductName%% installation .zip file available from [here](https://www.infragistics.com/Membership/Default.aspx?panel=Downloads).

### Overview

Following is a conceptual overview of the process:

1. Backing up current scripts and themes
2. Switching to the latest version of the scripts and themes
3. (Conditional) Upgrading the assemblies
4. Verifying the result

### Steps

To upgrade your project, following these steps.

**1.Back up current scripts and themes.**

To back up your current resources, create a backup folder and move the old JavaScript files and jQuery UI theme files to it. To do this: ​

 1.  In your project or on your hard drive, create a new folder to which to move the old JavaScript files and jQuery UI themes.​
 
 1.  Backup the JavaScript files.  Copy all Infragistics script files (those beginning with *ig.*), to the new folder.  If the project uses the combined JavaScript file, you need to move only this file; if the project uses individual JavaScript files, you need to move all of them.
 
 1. ​ Backup the jQuery UI themes. Copy the base and ig themes to the new folder. If you use a custom ThemeRoller theme instead of the ig theme or if you use minified themes, copy the files for those themes to the backup folder, too.

​**2. Switch to the latest version of the scripts and themes.**

To switch to the latest version of the resources, delete the existing Infragistics JavaScript and jQuery UI theme files together with their folder structure and copy the new ones in their place. To do this:

​
1. Delete the existing Infragistics JavaScripts files and their folders.
 
 (These are all script files beginning with ig.) ​
2. Delete the existing jQuery UI theme files and their folders. Copy  the new version of the JavaScript files together with their folder structure to the JavaScript folder of your project.

 - If you have the latest version of the JavaScript files installed, copy them from the %%ProductName%% installation  folder. (See the default the path in the [Prerequisites](#prerequisites) block.)
 - If you don’t have the latest version of the JavaScript files installed, extract the files from the installation .zip archive. The JavaScript files reside in the js folder stored in archive. (For download  instruction, see the [Prerequisites](#prerequisites) block.)

 > **Note:** There are breaking changes in JavaScript files and folder  structure. More information for changes, refer to [Using JavaScript Resources in %%ProductName%%](Deployment-Guide-JavaScript-Resources.html). 

3. Copy the new version of the jQuery UI theme files together with their folder structure to the themes folder of your project.

 - If you have the latest version of the theme files installed, copy them from the %%ProductName%% installation folder. (See the default the path in the [Prerequisites](#prerequisites) block.)
 - If you don’t have the latest version of the theme files installed, extract the files from the installation .zip archive. The theme files reside in the themes folder stored in archive. (For download instruction, see the [Prerequisites](#prerequisites) block.)
 - If you have customized versions of the old themes, these customizations must be re-created (copied) manually in the new versions of the themes.
 - If you have a ThemeRoller theme, copy theme from backup folder in the css/theme folder.

 > **Note**: Refer to your backup directory to make sure that for each jQuery
UI theme that you backed up you have the corresponding new theme copied.

 >**Note:** There is breaking changes in CSS files and folder structure. More
information for changes read [Styling and Theming
%%ProductName%%](Deployment-Guide-Styling-and-Theming.html).

​**3. (Conditional) Upgrade the assemblies**

If your application uses the ASP.NET MVC helpers or the Document assemblies, the assemblies for the new versions must be included in your application. Following is the list of the assemblies you need to include:

-   `Infragistics.Web.Mvc.dll`
-   `Infragistics.WebUI.Documents.Core.dll` **or** `Infragistics.Web.Mvc.Documents.Core.dll`
-   `Infragistics.WebUI.Documents.IO.dll` **or** `Infragistics.Web.Mvc.Documents.IO.dll`
-   `Infragistics.WebUI.Documents.Reports.dll` **or** `Infragistics.Web.Mvc.Documents.Reports.dll`
-   `Infragistics.WebUI.Documents.Excel.dll` **or** `Infragistics.Web.Mvc.Documents.Excel.dll`
-   `Infragistics.WebUI.Documents.Word.dll` **or** `Infragistics.Web.Mvc.Documents.Word.dll`

>**Note:** The new versions of the document assemblies use the Infragistics.Web.Mvc.Documents naming convention.

To upgrade the assemblies:

​1. Remove the existing references to the %%ProductName%% assemblies.

In Visual Studio, remove the existing references for the Infragistics assemblies from your project.

​2. Add and reference the new version of the Infragistics assemblies in your project.

-   If you have the latest version of the assembly files installed, copy them from the %%ProductName%% installation folder. (See the default the path in the [Prerequisites](#prerequisites) block.)
-   If you don’t have the latest version of the assembly files installed, extract the files from the installation .zip archive. The assembly files reside in the MVC directory stored in archive. (For download instruction, see the [Prerequisites](#prerequisites) block.)

>**Note:** The method by which you add the assemblies to your project will vary depending on the type of deployment. In most cases, removing the old assemblies from the bin folder and adding the new assemblies to the bin folder will be adequate but the steps may differ if you are using a different deployment method, e.g. when the assemblies are in the Global Assembly Cache (GAC).

​**4. Verify the result.**

To verify the result, run your application and test it for issues.





## Related Content

### Topics

The following topics provide additional information related to this topic.

- [What’s New](jQuery-Whats-New-Landing-Page.html): The topics in this group provide information about the new controls and features introduced in the various versions of the %%ProductName%% library of controls.





 

 


