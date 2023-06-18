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
import About from "./routes/about";
import Faqs from "./routes/faqs";
import Prices from "./routes/prices";
import Works from "./routes/works";
import Desks from "./routes/desks";
import MainWithSidebar from "./routes/main-with-sidebar";
import Download from "./routes/download";
import Board from "./routes/board";

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
    path: "/about",
    element: (
      <Base>
        <About />
      </Base>
    ),
  },
  {
    path: "/prices",
    element: (
      <Base>
        <Prices />
      </Base>
    ),
  },
  {
    path: "/faqs",
    element: (
      <Base>
        <Faqs />
      </Base>
    ),
  },
  {
    path: "/downloads",
    element: (
      <Base>
        <Download />
      </Base>
    ),
  },
  {
    path: "/main",
    element: <SidebarBase sidebar={<MainSidebar></MainSidebar>}></SidebarBase>,
    children: [
      {
        path: "",
        element: <MainWithSidebar></MainWithSidebar>
      },
      {
        path: "profile/",
        element: <Profile></Profile>
      },
      {
        path: "works/",
        element: <Works></Works>
      },
      {
        path: "desks/",
        element: <Desks></Desks>
      },
      {
        path: "board/",
        element: <Board></Board>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
