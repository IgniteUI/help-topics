<!--
|metadata|
{
    "fileName": "Using-System.JS-with-IgniteUI-controls",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# Using System.JS with Ignite UI controls

## Introduction

Ignite UI controls can be loaded using standard module loaders. Each module contains an AMD signature and references dependency modules.
[System.JS](https://github.com/systemjs/systemjs) is a popular module loader which is used by the JSPM package manager. This topic describes how to setup System.JS to use Ignite UI controls.

For all of the examples below command line prompt on Windows is being used. Similar commands can be performed in terminal on MacOS. Using [Visual Studio Code](https://code.visualstudio.com/) is recommended, but not required.

## Initialize application with JSPM

Install JSPM:
```
npm install -g jspm
```

Create a folder for the new application and make it the current folder.

```
mkdir igsample
cd igsample
```

Initialize the application using JSPM:
```
jspm init
```
After answering a series of questions (choosing the default answer is OK, although using TypeScript as the transpiler is recommended), you should have everything that is needed to use JSPM and System.JS loader in the application.

Install `jquery`, `jquery-ui`, and `css` loader packages:
```
jspm install jquery
jspm install jquery-ui
jspm install css
```

## Add Ignite UI package using GitHub

There is a set of components in the Ignite UI suite that is distributed freely and their source code is [hosted](https://github.com/IgniteUI/ignite-ui) on GitHub for everyone to use and contribute to. If the application uses only open source Ignite UI controls, you can add this package to the application using the following command:
```
jspm install github:igniteui/ignite-ui
```

## Add Ignite UI package using private NPM registry

Full paid version of Ignite UI that includes all of the controls can also be used with JSPM. However at the moment of writing this article it is required to publish Ignite UI package in a private NPM registry after downloading it from Infragistics website.

If your organization has a private NPM registry setup, then after the Ignite UI package is published there, you can bring it to your application by using this command:
```
jspm install npm:igniteui/ignite-ui
```
> **Note:** the package name may differ. Please check with your local NPM registry administrator.

## Reference controls as ES6 modules

Create `index.html` and `js/bootstrap.js`, `js/igsample.js` files using Visual Studio Code (or your favorite text editor). Type
```
code .
```
to open the editor in the current folder. 

`index.html` content:
```html
<doctype html>
<head>
	<title>IG Sample</title>
</head>
<html>
	<span id="rating"></span>

	<script src="jspm_packages/system.js"></script>
	<script src="config.js"></script>
	<script>
		SystemJS.import('js/igsample.js');
	</script>
</html>
```

`js/bootstrap.js` content:
```JavaScript
import 'igniteui/ignite-ui/src/css/themes/infragistics/infragistics.theme.css!';
import 'igniteui/ignite-ui/src/css/structure/modules/infragistics.ui.rating.css!';
import 'igniteui/ignite-ui/src/js/modules/infragistics.ui.rating';

export function bootstrap(){
	// init code here
}
```
The exclamation sign at the end of the css modules indicates that the module loader should not assume that it is a js module and that the css loader should handle these modules.

`js/igsample.js` content:
```JavaScript
import $ from 'jquery';
import {bootstrap} from './bootstrap';

// execute initialization procedure
bootstrap();

$(function(){
	$("#rating").igRating();
})
```


## Bundle JavaScript and CSS

The example above instructs the System.JS loader to load all of the modules that are required for the requested control. The dependency tree is analyzed and necessary files are loaded in the order of dependency.

JSPM can also conveniently bundle all of the referenced modules along with their dependencies and css files into one js file. This helps to reduce time that is required by the browsers to request multiple individuala files from the server.

To bundle all modules execute the following command:
```
jspm bundle js/igsample.js --inject
``` 

To return to separate files execute the following command:
```
jspm unbundle
```

## Conclusion

The example above can be hosted on your web server. Or if you prefer just quickly run it you can use the http-server:
```
npm install -g http-server
http-server
```
Open the browser and navigate to `http://localhost:8080` to see the application running.

In this srticle we demonstrated how Ignite UI controls can be used along with JSPM and System.JS loader.
