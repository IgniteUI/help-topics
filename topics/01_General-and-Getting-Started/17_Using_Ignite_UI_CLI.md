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

Following are examples of how to use the `new` command to create an Ignite UI for JavaScript applications for all supported frameworks:<br/>
**In jQuery:** `ig new newIgniteUIjQuery` (jQuery is the default choice so you do not need to provide the "framework" argument)<br/>
**In React:** `ig new newIgniteUIReact --framework=react`<br/>
**In Angular:** `ig new newIgniteUIAngular --framework=angular --type=ig-ts`

### add
To add a new Ignite UI for JavaScript control to an already created application, execute the following command:

```
    ig add [template] [name]
```

The `add` command is supported only on existing project created with the Ignite UI CLI. You cannot use the `add` command before creating a project uisng the `new` command or using the step by step guide which is invoked by the `ig` command.

#### Ignite UI for JavaScript templates
Inside the [Ignite UI CLI Wiki](https://github.com/IgniteUI/igniteui-cli/wiki/Add#ignite-ui-for-javascript-templates) you can find the up to date table that demonstrates what Ignite UI for JavaScript templates are available in the supported frameworks.


### build
To build the application into an output directory, execute the following command:

```
    ig build
```

The `build` command will install the npm packages that the project depends on. By default, it will install the [OSS version of Ignite UI](https://github.com/IgniteUI/ignite-ui) but it checks if a full version is required (if a grid component is added, for example) and will swap the OSS package for the full version, after asking you for your Infragistics account credentials. You can find more information on how to install the full package in [this topic](https://www.igniteui.com/help/using-ignite-ui-npm-packages).<br/>
The build artifacts, such as CSS resources, will be stored in the `output/` directory.

### start
To build the application and start a web server, execute the following command:

```
    ig start
```
jQuery applications are using port 3000, Angular applications are using port 3001 and React applications are using port 3002.

### generate
To generates a new custom template for supported frameworks and project types, execute the following command:

```
    ig generate template [name]
```

By default the command registers the generated template path in the `customTemplates` in the global config of the Ignite UI CLI. That makes the generated template automatically visible under the Add View menu, or directly when using `add` command.

### config

To perform read and write operation on the Ignite UI CLI configuration settings, execute the following command:

```
    ig config <get|set|add> <property> [value]
```

Ignite UI CLI stores configuration in an `ignite-ui-cli.json` file. Project structures created with Ignite UI CLI include such a file as local configuration. A per-user file can provide global defaults in case `ig config` is called with a --global flag . The global `ignite-ui-cli.json` file is stored under the current user home directory - usually `/home/<user>` for Unix and `C:\Users\<user>` for Windows.

### test

To run the tests for the current project, execute the following command:

```
    ig test
```

The command can be used for jQuery, Angular and React projects and it will run the corresponding testing setup. Each framework has a different test environment configured, based on the technology and the community preferences.

### list

To list all templates for the specified framework and type, execute the following command within a project folder:

```
    ig list
```

### doc

To search the Infragistics knowledge base for information about a given search term, execute the following command:

```
    ig doc
```

The command takes in a single search term and opens the Infragistics search in the default browser.

### help
To list all the Ignite UI CLI available commands, execute the following command:

```
    ng help
```
