import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import { createContext, useState } from "react";
export const DataContext = createContext(null);

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const [projects, setProjects] = useState([
        {
            id: 1,
            name: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            status: 'In Progress',
            timeSpent: 0,
            isRunning: false,
        },
        {
            id: 2,
            name: 'Project 2',
            description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            status: 'Not Started',
            timeSpent: 0,
            isRunning: false,
        },
        {
            id: 3,
            name: 'Project 3',
            description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
            status: 'Completed',
            timeSpent: 0,
            isRunning: false,
        },
        {
            id: 4,
            name: 'Project 4',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse.',
            status: 'Not Started',
            timeSpent: 0,
            isRunning: false,
        },
        {
            id: 5,
            name: 'Project 5',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
            status: 'Completed',
            timeSpent: 0,
            isRunning: false,
        },
        {
            id: 6,
            name: 'Project 6',
            description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.',
            status: 'Completed',
            timeSpent: 0,
            isRunning: false,
        }
    ]);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const contextData = {
        projects,
        setProjects,
    };

    return (
        <div className="container mx-auto flex justify-start gap-4 relative" style={{ background: 'linear-gradient(to right, #4A00E0, #8E2DE2)' }}>
            <div className={`${drawerOpen ? 'w-64 mr-12' : 'absolute w-16 top-0 left-0'} transition-all duration-300 z-10`}>
                <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            </div>
            <div className={`${!drawerOpen && "ml-20"} w-full min-h-screen`}>
                {/* <Outlet /> */}
            </div>
        </div>
    );
};

export default MainLayout;
