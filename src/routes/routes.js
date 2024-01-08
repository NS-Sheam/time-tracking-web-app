import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard/Dashboard";

const routes = createBrowserRouter({
  path: "/",
  element: <MainLayout />,
  errorElement: <h1>Not Found</h1>,
  children: [{ path: "/", element: <Dashboard /> }],
});

export default routes;
