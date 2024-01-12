import { useSelector } from "react-redux";
import { formatTime } from "../../utils/timeFn";
import { FaUser } from "react-icons/fa";

const Report = () => {
    const projects = useSelector((state) => state.project);
    return (
        <div>
            <div className="">
                <div className="flex items-center justify-between gap-2">
                    <h4 className=" text-3xl font-bold mb-4">Reports</h4>
                </div>
                <table className="w-full">
                    <thead>
                        <tr className=" border-b border-slate-300 text-left">
                            <th className="text-slate-400 w-full p-2">Project Name</th>
                            <th className="text-slate-400 w-full p-2">Member Info</th>
                            <th className="text-slate-400 p-2">Today</th>
                            <th className="text-slate-400 p-2">This Week</th>
                            <th className="text-slate-400 p-2">Progress</th>
                        </tr>
                    </thead>
                    <tbody className=" space-x-3">
                        {
                            projects.map((item, index) => (
                                <tr key={index} className="text-black bprder-b border-slate-300">
                                    <td className="p-2 flex items-center justify-start gap-3">
                                        <p className="p-2 bg-yellow-100 rounded-full text-black mx-2"><FaUser /></p>
                                        <div>
                                            <p className="font-bold">{item.projectAuthor}</p>
                                            <p>{item.authorDesignation}</p>
                                        </div>
                                    </td>
                                    <td>{item.projectName}</td>
                                    <td className=""><button className="bg-yellow-200 p-2 rounded-md font-semibold mx-2">
                                        {formatTime(item.timeSpent)}</button></td>
                                    <td className=""><button className="bg-yellow-200 p-2 rounded-md font-semibold mx-2">
                                        {formatTime(item.timeSpent)}</button></td>
                                    <td>
                                        <div className="relative w-full bg-slate-400 rounded-full h-2">
                                            <div
                                                style={{ width: `${(item.timeSpent / item.estimatedTime) * 100}%` }}
                                                className={`absolute top-0 left-0 bg-yellow-300  rounded-full h-full`}></div>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Report;