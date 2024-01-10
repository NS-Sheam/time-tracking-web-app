import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import { useState } from "react";

const MainLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <div className="container mx-auto flex justify-start gap-4 relative" style={{ background: 'linear-gradient(to right, #4A00E0, #8E2DE2)' }}>
            <div className={`${drawerOpen ? 'w-64 mr-12' : 'absolute w-16 top-0 left-0'} transition-all duration-300 z-10`}>
                <Navbar drawerOpen={drawerOpen} toggleDrawer={toggleDrawer} />
            </div>
            <div className={`${!drawerOpen && "ml-20"} w-full min-h-screen`}>
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;
