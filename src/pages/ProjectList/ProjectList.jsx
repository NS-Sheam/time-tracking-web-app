// ProjectList.js

import React from 'react';

const ProjectList = () => {
    const projects = [
        { id: 1, name: 'Project A', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { id: 2, name: 'Project B', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, name: 'Project C', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ];

    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-4 text-white">Project List</h1>

            {projects.map(project => (
                <div
                    key={project.id}
                    className="bg-gradient-to-br from-teal-500 to-purple-600 rounded-md shadow-md p-6 mb-4 transform hover:scale-105 transition-transform"
                >
                    <h2 className="text-xl font-semibold mb-2 text-white">{project.name}</h2>
                    <p className="text-gray-200">{project.description}</p>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-all duration-300">
                        View Details
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
