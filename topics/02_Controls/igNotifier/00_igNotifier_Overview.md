<!--
|metadata|
{
    "fileName": "ignotifier-overview",
    "controlName": "igNotifier",
    "tags": ["Getting Started"]
}
|metadata|
-->

# igNotifier Overview

The `igNotifier` is a new control extending the existing `igPopover` widget to provide a notification control that can display messages, optional icons and also apply state styles on its targets. The notifications can be in four states in order of importance: success, info, warning and error. The controllable notification level allows to limit the types of notification. 
 
The main purpose of the `igNotifier` is to offer more informative feedback about the state of the `igEditors`. The notifications that are displayed are not only related to the errors or success messages that may appear, but also provide warnings and additional information messages that are related to the specifics of the different editors. What is more from user experience point of view the notifier is offering different UI depending on the type of the message. With easy to recognize and intuitive styles and images the different notifications bring meaningful messages.

###In this topic

This topic contains the following sections:

- [Levels of importance](#levels-importance)

	- [Success](#success)

	- [Info](#info)
 
	- [Warning](#warning)
	- [Error](#error)
-	[Setting up the igNotifier](#setting-up)
-	[Related Content](#related-content)


## <a id="levels-importance"></a>Levels of importance

The different messages can be considered as hierarchical notifications starting from the success message and ending with the error one.

### <a id="success"></a>Success 

Lets start with saying that the text of all the messages can be customize. Later in this topic we will see how to accomplish this task. 

The success message is visually displayed as the input container as well as the respective message are in green. The default message text is "Success", but as we said, you can use the `igNotifier` properties to display a message that corresponds to your project. The distinctive character that can be part of the success notification is the "√" icon.  

```js
$('#success').igNotifier({ 
  showOn: "focus", 
  state: "success" , 
  showIcon: "true", 
  mode:"popover", 
  direction:"right"
}); 
```

![](images/igNotifier_Success.png) 

### <a id="info"></a>Info

The gray color is accompanying the info message notifications. This type of notification is the second in the hierarchy level. This message provides information about the current state of the system and the action that is expected for the user to perform. The input border as well as the icon is gray. 

```js
$('#info').igNotifier({
    direction: "right",
	showIcon: "true",
    messages: {
      info: "Heads up! This alert needs your attention, but it's not super important."
    }
}).igNotifier("notify", "info");  
```

![](images/igNotifier_Info.png)

### <a id="warning"></a>Warning

The third level of the notification hierarchy is the warning messages. Their trademark is the yellow color. That means that the borders of the input container as well as the the warning icon and the popover vcontainer are colored in yellow. The role that this notification message plays is to notify the users when they interacted with the system not quite right, but their actions will not prevent the system to proceed to the next step. 


```js
$('#warning').igNotifier({
    direction: "right",
	showIcon: "true",
    messages: {
      warning: "Warning! Better check yourself, you're not looking too good."
    }
}).igNotifier("notify", "warning");
```
   
![](images/igNotifier_Warning.png)

### <a id="error"></a>Error

Last but not least is the error messages. As you probably guess the representative color is red. Those messages are used to inform the users that they did something wrong and the system won't be able to proceed unless the issue is fixed. Please note that if you want your message to be displayed in a popover, you should explicitly set the mode property.

```js
$('#error').igNotifier({
    mode: "popover",
	showIcon: "true",
    messages: {
      error: "Oh snap! Change a few things up and try submitting again."
    }
}).igNotifier("notify", "error");
```
![](images/igNotifier_Error.png)


## <a id="setting-up"></a>Setting up the igNotifier

If you want to use the `igNotifier` with the igEditors, you should initialize it on the same DOM element as the editor itself. What this means is that you can host a text editor (or any other editor) and the notifier in the same div tag (you can also use span tag). The following example demonstrates how to accomplish that:

```html
<div id="notifier"></div>
```   

```js
$('#notifier').igTextEditor({
  placeHolder: "Focus me."
});

$('#notifier').igNotifier({
    direction: "right",
    messages: {
      success: "Well done!"
    }
}).igNotifier("notify", "success");    
        
``` 

![](images/igNotifier_basic.png)

As every other control, the `igNotifier` has its own properties that allow the users to customize the way the notifications look. You can for example use the `direction` property to specify the position of the messages. It can be situated on either side of the editors input. 

Another worth mentioning option is the `mode`. You can choose between `popover` and `inline` display modes. The default value is auto. This means that the notifier sets popover mode for info and warning messages and inline for the success and the error messages. 

You can use the message property to customize the text that is going to be displayed when a specific notification appears. 

The whole list of available options and detailed description can be found in the [igNotifier jQuery API](%%jQueryApiUrl%%/ui.igNotifier) API documentation. 

## <a id="related-content"></a> Related Content

-	[igNotifier jQuery API](%%jQueryApiUrl%%/ui.igNotifier)
	