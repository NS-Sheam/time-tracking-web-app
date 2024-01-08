// Dashboard.js

import ThreeDProjectCard from '../../components/shared/3DComponents/3DProjectcard';
import ThreeDTimer from '../../components/shared/3DComponents/3DTimer';
import { LiveCounter } from './LiveCounter';
import Chart from './Chart';


const Dashboard = () => {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="grid grid-cols-2 gap-8">
                <LiveCounter label="Total Projects" value={5} />
                <LiveCounter label="Total Hours Worked" value={120} />
            </div>
            <div className="grid grid-cols-2 gap-8 mt-8">
                <ThreeDProjectCard projectName="Project 1" />
                <ThreeDProjectCard projectName="Project 2" />
            </div>
            <div className="mt-8">
                <ThreeDTimer taskName="Task 1" />
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Project Status</h2>
                <div className="w-full md:w-3/4 lg:w-1/2 mx-auto">
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
