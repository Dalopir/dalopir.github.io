// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var pageDeathsObj = {
    getMaxOfArray: function (numArray) {
        return Math.max.apply(null, numArray);
    },
    init: function() {
        var me=this;
        Highcharts.chart('container-deaths', {
            chart: {
                zoomType: 'xy'
            },
            title: null,
            subtitle: null,
            xAxis: [{
                categories: dateSeriesAxis,
                crosshair: true
            }],
            yAxis: [{
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
                },
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
                }],
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

