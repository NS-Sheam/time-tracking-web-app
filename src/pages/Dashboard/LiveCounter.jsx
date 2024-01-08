
const LiveCounter = ({ label, value }) => {
    return (
        <div className="bg-white p-4 rounded-md shadow-inner shadow-black">
            <p className="text-sm text-gray-500">{label}</p>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
};

export { LiveCounter };
