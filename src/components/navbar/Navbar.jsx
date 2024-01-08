import { useState } from 'react';
import { FaBars, FaHome, FaTasks, FaCog, FaChartBar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css'; // External CSS for additional styling

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const menuItems = [
        { icon: <FaHome />, text: 'Dashboard', path: '/' },
        { icon: <FaTasks />, text: 'Projects', path: '/projects' },
        { icon: <FaCog />, text: 'Settings', path: '/settings' },
        { icon: <FaChartBar />, text: 'Analytics', path: '/time-tracking' },
    ];

    const commonClasses = 'text-2xl icon';

    return (
        <div className={`flex h-screen bg-gray-800 text-white ${drawerOpen ? 'w-64' : 'w-16'} transition-all duration-300`}>
            <div className="flex-shrink-0">
                <div className="cursor-pointer p-4" onClick={toggleDrawer}>
                    <FaBars className={commonClasses} />
                </div>
            </div>
            <div className="flex-1 flex flex-col overflow-hidden">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className="flex items-center p-4">
                        <div className="flex-shrink-0 icon-container">
                            {item.icon}
                        </div>
                        <span className="ml-2">{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
