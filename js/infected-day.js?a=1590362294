// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var pageInfectedObj = {
    getMaxOfArray: function (numArray) {
        return Math.max.apply(null, numArray);
    },
    init: function() {
        var me=this;
        Highcharts.chart('container-infected', {
            chart: {
                zoomType: 'xy'
            },
            title: null,
            subtitle: null,
            xAxis: [{
                categories: dateSeriesAxis,
                crosshair: true
            }],
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Reported cases',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                min:0,
                max:Math.max( me.getMaxOfArray(seriesInfected), me.getMaxOfArray(seriesInfectedMovingAverage)),
            }, { // Secondary yAxis
                title: {
                    text: 'Reported cases',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[0]
                    }
                },
                min:0,
                max:Math.max( me.getMaxOfArray(seriesInfected), me.getMaxOfArray(seriesInfectedMovingAverage)),
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
                name: 'Reported cases',
                type: 'column',
                yAxis: 0,
                data: seriesInfected,
                tooltip: {
                    valueSuffix: ''
                }

            }, {
                name: 'Moving average (7)',
                type: 'spline',
                data: seriesInfectedMovingAverage,
                yAxis: 0,
                tooltip: {
                    valueSuffix: ''
                }
            }]
        });
    }
}


pageInfectedObj.init();

