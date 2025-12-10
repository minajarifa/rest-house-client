import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import RoomDetails from "../Pages/RoomDetails/RoomDetails";
import DashboardLayout from "../Layouts/DashboardLayout";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          // <PrivateRoute>
            <Home />
          // </PrivateRoute>
        ),
      },
       {
        path: '/room/:id',
        element: (
          <PrivateRoute>
            <RoomDetails />
           </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Dashboard",
        element: (
          // <PrivateRoute>
            <p />
          // </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);
export default router;
