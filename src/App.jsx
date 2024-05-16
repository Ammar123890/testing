import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Welcome from "./Welcome/Welcome";
import Checkout from "./Checkout/index";
import SuccesPage from "./Success/SuccesPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/welcomePage",
      element: <Welcome />,
    },
    {
      path: "/checkout/:total",
      element: <Checkout />,
    },
    {
      path: "/success",
      element: <SuccesPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
