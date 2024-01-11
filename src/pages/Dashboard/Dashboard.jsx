import weeklyactivity from "../../assets/icons/logo-1.png";
import thisWeekIcon from "../../assets/icons/logo-2.png";
import projectIcon from "../../assets/icons/folder-logo.png";
import recent1 from "../../assets/images/recent-1.jpg";
import recent2 from "../../assets/images/recent-2.jpg";
import recent3 from "../../assets/images/recent-3.jpg";
import recent4 from "../../assets/images/recent-4.jpg";
import recent5 from "../../assets/images/recent-5.jpg";

import { FaEllipsisV, FaPlay, FaUser } from "react-icons/fa";



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
    const projectSection = [
        {
            title: "Project 1",
            text: "00:30:30",
            parcentage: 80,
            icon: projectIcon,
        },
        {
            title: "Project 2",
            text: "00:30:30",
            icon: projectIcon,
            parcentage: 50,
        },
        {
            title: "Project 3",
            text: "00:30:30",
            icon: projectIcon,
            parcentage: 30,
        }
    ]
    const recentActivityImages = [
        recent1,
        recent2,
        recent3,
        recent4,
        recent5,
    ]
    const commonBoxClass = "bg-white p-6 rounded-md space-y-2 shadow-md";
    return (
        <div className="space-y-3">
            {/* Top Section  */}
            <div className="flex items-center justify-between">
                <div className="py-4 space-y-1">
                    <h3 className="font-bold text-4xl">Today</h3>
                    <p className="text-xl font-semibold">Mon 22, 2023|10 AM</p>
                </div>
                <div className="flex items-center justify-center gap-4 bg-white rounded-md p-6 shadow-md">
                    <p className="text-xl font-bold">Start Time Tracker</p>
                    <p className="p-4 rounded-md bg-yellow-400 text-black text-xl"><FaPlay className="" /></p>
                </div>
            </div>
            {/* Activity Section  */}
            <div className="grid grid-cols-3 gap-3">
                {
                    activitySection.map((item, index) => (
                        <div key={index} className={commonBoxClass}>
                            <div className="flex items-center justify-between gap-2">
                                <h4 className="font-semibold text-xl">{item.title}</h4>
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
            {/* Recent Activity and Project Section  */}
            <div className="grid grid-cols-2 gap-3">
                {/* Recent Activity Section  */}
                <div className={commonBoxClass}>
                    <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-xl">Recent Activity</h4>
                        <p><FaEllipsisV /></p>
                    </div>
                    <div className="flex justify-between items-center gap-2 text-black">
                        <div className="flex items-center justify-center gap-3">
                            <p className="p-2 bg-orange-500 rounded-full text-white"><FaUser /></p>
                            <p className="font-bold">Nazmus Sakib</p>
                        </div>
                        <button className="bg-yellow-200 p-2 rounded-md font-semibold">View all</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                recentActivityImages.map((item, index) => (
                                    <div key={index} className="relative">
                                        <img className="rounded-md" src={item} alt="" />
                                        <div className="absolute bottom-2 right-2 rounded-md p-2 z-10">
                                            <p className="text-white font-extrabold">Project {index + 1}</p>
                                        </div>
                                        <div className="absolute h-10 w-full bottom-0 bg-black bg-opacity-35"></div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {/* Project Section  */}
                <div className={commonBoxClass}>
                    <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-xl">Projects</h4>
                        <p><FaEllipsisV /></p>
                    </div>
                    {
                        projectSection.map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-2 text-black p-2 border border-slate-400 rounded-md">
                                <div className="col-span-1 flex items-center justify-center gap-3">
                                    <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                    <p className="font-bold">{item.title}</p>
                                </div>
                                <div className="col-span-2 flex justify-between items-center gap-2">
                                    <button className="bg-yellow-200 p-2 rounded-md font-semibold">{item.text}</button>
                                    <div className="relative w-full bg-slate-400 rounded-full h-2">
                                        <div
                                            style={{ width: `${item.parcentage}%` }}
                                            className={`absolute top-0 left-0 bg-yellow-300  rounded-full h-full`}></div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
                {/* Members Section */}
                <div className={commonBoxClass}>
                    <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-xl">Members</h4>
                        <p><FaEllipsisV /></p>
                    </div>
                    <table className="w-full border-2">
                        <tbody className="w-full">
                            <thead>
                                <th className="text-slate-400 w-full">
                                    <td className="p-2">Member Info</td>
                                    <td className="p-2">Today</td>
                                    <td className="p-2">This Week</td>
                                </th>
                            </thead>
                            <tr className="text-black">
                                <td className="p-2 flex items-center justify-center gap-3">
                                    <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                    <div>
                                        <p className="font-bold">Nazmus Sakib</p>
                                        <p>Admin</p>
                                    </div>

                                </td>
                                <td className="bg-yellow-200 p-2 rounded-md font-semibold">00:00:00</td>
                                <td className="bg-yellow-200 p-2 rounded-md font-semibold">00:00:00</td>
                            </tr>
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
