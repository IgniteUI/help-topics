<!--
|metadata|
{
    "fileName": "igrating-data-attributes-reference",
    "controlName": "igRatingMobile",
    "tags": ["API"]
}
|metadata|
-->

# Data Attributes Reference

## Topic Overview

### Purpose

This topic lists all of the `igRating`™ data attributes. You can use these attributes to initialize the `igRating` in markup.

### In this topic

This topic contains the following sections:

-   [Introduction](#introduction)
-   [Rating Options Data Attributes Reference](#options)
-   [Related Content](#related-content)



## <a id="introduction"></a>Introduction

The following reference chart explains the data attributes of the `igRating`™ control. These attributes are used for configuring the control in the HTML markup.

Example `igRating` markup initialization:

**In HTML:**

```html
<div id="igRatingViewMarkupInitializtion"
    data-role="igrating"
    data-value="2"
    data-vote-count="5"
    data-vote-width="44"
    data-voteheight="44"
    data-read-only="false"
    data-input-name="hdnValue">
</div>
```



## <a id="options"></a>Rating Options Data Attributes Reference

The following table summarizes the purpose and functionality of the `igRating` control’s featured data attributes.

<table class="table table-striped">
	<thead>
		<tr>
            <th>
Property
			</th>
            <th>
Description
			</th>
            <th>
Type
			</th>
            <th>
Values(Default)
			</th>
        </tr>
	</thead>
	<tbody>
        <tr>
            <td>
data-role
			</td>
            <td>
Identifier for the `igRating` control
			</td>
            <td>
string
			</td>
            <td>
`igrating`
			</td>
        </tr>
        <tr>
            <td>
data-value
			</td>
            <td>
Gets or sets selected vote’s value
			</td>
            <td>
number
			</td>
            <td>
Number(0)
			</td>
        </tr>

        <tr>
            <td>
data-vote-count
			</td>

            <td>
Gets or sets the number of votes
			</td>

            <td>
number
			</td>

            <td>
Number(5)
			</td>
        </tr>
        <tr>
            <td>
data-vote-width
			</td>
            <td>
Gets or sets the custom width of a vote in pixels
			</td>
            <td>
number
			</td>
            <td>
Number(0)
			</td>
        </tr>
        <tr>
            <td>
data-vote-height
			</td>
            <td>
Gets or sets the custom height of a vote in pixels
			</td>
            <td>
number
			</td>
            <td>
Number(0)
			</td>
        </tr>
        <tr>
            <td>
data-read-only
			</td>
            <td>
Gets or sets whether the rating is editable
			</td>
            <td>
bool
			</td>
            <td>
true|**false**
            </td>
        </tr>
        <tr>
            <td>
data-input-name
			</td>
            <td>
Gets or sets the name of the hidden input used by the MVC to carry the value to the server.
			</td>
            <td>
string
			</td>
            <td>
string(null)
			</td>
        </tr>
    </tbody>
</table>



## <a id="related-content"></a>Related Content

### Topics

The following topics provide additional information related to this topic:

- [Property Reference](igRating-Property-Reference.html): The topic that introduces the user to the `igRating` control’s properties.

- [Method Reference](igRating-Method-Reference.html): The topic that introduces the user to the `igRating` control’s methods.

- [Event Reference](igRating-Event-Reference.html): The topic that introduces the user to the `igRating` control’s events.

- [CSS Classes](igRating-Classes-Reference.html): The topic that introduces the user to the `igRating` control’s CSS classes.



### Samples

The following samples provide additional information related to this topic:

- [Basic Usage](%%SamplesUrl%%/mobile-rating/basic-usage): Sample that shows you how to initialize the `igRating` Mobile.

- [Custom Items](%%SamplesUrl%%/mobile-rating/custom-items): Sample that shows you how to set custom images for the `igRating` Mobile.

- [API and Events](%%SamplesUrl%%/mobile-rating/api-and-events): This sample shows the common methods and events used for the mobile rating.





 

 


