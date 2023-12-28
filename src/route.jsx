import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./Component/LandingPage";
import Dashboard from "./Component/Dashboard";

const route = createBrowserRouter([
  {
    path: "/",
    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default route;
