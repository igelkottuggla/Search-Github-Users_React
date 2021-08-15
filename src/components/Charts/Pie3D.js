// STEP 1 - Include Dependencies
// Include react
import React from 'react';

// Include the react-fusioncharts component
import ReactFC from 'react-fusioncharts';

// Include the fusioncharts library
import FusionCharts from 'fusioncharts';

// Include the chart type
import Chart from 'fusioncharts/fusioncharts.charts';

// Include the theme as fusion
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

// STEP 2 - Chart Data

// STEP 3 - Creating the JSON object to store the chart configurations

const ChartComponent = ({ data }) => {
    const chartConfigs = {
        type: 'pie3d', // The chart type
        width: '100%', // Width of the chart
        height: '400', // Height of the chart
        dataFormat: 'json', // Data type
        dataSource: {
            // Chart Configuration
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
            // Chart Data
            data,
        },
    };
    return <ReactFC {...chartConfigs} />;
};

export default ChartComponent;
