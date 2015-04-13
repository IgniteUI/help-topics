<!--
|metadata|
{
    "fileName": "igcurrencyeditor-igcurrencyeditor-options",
    "controlName": "igEditors",
    "tags": ["API"]
}
|metadata|
-->

# igCurrencyEditor Property Reference

## Currency Editor Options

The `igCurrencyEditor` is an editor control which allows currency editing functionality and provides various appearances and behaviors based its properties. The `igCurrencyEditor` control extends `igNumericEditor` and in addition to options of `igNumericEditor`, it exposes a number of different currency-related options.

## Regional Options

Property Name | Type | Default Value
---|---|---
regional | Object, String | null

The regional option allows you to define culture related values for various options of the editor. If the value of that option is a String (ex: such as "bg" or "fr") then editor attempts to find and use the `$.ui.igEditor.regional[valueOfOption]` object. The value of object will contain key/value pairs, or key:value members, which are used by editor to adjust corresponding culture related features such as `currencyGroups`, `currencyDecimalSeparator` and others culture-dependent attributes of the control.

By default the `igCurrencyEditor` control gets culture related options from the `$.ig.regional.defaults` object. For example: `$.ig.regional.defaults.currencySymbol` defines symbol string. To change defaults for all editors, you can use `$.ig.setRegionalDefault(objectOrString)`.

**Listing 1:** HTML element used to render regional options

In HTML:

```
<input id="regionalCurrency" type="text" value="1234.56"/>
```

**Listing 2:** Set regional settings during initialization

In Javascript:

```
$('#regionalCurrency').igCurrencyEditor(
{    
    width: 100, 
       regional: "en-US"
});
```

**Listing 3:** Set regional settings after initialization

In Javascript:

```
$('#regionalCurrency').igCurrencyEditor('option', 'regional', 'bg');
```

## Sub-Options

The Regional option also supports a number of sub-options. Each option is detailed below.

### currencySymbol

Property Name | Type | Default Value
---|---|---
currencySymbol | String | “$”

The `currencySymbol` option allows you to set custom currency symbol in the control. Setting the currency symbol overwrites the default currency symbol set by regional option. The currency symbol is used in display mode.

**Listing 4:** HTML element used to render regional options

In HTML:

```
<input id="customCurrencySymbolEditor" type="text" value="1234.56"/>
```

**Listing 5:** Set regional settings during initialization

jQueryUI – Set the **currencySymbol** option after init.

```
$('#customCurrencySymbolEditor').igCurrencyEditor(
{
	width: 100,
	currencyPositivePattern: "$ n",
	currencySymbol: "£"
});
```

**Listing 6:** Set regional settings after initialization

jQueryUI – Set the **currencySymbol** option after init.

```
$('#customCurrencySymbolEditor').igCurrencyEditor('option', 'currencySymbol', "$");
```

### currencyPositivePattern

Property Name | Type | Default Value
---|---|---
currencyPositivePattern | String | “$n”

That `currencyPositivePattern` option defines the display mode pattern for positive numeric values. The "$" flag represents the `currencySymbol` and the "n" flag represents the value of number. Using these two flags, you can build custom patterns to best suit your needs.

> **Note:** Both `currencySymbol` flag and the “n” flag can be used only once in the pattern. The second usage of “n” flag will show the character “n”. Respectively the second usage of “$” will show “$” in the pattern. You can change the order of currency sign and the number value and of course add additional space and custom characters into your pattern.

**Listing 7:** HTML element used to render regional options

In HTML:

```
<input id="positivePatternCurrency" type="text" value="1234.56"/>
```

**Listing 8:** Set regional settings during initialization

In Javascript:

```
$('#positivePatternCurrency').igCurrencyEditor(
{
    width: 100,
    currencyPositivePattern: "$ n"
});
```

**Listing 9:** Set regional settings after initialization

In Javascript:

```
$('#positivePatternCurrency').igCurrencyEditor('option', 'currencyPositivePattern', "$ n");
```

### currencyNegativePattern

Property Name | Type | Default Value
---|---|---
currencyNegativePattern | String | “$(n)”

That `currencyNegativePattern` option defines the display mode pattern for negative numeric values. The "$" flag represents `currencySymbol` and the "n" flag represents the value of number. The "-" and "()" flags are static part of pattern.

> **Note:** Both the `currencySymbol` flag and the “n” flag can be used only once in the pattern. The second usage of “n” flag will show the character “n”. Respectively the second usage of “$” will show “$” in the pattern. You can change the order of currency sign and the number value and of course add additional space and custom characters into your pattern.

**Listing 10:** HTML element used to render regional options

In HTML:

```
<input id="negativePatternCurrency" type="text" value="-1234.56"/>
```

**Listing 11:** Set regional settings during initialization

