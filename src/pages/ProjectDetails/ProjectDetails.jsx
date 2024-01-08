const ProjectDetails = ({ project, setShowSingleProject }) => {
    // If the project with the given ID is not found, you can handle it accordingly
    if (!project) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="p-8 bg-gray-200 text-gray-800 rounded-md shadow-lg">
                    Project not found
                </div>
            </div>
        );
    }

    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md shadow-lg z-10 space-y-4">
            <h1 className="text-3xl text-black font-extrabold shadow-white ">{project.name} Details</h1>

            <div className="text-white">
                <strong className="text-slate-900 font-extrabold">Project Name:</strong> {project.name}
            </div>

            <div className="text-white">
                <strong className="text-slate-900 font-extrabold">Project Description:</strong> {project.description}
            </div>

            <div className="text-white">
                <strong className="text-slate-900 font-extrabold">Status:</strong> In Progress
            </div>

            <div className="text-white">
                <strong className="text-slate-900 font-extrabold">Total Time Spent:</strong> 3 hours
            </div>

            <label
                onClick={() => setShowSingleProject(false)}
                className="absolute top-0 right-3 bg-yellow-500 shadow-inner shadow-black rounded-full text-black font-extrabold h-8 w-8 text-center flex items-center justify-center cursor-pointer"
            >
                x
            </label>
        </div>
    );
};

export default ProjectDetails;
