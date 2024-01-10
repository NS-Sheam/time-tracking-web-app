
const ThreeDProjectCard = ({ projectName, description, status, totalTime }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-bold mb-2 text-gray-800">{projectName}</h3>
            <p className="text-sm text-gray-500 mb-4">{description}</p>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm text-gray-600 mb-2">Status: {status}</p>
                    <p className="text-sm text-gray-600">Total Time: {totalTime} hours</p>
                </div>
                <button className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md transition-all duration-300">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ThreeDProjectCard;
