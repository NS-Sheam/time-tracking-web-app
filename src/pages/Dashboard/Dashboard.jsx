// Dashboard.js

import ThreeDProjectCard from '../../components/shared/3DComponents/3DProjectcard';
import ThreeDTimer from '../../components/shared/3DComponents/3DTimer';
import { LiveCounter } from './LiveCounter';
import Chart from './Chart';
import { useContext, useState } from 'react';
import { DataContext } from '../../layout/MainLayout';
import ProjectDetails from '../ProjectDetails/ProjectDetails';


const Dashboard = () => {
    const { projects } = useContext(DataContext);

    const [selectedProject, setSelectedProject] = useState(null);
    const [showSingleProject, setShowSingleProject] = useState(false);
    return (
        <div className="my-10 mx-4 space-y-4">
            {selectedProject && showSingleProject && <ProjectDetails setShowSingleProject={setShowSingleProject} project={selectedProject} />}
            <div className="grid grid-cols-4 gap-4">
                <div className='col-span-1'>

                    {/* <h2 className="text-2xl font-bold mb-4 text-white text-center">Project Status</h2> */}
                    <div>
                        <div className="-mt-8">
                            <Chart />
                        </div>
                        <div className=" space-y-4">
                            {
                                projects.slice(0, 1).map((project) => (
                                    <ThreeDTimer key={project.id} project={project} />
                                ))
                            }
                        </div>
                    </div>

                </div>
                <div className='col-span-3'>
                    <div className="grid grid-cols-2 gap-8">
                        <LiveCounter label="Total Projects" value={5} />
                        <LiveCounter label="Total Hours Worked" value={120} />
                    </div>
                    <div className="grid grid-cols-2 gap-8 mt-8">
                        {
                            projects.map((project) => (
                                <ThreeDProjectCard key={project.id} project={project}
                                    setSelectedProject={setSelectedProject}
                                    setShowSingleProject={setShowSingleProject}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
