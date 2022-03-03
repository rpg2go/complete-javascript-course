const dataSource = [
    {
        state: 'Illinois',
        year2016: 803,
        year2017: 823,
        year2018: 863,
    },
    {
        state: 'Indiana',
        year2016: 316,
        year2017: 332,
        year2018: 332,
    },
    {
        state: 'Michigan',
        year2016: 452,
        year2017: 459,
        year2018: 470,
    },
    {
        state: 'Ohio',
        year2016: 621,
        year2017: 642,
        year2018: 675,
    },
    {
        state: 'Wisconsin',
        year2016: 290,
        year2017: 294,
        year2018: 301,
    },
];

function loadChart() {
    console.log('start preparing chart');
    $('#chart').dxChart({
        dataSource,
        commonSeriesSettings: {
            argumentField: 'state',
            type: 'bar',
            hoverMode: 'allArgumentPoints',
            selectionMode: 'allArgumentPoints',
            label: {
                visible: true,
                format: {
                    type: 'fixedPoint',
                    precision: 0,
                },
            },
        },
        series: [
            { valueField: 'year2018', name: '2018' },
            { valueField: 'year2017', name: '2017' },
            { valueField: 'year2016', name: '2016' },
        ],
        title: 'Gross State Product within the Great Lakes Region',
        legend: {
            verticalAlignment: 'bottom',
            horizontalAlignment: 'center',
        },
        export: {
            enabled: true,
        },
        onPointClick(e) {
            e.target.select();
        },
    });

    console.log('end preparing chart');
}

loadChart();
