// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var pageInfectedObj = {
    charHeight: mobileCheck()?280:360,
    colorBars: '#c11a1c',
    colorLine: '#000000',
    getMaxOfArray: function (numArray) {
        return Math.max.apply(null, numArray);
    },
    init: function() {
        var me=this;
        var HighchartsVsfTheme = {
            colors: [me.colorBars, me.colorLine],
        };
        Highcharts.setOptions(HighchartsVsfTheme);
        Highcharts.chart('container-deaths-acumulated', {
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
            yAxis: [{ // Primary yAxis
                labels: {
                    format: '{value}',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                title: {
                    text: 'Deaths acumulated',
                    style: {
                        color: Highcharts.getOptions().colors[1]
                    }
                },
                min:0,
                max:me.getMaxOfArray(seriesDeathsAcumulated),
                opposite: true
            }, ],
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
                name: 'Deaths acumulated',
                type: 'spline',
                yAxis: 0,
                data: seriesDeathsAcumulated,
                tooltip: {
                    valueSuffix: ''
                }

            }]
        });
    }
}


pageInfectedObj.init();

