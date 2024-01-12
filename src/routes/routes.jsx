import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import ProjectList from "../pages/ProjectList/ProjectList";
import TimerView from "../pages/TimerView/TimerView";
import Settings from "../pages/Settings/Settings";
import Integrations from "../pages/Integrations/Integrations";

import Accessibility from "../pages/Accessibility/Accessibility";
import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Report from "../pages/Report/Report";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/projects", element: <ProjectList /> },
      { path: "/time-tracking", element: <TimerView /> },
      { path: "/settings", element: <Settings /> },
      { path: "/integrations", element: <Integrations /> },
      { path: "/todo", element: <Todo /> },
      { path: "/accessibility", element: <Accessibility /> },
      { path: "/report", element: <Report /> },
    ],
  },
]);

export default routes;
