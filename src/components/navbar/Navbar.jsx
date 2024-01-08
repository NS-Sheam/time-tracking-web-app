import { useState } from 'react';
import { FaBars, FaHome, FaTasks, FaCog, FaChartBar } from 'react-icons/fa';
import './Navbar.css'; // External CSS for additional styling

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className={`flex h-screen bg-gray-800 text-white ${drawerOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
            <div className="flex-shrink-0">
                <div className="cursor-pointer p-4" onClick={toggleDrawer}>
                    <FaBars className="text-2xl icon" />
                </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                <div className="flex items-center p-4">
                    <div className="flex-shrink-0 icon-container">
                        <FaHome className="text-2xl icon" />
                    </div>
                    <span className="ml-2">Dashboard</span>
                </div>
                <div className="flex items-center p-4">
                    <div className="flex-shrink-0 icon-container">
                        <FaTasks className="text-2xl icon" />
                    </div>
                    <span className="ml-2">Tasks</span>
                </div>
                <div className="flex items-center p-4">
                    <div className="flex-shrink-0 icon-container">
                        <FaCog className="text-2xl icon" />
                    </div>
                    <span className="ml-2">Settings</span>
                </div>
                <div className="flex items-center p-4">
                    <div className="flex-shrink-0 icon-container">
                        <FaChartBar className="text-2xl icon" />
                    </div>
                    <span className="ml-2">Analytics</span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