In Javascript:

```
$('#negativePatternCurrency').igCurrencyEditor(
{
    width: 100,
    currencyNegativePattern: "$ -n"
});
```

**Listing 12:** Set regional settings after initialization

In Javascript:

```
$('#positivePatternCurrency').igCurrencyEditor('option', 'currencyPositivePattern', "$ -n");
```

### currencyDecimalSeparator
Property Name | Type | Default Value
---|---|---
currencyDecimalSeparator | String | “.”

The `currencyDecimalSeparator` option allows you to set custom decimal separator symbol of the `igCurrencyEditor` control.

**Listing 13:** HTML element used to render regional options

In HTML:

```
<input id="decimalCurrencySeparator" type="text" value="1234.56"/>
```

**Listing 14:** Set regional settings during initialization

In Javascript:

```
$('#decimalCurrencySeparator').igCurrencyEditor(
{    
    width: 100,
    currencyDecimalSeparator: "."
});
```

**Listing 15:** Set regional settings during initialization

In Javascript:

```
$('#decimalCurrencySeparator').igCurrencyEditor('option', 'currencyDecimalSeparator', ",");
```

### currencyGroupSeparator

Property Name | Type | Default Value
---|---|---
currencyGroupSeparator | String | “,”

The `currencyGroupSeparator` option defines the character used as separator for groups (like thousands).

>**Note:** This option only appears in display mode.

**Listing 16:** HTML element used to render regional options

In HTML:

```
<input id="currencyGroupSeparator" type="text" value="12345678.56"/>
```

**Listing 17:** Set regional settings during initialization

In Javascript:

```
$('#currencyGroupSeparator').igCurrencyEditor(
{    
    width: 100,
       currencyGroupSeparator: ","
});
```

**Listing 18:** Set regional settings after initialization

In Javascript:

```
$('#currencyGroupSeparator').igCurrencyEditor('option', 'currencyGroupSeparator', ".");
```

### currencyGroups

Property Name | Type | Default Value
---|---|---
currencyGroups | Array of Number objects | [3]

The `currencyGroups` option defines the number of digits in integer part of number, which are divided into groups. The `currencyGroupSeparator` is inserted between groups. If the sum of all values in array is smaller than the length of integer part, then the last item in array is used for all following groups. Count of the groups, starts from the decimal character (from right to left).

> **Note:** This option only appears in display mode.

**Listing 19:** HTML element used to render regional options

In HTML:

```
<input id="currencyGroup" type="text" value="12345678.56"/>
```

**Listing 20:** Set regional settings during initialization

In Javascript:

```
$('#currencyGroup').igCurrencyEditor(
{    
    width: 100,
    currencyGroups: [4]
});
```

**Listing 21:** Set regional settings after initialization

In Javascript:

```
$('#currencyGroup').igCurrencyEditor('option', 'currencyGroups' , [6]);
```

### currencyMaxDecimals

Property Name | Type | Default Value
---|---|---
currencyMaxDecimals | Number | 2

The `currencyMaxDecimals` option defines the maximum number of decimal places used in display mode. If the number of digits in the fractional part of number is more than defined, then the editor rounds the value. For example with the default value of `currencyMaxDecimals` and a value of 12.573 is entered into the control, the result is 12.57. Alternatively if the entered value is 12.576, the result is 12.58.

**Listing 22:** HTML element used to render regional options

In HTML:

```
<input id="maxDecimalCurrencyEditor" type="text" value="1234.56768696"/>
```

**Listing 23:** Set regional settings during initialization

In Javascript:

```
$('#maxDecimalCurrencyEditor').igCurrencyEditor(
{    
    width: 150,
       currencyMaxDecimals: 2
});
```

**Listing 24:** Set regional settings after initialization

In Javascript:

```
$('#maxDecimalCurrencyEditor').igCurrencyEditor('option', 'currencyMaxDecimals' , 4);
```

### currencyMinDecimals

Property Name | Type | Default Value
---|---|---
currencyMinDecimals | Number | 2

The `currencyMinDecimals` option defines the minimum number of decimal places which are used in display mode. If the number of digits in fractional part of number is less than the value of this option, then the "0" characters are used to fill missing digits.

**Listing 25:** HTML element used to render regional options

In HTML:

```
<input id="minDecimalCurrencyEditor" type="text" value="1234.5"/>
```

**Listing 26:** Set regional settings during initialization

In Javascript:

```
$('#minDecimalCurrencyEditor').igCurrencyEditor(
{    
    width: 150,
       currencyMinDecimals: 2
});
```

**Listing 27:** Set regional settings after initialization

In Javascript:

```
$('#minDecimalCurrencyEditor').igCurrencyEditor('option', 'currencyMinDecimals', 4);
```

