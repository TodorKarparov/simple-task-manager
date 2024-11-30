import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./pages/home/HomePage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegistrationPage from "./pages/signup/SignupPage.tsx";
import SigninPage from "./pages/login/login.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signup",
    element: <RegistrationPage />,
  },
  {
    path: "/signin",
    element: <SigninPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
