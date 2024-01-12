import { useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { formatTime } from '../../utils/timeFn';
import { Switch } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProject } from '../../redux/features/projectSlice';

const TimerView = () => {
    const projects = useSelector((state) => state.project);
    const dispatch = useDispatch();

    useEffect(() => {
        const intervals = projects.map((project) => {
            return setInterval(() => {
                if (project.isRunning) {
                    dispatch(updateProject({
                        id: project.id,
                        timeSpent: project.timeSpent + 1,
                        isRunning: true,
                    }));
                }
            }, 1000);
        });

        return () => {
            intervals.forEach((interval) => clearInterval(interval));
        };
    }, [projects, dispatch]);


    const handleStartPause = (project) => {

        dispatch(updateProject({
            id: project.id,
            timeSpent: project.timeSpent,
            isRunning: !project.isRunning,
        }));
    };

    const handleReset = (project) => {
        dispatch(updateProject({
            id: project.id,
            timeSpent: 0,
            isRunning: false,
        }));
    };

    return (
        <div className="">
            <h1 className="text-3xl font-bold mb-4">Timer View</h1>

            {/* Task log table */}
            <table className="w-full rounded-md mb-4 bg-white divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="py-3 px-6">Task</th>
                        <th className="py-3 px-6">Time</th>
                        <th className="py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center divide-y divide-gray-700">
                    {projects.map((project) => (
                        <tr key={project.id}>
                            <td className="py-4 px-6">{project.projectName}</td>
                            <td className="py-4 px-6">{formatTime(project.timeSpent)}</td>
                            <td className="py-4 px-6 space-x-2">
                                <Switch.Group>
                                    <div className="flex items-center">
                                        <Switch
                                            checked={project.isRunning}
                                            onChange={() => handleStartPause(project)}
                                            className={`${project.isRunning ? 'bg-red-500' : 'bg-green-500'
                                                } relative inline-flex items-center h-6 rounded-full w-11`}
                                        >
                                            <span className="sr-only">Toggle</span>
                                            <span
                                                className={`${project.isRunning
                                                    ? 'translate-x-6 bg-white'
                                                    : 'translate-x-1 bg-white'
                                                    } inline-block w-4 h-4 transform translate-x-0.5 bg-gray-800 rounded-full`}
                                            />
                                        </Switch>
                                        <button
                                            onClick={() => handleReset(project)}
                                            className="text-blue-500 hover:text-blue-600 ml-2"
                                            disabled={project.timeSpent === 0 || project.isRunning}
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </Switch.Group>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimerView;