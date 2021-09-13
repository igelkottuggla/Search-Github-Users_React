import React from 'react';
import ReactFC from 'react-fusioncharts';
import FusionCharts from 'fusioncharts';
import Chart from 'fusioncharts/fusioncharts.charts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: 'pie3d',
        width: '100%',
        height: '400',
        dataFormat: 'json',
        dataSource: {
            chart: {
                caption: 'Languages',
                theme: 'fusion',
                decimals: 0,
                pieRadius: '40%',
                paletteColors: [
                    '#33b524',
                    '#7818a1',
                    '#0516ab',
                    '#c4b102',
                    '#c40c02',
                    '#f04705',
                    '#05f05f',
                    '#05f0e0',
                    '#059af0',
                    '#4305f0',
                    '#086e14',
                    '#3b0128',
                    '#00114f',
                ],
            },
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
