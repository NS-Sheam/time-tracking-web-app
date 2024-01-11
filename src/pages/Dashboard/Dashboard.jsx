import weeklyactivity from "../../assets/icons/logo-1.png";
import thisWeekIcon from "../../assets/icons/logo-2.png";
import projectIcon from "../../assets/icons/folder-logo.png";

import { FaEllipsisV, FaPlay } from "react-icons/fa";



const Dashboard = () => {

    const activitySection = [
        {
            title: "Weekly Activity",
            text: "0%",
            icon: weeklyactivity,
        },
        {
            title: "Worked This Week",
            text: "40:00:05",
            icon: thisWeekIcon,
        },
        {
            title: "Project Worked",
            text: "02",
            icon: projectIcon,
        }
    ]
    return (
        <div className="space-y-3">
            <div className="flex items-center justify-between">
                <div className="py-4 space-y-1">
                    <h3 className="font-bold text-4xl">Today</h3>
                    <p className="text-xl font-semibold">Mon 22, 2023|10 AM</p>
                </div>
                <div className="flex items-center justify-center gap-4 bg-white rounded-md p-3 shadow-md">
                    <p className="text-xl font-bold">Start Time Tracker</p>
                    <p className="p-6 rounded-md bg-yellow-400 text-black text-xl"><FaPlay className="" /></p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-3">
                {
                    activitySection.map((item, index) => (
                        <div key={index} className="bg-white p-6 rounded-md space-y-2 shadow-md">
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="font-bold">{item.title}</h4>
                                <p><FaEllipsisV /></p>
                            </div>
                            <div className="flex items-center justify-between gap-2">
                                <h3 className="text-3xl font-bold">{item.text}</h3>
                                <img className="bg-yellow-100 p-2 rounded-md w-14 h-14" src={item.icon} alt="" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Dashboard;
