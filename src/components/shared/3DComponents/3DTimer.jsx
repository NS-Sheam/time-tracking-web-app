
const ThreeDTimer = ({ taskName }) => {
    return (
        <div className="shadow-inner shadow-black bg-white p-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold mb-2">{taskName}</h3>
            {/* will add animations here later */}
        </div>
    );
};

export default ThreeDTimer;
