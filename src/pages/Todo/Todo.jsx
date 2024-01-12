import { useSelector } from "react-redux";
import { formatTime } from "../../utils/timeFn";
import { FaUser } from "react-icons/fa";

const Todo = () => {
    const projects = useSelector((state) => state.project);
    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Todo List</h1>
            <div className="space-y-2">
                {
                    projects.filter(project => project.status === "Pending").map((item, index) => (
                        <div key={index} className="grid grid-cols-3 gap-2 text-black p-2 border border-slate-400 rounded-md shadow-md shadow-black hover:scale-105 duration-300">
                            <div className="col-span-1 flex items-center justify-center gap-3">
                                <p className="p-2 bg-yellow-100 rounded-full text-black"><FaUser /></p>
                                <p className="font-bold">{item.projectName}</p>
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
    );
};

export default Todo;