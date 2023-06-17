import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Base from "./routes/base-page";
import MainPage from "./routes/main-page";
import SignIn from "./routes/signin";
import SignUp from "./routes/signup";
import About from "./routes/about";
import Prices from "./routes/prices";
import Faqs from "./routes/faqs";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Base>
        <MainPage />
      </Base>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
