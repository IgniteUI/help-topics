<!--
|metadata|
{
    "fileName": "Using-Ignite-UI-Npm-Packages",
    "controlName": [],
    "tags": ["npm"]
}
|metadata|
-->
# Using Ignite UI npm packages

npm is the most popular package manager and is also the default one for the runtime environment Node.js. It is highly adopted and is one of the fastest and easiest way to manage the packages that you depend on in your project. On more information on how npm works, read the official [npm documentation](https://docs.npmjs.com).

Infragistics Ignite UI is available as a npm package and you can add it as a dependency to your project in few easy steps. There are two approaches to start using the Ignite UI npm package. We suggest you to use our private npm feed hosted on  [https://packages.infragistics.com/npm/js-licensed](https://packages.infragistics.com/npm/js-licensed). There you will find the latest available version of the Ignite UI package, which contains the latest features and improvements. If you have a valid Ignite UI license, you can use this private feed and you will have access to the full version of Ignite UI. 

Another option is to use the official npm feed at [https://www.npmjs.com](https://www.npmjs.com/package/ignite-ui). Choosing this approach will not require configuring npm but there you will find the Ignite UI OSS version of the package. You can check which Ignite UI controls are included in the OSS version on the [package's page](https://www.npmjs.com/package/ignite-ui).

## Installing the Ignite UI npm package from npmjs.com

If you choose to use the latest official release of Ignite UI you can install it the same way you are installing all the other packages that your project is depending on. You just need to type the following into the command line:

```js
npm install ignite-ui
```

After executing this command, you will find the Ignite UI package inside the node_modules directory of your project.  

## Installing the Ignite UI npm package from the Infragistics private feed

If you want to be sure that you will use the latest improvements in Ignite UI, you need to do some quick configurations of the npm. 

First you need to setup the private registry. You will be asked to provide the username and the password that you use for logging into your Infragistics account. You should also provide the email that is registered to your Infragistics profile. There is an important note that you must have in mind during this step! npm is disallowing the use of the "@" symbol inside your username as it is considered as being "not safe for the net". Because your username is actually the email that you use for your Infragistics account it always contains the symbol "@". That`s why you must escape this limitation by replacing the "@" symbol by "!!" (two exclamation marks). For example, if your username is "username@infragistics.com" when asked about your username you should provide the following input: "username!!infragistics.com".

```js
npm adduser --registry=https://packages.infragistics.com/npm/js-licensed --always-auth
```

After that you need to set the registry to that one. Do this by running the following command:

```js
npm config set registry https://packages.infragistics.com/npm/js-licensed
```

After this is done, you will be logged in and you will be able to install the latest version of Ignite UI into your project:

```js
npm install ignite-ui-full
```

Have in mind that npm has some registry limitations so that when you are using a private registry, you will need to change the registries if you want to install a package from npmjs.com. This shouldn`t frighten you as this is done by a single command and you don`t need any additional configurations. 
You just need to use the following line:

```js
npm config set registry https://registry.npmjs.org/
```

You can use the very same command to go back to the private feed if you want to. 

So, if you've already adopted npm and you have an Ignite UI license, don't hesitate setting up the Infragistics private feed and boost your productivity, using the full potential of Ignite UI. 

And if you don't have a licensed copy of Ignite UI yet, you can still use many of the great controls that Infragistics provide for free with the Ignite UI OSS package. Among those controls are the powerful igEditors, igCombo and igTree. So, go ahead and give it a try, installing the Ignite UI npm package from npmjs.com. 