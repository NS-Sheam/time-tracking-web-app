import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);
const Chart = () => {
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
    return <Doughnut data={doughnutChartData} className="w-full " style={{ height: '400px' }} />
};

export default Chart;