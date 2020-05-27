// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var pageObj = {
    init: function() {
        Highcharts.getOptions().colors=["#f45b5b",
            "#8085e9",
            "#8d4654", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"];

        var data = [
            ['eu', 0],
            ['oc', 1],
            ['af', 2],
            ['as', 3],
            ['na', 4],
            ['sa', 5]
        ];

        //data es de la forma {key: "fo", value: 0}
        var data=[];
        data.push({key:"es",value:900});

// Create the chart
        Highcharts.mapChart('container', {
            chart: {
                height: (9 / 16 * 100) + '%' // 16:9 ratio,
            },
            title: null,
            subtitle: null,
            mapNavigation: {
                enabled: true,
                /*
                buttonOptions: {
                    verticalAlign: 'bottom'
                }
                */

            },
            legend: {
                layout: 'vertical',
                align: 'left',
                verticalAlign: 'bottom',
                floating:true
            },
            colorAxis: {
                min: 0,
                stops: [
                    [0, '#EFEFFF'],
                    [0.1, '#ff8c93'],
                    [0.25, '#ff0000'],
                    [0.5, Highcharts.color('#ff0000').brighten(-0.2).get()],
                    [0.75, Highcharts.color('#ff0000').brighten(-0.4).get()],
                    [1, Highcharts.color('#ff0000').brighten(-0.5).get()]
                ]

            },
            tooltip: {
                useHTML: true,
                headerFormat: '',
                pointFormat: $("#map-point-html").html().replace('imgReplace','img'),
                followPointer: false
            },
            plotOptions: {
                series: {
                    point: {
                        events: {
                            click: function () {
                                var text = '<b>Clicked point</b><br>Series: ' + this.series.name +
                                    '<br>Point: ' + this.name + ' (' + this.value + '/km�)',
                                    chart = this.series.chart;
                                console.log(this.key);
                                window.location.href="/detail/"+this.key;
                            }
                        }
                    }
                }
            },
            series: [{
                data:countryData,
                mapData: mapGeoJSON,
                joinBy: ['hc-key', 'key'],
                //data: data,
                name: 'Covid data',
                states: {
                    hover: {
                        //color: '#BADA55'
                    }
                },
                dataLabels: {
                    enabled: true,
                    //Texto en el mapa con el nombre del pais
                    //format: '{point.name}'
                    format: ''
                }
            }]
        });
    }
}


pageObj.init();

