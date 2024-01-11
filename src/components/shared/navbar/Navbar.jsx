
import { FaBars, FaHome, FaTasks, FaCog, FaChartBar, FaXing } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import dashboardLogo from "../../../assets/icons/dashboard.png"
import timesheetLogo from "../../../assets/icons/time-schedule.png"
import analyticsLogo from "../../../assets/icons/analytics.png"
import todoLogo from "../../../assets/icons/todo.png"
import reportLogo from "../../../assets/icons/report.png"
import settingLogo from "../../../assets/icons/setting.png"
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { setTitle } from '../../../redux/features/headerSlice';

const Navbar = ({ drawerOpen, toggleDrawer }) => {
    const dispatch = useDispatch();


    const menuItems = [
        { icon: dashboardLogo, text: 'Dashboard', path: '/' },
        { icon: analyticsLogo, text: 'Analytics', path: '/time-tracking' },
        { icon: timesheetLogo, text: 'Timesheets', path: '/timesheet' },
        { icon: todoLogo, text: 'Todo', path: '/todo' },
        { icon: reportLogo, text: 'Report', path: '/report' },
        { icon: settingLogo, text: 'Settings', path: '/settings' },
    ];

    const commonClasses = 'text-2xl icon';

    return (
        <div className={`fixed h-screen bg-slate-200 text-white w-64 transition-all duration-300 py-2`}>
            <div className=" flex flex-col overflow-hidden p-2">
                {menuItems.map((item, index) => (
                    <Link
                        onClick={() => dispatch(setTitle(item.text))}
                        to={item.path} key={index} className="flex items-center p-4 gap-4 text-black hover:bg-black hover:text-white transition-all duration-300 font-semibold rounded-md">
                        <img src={item.icon} alt="" className=' ' />
                        <p>{item.text}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
