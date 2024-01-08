// ProjectList.js
import { useState } from 'react';

import ProjectDetails from '../ProjectDetails/ProjectDetails';

const ProjectList = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [showSingleProject, setShowSingleProject] = useState(false);

    const projects = [
        { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Project B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, name: 'Project C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ];

    return (
        <div className="p-8 space-y-4">
            <h1 className="text-3xl font-bold mb-4 text-white">Project List</h1>
            {selectedProject && showSingleProject && <ProjectDetails setShowSingleProject={setShowSingleProject} project={selectedProject} />}

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project => (
                    <div
                        key={project.id}
                        className="bg-white rounded-md shadow-inner shadow-black p-6 transform hover:scale-105 transition-transform space-y-4"
                    >
                        <h2 className="text-xl font-semibold text-black">{project.name}</h2>
                        <p className="text-slate-900">{project.description}</p>
                        <button
                            onClick={() => {
                                setSelectedProject(project);
                                setShowSingleProject(true);
                            }}
                            className=" bg-orange-500 shadow-inner shadow-black text-white px-4 py-2 rounded-md transition-all duration-300 hover:scale-105 font-bold"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectList;
