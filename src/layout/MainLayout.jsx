import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import { createContext, useEffect, useState } from "react";
import TopHeader from "../components/TopHeader";
import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../redux/features/projectSlice";
export const DataContext = createContext(null);

const MainLayout = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);

    const projects = useSelector((state) => state.project);
    const dispatch = useDispatch();

    useEffect(() => {
        const interval = setInterval(() => {
            projects.forEach((project) => {
                if (project.isRunning) {
                    dispatch(updateProject({
                        id: project.id,
                        timeSpent: project.timeSpent + 1,
                        isRunning: project.isRunning,
                    }));
                }
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [projects, dispatch]);


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
                <div className="bg-slate-200 rounded-md py-2 px-5 min-h-screen mt-2">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
