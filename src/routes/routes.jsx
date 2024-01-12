import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import TimerView from "../pages/TimerView/TimerView";
import Settings from "../pages/Settings/Settings";
import { createBrowserRouter } from "react-router-dom";
import Todo from "../pages/Todo/Todo";
import Report from "../pages/Report/Report";
import Auth from "../auth/Auth";

const routes = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>Not Found</h1>,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/time-tracking", element: <TimerView /> },
      { path: "/settings", element: <Settings /> },
      { path: "/todo", element: <Todo /> },
      { path: "/report", element: <Report /> },
    ],
  }
]);

export default routes;
