// TimerView.js

import React, { useState, useEffect } from 'react';
import 'react-circular-progressbar/dist/styles.css';
import { formatTime } from '../../utils/timeFn';

const TimerView = () => {
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Task 1', time: 0, isRunning: false },
        { id: 2, name: 'Task 2', time: 0, isRunning: false },
        // Add more tasks as needed
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
        setSelectedTask(tasks.find((task) => task.id === selectedTaskId));
    };
    console.log(selectedTask);


    return (
        <div className="p-8 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md shadow-lg">
            <h1 className="text-3xl font-bold mb-4">Timer View</h1>

            <div className="flex items-center mb-4">
                <div className="mr-4">
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
                <div>
                    <label className="text-gray-400">Timer:</label>
                    <div className="flex items-center">
                        <span className="text-2xl font-bold mr-2">
                            {formatTime(selectedTask.time)}
                        </span>
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
                </div>
            </div>


            {/* Task log table */}
            <table className="w-full border border-white rounded-md mb-4">
                <thead>
                    <tr className="bg-gray-700 text-white">
                        <th className="py-2">Task</th>
                        <th className="py-2">Time</th>
                        <th className="py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task) => (
                        <tr key={task.id} className="bg-gray-800 text-white">
                            <td className="py-2">{task.name}</td>
                            <td className="py-2">{formatTime(task.time)}</td>
                            <td className="py-2">
                                <button
                                    onClick={() => handleStartPause(task.id)}
                                    className={`${task.isRunning ? 'bg-red-500' : 'bg-green-500'
                                        } hover:bg-opacity-80 text-white px-2 py-1 rounded-md mr-2 transition-all duration-300`}
                                >
                                    {task.isRunning ? 'Pause' : 'Start'}
                                </button>
                                <button
                                    onClick={() => handleReset(task.id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md transition-all duration-300"
                                >
                                    Reset
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};


export default TimerView;
