import { Outlet, createBrowserRouter } from "react-router-dom";
import NotFound from "./app/NotFound";
import Splash from "./app/Splash";
import Page from "./Page";
import Tour from "./app/Tour";
import Qr from "./app/Qr";
import Favorite from "./app/Favorite";
import Menu from "./app/Menu";

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
        element: <Qr />
      },
      {
        path: "favorite",
        element: <Favorite />
      },
      {
        path: "menu",
        element: <Menu />
      },

    ]
  }
]);

export default router;