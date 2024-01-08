// TimerView.js
import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { formatTime } from '../../utils/timeFn';
import { Switch } from '@headlessui/react';

const TimerView = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', time: 0, isRunning: false },
        { id: 2, name: 'Task 2', time: 0, isRunning: false },
    ]);

    const [selectedTask, setSelectedTask] = useState(tasks[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setTasks((prevTasks) =>
                prevTasks.map((task) => ({
                    ...task,
                    time: task.isRunning ? task.time + 1 : task.time,
                }))
            );
        }, 1000);


        return () => clearInterval(interval);
    }, []);


    const handleStartPause = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isRunning: !task.isRunning } : task
            )
        );
    };

    const handleReset = (taskId) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === taskId ? { ...task, time: 0 } : task))
        );
    };

    const handleTaskChange = (e) => {
        const selectedTaskId = parseInt(e.target.value);
        setSelectedTask((prevSelectedTask) => ({
            ...prevSelectedTask,
            ...tasks.find((task) => task.id === selectedTaskId),
        }));
    };

    return (
        <div className="p-8 bg-gradient-to-r from-purple-700 to-indigo-700 text-white rounded-md shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Timer View</h1>

            {/* <div className="flex items-center space-x-4 mb-6">
                <div>
                    <label className="text-gray-400">Select Project/Task:</label>
                    <select
                        value={selectedTask.id}
                        onChange={handleTaskChange}
                        className="bg-gray-800 text-white border border-gray-700 p-2 rounded-md"
                    >
                        {tasks.map((task) => (
                            <option key={task.id} value={task.id}>
                                {task.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center">
                    <label className="text-gray-400 mr-2">Timer:</label>
                    <span className="text-2xl font-bold">
                        {formatTime(selectedTask.time)}
                    </span>
                </div>
                <div className="flex items-center">
                    <button
                        onClick={() => handleStartPause(selectedTask.id)}
                        className={`${selectedTask.isRunning ? 'bg-red-500' : 'bg-green-500'
                            } hover:bg-opacity-80 text-white px-4 py-2 rounded-md transition-all duration-300 mr-2`}
                    >
                        {selectedTask.isRunning ? 'Pause' : 'Start'}
                    </button>
                    <button
                        onClick={() => handleReset(selectedTask.id)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300"
                    >
                        Reset
                    </button>
                </div>
            </div> */}

            {/* Task log table */}
            <table className="w-full rounded-md mb-4 bg-white divide-y divide-gray-200">
                <thead className="bg-gray-700 text-white">
                    <tr>
                        <th className="py-3 px-6">Task</th>
                        <th className="py-3 px-6">Time</th>
                        <th className="py-3 px-6">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-800 text-white divide-y divide-gray-700">
                    {tasks.map((task) => (
                        <tr key={task.id}>
                            <td className="py-4 px-6">{task.name}</td>
                            <td className="py-4 px-6">{formatTime(task.time)}</td>
                            <td className="py-4 px-6 space-x-2">
                                <Switch.Group>
                                    <div className="flex items-center">
                                        <Switch
                                            checked={task.isRunning}
                                            onChange={() => handleStartPause(task.id)}
                                            className={`${task.isRunning ? 'bg-red-500' : 'bg-green-500'
                                                } relative inline-flex items-center h-6 rounded-full w-11`}
                                        >
                                            <span className="sr-only">Toggle</span>
                                            <span
                                                className={`${task.isRunning
                                                    ? 'translate-x-6 bg-white'
                                                    : 'translate-x-1 bg-white'
                                                    } inline-block w-4 h-4 transform translate-x-0.5 bg-gray-800 rounded-full`}
                                            />
                                        </Switch>
                                        <button
                                            onClick={() => handleReset(task.id)}
                                            className="text-blue-500 hover:text-blue-600 ml-2"
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
