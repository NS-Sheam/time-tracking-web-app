// Dashboard.js

import { FaPlay } from "react-icons/fa";



const Dashboard = () => {

    return (
        <div className="">
            <div>
                <div className="font-bold">
                    <h3 className="text-2xl">Today</h3>
                    <p className="text-xl">Mon 22, 2023|10 AM</p>
                </div>
                <div>
                    <span>Start Time Tracker</span>
                    <span className="p-3 rounded-md bg-yellow-300 text-black"><FaPlay className="" /></span>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
