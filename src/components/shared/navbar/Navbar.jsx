
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
import ActiveLink from '../../ActiveLink';

const Navbar = ({ drawerOpen, toggleDrawer }) => {
    const dispatch = useDispatch();


    const menuItems = [
        { icon: dashboardLogo, text: 'Dashboard', path: '/' },
        { icon: analyticsLogo, text: 'Analytics', path: '/time-tracking' },
        { icon: todoLogo, text: 'Todo', path: '/todo' },
        { icon: reportLogo, text: 'Report', path: '/report' },
        { icon: settingLogo, text: 'Settings', path: '/settings' },
    ];

    const commonClasses = 'text-2xl icon';

    return (
        <div className={`fixed h-screen  text-white w-64 transition-all duration-300 py-2`}>
            <div className=" flex flex-col overflow-hidden p-2 gap-2">
                {menuItems.map((item, index) => (
                    <ActiveLink
                        to={item.path} key={index} title={item.text}>
                        <img src={item.icon} alt="" className={`${item.text !== "Dashboard" ? "nav-logo" : "dashboard-logo"}`} />
                        <p>{item.text}</p>
                    </ActiveLink>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
