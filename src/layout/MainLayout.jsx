import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import { createContext, useState } from "react";
import TopHeader from "../components/TopHeader";
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


    return (
        <div className="container mx-auto gap-4">
            <div className={`w-64 transition-all duration-300 z-10`}>
                <Navbar />
            </div>
            <div className={`ms-64 min-h-screen p-4`}>
                <TopHeader />
                <div className="bg-slate-200 rounded-md p-2 min-h-screen mt-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
