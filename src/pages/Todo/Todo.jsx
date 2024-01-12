import { useSelector } from "react-redux";
import { formatTime } from "../../utils/timeFn";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { DataContext } from "../../layout/MainLayout";

const Todo = () => {
    const { darkMode } = useContext(DataContext);
    const projects = useSelector((state) => state.project);
    return (
        <div className="">
            <h1 className={`${!darkMode ? "text-black" : "text-white"} text-3xl font-bold mb-4`}>Todo List</h1>
            <div className="space-y-2">
                {
                    projects.filter(project => project.status === "Pending").map((item, index) => (
                        <div key={index} className={`grid grid-cols-3 gap-2 p-2 border border-slate-400 ${!darkMode ? "shadow-black text-black" : "shadow-white text-white"} rounded-md shadow-sm hover:scale-105 duration-300`}>
                            <div className="p-2 flex items-center justify-start gap-3">
                                <p className="col-span-1 p-2 bg-yellow-100 rounded-full text-black mx-2"><FaUser /></p>
                                <div>
                                    <p className="font-bold">{item.projectAuthor}</p>
                                    <p>{item.authorDesignation}</p>
                                </div>
                            </div>
                            <div className="col-span-1 flex items-center justify-center gap-3">
                                <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                <p className="font-bold">{item.projectName}</p>
                            </div>
                            <div className="col-span-1 flex justify-between items-center gap-2">
                                <button className="bg-yellow-200 p-2 rounded-md font-semibold text-black">{formatTime(item.timeSpent)}</button>
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
    );
};

export default Todo;