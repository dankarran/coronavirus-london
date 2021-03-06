let data = {

    dataUpdated: '28 May 2020',

    /* Extrapolation setup */
    displayCaseExtrapolation: true,
    fatality: 1,
    fatalityOptions: [
        {
            'label': 'Low estimates',
            'options': [
                {
                    value: 0.1,
                    label: '0.1%'
                },
                {
                    value: 0.2,
                    label: '0.2%'
                },
                {
                    value: 0.3,
                    label: '0.3%'
                },
                {
                    value: 0.4,
                    label: '0.4%'
                }
            ]
        },
        {
            'label': 'More likely estimates',
            'options': [
                {
                    value: 0.5,
                    label: '0.5%'
                },
                {
                    value: 0.6,
                    label: '0.6%'
                },
                {
                    value: 0.7,
                    label: '0.7%'
                },
                {
                    value: 0.8,
                    label: '0.8%'
                },
                {
                    value: 0.9,
                    label: '0.9%'
                },
                {
                    value: 1,
                    label: '1%'
                },
                {
                    value: 1.1,
                    label: '1.1%'
                },
                {
                    value: 1.2,
                    label: '1.2%'
                },
                {
                    value: 1.3,
                    label: '1.3%'
                },
                {
                    value: 1.4,
                    label: '1.4%'
                },
                {
                    value: 1.5,
                    label: '1.5%'
                },
                {
                    value: 1.6,
                    label: '1.6%'
                },
                {
                    value: 1.7,
                    label: '1.7%'
                },
                {
                    value: 1.8,
                    label: '1.8%'
                },
                {
                    value: 1.9,
                    label: '1.9%'
                },
                {
                    value: 2,
                    label: '2%'
                }
            ]
        },
        {
            'label': 'High estimates',
            'options': [
                {
                    value: 2.5,
                    label: '2.5%'
                },
                {
                    value: 3,
                    label: '3%'
                },
                {
                    value: 4,
                    label: '4%'
                },
                {
                    value: 5,
                    label: '5%'
                },
                {
                    value: 10,
                    label: '10%'
                },
                {
                    value: 15,
                    label: '15%'
                }
            ]
        }
    ],
    delay: 21,
    delayOptions: [
        {
            value: 14,
            label: '2 weeks'
        },
        {
            value: 21,
            label: '3 weeks'
        },
        {
            value: 28,
            label: '4 weeks'
        }
    ],
    population: 8982000,

    /* Chart setup */
    chartType: 'bar',
    chartData: {
        labels: [
            '2020-02-01',
            '2020-02-02',
            '2020-02-03',
            '2020-02-04',
            '2020-02-05',
            '2020-02-06',
            '2020-02-07',
            '2020-02-08',
            '2020-02-09',
            '2020-02-10',
            '2020-02-11',
            '2020-02-12',
            '2020-02-13',
            '2020-02-14',
            '2020-02-15',
            '2020-02-16',
            '2020-02-17',
            '2020-02-18',
            '2020-02-19',
            '2020-02-20',
            '2020-02-21',
            '2020-02-22',
            '2020-02-23',
            '2020-02-24',
            '2020-02-25',
            '2020-02-26',
            '2020-02-27',
            '2020-02-28',
            '2020-02-29',
            '2020-03-01',
            '2020-03-02',
            '2020-03-03',
            '2020-03-04',
            '2020-03-05',
            '2020-03-06',
            '2020-03-07',
            '2020-03-08',
            '2020-03-09',
            '2020-03-10',
            '2020-03-11',
            '2020-03-12',
            '2020-03-13',
            '2020-03-14',
            '2020-03-15',
            '2020-03-16',
            '2020-03-17',
            '2020-03-18',
            '2020-03-19',
            '2020-03-20',
            '2020-03-21',
            '2020-03-22',
            '2020-03-23',
            '2020-03-24',
            '2020-03-25',
            '2020-03-26',
            '2020-03-27',
            '2020-03-28',
            '2020-03-29',
            '2020-03-30',
            '2020-03-31',
            '2020-04-01',
            '2020-04-02',
            '2020-04-03',
            '2020-04-04',
            '2020-04-05',
            '2020-04-06',
            '2020-04-07',
            '2020-04-08',
            '2020-04-09',
            '2020-04-10',
            '2020-04-11',
            '2020-04-12',
            '2020-04-13',
            '2020-04-14',
            '2020-04-15',
            '2020-04-16',
            '2020-04-17',
            '2020-04-18',
            '2020-04-19',
            '2020-04-20',
            '2020-04-21',
            '2020-04-22',
            '2020-04-23',
            '2020-04-24',
            '2020-04-25',
            '2020-04-26',
            '2020-04-27',
            '2020-04-28',
            '2020-04-29',
            '2020-04-30',
            '2020-05-01',
            '2020-05-02',
            '2020-05-03',
            '2020-05-04',
            '2020-05-05',
            '2020-05-06',
            '2020-05-07',
            '2020-05-08',
            '2020-05-09',
            '2020-05-10',
            '2020-05-11',
            '2020-05-12',
            '2020-05-13',
            '2020-05-14',
            '2020-05-15',
            '2020-05-16',
            '2020-05-17',
            '2020-05-18',
            '2020-05-19',
            '2020-05-20',
            '2020-05-21',
            '2020-05-22',
            '2020-05-23',
            '2020-05-24',
            '2020-05-25',
            '2020-05-26',
            '2020-05-27'
        ],
        datasets: []
    },
    chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    type: 'time',
                    time: {
                        unit: 'week',
                        isoWeekday: true
                    }
                }
            ],
            yAxes: [
                {
                    id: 'left',
                    type: 'linear',
                    position: 'left',
                    scaleLabel: {
                        display: true,
                        labelString: 'Count'
                    }
                },
                {
                    id: 'right',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        max: 110
                    },
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'Percent'
                    }
                }
            ]
        },
        legend: {
            position: 'bottom',
            labels: {
                boxWidth: 12
            }
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label: function(tooltipItem, data) {
                    var label = data.datasets[tooltipItem.datasetIndex].label || '';

                    if (label === 'Events') {
                        // TODO: get details
                        label += ' (see below)';
                    }
                    else {
                        if (label) {
                            label += ': ';
                        }
                        label += tooltipItem.yLabel;

                        if (data.datasets[tooltipItem.datasetIndex].yAxisID === 'right') {
                            label += '%';
                        }
                    }

                    return label;
                }
            }
        }
    },
    sources: {
        cases: {
            url: './data/phe/london.json',
            key: 'date',
            fields: [
                {
                    name: 'cases',
                    label: 'Confirmed cases',
                    options: {
                        backgroundColor: '#007bff',
                        order: 0
                    }
                }
            ]
        },
        deaths: {
            url: './data/nhs/deaths-london.json',
            key: 'date',
            fields: [
                {
                    name: 'deaths_occurence',
                    label: 'Deaths',
                    options: {
                        backgroundColor: '#ffc107',
                        order: 2
                    }
                }
            ]
        },
        events: {
            url: './data/events.json',
            key: 'date',
            fields: [
                {
                    name: 'display_at',
                    label: 'Events',
                    options: {
                        type: 'line',
                        showLine: false,
                        backgroundColor: '#8223ff',
                        order: 3
                    }
                }
            ]
        },
        other: [
            {
                url: './data/tfl/tfl.json',
                key: 'date',
                fields: [
                    {
                        name: 'percent',
                        label: 'TfL Tube usage',
                        options: {
                            type: 'line',
                            backgroundColor: '#fff',
                            borderColor: '#000',
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 0,
                            yAxisID: 'right',
                            order: 4
                        }
                    }
                ]
            },
            {
                url: './data/citymapper/london.json',
                key: 'date',
                fields: [
                    {
                        name: 'percent',
                        label: 'Citymapper Mobility Index',
                        options: {
                            type: 'line',
                            backgroundColor: '#fff',
                            borderColor: '#000',
                            borderWidth: 2,
                            borderDash: [4, 4],
                            fill: false,
                            pointRadius: 0,
                            yAxisID: 'right',
                            order: 5
                        }
                    }
                ]
            },
            {
                url: './data/phe/seroprevalence.json',
                key: 'date',
                fields: [
                    {
                        name: 'percent',
                        label: 'Blood donor seroprevalence',
                        options: {
                            type: 'line',
                            backgroundColor: '#fff',
                            borderColor: '#17a2b8',
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 0,
                            spanGaps: true,
                            yAxisID: 'right',
                            order: 6
                        }
                    }
                ]
            },
            {
                url: './data/nhs/people-in-hospital.json',
                key: 'date',
                fields: [
                    {
                        name: 'count',
                        label: 'People in hospital',
                        options: {
                            type: 'line',
                            backgroundColor: '#fff',
                            borderColor: '#ff3835',
                            borderWidth: 2,
                            fill: false,
                            pointRadius: 0,
                            order: 7
                        }
                    }
                ]
            }
        ]
    },

    /* Stats storage */
    stats: {
        cases: null,
        deaths: null,
        casesExtrapolated: null,
        populationPercent: null
    },

    /* Event data storage */
    eventsData: []
};