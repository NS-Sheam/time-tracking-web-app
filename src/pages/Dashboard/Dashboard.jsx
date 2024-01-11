// Dashboard.js

import { FaPlay } from "react-icons/fa";



const Dashboard = () => {

    return (
        <div className="">
            <div className="flex items-center justify-between">
                <div className="font-bold py-4">
                    <h3 className="text-4xl">Today</h3>
                    <p className="text-xl">Mon 22, 2023|10 AM</p>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <p>Start Time Tracker</p>
                    <p className="p-3 rounded-md bg-yellow-300 text-black text-xl"><FaPlay className="" /></p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
