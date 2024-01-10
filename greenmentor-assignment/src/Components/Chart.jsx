 // Import necessary dependencies from React, Chart.js, and Chart.js for React
import React from 'react';
import "./Styles/Chart.css"
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

// Data for labels and emissions/revenue information
const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const jsonData = {
    "Emissions": [
        {
            "Date ": "4\/1\/22",
            "Month ": "Jan",
            "Year ": 2022,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 1698,
            "Revenue (in INR)": 203456,
            "R\/E": 119.8209658
        },
        {
            "Date ": "3\/1\/23",
            "Month ": "Jan",
            "Year ": 2023,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 1790,
            "Revenue (in INR)": 245678,
            "R\/E": 137.2502793,
            "YOY R\/E Change": 0.14546130024022874
        },
        {
            "Date ": "2\/2\/22",
            "Month ": "Feb",
            "Year ": 2022,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 2108,
            "Revenue (in INR)": 203456,
            "R\/E": 96.51612903
        },
        {
            "Date ": "5\/2\/23",
            "Month ": "Feb",
            "Year ": 2023,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 2205,
            "Revenue (in INR)": 220000,
            "R\/E": 99.77324263,
            "YOY R\/E Change": 0.033746832066159804
        },
        {
            "Date ": "6\/3\/22",
            "Month ": "Mar",
            "Year ": 2022,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 2251,
            "Revenue (in INR)": 245647,
            "R\/E": 109.1279431
        },
        {
            "Date ": "7\/3\/23",
            "Month ": "Mar",
            "Year ": 2023,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 2345,
            "Revenue (in INR)": 287545,
            "R\/E": 122.6204691,
            "YOY R\/E Change": 0.12363951485743097
        },
        {
            "Date ": "2\/4\/22",
            "Month ": "Apr",
            "Year ": 2022,
            "Supplier ": "Shaurya Drugs",
            "Emissions(in CO2e)": 1602,
            "Revenue (in INR)": 179853,
            "R\/E": 112.2677903
        },
        {
            "Date ": "2\/4\/23",
            "Month ": "Apr",
            "Year ": 2023,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 1503,
            "Revenue (in INR)": 195395,
            "R\/E": 130.0033267,
            "YOY R\/E Change": 0.1579752872697
        },
        {
            "Date ": "3\/5\/22",
            "Month ": "May",
            "Year ": 2022,
            "Supplier ": "Orlife Healthcare",
            "Emissions(in CO2e)": 3456,
            "Revenue (in INR)": 464464,
            "R\/E": 134.3935185
        },
        {
            "Date ": "4\/5\/23",
            "Month ": "May",
            "Year ": 2023,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 4634,
            "Revenue (in INR)": 575747,
            "R\/E": 124.2440656,
            "YOY R\/E Change": -0.07552040476601063
        },
        {
            "Date ": "3\/6\/22",
            "Month ": "June",
            "Year ": 2022,
            "Supplier ": "Orlife Healthcare",
            "Emissions(in CO2e)": 3245,
            "Revenue (in INR)": 464464,
            "R\/E": 143.1322034
        },
        {
            "Date ": "4\/6\/23",
            "Month ": "June",
            "Year ": 2023,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 4634,
            "Revenue (in INR)": 575747,
            "R\/E": 124.2440656,
            "YOY R\/E Change": -0.13196288005373413
        },
        {
            "Date ": "3\/7\/22",
            "Month ": "July",
            "Year ": 2022,
            "Supplier ": "Rezicure Pharmaceuticals",
            "Emissions(in CO2e)": 3543,
            "Revenue (in INR)": 464464,
            "R\/E": 131.0934237
        },
        {
            "Date ": "5\/7\/23",
            "Month ": "July",
            "Year ": 2023,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 3487,
            "Revenue (in INR)": 575747,
            "R\/E": 165.1124176,
            "YOY R\/E Change": 0.2595019105524876
        },
        {
            "Date ": "3\/8\/22",
            "Month ": "Aug",
            "Year ": 2022,
            "Supplier ": "Rezicure Pharmaceuticals",
            "Emissions(in CO2e)": 5445,
            "Revenue (in INR)": 643864,
            "R\/E": 118.2486685
        },
        {
            "Date ": "5\/8\/23",
            "Month ": "Aug",
            "Year ": 2023,
            "Supplier ": "Merion Care",
            "Emissions(in CO2e)": 5258,
            "Revenue (in INR)": 689747,
            "R\/E": 131.1804869,
            "YOY R\/E Change": 0.10936121765780515
        },
        {
            "Date ": "2\/9\/22",
            "Month ": "Sep",
            "Year ": 2022,
            "Supplier ": "Ruzette Organics",
            "Emissions(in CO2e)": 4343,
            "Revenue (in INR)": 564651,
            "R\/E": 130.0140456
        },
        {
            "Date ": "3\/9\/23",
            "Month ": "Sep",
            "Year ": 2023,
            "Supplier ": "Ruzette Organics",
            "Emissions(in CO2e)": 4524,
            "Revenue (in INR)": 578965,
            "R\/E": 127.9763484,
            "YOY R\/E Change": -0.01567290070137939
        },
        {
            "Date ": "6\/10\/22",
            "Month ": "Oct",
            "Year ": 2022,
            "Supplier ": "Steller Bio Labs",
            "Emissions(in CO2e)": 3434,
            "Revenue (in INR)": 516513,
            "R\/E": 150.4114735
        },
        {
            "Date ": "6\/10\/23",
            "Month ": "Oct",
            "Year ": 2023,
            "Supplier ": "Steller Bio Labs",
            "Emissions(in CO2e)": 3332,
            "Revenue (in INR)": 524535,
            "R\/E": 157.4234694,
            "YOY R\/E Change": 0.04661875669644511
        },
        {
            "Date ": "10\/11\/22",
            "Month ": "Nov",
            "Year ": 2022,
            "Supplier ": "Eskos Pharma",
            "Emissions(in CO2e)": 3464,
            "Revenue (in INR)": 546561,
            "R\/E": 157.7831986
        },
        {
            "Date ": "10\/11\/23",
            "Month ": "Nov",
            "Year ": 2023,
            "Supplier ": "Eskos Pharma",
            "Emissions(in CO2e)": 3535,
            "Revenue (in INR)": 576855,
            "R\/E": 163.1838755,
            "YOY R\/E Change": 0.03422846642431643
        },
        {
            "Date ": "1\/12\/22",
            "Month ": "Dec",
            "Year ": 2022,
            "Supplier ": "Adani",
            "Emissions(in CO2e)": 2324,
            "Revenue (in INR)": 343535,
            "R\/E": 147.820568
        },
        {
            "Date ": "2\/12\/23",
            "Month ": "Dec",
            "Year ": 2023,
            "Supplier ": "Reliance",
            "Emissions(in CO2e)": 2452,
            "Revenue (in INR)": 354646,
            "R\/E": 144.6353997,
            "YOY R\/E Change": -0.021547531279893395
        }
    ],
    "Chart_and_Table_data": [
        {
            "Month ": "Jan",
            "Year ": 2023,
            "Emissions(in CO2e)": 1790,
            "R\/E": 137.25027932960893,
            "YOY R\/E Change": 0.14546130024022874
        },
        {
            "Month ": "Feb",
            "Year ": 2023,
            "Emissions(in CO2e)": 2205,
            "R\/E": 99.77324263038548,
            "YOY R\/E Change": 0.033746832066159804
        },
        {
            "Month ": "Mar",
            "Year ": 2023,
            "Emissions(in CO2e)": 2345,
            "R\/E": 122.62046908315565,
            "YOY R\/E Change": 0.12363951485743097
        },
        {
            "Month ": "Apr",
            "Year ": 2023,
            "Emissions(in CO2e)": 1503,
            "R\/E": 130.00332667997338,
            "YOY R\/E Change": 0.1579752872697
        },
        {
            "Month ": "May",
            "Year ": 2023,
            "Emissions(in CO2e)": 4634,
            "R\/E": 124.24406560207164,
            "YOY R\/E Change": -0.07552040476601063
        },
        {
            "Month ": "June",
            "Year ": 2023,
            "Emissions(in CO2e)": 4634,
            "R\/E": 124.24406560207164,
            "YOY R\/E Change": -0.13196288005373413
        },
        {
            "Month ": "July",
            "Year ": 2023,
            "Emissions(in CO2e)": 3487,
            "R\/E": 165.11241755090336,
            "YOY R\/E Change": 0.2595019105524876
        },
        {
            "Month ": "Aug",
            "Year ": 2023,
            "Emissions(in CO2e)": 5258,
            "R\/E": 131.1804868771396,
            "YOY R\/E Change": 0.10936121765780515
        },
        {
            "Month ": "Sep",
            "Year ": 2023,
            "Emissions(in CO2e)": 4524,
            "R\/E": 127.9763483642794,
            "YOY R\/E Change": -0.01567290070137939
        },
        {
            "Month ": "Oct",
            "Year ": 2023,
            "Emissions(in CO2e)": 3332,
            "R\/E": 157.4234693877551,
            "YOY R\/E Change": 0.04661875669644511
        },
        {
            "Month ": "Nov",
            "Year ": 2023,
            "Emissions(in CO2e)": 3535,
            "R\/E": 163.18387553041018,
            "YOY R\/E Change": 0.03422846642431643
        },
        {
            "Month ": "Dec",
            "Year ": 2023,
            "Emissions(in CO2e)": 2452,
            "R\/E": 144.63539967373572,
            "YOY R\/E Change": -0.021547531279893395
        },
        {
            "Month ": "Total",
            "Emissions(in CO2e)": 39699,
            "R\/E": 136.03886747777022,
            "YOY R\/E Change": 0.037322330595896736
        }
    ]
}

