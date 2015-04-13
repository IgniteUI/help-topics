# Style Guide
This guide includes a few short notes to help you as you write for Ignite UI. [Click here for a blank sample topic for you to use as the basis for your writing.](sample-topic.md)

Ignite UI help uses [Markdown](http://daringfireball.net/projects/markdown/syntax) (specifically [GitHub flavored Markdown or GFM](https://help.github.com/articles/github-flavored-markdown/)) for the help topics with a few considerations:

## Metadata
Every file must begin with a comment-based metadata header that includes the file name, the associated control and any keywords used for indexing the search.

```
<!--
|metadata|
{
    "fileName": "",
    "controlName": [],
    "tags": []
}
|metadata|
-->
```
## Titles
Each topic must have a single top-level title prefixed by a single `#`. All other titles must use multiple `#`'s that represent the title level.

> Note: Do not use titles with a series of `=` signs beneath the text. The only supported title format in the help is the `#` type.

## Code Snippets
Markdown supports two different ways of handling code, indentation and fenced code blocks. The Ignite UI help only supports [fenced code blocks](https://help.github.com/articles/github-flavored-markdown/#fenced-code-blocks).

## Variables
There are a few (localized) variables that you can use in your topics in order to avoid hard coding ever-changing URLs, version or language-based information into the documents.

Variable | Description | Example
--- | --- | ---
%%jQueryApiUrl%% | jQuery API root link| help.infragistics.com/jQuery/2014.2
%%SamplesUrl%% | Represents the root URL for the samples browser | www.igniteui.com
%%ProductVersion%% | The product version | 2014.2
%%ProductVersionShort%% | Represents the short product version number | 14.2, 15.1, etc.
%%ProductVersionFull%% | Long product version string | 2014 Volume 2
%%InstallPath%% | Common product install path | C:\Program Files (x86)\Infragistics\2015.1\Ignite UI
%%PlatformName%% | Platform name (Used in x-platform topics) | jQuery
%%ProductName%% |  Product name (Used in x-platform topics) | Ignite UI

## Notes
When you want to make a "note" use the `>` character to separate out the text. For instance:

> **Note**: This is a note.

## Tools

### Online

The built-in GitHub editor is pretty good all around, can display topic images and generally give really good representation of the results. It does, however, struggle with inline Markdown (links and images) inside block HTML (e.g. tables).

One of the best tools we've found to date is [StackEdit](http://stackedit.io) which supports GFM, collaboration comments, publishing to GitHub, offline access, synchronized scrolling and a whole bunch more.

Another online alternative is the [Live (Github-flavored) Markdown Editor](http://jbt.github.io/markdown-editor/).

### Apps
If you use [Atom](https://atom.io/) it comes with Markdown support and live preview package that does handle GFM and just about anything encountered in the docs. Also uses the [marked](https://github.com/chjj/marked) parser.  

[MarkdownPad editor](http://markdownpad.com/) is free and includes a live preview pane, while it doesn't handle GFM (tables or code blocks) it does support rich text editing and shortcuts (`ctrl+b` for bold or `ctrl+k` for code).

> **Tip**: Whichever editor you decide on, beware - some downloaded/saved files are encoded as 'UTF-8 without BOM' and full UTF-8 is **required**, so make sure you change encoding in something like Notepad++.

## Examples
Here are a few example topics written in GFM that may helpful as you write:
- [igTreeGrid Overview](../topics/02_Controls/igTreeGrid/00_igTreeGrid_Overview.md)
- [Adding Required Resources Automatically with the Infragistics Loader](../topics/01_General-and-Getting-Started/02_Using_Infragistics_Loader.md)
