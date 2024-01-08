import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
    return (
        <div className="container mx-auto grid grid-cols-5 gap-4">
            <div className="col-span-1">
                <Navbar />
            </div>
            <div className="col-span-4">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;