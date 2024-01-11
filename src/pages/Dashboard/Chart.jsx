import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = () => {
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: true,
                position: 'top',
                labels: {
                    font: {
                        size: 14,
                    },
                    color: '#fff',
                },
            },
        },
        elements: {
            arc: {
                borderWidth: 0,
            },
        },
        layout: {
            padding: 10,
        },
        shadowOffsetX: 0,
        shadowOffsetY: 4,
        shadowBlur: 8,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
    };

    const doughnutChartData = {
        labels: ['Completed', 'In Progress', 'Not Started'],
        datasets: [
            {
                data: [2, 3, 5],
                backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
                hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],

            },
        ],
    };
    return <Doughnut data={doughnutChartData} className="w-full " style={{ height: '400px' }}
        options={chartOptions}
    />
};

export default Chart;