// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var pageDeathsObj = {
    charHeight: mobileCheck()?280:360,
    colorBars: '#c11a1c',
    colorLine: '#000000',
    getMaxOfArray: function (numArray) {
        return Math.max.apply(null, numArray);
    },
    getMinOfArray: function (numArray) {
        return Math.min.apply(null, numArray);
    },
    init: function() {
        var me=this;
        var HighchartsVsfTheme = {
            colors: [me.colorBars, me.colorLine],
        };
        Highcharts.setOptions(HighchartsVsfTheme);
        var yAxis =[{
            labels: {
                format: '{value}',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            title: {
                text: 'Deaths by day',
                style: {
                    color: Highcharts.getOptions().colors[1]
                }
            },
            min:Math.min( 0, me.getMinOfArray(seriesDeathMovingAverage) ),
            max:Math.max( me.getMaxOfArray(seriesDeath), me.getMaxOfArray(seriesDeathMovingAverage) ),
        }];
        if (!mobileCheck()) {
            yAxis.push(
                {
                    labels: {
                        format: '{value}',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    title: {
                        text: 'Deaths by day',
                        style: {
                            color: Highcharts.getOptions().colors[1]
                        }
                    },
                    min:0,
                    max:Math.max( me.getMaxOfArray(seriesDeath), me.getMaxOfArray(seriesDeathMovingAverage) ),
                    opposite: true
                }
            )
        }
        Highcharts.chart('container-deaths', {
            chart: {
                zoomType: 'xy',
                height: me.charHeight,
            },
            title: null,
            subtitle: null,
            xAxis: [{
                categories: dateSeriesAxis,
                crosshair: true
            }],
            yAxis: yAxis,
            tooltip: {
                shared: true
            },
            legend: {
                layout: 'vertical',
                align: 'left',
                x: 120,
                verticalAlign: 'top',
                y: 100,
                floating: true,
                backgroundColor:
                    Highcharts.defaultOptions.legend.backgroundColor || // theme
                    'rgba(255,255,255,0.25)'
            },
            series: [{
                    name: 'Deaths by day',
                    type: 'column',
                    yAxis: 0,
                    data: seriesDeath,
                    tooltip: {
                        valueSuffix: ''
                    }

                },
                {
                    name: 'Moving average (7)',
                    type: 'spline',
                    yAxis: 0,
                    data: seriesDeathMovingAverage,
                    tooltip: {
                        valueSuffix: ''
                    }

                }]
        });
    }
}


pageDeathsObj.init();

