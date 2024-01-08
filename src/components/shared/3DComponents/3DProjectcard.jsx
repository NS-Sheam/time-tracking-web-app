
const ThreeDProjectCard = ({ projectName }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-bold mb-2">{projectName}</h3>
            {/* will add animations later */}
        </div>
    );
};

export default ThreeDProjectCard;
