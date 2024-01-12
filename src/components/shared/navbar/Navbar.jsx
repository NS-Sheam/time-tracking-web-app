import dashboardLogo from "../../../assets/icons/dashboard.png"
import analyticsLogo from "../../../assets/icons/analytics.png"
import todoLogo from "../../../assets/icons/todo.png"
import reportLogo from "../../../assets/icons/report.png"
import settingLogo from "../../../assets/icons/setting.png"
import './Navbar.css';
import ActiveLink from '../../ActiveLink';
import { Link } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "../../../layout/MainLayout"
import { FaUser } from "react-icons/fa"
import { AuthContext } from "../../../provider/AuthProvider"

const Navbar = () => {

    const { logOut } = useContext(AuthContext);
    const { darkMode } = useContext(DataContext);
    const menuItems = [
        { icon: dashboardLogo, text: 'Dashboard', path: '/' },
        { icon: analyticsLogo, text: 'Analytics', path: '/time-tracking' },
        { icon: todoLogo, text: 'Todo', path: '/todo' },
        { icon: reportLogo, text: 'Report', path: '/report' },
        { icon: settingLogo, text: 'Settings', path: '/settings' },
    ];

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className={`${darkMode ? "bg-white" : "bg-black"} fixed h-screen  w-64 transition-all duration-300 `}>
            <div className={`${!darkMode ? "bg-white" : "bg-black"} h-full py-2`}>
                <div className=" flex flex-col overflow-hidden p-2 gap-2">
                    <Link to="/" className={`text-3xl font-extrabold text-center ${!darkMode ? "text-black" : "text-white"}`}>
                        Count <span className="text-yellow-400">M</span>e
                    </Link>
                    {menuItems.map((item, index) => (
                        <ActiveLink
                            to={item.path} key={index} title={item.text}>
                            <img src={item.icon} alt="" className={`${item.text !== "Dashboard" ? "nav-logo" : "dashboard-logo"}`} />
                            <p>{item.text}</p>
                        </ActiveLink>
                    ))}
                    <button
                        onClick={handleLogOut}
                        className="bg-yellow-400 text-black font-semibold rounded-md p-2 flex items-center justify-center gap-2"><FaUser /> Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
