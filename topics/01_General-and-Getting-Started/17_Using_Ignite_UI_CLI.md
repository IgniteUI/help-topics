<!--
|metadata|
{
    "fileName": "Using-Ignite-UI-CLI",
    "controlName": [],
    "tags": ["CLI"]
}
|metadata|
-->
# Using %%ProductName%% CLI

## Overview
The Ignite UI CLI is a tool to initialize, develop, scaffold  and maintain applications in a wide variety of frameworks. It provide you with predefined templates for Ignite UI for JavaScript controls. Ignite UI CLI will give you a quick-start for your next project even if you are a newcomer to Ignite UI and to the target frameworks.<br/>
**You can create projects and add Ignite UI for JavaScript controls in [jQuery](https://jquery.com), [Angular](https://angular.io) and [React](https://reactjs.org), executing the very same commands.**

## Getting Started
To install the Ignite UI CLI:
```
npm install -g igniteui-cli
```

To get a guided experience through the available options, simply run:
```
ig
```

If you prefer to provide the commands for generating an Ignite UI project, adding a new component, building and serving the project by yourself, you can use the following:
```
ig new <project name> --framework=<framework>
ig add <component/template> <component_name>
ig build
ig start
```
Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.

## Available Commands

### new
To create a new Ignite UI application, execute the following command:

```
   ig new [name] [framework]
```

| Argument   | Alias | Default value | Description                                                                                   |
| ---------  | ----- |---------------| --------------------------------------------------------------------------------------------- |
| name       | -n    | app           | The name of the application. The application is created inside a directory with the same name.|
| --framework| -f    | jquery        | Framework to setup project for. The supported frameworks are jQuery, Angular and React.       |

Using the `new` command, you can create a new jQuery, Angular and React application.
The new application is created in a directory of the same name.
Keep in mind that creating a new application inside an exisitng application is not supported.

Following are examples of how to use the `new` command to create an Ignite UI for JavaScript applications in all supported frameworks:<br/>
**In jQuery:** `ig new newIgniteUIjQuery` (jQuery is the default choice so you do not need to provide the "framework" argument)<br/>
**In React:** `ig new newIgniteUIReact --framework=react`<br/>
**In Angular:** `ig new newIgniteUIAngular --framework=angular --type=ig-ts`

### add
To add a new Ignite UI for JavaScript control to an already created application, execute the following command:

```
    ig add [template] [name]
```

The `add` command is supported only on existing project created with the Ignite UI CLI. You cannot use the `add` command before creating a project uisng the `new` command or using the step by step guide which is invoked by the `ig` command. 
The quickstart projects do not support the `add` command, meaning that you cannot add more components than the predefined ones for the given quickstart project.

#### Ignite UI for JavaScript templates
Inside the [Ignite UI CLI Wiki](https://github.com/IgniteUI/igniteui-cli/wiki/Add#ignite-ui-for-javascript-templates) you can find the up to date table that demonstrates what Ignite UI for JavaScript templates are available in the supported frameworks.


### build
To build the application into an output directory, execute the following command:

```
    ig build
```

The `build` command will install the npm packages that the project depends on. By default, it will install the [OSS version of Ignite UI](https://github.com/IgniteUI/ignite-ui) but it checks if a full version is required (if a grid component is added, for example) and will swap the OSS package for the full version, after asking you for your Infragistics credentials. You can find more information on how to install the full package in [this topic](https://www.igniteui.com/help/using-ignite-ui-npm-packages).<br/>
The build artifacts, such as CSS resources, will be stored in the `output/` directory.

### start
To build the application and start a web server, execute the following command:

```
    ig start
```
jQuery applications are using port 3000, Angular applications are using port 3001 and React applications are using port 3002.

### quickstart
You can create a quickstart application with predefined Ignite UI controls executing the following command:

```
    ig quickstart [framework]
```

| Argument   | Alias | Default value | Description                                    |
| ---------  | ----- |---------------| ---------------------------------------------- |
| --framework| -f    | jQuery        |The supported frameworks are jQuery and Angular.<br/><p>Example: <code>ig quickstart --framework=angular</code></p>|

Executing the `quickstart` command will install all required packages and will starts a web server.
The generated quickstart application will be stored in the `output/` directory.

### help
To list all the Ignite UI CLI available commands, execute the following command:

```
    ng help
```
