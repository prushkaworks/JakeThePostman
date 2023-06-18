import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Base from "./routes/base-page";
import MainPage from "./routes/main-page";
import SignIn from "./routes/signin";
import { SignUp } from "./routes/signup";
import SidebarBase from "./routes/sidebar-base";
import MainSidebar from "./routes/main-sidebar";
import Profile from "./routes/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Base><MainPage/></Base>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/signin",
    element: <SignIn/>
  },
  {
    path: "/signup",
    element: <SignUp/>
  },
  {
    path: "/main",
    element: <SidebarBase sidebar={<MainSidebar></MainSidebar>}></SidebarBase>,
    children: [
      {
        path: "profile/",
        element: <Profile></Profile>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