// Helper functions to retrieve emission and R/E data for a specific year and month
const getEmissionData = (year, month) => {
    const entry = jsonData.Emissions.find(entry => entry["Month "] === month && entry["Year "] === year);
    return entry ? entry["Emissions(in CO2e)"] : 0;
};

const getREData = (year, month) => {
    const entry = jsonData.Emissions.find(entry => entry["Month "] === month && entry["Year "] === year);
    return entry ? entry["R\/E"] : 0;
};

// Data configuration for the Chart component
const data = {
    labels,
    datasets: [
        {
            type: 'line',
            label: 'R/E-2023',
            borderColor: 'rgb(238,201,109)',
            borderWidth: 2,
            fill: true,
            data: labels.map(month => getREData(2023, month)),
            yAxisID: 'y1',
        },
        {
            type: 'line',
            label: 'R/E-2022',
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 2,
            fill: false,
            data: labels.map(month => getREData(2022, month)),
            yAxisID: 'y1',
        },
        {
            type: 'bar',
            label: 'Emission-2023',
            backgroundColor: 'rgb(84,111,198)',
            data: labels.map(month => getEmissionData(2023, month)),
            borderColor: 'white',
            borderWidth: 2,
            yAxisID: 'y',
        },
        {
            type: 'bar',
            label: 'Emission-2022',
            backgroundColor: 'rgb(145,203,116)',
            data: labels.map(month => getEmissionData(2022, month)),
            yAxisID: 'y',
        },
    ],
};

// Configuration options for the Chart component
const options = {
    scales: {
        y: {
            beginAtZero: true,
            position: 'left',
            title: {
                display: true,
                text: 'Emissions (CO2e)',
            },
        },
        y1: {
            beginAtZero: true,
            position: 'right',
            title: {
                display: true,
                text: 'R/E',
            },
        },
    },
};

// React functional component for rendering the chart
export function Charts() {
    return (
        <div className='chart-container'>
            <div>
                <p>Emission/Revenue</p>
            </div>
            <Chart type='bar' data={data} options={options}/>
        </div>
    );
}
