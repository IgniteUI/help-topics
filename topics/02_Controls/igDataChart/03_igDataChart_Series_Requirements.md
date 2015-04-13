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

###Overview


The topic is organized as follows:

-   [Requirements for Category Series](#category)
-   [Requirements for Scatter Series](#scatter)
-   [Requirements for Polar and Radial Series](#polar-and-radial)
-   [Requirements for Financial Series](#financial)

##<a id="category"></a>Requirements for Category Series


Table 1 below shows what axis types can be used with Category Series in the `igDataChart` control. This table indicates also the data members that are required by these series.

<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>Series Type</th>

                <th>numericXAxis</th>

                <th>numericYAxis</th>

                <th>categoryXAxis</th>

                <th>categoryYAxis</th>

                <th>categoryDateTimeXAxis</th>

                <th>valueMemberPath</th>

                <th>highMemberPath</th>

                <th>lowMemberPath</th>
            </tr>

            <tr>
                <td>Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Bar Series</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Column Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Line Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Point Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Range Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>Range Column Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>Spline Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Spline Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Bar Series</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Column Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Line Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Spline Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked Spline Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Area Series</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Bar Series</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Column Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Line Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Spline Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Stacked 100-Spline Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X*</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Step Area Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Step Line Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>Waterfall Series</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>
        </tbody>
    </table>
</div>

##<a id="scatter"></a>Requirements for Scatter Series 


Table 2 below shows what axis types can be used with Scatter Series in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>Series Type</th>

                <th>numericYAxis</th>

                <th>numericXAxis</th>

                <th>categoryXAxis</th>

                <th>categoryDateTimeXAxis</th>

                <th>xMemberPath</th>

                <th>yMemberPath</th>

                <th>labelMemberPath</th>

                <th>fillMemberPath</th>

                <th>radiusMemberPath</th>
            </tr>

            <tr>
                <td>ScatterSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>ScatterLineSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>ScatterSplineSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>BubbleSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>HighDensityScatterSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>
        </tbody>
    </table>
</div>

##<a id="polar-and-radial"></a>Requirements for Polar and Radial Series


Table 3 below shows what axis types can be used with Polar Series and Radial Series in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>Series Type</th>

                <th>numericRadiusAxis</th>

                <th>numericAngleAxis</th>

                <th>categoryAngleAxis</th>

                <th>valueMemberPath</th>

                <th>angleMemberPath</th>

                <th>radiusMemberPath</th>
            </tr>

            <tr>
                <td>PolarAreaSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PolarLineSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PolarScatterSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PolarSplineAreaSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PolarSplineSeries</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>RadialAreaSeries</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>RadialColumnSeries</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>RadialLineSeries</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>RadialPieSeries</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>
            </tr>
        </tbody>
    </table>
</div>

##<a id="financial"></a>Requirements for Financial Series


Table 4 below shows what axis types can be used with Financial Price Series and Financial Indicators in the `igDataChart` control. This table indicates also the data members that are required by these series.
<div class="document-table-container">
    <table class="table table-striped">
        <tbody>
            <tr>
                <th>Series Type</th>

                <th>numericYAxis</th>

                <th>numericXAxis</th>

                <th>categoryXAxis</th>

                <th>categoryDateTimeXAxis</th>

                <th>highMemberPath</th>

                <th>lowMemberPath</th>

                <th>openMemberPath</th>

                <th>closeMemberPath</th>

                <th>volumeMemberPath</th>
            </tr>

            <tr>
                <td>FinancialPriceSeries</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>AbsoluteVolumeOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>
            </tr>

            <tr>
                <td>AccumulationDistributionIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>AverageDirectionalIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>AverageTrueRangeIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>BollingerBandsOverlay</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>BollingerBandWidthIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>ChaikinOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>ChaikinVolatilityIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>CommodityChannelIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>DetrendedPriceOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>EaseOfMovementIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>
            </tr>

            <tr>
                <td>FastStochasticOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>ForceIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>FullStochasticOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>MarkerFacilitationIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>MassIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>MedianPriceIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>MoneyFlowIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>MovingAverageConvergenceDivergenceIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>NegativeVolumeIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>OnBalanceVolumeIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PercentagePriceOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td>X</td>
            </tr>

            <tr>
                <td>PercentageVolumeOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>
            </tr>

            <tr>
                <td>PositiveVolumeIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PriceVolumeTrendIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td>X</td>
            </tr>

            <tr>
                <td>PriceChannelOverlay</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>
            </tr>

            <tr>
                <td>RateOfChangeAndMomentumIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>RelativeStrengthIndexIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>SlowStochasticOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>StandardDeviationIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>StochRSIIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>TRIXIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td></td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>TypicalPriceIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>UltimateOscillatorIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>WeightedCloseIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>

            <tr>
                <td>WilliamsPercentRIndicator</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td>X</td>

                <td></td>

                <td>X</td>

                <td></td>
            </tr>
        </tbody>
    </table>
</div>

 


