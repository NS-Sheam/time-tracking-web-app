import weeklyactivity from "../../assets/icons/logo-1.png";
import thisWeekIcon from "../../assets/icons/logo-2.png";
import projectIcon from "../../assets/icons/folder-logo.png";

import { FaEllipsisV, FaPlay, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { formatTime, getCurrentDateFormatted } from "../../utils/timeFn";
import { useContext } from "react";
import { DataContext } from "../../layout/MainLayout";



const Dashboard = () => {
    const projects = useSelector((state) => state.project);
    const { fullDay, formattedDate } = getCurrentDateFormatted();
    const { darkMode } = useContext(DataContext);

    const activitySection = [
        {
            title: "Weekly Activity",
            text: "0%",
            icon: weeklyactivity,
        },
        {
            title: "Worked This Week",
            text: formatTime(projects.reduce((acc, project) => acc + project.timeSpent, 0)),
            icon: thisWeekIcon,
        },
        {
            title: "Project Worked",
            text: projects.filter(project => project.status === "Completed").length,
            icon: projectIcon,
        }
    ]
    const commonBoxClass = `${!darkMode ? "bg-white shadow-md text-black" : "bg-black shadow-white border border-white shadow-sm text-white"} p-6 rounded-md space-y-2 `;
    return (
        <div className="space-y-3">
            {/* Top Section  */}
            <div className="flex items-center justify-between">
                <div className={`${!darkMode ? "text-black" : "text-white"} py-4 space-y-1`}>
                    <h3 className="font-bold text-4xl">{fullDay}</h3>
                    <p className="text-xl font-semibold">{formattedDate}</p>
                </div>
                <div className={`{${!darkMode ? "bg-white text-black shadow-md" : "bg-black text-white shadow-white border border-white"} flex items-center justify-center gap-4 rounded-md p-6`}>
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
                            <p className={`font-bold ${!darkMode ? "text-black" : "text-white"}`}>Nazmus Sakib</p>
                        </div>
                        <button className="bg-yellow-200 p-2 rounded-md font-semibold">View all</button>
                    </div>
                    <div>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                projects.map((item, index) => (
                                    <div key={index} className="relative">
                                        <img className="rounded-md" src={item.image} alt="" />
                                        <div className="absolute bottom-2 right-2 rounded-md p-2 z-10">
                                            <p className="text-white font-bold text-sm">{item.projectName}</p>
                                        </div>
                                        <div className="absolute h-full w-full bottom-0 bg-black bg-opacity-35"></div>
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
                        projects.filter(project => project.status !== "Pending").map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-2 text-black p-2 border border-slate-400 rounded-md">
                                <div className="col-span-1 flex items-center justify-center gap-3">
                                    <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                    <p className={`font-bold text-sm ${!darkMode ? "text-black" : "text-white"}`}>{item.projectName}</p>
                                </div>
                                <div className="col-span-2 flex justify-between items-center gap-2">
                                    <button className="bg-yellow-200 p-2 rounded-md font-semibold">{formatTime(item.timeSpent)}</button>
                                    <div className="relative w-full bg-slate-400 rounded-full h-2">
                                        <div
                                            style={{ width: `${(item.timeSpent / item.estimatedTime) * 100}%` }}
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
                    <table className="w-full">
                        <thead>
                            <tr className=" border-b border-slate-300">
                                <th className="text-slate-400 w-full p-2">Member Info</th>
                                <th className="text-slate-400 p-2">Today</th>
                                <th className="text-slate-400 p-2">This Week</th>
                            </tr>
                        </thead>
                        <tbody className=" space-x-3">
                            {
                                projects.map((item, index) => (
                                    <tr key={index} className="text-black bprder-b border-slate-300">
                                        <td className="p-2 flex items-center justify-center gap-3">
                                            <p className="p-2 bg-yellow-100 rounded-full text-black mx-2"><FaUser /></p>
                                            <div className={`${!darkMode ? "text-black" : "text-white"}`}>
                                                <p className="font-bold">{item.projectAuthor}</p>
                                                <p>{item.authorDesignation}</p>
                                            </div>
                                        </td>
                                        <td className=""><button className="bg-yellow-200 p-2 rounded-md font-semibold mx-2">
                                            {formatTime(item.timeSpent)}</button></td>
                                        <td className=""><button className="bg-yellow-200 p-2 rounded-md font-semibold mx-2">
                                            {formatTime(item.timeSpent)}</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
                {/* Todo Section  */}
                <div className={commonBoxClass}>
                    <div className="flex items-center justify-between gap-2">
                        <h4 className="font-semibold text-xl">To Do</h4>
                        <p><FaEllipsisV /></p>
                    </div>
                    {
                        projects.filter(project => project.status === "Pending").map((item, index) => (
                            <div key={index} className="grid grid-cols-3 gap-2 text-black p-2 border border-slate-400 rounded-md">
                                <div className="col-span-1 flex items-center justify-center gap-3">
                                    <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                    <p className={`${!darkMode ? "text-black" : "text-white"} text-sm font-bold`}>{item.projectName}</p>
                                </div>
                                <div className="col-span-2 flex justify-between items-center gap-2">
                                    <button className="bg-yellow-200 p-2 rounded-md font-semibold">{formatTime(item.timeSpent)}</button>
                                    <div className="relative w-full bg-slate-400 rounded-full h-2">
                                        <div
                                            style={{ width: `${(item.timeSpent / item.estimatedTime) * 100}%` }}
                                            className={`absolute top-0 left-0 bg-yellow-300  rounded-full h-full`}></div>
                                    </div>
                                </div>
                            </div>

                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Dashboard;
