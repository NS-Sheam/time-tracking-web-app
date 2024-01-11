
import { useState, useEffect } from 'react';

const ThreeDTimer = (project) => {
    const [timeSpent, setTimeSpent] = useState(project.timeSpent);
    const [isRunning, setIsRunning] = useState(project.timeSpent);

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setTimeSpent((prevTimeSpent) => prevTimeSpent + 1);
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStartPause = () => {
        setIsRunning(!isRunning);
    };

    const handleReset = () => {
        setTimeSpent(0);
        setIsRunning(false);
    };

    return (
        <div className={`rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${isRunning ? 'border-4 border-green-500' : 'border-4 border-blue-500'}`}>
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm text-gray-300">Time Spent: {timeSpent} seconds</p>
            </div>
            <div className="bg-white p-4">
                <button
                    onClick={handleStartPause}
                    className={`w-full py-2 text-white rounded-md ${isRunning ? 'bg-red-500' : 'bg-green-500 hover:bg-opacity-80'}`}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button onClick={handleReset} className="w-full py-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default ThreeDTimer;
