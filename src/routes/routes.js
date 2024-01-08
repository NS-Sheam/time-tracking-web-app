import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectList from "../pages/ProjectList/ProjectList";
import ProjectDetails from "../pages/ProjectDetails/ProjectDetails";
import TimerView from "../pages/TimerView/TimerView";
import Settings from "../pages/Settings/Settings";
import Integrations from "../pages/Integrations/Integrations";
import OfflineMode from "../pages/OfflineMode/OfflineMode";
import Accessibility from "../pages/Accessibility/Accessibility";
import UserFeedback from "../pages/UserFeedback/UserFeedback";

const routes = createBrowserRouter({
  path: "/",
  element: <MainLayout />,
  errorElement: <h1>Not Found</h1>,
  children: [
    { path: "/", element: <Dashboard /> },
    { path: "/projects", element: <ProjectList /> },
    { path: "/projects/:projectId", element: <ProjectDetails /> },
    { path: "/time-tracking", element: <TimerView /> },
    { path: "/settings", element: <Settings /> },
    { path: "/integrations", element: <Integrations /> },
    { path: "/offline-mode", element: <OfflineMode /> },
    { path: "/accessibility", element: <Accessibility /> },
    { path: "/user-feedback", element: <UserFeedback /> },
  ],
});

export default routes;
