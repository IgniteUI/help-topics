<!--
|metadata|
{
    "fileName": "typescript-samples",
    "controlName": [],
    "tags": []
}
|metadata|
-->

# TypeScript Samples

## Topic Overview
This topic covers samples with Ignite UI controls and TypeScript.

### In this topic

This topic contains the following sections:
-   [Requirements](#requirements)
-   [Tile Manager Sample](#tile_manager_sample)
    -   [Preview](#tile_manager_sample_preview)
    -   [Details](#tile_manager_steps_html)
-   [Dialog Window Sample](#dialog_window_sample)
	  -   [Preview](#dialog_window_sample_preview)
	  -   [Details](#dialog_window_steps_html)
-   [Templating Engine Sample](#templating_engine_sample)
      -   [Preview](#templating_engine_preview)
      -   [Details](#templating_engine_steps)
-   [Pie Chart Sample](#pie_chart_sample)
    -   [Preview](#pie_chart_preview)
    -   [Details](#pie_chart_details)
-   [Related Content](#related_content)

### <a id="requirements"></a>Requirements
In order to run these samples, you need to have:
-   The required Ignite UI JavaScript and CSS files
-   The required Ignite UI TypeScript definitions

### <a id="tile_manager_sample"></a>Tile Manager Sample​
This sample will demonstrate how we can use `igTileManager` with TypeScript.

#### <a id="tile_manager_sample_preview"></a>Preview
The following screenshot is a preview of the final result.

![](images/igTileManager_TypeScript.png)


#### <a id="tile_manager_steps_html"></a>Details
Create the HTML - we are going to have three tabs with car brands and an `igTileManager` which will load photos of the selected car brand.

**In HTML:**
```html
<h1 class="hOne">Infragistics Car Dealership</h1>
<h3>Choose a car brand to browse</h3>
<div id="car-tabs">
    <ul>
        <li><a href="#magarcedesDashboard">Magarcedes</a></li>
        <li><a href="#hoidaDashboard">Hoida</a></li>
        <li><a href="#pausheDashboard">Paushe</a></li>
    </ul>

    <div id="magarcedesDashboard" class="dashboard"></div>
    <div id="hoidaDashboard" class="dashboard"></div>
    <div id="pausheDashboard" class="dashboard"></div>
</div>
```

<a id="tile_manager_steps_ds"></a>Create the Data Source - we are adding the classes `CarData` and `Info`, and initialize the three car brands data. We are storing everything in the `Cars` array.

**In TypeScript:**
```typescript
/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />

class Info {
    description: string
    constructor(_description: string) {
        this.description = _description;
    }
}

class CarData {
    name: string;
    picture: string;
    priceRange: string;
    extras: Info[];
    constructor(_name: string, _picture: string, _priceRange: string, _extras: Info[]) {
        this.name = _name;
        this.picture = _picture;
        this.priceRange = _priceRange;
        this.extras = _extras;
    }

    addExtra(_extra) {
        this.extras.push(_extra);
    }
}

var Magarcedes: CarData[] = [];
Magarcedes.push(new CarData("2013 LSL AMG", "../../images/samples/tile-manager/car-dealership/shutterstock_139519967.jpg",
    "$199,500 - $206,000", [new Info("0-100 in 3.8 seconds"), new Info("Top speed: 317 km/h")]));
...

var Hoida: CarData[] = [];
Hoida.push(new CarData("2013 Candy", "../../images/samples/tile-manager/car-dealership/shutterstock_57034834.jpg",
    "$21,661 - $29,404", [new Info("Gas I4 2.5L engine"), new Info("Highway fuel efficiency 35 mpg")]));
...

var Paushe: CarData[] = [];
Paushe.push(new CarData("2013 CST", "../../images/samples/tile-manager/car-dealership/shutterstock_38288989.jpg",
    "$39,095 - $59,090", [new Info("Available All Wheel Drive"), new Info("Available touch-screen glide-up navigation with voice recognition"),
        new Info("Leather seating surfaces"), new Info("Adaptive Remote Start")]));
...

var Cars: CarData[][] = [];
Cars.push(Magarcedes);
Cars.push(Hoida);
Cars.push(Paushe);
```

<a id="tile_manager_steps_tm"></a>Create the igTileManager - we are creating the `igTileManager` and the tabs. Then we preselect the first car brand and set the tabs to update the `igTileManager` data source when a tab is selected.

**In TypeScript:**
```typescript
$(function () {
    var activated: boolean[] = [false, false, false, false],
    options: IgTileManager = {
            columnWidth: 210,
            columnHeight: 210,
            marginLeft: 10,
            marginTop: 10,
            dataSource: Cars,
            items: [
                { rowIndex: 0, colIndex: 0, rowSpan: 2, colSpan: 2 },
                { rowIndex: 0, colIndex: 2, rowSpan: 1, colSpan: 1 },
                { rowIndex: 1, colIndex: 2, rowSpan: 1, colSpan: 1 },
                { rowIndex: 2, colIndex: 0, rowSpan: 1, colSpan: 1 },
                { rowIndex: 2, colIndex: 1, rowSpan: 1, colSpan: 1 },
                { rowIndex: 2, colIndex: 2, rowSpan: 1, colSpan: 1 }
            ],
            maximizedTileIndex: 0,
            maximizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" /></figure><ul><li>Price: ${priceRange}</li>' +
            '{{each ${extras} }}<li>${extras.description}</li>{{/each}}</ul>',
            minimizedState: '<figure><figcaption>${name}</figcaption><img src="${picture}" title="${Name}" alt="error" />'
        };

    // First time initialization of the tab that will be shown on page load
    options.dataSource = Cars[0];
    activated[0] = true;
    $('#magarcedesDashboard').igTileManager(options);

    var tabOptions: JQueryUI.TabsOptions = {
        activate: function (event, ui) {
            var index = ui.newTab.index();
            if (!activated[index]) {
                options.dataSource = Cars[index];
                ui.newPanel.igTileManager(options);
                activated[index] = true;
            } else {
                ui.newPanel.igTileManager('reflow');
            }
        }
    }

    $('#car-tabs').tabs(tabOptions);
});
```

### <a id="dialog_window_sample"></a>Dialog Window Sample
This sample will demonstrate how we can use `igDialog` with TypeScript

#### <a id="dialog_window_sample_preview"></a>Preview
The following screenshot is a preview of the final result.

![](images/igDialog_TypeScript.png)

####<a id="dialog_window_steps_html"></a>Details
Create the HTML - we are going to show the Infragistics' site inside the `igDialog`.

**In HTML:**
```html
<button id="openDialog"></button>

    <div id="dialog">
            <iframe src="http://www.infragistics.com" frameborder="0" width= "100%" height="100%"></iframe>
    </div>
```

<a id="dialog_window_steps_ts"></a>Create the igDialog - we are creating the `igDialog` in closed state. Then we attach an event handler function for the `click` event to the button so that the modal dialog window will open when the button is clicked.

**In TypeScript:**
```typescript
$(function () {

    // Initialize the open button with igButton
    $("#openDialog").igButton({ labelText: "Open Dialog" });

    // Initialize the igDialog
    $("#dialog").igDialog({
        state: "closed",
        modal: true,
        draggable: false,
        resizable: false,
        height: 500,
        width: 400
    });

    $("#openDialog").on({
        click: function (e) {
            // Open the igDialog
            $("#dialog").igDialog("open");
        }
    });
});
```

### <a id="templating_engine_sample"></a>Templating Engine Sample
This sample will demonstrate how we can use the `igTemplatingEngine` with TypeScript

#### <a id="templating_engine_preview"></a>Preview
The following screenshot is a preview of the final result.

![](images/igTemplating_TypeScript.png)

####<a id="templating_engine_steps"></a>Details
Create the HTML - This sample demonstrates how to use nested templates using the Infragistics Templating Engine in TypeScript. In this example the movies collection for each actor is iterated through and a Tree is used to display the movies data.

**In HTML:**
```html
<script id="colTmpl" type="text/template">
    <div class='tree'>
        <ul>
            {{each ${movies} }}
            <li>
                ${movies.name}
                <ul>
                    <li>Genre: ${movies.genre}</li>
                    <li>Year: ${movies.year}</li>
                    <li>
                        <a>
                            <span class='ratingLabel' style='float:left'>Rating:</span>
                            <span class='rating'>${movies.rating}</span>
                        </a>
                    </li>
                    <li class='clear'>Languages: ${movies.languages}</li>
                    <li>Subtitles: ${movies.subtitles}</li>
                </ul>
            {{/each}}
        </ul>
    </div>
</script>

<div id="resultGrid"></div>
```

We are adding the classes `Movie` and `Actor`, and initialize the movies and actors data. 

**In TypeScript:**
```typescript
/// <reference path="http://www.igniteui.com/js/typings/jquery.d.ts" />
/// <reference path="http://www.igniteui.com/js/typings/jqueryui.d.ts" />
/// <reference path="http://www.igniteui.com/js/typings/igniteui.d.ts" />

class Movie {
    name: string;
    year: number;
    genre: string;
    rating: number;
    languages: string;
    subtitles: string;
    constructor(inName: string, inYear: number, inGenre: string, inRating: number, inLanguage: string, inSubs: string) {
        this.name = inName;
        this.year = inYear;
        this.genre = inGenre;
        this.rating = inRating;
        this.languages = inLanguage;
        this.subtitles = inSubs;
    }
}

class Actor {
    firstName: string;
    lastName: string;
    nationality: Object;
    movies: Movie[];
    constructor(inFirstName: string, inLastName: string, inNationality: Object, inMoviesArray: Movie[]) {
        this.firstName = inFirstName;
        this.lastName = inLastName;
        this.nationality = inNationality;
        this.movies = inMoviesArray;
    }
}

var moviesDWashington: Movie[] = [];
moviesDWashington.push(new Movie("American Gangster", 2007, "Biography, Crime, Drama", 7.9, "English, German", "Japanese, English"));

var moviesAJolie: Movie[] = [];
moviesAJolie.push(new Movie("In the Land of Blood and Honey", 2011, "Drama, Romance, War", 3.2, "English", "English, French"));

var moviesPCruz: Movie[] = [];
moviesPCruz.push(new Movie("Sahara", 2005, "Action, Adventure, Comedy", 5.9, "English, Spanish", "Japanese, French"));

var moviesGClooney: Movie[] = [];
moviesGClooney.push(new Movie("Ocean's Thirteen", 2007, "Crime, Thriller", 6.9, "English", "Spanish, French"));

var moviesJRoberts: Movie[] = [];
moviesJRoberts.push(new Movie("Eat Pray Love", 2010, "Drama, Romance", 5.3, "English, German", "Spanish, French"));

var actors: Actor[] = [];
actors.push(new Actor("Denzel", "Washington", { key: "USA", value: "USA" }, moviesDWashington));
```

After that we initialize the `igGrid` and the `igTree` controls

**In TypeScript:**
```typescript
$(function () {
    var i = 0, currentValue, limit,
        imagesRoot = "http://www.igniteui.com/images/samples/templating-engine/multiConditionalColTemplate";

    $("#resultGrid").igGrid({
        dataSource: actors,
        width: "100%",
        autoGenerateColumns: false, 
        columns: [
            { headerText: "First Name", key: "firstName", width: 100 },
            { headerText: "Last Name", key: "lastName", width: 200 },
            { headerText: "Nationality", key: "nationality", width: 100, template: "<img width='20' height='15' src='" + imagesRoot + "/${nationality.key}.gif' /> ${nationality.value} " },
            { headerText: "Movies", key: "movies", width: 500, template: $("#colTmpl").html() },
        ],
        rendered: function () {
            initializeInnerControls();
        },
        features: [
            {
                name: "Paging",
                type: "local",
                pageSize: 3,
                pageSizeChanged: function () {
                    initializeInnerControls();
                },
                pageIndexChanged: function () {
                    initializeInnerControls();
                }
            }
        ]
    }); 

    function initializeInnerControls() {
        $(".tree").igTree({ hotTracking: false });
        limit = $('.rating').length;
        for (i = 0; i < limit; i++) {
            currentValue = parseFloat($($('.rating')[i]).html());
            $($('.rating')[i]).igRating({
                voteCount: 10,
                value: currentValue,
                valueAsPercent: false,
                precision: "exact"
            });
        }
    }
});
```

### <a id="pie_chart_sample"></a>Pie Chart Sample
This sample will demonstrate the use of TypeScript for creating Pie Chart control with a legend and different options for the layout.
#### <a id="pie_chart_preview"></a>Preview
The following screenshot is a preview of the final result.

![](images/igPieChart_TypeScript.png)

#### <a id="pie_chart_details"></a></a>Details

Create the HTML - we are going to create Pie Chart with the ability to set different options for the layout, which includes label positions, lines, angles, radius and legend.

**In HTML:**
```html
<div id="pieChart"></div>
    <div id="legend"></div>

    <table class="options">
        <tr>
            <td>Start Angle:</td>
            <td>
                <div id="angle" class="slider"></div>
            </td>
        </tr>
        <tr>
            <td>Radius:</td>
            <td>
                <div id="radius" class="slider"></div>
            </td>
        </tr>
        <tr>
            <td>Label Position:</td>
            <td>
                <div class="comboContainer">
                    <select id="labelPosition">
                        <option value="none">None</option>
                        <option value="center">Center</option>
                        <option value="insideEnd">Inside End</option>
                        <option value="outsideEnd" selected="selected">Outside End</option>
                        <option value="bestFit">Best Fit</option>
                    </select>
                </div>
            </td>
        </tr>
        <tr>
            <td>Leader Line:</td>
            <td>
                <div class="comboContainer">
                    <select id="leaderLine">
                        <option value="straight" selected="selected">Straight</option>
                        <option value="arc">Arc</option>
                        <option value="spline">Spline</option>
                    </select>
                </div>
            </td>
        </tr>
    </table>
```

Create the Data Source - we are adding the class `PieChartCountryPopulation`, and initialize the country population data data. We are storing everything in the `PieChartCountryPopulation` array.

**In TypeScript:**
```typescript
/// <reference path="../../js/typings/jquery.d.ts" />
/// <reference path="../../js/typings/jqueryui.d.ts" />
/// <reference path="../../js/typings/igniteui.d.ts" />

class PieChartCountryPopulation {
    countryName: string;
    population2008: number;
    constructor(inName: string, populationIn2008: number) {
        this.countryName = inName;
        this.population2008 = populationIn2008;
    }
}

var pieChartSample: PieChartCountryPopulation[] = [];
pieChartSample.push(new PieChartCountryPopulation("China", 1333));
pieChartSample.push(new PieChartCountryPopulation("India", 1140));
pieChartSample.push(new PieChartCountryPopulation("United States", 304));
pieChartSample.push(new PieChartCountryPopulation("Indonesia", 228));
pieChartSample.push(new PieChartCountryPopulation("Brazil", 192));
```

Create the igPieChart - we are creating the `igPieChart` and all other relevant controls like `igCombo` and `slider` in order to configure the layout.

```typescript
$(function () {
    $('#pieChart').igPieChart({
        dataSource: pieChartSample,
        width: "430px",
        height: "430px",
        dataLabel: 'countryName',
        dataValue: 'population2008',
        explodedSlices: [2, 3, 4],
        radiusFactor: .6,
        startAngle: -30,
        labelsPosition: "outsideEnd",
        leaderLineType: "straight",
        labelExtent: 40,
        legend: { element: 'legend', type: "item" }
    });

    $("#angle").slider({
        slide: function (event, ui) {
            $("#pieChart").igPieChart("option", "startAngle", ui.value);
        },
        min: 0,
        max: 360
    });

    $("#radius").slider({
        slide: function (event, ui) {
            $("#pieChart").igPieChart("option", "radiusFactor", ui.value / 1000.0);
        },
        min: 0,
        max: 1000,
        value: 600
    });

    $("#labelPosition").igCombo({
        enableClearButton: false,
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            if ($.isArray(ui.items) && ui.items[0] != undefined) {
                $("#pieChart").igPieChart("option", "labelsPosition", ui.items[0].data.value);

                $("#labelExtent").slider("option", "disabled", ui.items[0].data.value != "outsideEnd");
                $("#leaderLine").igCombo("option", "disabled", ui.items[0].data.value != "outsideEnd" ? true : false);
            }
        }
    });

    $("#leaderLine").igCombo({
        enableClearButton: false,
        mode: "dropdown",
        selectionChanged: function (evt, ui) {
            if ($.isArray(ui.items) && ui.items[0] != undefined) {
                $("#pieChart").igPieChart("option", "leaderLineType", ui.items[0].data.value);
            }
        }
    });
});
```

### <a id="related_content"></a>Related Content
The following topic provides additional information related to this one:

[Using Ignite UI with TypeScript](Using-Ignite-UI-with-TypeScript.html) - This topic contains an overview for using the Ignite UI type definitions for TypeScript.
