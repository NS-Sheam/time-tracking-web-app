
const ThreeDTimer = ({ taskName, timeSpent, isRunning }) => {
    return (
        <div className={`rounded-md overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 ${isRunning ? 'border-4 border-green-500' : 'border-4 border-blue-500'}`}>
            <div className="bg-gradient-to-br from-teal-500 to-purple-600 p-6 text-white">
                <h3 className="text-lg font-bold mb-2">{taskName}</h3>
                <p className="text-sm text-gray-300">Time Spent: {timeSpent} hours</p>
            </div>
            <div className="bg-white p-4">
                <button
                    className={`w-full py-2 text-white rounded-md ${isRunning ? 'bg-red-500' : 'bg-green-500 hover:bg-opacity-80'}`}
                >
                    {isRunning ? 'Pause' : 'Start'}
                </button>
                <button className="w-full py-2 mt-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-all duration-300">
                    Reset
                </button>
            </div>
        </div>
    );
};

export default ThreeDTimer;
