import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "./app/NotFound";
import Splash from "./app/Splash";
import Page from "./Page";
import Tour from "./app/Tour";
import Qr from "./app/Qr";
import Favorite from "./app/Favorite";
import Menu from "./app/Menu";
import TourDetail from "./app/TourDetail";
import SignUp from "./app/SignUp";
import SignIn from "./app/SignIn";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedLogin from "./components/ProtectedLogin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Splash />,
      },
      {
        path: "home",
        element: <Page />,
      },
      {
        path: "tour",
        element: <Tour />
      },
      {
        path: "qr",
        element: <ProtectedRoute><Qr /></ProtectedRoute>
      },
      {
        path: "favorite",
        element: <ProtectedRoute><Favorite /></ProtectedRoute>
      },
      {
        path: "menu",
        element: <ProtectedRoute><Menu /></ProtectedRoute>
      },
      {
        path: "tour/:id",
        element: <TourDetail />
      },
      {
        path: "signup",
        element: <ProtectedLogin><SignUp /></ProtectedLogin>
      },
      {
        path: "signin",
        element: <ProtectedLogin><SignIn /></ProtectedLogin>
      },
    ]
  }
]);

export default router;