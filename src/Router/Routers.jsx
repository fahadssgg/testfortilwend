import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import MA from "../components/MA";
import ErrorPage from "../components/erorr-page";

export default function Routers() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/maaaaaaaaaa",
      element: <MA />,
    },
  ]);
  return <RouterProvider router={router} />;
}
