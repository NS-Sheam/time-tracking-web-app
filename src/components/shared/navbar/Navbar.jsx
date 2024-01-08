
import { FaBars, FaHome, FaTasks, FaCog, FaChartBar, FaXing } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ drawerOpen, toggleDrawer }) => {
    console.log(drawerOpen);

    const menuItems = [
        { icon: <FaHome />, text: 'Dashboard', path: '/' },
        { icon: <FaTasks />, text: 'Projects', path: '/projects' },
        { icon: <FaCog />, text: 'Settings', path: '/settings' },
        { icon: <FaChartBar />, text: 'Analytics', path: '/time-tracking' },
    ];

    const commonClasses = 'text-2xl icon';

    return (
        <div className={`fixed h-screen bg-gray-800 text-white ${drawerOpen ? 'w-64' : 'w-16'} transition-all duration-300 py-2`}>
            <div className="">
                <div className="cursor-pointer p-4 icon" onClick={toggleDrawer}>
                    {
                        drawerOpen ? <FaXing className={commonClasses} /> : <FaBars className={commonClasses} />
                    }
                </div>
            </div>
            <div className=" flex flex-col overflow-hidden">
                {menuItems.map((item, index) => (
                    <Link to={item.path} key={index} className="flex items-center p-4 hover:bg-slate-600 transition-all duration-300 font-bold text-xl">
                        <div className="flex-shrink-0 icon-container">
                            {item.icon}
                        </div>
                        {
                            drawerOpen && <span className="ml-4">{item.text}</span>
                        }
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
