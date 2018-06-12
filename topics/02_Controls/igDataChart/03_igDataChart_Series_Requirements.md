<!--
|metadata|
{
    "fileName": "igdatachart-series-requirements",
    "controlName": "",
    "tags": []
}
|metadata|
-->

# Series Requirements



The `igDataChart`™ control supports a number of various series, and some of these series require specific axis types and data mapping in order for them to render correctly on the chart plot area.

### Overview


The topic is organized as follows:

-   [Requirements for Category Series](#category)
-   [Requirements for Range Series](#range)
-   [Requirements for Stacked Series](#stacked)
-   [Requirements for Scatter Series](#scatter)
-   [Requirements for Polar and Radial Series](#polar-and-radial)
-   [Requirements for Financial Series](#financial)

## <a id="category"></a>Requirements for Category Series


The table below shows what axis types can be used with Category Series in the `igDataChart` control. This table indicates also the data members that are required by these series.

<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="7" align="center">Axis Types</th> 
                <th colspan="1" align="center">Series Property</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericX</th>
                <th>numericY</th>
                <th>categoryX</th>
                <th>categoryY</th>
                <th>time</th>
                <th>ordinalTimeX</th>
                <th>percentChangeY</th>
                <th>valueMemberPath</th> 
            </tr>
            <tr>
                <td>Area </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Bar </td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Column </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Line </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Point </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>Spline </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Spline Area </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Step Area </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Step Line </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>Waterfall </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            </tr>
        </tbody>
    </table>
</div>
 

## <a id="range"></a>Requirements for Range Series

The table below shows what axis types can be used with Range Series in the `igDataChart` control. This table indicates also the data members that are required by these series.

<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="5" align="center">Axis Types</th> 
                <th colspan="2" align="center">MemberPath Properties</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericY</th>
                <th>categoryX</th>
                <th>time</th> 
                <th>ordinalTimeX</th>
                <th>percentChangeY</th>
                <th>high</th>
                <th>low</th>
            </tr>
            <tr>
                <td>rangeArea </td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>rangeColumn </td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
        </tbody>
    </table>
</div>


## <a id="stacked"></a>Requirements for Stacked Series

The table below shows what axis types can be used with Stacked Series in the `igDataChart` control. This table indicates also the data members that are required by these series.

<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="5" align="center">Axis Types</th> 
                <th colspan="1" align="center">MemberPath Property</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericX</th>
                <th>numericY</th>
                <th>categoryX</th>
                <th>categoryY</th>
                <th>time</th>
                <th>value</th>
            </tr>
            <tr>
                <td>stackedArea </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stackedBar </td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td> 
            </tr>
            <tr>
                <td>stackedColumn </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stackedLine </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
            <tr>
                <td>stackedSpline </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stackedSplineArea </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Area </td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Bar </td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Column </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Line </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Spline </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
            <tr>
                <td>stacked100-Spline Area </td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>> 
            </tr>
        </tbody>
    </table>
</div>


## <a id="scatter"></a>Requirements for Scatter Series 


The table below shows what axis types can be used with Scatter Series in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="3" align="center">Axis Types</th> 
                <th colspan="6" align="center">MemberPath Properties</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericY</th>
                <th>numericX</th> 
                <th>percentChangeY</th>
                <th>x</th>
                <th>y</th>
                <th>radius</th>
                <th>fill</th>
                <th>value</th>
                <th>shape</th>
            </tr>
            <tr>
                <td>scatterPoint</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>scatterLine</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>scatterSpline</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>scatterBubble</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td>&#9210;</td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;*</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>scatterHD</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td></td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>scatterArea</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td></td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td> 
            </tr>
            <tr>
                <td>scatterContour</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td></td> 
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>scatterPolygon</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td></td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>scatterPolyline</td>
                <td>&#9210;</td>
                <td>&#9210;</td> 
                <td></td> 
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
        </tbody>
    </table>
</div>

## <a id="polar-and-radial"></a>Requirements for Polar and Radial Series


The table below shows what axis types can be used with Polar Series and Radial Series in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="3" align="center">Axis Types</th> 
                <th colspan="2" align="center">MemberPath Properties</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericRadius</th>
                <th>numericAngle</th>
                <th>categoryAngle</th>
                <th>value</th>
                <th>angle</th>
                <th>radius</th>
            </tr>
            <tr>
                <td>polarArea</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>polarLine</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>polarScatter</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>polarSplineArea</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>polarSpline</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>radialArea</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>radialColumn</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>radialLine</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>radialPie</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>

## <a id="financial"></a>Requirements for Financial Series


The table below shows what axis types can be used with Financial Price Series and Financial Indicators in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th> </th>
                <th colspan="6" align="center">Axis Types</th> 
                <th colspan="5" align="center"> MemberPath Properties</th> 
            </tr>
            <tr>
                <th>Series Type</th>
                <th>numericY</th> 
                <th>categoryX</th>
                <th>time</th>
                <th>ordinalTimeX</th>
                <th>percentChangeY</th>
                <th>high</th>
                <th>low</th>
                <th>open</th>
                <th>close</th>
                <th>volume</th>
            </tr>
            <tr>
                <td>FinancialPrice</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>AbsoluteVolumeOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>AccumulationDistributionIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>AverageDirectionalIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>AverageTrueRangeIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>BollingerBandsOverlay</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>BollingerBandWidthIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>ChaikinOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>ChaikinVolatilityIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>CommodityChannelIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>DetrendedPriceOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>EaseOfMovementIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>FastStochasticOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>ForceIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>FullStochasticOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>MarkerFacilitationIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>MassIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>MedianPriceIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>MoneyFlowIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>MovingAverageConvergenceDivergenceIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>NegativeVolumeIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>OnBalanceVolumeIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>PercentagePriceOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>PercentageVolumeOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>PositiveVolumeIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>PriceVolumeTrendIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td>&#9210;</td>
            </tr>
            <tr>
                <td>PriceChannelOverlay</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>RateOfChangeAndMomentumIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>RelativeStrengthIndexIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>SlowStochasticOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>StandardDeviationIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>StochRSIIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>TRIXIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td></td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>TypicalPriceIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>UltimateOscillatorIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>WeightedCloseIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
            <tr>
                <td>WilliamsPercentRIndicator</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td>&#9210;</td>
                <td></td>
                <td>&#9210;</td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>